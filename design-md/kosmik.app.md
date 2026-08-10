# How kosmik.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kosmik.app-design)

Last updated: 2026-08-10

## Captured pages

[![Blog listing page with warm cream background, orange accent headlines in card thumbnails, and dark text hierarchy](https://pin.fontofweb.com/1794?format=jpg)](https://design.withfudge.com/share/pin-1794)

[Blog listing page with warm cream background, orange accent headlines in card thumbnails, and dark text hierarchy](https://design.withfudge.com/share/pin-1794)

[![Footer area with three-column link groups, whimsical space illustration with Saturn and astronauts on pale background](https://pin.fontofweb.com/1793?format=jpg)](https://design.withfudge.com/share/pin-1793)

[Footer area with three-column link groups, whimsical space illustration with Saturn and astronauts on pale background](https://design.withfudge.com/share/pin-1793)

[![Kosmik web clipper feature section with orange pill button and product screenshot on cream card](https://pin.fontofweb.com/1792?format=jpg)](https://design.withfudge.com/share/pin-1792)

[Kosmik web clipper feature section with orange pill button and product screenshot on cream card](https://design.withfudge.com/share/pin-1792)

[![Download section with two white platform cards, orange primary buttons and outlined secondary buttons](https://pin.fontofweb.com/1791?format=jpg)](https://design.withfudge.com/share/pin-1791)

[Download section with two white platform cards, orange primary buttons and outlined secondary buttons](https://design.withfudge.com/share/pin-1791)

## Overview

Kosmik presents itself as a creative workspace tool through a website that balances professional clarity with playful personality. The visual system rests on a warm cream canvas that feels approachable and distinct from sterile white SaaS competitors. Bold orange accents punctuate the interface with energy, while the typography pairs a confident editorial display face with clean, readable body text. Whimsical space-themed illustrations—featuring Saturn-like planets, astronauts, and cosmic scenes—reinforce the "Kosmik" brand name without undermining the product's utility. The overall impression is of a tool serious about creative work but not self-serious about itself. Component patterns are consistent and restrained: rounded cards, pill-shaped buttons, and generous whitespace let the illustrations and content breathe.

## Colors

The color system is intentionally warm and limited, creating a recognizable atmosphere through restraint.

| token | value | use |
|---|---|---|
| canvas | #FEF6F0 | Page background, footer area, overall site warmth |
| surface | #FFFFFF | Cards, buttons, elevated panels, blog thumbnails |
| ink | #1A1A1A | Primary headings, body text, navigation links |
| ink-secondary | #4A4A4A | Descriptions, captions, muted supporting text |
| action | #F26B3A | Primary buttons, accent headlines in blog cards, CTAs |
| action-hover | #E05A2A | Hover state for action elements |
| border | #E8E0D8 | Subtle card borders, dividers, hairline rules |
| border-strong | #D4CCC4 | More defined borders when separation needs emphasis |

The warm cream canvas (#FEF6F0) dominates the experience, establishing an immediate emotional difference from neutral gray or pure white competitors. White surfaces create elevation and focus for interactive elements and content containers. The orange action color appears with confidence—never diluted—serving as the single accent hue that carries all interactive energy. Dark ink provides strong contrast without the harshness of pure black. Border colors stay in the warm family, ensuring visual cohesion even at low-contrast boundaries.

## Typography

The type system combines three families with clear role separation: Americane for display authority, Kosmik SF Compact Display for functional clarity, and Super Blue for occasional decorative moments.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Americane | 3rem | 700 | 1.1 | -0.02em | Page titles, major section headers |
| section-display | Americane | 2.5rem | 700 | 1.15 | -0.01em | Section headings, feature titles |
| feature-headline | Americane | 2rem | 700 | 1.2 | 0em | Card titles, product feature names |
| body | Kosmik Sf Compact Display | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, general content |
| body-semibold | Kosmik Sf Compact Display | 1rem | 600 | 1.6 | 0em | Emphasized body text, card subtitles |
| label | Kosmik Sf Compact Display | 0.875rem | 600 | 1.4 | 0.01em | Buttons, tags, small headings |
| navigation | Kosmik Sf Compact Display | 0.875rem | 400 | 1.4 | 0em | Footer links, nav items, secondary paths |
| decorative | Super Blue | 1.25rem | 400 | 1.3 | 0em | Special callouts, brand moments |

Americane, designed by Hannes Von Doehren, supplies the bold editorial voice with its tight tracking and confident weight. Kosmik SF Compact Display, from Apple Inc., handles all functional reading with clean neutrality and excellent screen rendering. Super Blue appears sparingly for moments needing a more casual, hand-drawn personality. Verify licensing for these families before production use.

## Layout

The layout follows a centered content model with generous breathing room. Maximum content width appears to sit around 1200px, with consistent horizontal padding that scales with viewport size. Sections stack vertically with substantial separation—typically 5rem between major content blocks—creating a rhythmic scroll experience.

The grid system favors simplicity: single-column for hero and feature introductions, two-column splits for platform downloads and feature showcases, and three-column grids for blog listings and footer link groups. Cards within grids maintain equal heights through flex or grid alignment, with internal padding of 1.5rem to 2rem creating comfortable text margins.

Vertical rhythm is established through the 0.25rem base unit, with most spacing values building from this foundation: 1rem for tight internal gaps, 1.5rem for content separation, 2rem for card padding, and 5rem for section breaks. The footer breaks from the centered model, stretching full-width with its space illustration bleeding to edges, creating a memorable closing moment.

## Visual language

The visual identity succeeds through the tension between professional structure and playful illustration. The cream canvas and white cards establish trustworthy product credibility, while the space illustrations—rendered in a detailed, slightly retro comic style with crosshatching texture—inject personality and memorability. These illustrations feature Saturn with its distinctive rings, small planetary bodies, astronauts in vintage-style suits, and control panels with glowing screens.

Photography and screenshots appear inside rounded cards with subtle shadows, treated as content rather than background. The blog card thumbnails use a distinctive pattern: bold "Best [Topic]" typography in orange and black against light backgrounds with scattered app icons, creating visual consistency across varied topics.

Iconography is minimal and functional—simple platform logos (Apple, Windows) appear at small scale beside labels. The overall decorative approach favors illustration over abstract shapes or gradients, making the brand feel crafted rather than generated.

## Components

**Primary Action Button**
- Anatomy: Text label centered within a fully rounded pill shape
- Surface: Solid orange (#F26B3A) background with white text
- Typography: label token, semibold weight
- Shape: 9999px border radius for complete pill appearance
- Spacing: 0.875rem vertical padding, 2rem horizontal padding
- Composition: Often paired with secondary button, left-aligned in card contexts

**Secondary Action Button**
- Anatomy: Text label centered within outlined pill shape
- Surface: White background with dark text, subtle border (#E8E0D8)
- Typography: label token, semibold weight
- Shape: 9999px border radius matching primary
- Spacing: Identical padding to primary for visual pairing
- Variants: Appears beside primary in platform download cards

**Feature Card**
- Anatomy: White container with rounded corners, optional subtle border
- Surface: #FFFFFF with 1rem border radius
- Spacing: 1.5rem internal padding
- Composition: Holds text content left, screenshot or media right in two-column layout
- Variants: Web clipper card shows product screenshot with play button overlay

**Platform Download Card**
- Anatomy: White card with platform icon, headline, description, and two action buttons
- Surface: #FFFFFF with 1rem border radius, generous 2rem padding
- Typography: feature-headline for platform name, body for description
- Composition: Icon and label stacked above text, buttons aligned at bottom in row
- Variants: macOS card shows Apple Silicon (primary) and Intel (secondary); Windows card shows Intel-AMD (primary) and ARM chips (secondary)

**Blog Card**
- Anatomy: Thumbnail image top, title and description below
- Surface: White container with rounded corners, image fills top portion
- Typography: body-semibold for title, body for description in ink-secondary
- Composition: Thumbnail aspect ratio consistent across grid, text padding below
- Visual character: Thumbnails use bold orange and black typography with scattered app icons

**Footer**
- Anatomy: Three-column link grid above large space illustration
- Surface: Cream canvas background, no card container
- Typography: navigation token for links, label token for column headers
- Composition: Links grouped under semantic headers (Start creating, About Kosmik, Let's be friends), illustration bleeds full-width below
- Special element: "Designed in Paris, with love" with croissant emoji adds human touch

## Responsive behavior

The layout should maintain its centered container approach across viewports, with horizontal padding increasing on larger screens. The three-column blog grid should collapse to two columns on tablet and single column on mobile, maintaining card proportions. The two-column platform download cards should stack vertically on narrow viewports, with buttons expanding to full width.

The footer link groups should reorganize from three columns to stacked sections on mobile, preserving the illustration's full-width presentation. Typography should scale down proportionally: hero-display reducing to 2rem on mobile, section-display to 1.75rem, maintaining readability without overwhelming small screens.

Button touch targets should maintain minimum 44px height on all viewports. The cream canvas and white card contrast should remain consistent; avoid introducing dark mode without dedicated design exploration as the warm palette is integral to brand recognition.

## Practical implementation guidance

**Preserve**
- The warm cream canvas as the dominant background; it differentiates Kosmik immediately
- The orange accent as the sole action color; do not introduce competing accent hues
- The pill-shaped button treatment; the fully rounded form is a recognizable signature
- The generous section spacing; the airy rhythm supports the creative positioning
- The illustration style and placement; the space theme is core to brand memory

**Avoid**
- Pure white (#FFFFFF) as page background; it loses the distinctive warmth
- Additional accent colors beyond orange; the limited palette is intentional
- Sharp-cornered cards or buttons; rounding is consistent across all surfaces
- Tight packing of elements; whitespace is part of the premium feel
- Generic stock photography; the custom illustration style sets the tone

**Recommended Build Order**
1. Establish the cream canvas and white surface tokens globally
2. Implement the typography scale with Americane for display, Kosmik SF Compact Display for body
3. Build the pill button component with primary and secondary variants
4. Create the rounded card container with consistent padding
5. Implement the two-column platform download section as a layout test
6. Add the blog grid with thumbnail treatment
7. Integrate the footer with link groups and illustration placement

**Accessibility**
- Ensure orange action buttons meet WCAG contrast against white text (current orange may need darkening for small text)
- Maintain focus indicators that respect the rounded button shapes
- Provide alt text for space illustrations that conveys their decorative purpose
- Use semantic heading hierarchy with Americane display sizes mapping to h1-h3
- Ensure footer links have adequate touch targets on mobile

## Scope note

This guide covers the marketing site surfaces visible in the supplied images: homepage feature sections, platform downloads, blog listing, and footer. Product interface, pricing pages, authentication flows, and mobile-specific layouts are not represented. Motion, hover states, and loading behavior are not documented. Measurements are practical adaptation targets derived from visual inspection.
