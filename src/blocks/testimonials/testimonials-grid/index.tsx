import React from 'react';
import { Star, Quote } from 'lucide-react';
import type { TestimonialsGridProps } from './schema';

export const TestimonialsGrid: React.FC<TestimonialsGridProps> = ({
  title,
  subtitle,
  testimonials,
  columns,
  showAvatar,
  backgroundColor,
  cardBackground,
}) => {
  const gridColsMap = {
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
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

        {/* Testimonials Grid */}
        <div className={`grid ${gridColsMap[columns]} gap-6 lg:gap-8`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: cardBackground }}
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-blue-500 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                {showAvatar && testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                      {testimonial.role && testimonial.company && ' • '}
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
