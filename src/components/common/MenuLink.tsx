"use client";
import { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
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
        "uppercase tracking-widest ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-text after:transition-transform after:duration-500 after:hover:origin-bottom-left after:hover:scale-x-100",
        isActive ? "font-bold" : "",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
