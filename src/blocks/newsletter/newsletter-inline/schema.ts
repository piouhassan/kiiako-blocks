import { z } from 'zod';

export const newsletterInlineSchema = z.object({
  title: z.string().default('Stay Updated'),
  description: z
    .string()
    .default('Subscribe to our newsletter and get the latest updates.'),
  placeholder: z.string().default('Enter your email'),
  buttonText: z.string().default('Subscribe'),
  backgroundColor: z.string().default('#f9fafb'),
  textColor: z.string().default('#000000'),
});

export type NewsletterInlineProps = z.infer<typeof newsletterInlineSchema>;
