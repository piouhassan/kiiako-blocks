import { z } from 'zod';
import * as Icons from 'lucide-react';
import type { ComponentDefinition, BaseComponentProps } from '../../../types';
import { cn } from '../../../lib/cn';

// Schema de validation
export const iconSchema = z.object({
  name: z.string().default('Star'),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl', '2xl']).default('md'),
  color: z.string().default('#000000'),
  strokeWidth: z.number().min(1).max(4).default(2),
  align: z.enum(['left', 'center', 'right']).default('center'),
});

export type IconProps = z.infer<typeof iconSchema> & BaseComponentProps;

// Composant React
export function Icon({
  name,
  size,
  color,
  strokeWidth,
  align,
  className,
  style,
  ...props
}: IconProps) {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
    '2xl': 'w-12 h-12',
  };

  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  // Get the icon component from lucide-react
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;

  return (
    <div className={cn('flex', alignClasses[align])}>
      <IconComponent
        className={cn(sizeClasses[size], className)}
        style={{ color, ...style }}
        strokeWidth={strokeWidth}
        {...props}
      />
    </div>
  );
}

// Définition pour le registre
export const iconDefinition: ComponentDefinition = {
  id: 'icon',
  type: 'icon',
  name: 'Icon',
  label: 'Icon',
  description: 'Add an icon from Lucide',
  icon: 'Sparkles',
  defaultProps: {
    name: 'Star',
    size: 'md',
    color: '#000000',
    strokeWidth: 2,
    align: 'center',
  },
  schema: iconSchema,
  component: Icon,
};
