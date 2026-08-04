import type { GalleryPage } from "@/types/content";

const imageUrl = (publicId: string) =>
  `https://res.cloudinary.com/dho1qunu/image/upload/f_auto,q_auto,c_fill,g_auto,w_960,h_960/${publicId}`;

export const galleryPage: GalleryPage = {
  images: [
    "tree5_mw7atd",
    "tree1_rwzsa9",
    "tree2_etxvqt",
    "tree3_nthiuj",
    "luke_tree_kkok0u",
    "512750694_1274375690801039_1795917074377219857_n_wofyuo",
    "512048837_1262326192266290_3870528515126617315_n_vy1lfg",
    "496513344_4002685493320859_7635090966687023297_n_tyq3ad",
  ].map((publicId, index) => ({
    src: imageUrl(publicId),
    alt: `Gallery image ${index + 1}.`,
  })),
};
