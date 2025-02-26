import BaseLayout from "@/components/layout/BaseLayout";
import MainFooter from "@/components/layout/MainFooter";
import MainHeader from "@/components/layout/MainHeader";

export default function ClientSideLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <BaseLayout locale={locale}>
      <div className="flex min-h-screen w-full flex-col items-center">
        {/* Header */}
        <MainHeader></MainHeader>

        {/* Main Context */}
        {children}

        {/* Footer */}
        <MainFooter></MainFooter>
      </div>
    </BaseLayout>
  );
}
