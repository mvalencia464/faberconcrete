export type GalleryPhoto = {
  /** Full https URL to the AVIF on media.stokeleads.com */
  avif: string;
  /** Full https URL to the WebP fallback */
  webp: string;
  alt: string;
  /** Short name, without the AI disclosure. */
  label?: string;
  caption?: string;
  /** True when the file is an AI illustration, not a field photo. */
  ai?: boolean;
  width?: number;
  height?: number;
};

/**
 * Real job photos go here after they are uploaded.
 * Illustrations live in src/data/media.ts and are not mixed into this list.
 *
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
