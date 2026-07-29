import type { AboutPage } from "@/types/content";

export function AboutStory({
  storyEyebrow,
  paragraphs,
}: Pick<AboutPage, "storyEyebrow" | "paragraphs">) {
  return (
    <section className="border-y border-forest/15 bg-forest py-14 text-limestone sm:py-20">
      <div className="page-shell grid gap-8 lg:grid-cols-12 lg:gap-8">
        <p className="eyebrow text-clay-light lg:col-span-4">{storyEyebrow}</p>
        <div className="grid gap-6 text-lg leading-8 text-limestone/85 lg:col-span-7 lg:col-start-6 sm:text-xl">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
