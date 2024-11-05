import React from "react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="flex justify-center w-full bg-teal-blue-accent-950 py-6 md:py-20">
      <div className="flex flex-col items-center md:items-start w-3/4 md:w-1/3 text-balance space-y-6 text-2xl">
        <p className="text-white font-semi-bold">
          Creemos en hacer posible cualquier proyecto que nuestros clientes
          tengan en mente, ¿estás interesado en construir tu presencia en línea?
          {"\n"}
          <strong className="text-primary">Trabaja con nosotros.</strong>
        </p>

        <div>
          <Link
            href="/contacto"
            className="text-white border-4 border-white rounded-md uppercase font-semibold z-10 transition-colors hover:bg-primary duration-300 text-base px-8 py-3.5"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
}
