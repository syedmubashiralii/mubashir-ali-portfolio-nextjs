import { Award, Bot, Network, ShieldCheck, Workflow } from "lucide-react";
import SectionHeading from "@/app/components/site/SectionHeading";

const capabilities = [
  {
    icon: Bot,
    title: "AI coding agents",
    text: "Agentic planning, codebase exploration, implementation, refactoring, and review workflows.",
  },
  {
    icon: Network,
    title: "MCP integrations",
    text: "Connecting agents to repositories, documentation, tools, services, and structured product context.",
  },
  {
    icon: Workflow,
    title: "AI-assisted delivery",
    text: "Shorter feedback loops across discovery, implementation, testing, documentation, and release work.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering guardrails",
    text: "Architecture, privacy, security, and testing decisions stay with me.",
  },
] as const;

const workflow = [
  "Understand the product and codebase",
  "Connect the right context and tools",
  "Build in small verified slices",
  "Review, test, and ship",
] as const;

export default function AgenticAI({ id }: Readonly<{ id?: string }>) {
  return (
    <section id={id} className="bg-pine-900 px-4 py-20 text-paper sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tone="dark"
          eyebrow="Agentic AI & MCPs"
          title="AI speeds up the work. I stay accountable for what ships."
          intro="Agents help me understand systems faster and execute with more context. Senior engineering judgment still drives every architectural choice and production decision."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-pine-900 p-7">
                <Icon size={24} className="text-volt" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-sage">{text}</p>
              </article>
            ))}
          </div>

          <aside className="flex flex-col rounded-3xl bg-volt p-7 text-pine-950">
            <h3 className="text-2xl font-bold">The delivery loop</h3>
            <ol className="mt-6 flex-1 space-y-4">
              {workflow.map((step, index) => (
                <li key={step} className="flex items-baseline gap-3 font-medium">
                  <span className="font-mono text-sm font-bold">0{index + 1}</span> {step}
                </li>
              ))}
            </ol>
            <p className="mt-8 flex gap-2 border-t border-pine-950/25 pt-5 text-sm font-medium">
              <Award size={17} className="shrink-0" aria-hidden="true" />
              Claude Code for Professional Developers certificate, Code With Mosh, June 2026.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
