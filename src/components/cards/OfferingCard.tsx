import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface OfferingCardProps {
  title: string;
  description: string;
  icon: IconProp;
}

export default function OfferingCard({
  title,
  description,
  icon,
}: OfferingCardProps) {
  return (
    <div className="flex p-4 md:w-1/2">
      <div className="bg-teal-blue-accent-100 mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
        <FontAwesomeIcon
          className="text-accent text-2xl"
          fixedWidth
          icon={icon}
        />
      </div>
      <div className="grow pl-6">
        <h3 className="title-font text-accent mb-2 text-lg font-medium">
          {title}
        </h3>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
