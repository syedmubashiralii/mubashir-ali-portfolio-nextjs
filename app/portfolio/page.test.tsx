import { render, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import PortfolioPage from "./page";

const scrollIntoView = vi.fn();

describe("PortfolioPage", () => {
  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
      configurable: true,
      value: scrollIntoView,
    });
    window.history.replaceState(null, "", "/portfolio#projects");
  });

  afterEach(() => {
    scrollIntoView.mockReset();
    window.history.replaceState(null, "", "/");
  });

  it("scrolls to the requested section after client rendering", async () => {
    render(<PortfolioPage />);

    await waitFor(() => {
      expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "auto", block: "start" });
    });
    expect(document.documentElement.style.scrollBehavior).toBe("");
  });
});
