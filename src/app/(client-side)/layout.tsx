import Link from "next/link";
import MenuLink from "@/components/MenuLink";
import NavButton from "@/components/NavButton";
import Image from "next/image";
import bachacodeRemoveBg from "../../../public/images/bachacode-removebg.png";
import MainFooter from "@/components/partials/MainFooter";
export default function ClientSideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      {/* Header */}
      <header className="absolute top-0 z-10 flex h-24 w-full items-center justify-center bg-white shadow-md">
        <div className="flex w-full max-w-screen-xl items-center justify-around px-3 py-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={bachacodeRemoveBg}
              alt="Header bachacode logo"
              style={{ height: "auto", width: "180px" }}
            />
          </Link>

          <div className="hidden w-8/12 justify-around lg:flex">
            <MenuLink href="/" label="Inicio" />
            <MenuLink href="/sobre-nosotros" label="Sobre Nosotros" />
            <MenuLink href="/servicios" label="Servicios" />
            <MenuLink href="/portafolio" label="Portafolio" />
          </div>
          <NavButton href="/contacto">Contacto</NavButton>
        </div>
      </header>

      {/* Main Context */}
      {children}

      {/* Footer */}
      <MainFooter></MainFooter>
    </div>
  );
}
