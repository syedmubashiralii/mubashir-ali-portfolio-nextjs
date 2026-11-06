import {
  ArrowUpRight,
  Building2,
  Camera,
  Clapperboard,
  Code2,
  Github,
  GraduationCap,
  HeartPulse,
  MapPinned,
  Plane,
  RadioTower,
  ShoppingCart,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { contact, projects } from "@/app/data/portfolio";

const icons: Record<string, LucideIcon> = {
  "Yas SelfCare App": RadioTower,
  iPOS: Building2,
  Pulse: GraduationCap,
  "Neo One": WalletCards,
  "Neo Pass": Plane,
  Elemed: HeartPulse,
  MyClickerr: Camera,
  BrightFlix: Clapperboard,
  "Nop Commerce App": ShoppingCart,
  "Buddy Tracker": MapPinned,
};

const tones = ["bg-volt", "bg-coral", "bg-lilac", "bg-sun"];

type Project = (typeof projects)[number];

export function ProjectCard({ project, index }: Readonly<{ project: Project; index: number }>) {
  const Icon = icons[project.title] ?? Code2;
  const HeadingTone = tones[index % tones.length];

  return (
    <article className="reveal flex h-full flex-col overflow-hidden rounded-3xl border border-rule bg-paper">
      <div className={`p-6 text-pine-950 ${HeadingTone}`}>
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold">{project.category}</p>
          <Icon size={22} aria-hidden="true" />
        </div>
        <h3 className="mt-10 text-3xl leading-tight font-bold">{project.title}</h3>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="leading-7 text-moss">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag} className="chip !text-xs">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-sm font-semibold">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="inline-flex items-center gap-1.5 py-1 underline underline-offset-4 hover:text-pine-600"
            >
              Open project <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source`}
              className="inline-flex items-center gap-1.5 py-1 underline underline-offset-4 hover:text-pine-600"
            >
              <Github size={15} aria-hidden="true" /> Code
            </a>
          )}
          {!project.liveLink && !project.githubLink && (
            <Link href="/contact" className="inline-flex items-center gap-1.5 py-1 underline underline-offset-4 hover:text-pine-600">
              Discuss similar work <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectGrid({ items = projects }: Readonly<{ items?: readonly Project[] }>) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}

export function GithubNote() {
  return (
    <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl bg-pine-950 p-7 text-paper sm:flex-row sm:items-center">
      <p className="max-w-2xl leading-7 text-sage">
        Many of these are private client products. Open-source packages and public code live on GitHub.
      </p>
      <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-volt shrink-0">
        <Github size={17} aria-hidden="true" /> Visit GitHub
      </a>
    </div>
  );
}
