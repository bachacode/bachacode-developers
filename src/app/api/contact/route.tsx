import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import generateContactEmail from "@/utils/emailTemplate";
import { validateTurnstileToken } from "next-turnstile";
import { v4 } from "uuid";
import { getTranslations } from "next-intl/server";
import { contactFormSchema } from "@/lib/schemas/contactFormSchema";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export async function POST(request: NextRequest) {
  const { turnstileToken, ...body } = await request.json();
  const parsedForm = contactFormSchema.safeParse(body);
  const locale = request.nextUrl.searchParams.get("locale") || "en";

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
    namespace: "contact.form_section.form",
  });

  if (!parsedForm.success) {
    return NextResponse.json(
      { success: false, message: t("server.bad_request") },
      { status: 400 },
    );
  }

  const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUsername = process.env.SMTP_USERNAME;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (
    !turnstileSecretKey ||
    !smtpHost ||
    !smtpPort ||
    !smtpUsername ||
    !smtpPassword
  ) {
    return NextResponse.json(
      {
        success: false,
        message: t("server.internal"),
      },
      { status: 500 },
    );
  }

  const validationResponse = await validateTurnstileToken({
    token: turnstileToken,
    secretKey: turnstileSecretKey,
    idempotencyKey: v4(),
    sandbox: process.env.NODE_ENV === "development",
  });

  if (!validationResponse.success) {
    return NextResponse.json(
      {
        success: false,
        message: t("server.bad_request"),
      },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    auth: {
      user: smtpUsername,
      pass: smtpPassword,
    },
  });

  const { name, company, email, subject, message } = parsedForm.data;

  const html = generateContactEmail({
    name,
    company,
    email,
    subject,
    message,
  });

  const supportEmail =
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@bachacode.com";

  try {
    await transporter.sendMail({
      from: `"Bachacode Developers" <${supportEmail}>`,
      to: supportEmail,
      replyTo: email,
      subject: `${subject} - ${company ?? "Sin compañia"} - ${name}`,
      html,
    });

    return NextResponse.json({
      success: true,
      message: t("server.success"),
    });
  } catch (err) {
    console.error("Email sending failed:", err);
    return NextResponse.json(
      {
        success: false,
        message: t("server.internal"),
      },
      { status: 500 },
    );
  }
}
