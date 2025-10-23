import React from 'react';
import type { CategoriesGridProps } from './schema';

export const CategoriesGrid: React.FC<CategoriesGridProps> = ({
  title,
  subtitle,
  categories,
  columns,
  showProductCount,
  showDescription,
  backgroundColor,
  cardStyle,
}) => {
  const gridColsMap = {
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const getCardClasses = () => {
    switch (cardStyle) {
      case 'card':
        return 'bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden';
      case 'minimal':
        return 'bg-white rounded-lg border border-gray-200 hover:border-gray-400 transition-colors duration-300 overflow-hidden';
      case 'overlay':
        return 'relative rounded-lg overflow-hidden group';
      default:
        return '';
    }
  };

  return (
    <section className="py-12 px-4" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Categories Grid */}
        <div className={`grid ${gridColsMap[columns]} gap-6`}>
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className={`block ${getCardClasses()}`}
            >
              {cardStyle === 'overlay' ? (
                // Overlay style
                <>
                  <div className="aspect-square">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {category.name}
                    </h3>
                    {showProductCount && category.productCount !== undefined && (
                      <p className="text-white/90 text-sm">
                        {category.productCount} products
                      </p>
                    )}
                    {showDescription && category.description && (
                      <p className="text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {category.description}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                // Card and Minimal styles
                <>
                  <div className="aspect-square">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {category.name}
                    </h3>
                    {showProductCount && category.productCount !== undefined && (
                      <p className="text-gray-600 text-sm">
                        {category.productCount} products
                      </p>
                    )}
                    {showDescription && category.description && (
                      <p className="text-gray-600 text-sm mt-2">
                        {category.description}
                      </p>
                    )}
                  </div>
                </>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
