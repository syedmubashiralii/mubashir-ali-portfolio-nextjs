import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { contact } from "@/app/data/portfolio";
import { siteNavigation } from "@/app/data/site";
import Logo from "./Logo";

const socials = [
  { href: contact.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: contact.github, label: "GitHub", icon: Github },
  { href: contact.x, label: "X", icon: Twitter },
  { href: contact.instagram, label: "Instagram", icon: Instagram },
];

export default function SiteFooter() {
  return (
    <footer className="bg-pine-950 px-4 pt-14 pb-8 text-sage sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo />
              <p className="font-semibold text-paper">{contact.name}</p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6">
              {contact.role}. Building fintech, telecom, and POS apps from {contact.location}, for teams worldwide.
            </p>
            <ul className="mt-5 flex gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-volt hover:text-volt"
                  >
                    <Icon size={17} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer navigation">
            <p className="eyebrow text-paper">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="inline-block py-1 transition-colors hover:text-volt">
                  Home
                </Link>
              </li>
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block py-1 transition-colors hover:text-volt">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-paper">Get in touch</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="inline-block py-1 break-all transition-colors hover:text-volt">
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 transition-colors hover:text-volt"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={contact.resumeUrl} download="Syed_Mubashir_Ali_Resume.pdf" className="inline-block py-1 transition-colors hover:text-volt">
                  Download resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex h-1.5 overflow-hidden rounded-full" aria-hidden="true">
          <span className="flex-[5] bg-volt" />
          <span className="flex-[2] bg-coral" />
          <span className="flex-[2] bg-sun" />
          <span className="flex-[2] bg-lilac" />
        </div>
        <p className="mt-5 text-xs">
          &copy; {new Date().getFullYear()} {contact.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
