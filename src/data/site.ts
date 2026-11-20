export interface ServiceItem {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  heroImage: { url: string; alt: string };
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  gallery: { url: string; alt: string }[];
}

export interface AreaItem {
  slug: string;
  name: string;
  county: string;
  type: 'county' | 'city';
  seoTitle: string;
  seoDescription: string;
  headline: string;
  intro: string;
  soilAndClimate: string;
  localCodes: string;
  dispatchRoute: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
}

export interface GuideItem {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
  readTime: string;
  summary: string;
  sections: { heading: string; body: string }[];
  relatedServiceSlug: string;
}

export const SITE = {
  name: 'Faber Concrete',
  legalName: 'Faber Concrete',
  url: 'https://faberconcrete.com',
  tagline: 'Five-inch driveways, priced down the middle.',
  catchphrase: 'FABER CONCRETE — FIVE INCHES, EVERY DRIVEWAY',
  ownerName: 'Matt Faber',
  ownerRole: 'Owner',
  phone: '(810) 360-7385',
  phoneHref: 'tel:8103607385',
  address: {
    street: '22710 Haggerty Rd. Suite 100B',
    city: 'Farmington Hills',
    state: 'MI',
    zip: '48335',
    formatted: '22710 Haggerty Rd. Suite 100B, Farmington Hills, MI 48335'
  },
  geo: {
    lat: 42.4564467,
    lng: -83.4345146
  },
  google: {
    rating: 5.0,
    count: 5,
    cid: '2039319338774567315',
    placeId: 'ChIJHVmRna-vJIgRkxk-QyIeTRw',
    profileUrl: 'https://www.google.com/maps?cid=2039319338774567315',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=42.4564467,-83.4345146',
    embedUrl:
      'https://www.google.com/maps?q=22710%20Haggerty%20Rd.%20Suite%20100B%2C%20Farmington%20Hills%2C%20MI%2048335&output=embed'
  },
  region: 'Wayne, Oakland, Macomb, Washtenaw, and Livingston counties',
  knowsAbout: [
    'Concrete driveways',
    'Driveway approaches',
    'Concrete flatwork',
    'Stamped concrete',
    'Concrete pavers',
    '5-inch concrete slabs',
    '6-inch driveway approaches',
    '21AA aggregate base'
  ],
  logos: {
    wordmark: '/logo.png',
    wordmarkLight: '/logo.png',
    favicon: '/favicon.png',
    svg: '/logo.svg',
    ownerPlaceholder: '/placeholders/logo.svg'
  },
  methodInfographic: {
    url: '/faber-concrete-methodology.webp',
    alt: 'Faber Concrete methodology infographic: site prep and grade, compacted 21AA, forms and rebar, a five-inch slab, smooth finish, cure and seal, and control joints. Six inches on the approach. Not a photo of a completed job.',
    caption:
      'Site prep and grade, compacted 21AA, forms and rebar, a five-inch slab, smooth finish, cure and seal, and control joints. Six inches on the approach. Illustration, not a photo of a completed Faber Concrete job.'
  }
};

export const SERVICES: ServiceItem[] = [
  {
    slug: 'driveways',
    title: 'Driveways',
    seoTitle: 'Concrete Driveways in Metro Detroit | Faber Concrete',
    seoDescription:
      'Five inches on every driveway. Never four. A compacted 21AA base under the slab, and a finish from people who have been doing it for more than 25 years. Call (810) 360-7385.',
    shortDescription:
      'Five inches on every driveway. Never four. A compacted 21AA base under the slab, and a finish from people who have been doing it for more than 25 years.',
    fullDescription:
      'Faber Concrete pours driveways at five inches, every time. Most contractors pour four. That missing inch is how a bid gets cheaper, on the order of $600 to $700 on an average driveway, and it is the inch a Michigan winter and a heavy delivery truck use up. We charge for the inch. The bid will not be the cheapest one. It is the highest-quality bid, priced down the middle, with a better finish.',
    highlights: [
      'Five inches, never four',
      'Six inches where it meets the street',
      'Graded and compacted 21AA crushed limestone',
      'Finishers with 25+ years on the tools'
    ],
    heroImage: {
      url: 'https://media.stokeleads.com/faberconcrete/faber-concrete-finished-driveway.avif',
      alt: 'Driveways by Faber Concrete (AI illustration, not a completed job photo)'
    },
    sections: [
      {
        heading: 'Five inches, not four',
        body: 'We never pour a four-inch slab. Five inches, every time, no matter the driveway. Six inches on the approach, the section that takes the hit from the street. That is an inch more than what most contractors pour, on the driveway and again on the approach. They skip it because it is cheaper. Matt Faber puts it plainly: those crews are tripping over dollars to pick up pennies. If you are looking for a cheap deal, this is not it.'
      },
      {
        heading: 'Cold climate, heavy trucks',
        body: 'Michigan is why the extra inch is on the whole driveway, not a patch in the middle. Freeze and thaw work on a thin slab. So does traffic the old four-inch rule never really planned for. Picture a 20-ton delivery truck rolling in and out of the driveway. The approach takes that load first, which is why it is six inches, and the rest of the drive is still five.'
      },
      {
        heading: 'What is under the driveway',
        body: 'Thickness does not save a slab sitting on the wrong ground. We never pour over dirt. We also do not deliver a load of sand, compact the sand, and call it a base. A lot of bids save a few hundred dollars that way. Sand and the soil under a slab can erode out from underneath. We take 21AA, grade the whole area, compact the whole area, and then pour five inches over it.'
      },
      {
        heading: 'The finish you live with',
        body: 'The finishers have been finishing concrete for more than 25 years. The finish is the surface you actually see on day one, sitting on a body of concrete that was not thinned out to win the price. You get a written contract after we look at the site, not a number guessed from the curb.'
      }
    ],
    faqs: [
      {
        q: 'Why not a four-inch driveway?',
        a: 'Four inches is how a bid gets cheaper, on the order of $600 to $700 on an average driveway. Michigan cold and a heavy delivery truck work on that thin slab. Faber Concrete pours five inches on the driveway and six on the approach.'
      },
      {
        q: 'Where do you work?',
        a: 'Wayne, Oakland, Macomb, Washtenaw, and Livingston counties, homes and commercial properties. Matt takes some ZIP codes in each county, aimed at people who want this slab, not every address. Send the address.'
      }
    ],
    gallery: [
      {
        url: 'https://media.stokeleads.com/faberconcrete/media-generation-faber-concrete-video2-still-a-0-42c077c0-9e28-442e-9c52-86bfc60788a1.avif',
        alt: 'Three finishers placing concrete in driveway forms. AI illustration, not a photo of a completed Faber Concrete job.'
      },
      {
        url: 'https://media.stokeleads.com/faberconcrete/media-generation-faber-concrete-video2-still-b-0-38739a68-2567-4789-b4c4-abcc5a78a39f.avif',
        alt: 'A person standing on a new driveway, looking toward the street. AI illustration, not a photo of a completed Faber Concrete job.'
      }
    ]
  },
  {
    slug: 'approaches',
    title: 'Driveway approaches',
    seoTitle: '6-Inch Driveway Approaches in Metro Detroit | Faber Concrete',
    seoDescription:
      'Six inches where the street meets the drive. Built to take 20-ton delivery trucks on a compacted 21AA base across Metro Detroit. Call (810) 360-7385.',
    shortDescription:
      'Six inches where the street meets the drive. That is the section a heavy truck hits first, on the same compacted 21AA base as the rest of the slab.',
    fullDescription:
      'The approach is not the same pour as the rest of the driveway. Faber Concrete makes it six inches. The driveway behind it is five. Both sit on 21AA that has been graded and compacted before anyone sets a form. Most contractors pour four inches and treat the apron as an afterthought.',
    highlights: [
      'Six inches at the street apron',
      'Five inches on the driveway behind it',
      'Engineered for 20-ton delivery trucks & curb salt',
      'Compacted 21AA crushed limestone base'
    ],
    heroImage: {
      url: 'https://media.stokeleads.com/faberconcrete/new-construction-stone-house.avif',
      alt: 'New construction concrete approach at the street in front of a stone house in scaffolding. Field photo, not a named completed job.'
    },
    sections: [
      {
        heading: 'The approach is its own thickness',
        body: 'The approach is where the street meets the driveway. It takes the first hit from a 20-ton delivery truck coming in and out, and it takes the weather and road salt at the curb. We pour six inches there. An extra inch on the approach, on top of the extra inch already on the driveway, is what you want in a Michigan cold climate.'
      },
      {
        heading: 'Same base as the driveway',
        body: 'A thicker approach on sand or dirt still fails. We grade 21AA across the whole area, compact it, then form, then pour. We never pour over dirt. We never compact a layer of sand and call that the base.'
      },
      {
        heading: 'New construction and replacements',
        body: 'A new house still needs the apron thought through before the first truck uses it. A failed approach on an older drive is often the piece that goes first, because that is where the weight lands. Tell us whether you want the approach with the driveway or the approach on its own.'
      }
    ],
    faqs: [
      {
        q: 'Is the approach included with a driveway?',
        a: 'When we pour the driveway, the approach is part of the spec. Six inches at the street, five inches on the rest, both on compacted 21AA. If you only need the apron, say so on the form and we will price that section.'
      },
      {
        q: 'Do you handle municipal right-of-way requirements?',
        a: 'Yes. Many Metro Detroit cities inspect the street apron before pouring because it sits in the municipal right-of-way. Our six-inch spec on compacted 21AA meets or exceeds local municipal standards.'
      }
    ],
    gallery: [
      {
        url: 'https://media.stokeleads.com/faberconcrete/media-generation-faber-concrete-video2-still-c-0-083b9d97-5947-4a2c-8a5e-d6326287d03f.avif',
        alt: 'Two finishers working a driveway apron at the street. AI illustration, not a photo of a completed Faber Concrete job.'
      }
    ]
  },
  {
    slug: 'flatwork',
    title: 'Flatwork',
    seoTitle: 'Concrete Flatwork, Pads & Stoops in Metro Detroit | Faber Concrete',
    seoDescription:
      'Pads, stoops, walkways, and garage slabs poured to our 5-inch driveway spec over compacted 21AA. Concrete is our only business. Call (810) 360-7385.',
    shortDescription:
      'Pads, stoops, and other slabs poured to the driveway spec: five inches, six where it is an approach, compacted 21AA. Concrete is the company, not a side job.',
    fullDescription:
      'Faber Concrete is a concrete company. Flatwork gets the same rules as a driveway. We never pour four inches to win the bid. There are not as many crews who actually know how to do concrete, and a lot of the ones who do never advertise. We stay a specialist so the slab does not look like a jack-of-all-trades add-on.',
    highlights: [
      'Same five-inch minimum slab spec',
      'Six inches on heavy-load sections',
      'Compacted 21AA base, never dirt or sand',
      'Dedicated concrete specialist, not a side trade'
    ],
    heroImage: {
      url: 'https://media.stokeleads.com/faberconcrete/concrete-crew-finishing-driveway.avif',
      alt: 'Flatwork finishing by Faber Concrete (AI illustration, not a completed job photo)'
    },
    sections: [
      {
        heading: 'The same rules as a driveway',
        body: 'A pad, a stoop, or another flat slab is not a place to thin the concrete out. We pour five inches. If the section is an approach, it is six. Under it is 21AA, graded across the whole area and compacted before forming and before the pour. The finishers have been finishing for more than 25 years.'
      },
      {
        heading: 'Why this is its own company',
        body: 'Matt wanted concrete kept separate on purpose. A page that sells roofs and driveways together reads like a jack of all trades. This site is only the slab. Fewer companies even know how to do it, and a lot of them do not advertise. That is the opening, and it only works if the work stays a specialty.'
      },
      {
        heading: 'Priced down the middle',
        body: 'The extra inch and the 21AA cost more than four inches over compacted sand. We charge the customer for that. The bid will not be the cheapest number on the sheet, and it will not be an outrageous one either. Highest quality, priced down the middle, with a superior finish.'
      }
    ],
    faqs: [
      {
        q: 'Is flatwork poured thinner than a driveway?',
        a: 'No. Five inches, every time, unless the section is an approach. Approaches are six. The base is compacted 21AA either way.'
      },
      {
        q: 'Do you pour commercial pads and walkways?',
        a: 'Yes. We pour both residential and commercial flatwork across qualifying ZIP codes in Wayne, Oakland, Macomb, Washtenaw, and Livingston counties.'
      }
    ],
    gallery: []
  },
  {
    slug: 'patios',
    title: 'Stamped concrete and pavers',
    seoTitle: 'Stamped Concrete & Pavers in Metro Detroit | Faber Concrete',
    seoDescription:
      'Decorative stamped concrete and pavers poured on our 5-inch structural slab over compacted 21AA in Metro Detroit. Call (810) 360-7385.',
    shortDescription:
      'Stamped concrete and pavers for people who want a driveway or patio that looks finished, poured or set on the same standard: five inches, six on an approach, compacted 21AA.',
    fullDescription:
      'Faber Concrete does stamped concrete and pavers, aimed at homeowners and commercial properties that want the nicer surface, not the cheapest slab. The stamp or the paver is the finish. The body under a stamped pour is still five inches over compacted 21AA, six inches on an approach. The pattern close-ups on this site are illustrations, not photos of a finished Faber job.',
    highlights: [
      'Stamped concrete poured at full 5-inch structural depth',
      'Interlocking concrete pavers on compacted 21AA',
      'Grey slate, warm limestone, travertine & charcoal tones',
      '25+ year finishers for crisp release & joint work'
    ],
    heroImage: {
      url: 'https://media.stokeleads.com/faberconcrete/stamped-concrete-paving-closeup.avif',
      alt: 'Stamped concrete pattern close-up (AI illustration, not a completed job photo)'
    },
    sections: [
      {
        heading: 'The pattern sits on the same slab',
        body: 'A stamp does not make a thin slab a good one. We pour five inches, every time, and six on the approach, then stamp the pattern. Under it is 21AA that has been graded and compacted. We never pour the decorative surface over dirt or over sand alone. Pavers are part of the work too, for a driveway or a patio that should not be a broom finish.'
      },
      {
        heading: 'What the pictures are',
        body: 'The close-ups show irregular stone and large tile in grey slate, warm limestone, cream travertine, and charcoal. They are AI illustrations so you can see pattern and color. They are not photos of a completed Faber Concrete job, and they are not a promise that every pattern is in stock. Pavers do not have a pattern board on this site yet. Tell us what you want and we will say what we can do after we see the site.'
      },
      {
        heading: 'Who this is for',
        body: 'Stamped concrete and pavers are for people who want the driveway or patio to look like it was done on purpose. The price sits down the middle of a quality bid, not at the bottom.'
      }
    ],
    faqs: [
      {
        q: 'Are the pattern photos your jobs?',
        a: 'No. They are AI illustrations of pattern and color. They are not photos of a completed Faber Concrete job.'
      },
      {
        q: 'Do stamped concrete patios still get five inches of concrete?',
        a: 'Yes. Decorative texture is stamped into the top surface, so the structural slab underneath remains a full five inches over compacted 21AA.'
      }
    ],
    gallery: [
      {
        url: 'https://media.stokeleads.com/faberconcrete/faber-concrete-large-tile-grey.avif',
        alt: 'Grey slate stamped concrete pattern. AI illustration, not a completed job photo.'
      },
      {
        url: 'https://media.stokeleads.com/faberconcrete/faber-concrete-large-lime-tile.avif',
        alt: 'Warm limestone stamped concrete pattern. AI illustration, not a completed job photo.'
      },
      {
        url: 'https://media.stokeleads.com/faberconcrete/faber-concrete-large-tile.avif',
        alt: 'Cream travertine stamped concrete pattern. AI illustration, not a completed job photo.'
      },
      {
        url: 'https://media.stokeleads.com/faberconcrete/faber-concrete-large-charcoal-tile.avif',
        alt: 'Charcoal tile stamped concrete pattern. AI illustration, not a completed job photo.'
      }
    ]
  }
];

export const AREAS: AreaItem[] = [
  {
    slug: 'oakland-county',
    name: 'Oakland County',
    county: 'Oakland',
    type: 'county',
    seoTitle: 'Concrete Contractor in Oakland County, MI | Faber Concrete',
    seoDescription:
      'Five-inch concrete driveways, six-inch approaches, and compacted 21AA base across Oakland County including Farmington Hills, Novi, and West Bloomfield.',
    headline: 'Concrete contractor in Oakland County',
    intro:
      'Based right on Haggerty Road in Farmington Hills, Faber Concrete serves residential and commercial properties across select ZIP codes in Oakland County.',
    soilAndClimate:
      'Oakland County’s rolling moraines and dense glacial clay soils trap groundwater and expand aggressively during January and February freeze-thaw cycles. A 4-inch slab poured over sand heaves and fractures; our 5-inch driveway and 6-inch approach over compacted 21AA locks out sub-base washout.',
    localCodes:
      'Municipalities across Oakland County—including Farmington Hills, Novi, and Troy—require dedicated right-of-way inspections for street approaches. Our 6-inch apron standard is built to pass city engineering inspections the first time.',
    dispatchRoute:
      'Dispatched directly from 22710 Haggerty Rd. Suite 100B via I-696, I-275, M-5, and Telegraph Road.',
    highlights: [
      'Home base in Farmington Hills (48335)',
      '5-inch driveways & 6-inch approaches',
      'Engineered for Oakland County glacial clay',
      'Select ZIP codes served — send address to verify'
    ],
    faqs: [
      {
        q: 'Which Oakland County ZIP codes do you serve?',
        a: 'We serve select ZIP codes across Oakland County, including Farmington Hills, Novi, Northville, West Bloomfield, and surrounding communities. Send your street address and Matt will confirm coverage.'
      },
      {
        q: 'How soon can you schedule an Oakland County driveway pour?',
        a: 'April and May fill first on our spring calendar. Send your address now for an on-site evaluation and written contract.'
      }
    ]
  },
  {
    slug: 'wayne-county',
    name: 'Wayne County',
    county: 'Wayne',
    type: 'county',
    seoTitle: 'Concrete Contractor in Wayne County, MI | Faber Concrete',
    seoDescription:
      'Five-inch concrete driveways and six-inch street approaches on compacted 21AA in select Wayne County communities including Livonia, Plymouth, and Canton.',
    headline: 'Concrete contractor in Wayne County',
    intro:
      'Driveways, approaches, flatwork, stamped concrete, and pavers in Wayne County. Faber Concrete takes select ZIP codes for homeowners and businesses who want a thicker, properly based slab.',
    soilAndClimate:
      'Western Wayne County communities like Livonia, Plymouth, Northville, and Canton sit on flat lake-plain clay with high water tables. Without deep grading and compacted 21AA crushed limestone, moisture undercuts thin slabs and causes premature settling.',
    localCodes:
      'Wayne County and local building departments strictly regulate curb cuts, sidewalk transitions, and apron thickness. We form and pour approaches at a full 6 inches to handle heavy residential and commercial vehicle loads.',
    dispatchRoute:
      'Fast crew and ready-mix coordination along I-275, I-96, Eight Mile, and Plymouth Road.',
    highlights: [
      '5-inch driveways, never 4-inch shortcuts',
      '6-inch approaches for heavy street transitions',
      'Compacted 21AA base prevents clay settlement',
      'Written contract after on-site inspection'
    ],
    faqs: [
      {
        q: 'Do you work in every city in Wayne County?',
        a: 'No. Matt takes select ZIP codes in Wayne County aimed at homeowners who want our five-inch / six-inch 21AA specification. Send your address on the form and we will confirm right away.'
      },
      {
        q: 'Why does your bid cost $600–$700 more than a 4-inch quote?',
        a: 'That difference is the extra full inch of concrete across your driveway and approach plus compacted 21AA crushed limestone instead of cheap sand.'
      }
    ]
  },
  {
    slug: 'macomb-county',
    name: 'Macomb County',
    county: 'Macomb',
    type: 'county',
    seoTitle: 'Concrete Contractor in Macomb County, MI | Faber Concrete',
    seoDescription:
      'Five-inch driveways and six-inch approaches on compacted 21AA in select Macomb County ZIP codes. Built for Michigan winters. Call (810) 360-7385.',
    headline: 'Concrete contractor in Macomb County',
    intro:
      'Serving select residential and commercial ZIP codes in Macomb County with our signature 5-inch driveway and 6-inch approach specification.',
    soilAndClimate:
      'Macomb County’s clay-heavy soils and Lake St. Clair freeze-thaw swings put immense upward frost pressure on residential flatwork. Extra slab thickness and interlocking 21AA aggregate keep slabs stable.',
    localCodes:
      'Macomb County townships and cities enforce strict sidewalk-through-driveway and apron thickness rules. Our 5-inch / 6-inch spec clears municipal inspections cleanly.',
    dispatchRoute:
      'Direct access across Metro Detroit via I-696, M-59, and M-53.',
    highlights: [
      'Full 5-inch driveway slab thickness',
      '6-inch reinforced street approach',
      '25+ year finishing crew',
      'Priced down the middle — never a cheap shortcut'
    ],
    faqs: [
      {
        q: 'How do I check if my Macomb County address is in your service zone?',
        a: 'Submit your street address through our estimate form or call (810) 360-7385. Matt checks every address personally.'
      }
    ]
  },
  {
    slug: 'washtenaw-county',
    name: 'Washtenaw County',
    county: 'Washtenaw',
    type: 'county',
    seoTitle: 'Concrete Contractor in Washtenaw County, MI | Faber Concrete',
    seoDescription:
      'Five-inch concrete driveways, six-inch approaches, and stamped patios on compacted 21AA in select Washtenaw County ZIP codes including Ann Arbor & Saline.',
    headline: 'Concrete contractor in Washtenaw County',
    intro:
      'Faber Concrete pours 5-inch driveways, 6-inch approaches, and decorative stamped flatwork in select ZIP codes across Washtenaw County.',
    soilAndClimate:
      'From Ann Arbor’s hilly glacial till to Saline and Dexter’s clay subgrades, Washtenaw County driveways face dramatic drainage shifts and winter frost heave. Grading and compacting 21AA across the entire footprint prevents washouts.',
    localCodes:
      'Ann Arbor and surrounding townships maintain strict impervious surface and right-of-way apron permits. We verify grades and specs on-site before writing a contract.',
    dispatchRoute:
      'Easy access from our Farmington Hills base via M-14, I-94, and US-23.',
    highlights: [
      '5-inch driveways & 6-inch street approaches',
      'Full-footprint 21AA grading and compaction',
      'Residential & commercial flatwork',
      'Spring calendar booking now open'
    ],
    faqs: [
      {
        q: 'Do you serve Ann Arbor and surrounding Washtenaw County towns?',
        a: 'We take select ZIP codes in Washtenaw County. Send your address and project scope and Matt will let you know right away.'
      }
    ]
  },
  {
    slug: 'livingston-county',
    name: 'Livingston County',
    county: 'Livingston',
    type: 'county',
    seoTitle: 'Concrete Contractor in Livingston County, MI | Faber Concrete',
    seoDescription:
      'Five-inch concrete driveways and six-inch approaches on compacted 21AA in select Livingston County ZIP codes including Brighton, Howell, and Hartland.',
    headline: 'Concrete contractor in Livingston County',
    intro:
      'Longer rural and suburban driveways in Livingston County demand structural thickness. Faber Concrete pours 5 inches on every driveway and 6 inches at the road.',
    soilAndClimate:
      'Livingston County’s open exposure, deeper frost lines, and longer driveway runs mean heavy propane, well-service, and delivery trucks put high point-loads on slabs. Five inches of concrete over compacted 21AA prevents mid-slab cracking.',
    localCodes:
      'Livingston County Road Commission approach standards require durable apron thickness where private drives meet county roads. Our 6-inch approach spec is built for that exact transition.',
    dispatchRoute:
      'Direct run west along I-96 and US-23 from Farmington Hills.',
    highlights: [
      'Built for longer suburban & rural Livingston drives',
      '5-inch main slab, 6-inch road approach',
      'Compacted 21AA base — never poured on dirt or sand',
      'On-site inspection & written contract by Matt Faber'
    ],
    faqs: [
      {
        q: 'Can you handle long driveways in Brighton, Howell, or South Lyon?',
        a: 'Yes. Longer runs benefit most from our 5-inch slab and compacted 21AA base because heavy trucks travel further onto the driveway.'
      }
    ]
  },
  {
    slug: 'farmington-hills-mi',
    name: 'Farmington Hills, MI',
    county: 'Oakland',
    type: 'city',
    seoTitle: 'Concrete Driveway Contractor in Farmington Hills, MI | Faber Concrete',
    seoDescription:
      'Local Farmington Hills concrete contractor at 22710 Haggerty Rd. 5-inch driveways, 6-inch approaches, and compacted 21AA base. Call (810) 360-7385.',
    headline: 'Concrete contractor in Farmington Hills, MI',
    intro:
      'Our shop is located right in Farmington Hills at 22710 Haggerty Rd. Suite 100B. Neighbors across Farmington Hills and Farmington get direct owner site visits and our signature 5-inch slab spec.',
    soilAndClimate:
      'Subdivisions along Twelve Mile, Orchard Lake, and Halsted Roads sit over heavy Oakland County clay that shifts through winter thaws. We excavate, grade, and compact 21AA crushed limestone before setting a single form.',
    localCodes:
      'The City of Farmington Hills Engineering Division requires right-of-way permits and inspections for driveway approaches. Our 6-inch approach specification meets city standards.',
    dispatchRoute:
      'Minutes from anywhere in Farmington Hills via Haggerty Rd, I-696, M-5, and Grand River Ave.',
    highlights: [
      'Headquartered at 22710 Haggerty Rd. Suite 100B',
      '5-inch driveways & 6-inch city approaches',
      '25+ years concrete finishing experience',
      'Written contract before forming begins'
    ],
    faqs: [
      {
        q: 'Where is Faber Concrete located in Farmington Hills?',
        a: 'Our office is at 22710 Haggerty Rd. Suite 100B, Farmington Hills, MI 48335.'
      }
    ]
  },
  {
    slug: 'novi-mi',
    name: 'Novi, MI',
    county: 'Oakland',
    type: 'city',
    seoTitle: 'Concrete Driveways in Novi, MI | 5-Inch Slab | Faber Concrete',
    seoDescription:
      'Novi concrete driveway replacement and new pours. 5 inches thick on compacted 21AA, 6 inches at the curb. Located minutes away on Haggerty Rd.',
    headline: 'Concrete driveways & approaches in Novi, MI',
    intro:
      'Just west of our Haggerty Road office, Novi homeowners call Faber Concrete when they want a replacement driveway that will not crack like the builder-grade 4-inch original.',
    soilAndClimate:
      'Many Novi subdivisions built in the 1990s and 2000s received thin 4-inch builder slabs poured over poorly compacted backfill. We tear out failed drives, compact 21AA, and pour a true 5-inch slab.',
    localCodes:
      'City of Novi right-of-way rules govern apron thickness and sidewalk panels through the driveway. We pour approaches at 6 inches to withstand trash and delivery trucks.',
    dispatchRoute:
      '5 minutes from our Farmington Hills base via Haggerty Rd, Ten Mile, and I-96.',
    highlights: [
      'Builder-grade 4-inch driveway replacement specialist',
      'Full 5-inch driveway & 6-inch Novi curb approach',
      'Compacted 21AA base',
      'Direct estimate from owner Matt Faber'
    ],
    faqs: [
      {
        q: 'Do you replace cracked builder-grade driveways in Novi?',
        a: 'Yes. Replacing thin, settled 4-inch subdivision driveways with a 5-inch slab over compacted 21AA is one of our core specialties.'
      }
    ]
  },
  {
    slug: 'livonia-mi',
    name: 'Livonia, MI',
    county: 'Wayne',
    type: 'city',
    seoTitle: 'Concrete Driveways in Livonia, MI | Faber Concrete',
    seoDescription:
      'Five-inch concrete driveways and six-inch street approaches in Livonia, MI on compacted 21AA crushed limestone. Call (810) 360-7385.',
    headline: 'Concrete driveways & flatwork in Livonia, MI',
    intro:
      'Right down Haggerty and Eight Mile from our shop, Livonia homeowners rely on Faber Concrete for full driveway replacements, garage pads, and 6-inch street approaches.',
    soilAndClimate:
      'Livonia’s flat clay soils hold moisture into late fall. When temperatures drop, water trapped under sand-based slabs freezes and lifts concrete panels. Compacted 21AA provides drainage and structural lock.',
    localCodes:
      'City of Livonia Engineering requires permits and pre-pour form inspections for all residential approaches and public sidewalk sections.',
    dispatchRoute:
      'Direct access via Haggerty Rd, I-275, Seven Mile, and Five Mile Roads.',
    highlights: [
      'Bordering our Farmington Hills headquarters',
      '5-inch driveways & 6-inch Livonia approaches',
      'Never poured over dirt or uncompacted sand',
      'Priced down the middle with a 25+ year finish'
    ],
    faqs: [
      {
        q: 'How thick are your driveways in Livonia?',
        a: 'Every driveway is poured at 5 inches, and every street approach is poured at 6 inches over compacted 21AA.'
      }
    ]
  },
  {
    slug: 'northville-mi',
    name: 'Northville, MI',
    county: 'Wayne',
    type: 'city',
    seoTitle: 'Concrete Contractor in Northville, MI | Faber Concrete',
    seoDescription:
      'Five-inch concrete driveways, six-inch approaches, and stamped patios in Northville, MI. Compacted 21AA base. Call (810) 360-7385.',
    headline: 'Concrete contractor in Northville, MI',
    intro:
      'Serving Northville and Northville Township with 5-inch concrete driveways, 6-inch approaches, and decorative stamped concrete built for Michigan winters.',
    soilAndClimate:
      'Northville’s sloped lots and clay subgrades demand careful grading so runoff drains cleanly off the slab rather than undermining the base.',
    localCodes:
      'Both the City of Northville and Northville Township enforce strict approach and sidewalk elevation standards that our 6-inch apron spec satisfies.',
    dispatchRoute:
      'Minutes south of our Haggerty Road office via Haggerty Rd, Seven Mile, and I-275.',
    highlights: [
      'Minutes from our Haggerty Road office',
      '5-inch driveways & 6-inch approaches',
      'Stamped concrete & pavers available',
      'Written contract before any forms are set'
    ],
    faqs: [
      {
        q: 'Do you pour stamped concrete patios and driveways in Northville?',
        a: 'Yes. Even our stamped concrete is poured at a full 5-inch thickness over compacted 21AA.'
      }
    ]
  },
  {
    slug: 'plymouth-mi',
    name: 'Plymouth, MI',
    county: 'Wayne',
    type: 'city',
    seoTitle: 'Concrete Driveways in Plymouth, MI | Faber Concrete',
    seoDescription:
      'Five-inch concrete driveways and six-inch street approaches in Plymouth & Plymouth Township on compacted 21AA. Call (810) 360-7385.',
    headline: 'Concrete driveways & approaches in Plymouth, MI',
    intro:
      'From historic Plymouth neighborhoods to Plymouth Township subdivisions, Faber Concrete pours 5-inch driveways and 6-inch approaches that stand up to heavy vehicles and winter salt.',
    soilAndClimate:
      'Older Plymouth driveways often suffer from tree-root heave and thin 3.5-to-4-inch pours. We remove failed concrete, re-grade with 21AA, and pour a full 5 inches.',
    localCodes:
      'City of Plymouth and Plymouth Township require right-of-way permits for street approaches and public sidewalk replacements.',
    dispatchRoute:
      'Direct route south via I-275, M-14, and Haggerty Road.',
    highlights: [
      'Full tear-out and 5-inch replacement pours',
      '6-inch street approaches on compacted 21AA',
      'Finishers with more than 25 years experience',
      'April and May spring dates book first'
    ],
    faqs: [
      {
        q: 'Can you replace just my cracked driveway approach in Plymouth?',
        a: 'Yes. We pour standalone 6-inch approaches on compacted 21AA as well as full driveway replacements.'
      }
    ]
  },
  {
    slug: 'west-bloomfield-mi',
    name: 'West Bloomfield, MI',
    county: 'Oakland',
    type: 'city',
    seoTitle: 'Concrete Driveways in West Bloomfield, MI | Faber Concrete',
    seoDescription:
      'Five-inch concrete driveways, six-inch approaches, and stamped concrete in West Bloomfield, MI. Compacted 21AA base. Call (810) 360-7385.',
    headline: 'Concrete driveways & stamped flatwork in West Bloomfield, MI',
    intro:
      'West Bloomfield homeowners looking for a higher-standard concrete pour choose Faber Concrete for 5-inch slabs, 6-inch approaches, and clean architectural finishes.',
    soilAndClimate:
      'Lake-area water tables and heavy clay soils across West Bloomfield require deep 21AA compaction so slabs resist seasonal frost movement.',
    localCodes:
      'West Bloomfield Township and HOA architectural guidelines are reviewed during Matt’s on-site evaluation prior to contract signing.',
    dispatchRoute:
      'Quick access north from Farmington Hills via Haggerty Rd, Orchard Lake Rd, and Maple Rd.',
    highlights: [
      '5-inch driveways & 6-inch approaches',
      'Stamped concrete & pavers on 21AA base',
      'Owner site visit & written contract',
      'Priced down the middle for top-tier quality'
    ],
    faqs: [
      {
        q: 'Do you work with West Bloomfield HOAs?',
        a: 'Yes. Matt provides detailed written specs and contracts that satisfy HOA architectural review boards.'
      }
    ]
  },
  {
    slug: 'canton-mi',
    name: 'Canton, MI',
    county: 'Wayne',
    type: 'city',
    seoTitle: 'Concrete Driveways in Canton, MI | 5-Inch Spec | Faber Concrete',
    seoDescription:
      'Replace cracked builder-grade concrete in Canton, MI with a 5-inch driveway and 6-inch approach on compacted 21AA. Call (810) 360-7385.',
    headline: 'Concrete driveway replacement in Canton, MI',
    intro:
      'Canton subdivisions are full of 4-inch builder driveways that cracked within ten years. Faber Concrete replaces them with a 5-inch slab and 6-inch approach over compacted 21AA.',
    soilAndClimate:
      'Canton’s flat clay plain holds groundwater beneath thin slabs. Compacted 21AA crushed limestone creates a stable, well-drained structural base.',
    localCodes:
      'Canton Township Engineering inspects approach thickness and sidewalk grades before pouring. Our 6-inch apron meets township specifications.',
    dispatchRoute:
      'Straight down I-275 and Haggerty Road from our Farmington Hills base.',
    highlights: [
      'Built to replace failing 4-inch subdivision drives',
      '5-inch main driveway, 6-inch street approach',
      'Compacted 21AA base — never sand',
      '25+ year finishing craftsmanship'
    ],
    faqs: [
      {
        q: 'Why do so many Canton driveways crack early?',
        a: 'Most were poured at 4 inches over uncompacted soil or sand to keep builder costs down. Our 5-inch slab on compacted 21AA solves both problems.'
      }
    ]
  },
  {
    slug: 'ann-arbor-mi',
    name: 'Ann Arbor, MI',
    county: 'Washtenaw',
    type: 'city',
    seoTitle: 'Concrete Contractor in Ann Arbor, MI | Faber Concrete',
    seoDescription:
      'Five-inch concrete driveways, six-inch approaches, and flatwork in select Ann Arbor ZIP codes on compacted 21AA. Call (810) 360-7385.',
    headline: 'Concrete driveways & approaches in Ann Arbor, MI',
    intro:
      'Serving select Ann Arbor ZIP codes for homeowners who want a thicker 5-inch concrete driveway and 6-inch approach built for Michigan freeze-thaw cycles.',
    soilAndClimate:
      'Ann Arbor’s varied topography and clay-loam subgrades demand proper pitch, drainage, and compacted 21AA aggregate to prevent winter heaving.',
    localCodes:
      'City of Ann Arbor right-of-way permits require specific apron thickness and sidewalk ADA cross-slopes, which we verify on-site before quoting.',
    dispatchRoute:
      'Direct route west via M-14 and I-94 from Farmington Hills.',
    highlights: [
      'Select Ann Arbor ZIP codes served',
      '5-inch driveways & 6-inch city approaches',
      'Compacted 21AA crushed limestone base',
      'Written contract after on-site look'
    ],
    faqs: [
      {
        q: 'How do I know if my Ann Arbor address qualifies?',
        a: 'Send your street address on the estimate form or call (810) 360-7385. Matt will confirm whether your ZIP code is in our active route.'
      }
    ]
  }
];

export const GUIDES: GuideItem[] = [
  {
    slug: '5-inch-vs-4-inch-concrete-driveway-michigan',
    title: '5-Inch vs. 4-Inch Concrete Driveways in Michigan: Why That Missing Inch Costs You Later',
    seoTitle: '5-Inch vs 4-Inch Concrete Driveway in Michigan | Faber Concrete',
    seoDescription:
      'Why most contractors pour 4 inches to save $600–$700, and why a 5-inch driveway with a 6-inch approach survives Michigan winters and 20-ton trucks.',
    category: 'Structural Engineering',
    readTime: '5 min read',
    summary:
      'A 5-inch concrete slab delivers roughly 56% greater flexural bending strength than a 4-inch slab—for only $600 to $700 more on an average Metro Detroit driveway.',
    relatedServiceSlug: 'driveways',
    sections: [
      {
        heading: 'The Math Behind the Extra Inch',
        body: 'In structural concrete engineering, slab bending resistance increases with the square of its thickness. Moving from 4 inches to 5 inches adds 25% more concrete volume, yet increases flexural load capacity by roughly 56%. On a typical 600-to-800-square-foot Metro Detroit driveway, skipping that inch saves a low-bid contractor about $600 to $700 in ready-mix concrete—while leaving you with a slab far more likely to fracture under heavy loads.'
      },
      {
        heading: 'Michigan Freeze-Thaw Cycles & 20-Ton Delivery Trucks',
        body: 'The old 4-inch residential rule dates back to an era of lighter sedans. Today, garbage trucks, Amazon/UPS box trucks, furniture vans, and landscape supply trucks routinely weigh 15 to 20 tons. When that weight hits the street apron first, a 4-inch slab deflects and snaps. That is why Faber Concrete pours 6 inches on every approach and 5 inches across the entire driveway.'
      },
      {
        heading: 'The Crack You Have to Live With',
        body: 'A 4-inch driveway rarely collapses in year one. Instead, it develops spiderweb and structural cracks in years three through seven—long before you are financially ready to tear it out again. Paying for the fifth inch up front avoids living with an eyesore for the next decade.'
      }
    ]
  },
  {
    slug: '21aa-crushed-limestone-vs-sand-base',
    title: 'Compacted 21AA Crushed Limestone vs. Sand Base Under Concrete',
    seoTitle: '21AA Crushed Limestone vs Sand Base for Driveways | Faber Concrete',
    seoDescription:
      'Why pouring concrete over dirt or uncompacted sand causes settling and washout in Metro Detroit, and how compacted 21AA locks your slab in place.',
    category: 'Sub-Base Prep',
    readTime: '4 min read',
    summary:
      'Thickness cannot save a slab sitting on eroding sand or raw clay. Here is why MDOT-spec 21AA crushed aggregate is non-negotiable under every Faber Concrete pour.',
    relatedServiceSlug: 'approaches',
    sections: [
      {
        heading: 'Why Cheap Bids Use Sand (or Raw Dirt)',
        body: 'Delivering a load of fill sand, running a plate compactor over it once, and pouring 4 inches of concrete saves a contractor a few hundred dollars in material and haul-off costs. The problem is that sand has rounded grains that do not interlock—and when spring snowmelt or heavy rain flows under the slab edge, sand washes out, leaving hollow voids beneath your concrete.'
      },
      {
        heading: 'How 21AA Aggregate Locks Together',
        body: '21AA is a graded, angular crushed limestone aggregate containing stone pieces from 1 inch down to fine rock dust. When graded across the entire footprint and compacted with heavy vibratory equipment, those jagged edges interlock into a dense, load-distributing stone mat that drains water without eroding.'
      },
      {
        heading: 'Our Non-Negotiable Sequence',
        body: 'Every Faber Concrete job follows the exact same sequence: excavate poor soil, grade the entire footprint, compact 21AA crushed limestone, set forms to verify true 5-inch and 6-inch depths, and finish with a crew averaging over 25 years on the tools.'
      }
    ]
  },
  {
    slug: 'metro-detroit-homeowner-concrete-checklist',
    title: 'Metro Detroit Homeowner Concrete Checklist: 7 Questions to Ask Before Signing a Bid',
    seoTitle: 'Metro Detroit Concrete Driveway Checklist | Faber Concrete',
    seoDescription:
      'Compare concrete driveway quotes in Oakland, Wayne, Macomb, Washtenaw, and Livingston counties with this 7-point homeowner checklist.',
    category: 'Homeowner Buying Guide',
    readTime: '6 min read',
    summary:
      'Before you sign a concrete estimate, make sure these seven specifications are written into the contract—not just promised verbally at the curb.',
    relatedServiceSlug: 'flatwork',
    sections: [
      {
        heading: '1. Is the exact slab thickness written in inches?',
        body: 'Never accept "standard residential thickness" on an estimate. Require the contract to specify 5 inches on the driveway and 6 inches on the street approach.'
      },
      {
        heading: '2. What aggregate base is specified under the slab?',
        body: 'Verify that compacted 21AA crushed limestone is named in writing—and confirm the contractor will never pour over existing dirt or uncompacted sand.'
      },
      {
        heading: '3. Did the owner measure and inspect the site in person?',
        body: 'A quote guessed from Google Earth or the street misses slope issues, root intrusion, and approach transitions. Matt Faber walks every site before writing a contract.'
      },
      {
        heading: '4. Who is actually finishing the concrete?',
        body: 'Concrete sets once. Ask how many years the finishing crew has spent on the tools. Our finishers bring more than 25 years of hands-on experience to every pour.'
      }
    ]
  }
];

export const REVIEWS = [
  {
    author: "Lisa O'Brien",
    rating: 5,
    date: 'March 2026',
    text: 'I would recommend them to anyone, very satisfied with their price and service!'
  },
  {
    author: 'Property Services',
    rating: 5,
    date: 'March 2026',
    text: 'A commercial project was completed on budget. The team was professional, completed the work on time, and the quality of the work was outstanding!'
  },
  {
    author: 'Daniel knight',
    rating: 5,
    date: 'March 2026',
    text: 'Was on time, installed beautiful new roof! Clean up was like they were never there! Would recommend!'
  },
  {
    author: 'Mario Goff',
    rating: 5,
    date: 'March 2026',
    text: 'Awesome roof company, they did my roof in one day tear off and re-shingled,'
  }
];

export const HOMEPAGE_FAQS = [
  {
    q: 'What concrete work do you take on?',
    a: 'Driveways, approaches, flatwork, stamped concrete, and pavers. This site does not have a paver pattern board yet. It is a concrete company only. Roofing is a different company and is not sold from these pages.'
  },
  {
    q: 'How thick is the slab?',
    a: 'Five inches on the driveway, every time. Never four. Six inches on the approach. Most contractors pour four and skip the inch because it is cheaper, on the order of $600 to $700 on an average driveway.'
  },
  {
    q: 'What goes under it?',
    a: 'We grade the whole area and compact 21AA before we form and pour. We never pour over dirt. We do not compact sand and call it a base. That shortcut saves a few hundred dollars, and the ground under a slab can erode out.'
  },
  {
    q: 'Why not the cheaper bid?',
    a: 'The cheaper bid is usually four inches, often on sand. If you are looking for a cheap deal, Faber Concrete is not going to be it. The price sits down the middle of a quality bid, with a better finish from people who have been finishing for more than 25 years.'
  },
  {
    q: 'Where do you work?',
    a: 'Wayne, Oakland, Macomb, Washtenaw, and Livingston counties, homes and commercial properties. Matt takes some ZIP codes in each county, aimed at people who want this slab, not every address. Send the address. He does not publish the ZIP codes he skips.'
  },
  {
    q: 'Do you do stamped concrete and pavers?',
    a: 'Yes. Stamped concrete and pavers are part of the work, for a driveway or patio that should look finished. A stamp still sits on five inches over compacted 21AA, six inches if it is an approach. The pattern photos on this site are AI illustrations, not completed jobs.'
  },
  {
    q: 'How do I get an estimate?',
    a: 'Call (810) 360-7385 or send the form with the address. Matt looks at the site, then writes the estimate and the contract. April and May fill first. He will take a spring job.'
  },
  {
    q: 'Are the photos finished Faber jobs?',
    a: 'The crew stills, finished driveway, and stamped patterns on this site are AI illustrations. They are not photos of a specific completed job. The new-construction approach is a field photo of a house still going up, not a named project.'
  }
];
