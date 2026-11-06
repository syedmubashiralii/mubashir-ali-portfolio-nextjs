import { ArrowUpRight, GraduationCap } from "lucide-react";
import SectionHeading from "@/app/components/site/SectionHeading";
import { certifications, education } from "@/app/data/portfolio";

export default function Credentials() {
  return (
    <section id="credentials" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Credentials" title="Education and certifications." />

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-3xl bg-sun p-7 text-pine-950">
            <GraduationCap size={28} aria-hidden="true" />
            <h3 className="mt-10 text-2xl font-bold">{education.degree}</h3>
            <p className="mt-3 font-semibold">{education.institution}</p>
            <p className="mt-1 font-mono text-sm">{education.period}</p>
          </article>

          <ul className="grid gap-5 sm:grid-cols-2">
            {certifications.map((certification) => (
              <li key={certification.title}>
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-rule bg-paper p-6 transition-colors hover:border-pine-950"
                >
                  <span className="flex items-start justify-between gap-3 text-sm font-semibold text-pine-600">
                    {certification.issuer} · {certification.period}
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="mt-4 font-display text-lg leading-snug font-bold">{certification.title}</span>
                  {certification.credentialId && (
                    <span className="mt-3 font-mono text-xs text-moss">ID {certification.credentialId}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
