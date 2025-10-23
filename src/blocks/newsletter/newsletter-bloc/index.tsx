import React from 'react';
import { Mail, Shield } from 'lucide-react';
import type { NewsletterBlocProps } from './schema';

export const NewsletterBloc: React.FC<NewsletterBlocProps> = ({
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
  buttonVariant,
}) => {
  const buttonVariantClasses: Record<'white' | 'dark' | 'outline', string> = {
    white: 'bg-white text-gray-900 hover:bg-gray-100',
    dark: 'bg-gray-900 text-white hover:bg-gray-800',
    outline: 'border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900',
  };

  const CenteredLayout = () => (
    <div className="text-center max-w-2xl mx-auto">
      {/* Icon */}
      <div
        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
        style={{
          backgroundColor: `${textColor}20`,
        }}
      >
        <Mail className="h-8 w-8" style={{ color: textColor }} />
      </div>

      {/* Text Content */}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        style={{ color: textColor }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-xl md:text-2xl mb-4 opacity-90"
          style={{ color: textColor }}
        >
          {subtitle}
        </p>
      )}
      {description && (
        <p
          className="text-base md:text-lg mb-8 opacity-80"
          style={{ color: textColor }}
        >
          {description}
        </p>
      )}

      {/* Form */}
      <form
        className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder={placeholderText}
          className="flex-1 px-5 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${buttonVariantClasses[buttonVariant]}`}
        >
          {buttonText}
        </button>
      </form>

      {/* Privacy Note */}
      {showPrivacyNote && (
        <p
          className="text-sm opacity-70 flex items-center justify-center gap-2"
          style={{ color: textColor }}
        >
          <Shield className="h-4 w-4" />
          {privacyNote}
        </p>
      )}
    </div>
  );

  const SplitLayout = () => (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Left Side - Text Content */}
      <div>
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6"
          style={{
            backgroundColor: `${textColor}20`,
          }}
        >
          <Mail className="h-7 w-7" style={{ color: textColor }} />
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          style={{ color: textColor }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="text-xl md:text-2xl mb-4 opacity-90"
            style={{ color: textColor }}
          >
            {subtitle}
          </p>
        )}
        {description && (
          <p
            className="text-base md:text-lg opacity-80"
            style={{ color: textColor }}
          >
            {description}
          </p>
        )}
      </div>

      {/* Right Side - Form */}
      <div>
        <form
          className="flex flex-col gap-3 mb-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder={placeholderText}
            className="w-full px-5 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${buttonVariantClasses[buttonVariant]}`}
          >
            {buttonText}
          </button>
        </form>

        {/* Privacy Note */}
        {showPrivacyNote && (
          <p
            className="text-sm opacity-70 flex items-center gap-2"
            style={{ color: textColor }}
          >
            <Shield className="h-4 w-4" />
            {privacyNote}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 md:py-20" style={{ backgroundColor }}>
      <div className="max-w-6xl mx-auto">
        {layout === 'centered' ? <CenteredLayout /> : <SplitLayout />}
      </div>
    </section>
  );
};
