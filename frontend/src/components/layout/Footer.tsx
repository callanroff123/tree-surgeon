import type { SiteSettings } from "@/types/content";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo-cropped.png";

export function Footer({ site }: { site: SiteSettings }) {
  return (
    <footer className="bg-charcoal text-limestone">
      <div className="page-shell grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-start gap-4">
          <Link
            href="/"
            className="flex items-start gap-4"
            aria-label="Go to homepage"
          >
            <Image
              className="brand-logo shrink-0"
              src={logo}
              alt=""
              width={50}
              height={44}
              sizes="50px"
            />
            <section aria-labelledby="footer-brand">
              <p id="footer-brand" className="font-serif text-3xl">
                {site.name}
              </p>
              <p className="mt-4 max-w-52 text-sm leading-6 text-limestone/70">
                Practical tree care for local places.
              </p>
            </section>
          </Link>
        </div>
        <FooterLinks heading="Sitemap" items={site.footerNavigation} />
        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact" className="footer-heading">
            Contact
          </h2>
          <p className="mt-4 text-sm leading-6 text-limestone/70">
            Contact details to be confirmed.
            <br />
            ABN to be confirmed.
          </p>
        </section>
        <FooterLinks heading="Follow" items={site.socialLinks} />
      </div>
      <div className="border-t border-limestone/20">
        <div className="page-shell py-5 text-xs text-limestone/55">
          © 2026 {site.name}. Template copyright statement.
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  heading,
  items,
}: {
  heading: string;
  items: SiteSettings["navigation"];
}) {
  const id = "footer-" + heading.toLowerCase();
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="footer-heading">
        {heading}
      </h2>
      <ul className="footer-list">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
