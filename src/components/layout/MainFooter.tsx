import Image from "next/image";
import Link from "next/link";
import React from "react";
import BachacodeLogoNoBg from "@/assets/images/bachacode-removebg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import BachacodeMiniLogo from "@/assets/images/bachacode-mini.png";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function MainFooter() {
  return (
    <footer className="flex w-full justify-center bg-white">
      <div className="w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between md:px-3">
          {/* Logo */}
          <div className="mb-6 hidden md:mb-0 md:block">
            <Link href="/" className="flex items-center">
              <Image
                src={BachacodeLogoNoBg}
                alt="Bachacode Logo"
                style={{ height: "auto", width: "180px" }}
              />
            </Link>
          </div>
          {/* Links */}
          <div className="flex flex-col items-center gap-8 px-6 md:grid md:grid-cols-2 md:px-0">
            {/* Main Links */}
            <div className="text-center md:text-left">
              <h3 className="pb-3 font-semibold uppercase text-gray-900">
                Descubre
              </h3>
              <ul className="space-y-2 font-medium text-gray-500">
                <li>
                  <Link href="/" className="transition-colors hover:text-black">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre-nosotros"
                    className="transition-colors hover:text-black"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios"
                    className="transition-colors hover:text-black"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portafolio"
                    className="transition-colors hover:text-black"
                  >
                    Portafolio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div className="text-center md:text-left">
              <h3 className="pb-3 font-semibold uppercase text-gray-900">
                Contacto
              </h3>
              <ul className="space-y-2 font-medium text-gray-500">
                <li>
                  <a
                    href="mailto:support@bachacode.com"
                    className="flex items-center space-x-2 transition-colors hover:text-black"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="h-5 w-5"
                    ></FontAwesomeIcon>
                    <span>support@bachacode.com</span>
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+584121163349"
                    className="flex items-center space-x-2 transition-colors hover:text-black"
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="h-5 w-5"
                    ></FontAwesomeIcon>
                    <span>+58 412-1163349</span>
                  </a>
                </li>

                <li className="py-3">
                  <Link
                    href="/contacto"
                    className={`rounded-md border-2 border-gray-500 px-6 py-3 font-semibold uppercase text-gray-500 transition-colors hover:border-black hover:text-black`}
                  >
                    Contactar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex items-center space-x-3">
            <div className="block md:hidden">
              <Link href="/" className="flex items-center">
                <Image
                  src={BachacodeMiniLogo}
                  alt="Bachacode Mini Logo for mobile"
                  style={{ height: "auto", width: "70px" }}
                />
              </Link>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © 2025{" "}
              <Link href="/" className="hover:underline">
                Bachacode Developers
              </Link>
              . Todos los derechos reservados.
            </span>
          </div>
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/bachacode-developers/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-8 w-8 md:h-5 md:w-5"
              ></FontAwesomeIcon>

              <span className="sr-only">LinkedIn Page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
