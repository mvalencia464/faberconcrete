/**
 * Typed identity loader. Edit src/content/client.json (or run npm run new-client).
 * This file must not import from src/data.
 */
import client from "../content/client.json";

const envSiteUrl = (
  (import.meta.env.SITE_URL as string | undefined) ||
  (import.meta.env.PUBLIC_SITE_URL as string | undefined)
)?.replace(/\/$/, "");

const envR2Base = (import.meta.env.PUBLIC_R2_PUBLIC_BASE_URL as string | undefined)?.replace(
  /\/$/,
  "",
);
const envR2Slug = (import.meta.env.PUBLIC_R2_SITE_SLUG as string | undefined)?.replace(
  /^\/+|\/+$/g,
  "",
);

const r2Base = envR2Base || "https://media.stokeleads.com";
const r2Folder = envR2Slug || client.identity.slug;

export const BRAND = {
  name: client.identity.name,
  shortName: client.identity.shortName,
  legalName: client.identity.legalName,
  tagline: client.identity.tagline,
  catchphrase: client.identity.catchphrase,
  phone: client.identity.phone,
  phoneDisplay: client.identity.phone,
  email: client.identity.email,
  address: client.identity.address,
  city: client.identity.city,
  state: client.identity.state,
  zip: client.identity.zip,
  license: client.identity.license,
  ownerName: client.identity.ownerName,
  ownerRole: client.identity.ownerRole,
  region: client.identity.region,
  trade: client.identity.trade,
  tradeLabel: client.identity.tradeLabel,
  schemaType: client.identity.schemaType,
  slug: client.identity.slug,
  r2Folder,
  mediaBase: `${r2Base}/${r2Folder}`,
  siteUrl: envSiteUrl || client.urls.siteUrl,
  palette: client.branding.palette,
  fonts: client.branding.fonts,
  mapCenter: { lat: client.map.lat, lng: client.map.lng },
  mapZoom: client.map.zoom,
  mapRadiusMiles: client.map.radiusMiles,
} as const;

export function hasPublishedPhone(phone: string = BRAND.phone): boolean {
  return phone.replace(/\D/g, "").length >= 10;
}

export function telHref(phone: string = BRAND.phone): string {
  const digits = phone.replace(/\D/g, "");
  return hasPublishedPhone(phone) ? `tel:${digits}` : "/contact";
}

export function callLabel(phone: string = BRAND.phone): string {
  return hasPublishedPhone(phone) ? `Call ${phone}` : "Send the form";
}

export function mapsSearchUrl(query: string = BRAND.legalName): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsDirectionsUrl(
  lat: number = BRAND.mapCenter.lat,
  lng: number = BRAND.mapCenter.lng,
): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

export function mapsEmbedUrl(query: string = BRAND.legalName): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}
