import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { FounderProfiles } from "@/components/about/FounderProfiles";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { aboutPage } from "@/content/about";
import { siteSettings } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tree Surgeon",
  description: "Meet the team behind Tree Surgeon.",
};

export default function AboutPage() {
  return (
    <>
      <Header site={siteSettings} />
      <main id="main-content">
        <AboutHero content={aboutPage} />
        <AboutStory
          storyEyebrow={aboutPage.storyEyebrow}
          paragraphs={aboutPage.paragraphs}
          workImage={aboutPage.workImage}
        />
        <FounderProfiles teamEyebrow={aboutPage.teamEyebrow} foundersHeading={aboutPage.foundersHeading} founders={aboutPage.founders} />
      </main>
      <Footer site={siteSettings} />
    </>
  );
}
