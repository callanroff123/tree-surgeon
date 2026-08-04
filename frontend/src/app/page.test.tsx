import { fireEvent, render, screen, within } from "@testing-library/react";
import { siteSettings } from "@/content/site";
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
    expect(within(navigation).queryByRole("link", { name: "Blog" })).not.toBeInTheDocument();
    for (const social of ["Instagram", "Facebook", "LinkedIn"]) {
      expect(within(header).getAllByRole("img", { name: `${social} coming soon` }).every((icon) => !(icon instanceof HTMLAnchorElement))).toBe(true);
    }
    const mobileMenu = screen.getByText("Open navigation menu").parentElement;
    expect(mobileMenu?.closest("details")).not.toHaveAttribute("open");
    fireEvent.click(mobileMenu!);
    const mobileNavigation = screen.getByRole("navigation", { name: "Mobile navigation" });
    expect(within(mobileNavigation).getByRole("link", { name: "Gallery" })).toHaveAttribute("href", "/gallery");
    expect(mobileMenu?.closest("details")).toHaveAttribute("open");
    const sitemap = screen.getByRole("region", { name: "Sitemap" });
    expect(within(sitemap).getAllByRole("link").slice(0, 2).map((link) => link.textContent)).toEqual(["Home", "About"]);
    expect(within(sitemap).queryByRole("link", { name: "Blog" })).not.toBeInTheDocument();
    const footer = screen.getByRole("contentinfo");
    expect(within(footer).getByRole("img", { name: "Instagram coming soon" })).not.toBeInstanceOf(HTMLAnchorElement);
    expect(screen.getByAltText("Tree Surgeon logo")).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Arborist at work" })).toHaveClass("arborist-photo-section");
    expect(screen.getByAltText("An arborist working high in a tree.").getAttribute("src")).toContain("res.cloudinary.com%2Fdho1qunu");
    expect(screen.getByRole("link", { name: `${siteSettings.name} home` }).querySelector("img")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Get a quote" })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
