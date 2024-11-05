import React from "react";
import Heading from "./Heading";

interface PageSectionWrapperProps {
  titleId: string;
  titleName: string;
  subtitle: string;
  altBackground?: boolean;
  children: React.ReactNode;
}

export default function PageSectionWrapper({
  titleId,
  titleName,
  subtitle,
  altBackground = false,
  children,
}: PageSectionWrapperProps) {
  return (
    <div
      className={`w-full flex justify-center ${
        altBackground ? "bg-orange-primary-50" : "bg-white"
      }`}
    >
      <div className="container px-4 py-6 items-center flex flex-col space-y-3">
        {/* Title*/}
        <Heading id={titleId} title={titleName} subtitle={subtitle} />
        {children}
      </div>
    </div>
  );
}
