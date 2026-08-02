import { QuoteFormFields } from "@/components/home/QuoteForm";
import type { HomePage } from "@/types/content";

export function ContactQuoteForm({
  content,
}: {
  content: HomePage["quoteForm"];
}) {
  return (
    <section
      aria-labelledby="contact-quote-heading"
      className="quote-section border-t border-limestone/25 pt-5"
    >
      <h2
        id="contact-quote-heading"
        className="mt-4 font-serif text-4xl leading-none tracking-[-0.025em] text-limestone sm:text-5xl"
      >
        {content.title}
      </h2>
      <p className="mt-5 max-w-xl leading-7 text-limestone/85">
        {content.introduction}
      </p>
      <QuoteFormFields content={content} className="mt-8" />
    </section>
  );
}
