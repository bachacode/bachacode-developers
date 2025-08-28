import React from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import UnderlinedText from "../common/UnderlinedText";

export default function ContactSection() {
  const t = useTranslations("contact_section");
  return (
    <div className="bg-orange-primary-50 flex w-full justify-center py-6 md:py-20 border-y border-primary">
      <div className="flex w-3/4 flex-col items-center space-y-6 text-2xl text-balance md:w-1/3 md:items-start">
        <p className="font-semi-bold">
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
