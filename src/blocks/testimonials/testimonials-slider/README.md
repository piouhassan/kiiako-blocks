# Testimonials Slider Block

## Description

An elegant testimonials slider that showcases customer reviews in a rotating carousel format. Features smooth transitions, navigation controls, rating stars, and autoplay functionality.

## Features

- **Auto-rotating Slider**: Automatic slide progression with configurable interval
- **Manual Navigation**: Previous/Next buttons and dot indicators
- **Star Ratings**: Display 1-5 star ratings visually
- **Avatar Support**: Optional customer profile images
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: Elegant transitions between testimonials
- **Accessible**: Keyboard navigation and ARIA labels

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "What Our Customers Say" | Main heading |
| `subtitle` | string | undefined | Optional subtitle |
| `testimonials` | array | [] | Array of testimonial objects |
| `autoplay` | boolean | true | Enable auto-rotation |
| `autoplayInterval` | number | 5000 | Time between slides (ms) |
| `showNavigation` | boolean | true | Show prev/next buttons |
| `showDots` | boolean | true | Show dot indicators |
| `backgroundColor` | string | "#f9fafb" | Section background color |
| `cardBackground` | string | "#ffffff" | Card background color |

## Testimonial Object Structure

```typescript
{
  name: string;          // Customer name
  role?: string;         // Job title/role
  company?: string;      // Company name
  avatar?: string;       // Profile image URL
  rating: number;        // 1-5 stars
  content: string;       // Testimonial text
}
```

## Usage Example

```tsx
<TestimonialsSlider
  title="What Our Customers Say"
  subtitle="Trusted by thousands of businesses worldwide"
  testimonials={[
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc",
      avatar: "/avatars/sarah.jpg",
      rating: 5,
      content: "This product has transformed our business..."
    },
    // ... more testimonials
  ]}
  autoplay={true}
  autoplayInterval={5000}
  showNavigation={true}
  showDots={true}
/>
```

## Interactions

### Navigation
- **Arrow Buttons**: Click left/right arrows to navigate
- **Dot Indicators**: Click any dot to jump to that testimonial
- **Auto-advance**: Slides automatically change (if autoplay enabled)
- **Pause on Hover**: Autoplay pauses when hovering (implicit)

### Keyboard
- Tab to focus navigation buttons
- Enter/Space to activate buttons

## Styling

### Card Appearance
- Rounded corners with shadow
- Centered layout with generous padding
- Star rating displayed prominently
- Quote formatting for testimonial text
- Avatar with border and rounded style

### Colors
- Fully customizable backgrounds
- Yellow stars for rating
- Blue accent for active dot indicator
- Gray scale for text hierarchy

## Responsive Behavior

- **Mobile**: Single column, compact padding
- **Tablet/Desktop**: Larger padding, navigation outside card
- Arrow buttons positioned outside container on larger screens

## Accessibility

- ARIA labels for navigation controls
- Semantic HTML (blockquote for quotes)
- Alt text for avatar images
- Keyboard accessible controls
- Proper heading hierarchy

## Performance

- Auto-rotation cleanup on unmount
- useCallback for stable function references
- Conditional rendering for empty states
- Efficient re-renders with proper dependencies

## Version

1.0.0
