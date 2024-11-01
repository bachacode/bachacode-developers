import NavButton from "@/components/NavButton";
import Image from "next/image";
import React from "react";
import ocOnTheLaptop from "../../../../public/images/oc-on-the-laptop.svg";

export default function Servicios() {
  return (
    <main className="w-full">
      {/* Hero section */}
      <div className="w-full bg-orange-primary-50 flex flex-col items-center pt-28 pb-12">
        <div className="container relative min-h-screen py-12 items-center flex md:space-x-8">
          {/* Title & CTA */}
          <div className="flex flex-col items-center text-center space-y-6 w-full md:w-1/2">
            <div className="px-6 md:px-3">
              <h1
                id="hero"
                className="font-bold text-4xl lg:text-5xl tracking-widest pb-3 text-zinc-900"
              >
                Servicios de Desarrollo y Consultoría Web
              </h1>
              <p className="text-xl text-zinc-800">
                Soluciones digitales a medida para impulsar tu éxito
              </p>
            </div>
            <NavButton href="/contacto">Agenda una reunión</NavButton>
          </div>

          {/* Image */}
          <div className="absolute flex flex-col items-center text-center w-full md:w-1/2 md:right-0 px-6 md:px-0 opacity-20 md:opacity-100">
            <Image
              src={ocOnTheLaptop}
              height={401}
              width={424}
              alt="Header bachacode logo"
              style={{ height: "auto", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
