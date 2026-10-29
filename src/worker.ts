import { photoUploadUrl } from "./config/site";

interface Env {
  ASSETS: Fetcher;
}

/** Serves the static site. /photos is a 302 to the Stoke Leads upload link. */
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === "/photos" || pathname === "/photos/") {
      return Response.redirect(photoUploadUrl, 302);
    }
    return env.ASSETS.fetch(request);
  },
};
