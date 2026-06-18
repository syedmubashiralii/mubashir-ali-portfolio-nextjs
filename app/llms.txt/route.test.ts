import { describe, expect, it } from "vitest";
import { GET } from "./route";

describe("/llms.txt", () => {
  it("serves the AI-readable portfolio brief as markdown text", async () => {
    const response = await GET();

    expect(response.headers.get("content-type")).toContain("text/markdown");
    await expect(response.text()).resolves.toContain("Hire Syed for");
  });
});
