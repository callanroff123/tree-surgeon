import { render, screen, within } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders planned homepage landmarks and navigation", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { level: 1, name: "Good work for the trees around your place." })).toBeInTheDocument();
    const navigation = screen.getByRole("navigation", { name: "Primary navigation" });
    const header = screen.getByRole("banner");
    expect(navigation).toBeInTheDocument();
    expect(within(navigation).getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(within(navigation).getAllByRole("link").slice(0, 2).map((link) => link.textContent)).toEqual(["Home", "About"]);
    expect(within(header).getByRole("img", { name: "Instagram coming soon" })).not.toBeInstanceOf(HTMLAnchorElement);
    expect(within(header).getByRole("img", { name: "Facebook coming soon" })).not.toBeInstanceOf(HTMLAnchorElement);
    expect(within(header).getByRole("img", { name: "LinkedIn coming soon" })).not.toBeInstanceOf(HTMLAnchorElement);
    const sitemap = screen.getByRole("region", { name: "Sitemap" });
    expect(within(sitemap).getAllByRole("link").slice(0, 2).map((link) => link.textContent)).toEqual(["Home", "About"]);
    const footer = screen.getByRole("contentinfo");
    expect(within(footer).getByRole("img", { name: "Instagram coming soon" })).not.toBeInstanceOf(HTMLAnchorElement);
    expect(screen.getByAltText("Tree Surgeon logo")).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Arborist at work" })).toHaveClass("arborist-photo-section");
    expect(screen.getByAltText("An arborist working high in a tree.").getAttribute("src")).toContain("res.cloudinary.com%2Fdho1qunu");
    expect(screen.getByRole("link", { name: "Tree Surgeon home" }).querySelector("img")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Get a quote" })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
