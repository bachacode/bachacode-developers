import React from "react";
import Image from "next/image";
import ncWomanTypingOnMachine from "../../../../public/images/nc-woman-typing-on-machine.png";
import generateTitle from "@/utils/generateTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: generateTitle("Portafolio"),
};

export default function Portafolio() {
  return (
    <main className="w-full">
      {/* Hero section */}
      <div className="flex w-full flex-col items-center bg-orange-primary-50 px-8 pb-12 pt-36">
        <div className="container flex items-center justify-center md:space-x-8 lg:min-h-[300px]">
          {/* Title & CTA */}
          <div className="flex w-3/4 flex-col space-y-6 text-center">
            <h1
              id="hero"
              className="pb-3 text-4xl font-bold tracking-widest text-zinc-900 lg:text-5xl"
            >
              Nuestro Portafolio
            </h1>
            <p className="text-xl text-zinc-800">
              Descubre una selección de nuestros proyectos más destacados, que
              reflejan nuestro compromiso con la innovación y la calidad en el
              desarrollo web.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
