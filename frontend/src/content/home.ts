import type { HomePage } from "@/types/content";

export const homePage: HomePage = {
  eyebrow: "Tree care for gum country",
  title: "Good work for the trees around your place.",
  introduction:
    "Practical tree care with a clear eye for the land, the season and what needs doing.",
  heroImage: {
    src: "https://res.cloudinary.com/dho1qunu/image/upload/f_auto,q_auto,c_fill,g_auto,w_1600,h_1200/512048837_1262326192266290_3870528515126617315_n_vy1lfg",
    alt: "An arborist working high in a tree.",
  },
  services: [
    { code: "01", title: "Tree pruning", description: "Measured pruning to support healthy structure and long-term growth." },
    { code: "02", title: "Tree removal", description: "Careful removal planning for trees that need to come down." },
    { code: "03", title: "Hedge & garden care", description: "Practical seasonal care for the living edges of your property." },
    { code: "04", title: "Arborist advice", description: "A clear starting point when you are unsure what a tree needs." },
  ],
  accreditations: [
    { label: "Qualifications", detail: "Accreditation details to be confirmed." },
    { label: "Insurance", detail: "Coverage details to be confirmed." },
    { label: "Safety", detail: "Safety credentials to be confirmed." },
  ],
  quoteForm: {
    title: "Get a quote",
    introduction:
      "Tell us a little about the work you need. Quote requests are not being sent from this form yet.",
    services: ["Tree pruning", "Tree removal", "Hedge & garden care", "Arborist advice", "Not sure yet"],
  },
};
