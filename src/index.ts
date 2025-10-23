/**
 * @kiiako/blocks - Pre-built blocks for Kiiako page builder
 *
 * Usage:
 *
 * 1. Auto-register all blocks (recommended for stores):
 *    import '@kiiako/blocks/auto-register';
 *
 * 2. Import individual blocks:
 *    import { HeroSimple, HeroModern } from '@kiiako/blocks';
 */

// Hero blocks
export { HeroSimple } from './blocks/hero/hero-simple';
export { HeroModern } from './blocks/hero/hero-modern';
export { HeroSlider } from './blocks/hero/hero-slider';
export { HeroVideo } from './blocks/hero/hero-video';

// Header blocks
export { HeaderModerne } from './blocks/header/header-moderne';
export { HeaderMinimaliste } from './blocks/header/header-minimaliste';
export { HeaderComplet } from './blocks/header/header-complet';

// Footer blocks
export { FooterSimple } from './blocks/footer/footer-simple';
export { FooterComplet } from './blocks/footer/footer-complet';
export { FooterCentre } from './blocks/footer/footer-centre';

// Products blocks
export { ProductFeatured } from './blocks/products/product-featured';
export { ProductShowcase } from './blocks/products/product-showcase';

// Product Grid blocks
export { ProductGrid2Col } from './blocks/product-grid/product-grid-2col';
export { ProductGrid3Col } from './blocks/product-grid/product-grid-3col';

// Categories blocks
export { CategoriesGrid } from './blocks/categories/categories-grid';
export { CategoriesList } from './blocks/categories/categories-list';

// Newsletter blocks
export { NewsletterBloc } from './blocks/newsletter/newsletter-bloc';
export { NewsletterInline } from './blocks/newsletter/newsletter-inline';

// Banners blocks
export { BannerPromo } from './blocks/banners/banner-promo';

// Partners blocks
export { PartnersGrid } from './blocks/partners/partners-grid';

// Testimonials blocks
export { TestimonialsGrid } from './blocks/testimonials/testimonials-grid';
export { TestimonialsSlider } from './blocks/testimonials/testimonials-slider';

// Re-export types from @kiiako/render for convenience
export type {
  BlockInstance,
  BlockDefinition,
  Category,
  ComponentDefinition,
} from '@kiiako/render';
