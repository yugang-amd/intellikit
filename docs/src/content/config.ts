import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { glob } from "astro/loaders";

export const collections = {
  docs: defineCollection({
    loader: glob({
      pattern: "{*.md,*.mdx,getting-started/*.md,getting-started/*.mdx,how-to/*.md,how-to/*.mdx,tools/*.md,tools/*.mdx}",
      base: new URL("../../", import.meta.url),
    }),
    schema: docsSchema(),
  }),
};
