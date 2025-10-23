import { z } from 'zod';
import type { ComponentDefinition, BaseComponentProps } from '../../../types';
import { cn } from '../../../lib/cn';

// Schema de validation
export const imageSchema = z.object({
  src: z.string().default('https://placehold.co/600x400'),
  alt: z.string().default('Image'),
  width: z.enum(['auto', 'full', '1/2', '1/3', '2/3', '1/4']).default('full'),
  height: z.string().default('auto'),
  objectFit: z.enum(['cover', 'contain', 'fill', 'none']).default('cover'),
  rounded: z.enum(['none', 'sm', 'md', 'lg', 'full']).default('none'),
  align: z.enum(['left', 'center', 'right']).default('center'),
});

export type ImageProps = z.infer<typeof imageSchema> & BaseComponentProps;

// Composant React
export function Image({
  src,
  alt,
  width,
  height,
  objectFit,
  rounded,
  align,
  className,
  style,
  ...props
}: ImageProps) {
  const widthClasses = {
    auto: 'w-auto',
    full: 'w-full',
    '1/2': 'w-1/2',
    '1/3': 'w-1/3',
    '2/3': 'w-2/3',
    '1/4': 'w-1/4',
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  const objectFitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
  };

  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <div className={cn('flex', alignClasses[align])}>
      <img
        src={src}
        alt={alt}
        className={cn(
          widthClasses[width],
          roundedClasses[rounded],
          objectFitClasses[objectFit],
          className
        )}
        style={{ height, ...style }}
        {...props}
      />
    </div>
  );
}

// Définition pour le registre
export const imageDefinition: ComponentDefinition = {
  id: 'image',
  type: 'image',
  name: 'Image',
  label: 'Image',
  description: 'Add an image to your page',
  icon: 'ImageIcon',
  defaultProps: {
    src: 'https://placehold.co/600x400',
    alt: 'Image',
    width: 'full',
    height: 'auto',
    objectFit: 'cover',
    rounded: 'none',
    align: 'center',
  },
  schema: imageSchema,
  component: Image,
};
