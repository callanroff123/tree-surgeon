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
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-4 overflow-x-auto text-sm font-medium text-forest sm:gap-6">
            {site.navigation.map((item) => (
              <li key={item.href}><Link className="nav-link" href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
