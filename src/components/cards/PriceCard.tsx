import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faHardDrive,
  faMemory,
  faMicrochip,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import React from "react";

interface PriceCardProps {
  title: string;
  subtitle: string;
  price: string;
  specs: { ram: string; cores: string; storage: string; bandwidth: string };
}

export default function PriceCard({
  title,
  subtitle,
  price,
  specs,
}: PriceCardProps) {
  const t = useTranslations("price_card");
  return (
    <div className="w-full rounded-lg border border-zinc-800 bg-white p-6 text-zinc-800 shadow-lg md:w-1/3">
      <h3 className="mb-4 text-center text-xl font-semibold">{title}</h3>
      <p className="mb-6 text-center text-zinc-800">{subtitle}</p>
      <div className="mb-6 text-center">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-lg font-medium">/{t("month")}</span>
      </div>
      <h4 className="pb-2 text-lg font-semibold">{t("specs.title")}:</h4>
      <ul className="mb-6 space-y-2">
        {/* RAM */}
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faMemory}
            className="text-accent mr-2"
          ></FontAwesomeIcon>
          {t("specs.ram", { memory: specs.ram })}
        </li>

        {/* CPU Cores */}
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faMicrochip}
            className="text-accent mr-2"
          ></FontAwesomeIcon>
          {t("specs.cpu", { cores: specs.cores })}
        </li>

        {/* Storage space */}
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faHardDrive}
            className="text-accent mr-2"
          ></FontAwesomeIcon>
          {t("specs.storage", { space: specs.storage })}
        </li>

        {/* Bandwidth */}
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faNetworkWired}
            className="text-accent mr-2"
          ></FontAwesomeIcon>
          {t("specs.network", { bandwith: specs.bandwidth })}
        </li>
      </ul>
      <h4 className="pb-2 text-lg font-semibold">{t("includes.title")}:</h4>
      <ul className="mb-6 space-y-2 pb-4">
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-accent mr-2"
          ></FontAwesomeIcon>
          {t("includes.management")}
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-accent mr-2"
          ></FontAwesomeIcon>
          {t("includes.ssl")}
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-accent mr-2"
          ></FontAwesomeIcon>
          {t("includes.cloudflare")}
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-accent mr-2"
          ></FontAwesomeIcon>
          {t("includes.domain")}
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-accent mr-2"
          ></FontAwesomeIcon>
          {t("includes.emails")}
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-accent mr-2"
          ></FontAwesomeIcon>
          {t("includes.uptime")}
        </li>
      </ul>
      {/* <div className="w-full text-center">
        <Link
          href="/contacto"
          className="transition-colors duration-200 bg-orange-primary-500 hover:bg-orange-primary-700 text-white py-3 px-6 rounded-lg font-semibold"
        >
          Contáctanos
        </Link>
      </div> */}
    </div>
  );
}
