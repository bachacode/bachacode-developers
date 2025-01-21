import React from "react";
import PageSectionWrapper from "@/components/PageSectionWrapper";
import NavButton from "@/components/NavButton";
import Image from "next/image";
import ncWomanTypingOnMachine from "../../../../public/images/nc-woman-typing-on-machine.png";
import ServiceCard from "@/components/ServiceCard";
import {
  faLightbulb,
  faCheckCircle,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function SobreNosotrosPage() {
  return (
    <main className="w-full">
      {/* Hero section */}
      <div className="w-full bg-white flex flex-col items-center pt-36 px-8 pb-12">
        <div className="container relative items-center flex md:space-x-8  lg:min-h-[600px]">
          {/* Image */}
          <div className="absolute md:relative flex flex-col h-full items-center text-center w-full md:w-1/2 md:right-0 px-6 md:px-0 opacity-20 md:opacity-100">
            <Image
              src={ncWomanTypingOnMachine}
              alt="OC on the laptop hero image"
              className="max-w-full max-h-full object-contain"
              style={{ height: "auto", width: "100%" }}
            />
          </div>

          {/* Title & CTA */}
          <div className="flex flex-col items-center text-center space-y-6 w-full md:w-1/2">
            <div className="px-6 md:px-3">
              <h1
                id="hero"
                className="font-bold text-4xl lg:text-5xl tracking-widest pb-3 text-zinc-900"
              >
                Sobre Nosotros - Bachacode Developers
              </h1>
              <p className="text-xl text-zinc-800">
                En Bachacode Developers, nos dedicamos a ofrecer soluciones
                innovadoras y de alta calidad en el desarrollo web. Nuestro
                equipo de expertos trabaja incansablemente para garantizar la
                satisfacción de nuestros clientes, brindando servicios
                personalizados y adaptados a las necesidades específicas de cada
                proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our values section */}
      <PageSectionWrapper
        titleId="our-values"
        titleName="Nuestros Valores"
        subtitle="La ética que nos destaca sobre la competencia"
        altBackground
      >
        <div className="flex flex-col md:flex-row md:space-x-8">
          <ServiceCard
            icon={faLightbulb}
            title="Innovación"
            iconColor="text-yellow-500"
          >
            Nos esforzamos por estar a la vanguardia de la tecnología,
            implementando soluciones innovadoras que impulsen el éxito de
            nuestros clientes.
          </ServiceCard>
          <ServiceCard
            icon={faCheckCircle}
            title="Calidad"
            iconColor="text-green-500"
          >
            La calidad es nuestra prioridad. Nos comprometemos a entregar
            productos y servicios que superen las expectativas de nuestros
            clientes.
          </ServiceCard>
          <ServiceCard
            icon={faHandshake}
            title="Compromiso"
            iconColor="text-blue-500"
          >
            Estamos dedicados a construir relaciones duraderas con nuestros
            clientes, basadas en la confianza, la transparencia y el compromiso
            mutuo.
          </ServiceCard>
        </div>
      </PageSectionWrapper>
    </main>
  );
}
