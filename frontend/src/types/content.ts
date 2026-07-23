export type LinkItem = { href: string; label: string };

export type SiteSettings = {
  name: string;
  navigation: LinkItem[];
  footerNavigation: LinkItem[];
  socialLinks: LinkItem[];
};

export type Service = {
  code: string;
  title: string;
  description: string;
};

export type Accreditation = {
  label: string;
  detail: string;
};

export type HomePage = {
  eyebrow: string;
  title: string;
  introduction: string;
  heroMediaNote: string;
  services: Service[];
  accreditations: Accreditation[];
  quoteForm: { title: string; introduction: string; services: string[] };
};
