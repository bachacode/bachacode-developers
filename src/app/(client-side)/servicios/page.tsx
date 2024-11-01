import NavButton from "@/components/NavButton";
import Image from "next/image";
import React from "react";
import ocOnTheLaptop from "../../../../public/images/oc-on-the-laptop.svg";
import ocTakingNote from "../../../../public/images/oc-taking-note.svg";
import ServiceCardAlt from "@/components/ServiceCardAlt";
import {
  faCode,
  faHeadphones,
  faMessage,
  faPalette,
  faServer,
  faShield,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import AdvantageCard from "@/components/AdvantageCard";

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

      {/* Services section */}
      <div className="w-full bg-white flex justify-center">
        <div className="container py-8 items-center flex flex-col space-y-3">
          {/* Title*/}
          <div className="flex flex-col items-center text-center w-full md:w-1/2 space-y-2">
            <h2
              id="services"
              className="font-bold text-3xl md:text-4xl tracking-widest text-zinc-900"
            >
              Impulsa tu Presencia Digital
            </h2>
            <p className="text-lg text-zinc-800">
              Soluciones Personalizadas que Transforman tu Negocio
            </p>
          </div>

          {/* Service cards */}
          <div className="flex flex-col items-center md:flex-row flex-wrap md:items-stretch">
            <ServiceCardAlt
              title="Sitios Web Estaticos"
              icon={faWindowRestore}
              iconColor="text-primary"
            >
              Desarrolla sitios web personalizados con contenido estático,
              perfectos para proyectos pequeños que no requieren actualizaciones
              constantes, como landing pages o catálogos. Estos sitios aseguran
              rapidez, seguridad y eficiencia para contenido estable y
              atractivo.
            </ServiceCardAlt>

            <ServiceCardAlt
              title="Sitios WordPress"
              icon={faWordpress}
              iconColor="text-primary"
            >
              Desarrollo de sitios web con{" "}
              <strong className="text-accent">WordPress</strong>, ofreciendo
              control total del contenido sin necesidad de programación. Ideal
              para proyectos medianos, como blogs o portafolios, brinda
              flexibilidad, escalabilidad y fácil personalización para cualquier
              necesidad.
            </ServiceCardAlt>

            <ServiceCardAlt
              title="Aplicaciones Web"
              icon={faCode}
              iconColor="text-primary"
            >
              Creamos aplicaciones web a medida con funcionalidades avanzadas,
              como pagos en línea, sistemas de recomendación, chat en vivo y
              análisis de datos. Perfectas para proyectos medianos y grandes,
              como tiendas en línea, plataformas educativas y sistemas de
              gestión empresarial.
            </ServiceCardAlt>

            <ServiceCardAlt
              title="Consultoría y Soporte"
              icon={faMessage}
              iconColor="text-primary"
            >
              Si tienes un proyecto que deseas actualizar, nosotros planificamos
              todo el proceso por ti. Desde la estimación de tiempos hasta la
              elaboración de presupuestos, ofrecemos soluciones en las
              tecnologías que dominamos, garantizando un desarrollo ágil y
              acorde a tus necesidades.
            </ServiceCardAlt>
          </div>
        </div>
      </div>

      <div className="w-full bg-orange-primary-50 flex justify-center">
        <div className="container py-8 items-center flex flex-col space-y-3">
          {/* Title*/}
          <div className="flex flex-col items-center text-center w-full md:w-1/2 space-y-2">
            <h2
              id="advantages"
              className="font-bold text-3xl md:text-4xl tracking-widest text-zinc-900"
            >
              ¿Qué te ofrecemos?
            </h2>
            <p className="text-lg text-zinc-800">
              Ventajas exclusivas de nuestros clientes
            </p>
          </div>

          <div className="flex relative w-full">
            {/* Image */}
            <div className="absolute h-full lg:relative flex flex-col items-center justify-center w-full lg:w-1/2 lg:left-0 px-6 md:px-0 opacity-20 lg:opacity-100">
              <Image
                src={ocTakingNote}
                height={152}
                width={145}
                alt="Header bachacode logo"
                style={{ height: "auto", width: "100%" }}
              />
            </div>

            {/* Advantages List */}
            <div className="flex flex-col justify-stretch gap-6 w-full md:px-12 lg:w-1/2 p-6 relative z-10">
              <AdvantageCard
                title="Hosting Profesional"
                icon={faServer}
                iconColor="text-accent"
              >
                No tendrás que preocuparte más por gestionar tu propio sitio
                web, nosotros lo haremos por ti. Te ofrecemos un servicio de
                hosting escalable que se adapta a tus necesidades.
              </AdvantageCard>
              <AdvantageCard
                title="Diseños Modernos"
                icon={faPalette}
                iconColor="text-accent"
              >
                Nos encargamos de darle a tu sitio web un diseño atractivo que
                refleje lo que busca transmitir tu negocio. Si esta página te
                resulta atractiva, ¡obtendrás una calidad igual o superior en tu
                proyecto!
              </AdvantageCard>

              <AdvantageCard
                title="Seguridad Garantizada"
                icon={faShield}
                iconColor="text-accent"
              >
                No corras riesgos innecesarios: nuestros desarrolladores se
                encargarán de integrar todas las medidas de seguridad necesarias
                para proteger tu sitio web.
              </AdvantageCard>

              <AdvantageCard
                title="Soporte Eficaz"
                icon={faHeadphones}
                iconColor="text-accent"
              >
                Estamos preparados para atender cualquier urgencia que requiera
                soporte técnico. ¡Te garantizamos mantener tu sitio web activo
                las 24 horas!
              </AdvantageCard>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex justify-center w-full bg-black py-6 md:py-20">
        <div className="flex flex-col w-3/4 md:w-1/3 text-balance space-y-6">
          <p className="text-white font-semi-bold text-2xl">
            Creemos en hacer posible cualquier proyecto que nuestros clientes
            tengan en mente, ¿estás interesado en construir tu presencia en
            línea?
            {"\n"}
            <strong className="text-primary text-4xl">
              Trabaja con nosotros.
            </strong>
          </p>

          <NavButton
            href="/contacto"
            className="text-white border-white max-w-max transition-colors hover:text-primary hover:border-gray-400"
          >
            Contáctanos
          </NavButton>
        </div>
      </div>
    </main>
  );
}
