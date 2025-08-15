"use client";
import { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
type MenuLinkProps = ComponentProps<typeof Link> & {
  children: React.ReactNode;
  className?: string;
};

export default function MenuLink({
  href,
  children,
  className = "",
  ...rest
}: MenuLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      className={clsx(
        "after:bg-text tracking-widest uppercase ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-500 hover:after:origin-bottom-left hover:after:scale-x-100",
        isActive ? "font-bold" : "",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
