import { SITE } from "../config/site";
import type { GalleryPhoto } from "./gallery";

/**
 * Illustrations hosted on media.stokeleads.com.
 * The methodology graphic is the chosen bold version (cream field, light teal footer).
 * Pattern names were checked against the files after they were renamed:
 * large-lime-tile is warm limestone, large-tile (no color) is the lighter travertine,
 * stamped-concrete-paving-closeup is irregular stone, not cobble or ashlar.
 * new-construction-stone-house is a field photo of an approach, not a roofing shot
 * and not labeled as a specific completed job.
 */

export const aiNote =
  "AI-generated illustration. This is not a photo of a completed Faber Concrete job.";

function shot(
  file: string,
  width: number,
  height: number,
  alt: string,
  label: string,
  ai = true,
): GalleryPhoto {
  return {
    avif: `${SITE.mediaBase}/${file}.avif`,
    webp: `${SITE.mediaBase}/${file}.webp`,
    width,
    height,
    alt,
    label,
    caption: ai ? `${label} ${aiNote}` : label,
    ai,
  };
}

export const crew = shot(
  "concrete-crew-finishing-driveway",
  1136,
  1904,
  "A finisher kneeling at the edge of a fresh concrete driveway, troweling the surface beside a stone garage and a house with tan siding.",
  "Finisher on a fresh driveway.",
);

export const finishedDriveway = shot(
  "faber-concrete-finished-driveway",
  1920,
  1280,
  "A wide new concrete driveway with control joints in front of a brick suburban house and a dark garage door.",
  "Finished driveway with control joints.",
);

export const methodology = shot(
  "faber-concrete-methodology-infographic",
  1920,
  1280,
  "Faber Concrete methodology diagram: grade the site, compact a 21AA base, set forms, pour a five-inch slab, stamp a pattern, cure and seal, and cut control joints. Six inches on approaches.",
  "How the slab goes in.",
);

export const newConstruction = shot(
  "new-construction-stone-house",
  1200,
  1600,
  "A new concrete approach at the street in front of a stone house that is still in scaffolding.",
  "New-construction approach in front of a stone house still going up.",
  false,
);

export const patterns: GalleryPhoto[] = [
  shot(
    "stamped-concrete-paving-closeup",
    1920,
    1280,
    "Close-up of stamped concrete in an irregular stone pattern, grey-brown, with curved joints.",
    "Irregular stone.",
  ),
  shot(
    "faber-concrete-large-tile-grey",
    1920,
    1280,
    "Close-up of large square grey slate tiles stamped in concrete.",
    "Grey slate, large tile.",
  ),
  shot(
    "faber-concrete-large-lime-tile",
    1920,
    1280,
    "Close-up of large warm beige limestone tiles stamped in concrete.",
    "Warm limestone, large tile.",
  ),
  shot(
    "faber-concrete-large-tile",
    1920,
    1280,
    "Close-up of large cream travertine tiles stamped in concrete, lighter and more pitted than the limestone.",
    "Cream travertine, large tile.",
  ),
  shot(
    "faber-concrete-large-charcoal-tile",
    1920,
    1280,
    "Close-up of large dark charcoal tiles stamped in concrete.",
    "Charcoal, large tile.",
  ),
];

export const scenes: GalleryPhoto[] = [crew, finishedDriveway, newConstruction];
