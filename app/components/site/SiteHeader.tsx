"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact } from "@/app/data/portfolio";
import { siteNavigation } from "@/app/data/site";
import Logo from "./Logo";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-pine-950/95 text-paper backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label={contact.name} className="group inline-flex items-center gap-3">
          <Logo className="h-9 w-9 transition-transform group-hover:-rotate-6" />
          <span className="hidden sm:block">
            <strong className="block text-sm leading-none font-semibold">{contact.name}</strong>
            <span className="mt-1 block text-xs text-sage">Senior Flutter &amp; AI-native engineer</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {siteNavigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "bg-white/10 text-volt" : "text-sage hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn btn-volt !min-h-10 !px-4 !text-sm">
            Start a project <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-colors hover:border-volt hover:text-volt md:hidden"
          >
            {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-white/10 px-4 py-3 md:hidden">
          {siteNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
              className="block rounded-xl px-3 py-3 font-medium text-paper transition-colors hover:bg-white/5 hover:text-volt"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
