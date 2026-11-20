/**
 * Writes exports/faberconcrete-content.json from the live site content.
 * Run: node --experimental-strip-types scripts/export-site-content.mjs
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { JOBS } from "../src/data/jobs.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = "https://faberconcrete.com";
const MEDIA_BASE = "https://media.stokeleads.com/faberconcrete";
const SLAB_IMAGE = "/faber-concrete-methodology.webp";
const SLAB_ALT =
  "Faber Concrete methodology infographic: site prep and grade, compacted 21AA, forms and rebar, a five-inch slab, smooth finish, cure and seal, and control joints. Six inches on the approach. Not a photo of a completed job.";
const SLAB_CAPTION =
  "Site prep and grade, compacted 21AA, forms and rebar, a five-inch slab, smooth finish, cure and seal, and control joints. Six inches on the approach. Illustration, not a photo of a completed Faber Concrete job.";

function absUrl(path) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  if (path.startsWith("/")) return `${SITE_URL}${path}`;
  return `${MEDIA_BASE}/${path.replace(/^\/+/, "")}`;
}

function fill(value, vars) {
  if (typeof value === "string") {
    return value.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? "");
  }
  if (Array.isArray(value)) return value.map((item) => fill(item, vars));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, fill(item, vars)]));
  }
  return value;
}

function galleryStem(url) {
  return url
    .split("/")
    .pop()
    .replace(/\.(avif|jpe?g|png|webp)$/i, "")
    .replace(/([-_]\d+)$/, "");
}

const client = JSON.parse(await readFile(join(root, "src/content/client.json"), "utf8"));
const pack = JSON.parse(
  await readFile(join(root, "src/content/packs/concrete/services.json"), "utf8"),
);
const reviewsFile = JSON.parse(await readFile(join(root, "src/data/google-reviews.json"), "utf8"));

const id = client.identity;
const copy = client.copy;
const phone = id.phone;
const region = id.region;
const addressLine = [id.address, `${id.city}, ${id.state} ${id.zip}`].filter(Boolean).join(", ");
const whereFaq = copy.faqs.find((faq) => faq.q === "Where do you work?");

const services = pack.map((raw) => {
  const service = fill(raw, {
    name: id.name,
    legalName: id.legalName,
    city: id.city,
    state: id.state,
    region,
    phone,
    tradeLabel: id.tradeLabel,
  });
  const hero = { url: absUrl(service.image), alt: `${service.title} by ${id.name}`, file: service.image };
  const seen = new Set();
  const gallery = (service.gallery ?? [])
    .map((item) => {
      const file = typeof item === "string" ? item : item.image;
      const alt =
        typeof item === "string"
          ? `${service.title} by ${id.name}`
          : item.alt?.trim() || `${service.title} by ${id.name}`;
      return { url: absUrl(file), alt, file };
    })
    .filter((item) => {
      const stem = galleryStem(item.file);
      if (stem === galleryStem(service.image) || seen.has(stem)) return false;
      seen.add(stem);
      return true;
    });

  return {
    slug: service.slug,
    url: `${SITE_URL}/services/${service.slug}`,
    title: service.title,
    seoTitle: `${service.title} | ${id.name} in ${id.city}, ${id.state}`,
    seoDescription: `${service.shortDesc} Call ${phone}.`,
    shortDescription: service.shortDesc,
    fullDescription: service.fullDesc,
    highlights: service.highlights,
    sections: [
      { heading: service.heading, body: service.body },
      ...(service.sections ?? []),
      {
        heading: `${id.tradeLabel} across ${region}`,
        body: `${id.legalName} serves ${id.city} and ${region}. Call ${phone}.`,
      },
    ],
    faqs: whereFaq ? [service.faq, whereFaq] : [service.faq],
    pageChrome: {
      breadcrumb: "All Services",
      aboutHeading: "About This Service",
      includedHeading: "What's Included",
      methodHeading: "How the slab goes in",
      methodImage: { url: absUrl(SLAB_IMAGE), alt: SLAB_ALT, caption: SLAB_CAPTION },
      galleryHeading: "Service Gallery",
      areasHeading: "Areas We Serve",
      areasIntro: copy.serviceAreasIntro,
      faqHeading: "Frequently Asked Questions",
      sidebarTitle: copy.sidebarTitle,
      sidebarBody: copy.sidebarBody,
      hoursHeading: "Business Hours",
      otherServicesHeading: "Other Services",
      seeServiceLabel: `See this service →`,
    },
    heroImage: hero,
    gallery,
  };
});

const areas = client.serviceAreas.map((area) => {
  const vars = { areaName: area.name };
  return {
    slug: area.slug,
    url: `${SITE_URL}/areas/${area.slug}`,
    name: area.name,
    county: area.county,
    state: id.state,
    eyebrow: copy.areaEyebrow,
    seoTitle: fill(copy.areaPageTitle, vars),
    headline: fill(copy.areaHeadline, vars),
    intro: fill(copy.areaIntro, vars),
    body: fill(copy.areaBody, vars),
    homeownersHeading: `What ${area.name} homeowners get with ${id.name}`,
    highlights: fill(copy.areaHighlights, vars),
    servicesNote: fill(copy.areaServicesNote, vars),
    servicesHeading: fill(copy.areaServicesHeading, vars),
    faqHeading: "Frequently asked questions",
    nearbyHeading: "Nearby areas",
    nearbyNote: `${area.county} County & nearby`,
    fullMapLabel: "Full service map",
    faqs: fill(copy.areaFaqs, vars),
  };
});

const illustrations = JOBS.map((job) => ({
  slug: job.slug,
  url: `${SITE_URL}/jobs/${job.slug}`,
  title: job.title,
  seoTitle: `${job.serviceLabel} in ${job.city}, ${id.state} | ${id.name}`,
  seoDescription: job.caption,
  serviceLabel: job.serviceLabel,
  serviceSlug: job.serviceSlug,
  serviceUrl: `${SITE_URL}/services/${job.serviceSlug}`,
  city: job.city,
  state: id.state,
  caption: job.caption,
  summary: job.summary,
  analysis: job.analysis,
  problemAndFix: job.rows.map((row) => ({ problem: row.pain, fix: row.fix })),
  labels: {
    summary: "Job summary",
    involved: "What this job involved",
    equipment: "Equipment",
    workPerformed: "Work performed",
    outcome: "Outcome",
    problem: "The problem",
    fix: "Our fix",
  },
  images: job.images.map((file) => ({
    url: absUrl(file),
    file,
    alt: job.imageAlts?.[file] ?? (file === job.cover ? job.caption : job.caption),
    role: file === job.cover ? "cover" : "gallery",
  })),
}));

const publishedReviews = reviewsFile.rawReviews
  .filter((review) => (review.text ?? "").trim())
  .map((review) => ({
    author: review.author,
    rating: review.rating,
    date: review.date,
    source: review.source,
    text: review.text,
    profileUrl: reviewsFile.profileUrl,
    avatarFile: review.avatarUrl || null,
    avatarDisplayed: false,
  }));

const images = [];
function addImage(entry) {
  if (!entry?.url) return;
  const key = `${entry.url}|${entry.alt ?? ""}|${entry.usedOn}`;
  if (images.some((item) => `${item.url}|${item.alt ?? ""}|${item.usedOn}` === key)) return;
  images.push(entry);
}

addImage({
  url: absUrl(client.branding.images.logo),
  alt: `${id.name} wordmark`,
  usedOn: "header",
  kind: "brand",
});
addImage({
  url: absUrl(client.branding.images.logoLight),
  alt: `${id.name} wordmark, light`,
  usedOn: "footer",
  kind: "brand",
});
addImage({
  url: absUrl(client.branding.images.favicon),
  alt: `${id.name} favicon`,
  usedOn: "browser tab",
  kind: "brand",
});
addImage({
  url: absUrl(client.branding.images.hero),
  alt: copy.heroImageAlt,
  usedOn: "homepage hero and social share",
  kind: "hero",
});
addImage({
  url: absUrl(client.branding.images.owner),
  alt: `${id.ownerName}, owner of ${id.name}`,
  usedOn: "owner card and about",
  kind: "owner",
});
addImage({
  url: absUrl(SLAB_IMAGE),
  alt: SLAB_ALT,
  usedOn: "every service page",
  kind: "method",
});
for (const service of services) {
  addImage({ ...service.heroImage, usedOn: `/services/${service.slug}`, kind: "service" });
  for (const image of service.gallery) {
    addImage({ ...image, usedOn: `/services/${service.slug}`, kind: "service-gallery" });
  }
}
for (const job of illustrations) {
  for (const image of job.images) {
    addImage({ url: image.url, alt: image.alt, usedOn: `/jobs/${job.slug}`, kind: "illustration" });
  }
}
addImage({
  url: `${SITE_URL}/logo.svg`,
  alt: `${id.name} logo`,
  usedOn: "public asset",
  kind: "brand",
});
addImage({
  url: `${SITE_URL}/placeholders/hero.svg`,
  alt: "Placeholder hero",
  usedOn: "unused before/after block",
  kind: "placeholder",
});

const staticPages = [
  {
    path: "/",
    title: client.seo.title,
    description: client.seo.description,
  },
  {
    path: "/about",
    title: `About Us | ${id.name}`,
    description: copy.aboutDescription,
  },
  {
    path: "/contact",
    title: copy.contactTitle,
    description: copy.contactDescription,
  },
  {
    path: "/reviews",
    title: `${copy.reviewsPage.title} | ${id.name}`,
    description: copy.reviewsPage.description,
  },
  {
    path: "/areas",
    title: `Service Areas | ${id.name}`,
    description: `${id.name} serves ${region}. Send the address to ask about your ZIP code.`,
  },
  {
    path: "/policy",
    title: `Privacy Policy | ${id.name}`,
    description: copy.policyDescription,
  },
  {
    path: "/terms",
    title: `Terms of Service | ${id.name}`,
    description: copy.termsDescription,
  },
  {
    path: "/thanks",
    title: `Thank You | ${id.name}`,
    description: "We received your estimate request and will be in touch soon.",
  },
];

const sitemapUrls = [
  ...staticPages.map((page) => ({
    loc: page.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${page.path}`,
    path: page.path,
    title: page.title,
    description: page.description,
  })),
  ...services.map((service) => ({
    loc: service.url,
    path: `/services/${service.slug}`,
    title: service.seoTitle,
    description: service.seoDescription,
  })),
  ...areas.map((area) => ({
    loc: area.url,
    path: `/areas/${area.slug}`,
    title: area.seoTitle,
    description: area.intro,
  })),
  ...illustrations.map((job) => ({
    loc: job.url,
    path: `/jobs/${job.slug}`,
    title: job.seoTitle,
    description: job.seoDescription,
  })),
];

const legalContact = {
  name: id.name,
  address: addressLine,
  phone,
  phoneHref: `tel:${phone.replace(/\D/g, "")}`,
  email: null,
  license: null,
};

const privacy = {
  title: "Privacy Policy",
  path: "/policy",
  url: `${SITE_URL}/policy`,
  lastUpdated: "July 22, 2026",
  description: copy.policyDescription,
  sections: [
    {
      heading: null,
      paragraphs: [
        `This Privacy Policy explains how ${id.name} (“we,” “us,” or “our”) collects, uses, and shares information when you visit our website, request service, schedule an appointment, or otherwise contact us. The practices described here reflect how a ${id.city} / ${region} ${copy.serviceNoun} company typically handles customer data.`,
      ],
    },
    {
      heading: "1. Information We Collect",
      paragraphs: ["We may collect information you provide directly, including:"],
      list: [
        "Name, phone number, email address, and property address",
        "Service details and project notes",
        "Preferred appointment windows and messages you send through forms or chat",
        "Photos or documents you voluntarily upload related to a job",
      ],
    },
    {
      heading: "1. Information We Collect",
      paragraphs: ["We may also collect limited technical information automatically, such as:"],
      list: [
        "Browser type, device type, approximate location derived from IP address",
        "Pages visited, referral source, and general site-usage metrics",
        "Cookies or similar technologies used for basic analytics and site performance",
      ],
    },
    {
      heading: "2. How We Use Information",
      paragraphs: ["We use collected information to:"],
      list: [
        "Respond to service, estimate, and appointment requests",
        "Schedule appointments, coordinate crews, and communicate project updates",
        "Provide quotes, warranties, and post-project follow-up",
        "Improve our website, services, and local service coverage",
        "Send marketing messages only when you have opted in",
        "Comply with legal obligations and protect against fraud or misuse",
      ],
    },
    {
      heading: "3. SMS & Phone Communications",
      paragraphs: [
        "If you provide a phone number and consent to be contacted, we may call or text you about your estimate, consultation, or project status. Message frequency varies. Message and data rates may apply. Reply STOP to opt out of SMS at any time; reply HELP for help. SMS consent is not a condition of purchase and is not sold or shared with third parties for their own marketing.",
      ],
    },
    {
      heading: "4. How We Share Information",
      paragraphs: ["We do not sell your personal information. We may share information with:"],
      list: [
        "Service providers who help us operate forms, hosting, analytics, or communications",
        "Financing partners, only when you request financing options",
        "Insurance carriers or adjusters, only when you ask us to support a claim",
        "Professional advisors or authorities when required by law or to protect our rights",
      ],
      closing:
        "Any vendors we use are expected to process information only as needed to perform services for us and to protect it with reasonable safeguards.",
    },
    {
      heading: "5. Cookies & Analytics",
      paragraphs: [
        "Our site may use cookies or similar tools to remember preferences, measure traffic, and understand how visitors find our services. You can control cookies through your browser settings. Disabling cookies may affect some site features.",
      ],
    },
    {
      heading: "6. Data Retention",
      paragraphs: [
        "We keep estimate and project-related information for as long as needed to provide services, maintain warranty records, resolve disputes, and meet legal or accounting requirements. When information is no longer needed, we delete or de-identify it when reasonably practical.",
      ],
    },
    {
      heading: "7. Your Choices & Rights",
      paragraphs: ["Depending on where you live, you may have rights to:"],
      list: [
        "Request access to personal information we hold about you",
        "Ask us to correct inaccurate information",
        "Request deletion of information, subject to legal or warranty retention needs",
        "Opt out of marketing emails or texts",
      ],
      closing:
        "To make a request, contact us using the details below. We may need to verify your identity before fulfilling certain requests.",
    },
    {
      heading: "8. Children’s Privacy",
      paragraphs: [
        `Our services are intended for adults seeking residential and commercial ${copy.serviceNoun} work. We do not knowingly collect personal information from children under 13. If you believe a child has submitted information, contact us and we will delete it.`,
      ],
    },
    {
      heading: "9. Data Security",
      paragraphs: [
        "We use reasonable administrative, technical, and physical safeguards to protect information submitted through our site. No method of transmission or storage is 100% secure, so we cannot guarantee absolute security.",
      ],
    },
    {
      heading: "10. Third-Party Links",
      paragraphs: [
        "Our website may link to Google Maps, financing partners, or other third-party sites. Their privacy practices are governed by their own policies, not this one.",
      ],
    },
    {
      heading: "11. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. Continued use of the site after updates means you acknowledge the revised policy.",
      ],
    },
    {
      heading: "12. Contact Us",
      paragraphs: ["Questions about this Privacy Policy or your information:"],
      contact: legalContact,
    },
  ],
};

const terms = {
  title: "Terms of Service",
  path: "/terms",
  url: `${SITE_URL}/terms`,
  footerLabel: "Terms & Conditions",
  lastUpdated: "July 22, 2026",
  description: copy.termsDescription,
  sections: [
    {
      heading: null,
      paragraphs: [
        `Welcome to ${id.name}. By accessing this website or submitting a service or contact form, you agree to these Terms of Service. If you do not agree, please do not use the site. These terms mirror typical home-service website terms for a ${copy.serviceNoun} business.`,
      ],
    },
    {
      heading: "1. Who We Are",
      paragraphs: [
        `${id.name} (${id.legalName}) provides residential and commercial ${copy.serviceNoun} work in and around ${id.city} and ${region}. We are a locally owned business.`,
      ],
    },
    {
      heading: "2. Use of This Website",
      paragraphs: ["You agree to use this website only for lawful purposes and to:"],
      list: [
        "Provide accurate information when submitting forms",
        "Not attempt to disrupt, scrape, or misuse the site or its systems",
        "Not submit harmful code, spam, or misleading project requests",
      ],
      closing: "We may suspend or limit access to the site if we believe these terms are being violated.",
    },
    {
      heading: "3. Estimate & Appointment Requests",
      paragraphs: [
        "Submitting a form or booking a service visit does not create a binding service contract. Estimates, pricing, timelines, and scope are informational until confirmed in writing after an on-site look.",
      ],
      list: [
        "Final pricing may change based on material selections, structural findings, permit requirements, and scope adjustments",
        "Scheduling depends on crew availability, material lead times, and weather",
        "Financing is subject to third-party lender approval and separate terms",
      ],
    },
    {
      heading: "4. Services & Workmanship",
      paragraphs: [
        "Actual work is governed by the written proposal, work authorization, invoices, and any warranty documents you receive. Unless otherwise stated in writing:",
      ],
      list: [
        "We perform work in a professional manner consistent with industry standards",
        "Manufacturer warranties apply according to product terms; workmanship warranty details are provided at contract",
        "Weather, material lead times, and HOA or permit requirements may affect scheduling",
      ],
    },
    {
      heading: "5. Payments",
      paragraphs: [
        `Payment terms are specified in your written agreement. Deposits, progress payments, or final balances may be required. Unpaid balances may result in delayed scheduling, collection activity, or lien rights as allowed by applicable ${id.state} law.`,
      ],
    },
    {
      heading: "6. SMS & Marketing Communications",
      paragraphs: [
        `If you opt in, ${id.name} may send project updates and, where consented, marketing texts or emails. Message frequency varies. Message and data rates may apply. Reply STOP to cancel SMS; reply HELP for help. Consent is not required to receive an estimate.`,
      ],
    },
    {
      heading: "7. Intellectual Property",
      paragraphs: [
        `Site content — including text, branding, logos, photographs, and layout — is owned by or licensed to ${id.name}. You may not copy, republish, or commercially reuse site materials without our prior written permission, except for personal, non-commercial viewing.`,
      ],
    },
    {
      heading: "8. Third-Party Services",
      paragraphs: [
        "The site may integrate maps, analytics, financing tools, or other third-party services. We are not responsible for third-party content, availability, or policies. Your use of those services may be subject to additional terms.",
      ],
    },
    {
      heading: "9. Disclaimers",
      paragraphs: [
        "The website and demo content are provided “as is.” To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement regarding website content. Online examples of pricing, reviews, team bios, and project photos may be illustrative for this demo environment.",
      ],
    },
    {
      heading: "10. Limitation of Liability",
      paragraphs: [
        `To the fullest extent permitted by law, ${id.name} and its owners, employees, and agents are not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the website. Our total liability related to website use shall not exceed one hundred dollars ($100), except where liability cannot be limited under ${id.state} law. This section does not limit liability arising from a signed service agreement, which is governed by that agreement.`,
      ],
    },
    {
      heading: "11. Indemnification",
      paragraphs: [
        `You agree to indemnify and hold harmless ${id.name} from claims arising out of your misuse of the site, inaccurate form submissions, or violation of these terms, except to the extent caused by our willful misconduct.`,
      ],
    },
    {
      heading: "12. Governing Law",
      paragraphs: [
        `These terms are governed by the laws of the State of ${id.state}, without regard to conflict of law rules. Disputes related to website use shall be resolved in state or federal courts located in ${id.city}, ${id.state}, unless another venue is required by a signed service contract.`,
      ],
    },
    {
      heading: "13. Changes",
      paragraphs: [
        "We may update these Terms of Service at any time. The “Last updated” date will reflect the latest revision. Continued use of the site after changes means you accept the updated terms.",
      ],
    },
    {
      heading: "14. Contact",
      paragraphs: ["Questions about these Terms of Service:"],
      contact: legalContact,
    },
  ],
};

const exportDoc = {
  meta: {
    siteName: id.name,
    siteUrl: SITE_URL,
    mediaBase: MEDIA_BASE,
    exportedAt: new Date().toISOString(),
    generatedBy: "scripts/export-site-content.mjs",
    notes: [
      "Image files that are not site-root paths are public R2 URLs under media.stokeleads.com/faberconcrete.",
      "Crew stills, the finished driveway, and stamped patterns are AI illustrations. The new-construction approach is a field photo of a house still in scaffolding, not a named completed job.",
      "Google review avatar filenames are stored, but no matching files are in the site, so avatars are not displayed.",
      "One stored Google review has no text and is omitted from the live reviews pages. It is listed under reviews.omitted.",
      "The reviews file still names the business Faber Roof. The public site name is Faber Concrete.",
      "/admin is excluded from the sitemap. /thanks is included because the sitemap filter only drops /admin.",
    ],
  },
  identity: {
    ...id,
    tagline: id.tagline,
    catchphrase: id.catchphrase,
    serviceNoun: copy.serviceNoun,
    serviceType: copy.serviceType,
    knowsAbout: copy.schemaKnowsAbout,
  },
  brand: {
    palette: client.branding.palette,
    fonts: {
      display: client.branding.fonts.display,
      body: client.branding.fonts.body,
      stylesheet:
        "https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Open%20Sans:wght@400;600&display=swap",
    },
    logos: {
      wordmark: absUrl(client.branding.images.logo),
      wordmarkLight: absUrl(client.branding.images.logoLight),
      wordmarkDark: absUrl(client.branding.images.logoDark),
      favicon: absUrl(client.branding.images.favicon),
      svg: `${SITE_URL}/logo.svg`,
      ownerPlaceholder: absUrl(client.branding.images.owner),
    },
  },
  contact: {
    phone,
    phoneHref: `tel:${phone.replace(/\D/g, "")}`,
    callLabel: `Call ${phone}`,
    email: id.email || null,
    address: {
      street: id.address,
      city: id.city,
      state: id.state,
      zip: id.zip,
      formatted: addressLine,
    },
    hours: copy.shop.hours,
    hoursLine: copy.shop.hours
      .map((entry) => (entry.days === "Hours" ? entry.time : `${entry.days}: ${entry.time}`))
      .join(" · "),
    map: {
      lat: client.map.lat,
      lng: client.map.lng,
      zoom: client.map.zoom,
      radiusMiles: client.map.radiusMiles,
      query: client.map.query,
      listingUrl: client.map.listingUrl,
      directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${client.map.lat},${client.map.lng}`,
      embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(client.map.query)}&output=embed`,
      openLabel: "Open in Google Maps →",
    },
    google: {
      businessNameOnFile: reviewsFile.businessName,
      category: client.googleReviews.category,
      rating: reviewsFile.rating,
      count: reviewsFile.reviewsCount,
      cid: reviewsFile.cid,
      placeId: reviewsFile.placeId,
      profileUrl: reviewsFile.profileUrl,
      syncedAt: reviewsFile.syncedAt,
    },
  },
  seo: client.seo,
  navigation: {
    servicesLabel: client.nav.servicesLabel,
    areasLabel: client.nav.areasLabel,
    links: [
      { label: "All Services", href: "/#services" },
      ...services.map((service) => ({ label: service.title, href: `/services/${service.slug}` })),
      { label: "All Service Areas", href: "/areas" },
      ...areas.map((area) => ({ label: area.name, href: `/areas/${area.slug}` })),
      ...client.nav.links,
    ],
    topBar: {
      location: `${id.city}, ${id.state} · ${region}`,
      emergency: "Site look first",
      financing: "Residential · Commercial",
      rating: client.googleReviews.rating,
      reviewCount: client.googleReviews.count,
    },
  },
  callsToAction: {
    primary: copy.ctaPrimaryLabel,
    phone: copy.phoneCtaLabel,
    primaryHref: "/contact",
  },
  homepage: {
    url: `${SITE_URL}/`,
    title: client.seo.title,
    description: client.seo.description,
    sections: [
      {
        id: "hero",
        ...copy.hero,
        image: { url: absUrl(client.branding.images.hero), alt: copy.heroImageAlt },
        owner: {
          name: id.ownerName,
          role: id.ownerRole,
          image: absUrl(client.branding.images.owner),
          alt: `${id.ownerName}, owner of ${id.name}`,
          note: copy.hero.ownerNote,
          cta: copy.hero.ownerCta,
        },
      },
      { id: "trust", ...copy.trustBar },
      {
        id: "services",
        label: copy.servicesLabel,
        heading: copy.servicesHeading,
        intro: copy.servicesIntro,
        items: services.map((service) => ({
          title: service.title,
          href: `/services/${service.slug}`,
          shortDescription: service.shortDescription,
          image: service.heroImage,
        })),
      },
      {
        id: "why",
        label: "The slab",
        ...copy.whyChoose,
      },
      {
        id: "process",
        ...copy.process,
        meet: {
          name: id.ownerName,
          role: id.ownerRole,
          message: copy.process.meetMessage,
          image: absUrl(client.branding.images.owner),
        },
      },
      {
        id: "about",
        ...copy.ownerStory,
        quote: `“${copy.ownerStory.quote}”`,
        image: absUrl(client.branding.images.owner),
        practice: [copy.practice.slabThickness, copy.practice.baseMaterial, copy.practice.yearsExperience],
      },
      {
        id: "team",
        ...copy.teamSection,
        members: copy.teamMembers,
      },
      {
        id: "reviews",
        ...copy.reviewsSection,
        ratingLabel: `${reviewsFile.rating.toFixed(1)}`,
        countLabel: `${reviewsFile.reviewsCount} Google Reviews`,
        viewOnGoogle: "View on Google",
        emptyState: "No Google reviews are published here yet.",
      },
      { id: "work", ...copy.workGallery },
      {
        id: "service-areas",
        label: "Service Map",
        ...copy.serviceArea,
        areas: areas.map((area) => ({ name: area.name, href: `/areas/${area.slug}` })),
      },
      {
        id: "value-props",
        items: copy.valueProps,
      },
      {
        id: "offers",
        ...copy.offersSection,
        offers: copy.offers,
      },
      {
        id: "faq",
        label: "Questions",
        heading: "What people ask before the pour",
        faqs: copy.faqs,
      },
      {
        id: "before-after",
        label: "Compare",
        ...copy.beforeAfter,
        beforeImage: absUrl(copy.beforeAfter.beforeImage),
        afterImage: absUrl(copy.beforeAfter.afterImage),
        displayed: copy.beforeAfter.enabled,
      },
      { id: "cta", ...copy.ctaBanner },
    ],
  },
  services,
  serviceAreas: {
    index: {
      url: `${SITE_URL}/areas`,
      title: `Service Areas | ${id.name}`,
      description: `${id.name} serves ${region}. Send the address to ask about your ZIP code.`,
      intro: copy.serviceAreasIntro,
    },
    areas,
  },
  illustrations,
  reviews: {
    summary: {
      businessNameOnFile: reviewsFile.businessName,
      rating: reviewsFile.rating,
      count: reviewsFile.reviewsCount,
      profileUrl: reviewsFile.profileUrl,
      syncedAt: reviewsFile.syncedAt,
    },
    page: {
      ...copy.reviewsPage,
      url: `${SITE_URL}/reviews`,
      backLink: "← Back to homepage reviews",
      ratingLine: `${reviewsFile.rating} out of 5`,
      basedOn: `Based on ${reviewsFile.reviewsCount} Google reviews`,
      viewOnGoogleMaps: "View on Google Maps",
      showing: `Showing ${publishedReviews.length} recent Google reviews`,
      closingHeading: "Ready for a slab that is poured to the spec?",
      closingBody: `Five inches on the driveway, six on the approach, compacted 21AA, across ${region}.`,
      leaveReview: "Leave a Google Review",
    },
    published: publishedReviews,
    omitted: reviewsFile.rawReviews
      .filter((review) => !(review.text ?? "").trim())
      .map((review) => ({
        author: review.author,
        rating: review.rating,
        date: review.date,
        reason: "Empty review text is not shown on the site.",
      })),
  },
  forms: {
    estimate: {
      ...client.form,
      consent: `I agree to ${id.name}'s Terms and Privacy Policy, ${copy.formConsent}`,
      fields: [
        { name: "first_name", label: "First name", required: true },
        { name: "last_name", label: "Last name", required: true },
        { name: "phone", label: "Phone", required: true },
        { name: "email", label: "Email (optional)", required: false },
        { name: "project_type", label: "Service needed", required: true, placeholder: "Select a service" },
      ],
      followUp: `${id.ownerName} will follow up directly.`,
      action: "/api/lead",
    },
    contactPage: {
      label: "Contact",
      heading: copy.contactHeading,
      intro: copy.contactIntro,
      facts: ["Site look before a price", addressLine, "Residential and commercial"],
    },
    thanks: {
      title: "Request Received!",
      body: `Thanks for contacting ${id.name}. Matt Faber will follow up about a look at the site and an estimate.`,
      note: "If you left the address out, send the form again.",
      back: "Back to homepage",
    },
  },
  footer: {
    blurb: copy.footerBlurb,
    quickLinksHeading: "Quick Links",
    servicesHeading: "Services",
    contactHeading: "Contact Us",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: client.nav.aboutLabel, href: "/about" },
      { label: client.nav.reviewsLabel, href: "/#reviews" },
      { label: client.nav.areasLabel, href: "/areas" },
      { label: client.nav.contactLabel, href: "/contact" },
    ],
    serviceLinks: [
      ...client.primaryServiceSlugs.flatMap((slug) => {
        const service = services.find((item) => item.slug === slug);
        return service ? [{ label: service.title, href: `/services/${service.slug}` }] : [];
      }),
      { label: copy.ctaPrimaryLabel, href: "/contact" },
    ],
    serving: `Serving ${region} — Areas we serve`,
    copyright: `© ${new Date().getFullYear()} ${id.legalName}. All Rights Reserved.`,
    legalLinks: [
      { label: "Privacy Policy", href: "/policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
    badge: "Licensed & Insured",
    social: {
      google: client.map.listingUrl,
      facebook: null,
      instagram: null,
      youtube: null,
    },
  },
  legal: { privacy, terms },
  images,
  sitemap: {
    index: `${SITE_URL}/sitemap-index.xml`,
    robots: `${SITE_URL}/robots.txt`,
    robotsBody: "User-agent: *\nAllow: /\n\nDisallow: /admin/\n\nSitemap: https://faberconcrete.com/sitemap-index.xml\n",
    excluded: ["/admin"],
    urls: sitemapUrls,
  },
  redirects: [
    { from: "/service-areas", to: "/areas", status: 301 },
    { from: "/jobs/how-the-slab-goes-in", to: "/services/driveways#slab", status: 301 },
    { from: "/jobs/how-the-slab-goes-in/", to: "/services/driveways#slab", status: 301 },
    { from: "/photos", to: "https://upload.stokeleads.com/c/TOKEN", status: 302, note: "TOKEN is a placeholder until a real upload link is minted." },
  ],
};

const outPath = join(root, "exports/faberconcrete-content.json");
await mkdir(dirname(outPath), { recursive: true });
await writeFile(outPath, `${JSON.stringify(exportDoc, null, 2)}\n`);
console.log(
  `Wrote ${outPath} (${sitemapUrls.length} sitemap URLs, ${services.length} services, ${images.length} images)`,
);
