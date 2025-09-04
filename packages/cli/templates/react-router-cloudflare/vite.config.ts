import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [cloudflare({ viteEnvironment: { name: "ssr" } }), reactRouter()],
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
