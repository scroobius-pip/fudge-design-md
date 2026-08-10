# How attio.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/attio.com-design)

Last updated: 2026-08-10

## Captured pages

[![Blue CTA banner with geometric wireframe shapes above a dark footer containing categorized navigation links and social icons.](https://pin.fontofweb.com/5045?format=jpg)](https://design.withfudge.com/share/pin-5045)

[Blue CTA banner with geometric wireframe shapes above a dark footer containing categorized navigation links and social icons.](https://design.withfudge.com/share/pin-5045)

[![FAQ accordion section with large serif heading, collapsed items with plus icons, and an expanded answer with detailed plan descriptions.](https://pin.fontofweb.com/5044?format=jpg)](https://design.withfudge.com/share/pin-5044)

[FAQ accordion section with large serif heading, collapsed items with plus icons, and an expanded answer with detailed plan descriptions.](https://design.withfudge.com/share/pin-5044)

[![Social proof masonry grid displaying tweet-style testimonials with profile avatars, usernames, timestamps, and highlighted @attio mentions.](https://pin.fontofweb.com/5043?format=jpg)](https://design.withfudge.com/share/pin-5043)

[Social proof masonry grid displaying tweet-style testimonials with profile avatars, usernames, timestamps, and highlighted @attio mentions.](https://design.withfudge.com/share/pin-5043)

[![Four-column pricing table with tier cards showing prices, feature checklists, and primary and secondary action buttons with a monthly/annual toggle.](https://pin.fontofweb.com/5042?format=jpg)](https://design.withfudge.com/share/pin-5042)

[Four-column pricing table with tier cards showing prices, feature checklists, and primary and secondary action buttons with a monthly/annual toggle.](https://design.withfudge.com/share/pin-5042)

## Overview

Attio's design system presents a contemporary SaaS aesthetic that balances professional credibility with approachable warmth. The visual language centers on generous whitespace, precise typography, and a carefully calibrated neutral palette punctuated by vibrant blue action moments. The system employs three distinct typefaces: Inter for all interface elements, navigation, and body content; Inter Tight as a condensed variant for specific display contexts; and Tiempos Text for editorial moments including hero headlines and section displays that require a more refined, literary tone.

The overall composition favors clarity over density. Content blocks breathe with ample vertical spacing, while component surfaces use subtle borders rather than heavy shadows to establish hierarchy. The pricing page demonstrates this restraint through clean card containers with hairline borders, while the social proof section introduces organic asymmetry through a masonry layout of testimonial cards. Dark surfaces appear selectively—primarily in the footer and certain call-to-action banners—creating dramatic contrast moments that anchor the page rhythm. The system avoids decorative excess, relying instead on typographic scale, color discipline, and considered spacing to communicate sophistication.

## Colors

| token | value | use |
|---|---|---|
| canvas | #FFFFFF | Primary background for all content sections and card surfaces |
| surface | #F5F5F5 | Subtle secondary backgrounds for toggle containers and inactive states |
| ink | #1A1A1A | Primary text, headings, and high-emphasis content |
| muted-ink | #6B7280 | Secondary text, descriptions, timestamps, and placeholder content |
| border | #E5E7EB | Card outlines, dividers, accordion separators, and subtle boundaries |
| action | #3B82F6 | Primary buttons, links, active toggles, and highlighted mentions |
| action-hover | #2563EB | Hover state for interactive action elements |
| inverse-ink | #FFFFFF | Text on dark or action-colored backgrounds |
| inverse-surface | #0A0A0A | Footer background and dark banner sections |
| success | #10B981 | Positive indicators, checkmarks, and savings badges |

The color philosophy operates on a near-monochromatic neutral foundation with a single vibrant accent. The neutral scale runs from pure white through subtle grays to near-black, providing sufficient contrast for all text hierarchies without visual noise. The blue accent (#3B82F6) appears strategically: in primary call-to-action buttons, highlighted @mentions within testimonials, active toggle states, and promotional badges. Dark surfaces use true black-tinted tones rather than pure black, softening the visual weight of footer and banner regions. The system maintains consistent color behavior across light and dark contexts—action blue remains constant, while text and surface colors invert appropriately.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Tiempos Text | 3rem | 400 | 1.1 | -0.02em | Page headlines, editorial section titles |
| section-display | Inter | 2.5rem | 600 | 1.15 | -0.02em | Subsection headings, pricing page titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, accordion answers |
| body-medium | Inter | 1rem | 500 | 1.6 | 0 | Emphasized body, card subtitles, FAQ questions |
| label | Inter | 0.875rem | 500 | 1.4 | 0 | Buttons, navigation items, category headers |
| caption | Inter | 0.75rem | 400 | 1.5 | 0.01em | Timestamps, metadata, legal copy |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Header and footer link lists |

The typographic system pairs the geometric clarity of Inter and Inter Tight with the editorial refinement of Tiempos Text. Inter handles all functional and interface typography across five weights from Regular to Bold, with Medium serving as the workhorse for labels, buttons, and navigation. Inter Tight provides a condensed geometric alternative for display contexts requiring tighter horizontal fit. Tiempos Text appears exclusively at display scale, lending gravitas to hero headlines and section titles without competing with the interface's modern efficiency. Tracking remains tight for display sizes (-0.02em) to maintain visual density, while body text uses neutral tracking for optimal readability. Line heights are generous for body content (1.6) and compact for display (1.1), creating clear rhythmic distinction between reading and scanning contexts.

Verify licensing for these families before production use. Inter and Inter Tight are designed by Rasmus Andersson and available from Rsms. Tiempos Text is designed by Kris Sowersby and available from Klim Type Foundry.

## Layout

The layout system employs a centered container with generous horizontal padding, establishing a comfortable reading measure while accommodating full-bleed sections for visual impact. Content sections stack vertically with substantial separation—typically 6rem between major regions—creating a deliberate pacing that prevents cognitive overload.

The pricing page demonstrates a classic four-column grid for tier comparison, with equal-width cards that maintain alignment across price points, feature lists, and action buttons. Cards share consistent internal padding and border treatment, with the recommended tier receiving subtle emphasis through border color rather than shadow elevation.

The social proof section abandons strict grid symmetry in favor of a masonry arrangement, allowing testimonial cards to flow at varying heights based on content length. This introduces organic visual rhythm that counterbalances the system's otherwise rectilinear precision.

The footer implements a multi-column link grid organized by category, with consistent vertical spacing between groups and clear typographic hierarchy between category labels and individual links. Social icons occupy a distinct horizontal band at the footer base, separated by a subtle divider.

Section backgrounds alternate between white canvas and subtle surface tones, with occasional dark inverse surfaces for call-to-action banners. The blue CTA banner spans full width with asymmetric composition—text and button left-aligned, decorative geometric wireframe elements right-aligned—creating dynamic tension within the system's otherwise centered conventions.

## Visual language

Attio's visual identity communicates sophisticated simplicity through disciplined restraint. The interface avoids gradients, heavy shadows, and decorative textures in favor of flat color fields, precise borders, and typographic hierarchy. Geometric wireframe illustrations appear in accent moments—such as the blue CTA banner—providing technical sophistication without visual clutter. These line-art elements use the background color at reduced opacity, maintaining monochrome discipline even in decorative contexts.

Card surfaces throughout the system share consistent treatment: white background, single-pixel border in the border color token, and rounded corners at 0.75rem. No shadow elevation distinguishes cards from background; the border alone provides sufficient definition. This flat approach extends to buttons, where solid fill colors and clear text contrast replace beveled or shadowed treatments.

The testimonial cards introduce subtle personality through profile avatars and platform icons, yet maintain system discipline through consistent padding, border radius, and typographic treatment. Timestamp and username metadata use the caption token, creating clear information hierarchy within each card.

Iconography appears functional and minimal—plus and minus indicators for accordion states, checkmarks for feature lists, external-link arrows for off-site references. These elements use the muted-ink color at rest and inherit action color for interactive states.

## Components

### Primary Action Button
- **Anatomy**: Text label centered within a solid colored rectangle
- **Surface**: Background uses action color (#3B82F6), text uses inverse-ink (#FFFFFF)
- **Typography**: label token (Inter 0.875rem Medium)
- **Shape**: borderRadius 0.5rem, padding 0.75rem vertical and 1.5rem horizontal
- **Spacing**: Typically appears as the rightmost element in button groups, or centered within card footers
- **Variants**: Filled state as described; on dark backgrounds maintains identical treatment

### Secondary Action Button
- **Anatomy**: Text label centered within a bordered rectangle
- **Surface**: Background uses canvas (#FFFFFF), text uses ink (#1A1A1A), border uses border color (#E5E7EB)
- **Typography**: label token (Inter 0.875rem Medium)
- **Shape**: borderRadius 0.5rem, padding matches primary button
- **Spacing**: Appears adjacent to primary buttons or as standalone card actions
- **Composition**: Used for lower-commitment actions like "Talk to sales" or tier downgrades

### Pricing Card
- **Anatomy**: Tier name, price display, billing period, feature description, feature checklist, action button
- **Surface**: Background canvas, border 1px solid border color, borderRadius 0.75rem
- **Typography**: Tier name uses section-display at smaller scale; price uses hero-display scale in Inter Semibold; features use body token with checkmark icons
- **Shape**: Consistent 2rem internal padding
- **Spacing**: Equal width in multi-card arrangements, with 1.5rem gap between cards
- **Variants**: Recommended tier receives action-colored border instead of neutral border; "Save" badges use action color background with inverse text

### Testimonial Card
- **Anatomy**: Profile avatar, name and username header, platform icon, body text, timestamp
- **Surface**: Background canvas, border 1px solid border color, borderRadius 0.75rem
- **Typography**: Name uses body-medium; username and timestamp use caption; body text uses body token; @mentions inherit action color
- **Shape**: 1.5rem internal padding; avatar as 2.5rem circle
- **Composition**: Masonry flow with varying heights; cards align to implicit columns without strict row matching

### Accordion Item
- **Anatomy**: Question text, expand/collapse icon, answer content (when expanded)
- **Surface**: Transparent background; border-bottom 1px solid border color separates items
- **Typography**: Question uses body-medium; answer uses body with generous line height
- **Shape**: Full width within container; padding 1.5rem vertical
- **Composition**: Icon right-aligned, question left-aligned; expanded state reveals answer below with additional vertical spacing
- **States**: Collapsed shows [+] icon; expanded shows [−] icon; icon uses muted-ink color

### Toggle Switch
- **Anatomy**: Two-option segmented control with active indicator
- **Surface**: Background uses surface color (#F5F5F5); active option uses canvas with subtle shadow or border
- **Typography**: label token for both options
- **Shape**: Full pill borderRadius (9999px); compact padding suitable for inline placement above content
- **Composition**: Centered above pricing cards; equal width segments

## Responsive behavior

The design system should maintain single-column stacking for pricing cards on narrow viewports, converting the four-column comparison to a vertically scrollable arrangement with sticky tier headers if needed. Testimonial masonry should collapse to a single column, preserving card internal structure while eliminating multi-column flow. The footer link grid should stack category columns vertically, maintaining group integrity while adapting to reduced horizontal space.

Typography should scale down proportionally: hero-display reduces to 2rem on mobile, section-display to 1.75rem, with body remaining at 1rem for readability. Section vertical spacing should compress from 6rem to 4rem to respect reduced viewport height. The blue CTA banner should center text and stack button below headline, with decorative wireframe elements either scaling down or hiding to prevent visual crowding.

Navigation should collapse to a hamburger menu or simplified icon set, with footer social icons remaining visible and accessible. Accordion items should maintain full width with touch-appropriate tap targets of at least 44px height for the question row.

## Practical implementation guidance

### Preserve
- The strict typeface hierarchy: Inter for functional text, Inter Tight for condensed display contexts, Tiempos Text for editorial display only
- Flat card treatment with border-only definition; avoid adding shadows that compromise the system's clean aesthetic
- Generous whitespace between sections; the breathing room is integral to the premium perception
- Consistent blue accent discipline; limit #3B82F6 to interactive elements and intentional highlights
- The asymmetric CTA banner composition as a distinctive brand moment

### Avoid
- Introducing additional accent colors beyond the established blue; the system's strength is chromatic restraint
- Using Tiempos Text at small sizes or for body content; it is reserved for display scale only
- Adding gradient backgrounds or decorative patterns that compete with the flat surface philosophy
- Reducing border radius inconsistently; the 0.75rem panel and 0.5rem button radii are purposeful
- Shadow-based elevation; if depth is needed, use border color changes or subtle background shifts

### Recommended Build Order
1. Establish the type scale with Inter, Inter Tight, and Tiempos Text loaded at all required weights
2. Implement the neutral color foundation (canvas through border) before adding the action accent
3. Build the card component as the primary content container, verifying border and radius consistency
4. Construct button variants with proper padding, radius, and hover states
5. Implement section spacing and container constraints
6. Add the pricing grid with toggle and card alignment
7. Build the accordion with proper icon state management
8. Implement the testimonial masonry with responsive collapse
9. Add the dark footer and blue CTA banner as inverse surface treatments

### Accessibility
- Maintain minimum 4.5:1 contrast ratio for all body text; the ink (#1A1A1A) on canvas (#FFFFFF) exceeds 15:1
- Ensure action color (#3B82F6) on white meets 3:1 for large text and UI components, with hover state (#2563EB) improving contrast
- Provide visible focus indicators for all interactive elements, using outline or border color shifts
- Preserve accordion keyboard operability with Enter/Space to toggle, arrow keys to navigate between items
- Ensure pricing toggle has proper aria-pressed or role="switch" semantics with visible state indication
- Testimonial avatars should have alt text describing the person when names are present, or be decorative if redundant

## Scope note

This guide covers the marketing site surfaces visible in the supplied images: homepage hero and social proof sections, pricing page with tier comparison and FAQ accordion, and the shared footer with navigation links. The Attio application interface, mobile-specific layouts, animation behaviors, form validation states, and dark mode variants are not represented in the available material. Measurements are practical adaptation targets derived from visual inspection of the supplied screenshots.
