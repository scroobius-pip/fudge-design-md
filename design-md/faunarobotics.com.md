# How faunarobotics.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/faunarobotics.com-design)

Last updated: 2026-08-10

## Captured pages

[![Product page hero with humanoid robot photograph and feature selection panel on warm cream canvas](https://pin.fontofweb.com/10744?format=jpg)](https://design.withfudge.com/share/pin-10744)

[Product page hero with humanoid robot photograph and feature selection panel on warm cream canvas](https://design.withfudge.com/share/pin-10744)

[![Product page video hero showing Sprout robot with overlaid title and floating video thumbnail](https://pin.fontofweb.com/10743?format=jpg)](https://design.withfudge.com/share/pin-10743)

[Product page video hero showing Sprout robot with overlaid title and floating video thumbnail](https://design.withfudge.com/share/pin-10743)

[![Homepage footer with geometric robot illustrations and multi-column navigation on beige surface](https://pin.fontofweb.com/10742?format=jpg)](https://design.withfudge.com/share/pin-10742)

[Homepage footer with geometric robot illustrations and multi-column navigation on beige surface](https://design.withfudge.com/share/pin-10742)

[![Homepage hero with oversized display typography and pill-shaped CTA buttons above colorful geometric shapes](https://pin.fontofweb.com/10741?format=jpg)](https://design.withfudge.com/share/pin-10741)

[Homepage hero with oversized display typography and pill-shaped CTA buttons above colorful geometric shapes](https://design.withfudge.com/share/pin-10741)

## Overview

Fauna Robotics presents a consumer-robotics brand that balances technical credibility with playful warmth. The visual system rests on a cream-and-beige foundation that feels domestic and inviting rather than clinical. Large geometric illustrations of abstract robot figures in saturated teal, coral, gold, and dusty rose create immediate visual recognition across the homepage and footer. Typography is restrained and confident: Matter at medium weight handles all display and UI roles, while the system sans-serif stack provides body copy at a compact size. The coral accent color appears selectively in primary calls-to-action and active navigation states, ensuring it carries conversion weight without overwhelming the calm palette. Photography of the Sprout humanoid robot is treated heroically—full-bleed within rounded containers, often with overlaid text or companion UI panels. The overall impression is of a company that builds sophisticated hardware but speaks in a friendly, accessible voice.

## Colors

The palette is built around warm neutrals with a single high-energy accent. Light mode dominates; no dark mode is visible in the captured surfaces.

| token | value | use |
|---|---|---|
| accent | #F16B46 | Primary buttons, active nav links, selected feature states, icon fills |
| canvas | #EDE4D8 | Default page background, body fill |
| surface | #F8F0E3 | Cards, footer panels, secondary button fills, elevated containers |
| ink | #180102 | Primary text, headings, robot icon fill |
| muted-ink | #ACA396 | Secondary text, footer labels, inactive feature descriptions |
| light-surface | #FFFFFF | Text on dark overlays, occasional contrast panels |
| border-subtle | #D8CDC2 | Hairline dividers, inset borders on dark sections |

The canvas and surface tones are close in value, creating gentle elevation without harsh shadows. The accent coral is warm and slightly desaturated, avoiding the aggression of pure orange-red. Muted-ink serves as the workhorse secondary text color, appearing in footer column headers and unselected feature labels. Border-subtle appears as 1px solid rules, often with partial opacity, to separate content without visual noise.

## Typography

Two families divide the work: Matter for display and UI, and the system sans-serif stack for body and labels. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Matter | 6.425rem | 500 | 0.93 | -0.02em | Homepage hero headlines |
| section-display | Matter | 2.625rem | 500 | 0.76 | -0.038em | Product page section titles |
| body | -apple-system | 0.875rem | 400 | 1.3 | 0em | Paragraphs, descriptions |
| body-medium | -apple-system | 0.875rem | 400 | 1.3 | 0em | Slightly longer reading text |
| label | -apple-system | 0.6875rem | 600 | 1 | 0em | Eyebrows, small captions |
| ui | Matter | 1rem | 500 | 1 | 0em | Navigation, buttons, feature labels |
| ui-small | -apple-system | 0.75rem | 600 | 1 | 0em | Compact UI labels |

Matter is used exclusively at 500 weight; no bold or light cuts appear. The system sans-serif stack carries two weights: 400 for body and 600 for labels. Display sizes use tight negative tracking that increases with scale. Line heights are compact—UI tokens sit at 1.0, creating dense, confident button and nav treatments.

## Layout

The layout system favors full-bleed sections with generous internal padding and a consistent top navigation shell.

**Page structure.** A fixed or sticky top navigation bar spans the full viewport width, containing the Fauna robot icon at left, a centered or right-aligned link cluster, and a prominent "Request Robot" pill button at the far right. Below, sections stack vertically with no visible gutters between them. The homepage hero places oversized display type centrally, with action buttons beneath and a vast field of geometric illustration below. Product pages use a split-view archetype: a media column (photograph or video) occupies roughly 60% width, while a feature panel with selectable options occupies the remaining 40%.

**Spacing scale.** The system uses a 2px base unit. Semantic spacing values include:
- `tight`: 0.5rem (4 units) for internal component gaps
- `component`: 2rem (16 units) for card padding and button groups
- `section`: 4rem (32 units) for vertical section breathing room

**Container behavior.** Cards and media containers use 2rem to 2.5rem border radii, creating soft, approachable corners. The footer panel on the homepage is a large rounded rectangle inset from the viewport edges, reinforcing the toy-like, friendly character. Full-bleed media sits flush within these rounded frames, often with overlaid text centered in the lower third.

## Visual language

**Geometric illustration.** The brand's most distinctive element is a family of abstract robot figures built from simple shapes—circles, rounded rectangles, and arches—in a palette of teal, coral, gold, dusty rose, olive, and lavender. These appear at large scale behind or between content sections, functioning as both decoration and brand signature. The shapes are flat, with no gradients or shadows, maintaining the system's overall flat-surface aesthetic.

**Photography treatment.** Robot photography is warm-lit and domestic, showing the Sprout unit in home or workshop environments. Images receive minimal post-processing; natural color and soft shadows are preserved. Photos are always contained within rounded rectangles, never bleeding to sharp corners.

**Iconography.** The Fauna robot icon is a simple stick-figure-like robot in solid ink, used as the site favicon and navigation anchor. UI arrows and chevrons are thin and geometric, often paired with text links in the footer.

**Shadow and depth.** A single subtle shadow appears on elevated elements: `0px 4px 20px 0px rgba(0, 0, 0, 0.12)`. An inset highlight `inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1)` provides a faint top-edge sheen on dark or accent surfaces. These are used sparingly; most of the system relies on flat color blocks for hierarchy.

## Components

**Primary action button**
- Anatomy: Text label centered within a pill-shaped container
- Surface: Solid accent (#F16B46) background, white text
- Typography: `{typography.ui}`
- Shape: Full pill (`999px` radius), height approximately 2.5rem
- Spacing: Horizontal padding 1.75rem, vertical padding 1rem
- Composition: Appears at the end of nav clusters or below hero headlines
- Variants: None visible; always filled accent with white text

**Secondary action button**
- Anatomy: Text label within a pill-shaped container
- Surface: Surface color (#F8F0E3) background, ink text
- Typography: `{typography.ui}`
- Shape: Full pill radius
- Spacing: Same padding as primary
- Composition: Paired with primary buttons, placed to the left

**Feature selection panel**
- Anatomy: Vertical stack of selectable rows, each with a label and optional description
- Surface: Surface background for the panel; selected row uses accent fill with white text; unselected rows use surface with muted-ink text
- Typography: `{typography.ui}` for labels
- Shape: Panel uses 2rem radius; individual rows use 2.5rem pill radius
- Spacing: Tight 0.5rem gap between rows; 2rem panel padding
- Composition: Right-aligned in product page split view, vertically centered

**Top navigation**
- Anatomy: Robot icon (left), text links (center-right), primary button (far right)
- Surface: Transparent or canvas background; no visible border
- Typography: `{typography.ui-small}` for links; active link uses accent color
- Shape: Icon is a small square; button is pill
- Spacing: 2rem gap between nav links; 2rem margin from viewport edge
- Composition: Horizontal flex, vertically centered, full width

**Footer panel**
- Anatomy: Large rounded container with left-aligned mission statement and right-aligned multi-column link grid
- Surface: Surface (#F8F0E3) background
- Typography: `{typography.section-display}` for mission headline; `{typography.ui}` for column headers; `{typography.body}` for links
- Shape: 2rem radius, inset from viewport edges
- Spacing: 4rem internal padding; 2rem gap between columns
- Composition: Asymmetric grid with heavy left weight

**Media container**
- Anatomy: Full-bleed image or video with optional overlaid text and floating thumbnail
- Surface: No border; subtle outer shadow on floating elements
- Typography: `{typography.section-display}` for overlaid titles; `{typography.label}` for eyebrows
- Shape: 2rem to 2.5rem radius on main container; 1.5rem radius on floating thumbnail
- Composition: Media fills container; text is bottom-centered; thumbnail is bottom-right with play icon

## Responsive behavior

The captured surfaces show desktop layouts at approximately 2048px viewport width. No mobile breakpoints are visible. Based on the component structures, the following adaptations are recommended:

- The homepage hero display type should scale down dramatically on narrow viewports, likely to `{typography.section-display}` size or below, to prevent overflow.
- The product page split view should stack vertically on mobile, with the media container above and the feature panel below.
- Footer columns should collapse to a single column or accordion pattern on small screens.
- Navigation links should collapse to a hamburger menu, preserving the "Request Robot" pill as a persistent CTA.
- Geometric illustrations should remain visible but repositioned to avoid obscuring text; consider reducing their scale or moving them to section backgrounds.

## Practical implementation guidance

**Preserve**
- The warm cream canvas as the default background; avoid pure white page fills
- Matter at 500 weight for all UI and display text; do not substitute with bolder weights
- The full-pill radius for all buttons; partial rounding breaks the friendly character
- The geometric illustration system as a core brand asset, not optional decoration
- The split-view product page layout with media dominant and feature panel secondary

**Avoid**
- Adding drop shadows to flat cards; the system relies on color contrast for hierarchy
- Using the accent color for large background fills; it should remain a point of emphasis
- Sharp 0-radius corners on any container; even small 0.5rem radii are preferred
- Multiple font weights within a single component; the system is deliberately restrained

**Recommended build order**
1. Establish the color tokens and apply canvas background to the body
2. Load Matter at 500 weight and set up the typography scale
3. Build the top navigation shell with robot icon, links, and primary pill button
4. Create the button components with exact pill radius and padding
5. Implement the homepage hero with display type and geometric illustration field
6. Build the product page split view with media container and feature selection panel
7. Construct the footer panel with asymmetric grid and multi-column links

**Accessibility**
- Ensure the accent coral (#F16B46) on white meets minimum contrast ratios for text; if not, use it for backgrounds with white text rather than as text color on light surfaces
- The muted-ink secondary text (#ACA396) should be reserved for non-essential information, as it may fall below 4.5:1 contrast on surface backgrounds
- All interactive elements in the feature panel should have visible focus indicators; the current selected state uses accent fill, which is sufficient, but unselected rows need clear hover and focus treatments
- The overlaid text on video heroes should have a subtle text-shadow or scrim to ensure readability against variable photography

## Scope note

This guide covers the homepage and product detail page surfaces visible in the captured desktop viewport. Mobile layouts, breakpoint behavior, form interactions, checkout flows, and motion specifications are not included. The geometric illustration system is described visually but exact SVG construction parameters are not provided. Measurements are exact where listed in the design facts; derived values follow the 2px base unit grid.
