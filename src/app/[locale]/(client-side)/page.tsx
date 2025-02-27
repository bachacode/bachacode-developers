import NavButton from "@/components/common/NavButton";
import Image from "next/image";
import ServiceCard from "@/components/cards/ServiceCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
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
import TechCarousel from "@/components/sections/TechCarousel";
import Heading from "@/components/common/Heading";
import TeamCard from "@/components/cards/TeamCard";
import OfferingCard from "@/components/cards/OfferingCard";
import bachacodeBig from "../../../../public/images/bachacode-big.png";
import HomePageCounter from "@/components/sections/HomePageCounter";
import PageSectionWrapper from "@/components/layout/PageSectionWrapper";
import ContactSection from "@/components/sections/ContactSection";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

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
              {t("hero.title")}
            </h1>
            <p className="text-xl font-extralight text-gray-600">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Contact Button */}
          <div>
            <NavButton href="/contact"> {t("hero.button")}</NavButton>
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
              {t("about.title")}
            </h2>
            <div className="mt-1.5 w-36 border-t-2 border-primary pb-6"></div>
            <p className="whitespace-pre-line pb-3 text-base lg:text-2xl">
              {t("about.body")}
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
      <HomePageCounter
        projects={t("counter.projects")}
        clients={t("counter.clients")}
        experience={t("counter.experience")}
      />
      {/* Services section */}
      <PageSectionWrapper
        titleId="services"
        titleName={t("services.title")}
        subtitle={t("services.subtitle")}
        altBackground
      >
        <div className="flex flex-col flex-wrap items-stretch lg:flex-row">
          <ServiceCard
            title={t("services.cards.static.title")}
            icon={faWindowRestore}
            iconColor="text-primary"
          >
            {t("services.cards.static.body")}
          </ServiceCard>

          <ServiceCard
            title={t("services.cards.wordpress.title")}
            icon={faWordpress}
            iconColor="text-primary"
          >
            {t("services.cards.wordpress.body")}
          </ServiceCard>

          <ServiceCard
            title={t("services.cards.web-apps.title")}
            icon={faCode}
            iconColor="text-primary"
          >
            {t("services.cards.web-apps.body")}
          </ServiceCard>

          <ServiceCard
            title={t("services.cards.support.title")}
            icon={faMessage}
            iconColor="text-primary"
          >
            {t("services.cards.support.body")}
          </ServiceCard>
        </div>
      </PageSectionWrapper>

      {/* Tech Stack */}
      <div className="flex w-full flex-col items-center bg-white py-12">
        <Heading
          id="tech"
          title={t("technologies.title")}
          subtitle={t("technologies.subtitle")}
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
        titleName={t("clients.title")}
        subtitle={t("clients.subtitle")}
        altBackground
      >
        <div className="flex w-full flex-wrap">
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

      {/* Our team */}
      <PageSectionWrapper
        titleId="team"
        titleName={t("team.title")}
        subtitle={t("team.subtitle")}
      >
        <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 pb-16 sm:-m-4 md:space-y-0">
          <OfferingCard
            title={t("team.cards.development.title")}
            description={t("team.cards.development.body")}
            icon={faWind}
          />

          <OfferingCard
            title={t("team.cards.communication.title")}
            description={t("team.cards.communication.body")}
            icon={faComments}
          />

          <OfferingCard
            title={t("team.cards.prices.title")}
            description={t("team.cards.prices.body")}
            icon={faDollar}
          />

          <OfferingCard
            title={t("team.cards.flexible.title")}
            description={t("team.cards.flexible.body")}
            icon={faPuzzlePiece}
          />
        </div>

        <div className="flex w-full flex-col items-center justify-between lg:flex-row lg:items-start">
          <div className="flex w-full flex-col items-center space-y-2 self-start pb-12 lg:items-start">
            <p className="self-start text-2xl font-light">
              {t("team.members.prefix")}
            </p>
            <h3 className="text-center text-4xl font-semibold text-primary lg:text-left lg:text-6xl">
              {t("team.members.title")}
            </h3>
          </div>

          <div className="flex w-9/12 flex-col">
            <TeamCard
              memberName={t("team.members.cristhian.name")}
              profession={t("team.members.cristhian.occupation")}
              description={t("team.members.cristhian.body")}
              linkedinUrl="https://www.linkedin.com/in/cristhian-flo"
              githubUrl="https://github.com/bachacode"
            />

            <TeamCard
              memberName={t("team.members.josibel.name")}
              profession={t("team.members.josibel.occupation")}
              description={t("team.members.josibel.body")}
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
