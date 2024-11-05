import NavButton from "@/components/NavButton";
import Image from "next/image";
import React from "react";
import ocOnTheLaptop from "../../../../public/images/oc-on-the-laptop.svg";
import ocTakingNote from "../../../../public/images/oc-taking-note.svg";
import ServiceCardAlt from "@/components/ServiceCardAlt";
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
import AdvantageCard from "@/components/AdvantageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import PageSectionWrapper from "@/components/PageSectionWrapper";
import { Metadata } from "next";
import generateTitle from "@/utils/generateTitle";
import ContactSection from "@/components/ContactSection";

interface TechCardProps {
  icon: IconDefinition;
  className: string;
  title: string;
}

function TechCard({ icon, className, title }: TechCardProps) {
  return (
    <div className="group border border-accent rounded-md w-32 h-32 flex flex-col items-center justify-center shadow-md">
      <FontAwesomeIcon
        icon={icon}
        className={`text-gray-600 w-20 h-20 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 ${className}`}
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
    <div className="bg-white text-zinc-800 rounded-lg p-6 w-full md:w-1/3 shadow-lg border border-zinc-800">
      <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
      <p className="text-center text-zinc-800 mb-6">{subtitle}</p>
      <div className="text-center mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-lg font-medium">/mes</span>
      </div>
      <h4 className="text-lg font-semibold pb-2">Especificaciones:</h4>
      <ul className="mb-6 space-y-2">
        {benefits.map((benefit) => (
          <li key={benefit.text} className="flex items-center">
            <FontAwesomeIcon
              icon={benefit.icon}
              className="w-full max-w-4 h-auto mr-2 text-accent"
            ></FontAwesomeIcon>
            {benefit.text}
          </li>
        ))}
      </ul>
      <h4 className="text-lg font-semibold pb-2">Incluye:</h4>
      <ul className="mb-6 space-y-2 pb-4">
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="w-full max-w-4 h-auto mr-2 text-accent"
          ></FontAwesomeIcon>
          Gestión profesional 24/7
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="w-full max-w-4 h-auto mr-2 text-accent"
          ></FontAwesomeIcon>
          SSL Gratis sin coste añadido
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="w-full max-w-4 h-auto mr-2 text-accent"
          ></FontAwesomeIcon>
          Integración con Cloudflare gratuita
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="w-full max-w-4 h-auto mr-2 text-accent"
          ></FontAwesomeIcon>
          Dominio incluido en el precio
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="w-full max-w-4 h-auto mr-2 text-accent"
          ></FontAwesomeIcon>
          Correos personalizados (con el dominio incluido)
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="w-full max-w-4 h-auto mr-2 text-accent"
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
      <div className="w-full bg-orange-primary-50 flex flex-col items-center pt-36 px-8 pb-12">
        <div className="container relative items-center flex md:space-x-8  lg:min-h-[600px]">
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
          <div className="absolute flex flex-col h-full items-center text-center w-full md:w-1/2 md:right-0 px-6 md:px-0 opacity-20 md:opacity-100">
            <Image
              src={ocOnTheLaptop}
              alt="OC on the laptop hero image"
              className="max-w-full max-h-full object-contain"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
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
          <div className="flex flex-col justify-stretch gap-6 w-full px-2 md:px-12 lg:w-1/2 relative z-10">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
        <div className="flex flex-col md:flex-row gap-4 px-2">
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
