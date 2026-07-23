import type { SiteSettings } from "@/types/content";

export const siteSettings: SiteSettings = {
  name: "Tree Surgeon",
  navigation: [
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
  footerNavigation: [
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
