"use client";

import { useState } from "react";
import type { HomePage } from "@/types/content";

export function QuoteForm({ content }: { content: HomePage["quoteForm"] }) {
  return (
    <section
      id="quote"
      className="quote-section bg-paperbark py-14 text-forest sm:py-20"
    >
      <div className="page-shell grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="eyebrow text-bark">Start here</p>
          <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-[-0.035em] sm:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-bark">
            {content.introduction}
          </p>
        </div>
        <QuoteFormFields content={content} className="lg:col-span-7 lg:col-start-6" />
      </div>
    </section>
  );
}

export function QuoteFormFields({
  content,
  className = "",
}: {
  content: HomePage["quoteForm"];
  className?: string;
}) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Quote submissions are not active yet.");
  }

  return (
    <form className={`grid gap-x-5 gap-y-6 sm:grid-cols-2 ${className}`} onSubmit={handleSubmit}>
      <Field label="First name" name="firstName" autoComplete="given-name" />
      <Field label="Last name" name="lastName" autoComplete="family-name" />
      <Field label="Email address" name="email" type="email" autoComplete="email" />
      <Field label="Address" name="address" autoComplete="street-address" />
      <Field label="Suburb" name="suburb" autoComplete="address-level2" />
      <Field label="Postcode" name="postcode" autoComplete="postal-code" />
      <label className="field-label sm:col-span-2">
        Service required
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Select a service
          </option>
          {content.services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>
      <label className="field-label sm:col-span-2">
        Tell us about the work
        <textarea name="message" rows={5} />
      </label>
      <div className="sm:col-span-2">
        <button className="submit-button" type="submit">
          Send quote request <span aria-hidden="true">↘</span>
        </button>
        <p className="mt-3 min-h-6 text-sm" aria-live="polite">
          {message}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete: string;
}) {
  return (
    <label className="field-label">
      {label}
      <input name={name} type={type} autoComplete={autoComplete} required />
    </label>
  );
}
