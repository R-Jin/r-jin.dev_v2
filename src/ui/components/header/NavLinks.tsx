"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type link = {
  name: string;
  href: string;
};

const links: link[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Writing", href: "/writing" },
  { name: "Resume", href: "/resume" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="justify-left flex space-x-5 py-8 text-center font-sans text-xs font-semibold text-foreground md:text-xl lg:space-x-10 lg:space-y-0">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`h-1 bg-accent after:w-0 hover:after:w-full`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
