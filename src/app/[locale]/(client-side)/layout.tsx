import MainFooter from "@/components/layout/MainFooter";
import MainHeader from "@/components/layout/MainHeader";

export default function ClientSideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Header */}
      <MainHeader></MainHeader>

      {/* Main Context */}
      {children}

      {/* Footer */}
      <MainFooter></MainFooter>
    </>
  );
}
