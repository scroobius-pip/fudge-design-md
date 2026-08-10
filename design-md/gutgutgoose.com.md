# How gutgutgoose.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gutgutgoose.com-design)

Last updated: 2026-08-10

## Captured pages

[![Feature grid section with six cards explaining personalized probiotic inputs, alternating cream and green surfaces with organic photography](https://pin.fontofweb.com/10511?format=jpg)](https://design.withfudge.com/share/pin-10511)

[Feature grid section with six cards explaining personalized probiotic inputs, alternating cream and green surfaces with organic photography](https://design.withfudge.com/share/pin-10511)

[![Product detail panel showing green probiotic bottle with subscription pricing, orange CTA button, and expandable accordion sections](https://pin.fontofweb.com/10510?format=jpg)](https://design.withfudge.com/share/pin-10510)

[Product detail panel showing green probiotic bottle with subscription pricing, orange CTA button, and expandable accordion sections](https://design.withfudge.com/share/pin-10510)

[![Press coverage section with three article cards featuring photography, category pills, and dark brown read buttons on cream backgrounds](https://pin.fontofweb.com/10509?format=jpg)](https://design.withfudge.com/share/pin-10509)

[Press coverage section with three article cards featuring photography, category pills, and dark brown read buttons on cream backgrounds](https://design.withfudge.com/share/pin-10509)

## Overview

GutGutGoose presents a personalized probiotics service through a visual language that feels approachable, scientific, and warmly human. The design system rests on a foundation of creamy off-whites and warm beiges that evoke natural ingredients and digestive wellness, punctuated by an energetic orange accent that drives action. Deep brown ink provides grounding readability against the light surfaces, while muted sage green appears as both a secondary text color and a full-bleed card treatment for key feature callouts.

The interface organizes content in generous, breathable layouts with rounded cards and pill-shaped buttons that soften the clinical subject matter. Photography of organic textures, product renders, and candid team moments reinforces the brand's startup authenticity. The type pairing contrasts an expressive, slightly quirky display face for headlines with a clean, modern sans-serif for body text and UI elements. This combination communicates both scientific credibility and approachable personality—critical for a health-tech product that asks users to trust it with their biology.

## Colors

The palette is intentionally limited and warm, built around dairy and earth tones that reference the gut-health category without falling into clinical sterility.

| token | value | use |
|---|---|---|
| canvas | `#FFFEF4` | Primary page background, warm off-white |
| surface | `#F6ECDC` | Card backgrounds, feature sections, secondary surfaces |
| surface-warm | `#E3D7C8` | Product image backdrops, elevated panels |
| ink | `#3A1B13` | Primary text, headings, dark buttons, brand marks |
| ink-muted | `#78934A` | Secondary text, guarantee messaging, green card surfaces |
| accent | `#FA7241` | Primary CTA buttons, highlights, interactive emphasis |
| white | `#FFFFFF` | Text on dark or green surfaces, occasional clean backgrounds |

The system operates in a single light mode. Dark surfaces appear only as photographic content or the deep brown ink used for small buttons. The orange accent is reserved for the primary conversion action, making it immediately identifiable across the page. Green serves dual duty: as muted text color for secondary information and as a full background treatment for featured cards, creating a natural hierarchy without introducing additional hues. The warm cream canvas prevents the interface from feeling cold or clinical, while the brown ink maintains sufficient contrast for accessibility.

## Typography

Two font families create a clear role separation: Pogonia Medium carries brand voice in headlines, while Figtree handles readability in body text and interface elements.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pogonia Medium | 2.75rem | 500 | 1.2 | 0em | Page titles, major section headers |
| section-display | Pogonia Medium | 2.75rem | 500 | 1.2 | 0em | Section headlines, press header |
| heading | Pogonia Medium | 1.375rem | 500 | 1.2 | 0em | Card titles, feature names, accordion headers |
| body | Figtree | 1rem | 400 | 1.4 | 0em | Paragraph text, descriptions |
| body-large | Figtree | 1.125rem | 400 | 1.4 | 0em | Introductory paragraphs, hero subtext |
| label | Figtree | 0.875rem | 400 | 1.6 | 0em | Buttons, tags, metadata, captions |
| ui | Figtree | 0.875rem | 400 | 1.6 | 0em | Navigation, small interface text |

Pogonia Medium at 500 weight delivers a distinctive, slightly organic character with tight leading that suits the brand's personality. Figtree provides neutral, highly legible text across sizes from 14px to 18px. The display size of 44px (2.75rem) anchors major sections, while 22px (1.375rem) serves as the workhorse heading size for cards and components. Body text at 16px with 1.4 line height ensures comfortable reading for longer explanations. Verify licensing for these families before production use.

## Layout

The page structure follows a centered, single-column flow with contained width that expands to full-bleed cards for feature grids and press sections. Horizontal padding of 1.5rem on mobile and 3rem on desktop keeps content comfortably inset from viewport edges.

Section spacing uses 4rem for standard transitions and 7.5rem for major breaks between thematic areas. Internal card padding ranges from 1.5rem for standard cards to 2.25rem for featured content with more breathing room.

The feature grid in the "Six inputs" section demonstrates the primary layout pattern: a 3-column grid at desktop with 1rem gaps, collapsing to 2 columns and then single column as viewport narrows. Cards maintain consistent internal padding while allowing background images to bleed to edges where present. The product detail section uses an asymmetric split with the product image occupying roughly 45% of the width on a warm cream backdrop, while details and conversion elements stack in the remaining space.

Press cards use a vertical stack with full-bleed photography at top, category pill below, then headline, excerpt, and footer with date metadata and read button. This consistent structure allows scanning across multiple articles.

## Visual language

Surface treatments alternate between flat cream fills and photographic backgrounds that extend to card edges. The green feature cards use a gradient or photographic overlay that shifts from deeper sage to lighter tones, creating depth without heavy shadows. Most cards receive a 12px border radius for a friendly, approachable feel, while the primary CTA button stretches to fully rounded pill shape.

Shadow usage is minimal and warm-tinted: the orange accent casts a soft glow via `0px 9px 14px 0px rgba(250, 114, 65, 0.25)` on the primary action button, creating elevation without harsh gray tones. Inset shadows with white transparency appear on interactive elements for subtle depth.

Photography style mixes three types: organic textures and scientific imagery for feature cards, clean product renders on neutral backgrounds for commerce, and candid documentary photography for press and team content. This range reinforces both the scientific credibility and human startup story.

Iconography appears sparingly, with small arrow indicators on buttons and plus/minus controls for accordions. The brand mark—a simple goose silhouette—appears on product packaging and as a subtle watermark.

## Components

### Primary action button

The main conversion element uses full pill shape with generous horizontal padding. The orange background fills the entire shape, with white label text centered. A small arrow icon follows the label text, indicating forward progress. The warm orange shadow beneath creates soft elevation. On hover, the shadow intensifies slightly while the background maintains saturation.

### Feature card

Standard feature cards use the cream surface with 12px radius and 1.5rem internal padding. A heading in Pogonia Medium sits above body text in Figtree. Some variants include background photography that bleeds to edges, with text overlaid in white when the image is dark or green-tinted. The green variant inverts to white text on a sage-to-light gradient background, reserved for the most important feature in a set.

### Product detail panel

The commerce component presents the probiotic bottle on a warm cream surface with 24px radius. To the right, the product name appears in Pogonia Medium, followed by star rating, customer quote in a subtle pill container, price with "/quarter" suffix in smaller text, and subscription details. The primary action button spans full width below. A guarantee pill with checkmark icon and muted green text provides reassurance beneath the CTA. Expandable accordion sections for description, benefits, and delivery information use the ink color for headers with plus/minus toggle indicators and 1px subtle dividers.

### Press card

Article cards stack vertically with 12px radius and no internal padding at top to allow full-bleed photography. Below the image, a category pill in cream with ink text identifies the topic. The headline in Pogonia Medium at heading size follows, then an excerpt in body size, and finally a footer row with date metadata and a small dark brown pill button labeled "Read". Cards sit in a 3-column grid with 1rem gaps.

### Category pill

Small rounded tags used for press categories and potentially for filtering. Cream background, ink text, 12px radius, compact padding.

### Guarantee pill

A reassurance element with cream background, muted green text, checkmark icon, and full pill shape. Sits below the primary CTA to reduce purchase anxiety.

### Accordion

Expandable content sections with ink-colored heading text, right-aligned plus/minus toggle, and 1px subtle border separators. Open state reveals body text with comfortable padding below the header.

## Responsive behavior

The three-column feature grid should collapse to two columns at tablet widths and single column on mobile, maintaining card aspect ratios and internal padding. The product detail split should stack with image full-width above details on narrow viewports, preserving the warm cream backdrop for the image area.

Press cards similarly stack from three columns to single column, with full-bleed images maintaining their aspect ratio. Typography scales down proportionally: display size may reduce to 2rem on tablet and 1.75rem on mobile, while body text remains at 1rem for readability.

The primary CTA button should remain full-width on mobile for easy thumb reach, with increased vertical padding to maintain touch target size. Section spacing compresses from 7.5rem to 4rem on mobile to reduce excessive scrolling.

## Practical implementation guidance

### Preserve
- The warm cream-to-white gradient of backgrounds that creates subtle depth without visible borders
- The two-family type pairing with Pogonia Medium strictly for display and Figtree for everything else
- The orange accent exclusivity for the single primary action per view
- The generous border radius on cards and full pill shape on primary buttons
- The mix of flat cards and photographic cards within the same grid

### Avoid
- Introducing additional accent colors that compete with the orange CTA
- Using Pogonia Medium for body text or long paragraphs—its character is too distinctive for extended reading
- Sharp 90-degree corners on interactive elements that contradict the friendly brand voice
- Gray shadows instead of the warm orange-tinted elevation
- Clinical blue or cool gray tones that break the warm palette

### Recommended build order
1. Establish the color tokens and apply canvas background to page
2. Set up typography with Pogonia Medium for headings and Figtree for body
3. Build the primary action button component with pill shape and orange glow shadow
4. Create the feature card variants (cream, green, photographic)
5. Implement the product detail layout with asymmetric split
6. Add the press card grid with full-bleed images
7. Polish with accordion, guarantee pill, and category pill components

### Accessibility
- Ensure the orange accent on white maintains minimum 3:1 contrast for large text and 4.5:1 for body text; the brown ink on cream exceeds these requirements
- Provide visible focus states with 2px outline in ink color for keyboard navigation
- Maintain touch targets of at least 44px for all interactive elements, especially the small read buttons and accordion toggles
- Use aria-expanded on accordion sections and ensure screen readers announce content changes
- Consider reduced motion preferences for any scroll-triggered animations

## Scope note

This guide covers the landing and product detail surfaces visible in the supplied captures. Mobile breakpoints, checkout flow, account dashboard, and animation specifications are not included. The green gradient card treatment and exact photographic overlay behavior should be verified against live implementation. Measurements are practical adaptation targets based on the extracted interface values.
