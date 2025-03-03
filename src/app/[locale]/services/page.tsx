import NavButton from "@/components/common/NavButton";
import Image from "next/image";
import React from "react";
import ocOnTheLaptop from "@/assets/images/oc-on-the-laptop.svg";
import ocTakingNote from "@/assets/images/oc-taking-note.svg";
import ServiceCardAlt from "@/components/cards/ServiceCardAlt";
import {
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
import PageSectionWrapper from "@/components/layout/PageSectionWrapper";
import { Metadata } from "next";
import generateTitle from "@/utils/generateTitle";
import ContactSection from "@/components/sections/ContactSection";
import TechCard from "@/components/cards/TechCard";
import PriceCard from "@/components/cards/PriceCard";
import { getTranslations } from "next-intl/server";
import { useFormatter, useTranslations } from "next-intl";

export async function generateMetadata(
  props: Omit<
    {
      children: React.ReactNode;
      params: Promise<{ locale: string }>;
    },
    "children"
  >,
): Promise<Metadata> {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "services.metadata" });

  return {
    title: generateTitle(t("title")),
  };
}

export default function Servicios() {
  const t = useTranslations("services");
  const format = useFormatter();

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
                {t("hero.title")}
              </h1>
              <p className="text-xl text-zinc-800">{t("hero.subtitle")}</p>
            </div>
            <NavButton href="/contact">{t("hero.button")}</NavButton>
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
        titleName={t("services.title")}
        subtitle={t("services.subtitle")}
      >
        {/* Service cards */}
        <div className="grid gap-6 px-2 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCardAlt
            title={t("services.cards.static.title")}
            icon={faWindowRestore}
            iconColor="text-primary"
          >
            {t("services.cards.static.body")}
          </ServiceCardAlt>

          <ServiceCardAlt
            title={t("services.cards.wordpress.title")}
            icon={faWordpress}
            iconColor="text-primary"
          >
            {t("services.cards.wordpress.body")}
          </ServiceCardAlt>

          <ServiceCardAlt
            title={t("services.cards.web-apps.title")}
            icon={faCode}
            iconColor="text-primary"
          >
            {t("services.cards.web-apps.body")}
          </ServiceCardAlt>

          <ServiceCardAlt
            title={t("services.cards.support.title")}
            icon={faMessage}
            iconColor="text-primary"
          >
            {t("services.cards.support.body")}
          </ServiceCardAlt>
        </div>
      </PageSectionWrapper>

      {/* Advantages Section */}
      <PageSectionWrapper
        titleId="advantages"
        titleName={t("advantages.title")}
        subtitle={t("advantages.subtitle")}
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
              title={t("advantages.cards.hosting.title")}
              icon={faServer}
              iconColor="text-accent"
            >
              {t("advantages.cards.hosting.description")}
            </AdvantageCard>
            <AdvantageCard
              title={t("advantages.cards.design.title")}
              icon={faPalette}
              iconColor="text-accent"
            >
              {t("advantages.cards.design.description")}
            </AdvantageCard>

            <AdvantageCard
              title={t("advantages.cards.security.title")}
              icon={faShield}
              iconColor="text-accent"
            >
              {t("advantages.cards.security.description")}
            </AdvantageCard>

            <AdvantageCard
              title={t("advantages.cards.support.title")}
              icon={faHeadphones}
              iconColor="text-accent"
            >
              {t("advantages.cards.support.description")}
            </AdvantageCard>
          </div>
        </div>
      </PageSectionWrapper>

      {/* Technologies section */}
      <PageSectionWrapper
        titleId="technology"
        titleName={t("technologies.title")}
        subtitle={t("technologies.subtitle")}
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
        titleName={t("hosting.title")}
        subtitle={t("hosting.subtitle")}
        altBackground
      >
        {/* Hosting plans */}
        <div className="flex flex-col gap-4 px-2 md:flex-row">
          <PriceCard
            title={t("hosting.cards.basic.title")}
            subtitle={t("hosting.cards.basic.description")}
            price={format.number(9.99, { style: "currency", currency: "USD" })}
            specs={{
              ram: "2GB",
              cores: "1",
              storage: "25GB",
              bandwidth: "1TB",
            }}
          />

          <PriceCard
            title={t("hosting.cards.advanced.title")}
            subtitle={t("hosting.cards.advanced.description")}
            price={format.number(19.99, { style: "currency", currency: "USD" })}
            specs={{
              ram: "2GB",
              cores: "2",
              storage: "40GB",
              bandwidth: "2TB",
            }}
          />

          <PriceCard
            title={t("hosting.cards.pro.title")}
            subtitle={t("hosting.cards.pro.description")}
            price={format.number(29.99, { style: "currency", currency: "USD" })}
            specs={{
              ram: "4GB",
              cores: "2",
              storage: "80GB",
              bandwidth: "4TB",
            }}
          />
        </div>
      </PageSectionWrapper>

      {/* Contact Us */}
      <ContactSection />
    </main>
  );
}
