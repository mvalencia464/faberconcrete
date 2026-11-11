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
  imageAlts?: Record<string, string>;
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
  imageAlts?: Record<string, string>;
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
    imageAlts: input.imageAlts,
  };
}

const CREW = {
  apron:
    "media-generation-faber-concrete-video2-still-c-0-083b9d97-5947-4a2c-8a5e-d6326287d03f.avif",
  float:
    "media-generation-faber-concrete-video-still-1-0-d1d461f7-f614-4371-920b-5976f069ba90.avif",
  edge:
    "media-generation-faber-concrete-video-still-2-0-491392bb-ecd4-4e97-9504-74a643c881ff.avif",
  place:
    "media-generation-faber-concrete-video2-still-a-0-42c077c0-9e28-442e-9c52-86bfc60788a1.avif",
  level:
    "media-generation-faber-concrete-video-still-3-0-40a95f50-a172-4fdb-8cbd-171f0bd60876.avif",
  walk:
    "media-generation-faber-concrete-video2-still-b-0-38739a68-2567-4789-b4c4-abcc5a78a39f.avif",
} as const;

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
    slug: "crew-finishing-the-apron",
    title: "Crew finishing the apron",
    serviceLabel: "Driveway approaches",
    serviceSlug: "approaches",
    cover: CREW.apron,
    images: [CREW.float, CREW.edge],
    caption: `A crew working the edge where a new driveway meets the street. One still shows two finishers, one with a long float and one with a hand trowel. The others show a long float across the apron and a hand finish at the edge. ${AI}`,
    summary:
      "The apron is where the street meets the drive, and it is finished by hand. These stills show a crew on that edge. They are illustrations, not photos of a completed Faber Concrete job. The approach is still six inches, on compacted 21AA.",
    workPerformed:
      "Finish the apron at the curb. A long float across the fresh concrete, then a hand trowel at the edge where the new slab meets the old pavement.",
    imageAlts: {
      [CREW.apron]: `Two finishers on a driveway apron at the street, one with a long float and one with a hand trowel. ${AI}`,
      [CREW.float]: `A finisher pulling a long float across a fresh driveway apron, with another worker by the garage. ${AI}`,
      [CREW.edge]: `A finisher working the edge where new concrete meets the existing driveway. ${AI}`,
    },
    rows: [
      { pain: "The apron left rough because it is the last section.", fix: "The edge at the street is hand-finished." },
      { pain: "A thin apron that takes the delivery truck first.", fix: "Approaches are six inches, on compacted 21AA." },
    ],
  }),
  photoJob({
    slug: "crew-on-the-pour",
    title: "Crew on the pour",
    serviceLabel: "Driveways",
    serviceSlug: "driveways",
    cover: CREW.place,
    images: [CREW.level],
    caption: `A crew placing and finishing concrete in the forms. One still is three people on the mud, with a float, a shovel, and a broom. The other is three people on a wider slab, one checking the surface and one floating it. ${AI}`,
    summary:
      "A driveway pour is a crew, not one person with a trowel at the end. These stills show people placing and finishing the slab. They are illustrations, not photos of a completed Faber Concrete job.",
    workPerformed:
      "Place the concrete, pull it into the forms, and finish the surface while it is still workable.",
    imageAlts: {
      [CREW.place]: `Three finishers placing concrete in driveway forms, one floating, one with a broom, one with a shovel. ${AI}`,
      [CREW.level]: `Three finishers on a fresh slab, one with a level, one with a float, and one with a shovel. ${AI}`,
    },
    rows: [
      { pain: "The finish rushed because the crew was too thin.", fix: "The stills show more than one person on the pour." },
      { pain: "Four inches because it is cheaper.", fix: "Five inches on the driveway. Six on the approach." },
    ],
  }),
  photoJob({
    slug: "finished-driveway",
    title: "Finished driveway",
    serviceLabel: "Driveways",
    serviceSlug: "driveways",
    cover: "faber-concrete-finished-driveway.avif",
    images: [CREW.walk],
    caption: `A new concrete driveway in front of a brick house. ${AI}`,
    imageAlts: {
      [CREW.walk]: `A person standing on a new driveway, looking toward the street, with a cone on the sidewalk. ${AI}`,
    },
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
