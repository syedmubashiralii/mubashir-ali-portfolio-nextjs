import { describe, expect, it } from "vitest";
import nextConfig from "../next.config";
import { metadata as contactMetadata } from "./contact/page";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildLlmsText,
  buildPersonJsonLd,
  buildProfilePageJsonLd,
  buildProjectListJsonLd,
  buildWebsiteJsonLd,
  coreKeywords,
  portfolioMetadata,
  siteUrl,
} from "./data/seo";
import { faqs } from "./data/site";
import { GET as getLlmsText } from "./llms.txt/route";
import { metadata as homeMetadata } from "./page";
import { metadata as packagesMetadata } from "./packages/page";
import { metadata as projectsMetadata } from "./projects/page";
import robots from "./robots";
import sitemap from "./sitemap";

const siteNameSuffix = " | Syed Mubashir Ali";
const pages = {
  portfolio: portfolioMetadata,
  packages: packagesMetadata,
  projects: projectsMetadata,
  contact: contactMetadata,
};

describe("route metadata", () => {
  it("includes the name in the home title, which the layout template can't add", () => {
    expect(homeMetadata.title).toEqual({ absolute: "Senior Flutter & AI-Native Engineer | Syed Mubashir Ali" });
  });

  it.each(Object.entries(pages))("keeps the %s title and description within search snippet limits", (_, metadata) => {
    expect(`${metadata.title}${siteNameSuffix}`.length).toBeLessThanOrEqual(62);
    expect(String(metadata.description).length).toBeGreaterThanOrEqual(110);
    expect(String(metadata.description).length).toBeLessThanOrEqual(170);
  });

  it("gives every page its own title, description, and keywords", () => {
    const all = [homeMetadata, ...Object.values(pages)];

    expect(new Set(all.map((metadata) => JSON.stringify(metadata.title))).size).toBe(all.length);
    expect(new Set(all.map((metadata) => metadata.description)).size).toBe(all.length);
    for (const metadata of all) {
      const keywords = metadata.keywords as string[];
      expect(keywords).toEqual(expect.arrayContaining(coreKeywords));
      expect(keywords.length).toBeGreaterThan(coreKeywords.length);
      expect(new Set(keywords).size).toBe(keywords.length);
    }
  });

  it("uses a social image small enough for link previews", () => {
    expect(homeMetadata.openGraph?.images).toEqual([expect.objectContaining({ url: "/og.jpg", width: 1200, height: 630 })]);
  });
});

describe("crawl configuration", () => {
  it("publishes every canonical route", () => {
    expect(sitemap().map((entry) => entry.url)).toEqual([
      "https://syedmubashirali.com",
      "https://syedmubashirali.com/portfolio",
      "https://syedmubashirali.com/packages",
      "https://syedmubashirali.com/projects",
      "https://syedmubashirali.com/contact",
    ]);
  });

  it("allows indexing and advertises the sitemap", () => {
    expect(robots()).toEqual(expect.objectContaining({ sitemap: "https://syedmubashirali.com/sitemap.xml" }));
  });

  it("redirects www traffic to the apex hostname", async () => {
    expect(await nextConfig.redirects?.()).toContainEqual({
      source: "/:path*",
      has: [{ type: "host", value: "www.syedmubashirali.com" }],
      destination: "https://syedmubashirali.com/:path*",
      permanent: true,
    });
  });

  it("sends security headers and keeps experience letters out of search", async () => {
    const headers = (await nextConfig.headers?.()) ?? [];

    expect(headers.flatMap((rule) => rule.headers.map((header) => header.key))).toEqual(
      expect.arrayContaining(["X-Content-Type-Options", "X-Frame-Options", "Referrer-Policy", "X-Robots-Tag"]),
    );
  });
});

describe("structured data", () => {
  it("builds a Person entity with absolute credential URLs and verified profiles", () => {
    const person = buildPersonJsonLd();

    expect(person).toEqual(
      expect.objectContaining({
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Syed Mubashir Ali",
        jobTitle: "Senior Flutter & AI-Native Product Engineer",
        knowsAbout: expect.arrayContaining(["Flutter", "React Native", "Agentic AI", "Model Context Protocol"]),
        sameAs: expect.arrayContaining([
          "https://github.com/syedmubashiralii",
          "https://www.linkedin.com/in/syed-mubashir-ali-796122177",
        ]),
      }),
    );
    for (const credential of person.hasCredential) {
      expect(credential.url).toMatch(/^https:\/\//);
    }
  });

  it("links the website and profile page back to the Person entity", () => {
    expect(buildWebsiteJsonLd().publisher).toEqual({ "@id": `${siteUrl}/#person` });
    expect(buildProfilePageJsonLd().mainEntity).toEqual({ "@id": `${siteUrl}/#person` });
  });

  it("mirrors the visible FAQ content", () => {
    expect(buildFaqJsonLd().mainEntity.map((item) => item.name)).toEqual(faqs.map((faq) => faq.question));
  });

  it("builds breadcrumbs from home to the page", () => {
    expect(buildBreadcrumbJsonLd("Projects", "/projects").itemListElement).toEqual([
      expect.objectContaining({ position: 1, item: siteUrl }),
      expect.objectContaining({ position: 2, name: "Projects", item: `${siteUrl}/projects` }),
    ]);
  });

  it("exposes selected projects as an ItemList", () => {
    expect(buildProjectListJsonLd().itemListElement).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          item: expect.objectContaining({ name: "Neo One", applicationCategory: "Fintech" }),
        }),
      ]),
    );
  });
});

describe("/llms.txt", () => {
  it("serves the AI-readable brief as markdown", async () => {
    const response = await getLlmsText();

    expect(response.headers.get("content-type")).toContain("text/markdown");
    await expect(response.text()).resolves.toContain("Hire Syed for");
  });

  it("links the priority pages", () => {
    const text = buildLlmsText();

    expect(text).toContain("Senior Flutter and AI-native product engineer");
    expect(text).toContain("(https://syedmubashirali.com/contact)");
    expect(text).toContain("(https://syedmubashirali.com/packages)");
  });
});
