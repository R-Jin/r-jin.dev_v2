"use client";
import Link from "next/link";

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
  return (
    <nav className="text-xs py-8 space-x-5 font-sans font-semibold flex text-center justify-left">
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="p-10">
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
