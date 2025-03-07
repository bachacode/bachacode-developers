import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("contact_section");
  return (
    <div className="bg-teal-blue-accent-950 flex w-full justify-center py-6 md:py-20">
      <div className="flex w-3/4 flex-col items-center space-y-6 text-2xl text-balance md:w-1/3 md:items-start">
        <p className="font-semi-bold text-white">
          {t("body")} <strong className="text-primary">{t("highlight")}</strong>
        </p>

        <div>
          <Link
            href="/contact"
            className="hover:bg-primary z-10 rounded-md border-4 border-white px-8 py-3.5 text-base font-semibold text-white uppercase transition-colors duration-300"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
