import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import { resolve } from "path";

export default defineConfig({
  plugins: [reactRouter(), netlifyPlugin()],
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
