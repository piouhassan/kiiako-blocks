import { Mail } from 'lucide-react';
import type { NewsletterInlineProps } from './schema';

/**
 * Newsletter Inline - Composant React
 */
export function NewsletterInline({
  title,
  description,
  placeholder,
  buttonText,
  backgroundColor,
  textColor,
  ...props
}: NewsletterInlineProps) {
  return (
    <section
      className="w-full py-12"
      style={{ backgroundColor, color: textColor }}
      {...props}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Mail className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-neutral-600">{description}</p>
          </div>

          {/* Form */}
          <form className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder={placeholder}
              className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors whitespace-nowrap"
            >
              {buttonText}
            </button>
          </form>

          {/* Privacy notice */}
          <p className="text-xs text-neutral-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
