import NavButton from "@/components/NavButton";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faComments,
  faDollar,
  faMessage,
  faPuzzlePiece,
  faWind,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import TechCarousel from "@/components/TechCarousel";
import Heading from "@/components/Heading";
import TeamCard from "@/components/TeamCard";
import OfferingCard from "@/components/OfferingCard";
import bachacodeBig from "../../../public/images/bachacode-big.png";
import HomePageCounter from "@/components/HomePageCounter";
import PageSectionWrapper from "@/components/PageSectionWrapper";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero section */}
      <div className="flex w-full flex-col items-center bg-orange-primary-50">
        <div className="container flex min-h-screen flex-col items-center justify-center space-y-8">
          {/* Title */}
          <div className="flex flex-col items-center text-center lg:w-1/2">
            <h1
              id="hero"
              className="pb-3 text-6xl font-bold tracking-widest lg:text-6xl"
            >
              Construye tu presencia en línea
            </h1>
            <p className="text-xl font-extralight text-gray-600">
              con nosotros tu nuevo proyecto se hará realidad
            </p>
          </div>

          {/* Contact Button */}
          <div className="">
            <NavButton href="/contacto">Empieza tu proyecto</NavButton>
          </div>
        </div>
      </div>

      {/* About us section */}
      <div className="flex flex-col items-center p-6 lg:p-12">
        <div className="container flex w-full justify-around">
          <div className="relative flex flex-col items-center lg:w-7/12 lg:items-start lg:pr-6">
            <h2
              id="about"
              className="pb-4 text-center text-4xl font-bold text-accent lg:pb-0 lg:text-left"
            >
              Conectando el Futuro: Nuestra Historia en el Mundo de la
              Tecnología.
            </h2>
            <div className="mt-1.5 w-36 border-t-2 border-primary pb-6"></div>
            <p className="pb-3 text-base lg:text-2xl">
              Somos un equipo de expertos en desarrollo web dedicados a crear
              soluciones digitales personalizadas que se ajusten a tus
              necesidades, presupuesto y conocimientos técnicos. Nos
              especializamos en ofrecer aplicaciones web accesibles y
              funcionales, ya sea desarrollando sitios desde cero o mejorando
              proyectos existentes.
            </p>
            <p className="text-base lg:text-2xl">
              Nos encargamos de darle vida a tu próximo proyecto en línea,
              asegurándonos de que cada detalle esté alineado con tus objetivos
              y visión.
            </p>

            <div className="absolute top-24 h-48 w-full max-w-sm self-center lg:hidden">
              <Image
                src="/images/bachacode-big.png"
                className="relative z-10 rounded-r-xl rounded-tl-xl opacity-20"
                alt="Bachacode logo"
                fill={true}
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="relative hidden h-48 w-full max-w-sm self-center lg:block">
            <Image
              src={bachacodeBig}
              className="relative z-10 rounded-r-xl rounded-tl-xl"
              alt="Bachacode logo"
              fill={true}
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Counter */}
      <HomePageCounter />
      {/* Services section */}
      <PageSectionWrapper
        titleId="services"
        titleName="¿Qué te ofrecemos?"
        subtitle="Los servicios accessibles a todos nuestros clientes"
        altBackground
      >
        <div className="container flex flex-col flex-wrap items-center lg:flex-row">
          <ServiceCard
            title="Sitios Web Estaticos"
            icon={faWindowRestore}
            iconColor="text-primary"
          >
            Desarrollo de sitios web personalizados con contenido estático,
            ideal para proyectos pequeños que no requieren actualizaciones
            frecuentes, como landing pages, portafolios o catálogos. Estos
            sitios ofrecen rapidez, seguridad y eficiencia para contenido
            estable.
          </ServiceCard>

          <ServiceCard
            title="Sitios WordPress"
            icon={faWordpress}
            iconColor="text-primary"
          >
            Desarrollo de sitios web con{" "}
            <strong className="text-accent">WordPress</strong>, brindando
            control total del contenido sin necesidad de tocar código. Ideal
            para proyectos medianos como blogs, portafolios o sitios
            corporativos, ofreciendo flexibilidad, escalabilidad y fácil
            personalización.
          </ServiceCard>

          <ServiceCard
            title="Aplicaciones Web"
            icon={faCode}
            iconColor="text-primary"
          >
            Desarrollo de aplicaciones web a medida con funcionalidades
            avanzadas, como integración de pagos en línea, sistemas de
            recomendación personalizados, chat en vivo, análisis de datos en
            tiempo real y gestión de contenido. Perfecto para proyectos medianos
            y grandes, como tiendas en línea, plataformas educativas, sistemas
            de reservas en línea, portales de noticias, y sistemas de gestión
            empresarial (ERP, CRM).
          </ServiceCard>

          <ServiceCard
            title="Consultoría y Soporte"
            icon={faMessage}
            iconColor="text-primary"
          >
            Si ya tienes un proyecto que deseas actualizar, agregar nuevas
            funcionalidades o corregir errores, nosotros nos encargamos de
            planificar todo el proceso por ti. Desde la estimación de tiempos
            hasta la creación de presupuestos, te ofrecemos soluciones en las
            tecnologías que mejor dominamos, garantizando un desarrollo
            eficiente y acorde a tus necesidades.
          </ServiceCard>
        </div>
      </PageSectionWrapper>

      {/* Tech Stack */}
      <div className="flex w-full flex-col items-center bg-white py-12">
        <Heading
          id="tech"
          title="Nuestras tecnologías"
          subtitle="Somos expertos en la tecnología mas vanguardista del desarrollo web"
        />

        <div className="flex w-full flex-col items-center">
          <TechCarousel />
          <TechCarousel
            directionAS="backward"
            directionOpt="ltr"
            carouselIndex={3}
          />
        </div>
      </div>

      {/* Our clients */}
      <PageSectionWrapper
        titleId="clients"
        titleName="Nuestros clientes"
        subtitle="Los que han depositado su confianza en nosotros"
        altBackground
      >
        <div className="container flex w-full flex-wrap">
          <TestimonialCard
            name="Guillermo Saez"
            profession="CEO de TailorSheet"
            testimony="Con Bachacode Developers encontré lo que muchos emprendedores buscan y nunca encuentran: La tranquilidad de poder dejar tu negocio en manos de personas que lo cuidan y ayudan a hacerlo crecer con soluciones que rozan la excelencia. Que aportan ideas y que se implican al 100% con cada proyecto."
          />

          <TestimonialCard
            name="Luis Fernando Carbajal"
            profession="CEO de MESGO"
            testimony="Gracias a Bachacode Developers logramos cumplir con los requerimientos establecidos por la empresa CBI Group para obtener nuestro número de proveedor. El sitio web que desarrollaron no solo superó nuestras expectativas, sino que también facilitó el proceso y la presentación de nuestra empresa."
          />
        </div>
      </PageSectionWrapper>

      {/* Our team */}
      <PageSectionWrapper
        titleId="team"
        titleName="Nosotros garantizamos"
        subtitle="Lo que obtendrás trabajando con nosotros"
      >
        <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 pb-16 sm:-m-4 md:space-y-0">
          <OfferingCard
            title="Desarrollo ágil"
            description="Con nosotros, el desarrollo ágil significa adaptación rápida a tus necesidades y resultados constantes. Garantizamos eficiencia y ajuste preciso a lo que realmente necesitas en tu proyecto."
            icon={faWind}
          />

          <OfferingCard
            title="Comunicación"
            description="En nuestro enfoque, la comunicación es fundamental. Mantenemos canales abiertos para una interacción constante y clara contigo. Escuchamos tus necesidades y te mantenemos informado en todo momento, asegurando que tu visión se refleje fielmente en el proyecto final."
            icon={faComments}
          />

          <OfferingCard
            title="Precios ajustables"
            description="Ofrecemos precios flexibles para adaptarnos a tu presupuesto sin comprometer la calidad. Trabajamos juntos para encontrar la mejor solución que se ajuste a tus necesidades económicas."
            icon={faDollar}
          />

          <OfferingCard
            title="Caracteristicas flexibles"
            description="Nuestros proyectos se distinguen por su flexibilidad, ajustándose a tus necesidades en evolución. Cada característica es personalizable para asegurar tu plena satisfacción, permitiéndote modificar el proyecto según tus requerimientos cambiantes a lo largo del desarrollo hasta su puesta en línea."
            icon={faPuzzlePiece}
          />
        </div>

        <div className="flex w-full flex-col items-center justify-between lg:flex-row lg:items-start">
          <div className="flex w-full flex-col items-center space-y-2 self-start pb-12 lg:items-start">
            <p className="self-start text-2xl font-light">
              Hecho posible por...
            </p>
            <h3 className="text-center text-4xl font-semibold text-primary lg:text-left lg:text-6xl">
              Desarrolladores experimentados.
            </h3>
          </div>

          <div className="flex w-9/12 flex-col">
            <TeamCard
              memberName="Cristhian Flores"
              profession="Fullstack Developer"
              description="Experimentado en el desarrollo de interfaces y APIs con conocimientos tanto en frontend como en backend."
              linkedinUrl="https://www.linkedin.com/in/cristhian-flo"
              githubUrl="https://github.com/bachacode"
            />

            <TeamCard
              memberName="Josibel Farías"
              profession="Diseñadora UX/UI"
              description="Especializada en la creación de experiencias de usuario intuitivas y atractivas, con un enfoque en el diseño visual y la usabilidad para garantizar interfaces eficientes y agradables."
              linkedinUrl="https://www.linkedin.com/in/josibel-far%C3%ADas-espa%C3%B1a-b36390254"
            />
          </div>
        </div>
      </PageSectionWrapper>
      {/* Steps */}

      {/* Contact Us */}
      <ContactSection />
    </main>
  );
}
