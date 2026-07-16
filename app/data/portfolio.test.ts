import { describe, expect, it } from "vitest";
import { certifications, contact, experiences, skillCategories, stats } from "./portfolio";

describe("portfolio data", () => {
  it("starts public experience in 2021 and hides the StackLoop letter for now", () => {
    const yearsExperience = stats.find((stat) => stat.label === "Years Experience");
    const stackLoop = experiences.find((experience) => experience.company === "StackLoop Technologies");

    expect(yearsExperience?.value).toBe("5+");
    expect(stackLoop).toEqual(
      expect.objectContaining({
        period: "Jul 2021 - Nov 2023",
        documentLink: "",
      }),
    );
  });

  it("positions the profile for mobile, web, desktop, and native delivery", () => {
    const coreTechnologies = skillCategories.find((category) => category.title === "Core Technologies");

    expect(contact.role).toBe("Senior Mobile, Web & Desktop App Developer");
    expect(coreTechnologies?.skills).toEqual(
      expect.arrayContaining(["Flutter", "React Native", "Native Android", "Native iOS"]),
    );
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
