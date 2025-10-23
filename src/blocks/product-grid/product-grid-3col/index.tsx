import { ShoppingCart, Heart } from 'lucide-react';
import type { ProductGrid3ColProps } from './schema';

/**
 * Product Grid 3 Columns - Composant React
 */
export function ProductGrid3Col({
  title,
  products,
  showQuickAdd,
  showWishlist,
  backgroundColor,
  ...props
}: ProductGrid3ColProps) {
  return (
    <section
      className="w-full py-12"
      style={{ backgroundColor }}
      {...props}
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        {title && (
          <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden rounded-t-lg bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Quick Actions */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {showWishlist && (
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-neutral-50">
                      <Heart className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-medium text-neutral-900 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-2 line-clamp-1">
                  {product.category}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-neutral-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-neutral-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                {showQuickAdd && (
                  <button className="w-full px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
