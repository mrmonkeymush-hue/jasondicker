import { defineCollection, z } from "astro:content";

const ideas = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional()
  })
});

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    heroImage: z.string().optional()
  })
});

export const collections = {
  ideas, 
  articles
};

