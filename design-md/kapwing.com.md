# How kapwing.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kapwing.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero video showcase with rounded white frame, tab navigation for story categories, and bold centered headline on light gray background](https://pin.fontofweb.com/7907?format=jpg)](https://design.withfudge.com/share/pin-7907)

[Hero video showcase with rounded white frame, tab navigation for story categories, and bold centered headline on light gray background](https://design.withfudge.com/share/pin-7907)

[![Social proof section with floating brand logos on warm cream background and pink-accented headline text](https://pin.fontofweb.com/7906?format=jpg)](https://design.withfudge.com/share/pin-7906)

[Social proof section with floating brand logos on warm cream background and pink-accented headline text](https://design.withfudge.com/share/pin-7906)

[![Stacked audience cards with dramatic 3D illustrations showing marketers, internal comms, content creators, and educators personas](https://pin.fontofweb.com/7905?format=jpg)](https://design.withfudge.com/share/pin-7905)

[Stacked audience cards with dramatic 3D illustrations showing marketers, internal comms, content creators, and educators personas](https://design.withfudge.com/share/pin-7905)

[![Customer testimonial section with gradient pink-to-orange card, review badges, and navigation arrows](https://pin.fontofweb.com/7904?format=jpg)](https://design.withfudge.com/share/pin-7904)

[Customer testimonial section with gradient pink-to-orange card, review badges, and navigation arrows](https://design.withfudge.com/share/pin-7904)

## Overview

Kapwing's design system is built for creative confidence. The interface alternates between immersive near-black hero moments and warm, approachable light sections, creating a rhythm that feels both professional and playful. The visual language centers on oversized, tightly-tracked display typography that commands attention without feeling heavy. Gradient accents in vivid pink-to-orange serve as the signature brand expression, appearing in testimonial cards, interactive elements, and subtle background moments. The composition favors generous rounded corners at multiple scales—from small pills to dramatic 84px card radii—softening the technical nature of video editing into something more human and accessible. Content is organized in stacked, overlapping card systems that create depth and hierarchy without complex shadows, while social proof and audience segmentation are treated as visual centerpieces rather than afterthoughts.

## Colors

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary dark backgrounds, hero sections, immersive video showcases |
| surface | #FFFFFF | Light section backgrounds, card fills on dark, text on dark surfaces |
| surface-warm | #F6F6F6 | Subtle off-white for alternating sections, input backgrounds |
| surface-cream | #FFE5CD | Warm accent backgrounds for social proof and audience sections |
| ink | #050505 | Primary text on light backgrounds, near-black for maximum contrast |
| ink-secondary | #111111 | Slightly softened dark for secondary headings and body text |
| ink-muted | #555555 | Supporting text, descriptions, inactive tab labels |
| ink-subtle | #A0A0A0 | Placeholder text, disabled states, tertiary information |
| border-light | #E5E5E5 | Subtle dividers, card outlines on light backgrounds |
| border-subtle | #D9D9D9 | Hairline borders, separator lines |
| action-primary | #FF3DB5 | Vivid pink for gradient starts, accent highlights, interactive emphasis |
| action-warm | #FF4800 | Warm orange for gradient ends, CTA warmth, energetic moments |
| text-inverse | #FFFFFF | All text on dark or gradient backgrounds |
| text-on-dark-muted | #B3B3B3 | Secondary text on dark backgrounds, captions in hero |
| review-star | #E1E1E1 | Star rating fills in review badges |

The color system operates in two primary modes: a dramatic dark mode for hero and immersive content sections, and a warm light mode for trust-building and informational content. The gradient pairing of vivid pink (#FF3DB5) to warm orange (#FF4800) is the singular brand accent, used sparingly but impactfully in testimonial cards and interactive highlights. Dark sections rely on pure black (#000000) with white text, while light sections use warm cream (#FFE5CD) and off-white (#F6F6F6) to avoid sterile clinical feeling. Text hierarchy is achieved through weight and size rather than color variation, with muted grays reserved for supporting information only.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Sansb 17 F 9 C | 5.25rem | 800 | 1.0 | -0.02em | Main hero headlines, maximum impact statements |
| section-display | Instrument Sansb 17 F 9 C | 3rem | 800 | 1.08 | -0.02em | Section headlines, major feature introductions |
| headline | Instrument Sansb 17 F 9 C | 2.25rem | 800 | 1.2 | -0.01em | Card titles, sub-section headings, audience personas |
| body-large | Instrument Sansb 17 F 9 C | 1.125rem | 500 | 1.6 | normal | Lead paragraphs, feature descriptions, testimonial quotes |
| body | Instrument Sansb 17 F 9 C | 1rem | 400 | 1.5 | normal | General content, navigation, button labels, UI text |
| label | Instrument Sansb 17 F 9 C | 0.875rem | 400 | 1.5 | 0.06em | Eyebrow labels, category tags, uppercase section markers |
| caption | Instrument Sansb 17 F 9 C | 0.8125rem | 400 | 1.5 | normal | Fine print, metadata, review counts, legal text |

Instrument Sansb 17 F 9 C drives the entire typographic system with a single family across all weights from 400 to 800. The display hierarchy relies on dramatic size contrast rather than multiple families—hero text at 84px dwarfs body copy at 16px, creating clear information scent. Tight negative tracking on display sizes (-0.02em) gives headlines a modern, confident density, while body text uses neutral tracking for readability. Weight 800 is reserved exclusively for display and headline roles; body text uses 400 regular or 500 medium for emphasis. The system avoids italic styles entirely, favoring weight and color shifts for emphasis, as seen in the pink-accented "magic behind the scenes" treatment.

Verify licensing for these families before production use.

## Layout

The layout system is built on a fluid container model with generous section spacing and asymmetric card compositions. Sections stack vertically with substantial breathing room—typically 120px to 180px vertical padding on major content blocks—creating clear territorial boundaries between topics. Content containers appear to max out around 1200-1400px centered, with full-bleed dark or gradient sections breaking the container for visual drama.

Horizontal rhythm uses consistent 32px card padding as a baseline, expanding to 40px for featured content and 80-180px for major section gutters. Cards frequently break the grid with negative top margins (-60px to -120px), creating intentional overlap and depth in stacked compositions. This overlap technique appears in audience persona cards and feature showcases, where subsequent cards partially obscure their predecessors to suggest abundance and continuity.

The grid is implicitly flexible rather than rigidly columnar. Two-column layouts pair large display text with supporting media or testimonial cards, with text blocks taking roughly 45-55% width and visual elements filling the remainder. Navigation elements use compact horizontal spacing with 24px gaps between links and 15-20px internal padding.

Responsive behavior should collapse asymmetric layouts to single-column stacking, maintaining card overlap on tablet but simplifying to full-width sequential cards on mobile. The dramatic section padding should reduce proportionally—targeting 60-80px on tablet and 40-60px on mobile—to preserve rhythm without excessive scrolling.

## Visual language

The visual language balances creative energy with trustworthy professionalism. Three-dimensional illustrations in glossy pink and orange plastics represent audience segments and features, contrasting with the flat, minimal UI surrounding them. These illustrations share a consistent material language—smooth gradients, soft shadows, and rounded geometric forms—that unifies the brand expression.

Photography appears in rounded frame containers with 64px to 84px corner radii, treating video stills and portraits as precious objects within generous white matting. This framing technique elevates user-generated content to gallery-like presentation, reinforcing the platform's creative positioning.

Motion and depth are suggested through static means: stacked cards with slight rotations, overlapping layers with subtle shadows, and gradient flows that imply energy and transformation. The pink-to-orange gradient is the single most distinctive visual element, appearing in testimonial cards, accent dots, and interactive highlights. It never competes with content but rather frames or elevates it.

Iconography and UI chrome are minimal and functional. Navigation arrows are simple circles with thin strokes; tab indicators are underline bars in gradient tones. The overall impression is of a tool that gets out of the way so creativity can flourish—every decorative element serves a communicative purpose.

## Components

### Hero Section

- **Anatomy**: Full-viewport dark background, oversized display headline with tight tracking, supporting description in muted text, primary CTA button, and framed video or image showcase
- **Surface**: Background `{colors.canvas}`, text `{colors.text-inverse}`, headline weight 800 at 84px
- **Typography**: `{typography.hero-display}` for main headline, `{typography.body}` for supporting text with `{colors.text-on-dark-muted}`
- **Shape**: Video frame uses 64px border radius with white background padding creating a mat effect
- **Spacing**: Generous vertical padding, content offset with negative margins for overlap effects
- **Composition**: Centered text block above or beside framed media, asymmetric balance favoring content over chrome

### Audience Persona Cards

- **Anatomy**: Stacked overlapping cards with 3D illustration, persona title, description, and optional link
- **Surface**: Alternating backgrounds—black for Marketers, white for Internal Comms, vivid orange for Content Creators, warm cream for Educators
- **Typography**: `{typography.headline}` for persona name, `{typography.body-large}` for description, weight 500
- **Shape**: 84px border radius for dramatic softness, full-width within container
- **Spacing**: 32-40px internal padding, -60px to -120px negative top margin for overlap
- **Composition**: Cards stack with slight vertical offset, illustrations positioned right-aligned emerging from card edge
- **Variants**: Color scheme inverts based on background darkness—white text on dark cards, dark text on light cards

### Testimonial Card

- **Anatomy**: Gradient background card with quote headline, body testimonial, avatar with circular crop, name and title attribution
- **Surface**: `linear-gradient(135deg, {colors.action-gradient-start}, {colors.action-gradient-end})`
- **Typography**: `{typography.headline}` for quote lead, `{typography.body-large}` for testimonial body, `{typography.body}` for attribution
- **Shape**: 40px border radius, generous internal padding
- **Spacing**: 32px padding, comfortable line-height for readability
- **Composition**: Left-aligned text stack with avatar and name below, or full-width with centered content

### Social Proof Bar

- **Anatomy**: Warm cream background with floating brand logo tiles and centered headline
- **Surface**: `{colors.surface-cream}` background, logo tiles with subtle shadow
- **Typography**: `{typography.section-display}` with selective `{colors.action-primary}` accent on key phrases
- **Shape**: Large rounded container (~84px radius), small rounded logo tiles
- **Spacing**: Generous vertical padding, logos distributed in loose orbital pattern
- **Composition**: Headline centered, logos scattered asymmetrically to avoid rigid grid

### Review Badge

- **Anatomy**: Platform name, star rating display, review count
- **Surface**: `{colors.surface}` background, `{colors.border-light}` border, subtle shadow
- **Typography**: `{typography.body}` for platform, `{typography.caption}` for count
- **Shape**: Pill-shaped with 24px radius
- **Spacing**: Compact internal padding, 12-16px horizontal gaps between badges

### Primary Button

- **Anatomy**: Text label with optional icon, solid fill
- **Surface**: `{colors.ink}` background, `{colors.text-inverse}` text
- **Typography**: `{typography.body}`, weight 800
- **Shape**: Fully rounded pill (9999px radius)
- **Spacing**: 18px vertical padding, 24-26px horizontal padding
- **States**: Default solid; hover may lighten background slightly

### Secondary Button

- **Anatomy**: Text label with optional icon, outlined or ghost style
- **Surface**: Transparent or `{colors.surface}` background, `{colors.ink}` or `{colors.ink-muted}` text
- **Typography**: `{typography.body}`, weight 400-600
- **Shape**: Small rounded corners (12px) or pill
- **Spacing**: 12-14px padding, more compact than primary

### Tab Navigation

- **Anatomy**: Horizontal text labels with active indicator
- **Surface**: Transparent background, active state with gradient underline
- **Typography**: `{typography.body}`, weight 600 for active, 400 for inactive
- **Shape**: No visible container, underline bar for active state
- **Spacing**: Comfortable horizontal gaps between items
- **States**: Active with gradient underline, inactive with muted text

## Responsive behavior

The design maintains its bold character across breakpoints through proportional scaling rather than radical recomposition. Hero headlines should scale from 84px desktop to 54px tablet and 36-42px mobile, preserving the tight tracking and weight 800. Section display text similarly reduces from 48px to 36px to 28px. Body text remains consistent at 16-18px across all breakpoints for readability.

Card stacking behavior changes most significantly: the dramatic overlap with negative margins should reduce to slight overlap on tablet and eliminate on mobile, where cards stack flush for simpler scrolling. Two-column layouts (text + testimonial, headline + media) should collapse to single column with text preceding visual elements.

Gradient backgrounds and dark sections remain full-bleed at all sizes, but internal padding should reduce from 120-180px to 60-80px on tablet and 40-60px on mobile. Navigation collapses to a compact hamburger or simplified horizontal scroll on narrow viewports.

Touch targets for buttons and interactive elements should maintain minimum 44px height, with primary buttons expanding to full-width on mobile for easier access. The floating logo arrangement in social proof should simplify to a tighter grid or horizontal scroll on small screens.

## Practical implementation guidance

### Preserve
- The dramatic size contrast between 84px hero display and 16px body text—this hierarchy is central to the brand voice
- The single gradient pairing of pink-to-orange; do not introduce additional gradient colors
- Generous border radii at multiple scales; the softness is a deliberate counterpoint to the technical product
- The warm cream (#FFE5CD) as a distinctive alternative to generic gray backgrounds
- Weight 800 exclusively for display and headline roles; avoid using it for body emphasis

### Avoid
- Multiple font families; the system depends on Instrument Sansb 17 F 9 C alone
- Sharp corners on cards and containers; even small elements use subtle rounding
- Pure white backgrounds everywhere; alternate with warm off-whites and creams
- Generic blue link colors; use the ink/black family or gradient accents
- Heavy drop shadows; prefer subtle ambient shadows or flat color blocks

### Recommended Build Order
1. Establish the type scale with Instrument Sansb 17 F 9 C at all weights (400, 500, 600, 700, 800)
2. Implement the dark hero section with 84px headline and framed video container
3. Build the gradient testimonial card component with proper 135-degree gradient
4. Create the audience persona card system with overlapping negative margins
5. Add the social proof section with warm cream background and scattered logo tiles
6. Implement tab navigation with gradient active indicator
7. Polish with review badges, button states, and responsive scaling

### Accessibility
- Ensure white text on gradient backgrounds maintains 4.5:1 contrast; the vivid gradient may need slight darkening for small text
- Provide visible focus states for keyboard navigation; the minimal chrome risks invisible focus
- Respect reduced-motion preferences; the stacked card overlap should not animate intrusively
- Use semantic heading hierarchy despite visual size overrides
- Ensure gradient text accents have sufficient contrast against their backgrounds

## Scope note

This guide covers the Kapwing homepage marketing experience including hero, social proof, audience segmentation, and testimonial sections. Pricing tables, editor interface, dashboard, account flows, and footer content are not represented in the supplied materials. Motion behavior, hover states, and mobile-specific navigation patterns are inferred recommendations rather than documented behaviors.
