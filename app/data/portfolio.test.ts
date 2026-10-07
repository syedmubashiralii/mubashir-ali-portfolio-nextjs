import { describe, expect, it } from "vitest";
import { certifications, contact, experiences, skillCategories, stats } from "./portfolio";

describe("portfolio data", () => {
  it("starts public experience in 2021 and shows the Khastech experience letter", () => {
    const yearsExperience = stats.find((stat) => stat.label === "Years Experience");
    const khastech = experiences.find((experience) => experience.company === "Khastech Solutions");

    expect(yearsExperience?.value).toBe("5+");
    expect(khastech).toEqual(
      expect.objectContaining({
        period: "Jul 2021 - Nov 2023",
        documentLink: "/Experience-Letter-Khastech.pdf",
      }),
    );
  });

  it("positions the profile for mobile, web, desktop, and native delivery", () => {
    const coreTechnologies = skillCategories.find((category) => category.title === "Core Technologies");
    const aiEngineering = skillCategories.find((category) => category.title === "AI-Assisted Engineering");

    expect(contact.role).toBe("Senior Mobile, Web & Desktop App Developer");
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
});
