import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), vike({ prerender: true })],
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
