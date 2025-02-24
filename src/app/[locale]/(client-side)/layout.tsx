import MainFooter from "@/components/layout/MainFooter";
import MainHeader from "@/components/layout/MainHeader";
import { getLocale } from "next-intl/server";
export default async function ClientSideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      {/* Header */}
      <MainHeader locale={locale}></MainHeader>

      {/* Main Context */}
      {children}

      {/* Footer */}
      <MainFooter></MainFooter>
    </div>
  );
}
