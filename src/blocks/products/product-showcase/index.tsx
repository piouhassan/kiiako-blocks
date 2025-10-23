import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import type { ProductShowcaseProps } from './schema';

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  title,
  subtitle,
  products,
  columns = 3,
  showViewAll,
  viewAllText,
  viewAllLink,
}) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
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

        {/* Products Grid */}
        <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-8 mb-12`}>
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary-500 transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>

                {product.rating !== undefined && (
                  <div className="mb-3">
                    {renderStars(product.rating)}
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No products added yet
          </div>
        )}

        {/* View All Button */}
        {showViewAll && products.length > 0 && (
          <div className="text-center">
            <a
              href={viewAllLink}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              {viewAllText}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
