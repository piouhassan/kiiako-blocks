import { z } from 'zod';
import type { ComponentDefinition, BaseComponentProps } from '../../../types';
import { cn } from '../../../lib/cn';

// Schema de validation
export const buttonSchema = z.object({
  text: z.string().default('Click me'),
  href: z.string().optional(),
  variant: z.enum(['primary', 'secondary', 'outline', 'ghost']).default('primary'),
  size: z.enum(['sm', 'md', 'lg']).default('md'),
  fullWidth: z.boolean().default(false),
  align: z.enum(['left', 'center', 'right']).default('left'),
});

export type ButtonProps = z.infer<typeof buttonSchema> & BaseComponentProps;

// Composant React
export function Button({
  text,
  href,
  variant,
  size,
  fullWidth,
  align,
  className,
  style,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-neutral-600 text-white hover:bg-neutral-700',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    ghost: 'text-primary-600 hover:bg-primary-50',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  const buttonClasses = cn(
    'inline-flex items-center font-medium rounded-lg transition-colors duration-200',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className
  );

  const Tag = href ? 'a' : 'button';

  return (
    <div className={cn('flex', alignClasses[align])}>
      <Tag
        href={href}
        className={buttonClasses}
        style={style}
        {...props}
      >
        {text}
      </Tag>
    </div>
  );
}

// Définition pour le registre
export const buttonDefinition: ComponentDefinition = {
  id: 'button',
  type: 'button',
  name: 'Button',
  label: 'Button',
  description: 'Add a clickable button to your page',
  icon: 'MousePointerClick',
  defaultProps: {
    text: 'Click me',
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    align: 'left',
  },
  schema: buttonSchema,
  component: Button,
};
