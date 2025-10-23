import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Sparkles, ArrowRight, Play, CheckCircle, ChevronLeft, ChevronRight, Search, User, ShoppingCart, X, Menu, Mail, Youtube, Linkedin, Instagram, Twitter, Facebook, Check, Heart, Star, Folder, Clock, Quote, Shield } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import { clsx } from 'clsx';
import { z } from 'zod';

// src/blocks/hero/hero-simple/index.tsx
var HeroSimple = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  textAlign = "center",
  overlayOpacity = 0.4,
  textColor = "#ffffff",
  minHeight = "500px"
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full overflow-hidden", style: { minHeight }, children: [
    backgroundImage && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700",
        style: { backgroundImage: `url(${backgroundImage})` }
      }
    ),
    backgroundImage && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0",
        style: { backgroundColor: "#000000", opacity: overlayOpacity }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 h-full flex flex-col justify-center px-6 py-20", children: /* @__PURE__ */ jsxs("div", { className: `max-w-4xl mx-auto w-full flex flex-col ${alignmentClasses[textAlign]}`, children: [
      /* @__PURE__ */ jsx(
        "h1",
        {
          className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight",
          style: { color: backgroundImage ? textColor : "inherit" },
          children: title
        }
      ),
      subtitle && /* @__PURE__ */ jsx(
        "p",
        {
          className: "text-lg md:text-xl mb-8 max-w-2xl opacity-90",
          style: { color: backgroundImage ? textColor : "inherit" },
          children: subtitle
        }
      ),
      buttonText && buttonLink && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: buttonLink,
          className: "inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors",
          children: buttonText
        }
      ) })
    ] }) })
  ] });
};
var HeroModern = ({
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
  stats
}) => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative py-20 px-6 overflow-hidden",
      style: { backgroundColor },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse", style: { animationDelay: "1s" } }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          } }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-12", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center lg:text-left", children: [
              badge && /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4", style: { color: textColor } }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", style: { color: textColor }, children: badge })
              ] }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-sm md:text-base font-semibold uppercase tracking-wider mb-4 opacity-80",
                  style: { color: textColor },
                  children: subtitle
                }
              ),
              /* @__PURE__ */ jsx(
                "h1",
                {
                  className: "text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight",
                  style: { color: textColor },
                  children: title
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-lg md:text-xl mb-8 opacity-90 max-w-2xl lg:max-w-none",
                  style: { color: textColor },
                  children: description
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center lg:justify-start", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: primaryCta.link,
                    className: "group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg",
                    children: [
                      primaryCta.text,
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ]
                  }
                ),
                secondaryCta && /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: secondaryCta.link,
                    className: "inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/10 transition-all",
                    style: { color: textColor },
                    children: [
                      /* @__PURE__ */ jsx(Play, { className: "h-5 w-5" }),
                      secondaryCta.text
                    ]
                  }
                )
              ] }),
              features.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-6 justify-center lg:justify-start", children: features.map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", style: { color: textColor }, children: feature.text })
              ] }, index)) })
            ] }),
            heroImage && /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl blur-2xl opacity-20" }),
              /* @__PURE__ */ jsx("div", { className: "relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: heroImage,
                  alt: title,
                  className: "w-full h-auto object-cover"
                }
              ) })
            ] }) })
          ] }),
          showStats && stats.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-20 pt-12 border-t border-white/10", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "text-3xl md:text-4xl font-bold mb-2",
                style: { color: textColor },
                children: stat.value
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "text-sm opacity-70",
                style: { color: textColor },
                children: stat.label
              }
            )
          ] }, index)) }) })
        ] })
      ]
    }
  );
};
var HeroSlider = ({
  slides,
  autoplay,
  autoplayInterval,
  showNavigation,
  showDots,
  overlayOpacity,
  overlayColor,
  textColor,
  textAlign,
  minHeight
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => prev === 0 ? slides.length - 1 : prev - 1);
  }, [slides.length]);
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => prev === slides.length - 1 ? 0 : prev + 1);
  }, [slides.length]);
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    if (!autoplay || slides.length <= 1) return;
    const interval = setInterval(goToNext, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, goToNext, slides.length]);
  if (slides.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "py-20 text-center", children: "No slides available" });
  }
  const currentSlide = slides[currentIndex];
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full overflow-hidden", style: { minHeight }, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700",
        style: { backgroundImage: `url(${currentSlide.backgroundImage})` }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0",
        style: { backgroundColor: overlayColor, opacity: overlayOpacity }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 h-full flex flex-col justify-center px-4 py-20 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: `max-w-4xl mx-auto w-full flex flex-col ${alignmentClasses[textAlign]}`, children: [
      /* @__PURE__ */ jsx(
        "h1",
        {
          className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fadeIn",
          style: { color: textColor },
          children: currentSlide.heading
        }
      ),
      currentSlide.subheading && /* @__PURE__ */ jsx(
        "p",
        {
          className: "text-xl md:text-2xl mb-10 max-w-2xl opacity-90 animate-fadeIn",
          style: { color: textColor, animationDelay: "0.2s" },
          children: currentSlide.subheading
        }
      ),
      (currentSlide.primaryButton || currentSlide.secondaryButton) && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 animate-fadeIn", style: { animationDelay: "0.4s" }, children: [
        currentSlide.primaryButton && /* @__PURE__ */ jsx(
          "a",
          {
            href: currentSlide.primaryButton.link,
            className: "px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors",
            children: currentSlide.primaryButton.text
          }
        ),
        currentSlide.secondaryButton && /* @__PURE__ */ jsx(
          "a",
          {
            href: currentSlide.secondaryButton.link,
            className: "px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all",
            children: currentSlide.secondaryButton.text
          }
        )
      ] })
    ] }) }),
    showNavigation && slides.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: goToPrevious,
          className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-6 w-6", style: { color: textColor } })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: goToNext,
          className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-6 w-6", style: { color: textColor } })
        }
      )
    ] }),
    showDots && slides.length > 1 && /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2", children: slides.map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => goToSlide(index),
        className: `h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"}`
      },
      index
    )) })
  ] });
};
var HeroVideo = ({
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
  muted
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  };
  const buttonVariantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-white text-white hover:bg-white hover:text-gray-900",
    ghost: "text-white hover:bg-white/20"
  };
  const isYouTube = videoUrl?.includes("youtube.com") || videoUrl?.includes("youtu.be");
  const isVimeo = videoUrl?.includes("vimeo.com");
  const isMp4 = videoUrl?.endsWith(".mp4");
  const getYouTubeEmbedUrl = (url) => {
    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&mute=${muted ? 1 : 0}&playlist=${match[1]}&controls=0&modestbranding=1&rel=0&showinfo=0` : "";
  };
  const getVimeoEmbedUrl = (url) => {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    return match ? `https://player.vimeo.com/video/${match[1]}?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&muted=${muted ? 1 : 0}&background=1` : "";
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative w-full overflow-hidden",
      style: { minHeight },
      children: [
        videoUrl ? /* @__PURE__ */ jsxs(Fragment, { children: [
          isYouTube && /* @__PURE__ */ jsx(
            "iframe",
            {
              className: "absolute top-1/2 left-1/2 w-[177.78%] h-[177.78%] -translate-x-1/2 -translate-y-1/2",
              style: { pointerEvents: "none" },
              src: getYouTubeEmbedUrl(videoUrl),
              title: "Hero Video",
              frameBorder: "0",
              allow: "autoplay; fullscreen; encrypted-media",
              allowFullScreen: true
            }
          ),
          isVimeo && /* @__PURE__ */ jsx(
            "iframe",
            {
              className: "absolute inset-0 w-full h-full object-cover",
              src: getVimeoEmbedUrl(videoUrl),
              title: "Hero Video",
              frameBorder: "0",
              allow: "autoplay; fullscreen; picture-in-picture",
              allowFullScreen: true
            }
          ),
          isMp4 && /* @__PURE__ */ jsxs(
            "video",
            {
              className: "absolute inset-0 w-full h-full object-cover",
              autoPlay: autoplay,
              loop,
              muted,
              playsInline: true,
              poster: posterImage,
              children: [
                /* @__PURE__ */ jsx("source", { src: videoUrl, type: "video/mp4" }),
                "Your browser does not support the video tag."
              ]
            }
          )
        ] }) : posterImage && /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 w-full h-full bg-cover bg-center",
            style: { backgroundImage: `url(${posterImage})` }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              backgroundColor: overlayColor,
              opacity: overlayOpacity
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 h-full flex flex-col justify-center px-4 py-20 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: `max-w-4xl mx-auto w-full flex flex-col ${alignmentClasses[textAlign]}`, children: [
          /* @__PURE__ */ jsx(
            "h1",
            {
              className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight",
              style: { color: textColor },
              children: heading
            }
          ),
          subheading && /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-xl md:text-2xl mb-10 max-w-2xl opacity-90",
              style: { color: textColor },
              children: subheading
            }
          ),
          (primaryButton || secondaryButton) && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
            primaryButton && /* @__PURE__ */ jsx(
              "a",
              {
                href: primaryButton.link,
                className: `px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-block ${buttonVariantClasses[primaryButton.variant]}`,
                children: primaryButton.text
              }
            ),
            secondaryButton && /* @__PURE__ */ jsx(
              "a",
              {
                href: secondaryButton.link,
                className: `px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-block ${buttonVariantClasses[secondaryButton.variant]}`,
                children: secondaryButton.text
              }
            )
          ] })
        ] }) })
      ]
    }
  );
};
var HeaderModerne = ({
  logo,
  siteName,
  navigation,
  showSearch,
  searchPlaceholder,
  primaryCta,
  backgroundColor,
  textColor,
  sticky
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `w-full border-b border-gray-200 ${sticky ? "sticky top-0 z-50" : ""}`,
      style: { backgroundColor },
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16 md:h-20", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", children: [
            /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center gap-2", children: logo ? /* @__PURE__ */ jsx("img", { src: logo, alt: siteName, className: "h-8 md:h-10" }) : /* @__PURE__ */ jsx("span", { className: "text-xl md:text-2xl font-bold", style: { color: textColor }, children: siteName }) }),
            /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-6", children: navigation.map((item, index) => /* @__PURE__ */ jsx(
              "a",
              {
                href: item.url,
                className: "text-sm font-medium hover:opacity-70 transition-opacity",
                style: { color: textColor },
                children: item.label
              },
              index
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            showSearch && /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                Search,
                {
                  className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4",
                  style: { color: `${textColor}60` }
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: searchPlaceholder,
                  className: "pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 lg:w-64",
                  style: { color: textColor }
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("button", { className: "p-2 hover:bg-gray-100 rounded-full transition-colors", children: /* @__PURE__ */ jsx(User, { className: "h-5 w-5", style: { color: textColor } }) }),
              /* @__PURE__ */ jsxs("button", { className: "p-2 hover:bg-gray-100 rounded-full transition-colors relative", children: [
                /* @__PURE__ */ jsx(ShoppingCart, { className: "h-5 w-5", style: { color: textColor } }),
                /* @__PURE__ */ jsx("span", { className: "absolute top-0 right-0 h-4 w-4 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center", children: "0" })
              ] })
            ] }),
            primaryCta && /* @__PURE__ */ jsx(
              "a",
              {
                href: primaryCta.url,
                className: "hidden md:inline-flex px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors",
                children: primaryCta.text
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "lg:hidden p-2",
                onClick: () => setMobileMenuOpen(!mobileMenuOpen),
                children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6", style: { color: textColor } }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6", style: { color: textColor } })
              }
            )
          ] })
        ] }),
        mobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "lg:hidden py-4 border-t border-gray-200", children: [
          showSearch && /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: searchPlaceholder,
                className: "w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-3", children: navigation.map((item, index) => /* @__PURE__ */ jsx(
            "a",
            {
              href: item.url,
              className: "px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors",
              style: { color: textColor },
              children: item.label
            },
            index
          )) }),
          primaryCta && /* @__PURE__ */ jsx(
            "a",
            {
              href: primaryCta.url,
              className: "mt-4 block text-center px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium",
              children: primaryCta.text
            }
          )
        ] })
      ] })
    }
  );
};
function cn(...inputs) {
  return clsx(inputs);
}
function HeaderMinimaliste({
  logo,
  navigation,
  ctaButton,
  backgroundColor,
  textColor,
  sticky,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: cn(
        "w-full border-b border-neutral-200",
        sticky && "sticky top-0 z-50"
      ),
      style: { backgroundColor, color: textColor },
      ...props,
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: logo.image ? /* @__PURE__ */ jsx("img", { src: logo.image, alt: logo.text, className: "h-8" }) : /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: logo.text }) }),
        /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8", children: navigation.map((item, index) => /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            className: "text-sm font-medium hover:opacity-70 transition-opacity",
            children: item.label
          },
          index
        )) }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: ctaButton.href,
            className: "px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors",
            children: ctaButton.text
          }
        )
      ] })
    }
  );
}
var HeaderComplet = ({
  logo,
  navigation,
  showSearch,
  showCart,
  showAccount,
  backgroundColor,
  textColor,
  sticky,
  showTopBar,
  topBarMessage
}) => {
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: cn(
        "w-full border-b border-neutral-200",
        sticky && "sticky top-0 z-50"
      ),
      style: { backgroundColor, color: textColor },
      children: [
        showTopBar && /* @__PURE__ */ jsx("div", { className: "border-b border-neutral-200", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs", children: [
          /* @__PURE__ */ jsx("span", { children: topBarMessage }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("a", { href: "#help", className: "hover:opacity-70", children: "Help" }),
            /* @__PURE__ */ jsx("a", { href: "#track", className: "hover:opacity-70", children: "Track Order" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: logo.image ? /* @__PURE__ */ jsx("img", { src: logo.image, alt: logo.text, className: "h-8" }) : /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: logo.text }) }),
          showSearch && /* @__PURE__ */ jsx("div", { className: "hidden md:flex flex-1 max-w-xl", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Search products...",
                className: "w-full px-4 py-2 pr-10 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              }
            ),
            /* @__PURE__ */ jsx(Search, { className: "absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            showAccount && /* @__PURE__ */ jsx("button", { className: "p-2 hover:bg-neutral-100 rounded-lg transition-colors", children: /* @__PURE__ */ jsx(User, { className: "h-5 w-5" }) }),
            showCart && /* @__PURE__ */ jsxs("button", { className: "p-2 hover:bg-neutral-100 rounded-lg relative transition-colors", children: [
              /* @__PURE__ */ jsx(ShoppingCart, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center", children: "0" })
            ] }),
            /* @__PURE__ */ jsx("button", { className: "p-2 hover:bg-neutral-100 rounded-lg md:hidden transition-colors", children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" }) })
          ] })
        ] }) }),
        navigation.length > 0 && /* @__PURE__ */ jsx("div", { className: "border-t border-neutral-200", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8 py-3", children: navigation.map((item, index) => /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            className: "text-sm font-medium hover:opacity-70 transition-opacity",
            children: item.label
          },
          index
        )) }) }) })
      ]
    }
  );
};
function FooterSimple({
  logo,
  description,
  links,
  socialLinks,
  copyright,
  backgroundColor,
  textColor,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "footer",
    {
      className: "w-full border-t border-neutral-200",
      style: { backgroundColor, color: textColor },
      ...props,
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 mb-4", children: logo.image ? /* @__PURE__ */ jsx("img", { src: logo.image, alt: logo.text, className: "h-8" }) : /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: logo.text }) }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600 max-w-md", children: description })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Quick Links" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: links.map((link, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                className: "text-sm text-neutral-600 hover:text-neutral-900 transition-colors",
                children: link.label
              }
            ) }, index)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Follow Us" }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: socialLinks.map((social, index) => /* @__PURE__ */ jsx(
              "a",
              {
                href: social.href,
                className: "text-neutral-600 hover:text-neutral-900 transition-colors",
                target: "_blank",
                rel: "noopener noreferrer",
                children: social.platform
              },
              index
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 pt-8 border-t border-neutral-200 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-500", children: copyright }) })
      ] })
    }
  );
}
var iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube
};
var FooterComplet = ({
  logo,
  companyName,
  tagline,
  description,
  columns,
  showNewsletter,
  newsletterTitle,
  newsletterDescription,
  socialLinks,
  bottomLinks,
  copyright,
  backgroundColor,
  textColor,
  linkHoverColor
}) => {
  return /* @__PURE__ */ jsxs("footer", { style: { backgroundColor, color: textColor }, children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 py-12 md:py-16", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          logo ? /* @__PURE__ */ jsx("img", { src: logo, alt: companyName, className: "h-10 mb-4" }) : /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2", children: companyName }),
          tagline && /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80 mb-3", children: tagline }),
          description && /* @__PURE__ */ jsx("p", { className: "text-sm opacity-70 leading-relaxed", children: description })
        ] }),
        showNewsletter && /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }),
            newsletterTitle
          ] }),
          newsletterDescription && /* @__PURE__ */ jsx("p", { className: "text-sm opacity-70 mb-3", children: newsletterDescription }),
          /* @__PURE__ */ jsxs("form", { className: "flex gap-2", onSubmit: (e) => e.preventDefault(), children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Your email",
                className: "flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "px-6 py-2 rounded font-medium transition-colors",
                style: {
                  backgroundColor: linkHoverColor,
                  color: backgroundColor
                },
                children: "Subscribe"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsx("div", { className: `grid grid-cols-2 md:grid-cols-${Math.min(columns.length, 4)} gap-8`, children: columns.map((column, columnIndex) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4 text-lg", children: column.title }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: column.links.map((link, linkIndex) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: link.url,
            className: "text-sm opacity-80 hover:opacity-100 transition-opacity",
            style: {
              "--hover-color": linkHoverColor
            },
            onMouseEnter: (e) => {
              e.currentTarget.style.color = linkHoverColor;
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.color = textColor;
            },
            children: link.label
          }
        ) }, linkIndex)) })
      ] }, columnIndex)) }) })
    ] }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "border-t border-white/10",
        style: { borderColor: `${textColor}20` },
        children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 py-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm opacity-70", children: copyright }),
          socialLinks.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: socialLinks.map((social, index) => {
            const IconComponent = iconMap[social.platform.toLowerCase()];
            return IconComponent ? /* @__PURE__ */ jsx(
              "a",
              {
                href: social.url,
                className: "opacity-70 hover:opacity-100 transition-opacity",
                "aria-label": social.platform,
                onMouseEnter: (e) => {
                  e.currentTarget.style.color = linkHoverColor;
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.color = textColor;
                },
                children: /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5" })
              },
              index
            ) : null;
          }) }),
          bottomLinks.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: bottomLinks.map((link, index) => /* @__PURE__ */ jsx(
            "a",
            {
              href: link.url,
              className: "text-sm opacity-70 hover:opacity-100 transition-opacity",
              onMouseEnter: (e) => {
                e.currentTarget.style.color = linkHoverColor;
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.color = textColor;
              },
              children: link.label
            },
            index
          )) })
        ] }) })
      }
    )
  ] });
};
var iconMap2 = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin
};
var FooterCentre = ({
  logo,
  companyName,
  description,
  links,
  socialLinks,
  copyright,
  backgroundColor,
  textColor
}) => {
  return /* @__PURE__ */ jsx("footer", { style: { backgroundColor, color: textColor }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 py-12 md:py-16 text-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      logo ? /* @__PURE__ */ jsx("img", { src: logo, alt: companyName, className: "h-10 mx-auto mb-4" }) : /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3", style: { color: textColor }, children: companyName }),
      description && /* @__PURE__ */ jsx("p", { className: "text-base opacity-80 max-w-md mx-auto", style: { color: textColor }, children: description })
    ] }),
    links.length > 0 && /* @__PURE__ */ jsx("nav", { className: "flex flex-wrap justify-center gap-6 mb-8", children: links.map((link, index) => /* @__PURE__ */ jsx(
      "a",
      {
        href: link.url,
        className: "text-sm opacity-80 hover:opacity-100 transition-opacity",
        style: { color: textColor },
        children: link.label
      },
      index
    )) }),
    socialLinks.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-4 mb-8", children: socialLinks.map((social, index) => {
      const IconComponent = iconMap2[social.platform.toLowerCase()];
      return IconComponent ? /* @__PURE__ */ jsx(
        "a",
        {
          href: social.url,
          className: "p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors",
          "aria-label": social.platform,
          style: { color: textColor },
          children: /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5" })
        },
        index
      ) : null;
    }) }),
    /* @__PURE__ */ jsx("p", { className: "text-sm opacity-70 border-t pt-8", style: { color: textColor, borderColor: `${textColor}20` }, children: copyright })
  ] }) });
};
var ProductFeatured = ({
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
  imagePosition
}) => {
  const discount = originalPrice ? Math.round((1 - parseFloat(price.replace(/[^0-9.]/g, "")) / parseFloat(originalPrice.replace(/[^0-9.]/g, ""))) * 100) : 0;
  return /* @__PURE__ */ jsx("section", { className: "py-16 px-6", style: { backgroundColor }, children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: `flex flex-col ${imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4", children: tagline }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: productName }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6", children: description }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
        /* @__PURE__ */ jsx("span", { className: "text-4xl font-bold text-gray-900", children: price }),
        originalPrice && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl text-gray-400 line-through", children: originalPrice }),
          /* @__PURE__ */ jsxs("span", { className: "px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold", children: [
            "Save ",
            discount,
            "%"
          ] })
        ] })
      ] }),
      features.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-8 space-y-3", children: features.map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5", children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-green-600" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
      ] }, index)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: ctaLink,
            className: "inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg",
            children: [
              /* @__PURE__ */ jsx(ShoppingCart, { className: "h-5 w-5" }),
              ctaText
            ]
          }
        ),
        secondaryCtaText && secondaryCtaLink && /* @__PURE__ */ jsxs(
          "a",
          {
            href: secondaryCtaLink,
            className: "inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-primary-600 hover:text-primary-600 transition-all",
            children: [
              /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5" }),
              secondaryCtaText
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary-200 rounded-full blur-3xl opacity-20 scale-75" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 rounded-2xl overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: productImage,
          alt: productName,
          className: "w-full h-auto object-cover"
        }
      ) }),
      discount > 0 && /* @__PURE__ */ jsx("div", { className: "absolute top-8 right-8 z-20", children: /* @__PURE__ */ jsxs("div", { className: "w-20 h-20 bg-red-500 text-white rounded-full flex flex-col items-center justify-center shadow-lg transform rotate-12", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: "SAVE" }),
        /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold", children: [
          discount,
          "%"
        ] })
      ] }) })
    ] }) })
  ] }) }) });
};
var ProductShowcase = ({
  title,
  subtitle,
  products,
  columns = 3,
  showViewAll,
  viewAllText,
  viewAllLink
}) => {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };
  const renderStars = (rating) => {
    return /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
      Star,
      {
        className: `h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`
      },
      i
    )) });
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16 px-6 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `grid ${gridCols[columns]} gap-8 mb-12`, children: products.map((product, index) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: product.link,
        className: "group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary-500 transition-all duration-300 hover:shadow-xl",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden aspect-square", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: product.image,
                alt: product.name,
                className: "w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              }
            ),
            product.badge && /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full", children: product.badge })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors", children: product.name }),
            product.rating !== void 0 && /* @__PURE__ */ jsx("div", { className: "mb-3", children: renderStars(product.rating) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-gray-900", children: product.price }),
              product.originalPrice && /* @__PURE__ */ jsx("span", { className: "text-lg text-gray-400 line-through", children: product.originalPrice })
            ] })
          ] })
        ]
      },
      index
    )) }),
    products.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center py-12 text-gray-500", children: "No products added yet" }),
    showViewAll && products.length > 0 && /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: viewAllLink,
        className: "inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors",
        children: [
          viewAllText,
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })
        ]
      }
    ) })
  ] }) });
};
var ProductGrid2Col = ({
  title,
  subtitle,
  products,
  showQuickAdd,
  showWishlist,
  showRating,
  imageAspectRatio,
  backgroundColor
}) => {
  const aspectRatioClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]"
  };
  return /* @__PURE__ */ jsx("section", { className: "py-12 px-4", style: { backgroundColor }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      title && /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-3", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8", children: products.map((product, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: aspectRatioClasses[imageAspectRatio], children: /* @__PURE__ */ jsx(
              "img",
              {
                src: product.image,
                alt: product.name,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              }
            ) }),
            product.badge && /* @__PURE__ */ jsx("span", { className: "absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full", children: product.badge }),
            showWishlist && /* @__PURE__ */ jsx(
              "button",
              {
                className: "absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-red-50 hover:text-red-500 transition-colors duration-200",
                "aria-label": "Add to wishlist",
                children: /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5" })
              }
            ),
            showQuickAdd && /* @__PURE__ */ jsxs("button", { className: "absolute bottom-3 left-3 right-3 bg-gray-900 text-white py-3 px-4 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 hover:bg-gray-800", children: [
              /* @__PURE__ */ jsx(ShoppingCart, { className: "h-5 w-5" }),
              "Quick Add"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
            product.category && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-1 uppercase tracking-wide", children: product.category }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2 line-clamp-2", children: product.name }),
            showRating && product.rating !== void 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mb-2", children: [
              Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(
                Star,
                {
                  className: `h-4 w-4 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`
                },
                i
              )),
              /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600 ml-1", children: [
                "(",
                product.rating,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-gray-900", children: [
                "$",
                product.price.toFixed(2)
              ] }),
              product.originalPrice && /* @__PURE__ */ jsxs("span", { className: "text-lg text-gray-500 line-through", children: [
                "$",
                product.originalPrice.toFixed(2)
              ] })
            ] })
          ] })
        ]
      },
      index
    )) }) })
  ] }) });
};
function ProductGrid3Col({
  title,
  products,
  showQuickAdd,
  showWishlist,
  backgroundColor,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "w-full py-12",
      style: { backgroundColor },
      ...props,
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        title && /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-8", children: title }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: products.map((product, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative aspect-square overflow-hidden rounded-t-lg bg-neutral-100", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: product.image,
                    alt: product.name,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity", children: showWishlist && /* @__PURE__ */ jsx("button", { className: "p-2 bg-white rounded-full shadow-md hover:bg-neutral-50", children: /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4" }) }) }),
                product.badge && /* @__PURE__ */ jsx("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsx("span", { className: "px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded", children: product.badge }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-medium text-neutral-900 mb-1 line-clamp-2", children: product.name }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-500 mb-2 line-clamp-1", children: product.category }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold text-neutral-900", children: [
                    "$",
                    product.price
                  ] }),
                  product.originalPrice && /* @__PURE__ */ jsxs("span", { className: "text-sm text-neutral-400 line-through", children: [
                    "$",
                    product.originalPrice
                  ] })
                ] }),
                showQuickAdd && /* @__PURE__ */ jsxs("button", { className: "w-full px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsx(ShoppingCart, { className: "h-4 w-4" }),
                  "Add to Cart"
                ] })
              ] })
            ]
          },
          index
        )) })
      ] })
    }
  );
}
var CategoriesGrid = ({
  title,
  subtitle,
  categories,
  columns,
  showProductCount,
  showDescription,
  backgroundColor,
  cardStyle
}) => {
  const gridColsMap = {
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };
  const getCardClasses = () => {
    switch (cardStyle) {
      case "card":
        return "bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden";
      case "minimal":
        return "bg-white rounded-lg border border-gray-200 hover:border-gray-400 transition-colors duration-300 overflow-hidden";
      case "overlay":
        return "relative rounded-lg overflow-hidden group";
      default:
        return "";
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "py-12 px-4", style: { backgroundColor }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      title && /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-3", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `grid ${gridColsMap[columns]} gap-6`, children: categories.map((category, index) => /* @__PURE__ */ jsx(
      "a",
      {
        href: category.link,
        className: `block ${getCardClasses()}`,
        children: cardStyle === "overlay" ? (
          // Overlay style
          /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "aspect-square", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: category.image,
                alt: category.name,
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 transition-all duration-300", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-1", children: category.name }),
              showProductCount && category.productCount !== void 0 && /* @__PURE__ */ jsxs("p", { className: "text-white/90 text-sm", children: [
                category.productCount,
                " products"
              ] }),
              showDescription && category.description && /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: category.description })
            ] })
          ] })
        ) : (
          // Card and Minimal styles
          /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "aspect-square", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: category.image,
                alt: category.name,
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-1", children: category.name }),
              showProductCount && category.productCount !== void 0 && /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-sm", children: [
                category.productCount,
                " products"
              ] }),
              showDescription && category.description && /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mt-2", children: category.description })
            ] })
          ] })
        )
      },
      index
    )) })
  ] }) });
};
var CategoriesList = ({
  title,
  subtitle,
  categories,
  showProductCount,
  showIcon,
  backgroundColor
}) => {
  return /* @__PURE__ */ jsx("section", { className: "py-12 px-4", style: { backgroundColor }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      title && /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-3", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: categories.map((category, index) => /* @__PURE__ */ jsx(
      "a",
      {
        href: category.link,
        className: "flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-200 group",
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 flex-1", children: [
          showIcon && /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors", children: /* @__PURE__ */ jsx(Folder, { className: "h-6 w-6 text-blue-600" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors", children: category.name }),
            category.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: category.description })
          ] }),
          showProductCount && category.productCount !== void 0 && /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 text-sm text-gray-500 mr-2", children: [
            category.productCount,
            " ",
            category.productCount === 1 ? "item" : "items"
          ] }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" })
        ] })
      },
      index
    )) })
  ] }) });
};
var NewsletterBloc = ({
  title,
  subtitle,
  description,
  placeholderText,
  buttonText,
  showPrivacyNote,
  privacyNote,
  backgroundColor,
  textColor,
  layout,
  buttonVariant
}) => {
  const buttonVariantClasses = {
    white: "bg-white text-gray-900 hover:bg-gray-100",
    dark: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
  };
  const CenteredLayout = () => /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "inline-flex items-center justify-center w-16 h-16 rounded-full mb-6",
        style: {
          backgroundColor: `${textColor}20`
        },
        children: /* @__PURE__ */ jsx(Mail, { className: "h-8 w-8", style: { color: textColor } })
      }
    ),
    /* @__PURE__ */ jsx(
      "h2",
      {
        className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
        style: { color: textColor },
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsx(
      "p",
      {
        className: "text-xl md:text-2xl mb-4 opacity-90",
        style: { color: textColor },
        children: subtitle
      }
    ),
    description && /* @__PURE__ */ jsx(
      "p",
      {
        className: "text-base md:text-lg mb-8 opacity-80",
        style: { color: textColor },
        children: description
      }
    ),
    /* @__PURE__ */ jsxs(
      "form",
      {
        className: "flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4",
        onSubmit: (e) => e.preventDefault(),
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              placeholder: placeholderText,
              className: "flex-1 px-5 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: `px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${buttonVariantClasses[buttonVariant]}`,
              children: buttonText
            }
          )
        ]
      }
    ),
    showPrivacyNote && /* @__PURE__ */ jsxs(
      "p",
      {
        className: "text-sm opacity-70 flex items-center justify-center gap-2",
        style: { color: textColor },
        children: [
          /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
          privacyNote
        ]
      }
    )
  ] });
  const SplitLayout = () => /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 md:gap-12 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "inline-flex items-center justify-center w-14 h-14 rounded-full mb-6",
          style: {
            backgroundColor: `${textColor}20`
          },
          children: /* @__PURE__ */ jsx(Mail, { className: "h-7 w-7", style: { color: textColor } })
        }
      ),
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
          style: { color: textColor },
          children: title
        }
      ),
      subtitle && /* @__PURE__ */ jsx(
        "p",
        {
          className: "text-xl md:text-2xl mb-4 opacity-90",
          style: { color: textColor },
          children: subtitle
        }
      ),
      description && /* @__PURE__ */ jsx(
        "p",
        {
          className: "text-base md:text-lg opacity-80",
          style: { color: textColor },
          children: description
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "form",
        {
          className: "flex flex-col gap-3 mb-4",
          onSubmit: (e) => e.preventDefault(),
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: placeholderText,
                className: "w-full px-5 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: `w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${buttonVariantClasses[buttonVariant]}`,
                children: buttonText
              }
            )
          ]
        }
      ),
      showPrivacyNote && /* @__PURE__ */ jsxs(
        "p",
        {
          className: "text-sm opacity-70 flex items-center gap-2",
          style: { color: textColor },
          children: [
            /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
            privacyNote
          ]
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ jsx("section", { className: "py-16 px-4 md:py-20", style: { backgroundColor }, children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: layout === "centered" ? /* @__PURE__ */ jsx(CenteredLayout, {}) : /* @__PURE__ */ jsx(SplitLayout, {}) }) });
};
function NewsletterInline({
  title,
  description,
  placeholder,
  buttonText,
  backgroundColor,
  textColor,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "w-full py-12",
      style: { backgroundColor, color: textColor },
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4", children: /* @__PURE__ */ jsx(Mail, { className: "h-8 w-8 text-primary-600" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-2", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-600", children: description })
        ] }),
        /* @__PURE__ */ jsxs("form", { className: "flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              placeholder,
              className: "flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500",
              required: true
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors whitespace-nowrap",
              children: buttonText
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mt-4", children: "We respect your privacy. Unsubscribe at any time." })
      ] }) })
    }
  );
}
var BannerPromo = ({
  title,
  subtitle,
  description,
  decorated,
  ctaText,
  ctaLink,
  backgroundImage,
  backgroundColor,
  textColor,
  badgeText,
  badgeColor,
  showCountdown,
  countdownEndDate
}) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    if (!showCountdown || !countdownEndDate) return;
    const calculateTimeLeft = () => {
      const difference = new Date(countdownEndDate).getTime() - (/* @__PURE__ */ new Date()).getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1e3 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1e3 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1e3 / 60 % 60),
          seconds: Math.floor(difference / 1e3 % 60)
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1e3);
    return () => clearInterval(timer);
  }, [showCountdown, countdownEndDate]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative py-12 px-6 overflow-hidden",
      style: {
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      children: [
        decorated ? /* @__PURE__ */ jsxs(Fragment, { children: [
          "  ",
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" }),
          " "
        ] }) : "",
        /* @__PURE__ */ jsx("div", { className: "relative max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center md:text-left", children: [
            badgeText && /* @__PURE__ */ jsx(
              "span",
              {
                className: "inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4",
                style: { backgroundColor: badgeColor, color: "#ffffff" },
                children: badgeText
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2 uppercase tracking-wider opacity-90", style: { color: textColor }, children: subtitle }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", style: { color: textColor }, children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl mb-6 opacity-90", style: { color: textColor }, children: description }),
            showCountdown && countdownEndDate && /* @__PURE__ */ jsx("div", { className: "flex gap-4 justify-center md:justify-start mb-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5", style: { color: textColor } }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2 font-mono text-lg font-bold", style: { color: textColor }, children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  String(timeLeft.days).padStart(2, "0"),
                  "d"
                ] }),
                /* @__PURE__ */ jsx("span", { children: ":" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  String(timeLeft.hours).padStart(2, "0"),
                  "h"
                ] }),
                /* @__PURE__ */ jsx("span", { children: ":" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  String(timeLeft.minutes).padStart(2, "0"),
                  "m"
                ] }),
                /* @__PURE__ */ jsx("span", { children: ":" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  String(timeLeft.seconds).padStart(2, "0"),
                  "s"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: ctaLink,
                className: "inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg",
                children: [
                  ctaText,
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx("div", { className: "w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-center", children: /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold", style: { color: textColor }, children: badgeText || "50%" }) }) }) })
        ] }) })
      ]
    }
  );
};
var PartnersGrid = ({
  title,
  subtitle,
  partners,
  backgroundColor,
  logoGrayscale,
  columns = 4
}) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16 px-6", style: { backgroundColor }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `grid ${gridCols[columns]} gap-8 md:gap-12`, children: partners.map((partner, index) => {
      const PartnerContent = /* @__PURE__ */ jsx(
        "div",
        {
          className: `
                  flex items-center justify-center p-6
                  transition-all duration-300
                  ${logoGrayscale ? "grayscale hover:grayscale-0" : ""}
                  opacity-60 hover:opacity-100
                `,
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: partner.logo,
              alt: partner.name,
              className: "max-w-full max-h-16 object-contain"
            }
          )
        }
      );
      return partner.url ? /* @__PURE__ */ jsx(
        "a",
        {
          href: partner.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "block",
          children: PartnerContent
        },
        index
      ) : /* @__PURE__ */ jsx("div", { children: PartnerContent }, index);
    }) }),
    partners.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center py-12 text-gray-500", children: "No partners added yet" })
  ] }) });
};
var TestimonialsGrid = ({
  title,
  subtitle,
  testimonials,
  columns,
  showAvatar,
  backgroundColor,
  cardBackground
}) => {
  const gridColsMap = {
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16 px-4", style: { backgroundColor }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      title && /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-3", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `grid ${gridColsMap[columns]} gap-6 lg:gap-8`, children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300",
        style: { backgroundColor: cardBackground },
        children: [
          /* @__PURE__ */ jsx(Quote, { className: "h-8 w-8 text-blue-500 mb-4" }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-4", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(
            Star,
            {
              className: `h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`
            },
            i
          )) }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-700 mb-6 leading-relaxed", children: [
            '"',
            testimonial.content,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-4 border-t border-gray-200", children: [
            showAvatar && testimonial.avatar && /* @__PURE__ */ jsx(
              "img",
              {
                src: testimonial.avatar,
                alt: testimonial.name,
                className: "w-12 h-12 rounded-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-gray-900", children: testimonial.name }),
              (testimonial.role || testimonial.company) && /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
                testimonial.role,
                testimonial.role && testimonial.company && " \u2022 ",
                testimonial.company
              ] })
            ] })
          ] })
        ]
      },
      index
    )) })
  ] }) });
};
var TestimonialsSlider = ({
  title,
  subtitle,
  testimonials,
  autoplay,
  autoplayInterval,
  showNavigation,
  showDots,
  backgroundColor,
  cardBackground
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);
  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prev) => prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, [testimonials.length]);
  const goToNext = useCallback(() => {
    setCurrentIndex(
      (prev) => prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, [testimonials.length]);
  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return;
    const interval = setInterval(goToNext, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, goToNext, testimonials.length]);
  if (testimonials.length === 0) {
    return /* @__PURE__ */ jsx("section", { className: "py-12 px-4", style: { backgroundColor }, children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "No testimonials available" }) }) });
  }
  const currentTestimonial = testimonials[currentIndex];
  return /* @__PURE__ */ jsx("section", { className: "py-16 px-4", style: { backgroundColor }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      title && /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-3", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: subtitle })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      showNavigation && testimonials.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: goToPrevious,
            className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-700 hover:text-gray-900",
            "aria-label": "Previous testimonial",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-6 w-6" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: goToNext,
            className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-700 hover:text-gray-900",
            "aria-label": "Next testimonial",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-6 w-6" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500",
          style: { backgroundColor: cardBackground },
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(
              Star,
              {
                className: `h-5 w-5 ${i < currentTestimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`
              },
              i
            )) }),
            /* @__PURE__ */ jsx("blockquote", { className: "text-center mb-8", children: /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-gray-700 leading-relaxed italic", children: [
              '"',
              currentTestimonial.content,
              '"'
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
              currentTestimonial.avatar && /* @__PURE__ */ jsx(
                "img",
                {
                  src: currentTestimonial.avatar,
                  alt: currentTestimonial.name,
                  className: "w-16 h-16 rounded-full object-cover mb-4 border-2 border-gray-200"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-gray-900 text-lg", children: currentTestimonial.name }),
                (currentTestimonial.role || currentTestimonial.company) && /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-sm", children: [
                  currentTestimonial.role,
                  currentTestimonial.role && currentTestimonial.company && " at ",
                  currentTestimonial.company
                ] })
              ] })
            ] })
          ]
        }
      ),
      showDots && testimonials.length > 1 && /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-8", children: testimonials.map((_, index) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => goToSlide(index),
          className: `h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-gray-300 hover:bg-gray-400"}`,
          "aria-label": `Go to testimonial ${index + 1}`
        },
        index
      )) })
    ] })
  ] }) });
};
var heroSimpleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().optional(),
  buttonText: z.string().optional(),
  buttonLink: z.string().optional(),
  backgroundImage: z.string().optional(),
  textAlign: z.enum(["left", "center", "right"]).default("center"),
  overlayOpacity: z.number().min(0).max(1).default(0.4),
  textColor: z.string().default("#ffffff"),
  minHeight: z.string().default("500px")
});
var heroModernSchema = z.object({
  badge: z.string().optional(),
  title: z.string().default("Transform Your Business"),
  subtitle: z.string().default("Build amazing digital experiences"),
  description: z.string().default("Powerful tools and features to help you create stunning websites and applications that convert"),
  primaryCta: z.object({
    text: z.string().default("Get Started"),
    link: z.string().default("#")
  }),
  secondaryCta: z.object({
    text: z.string().default("Learn More"),
    link: z.string().default("#")
  }).optional(),
  heroImage: z.string().optional(),
  features: z.array(
    z.object({
      icon: z.string(),
      text: z.string()
    })
  ).default([]),
  backgroundColor: z.string().default("#0f172a"),
  textColor: z.string().default("#ffffff"),
  showStats: z.boolean().default(true),
  stats: z.array(
    z.object({
      value: z.string(),
      label: z.string()
    })
  ).default([])
});
var heroSliderSchema = z.object({
  slides: z.array(
    z.object({
      heading: z.string(),
      subheading: z.string().optional(),
      backgroundImage: z.string(),
      primaryButton: z.object({
        text: z.string(),
        link: z.string()
      }).optional(),
      secondaryButton: z.object({
        text: z.string(),
        link: z.string()
      }).optional()
    })
  ).default([]),
  autoplay: z.boolean().default(true),
  autoplayInterval: z.number().default(5e3),
  showNavigation: z.boolean().default(true),
  showDots: z.boolean().default(true),
  overlayOpacity: z.number().min(0).max(1).default(0.4),
  overlayColor: z.string().default("#000000"),
  textColor: z.string().default("#ffffff"),
  textAlign: z.enum(["left", "center", "right"]).default("center"),
  minHeight: z.string().default("600px")
});
var heroVideoSchema = z.object({
  heading: z.string().default("Welcome to Our Platform"),
  subheading: z.string().default("Transform your business with innovative solutions"),
  videoUrl: z.string().default(""),
  posterImage: z.string().optional(),
  primaryButton: z.object({
    text: z.string(),
    link: z.string(),
    variant: z.enum(["primary", "secondary", "outline", "ghost"]).default("primary")
  }).optional(),
  secondaryButton: z.object({
    text: z.string(),
    link: z.string(),
    variant: z.enum(["primary", "secondary", "outline", "ghost"]).default("outline")
  }).optional(),
  overlayOpacity: z.number().min(0).max(1).default(0.5),
  overlayColor: z.string().default("#000000"),
  textColor: z.string().default("#ffffff"),
  textAlign: z.enum(["left", "center", "right"]).default("center"),
  minHeight: z.string().default("600px"),
  autoplay: z.boolean().default(true),
  loop: z.boolean().default(true),
  muted: z.boolean().default(true)
});
var headerModerneSchema = z.object({
  logo: z.string().optional(),
  siteName: z.string().default("Brand"),
  navigation: z.array(
    z.object({
      label: z.string(),
      url: z.string()
    })
  ).default([]),
  showSearch: z.boolean().default(true),
  searchPlaceholder: z.string().default("Search..."),
  primaryCta: z.object({
    text: z.string(),
    url: z.string()
  }).optional(),
  backgroundColor: z.string().default("#ffffff"),
  textColor: z.string().default("#1f2937"),
  sticky: z.boolean().default(true)
});
var headerMinimalisteSchema = z.object({
  logo: z.object({
    text: z.string().default("Brand"),
    image: z.string().optional()
  }),
  navigation: z.array(
    z.object({
      label: z.string(),
      href: z.string()
    })
  ).default([
    { label: "Home", href: "#" },
    { label: "Shop", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" }
  ]),
  ctaButton: z.object({
    text: z.string().default("Sign In"),
    href: z.string().default("#")
  }),
  backgroundColor: z.string().default("#ffffff"),
  textColor: z.string().default("#000000"),
  sticky: z.boolean().default(true)
});
var headerCompletSchema = z.object({
  logo: z.object({
    text: z.string().default("E-Shop"),
    image: z.string().optional()
  }),
  navigation: z.array(
    z.object({
      label: z.string(),
      href: z.string()
    })
  ).default([]),
  showSearch: z.boolean().default(true),
  showCart: z.boolean().default(true),
  showAccount: z.boolean().default(true),
  backgroundColor: z.string().default("#ffffff"),
  textColor: z.string().default("#000000"),
  sticky: z.boolean().default(true),
  showTopBar: z.boolean().default(true),
  topBarMessage: z.string().default("Free shipping on orders over $50")
});
var footerSimpleSchema = z.object({
  logo: z.object({
    text: z.string().default("Brand"),
    image: z.string().optional()
  }),
  description: z.string().default(
    "Your trusted e-commerce platform for quality products and excellent service."
  ),
  links: z.array(
    z.object({
      label: z.string(),
      href: z.string()
    })
  ).default([
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" }
  ]),
  socialLinks: z.array(
    z.object({
      platform: z.string(),
      href: z.string()
    })
  ).default([
    { platform: "Facebook", href: "#" },
    { platform: "Twitter", href: "#" },
    { platform: "Instagram", href: "#" }
  ]),
  copyright: z.string().default("\xA9 2024 Your Company. All rights reserved."),
  backgroundColor: z.string().default("#ffffff"),
  textColor: z.string().default("#000000")
});
var footerCompletSchema = z.object({
  logo: z.string().optional(),
  companyName: z.string().default("Company Name"),
  tagline: z.string().optional(),
  description: z.string().optional(),
  columns: z.array(
    z.object({
      title: z.string(),
      links: z.array(
        z.object({
          label: z.string(),
          url: z.string()
        })
      )
    })
  ).default([]),
  showNewsletter: z.boolean().default(true),
  newsletterTitle: z.string().default("Subscribe to our newsletter"),
  newsletterDescription: z.string().optional(),
  socialLinks: z.array(
    z.object({
      platform: z.string(),
      url: z.string(),
      icon: z.string()
    })
  ).default([]),
  bottomLinks: z.array(
    z.object({
      label: z.string(),
      url: z.string()
    })
  ).default([]),
  copyright: z.string().default("\xA9 2025 Company Name. All rights reserved."),
  backgroundColor: z.string().default("#1f2937"),
  textColor: z.string().default("#ffffff"),
  linkHoverColor: z.string().default("#60a5fa")
});
var footerCentreSchema = z.object({
  logo: z.string().optional(),
  companyName: z.string().default("Company Name"),
  description: z.string().optional(),
  links: z.array(
    z.object({
      label: z.string(),
      url: z.string()
    })
  ).default([]),
  socialLinks: z.array(
    z.object({
      platform: z.string(),
      url: z.string()
    })
  ).default([]),
  copyright: z.string().default("\xA9 2025 Company Name. All rights reserved."),
  backgroundColor: z.string().default("#1f2937"),
  textColor: z.string().default("#ffffff")
});
var productFeaturedSchema = z.object({
  productName: z.string().default("Premium Product"),
  tagline: z.string().default("NEW ARRIVAL"),
  description: z.string().default("Discover our latest premium product with exceptional quality and design"),
  price: z.string().default("$299"),
  originalPrice: z.string().optional(),
  features: z.array(z.string()).default([]),
  productImage: z.string().default("https://via.placeholder.com/600x600"),
  ctaText: z.string().default("Shop Now"),
  ctaLink: z.string().default("#"),
  secondaryCtaText: z.string().optional(),
  secondaryCtaLink: z.string().optional(),
  backgroundColor: z.string().default("#f9fafb"),
  imagePosition: z.enum(["left", "right"]).default("right")
});
var productShowcaseSchema = z.object({
  title: z.string().default("Featured Products"),
  subtitle: z.string().optional(),
  products: z.array(
    z.object({
      name: z.string(),
      image: z.string(),
      price: z.string(),
      originalPrice: z.string().optional(),
      badge: z.string().optional(),
      rating: z.number().min(0).max(5).optional(),
      link: z.string().default("#")
    })
  ).default([]),
  columns: z.number().min(2).max(4).default(3),
  showViewAll: z.boolean().default(true),
  viewAllText: z.string().default("View All Products"),
  viewAllLink: z.string().default("#")
});
var productGrid2ColSchema = z.object({
  title: z.string().default("Featured Products"),
  subtitle: z.string().optional(),
  products: z.array(
    z.object({
      name: z.string(),
      category: z.string().optional(),
      price: z.number(),
      originalPrice: z.number().optional(),
      image: z.string(),
      badge: z.string().optional(),
      rating: z.number().min(0).max(5).optional()
    })
  ).default([]),
  showQuickAdd: z.boolean().default(true),
  showWishlist: z.boolean().default(true),
  showRating: z.boolean().default(false),
  imageAspectRatio: z.enum(["square", "portrait", "landscape"]).default("portrait"),
  backgroundColor: z.string().default("#ffffff")
});
var productGrid3ColSchema = z.object({
  title: z.string().default("Featured Products"),
  products: z.array(
    z.object({
      name: z.string(),
      category: z.string(),
      price: z.number(),
      originalPrice: z.number().optional(),
      image: z.string(),
      badge: z.string().optional()
    })
  ).default([
    {
      name: "Product Name 1",
      category: "Category",
      price: 29.99,
      image: "https://via.placeholder.com/400x400"
    },
    {
      name: "Product Name 2",
      category: "Category",
      price: 39.99,
      originalPrice: 49.99,
      image: "https://via.placeholder.com/400x400",
      badge: "Sale"
    },
    {
      name: "Product Name 3",
      category: "Category",
      price: 24.99,
      image: "https://via.placeholder.com/400x400"
    }
  ]),
  showQuickAdd: z.boolean().default(true),
  showWishlist: z.boolean().default(true),
  backgroundColor: z.string().default("#ffffff")
});
var categoriesGridSchema = z.object({
  title: z.string().default("Shop by Category"),
  subtitle: z.string().optional(),
  categories: z.array(
    z.object({
      name: z.string(),
      description: z.string().optional(),
      image: z.string(),
      productCount: z.number().optional(),
      link: z.string().default("#")
    })
  ).default([]),
  columns: z.enum(["2", "3", "4"]).default("4"),
  showProductCount: z.boolean().default(true),
  showDescription: z.boolean().default(false),
  backgroundColor: z.string().default("#ffffff"),
  cardStyle: z.enum(["card", "minimal", "overlay"]).default("card")
});
var categoriesListSchema = z.object({
  title: z.string().default("Browse Categories"),
  subtitle: z.string().optional(),
  categories: z.array(
    z.object({
      name: z.string(),
      description: z.string().optional(),
      icon: z.string().optional(),
      productCount: z.number().optional(),
      link: z.string().default("#")
    })
  ).default([]),
  showProductCount: z.boolean().default(true),
  showIcon: z.boolean().default(true),
  backgroundColor: z.string().default("#ffffff")
});
var newsletterBlocSchema = z.object({
  title: z.string().default("Stay Updated"),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  placeholderText: z.string().default("Enter your email"),
  buttonText: z.string().default("Subscribe"),
  showPrivacyNote: z.boolean().default(true),
  privacyNote: z.string().default("We respect your privacy. Unsubscribe at any time."),
  backgroundColor: z.string().default("#3b82f6"),
  textColor: z.string().default("#ffffff"),
  layout: z.enum(["centered", "split"]).default("centered"),
  buttonVariant: z.enum(["white", "dark", "outline"]).default("white")
});
var newsletterInlineSchema = z.object({
  title: z.string().default("Stay Updated"),
  description: z.string().default("Subscribe to our newsletter and get the latest updates."),
  placeholder: z.string().default("Enter your email"),
  buttonText: z.string().default("Subscribe"),
  backgroundColor: z.string().default("#f9fafb"),
  textColor: z.string().default("#000000")
});
var bannerPromoSchema = z.object({
  title: z.string().default("Special Offer"),
  subtitle: z.string().default("Limited Time Only"),
  description: z.string().default("Get up to 50% off on selected items"),
  ctaText: z.string().default("Shop Now"),
  ctaLink: z.string().default("#"),
  backgroundImage: z.string().optional(),
  backgroundColor: z.string().default("#3b82f6"),
  textColor: z.string().default("#ffffff"),
  badgeText: z.string().optional(),
  badgeColor: z.string().default("#ef4444"),
  showCountdown: z.boolean().default(false),
  countdownEndDate: z.string().optional(),
  decorated: z.boolean().optional()
});
var partnersGridSchema = z.object({
  title: z.string().default("Our Partners"),
  subtitle: z.string().optional(),
  partners: z.array(
    z.object({
      name: z.string(),
      logo: z.string(),
      url: z.string().optional()
    })
  ).default([]),
  backgroundColor: z.string().default("#ffffff"),
  logoGrayscale: z.boolean().default(true),
  columns: z.number().min(2).max(6).default(4)
});
var testimonialsGridSchema = z.object({
  title: z.string().default("Customer Reviews"),
  subtitle: z.string().optional(),
  testimonials: z.array(
    z.object({
      name: z.string(),
      role: z.string().optional(),
      company: z.string().optional(),
      avatar: z.string().optional(),
      rating: z.number().min(1).max(5).default(5),
      content: z.string()
    })
  ).default([]),
  columns: z.enum(["2", "3"]).default("3"),
  showAvatar: z.boolean().default(true),
  backgroundColor: z.string().default("#ffffff"),
  cardBackground: z.string().default("#f9fafb")
});
var testimonialsSliderSchema = z.object({
  title: z.string().default("What Our Customers Say"),
  subtitle: z.string().optional(),
  testimonials: z.array(
    z.object({
      name: z.string(),
      role: z.string().optional(),
      company: z.string().optional(),
      avatar: z.string().optional(),
      rating: z.number().min(1).max(5).default(5),
      content: z.string()
    })
  ).default([]),
  autoplay: z.boolean().default(true),
  autoplayInterval: z.number().default(5e3),
  // ms
  showNavigation: z.boolean().default(true),
  showDots: z.boolean().default(true),
  backgroundColor: z.string().default("#f9fafb"),
  cardBackground: z.string().default("#ffffff")
});

export { BannerPromo, CategoriesGrid, CategoriesList, FooterCentre, FooterComplet, FooterSimple, HeaderComplet, HeaderMinimaliste, HeaderModerne, HeroModern, HeroSimple, HeroSlider, HeroVideo, NewsletterBloc, NewsletterInline, PartnersGrid, ProductFeatured, ProductGrid2Col, ProductGrid3Col, ProductShowcase, TestimonialsGrid, TestimonialsSlider, bannerPromoSchema, categoriesGridSchema, categoriesListSchema, cn, footerCentreSchema, footerCompletSchema, footerSimpleSchema, headerCompletSchema, headerMinimalisteSchema, headerModerneSchema, heroModernSchema, heroSimpleSchema, heroSliderSchema, heroVideoSchema, newsletterBlocSchema, newsletterInlineSchema, partnersGridSchema, productFeaturedSchema, productGrid2ColSchema, productGrid3ColSchema, productShowcaseSchema, testimonialsGridSchema, testimonialsSliderSchema };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map