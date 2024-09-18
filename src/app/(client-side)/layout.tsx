import Link from "next/link";
import MenuLink from "@/components/MenuLink";
import NavButton from "@/components/NavButton";
import Image from "next/image";

export default function ClientSideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      {/* Header */}
      <header className="absolute top-0 z-10 flex items-center justify-center bg-white h-24 w-full shadow-md">
        <div className="max-w-screen-xl flex items-center justify-around w-full  py-6 px-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/bachacode-removebg.png"
              height={47}
              width={180}
              alt="Header bachacode logo"
            />
          </Link>

          <div className="hidden lg:flex justify-around w-8/12">
            <MenuLink href="/" label="Inicio" />
            <MenuLink href="#services" label="Servicios" />
            <MenuLink href="#clients" label="Clientes" />
            <MenuLink href="#team" label="Equipo" />
          </div>
          <NavButton href="/contacto">Contacto</NavButton>
        </div>
      </header>

      {/* Main Context */}
      {children}

      {/* Footer */}
      <footer className="bg-zinc-900 h-2/4 w-full text-white">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link href="/" className="flex items-center space-x-2">
            <span>Bacha / Code;</span>
          </Link>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Copyright © 2024 Bachacode
          </p>
        </div>
      </footer>
    </div>
  );
}
