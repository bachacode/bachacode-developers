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
import { Badge } from "@/components/ui/badge";
import UnderlinedText from "@/components/common/UnderlinedText";
import MockupBrowserWindow from "./MockupBrowserWindow";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
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
      <div className="flex w-full flex-col items-center pt-28 pb-8">
        <div className="container flex justify-center relative space-x-8 px-8">
          {/* Floating Elements */}
          <div className="absolute -z-10 w-full hidden lg:block">
            <div
              className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "3s" }}
            />
            <div
              className="absolute top-96 left-12 w-24 h-24 bg-primary/20 rounded-full animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            />
            <div
              className="absolute top-72 left-60 w-20 h-20 bg-chart-4/30 rounded-full animate-bounce"
              style={{ animationDelay: "2s", animationDuration: "5s" }}
            />
            <div
              className="absolute top-80 right-1/2 w-28 h-28 bg-accent/15 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
            />
          </div>
          <div className="lg:w-5/12 relative flex flex-col text-center items-center lg:items-start lg:text-start space-y-3">
            {/* Badge */}
            <Badge className="text-xl bg-orange-primary-50 border border-primary text-primary">
              {t("hero.badge")}
            </Badge>
            {/* Title & Subtitle */}
            <div>
              <h1
                id="hero"
                className="pb-3 text-7xl font-bold tracking-widest leading-14 lg:text-5xl"
              >
                {t.rich("hero.title", { keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText> })}
              </h1>
              <p className="text-xl text-muted-foreground pb-6">{t("hero.subtitle")}</p>


              <Button
                size="lg"
                className="rounded-sm px-8 py-6 text-lg uppercase"
                asChild
              >
                <Link href="/contact">{t("hero.button")}</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block w-7/12">
            {/* Main Visual Container */}
            <div className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-chart-1/10 rounded-3xl p-8 shadow-2xl">
              {/* Mock Browser Windows */}
              <div className="space-y-6">
                {/* Browser Window 1 */}
                <MockupBrowserWindow
                  mockupUrl="restaurant-website.com"
                  tiltDirection="right"
                />

                {/* Browser Window 2 */}
                <MockupBrowserWindow
                  mockupUrl="ecommerce-store.com"
                  tiltDirection="left"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15 +</div>
                  <div className="text-xs text-muted-foreground">{t("hero.projects")}</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-xs text-muted-foreground">{t("hero.success")}</div>
                </div>
              </div>
            </div>
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
    </main >
  );
}
