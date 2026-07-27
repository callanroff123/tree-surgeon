import type { AboutPage } from "@/types/content";
import Image from "next/image";

export function FounderProfiles({ teamEyebrow, foundersHeading, founders }: Pick<AboutPage, "teamEyebrow" | "foundersHeading" | "founders">) {
  return (
    <section className="bg-paperbark py-14 text-forest sm:py-20">
      <div className="page-shell">
        <div className="max-w-xl">
          <p className="eyebrow text-bark">{teamEyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl leading-none tracking-[-0.025em] sm:text-5xl">{foundersHeading}</h2>
        </div>
        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-8">
          {founders.map((founder, index) => (
            <article className="border-t border-forest/25 pt-5" key={founder.image.src}>
              <div className="relative aspect-square overflow-hidden bg-eucalyptus">
                <Image className="object-cover" src={founder.image.src} alt={founder.image.alt} fill sizes="(min-width: 64rem) 38rem, 100vw" priority={index === 0} />
              </div>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.13em] text-bark">{founder.role}</p>
              <h3 className="mt-2 font-serif text-3xl tracking-[-0.025em]">{founder.name}</h3>
              <p className="mt-4 max-w-lg leading-7 text-bark">{founder.introduction}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
