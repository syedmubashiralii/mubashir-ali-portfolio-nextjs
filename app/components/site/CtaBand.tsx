import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { contact } from "@/app/data/portfolio";

export default function CtaBand() {
  return (
    <section className="bg-volt px-4 py-16 text-pine-950 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.5fr_auto] lg:items-end">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2 className="mt-4 max-w-4xl text-4xl leading-[1.02] font-bold sm:text-6xl">
            Bring me the idea, the difficult codebase, or the blocked release.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link href="/contact" className="btn btn-pine">
            Start a project <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <a href={`mailto:${contact.email}?subject=Project%20Inquiry`} className="btn btn-ghost">
            <Mail size={17} aria-hidden="true" /> Email me
          </a>
        </div>
      </div>
    </section>
  );
}
