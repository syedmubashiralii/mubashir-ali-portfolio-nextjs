import { describe, expect, it } from "vitest";
import { certifications, contact, experiences, projects, skillCategories, stats } from "./portfolio";
import { packages } from "./site";

describe("portfolio data", () => {
  it("matches the dates and titles in the linked experience letters", () => {
    const yearsExperience = stats.find((stat) => stat.label === "Years Experience");
    const khastech = experiences.find((experience) => experience.company === "Khastech Solutions");
    const koders = experiences.find((experience) => experience.company === "KodersPoint");
    const impact = experiences.find((experience) => experience.company === "Impact IT Solutions");
    const heapStash = experiences.find((experience) => experience.company.startsWith("HeapStash"));

    expect(yearsExperience?.value).toBe("4+");
    expect(khastech).toEqual(
      expect.objectContaining({
        period: "Jul 2022 - Nov 2023",
        documentLink: "/Experience-Letter-Khastech.pdf",
      }),
    );
    expect(experiences[0].title).toBe("Mobile Application Developer (Flutter)");
    expect(impact?.period).toBe("Apr 2025 - Nov 2025");
    expect(koders).toEqual(
      expect.objectContaining({
        title: "Flutter Developer",
        period: "Jul 2023 - Sep 2025",
        documentLink: "/KP-Experience-Letter.jpg",
      }),
    );
    expect(heapStash).toEqual(
      expect.objectContaining({
        title: "Software Engineer",
        company: "HeapStash Global (for Sheikh Maktoum NEO Technologies, UAE)",
        documentLink: "/Experience-Letter-HeapStash.pdf",
      }),
    );
  });

  it("positions the profile around Flutter, native delivery, and AI", () => {
    const coreTechnologies = skillCategories.find((category) => category.title === "Core Technologies");
    const aiEngineering = skillCategories.find((category) => category.title === "AI-Assisted Engineering");

    expect(contact.role).toBe("Senior Flutter & AI-Native Product Engineer");
    expect(contact.email).toBe("sydmubashirali@gmail.com");
    expect(coreTechnologies?.skills).toEqual(
      expect.arrayContaining(["Flutter", "React Native", "Native Android", "Native iOS"]),
    );
    expect(aiEngineering?.skills).toEqual(expect.arrayContaining(["Agentic AI", "Model Context Protocol"]));
  });

  it("lists the Claude Code professional credential", () => {
    expect(certifications).toContainEqual(
      expect.objectContaining({
        title: "Claude Code for Professional Developers",
        issuer: "Code With Mosh",
        period: "Jun 2026",
        credentialId: "cert_7by1h60w",
      }),
    );
  });

  it("includes telecom work, since the site markets it", () => {
    expect(projects.some((project) => project.category.includes("Telecom"))).toBe(true);
  });

  it("keeps social links free of tracking parameters", () => {
    for (const url of [contact.github, contact.linkedin, contact.instagram, contact.x]) {
      expect(new URL(url).search).toBe("");
    }
  });
});

describe("package data", () => {
  it("publishes only confirmed package links", () => {
    expect(packages).toContainEqual(
      expect.objectContaining({
        slug: "nexio",
        status: "Published",
        publisher: "syedmubashirali.com",
        version: "0.2.0",
        githubUrl: "https://github.com/syedmubashiralii/nexio",
        pubUrl: "https://pub.dev/packages/nexio",
      }),
    );
    expect(packages).toContainEqual(
      expect.objectContaining({
        slug: "system-contact-picker",
        status: "Published",
        version: "0.0.4",
        githubUrl: "https://github.com/syedmubashiralii/system_contact_picker",
        pubUrl: "https://pub.dev/packages/system_contact_picker",
      }),
    );
  });
});
