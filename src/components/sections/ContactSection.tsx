import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface ContactSectionProps {
  body?: string;
  highlight?: string;
  buttonText?: string;
}

export default function ContactSection({
  body,
  highlight,
  buttonText,
}: ContactSectionProps) {
  const t = useTranslations("useContactLocale");
  return (
    <div className="flex w-full justify-center bg-teal-blue-accent-950 py-6 md:py-20">
      <div className="flex w-3/4 flex-col items-center space-y-6 text-balance text-2xl md:w-1/3 md:items-start">
        <p className="font-semi-bold text-white">
          {t("body")}
          <strong className="text-primary">{t("highlight")}</strong>
        </p>

        <div>
          <Link
            href="/contact"
            className="z-10 rounded-md border-4 border-white px-8 py-3.5 text-base font-semibold uppercase text-white transition-colors duration-300 hover:bg-primary"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
