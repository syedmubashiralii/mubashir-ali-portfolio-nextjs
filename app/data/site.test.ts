import { describe, expect, it } from "vitest";
import { directoryLinks, packages } from "./site";

describe("site data", () => {
  it("exposes the four approved directory destinations", () => {
    expect(directoryLinks.map((item) => item.href)).toEqual([
      "/portfolio",
      "/packages",
      "/projects",
      "/contact",
    ]);
  });

  it("publishes only confirmed package links", () => {
    expect(packages).toContainEqual(
      expect.objectContaining({
        slug: "system-contact-picker",
        status: "Published",
        githubUrl: "https://github.com/syedmubashiralii/system_contact_picker",
        pubUrl: "https://pub.dev/packages/system_contact_picker",
      }),
    );
  });
});
