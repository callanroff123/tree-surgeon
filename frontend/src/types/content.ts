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

export type HeroImage = {
  src: string;
  alt: string;
};

export type HomePage = {
  eyebrow: string;
  title: string;
  introduction: string;
  heroImage: HeroImage;
  services: Service[];
  accreditations: Accreditation[];
  quoteForm: { title: string; introduction: string; services: string[] };
};

export type Founder = {
  name: string;
  role: string;
  introduction: string;
  image: HeroImage;
};

export type AboutPage = {
  eyebrow: string;
  title: string;
  introduction: string;
  storyEyebrow: string;
  paragraphs: string[];
  teamEyebrow: string;
  foundersHeading: string;
  founders: Founder[];
};
