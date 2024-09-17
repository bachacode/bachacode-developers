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
    <div className="p-6 bg-white text-gray-800">
      <h1 className="text-2xl font-bold text-primary mb-4">
        Nuevo mensaje de contacto
      </h1>
      <p className="mb-2">
        <span className="font-semibold">Nombre:</span> ${name}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Empresa:</span> ${
          company ? company : "Sin empresa"
        }
      </p>
      <p className="mb-2">
        <span className="font-semibold">Correo electrónico:</span> ${email}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Asunto:</span> ${subject}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Mensaje:</span> ${
          message ? message : "Sin mensaje"
        }
      </p>
    </div>
  `;
}
