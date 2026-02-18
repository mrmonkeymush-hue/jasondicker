import { defineCollection, z } from "astro:content";

const ideas = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    status: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional()
  })
});

export const collections = {
  ideas
};

