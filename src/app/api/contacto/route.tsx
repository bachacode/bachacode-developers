import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import generateContactEmail from "@/utils/emailTemplate"; // Importa la función desde tu archivo de utilidades

// Handles POST requests to /api/contacto
export async function POST(request: NextRequest) {
  try {
    const { name, company, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey",
        pass: process.env.NEXT_PUBLIC_SEND_GRID_API_KEY,
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
      subject, // Subject line
      html, // html body
    });

    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
