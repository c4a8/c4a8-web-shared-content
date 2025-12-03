# Access content from the shared-content repo

## Adding collection

A new collection must be added in the file content.config.js for each language. If the default language is English, just adding a collection for English content is enough: 

```
export default defineContentConfig({
  collections: {
    ...
    shared_content_en: defineCollection({
      type: "page",
      source: {
        repository:
          "https://github.com/c4a8/c4a8-web-shared-content",
        include: "en/**",
        prefix: "",
      },
      schema: commonSchema,
    }),   
}
```

## Defining a schema

commonSchema also needs to be defined like this: 

```
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
```

## Using the content

So far only the events-overview component supports shared-content.
By setting useSharedContent to true, the component will use shared-content as as source instead of the contents folder.

````
const eventOverviewData = computed(() => {
  return {
    overlap: false,
    classes: "space-top-lg-2",
    maxLimit: 15,
    useSharedContent: true,
    tag: ["Products"],
  };
});
```