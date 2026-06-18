import { describe, expect, it } from "vitest";
import nextConfig from "../next.config";
import { metadata as contactMetadata } from "./contact/page";
import { metadata as homeMetadata } from "./page";
import { metadata as packagesMetadata } from "./packages/page";
import { metadata as projectsMetadata } from "./projects/page";
import robots from "./robots";
import sitemap from "./sitemap";

describe("SEO configuration", () => {
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
    expect(robots()).toEqual(
      expect.objectContaining({
        sitemap: "https://syedmubashirali.com/sitemap.xml",
      }),
    );
  });

  it("redirects www traffic to the apex hostname", async () => {
    expect(await nextConfig.redirects?.()).toContainEqual({
      source: "/:path*",
      has: [{ type: "host", value: "www.syedmubashirali.com" }],
      destination: "https://syedmubashirali.com/:path*",
      permanent: true,
    });
  });

  it("targets qualified Flutter project leads in route metadata", () => {
    expect(homeMetadata.title).toBe("Hire Senior Flutter Developer for Production Apps");
    expect(String(homeMetadata.description).toLowerCase()).toContain("hire a senior flutter developer");
    expect(projectsMetadata.description).toContain("fintech, telecom, POS");
    expect(packagesMetadata.description).toContain("Flutter plugin development");
    expect(contactMetadata.description).toContain("Start a Flutter project");
  });
});
