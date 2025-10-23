import { z } from 'zod';
import type { ComponentDefinition, BaseComponentProps } from '../../../types';
import { cn } from '../../../lib/cn';

// Schema de validation
export const headingSchema = z.object({
  text: z.string().default('Heading'),
  level: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).default('h2'),
  align: z.enum(['left', 'center', 'right']).default('left'),
  color: z.string().default('#000000'),
  fontWeight: z.enum(['normal', 'medium', 'semibold', 'bold']).default('bold'),
});

export type HeadingProps = z.infer<typeof headingSchema> & BaseComponentProps;

// Composant React
export function Heading({
  text,
  level,
  align,
  color,
  fontWeight,
  className,
  style,
  ...props
}: HeadingProps) {
  const Tag = level;

  const sizeClasses = {
    h1: 'text-5xl',
    h2: 'text-4xl',
    h3: 'text-3xl',
    h4: 'text-2xl',
    h5: 'text-xl',
    h6: 'text-lg',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <Tag
      className={cn(
        sizeClasses[level],
        alignClasses[align],
        weightClasses[fontWeight],
        className
      )}
      style={{ color, ...style }}
      {...props}
    >
      {text}
    </Tag>
  );
}

// Définition pour le registre
export const headingDefinition: ComponentDefinition = {
  id: 'heading',
  type: 'heading',
  name: 'Heading',
  label: 'Heading',
  description: 'Add a heading to your page',
  icon: 'Type',
  defaultProps: {
    text: 'Heading',
    level: 'h2',
    align: 'left',
    color: '#000000',
    fontWeight: 'bold',
  },
  schema: headingSchema,
  component: Heading,
};
