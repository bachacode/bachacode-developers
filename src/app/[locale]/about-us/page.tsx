import React from "react";
import PageSectionWrapper from "@/components/layout/PageSectionWrapper";
import Image from "next/image";
import ncWomanTypingOnMachine from "@/assets/images/nc-woman-typing-on-machine.png";
import ServiceCard from "@/components/cards/ServiceCard";
import {
  faLightbulb,
  faCheckCircle,
  faHandshake,
  faCode,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import ContactSection from "@/components/sections/ContactSection";
import TeamCard from "@/components/cards/TeamCard";
import generateTitle from "@/utils/generateTitle";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

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

  const t = await getTranslations({ locale, namespace: "about_us.metadata" });

  return {
    title: generateTitle(t("title")),
  };
}

export default function SobreNosotros() {
  const t = useTranslations("about_us");

  return (
    <main className="w-full">
      {/* Hero section */}
      <div className="flex w-full flex-col items-center bg-white px-8 pb-12 pt-36">
        <div className="container relative flex items-center md:space-x-8 lg:min-h-[600px]">
          {/* Image */}
          <div className="absolute flex h-full w-full flex-col items-center px-6 text-center opacity-20 md:relative md:right-0 md:w-1/2 md:px-0 md:opacity-100">
            <Image
              src={ncWomanTypingOnMachine}
              alt="Woman typing on a writing machine"
              className="max-h-full max-w-full object-contain"
              style={{ height: "auto", width: "100%" }}
            />
          </div>

          {/* Title & CTA */}
          <div className="flex w-full flex-col items-center space-y-6 text-center md:w-1/2">
            <div className="px-6 md:px-3">
              <h1
                id="hero"
                className="pb-3 text-4xl font-bold tracking-widest text-zinc-900 lg:text-5xl"
              >
                {t("hero.title")}
              </h1>
              <p className="text-xl text-zinc-800">{t("hero.description")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our values section */}
      <PageSectionWrapper
        titleId="our-values"
        titleName={t("our_values.title")}
        subtitle={t("our_values.subtitle")}
        altBackground
      >
        <div className="flex flex-col md:flex-row md:space-x-8">
          <ServiceCard
            icon={faLightbulb}
            title={t("our_values.cards.innovation.title")}
            iconColor="text-yellow-500"
          >
            {t("our_values.cards.innovation.description")}
          </ServiceCard>
          <ServiceCard
            icon={faCheckCircle}
            title={t("our_values.cards.quality.title")}
            iconColor="text-green-500"
          >
            {t("our_values.cards.quality.description")}
          </ServiceCard>
          <ServiceCard
            icon={faHandshake}
            title={t("our_values.cards.commitment.title")}
            iconColor="text-blue-500"
          >
            {t("our_values.cards.commitment.description")}
          </ServiceCard>
        </div>
      </PageSectionWrapper>

      {/* Our team */}
      <PageSectionWrapper
        titleId="team"
        titleName={t("our_team.title")}
        subtitle={t("our_team.subtitle")}
      >
        <div className="grid grid-cols-2">
          <TeamCard
            memberName={t("our_team.cards.cristhian.name")}
            profession={t("our_team.cards.cristhian.occupation")}
            description={t("our_team.cards.cristhian.body")}
            linkedinUrl="https://www.linkedin.com/in/cristhian-flo"
            githubUrl="https://github.com/bachacode"
            icon={faCode}
          />

          <TeamCard
            memberName={t("our_team.cards.josibel.name")}
            profession={t("our_team.cards.josibel.occupation")}
            description={t("our_team.cards.josibel.body")}
            linkedinUrl="https://www.linkedin.com/in/josibel-far%C3%ADas-espa%C3%B1a-b36390254"
            icon={faPalette}
          />
        </div>
      </PageSectionWrapper>

      {/* Contact Us */}
      <ContactSection />
    </main>
  );
}
