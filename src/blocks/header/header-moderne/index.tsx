import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import type { HeaderModerneProps } from './schema';

export const HeaderModerne: React.FC<HeaderModerneProps> = ({
  logo,
  siteName,
  navigation,
  showSearch,
  searchPlaceholder,
  primaryCta,
  backgroundColor,
  textColor,
  sticky,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`w-full border-b border-gray-200 ${sticky ? 'sticky top-0 z-50' : ''}`}
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              {logo ? (
                <img src={logo} alt={siteName} className="h-8 md:h-10" />
              ) : (
                <span className="text-xl md:text-2xl font-bold" style={{ color: textColor }}>
                  {siteName}
                </span>
              )}
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{ color: textColor }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            {showSearch && (
              <div className="hidden md:flex items-center">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
                    style={{ color: `${textColor}60` }}
                  />
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 lg:w-64"
                    style={{ color: textColor }}
                  />
                </div>
              </div>
            )}

            {/* Icons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="h-5 w-5" style={{ color: textColor }} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingCart className="h-5 w-5" style={{ color: textColor }} />
                <span className="absolute top-0 right-0 h-4 w-4 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>

            {/* CTA */}
            {primaryCta && (
              <a
                href={primaryCta.url}
                className="hidden md:inline-flex px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                {primaryCta.text}
              </a>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" style={{ color: textColor }} />
              ) : (
                <Menu className="h-6 w-6" style={{ color: textColor }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {/* Mobile Search */}
            {showSearch && (
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-3">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors"
                  style={{ color: textColor }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile CTA */}
            {primaryCta && (
              <a
                href={primaryCta.url}
                className="mt-4 block text-center px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium"
              >
                {primaryCta.text}
              </a>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
