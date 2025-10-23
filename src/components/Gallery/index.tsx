import { z } from 'zod';
import type { ComponentDefinition, BaseComponentProps } from '../../../types';
import { cn } from '../../../lib/cn';

// Schema de validation
export const gallerySchema = z.object({
  images: z
    .array(
      z.object({
        src: z.string(),
        alt: z.string().optional(),
      })
    )
    .default([
      { src: 'https://via.placeholder.com/400x300', alt: 'Image 1' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Image 2' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Image 3' },
    ]),
  columns: z.enum(['1', '2', '3', '4']).default('3'),
  gap: z.enum(['sm', 'md', 'lg']).default('md'),
  rounded: z.enum(['none', 'sm', 'md', 'lg']).default('md'),
  aspectRatio: z.enum(['square', 'video', 'auto']).default('square'),
});

export type GalleryProps = z.infer<typeof gallerySchema> & BaseComponentProps;

// Composant React
export function Gallery({
  images,
  columns,
  gap,
  rounded,
  aspectRatio,
  className,
  style,
  ...props
}: GalleryProps) {
  const columnsClasses = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-2',
    '3': 'grid-cols-3',
    '4': 'grid-cols-4',
  };

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
  };

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    auto: '',
  };

  return (
    <div
      className={cn(
        'grid',
        columnsClasses[columns],
        gapClasses[gap],
        className
      )}
      style={style}
      {...props}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            'overflow-hidden',
            roundedClasses[rounded],
            aspectRatioClasses[aspectRatio]
          )}
        >
          <img
            src={image.src}
            alt={image.alt || `Image ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}

// Définition pour le registre
export const galleryDefinition: ComponentDefinition = {
  id: 'gallery',
  type: 'gallery',
  name: 'Gallery',
  label: 'Gallery',
  description: 'Add an image gallery',
  icon: 'LayoutGrid',
  defaultProps: {
    images: [
      { src: 'https://via.placeholder.com/400x300', alt: 'Image 1' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Image 2' },
      { src: 'https://via.placeholder.com/400x300', alt: 'Image 3' },
    ],
    columns: '3',
    gap: 'md',
    rounded: 'md',
    aspectRatio: 'square',
  },
  schema: gallerySchema,
  component: Gallery,
};
