import { z } from 'zod';

export const productFeaturedSchema = z.object({
  productName: z.string().default('Premium Product'),
  tagline: z.string().default('NEW ARRIVAL'),
  description: z.string().default('Discover our latest premium product with exceptional quality and design'),
  price: z.string().default('$299'),
  originalPrice: z.string().optional(),
  features: z.array(z.string()).default([]),
  productImage: z.string().default('https://via.placeholder.com/600x600'),
  ctaText: z.string().default('Shop Now'),
  ctaLink: z.string().default('#'),
  secondaryCtaText: z.string().optional(),
  secondaryCtaLink: z.string().optional(),
  backgroundColor: z.string().default('#f9fafb'),
  imagePosition: z.enum(['left', 'right']).default('right'),
});

export type ProductFeaturedProps = z.infer<typeof productFeaturedSchema>;
