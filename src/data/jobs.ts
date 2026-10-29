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

/** Client jobs. Leave empty until real project photos exist. Slugs are data, not code. */
export const JOBS: Job[] = [];

export function jobsForArea(areaSlug: string): Job[] {
  return JOBS.filter((job) => job.areaSlug === areaSlug);
}

export function getJob(slug: string): Job | undefined {
  return JOBS.find((job) => job.slug === slug);
}
