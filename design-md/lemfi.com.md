# How lemfi.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lemfi.com-design)

Last updated: 2026-08-10

## Captured pages

[![Green careers banner with globe illustration and purple CTA button on textured emerald background](https://pin.fontofweb.com/3912?format=jpg)](https://design.withfudge.com/share/pin-3912)

[Green careers banner with globe illustration and purple CTA button on textured emerald background](https://design.withfudge.com/share/pin-3912)

[![Team member carousel with portrait cards showing names, roles, and locations in black typography](https://pin.fontofweb.com/3911?format=jpg)](https://design.withfudge.com/share/pin-3911)

[Team member carousel with portrait cards showing names, roles, and locations in black typography](https://design.withfudge.com/share/pin-3911)

[![Mission and backers split-panel layout with investor logos above green and purple wavy customer banner](https://pin.fontofweb.com/3910?format=jpg)](https://design.withfudge.com/share/pin-3910)

[Mission and backers split-panel layout with investor logos above green and purple wavy customer banner](https://design.withfudge.com/share/pin-3910)

[![About page hero with centered headline, team retreat photograph, and statistics section on pale green background](https://pin.fontofweb.com/3909?format=jpg)](https://design.withfudge.com/share/pin-3909)

[About page hero with centered headline, team retreat photograph, and statistics section on pale green background](https://design.withfudge.com/share/pin-3909)

## Overview

LemFi presents a confident, approachable fintech identity built around a vivid emerald green palette and deep purple accents. The system balances playful illustration with crisp, modern typography to communicate trustworthiness without corporate stiffness. Display headlines use a distinctive rounded sans-serif with exaggerated proportions, while body text relies on a clean geometric family with multiple weights. The visual language emphasizes global connectivity through globe motifs, diverse human photography, and organic wave patterns. Sections alternate between textured color fields and clean white space, creating rhythmic pacing across long-scrolling pages. The overall impression is energetic, inclusive, and technologically current—designed to resonate with immigrants and global citizens managing cross-border finances.

## Colors

The palette centers on an energetic green that dominates key sections, supported by deep purple for interactive emphasis and neutral tones for readability.

| token | value | use |
|---|---|---|
| action | #5B21B6 | Primary buttons, key interactive elements |
| action-hover | #4C1D95 | Button hover and active states |
| canvas | #F0FDF4 | Light green-tinted page backgrounds |
| canvas-warm | #FEFCE8 | Warm cream alternative backgrounds |
| surface | #FFFFFF | Cards, modals, content panels |
| surface-muted | #F3F4F6 | Subtle section alternation |
| ink | #111827 | Primary text, headlines |
| ink-secondary | #374151 | Subheadings, secondary content |
| ink-muted | #6B7280 | Captions, metadata, disabled states |
| border | #E5E7EB | Dividers, card outlines, input borders |
| brand-green | #059669 | Hero banners, stat sections, brand moments |
| brand-green-light | #34D399 | Illustration accents, decorative elements |
| brand-purple | #A78BFA | Globe illustrations, decorative graphics |
| brand-purple-deep | #7C3AED | CTA emphasis, icon fills |

The green and purple pairing creates high-energy contrast without clashing. Green carries the brand's growth and vitality associations, while purple provides sophisticated actionability. Light canvas backgrounds with subtle texture reduce eye strain during extended reading. Dark ink on light surfaces maintains WCAG AA compliance for body text. The system avoids pure black in favor of warm near-blacks that harmonize with the green undertones.

## Typography

Two families drive the typographic hierarchy: Gulfs Display-Normal for commanding headlines with rounded, almost bubbly proportions, and Degular for all functional text with clean geometric construction.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gulfs Display-Normal | 3.5rem | 400 | 1.1 | -0.02em | Page heroes, major section openings |
| section-display | Degular | 2.5rem | 700 | 1.15 | -0.01em | Section headings, stat numbers |
| body-large | Degular | 1.25rem | 400 | 1.5 | 0 | Intro paragraphs, featured descriptions |
| body | Degular | 1rem | 400 | 1.5 | 0 | Standard paragraphs, UI labels |
| body-small | Degular | 0.875rem | 400 | 1.5 | 0 | Captions, metadata, fine print |
| label | Degular | 0.75rem | 600 | 1.25 | 0.05em | Overlines, category tags, uppercase labels |
| navigation | Degular | 0.875rem | 500 | 1.25 | 0 | Menu items, breadcrumbs |

Gulfs Display-Normal appears exclusively at large sizes where its distinctive character shapes remain legible and impactful. Degular spans the full functional range from Black weight for maximum impact through Regular for extended reading. The tight negative tracking on display sizes creates cohesive word shapes, while body text uses neutral spacing for readability. Verify licensing for these families before production use. Degular is designed by Oh No Type Company.

## Layout

The page structure follows a centered, contained model with generous breathing room. Maximum content width sits around 1200px, with internal padding of 1.5rem to 3rem depending on breakpoint. Sections stack vertically with 6rem separation, creating clear territorial boundaries between topics.

The hero area on the About page demonstrates the system's vertical rhythm: a centered overline label, followed by a large display headline, then a full-bleed photograph, and finally a two-column statistics grid. This center-to-left transition creates visual interest without breaking the reading flow.

Split-panel layouts appear for content pairing, as seen in the mission-and-backers section. These use equal-width columns with 1.5rem gutters, each panel receiving distinct background tints. The left panel carries illustration; the right carries logos and text.

Navigation sits fixed at top with logo left, menu center-right, and primary action far right. The logo uses the brand green with custom wordmark styling. A language selector appears adjacent to the logo on international pages.

The team carousel breaks the centered model with horizontal overflow, showing partial cards at viewport edges to suggest scrollability. Navigation arrows overlay the carousel bounds.

## Visual language

Illustration style blends flat vector graphics with subtle grain textures, creating warmth that offsets the digital precision of the interface. The globe motif recurs as a central brand symbol—rendered with simplified continents, bold meridian lines, and a stand that echoes mid-century educational objects. Human figures in illustrations appear diverse and casually posed, reinforcing the inclusive brand positioning.

Photography favors natural light and authentic moments over staged corporate imagery. Team members wear branded white tees with the green logotype, creating visual unity across individual portraits. Environmental shots show tropical locations, suggesting global reach and team vitality.

Background textures add tactile quality without competing for attention. Fine grain overlays appear on green sections, while halftone dot patterns create gradient-like transitions on the customer statistics banner. Organic wave shapes in green and purple provide decorative section breaks.

The wavy banner pattern deserves specific attention: overlapping semicircles in alternating green and purple create a rhythmic, almost celebratory base for large numerals. This treatment elevates statistics from dry data to brand moments.

## Components

### Primary Action Button

- **Anatomy**: Rounded pill shape with solid fill, text label, and optional leading icon
- **Surface**: Deep purple background (#5B21B6) with white text
- **Typography**: Body size, medium weight, centered
- **Shape**: Full pill border radius (9999px)
- **Spacing**: 0.875rem vertical padding, 2rem horizontal padding
- **Composition**: Inline with text or standalone in hero areas
- **Variants**: Green background variant appears on purple sections for contrast

### Secondary Action Button

- **Anatomy**: Pill outline with transparent or white fill
- **Surface**: White or transparent background with dark border and text
- **Typography**: Body size, medium weight
- **Shape**: Full pill border radius matching primary
- **Spacing**: Identical padding to primary for visual pairing

### Team Member Card

- **Anatomy**: Portrait photograph, name heading, role description, location metadata
- **Surface**: White background with subtle shadow on hover
- **Typography**: Name in body-large semibold, role in body, location in body-small muted
- **Shape**: 1rem border radius on image container
- **Spacing**: 1.5rem internal padding, consistent gaps between text elements
- **Composition**: Vertical stack with image dominant, text beneath
- **Variants**: Carousel variant shows partial cards at viewport edges

### Split Content Panel

- **Anatomy**: Two equal columns with distinct background tints
- **Surface**: Left panel in pale green (#F0FDF4), right in pale blue-gray (#F8FAFC)
- **Typography**: Section heading in section-display, body text in body-large
- **Shape**: 1.5rem border radius on container
- **Spacing**: 3rem internal padding, generous illustration margins
- **Composition**: Illustration or photography left, text and logos right

### Statistics Banner

- **Anatomy**: Full-width band with wavy pattern background, centered large number, supporting text
- **Surface**: Emerald green base with purple wave overlays and grain texture
- **Typography**: Section-display for numerals, body-large for descriptions
- **Shape**: Organic top and bottom edges from wave pattern
- **Composition**: Centered text over decorative background

### Navigation Bar

- **Anatomy**: Fixed top bar with logo, dropdown menus, utility links, and download button
- **Surface**: Transparent or white background with subtle bottom border
- **Typography**: Navigation token for menu items
- **Shape**: Full width, height approximately 4rem
- **Composition**: Logo left, menus center, CTA right

## Responsive behavior

The system maintains its character across viewport sizes through proportional scaling and strategic reflow. Display headlines reduce from 3.5rem to 2.5rem on tablet and 2rem on mobile, preserving impact without overflow. The two-column split panels stack vertically below 768px, with the illustration or image leading.

The team carousel transitions from showing 4-5 cards to 2-3 cards to 1 card with peek, maintaining the horizontal scroll interaction. Navigation collapses to a hamburger menu on mobile, with the download button persisting as a prominent fixed element.

Statistics banners maintain full width with text scaling down. The wavy background pattern continues seamlessly due to its repeating nature. Hero photographs remain full-bleed with text overlay shifting from centered to left-aligned on smaller screens.

Touch targets maintain minimum 44px height for all interactive elements. Button padding increases slightly on mobile to accommodate finger tapping.

## Practical implementation guidance

### Preserve
- The distinctive green-to-purple color progression in decorative sections
- Grain texture overlays on solid color backgrounds
- Gulfs Display-Normal exclusively at display sizes above 2rem
- Pill-shaped buttons with generous horizontal padding
- Authentic, diverse photography with natural lighting
- The globe as a recurring brand motif

### Avoid
- Using Gulfs Display-Normal at body text sizes where legibility suffers
- Pure black (#000000) in place of the warm ink tone
- Sharp-cornered buttons or cards that contradict the friendly aesthetic
- Overcrowding the generous section spacing
- Generic stock photography lacking the team's genuine quality

### Recommended Build Order
1. Establish color tokens and typography scale with live text samples
2. Build the navigation shell with logo, menus, and download CTA
3. Create button components with primary and secondary variants
4. Implement hero section with centered headline and photograph
5. Add split-panel layout for mission/backers content pairing
6. Build team carousel with card component and horizontal scroll
7. Create statistics banner with SVG wave pattern and grain overlay
8. Polish with texture assets and micro-interactions

### Accessibility
- Ensure green text on green backgrounds meets contrast minimums by using dark ink or white instead
- Provide text alternatives for all illustrative content, especially globe graphics
- Maintain keyboard focus visibility on pill buttons with outline offsets
- Respect reduced-motion preferences for carousel auto-advance
- Use semantic heading hierarchy from h1 through h4 without skips

## Scope note

This guide covers the About page and related marketing surfaces visible in the supplied images. Product interfaces, transaction flows, account dashboards, and mobile application screens are not represented. Motion design, hover states, and form validation patterns were not captured and should be developed with accessibility principles. Measurements are practical adaptation targets derived from visual inspection.
