import type { FooterSimpleProps } from './schema';

/**
 * Footer Simple - Composant React
 */
export function FooterSimple({
  logo,
  description,
  links,
  socialLinks,
  copyright,
  backgroundColor,
  textColor,
  ...props
}: FooterSimpleProps) {
  return (
    <footer
      className="w-full border-t border-neutral-200"
      style={{ backgroundColor, color: textColor }}
      {...props}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {logo.image ? (
                <img src={logo.image} alt={logo.text} className="h-8" />
              ) : (
                <span className="text-xl font-bold">{logo.text}</span>
              )}
            </div>
            <p className="text-sm text-neutral-600 max-w-md">{description}</p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
          <p className="text-sm text-neutral-500">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
