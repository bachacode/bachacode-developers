import Link from "next/link";
import MenuLink from "@/components/MenuLink";
import NavButton from "@/components/NavButton";
import Image from "next/image";
import bachacodeRemoveBg from "../../../public/images/bachacode-removebg.png";
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
      <footer className="h-2/4 w-full bg-zinc-900 text-white">
        <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
          <Link href="/" className="flex items-center space-x-2">
            <span>Bacha / Code;</span>
          </Link>
          <p className="mt-4 text-sm text-gray-400 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
            Copyright © 2024 Bachacode
          </p>
        </div>
      </footer>
    </div>
  );
}
