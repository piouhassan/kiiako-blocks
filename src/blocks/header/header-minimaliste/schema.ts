import { z } from 'zod';

/**
 * Schema de validation Zod pour Header Minimaliste
 */
export const headerMinimalisteSchema = z.object({
  logo: z.object({
    text: z.string().default('Brand'),
    image: z.string().optional(),
  }),
  navigation: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    )
    .default([
      { label: 'Home', href: '#' },
      { label: 'Shop', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ]),
  ctaButton: z.object({
    text: z.string().default('Sign In'),
    href: z.string().default('#'),
  }),
  backgroundColor: z.string().default('#ffffff'),
  textColor: z.string().default('#000000'),
  sticky: z.boolean().default(true),
});

export type HeaderMinimalisteProps = z.infer<typeof headerMinimalisteSchema>;
