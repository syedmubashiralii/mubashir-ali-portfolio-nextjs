import { Bot, Check, Rocket, ShieldCheck, Smartphone } from "lucide-react";
import SectionHeading from "@/app/components/site/SectionHeading";
import { focusAreas } from "@/app/data/portfolio";

const strengths = [
  {
    icon: Rocket,
    title: "End-to-end delivery",
    text: "From architecture and implementation through release builds, store deployment, and production support.",
  },
  {
    icon: ShieldCheck,
    title: "Production discipline",
    text: "Clean architecture, modular code, attention to performance, and practical fixes for production issues.",
  },
  {
    icon: Smartphone,
    title: "Cross-platform craft",
    text: "Flutter on mobile, web, and desktop, plus React Native, native iOS and Android, payments, maps, and media tools.",
  },
  {
    icon: Bot,
    title: "AI-native workflow",
    text: "Agentic AI, coding agents, and MCP tools, used with deliberate review and verification.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A product engineer across every major screen."
          intro="Flutter on mobile, web, and desktop, plus React Native, native Android and iOS, and Next.js, so one engineer can own the whole product."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {strengths.map(({ icon: Icon, title, text }) => (
              <article key={title} className="reveal rounded-3xl border border-rule bg-paper p-7">
                <Icon size={24} className="text-pine-600" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-moss">{text}</p>
              </article>
            ))}
          </div>

          <aside className="rounded-3xl bg-lilac p-7 text-pine-950">
            <h3 className="text-2xl font-bold">Where I do my best work</h3>
            <ul className="mt-6 space-y-3 font-medium">
              {focusAreas.map((area) => (
                <li key={area} className="flex gap-2">
                  <Check size={18} className="mt-0.5 shrink-0" aria-hidden="true" /> {area}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
