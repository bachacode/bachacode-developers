import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  id: string;
}

export default function Heading({ title, subtitle, id }: HeadingProps) {
  return (
    <div className="flex flex-col items-center space-y-2 text-center pb-6 px-8 md:px-6 lg:px-0">
      <h2 id={id} className="uppercase font-semibold text-accent text-4xl">
        {title}
      </h2>
      {subtitle && <p className="font-extralight text-xl">{subtitle}</p>}
      <div className="w-12 border-t-2 border-primary pb-4"></div>
    </div>
  );
}
