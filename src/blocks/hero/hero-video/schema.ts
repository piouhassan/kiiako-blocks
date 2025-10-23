import { z } from 'zod';

export const heroVideoSchema = z.object({
  heading: z.string().default('Welcome to Our Platform'),
  subheading: z.string().default('Transform your business with innovative solutions'),
  videoUrl: z.string().default(''),
  posterImage: z.string().optional(),
  primaryButton: z.object({
    text: z.string(),
    link: z.string(),
    variant: z.enum(['primary', 'secondary', 'outline', 'ghost']).default('primary'),
  }).optional(),
  secondaryButton: z.object({
    text: z.string(),
    link: z.string(),
    variant: z.enum(['primary', 'secondary', 'outline', 'ghost']).default('outline'),
  }).optional(),
  overlayOpacity: z.number().min(0).max(1).default(0.5),
  overlayColor: z.string().default('#000000'),
  textColor: z.string().default('#ffffff'),
  textAlign: z.enum(['left', 'center', 'right']).default('center'),
  minHeight: z.string().default('600px'),
  autoplay: z.boolean().default(true),
  loop: z.boolean().default(true),
  muted: z.boolean().default(true),
});

export type HeroVideoProps = z.infer<typeof heroVideoSchema>;
