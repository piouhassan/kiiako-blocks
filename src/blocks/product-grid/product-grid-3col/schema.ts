import { z } from 'zod';

export const productGrid3ColSchema = z.object({
  title: z.string().default('Featured Products'),
  products: z
    .array(
      z.object({
        name: z.string(),
        category: z.string(),
        price: z.number(),
        originalPrice: z.number().optional(),
        image: z.string(),
        badge: z.string().optional(),
      })
    )
    .default([
      {
        name: 'Product Name 1',
        category: 'Category',
        price: 29.99,
        image: 'https://via.placeholder.com/400x400',
      },
      {
        name: 'Product Name 2',
        category: 'Category',
        price: 39.99,
        originalPrice: 49.99,
        image: 'https://via.placeholder.com/400x400',
        badge: 'Sale',
      },
      {
        name: 'Product Name 3',
        category: 'Category',
        price: 24.99,
        image: 'https://via.placeholder.com/400x400',
      },
    ]),
  showQuickAdd: z.boolean().default(true),
  showWishlist: z.boolean().default(true),
  backgroundColor: z.string().default('#ffffff'),
});

export type ProductGrid3ColProps = z.infer<typeof productGrid3ColSchema>;
