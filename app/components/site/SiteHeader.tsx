import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/app/data/portfolio";
import { siteNavigation } from "@/app/data/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061019]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label="Syed Mubashir Ali">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-cyan-300 font-mono text-xs font-black text-slate-950 transition group-hover:rotate-3">
            SM
          </span>
          <span>
            <strong className="block text-sm leading-none">Syed Mubashir Ali</strong>
            <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-slate-300">
              Senior app engineer
            </span>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="order-3 grid w-full grid-cols-4 gap-1 border-t border-white/10 pt-3 md:order-none md:flex md:w-auto md:gap-x-5 md:border-0 md:pt-0"
        >
          {siteNavigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-center text-[10px] font-semibold uppercase tracking-[0.06em] text-slate-300 transition hover:text-cyan-300 sm:text-xs sm:tracking-[0.1em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={`mailto:${contact.email}?subject=Project%20Inquiry`}
          className="inline-flex h-9 items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 text-xs font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950"
        >
          Let&apos;s work <ArrowUpRight size={14} />
        </Link>
      </div>
    </header>
  );
}
