import { z } from 'zod';

export const categoriesListSchema = z.object({
  title: z.string().default('Browse Categories'),
  subtitle: z.string().optional(),
  categories: z.array(
    z.object({
      name: z.string(),
      description: z.string().optional(),
      icon: z.string().optional(),
      productCount: z.number().optional(),
      link: z.string().default('#'),
    })
  ).default([]),
  showProductCount: z.boolean().default(true),
  showIcon: z.boolean().default(true),
  backgroundColor: z.string().default('#ffffff'),
});

export type CategoriesListProps = z.infer<typeof categoriesListSchema>;
