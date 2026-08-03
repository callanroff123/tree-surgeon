import type { SiteSettings } from "@/types/content";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/logo-cropped.png";

export function Header({ site }: { site: SiteSettings }) {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/15 bg-limestone">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="page-shell flex min-h-20 items-center justify-between gap-6">
        <Link className="brand-mark" href="/" aria-label={site.name + " home"}>
          <Image className="brand-logo" src={logo} alt="" width={50} height={44} priority sizes="50px" />
          <span>{site.name}</span>
        </Link>
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          <nav className="min-w-0" aria-label="Primary navigation">
            <ul className="flex items-center gap-4 overflow-x-auto text-sm font-medium text-forest sm:gap-6">
              {site.navigation.map((item) => (
                <li key={item.href}><Link className="nav-link" href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div className="flex shrink-0 items-center gap-4 border-l border-forest/20 pl-3 text-forest sm:gap-6 sm:pl-5" aria-label="Social links coming soon">
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
        </div>
      </div>
    </header>
  );
}
