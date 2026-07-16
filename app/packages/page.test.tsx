import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PackagesPage from "./page";

describe("PackagesPage", () => {
  it("shows Nexio and the published package catalog with verified publisher links", () => {
    render(<PackagesPage />);

    expect(screen.getByRole("heading", { name: "Flutter packages and developer tools." })).toBeVisible();
    expect(screen.getByText("nexio")).toBeVisible();
    expect(screen.getByText("v0.2.0")).toBeVisible();
    expect(screen.getAllByText("Verified publisher · syedmubashirali.com")).toHaveLength(2);
    expect(screen.getByText("system_contact_picker")).toBeVisible();
    expect(screen.getAllByText("Published")).toHaveLength(2);
    expect(screen.getByRole("link", { name: "View system_contact_picker source" })).toHaveAttribute(
      "href",
      "https://github.com/syedmubashiralii/system_contact_picker",
    );
    expect(screen.getByRole("link", { name: "View system_contact_picker on pub.dev" })).toHaveAttribute(
      "href",
      "https://pub.dev/packages/system_contact_picker",
    );
    expect(screen.getByRole("link", { name: "View nexio on pub.dev" })).toHaveAttribute(
      "href",
      "https://pub.dev/packages/nexio",
    );
  });
});
