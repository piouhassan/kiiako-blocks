import { z } from 'zod';

export const newsletterBlocSchema = z.object({
  title: z.string().default('Stay Updated'),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  placeholderText: z.string().default('Enter your email'),
  buttonText: z.string().default('Subscribe'),
  showPrivacyNote: z.boolean().default(true),
  privacyNote: z.string().default('We respect your privacy. Unsubscribe at any time.'),
  backgroundColor: z.string().default('#3b82f6'),
  textColor: z.string().default('#ffffff'),
  layout: z.enum(['centered', 'split']).default('centered'),
  buttonVariant: z.enum(['white', 'dark', 'outline']).default('white'),
});

export type NewsletterBlocProps = z.infer<typeof newsletterBlocSchema>;
