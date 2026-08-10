# How nucleoapp.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/nucleoapp.com-design)

Last updated: 2026-08-10

## Captured pages

[![Download page with dark action buttons and split-screen app preview showing light and dark icon manager interfaces](https://pin.fontofweb.com/4272?format=jpg)](https://design.withfudge.com/share/pin-4272)

[Download page with dark action buttons and split-screen app preview showing light and dark icon manager interfaces](https://design.withfudge.com/share/pin-4272)

[![Social proof section with designer testimonials in card layout and grayscale company logos](https://pin.fontofweb.com/4271?format=jpg)](https://design.withfudge.com/share/pin-4271)

[Social proof section with designer testimonials in card layout and grayscale company logos](https://design.withfudge.com/share/pin-4271)

[![Pricing page with user count selector, icon family options, and purple primary action button](https://pin.fontofweb.com/4270?format=jpg)](https://design.withfudge.com/share/pin-4270)

[Pricing page with user count selector, icon family options, and purple primary action button](https://design.withfudge.com/share/pin-4270)

[![Premium icons page footer with multi-column navigation and centered 3D geometric logo mark](https://pin.fontofweb.com/4269?format=jpg)](https://design.withfudge.com/share/pin-4269)

[Premium icons page footer with multi-column navigation and centered 3D geometric logo mark](https://design.withfudge.com/share/pin-4269)

## Overview

Nucleo presents itself as a professional icon management platform with a design language that balances technical credibility and approachable simplicity. The visual system rests on a neutral foundation of warm grays and pure whites, allowing the product's colorful icon content and a single vibrant purple accent to carry visual energy. The interface avoids decorative excess, favoring clean lines, ample whitespace, and clear typographic hierarchy. A distinctive rounded display typeface, Pp Nikkei Maru, provides personality in headlines while Inter handles functional text with quiet efficiency. The overall impression is of a tool built by designers for designers—precise, modern, and confident without being flashy. Product screenshots dominate the marketing pages, letting the interface itself serve as the primary visual proof of quality.

## Colors

The color system is intentionally restrained, using a near-monochrome base with a single high-saturation accent for calls to action and interactive emphasis.

| token | value | use |
|---|---|---|
| ink | #1A1A1A | Primary text, dark buttons, strong borders, logo mark |
| muted-ink | #6B6B6B | Secondary text, captions, inactive navigation, helper text |
| canvas | #F5F5F5 | Page background, footer background, subtle section fills |
| surface | #FFFFFF | Card backgrounds, input fields, content panels, button text on dark |
| action | #8B5CF6 | Primary buttons, active states, links, checkmarks, pricing CTA |
| action-hover | #7C3AED | Hover state for action elements |
| border | #E5E5E5 | Default dividers, card borders, input borders, subtle separators |
| border-strong | #1A1A1A | Selected state borders, emphasis borders on pricing options |

The light mode dominates all visible surfaces. Dark surfaces appear only within product screenshots showing the application's dark mode interface. The purple accent is used sparingly but decisively: the "Buy Icons" button on pricing, the "Launch Web App" link in navigation, and checkmark indicators in feature lists. This disciplined application prevents the accent from competing with the colorful icon content that users browse. Grayscale photography and neutral backgrounds ensure that user-generated content and product imagery remain the focal point.

## Typography

Two families serve distinct roles: Pp Nikkei Maru for display and brand moments, Inter for everything functional.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pp Nikkei Maru | 3rem | 600 | 1.1 | -0.02em | Page titles, major section headers |
| section-display | Pp Nikkei Maru | 2rem | 600 | 1.2 | -0.01em | Subsection headings, testimonial intros |
| body | Inter | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, general content |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Captions, metadata, pricing details |
| label | Inter | 0.75rem | 500 | 1.4 | 0.02em | Buttons, tags, category labels, navigation |
| navigation | Inter | 0.875rem | 400 | 1.5 | 0 | Header links, footer links |

Pp Nikkei Maru appears exclusively at larger sizes where its rounded, geometric character reads as friendly and distinctive. The Semibold weight provides sufficient presence without heaviness. Inter handles all functional text at smaller sizes, maintaining excellent legibility in UI controls and dense information layouts. Line heights stay tight for display type and generous for body text, creating clear rhythmic separation between reading and scanning contexts.

Verify licensing for these families before production use. Pp Nikkei Maru is designed by Caio Kondo and distributed by Pangram Pangram. Inter is designed by Rasmus Andersson and distributed by Rsms.

## Layout

The layout follows a centered single-column model with moderate maximum width, creating focused reading paths that suit product marketing content.

Page sections stack vertically with consistent rhythm. The header spans full width with a centered logo and navigation links distributed to the left and right edges. Content areas maintain generous horizontal margins, approximately 5rem on desktop, keeping text lines readable and framing product imagery with breathing room.

The pricing page demonstrates a compact centered form pattern: a title, followed by interactive selectors, then stacked option cards, and finally a full-width action button. This vertical stacking reduces cognitive load for decision-making. Testimonial content uses a multi-column masonry-like arrangement, with cards of varying heights creating visual interest without rigid grid alignment.

Spacing follows a 0.25rem base unit. Section breaks use 5rem vertical padding to create clear content territories. Internal card padding sits at 1.5rem, while tight groupings like tag clusters and navigation items compress to 0.5rem. Content gaps between related elements maintain 1.5rem for comfortable scanning.

The footer expands into a multi-column link grid, using five equal columns with clear category headers. This wide distribution suits the extensive navigation needs of a product with multiple icon families and application versions.

## Visual language

The visual character emerges from contrast between organic rounded forms and precise geometric structure. The Pp Nikkei Maru typeface introduces soft, almost playful curves in headlines, while Inter and the grid-based layouts restore technical precision.

Product imagery dominates the visual field. Screenshots show the actual application interface—icon grids, sidebar navigation, property panels—rendered with realistic shadows and depth. These are not flat illustrations but dimensional representations that communicate professional software quality. The application itself displays icons in clean grid cells with subtle hover states, reinforcing the product's purpose through every visual choice.

The brand mark appears as a three-dimensional geometric construction: dark angular planes framing a glowing purple sphere. This abstract form suggests depth, curation, and contained energy—qualities appropriate for an icon library. The mark avoids literal iconography in favor of memorable geometric abstraction.

Social proof elements use real user avatars and interface screenshots rather than generic testimonials. Designer tweets and application mockups appear in card containers with subtle borders, letting the authentic content carry credibility. Company logos appear in grayscale, preventing brand color clashes while establishing trust through recognition.

## Components

### Primary action button

The primary action uses a solid purple fill with white text. The button spans full width in critical conversion contexts like pricing, creating an unmissable target. At standard sizes, it uses comfortable padding with rounded corners slightly softer than full pills. The label uses Inter at small size with medium weight, keeping the button feel functional rather than decorative.

### Secondary action button

Dark buttons with near-black fills and white text serve secondary but still prominent actions like platform downloads. These use the same rounded corner treatment and padding as primary actions, creating family consistency while the color shift establishes priority. Platform icons precede text labels, aiding quick scanning for Mac versus Windows options.

### Pricing option card

Each pricing tier appears as a selectable card with light background and subtle border. The selected state gains a stronger dark border and a filled radio indicator. Inside, the card carries a title, price, and a row of descriptive tags showing icon count and style variants. Tags use small rounded pills with light fills and dark text, creating compact metadata clusters. Prices align to the right, maintaining clean vertical edges for comparison.

### User count selector

A horizontal row of pill-shaped buttons allows selection of team size. The active state uses a dark fill with white text; inactive states show light fills with dark text. These sit close together with minimal gap, reading as a single control unit rather than separate buttons.

### Testimonial card

Social proof cards float on the canvas background with white surfaces and subtle borders. Each contains an avatar, name, handle, close action, and content area. Content may include text, embedded interface screenshots, or product imagery. Cards vary in height based on content, creating an organic masonry rhythm. The close action appears as a simple X icon in the upper right, unobtrusive but available.

### Navigation header

The header uses a light background with no visible border, relying on whitespace separation. Links use muted gray with dark active states. The primary action link—"Launch Web App"—uses the purple accent with an external-link icon, distinguishing it from standard navigation. The centered logo mark provides brand anchor without competing with content.

### Footer navigation

The footer expands into a five-column grid with category headers in muted text and link lists in dark text. Each column carries a small icon prefix for the category, adding subtle visual identification. The large centered logo mark below the navigation creates a strong closing impression, with the copyright notice tucked beneath in small muted text.

## Responsive behavior

The design appears optimized for desktop viewing with substantial content width. On narrower viewports, the multi-column testimonial grid should collapse to a single column, maintaining card proportions while stacking vertically. The pricing selector and option cards would similarly stack, with the user count pills wrapping to multiple rows if space constrains horizontal display.

The footer navigation, currently five columns, should reorganize into fewer columns or an accordion pattern on smaller screens, preserving link accessibility without excessive horizontal compression. Product screenshots may require horizontal scrolling or responsive scaling to maintain interface legibility.

Touch targets for pill selectors and action buttons should maintain minimum 44px height even when scaling down other elements. The full-width primary action button on pricing naturally adapts to narrow screens without modification.

## Practical implementation guidance

### Preserve
- The disciplined two-typeface system: display personality through Pp Nikkei Maru, functional clarity through Inter
- The single purple accent against neutral grays; this restraint is central to the brand's professional character
- Generous whitespace around product screenshots; the interface needs room to breathe
- Real user content in social proof sections; authenticity over polish
- The dark-button-for-downloads, purple-button-for-conversion pattern

### Avoid
- Adding additional accent colors; the system derives energy from constraint
- Heavy drop shadows or dimensional effects on cards; keep surfaces flat and clean
- Decorative background patterns or textures that compete with icon content
- Rounded corners larger than the panel radius on functional containers
- Centered body text; maintain left alignment for readable paragraphs

### Recommended build order
1. Establish the neutral color foundation with canvas, surface, ink, and border tokens
2. Implement Inter at body and label sizes for all functional text
3. Add Pp Nikkei Maru at hero and section display sizes for page structure
4. Build the primary and secondary button components with consistent padding and radius
5. Create the pricing option card with selectable states and tag clusters
6. Implement the header and footer navigation patterns
7. Add the purple accent to interactive elements and verify contrast ratios

### Accessibility
- Ensure the purple action color meets WCAG AA contrast against white backgrounds; the vibrant tone may need darkening for small text
- Provide visible focus indicators for keyboard navigation, particularly on the pill selectors and pricing cards
- Maintain semantic heading hierarchy with Pp Nikkei Maru sizes, not just visual scaling
- Include descriptive labels for icon-only actions like the testimonial card close buttons
- Test the dark-button-on-light-surface combination for sufficient contrast; the near-black fill should provide strong differentiation

## Scope note

This guide covers the marketing and pricing surfaces of nucleoapp.com visible in the supplied images, including the download, pricing, and premium icons pages. The actual application interface shown in screenshots, mobile layouts, animation behavior, form validation states, and checkout flows are not represented. Measurements are practical adaptation targets derived from visible proportions.
