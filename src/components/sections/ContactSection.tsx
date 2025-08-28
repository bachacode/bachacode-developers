import React from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import UnderlinedText from "../common/UnderlinedText";

export default function ContactSection() {
  const t = useTranslations("contact_section");
  return (
    <div className="bg-orange-primary-50 flex w-full justify-center py-6 md:py-20 border-y border-primary">
      <div className="flex container px-12 mx-auto max-w-3xl flex-col items-center space-y-6 text-2xl text-pretty md:items-start">

        <p className="font-semi-bold text-center md:text-start">
          {t.rich("body", { keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText> })}
        </p>

        <Button size="lg" className="px-8 py-6 rounded-sm text-lg uppercase" asChild>
          <Link
            href="/contact"
          >
            {t("button")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
