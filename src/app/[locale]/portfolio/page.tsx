import React from "react";
import generateTitle from "@/utils/generateTitle";
import { Metadata } from "next";
import PageSectionWrapper from "@/components/layout/PageSectionWrapper";
import TailorsheetHome from "@/assets/images/tailorsheet-home.png";
import jaimeMoralesHome from "@/assets/images/jaimemoralesdotes-home.png";
import ProjectCard from "@/components/cards/ProjectCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import ContactSection from "@/components/sections/ContactSection";
import { hasLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
    namespace: "portfolio.metadata",
  });

  return {
    title: generateTitle(t("title")),
  };
}

export default function Portafolio() {
  const t = useTranslations("portfolio");

  return (
    <main className="w-full">
      {/* Hero section */}
      <div className="bg-orange-primary-50 flex w-full flex-col items-center px-8 pt-36 pb-12">
        <div className="container flex items-center justify-center md:space-x-8 lg:min-h-[300px]">
          {/* Title & CTA */}
          <div className="flex w-3/4 flex-col space-y-6 text-center">
            <h1
              id="hero"
              className="pb-3 text-4xl font-bold tracking-widest text-zinc-900 lg:text-5xl"
            >
              {t("hero.title")}
            </h1>
            <p className="text-xl text-zinc-800">{t("hero.subtitle")}</p>
          </div>
        </div>
      </div>

      {/* Galería de proyectos */}
      <PageSectionWrapper
        titleId="projects"
        titleName={t("projects.title")}
        subtitle={t("projects.subtitle")}
        fullWidth
      >
        <div className="flex w-full flex-col">
          {/* Component */}
          <ProjectCard
            title={t("projects.sites.tailorsheet.title")}
            description={t("projects.sites.tailorsheet.body")}
            image={TailorsheetHome}
            buttonUrl="https://tailorsheet.com/"
          />

          <ProjectCard
            title={t("projects.sites.jaimemorales.title")}
            description={t("projects.sites.jaimemorales.body")}
            image={jaimeMoralesHome}
            buttonUrl="https://jaimemorales.es/"
            inverted
            altColor
          />
        </div>
      </PageSectionWrapper>

      {/* Testimonies */}
      <PageSectionWrapper
        titleId="testimonies"
        titleName={t("clients.title")}
        subtitle={t("clients.subtitle")}
      >
        <div className="container flex w-full flex-wrap">
          <TestimonialCard
            name={t("clients.testimonies.tailor.name")}
            profession={t("clients.testimonies.tailor.occupation")}
            testimony={t("clients.testimonies.tailor.body")}
          />

          <TestimonialCard
            name={t("clients.testimonies.mesgo.name")}
            profession={t("clients.testimonies.mesgo.occupation")}
            testimony={t("clients.testimonies.mesgo.body")}
          />
        </div>
      </PageSectionWrapper>

      {/* Contact Us */}
      <ContactSection />
    </main>
  );
}
