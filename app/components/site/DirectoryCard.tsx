import { ArrowUpRight, BriefcaseBusiness, LayoutGrid, Mail, PackageOpen } from "lucide-react";
import Link from "next/link";
import type { DirectoryLink } from "@/app/data/site";

const icons = {
  briefcase: BriefcaseBusiness,
  package: PackageOpen,
  panels: LayoutGrid,
  mail: Mail,
};

export default function DirectoryCard({ item, index = 0 }: Readonly<{ item: DirectoryLink; index?: number }>) {
  const Icon = icons[item.icon];

  return (
    <Link
      href={item.href}
      aria-label={`Open ${item.title}`}
      className="group relative overflow-hidden rounded-xl border border-slate-200 bg-[#f7f9f9] p-6 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-700"
    >
      <span className="absolute right-5 top-4 font-mono text-5xl font-bold text-slate-200/80 transition group-hover:text-cyan-100 dark:text-slate-800">
        0{index + 1}
      </span>
      <div className="flex items-start justify-between gap-5">
        <span className="relative grid h-11 w-11 place-items-center rounded-md bg-slate-950 text-cyan-300 shadow-lg shadow-slate-900/15 dark:bg-cyan-300 dark:text-slate-950">
          <Icon size={20} />
        </span>
        <ArrowUpRight
          className="relative text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-700"
          size={19}
        />
      </div>
      <h3 className="mt-10 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
    </Link>
  );
}
