"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/wishes", label: "Wishes" },
  { href: "/gift", label: "Gift" },
  { href: "/poetry", label: "Poetry" },
  { href: "/reasons", label: "Reasons" },
  { href: "/letter", label: "Letter" },
];

export function Nav() {
  const pathname = usePathname();

  if (pathname !== "/letter") {
    return null;
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-40 flex justify-center gap-6 py-4 font-sans text-ink text-sm">
      {links.map((link) => (
        <Link
          className="transition-colors hover:text-violet hover:drop-shadow-[0_0_6px_var(--color-orchid)]"
          href={link.href}
          key={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
