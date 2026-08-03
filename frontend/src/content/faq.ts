import type { FaqPage } from "@/types/content";

const placeholderAnswer = "(to be filled)";

export const faqPage: FaqPage = {
  title: "Common Questions",
  workImage: {
    src: "https://res.cloudinary.com/dho1qunu/image/upload/f_auto,q_auto,c_fill,g_auto,w_1600,h_1200/512750694_1274375690801039_1795917074377219857_n_wofyuo",
    alt: "An arborist working on a eucalyptus trunk with climbing ropes.",
  },
  items: [
    "How do I know if a tree needs to be removed?",
    "Can a tree be saved instead of removed?",
    "Which areas do you service?",
    "Will you remove all the green waste?",
    "How long does tree work usually take?",
    "Will my garden or lawn be damaged?",
    "Can you work near houses, fences and sheds?",
    "Do I need council permission to remove a tree?",
    "Can you help with arborist reports?",
    "When is the best time to prune a tree?",
    "How often should trees be pruned?",
    "What should I do after storm damage?",
    "Why are large branches falling?",
    "Can I remove the tree myself?",
    "What services do you offer?",
    "Are you insured?",
    "What payment methods do you accept?",
    "Do you offer emergency call-outs?",
  ].map((question) => ({ question, answer: placeholderAnswer })),
};
