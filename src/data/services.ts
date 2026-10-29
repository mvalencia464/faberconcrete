export type Service = {
  slug: "driveways" | "flatwork";
  title: string;
  navLabel: string;
  summary: string;
  href: string;
};

export const services: Service[] = [
  {
    slug: "driveways",
    title: "Driveways and approaches",
    navLabel: "Driveways",
    summary:
      "Five inches on the driveway. Six inches on the approach. Built for Michigan cold and the trucks that use the apron every day.",
    href: "/services/driveways",
  },
  {
    slug: "flatwork",
    title: "Flatwork",
    navLabel: "Flatwork",
    summary:
      "The same slab spec on every pour: compacted 21AA, never four inches, finished by people who have been doing it for more than 25 years.",
    href: "/services/flatwork",
  },
];
