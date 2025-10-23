import React from 'react';
import { ArrowRight, Play, CheckCircle, Sparkles } from 'lucide-react';
import type { HeroModernProps } from './schema';

export const HeroModern: React.FC<HeroModernProps> = ({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  heroImage,
  features,
  backgroundColor,
  textColor,
  showStats,
  stats,
}) => {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Side */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                <Sparkles className="h-4 w-4" style={{ color: textColor }} />
                <span className="text-sm font-semibold" style={{ color: textColor }}>
                  {badge}
                </span>
              </div>
            )}

            {/* Subtitle */}
            <p
              className="text-sm md:text-base font-semibold uppercase tracking-wider mb-4 opacity-80"
              style={{ color: textColor }}
            >
              {subtitle}
            </p>

            {/* Title */}
            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ color: textColor }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl lg:max-w-none"
              style={{ color: textColor }}
            >
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center lg:justify-start">
              <a
                href={primaryCta.link}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                {primaryCta.text}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              {secondaryCta && (
                <a
                  href={secondaryCta.link}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/10 transition-all"
                  style={{ color: textColor }}
                >
                  <Play className="h-5 w-5" />
                  {secondaryCta.text}
                </a>
              )}
            </div>

            {/* Features */}
            {features.length > 0 && (
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm" style={{ color: textColor }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image Side */}
          {heroImage && (
            <div className="flex-1">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />

                {/* Image */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src={heroImage}
                    alt={title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        {showStats && stats.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: textColor }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm opacity-70"
                    style={{ color: textColor }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
