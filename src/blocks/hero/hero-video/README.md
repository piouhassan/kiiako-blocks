# Hero Video Block

## Description

A stunning hero section with a full-screen background video, perfect for making a strong first impression. Features customizable overlay, text content, and call-to-action buttons.

## Features

- **Background Video**: Full-screen video with autoplay, loop, and mute options
- **Poster Image**: Fallback image while video loads or if video fails
- **Customizable Overlay**: Adjustable opacity and color for text readability
- **Flexible Text Alignment**: Left, center, or right alignment
- **Dual CTAs**: Primary and secondary button options
- **Responsive Design**: Optimized for all screen sizes
- **Video Controls**: Configurable autoplay, loop, and muted settings
- **Accessibility**: Semantic HTML and ARIA support

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | string | "Welcome to Our Platform" | Main heading text |
| `subheading` | string | "Transform your business..." | Supporting text |
| `videoUrl` | string | "" | URL to video file (MP4 recommended) |
| `posterImage` | string | undefined | Image shown before video loads |
| `primaryButton` | object | undefined | Primary CTA button config |
| `secondaryButton` | object | undefined | Secondary CTA button config |
| `overlayOpacity` | number | 0.5 | Overlay opacity (0-1) |
| `overlayColor` | string | "#000000" | Overlay color |
| `textColor` | string | "#ffffff" | Text color |
| `textAlign` | 'left'\|'center'\|'right' | 'center' | Text alignment |
| `minHeight` | string | "600px" | Minimum section height |
| `autoplay` | boolean | true | Auto-play video on load |
| `loop` | boolean | true | Loop video continuously |
| `muted` | boolean | true | Mute video audio |

## Button Object Structure

```typescript
{
  text: string;       // Button text
  link: string;       // Button URL
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
}
```

## Button Variants

- **Primary**: Blue background, white text
- **Secondary**: Gray background, white text
- **Outline**: Transparent with white border
- **Ghost**: Transparent with hover effect

## Usage Example

```tsx
<HeroVideo
  heading="Welcome to Our Platform"
  subheading="Transform your business today"
  videoUrl="/videos/hero-background.mp4"
  posterImage="/images/hero-poster.jpg"
  primaryButton={{
    text: "Get Started",
    link: "/signup",
    variant: "primary"
  }}
  secondaryButton={{
    text: "Learn More",
    link: "/about",
    variant: "outline"
  }}
  overlayOpacity={0.5}
  overlayColor="#000000"
  textAlign="center"
  autoplay={true}
  loop={true}
  muted={true}
/>
```

## Video Requirements

### Recommended Formats
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD)
- **Aspect Ratio**: 16:9
- **File Size**: < 10MB for optimal loading
- **Duration**: 10-30 seconds for loop

### Optimization Tips
1. Compress video to reduce file size
2. Use a low bitrate for background videos
3. Always provide a poster image
4. Consider hosting on CDN for better performance

## Styling

### Overlay
- Configurable opacity for text readability
- Solid color overlay (default black)
- Positioned between video and content

### Text Styling
- Large, bold heading (responsive sizes)
- Subtitle with 90% opacity for hierarchy
- Flexible alignment options
- Maximum width for readability

### Buttons
- Large touch targets (px-8 py-4)
- Smooth hover transitions
- Flexible gap between buttons
- Responsive wrapping on small screens

## Responsive Behavior

- **Mobile**:
  - Heading: 4xl
  - Padding: py-20
  - Buttons stack if needed

- **Tablet (md)**:
  - Heading: 6xl
  - Padding: py-32

- **Desktop (lg)**:
  - Heading: 7xl
  - Full layout with side spacing

## Accessibility

- Semantic HTML5 `<section>` element
- Proper heading hierarchy (h1)
- Alt text support via poster image
- Keyboard accessible buttons
- Video muted by default (UX best practice)
- `playsInline` for mobile Safari

## Performance

- Lazy video loading
- Poster image for instant visual
- Object-fit cover for responsive video
- Minimal JavaScript (native HTML5 video)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari (with playsInline)
- Fallback to poster image if video fails

## Version

1.0.0
