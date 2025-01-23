import MainFooter from "@/components/layout/MainFooter";
import MainHeader from "@/components/layout/MainHeader";
export default function ClientSideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      {/* Header */}
      <MainHeader></MainHeader>

      {/* Main Context */}
      {children}

      {/* Footer */}
      <MainFooter></MainFooter>
    </div>
  );
}
