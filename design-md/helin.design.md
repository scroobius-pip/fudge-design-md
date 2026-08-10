# How helin.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/helin.design-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with portrait avatar, social links, and four project case-study thumbnails in a two-column grid with light gray backgrounds](https://pin.fontofweb.com/5525?format=jpg)](https://design.withfudge.com/share/pin-5525)

[Homepage hero with portrait avatar, social links, and four project case-study thumbnails in a two-column grid with light gray backgrounds](https://design.withfudge.com/share/pin-5525)

[![About-me page with italic serif greeting, body biography text, and a 3D shelf illustration with books, clock, and decorative objects](https://pin.fontofweb.com/5526?format=jpg)](https://design.withfudge.com/share/pin-5526)

[About-me page with italic serif greeting, body biography text, and a 3D shelf illustration with books, clock, and decorative objects](https://design.withfudge.com/share/pin-5526)

[![Work experience timeline with company logos, role titles, locations, and date ranges in a vertical stacked list with muted metadata](https://pin.fontofweb.com/5527?format=jpg)](https://design.withfudge.com/share/pin-5527)

[Work experience timeline with company logos, role titles, locations, and date ranges in a vertical stacked list with muted metadata](https://design.withfudge.com/share/pin-5527)

[![Testimonials section with three columns of peer recommendations, avatar photos, names, titles, and date stamps with horizontal dividers](https://pin.fontofweb.com/5528?format=jpg)](https://design.withfudge.com/share/pin-5528)

[Testimonials section with three columns of peer recommendations, avatar photos, names, titles, and date stamps with horizontal dividers](https://design.withfudge.com/share/pin-5528)

## Overview

Helin Kıl's portfolio presents a restrained, editorial visual system built around confident typography and generous negative space. The design communicates professional clarity through a near-monochrome palette, letting project imagery and a single italic serif accent carry personality. The homepage establishes identity with a small portrait avatar, a direct statement of expertise, and social proof links before transitioning into a two-column project grid. The about page layers personal warmth through an italic greeting and a decorative 3D shelf illustration, while the experience timeline and testimonials sections maintain rigorous information hierarchy without visual noise. The overall impression is of a designer who trusts structure and restraint—every element earns its place, and nothing competes for attention.

## Colors

The palette is intentionally limited, operating in a near-monochrome range with precise functional roles. Black serves as the primary ink for all body text, headings, and navigation, creating strong contrast against the white canvas. Muted gray handles secondary metadata, dates, locations, and inactive states. Light gray surfaces provide subtle containment for project thumbnails without introducing chromatic complexity. Borders are hairline and barely perceptible, used primarily to separate testimonial columns and footer areas.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, navigation labels, active links, footer copyright |
| muted-ink | #999999 | Secondary metadata, dates, locations, inactive social links, timeline details |
| canvas | #FFFFFF | Page background, card interiors, avatar surrounds |
| surface | #F5F5F5 | Project thumbnail backgrounds, subtle containment areas |
| border | #E5E5E5 | Horizontal dividers between testimonials, footer separators, hairline rules |

The system avoids pure black backgrounds except for small UI elements like company logos in the experience timeline. Color is reserved for photography and project imagery rather than interface chrome. The 3D shelf illustration on the about page introduces the only saturated accents—a red clock face, pink lamp, blue book spine—but these remain content-level, not system-level. The palette shifts seamlessly between homepage, about, and detail views without redefining its core relationships.

## Typography

Three font families create a deliberate hierarchy: Instrument Sans carries all functional text with clean neutrality, Instrument Serif-Italic provides singular moments of warmth and personality, and Inter serves the floating navigation pill with slightly tighter proportions. The italic serif appears sparingly—only in the "Nice to meet you!" greeting—making it feel intentional rather than decorative. Body text maintains a comfortable reading size with generous leading, while labels and metadata compress efficiently without losing legibility.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Sans | 1.5rem | 400 | 1.3 | -0.01em | Homepage introduction, major headings |
| section-display | Instrument Serif-Italic | 1.5rem | 400 | 1.2 | 0 | Greeting accents, editorial moments |
| body | Instrument Sans | 1rem | 400 | 1.6 | 0 | Biography paragraphs, testimonial quotes |
| body-small | Instrument Sans | 0.875rem | 400 | 1.5 | 0 | Experience descriptions, secondary text |
| label | Instrument Sans | 0.75rem | 400 | 1.4 | 0.02em | Dates, metadata, captions |
| navigation | Inter | 0.875rem | 400 | 1 | 0 | Floating pill navigation |

Instrument Sans and Instrument Serif were designed by Rodrigo Fuenzalida and are available from Frag Type. Inter was designed by Rasmus Andersson. Verify licensing for these families before production use.

## Layout

The layout follows a centered, narrow-column approach that prioritizes readability and breathing room. Content maxes out at a comfortable reading width, with generous vertical padding between major sections. The homepage introduces the designer with a small square avatar positioned above the introduction, followed by a horizontal row of social links with even spacing. Project work occupies a strict two-column grid where each card maintains equal height and internal padding, creating rhythmic consistency across the viewport.

The about page inverts this density with a single-column flow: header metadata, italic greeting, biography paragraphs, then a large centered illustration that breaks the text rhythm before the experience timeline resumes below. The testimonials section expands to three equal columns on desktop, each with its own vertical stack of avatar, name, title, quote paragraphs, and date stamp.

Spacing follows a 0.25rem base unit. Section breaks use 4rem of vertical space to create clear cognitive separation. Content gaps within sections hold at 1.5rem, tight enough to relate elements without crowding. The floating navigation pill anchors to the bottom center of the viewport, overlaying content with a dark rounded container that inverts the page's normal light-dominant hierarchy.

## Visual language

The visual language balances professional restraint with personal warmth. The square avatar with rounded corners softens the introduction without becoming casual. Project thumbnails sit in light gray fields that elevate them from the white page without heavy borders or shadows—this treatment unifies diverse project imagery into a coherent gallery. The 3D shelf illustration introduces dimensional depth and domestic personality, suggesting a designer with cultivated taste beyond the screen.

Iconography appears only as company logos in the experience timeline, each contained in a small square with its own background color. These function as visual anchors in an otherwise text-heavy list. No decorative icons, arrows, or UI embellishments appear in the primary navigation or content flow. The system trusts typography and whitespace to do the communicative work.

The floating navigation pill is the most assertive visual element—a dark rounded rectangle with white text that hovers above all content. Its pill shape and centered placement make it feel like a persistent action rather than a traditional menu, reinforcing the portfolio's conversational tone.

## Components

### Project Card

- **Anatomy**: Project name label above, contained thumbnail image below
- **Surface**: Light gray background (#F5F5F5) fills the card area; thumbnail image sits with internal padding
- **Typography**: Project name uses body-small token in muted ink; no description text visible
- **Shape**: 0.5rem border radius on the container
- **Spacing**: 1.5rem internal padding, consistent across all cards
- **Composition**: Thumbnail centers within the gray field, maintaining aspect ratio; cards align in strict two-column grid with equal gaps

### Navigation Pill

- **Anatomy**: Horizontal row of text links with final "Contact me" button
- **Surface**: Dark background (#000000) with white text; individual links have transparent backgrounds except the final item
- **Typography**: Inter at 0.875rem, regular weight; final item may have subtle emphasis
- **Shape**: Full pill border radius (9999px) on the container; individual items have no distinct shape
- **Spacing**: Comfortable horizontal padding between items, generous vertical padding within the pill
- **Composition**: Fixed to bottom center of viewport, overlaying content with z-index separation

### Experience Item

- **Anatomy**: Company logo square, role title, company name, location, date range
- **Surface**: Logo sits in colored square with rounded corners; text flows to the right
- **Typography**: Role and company in body-small at regular weight; location and dates in label token in muted ink
- **Shape**: Logo squares use 0.75rem border radius
- **Spacing**: 1.5rem gap between logo and text block; 1rem vertical padding between items
- **Composition**: Stacked vertically with consistent left alignment; date ranges follow location with slight spacing

### Testimonial Column

- **Anatomy**: Circular avatar, name, title, multi-paragraph quote, date stamp
- **Surface**: No background; separated by top border rule
- **Typography**: Name in body-small regular; title in label token muted; quote in body token; date in label token muted
- **Shape**: Avatar appears circular or lightly rounded
- **Spacing**: 1.5rem padding above border; consistent vertical rhythm between elements
- **Composition**: Three columns of equal width; text left-aligned within each column

### Social Link Row

- **Anatomy**: Horizontal series of text links
- **Surface**: Transparent; no visible hover states in static view
- **Typography**: body-small in muted ink, transitioning to ink on interaction
- **Spacing**: Even horizontal distribution with comfortable gaps
- **Composition**: Inline row below introduction paragraph

## Responsive behavior

The two-column project grid should collapse to a single column on narrower viewports, maintaining card proportions and internal padding. The three-column testimonials section should stack vertically, preserving the top border as a section divider rather than a column separator. The floating navigation pill may require horizontal scrolling or a condensed layout on very narrow screens; consider a bottom-sheet alternative if viewport width cannot accommodate the full link set.

The about page's single-column flow adapts naturally, though the 3D shelf illustration should scale down proportionally to avoid overwhelming the text. Experience timeline items should maintain their logo-text relationship, potentially stacking logo above text if horizontal space becomes constrained. Typography scales down by one step on small screens: hero-display to 1.25rem, body to 0.875rem, preserving line height ratios.

## Practical implementation guidance

### Preserve
- The stark black-on-white typography as the dominant reading experience
- The single italic serif accent in greeting contexts—do not overuse
- Light gray project surfaces that unify diverse imagery
- Generous section spacing that lets content breathe
- The floating navigation pill's persistent bottom-center placement

### Avoid
- Adding decorative icons or embellishments to the minimal system
- Introducing additional colors beyond the functional five-token palette
- Reducing whitespace to fit more content above the fold
- Using the italic serif for body text or labels—reserve for editorial moments
- Heavy borders or shadows that compete with the flat, clean surfaces

### Recommended Build Order
1. Establish the type scale with Instrument Sans as the primary family
2. Implement the five-color palette with CSS custom properties
3. Build the single-column content flow for the about page
4. Add the two-column project grid with consistent card treatment
5. Create the floating navigation pill with fixed positioning
6. Layer in the experience timeline with logo squares
7. Add testimonials with three-column layout and border separators
8. Integrate the italic serif greeting as a final personality touch

### Accessibility
- Ensure the floating navigation pill meets minimum touch target sizes (44×44 CSS pixels)
- Maintain 4.5:1 contrast ratio for all body text; the black-on-white pairing exceeds this
- Provide focus indicators for keyboard navigation that match the pill's rounded aesthetic
- Consider `prefers-reduced-motion` for any scroll-triggered animations of the 3D illustration
- Use semantic heading hierarchy: the introduction functions as h1, project names as h2 or h3 depending on page structure

## Scope note

This guide covers the homepage and about-me page surfaces visible in the supplied images. Case-study detail pages, mobile breakpoints, hover and focus states, loading behavior, and form interactions are not represented. The contact flow, sketch gallery, and any additional project pages fall outside the current scope. Measurements are practical adaptation targets derived from visual inspection of the desktop presentation.
