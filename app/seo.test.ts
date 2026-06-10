import { describe, expect, it } from "vitest";
import nextConfig from "../next.config";
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
});
