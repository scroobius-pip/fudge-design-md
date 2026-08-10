# How deta.surf is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/deta.surf-design)

Last updated: 2026-08-10

## Captured pages

[![Hero landing with illustrated paper airplane against a sky-blue gradient, featuring a centered serif headline and a blue pill-shaped download button.](https://pin.fontofweb.com/4137?format=jpg)](https://design.withfudge.com/share/pin-4137)

[Hero landing with illustrated paper airplane against a sky-blue gradient, featuring a centered serif headline and a blue pill-shaped download button.](https://design.withfudge.com/share/pin-4137)

[![Feature showcase with a bright blue background panel, white serif heading, and a browser-window mockup displaying split-pane note-taking and web reading.](https://pin.fontofweb.com/4136?format=jpg)](https://design.withfudge.com/share/pin-4136)

[Feature showcase with a bright blue background panel, white serif heading, and a browser-window mockup displaying split-pane note-taking and web reading.](https://design.withfudge.com/share/pin-4136)

[![Minimal closing section with serif tagline, blue pill button, and decorative sunflower grass border illustration on clean white canvas.](https://pin.fontofweb.com/4135?format=jpg)](https://design.withfudge.com/share/pin-4135)

[Minimal closing section with serif tagline, blue pill button, and decorative sunflower grass border illustration on clean white canvas.](https://design.withfudge.com/share/pin-4135)

[![Six-card feature grid with rounded thumbnails, serif section heading, and muted body text describing notebook capabilities.](https://pin.fontofweb.com/4134?format=jpg)](https://design.withfudge.com/share/pin-4134)

[Six-card feature grid with rounded thumbnails, serif section heading, and muted body text describing notebook capabilities.](https://design.withfudge.com/share/pin-4134)

## Overview

Deta Surf presents a product landing experience built around warmth, clarity, and creative personality. The visual system pairs an elegant, high-contrast serif display face with clean sans-serif body text, creating a reading experience that feels both crafted and approachable. The design language leans heavily on atmospheric illustration—paper airplanes drifting through cloud-filled skies, sunflowers rising from grassy borders—to communicate lightness and imagination rather than corporate efficiency.

The layout philosophy centers generous vertical breathing room and restrained horizontal containment. Content flows in centered single-column formations for hero messaging, then expands into structured grids for feature exposition. A bright, saturated blue serves as the singular accent color, appearing in pill-shaped call-to-action buttons and select background panels. The overall impression is of a tool designed for creative thinkers: unhurried, visually rich, and confident in its own character.

## Colors

The palette is intentionally restrained, relying on high-contrast neutrals and a single vibrant blue accent. Illustrations introduce secondary hues—greens, yellows, warm grays—but these remain confined to artwork rather than interface elements.

| token | value | use |
|---|---|---|
| canvas | `#FFFFFF` | Primary page background, card surfaces, button text |
| ink | `#000000` | Primary headings, body text, logo mark |
| muted-ink | `#6B6B6B` | Secondary descriptions, footer links, legal text |
| action | `#0A84FF` | Primary buttons, interactive accents, download CTAs |
| action-hover | `#0066CC` | Button pressed or hover state |
| sky-blue | `#5AC8FA` | Hero gradient backgrounds, atmospheric panels |
| surface | `#F5F5F7` | Subtle section alternation, code block backgrounds |
| border | `#E5E5E5` | Card outlines, dividers, subtle containment |

The interface operates in a light mode exclusively across visible surfaces. The sky-blue gradient in the hero creates depth through atmospheric perspective, shifting from deeper blue at the top to nearly white at the bottom where clouds accumulate. This gradient functions as both background and emotional tone-setter. The action blue is consistently saturated and warm-leaning, avoiding the clinical feel of cooler enterprise blues. Dark mode is referenced in feature descriptions but not visibly implemented in the captured interface.

## Typography

Two font families drive the typographic hierarchy: Gambarino for display and editorial moments, Switzer for functional and body text. Gambarino's classical proportions and delicate serifs lend authority to headlines without heaviness. Switzer provides clean, open readability at smaller sizes with a contemporary geometric sensibility.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gambarino | 4rem | 400 | 1.1 | -0.02em | Primary page headlines, hero statements |
| section-display | Gambarino | 2.5rem | 400 | 1.2 | -0.01em | Section headings, feature introductions |
| body | Switzer | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, general content |
| body-large | Switzer | 1.25rem | 400 | 1.5 | 0em | Lead paragraphs, emphasized descriptions |
| label | Switzer | 0.875rem | 400 | 1.4 | 0.01em | Buttons, captions, metadata |
| navigation | Switzer | 0.875rem | 400 | 1.4 | 0em | Footer links, secondary navigation |

Gambarino appears exclusively at display sizes, never below 2rem in visible application. Its Regular weight carries sufficient presence that bolder weights are unnecessary. Switzer maintains consistent Regular weight throughout; no Medium or Bold instances are visible in the interface. Headlines use tight negative tracking for cohesive word-shapes, while body text employs neutral tracking for extended reading comfort.

Font attribution: Gambarino designed by Théo Guillard, published by Indian Type Foundry. Switzer designed by Jeremie Hornus, published by Indian Type Foundry. Verify licensing for these families before production use.

## Layout

The page structure follows a centered, single-axis rhythm with periodic full-bleed interruptions. Maximum content width appears constrained to approximately 72rem for feature grids, while hero and closing sections allow atmospheric elements to extend to viewport edges.

Vertical spacing follows a section-based rhythm. Major sections separate by 6rem or more, creating clear territorial boundaries without explicit dividers. Within sections, content gaps of 1.5rem organize related elements—headlines from subheads, descriptions from actions, cards from their labels.

The hero section employs a layered composition: centered text and button stack over a full-bleed illustrated background. The paper airplane illustration occupies the left-center space, creating asymmetrical balance against right-weighted cloud formations. This illustration breaks the centered text alignment convention, adding visual interest without disrupting readability.

Feature sections transition to asymmetric split layouts. The "All in one place" section places a text block left-aligned against a bright blue panel, with a browser mockup floating right. This creates diagonal visual tension and suggests depth through overlapping planes.

The closing section returns to centered simplicity: tagline, button, attribution, and footer links stacked with generous whitespace above a decorative grass border. This border anchors the page with organic weight, preventing the airy upper sections from feeling ungrounded.

Grid systems appear implicit rather than rigid. The six-card feature grid uses three columns with consistent gutters, but card heights vary with content. No strict baseline grid is enforced across disparate sections.

## Visual language

Illustration dominates the visual character. The paper airplane, cloudscapes, and sunflower borders share a consistent hand-crafted quality: soft edges, watercolor-like texture, and gentle shading without hard shadows. These illustrations function as emotional anchors rather than decorative ornament—they occupy significant compositional space and directly communicate product values (lightness, growth, creativity).

Photography appears only within browser mockups, where it represents user content rather than brand imagery. These screenshots maintain neutral framing, allowing the interface chrome to remain the focus.

Shape language favors organic softness. Buttons use full pill rounding. Cards use moderate 1rem radii. The browser mockup in feature sections employs heavier 1.5rem rounding on its outer frame, with subtle shadow suggesting elevation. No sharp corners appear in interactive elements.

Motion is implied through illustration composition—the airplane's upward trajectory, clouds drifting across gradients—but no interface animation is visible in still images. The visual system would support gentle transitions: button color shifts, card lift on hover, gradient subtlety changes.

Texture appears in gradient backgrounds as grain or noise, preventing flat color from feeling sterile. This texture is extremely subtle, visible only on close inspection, but contributes to the handmade aesthetic established by illustrations.

## Components

### Primary action button

- **Anatomy**: Icon prefix (Apple logo, arrow, or none), label text, optional dropdown chevron
- **Surface**: Solid action blue background; white text and icon
- **Typography**: label token, centered
- **Shape**: Full pill rounding (9999px), generous horizontal padding (2rem), vertical padding (0.75rem)
- **Spacing**: Typically appears 1.5rem below headline or description text
- **Variants**: Full-width on narrow contexts; compact with icon-only on secondary actions; dropdown variant with trailing chevron for platform selection

### Feature card

- **Anatomy**: Rounded thumbnail image or illustration, title in body token, description in label token with muted-ink color
- **Surface**: White background, 1px border in subtle gray, no visible shadow
- **Typography**: Title uses body token at ink color; description uses label token at muted-ink
- **Shape**: 1rem border radius on container; thumbnail inherits radius on top corners or is inset with its own rounding
- **Spacing**: Internal padding of 1.5rem; external gap of 1.5rem in grid formation
- **Composition**: Thumbnail occupies upper portion at roughly 16:10 aspect ratio; text stacks below with 0.75rem separation

### Hero section

- **Anatomy**: Centered logo mark, headline in hero-display, optional subheadline, primary action button, legal microcopy, footer navigation
- **Surface**: Full-bleed gradient from sky-blue to near-white; illustrated elements layered behind text
- **Typography**: Headline in hero-display at ink color; subheadline and legal in label at muted-ink
- **Shape**: No containing panel; text floats directly on gradient
- **Spacing**: Generous vertical padding, approximately 8rem above headline; elements stack with 1.5rem gaps

### Browser mockup

- **Anatomy**: Rounded rectangle frame with traffic-light dots (red, yellow, green) in upper left; address bar area; content viewport showing application interface
- **Surface**: Light gray or white chrome; subtle shadow suggesting elevation above page plane
- **Shape**: 1.5rem outer radius; inner content area slightly inset
- **Composition**: Typically positioned right of text block, overlapping section boundaries; scale suggests 80-90% of natural browser size

### Footer

- **Anatomy**: Attribution line ("handcrafted in the heart of Berlin"), inline link list (Legal, Privacy, Terms, X)
- **Surface**: Transparent or matching section background
- **Typography**: label token at muted-ink; links undecorated
- **Spacing**: Compact vertical stack, approximately 0.75rem between attribution and links

## Responsive behavior

The centered single-column hero structure adapts naturally to narrower viewports by maintaining alignment and reducing headline size. The paper airplane illustration likely scales proportionally or shifts to a simplified position to avoid crowding text.

The asymmetric feature section with browser mockup requires more deliberate adaptation. At reduced widths, the logical reflow places text above the mockup, converting the horizontal split to vertical stacking. The blue background panel may extend full-bleed or convert to a contained card.

The six-card feature grid collapses from three columns to two, then to single column. Card thumbnails maintain aspect ratio; text reflows naturally within card boundaries.

Button sizing remains consistent across breakpoints, but full-width treatment on mobile would improve touch accessibility. The dropdown variant for platform selection may convert to a native select or bottom sheet on small screens.

## Practical implementation guidance

### Preserve
- The contrast between Gambarino's classical elegance and Switzer's clean functionality
- Full-bleed illustrated hero sections with layered atmospheric depth
- Single accent color discipline—reserve saturated blue for interactive elements only
- Generous vertical whitespace between major sections
- Hand-crafted illustration quality; avoid generic stock photography
- Pill-shaped buttons as the primary interactive signature

### Avoid
- Introducing additional accent colors beyond the blue system
- Sharp corners on interactive elements
- Heavy shadows or elevation effects that compete with illustration
- Tight letter-spacing on body text sizes
- Background textures that compete with foreground illustrations
- Multi-line pill buttons; keep labels concise

### Recommended build order
1. Establish typographic hierarchy with Gambarino headlines and Switzer body text
2. Implement the hero gradient and paper airplane illustration positioning
3. Build the primary pill button with icon support and dropdown variant
4. Create the feature card component with thumbnail, title, and description
5. Assemble the six-card grid with responsive column behavior
6. Add the browser mockup frame for feature showcases
7. Implement footer with attribution and inline link pattern
8. Apply final spacing and illustration polish

### Accessibility
- Ensure sufficient contrast between sky-blue gradient and white text if inverted treatments are added
- Provide visible focus indicators on pill buttons; the rounded shape may require custom outline treatment
- Maintain text resizing compatibility; Gambarino at display sizes should scale down gracefully
- Include descriptive alt text for all illustrations, as they carry significant narrative weight
- Consider reduced-motion preferences for any gradient or illustration animations

## Scope note

This guide covers the Deta Surf marketing landing page as captured, including the hero, feature showcase, feature grid, and closing sections. Mobile layouts, dark mode implementation, loading states, and application interface details beyond the marketing site are not represented. Measurements are practical adaptation targets derived from visible proportions.
