import NavButton from "@/components/common/NavButton";
import Image from "next/image";
import React from "react";
import ocOnTheLaptop from "../../../../public/images/oc-on-the-laptop.svg";
import ocTakingNote from "../../../../public/images/oc-taking-note.svg";
import ServiceCardAlt from "@/components/cards/ServiceCardAlt";
import {
  faCheckCircle,
  faCode,
  faHardDrive,
  faHeadphones,
  faMemory,
  faMessage,
  faMicrochip,
  faNetworkWired,
  faPalette,
  faServer,
  faShield,
  faWindowRestore,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faLaravel,
  faPhp,
  faReact,
  faVuejs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import AdvantageCard from "@/components/cards/AdvantageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import PageSectionWrapper from "@/components/layout/PageSectionWrapper";
import { Metadata } from "next";
import generateTitle from "@/utils/generateTitle";
import ContactSection from "@/components/sections/ContactSection";

interface TechCardProps {
  icon: IconDefinition;
  className: string;
  title: string;
}

function TechCard({ icon, className, title }: TechCardProps) {
  return (
    <div className="group flex h-32 w-32 flex-col items-center justify-center rounded-md border border-accent shadow-md">
      <FontAwesomeIcon
        icon={icon}
        className={`h-20 w-20 text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 ${className}`}
        title={title}
      ></FontAwesomeIcon>
    </div>
  );
}

interface PriceCardProps {
  title: string;
  subtitle: string;
  price: string;
  benefits: {
    text: string;
    icon: IconDefinition;
  }[];
}

function PriceCard({ title, subtitle, price, benefits }: PriceCardProps) {
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

export const metadata: Metadata = {
  title: generateTitle("Servicios"),
};

export default function Servicios() {
  return (
    <main className="w-full">
      {/* Hero section */}
      <div className="flex w-full flex-col items-center bg-orange-primary-50 px-8 pb-12 pt-36">
        <div className="container relative flex items-center md:space-x-8 lg:min-h-[600px]">
          {/* Title & CTA */}
          <div className="flex w-full flex-col items-center space-y-6 text-center md:w-1/2">
            <div className="px-6 md:px-3">
              <h1
                id="hero"
                className="pb-3 text-4xl font-bold tracking-widest text-zinc-900 lg:text-5xl"
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
          <div className="absolute flex h-full w-full flex-col items-center px-6 text-center opacity-20 md:right-0 md:w-1/2 md:px-0 md:opacity-100">
            <Image
              src={ocOnTheLaptop}
              alt="OC on the laptop hero image"
              className="max-h-full max-w-full object-contain"
              style={{ height: "auto", width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <PageSectionWrapper
        titleId="services"
        titleName="Impulsa tu presencia digital"
        subtitle="Soluciones personalizadas que transforman tu negocio"
      >
        {/* Service cards */}
        <div className="grid gap-6 px-2 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCardAlt
            title="Sitios Web Estaticos"
            icon={faWindowRestore}
            iconColor="text-primary"
          >
            Desarrolla sitios web personalizados con contenido estático,
            perfectos para proyectos pequeños que no requieren actualizaciones
            constantes, como landing pages o catálogos. Estos sitios aseguran
            rapidez, seguridad y eficiencia para contenido estable y atractivo.
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
            análisis de datos. Perfectas para proyectos medianos y grandes, como
            tiendas en línea, plataformas educativas y sistemas de gestión
            empresarial.
          </ServiceCardAlt>

          <ServiceCardAlt
            title="Consultoría y Soporte"
            icon={faMessage}
            iconColor="text-primary"
          >
            Si tienes un proyecto que deseas actualizar, nosotros planificamos
            todo el proceso por ti. Desde la estimación de tiempos hasta la
            elaboración de presupuestos, ofrecemos soluciones en las tecnologías
            que dominamos, garantizando un desarrollo ágil y acorde a tus
            necesidades.
          </ServiceCardAlt>
        </div>
      </PageSectionWrapper>

      {/* Advantages Section */}
      <PageSectionWrapper
        titleId="advantages"
        titleName="¿Qué te ofrecemos?"
        subtitle="Ventajas exclusivas de nuestros clientes"
        altBackground
      >
        <div className="relative flex w-full">
          {/* Image */}
          <div className="absolute flex h-full w-full flex-col items-center justify-center px-6 opacity-20 md:px-0 lg:relative lg:left-0 lg:w-1/2 lg:opacity-100">
            <Image
              src={ocTakingNote}
              height={152}
              width={145}
              alt="Header bachacode logo"
              style={{ height: "auto", width: "100%" }}
            />
          </div>

          {/* Advantages List */}
          <div className="relative z-10 flex w-full flex-col justify-stretch gap-6 px-2 md:px-12 lg:w-1/2">
            <AdvantageCard
              title="Hosting Profesional"
              icon={faServer}
              iconColor="text-accent"
            >
              No tendrás que preocuparte más por gestionar tu propio sitio web,
              nosotros lo haremos por ti. Te ofrecemos un servicio de hosting
              escalable que se adapta a tus necesidades.
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
              soporte técnico. ¡Te garantizamos mantener tu sitio web activo las
              24 horas!
            </AdvantageCard>
          </div>
        </div>
      </PageSectionWrapper>

      {/* Technologies section */}
      <PageSectionWrapper
        titleId="technology"
        titleName="¿Qué tecnologías utilizamos?"
        subtitle="Trabajamos con las mejores tecnologías para tus proyectos"
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {/* Tech Box */}
          <TechCard
            icon={faHtml5}
            className="group-hover:text-orange-600"
            title="HTML"
          ></TechCard>
          <TechCard
            icon={faCss3Alt}
            className="group-hover:text-blue-600"
            title="CSS"
          ></TechCard>
          <TechCard
            icon={faJsSquare}
            className="group-hover:text-yellow-500"
            title="JavaScript"
          ></TechCard>
          <TechCard
            icon={faReact}
            className="group-hover:text-blue-400"
            title="React.Js"
          ></TechCard>
          <TechCard
            icon={faVuejs}
            className="group-hover:text-emerald-500"
            title="Vue.Js"
          ></TechCard>
          <TechCard
            icon={faLaravel}
            className="group-hover:text-red-600"
            title="Laravel"
          ></TechCard>
          <TechCard
            icon={faWordpress}
            className="group-hover:text-blue-500"
            title="WordPress"
          ></TechCard>
          <TechCard
            icon={faPhp}
            title="PHP"
            className="group-hover:text-indigo-500"
          ></TechCard>
        </div>
      </PageSectionWrapper>

      {/* Hosting section */}
      <PageSectionWrapper
        titleId="hosting"
        titleName="Planes de hosting"
        subtitle="¡Aloja tu proyecto con uno de nuestros planes flexibles!"
        altBackground
      >
        {/* Hosting plans */}
        <div className="flex flex-col gap-4 px-2 md:flex-row">
          <PriceCard
            title="Plan Básico"
            subtitle="Ideal para proyectos personales y sitios web pequeños."
            price="$15"
            benefits={[
              {
                icon: faMemory,
                text: "1GB Ram",
              },
              {
                icon: faMicrochip,
                text: "1 Core CPU",
              },
              {
                icon: faHardDrive,
                text: "10GB de almacenamiento NVMe",
              },
              {
                icon: faNetworkWired,
                text: "1TB de ancho de banda",
              },
            ]}
          />

          <PriceCard
            title="Plan Avanzado"
            subtitle="Diseñado para negocios en crecimiento y sitios web dinámicos."
            price="$25"
            benefits={[
              {
                icon: faMemory,
                text: "2GB Ram",
              },
              {
                icon: faMicrochip,
                text: "1 Core CPU",
              },
              {
                icon: faHardDrive,
                text: "25GB de almacenamiento NVMe",
              },
              {
                icon: faNetworkWired,
                text: "2TB de ancho de banda",
              },
            ]}
          />

          <PriceCard
            title="Plan Profesional"
            subtitle="La mejor opción para proyectos empresariales de alto rendimiento."
            price="$51"
            benefits={[
              {
                icon: faMemory,
                text: "4GB Ram",
              },
              {
                icon: faMicrochip,
                text: "2 Core CPU",
              },
              {
                icon: faHardDrive,
                text: "50GB de almacenamiento NVMe",
              },
              {
                icon: faNetworkWired,
                text: "4TB de ancho de banda",
              },
            ]}
          />
        </div>
      </PageSectionWrapper>

      {/* Contact Us */}
      <ContactSection />
    </main>
  );
}
