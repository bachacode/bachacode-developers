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

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero section */}
      <div className="w-full bg-orange-primary-50 flex flex-col items-center">
        <div className="container min-h-screen flex flex-col items-center justify-center space-y-8">
          {/* Title */}
          <div className="flex flex-col items-center lg:w-1/2 text-center">
            <h1
              id="hero"
              className="font-bold text-6xl lg:text-6xl tracking-widest pb-3"
            >
              Construye tu presencia en línea
            </h1>
            <p className="font-extralight text-xl text-gray-600">
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
        <div className="flex w-full justify-around container">
          <div className="relative flex flex-col lg:w-7/12 lg:pr-6 items-center lg:items-start">
            <h2
              id="about"
              className="font-bold text-4xl pb-4 lg:pb-0 text-center lg:text-left text-accent"
            >
              Conectando el Futuro: Nuestra Historia en el Mundo de la
              Tecnología.
            </h2>
            <div className="w-36 border-t-2 border-primary pb-6 mt-1.5"></div>
            <p className="text-base lg:text-2xl pb-3">
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

            <div className="lg:hidden absolute h-48 top-24 max-w-sm w-full self-center">
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

          <div className="hidden lg:block relative h-48 max-w-sm w-full self-center">
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
      <div className="text-white bg-accent body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 text-center justify-center w-full">
            <div className="p-4 sm:w-1/3 w-1/2">
              <span className="title-font font-medium sm:text-4xl text-3xl text-white">
                +15
              </span>
              <p className="leading-relaxed">Proyectos completados</p>
            </div>
            <div className="p-4 sm:w-1/3 w-1/2">
              <span className="title-font font-medium sm:text-4xl text-3xl text-white">
                +10
              </span>
              <p className="leading-relaxed">Clientes satisfechos</p>
            </div>
            <div className="p-4 sm:w-1/3 w-1/2">
              <span className="title-font font-medium sm:text-4xl text-3xl text-white">
                +4
              </span>
              <p className="leading-relaxed">Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
      {/* Services section */}
      <div className="bg-orange-primary-50 flex flex-col items-center p-6 lg:p-12">
        <Heading
          id="services"
          title="¿Que ofrecemos?"
          subtitle="Los servicios accessibles a todos nuestros clientes"
        />

        <div className="flex flex-col items-center lg:flex-row flex-wrap container">
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
      </div>
      {/* Tech Stack */}
      <div className="flex flex-col bg-white w-full items-center py-12">
        <Heading
          id="tech"
          title="Nuestras tecnologías"
          subtitle="Somos expertos en la tecnología mas vanguardista del desarrollo web"
        />

        <div className="w-full flex flex-col items-center">
          <TechCarousel />
          <TechCarousel
            directionAS="backward"
            directionOpt="ltr"
            carouselIndex={3}
          />
        </div>
      </div>

      {/* Our clients */}
      <div className="flex flex-col items-center p-6 lg:p-12 bg-orange-primary-50">
        <Heading
          id="clients"
          title="Nuestros clientes"
          subtitle="Los que han depositado su confianza en nosotros"
        />

        <div className="flex w-full flex-wrap container">
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
      </div>

      {/* Our team */}
      <div className="flex flex-col items-center p-6 lg:p-20">
        <Heading
          id="team"
          title="Nosotros garantizamos"
          subtitle="Lo que obtendrás trabajando con nosotros"
        />

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 pb-16">
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

        <div className="flex flex-col items-center lg:items-start lg:flex-row w-full justify-between">
          <div className="flex flex-col w-full items-center lg:items-start space-y-2 pb-12 self-start">
            <p className="font-light text-2xl self-start">
              Hecho posible por...
            </p>
            <h3 className="font-semibold text-4xl lg:text-6xl text-center lg:text-left text-primary">
              Desarrolladores experimentados.
            </h3>
          </div>

          <div className="flex flex-col w-9/12">
            <TeamCard
              memberName="Cristhian Flores"
              profession="Fullstack Developer"
              description="Experimentado en el desarrollo de interfaces y diseño con conocimientos tanto en frontend como en backend."
              linkedinUrl="https://www.linkedin.com/in/cristhian-flo"
              githubUrl="https://github.com/bachacode"
            />

            <TeamCard
              memberName="Jackeline Estaba"
              profession="Fullstack Developer"
              description="Experta en desarrollo de aplicaciones web con extensos conocimientos en backend experiencia trabajando en aplicaciones de PHP Nativo, Laravel y WordPress."
              linkedinUrl="https://www.linkedin.com/in/janeb95"
              githubUrl="https://www.github.com/IngJaneB"
            />
          </div>
        </div>
      </div>
      {/* Steps */}

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
