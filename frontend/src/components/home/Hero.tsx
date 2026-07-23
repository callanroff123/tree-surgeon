import type { HomePage } from "@/types/content";

export function Hero({ content }: { content: Pick<HomePage, "eyebrow" | "title" | "introduction" | "heroMediaNote"> }) {
  return (
    <section className="hero-section">
      <div className="page-shell grid gap-10 py-12 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="flex flex-col justify-between lg:col-span-6">
          <p className="eyebrow">{content.eyebrow}</p>
          <div className="mt-16 lg:mt-28">
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-forest sm:text-6xl lg:text-8xl">{content.title}</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-bark sm:text-xl">{content.introduction}</p>
            <a className="text-link mt-9 inline-flex" href="#quote">Request a quote <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <figure className="hero-media lg:col-span-6">
          <div className="hero-media-art" aria-hidden="true">
            <svg viewBox="0 0 640 700" role="presentation">
              <path d="M314 690c16-104 12-219-18-332-15-58-14-113 13-167 22-44 59-80 113-105m-108 272c49-73 116-116 199-131m-191 150c-62-46-133-62-214-47m220 93c42-51 97-78 171-84m-190 74c-52 25-95 68-126 126" />
              <path d="M333 690c-8-88 17-181 74-279 32-55 40-107 22-156-15-42-45-72-90-92m-13 253c-24-73-71-133-143-180m159 107c35-75 91-137 167-185" />
              <path d="M191 305c-34-12-59-30-77-55m80 58c-37 6-67 0-91-18m157-129c-9-31-6-59 10-84m181-3c27-22 57-31 90-28m-38 203c29-9 56-7 82 5m-156 210c31 3 58 17 81 41" />
              <circle cx="153" cy="243" r="20" /><circle cx="220" cy="205" r="28" /><circle cx="277" cy="137" r="31" />
              <circle cx="421" cy="69" r="32" /><circle cx="489" cy="51" r="25" /><circle cx="526" cy="248" r="29" />
              <circle cx="573" cy="260" r="19" /><circle cx="523" cy="510" r="30" /><circle cx="569" cy="542" r="21" />
            </svg>
          </div>
          <figcaption>{content.heroMediaNote}</figcaption>
        </figure>
      </div>
    </section>
  );
}
