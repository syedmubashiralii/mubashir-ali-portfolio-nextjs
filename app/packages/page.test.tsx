import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PackagesPage from "./page";

describe("PackagesPage", () => {
  it("shows the published package with source and pub.dev links", () => {
    render(<PackagesPage />);

    expect(screen.getByRole("heading", { name: "Flutter packages and developer tools." })).toBeVisible();
    expect(screen.getByText("system_contact_picker")).toBeVisible();
    expect(screen.getByText("Published")).toBeVisible();
    expect(screen.getByRole("link", { name: "View source" })).toHaveAttribute(
      "href",
      "https://github.com/syedmubashiralii/system_contact_picker",
    );
    expect(screen.getByRole("link", { name: "View on pub.dev" })).toHaveAttribute(
      "href",
      "https://pub.dev/packages/system_contact_picker",
    );
  });
});
