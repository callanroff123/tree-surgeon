import { render, screen } from "@testing-library/react";
import AboutPage from "./page";

describe("AboutPage", () => {
  it("renders the shared layout and team content", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { level: 1, name: "Who We Are" })).toBeInTheDocument();
    expect(screen.getByText("We're two mates who started this business with a shared love for trees, Aussie nature and honest, hands-on work.")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "The people behind the work." })).toBeInTheDocument();
    expect(screen.getAllByText("Co-Founder & Arborist")).toHaveLength(2);
    expect(screen.getByAltText("Portrait of a Tree Surgeon co-founder.").getAttribute("src")).toContain("res.cloudinary.com%2Fdho1qunu");
    expect(screen.getByAltText("Placeholder portrait for a Tree Surgeon co-founder.").getAttribute("src")).toContain("placeholder_profile_picture.png");
    expect(screen.getByRole("navigation", { name: "Primary navigation" })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("keeps every About navigation link pointed at the About route", () => {
    render(<AboutPage />);

    expect(screen.getAllByRole("link", { name: "About" })).toHaveLength(2);
    screen.getAllByRole("link", { name: "About" }).forEach((link) => expect(link).toHaveAttribute("href", "/about"));
  });
});
