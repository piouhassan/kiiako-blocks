import { z } from 'zod';

export const headerCompletSchema = z.object({
  logo: z.object({
    text: z.string().default('E-Shop'),
    image: z.string().optional(),
  }),
  navigation: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
    })
  ).default([]),
  showSearch: z.boolean().default(true),
  showCart: z.boolean().default(true),
  showAccount: z.boolean().default(true),
  backgroundColor: z.string().default('#ffffff'),
  textColor: z.string().default('#000000'),
  sticky: z.boolean().default(true),
  showTopBar: z.boolean().default(true),
  topBarMessage: z.string().default('Free shipping on orders over $50'),
});

export type HeaderCompletProps = z.infer<typeof headerCompletSchema>;
