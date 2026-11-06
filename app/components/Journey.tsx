import { ExternalLink } from "lucide-react";
import SectionHeading from "@/app/components/site/SectionHeading";
import { experiences } from "@/app/data/portfolio";

export default function Journey() {
  return (
    <section id="experience" className="bg-paper px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="A work history built around shipped products."
          intro="Telecom, fintech, POS, travel, e-commerce, ML and media, and consumer platforms."
        />

        <ol className="mt-12 border-t border-pine-950">
          {experiences.map((experience) => (
            <li
              key={`${experience.company}-${experience.period}`}
              className="grid gap-6 border-b border-rule py-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14"
            >
              <div>
                <p className="flex flex-wrap items-center gap-2 font-mono text-sm text-moss">
                  {experience.period}
                  {experience.badge && (
                    <span className="rounded-full bg-volt px-2.5 py-0.5 font-sans text-xs font-semibold text-pine-950">
                      {experience.badge}
                    </span>
                  )}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{experience.title}</h3>
                <p className="mt-1 font-semibold text-pine-600">
                  {experience.companyUrl ? (
                    <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {experience.company}
                    </a>
                  ) : (
                    experience.company
                  )}
                </p>
                <p className="mt-1 text-sm text-moss">{experience.location}</p>
                {experience.documentLink && (
                  <a
                    href={experience.documentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 py-1 text-sm font-semibold underline underline-offset-4 hover:text-pine-600"
                  >
                    Experience letter <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </div>

              <div>
                <ul className="space-y-3">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 leading-7 text-pine-800">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
