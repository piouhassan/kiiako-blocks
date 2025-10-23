import { z } from 'zod';
import type { ComponentDefinition, BaseComponentProps } from '../../../types';
import { cn } from '../../../lib/cn';

// Schema de validation
export const textSchema = z.object({
  content: z.string().default('This is a paragraph of text.'),
  align: z.enum(['left', 'center', 'right', 'justify']).default('left'),
  color: z.string().default('#333333'),
  fontSize: z.enum(['xs', 'sm', 'base', 'lg', 'xl']).default('base'),
  fontWeight: z.enum(['normal', 'medium', 'semibold', 'bold']).default('normal'),
});

export type TextProps = z.infer<typeof textSchema> & BaseComponentProps;

// Composant React
export function Text({
  content,
  align,
  color,
  fontSize,
  fontWeight,
  className,
  style,
  ...props
}: TextProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <p
      className={cn(
        alignClasses[align],
        sizeClasses[fontSize],
        weightClasses[fontWeight],
        className
      )}
      style={{ color, ...style }}
      {...props}
    >
      {content}
    </p>
  );
}

// Définition pour le registre
export const textDefinition: ComponentDefinition = {
  id: 'text',
  type: 'text',
  name: 'Text',
  label: 'Paragraph',
  description: 'Add a text paragraph to your page',
  icon: 'AlignLeft',
  defaultProps: {
    content: 'This is a paragraph of text.',
    align: 'left',
    color: '#333333',
    fontSize: 'base',
    fontWeight: 'normal',
  },
  schema: textSchema,
  component: Text,
};
