import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactPage from "./contact/page";
import ProjectsPage from "./projects/page";

describe("top-level content routes", () => {
  it("renders projects from the shared portfolio data", () => {
    render(<ProjectsPage />);

    expect(
      screen.getByRole("heading", { name: "Selected work from shipped product environments." }),
    ).toBeInTheDocument();
    expect(screen.getByText("Neo One")).toBeInTheDocument();
  });

  it("renders the existing contact experience", () => {
    render(<ContactPage />);

    expect(screen.getByText("smubashirali620@gmail.com")).toBeInTheDocument();
  });
});
