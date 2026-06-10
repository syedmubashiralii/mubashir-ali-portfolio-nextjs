import { ArrowUpRight, BriefcaseBusiness, LayoutGrid, Mail, PackageOpen } from "lucide-react";
import Link from "next/link";
import type { DirectoryLink } from "@/app/data/site";

const icons = {
  briefcase: BriefcaseBusiness,
  package: PackageOpen,
  panels: LayoutGrid,
  mail: Mail,
};

export default function DirectoryCard({ item }: Readonly<{ item: DirectoryLink }>) {
  const Icon = icons[item.icon];

  return (
    <Link
      href={item.href}
      aria-label={`Open ${item.title}`}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-900/10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700"
    >
      <div className="flex items-start justify-between gap-5">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <Icon size={20} />
        </span>
        <ArrowUpRight
          className="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
          size={19}
        />
      </div>
      <h2 className="mt-8 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
    </Link>
  );
}
