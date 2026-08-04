"use client";

import type { GalleryImage } from "@/types/content";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
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
    <section className="bg-forest py-6 sm:py-10 lg:py-16" aria-label="Gallery">
      <div className="page-shell columns-2 gap-3 sm:columns-3 sm:gap-5 lg:columns-4 lg:gap-8">
        {images.map((image, index) => (
          <button
            className="mb-3 block w-full break-inside-avoid bg-transparent shadow-[0_0.7rem_1.3rem_rgb(0_0_0_/_0.22)] transition-transform duration-200 hover:-translate-y-1 motion-reduce:transition-none sm:mb-5 lg:mb-8"
            key={image.src}
            type="button"
            aria-label={`Open gallery image ${index + 1}`}
            onClick={(event) => {
              selectedTrigger.current = event.currentTarget;
              setSelectedImage(image);
            }}
          >
            <Image
              className="h-auto w-full"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 64rem) 18rem, (min-width: 40rem) 14rem, 45vw"
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
            className="max-h-[calc(100svh-2rem)] max-w-full cursor-zoom-out object-contain"
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={selectedImage.width}
            height={selectedImage.height}
            sizes="(min-width: 64rem) 52rem, calc(100vw - 2rem)"
            priority
          />
        </div>
      ) : null}
    </section>
  );
}
