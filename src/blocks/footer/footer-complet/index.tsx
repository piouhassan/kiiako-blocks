import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import type { FooterCompletProps } from './schema';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

export const FooterComplet: React.FC<FooterCompletProps> = ({
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
  linkHoverColor,
}) => {
  return (
    <footer style={{ backgroundColor, color: textColor }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info + Newsletter */}
          <div className="lg:col-span-4">
            {/* Logo and Company Info */}
            <div className="mb-6">
              {logo ? (
                <img src={logo} alt={companyName} className="h-10 mb-4" />
              ) : (
                <h3 className="text-2xl font-bold mb-2">{companyName}</h3>
              )}
              {tagline && (
                <p className="text-sm opacity-80 mb-3">{tagline}</p>
              )}
              {description && (
                <p className="text-sm opacity-70 leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            {/* Newsletter */}
            {showNewsletter && (
              <div className="mt-8">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  {newsletterTitle}
                </h4>
                {newsletterDescription && (
                  <p className="text-sm opacity-70 mb-3">
                    {newsletterDescription}
                  </p>
                )}
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 rounded font-medium transition-colors"
                    style={{
                      backgroundColor: linkHoverColor,
                      color: backgroundColor,
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-8">
            <div className={`grid grid-cols-2 md:grid-cols-${Math.min(columns.length, 4)} gap-8`}>
              {columns.map((column, columnIndex) => (
                <div key={columnIndex}>
                  <h4 className="font-semibold mb-4 text-lg">{column.title}</h4>
                  <ul className="space-y-3">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                          style={{
                            '--hover-color': linkHoverColor,
                          } as React.CSSProperties}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = linkHoverColor;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = textColor;
                          }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="border-t border-white/10"
        style={{ borderColor: `${textColor}20` }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm opacity-70">{copyright}</p>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = iconMap[social.platform.toLowerCase()];
                  return IconComponent ? (
                    <a
                      key={index}
                      href={social.url}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                      aria-label={social.platform}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = linkHoverColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = textColor;
                      }}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  ) : null;
                })}
              </div>
            )}

            {/* Bottom Links */}
            {bottomLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {bottomLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = linkHoverColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = textColor;
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
