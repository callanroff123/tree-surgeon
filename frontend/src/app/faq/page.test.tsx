import { fireEvent, render, screen } from "@testing-library/react";
import FaqPage from "./page";

describe("FaqPage", () => {
  it("renders the shared layout and all supplied questions", () => {
    render(<FaqPage />);

    expect(screen.getByRole("heading", { level: 1, name: "Frequently Asked Questions" })).toBeInTheDocument();
    expect(screen.getByAltText("Tree Surgeon logo")).toBeInTheDocument();
    const workImage = screen.getByAltText("An arborist working on a eucalyptus trunk with climbing ropes.");
    expect(workImage.getAttribute("src")).toContain("512750694_1274375690801039_1795917074377219857_n_wofyuo");
    expect(workImage.closest("section")).toHaveClass("bg-forest");
    expect(screen.getAllByText("(to be filled)")).toHaveLength(18);
    expect(screen.getByText("Do I need council permission to remove a tree?")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Primary navigation" })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("opens each answer through its native disclosure", () => {
    render(<FaqPage />);

    const question = screen.getByText("How do I know if a tree needs to be removed?");
    const disclosure = question.closest("details");

    expect(disclosure).not.toHaveAttribute("open");
    fireEvent.click(question);
    expect(disclosure).toHaveAttribute("open");
  });
});
