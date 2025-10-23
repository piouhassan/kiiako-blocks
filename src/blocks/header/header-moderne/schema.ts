import { z } from 'zod';

export const headerModerneSchema = z.object({
  logo: z.string().optional(),
  siteName: z.string().default('Brand'),
  navigation: z.array(
    z.object({
      label: z.string(),
      url: z.string(),
    })
  ).default([]),
  showSearch: z.boolean().default(true),
  searchPlaceholder: z.string().default('Search...'),
  primaryCta: z.object({
    text: z.string(),
    url: z.string(),
  }).optional(),
  backgroundColor: z.string().default('#ffffff'),
  textColor: z.string().default('#1f2937'),
  sticky: z.boolean().default(true),
});

export type HeaderModerneProps = z.infer<typeof headerModerneSchema>;
