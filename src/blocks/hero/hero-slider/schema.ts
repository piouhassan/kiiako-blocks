import { z } from 'zod';

export const heroSliderSchema = z.object({
  slides: z.array(
    z.object({
      heading: z.string(),
      subheading: z.string().optional(),
      backgroundImage: z.string(),
      primaryButton: z.object({
        text: z.string(),
        link: z.string(),
      }).optional(),
      secondaryButton: z.object({
        text: z.string(),
        link: z.string(),
      }).optional(),
    })
  ).default([]),
  autoplay: z.boolean().default(true),
  autoplayInterval: z.number().default(5000),
  showNavigation: z.boolean().default(true),
  showDots: z.boolean().default(true),
  overlayOpacity: z.number().min(0).max(1).default(0.4),
  overlayColor: z.string().default('#000000'),
  textColor: z.string().default('#ffffff'),
  textAlign: z.enum(['left', 'center', 'right']).default('center'),
  minHeight: z.string().default('600px'),
});

export type HeroSliderProps = z.infer<typeof heroSliderSchema>;
