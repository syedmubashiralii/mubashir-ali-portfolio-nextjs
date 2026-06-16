import { describe, expect, it } from "vitest";
import { experiences, stats } from "./portfolio";

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
});
