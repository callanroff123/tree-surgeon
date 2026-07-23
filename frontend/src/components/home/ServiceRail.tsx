import type { Service } from "@/types/content";

export function ServiceRail({ services }: { services: Service[] }) {
  return (
    <section className="border-y border-forest/15 bg-forest py-12 text-limestone sm:py-16">
      <div className="page-shell">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div><p className="eyebrow text-clay-light">Bush work ledger</p><h2 className="mt-3 font-serif text-4xl tracking-[-0.025em] sm:text-5xl">Work we can help with.</h2></div>
          <p className="hidden max-w-48 text-right text-sm leading-6 text-limestone/70 sm:block">Scroll through the kinds of work we do.</p>
        </div>
        <div className="service-rail" aria-label="Services offered">
          {services.map((service) => (
            <article className="service-card" key={service.code}>
              <p className="text-sm text-clay-light">{service.code}</p>
              <h3 className="mt-12 font-serif text-3xl leading-tight">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-limestone/70">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
