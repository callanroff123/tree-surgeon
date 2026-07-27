import type { HeroImage } from "@/types/content";
import Image from "next/image";

export function ArboristPhotoSection({ image }: { image: HeroImage }) {
  return (
    <section className="arborist-photo-section" aria-label="Arborist at work">
      <Image className="arborist-photo" src={image.src} alt={image.alt} fill sizes="100vw" priority />
    </section>
  );
}
