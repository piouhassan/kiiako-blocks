import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { TestimonialsSliderProps } from './schema';

export const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({
  title,
  subtitle,
  testimonials,
  autoplay,
  autoplayInterval,
  showNavigation,
  showDots,
  backgroundColor,
  cardBackground,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, [testimonials.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, [testimonials.length]);

  // Autoplay effect
  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return;

    const interval = setInterval(goToNext, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, goToNext, testimonials.length]);

  if (testimonials.length === 0) {
    return (
      <section className="py-12 px-4" style={{ backgroundColor }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500">No testimonials available</p>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-4" style={{ backgroundColor }}>
      <div className="max-w-4xl mx-auto">
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

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {showNavigation && testimonials.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-700 hover:text-gray-900"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-700 hover:text-gray-900"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Testimonial Card */}
          <div
            className="rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500"
            style={{ backgroundColor: cardBackground }}
          >
            {/* Rating */}
            <div className="flex justify-center mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < currentTestimonial.rating
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-center mb-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                "{currentTestimonial.content}"
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              {currentTestimonial.avatar && (
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gray-200"
                />
              )}
              <div className="text-center">
                <p className="font-semibold text-gray-900 text-lg">
                  {currentTestimonial.name}
                </p>
                {(currentTestimonial.role || currentTestimonial.company) && (
                  <p className="text-gray-600 text-sm">
                    {currentTestimonial.role}
                    {currentTestimonial.role && currentTestimonial.company && ' at '}
                    {currentTestimonial.company}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          {showDots && testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-blue-600'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
