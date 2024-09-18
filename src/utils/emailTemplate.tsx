interface EmailTemplateProps {
  name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
}

export default function generateContactEmail({
  name,
  company,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return `
     <div style="font-family: Arial, sans-serif; color: #333;">
      <div style="background-color: #f8f8f8; padding: 20px;">
        <h2 style="color: #1B4965;">Nuevo Mensaje de Contacto</h2>
        <div style="background-color: #fff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <p style="color: #1B4965; font-weight: bold;">Nombre completo:</p>
          <p>${name}</p>
          <p style="color: #1B4965; font-weight: bold;">Compañia:</p>
          <p>${company ?? "Sin compañia"}</p>
          <p style="color: #1B4965; font-weight: bold;">Correo electrónico:</p>
          <p>${email}</p>
          <p style="color: #1B4965; font-weight: bold;">Asunto:</p>
          <p>${subject}</p>
          <p style="color: #1B4965; font-weight: bold;">Mensaje:</p>
          <p>${message.trim() != "" ? message : "Sin mensaje"}</p>
        </div>
        <p style="color: #FF5C10; text-align: center;">¡Gracias por comunicarte con nosotros!</p>
      </div>
    </div>
  `;
}
