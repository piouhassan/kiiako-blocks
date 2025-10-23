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

// Export schemas for validation
export { heroSimpleSchema } from './blocks/hero/hero-simple/schema';
export { heroModernSchema } from './blocks/hero/hero-modern/schema';
export { heroSliderSchema } from './blocks/hero/hero-slider/schema';
export { heroVideoSchema } from './blocks/hero/hero-video/schema';

export { headerModerneSchema } from './blocks/header/header-moderne/schema';
export { headerMinimalisteSchema } from './blocks/header/header-minimaliste/schema';
export { headerCompletSchema } from './blocks/header/header-complet/schema';

export { footerSimpleSchema } from './blocks/footer/footer-simple/schema';
export { footerCompletSchema } from './blocks/footer/footer-complet/schema';
export { footerCentreSchema } from './blocks/footer/footer-centre/schema';

export { productFeaturedSchema } from './blocks/products/product-featured/schema';
export { productShowcaseSchema } from './blocks/products/product-showcase/schema';

export { productGrid2ColSchema } from './blocks/product-grid/product-grid-2col/schema';
export { productGrid3ColSchema } from './blocks/product-grid/product-grid-3col/schema';

export { categoriesGridSchema } from './blocks/categories/categories-grid/schema';
export { categoriesListSchema } from './blocks/categories/categories-list/schema';

export { newsletterBlocSchema } from './blocks/newsletter/newsletter-bloc/schema';
export { newsletterInlineSchema } from './blocks/newsletter/newsletter-inline/schema';

export { bannerPromoSchema } from './blocks/banners/banner-promo/schema';

export { partnersGridSchema } from './blocks/partners/partners-grid/schema';

export { testimonialsGridSchema } from './blocks/testimonials/testimonials-grid/schema';
export { testimonialsSliderSchema } from './blocks/testimonials/testimonials-slider/schema';

// Export utilities
export { cn } from './utils/cn';

// Re-export types from @kiiako/render for convenience
export type {
  BlockInstance,
  BlockDefinition,
  Category,
  ComponentDefinition,
} from '@kiiako/render';
