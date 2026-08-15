"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

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
  const isLetter = pathname === "/letter";
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isLetter) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(navRef.current, { pointerEvents: "none", visibility: "hidden" });

      gsap.to(navRef.current, {
        duration: 1,
        ease: "power2.out",
        opacity: 1,
        pointerEvents: "auto",
        scrollTrigger: {
          start: "top 90%",
          trigger: "#letter-reveal",
        },
        visibility: "visible",
      });
    });

    return () => ctx.revert();
  }, [isLetter]);

  if (!isLetter) {
    return null;
  }

  return (
    <nav
      className="pointer-events-none invisible fixed inset-x-0 top-0 z-40 flex justify-center gap-6 py-4 font-sans text-ink text-sm opacity-0"
      ref={navRef}
    >
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
