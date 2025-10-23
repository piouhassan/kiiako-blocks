import React from 'react';
import { z } from 'zod';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ClassValue } from 'clsx';
export { BlockDefinition, BlockInstance, Category, ComponentDefinition } from '@kiiako/render';

declare const heroSimpleSchema: z.ZodObject<{
    title: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    buttonText: z.ZodOptional<z.ZodString>;
    buttonLink: z.ZodOptional<z.ZodString>;
    backgroundImage: z.ZodOptional<z.ZodString>;
    textAlign: z.ZodDefault<z.ZodEnum<["left", "center", "right"]>>;
    overlayOpacity: z.ZodDefault<z.ZodNumber>;
    textColor: z.ZodDefault<z.ZodString>;
    minHeight: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    textAlign: "left" | "center" | "right";
    overlayOpacity: number;
    textColor: string;
    minHeight: string;
    subtitle?: string | undefined;
    buttonText?: string | undefined;
    buttonLink?: string | undefined;
    backgroundImage?: string | undefined;
}, {
    title: string;
    subtitle?: string | undefined;
    buttonText?: string | undefined;
    buttonLink?: string | undefined;
    backgroundImage?: string | undefined;
    textAlign?: "left" | "center" | "right" | undefined;
    overlayOpacity?: number | undefined;
    textColor?: string | undefined;
    minHeight?: string | undefined;
}>;
type HeroSimpleProps = z.infer<typeof heroSimpleSchema>;

declare const HeroSimple: React.FC<HeroSimpleProps>;

declare const heroModernSchema: z.ZodObject<{
    badge: z.ZodOptional<z.ZodString>;
    title: z.ZodDefault<z.ZodString>;
    subtitle: z.ZodDefault<z.ZodString>;
    description: z.ZodDefault<z.ZodString>;
    primaryCta: z.ZodObject<{
        text: z.ZodDefault<z.ZodString>;
        link: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        link: string;
        text: string;
    }, {
        link?: string | undefined;
        text?: string | undefined;
    }>;
    secondaryCta: z.ZodOptional<z.ZodObject<{
        text: z.ZodDefault<z.ZodString>;
        link: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        link: string;
        text: string;
    }, {
        link?: string | undefined;
        text?: string | undefined;
    }>>;
    heroImage: z.ZodOptional<z.ZodString>;
    features: z.ZodDefault<z.ZodArray<z.ZodObject<{
        icon: z.ZodString;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        text: string;
        icon: string;
    }, {
        text: string;
        icon: string;
    }>, "many">>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    textColor: z.ZodDefault<z.ZodString>;
    showStats: z.ZodDefault<z.ZodBoolean>;
    stats: z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
    }, {
        value: string;
        label: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    title: string;
    subtitle: string;
    textColor: string;
    backgroundColor: string;
    description: string;
    primaryCta: {
        link: string;
        text: string;
    };
    features: {
        text: string;
        icon: string;
    }[];
    showStats: boolean;
    stats: {
        value: string;
        label: string;
    }[];
    badge?: string | undefined;
    secondaryCta?: {
        link: string;
        text: string;
    } | undefined;
    heroImage?: string | undefined;
}, {
    primaryCta: {
        link?: string | undefined;
        text?: string | undefined;
    };
    title?: string | undefined;
    subtitle?: string | undefined;
    textColor?: string | undefined;
    backgroundColor?: string | undefined;
    badge?: string | undefined;
    description?: string | undefined;
    secondaryCta?: {
        link?: string | undefined;
        text?: string | undefined;
    } | undefined;
    heroImage?: string | undefined;
    features?: {
        text: string;
        icon: string;
    }[] | undefined;
    showStats?: boolean | undefined;
    stats?: {
        value: string;
        label: string;
    }[] | undefined;
}>;
type HeroModernProps = z.infer<typeof heroModernSchema>;

declare const HeroModern: React.FC<HeroModernProps>;

declare const heroSliderSchema: z.ZodObject<{
    slides: z.ZodDefault<z.ZodArray<z.ZodObject<{
        heading: z.ZodString;
        subheading: z.ZodOptional<z.ZodString>;
        backgroundImage: z.ZodString;
        primaryButton: z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            link: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            link: string;
            text: string;
        }, {
            link: string;
            text: string;
        }>>;
        secondaryButton: z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
            link: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            link: string;
            text: string;
        }, {
            link: string;
            text: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        backgroundImage: string;
        heading: string;
        subheading?: string | undefined;
        primaryButton?: {
            link: string;
            text: string;
        } | undefined;
        secondaryButton?: {
            link: string;
            text: string;
        } | undefined;
    }, {
        backgroundImage: string;
        heading: string;
        subheading?: string | undefined;
        primaryButton?: {
            link: string;
            text: string;
        } | undefined;
        secondaryButton?: {
            link: string;
            text: string;
        } | undefined;
    }>, "many">>;
    autoplay: z.ZodDefault<z.ZodBoolean>;
    autoplayInterval: z.ZodDefault<z.ZodNumber>;
    showNavigation: z.ZodDefault<z.ZodBoolean>;
    showDots: z.ZodDefault<z.ZodBoolean>;
    overlayOpacity: z.ZodDefault<z.ZodNumber>;
    overlayColor: z.ZodDefault<z.ZodString>;
    textColor: z.ZodDefault<z.ZodString>;
    textAlign: z.ZodDefault<z.ZodEnum<["left", "center", "right"]>>;
    minHeight: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    textAlign: "left" | "center" | "right";
    overlayOpacity: number;
    textColor: string;
    minHeight: string;
    slides: {
        backgroundImage: string;
        heading: string;
        subheading?: string | undefined;
        primaryButton?: {
            link: string;
            text: string;
        } | undefined;
        secondaryButton?: {
            link: string;
            text: string;
        } | undefined;
    }[];
    autoplay: boolean;
    autoplayInterval: number;
    showNavigation: boolean;
    showDots: boolean;
    overlayColor: string;
}, {
    textAlign?: "left" | "center" | "right" | undefined;
    overlayOpacity?: number | undefined;
    textColor?: string | undefined;
    minHeight?: string | undefined;
    slides?: {
        backgroundImage: string;
        heading: string;
        subheading?: string | undefined;
        primaryButton?: {
            link: string;
            text: string;
        } | undefined;
        secondaryButton?: {
            link: string;
            text: string;
        } | undefined;
    }[] | undefined;
    autoplay?: boolean | undefined;
    autoplayInterval?: number | undefined;
    showNavigation?: boolean | undefined;
    showDots?: boolean | undefined;
    overlayColor?: string | undefined;
}>;
type HeroSliderProps = z.infer<typeof heroSliderSchema>;

declare const HeroSlider: React.FC<HeroSliderProps>;

declare const heroVideoSchema: z.ZodObject<{
    heading: z.ZodDefault<z.ZodString>;
    subheading: z.ZodDefault<z.ZodString>;
    videoUrl: z.ZodDefault<z.ZodString>;
    posterImage: z.ZodOptional<z.ZodString>;
    primaryButton: z.ZodOptional<z.ZodObject<{
        text: z.ZodString;
        link: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "outline", "ghost"]>>;
    }, "strip", z.ZodTypeAny, {
        link: string;
        text: string;
        variant: "primary" | "secondary" | "outline" | "ghost";
    }, {
        link: string;
        text: string;
        variant?: "primary" | "secondary" | "outline" | "ghost" | undefined;
    }>>;
    secondaryButton: z.ZodOptional<z.ZodObject<{
        text: z.ZodString;
        link: z.ZodString;
        variant: z.ZodDefault<z.ZodEnum<["primary", "secondary", "outline", "ghost"]>>;
    }, "strip", z.ZodTypeAny, {
        link: string;
        text: string;
        variant: "primary" | "secondary" | "outline" | "ghost";
    }, {
        link: string;
        text: string;
        variant?: "primary" | "secondary" | "outline" | "ghost" | undefined;
    }>>;
    overlayOpacity: z.ZodDefault<z.ZodNumber>;
    overlayColor: z.ZodDefault<z.ZodString>;
    textColor: z.ZodDefault<z.ZodString>;
    textAlign: z.ZodDefault<z.ZodEnum<["left", "center", "right"]>>;
    minHeight: z.ZodDefault<z.ZodString>;
    autoplay: z.ZodDefault<z.ZodBoolean>;
    loop: z.ZodDefault<z.ZodBoolean>;
    muted: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    textAlign: "left" | "center" | "right";
    overlayOpacity: number;
    textColor: string;
    minHeight: string;
    heading: string;
    subheading: string;
    autoplay: boolean;
    overlayColor: string;
    videoUrl: string;
    loop: boolean;
    muted: boolean;
    primaryButton?: {
        link: string;
        text: string;
        variant: "primary" | "secondary" | "outline" | "ghost";
    } | undefined;
    secondaryButton?: {
        link: string;
        text: string;
        variant: "primary" | "secondary" | "outline" | "ghost";
    } | undefined;
    posterImage?: string | undefined;
}, {
    textAlign?: "left" | "center" | "right" | undefined;
    overlayOpacity?: number | undefined;
    textColor?: string | undefined;
    minHeight?: string | undefined;
    heading?: string | undefined;
    subheading?: string | undefined;
    primaryButton?: {
        link: string;
        text: string;
        variant?: "primary" | "secondary" | "outline" | "ghost" | undefined;
    } | undefined;
    secondaryButton?: {
        link: string;
        text: string;
        variant?: "primary" | "secondary" | "outline" | "ghost" | undefined;
    } | undefined;
    autoplay?: boolean | undefined;
    overlayColor?: string | undefined;
    videoUrl?: string | undefined;
    posterImage?: string | undefined;
    loop?: boolean | undefined;
    muted?: boolean | undefined;
}>;
type HeroVideoProps = z.infer<typeof heroVideoSchema>;

declare const HeroVideo: React.FC<HeroVideoProps>;

declare const headerModerneSchema: z.ZodObject<{
    logo: z.ZodOptional<z.ZodString>;
    siteName: z.ZodDefault<z.ZodString>;
    navigation: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
    }, {
        label: string;
        url: string;
    }>, "many">>;
    showSearch: z.ZodDefault<z.ZodBoolean>;
    searchPlaceholder: z.ZodDefault<z.ZodString>;
    primaryCta: z.ZodOptional<z.ZodObject<{
        text: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        text: string;
        url: string;
    }, {
        text: string;
        url: string;
    }>>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    textColor: z.ZodDefault<z.ZodString>;
    sticky: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    textColor: string;
    backgroundColor: string;
    siteName: string;
    navigation: {
        label: string;
        url: string;
    }[];
    showSearch: boolean;
    searchPlaceholder: string;
    sticky: boolean;
    primaryCta?: {
        text: string;
        url: string;
    } | undefined;
    logo?: string | undefined;
}, {
    textColor?: string | undefined;
    backgroundColor?: string | undefined;
    primaryCta?: {
        text: string;
        url: string;
    } | undefined;
    logo?: string | undefined;
    siteName?: string | undefined;
    navigation?: {
        label: string;
        url: string;
    }[] | undefined;
    showSearch?: boolean | undefined;
    searchPlaceholder?: string | undefined;
    sticky?: boolean | undefined;
}>;
type HeaderModerneProps = z.infer<typeof headerModerneSchema>;

declare const HeaderModerne: React.FC<HeaderModerneProps>;

/**
 * Schema de validation Zod pour Header Minimaliste
 */
declare const headerMinimalisteSchema: z.ZodObject<{
    logo: z.ZodObject<{
        text: z.ZodDefault<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        image?: string | undefined;
    }, {
        text?: string | undefined;
        image?: string | undefined;
    }>;
    navigation: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
        label: string;
    }, {
        href: string;
        label: string;
    }>, "many">>;
    ctaButton: z.ZodObject<{
        text: z.ZodDefault<z.ZodString>;
        href: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        href: string;
        text: string;
    }, {
        href?: string | undefined;
        text?: string | undefined;
    }>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    textColor: z.ZodDefault<z.ZodString>;
    sticky: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    textColor: string;
    backgroundColor: string;
    logo: {
        text: string;
        image?: string | undefined;
    };
    navigation: {
        href: string;
        label: string;
    }[];
    sticky: boolean;
    ctaButton: {
        href: string;
        text: string;
    };
}, {
    logo: {
        text?: string | undefined;
        image?: string | undefined;
    };
    ctaButton: {
        href?: string | undefined;
        text?: string | undefined;
    };
    textColor?: string | undefined;
    backgroundColor?: string | undefined;
    navigation?: {
        href: string;
        label: string;
    }[] | undefined;
    sticky?: boolean | undefined;
}>;
type HeaderMinimalisteProps = z.infer<typeof headerMinimalisteSchema>;

/**
 * Header Minimaliste - Composant React
 */
declare function HeaderMinimaliste({ logo, navigation, ctaButton, backgroundColor, textColor, sticky, ...props }: HeaderMinimalisteProps): react_jsx_runtime.JSX.Element;

declare const headerCompletSchema: z.ZodObject<{
    logo: z.ZodObject<{
        text: z.ZodDefault<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        image?: string | undefined;
    }, {
        text?: string | undefined;
        image?: string | undefined;
    }>;
    navigation: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
        label: string;
    }, {
        href: string;
        label: string;
    }>, "many">>;
    showSearch: z.ZodDefault<z.ZodBoolean>;
    showCart: z.ZodDefault<z.ZodBoolean>;
    showAccount: z.ZodDefault<z.ZodBoolean>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    textColor: z.ZodDefault<z.ZodString>;
    sticky: z.ZodDefault<z.ZodBoolean>;
    showTopBar: z.ZodDefault<z.ZodBoolean>;
    topBarMessage: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    textColor: string;
    backgroundColor: string;
    logo: {
        text: string;
        image?: string | undefined;
    };
    navigation: {
        href: string;
        label: string;
    }[];
    showSearch: boolean;
    sticky: boolean;
    showCart: boolean;
    showAccount: boolean;
    showTopBar: boolean;
    topBarMessage: string;
}, {
    logo: {
        text?: string | undefined;
        image?: string | undefined;
    };
    textColor?: string | undefined;
    backgroundColor?: string | undefined;
    navigation?: {
        href: string;
        label: string;
    }[] | undefined;
    showSearch?: boolean | undefined;
    sticky?: boolean | undefined;
    showCart?: boolean | undefined;
    showAccount?: boolean | undefined;
    showTopBar?: boolean | undefined;
    topBarMessage?: string | undefined;
}>;
type HeaderCompletProps = z.infer<typeof headerCompletSchema>;

declare const HeaderComplet: React.FC<HeaderCompletProps>;

/**
 * Schema de validation Zod pour Footer Simple
 */
declare const footerSimpleSchema: z.ZodObject<{
    logo: z.ZodObject<{
        text: z.ZodDefault<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        image?: string | undefined;
    }, {
        text?: string | undefined;
        image?: string | undefined;
    }>;
    description: z.ZodDefault<z.ZodString>;
    links: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
        label: string;
    }, {
        href: string;
        label: string;
    }>, "many">>;
    socialLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        platform: z.ZodString;
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
        platform: string;
    }, {
        href: string;
        platform: string;
    }>, "many">>;
    copyright: z.ZodDefault<z.ZodString>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    textColor: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    textColor: string;
    backgroundColor: string;
    description: string;
    logo: {
        text: string;
        image?: string | undefined;
    };
    links: {
        href: string;
        label: string;
    }[];
    socialLinks: {
        href: string;
        platform: string;
    }[];
    copyright: string;
}, {
    logo: {
        text?: string | undefined;
        image?: string | undefined;
    };
    textColor?: string | undefined;
    backgroundColor?: string | undefined;
    description?: string | undefined;
    links?: {
        href: string;
        label: string;
    }[] | undefined;
    socialLinks?: {
        href: string;
        platform: string;
    }[] | undefined;
    copyright?: string | undefined;
}>;
type FooterSimpleProps = z.infer<typeof footerSimpleSchema>;

/**
 * Footer Simple - Composant React
 */
declare function FooterSimple({ logo, description, links, socialLinks, copyright, backgroundColor, textColor, ...props }: FooterSimpleProps): react_jsx_runtime.JSX.Element;

declare const footerCompletSchema: z.ZodObject<{
    logo: z.ZodOptional<z.ZodString>;
    companyName: z.ZodDefault<z.ZodString>;
    tagline: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    columns: z.ZodDefault<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        links: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            label: string;
            url: string;
        }, {
            label: string;
            url: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        title: string;
        links: {
            label: string;
            url: string;
        }[];
    }, {
        title: string;
        links: {
            label: string;
            url: string;
        }[];
    }>, "many">>;
    showNewsletter: z.ZodDefault<z.ZodBoolean>;
    newsletterTitle: z.ZodDefault<z.ZodString>;
    newsletterDescription: z.ZodOptional<z.ZodString>;
    socialLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        platform: z.ZodString;
        url: z.ZodString;
        icon: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        icon: string;
        url: string;
        platform: string;
    }, {
        icon: string;
        url: string;
        platform: string;
    }>, "many">>;
    bottomLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
    }, {
        label: string;
        url: string;
    }>, "many">>;
    copyright: z.ZodDefault<z.ZodString>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    textColor: z.ZodDefault<z.ZodString>;
    linkHoverColor: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    textColor: string;
    backgroundColor: string;
    socialLinks: {
        icon: string;
        url: string;
        platform: string;
    }[];
    copyright: string;
    companyName: string;
    columns: {
        title: string;
        links: {
            label: string;
            url: string;
        }[];
    }[];
    showNewsletter: boolean;
    newsletterTitle: string;
    bottomLinks: {
        label: string;
        url: string;
    }[];
    linkHoverColor: string;
    description?: string | undefined;
    logo?: string | undefined;
    tagline?: string | undefined;
    newsletterDescription?: string | undefined;
}, {
    textColor?: string | undefined;
    backgroundColor?: string | undefined;
    description?: string | undefined;
    logo?: string | undefined;
    socialLinks?: {
        icon: string;
        url: string;
        platform: string;
    }[] | undefined;
    copyright?: string | undefined;
    companyName?: string | undefined;
    tagline?: string | undefined;
    columns?: {
        title: string;
        links: {
            label: string;
            url: string;
        }[];
    }[] | undefined;
    showNewsletter?: boolean | undefined;
    newsletterTitle?: string | undefined;
    newsletterDescription?: string | undefined;
    bottomLinks?: {
        label: string;
        url: string;
    }[] | undefined;
    linkHoverColor?: string | undefined;
}>;
type FooterCompletProps = z.infer<typeof footerCompletSchema>;

declare const FooterComplet: React.FC<FooterCompletProps>;

declare const footerCentreSchema: z.ZodObject<{
    logo: z.ZodOptional<z.ZodString>;
    companyName: z.ZodDefault<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    links: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        url: string;
    }, {
        label: string;
        url: string;
    }>, "many">>;
    socialLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        platform: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        platform: string;
    }, {
        url: string;
        platform: string;
    }>, "many">>;
    copyright: z.ZodDefault<z.ZodString>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    textColor: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    textColor: string;
    backgroundColor: string;
    links: {
        label: string;
        url: string;
    }[];
    socialLinks: {
        url: string;
        platform: string;
    }[];
    copyright: string;
    companyName: string;
    description?: string | undefined;
    logo?: string | undefined;
}, {
    textColor?: string | undefined;
    backgroundColor?: string | undefined;
    description?: string | undefined;
    logo?: string | undefined;
    links?: {
        label: string;
        url: string;
    }[] | undefined;
    socialLinks?: {
        url: string;
        platform: string;
    }[] | undefined;
    copyright?: string | undefined;
    companyName?: string | undefined;
}>;
type FooterCentreProps = z.infer<typeof footerCentreSchema>;

declare const FooterCentre: React.FC<FooterCentreProps>;

declare const productFeaturedSchema: z.ZodObject<{
    productName: z.ZodDefault<z.ZodString>;
    tagline: z.ZodDefault<z.ZodString>;
    description: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodString>;
    originalPrice: z.ZodOptional<z.ZodString>;
    features: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    productImage: z.ZodDefault<z.ZodString>;
    ctaText: z.ZodDefault<z.ZodString>;
    ctaLink: z.ZodDefault<z.ZodString>;
    secondaryCtaText: z.ZodOptional<z.ZodString>;
    secondaryCtaLink: z.ZodOptional<z.ZodString>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    imagePosition: z.ZodDefault<z.ZodEnum<["left", "right"]>>;
}, "strip", z.ZodTypeAny, {
    backgroundColor: string;
    description: string;
    features: string[];
    tagline: string;
    productName: string;
    price: string;
    productImage: string;
    ctaText: string;
    ctaLink: string;
    imagePosition: "left" | "right";
    originalPrice?: string | undefined;
    secondaryCtaText?: string | undefined;
    secondaryCtaLink?: string | undefined;
}, {
    backgroundColor?: string | undefined;
    description?: string | undefined;
    features?: string[] | undefined;
    tagline?: string | undefined;
    productName?: string | undefined;
    price?: string | undefined;
    originalPrice?: string | undefined;
    productImage?: string | undefined;
    ctaText?: string | undefined;
    ctaLink?: string | undefined;
    secondaryCtaText?: string | undefined;
    secondaryCtaLink?: string | undefined;
    imagePosition?: "left" | "right" | undefined;
}>;
type ProductFeaturedProps = z.infer<typeof productFeaturedSchema>;

declare const ProductFeatured: React.FC<ProductFeaturedProps>;

declare const productShowcaseSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    products: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        image: z.ZodString;
        price: z.ZodString;
        originalPrice: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        rating: z.ZodOptional<z.ZodNumber>;
        link: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        link: string;
        name: string;
        image: string;
        price: string;
        badge?: string | undefined;
        originalPrice?: string | undefined;
        rating?: number | undefined;
    }, {
        name: string;
        image: string;
        price: string;
        link?: string | undefined;
        badge?: string | undefined;
        originalPrice?: string | undefined;
        rating?: number | undefined;
    }>, "many">>;
    columns: z.ZodDefault<z.ZodNumber>;
    showViewAll: z.ZodDefault<z.ZodBoolean>;
    viewAllText: z.ZodDefault<z.ZodString>;
    viewAllLink: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    columns: number;
    products: {
        link: string;
        name: string;
        image: string;
        price: string;
        badge?: string | undefined;
        originalPrice?: string | undefined;
        rating?: number | undefined;
    }[];
    showViewAll: boolean;
    viewAllText: string;
    viewAllLink: string;
    subtitle?: string | undefined;
}, {
    title?: string | undefined;
    subtitle?: string | undefined;
    columns?: number | undefined;
    products?: {
        name: string;
        image: string;
        price: string;
        link?: string | undefined;
        badge?: string | undefined;
        originalPrice?: string | undefined;
        rating?: number | undefined;
    }[] | undefined;
    showViewAll?: boolean | undefined;
    viewAllText?: string | undefined;
    viewAllLink?: string | undefined;
}>;
type ProductShowcaseProps = z.infer<typeof productShowcaseSchema>;

declare const ProductShowcase: React.FC<ProductShowcaseProps>;

declare const productGrid2ColSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    products: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        category: z.ZodOptional<z.ZodString>;
        price: z.ZodNumber;
        originalPrice: z.ZodOptional<z.ZodNumber>;
        image: z.ZodString;
        badge: z.ZodOptional<z.ZodString>;
        rating: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        image: string;
        price: number;
        badge?: string | undefined;
        originalPrice?: number | undefined;
        rating?: number | undefined;
        category?: string | undefined;
    }, {
        name: string;
        image: string;
        price: number;
        badge?: string | undefined;
        originalPrice?: number | undefined;
        rating?: number | undefined;
        category?: string | undefined;
    }>, "many">>;
    showQuickAdd: z.ZodDefault<z.ZodBoolean>;
    showWishlist: z.ZodDefault<z.ZodBoolean>;
    showRating: z.ZodDefault<z.ZodBoolean>;
    imageAspectRatio: z.ZodDefault<z.ZodEnum<["square", "portrait", "landscape"]>>;
    backgroundColor: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    backgroundColor: string;
    products: {
        name: string;
        image: string;
        price: number;
        badge?: string | undefined;
        originalPrice?: number | undefined;
        rating?: number | undefined;
        category?: string | undefined;
    }[];
    showQuickAdd: boolean;
    showWishlist: boolean;
    showRating: boolean;
    imageAspectRatio: "square" | "portrait" | "landscape";
    subtitle?: string | undefined;
}, {
    title?: string | undefined;
    subtitle?: string | undefined;
    backgroundColor?: string | undefined;
    products?: {
        name: string;
        image: string;
        price: number;
        badge?: string | undefined;
        originalPrice?: number | undefined;
        rating?: number | undefined;
        category?: string | undefined;
    }[] | undefined;
    showQuickAdd?: boolean | undefined;
    showWishlist?: boolean | undefined;
    showRating?: boolean | undefined;
    imageAspectRatio?: "square" | "portrait" | "landscape" | undefined;
}>;
type ProductGrid2ColProps = z.infer<typeof productGrid2ColSchema>;

declare const ProductGrid2Col: React.FC<ProductGrid2ColProps>;

declare const productGrid3ColSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    products: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        category: z.ZodString;
        price: z.ZodNumber;
        originalPrice: z.ZodOptional<z.ZodNumber>;
        image: z.ZodString;
        badge: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        image: string;
        price: number;
        category: string;
        badge?: string | undefined;
        originalPrice?: number | undefined;
    }, {
        name: string;
        image: string;
        price: number;
        category: string;
        badge?: string | undefined;
        originalPrice?: number | undefined;
    }>, "many">>;
    showQuickAdd: z.ZodDefault<z.ZodBoolean>;
    showWishlist: z.ZodDefault<z.ZodBoolean>;
    backgroundColor: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    backgroundColor: string;
    products: {
        name: string;
        image: string;
        price: number;
        category: string;
        badge?: string | undefined;
        originalPrice?: number | undefined;
    }[];
    showQuickAdd: boolean;
    showWishlist: boolean;
}, {
    title?: string | undefined;
    backgroundColor?: string | undefined;
    products?: {
        name: string;
        image: string;
        price: number;
        category: string;
        badge?: string | undefined;
        originalPrice?: number | undefined;
    }[] | undefined;
    showQuickAdd?: boolean | undefined;
    showWishlist?: boolean | undefined;
}>;
type ProductGrid3ColProps = z.infer<typeof productGrid3ColSchema>;

/**
 * Product Grid 3 Columns - Composant React
 */
declare function ProductGrid3Col({ title, products, showQuickAdd, showWishlist, backgroundColor, ...props }: ProductGrid3ColProps): react_jsx_runtime.JSX.Element;

declare const categoriesGridSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    categories: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodString;
        productCount: z.ZodOptional<z.ZodNumber>;
        link: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        link: string;
        name: string;
        image: string;
        description?: string | undefined;
        productCount?: number | undefined;
    }, {
        name: string;
        image: string;
        link?: string | undefined;
        description?: string | undefined;
        productCount?: number | undefined;
    }>, "many">>;
    columns: z.ZodDefault<z.ZodEnum<["2", "3", "4"]>>;
    showProductCount: z.ZodDefault<z.ZodBoolean>;
    showDescription: z.ZodDefault<z.ZodBoolean>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    cardStyle: z.ZodDefault<z.ZodEnum<["card", "minimal", "overlay"]>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    backgroundColor: string;
    columns: "2" | "3" | "4";
    categories: {
        link: string;
        name: string;
        image: string;
        description?: string | undefined;
        productCount?: number | undefined;
    }[];
    showProductCount: boolean;
    showDescription: boolean;
    cardStyle: "card" | "minimal" | "overlay";
    subtitle?: string | undefined;
}, {
    title?: string | undefined;
    subtitle?: string | undefined;
    backgroundColor?: string | undefined;
    columns?: "2" | "3" | "4" | undefined;
    categories?: {
        name: string;
        image: string;
        link?: string | undefined;
        description?: string | undefined;
        productCount?: number | undefined;
    }[] | undefined;
    showProductCount?: boolean | undefined;
    showDescription?: boolean | undefined;
    cardStyle?: "card" | "minimal" | "overlay" | undefined;
}>;
type CategoriesGridProps = z.infer<typeof categoriesGridSchema>;

declare const CategoriesGrid: React.FC<CategoriesGridProps>;

declare const categoriesListSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    categories: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        productCount: z.ZodOptional<z.ZodNumber>;
        link: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        link: string;
        name: string;
        description?: string | undefined;
        icon?: string | undefined;
        productCount?: number | undefined;
    }, {
        name: string;
        link?: string | undefined;
        description?: string | undefined;
        icon?: string | undefined;
        productCount?: number | undefined;
    }>, "many">>;
    showProductCount: z.ZodDefault<z.ZodBoolean>;
    showIcon: z.ZodDefault<z.ZodBoolean>;
    backgroundColor: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    backgroundColor: string;
    categories: {
        link: string;
        name: string;
        description?: string | undefined;
        icon?: string | undefined;
        productCount?: number | undefined;
    }[];
    showProductCount: boolean;
    showIcon: boolean;
    subtitle?: string | undefined;
}, {
    title?: string | undefined;
    subtitle?: string | undefined;
    backgroundColor?: string | undefined;
    categories?: {
        name: string;
        link?: string | undefined;
        description?: string | undefined;
        icon?: string | undefined;
        productCount?: number | undefined;
    }[] | undefined;
    showProductCount?: boolean | undefined;
    showIcon?: boolean | undefined;
}>;
type CategoriesListProps = z.infer<typeof categoriesListSchema>;

declare const CategoriesList: React.FC<CategoriesListProps>;

declare const newsletterBlocSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    placeholderText: z.ZodDefault<z.ZodString>;
    buttonText: z.ZodDefault<z.ZodString>;
    showPrivacyNote: z.ZodDefault<z.ZodBoolean>;
    privacyNote: z.ZodDefault<z.ZodString>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    textColor: z.ZodDefault<z.ZodString>;
    layout: z.ZodDefault<z.ZodEnum<["centered", "split"]>>;
    buttonVariant: z.ZodDefault<z.ZodEnum<["white", "dark", "outline"]>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    buttonText: string;
    textColor: string;
    backgroundColor: string;
    placeholderText: string;
    showPrivacyNote: boolean;
    privacyNote: string;
    layout: "split" | "centered";
    buttonVariant: "white" | "outline" | "dark";
    subtitle?: string | undefined;
    description?: string | undefined;
}, {
    title?: string | undefined;
    subtitle?: string | undefined;
    buttonText?: string | undefined;
    textColor?: string | undefined;
    backgroundColor?: string | undefined;
    description?: string | undefined;
    placeholderText?: string | undefined;
    showPrivacyNote?: boolean | undefined;
    privacyNote?: string | undefined;
    layout?: "split" | "centered" | undefined;
    buttonVariant?: "white" | "outline" | "dark" | undefined;
}>;
type NewsletterBlocProps = z.infer<typeof newsletterBlocSchema>;

declare const NewsletterBloc: React.FC<NewsletterBlocProps>;

declare const newsletterInlineSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    description: z.ZodDefault<z.ZodString>;
    placeholder: z.ZodDefault<z.ZodString>;
    buttonText: z.ZodDefault<z.ZodString>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    textColor: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    buttonText: string;
    textColor: string;
    backgroundColor: string;
    description: string;
    placeholder: string;
}, {
    title?: string | undefined;
    buttonText?: string | undefined;
    textColor?: string | undefined;
    backgroundColor?: string | undefined;
    description?: string | undefined;
    placeholder?: string | undefined;
}>;
type NewsletterInlineProps = z.infer<typeof newsletterInlineSchema>;

/**
 * Newsletter Inline - Composant React
 */
declare function NewsletterInline({ title, description, placeholder, buttonText, backgroundColor, textColor, ...props }: NewsletterInlineProps): react_jsx_runtime.JSX.Element;

declare const bannerPromoSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    subtitle: z.ZodDefault<z.ZodString>;
    description: z.ZodDefault<z.ZodString>;
    ctaText: z.ZodDefault<z.ZodString>;
    ctaLink: z.ZodDefault<z.ZodString>;
    backgroundImage: z.ZodOptional<z.ZodString>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    textColor: z.ZodDefault<z.ZodString>;
    badgeText: z.ZodOptional<z.ZodString>;
    badgeColor: z.ZodDefault<z.ZodString>;
    showCountdown: z.ZodDefault<z.ZodBoolean>;
    countdownEndDate: z.ZodOptional<z.ZodString>;
    decorated: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    subtitle: string;
    textColor: string;
    backgroundColor: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    badgeColor: string;
    showCountdown: boolean;
    backgroundImage?: string | undefined;
    badgeText?: string | undefined;
    countdownEndDate?: string | undefined;
    decorated?: boolean | undefined;
}, {
    title?: string | undefined;
    subtitle?: string | undefined;
    backgroundImage?: string | undefined;
    textColor?: string | undefined;
    backgroundColor?: string | undefined;
    description?: string | undefined;
    ctaText?: string | undefined;
    ctaLink?: string | undefined;
    badgeText?: string | undefined;
    badgeColor?: string | undefined;
    showCountdown?: boolean | undefined;
    countdownEndDate?: string | undefined;
    decorated?: boolean | undefined;
}>;
type BannerPromoProps = z.infer<typeof bannerPromoSchema>;

declare const BannerPromo: React.FC<BannerPromoProps>;

declare const partnersGridSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    partners: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        logo: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        logo: string;
        url?: string | undefined;
    }, {
        name: string;
        logo: string;
        url?: string | undefined;
    }>, "many">>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    logoGrayscale: z.ZodDefault<z.ZodBoolean>;
    columns: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    title: string;
    backgroundColor: string;
    columns: number;
    partners: {
        name: string;
        logo: string;
        url?: string | undefined;
    }[];
    logoGrayscale: boolean;
    subtitle?: string | undefined;
}, {
    title?: string | undefined;
    subtitle?: string | undefined;
    backgroundColor?: string | undefined;
    columns?: number | undefined;
    partners?: {
        name: string;
        logo: string;
        url?: string | undefined;
    }[] | undefined;
    logoGrayscale?: boolean | undefined;
}>;
type PartnersGridProps = z.infer<typeof partnersGridSchema>;

declare const PartnersGrid: React.FC<PartnersGridProps>;

declare const testimonialsGridSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    testimonials: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        role: z.ZodOptional<z.ZodString>;
        company: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodString>;
        rating: z.ZodDefault<z.ZodNumber>;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        rating: number;
        content: string;
        role?: string | undefined;
        company?: string | undefined;
        avatar?: string | undefined;
    }, {
        name: string;
        content: string;
        role?: string | undefined;
        rating?: number | undefined;
        company?: string | undefined;
        avatar?: string | undefined;
    }>, "many">>;
    columns: z.ZodDefault<z.ZodEnum<["2", "3"]>>;
    showAvatar: z.ZodDefault<z.ZodBoolean>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    cardBackground: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    backgroundColor: string;
    columns: "2" | "3";
    testimonials: {
        name: string;
        rating: number;
        content: string;
        role?: string | undefined;
        company?: string | undefined;
        avatar?: string | undefined;
    }[];
    showAvatar: boolean;
    cardBackground: string;
    subtitle?: string | undefined;
}, {
    title?: string | undefined;
    subtitle?: string | undefined;
    backgroundColor?: string | undefined;
    columns?: "2" | "3" | undefined;
    testimonials?: {
        name: string;
        content: string;
        role?: string | undefined;
        rating?: number | undefined;
        company?: string | undefined;
        avatar?: string | undefined;
    }[] | undefined;
    showAvatar?: boolean | undefined;
    cardBackground?: string | undefined;
}>;
type TestimonialsGridProps = z.infer<typeof testimonialsGridSchema>;

declare const TestimonialsGrid: React.FC<TestimonialsGridProps>;

declare const testimonialsSliderSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    testimonials: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        role: z.ZodOptional<z.ZodString>;
        company: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodString>;
        rating: z.ZodDefault<z.ZodNumber>;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        rating: number;
        content: string;
        role?: string | undefined;
        company?: string | undefined;
        avatar?: string | undefined;
    }, {
        name: string;
        content: string;
        role?: string | undefined;
        rating?: number | undefined;
        company?: string | undefined;
        avatar?: string | undefined;
    }>, "many">>;
    autoplay: z.ZodDefault<z.ZodBoolean>;
    autoplayInterval: z.ZodDefault<z.ZodNumber>;
    showNavigation: z.ZodDefault<z.ZodBoolean>;
    showDots: z.ZodDefault<z.ZodBoolean>;
    backgroundColor: z.ZodDefault<z.ZodString>;
    cardBackground: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    backgroundColor: string;
    autoplay: boolean;
    autoplayInterval: number;
    showNavigation: boolean;
    showDots: boolean;
    testimonials: {
        name: string;
        rating: number;
        content: string;
        role?: string | undefined;
        company?: string | undefined;
        avatar?: string | undefined;
    }[];
    cardBackground: string;
    subtitle?: string | undefined;
}, {
    title?: string | undefined;
    subtitle?: string | undefined;
    backgroundColor?: string | undefined;
    autoplay?: boolean | undefined;
    autoplayInterval?: number | undefined;
    showNavigation?: boolean | undefined;
    showDots?: boolean | undefined;
    testimonials?: {
        name: string;
        content: string;
        role?: string | undefined;
        rating?: number | undefined;
        company?: string | undefined;
        avatar?: string | undefined;
    }[] | undefined;
    cardBackground?: string | undefined;
}>;
type TestimonialsSliderProps = z.infer<typeof testimonialsSliderSchema>;

declare const TestimonialsSlider: React.FC<TestimonialsSliderProps>;

/**
 * Utility function to merge class names
 */
declare function cn(...inputs: ClassValue[]): string;

export { BannerPromo, CategoriesGrid, CategoriesList, FooterCentre, FooterComplet, FooterSimple, HeaderComplet, HeaderMinimaliste, HeaderModerne, HeroModern, HeroSimple, HeroSlider, HeroVideo, NewsletterBloc, NewsletterInline, PartnersGrid, ProductFeatured, ProductGrid2Col, ProductGrid3Col, ProductShowcase, TestimonialsGrid, TestimonialsSlider, bannerPromoSchema, categoriesGridSchema, categoriesListSchema, cn, footerCentreSchema, footerCompletSchema, footerSimpleSchema, headerCompletSchema, headerMinimalisteSchema, headerModerneSchema, heroModernSchema, heroSimpleSchema, heroSliderSchema, heroVideoSchema, newsletterBlocSchema, newsletterInlineSchema, partnersGridSchema, productFeaturedSchema, productGrid2ColSchema, productGrid3ColSchema, productShowcaseSchema, testimonialsGridSchema, testimonialsSliderSchema };
