import type { SiteSettings } from "@/types/content";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/logo-cropped.png";

export function Header({ site }: { site: SiteSettings }) {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/15 bg-limestone">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="page-shell flex min-h-20 items-center justify-between gap-4">
        <Link className="brand-mark" href="/" aria-label={site.name + " home"}>
          <Image className="brand-logo" src={logo} alt="" width={50} height={44} priority sizes="50px" />
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <div className="hidden min-w-0 items-center gap-5 lg:flex">
          <nav className="min-w-0" aria-label="Primary navigation">
            <ul className="flex items-center gap-6 text-sm font-medium text-forest">
              {site.navigation.map((item) => (
                <li key={item.href}><Link className="nav-link" href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </nav>
          <SocialIcons />
        </div>
        <details className="group relative lg:hidden">
          <summary className="inline-grid size-12 cursor-pointer place-items-center border border-forest/20 text-forest marker:content-none">
            <i className="bi bi-list text-3xl leading-none" aria-hidden="true" />
            <span className="sr-only">Open navigation menu</span>
          </summary>
          <div className="absolute right-0 top-full z-[60] mt-3 w-64 border border-forest/20 bg-limestone p-5 shadow-[0_0.75rem_1.5rem_rgb(36_34_29_/_0.18)]">
            <nav aria-label="Mobile navigation">
              <ul className="grid gap-4 text-sm font-medium text-forest">
                {site.navigation.map((item) => (
                  <li key={item.href}><Link className="nav-link" href={item.href}>{item.label}</Link></li>
                ))}
              </ul>
            </nav>
            <SocialIcons className="mt-5 border-t border-forest/20 pt-5" isMobile />
          </div>
        </details>
      </div>
    </header>
  );
}

function SocialIcons({ className = "", isMobile = false }: { className?: string; isMobile?: boolean }) {
  return (
    <div className={`flex shrink-0 items-center gap-4 text-forest ${isMobile ? "" : "border-l border-forest/20 pl-5"} ${className}`} aria-label="Social links coming soon">
      <span className="inline-grid size-5 place-items-center" role="img" aria-label="Instagram coming soon" title="Instagram coming soon">
        <i className="bi bi-instagram text-xl leading-none" aria-hidden="true" />
      </span>
      <span className="inline-grid size-5 place-items-center" role="img" aria-label="Facebook coming soon" title="Facebook coming soon">
        <i className="bi bi-facebook text-xl leading-none" aria-hidden="true" />
      </span>
      <span className="inline-grid size-5 place-items-center" role="img" aria-label="LinkedIn coming soon" title="LinkedIn coming soon">
        <i className="bi bi-linkedin text-xl leading-none" aria-hidden="true" />
      </span>
    </div>
  );
}
