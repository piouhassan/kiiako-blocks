import { z } from 'zod';

/**
 * Schema de validation Zod pour Footer Simple
 */
export const footerSimpleSchema = z.object({
  logo: z.object({
    text: z.string().default('Brand'),
    image: z.string().optional(),
  }),
  description: z
    .string()
    .default(
      'Your trusted e-commerce platform for quality products and excellent service.'
    ),
  links: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    )
    .default([
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ]),
  socialLinks: z
    .array(
      z.object({
        platform: z.string(),
        href: z.string(),
      })
    )
    .default([
      { platform: 'Facebook', href: '#' },
      { platform: 'Twitter', href: '#' },
      { platform: 'Instagram', href: '#' },
    ]),
  copyright: z.string().default('© 2024 Your Company. All rights reserved.'),
  backgroundColor: z.string().default('#ffffff'),
  textColor: z.string().default('#000000'),
});

export type FooterSimpleProps = z.infer<typeof footerSimpleSchema>;
