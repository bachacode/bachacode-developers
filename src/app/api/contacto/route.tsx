import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import generateContactEmail from "@/utils/emailTemplate"; // Importa la función desde tu archivo de utilidades

// Handles POST requests to /api/contacto
export async function POST(request: NextRequest) {
  const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;

  try {
    const { gReCaptchaToken, name, company, email, subject, message } =
      await request.json();
    const formData = `secret=${secretKey}&response=${gReCaptchaToken}`;

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const captcha = await res.json();
    console.log(captcha);
    if (captcha && captcha.success && captcha.score > 0.5) {
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
        message: "¡El correo ha sido enviado exitosamente!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message:
          "Ha fallado la validación de reCAPTCHA, intentelo nuevamente mas tarde.",
      });
    }
  } catch (err) {
    return NextResponse.json(
      { message: "¡Ha ocurrido un error enviado el correo!", error: err },
      { status: 500 }
    );
  }
}
