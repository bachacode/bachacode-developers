import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import React from "react";

export default function LocaleNotFound() {
  const t = useTranslations("not_found");
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-36">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-orange-primary-600 lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t("title")}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            {t("description")}
          </p>
          <Link
            href="/"
            className="my-4 inline-flex rounded-lg bg-orange-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-primary-800 focus:outline-none focus:ring-4 focus:ring-orange-primary-300 dark:focus:ring-orange-primary-900"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </main>
  );
}
