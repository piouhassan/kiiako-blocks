import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import type { ProductGrid2ColProps } from './schema';

export const ProductGrid2Col: React.FC<ProductGrid2ColProps> = ({
  title,
  subtitle,
  products,
  showQuickAdd,
  showWishlist,
  showRating,
  imageAspectRatio,
  backgroundColor,
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  };

  return (
    <section className="py-12 px-4" style={{ backgroundColor }}>
      <div className="max-w-6xl mx-auto">
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

        {/* Products Grid - 2 Columns */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <div className={aspectRatioClasses[imageAspectRatio]}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                  )}

                  {/* Wishlist Button */}
                  {showWishlist && (
                    <button
                      className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-red-50 hover:text-red-500 transition-colors duration-200"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                  )}

                  {/* Quick Add Button - Shows on hover */}
                  {showQuickAdd && (
                    <button className="absolute bottom-3 left-3 right-3 bg-gray-900 text-white py-3 px-4 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 hover:bg-gray-800">
                      <ShoppingCart className="h-5 w-5" />
                      Quick Add
                    </button>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5">
                  {product.category && (
                    <p className="text-sm text-gray-500 mb-1 uppercase tracking-wide">
                      {product.category}
                    </p>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  {showRating && product.rating !== undefined && (
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating!
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">
                      ({product.rating})
                    </span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
