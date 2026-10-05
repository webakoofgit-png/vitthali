import type { ImageAsset } from "./ReferenceImage";

export const images = {
  logo: { src: "/images/brand/logo.png", width: 1774, height: 887 },
  archive: { src: "/images/legacy/reference.png", width: 730, height: 476, crop: { x: 298, y: 99, width: 195, height: 279 } },
  archiveDetail: { src: "/images/legacy/reference.png", width: 730, height: 476, crop: { x: 504, y: 157, width: 88, height: 124 } },
  ghee: { src: "/images/products/ghee-reference.png", width: 714, height: 409, crop: { x: 38, y: 59, width: 344, height: 288 } },
  quality: { src: "/images/quality/reference.png", width: 732, height: 440, crop: { x: 45, y: 70, width: 319, height: 312 } },
  founder: { src: "/images/founder/reference.png", width: 717, height: 425, crop: { x: 40, y: 57, width: 234, height: 309 } },
  range: { src: "/images/products/range-reference.png", width: 716, height: 472, crop: { x: 42, y: 188, width: 639, height: 250 } },
} satisfies Record<string, ImageAsset>;
