import { z } from 'zod';

export const categoriesGridSchema = z.object({
  title: z.string().default('Shop by Category'),
  subtitle: z.string().optional(),
  categories: z.array(
    z.object({
      name: z.string(),
      description: z.string().optional(),
      image: z.string(),
      productCount: z.number().optional(),
      link: z.string().default('#'),
    })
  ).default([]),
  columns: z.enum(['2', '3', '4']).default('4'),
  showProductCount: z.boolean().default(true),
  showDescription: z.boolean().default(false),
  backgroundColor: z.string().default('#ffffff'),
  cardStyle: z.enum(['card', 'minimal', 'overlay']).default('card'),
});

export type CategoriesGridProps = z.infer<typeof categoriesGridSchema>;
