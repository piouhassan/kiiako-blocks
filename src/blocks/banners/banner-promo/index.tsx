import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import type { BannerPromoProps } from './schema';

export const BannerPromo: React.FC<BannerPromoProps> = ({
  title,
  subtitle,
  description,decorated,
  ctaText,
  ctaLink,
  backgroundImage,
  backgroundColor,
  textColor,
  badgeText,
  badgeColor,
  showCountdown,
  countdownEndDate,
}) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!showCountdown || !countdownEndDate) return;

    const calculateTimeLeft = () => {
      const difference = new Date(countdownEndDate).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [showCountdown, countdownEndDate]);

  return (
    <section
      className="relative py-12 px-6 overflow-hidden"
      style={{
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      { decorated
          ?
              <>  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" /> </> 
              : ""
      }
      

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            {badgeText && (
              <span
                className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: badgeColor, color: '#ffffff' }}
              >
                {badgeText}
              </span>
            )}

            <p className="text-sm font-semibold mb-2 uppercase tracking-wider opacity-90" style={{ color: textColor }}>
              {subtitle}
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: textColor }}>
              {title}
            </h2>

            <p className="text-lg md:text-xl mb-6 opacity-90" style={{ color: textColor }}>
              {description}
            </p>

            {showCountdown && countdownEndDate && (
              <div className="flex gap-4 justify-center md:justify-start mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Clock className="h-5 w-5" style={{ color: textColor }} />
                  <div className="flex gap-2 font-mono text-lg font-bold" style={{ color: textColor }}>
                    <span>{String(timeLeft.days).padStart(2, '0')}d</span>
                    <span>:</span>
                    <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
                    <span>:</span>
                    <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
                    <span>:</span>
                    <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
                  </div>
                </div>
              </div>
            )}

            <a
              href={ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              {ctaText}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Visual Element */}
          <div className="hidden md:block">
            <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-center">
                <div className="text-4xl font-bold" style={{ color: textColor }}>
                  {badgeText || '50%'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
