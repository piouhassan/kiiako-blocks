import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { cn } from '../../../lib/cn';
import type { HeaderCompletProps } from './schema';

export const HeaderComplet: React.FC<HeaderCompletProps> = ({
  logo,
  navigation,
  showSearch,
  showCart,
  showAccount,
  backgroundColor,
  textColor,
  sticky,
  showTopBar,
  topBarMessage,
}) => {
  return (
    <header
      className={cn(
        'w-full border-b border-neutral-200',
        sticky && 'sticky top-0 z-50'
      )}
      style={{ backgroundColor, color: textColor }}
    >
      {/* Top Bar */}
      {showTopBar && (
        <div className="border-b border-neutral-200">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between text-xs">
              <span>{topBarMessage}</span>
              <div className="flex items-center gap-4">
                <a href="#help" className="hover:opacity-70">
                  Help
                </a>
                <a href="#track" className="hover:opacity-70">
                  Track Order
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {logo.image ? (
              <img src={logo.image} alt={logo.text} className="h-8" />
            ) : (
              <span className="text-xl font-bold">{logo.text}</span>
            )}
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="hidden md:flex flex-1 max-w-xl">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pr-10 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4">
            {showAccount && (
              <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                <User className="h-5 w-5" />
              </button>
            )}
            {showCart && (
              <button className="p-2 hover:bg-neutral-100 rounded-lg relative transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            )}
            <button className="p-2 hover:bg-neutral-100 rounded-lg md:hidden transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      {navigation.length > 0 && (
        <div className="border-t border-neutral-200">
          <div className="container mx-auto px-4">
            <nav className="hidden md:flex items-center gap-8 py-3">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
