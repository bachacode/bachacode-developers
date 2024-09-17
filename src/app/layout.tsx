import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MenuLink from "@/components/MenuLink";
import NavButton from "@/components/NavButton";
import Image from "next/image";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bachacode",
  description: "Descripción de ejemplo",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL ?? ""),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.className}`}>
        <div className="min-h-screen flex flex-col items-center w-full">
          {/* Header */}
          <header className="absolute top-0 z-10 bg-white h-20 flex items-center justify-around w-full py-6 px-3 shadow-md">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/bachacode-removebg.png"
                height={90}
                width={160}
                alt="Header bachacode logo"
              />
            </Link>

            <div className="hidden lg:flex justify-between w-8/12 px-48">
              <MenuLink href="/" label="Inicio" />
              <MenuLink href="#services" label="Servicios" />
              <MenuLink href="#clients" label="Clientes" />
              <MenuLink href="#team" label="Equipo" />
            </div>
            <NavButton href="/contacto">Contacto</NavButton>
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
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="ml-3 text-gray-400">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
