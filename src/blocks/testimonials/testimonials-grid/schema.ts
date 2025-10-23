import { z } from 'zod';

export const testimonialsGridSchema = z.object({
  title: z.string().default('Customer Reviews'),
  subtitle: z.string().optional(),
  testimonials: z.array(
    z.object({
      name: z.string(),
      role: z.string().optional(),
      company: z.string().optional(),
      avatar: z.string().optional(),
      rating: z.number().min(1).max(5).default(5),
      content: z.string(),
    })
  ).default([]),
  columns: z.enum(['2', '3']).default('3'),
  showAvatar: z.boolean().default(true),
  backgroundColor: z.string().default('#ffffff'),
  cardBackground: z.string().default('#f9fafb'),
});

export type TestimonialsGridProps = z.infer<typeof testimonialsGridSchema>;
