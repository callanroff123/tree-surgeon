import type { SiteSettings } from "@/types/content";

export const siteSettings: SiteSettings = {
  name: "Bees Knees Trees",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
  footerNavigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQ" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
  socialLinks: [
    { href: "#instagram", label: "Instagram" },
    { href: "#facebook", label: "Facebook" },
    { href: "#linkedin", label: "LinkedIn" },
  ],
};
