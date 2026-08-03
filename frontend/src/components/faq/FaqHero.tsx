import type { FaqPage } from "@/types/content";
import Image from "next/image";
import logo from "../../../assets/logo-cropped.png";

export function FaqHero({ title }: Pick<FaqPage, "title">) {
  return (
    <section className="hero-section">
      <div className="page-shell grid gap-10 py-12 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="flex flex-col justify-end lg:col-span-6">
          <div className="mt-16 lg:mt-28">
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-forest sm:text-6xl lg:text-8xl">
              {title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-bark sm:text-xl">
              Not sure where to start?
            </p>
            <p className="mt-8 max-w-xl text-lg leading-8 text-bark sm:text-xl">
              Whether you&apos;re wondering if a tree needs to be removed, whether
              council approval is required, or we how can help, we&apos;ve answered
              some of the questions we hear most often from home and landowners.
            </p>
          </div>
        </div>
        <figure className="hero-media lg:col-span-6">
          <div className="hero-media-art">
            <Image
              className="hero-logo"
              src={logo}
              alt="Tree Surgeon logo"
              width={1480}
              height={1300}
              priority
              sizes="(min-width: 64rem) 50vw, 100vw"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
