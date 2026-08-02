import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { ContactQuoteForm } from "@/components/contact/ContactQuoteForm";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { contactPage } from "@/content/contact";
import { homePage } from "@/content/home";
import { siteSettings } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tree Surgeon",
  description:
    "Contact Tree Surgeon for practical tree care advice and quote requests.",
};

export default function ContactPage() {
  return (
    <>
      <Header site={siteSettings} />
      <main id="main-content">
        <ContactIntro content={contactPage} />
        <section className="bg-forest py-14 text-limestone sm:py-20">
          <div className="page-shell grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ContactDetails
              heading={contactPage.detailsHeading}
              details={contactPage.details}
            />
            <ContactQuoteForm content={homePage.quoteForm} />
          </div>
        </section>
      </main>
      <Footer site={siteSettings} />
    </>
  );
}
