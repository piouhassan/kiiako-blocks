# Newsletter Bloc Block

## Description

A prominent, eye-catching newsletter subscription section designed to capture email signups. Features multiple layout options, customizable colors, and a privacy-focused design with trust indicators.

## Features

- **Two Layout Options**: Centered or split (text + form side-by-side)
- **Large, Bold Design**: Prominent headlines and generous spacing
- **Icon Integration**: Mail icon with background circle
- **Privacy Indicator**: Shield icon with privacy note
- **Button Variants**: White, dark, or outline styles
- **Fully Customizable**: Colors, text, and layout
- **Responsive Design**: Optimized for all screen sizes
- **Form Validation**: Email input with focus states

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Stay Updated" | Main heading |
| `subtitle` | string | undefined | Secondary heading |
| `description` | string | undefined | Descriptive text |
| `placeholderText` | string | "Enter your email" | Input placeholder |
| `buttonText` | string | "Subscribe" | Button text |
| `showPrivacyNote` | boolean | true | Show privacy note |
| `privacyNote` | string | "We respect..." | Privacy message |
| `backgroundColor` | string | "#3b82f6" | Section background |
| `textColor` | string | "#ffffff" | Text color |
| `layout` | 'centered' \| 'split' | 'centered' | Layout style |
| `buttonVariant` | 'white' \| 'dark' \| 'outline' | 'white' | Button style |

## Layout Options

### Centered
- All content centered
- Icon at top
- Text content stacked vertically
- Form centered below text
- Best for: Hero-style newsletter sections

### Split
- Two-column grid on desktop
- Text content on left
- Form on right
- Icon on left side
- Best for: Mid-page newsletter sections

## Button Variants

- **White**: White background, dark text (default)
- **Dark**: Dark background, white text
- **Outline**: Transparent with white border

## Usage Example

```tsx
<NewsletterBloc
  title="Stay in the Loop"
  subtitle="Get the latest updates"
  description="Join thousands of subscribers..."
  placeholderText="Your email address"
  buttonText="Subscribe Now"
  showPrivacyNote={true}
  privacyNote="We respect your privacy"
  backgroundColor="#3b82f6"
  textColor="#ffffff"
  layout="centered"
  buttonVariant="white"
/>
```

## Layout Structure

### Centered Layout
```
┌─────────────────────────────────────┐
│             [Mail Icon]              │
│         Large Heading Text           │
│           Subtitle Text              │
│         Description Text             │
│                                      │
│    [Email Input] [Subscribe Btn]     │
│        [Privacy Note]                │
└─────────────────────────────────────┘
```

### Split Layout
```
┌──────────────────┬──────────────────┐
│ [Mail Icon]      │                  │
│ Large Heading    │  [Email Input]   │
│ Subtitle Text    │                  │
│ Description Text │  [Subscribe Btn] │
│                  │                  │
│                  │  [Privacy Note]  │
└──────────────────┴──────────────────┘
```

## Responsive Behavior

### Mobile (< 768px)
- Centered layout: Single column, stacked
- Split layout: Converts to single column
- Form inputs full width
- Buttons full width

### Tablet/Desktop (≥ 768px)
- Centered: Max width 2xl (672px)
- Split: 2 column grid with gap-12
- Form in centered: Horizontal (input + button)
- Form in split: Vertical (stacked)

## Styling

### Typography
- Title: text-3xl to text-5xl (responsive)
- Subtitle: text-xl to text-2xl
- Description: text-base to text-lg
- Privacy note: text-sm

### Spacing
- Section padding: py-16 md:py-20
- Icon margin: mb-6
- Form max width (centered): max-w-lg
- Gap between elements: 3-4 units

### Colors
- Default background: Blue (#3b82f6)
- Default text: White (#ffffff)
- Icon background: Text color at 20% opacity
- Input: White background, gray text

## Trust & Privacy

### Privacy Note Features
- Shield icon for trust
- Small, non-intrusive text
- Opacity 70% for subtle appearance
- Positioned below form

### Best Practices
1. Keep privacy note concise
2. Link to privacy policy if possible
3. Use shield icon consistently
4. Make unsubscribe process clear

## Accessibility

- Semantic HTML form elements
- Proper input types (email)
- Focus states on inputs and buttons
- ARIA labels where appropriate
- Sufficient color contrast
- Large touch targets (py-4)

## Performance

- Inline SVG icons (Lucide)
- No external dependencies
- Efficient re-renders
- Optimized for Core Web Vitals

## Conversion Optimization

1. **Above the fold**: Place near top of page
2. **Clear value prop**: Compelling subtitle/description
3. **Social proof**: Mention subscriber count
4. **Trust indicators**: Privacy note and shield icon
5. **Prominent CTA**: Large, contrasting button
6. **Minimal friction**: Email only (no name required)

## Version

1.0.0
