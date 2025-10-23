import { z } from 'zod';

export const bannerPromoSchema = z.object({
  title: z.string().default('Special Offer'),
  subtitle: z.string().default('Limited Time Only'),
  description: z.string().default('Get up to 50% off on selected items'),
  ctaText: z.string().default('Shop Now'),
  ctaLink: z.string().default('#'),
  backgroundImage: z.string().optional(),
  backgroundColor: z.string().default('#3b82f6'),
  textColor: z.string().default('#ffffff'),
  badgeText: z.string().optional(),
  badgeColor: z.string().default('#ef4444'),
  showCountdown: z.boolean().default(false),
  countdownEndDate: z.string().optional(),
  decorated: z.boolean().optional(),
});

export type BannerPromoProps = z.infer<typeof bannerPromoSchema>;
