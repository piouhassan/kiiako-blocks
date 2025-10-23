import React from 'react';
import { Check, ShoppingCart, Heart } from 'lucide-react';
import type { ProductFeaturedProps } from './schema';

export const ProductFeatured: React.FC<ProductFeaturedProps> = ({
  productName,
  tagline,
  description,
  price,
  originalPrice,
  features,
  productImage,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundColor,
  imagePosition,
}) => {
  const discount = originalPrice
    ? Math.round((1 - parseFloat(price.replace(/[^0-9.]/g, '')) / parseFloat(originalPrice.replace(/[^0-9.]/g, ''))) * 100)
    : 0;

  return (
    <section className="py-16 px-6" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
          {/* Content Side */}
          <div className="flex-1">
            {/* Tagline */}
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              {tagline}
            </span>

            {/* Product Name */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {productName}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-6">
              {description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-bold text-gray-900">
                {price}
              </span>
              {originalPrice && (
                <>
                  <span className="text-2xl text-gray-400 line-through">
                    {originalPrice}
                  </span>
                  <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Features */}
            {features.length > 0 && (
              <div className="mb-8 space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={ctaLink}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <ShoppingCart className="h-5 w-5" />
                {ctaText}
              </a>
              {secondaryCtaText && secondaryCtaLink && (
                <a
                  href={secondaryCtaLink}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-primary-600 hover:text-primary-600 transition-all"
                >
                  <Heart className="h-5 w-5" />
                  {secondaryCtaText}
                </a>
              )}
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1">
            <div className="relative">
              {/* Decorative blob */}
              <div className="absolute inset-0 bg-primary-200 rounded-full blur-3xl opacity-20 scale-75" />

              {/* Product Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={productImage}
                  alt={productName}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Badge */}
              {discount > 0 && (
                <div className="absolute top-8 right-8 z-20">
                  <div className="w-20 h-20 bg-red-500 text-white rounded-full flex flex-col items-center justify-center shadow-lg transform rotate-12">
                    <span className="text-sm font-semibold">SAVE</span>
                    <span className="text-xl font-bold">{discount}%</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
