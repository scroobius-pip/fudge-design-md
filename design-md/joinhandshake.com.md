# How joinhandshake.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/joinhandshake.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large lime-green display typography reading SHOW UP GET HIRED over a photographic background of a professional woman shaking hands, with dark teal navigation bar](https://pin.fontofweb.com/10716?format=jpg)](https://design.withfudge.com/share/pin-10716)

[Hero section with large lime-green display typography reading SHOW UP GET HIRED over a photographic background of a professional woman shaking hands, with dark teal navigation bar](https://design.withfudge.com/share/pin-10716)

[![Pricing page showing four-column comparison layout with Basic, Pro, Enterprise cards on light gray surfaces and a dark Promoted jobs add-on card, featuring rounded corners and](https://pin.fontofweb.com/10714?format=jpg)](https://design.withfudge.com/share/pin-10714)

[Pricing page showing four-column comparison layout with Basic, Pro, Enterprise cards on light gray surfaces and a dark Promoted jobs add-on card, featuring rounded corners and](https://design.withfudge.com/share/pin-10714)

[![Footer section with massive lime-green Handshake logotype spanning full width against dark teal background, with organized link columns above and app store badges in the corner](https://pin.fontofweb.com/10715?format=jpg)](https://design.withfudge.com/share/pin-10715)

[Footer section with massive lime-green Handshake logotype spanning full width against dark teal background, with organized link columns above and app store badges in the corner](https://design.withfudge.com/share/pin-10715)

[![Top navigation bar with Handshake logo in lime-green italic script, dark teal background, pill-shaped Sign up and Log in buttons, and a lime-green promotional banner with dismiss](https://pin.fontofweb.com/10717?format=jpg)](https://design.withfudge.com/share/pin-10717)

[Top navigation bar with Handshake logo in lime-green italic script, dark teal background, pill-shaped Sign up and Log in buttons, and a lime-green promotional banner with dismiss](https://design.withfudge.com/share/pin-10717)

## Overview

Handshake's visual system is built for immediate impact: a near-black teal canvas sets the stage for electric lime accents that demand attention without feeling playful. The design language balances professional credibility with youthful energy through oversized display typography, generous whitespace, and a restrained two-color palette that shifts between dark immersive modes and light functional surfaces. The system serves dual audiences—job seekers and employers—through shared components that adapt via surface color rather than structural change. Photography plays a central role, with full-bleed hero images providing warmth and human context against the cool, dark interface. Rounded corners appear throughout at consistent scales, from small interactive elements to large content cards, creating a cohesive softness that offsets the bold typographic statements.

## Colors

The palette is intentionally limited, deriving its power from high contrast rather than variety. Dark teal dominates immersive marketing surfaces, while light gray provides breathable space for dense information like pricing tables.

| token | value | use |
|---|---|---|
| accent | #D3FB52 | Primary action buttons, promotional banners, logo color, display typography on dark backgrounds |
| canvas | #052326 | Primary dark background for hero sections, footer, immersive marketing pages |
| canvas-deep | #14151C | Deeper dark variant for navigation and dense dark surfaces |
| surface | #F3F4FA | Light background for cards, pricing tables, content-heavy sections |
| surface-inverse | #1F202C | Dark card surfaces on light backgrounds, add-on feature panels |
| text-primary | #FFFFFF | Primary text on dark backgrounds, headings on dark surfaces |
| text-primary-inverse | #1F202C | Text on light surfaces, text on accent buttons |
| border-subtle | #FFFFFF | Hairline borders on dark surfaces, button outlines |
| border-inverse | #14151C | Borders on light surfaces |

The system operates in two primary modes. Dark mode uses canvas and canvas-deep backgrounds with text-primary, punctuated by accent for interactive elements and key messaging. Light mode inverts this relationship, using surface backgrounds with text-primary-inverse for readable content density. The accent color remains consistent across both modes, ensuring brand recognition. Gradients appear sparingly as radial blends from cyan (#7AF3FF) through lime to black, used for atmospheric background effects rather than functional elements.

## Typography

Three type families appear in the system: SansPlomb for explosive display moments, NoiGrotesk for the majority of interface and content text, and -apple-system as a system-ui fallback for small interface elements. The contrast between the compressed, italicized SansPlomb and the neutral, spacious NoiGrotesk defines the brand's voice—confident but approachable.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | SansPlomb | 14.25rem | 600 | 0.85 | -0.025em | Massive brand statements, footer logotype |
| section-display | NoiGrotesk | 4.5rem | 400 | 1 | -0.025em | Page headlines on light backgrounds |
| heading-large | NoiGrotesk | 2.25rem | 400 | 1.1 | -0.015em | Section headings, pricing page titles |
| heading | NoiGrotesk | 1.5rem | 400 | 1.1 | -0.015em | Card titles, feature names |
| body-large | NoiGrotesk | 1.25rem | 400 | 1.1 | -0.015em | Hero subheadings, introductory paragraphs |
| body | NoiGrotesk | 1rem | 400 | 1.4 | -0.015em | General content, descriptions |
| label | NoiGrotesk | 0.875rem | 500 | 1.1 | -0.015em | Button text, navigation items, tags |
| ui | NoiGrotesk | 0.75rem | 400 | 1.4 | -0.015em | Fine print, metadata, footer legal |
| navigation | NoiGrotesk | 0.875rem | 400 | 1.4 | -0.015em | Top nav links, menu items |

All type uses negative letter-spacing for a tightly-set, contemporary feel. Weights are restrained: 400 Regular and 500 Medium for NoiGrotesk, 600 Semibold for SansPlomb display. The -apple-system family serves as a fallback stack for system-level UI at small sizes. Verify licensing for these families before production use.

## Layout

The layout system alternates between immersive full-bleed sections and contained content areas. Marketing pages use edge-to-edge dark sections with centered content, while functional pages like pricing employ max-width containers with generous horizontal margins.

The base spacing unit is 0.125rem (2px), with semantic tokens building upward: tight (0.5rem) for internal element padding, compact (1rem) for component padding, comfortable (1.5rem) for card gutters, roomy (2.5rem) for section internal spacing, section (5rem) for vertical rhythm between major areas, and section-large (7.5rem) for hero-to-content transitions.

Border radius follows a consistent scale: small (0.25rem) for subtle rounding, medium (0.5rem) for inputs, large (1rem) for cards, xlarge (1.5rem) for prominent panels, pill (999px) for buttons and tags, and full (9999px) for circular elements. Cards on the pricing page use large radius, while buttons universally use pill radius.

Shadows are minimal: a single elevation shadow at 0px 4px 20px rgba(0,0,0,0.12) for floating elements, and an inset highlight at 0px 1px 0px rgba(255,255,255,0.1) for depth on dark surfaces.

## Visual language

The visual identity centers on confident scale and restrained color discipline. The Handshake wordmark appears in a custom italic script, rendered in accent lime against dark backgrounds or dark against light surfaces. This logo treatment establishes the brand's energetic but professional tone.

Photography is warm, natural, and ethnically diverse, showing professionals in candid workplace moments. Images receive rounded-corner treatment at xlarge radius when contained, or run full-bleed when serving as hero backgrounds. The photography palette—warm skin tones, neutral clothing, natural environments—contrasts effectively with the cool digital interface.

Iconography and UI accents use simple geometric forms: checkmarks for feature lists, arrows for directional actions, lightning bolts for promotional features. These remain small and functional, never competing with the typographic hierarchy.

The overall density is moderate to sparse on marketing pages, becoming more information-dense on functional surfaces like pricing tables. This density shift is achieved through surface color changes rather than structural complexity—light surfaces naturally support more content without feeling crowded.

## Components

### Top Navigation

- **Anatomy**: Logo left, primary links center, action buttons right
- **Surface**: canvas or canvas-deep background
- **Typography**: navigation token for links, label token for buttons
- **Shape**: Full-width bar, no border radius
- **Spacing**: compact vertical padding, comfortable horizontal padding
- **Composition**: Flex row with space-between alignment, centered links in a cluster
- **Variants**: Transparent overlay on hero sections, solid on scrolled pages

### Promotional Banner

- **Anatomy**: Full-width strip with centered text, optional dismiss button right
- **Surface**: accent background
- **Typography**: navigation token, text-primary-inverse color
- **Shape**: No radius, full bleed
- **Spacing**: compact padding
- **Composition**: Single-line text with inline link, close icon at right edge

### Hero Section

- **Anatomy**: Full-bleed background image or gradient, overlaid display text, optional search input or CTA button
- **Surface**: canvas background with photographic overlay
- **Typography**: hero-display for primary statement, body-large for supporting text
- **Shape**: xlarge radius corners when contained within page margins
- **Spacing**: section-large top padding, section bottom padding
- **Composition**: Centered or left-aligned text, generous vertical centering

### Primary Button

- **Anatomy**: Text label with optional arrow icon
- **Surface**: accent background, text-primary-inverse text
- **Typography**: label token
- **Shape**: pill radius
- **Spacing**: compact vertical padding, comfortable horizontal padding
- **Variants**: Dark variant with surface-inverse background for light contexts

### Secondary Button

- **Anatomy**: Text label with optional icon
- **Surface**: Transparent with border-subtle border
- **Typography**: label token
- **Shape**: pill radius
- **Spacing**: Same as primary button

### Card

- **Anatomy**: Container with title, content, optional action button
- **Surface**: surface background for standard, surface-inverse for featured
- **Typography**: heading for title, body for content
- **Shape**: large radius
- **Spacing**: roomy internal padding
- **Composition**: Vertical stack with consistent gaps

### Pricing Card

- **Anatomy**: Plan name, price, CTA button, feature list with checkmark icons
- **Surface**: surface background
- **Typography**: heading for plan name, body for price details and features
- **Shape**: large radius
- **Spacing**: roomy internal padding, comfortable gaps between sections
- **Variants**: Inverse variant with surface-inverse background for add-on features

### Feature List

- **Anatomy**: Vertical list of items with checkmark prefix
- **Typography**: body token
- **Spacing**: compact between items
- **Composition**: Left-aligned checkmarks with text offset

### Footer

- **Anatomy**: Link columns, app store badges, massive brand logotype, legal row
- **Surface**: canvas background
- **Typography**: navigation for links, hero-display for logotype, ui for legal
- **Spacing**: section-large top padding, comfortable column gaps
- **Composition**: Multi-column link grid above full-width logotype

## Responsive behavior

The system should maintain its core character across viewport sizes. The hero display typography scales down proportionally, with hero-display reducing to section-display on tablet and heading-large on mobile. Navigation collapses to a hamburger menu below desktop breakpoints. Pricing cards stack vertically on narrow viewports, maintaining their internal spacing but losing horizontal arrangement. The massive footer logotype remains full-width but scales down to prevent horizontal overflow. Promotional banners may wrap to two lines on mobile with increased vertical padding.

## Practical implementation guidance

### Preserve
- The strict two-family typographic hierarchy: SansPlomb for display only, NoiGrotesk for everything else
- High contrast between accent and canvas colors; never place accent on light surfaces
- Pill-shaped buttons as the universal interactive element shape
- Generous internal padding on cards and buttons
- Negative letter-spacing across all type sizes

### Avoid
- Adding additional accent colors; the lime-teal pairing is the brand signature
- Using display typography for functional UI elements
- Removing border radius from cards; the softness is integral to the brand
- Placing light-surface cards directly on light backgrounds without visible separation

### Recommended Build Order
1. Establish the dark canvas background and text-primary color
2. Implement the pill button component with accent and secondary variants
3. Build the top navigation with logo, links, and action buttons
4. Create the hero section with display typography and photographic background
5. Develop card components for content and pricing surfaces
6. Implement the footer with link grid and massive logotype

### Accessibility
- Ensure text-primary on canvas backgrounds meets WCAG AA contrast ratios; the near-white on dark teal combination does
- Provide focus indicators on pill buttons that maintain the rounded shape
- Add aria-labels to icon-only buttons like the promotional banner dismiss
- Consider reducing motion for users who prefer it, particularly for any gradient background animations
- Ensure the massive display typography in SansPlomb remains readable through sufficient line-height and word spacing

## Scope note

This guide covers the marketing site surfaces visible in the supplied captures: student and employer landing pages, pricing comparison, and shared navigation/footer components. Dashboard interfaces, mobile applications, email templates, and form validation states are not represented. The exact spacing values for large marketing layouts are practical adaptation targets based on the visible compositions.
