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
  summary: string;
  workPerformed: string;
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
    summary: input.summary,
    analysis: {
      equipment: "21AA, forms, and a pour at the thickness on the estimate",
      workPerformed: input.workPerformed,
      outcome:
        "Send the form with the address if you want this kind of pour. Five inches on the driveway, six on the approach, compacted 21AA. Some ZIP codes in each county are outside the work.",
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
    summary:
      "The finish is what you see on day one. It sits on five inches of concrete, not four, over 21AA that was graded and compacted first. The people finishing these slabs have been doing it for more than 25 years.",
    workPerformed:
      "Hand-finish the surface after a five-inch pour. The illustration shows the edge work. It is not a photo of a completed Faber Concrete job.",
    rows: [
      { pain: "A finish sitting on a slab that was thinned out to win the price.", fix: "Five inches on the driveway. The finish sits on that slab." },
      { pain: "A crew that has not been finishing long enough to care about the edge.", fix: "Finishers with more than 25 years on the tools." },
    ],
  }),
  photoJob({
    slug: "finished-driveway",
    title: "Finished driveway",
    serviceLabel: "Driveways",
    serviceSlug: "driveways",
    cover: "faber-concrete-finished-driveway.avif",
    caption: `A new concrete driveway in front of a brick house. ${AI}`,
    summary:
      "This is the driveway people live with: five inches, six where it meets the street, compacted 21AA underneath. The cheaper bid skips an inch, on the order of $600 to $700 on an average driveway, and that is the driveway you end up hating before you are ready to replace it.",
    workPerformed:
      "A full driveway pour at five inches, with the approach at six, after the whole area is graded and compacted. The picture is an illustration, not a named Faber job.",
    rows: [
      { pain: "Four inches because it is cheaper.", fix: "Five inches on the driveway, every time. Never four." },
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
    summary:
      "The approach is where a 20-ton delivery truck hits first. Faber Concrete pours it at six inches, on 21AA that has been graded and compacted, not as an afterthought on a four-inch driveway. This photo is a house still going up. It is not a named completed job.",
    workPerformed:
      "Pour the section where the street meets the drive at six inches, on the same compacted 21AA base as the rest of the slab.",
    rows: [
      { pain: "The apron is an afterthought on a new house.", fix: "The approach is its own thickness: six inches." },
      { pain: "A thin apron that takes the delivery truck first.", fix: "Approaches are six inches, on compacted 21AA, never on dirt or sand alone." },
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
    summary:
      "Stamped concrete and pavers are for a driveway or patio that should look finished. The stamp is the surface. Under a stamped pour it is still five inches over compacted 21AA, six inches if it is an approach. These close-ups are illustrations of pattern and color. Pavers do not have a pattern board on this site yet.",
    workPerformed:
      "Show pattern and color before a site look. Irregular stone, grey slate, warm limestone, cream travertine, and charcoal. None of these pictures is a completed Faber Concrete job.",
    rows: [
      { pain: "A pattern poured on a four-inch slab.", fix: "The stamp is the finish. The slab is still five inches." },
      { pain: "No way to see color and scale before the pour.", fix: "These close-ups are illustrations, not a finished Faber job, and not a paver catalog." },
    ],
  }),
];

export function jobsForArea(areaSlug: string): Job[] {
  return JOBS.filter((job) => job.areaSlug === areaSlug);
}

export function getJob(slug: string): Job | undefined {
  return JOBS.find((job) => job.slug === slug);
}
