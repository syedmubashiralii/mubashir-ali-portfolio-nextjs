import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/app/components/site/SectionHeading";
import { experiences } from "@/app/data/portfolio";

export default function WorkHistory() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Where I've shipped"
          title="Five companies. Real users, real money, real deadlines."
          intro="At Khastech alone, I developed and published 20+ Flutter apps to Google Play and the App Store."
        />

        <ol className="mt-12 border-t border-pine-950">
          {experiences.map((experience) => (
            <li
              key={`${experience.company}-${experience.period}`}
              className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[1.3fr_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <h3 className="text-xl font-bold">{experience.company.split(" (")[0]}</h3>
              <p className="text-moss">{experience.title}</p>
              <p className="font-mono text-sm text-moss">{experience.period}</p>
            </li>
          ))}
        </ol>

        <Link href="/portfolio#experience" className="btn btn-ghost mt-8">
          Read the full experience <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
