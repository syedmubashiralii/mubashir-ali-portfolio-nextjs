import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the approved professional directory", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: "Everything I build, in one place." })).toBeVisible();
    expect(screen.getByText("Available for selected opportunities")).toBeVisible();
    expect(screen.getByRole("link", { name: "Open Portfolio" })).toHaveAttribute("href", "/portfolio");
    expect(screen.getByRole("link", { name: "Open Flutter Packages" })).toHaveAttribute("href", "/packages");
    expect(screen.getByRole("link", { name: "Open Apps & Projects" })).toHaveAttribute("href", "/projects");
    expect(screen.getByRole("link", { name: "Open Contact" })).toHaveAttribute("href", "/contact");
  });
});
