import { categoryRegistry } from '../lib/categoryRegistry';
import { registerBlock } from '../lib/blockLoader';

// Import Header blocks - nouvelle structure
import { HeaderMinimaliste } from './header/header-minimaliste';
import { headerMinimalisteSchema } from './header/header-minimaliste/schema';
import headerMinimalisteMetadata from './header/header-minimaliste/metadata.json';

import { HeaderModerne } from './header/header-moderne';
import { headerModerneSchema } from './header/header-moderne/schema';
import headerModerneMetadata from './header/header-moderne/metadata.json';


import { HeaderComplet } from './header/header-complet';
import { headerCompletSchema } from './header/header-complet/schema';
import headerCompletMetadata from './header/header-complet/metadata.json';

// Import Footer blocks - nouvelle structure
import { FooterSimple } from './footer/footer-simple';
import { footerSimpleSchema } from './footer/footer-simple/schema';
import footerSimpleMetadata from './footer/footer-simple/metadata.json';

import { FooterComplet } from './footer/footer-complet';
import { footerCompletSchema } from './footer/footer-complet/schema';
import footerCompletMetadata from './footer/footer-complet/metadata.json';

import { FooterCentre } from './footer/footer-centre';
import { footerCentreSchema } from './footer/footer-centre/schema';
import footerCentreMetadata from './footer/footer-centre/metadata.json';

// Import Newsletter blocks - nouvelle structure
import { NewsletterInline } from './newsletter/newsletter-inline';
import { newsletterInlineSchema } from './newsletter/newsletter-inline/schema';
import newsletterInlineMetadata from './newsletter/newsletter-inline/metadata.json';

import { NewsletterBloc } from './newsletter/newsletter-bloc';
import { newsletterBlocSchema } from './newsletter/newsletter-bloc/schema';
import newsletterBlocMetadata from './newsletter/newsletter-bloc/metadata.json';

// Import ProductGrid blocks - nouvelle structure
import { ProductGrid3Col } from './product-grid/product-grid-3col';
import { productGrid3ColSchema } from './product-grid/product-grid-3col/schema';
import productGrid3ColMetadata from './product-grid/product-grid-3col/metadata.json';

import { ProductGrid2Col } from './product-grid/product-grid-2col';
import { productGrid2ColSchema } from './product-grid/product-grid-2col/schema';
import productGrid2ColMetadata from './product-grid/product-grid-2col/metadata.json';

// Import Categories blocks - nouvelle structure
import { CategoriesGrid } from './categories/categories-grid';
import { categoriesGridSchema } from './categories/categories-grid/schema';
import categoriesGridMetadata from './categories/categories-grid/metadata.json';

import { CategoriesList } from './categories/categories-list';
import { categoriesListSchema } from './categories/categories-list/schema';
import categoriesListMetadata from './categories/categories-list/metadata.json';

// Import Testimonials blocks - nouvelle structure
import { TestimonialsSlider } from './testimonials/testimonials-slider';
import { testimonialsSliderSchema } from './testimonials/testimonials-slider/schema';
import testimonialsSliderMetadata from './testimonials/testimonials-slider/metadata.json';

import { TestimonialsGrid } from './testimonials/testimonials-grid';
import { testimonialsGridSchema } from './testimonials/testimonials-grid/schema';
import testimonialsGridMetadata from './testimonials/testimonials-grid/metadata.json';

// Import Hero blocks - nouvelle structure
import { HeroVideo } from './hero/hero-video';
import { heroVideoSchema } from './hero/hero-video/schema';
import heroVideoMetadata from './hero/hero-video/metadata.json';

import { HeroSlider } from './hero/hero-slider';
import { heroSliderSchema } from './hero/hero-slider/schema';
import heroSliderMetadata from './hero/hero-slider/metadata.json';

import { HeroModern } from './hero/hero-modern';
import { heroModernSchema } from './hero/hero-modern/schema';
import heroModernMetadata from './hero/hero-modern/metadata.json';

// Import Product block - nouvelle structure

import { ProductFeatured } from './products/product-featured';
import {productFeaturedSchema} from './products/product-featured/schema.ts';
import productFeaturedMetadata from './products/product-featured/metadata.json';

import { ProductShowcase } from './products/product-showcase';
import {productShowcaseSchema } from  "./products/product-showcase/schema.ts"
import productShowcaseMetadata from './products/product-showcase/metadata.json';

// Import Banner block - nouvelle structure

import { BannerPromo } from './banners/banner-promo';
import {bannerPromoSchema } from  "./banners/banner-promo/schema.ts"
import bannerPromoMetadata from './banners/banner-promo/metadata.json';


// Import Partners

import {PartnersGrid} from './partners/partners-grid';
import {partnersGridSchema } from  "./partners/partners-grid/schema";
import partnersGridMetadata from './partners/partners-grid/metadata.json';

import { heroSimpleSchema } from './hero/hero-simple/schema.ts';
import { HeroSimple } from './hero/hero-simple';
import heroSimpleMetadata from './hero/hero-simple/metadata.json';


// ==========================================
// ENREGISTREMENT DES BLOCKS
// ==========================================

// Header blocks
registerBlock(
  categoryRegistry,
  'header-minimaliste',
  headerMinimalisteMetadata,
  headerMinimalisteSchema,
  HeaderMinimaliste
);

registerBlock(
  categoryRegistry,
  'header-moderne',
  headerModerneMetadata,
  headerModerneSchema,
  HeaderModerne
);

registerBlock(
  categoryRegistry,
  'header-complet',
  headerCompletMetadata,
  headerCompletSchema,
  HeaderComplet
);



// Footer blocks
registerBlock(
  categoryRegistry,
  'footer-simple',
  footerSimpleMetadata,
  footerSimpleSchema,
  FooterSimple
);

registerBlock(
  categoryRegistry,
  'footer-complet',
  footerCompletMetadata,
  footerCompletSchema,
  FooterComplet
);

registerBlock(
  categoryRegistry,
  'footer-centre',
  footerCentreMetadata,
  footerCentreSchema,
  FooterCentre
);

// Newsletter blocks
registerBlock(
  categoryRegistry,
  'newsletter-inline',
  newsletterInlineMetadata,
  newsletterInlineSchema,
  NewsletterInline
);

registerBlock(
  categoryRegistry,
  'newsletter-bloc',
  newsletterBlocMetadata,
  newsletterBlocSchema,
  NewsletterBloc
);

// ProductGrid blocks
registerBlock(
  categoryRegistry,
  'product-grid-3col',
  productGrid3ColMetadata,
  productGrid3ColSchema,
  ProductGrid3Col
);

registerBlock(
  categoryRegistry,
  'product-grid-2col',
  productGrid2ColMetadata,
  productGrid2ColSchema,
  ProductGrid2Col
);

// Categories blocks
registerBlock(
  categoryRegistry,
  'categories-grid',
  categoriesGridMetadata,
  categoriesGridSchema,
  CategoriesGrid
);

registerBlock(
  categoryRegistry,
  'categories-list',
  categoriesListMetadata,
  categoriesListSchema,
  CategoriesList
);

// Testimonials blocks
registerBlock(
  categoryRegistry,
  'testimonials-slider',
  testimonialsSliderMetadata,
  testimonialsSliderSchema,
  TestimonialsSlider
);

registerBlock(
  categoryRegistry,
  'testimonials-grid',
  testimonialsGridMetadata,
  testimonialsGridSchema,
  TestimonialsGrid
);

// Hero blocks - nouvelle structure
registerBlock(
  categoryRegistry,
  'hero-video',
  heroVideoMetadata,
  heroVideoSchema,
  HeroVideo
);

registerBlock(
  categoryRegistry,
  'hero-slider',
  heroSliderMetadata,
  heroSliderSchema,
  HeroSlider
);

registerBlock(
  categoryRegistry,
  'hero-modern',
  heroModernMetadata,
  heroModernSchema,
  HeroModern
);

registerBlock(
  categoryRegistry,
  'hero-simple',
  heroSimpleMetadata,
  heroSimpleSchema,
  HeroSimple
);





// Product block
registerBlock(
  categoryRegistry,
  'product-featured',
  productFeaturedMetadata,
  productFeaturedSchema,
  ProductFeatured
);

registerBlock(
  categoryRegistry,
  'product-showcase',
  productShowcaseMetadata,
  productShowcaseSchema,
  ProductShowcase
);

registerBlock(
  categoryRegistry,
  'banner-promo',
  bannerPromoMetadata,
  bannerPromoSchema,
  BannerPromo
);

registerBlock(
  categoryRegistry,
  'partners-grid',
  partnersGridMetadata,
  partnersGridSchema,
  PartnersGrid
);

