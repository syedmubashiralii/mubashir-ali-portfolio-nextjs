import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("uses route-aware portfolio anchors", () => {
    render(<Navbar />);

    expect(screen.getAllByRole("link", { name: "Home" })[0]).toHaveAttribute("href", "/portfolio#home");
    expect(screen.getAllByRole("link", { name: "Projects" })[0]).toHaveAttribute(
      "href",
      "/portfolio#projects",
    );
    expect(screen.getAllByRole("link", { name: "Contact" })[0]).toHaveAttribute(
      "href",
      "/portfolio#contact",
    );
  });
});
