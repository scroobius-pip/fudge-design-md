# How trycoast.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/trycoast.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark navy footer and CTA section with purple gradient buttons, Coast logo, and multi-column link navigation](https://pin.fontofweb.com/4402?format=jpg)](https://design.withfudge.com/share/pin-4402)

[Dark navy footer and CTA section with purple gradient buttons, Coast logo, and multi-column link navigation](https://design.withfudge.com/share/pin-4402)

[![Customer testimonials in a three-column masonry layout with company logos and purple-accented section heading](https://pin.fontofweb.com/4401?format=jpg)](https://design.withfudge.com/share/pin-4401)

[Customer testimonials in a three-column masonry layout with company logos and purple-accented section heading](https://design.withfudge.com/share/pin-4401)

[![Light-background feature section with purple-accented heading and stacked capability list with hairline separators](https://pin.fontofweb.com/4400?format=jpg)](https://design.withfudge.com/share/pin-4400)

[Light-background feature section with purple-accented heading and stacked capability list with hairline separators](https://design.withfudge.com/share/pin-4400)

[![Hero section with product mockup showing mobile payment UI, purple gradient text, and use-case accordion list](https://pin.fontofweb.com/4399?format=jpg)](https://design.withfudge.com/share/pin-4399)

[Hero section with product mockup showing mobile payment UI, purple gradient text, and use-case accordion list](https://design.withfudge.com/share/pin-4399)

## Overview

Coast presents itself as an API go-to-market platform through a design language that balances technical credibility with approachable clarity. The system operates across two distinct tonal registers: expansive light sections that feel like modern productivity software, and deep navy surfaces that create dramatic contrast for calls-to-action and footer navigation. Purple serves as the singular accent color, appearing in gradient text treatments, button fills, and interactive highlights. The typography relies on Roobert, a geometric sans-serif with clean lines and open apertures, paired with Roobert Mono Trial for technical labels and small-cap treatments. The overall impression is of a tool built by engineers for engineers—precise, uncluttered, and confident without being flashy.

## Colors

| token | value | use |
|---|---|---|
| canvas | #FFFFFF | Primary background for content sections, testimonial cards, and reading surfaces |
| ink | #1E1E2E | Primary text on light backgrounds, dark UI elements |
| muted-ink | #6B7280 | Secondary text, capability list items, captions, and de-emphasized content |
| accent | #6366F1 | Primary buttons, interactive highlights, gradient text mid-tone |
| accent-gradient-start | #818CF8 | Lighter purple for gradient text beginnings and hover states |
| accent-gradient-end | #4F46E5 | Deeper purple for gradient text endings and pressed states |
| surface-dark | #1E1B4B | Footer background, CTA section backdrop, dark mode surfaces |
| surface-light | #F8FAFC | Subtle section alternation, code block backgrounds |
| border | #E2E8F0 | Hairline separators between list items, card outlines on light backgrounds |
| border-dark | #312E81 | Subtle divisions within dark surfaces, footer column separators |

The color system divides cleanly into light and dark modes. Light sections use canvas white with ink text and muted-ink for hierarchy. The accent purple appears most dramatically in gradient text treatments that shift from lighter to deeper violet across key phrases like "magic" and "your stack." Dark sections invert this relationship: surface-dark navy hosts white text, with accent buttons providing the single vivid interruption. The gradient treatment on text is a signature element—it appears on headings where emotional emphasis is needed, while body text remains flat for readability. No additional accent colors compete for attention; the purple family carries all interactive and decorative color work.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Roobert | 3.5rem | 400 | 1.1 | -0.02em | Page hero headlines, major section openings |
| section-display | Roobert | 2.5rem | 400 | 1.15 | -0.01em | Section headings, testimonial intro |
| body | Roobert | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions, quotes |
| body-small | Roobert | 0.875rem | 400 | 1.5 | 0 | Buttons, navigation, compact descriptions |
| label | Roobert Mono Trial | 0.75rem | 400 | 1.4 | 0.05em | Category labels, small caps, technical tags |
| navigation | Roobert | 0.875rem | 400 | 1 | 0 | Header and footer link lists |

The type system is built on two related families: Roobert for all primary reading and display, and Roobert Mono Trial for technical or categorical labeling. Roobert's geometric construction—with near-circular bowls and straight-sided terminals—gives the interface a contemporary European feel that avoids the over-familiarity of system fonts. Weights are restrained; the design uses only Regular (400) across all sizes, relying on size and color contrast for hierarchy rather than boldness. Display sizes employ tight negative tracking that increases density and impact, while body text uses neutral tracking for comfortable reading. The mono face appears in all-caps labels like "WALL OF LOVE" with slightly expanded tracking, creating a deliberate rhythm against the sans-serif body. Verify licensing for these families before production use.

## Layout

The page follows a centered single-column structure with generous horizontal margins. Content max-width appears to sit around 1200px, creating ample breathing room on large displays. Sections stack vertically with substantial vertical rhythm—approximately 6rem between major content blocks—to prevent the dense technical content from feeling cramped.

The testimonial section demonstrates an asymmetric three-column masonry layout. Cards vary in height based on quote length, creating organic visual rhythm against the otherwise rigid grid. Columns maintain consistent gutter width, approximately 1.5rem, with no visible card borders or shadows—separation comes from whitespace alone.

Feature sections use a two-column split: left column carries the heading and descriptive paragraph, right column presents a stacked list or visual demonstration. This asymmetric ratio favors the visual content slightly, approximately 45/55, keeping text scannable while allowing product imagery to breathe.

The footer compresses into a multi-column link grid against the dark surface. Four columns of navigation links sit right-aligned while the Coast logo and location tag occupy the left. A full-width hairline separates the link grid from the legal bar below, which spreads copyright and policy links across the full width.

## Visual language

The visual character is defined by restraint and precision. Photography is absent; the design relies on typography, subtle color fields, and product interface mockups to communicate. The purple gradient text treatment is the most distinctive decorative element—applied selectively to words within headings rather than entire lines, creating moments of emphasis that guide reading without overwhelming.

Geometric cleanliness extends to all interactive elements. Buttons are fully rounded rectangles with consistent padding ratios. The product mockups in the hero section show actual interface chrome—mobile payment flows, code snippets, API documentation—rendered with soft shadows that lift them slightly from the flat background. These mockups use their own internal color systems (blues, greens, oranges for code syntax) but remain subordinate to the page's purple-and-navy palette.

Subtle horizontal rules in light gray divide list items and section transitions. These hairlines are exactly 1px, functioning as optical separators rather as structural borders. The dark footer inverts this: borders become nearly invisible against the deep navy, allowing the white text and purple buttons to dominate.

## Components

**Primary Action Button**
- Anatomy: Text label centered within a filled rounded rectangle
- Surface: Solid accent purple (#6366F1) background with white text
- Typography: body-small token, Regular weight
- Shape: 0.5rem border radius, 0.75rem vertical padding, 1.5rem horizontal padding
- Spacing: Typically appears in pairs with secondary button, 0.75rem gap between

**Secondary Action Button**
- Anatomy: Text label centered within a stroked rounded rectangle
- Surface: Transparent background with 1px white border and white text
- Typography: body-small token, Regular weight
- Shape: 0.5rem border radius, matching padding to primary button
- Variants: On light backgrounds, would invert to ink border and ink text (not visible in supplied images)

**Testimonial Card**
- Anatomy: Company logo, quote paragraph, and author attribution with avatar
- Surface: White background, no visible border or shadow
- Typography: body token for quote, body-small for author name, label token for title
- Shape: 0.75rem border radius
- Composition: Stacked vertically with logo at top, generous internal padding

**Capability List Item**
- Anatomy: Text label with full-width hairline below
- Surface: Transparent, with border-bottom in light gray
- Typography: body-small token, muted-ink color
- Shape: Full width, 0.75rem vertical padding
- Composition: Stacked vertically with no gap between items, creating continuous ruled list

**Use Case Accordion**
- Anatomy: Text label with optional expand indicator, hairline separator
- Surface: Transparent, selected state shows bullet indicator
- Typography: body-small token, ink for selected, muted-ink for unselected
- Shape: Full width, generous vertical padding
- States: Selected item shows filled circle bullet; unselected items plain text

**Footer Navigation Column**
- Anatomy: Column header label with stacked link list below
- Surface: Transparent against surface-dark background
- Typography: label token for header (mono, small caps), body-small for links
- Composition: Four columns with consistent internal spacing, right-aligned grid

## Responsive behavior

The layout appears optimized for desktop viewing with substantial horizontal margins. At narrower viewports, the three-column testimonial masonry should collapse to a single column to maintain readable line lengths. The two-column feature sections would benefit from stacking, with the text content preceding the visual demonstration.

The navigation structure visible in the footer suggests a horizontal header navigation on larger screens; this would require a hamburger or condensed menu pattern on mobile. Button pairs in the CTA section should stack vertically with full-width treatment on narrow viewports, maintaining the primary action above the secondary.

The gradient text treatment requires careful implementation across browsers; ensure the clipping mask approach degrades gracefully to solid accent color where gradient text is unsupported. Dark section backgrounds should maintain sufficient contrast ratios for all text sizes; the white-on-navy combination exceeds WCAG AAA requirements.

## Practical implementation guidance

**Preserve**
- The strict two-family typography system with mono reserved for labels and small caps
- Gradient text as a selective emphasis tool, not applied to entire headings
- The light/dark section alternation that creates rhythm and signals content type
- Generous whitespace between sections; the design depends on breathing room
- Hairline borders that separate without boxing content in visible containers

**Avoid**
- Adding additional accent colors; the purple family carries sufficient visual interest
- Heavy shadows or elevation effects; the flat treatment supports the technical tone
- Bold weights in typography; the design achieves hierarchy through size and color alone
- Decorative background patterns or textures that compete with the product mockups
- Rounded corners larger than 1rem; the geometric precision depends on restraint

**Recommended build order**
1. Establish the type scale with Roobert loaded at all six sizes
2. Implement the light section background with ink and muted-ink text
3. Build the dark footer/CTA surface with inverted text colors
4. Create the primary and secondary button components with exact padding ratios
5. Add the gradient text treatment as a utility class for selective heading words
6. Implement the two-column feature layout and three-column testimonial grid
7. Polish with hairline borders and final spacing adjustments

**Accessibility**
- Ensure gradient text has sufficient contrast; the deeper purple end (#4F46E5) against white meets WCAG AA for large text
- Provide focus indicators for all interactive elements; the current design shows no visible focus state
- Maintain the semantic heading hierarchy visible in the content structure
- Test the dark navy footer (#1E1B4B) with white text at all sizes; the combination is safe but verify with actual font rendering
- Consider reduced-motion preferences for any scroll-triggered gradient animations

## Scope note

This guide covers the Coast homepage landing experience visible in the supplied images: hero section, feature capabilities, customer testimonials, and footer CTA. Navigation header, additional interior pages, mobile layouts, form interactions, and motion behavior are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid.
