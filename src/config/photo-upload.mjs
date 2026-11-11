/**
 * Stoke Leads field-upload portal for Faber Concrete.
 * Replace TOKEN with the real client token when the link is minted.
 * /photos 302-redirects here (see public/_redirects, rewritten at build).
 */
export const PHOTO_UPLOAD_URL = "https://upload.stokeleads.com/c/TOKEN";

export function cloudflareRedirects() {
  return [
    "/service-areas /areas 301",
    `/photos ${PHOTO_UPLOAD_URL} 302`,
    "",
  ].join("\n");
}
