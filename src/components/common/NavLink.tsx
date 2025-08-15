import { Link } from "@/i18n/navigation";

interface NavLinkProps {
  href: "/" | "/about-us" | "/services" | "/portfolio" | "/contact";
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm leading-5 font-medium text-gray-500 transition duration-150 ease-in-out hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 focus:outline-hidden dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300 dark:focus:border-gray-700 dark:focus:text-gray-300"
    >
      {label}
    </Link>
  );
}
