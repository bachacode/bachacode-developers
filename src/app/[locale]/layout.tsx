import BaseLayout from "@/components/layout/BaseLayout";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <BaseLayout locale={locale}>
      {/* Header */}
      <MainHeader></MainHeader>

      {/* Main Context */}
      {children}

      {/* Footer */}
      <MainFooter></MainFooter>
    </BaseLayout>
  );
}
