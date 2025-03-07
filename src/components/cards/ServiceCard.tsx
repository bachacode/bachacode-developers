import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ServiceCardProps {
  icon: IconProp;
  title: string;
  children: React.ReactNode;
  iconColor: string;
}

export default function ServiceCard({
  icon,
  title,
  children,
  iconColor,
}: ServiceCardProps) {
  return (
    <div className="group flex w-full p-4 transition-transform delay-75 duration-200 hover:-translate-y-3 lg:w-1/2">
      <div className="flex grow flex-col rounded-lg border border-accent bg-white p-6 shadow-md transition-shadow delay-75 duration-200 group-hover:shadow-xl">
        <FontAwesomeIcon
          icon={icon}
          className={`h-12 w-12 pb-3 ${iconColor}`}
        />
        <h3 className="title-font mb-2 text-lg font-medium text-gray-900">
          {title}
        </h3>
        <p className="grow text-base leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
