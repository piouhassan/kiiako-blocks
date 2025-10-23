import { z } from 'zod';

export const productGrid2ColSchema = z.object({
  title: z.string().default('Featured Products'),
  subtitle: z.string().optional(),
  products: z.array(
    z.object({
      name: z.string(),
      category: z.string().optional(),
      price: z.number(),
      originalPrice: z.number().optional(),
      image: z.string(),
      badge: z.string().optional(),
      rating: z.number().min(0).max(5).optional(),
    })
  ).default([]),
  showQuickAdd: z.boolean().default(true),
  showWishlist: z.boolean().default(true),
  showRating: z.boolean().default(false),
  imageAspectRatio: z.enum(['square', 'portrait', 'landscape']).default('portrait'),
  backgroundColor: z.string().default('#ffffff'),
});

export type ProductGrid2ColProps = z.infer<typeof productGrid2ColSchema>;
