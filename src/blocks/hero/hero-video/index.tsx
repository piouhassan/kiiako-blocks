import React from 'react';
import type { HeroVideoProps } from './schema';

export const HeroVideo: React.FC<HeroVideoProps> = ({
                                                      heading,
                                                      subheading,
                                                      videoUrl,
                                                      posterImage,
                                                      primaryButton,
                                                      secondaryButton,
                                                      overlayOpacity,
                                                      overlayColor,
                                                      textColor,
                                                      textAlign,
                                                      minHeight,
                                                      autoplay,
                                                      loop,
                                                      muted,
                                                    }) => {
  const alignmentClasses: Record<'left' | 'center' | 'right', string> = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const buttonVariantClasses: Record<'primary' | 'secondary' | 'outline' | 'ghost', string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-gray-900',
    ghost: 'text-white hover:bg-white/20',
  };

  // Détecte la plateforme
  const isYouTube = videoUrl?.includes('youtube.com') || videoUrl?.includes('youtu.be');
  const isVimeo = videoUrl?.includes('vimeo.com');
  const isMp4 = videoUrl?.endsWith('.mp4');

  // Génère URL embed YouTube
  // Détection et génération d'embed dynamiques
  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match
      ? `https://www.youtube.com/embed/${match[1]}?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&mute=${muted ? 1 : 0}&playlist=${match[1]}&controls=0&modestbranding=1&rel=0&showinfo=0`
      : '';
  };

  const getVimeoEmbedUrl = (url: string) => {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    return match
      ? `https://player.vimeo.com/video/${match[1]}?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&muted=${muted ? 1 : 0}&background=1`
      : '';
  };


  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight }}
    >
      {/* Vidéo ou iframe */}
      {videoUrl ? (
        <>
          {isYouTube && (
            <iframe
              className="absolute top-1/2 left-1/2 w-[177.78%] h-[177.78%] -translate-x-1/2 -translate-y-1/2"
              style={{ pointerEvents: 'none' }}
              src={getYouTubeEmbedUrl(videoUrl)}
              title="Hero Video"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
            />

          )}
          {isVimeo && (
            <iframe
              className="absolute inset-0 w-full h-full object-cover"
              src={getVimeoEmbedUrl(videoUrl)}
              title="Hero Video"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}
          {isMp4 && (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay={autoplay}
              loop={loop}
              muted={muted}
              playsInline
              poster={posterImage}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </>
      ) : (
        posterImage && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${posterImage})` }}
          />
        )
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 py-20 md:py-32">
        <div className={`max-w-4xl mx-auto w-full flex flex-col ${alignmentClasses[textAlign]}`}>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: textColor }}
          >
            {heading}
          </h1>

          {subheading && (
            <p
              className="text-xl md:text-2xl mb-10 max-w-2xl opacity-90"
              style={{ color: textColor }}
            >
              {subheading}
            </p>
          )}

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap gap-4">
              {primaryButton && (
                <a
                  href={primaryButton.link}
                  className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-block ${
                    buttonVariantClasses[primaryButton.variant]
                  }`}
                >
                  {primaryButton.text}
                </a>
              )}
              {secondaryButton && (
                <a
                  href={secondaryButton.link}
                  className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-block ${
                    buttonVariantClasses[secondaryButton.variant]
                  }`}
                >
                  {secondaryButton.text}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
