# How theseventeen.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/theseventeen.co-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with italic blue 'Maybe' display text and navigation bar with filled Home button](https://pin.fontofweb.com/7306?format=jpg)](https://design.withfudge.com/share/pin-7306)

[Hero section with italic blue 'Maybe' display text and navigation bar with filled Home button](https://design.withfudge.com/share/pin-7306)

[![Hero section with Monument Extended headline, lime-green pill badge, and grid background with font overlay](https://pin.fontofweb.com/7305?format=jpg)](https://design.withfudge.com/share/pin-7305)

[Hero section with Monument Extended headline, lime-green pill badge, and grid background with font overlay](https://design.withfudge.com/share/pin-7305)

[![Clean hero section with centered headline, body text, and Explore arrow link on grid background](https://pin.fontofweb.com/7304?format=jpg)](https://design.withfudge.com/share/pin-7304)

[Clean hero section with centered headline, body text, and Explore arrow link on grid background](https://design.withfudge.com/share/pin-7304)

## Overview

The Seventeen presents a confident, systems-oriented brand identity built on the tension between engineered precision and human possibility. The visual language centers on Monument Extended—a wide, authoritative display typeface—as the voice of strategic conviction, paired with Poppins for approachable body copy and a system sans for interface utility. The design operates on a near-white grid canvas that evokes technical drafting paper, with electric blue and lime-green accents marking moments of action and energy. Navigation sits in a pill-shaped container with subtle depth, while content sections breathe through generous vertical spacing. The overall impression is of a consultancy that builds invisible infrastructure: clean, trustworthy, and deliberately memorable.

## Colors

The palette is restrained and functional, with two high-saturation accents against a neutral ground.

| token | value | use |
|---|---|---|
| ink | #0A0A0A | Primary text, dark surfaces, button fills |
| ink-secondary | #101828 | Deep navy for display headlines |
| canvas | #F7F7F7 | Page background, grid field |
| surface | #FFFFFF | Card backgrounds, nav container |
| surface-warm | #F5F5F5 | Alternate section backgrounds |
| border | #D4D4D4 | Subtle dividers, hairline rules |
| action | #1A56DB | Primary buttons, active nav states, links |
| action-hover | #064BB5 | Gradient start, hover depth |
| action-gradient-end | #0859D0 | Gradient end for active elements |
| accent-lime | #BCFF5E | Badges, highlights, energy moments |
| accent-blue-light | #D1E0FF | Soft pill backgrounds, secondary badges |
| text-muted | #3F3C39 | Secondary body text, captions |

The system runs in light mode exclusively across visible surfaces. Dark surfaces appear as button fills and occasional panel backgrounds, always with sufficient contrast against white or lime text. The lime accent functions as a signal color—limited to badges and small highlights—while the blue family carries the interactive burden. Photography and illustration pull from the same cool spectrum, reinforcing the technical brand temperature.

## Typography

Four type families are present in the source: Monument Extended for display authority, Poppins for readable body text, System (rendered as System-Uisansserif in the interface) for navigation and labels, and the underlying system sans stack for general interface text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Monument Extended | 3rem | 900 | 1.25 | -0.025em | Page headlines, section titles |
| display-italic | System | 5rem | 300 | 1 | -0.025em | Hero emphasis words, expressive moments |
| stat-number | System | 2.5rem | 500 | 1.2 | 0em | Large numerals, metrics, counters |
| body-large | Poppins | 1.125rem | 300 | 2 | 0em | Lead paragraphs, descriptive copy |
| body | System | 1rem | 400 | 1.5 | 0em | Default paragraphs, descriptions |
| label | System | 0.875rem | 600 | 1.714 | 0em | Navigation, badges, buttons, captions |

Monument Extended is credited to Mathieu Desjardins and distributed by Pangram Pangram. Poppins is credited to Jonny Pinhorn and distributed by Indian Type Foundry. The System-Uisansserif designation appears in the interface as the resolved font name for the system sans stack. Verify licensing for Monument Extended and Poppins before production use. Display sizes snap to the 2px relative unit grid: 48px, 80px, and 40px all resolve cleanly. The stat-number role at 40px fills a visible gap between body and display scales for metrics and large figures.

## Layout

The page structure follows a centered, contained model with generous breathing room. The navigation bar floats as a rounded pill near the top edge, inset from the viewport perimeter. Below it, content sections align to a maximum width of approximately 77.5rem, centered with auto margins. The hero section stacks vertically: a small badge, the Monument Extended headline, then Poppins body text, all centered.

Horizontal padding in the nav runs 4rem on each side, with internal button padding at 1rem horizontal and 0.5rem vertical. Main content sections use asymmetric right padding of 3rem in some configurations, while standard containers use 1.5rem horizontal padding. Vertical rhythm is established through section margins of 5rem top and 2rem bottom, with headline-to-body spacing at 2rem.

A subtle grid pattern overlays the canvas background, creating technical texture without competing with content. This grid appears as faint lines on the near-white ground, suggesting drafting paper or system architecture diagrams.

## Visual language

The aesthetic position balances corporate credibility with startup energy. Monument Extended's geometric width conveys institutional weight, while the lime accent and italic display moments inject personality. The grid background is the most distinctive surface treatment—omnipresent but quiet, it frames content as part of a larger system.

Imagery and photography, where present, leans cool and desaturated, harmonizing with the blue-dominant palette. Rounded corners appear on buttons and the nav container, but panels and cards maintain sharper geometry. Shadows are minimal and soft: a 4px 9px rgba black at 9% opacity provides subtle elevation for floating elements.

The lime badge ("BUILDING PERFECT SYSTEMS") demonstrates the accent discipline: small, uppercase, tightly tracked, and contained within a full pill. This restraint keeps the accent powerful rather than overwhelming.

## Components

### Navigation bar

- **Anatomy**: Logo left, centered text links, Contact button right, all within a floating pill container
- **Surface**: White background (#FFFFFF) with subtle shadow elevation
- **Typography**: System sans at 1rem for links, 0.875rem at weight 600 for active pill label
- **Shape**: Full pill radius (9999px), padding 1rem vertical and 4rem horizontal on the container
- **Spacing**: Internal link padding 0.5rem 1rem; active Home button uses filled blue pill
- **Composition**: Flex row with space-between logic; logo and Contact anchor the edges
- **Variants**: Active state shows filled blue (#1A56DB) with white text; inactive links are dark gray (#0A0A0A)

### Primary button

- **Anatomy**: Text label with optional arrow icon
- **Surface**: Filled ink (#0A0A0A) or action blue (#1A56DB)
- **Typography**: System sans at 1.25rem, weight 400, line height 1.4
- **Shape**: 0.5rem radius, padding 0.375rem 1.5rem
- **Spacing**: Compact but tappable target
- **Variants**: Blue fill for primary actions, dark fill for secondary; arrow indicates external or forward action

### Badge / Pill label

- **Anatomy**: Short uppercase text within a rounded container
- **Surface**: Lime (#BCFF5E) for energy badges, light blue (#D1E0FF) for secondary labels
- **Typography**: System sans at 0.875rem, weight 600, uppercase implied
- **Shape**: Full pill radius
- **Spacing**: Padding 0.5rem 1.5rem
- **Composition**: Centered above headlines or inline with content

### Hero section

- **Anatomy**: Stacked vertical arrangement—badge, display headline, body paragraph, action link
- **Surface**: Transparent over grid canvas
- **Typography**: Monument Extended at 3rem for headline; Poppins at 1.125rem for body; italic System at 5rem for emphasis words
- **Shape**: No containing border; content floats on grid
- **Spacing**: 2rem between headline and body; 1.25rem between body and link
- **Composition**: Center-aligned text block, maximum width constrained for readability

### Content card / Panel

- **Anatomy**: Rounded rectangle with internal padding, optional border
- **Surface**: White or warm gray (#F5F5F5)
- **Border**: 1px solid #D4D4D4 on some variants
- **Shape**: 0.5rem radius
- **Spacing**: 1.5rem internal padding
- **Composition**: Used for feature highlights, service descriptions, or portfolio items

## Responsive behavior

The design appears optimized for desktop viewport widths, with the nav pill and centered content block as the primary layout engine. At narrower widths, the nav should collapse to a hamburger or compress link spacing, preserving the logo and Contact button as visible anchors. The Monument Extended headline may scale down to 2.25rem or 2rem on tablet, maintaining line breaks for readability. The 5rem italic display text should reduce proportionally, potentially to 3rem, to prevent overflow.

Grid background density may decrease on mobile to reduce visual noise. Content max-width constraints should relax to viewport-edge padding of 1.5rem on small screens. Touch targets for nav and buttons must maintain minimum 44px height.

## Practical implementation guidance

### Preserve
- The Monument Extended + Poppins + System sans type hierarchy; this three-tier system is the brand's core voice
- The grid background texture; it differentiates the site from generic white-page competitors
- The lime accent discipline; limit to badges and small highlights
- The nav pill floating treatment with subtle shadow
- The generous vertical spacing between sections

### Avoid
- Introducing additional accent colors; the blue-lime pairing is tightly calibrated
- Using Monument Extended for body text; its width becomes illegible at small sizes
- Removing the grid background entirely; the page loses its technical character
- Center-aligning long paragraphs; keep body text left-aligned or narrow-centered

### Recommended build order
1. Establish the grid canvas and base spacing scale
2. Implement the nav pill with logo, links, and active states
3. Add Monument Extended with the hero headline treatment
4. Layer in Poppins for body copy and the badge component
5. Build the lime and blue accent components
6. Refine shadows and elevation for floating elements

### Accessibility
- Ensure the lime (#BCFF5E) on white meets minimum contrast for small text; it may need a dark text variant
- The blue action color (#1A56DB) should maintain 4.5:1 against white for body-sized text
- Monument Extended's geometric forms may reduce legibility for dyslexic readers; ensure Poppins is available for extended reading
- The grid background should not interfere with text readability; test with reduced transparency

## Scope note

This guide covers the homepage hero and navigation surfaces visible in the supplied images. Interior pages, mobile breakpoints, form states, motion behavior, and dark mode are not represented. Footer, portfolio grids, and service detail pages require additional reference. The spacing and radius values derive from the documented pixel measurements, converted to the 0.125rem relative unit.
