import { describe, expect, it } from "vitest";
import {
  buildLlmsText,
  buildPersonJsonLd,
  buildProjectListJsonLd,
  buildWebsiteJsonLd,
  siteUrl,
} from "./seo";

describe("AI-ready SEO data", () => {
  it("builds a Person entity with hiring intent and verified profiles", () => {
    expect(buildPersonJsonLd()).toEqual(
      expect.objectContaining({
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Syed Mubashir Ali",
        jobTitle: "Senior Flutter Developer",
        knowsAbout: expect.arrayContaining(["Flutter", "Dart", "Fintech apps", "Telecom self-care"]),
        sameAs: expect.arrayContaining([
          "https://github.com/syedmubashiralii",
          "https://www.linkedin.com/in/syed-mubashir-ali-796122177",
        ]),
      }),
    );
  });

  it("builds WebSite JSON-LD around project lead acquisition", () => {
    expect(buildWebsiteJsonLd()).toEqual(
      expect.objectContaining({
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        inLanguage: "en",
        about: expect.arrayContaining(["Flutter app development", "Production mobile apps"]),
        publisher: { "@id": `${siteUrl}/#person` },
      }),
    );
  });

  it("exposes selected projects as an ItemList for AI retrieval", () => {
    const jsonLd = buildProjectListJsonLd();

    expect(jsonLd).toEqual(
      expect.objectContaining({
        "@type": "ItemList",
        name: "Flutter app development projects",
      }),
    );
    expect(jsonLd.itemListElement).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          item: expect.objectContaining({
            name: "Neo One",
            applicationCategory: "Fintech",
          }),
        }),
      ]),
    );
  });

  it("creates a concise llms.txt brief for AI assistants", () => {
    const text = buildLlmsText();

    expect(text).toContain("# Syed Mubashir Ali");
    expect(text).toContain("Senior Flutter Developer");
    expect(text).toContain("- [Start a Flutter project](https://syedmubashirali.com/contact)");
    expect(text).toContain("- [Flutter packages](https://syedmubashirali.com/packages)");
  });
});
