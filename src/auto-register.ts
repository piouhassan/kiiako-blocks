/**
 * Auto-register file for all Kiiako blocks
 * Import this file to automatically register all blocks with categoryRegistry
 */

import { categoryRegistry } from '@kiiako/render';

// Hero blocks
import { HeroSimple } from './blocks/hero/hero-simple';
import heroSimpleMeta from './blocks/hero/hero-simple/metadata.json';
import heroSimpleSchema from './blocks/hero/hero-simple/schema';

import { HeroModern } from './blocks/hero/hero-modern';
import heroModernMeta from './blocks/hero/hero-modern/metadata.json';
import heroModernSchema from './blocks/hero/hero-modern/schema';

import { HeroSlider } from './blocks/hero/hero-slider';
import heroSliderMeta from './blocks/hero/hero-slider/metadata.json';
import heroSliderSchema from './blocks/hero/hero-slider/schema';

import { HeroVideo } from './blocks/hero/hero-video';
import heroVideoMeta from './blocks/hero/hero-video/metadata.json';
import heroVideoSchema from './blocks/hero/hero-video/schema';

// Header blocks
import { HeaderModerne } from './blocks/header/header-moderne';
import headerModerneMeta from './blocks/header/header-moderne/metadata.json';
import headerModerneSchema from './blocks/header/header-moderne/schema';

import { HeaderMinimaliste } from './blocks/header/header-minimaliste';
import headerMinimalisteMeta from './blocks/header/header-minimaliste/metadata.json';
import headerMinimalisteSchema from './blocks/header/header-minimaliste/schema';

import { HeaderComplet } from './blocks/header/header-complet';
import headerCompletMeta from './blocks/header/header-complet/metadata.json';
import headerCompletSchema from './blocks/header/header-complet/schema';

// Footer blocks
import { FooterSimple } from './blocks/footer/footer-simple';
import footerSimpleMeta from './blocks/footer/footer-simple/metadata.json';
import footerSimpleSchema from './blocks/footer/footer-simple/schema';

import { FooterComplet } from './blocks/footer/footer-complet';
import footerCompletMeta from './blocks/footer/footer-complet/metadata.json';
import footerCompletSchema from './blocks/footer/footer-complet/schema';

import { FooterCentre } from './blocks/footer/footer-centre';
import footerCentreMeta from './blocks/footer/footer-centre/metadata.json';
import footerCentreSchema from './blocks/footer/footer-centre/schema';

// Products blocks
import { ProductFeatured } from './blocks/products/product-featured';
import productFeaturedMeta from './blocks/products/product-featured/metadata.json';
import productFeaturedSchema from './blocks/products/product-featured/schema';

import { ProductShowcase } from './blocks/products/product-showcase';
import productShowcaseMeta from './blocks/products/product-showcase/metadata.json';
import productShowcaseSchema from './blocks/products/product-showcase/schema';

// Product Grid blocks
import { ProductGrid2Col } from './blocks/product-grid/product-grid-2col';
import productGrid2ColMeta from './blocks/product-grid/product-grid-2col/metadata.json';
import productGrid2ColSchema from './blocks/product-grid/product-grid-2col/schema';

import { ProductGrid3Col } from './blocks/product-grid/product-grid-3col';
import productGrid3ColMeta from './blocks/product-grid/product-grid-3col/metadata.json';
import productGrid3ColSchema from './blocks/product-grid/product-grid-3col/schema';

// Categories blocks
import { CategoriesGrid } from './blocks/categories/categories-grid';
import categoriesGridMeta from './blocks/categories/categories-grid/metadata.json';
import categoriesGridSchema from './blocks/categories/categories-grid/schema';

import { CategoriesList } from './blocks/categories/categories-list';
import categoriesListMeta from './blocks/categories/categories-list/metadata.json';
import categoriesListSchema from './blocks/categories/categories-list/schema';

// Newsletter blocks
import { NewsletterBloc } from './blocks/newsletter/newsletter-bloc';
import newsletterBlocMeta from './blocks/newsletter/newsletter-bloc/metadata.json';
import newsletterBlocSchema from './blocks/newsletter/newsletter-bloc/schema';

import { NewsletterInline } from './blocks/newsletter/newsletter-inline';
import newsletterInlineMeta from './blocks/newsletter/newsletter-inline/metadata.json';
import newsletterInlineSchema from './blocks/newsletter/newsletter-inline/schema';

// Banners blocks
import { BannerPromo } from './blocks/banners/banner-promo';
import bannerPromoMeta from './blocks/banners/banner-promo/metadata.json';
import bannerPromoSchema from './blocks/banners/banner-promo/schema';

// Partners blocks
import { PartnersGrid } from './blocks/partners/partners-grid';
import partnersGridMeta from './blocks/partners/partners-grid/metadata.json';
import partnersGridSchema from './blocks/partners/partners-grid/schema';

// Testimonials blocks
import { TestimonialsGrid } from './blocks/testimonials/testimonials-grid';
import testimonialsGridMeta from './blocks/testimonials/testimonials-grid/metadata.json';
import testimonialsGridSchema from './blocks/testimonials/testimonials-grid/schema';

import { TestimonialsSlider } from './blocks/testimonials/testimonials-slider';
import testimonialsSliderMeta from './blocks/testimonials/testimonials-slider/metadata.json';
import testimonialsSliderSchema from './blocks/testimonials/testimonials-slider/schema';

// Define categories
const categories = [
  { id: 'hero', name: 'hero', label: 'Hero', order: 1, blocks: [], enabled: true },
  { id: 'header', name: 'header', label: 'Header', order: 0, blocks: [], enabled: true },
  { id: 'footer', name: 'footer', label: 'Footer', order: 10, blocks: [], enabled: true },
  { id: 'products', name: 'products', label: 'Products', order: 3, blocks: [], enabled: true },
  { id: 'product-grid', name: 'product-grid', label: 'Product Grid', order: 4, blocks: [], enabled: true },
  { id: 'categories', name: 'categories', label: 'Categories', order: 5, blocks: [], enabled: true },
  { id: 'newsletter', name: 'newsletter', label: 'Newsletter', order: 6, blocks: [], enabled: true },
  { id: 'banners', name: 'banners', label: 'Banners', order: 7, blocks: [], enabled: true },
  { id: 'partners', name: 'partners', label: 'Partners', order: 8, blocks: [], enabled: true },
  { id: 'testimonials', name: 'testimonials', label: 'Testimonials', order: 9, blocks: [], enabled: true },
];

// Register all categories
categories.forEach((cat) => categoryRegistry.registerCategory(cat));

// Helper function to register a block
function registerBlock(component: any, metadata: any, schema: any) {
  const blockId = metadata.name.toLowerCase().replace(/\s+/g, '-');

  categoryRegistry.registerBlock(metadata.category, {
    id: blockId,
    category: metadata.category,
    name: metadata.name,
    label: metadata.name,
    description: metadata.description,
    component,
    defaultProps: metadata.default_props,
    tags: metadata.tags,
  });
}

// Register all blocks
registerBlock(HeroSimple, heroSimpleMeta, heroSimpleSchema);
registerBlock(HeroModern, heroModernMeta, heroModernSchema);
registerBlock(HeroSlider, heroSliderMeta, heroSliderSchema);
registerBlock(HeroVideo, heroVideoMeta, heroVideoSchema);

registerBlock(HeaderModerne, headerModerneMeta, headerModerneSchema);
registerBlock(HeaderMinimaliste, headerMinimalisteMeta, headerMinimalisteSchema);
registerBlock(HeaderComplet, headerCompletMeta, headerCompletSchema);

registerBlock(FooterSimple, footerSimpleMeta, footerSimpleSchema);
registerBlock(FooterComplet, footerCompletMeta, footerCompletSchema);
registerBlock(FooterCentre, footerCentreMeta, footerCentreSchema);

registerBlock(ProductFeatured, productFeaturedMeta, productFeaturedSchema);
registerBlock(ProductShowcase, productShowcaseMeta, productShowcaseSchema);

registerBlock(ProductGrid2Col, productGrid2ColMeta, productGrid2ColSchema);
registerBlock(ProductGrid3Col, productGrid3ColMeta, productGrid3ColSchema);

registerBlock(CategoriesGrid, categoriesGridMeta, categoriesGridSchema);
registerBlock(CategoriesList, categoriesListMeta, categoriesListSchema);

registerBlock(NewsletterBloc, newsletterBlocMeta, newsletterBlocSchema);
registerBlock(NewsletterInline, newsletterInlineMeta, newsletterInlineSchema);

registerBlock(BannerPromo, bannerPromoMeta, bannerPromoSchema);

registerBlock(PartnersGrid, partnersGridMeta, partnersGridSchema);

registerBlock(TestimonialsGrid, testimonialsGridMeta, testimonialsGridSchema);
registerBlock(TestimonialsSlider, testimonialsSliderMeta, testimonialsSliderSchema);

// Export categoryRegistry for direct use if needed
export { categoryRegistry };
