import { ArrowRight, BadgeCheck, RadioTower } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contact, stats } from "@/app/data/portfolio";

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-pine-950 px-4 pt-12 pb-14 text-paper sm:px-6 lg:px-8 lg:pt-20 lg:pb-20">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-pine-800/70 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <div className="motion-safe:animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-sm font-medium text-paper">
            <span className="h-2 w-2 rounded-full bg-volt" aria-hidden="true" />
            Available for selected projects
          </p>

          <p className="eyebrow mt-8 text-volt">Senior Flutter &amp; AI-native product engineer</p>
          <h1 className="mt-4 text-[clamp(2.9rem,7vw,5.9rem)] leading-[0.98] font-bold">
            Apps that can&apos;t afford to break, <span className="text-volt">shipped at AI speed.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-sage">
            I&apos;m {contact.name}. For 5+ years I&apos;ve built fintech, telecom, and POS products for teams serving
            Africa, the UAE, and Australia. I use coding agents and MCP to move faster, and I review and test everything
            that ships.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-volt">
              Start a project <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/projects" className="btn btn-ghost-dark">
              See the work
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md motion-safe:animate-rise lg:max-w-none">
          <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-coral" />
          <div className="relative overflow-hidden rounded-[2rem] bg-pine-800">
            <div className="relative aspect-[5/5.4]">
              <Image
                src="/profile-image.jpg"
                alt={`Portrait of ${contact.name}, ${contact.role}`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-top mix-blend-lighten"
              />
            </div>
            <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-volt p-4 text-pine-950">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                <RadioTower size={14} aria-hidden="true" /> Building now
              </p>
              <p className="mt-1 font-display text-lg leading-tight font-bold">Yas SelfCare App at Axian Group</p>
            </div>
            <p className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-lilac px-3 py-1.5 text-xs font-semibold text-pine-950">
              <BadgeCheck size={14} aria-hidden="true" /> Verified pub.dev publisher
            </p>
          </div>
        </div>
      </div>

      <dl className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-pine-950 p-5">
            <dd className="font-display text-4xl font-bold text-paper">{stat.value}</dd>
            <dt className="mt-1 text-sm text-sage">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
