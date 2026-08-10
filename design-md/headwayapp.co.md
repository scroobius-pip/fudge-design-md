# How headwayapp.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/headwayapp.co-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large dark headline, blue pill button, and colorful abstract logo mark on white canvas](https://pin.fontofweb.com/3956?format=jpg)](https://design.withfudge.com/share/pin-3956)

[Hero section with large dark headline, blue pill button, and colorful abstract logo mark on white canvas](https://design.withfudge.com/share/pin-3956)

[![Product illustration showing public changelog page and in-product widget with blue, cyan, and purple status badges](https://pin.fontofweb.com/3957?format=jpg)](https://design.withfudge.com/share/pin-3957)

[Product illustration showing public changelog page and in-product widget with blue, cyan, and purple status badges](https://design.withfudge.com/share/pin-3957)

[![Pricing section with Free and Pro tier cards, geometric decorative shapes, and blue price accent](https://pin.fontofweb.com/3959?format=jpg)](https://design.withfudge.com/share/pin-3959)

[Pricing section with Free and Pro tier cards, geometric decorative shapes, and blue price accent](https://design.withfudge.com/share/pin-3959)

[![Features grid with eight capability cards and six customer testimonials with avatar photos and company logos](https://pin.fontofweb.com/3958?format=jpg)](https://design.withfudge.com/share/pin-3958)

[Features grid with eight capability cards and six customer testimonials with avatar photos and company logos](https://design.withfudge.com/share/pin-3958)

## Overview

Headway presents itself as a friendly, approachable SaaS product for changelog communication. The visual system rests on a stark white canvas with generous breathing room, letting the content and playful geometric illustrations speak clearly. Dark navy-blue headlines anchor each section with confident weight, while a single vibrant blue handles every interactive moment. The overall impression is lightweight and trustworthy—professional without corporate heaviness. Decorative elements appear as flat, colorful geometric shapes (circles, triangles, hexagons) that add personality without clutter. The site communicates through a clear hierarchy: large display type for promises, medium weight for section headers, and regular weight for supporting explanations. Customer social proof sits in a clean grid with small avatar photos and company attribution, reinforcing credibility through restraint rather than density.

## Colors

The palette is intentionally minimal, with one strong accent against a near-neutral ground. The blue action color carries all interactive energy, while the dark ink provides reading weight without pure black harshness.

| token | value | use |
|---|---|---|
| action | #0066FF | Primary buttons, price figures, status badges, and interactive highlights |
| ink | #1A1A2E | Headlines, feature titles, navigation text, and primary reading matter |
| muted-ink | #6B7280 | Body copy, feature descriptions, testimonial quotes, and secondary labels |
| canvas | #FFFFFF | Page background, card surfaces, and testimonial areas |
| surface | #F9FAFB | Pricing card backgrounds and subtle elevated containers |
| border | #E5E7EB | Card outlines, dividers, and subtle structural boundaries |

The interface operates in a light mode exclusively across the visible pages. The action blue appears at full saturation for buttons and price callouts, creating immediate focal points against the white ground. The dark ink reads as a deep navy rather than pure black, softening the contrast slightly for extended reading. Muted ink serves all secondary and tertiary text, establishing clear hierarchy without introducing additional hues. The surface gray appears only in contained components like pricing cards, providing just enough differentiation from the canvas without visual weight. Decorative illustrations introduce additional colors—yellow, cyan, coral, purple—but these remain confined to product imagery and geometric accents, never appearing in functional UI elements.

## Typography

The design uses Graphik Web at Medium weight for headlines and Regular weight for body content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Graphik Web | 3rem | 500 | 1.1 | -0.02em | Homepage hero headline and major section titles |
| section-display | Graphik Web | 2rem | 500 | 1.2 | -0.01em | Section headers like "Pricing." and "But wait, there's more." |
| body | Graphik Web | 1rem | 400 | 1.6 | 0em | Descriptive paragraphs and longer explanations |
| body-small | Graphik Web | 0.875rem | 400 | 1.5 | 0em | Feature descriptions, testimonial quotes, and card content |
| label | Graphik Web | 0.75rem | 500 | 1.4 | 0.02em | Status badges, small tags, and category labels |
| navigation | Graphik Web | 0.875rem | 400 | 1 | 0em | Top-bar links and utility text |

Graphik Web is designed by Christian Schwartz and distributed by Commercial Type. Blokk Neue is designed and distributed by Los Gordos. Verify licensing for these families before production use.

The type scale builds from a 0.25rem relative unit, with sizes landing at 12px, 14px, 16px, 32px, and 48px equivalents. Headlines use tight negative tracking for a compact, modern feel, while body text maintains neutral spacing for readability. Line heights stay compact for display type and generous for reading passages.

## Layout

The page employs a centered single-column layout with moderate maximum width, creating comfortable reading measure without excessive whitespace at the edges. Sections stack vertically with substantial padding between them, typically 5rem or more, allowing each topic to breathe independently.

The hero section positions the headline left-aligned with the primary action button beneath it, while the colorful logo mark sits centered in the navigation bar above. This creates an asymmetrical but balanced composition that draws the eye down through the promise to the call-to-action.

The features grid uses a three-column layout for capability cards, each containing a bold title and muted description. Below this, testimonials span the full width in a multi-column arrangement with avatar photos, quoted text, and company attribution. The testimonial grid appears to use either two or three columns depending on available width, with consistent internal spacing between cards.

The pricing section presents two cards side by side: a minimal Free tier on the left and a more visually active Pro tier on the right. The Pro card gains emphasis through a light gray background and decorative geometric shapes floating at its edges. Both cards center their content internally.

Product illustration sections show side-by-side comparisons—public changelog page versus in-product widget—each framed as a browser or interface mockup. These sit centered with explanatory labels above and a link list below.

Navigation remains minimal: a centered logo with sparse text links to either side. The right side includes an account utility with an arrow indicator. No heavy navigation chrome or dropdown patterns are visible.

## Visual language

The aesthetic balances professional clarity with playful personality. Geometric illustrations in flat, saturated colors—coral circles, cyan triangles, yellow discs, purple hexagons—appear as decorative accents within product cards and pricing tiers. These shapes have no gradients, shadows, or dimensional effects; they read as pure color forms against white or light gray grounds.

Interface mockups in the product section use simplified browser chrome with red, yellow, and green window dots, reinforcing the SaaS context without visual noise. Status indicators within these mockups appear as small rounded badges: blue for "New," cyan for "Fix," purple for "Bug." These follow the same flat, high-contrast approach as the broader palette.

The logo mark itself translates this geometric language into four vertical rounded rectangles in cyan, yellow, coral, and purple—abstract enough to feel modern, colorful enough to feel approachable. No photography appears in the visible interface; all imagery is illustrative or typographic.

Shadows are absent or extremely subtle. Elevation is communicated through background color shifts rather than depth effects. The pricing card's surface gray provides its only sense of layering.

## Components

### Primary action button

A pill-shaped button with fully rounded ends, filled with the action blue and white text. The button carries medium-weight text at small body size, with comfortable horizontal padding that makes it feel substantial without dominating. No visible border, shadow, or outline variant appears.

### Pricing card

Two variants exist. The Free tier uses a white background with minimal structure—centered tier name, decorative illustration, and a list of features in muted ink. The Pro tier uses the surface gray background, adds floating geometric shapes at the edges, and prominently displays the price in action blue with a "/ month" suffix in muted ink. Both cards share the same rounded corner treatment and internal padding. Feature lists center-align with comfortable line spacing between items.

### Feature card

A simple text-only component with a bold title in ink and a description in muted ink beneath. No icon, border, or background distinguishes individual cards; they rely on grid positioning and whitespace for separation. Titles use section-display size or slightly smaller, while descriptions use body-small.

### Status badge

Small rounded rectangles with solid fill backgrounds and white text. The visible variants use blue for "New," cyan for "Fix," and purple for "Bug." These appear within product mockups rather than as live UI, suggesting they represent the product's content system rather than the marketing site's own components.

### Testimonial card

Each testimonial combines a small circular avatar photo, a quote in body-small with selective bold phrases for emphasis, and an attribution line with the reviewer's name and company logo. The quote text uses muted ink with inline bold segments in the same color for emphasis. Company logos appear as small inline images or text marks. No card container, border, or background separates testimonials; they flow in a clean grid.

### Navigation bar

Minimal horizontal bar with text links in muted ink, a centered colorful logo mark, and a right-aligned account link with an arrow suffix. The bar appears transparent or white without visible border or shadow, sitting lightly above the hero content.

## Responsive behavior

The visible pages show desktop-width layouts. The generous whitespace and centered single-column structure suggests the design adapts to narrower viewports by stacking multi-column grids into single columns and reducing headline sizes proportionally. The three-column features grid should collapse to one column on small screens, with feature cards maintaining their internal spacing. The two-column pricing comparison would stack with the Pro tier following the Free tier. Testimonials would likely move from a multi-column masonry-like arrangement to a single vertical stack. The navigation bar may compress to a hamburger menu or simplified link set, though no mobile pattern is visible in the supplied images. Touch targets should maintain at least 44px height for the pill button and navigation links.

## Practical implementation guidance

### Preserve
- The stark white canvas as the dominant ground; resist adding background tints or textures
- The single blue accent for all interactive and emphasized elements; do not introduce additional action colors
- Generous section spacing that lets each topic breathe independently
- Flat geometric illustrations without gradients, shadows, or dimensional effects
- The tight negative tracking on display headlines for compact modern feel
- Selective bold phrases within testimonial quotes for scannable emphasis

### Avoid
- Dark mode implementations not supported by the visible interface
- Card shadows or elevation effects; use background color shifts instead
- Multiple button color variants; the blue pill is the sole interactive expression
- Pure black text; maintain the navy ink warmth for readability comfort
- Dense packing of testimonials or features; whitespace is structural

### Recommended build order
1. Establish the white canvas and dark ink text defaults with Graphik Web
2. Implement the hero section with hero-display headline and primary action button
3. Build the navigation bar with centered logo and minimal link set
4. Create the features grid with consistent card spacing and typography
5. Add the pricing section with two-tier card layout and decorative shapes
6. Implement testimonial grid with avatar photos and inline bold emphasis
7. Polish with product illustration section and status badge components

### Accessibility
- Ensure the action blue meets WCAG contrast requirements against white for text and interactive elements
- Maintain sufficient color distinction between status badge variants for colorblind users; consider shape or label redundancy
- Provide focus indicators for the pill button and navigation links that are visible against the white ground
- Use semantic heading hierarchy with a single h1 in the hero and descending levels for sections
- Testimonial avatars should include alt text with reviewer names

## Scope note

This guide covers the Headway marketing homepage visible in the supplied images, including hero, features, pricing, testimonials, and product illustration sections. Footer content, additional interior pages, mobile breakpoints, animation, form interactions, and dashboard interfaces are not represented. Measurements are practical adaptation targets.
