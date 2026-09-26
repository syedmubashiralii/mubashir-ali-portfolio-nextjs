import SiteHeader from "./SiteHeader";
import Link from "next/link";
import { contact } from "@/app/data/portfolio";

export default function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[#eef2f3] text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <SiteHeader />
      <main>{children}</main>
      <footer className="border-t border-white/10 bg-[#061019] px-4 py-9 text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-white">Syed Mubashir Ali</p>
            <p className="mt-1 text-xs">Senior app engineering · Agentic AI · MCP workflows</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <Link href={`mailto:${contact.email}`} className="transition hover:text-cyan-300">
              {contact.email}
            </Link>
            <Link href={contact.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-300">
              GitHub
            </Link>
            <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-300">
              LinkedIn
            </Link>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
