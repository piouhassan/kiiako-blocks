# Product Grid 2 Columns Block

## Description

A 2-column product grid layout perfect for showcasing products with larger images and more prominent display. Ideal for featured collections, premium products, or when you want to emphasize product details.

## Features

- **2-Column Layout**: Spacious grid with prominent product display
- **Flexible Image Ratios**: Square, portrait, or landscape options
- **Quick Actions**: Quick add to cart and wishlist buttons
- **Star Ratings**: Optional product ratings display
- **Sale Badges**: Highlight special offers and discounts
- **Hover Effects**: Smooth animations and interactive elements
- **Responsive Design**: Adapts to mobile (single column) and desktop
- **Price Display**: Regular and sale price support

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Featured Products" | Section heading |
| `subtitle` | string | undefined | Optional subtitle |
| `products` | array | [] | Array of product objects |
| `showQuickAdd` | boolean | true | Show quick add button |
| `showWishlist` | boolean | true | Show wishlist button |
| `showRating` | boolean | false | Show star ratings |
| `imageAspectRatio` | 'square'\|'portrait'\|'landscape' | 'portrait' | Image aspect ratio |
| `backgroundColor` | string | "#ffffff" | Background color |

## Product Object Structure

```typescript
{
  name: string;              // Product name
  category?: string;         // Product category
  price: number;             // Current price
  originalPrice?: number;    // Original price (for sales)
  image: string;             // Product image URL
  badge?: string;            // Badge text (e.g., "Sale", "New")
  rating?: number;           // Star rating (0-5)
}
```

## Image Aspect Ratios

- **Square** (1:1): Perfect for uniform product displays
- **Portrait** (3:4): Best for fashion, apparel, and accessories
- **Landscape** (4:3): Good for wider products or lifestyle shots

## Usage Example

```tsx
<ProductGrid2Col
  title="Featured Collection"
  subtitle="Our most popular items this season"
  products={[
    {
      name: "Premium Leather Bag",
      category: "Accessories",
      price: 129.99,
      originalPrice: 159.99,
      image: "/products/bag.jpg",
      badge: "Sale",
      rating: 4.5
    },
    {
      name: "Designer Watch",
      category: "Watches",
      price: 299.99,
      image: "/products/watch.jpg",
      rating: 5
    }
  ]}
  showQuickAdd={true}
  showWishlist={true}
  showRating={true}
  imageAspectRatio="portrait"
/>
```

## Layout Structure

```
┌────────────────────────────────────────────┐
│              Title & Subtitle              │
├───────────────────┬────────────────────────┤
│                   │                        │
│   Product Card    │    Product Card        │
│   [Image]         │    [Image]             │
│   Name            │    Name                │
│   Price           │    Price               │
│                   │                        │
└───────────────────┴────────────────────────┘
```

## Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Full width cards
- Stacked vertically

### Tablet/Desktop (≥ 768px)
- 2 column grid
- Equal width columns
- Larger gap spacing (lg:gap-8)

## Interactive Elements

### Quick Add Button
- Appears on hover
- Smooth fade-in animation
- Icon + text display
- Positioned at bottom of image

### Wishlist Button
- Always visible in top-right corner
- Heart icon
- Hover effect changes to red
- White background with shadow

### Product Image
- Scale effect on hover (1.05x)
- Smooth transform transition
- Maintains aspect ratio

## Styling

### Cards
- White background
- Rounded corners
- Shadow elevation on hover
- Overflow hidden for image effects

### Typography
- Large product names (text-lg)
- Uppercase category labels
- Bold prices (text-2xl)
- Line clamping for long names

### Colors
- Red badges for sales (#ef4444)
- Yellow stars for ratings (#fbbf24)
- Gray for secondary text
- Dark for primary text

## Best Practices

1. **Product Count**: 2, 4, or 6 products work best
2. **Image Quality**: Use high-resolution images (600x800 minimum)
3. **Consistent Images**: Use same aspect ratio for all products
4. **Price Format**: Always include 2 decimal places
5. **Badge Text**: Keep short (3-4 characters max)

## Accessibility

- Alt text for product images
- ARIA labels for icon buttons
- Semantic HTML structure
- Keyboard accessible interactions
- Sufficient color contrast

## Performance

- Lazy image loading
- CSS transforms for smooth animations
- Efficient re-renders with React.memo
- Optimized hover states

## Version

1.0.0
