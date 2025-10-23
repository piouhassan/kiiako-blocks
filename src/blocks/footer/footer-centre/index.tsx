import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import type { FooterCentreProps } from './schema';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
};

export const FooterCentre: React.FC<FooterCentreProps> = ({
  logo,
  companyName,
  description,
  links,
  socialLinks,
  copyright,
  backgroundColor,
  textColor,
}) => {
  return (
    <footer style={{ backgroundColor, color: textColor }}>
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 text-center">
        {/* Logo/Brand */}
        <div className="mb-6">
          {logo ? (
            <img src={logo} alt={companyName} className="h-10 mx-auto mb-4" />
          ) : (
            <h3 className="text-2xl font-bold mb-3" style={{ color: textColor }}>
              {companyName}
            </h3>
          )}
          {description && (
            <p className="text-base opacity-80 max-w-md mx-auto" style={{ color: textColor }}>
              {description}
            </p>
          )}
        </div>

        {/* Links */}
        {links.length > 0 && (
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                style={{ color: textColor }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = iconMap[social.platform.toLowerCase()];
              return IconComponent ? (
                <a
                  key={index}
                  href={social.url}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={social.platform}
                  style={{ color: textColor }}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              ) : null;
            })}
          </div>
        )}

        {/* Copyright */}
        <p className="text-sm opacity-70 border-t pt-8" style={{ color: textColor, borderColor: `${textColor}20` }}>
          {copyright}
        </p>
      </div>
    </footer>
  );
};
