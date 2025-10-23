import { z } from 'zod';

export const productShowcaseSchema = z.object({
  title: z.string().default('Featured Products'),
  subtitle: z.string().optional(),
  products: z.array(
    z.object({
      name: z.string(),
      image: z.string(),
      price: z.string(),
      originalPrice: z.string().optional(),
      badge: z.string().optional(),
      rating: z.number().min(0).max(5).optional(),
      link: z.string().default('#'),
    })
  ).default([]),
  columns: z.number().min(2).max(4).default(3),
  showViewAll: z.boolean().default(true),
  viewAllText: z.string().default('View All Products'),
  viewAllLink: z.string().default('#'),
});

export type ProductShowcaseProps = z.infer<typeof productShowcaseSchema>;
