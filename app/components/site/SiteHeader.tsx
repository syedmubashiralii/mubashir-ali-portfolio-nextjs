import Link from "next/link";
import { siteNavigation } from "@/app/data/site";

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link href="/" className="font-bold text-slate-950 dark:text-white">
          Syed Mubashir Ali
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
          {siteNavigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
