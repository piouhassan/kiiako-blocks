import { cn } from '../../../lib/cn';
import type { HeaderMinimalisteProps } from './schema';

/**
 * Header Minimaliste - Composant React
 */
export function HeaderMinimaliste({
  logo,
  navigation,
  ctaButton,
  backgroundColor,
  textColor,
  sticky,
  ...props
}: HeaderMinimalisteProps) {
  return (
    <header
      className={cn(
        'w-full border-b border-neutral-200',
        sticky && 'sticky top-0 z-50'
      )}
      style={{ backgroundColor, color: textColor }}
      {...props}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {logo.image ? (
            <img src={logo.image} alt={logo.text} className="h-8" />
          ) : (
            <span className="text-xl font-bold">{logo.text}</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* CTA Button */}
        <a
          href={ctaButton.href}
          className="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors"
        >
          {ctaButton.text}
        </a>
      </div>
    </header>
  );
}
