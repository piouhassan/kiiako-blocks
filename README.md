# @kiiako/blocks

Pre-built React blocks for the Kiiako page builder. This package contains all the official blocks (hero, header, footer, products, etc.) ready to use in your Kiiako applications.

## Installation

### From GitHub

```bash
npm install github:kiiako/kiiako-blocks#v1.0.0
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@kiiako/blocks": "github:kiiako/kiiako-blocks#v1.0.0"
  }
}
```

### Required Dependencies

This package requires `@kiiako/render` to work:

```bash
npm install @kiiako/render @kiiako/blocks
```

Or from GitHub for both:

```json
{
  "dependencies": {
    "@kiiako/render": "github:kiiako/kiiako-render#v1.0.0",
    "@kiiako/blocks": "github:kiiako/kiiako-blocks#v1.0.0"
  }
}
```

## Usage

### Auto-Register All Blocks (Recommended for Stores)

The easiest way to use all blocks:

```tsx
// In your main entry point (e.g., main.tsx or App.tsx)
import '@kiiako/blocks/auto-register';
import { PageRenderer } from '@kiiako/render';

// Now all blocks are registered and ready to render
function App() {
  return <PageRenderer blocks={blocksFromAPI} />;
}
```

### Import Individual Blocks

If you only need specific blocks:

```tsx
import { categoryRegistry } from '@kiiako/render';
import { HeroSimple, FooterComplet } from '@kiiako/blocks';

// Register manually
categoryRegistry.registerBlock('hero', {
  id: 'hero-simple',
  category: 'hero',
  name: 'Hero Simple',
  component: HeroSimple,
  defaultProps: { /* ... */ },
});
```

## Available Blocks

### Hero Blocks
- `HeroSimple` - Simple hero with title, subtitle, and CTA
- `HeroModern` - Modern hero with advanced layout
- `HeroSlider` - Hero with image slider
- `HeroVideo` - Hero with background video

### Header Blocks
- `HeaderModerne` - Modern header with navigation
- `HeaderMinimaliste` - Minimal header design
- `HeaderComplet` - Complete header with all features

### Footer Blocks
- `FooterSimple` - Simple footer with links
- `FooterComplet` - Complete footer with multiple sections
- `FooterCentre` - Centered footer layout

### Product Blocks
- `ProductFeatured` - Featured product display
- `ProductShowcase` - Product showcase grid
- `ProductGrid2Col` - 2-column product grid
- `ProductGrid3Col` - 3-column product grid

### Category Blocks
- `CategoriesGrid` - Category grid layout
- `CategoriesList` - Category list layout

### Newsletter Blocks
- `NewsletterBloc` - Newsletter signup block
- `NewsletterInline` - Inline newsletter form

### Other Blocks
- `BannerPromo` - Promotional banner
- `PartnersGrid` - Partners/logos grid
- `TestimonialsGrid` - Testimonials grid
- `TestimonialsSlider` - Testimonials slider

## Using in Builder

In your builder application, import the auto-register file:

```tsx
// builder/src/main.tsx
import '@kiiako/blocks/auto-register';
import App from './App';

// All blocks are now registered and available in the builder
```

## Using in Store Client

In your store client, import the auto-register file:

```tsx
// client/src/main.tsx
import '@kiiako/blocks/auto-register';
import { PageRenderer } from '@kiiako/render';
import { useEffect, useState } from 'react';
import axios from 'axios';

function DynamicPage({ slug }: { slug: string }) {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    axios.get(`/api/pages/${slug}`)
      .then(res => setBlocks(res.data.blocks))
  }, [slug]);

  return <PageRenderer blocks={blocks} />;
}
```

## Updating Blocks

### In Builder and Client

When you update blocks in the main repository:

1. **Commit your changes** to the `@kiiako/blocks` repository
2. **Tag the new version**:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```

3. **Update in Builder**:
   ```bash
   cd builder
   npm install github:kiiako/kiiako-blocks#v1.0.1
   ```

4. **Update in Client**:
   ```bash
   cd client
   npm install github:kiiako/kiiako-blocks#v1.0.1
   ```

Or update `package.json` in both projects:

```json
{
  "dependencies": {
    "@kiiako/blocks": "github:kiiako/kiiako-blocks#v1.0.1"
  }
}
```

Then run `npm install`.

## Version Management

This package uses semantic versioning (semver):

- **MAJOR** (v2.0.0): Breaking changes (API changes, removed blocks)
- **MINOR** (v1.1.0): New blocks or features (backward compatible)
- **PATCH** (v1.0.1): Bug fixes (backward compatible)

### Creating a New Version

```bash
# 1. Make your changes
# 2. Update version in package.json
# 3. Commit and tag
git add .
git commit -m "Add new hero block variant"
git tag v1.1.0
git push origin main
git push origin v1.1.0
```

### Using Specific Versions

```json
{
  "dependencies": {
    "@kiiako/blocks": "github:kiiako/kiiako-blocks#v1.0.0",      // Exact version
    "@kiiako/blocks": "github:kiiako/kiiako-blocks#semver:^1.0.0", // Compatible with 1.x.x
    "@kiiako/blocks": "github:kiiako/kiiako-blocks#main"          // Latest from main branch (not recommended for production)
  }
}
```

## Development

### Building the Package

```bash
cd packages/blocks
npm install
npm run build
```

### Adding a New Block

1. Create block folder in `src/blocks/[category]/[block-name]`
2. Create files:
   - `index.tsx` - Block component
   - `schema.ts` - TypeScript types
   - `metadata.json` - Block metadata
3. Add to `src/index.ts` (export)
4. Add to `src/auto-register.ts` (auto-registration)
5. Build and test
6. Commit, tag, and push

## TypeScript Support

Full TypeScript support with type definitions included:

```tsx
import type { BlockInstance } from '@kiiako/render';
import { HeroSimple } from '@kiiako/blocks';

const block: BlockInstance = {
  id: 'hero-simple',
  // ... TypeScript will validate all properties
};
```

## License

MIT © Kiiako Team

## Support

For issues and questions:
- GitHub Issues: https://github.com/kiiako/kiiako-blocks/issues
- Documentation: https://docs.kiiako.com

## Related Packages

- `@kiiako/render` - Rendering engine for Kiiako blocks
- `kiiako-builder` - Visual page builder
- `kiiako-client` - Store client application
