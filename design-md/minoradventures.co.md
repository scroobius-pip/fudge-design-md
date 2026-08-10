# How minoradventures.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/minoradventures.co-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with oversized 'MinorAdventures' wordmark, navigation links, contact details, and email subscription form on dark background](https://pin.fontofweb.com/8712?format=jpg)](https://design.withfudge.com/share/pin-8712)

[Footer section with oversized 'MinorAdventures' wordmark, navigation links, contact details, and email subscription form on dark background](https://design.withfudge.com/share/pin-8712)

[![Portfolio grid showing Wayflyer and Pafyll icon system case studies with mixed light and dark card backgrounds](https://pin.fontofweb.com/8711?format=jpg)](https://design.withfudge.com/share/pin-8711)

[Portfolio grid showing Wayflyer and Pafyll icon system case studies with mixed light and dark card backgrounds](https://design.withfudge.com/share/pin-8711)

[![Product showcase section featuring Amicons and Smallbits icon sets with serif titles and black purchase buttons](https://pin.fontofweb.com/8710?format=jpg)](https://design.withfudge.com/share/pin-8710)

[Product showcase section featuring Amicons and Smallbits icon sets with serif titles and black purchase buttons](https://design.withfudge.com/share/pin-8710)

[![Hero banner with massive condensed 'MinorAdventures' display type and serif tagline on near-black background](https://pin.fontofweb.com/8709?format=jpg)](https://design.withfudge.com/share/pin-8709)

[Hero banner with massive condensed 'MinorAdventures' display type and serif tagline on near-black background](https://design.withfudge.com/share/pin-8709)

## Overview

Minor Adventures presents itself as an independent icon foundry and design studio with a visual language built on radical contrast and typographic confidence. The design system centers on a near-black and white palette that lets the studio's colorful icon work speak for itself. The interface alternates between light and dark surfaces with decisive section breaks, creating a rhythm that feels editorial rather than corporate. The most distinctive element is the massive condensed wordmark that anchors the footer and hero areas—letterforms so tightly packed they become a graphic texture rather than mere text. This is paired with an elegant serif face for product names and section headings, creating a tension between industrial boldness and craft refinement. The overall impression is of a studio that trusts its own eye: generous whitespace, precise alignment, and no decorative flourishes beyond the letterforms themselves.

## Colors

The palette is intentionally minimal, built from absolute values that create maximum contrast for showcasing icon work.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text on light surfaces, button backgrounds, icon strokes |
| canvas | #FFFFFF | Page background, text on dark surfaces, input fields |
| surface | #131313 | Footer background, hero background, dark sections |
| action | #000000 | Primary button fill, interactive emphasis |
| muted | #0000EE | Link color in specific contexts |

The system operates in two modes: light mode uses canvas backgrounds with ink text for product showcases and editorial content, while dark mode uses surface backgrounds with canvas text for the hero, footer, and select portfolio sections. The near-black surface (#131313) is warm enough to avoid the harshness of pure black while maintaining the depth needed for white typography to glow. No gradients or shadows appear in the interface; depth is created solely through color blocking and scale. The muted blue appears sparingly, reserved for hyperlinks where standard browser conventions apply. When colorful icon sets appear in product cards or portfolio pieces, they provide the only chromatic moments against this restrained ground.

## Typography

The type system pairs two distinct voices: Instrument Sans for all interface and display text, and Instrument Serif for product titles and editorial accents. Instrument Sans, designed by Rodrigo Fuenzalida and available from Frag Type, contributes a contemporary grotesque with confident weight and slightly tight proportions. Instrument Serif provides classical contrast with sharp, high-contrast strokes that lend sophistication to product names. The design also employs System-Sansserif at 12px for underlying structural text, though this family serves a supporting role rather than appearing in the primary visual hierarchy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Sans | 4.5rem | 600 | 1 | -0.02em | Massive footer wordmark, oversized branding |
| section-display | Instrument Serif | 3.5rem | 400 | 1 | -0.02em | Product names like "Amicons", "Smallbits" |
| body | Instrument Sans | 1.125rem | 600 | 1.4 | -0.02em | Descriptions, body copy, navigation links |
| body-small | Instrument Sans | 0.875rem | 500 | 1.4 | -0.02em | Captions, metadata, legal text |
| label | Instrument Sans | 1rem | 600 | 1.4 | -0.02em | Button text, form labels |
| navigation | Instrument Sans | 1.125rem | 600 | 1.2 | -0.02em | Footer links, primary navigation |

The hero-display size at 72px (4.5rem) creates the compressed architectural presence seen in the "MinorAdventures" wordmark. Section-display at 56px (3.5rem) serves product titles with serif elegance. Body text at 18px (1.125rem) maintains readability with semibold weight for confident presence. Letter spacing is consistently tight across all sizes, creating a slightly aggressive, contemporary feel. Line heights are tight for display sizes (1.0) and relaxed for body (1.4) to maintain readability. Verify licensing for these families before production use.

## Layout

The layout follows a two-column editorial structure with asymmetric relationships between text and image. Content areas are bounded by consistent padding rather than max-width containers, creating a sense of spaciousness that bleeds to viewport edges.

The base spacing unit is 0.3125rem (5px), with content padding at 1.25rem (20px) and generous section spacing at 8.75rem (140px). This creates substantial vertical breathing room between major sections. The footer uses a two-column grid: navigation and contact information on the left, subscription form and social links on the right, with the massive wordmark spanning the full width below.

Product cards and portfolio items use a split composition: titles and descriptions occupy the left portion, while icon previews and imagery fill the right. This ratio shifts based on content density—product showcases favor more space for descriptive text, while portfolio grids allow imagery to dominate. The hero section is radically simple: full-width surface background, centered or offset display type, and minimal supporting text.

Grid gaps and internal spacing rely on the 5px base unit multiplied to practical values: 20px for card padding, 50px for internal column separation, 80px for medium section breaks, and 140px for major section divisions. All corners remain sharp at 0rem radius, reinforcing the precise, engineered quality appropriate for an icon foundry.

## Visual language

The visual identity is built on the principle that the icons themselves are the ornament. The interface provides a neutral, confident stage. Photography and icon previews appear in their native form without frames, shadows, or effects—direct presentation that treats the work with respect.

The massive "MinorAdventures" wordmark functions as both logo and graphic element, its letterforms so large that individual characters become abstract shapes. This creates a distinctive footer signature that anchors every page. The contrast between the compressed sans-serif wordmark and the delicate serif product titles establishes a hierarchy of voice: bold institutional presence versus refined product craft.

Icon previews are displayed at generous sizes, often arranged in grids that demonstrate systematic thinking. Colorful icon sets appear against black backgrounds in product cards, while monochrome system icons appear against light or neutral grounds in portfolio pieces. The studio's own identity remains monochrome throughout, reserving color for client work.

The overall tone is confident without being flashy, editorial without being austere. There is a sense of material quality—the digital equivalent of letterpress stationery or a well-bound specimen book.

## Components

### Primary action button

- **Anatomy**: Text label centered within a rectangular button
- **Surface**: Solid ink (#000000) background with canvas (#FFFFFF) text
- **Typography**: label token at 1rem, weight 600
- **Shape**: 0rem border-radius, sharp corners
- **Spacing**: Generous internal padding, approximately 1.25rem vertical and 2.5rem horizontal
- **Composition**: Full-width within its container in product cards, creating a solid bar of action
- **Variants**: Appears in product cards as "Buy" and in subscription forms as "Subscribe"

### Product card

- **Anatomy**: Product title in serif, description in sans-serif, price/metadata line, full-width action button, icon preview image
- **Surface**: Canvas background with ink text; icon preview may appear on black background
- **Typography**: section-display for product name, body for description, body-small for price
- **Shape**: Sharp corners at 0rem radius, no border
- **Spacing**: Content padding of 1.25rem, substantial vertical space between elements
- **Composition**: Two-column layout with text left and preview right, or stacked with preview above

### Portfolio case study card

- **Anatomy**: Project image, title in sans-serif, description in sans-serif, client and year metadata
- **Surface**: Alternates between canvas and dark backgrounds; some cards use colored grounds from client branding
- **Typography**: body at 1.25rem weight 600 for titles, body-small for metadata
- **Shape**: Sharp corners at 0rem radius, images bleed to card edges
- **Spacing**: Internal padding varies by card type; text sits directly on image or adjacent with clear separation
- **Composition**: Grid layout with varying aspect ratios; some cards span full width, others pair in two-column arrangements

### Footer

- **Anatomy**: Navigation links, contact details, social links, email subscription form, massive wordmark, copyright
- **Surface**: Surface (#131313) background with canvas text
- **Typography**: body-small for links and contact, hero-display for wordmark
- **Shape**: Full-width, sharp top edge at 0rem radius
- **Spacing**: Generous internal padding; wordmark bleeds to edges with minimal side padding
- **Composition**: Two-column upper section, full-width wordmark below, copyright in lower right

### Email subscription form

- **Anatomy**: Text input field with email placeholder, submit button
- **Surface**: Canvas input field with ink border or rule, ink button with canvas text
- **Typography**: body-small for input text, label for button
- **Shape**: Sharp corners at 0rem radius on both elements
- **Spacing**: Tight integration between input and button, minimal external spacing

### Navigation link

- **Anatomy**: Text link, no underline in default state
- **Surface**: Transparent background
- **Typography**: navigation token
- **Shape**: Inline
- **Spacing**: Standard inline spacing
- **Variants**: Footer navigation uses stacked vertical list; header navigation uses horizontal arrangement

## Responsive behavior

The design's two-column editorial structure should collapse to single-column on narrower viewports, with the massive wordmark scaling down proportionally to maintain legibility without overflow. Product cards should stack vertically, placing the icon preview above the description and action button. The footer should reorganize from two columns to a single column with navigation, contact, subscription form, and wordmark in vertical sequence.

The tight letter spacing on display sizes may require slight loosening at smaller sizes to maintain character definition. Body text at 1.125rem should remain comfortable for reading without reduction on mobile devices. Portfolio grids should transition from mixed two-column and full-width layouts to a consistent single-column scroll.

Touch targets for navigation links and buttons should maintain adequate size, with the full-width button pattern in product cards naturally accommodating finger-friendly interaction.

## Practical implementation guidance

### Preserve
- The absolute contrast between ink and canvas; do not introduce intermediate grays for text
- The sharp 0rem corners throughout all components
- The tight letter spacing that gives the type its contemporary edge
- The two-column editorial asymmetry in product and portfolio layouts
- The massive wordmark as a distinctive footer and hero element
- The pairing of Instrument Sans for interface and Instrument Serif for product/editorial moments

### Avoid
- Rounded corners on any component; they contradict the precise, engineered aesthetic
- Drop shadows, gradients, or other dimensional effects
- Color in the studio's own interface elements beyond the specified palette
- Centered text blocks for body copy; maintain left-aligned editorial rhythm
- Generic placeholder imagery; the design depends on showcasing actual icon work

### Recommended build order
1. Establish the color tokens and base typography scale with Instrument Sans and Instrument Serif
2. Build the hero section with surface background and centered or offset display type
3. Implement the two-column product card with serif titles and full-width action buttons
4. Create the portfolio grid with alternating surface treatments
5. Construct the footer with two-column upper section and massive full-width wordmark
6. Add the subscription form with sharp-cornered input and button
7. Refine spacing and vertical rhythm with the 140px section breaks

### Accessibility
- Ensure the massive wordmark has appropriate aria-label treatment since it functions as both graphic and text
- Maintain sufficient color contrast: ink on canvas and canvas on surface both exceed WCAG AA requirements
- The tight line heights on display sizes (1.0) are acceptable for short text but should not be used for multi-line body content
- Form inputs should have visible focus indicators that respect the sharp-corner aesthetic
- Consider reduced-motion preferences for any scroll-triggered animations of the wordmark or portfolio items

## Scope note

This guide covers the homepage and primary landing surfaces of Minor Adventures, including the hero, product showcase, portfolio grid, and footer. Interior pages, individual product detail pages, checkout flows, and mobile-specific layouts are not represented in the supplied material. Motion behavior, hover states, and loading sequences are not documented. The System-Sansserif family appears in the underlying structure but is not part of the primary visual hierarchy. Measurements reflect the exact values from the interface.
