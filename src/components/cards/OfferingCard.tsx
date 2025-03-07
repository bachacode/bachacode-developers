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
      <div className="mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-blue-accent-100">
        <FontAwesomeIcon className="h-6 w-6 text-accent" icon={icon} />
      </div>
      <div className="grow pl-6">
        <h3 className="title-font mb-2 text-lg font-medium text-gray-900">
          {title}
        </h3>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
