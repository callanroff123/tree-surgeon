"use client";

import type { HeroImage } from "@/types/content";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function GalleryGrid({ images }: { images: HeroImage[] }) {
  const [selectedImage, setSelectedImage] = useState<HeroImage | null>(null);
  const selectedTrigger = useRef<HTMLButtonElement | null>(null);
  const dialog = useRef<HTMLDivElement | null>(null);

  const close = () => {
    setSelectedImage(null);
    selectedTrigger.current?.focus();
  };

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    dialog.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedImage]);

  return (
    <section className="bg-charcoal py-4 sm:py-6 lg:py-12" aria-label="Gallery">
      <div className="page-shell grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-8">
        {images.map((image, index) => (
          <button
            className="group relative aspect-square overflow-hidden rounded-[.35rem] border-2 border-limestone bg-charcoal"
            key={image.src}
            type="button"
            aria-label={`Open gallery image ${index + 1}`}
            onClick={(event) => {
              selectedTrigger.current = event.currentTarget;
              setSelectedImage(image);
            }}
          >
            <Image
              className="object-cover transition-transform duration-200 group-hover:scale-[1.025] motion-reduce:transition-none"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 64rem) 25vw, (min-width: 40rem) 33vw, 50vw"
              priority={index < 2}
            />
          </button>
        ))}
      </div>
      {selectedImage ? (
        <div
          className="fixed inset-0 z-[100] grid cursor-zoom-out place-items-center bg-[rgb(36_34_29_/_0.9)] p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
          ref={dialog}
          tabIndex={-1}
          onClick={close}
        >
          <Image
            className="max-h-[calc(100svh-2rem)] w-full max-w-3xl cursor-default object-contain"
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={960}
            height={960}
            sizes="(min-width: 64rem) 52rem, calc(100vw - 2rem)"
            priority
          />
        </div>
      ) : null}
    </section>
  );
}
