import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { galleryPage } from "@/content/gallery";
import { siteSettings } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Tree Surgeon",
  description: "Tree care gallery.",
};

export default function GalleryPage() {
  return (
    <>
      <Header site={siteSettings} />
      <main id="main-content">
        <section className="hero-section">
          <GalleryGrid images={galleryPage.images} />
        </section>
      </main>
      <Footer site={siteSettings} />
    </>
  );
}
