# How ramp.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ramp.com-design)

Last updated: 2026-08-10

## Captured pages

[![Customer testimonial grid with rounded cards, avatars, and a centered section headline on a light canvas.](https://pin.fontofweb.com/9052?format=jpg)](https://design.withfudge.com/share/pin-9052)

[Customer testimonial grid with rounded cards, avatars, and a centered section headline on a light canvas.](https://design.withfudge.com/share/pin-9052)

[![AI feature section with a policy document preview card, a customer quote, and a split editorial layout.](https://pin.fontofweb.com/9051?format=jpg)](https://design.withfudge.com/share/pin-9051)

[AI feature section with a policy document preview card, a customer quote, and a split editorial layout.](https://design.withfudge.com/share/pin-9051)

[![Video testimonial with a large lifestyle photograph, a watch-video button, and a smaller customer story card.](https://pin.fontofweb.com/9050?format=jpg)](https://design.withfudge.com/share/pin-9050)

[Video testimonial with a large lifestyle photograph, a watch-video button, and a smaller customer story card.](https://design.withfudge.com/share/pin-9050)

[![Product UI montage showing flight search, policy checking, and expense cards under a centered headline.](https://pin.fontofweb.com/9049?format=jpg)](https://design.withfudge.com/share/pin-9049)

[Product UI montage showing flight search, policy checking, and expense cards under a centered headline.](https://design.withfudge.com/share/pin-9049)

## Overview

Ramp's homepage presents a confident, editorial visual system built for a finance platform serving tens of thousands of teams. The design language leans into restraint: a near-black and warm-white palette, a single Swiss typeface at multiple scales, and generous breathing room between elements. The overall impression is of a premium product that does not need to shout—authority comes from precision, not decoration.

The page alternates between dark and light modes section by section, creating rhythm without visual fatigue. Product interfaces appear as realistic cards and screenshots, grounding abstract claims in tangible software. Customer stories are woven throughout, presented as testimonial grids, video features, and pull quotes with portrait photography. The hierarchy is flat but clear: large display type for section openers, medium weight for subheads, and a consistent 16px body size for reading. Every component shares the same rounded corner language, from buttons to cards to video overlays, giving the system a unified, friendly precision.

## Colors

The Ramp palette is intentionally narrow, built around a warm neutral system that shifts between deep ink and soft canvas.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary text, dark section backgrounds, primary buttons |
| muted-ink | #1A1919 | Borders on secondary buttons, subtle UI dividers |
| surface | #212121 | Video overlay buttons, elevated dark surfaces |
| canvas | #F4F2F0 | Light section backgrounds, warm neutral ground |
| paper | #FFFFFF | Card backgrounds, content panels, button text on dark |

The color logic follows a warm-dark / warm-light alternation. Dark sections use ink backgrounds with paper text; light sections use canvas or paper backgrounds with ink text. The canvas tone is distinctly warm—an off-white with subtle peach undertones that prevents sterility. Product screenshots and interface cards typically sit on paper or canvas, while editorial photography receives no color treatment, letting natural tones breathe. No accent colors appear in the interface itself; any color comes from customer logos, photography, or product UI screenshots embedded within cards.

## Typography

Ramp uses Twk Lausanne and Twk Lausanne-400 as its type families, creating a monolithic, Swiss-influenced hierarchy through size and leading alone.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Twk Lausanne | 3rem | 400 | 1.04 | -0.01em | Section headlines, page titles |
| section-display | Twk Lausanne | 2.5rem | 400 | 1.05 | -0.005em | Medium section headers |
| medium-display | Twk Lausanne | 1.75rem | 400 | 1.14 | normal | Subsection titles, card headers |
| body | Twk Lausanne | 1rem | 400 | 1.5 | normal | Primary body text, navigation |
| body-small | Twk Lausanne | 0.875rem | 400 | 1.43 | normal | Captions, metadata, card text |
| body-large | Twk Lausanne | 1.25rem | 400 | 1.3 | normal | Lead paragraphs, hero descriptions |
| label | Twk Lausanne | 0.625rem | 400 | 2 | 0.018em | Eyebrows, micro-labels, tags |
| navigation | Twk Lausanne | 0.875rem | 400 | 1.71 | normal | Header links, menu items |

Twk Lausanne and Twk Lausanne-400 are designed by Nizar Kazan and distributed by Typeweltkern. Verify licensing for these families before production use.

The type system is notable for its weight discipline: everything is Regular (400). Emphasis comes from size contrast and tight tracking on display sizes, not from bolding. Display sizes use negative tracking for a refined, editorial density, while body sizes breathe with generous leading. The label size is unusually small at 10px, reserved for eyebrow text above headlines.

## Layout

The page uses a centered, max-width container system with generous horizontal padding. Content blocks are separated by substantial vertical whitespace, creating clear section boundaries without heavy rules.

The main content container appears to max out around 132.5px margins on each side at desktop widths, with 64px of internal padding creating the actual text boundary. This produces a comfortable reading measure and substantial side margins that feel premium rather than empty.

Section spacing follows a 4rem to 6rem rhythm, with major sections receiving the larger value and internal component groups the smaller. Cards and panels use 24px internal padding as a standard, with some policy cards expanding to 32px on top and bottom for visual weight.

The testimonial grid uses a multi-column layout with consistent 1rem gaps between cards. Cards themselves have no visible border, relying on shadow and background contrast to separate from the canvas. The product UI montage section uses a more complex, layered composition with overlapping cards at varying scales, suggesting depth and interconnected functionality.

Responsive behavior likely collapses the multi-column grids to single columns and reduces horizontal padding, though the exact breakpoints are not visible. The generous margins and padding suggest a tablet-first approach where content remains readable without drastic reflow.

## Visual language

The visual language is defined by rounded rectangles, soft shadows, and photographic realism. Every container—buttons, cards, video overlays—shares a rounded corner vocabulary that ranges from 6px for small elements to 12px for cards and 8px for intermediate panels. This creates a family resemblance across all interactive and presentational surfaces.

Photography is treated editorially: full-bleed lifestyle images with natural lighting, no color grading, and subjects in authentic environments. The video testimonial section shows a spacious office interior with a seated figure, the image cropped to a rounded rectangle that matches card proportions. Customer portraits in testimonial cards are small, circular avatars with company logos beside them.

Product interfaces are presented as realistic screenshots embedded in cards, often with subtle shadows that lift them from the background. The policy document card shows a PDF preview with metadata rows—date, visibility, owners—rendered in the same type system as the marketing page itself, blurring the line between marketing and product.

The overall motion language is implied to be smooth and deliberate, with the layered product cards suggesting parallax or scroll-triggered reveals. No harsh transitions or aggressive animations are suggested by the static compositions.

## Components

### Testimonial card

Anatomy: Rounded rectangle with 24px padding, containing a header row (avatar + name + title) and a body quote. Cards sit in a grid with 1rem gaps.

Surface: Paper background (#FFFFFF), no visible border, subtle shadow implied by separation from canvas.

Typography: Name in body-small at 14px, title in body-small with muted opacity, quote in body-small with standard ink color.

Shape: 12px border radius.

Spacing: 24px internal padding, 1rem grid gap.

Composition: Grid of 4-5 columns on desktop, likely single column on mobile. Cards are equal height within rows.

### Policy document card

Anatomy: Larger rounded panel with structured content—title row with PDF badge, metadata rows with icons, and a body section with highlighted text.

Surface: Paper background, elevated above canvas through size and padding contrast.

Typography: Title in medium-display at 28px, metadata in body at 16px, highlighted policy text in body with color emphasis.

Shape: 12px border radius, generous internal padding (32px top/bottom, 24px sides).

Composition: Positioned as a focal element in a split layout, often beside editorial text and a customer quote.

### Video overlay button

Anatomy: Pill-shaped button with play icon and "Watch Video" label, positioned over a large photographic image.

Surface: Dark semi-transparent background (#212121 or similar), paper text and icon.

Typography: body-small at 14px.

Shape: Full pill (9999px radius), 12px-16px vertical padding, 24px horizontal padding.

Composition: Centered or bottom-centered over the image, creating a clear call-to-action without obscuring photography.

### Primary button

Anatomy: Solid dark rectangle with centered text.

Surface: Ink background (#000000), paper text (#FFFFFF).

Typography: body-small at 14px, or body at 16px for larger instances.

Shape: 12px border radius, 12px-16px padding.

### Secondary button

Anatomy: Outlined rectangle with centered text, often with an arrow icon.

Surface: Transparent background, ink text, 1px muted-ink border.

Typography: body-small at 14px.

Shape: 12px border radius.

### Section header

Anatomy: Centered text block with optional eyebrow label above.

Surface: Transparent, inheriting section background.

Typography: Eyebrow in label at 10px with positive tracking, headline in hero-display at 48px with negative tracking, subhead in body-large at 20px.

Spacing: 24px-32px margin below headline before content begins.

## Responsive behavior

The design appears built for a desktop-primary experience with graceful degradation to smaller viewports. The 64px horizontal padding and 132.5px margins suggest a container that scales down proportionally. Multi-column grids like the testimonial section should collapse to 2 columns on tablet and 1 column on mobile, maintaining card proportions and internal padding.

The split editorial layouts—text left, product card right—should stack vertically on narrow viewports, with the visual element preceding or following the text depending on narrative priority. Video testimonial sections with large imagery should maintain aspect ratio, with the overlay button scaling down but remaining tappable.

Type sizes should reduce modestly: hero-display from 48px to 36px to 28px, section-display from 40px to 28px, maintaining the same weight and tracking relationships. Body text remains 16px across all breakpoints for readability.

## Practical implementation guidance

### Preserve
- The single-type-family hierarchy; do not introduce additional weights or families for emphasis.
- The warm canvas (#F4F2F0) against pure paper (#FFFFFF) for section alternation.
- The 12px card radius and 6px small-element radius as consistent shape language.
- Generous whitespace; the premium feel depends on margins and padding, not decoration.
- Editorial photography treatment: natural, ungraded, full-bleed with rounded corners.

### Avoid
- Adding accent colors to the interface palette; the system derives color from content, not chrome.
- Using bold weights for emphasis; rely on size and tracking instead.
- Tightening body text leading below 1.5; the 24px line-height at 16px is essential for readability.
- Removing the negative tracking from display sizes; it provides the refined, editorial density.

### Recommended build order
1. Establish the type system with Twk Lausanne and Twk Lausanne-400 at all defined sizes and weights.
2. Implement the color tokens and section background alternation.
3. Build the card component with correct radius, padding, and shadow.
4. Create the section header pattern with eyebrow, headline, and subhead spacing.
5. Implement the split editorial layout with text and product card composition.
6. Add the testimonial grid with avatar headers and quote body.
7. Polish with the video overlay button and secondary button patterns.

### Accessibility
- Ensure the 10px label size meets WCAG requirements when used; consider 12px minimum for critical information.
- Maintain 4.5:1 contrast for all body text; the ink-on-paper and ink-on-canvas pairings exceed this.
- Provide visible focus states for all interactive elements; the current design implies subtle focus indicators.
- Include alt text for all customer avatars and product screenshots.
- Ensure the video overlay button is keyboard accessible and announces its purpose clearly.

## Scope note

This guide covers the Ramp homepage marketing surface, including hero sections, testimonial grids, product feature cards, and editorial layouts. It does not include the product dashboard interface, mobile navigation patterns, form components, or animation specifications. Footer and legal content areas are not represented in the supplied material.
