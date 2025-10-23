import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { HeroSliderProps } from './schema';

export const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  autoplay,
  autoplayInterval,
  showNavigation,
  showDots,
  overlayOpacity,
  overlayColor,
  textColor,
  textAlign,
  minHeight,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoplay || slides.length <= 1) return;
    const interval = setInterval(goToNext, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, goToNext, slides.length]);

  if (slides.length === 0) {
    return <div className="py-20 text-center">No slides available</div>;
  }

  const currentSlide = slides[currentIndex];
  const alignmentClasses: Record<'left' | 'center' | 'right', string> = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${currentSlide.backgroundImage})` }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 py-20 md:py-32">
        <div className={`max-w-4xl mx-auto w-full flex flex-col ${alignmentClasses[textAlign]}`}>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fadeIn"
            style={{ color: textColor }}
          >
            {currentSlide.heading}
          </h1>

          {currentSlide.subheading && (
            <p
              className="text-xl md:text-2xl mb-10 max-w-2xl opacity-90 animate-fadeIn"
              style={{ color: textColor, animationDelay: '0.2s' }}
            >
              {currentSlide.subheading}
            </p>
          )}

          {(currentSlide.primaryButton || currentSlide.secondaryButton) && (
            <div className="flex flex-wrap gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              {currentSlide.primaryButton && (
                <a
                  href={currentSlide.primaryButton.link}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  {currentSlide.primaryButton.text}
                </a>
              )}
              {currentSlide.secondaryButton && (
                <a
                  href={currentSlide.secondaryButton.link}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all"
                >
                  {currentSlide.secondaryButton.text}
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showNavigation && slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
          >
            <ChevronLeft className="h-6 w-6" style={{ color: textColor }} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
          >
            <ChevronRight className="h-6 w-6" style={{ color: textColor }} />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_: any, index : number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
