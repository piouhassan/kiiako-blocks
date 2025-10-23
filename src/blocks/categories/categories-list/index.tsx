import React from 'react';
import { ChevronRight, Folder } from 'lucide-react';
import type { CategoriesListProps } from './schema';

export const CategoriesList: React.FC<CategoriesListProps> = ({
  title,
  subtitle,
  categories,
  showProductCount,
  showIcon,
  backgroundColor,
}) => {
  return (
    <section className="py-12 px-4" style={{ backgroundColor }}>
      <div className="max-w-4xl mx-auto">
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

        {/* Categories List */}
        <div className="space-y-3">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center gap-4 flex-1">
                {/* Icon */}
                {showIcon && (
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Folder className="h-6 w-6 text-blue-600" />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* Product Count */}
                {showProductCount && category.productCount !== undefined && (
                  <div className="flex-shrink-0 text-sm text-gray-500 mr-2">
                    {category.productCount} {category.productCount === 1 ? 'item' : 'items'}
                  </div>
                )}

                {/* Arrow */}
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
