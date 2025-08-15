import ContactForm from "@/components/forms/ContactForm";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import generateTitle from "@/utils/generateTitle";
import GoogleCaptchaWrapper from "@/components/layout/GoogleCaptchaWrapper";
import { getTranslations } from "next-intl/server";
import { hasLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
    namespace: "contact.metadata",
  });

  return {
    title: generateTitle(t("title")),
  };
}

function ContactCard({
  title,
  value,
  icon,
}: Readonly<{ title: string; value: string; icon: IconProp }>) {
  return (
    <div className="border-gray- flex w-3/4 flex-col items-center space-y-1.5 border bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg lg:w-64">
      <FontAwesomeIcon className="text-accent text-3xl" icon={icon} />
      <h3>{title}</h3>
      <span className="text-accent hover:text-primary transition-colors">
        {value}
      </span>
    </div>
  );
}

export default function Contacto() {
  const t = useTranslations("contact");
  return (
    <GoogleCaptchaWrapper>
      <main className="bg-orange-primary-50 flex min-h-screen w-full flex-col items-center pb-12">
        <div className="mt-36">
          <div className="flex flex-col items-center space-y-2 pb-6 text-center">
            <h1
              id="contacto"
              className="text-accent text-5xl font-semibold uppercase"
            >
              {t("hero.title")}
            </h1>
            <div className="border-primary w-12 border-t-2 pb-4"></div>
          </div>
        </div>

        <div className="container flex w-10/12 flex-col items-center space-y-6">
          <h2 className="text-center text-xl">{t("hero.subtitle")}</h2>

          {/* Contact Cards */}
          <div className="flex w-full flex-col items-center justify-around space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
            <ContactCard
              title={t("hero.cards.email")}
              value="support@bachacode.com"
              icon={faEnvelope}
            />

            <ContactCard
              title={t("hero.cards.phone")}
              value="+(58) 412-1163349"
              icon={faPhone}
            />

            <div className="border-gray- flex w-3/4 flex-col items-center space-y-1.5 border bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg lg:w-64">
              <FontAwesomeIcon
                className="text-accent text-3xl"
                icon={faWhatsapp}
              />
              <h3>WhatsApp</h3>
              <a
                className="text-accent hover:text-primary transition-colors"
                href="https://wa.me/584121163349?text=Estoy%20interesado%20en%20crear%20un%20sitio%20web%20con%20ustedes"
                target="_blank"
              >
                {t("hero.cards.whatsapp")}
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col items-center space-y-6">
            <div className="flex flex-col text-center">
              <h2 className="pb-3 text-xl">{t("form_section.title")}</h2>
              <span className="text-gray-500">
                {t("form_section.subtitle")}
              </span>
            </div>
            <div className="flex w-full justify-around">
              <div className="w-full rounded border-gray-500 bg-white p-6 pb-24 shadow-lg lg:w-7/12 lg:pb-12">
                <ContactForm />
              </div>

              <div className="hidden w-4/12 items-center lg:flex">
                <Image
                  src="/images/bachacode-big.png"
                  className="relative z-10 rounded-tl-xl rounded-r-xl"
                  alt="Bachacode logo"
                  width={380}
                  height={156}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </GoogleCaptchaWrapper>
  );
}
