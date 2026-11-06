import { fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ContactPage from "./contact/page";
import NotFound from "./not-found";
import PackagesPage from "./packages/page";
import HomePage from "./page";
import PortfolioPage from "./portfolio/page";
import ProjectsPage from "./projects/page";

const pages = [
  ["home", HomePage, "Apps that can't afford to break, shipped at AI speed."],
  ["portfolio", PortfolioPage, "Five years of shipped products, in one place."],
  ["projects", ProjectsPage, "Flutter apps built for real operations."],
  ["packages", PackagesPage, "Flutter packages and developer tools."],
  ["contact", ContactPage, "Need a product built, rescued, or sped up?"],
  ["404", NotFound, "This page didn't make it to production."],
] as const;

describe("every route", () => {
  it.each(pages)("%s has exactly one h1", (_, Page, heading) => {
    render(<Page />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeVisible();
  });
});

describe("SiteHeader", () => {
  it("links to every top-level route and opens the mobile menu on demand", () => {
    render(<HomePage />);
    const header = within(screen.getByRole("banner"));

    expect(header.getByRole("link", { name: "Syed Mubashir Ali" })).toHaveAttribute("href", "/");
    for (const [name, href] of [
      ["Portfolio", "/portfolio"],
      ["Packages", "/packages"],
      ["Projects", "/projects"],
      ["Contact", "/contact"],
    ]) {
      expect(header.getByRole("link", { name })).toHaveAttribute("href", href);
    }

    expect(header.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
    fireEvent.click(header.getByRole("button", { name: "Open menu" }));
    expect(header.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(header.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
  });
});

describe("HomePage", () => {
  it("renders the positioning, services, and FAQ", () => {
    render(<HomePage />);

    expect(screen.getByText("Available for selected projects")).toBeVisible();
    expect(screen.getByText("Yas SelfCare App at Axian Group")).toBeVisible();
    expect(screen.getByRole("heading", { name: "Yas SelfCare App" })).toBeVisible();
    expect(document.body).not.toHaveTextContent("Tanzania");
    expect(screen.getByRole("heading", { name: "Product engineering" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Agentic AI & MCPs" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Build, rescue & scale" })).toBeVisible();
    expect(screen.getByText("Do you handle App Store and Google Play releases?")).toBeVisible();
    expect(document.getElementById("faq-jsonld")).toBeInTheDocument();
  });
});

describe("PortfolioPage", () => {
  it("keeps every section anchor the section nav and old links rely on", () => {
    const { container } = render(<PortfolioPage />);

    expect(screen.getByText(/Managed a Flutter desktop POS system/)).toBeVisible();

    for (const id of ["home", "about", "ai", "experience", "skills", "credentials", "projects", "resume", "contact"]) {
      expect(container.querySelector(`#${id}`), id).toBeInTheDocument();
      expect(screen.getByRole("navigation", { name: "Portfolio sections" }).querySelector(`[href="/portfolio#${id}"]`), id).toBeInTheDocument();
    }
  });
});

describe("ProjectsPage", () => {
  it("lists Yas SelfCare and describes iPOS as Flutter desktop", () => {
    render(<ProjectsPage />);

    expect(screen.getByRole("heading", { name: "Yas SelfCare App" })).toBeVisible();
    expect(screen.queryByRole("heading", { name: "Tanzania Super App" })).not.toBeInTheDocument();
    expect(screen.getByText(/Flutter desktop POS for University of Wollongong/)).toBeVisible();
  });

  it("doesn't link to retired store and project pages", () => {
    render(<ProjectsPage />);

    expect(screen.getByRole("heading", { name: "Neo One" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Open Neo One" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Open Neo Pass" })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Open BrightFlix" })).toBeInTheDocument();
  });
});

describe("PackagesPage", () => {
  it("shows both packages with verified publisher links", () => {
    render(<PackagesPage />);

    expect(screen.getByRole("heading", { name: "nexio" })).toBeVisible();
    expect(screen.getByText("v0.2.0")).toBeVisible();
    expect(screen.getByText("v0.0.4")).toBeVisible();
    expect(screen.getAllByText("Verified publisher · syedmubashirali.com")).toHaveLength(2);
    expect(screen.getByRole("link", { name: "View system_contact_picker source" })).toHaveAttribute(
      "href",
      "https://github.com/syedmubashiralii/system_contact_picker",
    );
    expect(screen.getByRole("link", { name: "View nexio on pub.dev" })).toHaveAttribute(
      "href",
      "https://pub.dev/packages/nexio",
    );
  });
});

describe("ContactPage", () => {
  afterEach(() => vi.restoreAllMocks());

  function fillForm() {
    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Ada" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "ada@example.com" } });
    fireEvent.change(screen.getByLabelText("What do you need?"), { target: { value: "App rescue" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Release is blocked." } });
  }

  it("opens WhatsApp with the message and keeps the form filled in", () => {
    const open = vi.spyOn(window, "open").mockImplementation(() => null);
    render(<ContactPage />);
    fillForm();

    fireEvent.click(screen.getByRole("button", { name: "Send via WhatsApp" }));

    const url = String(open.mock.calls[0][0]);
    expect(url).toContain("https://wa.me/923105205275?text=");
    expect(decodeURIComponent(url)).toContain("Release is blocked.");
    expect(screen.getByLabelText("Message")).toHaveValue("Release is blocked.");
    expect(screen.getByRole("status")).toHaveTextContent("WhatsApp should open");
  });

  it("uses the email path, not WhatsApp, when that button submits", () => {
    const open = vi.spyOn(window, "open").mockImplementation(() => null);
    // jsdom can't navigate to mailto:, and this test only cares which path ran.
    vi.spyOn(console, "error").mockImplementation(() => {});
    render(<ContactPage />);
    fillForm();

    fireEvent.click(screen.getByRole("button", { name: "Send via email" }));

    expect(open).not.toHaveBeenCalled();
    expect(screen.getByRole("status")).toHaveTextContent("Your email app should open");
  });

  it("offers email as a direct contact path", () => {
    render(<ContactPage />);

    expect(screen.getByRole("button", { name: "Send via email" })).toBeVisible();
    expect(within(screen.getByRole("main")).getByRole("link", { name: "sydmubashirali@gmail.com" })).toHaveAttribute(
      "href",
      "mailto:sydmubashirali@gmail.com?subject=Project%20Inquiry",
    );
    expect(within(screen.getByRole("main")).getByRole("link", { name: "Chat on WhatsApp" })).toBeVisible();
  });
});
