import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface TechCardProps {
  icon: IconProp;
  className: string;
  title: string;
}

export default function TechCard({ icon, className, title }: TechCardProps) {
  return (
    <div className="group border-accent flex h-32 w-32 flex-col items-center justify-center rounded-md border shadow-md">
      <FontAwesomeIcon
        icon={icon}
        className={`text-6xl text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 ${className}`}
        title={title}
      ></FontAwesomeIcon>
    </div>
  );
}
