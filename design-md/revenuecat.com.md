# How revenuecat.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/revenuecat.com-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ accordion section with expanded pricing questions and blue active text on light gray background](https://pin.fontofweb.com/4610?format=jpg)](https://design.withfudge.com/share/pin-4610)

[FAQ accordion section with expanded pricing questions and blue active text on light gray background](https://design.withfudge.com/share/pin-4610)

[![Customer testimonial carousel featuring Photoroom with gradient statistic highlights and app logo bar](https://pin.fontofweb.com/4609?format=jpg)](https://design.withfudge.com/share/pin-4609)

[Customer testimonial carousel featuring Photoroom with gradient statistic highlights and app logo bar](https://design.withfudge.com/share/pin-4609)

[![Six feature cards in two rows with colored icons for Build, Acquire, Convert, Understand, Retain, Improve](https://pin.fontofweb.com/4608?format=jpg)](https://design.withfudge.com/share/pin-4608)

[Six feature cards in two rows with colored icons for Build, Acquire, Convert, Understand, Retain, Improve](https://design.withfudge.com/share/pin-4608)

[![Enterprise plan section with ChatGPT testimonial card and purple Talk to sales button](https://pin.fontofweb.com/4607?format=jpg)](https://design.withfudge.com/share/pin-4607)

[Enterprise plan section with ChatGPT testimonial card and purple Talk to sales button](https://design.withfudge.com/share/pin-4607)

## Overview

RevenueCat's design system presents a subscription infrastructure platform with a calm, trustworthy visual personality. The interface balances professional authority with approachable clarity through its restrained color palette, generous whitespace, and systematic use of rounded containers. Light gray backgrounds establish breathing room around white content surfaces, while deep navy typography anchors the hierarchy. Blue accents signal interactivity without overwhelming the composition. The system relies on two complementary type families: a geometric sans-serif for display headlines and a refined neo-grotesque for body text and UI elements. Component patterns favor card-based layouts with soft shadows, pill-shaped buttons, and icon-driven feature lists that make complex subscription tooling feel accessible to developers and product teams alike.

## Colors

The color system operates on a principle of high contrast with selective warmth. The palette avoids pure black in favor of a deep navy-gray that reduces eye strain while maintaining authority. Action colors are vivid but not aggressive, reserved for interactive moments and active states.

| token | value | use |
|---|---|---|
| canvas | #F9FAFB | Page background, section alternation |
| surface | #FFFFFF | Cards, panels, modal backgrounds |
| ink | #111827 | Primary headings, body text, icons |
| muted-ink | #6B7280 | Secondary text, captions, placeholders |
| action | #4F46E5 | Primary buttons, links, active accordion text, emphasis statistics |
| action-hover | #4338CA | Button hover states, link underlines |
| success | #10B981 | Checkmarks, positive indicators, confirmation states |
| border | #E5E7EB | Card outlines, dividers, accordion separators |

The canvas and surface tokens create a subtle depth system: most sections rest on #F9FAFB while elevated content sits on #FFFFFF. The ink token serves as the near-black workhorse for all primary reading material, with muted-ink handling supporting information. The action blue appears strategically—never as large background areas but as precise signals for clickability and importance. Success green appears in checkmark icons and validation contexts. Border gray is light enough to recede optically while still defining structure.

## Typography

RevenueCat employs two font families with distinct roles. Pp Object Sans handles display and headline work with its geometric, contemporary character. Helvetica Neue manages body text, labels, navigation, and all functional UI copy. The weight range spans Light through Bold, with Medium serving as the primary emphasis weight in body contexts. The supplied font sources also include Helvetica Neue Cyr, a Cyrillic-compatible variant of the neo-grotesque family, and Object Sans as a lighter-weight companion to Pp Object Sans.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pp Object Sans | 3.5rem | 700 | 1.1 | -0.02em | Homepage hero, major section headers |
| section-display | Pp Object Sans | 2.5rem | 600 | 1.15 | -0.01em | Section titles, feature grid headers |
| body | Helvetica Neue | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general content |
| body-medium | Helvetica Neue | 1rem | 500 | 1.6 | 0 | Emphasized body, accordion questions, card titles |
| label | Helvetica Neue | 0.875rem | 500 | 1.4 | 0 | Buttons, tags, metadata |
| navigation | Helvetica Neue | 0.875rem | 500 | 1.4 | 0 | Header links, footer links |
| legal-copy | Helvetica Neue | 0.75rem | 400 | 1.5 | 0 | Fine print, terms, copyright |

Display sizes use tight negative tracking for a modern, compact feel. Body sizes maintain generous line height for readability in longer passages. The 0.875rem label size serves as the workhorse for interactive elements and compact information. Verify licensing for these families before production use. Helvetica Neue credits Linotype Design Studio.

## Layout

The layout system follows a centered, contained model with generous vertical rhythm. Sections stack with substantial padding between them, typically 6rem top and bottom, creating clear territorial boundaries. Content lives within a max-width container that centers on wide viewports, with comfortable side margins preventing text from stretching uncomfortably.

Horizontal spacing relies on a 0.25rem base unit, with most component padding using multiples of this step. Card interiors use 2rem padding, while gap spacing between related elements sits at 1.5rem. The feature grid visible in the images employs a three-column layout at desktop widths, with cards maintaining equal height through implicit grid behavior.

The testimonial carousel demonstrates an elevated layering approach: the active card sits forward with full opacity and shadow, while adjacent cards peek from the sides at reduced scale or opacity. This creates dimensional depth without complex animation requirements. The enterprise section shows an asymmetric two-column layout with text content on the left and a floating testimonial card on the right, accompanied by decorative orbital graphics.

## Visual language

RevenueCat's visual language communicates technical reliability through cleanliness and restraint. The interface avoids decorative excess, letting content structure and careful spacing create visual interest. Rounded corners appear consistently—cards use 0.75rem to 1rem, buttons are fully pill-shaped, and small icon containers use 0.5rem. This creates a friendly, contemporary feel that softens the technical subject matter.

Iconography follows a simple, filled style with circular backgrounds in subtle tints. Build features a blue wrench icon on a light blue ground; Acquire uses green on light green; Convert shows coral-red on light coral. These color-coded icons create instant category recognition across the feature grid.

Photography and avatars appear in circular or softly rounded frames. The testimonial cards integrate company logos, portrait photos, and quoted text in a unified container with subtle shadow elevation. Decorative elements include faint orbital rings and dot patterns that suggest connectivity and data flow without distracting from content.

The shadow system is minimal and soft, used primarily for card elevation and carousel depth. No harsh drop shadows appear; instead, diffused, large-radius shadows create gentle separation between layers.

## Components

### Primary button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Solid action blue background (#4F46E5) with white text
- **Typography**: label token, 0.875rem, weight 500
- **Shape**: Fully rounded ends (9999px), creating a pill
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **States**: Default shows solid fill; hover darkens to action-hover (#4338CA)

### Feature card

- **Anatomy**: Icon container, title, description paragraph, and bulleted feature list
- **Surface**: White background with optional 1px border in border gray
- **Typography**: Title uses body-medium (1rem, weight 500); description uses body (1rem, weight 400); list items use body with success-colored checkmark bullets
- **Shape**: 1rem border radius
- **Spacing**: 2rem internal padding, icon sits in top-left with 0.5rem rounded container
- **Composition**: Vertical stack with consistent 1rem gaps between elements
- **Variants**: Six visible variants distinguished by icon color—blue (Build), green (Acquire), coral (Convert), teal (Understand), red (Retain), purple (Improve)

### Testimonial card

- **Anatomy**: Company logo and name header, quoted testimonial text, author avatar with name and title, statistics column, and case study link
- **Surface**: White background with soft shadow elevation
- **Typography**: Company name uses body-medium; quote uses body at slightly larger size or weight; statistics use hero-display scale with gradient color treatment (coral to blue); author name uses body-medium, title uses muted-ink body
- **Shape**: 0.75rem to 1rem border radius
- **Spacing**: 2rem padding, generous internal gaps
- **Composition**: Two-column interior with quote left and statistics right; author block anchored bottom-left
- **Variants**: Active state shows full size and opacity; adjacent cards in carousel show reduced scale

### Accordion

- **Anatomy**: Question text with expand/collapse indicator, optional answer text below
- **Surface**: Transparent background, full-width horizontal border separators
- **Typography**: Question uses body-medium (1rem, weight 500); answer uses body (1rem, weight 400)
- **Color**: Default question in ink; active/expanded question shifts to action blue; answer text in muted-ink
- **Shape**: No border radius on individual items; full-width top border in border gray
- **Spacing**: 1.5rem vertical padding per item, answer indented or offset from question
- **States**: Collapsed shows plus icon; expanded shows minus icon with answer revealed

### Enterprise section

- **Anatomy**: Section heading, descriptive paragraph, benefit list with two columns, info callout, primary button, and floating testimonial card
- **Surface**: Light canvas background with white testimonial card
- **Typography**: "Enterprise" uses hero-display; description uses body; benefit list uses body with checkmark bullets; callout uses body with bold inline terms
- **Shape**: Button uses pill shape; testimonial card uses panel rounding with decorative orbital rings behind
- **Composition**: Asymmetric two-column with text content left (approximately 40%) and visual content right (approximately 60%)

## Responsive behavior

The design system appears optimized for desktop presentation in the available material. Based on visible patterns, several responsive adaptations should be considered. The three-column feature grid should collapse to single column on narrow viewports, with cards stacking vertically and maintaining full width. The testimonial carousel should reduce to a single visible card with swipe or arrow navigation. The enterprise section's asymmetric layout should stack to single column, placing the testimonial card below the benefit list. Font sizes should scale down modestly: hero-display to 2.5rem, section-display to 2rem on tablet, with further reduction on mobile. Horizontal padding should increase proportionally as viewport narrows, maintaining readable line lengths. The navigation system, not fully visible, should collapse to a hamburger menu on mobile with the same typographic treatment.

## Practical implementation guidance

### Preserve
- The light gray canvas against white card surfaces—this subtle depth layering is essential to the system's calm personality
- Pill-shaped buttons with generous horizontal padding; this friendly shape distinguishes RevenueCat from more angular competitors
- The two-type-family hierarchy: geometric display sans against neo-grotesque body text
- Color-coded icon backgrounds in the feature grid; these create instant scannability
- Generous section spacing (6rem) that lets content breathe

### Avoid
- Pure black (#000000) for text; the deep navy-gray ink is specifically chosen for reduced strain
- Sharp-cornered cards or buttons; the rounded language is consistent across all surfaces
- Saturated background colors; the system relies on white and near-white with only accent-colored elements
- Tight line heights in body text; the 1.6 ratio supports longer technical descriptions

### Recommended build order
1. Establish the color tokens and apply canvas/surface backgrounds to page structure
2. Implement typography scale with both font families loaded
3. Build the button component as the simplest interactive element
4. Create the feature card with icon, title, description, and list pattern
5. Implement the accordion for FAQ and expandable content
6. Construct the testimonial card with its two-column interior
7. Add the enterprise section layout with asymmetric composition
8. Polish with shadow elevations and decorative orbital elements

### Accessibility
- Ensure the action blue (#4F46E5) meets WCAG AA contrast against white for text smaller than 18.66px bold or 24px regular
- Provide visible focus indicators on all interactive elements, using the action color with outline offset
- Maintain accordion keyboard operability with Enter/Space to toggle, Arrow keys to navigate between items
- Use aria-expanded on accordion triggers to communicate state to screen readers
- Ensure testimonial carousel has pause controls and does not auto-advance in a way that prevents reading

## Scope note

This guide covers the homepage and pricing page surfaces visible in the supplied images, including hero sections, feature grids, testimonials, pricing FAQs, and enterprise messaging. Navigation, footer, mobile layouts, form interactions, loading states, and animation specifications are not included. Measurements are practical adaptation targets derived from visible proportions.
