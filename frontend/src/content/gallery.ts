import type { GalleryPage } from "@/types/content";

const imageUrl = (publicId: string) =>
  `https://res.cloudinary.com/dho1qunu/image/upload/f_auto,q_auto,w_1200/${publicId}`;

const imageDimensions: Array<[publicId: string, width: number, height: number]> = [
  ["tree5_mw7atd", 3024, 4032],
  ["tree1_rwzsa9", 3024, 4032],
  ["tree2_etxvqt", 3024, 4032],
  ["tree3_nthiuj", 960, 720],
  ["luke_tree_kkok0u", 1178, 1458],
  ["512750694_1274375690801039_1795917074377219857_n_wofyuo", 1200, 1600],
  ["512048837_1262326192266290_3870528515126617315_n_vy1lfg", 1200, 1600],
  ["496513344_4002685493320859_7635090966687023297_n_tyq3ad", 1600, 901],
];

export const galleryPage: GalleryPage = {
  images: imageDimensions.map(([publicId, width, height], index) => ({
    src: imageUrl(publicId),
    alt: `Gallery image ${index + 1}.`,
    width,
    height,
  })),
};
