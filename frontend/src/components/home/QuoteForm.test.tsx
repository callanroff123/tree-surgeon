import { fireEvent, render, screen } from "@testing-library/react";
import { QuoteForm } from "./QuoteForm";

const content = { title: "Get a quote", introduction: "Tell us about the work.", services: ["Tree pruning"] };

describe("QuoteForm", () => {
  it("renders all required quote fields", () => {
    render(<QuoteForm content={content} />);
    expect(screen.getByLabelText("First name")).toBeRequired();
    expect(screen.getByLabelText("Last name")).toBeRequired();
    expect(screen.getByLabelText("Email address")).toHaveAttribute("type", "email");
    expect(screen.getByLabelText("Address")).toBeRequired();
    expect(screen.getByLabelText("Suburb")).toBeRequired();
    expect(screen.getByLabelText("Postcode")).toBeRequired();
    expect(screen.getByLabelText("Service required")).toBeRequired();
    expect(screen.getByLabelText("Tell us about the work")).toBeInTheDocument();
  });

  it("keeps submissions in the UI and communicates the pending state", () => {
    render(<QuoteForm content={content} />);
    fireEvent.submit(screen.getByRole("button", { name: /send quote request/i }));
    expect(screen.getByText("Quote submissions are not active yet.")).toBeInTheDocument();
  });
});
