import Link from "next/link";
import React from "react";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavButton({
  href,
  children,
  className = "",
}: NavButtonProps) {
  return (
    <Link
      href={href}
      className={`text-black border-4 border-black rounded-md uppercase font-semibold z-10 transition-colors hover:bg-black duration-700 hover:text-white text-base px-8 py-3.5 ${className}`}
    >
      {children}
    </Link>
  );
}
