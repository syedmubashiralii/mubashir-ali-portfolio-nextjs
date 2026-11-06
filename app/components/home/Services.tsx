import { Bot, Check, Layers, LifeBuoy } from "lucide-react";
import SectionHeading from "@/app/components/site/SectionHeading";
import { leadServices } from "@/app/data/site";

const presentation = [
  { icon: Layers, tone: "bg-sun" },
  { icon: Bot, tone: "bg-lilac" },
  { icon: LifeBuoy, tone: "bg-coral" },
];

export default function Services() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What I do"
          title="Senior ownership, from first commit to production."
          intro="Hire me to build something new, bring AI into how your team ships, or take over the app nobody else wants to touch."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {leadServices.map((service, index) => {
            const { icon: Icon, tone } = presentation[index];

            return (
              <article key={service.title} className={`reveal flex flex-col rounded-3xl p-7 text-pine-950 ${tone}`}>
                <Icon size={28} aria-hidden="true" />
                <h3 className="mt-10 text-2xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7">{service.description}</p>
                <ul className="mt-6 space-y-2 border-t border-pine-950/20 pt-5 text-sm font-medium">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <Check size={16} className="mt-0.5 shrink-0" aria-hidden="true" /> {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
