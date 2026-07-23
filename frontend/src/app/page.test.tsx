import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders planned homepage landmarks and navigation", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { level: 1, name: "Good work for the trees around your place." })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Primary navigation" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Get a quote" })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
