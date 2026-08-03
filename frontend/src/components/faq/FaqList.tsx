import type { FaqItem, HeroImage } from "@/types/content";
import Image from "next/image";
import Link from "next/link";

export function FaqList({
  items,
  workImage,
}: {
  items: FaqItem[];
  workImage: HeroImage;
}) {
  return (
    <section
      className="bg-forest py-14 text-limestone sm:py-20"
      aria-labelledby="faq-list-heading"
    >
      <div className="page-shell grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="eyebrow text-clay-light">Common questions</p>
          <div className="mt-6 max-w-sm">
            <p className="font-serif text-3xl leading-tight">
              Not sure if your question is listed?
            </p>
            <p className="mt-5 leading-7 text-limestone/85">
              Every property and every tree is different.
            </p>
            <p className="mt-4 leading-7 text-limestone/85">
              If you can&apos;t find the answer you&apos;re looking for, we&apos;re
              always happy to talk through your situation.
            </p>
            <Link className="text-link mt-6 inline-flex" href="/contact">
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>

          <figure className="relative mt-8 aspect-[4/5] overflow-hidden bg-eucalyptus">
            <Image
              className="object-cover"
              src={workImage.src}
              alt={workImage.alt}
              fill
              sizes="(min-width: 64rem) 25vw, 100vw"
            />
          </figure>
        </div>
        <div className="border-y border-limestone/25 lg:col-span-7 lg:col-start-6">
          {items.map((item) => (
            <details
              className="group border-b border-limestone/25 last:border-b-0"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-bold leading-7 marker:content-none sm:text-xl">
                {item.question}
                <span className="shrink-0 text-clay-light" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 leading-7 text-limestone/85">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
