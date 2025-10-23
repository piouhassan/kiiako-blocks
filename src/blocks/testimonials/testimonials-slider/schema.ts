import { z } from 'zod';

export const testimonialsSliderSchema = z.object({
  title: z.string().default('What Our Customers Say'),
  subtitle: z.string().optional(),
  testimonials: z.array(
    z.object({
      name: z.string(),
      role: z.string().optional(),
      company: z.string().optional(),
      avatar: z.string().optional(),
      rating: z.number().min(1).max(5).default(5),
      content: z.string(),
    })
  ).default([]),
  autoplay: z.boolean().default(true),
  autoplayInterval: z.number().default(5000), // ms
  showNavigation: z.boolean().default(true),
  showDots: z.boolean().default(true),
  backgroundColor: z.string().default('#f9fafb'),
  cardBackground: z.string().default('#ffffff'),
});

export type TestimonialsSliderProps = z.infer<typeof testimonialsSliderSchema>;
