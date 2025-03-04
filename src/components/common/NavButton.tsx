import { Link } from "@/i18n/routing";
import React, { ComponentProps } from "react";

type NavButtonProps = ComponentProps<typeof Link> & {
  children: React.ReactNode;
  className?: string;
};

export default function NavButton({
  href,
  children,
  className = "",
}: NavButtonProps) {
  return (
    <Link
      href={href}
      className={`z-10 rounded-md border-4 border-black px-8 py-3.5 text-base font-semibold uppercase text-black transition-colors duration-700 hover:bg-black hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
}
