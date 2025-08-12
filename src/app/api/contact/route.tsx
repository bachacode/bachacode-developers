import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import generateContactEmail from "@/utils/emailTemplate";
import { validateTurnstileToken } from "next-turnstile";
import { v4 } from "uuid"
import { getLocale, getTranslations } from "next-intl/server";

export async function POST(request: NextRequest) {
  const { turnstileToken, name, company, email, subject, message } = await request.json();

  return NextResponse.json({
    success: true,
    message: "This form is disabled at the moment, contact us from other sources!",
  });

  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "contact.form_section.form" });

  const validationResponse = await validateTurnstileToken({
    token: turnstileToken,
    secretKey: process.env.TURNSTILE_SECRET_KEY!,
    idempotencyKey: v4(),
    sandbox: process.env.NODE_ENV === "development",
  })

  if (!validationResponse.success) {
    return NextResponse.json({
      success: false,
      message: t("errors.captchaTokenError"),
    }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: process.env.SEND_GRID_API_KEY,
    },
  });

  const html = generateContactEmail({
    name,
    company,
    email,
    subject,
    message,
  });

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
}

