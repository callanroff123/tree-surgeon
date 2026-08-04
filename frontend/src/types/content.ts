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
  workImage: HeroImage;
  storyEyebrow: string;
  paragraphs: string[];
  teamEyebrow: string;
  foundersHeading: string;
  founders: Founder[];
};

export type ContactDetail = {
  label: string;
  value: string;
};

export type ContactPage = {
  eyebrow: string;
  title: string;
  introduction: string;
  supportingCopy: string;
  detailsHeading: string;
  details: ContactDetail[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqPage = {
  title: string;
  workImage: HeroImage;
  items: FaqItem[];
};

export type GalleryPage = {
  images: GalleryImage[];
};

export type GalleryImage = HeroImage & {
  width: number;
  height: number;
};
