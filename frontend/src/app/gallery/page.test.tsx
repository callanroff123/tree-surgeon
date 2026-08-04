import { fireEvent, render, screen, within } from "@testing-library/react";
import { galleryPage } from "@/content/gallery";
import GalleryPage from "./page";

describe("GalleryPage", () => {
  it("renders the shared layout and supplied gallery images", () => {
    render(<GalleryPage />);

    const navigation = screen.getByRole("navigation", { name: "Primary navigation" });
    expect(within(navigation).getByRole("link", { name: "Gallery" })).toHaveAttribute("href", "/gallery");
    expect(within(screen.getByRole("contentinfo")).getByRole("link", { name: "Gallery" })).toHaveAttribute("href", "/gallery");
    expect(screen.getByRole("main").firstElementChild).toHaveClass("hero-section");
    expect(screen.getAllByRole("button", { name: /open gallery image/i })).toHaveLength(galleryPage.images.length);
    expect(screen.getByAltText("Gallery image 1.").closest("button")).toHaveClass("relative", "aspect-square", "overflow-hidden");
    expect(screen.getByRole("region", { name: "Gallery" }).firstElementChild).toHaveClass("grid", "grid-cols-2", "lg:grid-cols-4");
    expect(screen.getByAltText("Gallery image 1.").getAttribute("src")).toContain("tree5_mw7atd");
  });

  it("opens an image and dismisses it with an image click, backdrop click, or Escape", () => {
    render(<GalleryPage />);

    fireEvent.click(screen.getByRole("button", { name: "Open gallery image 3" }));
    const dialog = screen.getByRole("dialog", { name: "Expanded gallery image" });
    expect(dialog).toHaveFocus();

    fireEvent.click(within(dialog).getByAltText("Gallery image 3."));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Open gallery image 3" }));
    fireEvent.click(screen.getByRole("dialog"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Open gallery image 4" }));
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
