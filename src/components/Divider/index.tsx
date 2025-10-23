import { z } from 'zod';
import type { ComponentDefinition, BaseComponentProps } from '../../../types';
import { cn } from '../../../lib/cn';

// Schema de validation
export const dividerSchema = z.object({
  borderStyle: z.enum(['solid', 'dashed', 'dotted']).default('solid'),
  thickness: z.enum(['thin', 'medium', 'thick']).default('medium'),
  color: z.string().default('#e5e7eb'),
  width: z.enum(['full', '1/2', '1/3', '1/4']).default('full'),
  spacing: z.enum(['sm', 'md', 'lg', 'xl']).default('md'),
  align: z.enum(['left', 'center', 'right']).default('center'),
});

export type DividerProps = z.infer<typeof dividerSchema> & BaseComponentProps;

// Composant React
export function Divider({
  borderStyle = 'solid',
  thickness = 'medium',
  color = '#e5e7eb',
  width = 'full',
  spacing = 'md',
  align = 'center',
  className,
  style,
  ...props
}: DividerProps) {
  const thicknessClasses = {
    thin: 'border-t',
    medium: 'border-t-2',
    thick: 'border-t-4',
  };

  const widthClasses = {
    full: 'w-full',
    '1/2': 'w-1/2',
    '1/3': 'w-1/3',
    '1/4': 'w-1/4',
  };

  const spacingClasses = {
    sm: 'my-2',
    md: 'my-4',
    lg: 'my-8',
    xl: 'my-12',
  };

  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  const styleClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  };

  return (
    <div className={cn('flex', alignClasses[align], spacingClasses[spacing])}>
      <hr
        className={cn(
          thicknessClasses[thickness],
          widthClasses[width],
          styleClasses[borderStyle],
          className
        )}
        style={{ borderColor: color, ...(style || {}) }}
        {...props}
      />
    </div>
  );
}

// Définition pour le registre
export const dividerDefinition: ComponentDefinition = {
  id: 'divider',
  type: 'divider',
  name: 'Divider',
  label: 'Divider',
  description: 'Add a horizontal divider line',
  icon: 'Minus',
  defaultProps: {
    borderStyle: 'solid',
    thickness: 'medium',
    color: '#e5e7eb',
    width: 'full',
    spacing: 'md',
    align: 'center',
  },
  schema: dividerSchema,
  component: Divider,
};
