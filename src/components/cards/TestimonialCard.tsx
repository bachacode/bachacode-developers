import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

interface TestimonialCardProps {
  testimony: string;
  name: string;
  profession: string;
}

export default function TestimonialCard({
  testimony,
  name,
  profession,
}: TestimonialCardProps) {
  return (
    <div className="w-full p-4 md:w-1/2">
      <div className="h-full rounded bg-white p-8 shadow-md">
        <FontAwesomeIcon
          className="h-8 w-8 pb-1.5 text-accent"
          icon={faQuoteRight}
        />
        <p className="mb-6 leading-relaxed">{testimony}</p>
        <span className="inline-flex items-center">
          <span className="flex flex-grow flex-col">
            <span className="title-font font-medium text-gray-900">{name}</span>
            <span className="text-sm text-gray-500">{profession}</span>
          </span>
        </span>
      </div>
    </div>
  );
}
