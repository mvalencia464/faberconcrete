export type GalleryPhoto = {
  /** Full https URL to the AVIF on media.stokeleads.com */
  avif: string;
  /** Full https URL to the WebP fallback */
  webp: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

/**
 * Job photos go here after Matt uploads them.
 * Example (do not ship invented project names):
 *
 * {
 *   avif: "https://media.stokeleads.com/faberconcrete/example.avif",
 *   webp: "https://media.stokeleads.com/faberconcrete/example.webp",
 *   alt: "Five-inch concrete driveway after the finish, Michigan",
 *   caption: "Driveway and approach",
 *   width: 1600,
 *   height: 1067,
 * }
 */
export const gallery: GalleryPhoto[] = [];
