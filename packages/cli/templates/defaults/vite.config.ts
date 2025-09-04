import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_lazyRouteDiscovery: false,
        v3_relativeSplatPath: false,
        v3_singleFetch: false,
        v3_fetcherPersist: false,
        v3_throwAbortReason: false,
      },
    }),
  ],
  resolve: {
    conditions: ["browser", "development|production"],
    alias: [
      // Redirect isbot to our mock to prevent runtime errors in Vercel
      {
        find: "isbot",
        replacement: resolve("./app/shared/isbot-mock.ts"),
      },
    ],
  },
  ssr: {
    resolve: {
      conditions: ["node", "development|production"],
    },
  },
});
