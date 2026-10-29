import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { writeFileSync, rmSync, mkdirSync } from "node:fs";
import { photoUploadUrl, siteUrl } from "./src/config/site.ts";

/** Emit a real Cloudflare 302 so /photos is not a meta-refresh HTML page. */
function photosRedirect() {
  return {
    name: "photos-redirect",
    hooks: {
      "astro:build:done": ({ dir }) => {
        const root = dir.pathname;
        rmSync(new URL("photos", dir), { recursive: true, force: true });
        mkdirSync(root, { recursive: true });
        const line = `/photos ${photoUploadUrl} 302\n/photos/ ${photoUploadUrl} 302\n`;
        writeFileSync(new URL("_redirects", dir), line);
      },
    },
  };
}

export default defineConfig({
  site: siteUrl,
  integrations: [sitemap(), photosRedirect()],
  image: {
    remotePatterns: [{ protocol: "https", hostname: "media.stokeleads.com" }],
  },
  vite: {
    plugins: [
      {
        name: "photos-302",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const path = req.url?.split("?")[0];
            if (path === "/photos" || path === "/photos/") {
              res.statusCode = 302;
              res.setHeader("Location", photoUploadUrl);
              res.end();
              return;
            }
            next();
          });
        },
      },
    ],
  },
});
