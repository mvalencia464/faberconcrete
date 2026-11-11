export type JobFixRow = {
  pain: string;
  fix: string;
};

export type Job = {
  slug: string;
  title: string;
  serviceLabel: string;
  serviceSlug: string;
  city: string;
  areaSlug: string;
  cover: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  caption: string;
  summary: string;
  analysis: {
    equipment: string;
    workPerformed: string;
    outcome: string;
  };
  rows: JobFixRow[];
  reviewAuthor?: string;
};

const AI =
  "AI-generated illustration. This is not a photo of a completed Faber Concrete job.";

function photoJob(input: {
  slug: string;
  title: string;
  serviceLabel: string;
  serviceSlug: string;
  cover: string;
  images?: string[];
  caption: string;
  rows: JobFixRow[];
}): Job {
  return {
    slug: input.slug,
    title: input.title,
    serviceLabel: input.serviceLabel,
    serviceSlug: input.serviceSlug,
    city: "Metro Detroit",
    areaSlug: "",
    cover: input.cover,
    images: [input.cover, ...(input.images ?? [])],
    caption: input.caption,
    summary: input.caption,
    analysis: {
      equipment: input.serviceLabel,
      workPerformed: input.caption,
      outcome: "Send the form with the address if you want this kind of pour.",
    },
    rows: input.rows,
  };
}

/**
 * Filenames that returned HTTP 200 on media.stokeleads.com/faberconcrete.
 * Paths stay relative so r2img() prefixes the public base.
 */
export const JOBS: Job[] = [
  photoJob({
    slug: "finisher-on-a-driveway",
    title: "Finisher on a fresh driveway",
    serviceLabel: "Driveways",
    serviceSlug: "driveways",
    cover: "concrete-crew-finishing-driveway.avif",
    caption: `A finisher troweling the edge of a fresh driveway. ${AI}`,
    rows: [
      { pain: "A slab that looks finished before the edge is done.", fix: "The edge is hand-finished before anyone leaves it." },
      { pain: "A four-inch pour used to win the price.", fix: "Five inches on the driveway. The finish sits on that slab." },
    ],
  }),
  photoJob({
    slug: "finished-driveway",
    title: "Finished driveway",
    serviceLabel: "Driveways",
    serviceSlug: "driveways",
    cover: "faber-concrete-finished-driveway.avif",
    caption: `A new concrete driveway with control joints in front of a brick house. ${AI}`,
    rows: [
      { pain: "A driveway with no joints planned.", fix: "Control joints are part of the finish you see here." },
      { pain: "The approach and the drive poured as one thin slab.", fix: "The approach is six inches. The rest of the drive is five." },
    ],
  }),
  photoJob({
    slug: "new-construction-approach",
    title: "New-construction approach",
    serviceLabel: "Driveway approaches",
    serviceSlug: "approaches",
    cover: "new-construction-stone-house.avif",
    caption:
      "A new concrete approach at the street in front of a stone house that is still in scaffolding. A field photo, not a named completed job.",
    rows: [
      { pain: "The apron is an afterthought on a new house.", fix: "The approach is poured where the street meets the drive." },
      { pain: "A thin apron that takes the delivery truck first.", fix: "Approaches are six inches, on compacted 21AA." },
    ],
  }),
  photoJob({
    slug: "stamped-patterns",
    title: "Stamped patterns",
    serviceLabel: "Stamped concrete",
    serviceSlug: "patios",
    cover: "stamped-concrete-paving-closeup.avif",
    images: [
      "faber-concrete-large-tile-grey.avif",
      "faber-concrete-large-lime-tile.avif",
      "faber-concrete-large-tile.avif",
      "faber-concrete-large-charcoal-tile.avif",
    ],
    caption: `Irregular stone, grey slate, warm limestone, cream travertine, and charcoal. ${AI}`,
    rows: [
      { pain: "A pattern poured on a four-inch slab.", fix: "The stamp is the finish. The slab is still five inches." },
      { pain: "No way to see color and scale before the pour.", fix: "These close-ups are illustrations of the options, not a finished Faber job." },
    ],
  }),
  photoJob({
    slug: "how-the-slab-goes-in",
    title: "How the slab goes in",
    serviceLabel: "Flatwork",
    serviceSlug: "flatwork",
    cover: "faber-concrete-methodology-infographic.avif",
    caption: `The Faber Concrete method: grade, compacted 21AA, a five-inch pour, stamp, cure, and control joints. Six inches on approaches. ${AI}`,
    rows: [
      { pain: "A bid that never names the base.", fix: "21AA, graded and compacted, before the pour." },
      { pain: "Four inches because it is cheaper.", fix: "Five inches on the slab. Six on the approach." },
    ],
  }),
];

export function jobsForArea(areaSlug: string): Job[] {
  return JOBS.filter((job) => job.areaSlug === areaSlug);
}

export function getJob(slug: string): Job | undefined {
  return JOBS.find((job) => job.slug === slug);
}
