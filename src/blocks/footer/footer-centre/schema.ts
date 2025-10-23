import { z } from 'zod';

export const footerCentreSchema = z.object({
  logo: z.string().optional(),
  companyName: z.string().default('Company Name'),
  description: z.string().optional(),
  links: z.array(
    z.object({
      label: z.string(),
      url: z.string(),
    })
  ).default([]),
  socialLinks: z.array(
    z.object({
      platform: z.string(),
      url: z.string(),
    })
  ).default([]),
  copyright: z.string().default('© 2025 Company Name. All rights reserved.'),
  backgroundColor: z.string().default('#1f2937'),
  textColor: z.string().default('#ffffff'),
});

export type FooterCentreProps = z.infer<typeof footerCentreSchema>;
