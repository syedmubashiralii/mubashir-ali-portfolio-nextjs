import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SiteHeader from "./SiteHeader";

describe("SiteHeader", () => {
  it("links to every top-level route", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "Syed Mubashir Ali" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Portfolio" })).toHaveAttribute("href", "/portfolio");
    expect(screen.getByRole("link", { name: "Packages" })).toHaveAttribute("href", "/packages");
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "/projects");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");
  });
});
