import { fireEvent, render, screen } from "@testing-library/react";
import ContactPage from "./page";

describe("ContactPage", () => {
  it("renders the contact introduction, details, and shared quote form", () => {
    render(<ContactPage />);

    expect(screen.getByRole("heading", { level: 1, name: "Contact Us" })).toBeInTheDocument();
    expect(screen.getByAltText("Tree Surgeon logo")).toBeInTheDocument();
    expect(screen.getByText("We’d love to hear from you.")).toBeInTheDocument();
    expect(screen.queryByAltText("An arborist working on a eucalyptus trunk with climbing ropes.")).not.toBeInTheDocument();
    expect(screen.getByText("Business address to be confirmed.")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Get a quote" })).toBeInTheDocument();
    expect(screen.getByLabelText("First name")).toBeRequired();
    expect(screen.getByRole("navigation", { name: "Primary navigation" })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("keeps Contact navigation links pointed at the contact route and the form UI-only", () => {
    render(<ContactPage />);

    screen.getAllByRole("link", { name: "Contact" }).forEach((link) => expect(link).toHaveAttribute("href", "/contact"));
    fireEvent.submit(screen.getByRole("button", { name: /send quote request/i }));
    expect(screen.getByText("Quote submissions are not active yet.")).toBeInTheDocument();
  });
});
