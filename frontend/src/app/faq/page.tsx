import { FaqHero } from "@/components/faq/FaqHero";
import { FaqList } from "@/components/faq/FaqList";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { faqPage } from "@/content/faq";
import { siteSettings } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Tree Surgeon",
  description: "Answers to common questions about Tree Surgeon services.",
};

export default function FaqPage() {
  return (
    <>
      <Header site={siteSettings} />
      <main id="main-content">
        <FaqHero title={faqPage.title} />
        <FaqList items={faqPage.items} workImage={faqPage.workImage} />
      </main>
      <Footer site={siteSettings} />
    </>
  );
}
