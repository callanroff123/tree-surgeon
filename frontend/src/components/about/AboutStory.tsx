import type { AboutPage } from "@/types/content";
import Image from "next/image";

export function AboutStory({
  storyEyebrow,
  paragraphs,
  workImage,
}: Pick<AboutPage, "storyEyebrow" | "paragraphs" | "workImage">) {
  return (
    <section className="border-y border-forest/15 bg-forest py-14 text-limestone sm:py-20">
      <div className="page-shell grid gap-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="eyebrow text-clay-light">{storyEyebrow}</p>
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
        <div className="grid gap-6 text-lg leading-8 text-limestone/85 lg:col-span-7 lg:col-start-6 sm:text-xl">
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
