import { z } from 'zod';
import type { ComponentDefinition, BaseComponentProps } from '../../../types';

// Schema de validation
export const spacerSchema = z.object({
  height: z.enum(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']).default('md'),
});

export type SpacerProps = z.infer<typeof spacerSchema> & BaseComponentProps;

// Composant React
export function Spacer({ height, className, style, ...props }: SpacerProps) {
  const heightClasses = {
    xs: 'h-2',
    sm: 'h-4',
    md: 'h-8',
    lg: 'h-16',
    xl: 'h-24',
    '2xl': 'h-32',
    '3xl': 'h-48',
  };

  return (
    <div
      className={`${heightClasses[height]} ${className || ''}`}
      style={style}
      {...props}
    />
  );
}

// Définition pour le registre
export const spacerDefinition: ComponentDefinition = {
  id: 'spacer',
  type: 'spacer',
  name: 'Spacer',
  label: 'Spacer',
  description: 'Add vertical spacing',
  icon: 'MoveVertical',
  defaultProps: {
    height: 'md',
  },
  schema: spacerSchema,
  component: Spacer,
};
