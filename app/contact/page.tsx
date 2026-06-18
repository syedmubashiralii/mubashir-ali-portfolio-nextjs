import type { Metadata } from "next";
import ContactSection from "@/app/components/ContactSection";
import SiteShell from "@/app/components/site/SiteShell";
import { contactMetadata } from "@/app/data/seo";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactSection />
    </SiteShell>
  );
}
