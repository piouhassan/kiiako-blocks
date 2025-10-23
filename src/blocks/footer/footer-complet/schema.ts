import { z } from 'zod';

export const footerCompletSchema = z.object({
  logo: z.string().optional(),
  companyName: z.string().default('Company Name'),
  tagline: z.string().optional(),
  description: z.string().optional(),
  columns: z.array(
    z.object({
      title: z.string(),
      links: z.array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      ),
    })
  ).default([]),
  showNewsletter: z.boolean().default(true),
  newsletterTitle: z.string().default('Subscribe to our newsletter'),
  newsletterDescription: z.string().optional(),
  socialLinks: z.array(
    z.object({
      platform: z.string(),
      url: z.string(),
      icon: z.string(),
    })
  ).default([]),
  bottomLinks: z.array(
    z.object({
      label: z.string(),
      url: z.string(),
    })
  ).default([]),
  copyright: z.string().default('© 2025 Company Name. All rights reserved.'),
  backgroundColor: z.string().default('#1f2937'),
  textColor: z.string().default('#ffffff'),
  linkHoverColor: z.string().default('#60a5fa'),
});

export type FooterCompletProps = z.infer<typeof footerCompletSchema>;
