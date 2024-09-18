import ContactForm from "@/components/ContactForm";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import generateTitle from "@/utils/generateTitle";
import GoogleCaptchaWrapper from "@/components/GoogleCaptchaWrapper";

export const metadata: Metadata = {
  title: generateTitle("Contacto"),
};

function ContactCard({
  title,
  value,
  icon,
}: Readonly<{ title: string; value: string; icon: IconProp }>) {
  return (
    <div className="flex flex-col space-y-1.5 w-3/4 lg:w-64 text-center items-center p-6 bg-white border border-gray- shadow-md transition-shadow hover:shadow-lg">
      <FontAwesomeIcon className="w-10 h-10 text-accent" icon={icon} />
      <h3>{title}</h3>
      <span className="text-accent transition-colors hover:text-primary">
        {value}
      </span>
    </div>
  );
}

export default function Contacto() {
  return (
    <GoogleCaptchaWrapper>
      <main className="w-full min-h-screen flex flex-col items-center pb-12 bg-orange-primary-50">
        <div className="mt-36">
          <div className="flex flex-col items-center space-y-2 text-center pb-6">
            <h1
              id="contacto"
              className="uppercase font-semibold text-accent text-5xl"
            >
              Contacto
            </h1>
            <div className="w-12 border-t-2 border-primary pb-4"></div>
          </div>
        </div>

        <div className="flex flex-col space-y-6 container items-center w-10/12">
          <h2 className="text-center text-xl">
            ¿Necesitas una respuesta rapida?
          </h2>

          {/* Contact Cards */}
          <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0 w-full justify-around">
            <ContactCard
              title="Correo Electrónico"
              value="bachacode@gmail.com"
              icon={faEnvelope}
            />

            <ContactCard
              title="Teléfono"
              value="+(58) 412-1163349"
              icon={faPhone}
            />

            <div className="flex flex-col space-y-1.5 w-3/4 lg:w-64 text-center items-center p-6 bg-white border border-gray- shadow-md transition-shadow hover:shadow-lg">
              <FontAwesomeIcon
                className="w-10 h-10 text-accent"
                icon={faWhatsapp}
              />
              <h3>WhatsApp</h3>
              <Link
                className="text-accent transition-colors hover:text-primary"
                href="https://wa.me/584121163349?text=Estoy%20interesado%20en%20crear%20un%20sitio%20web%20con%20ustedes"
              >
                Click Aquí
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col items-center space-y-6">
            <div className="flex flex-col text-center ">
              <h2 className="pb-3 text-xl">
                ¿Quieres sacar tu proyecto a flote?
              </h2>
              <span className="text-gray-500">
                ¡Envianos un mensaje con tu propuesta!
              </span>
            </div>
            <div className="flex w-full justify-around">
              <div className="w-full lg:w-7/12 bg-white rounded border-gray-500 p-6 shadow-lg pb-24 lg:pb-12">
                <ContactForm />
              </div>

              <div className="hidden lg:flex w-4/12 items-center">
                <Image
                  src="/images/bachacode-big.png"
                  className="relative z-10 rounded-r-xl rounded-tl-xl"
                  alt="Bachacode logo"
                  width={380}
                  height={156}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </GoogleCaptchaWrapper>
  );
}
