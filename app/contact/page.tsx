import type { Metadata } from "next";
import ContactSection from "@/app/components/ContactSection";
import JsonLd from "@/app/components/site/JsonLd";
import SiteShell from "@/app/components/site/SiteShell";
import { buildBreadcrumbJsonLd, contactMetadata } from "@/app/data/seo";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <SiteShell>
      <JsonLd id="breadcrumb-jsonld" data={buildBreadcrumbJsonLd("Contact", "/contact")} />
      <ContactSection as="h1" />
    </SiteShell>
  );
}
