import React from "react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="flex w-full justify-center bg-teal-blue-accent-950 py-6 md:py-20">
      <div className="flex w-3/4 flex-col items-center space-y-6 text-balance text-2xl md:w-1/3 md:items-start">
        <p className="font-semi-bold text-white">
          Creemos en hacer posible cualquier proyecto que nuestros clientes
          tengan en mente, ¿estás interesado en construir tu presencia en línea?
          {"\n"}
          <strong className="text-primary">Trabaja con nosotros.</strong>
        </p>

        <div>
          <Link
            href="/contacto"
            className="z-10 rounded-md border-4 border-white px-8 py-3.5 text-base font-semibold uppercase text-white transition-colors duration-300 hover:bg-primary"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
}
