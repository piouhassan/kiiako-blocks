import { z } from 'zod';

export const partnersGridSchema = z.object({
  title: z.string().default('Our Partners'),
  subtitle: z.string().optional(),
  partners: z.array(
    z.object({
      name: z.string(),
      logo: z.string(),
      url: z.string().optional(),
    })
  ).default([]),
  backgroundColor: z.string().default('#ffffff'),
  logoGrayscale: z.boolean().default(true),
  columns: z.number().min(2).max(6).default(4),
});

export type PartnersGridProps = z.infer<typeof partnersGridSchema>;
