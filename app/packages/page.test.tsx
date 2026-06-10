import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PackagesPage from "./page";

describe("PackagesPage", () => {
  it("shows the confirmed package and honest publication status", () => {
    render(<PackagesPage />);

    expect(screen.getByRole("heading", { name: "Flutter packages and developer tools." })).toBeVisible();
    expect(screen.getByText("system_contact_picker")).toBeVisible();
    expect(screen.getByText("In development")).toBeVisible();
    expect(screen.getByRole("link", { name: "View source" })).toHaveAttribute(
      "href",
      "https://github.com/syedmubashiralii/system_contact_picker",
    );
    expect(screen.queryByRole("link", { name: "View on pub.dev" })).not.toBeInTheDocument();
  });
});
