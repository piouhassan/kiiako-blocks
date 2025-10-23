import { z } from 'zod';
import type { ComponentDefinition, BaseComponentProps } from '../../../types';
import { cn } from '../../../lib/cn';

// Schema de validation
export const videoSchema = z.object({
  src: z.string().default('https://www.w3schools.com/html/mov_bbb.mp4'),
  poster: z.string().optional(),
  controls: z.boolean().default(true),
  autoplay: z.boolean().default(false),
  loop: z.boolean().default(false),
  muted: z.boolean().default(false),
  width: z.enum(['auto', 'full', '1/2', '2/3', '3/4']).default('full'),
  aspectRatio: z.enum(['16/9', '4/3', '1/1', 'auto']).default('16/9'),
  align: z.enum(['left', 'center', 'right']).default('center'),
  rounded: z.enum(['none', 'sm', 'md', 'lg']).default('md'),
});

export type VideoProps = z.infer<typeof videoSchema> & BaseComponentProps;

// Composant React
export function Video({
  src,
  poster,
  controls,
  autoplay,
  loop,
  muted,
  width,
  aspectRatio,
  align,
  rounded,
  className,
  style,
  ...props
}: VideoProps) {
  const widthClasses = {
    auto: 'w-auto',
    full: 'w-full',
    '1/2': 'w-1/2',
    '2/3': 'w-2/3',
    '3/4': 'w-3/4',
  };

  const aspectRatioClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    auto: '',
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
  };

  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <div className={cn('flex', alignClasses[align])}>
      <video
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        className={cn(
          widthClasses[width],
          aspectRatioClasses[aspectRatio],
          roundedClasses[rounded],
          'bg-neutral-900',
          className
        )}
        style={style}
        {...props}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

// Définition pour le registre
export const videoDefinition: ComponentDefinition = {
  id: 'video',
  type: 'video',
  name: 'Video',
  label: 'Video',
  description: 'Add a video to your page',
  icon: 'Video',
  defaultProps: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    controls: true,
    autoplay: false,
    loop: false,
    muted: false,
    width: 'full',
    aspectRatio: '16/9',
    align: 'center',
    rounded: 'md',
  },
  schema: videoSchema,
  component: Video,
};
