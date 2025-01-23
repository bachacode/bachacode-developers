import React from "react";
import generateTitle from "@/utils/generateTitle";
import { Metadata } from "next";
import PageSectionWrapper from "@/components/PageSectionWrapper";
import MesgoHome from "@/assets/images/mesgo-home.png";
import TailorsheetHome from "@/assets/images/tailorsheet-home.png";
import ProjectCard from "@/components/ProjectCard";

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

      {/* Galería de proyectos */}
      <PageSectionWrapper
        titleId="projects"
        titleName="Nuestros proyectos"
        subtitle="Los sitios web en lo que hemos trabajado"
        fullWidth
      >
        <div className="flex w-full flex-col">
          {/* Component */}
          <ProjectCard
            title="TailorSheet"
            description="Cursos y diseño de Apps con AppSheet. Aprende desde cero con nuestros cursos y tutoriales en español. Diseñamos apps para tu negocio en tiempo récord."
            image={TailorsheetHome}
            buttonUrl="https://tailorsheet.com/"
          />

          <ProjectCard
            title="Mesgo"
            description="Landing Page de Mexican Engineering Supply Group, empresa especializada en la distribución de materiales industriales, con un enfoque en la ingeniería eléctrica, electrónica y mecánica."
            image={MesgoHome}
            buttonUrl="https://mesgo.bachacode.com/"
            inverted
            altColor
          />
        </div>
      </PageSectionWrapper>
    </main>
  );
}
