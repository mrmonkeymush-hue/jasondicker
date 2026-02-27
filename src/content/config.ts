
export const SECTION_LAYOUTS = ["textOnly", "imageLeft", "imageRight"] as const;
export type SectionLayout = typeof SECTION_LAYOUTS[number];
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
    heroImageAlt: z.string().optional(),
    comments: z.boolean().optional(),
  }),
});

const sections = defineCollection({
  schema: z.object({
    // for CMS metadata (optional to avoid breaking existing content)
    type: z.enum(["sketch", "project", "essay", "fiction", "note"]).optional(),
    entrySlug: z.string().optional(),

    // optional heading per section
    title: z.string().optional(),

    // choose one: order or timestamp; order is simplest
    order: z.number().optional(),
    // timestamp: z.date().optional(),

    // layout selector
    layout: z
      .enum(SECTION_LAYOUTS)
      .default("textOnly"),

    // section-level image options
    image: z.string().optional(),
    imageAlt: z.string().optional(),

    // section-level flags if you want them
    draft: z.boolean().optional(),
  }),
});

export const collections = { entries, sections };
