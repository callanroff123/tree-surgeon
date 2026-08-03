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
        <FooterSocials items={site.socialLinks} />
      </div>
      <div className="border-t border-limestone/20">
        <div className="page-shell py-5 text-xs text-limestone/55">
          © 2026 {site.name}. Template copyright statement.
        </div>
      </div>
    </footer>
  );
}

function FooterSocials({ items }: { items: SiteSettings["socialLinks"] }) {
  return (
    <section aria-labelledby="footer-follow">
      <h2 id="footer-follow" className="footer-heading">
        Follow
      </h2>
      <div className="mt-4 flex items-center gap-4 text-limestone sm:gap-6" aria-label="Social links coming soon">
        {items.map((item) => (
          <span className="inline-grid size-5 place-items-center" role="img" aria-label={`${item.label} coming soon`} title={`${item.label} coming soon`} key={item.label}>
            <i className={`bi bi-${item.label.toLowerCase()} text-xl leading-none`} aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
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
