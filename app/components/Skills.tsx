import SectionHeading from "@/app/components/site/SectionHeading";
import { skillCategories } from "@/app/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="bg-pine-950 px-4 py-20 text-paper sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tone="dark"
          eyebrow="Skills"
          title="One toolkit for mobile, web, and desktop."
          intro="Flutter and Dart at the core, with native platforms, modern web, backend integration, payments, media tooling, and release workflows around it."
        />

        <dl className="mt-12 border-t border-white/25">
          {skillCategories.map((category) => (
            <div key={category.title} className="grid gap-3 border-b border-white/10 py-5 md:grid-cols-[0.6fr_1.4fr] md:gap-8">
              <dt className="font-display text-lg font-semibold">{category.title}</dt>
              <dd className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip chip-dark">
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
