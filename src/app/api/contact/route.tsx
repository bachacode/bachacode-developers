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
  const result = contactFormSchema.safeParse(body);
  const locale = request.nextUrl.searchParams.get("locale") || "en";

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
    namespace: "contact.form_section.form",
  });

  const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;
  const smtpUsername = process.env.SMTP_USERNAME;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (
    !turnstileSecretKey ||
    !smtpUsername ||
    !smtpPassword ||
    !result.success
  ) {
    return NextResponse.json(
      {
        success: false,
        message: t("serverError"),
      },
      { status: 500 },
    );
  }

  const { name, company, email, subject, message } = result.data;

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
        message: t("errors.captchaTokenError"),
      },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "mail.smtp2go.com",
    port: 2525,
    auth: {
      user: smtpUsername,
      pass: smtpPassword,
    },
  });

  const html = generateContactEmail({
    name,
    company,
    email,
    subject,
    message,
  });

  try {
    await transporter.sendMail({
      from: "support@bachacode.com", // verified sender email
      to: "support@bachacode.com", // recipient email
      replyTo: email,
      subject: `${subject} - ${company ?? "Sin compañia"} - ${name}`, // Subject line
      html, // html body
    });

    return NextResponse.json({
      success: true,
      message: t("success"),
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: t("serverError"),
      },
      { status: 500 },
    );
  }
}
