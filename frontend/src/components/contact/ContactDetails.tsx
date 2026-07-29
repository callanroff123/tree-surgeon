import type { ContactPage } from "@/types/content";

export function ContactDetails({
  heading,
  details,
}: {
  heading: ContactPage["detailsHeading"];
  details: ContactPage["details"];
}) {
  return (
    <section aria-labelledby="contact-details-heading" className="border-t border-forest/25 pt-5">
      <h2 id="contact-details-heading" className="font-serif text-4xl leading-none tracking-[-0.025em] text-forest">
        {heading}
      </h2>
      <dl className="mt-8 divide-y divide-forest/15 border-y border-forest/15">
        {details.map((detail) => (
          <div className="grid gap-2 py-5 sm:grid-cols-2" key={detail.label}>
            <dt className="text-sm font-bold uppercase tracking-[0.13em] text-bark">{detail.label}</dt>
            <dd className="leading-7 text-bark">{detail.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
