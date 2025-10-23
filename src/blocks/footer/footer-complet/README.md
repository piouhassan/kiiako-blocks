# Footer Complet Block

## Description

A comprehensive, feature-rich footer block perfect for corporate and e-commerce websites. Includes company info, multiple link columns, newsletter subscription, social media links, and legal links.

## Features

- **Company Branding**: Logo, name, tagline, and description
- **Multi-column Navigation**: Up to 4 link columns with headers
- **Newsletter Signup**: Email subscription form with icon
- **Social Media Icons**: Facebook, Twitter, Instagram, LinkedIn, YouTube
- **Bottom Bar**: Copyright, legal links, and additional navigation
- **Fully Customizable**: Colors, text, and layout options
- **Responsive Design**: Adapts seamlessly to all screen sizes
- **Hover Effects**: Smooth color transitions on links

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | string | undefined | Logo image URL |
| `companyName` | string | "Company Name" | Company name |
| `tagline` | string | undefined | Company tagline/slogan |
| `description` | string | undefined | Company description |
| `columns` | array | [] | Array of link column objects |
| `showNewsletter` | boolean | true | Show newsletter signup |
| `newsletterTitle` | string | "Subscribe..." | Newsletter heading |
| `newsletterDescription` | string | undefined | Newsletter description |
| `socialLinks` | array | [] | Array of social media links |
| `bottomLinks` | array | [] | Bottom bar legal links |
| `copyright` | string | "© 2025..." | Copyright text |
| `backgroundColor` | string | "#1f2937" | Background color |
| `textColor` | string | "#ffffff" | Text color |
| `linkHoverColor` | string | "#60a5fa" | Link hover color |

## Data Structures

### Column Object
```typescript
{
  title: string;        // Column heading
  links: Array<{        // Array of links
    label: string;      // Link text
    url: string;        // Link URL
  }>;
}
```

### Social Link Object
```typescript
{
  platform: string;     // Platform name (facebook, twitter, etc.)
  url: string;          // Profile URL
  icon: string;         // Icon identifier
}
```

### Bottom Link Object
```typescript
{
  label: string;        // Link text
  url: string;          // Link URL
}
```

## Supported Social Platforms

- Facebook
- Twitter (X)
- Instagram
- LinkedIn
- YouTube

## Usage Example

```tsx
<FooterComplet
  companyName="YourBrand"
  tagline="Building better experiences"
  description="We help businesses grow..."
  columns={[
    {
      title: "Products",
      links: [
        { label: "Features", url: "/features" },
        { label: "Pricing", url: "/pricing" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", url: "/about" },
        { label: "Careers", url: "/careers" },
      ]
    }
  ]}
  showNewsletter={true}
  newsletterTitle="Stay Updated"
  socialLinks={[
    { platform: "Facebook", url: "https://facebook.com/...", icon: "facebook" }
  ]}
  bottomLinks={[
    { label: "Privacy", url: "/privacy" },
    { label: "Terms", url: "/terms" }
  ]}
  copyright="© 2025 YourBrand"
  backgroundColor="#1f2937"
  textColor="#ffffff"
/>
```

## Layout Structure

```
┌─────────────────────────────────────────────────────┐
│ Logo / Company Name                                  │
│ Tagline                                              │
│ Description                                          │
│                                                      │
│ Newsletter Form                                      │
├──────────────┬──────────────┬──────────────┬────────┤
│ Column 1     │ Column 2     │ Column 3     │Column 4│
│ - Link       │ - Link       │ - Link       │- Link  │
│ - Link       │ - Link       │ - Link       │- Link  │
└──────────────┴──────────────┴──────────────┴────────┘
┌─────────────────────────────────────────────────────┐
│ Copyright  │  Social Icons  │  Bottom Links         │
└─────────────────────────────────────────────────────┘
```

## Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Company info full width
- Newsletter full width
- Link columns: 2 columns grid
- Bottom bar: Stacked vertically

### Tablet (768px - 1024px)
- 2 column main layout
- Link columns: Based on column count

### Desktop (> 1024px)
- 12 column grid (4 + 8 split)
- Company info + newsletter: 4 columns
- Link columns: 8 columns (divided equally)
- Bottom bar: Horizontal layout

## Styling

### Colors
- Dark background (default: gray-800)
- White text with opacity variations
- Blue accent for hover states
- Subtle borders with transparency

### Typography
- Bold headings (font-semibold, text-lg)
- Small body text (text-sm)
- Reduced opacity for secondary text (70-80%)

### Spacing
- Generous padding: py-12 md:py-16
- Consistent gaps: gap-4 to gap-8
- Proper line height for readability

## Accessibility

- Semantic `<footer>` element
- Proper heading hierarchy
- ARIA labels for social links
- Keyboard accessible forms and links
- Sufficient color contrast

## Newsletter Form

- Email input with validation
- Submit button with action
- Styled for dark backgrounds
- Focus states for accessibility
- Form submission handler (preventDefault by default)

## Best Practices

1. **Keep columns balanced**: 2-4 columns recommended
2. **Limit links per column**: 4-6 links for scannability
3. **Use clear labels**: Descriptive link text
4. **Update copyright year**: Keep current year
5. **Test social links**: Ensure all URLs work
6. **Optimize logo**: SVG preferred for crisp display

## Version

1.0.0
