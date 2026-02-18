import { defineCollection, z } from "astro:content";

const entries = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
    type: z.enum(["sketch", "project", "essay", "fiction", "note"]),
    tags: z.array(z.string()).optional(),
    curated: z.boolean().optional(),     // ⭐ your “best” flag
    draft: z.boolean().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { entries };
