import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the app engineering and AI-native positioning", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: "Senior app engineering, accelerated by agentic AI.",
      }),
    ).toBeVisible();
    expect(screen.getByText("Available for selected projects")).toBeVisible();
    expect(screen.getByRole("heading", { name: "Product engineering" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Agentic AI & MCPs" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "MCP workflows" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Open Portfolio" })).toHaveAttribute("href", "/portfolio");
    expect(screen.getByRole("link", { name: "Open Flutter Packages" })).toHaveAttribute("href", "/packages");
    expect(screen.getByRole("link", { name: "Open Apps & Projects" })).toHaveAttribute("href", "/projects");
    expect(screen.getByRole("link", { name: "Open Contact" })).toHaveAttribute("href", "/contact");
  });
});
