import { z } from 'zod';

export const heroModernSchema = z.object({
  badge: z.string().optional(),
  title: z.string().default('Transform Your Business'),
  subtitle: z.string().default('Build amazing digital experiences'),
  description: z.string().default('Powerful tools and features to help you create stunning websites and applications that convert'),
  primaryCta: z.object({
    text: z.string().default('Get Started'),
    link: z.string().default('#'),
  }),
  secondaryCta: z.object({
    text: z.string().default('Learn More'),
    link: z.string().default('#'),
  }).optional(),
  heroImage: z.string().optional(),
  features: z.array(
    z.object({
      icon: z.string(),
      text: z.string(),
    })
  ).default([]),
  backgroundColor: z.string().default('#0f172a'),
  textColor: z.string().default('#ffffff'),
  showStats: z.boolean().default(true),
  stats: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    })
  ).default([]),
});

export type HeroModernProps = z.infer<typeof heroModernSchema>;
