import Link from "next/link";
interface MenuLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function MenuLink({
  href,
  label,
  className = "",
}: MenuLinkProps) {
  return (
    <Link
      href={href}
      className={`font-semibold uppercase tracking-widest ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-text after:transition-transform after:duration-500 after:hover:origin-bottom-left after:hover:scale-x-100 ${className}`}
    >
      {label}
    </Link>
  );
}
