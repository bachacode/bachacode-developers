import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface PriceCardProps {
  title: string;
  subtitle: string;
  price: string;
  benefits: {
    text: string;
    icon: IconProp;
  }[];
}

export default function PriceCard({
  title,
  subtitle,
  price,
  benefits,
}: PriceCardProps) {
  return (
    <div className="w-full rounded-lg border border-zinc-800 bg-white p-6 text-zinc-800 shadow-lg md:w-1/3">
      <h3 className="mb-4 text-center text-xl font-semibold">{title}</h3>
      <p className="mb-6 text-center text-zinc-800">{subtitle}</p>
      <div className="mb-6 text-center">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-lg font-medium">/mes</span>
      </div>
      <h4 className="pb-2 text-lg font-semibold">Especificaciones:</h4>
      <ul className="mb-6 space-y-2">
        {benefits.map((benefit) => (
          <li key={benefit.text} className="flex items-center">
            <FontAwesomeIcon
              icon={benefit.icon}
              className="mr-2 h-auto w-full max-w-4 text-accent"
            ></FontAwesomeIcon>
            {benefit.text}
          </li>
        ))}
      </ul>
      <h4 className="pb-2 text-lg font-semibold">Incluye:</h4>
      <ul className="mb-6 space-y-2 pb-4">
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="mr-2 h-auto w-full max-w-4 text-accent"
          ></FontAwesomeIcon>
          Gestión profesional 24/7
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="mr-2 h-auto w-full max-w-4 text-accent"
          ></FontAwesomeIcon>
          SSL Gratis sin coste añadido
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="mr-2 h-auto w-full max-w-4 text-accent"
          ></FontAwesomeIcon>
          Integración con Cloudflare gratuita
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="mr-2 h-auto w-full max-w-4 text-accent"
          ></FontAwesomeIcon>
          Dominio incluido en el precio
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="mr-2 h-auto w-full max-w-4 text-accent"
          ></FontAwesomeIcon>
          Correos personalizados (con el dominio incluido)
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="mr-2 h-auto w-full max-w-4 text-accent"
          ></FontAwesomeIcon>
          99.9% de uptime del servidor
        </li>
      </ul>
      {/* <div className="w-full text-center">
        <Link
          href="/contacto"
          className="transition-colors duration-200 bg-orange-primary-500 hover:bg-orange-primary-700 text-white py-3 px-6 rounded-lg font-semibold"
        >
          Contáctanos
        </Link>
      </div> */}
    </div>
  );
}
