# Categories Grid Block

## Description

A responsive categories grid block that displays product categories with images, titles, and optional product counts. Perfect for e-commerce homepages and category navigation.

## Features

- **Responsive Grid Layout**: 2, 3, or 4 columns
- **3 Card Styles**: Card (shadow), Minimal (border), Overlay (image overlay)
- **Product Count**: Optional display of number of products per category
- **Description**: Optional category description
- **Customizable**: Background color, card style, and layout options
- **Hover Effects**: Smooth transitions on hover

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Shop by Category" | Main heading |
| `subtitle` | string | undefined | Optional subtitle |
| `categories` | array | [] | Array of category objects |
| `columns` | '2' \| '3' \| '4' | '4' | Number of columns |
| `showProductCount` | boolean | true | Show product count |
| `showDescription` | boolean | false | Show category description |
| `backgroundColor` | string | "#ffffff" | Background color |
| `cardStyle` | 'card' \| 'minimal' \| 'overlay' | 'card' | Card style variant |

## Category Object Structure

```typescript
{
  name: string;           // Category name
  description?: string;   // Optional description
  image: string;          // Category image URL
  productCount?: number;  // Number of products
  link: string;           // Link URL
}
```

## Card Styles

### Card
- White background with shadow
- Hover effect: Increased shadow
- Image above, content below

### Minimal
- White background with border
- Hover effect: Border color change
- Image above, content below

### Overlay
- Image with gradient overlay
- Text overlays the image
- Hover effect: Description appears

## Usage Example

```tsx
<CategoriesGrid
  title="Shop by Category"
  subtitle="Explore our wide range of products"
  categories={[
    {
      name: "Electronics",
      description: "Latest tech gadgets",
      image: "/images/electronics.jpg",
      productCount: 156,
      link: "/categories/electronics"
    },
    // ... more categories
  ]}
  columns="4"
  cardStyle="card"
  showProductCount={true}
/>
```

## Responsive Behavior

- **Mobile**: Single column
- **Tablet (md)**: 2 columns (for all settings)
- **Desktop (lg)**: 3 or 4 columns depending on setting

## Accessibility

- Semantic HTML structure
- Alt text for images
- Proper link structure
- Keyboard navigation support

## Version

1.0.0
