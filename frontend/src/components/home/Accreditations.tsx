import type { Accreditation } from "@/types/content";

export function Accreditations({ items }: { items: Accreditation[] }) {
  return (
    <section className="bg-limestone py-14 sm:py-20">
      <div className="page-shell grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4"><p className="eyebrow">Work you can trust</p><h2 className="mt-4 font-serif text-4xl leading-none tracking-[-0.025em] text-forest sm:text-5xl">Clear about the work behind the work.</h2></div>
        <dl className="divide-y divide-forest/15 border-y border-forest/15 lg:col-span-7 lg:col-start-6">
          {items.map((item) => <div className="grid gap-3 py-6 sm:grid-cols-2" key={item.label}><dt className="font-medium text-forest">{item.label}</dt><dd className="text-sm leading-6 text-bark">{item.detail}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
