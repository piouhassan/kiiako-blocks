import React from 'react';
import type { HeroSimpleProps } from './schema';

export const HeroSimple: React.FC<HeroSimpleProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  textAlign = 'center',
  overlayOpacity = 0.4,
  textColor = '#ffffff',
  minHeight = '500px',
}) => {
  const alignmentClasses: Record<'left' | 'center' | 'right', string> = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight }}>
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: '#000000', opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 py-20">
        <div className={`max-w-4xl mx-auto w-full flex flex-col ${alignmentClasses[textAlign]}`}>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            style={{ color: backgroundImage ? textColor : 'inherit' }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="text-lg md:text-xl mb-8 max-w-2xl opacity-90"
              style={{ color: backgroundImage ? textColor : 'inherit' }}
            >
              {subtitle}
            </p>
          )}

          {buttonText && buttonLink && (
            <div>
              <a
                href={buttonLink}
                className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                {buttonText}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
