import { defineCollection, defineContentConfig, z } from "@nuxt/content";

const commonSchema = z.object({
  cta: z.object({}).optional(),
  eventid: z.string().optional(),
  layout: z.string().optional(),
  moment: z.string().optional(),
  author: z.array(z.string()).optional(),
  hideInRecent: z.boolean().optional(),
  webcast: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

export default defineContentConfig({
  collections: {
    content_de: defineCollection({
      type: "page",
      source: {
        include: "de/**",
        prefix: "",
      },
      schema: commonSchema,
    }),
    content_en: defineCollection({
      type: "page",
      source: {
        include: "en/**",
        prefix: "",
      },
      schema: commonSchema,
    }),
    content_es: defineCollection({
      type: "page",
      source: {
        include: "es/**",
        prefix: "",
      },
      schema: commonSchema,
    }),
  },
});
