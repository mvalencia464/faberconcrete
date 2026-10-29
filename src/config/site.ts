/**
 * Single source for brand facts and every value Mauricio still has to fill.
 * Placeholders are wrapped in square brackets so they are obvious in the UI,
 * in schema, and in the README checklist.
 */

export const siteUrl = "https://faberconcrete.com";

/** 302 target for /photos. Replace [TOKEN] when the Stoke Leads upload link is minted. */
export const photoUploadUrl = "https://upload.stokeleads.com/c/[TOKEN]";

/**
 * Where the estimate form posts.
 * Leave the placeholder until a CRM or webhook exists. The form stays on the
 * page and explains that submissions are not wired yet.
 */
export const leadEndpoint = "[LEAD_ENDPOINT]";

export const SITE = {
  name: "Faber Concrete",
  legalName: "[LEGAL_NAME]",
  ownerName: "Matt Faber",
  ownerRole: "Owner",
  tagline: "A premium slab, priced down the middle.",
  phone: "[PHONE]",
  email: "[EMAIL]",
  streetAddress: "[STREET_ADDRESS]",
  city: "[CITY]",
  state: "MI",
  region: "Michigan",
  zip: "[ZIP]",
  license: "[LICENSE]",
  siteUrl,
  photoUploadUrl,
  leadEndpoint,
  mediaBase: "https://media.stokeleads.com/faberconcrete",
  priceRange: "$$",
} as const;

export function isPlaceholder(value: string): boolean {
  return /^\[[A-Z0-9_]+\]$/.test(value);
}

export function telHref(phone: string = SITE.phone): string | null {
  if (isPlaceholder(phone)) return null;
  const digits = phone.replace(/\D/g, "");
  return digits ? `tel:${digits}` : null;
}
