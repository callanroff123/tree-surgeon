import { Accreditations } from "@/components/home/Accreditations";
import { ArboristPhotoSection } from "@/components/home/ArboristPhotoSection";
import { Hero } from "@/components/home/Hero";
import { QuoteForm } from "@/components/home/QuoteForm";
import { ServiceRail } from "@/components/home/ServiceRail";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { homePage } from "@/content/home";
import { siteSettings } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Header site={siteSettings} />
      <main id="main-content">
        <Hero content={homePage} />
        <ArboristPhotoSection image={homePage.heroImage} />
        <ServiceRail services={homePage.services} />
        <Accreditations items={homePage.accreditations} />
        <QuoteForm content={homePage.quoteForm} />
      </main>
      <Footer site={siteSettings} />
    </>
  );
}
