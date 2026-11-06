import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/app/components/site/SectionHeading";
import { packages } from "@/app/data/site";

export default function PackagesStrip() {
  return (
    <section className="bg-paper px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Open source"
          title="Below the widget layer, in public."
          intro="Networking runtimes and native platform plugins, published to pub.dev under a verified publisher. Read the source before you hire me."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {packages.map((item) => (
            <article key={item.slug} className="reveal flex min-w-0 flex-col rounded-3xl border border-rule bg-bone p-7">
              <h3 className="font-mono text-xl font-bold tracking-normal break-words">{item.name}</h3>
              <p className="mt-3 flex-1 leading-7 text-moss">{item.description}</p>
              <p className="mt-6 flex items-center gap-2 overflow-x-auto rounded-xl bg-pine-950 px-4 py-3 font-mono text-sm whitespace-nowrap text-volt">
                <Terminal size={15} className="shrink-0" aria-hidden="true" /> flutter pub add {item.name}
              </p>
            </article>
          ))}
        </div>

        <Link href="/packages" className="btn btn-ghost mt-8">
          Explore the packages <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
