import React from 'react';
import type { PartnersGridProps } from './schema';

export const PartnersGrid: React.FC<PartnersGridProps> = ({
  title,
  subtitle,
  partners,
  backgroundColor,
  logoGrayscale,
  columns = 4,
}) => {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  };

  return (
    <section className="py-16 px-6" style={{ backgroundColor }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Partners Grid */}
        <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-8 md:gap-12`}>
          {partners.map((partner, index) => {
            const PartnerContent = (
              <div
                className={`
                  flex items-center justify-center p-6
                  transition-all duration-300
                  ${logoGrayscale ? 'grayscale hover:grayscale-0' : ''}
                  opacity-60 hover:opacity-100
                `}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-16 object-contain"
                />
              </div>
            );

            return partner.url ? (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {PartnerContent}
              </a>
            ) : (
              <div key={index}>{PartnerContent}</div>
            );
          })}
        </div>

        {partners.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No partners added yet
          </div>
        )}
      </div>
    </section>
  );
};
