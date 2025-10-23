import { z } from 'zod';

export const heroSimpleSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  subtitle: z.string().optional(),
  buttonText: z.string().optional(),
  buttonLink: z.string().optional(),
  backgroundImage: z.string().optional(),
  textAlign: z.enum(['left', 'center', 'right']).default('center'),
  overlayOpacity: z.number().min(0).max(1).default(0.4),
  textColor: z.string().default('#ffffff'),
  minHeight: z.string().default('500px'),
});

export type HeroSimpleProps = z.infer<typeof heroSimpleSchema>;
