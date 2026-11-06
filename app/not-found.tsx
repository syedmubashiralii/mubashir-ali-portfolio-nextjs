import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/app/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SiteShell>
      <section className="bg-pine-950 px-4 py-24 text-paper sm:px-6 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-volt">404</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.6rem,6vw,4.75rem)] leading-[1] font-bold">
            This page didn&apos;t make it to production.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-sage">The link may be old. The work is still here.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn btn-volt">
              Back to home <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/projects" className="btn btn-ghost-dark">
              See the work
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
