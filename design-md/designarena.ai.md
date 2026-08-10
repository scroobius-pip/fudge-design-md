# How designarena.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/designarena.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with colosseum illustration, model icon grid, and dark pill CTA on warm off-white canvas](https://pin.fontofweb.com/5794?format=jpg)](https://design.withfudge.com/share/pin-5794)

[Hero section with colosseum illustration, model icon grid, and dark pill CTA on warm off-white canvas](https://design.withfudge.com/share/pin-5794)

[![Leaderboard bar chart with muted sage, olive, and teal bars, category filter pills, and tab controls](https://pin.fontofweb.com/5793?format=jpg)](https://design.withfudge.com/share/pin-5793)

[Leaderboard bar chart with muted sage, olive, and teal bars, category filter pills, and tab controls](https://design.withfudge.com/share/pin-5793)

[![Homepage hero with centered prompt input, category chips, and decorative arena illustration with model badges](https://pin.fontofweb.com/5792?format=jpg)](https://design.withfudge.com/share/pin-5792)

[Homepage hero with centered prompt input, category chips, and decorative arena illustration with model badges](https://design.withfudge.com/share/pin-5792)

[![Homepage hero showing laurel wordmark, navigation bar, and arena scene with floating model labels](https://pin.fontofweb.com/5791?format=jpg)](https://design.withfudge.com/share/pin-5791)

[Homepage hero showing laurel wordmark, navigation bar, and arena scene with floating model labels](https://design.withfudge.com/share/pin-5791)

## Overview

Design Arena presents a distinctive visual identity that merges classical Roman architectural grandeur with contemporary AI benchmarking. The system centers on a warm, parchment-like canvas that evokes the permanence of historical record-keeping, while clean data visualization and modern interface patterns handle the complexity of model comparison. A colosseum illustration anchors the homepage, establishing the competitive "arena" metaphor through detailed architectural rendering rather than literal sports imagery. The result is a sophisticated, editorial atmosphere that treats AI evaluation with the seriousness of established craft disciplines.

The design relies on restrained typography pairing a distinctive serif display face with a neutral sans-serif workhorse, a muted earth-tone palette drawn from classical materials, and generous spatial rhythm that lets the architectural illustration breathe. Interface elements favor soft pills and rounded rectangles over sharp corners, creating approachable controls that contrast gently with the monumental illustration work.

## Colors

The color system builds from a warm off-white foundation, using black for primary text and action surfaces, with a curated set of muted greens, teals, and ochres for data differentiation and accent moments.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active chip fills, primary button backgrounds, logo mark |
| canvas | #F5F5F0 | Page background, warm neutral ground behind illustrations |
| surface | #FFFFFF | Input fields, card backgrounds, chip backgrounds, modal surfaces |
| muted-ink | #6B6B6B | Secondary body text, descriptions, placeholder text |
| sage | #8BA888 | Model badge backgrounds, leaderboard bar variant |
| olive | #B8B88A | Leaderboard bar variant, decorative illustration accents |
| teal | #7AAAA0 | Leaderboard bar variant, decorative illustration accents |
| clay | #C4A882 | Leaderboard bar variant, decorative warm accents |
| border-subtle | #E0E0D8 | Input borders, divider lines, inactive tab backgrounds |
| border-medium | #C8C8C0 | Chip borders, category filter outlines |

The palette operates in a single light mode. The warm canvas (#F5F5F0) distinguishes the site from cooler gray-white competitors and harmonizes with the stone-and-mortar illustration palette. Data visualization uses the sage, olive, teal, and clay tones as distinct bar colors without strong semantic mapping to categories—rotation provides visual variety across many models. Black serves as the sole strong contrast point, reserved for interactive emphasis and primary text. No dark mode is visible in the supplied material.

## Typography

Two font families drive the typographic hierarchy: Concrette M for display and brand moments, Inter for all functional and body text. The serif display face carries classical authority appropriate to the arena metaphor, while Inter provides neutral readability for data-dense leaderboard content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Concrette M | 3rem | 500 | 1.1 | -0.02em | Homepage hero headline, major section titles |
| section-display | Concrette M | 2.25rem | 500 | 1.15 | -0.01em | Page section headers, leaderboard title |
| body | Inter | 1rem | 400 | 1.6 | 0 | Descriptions, explanatory paragraphs |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Chart labels, metadata, secondary descriptions |
| label | Inter | 0.75rem | 500 | 1.4 | 0.01em | Buttons, chips, badges, category filters |
| navigation | Inter | 0.875rem | 400 | 1.5 | 0 | Top bar links, utility navigation |

Concrette M appears exclusively at display sizes with medium weight, never below 2rem. Inter handles all sizes below that threshold, with weight 400 for reading text and 500 for compact labels requiring slightly more presence. The display face's tight tracking (-0.02em) at hero sizes prevents the classical forms from feeling loose at large scale.

Verify licensing for these families before production use. Inter is designed by Rasmus Andersson and distributed by Rsms. No designer or vendor attribution is available for Concrette M in the supplied material.

## Layout

The layout follows a centered, contained model with generous vertical breathing room. The homepage hero occupies the full viewport height, with content stacked centrally above the architectural illustration that extends to the bottom edge. Navigation sits as a sparse horizontal bar at top, with logo left and utility links right.

Content sections below the hero maintain a maximum readable width for text blocks, approximately 36-40rem for body copy, while data visualization expands to use available horizontal space. The leaderboard page shows a full-width bar chart with category filter pills in a horizontally scrollable row above, and secondary controls (ranking dropdown, model filter, metric toggle) aligned right below.

The arena illustration functions as both decorative background and content frame, with model badges positioned at specific points within the architectural space. This creates depth through overlapping layers: flat UI controls at top, dimensional illustration in middle ground, floating labels within the illustration's spatial logic.

Spacing follows a 0.25rem base unit. Major section breaks use 6rem. Content gaps within sections use 1.5rem. Tight internal padding for compact elements uses 0.5rem. The generous section spacing prevents the dense illustration from feeling cramped against functional UI.

## Visual language

The visual language balances monumentality with approachability. The colosseum illustration is rendered in soft grayscale with subtle warm undertones, detailed enough to read as architectural drawing but muted enough to recede behind interactive elements. Decorative abstract shapes—gridded planes, flowing curves, starbursts—appear at the illustration's base in the sage, olive, teal, and clay palette, adding contemporary energy without disrupting the classical scene.

Model representation uses circular icon containers with thin borders, each bearing a distinctive brand mark. These icons appear in grids, as floating labels within the arena, and as small badges on leaderboard bars. The consistent circular frame unifies diverse model identities.

The competitive metaphor extends through the "Battling..." state indicator, a pill label centered in a circular arena diagram, and through the leaderboard's head-to-head comparison framing. Visual hierarchy emphasizes participation statistics and real-time activity to reinforce community-driven evaluation.

Data visualization avoids heavy grid lines or background fills; bars float on white with only their colored surfaces and small value labels for identification. This minimal approach keeps focus on relative performance rather than absolute scale.

## Components

**Primary Action Button**
- Anatomy: Text label centered within a fully rounded pill
- Surface: Solid black fill with white text
- Typography: label token, 0.75rem, medium weight
- Shape: 9999px border radius, creating perfect pill
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Used singly or in centered groups below descriptive text

**Category Filter Chip**
- Anatomy: Icon left, text label right, within rounded pill
- Surface: White background with medium gray border; active state inverts to black fill with white text
- Typography: label token
- Shape: 1.5rem border radius, generous horizontal padding
- Spacing: 0.5rem vertical, 1rem horizontal internal; chips arranged in horizontal scroll with small gaps
- Variants: Default, active (filled black), and "NEW" badge variant with small orange indicator

**Prompt Input**
- Anatomy: Large text area with placeholder text, category indicator pill at upper right, submit arrow at lower right
- Surface: White background with subtle warm border
- Typography: body token for placeholder, label token for category indicator
- Shape: 0.75rem border radius
- Spacing: 1.25rem internal padding
- Composition: Centered in hero, width approximately 36rem, elevated above illustration

**Model Badge**
- Anatomy: Circular model icon left, model name right, within rounded pill
- Surface: Sage green background with black text and icon
- Typography: label token
- Shape: 9999px border radius
- Spacing: 0.5rem vertical, 1rem horizontal
- Composition: Positioned at specific points within arena illustration, connected by thin lines to implied comparison paths

**Leaderboard Bar**
- Anatomy: Vertical rectangle with rounded top corners, model icon at base, model name and score below
- Surface: Solid fill in sage, olive, teal, or clay, rotating through palette
- Typography: body-small for score label at top, smaller text for model name below icon
- Shape: 0.25rem top radius, straight bottom
- Spacing: Bars separated by narrow gaps, full set extending beyond viewport requiring horizontal scroll
- Composition: Aligned by bottom edge, heights proportional to Elo rating values

**Tab Control**
- Anatomy: Text label within rounded pill, sometimes with dropdown indicator
- Surface: White background with subtle border; active state uses light gray fill
- Typography: body-small token
- Shape: 9999px border radius
- Spacing: 0.5rem vertical, 1rem horizontal
- Composition: Grouped horizontally with small gaps, right-aligned below category filters on leaderboard page

## Responsive behavior

The supplied images show desktop presentation only. Based on visible patterns, several responsive adaptations are recommended.

The centered hero content with fixed-width prompt input should maintain central alignment while scaling down. The prompt input may need to expand to near-full width on narrow viewports, with internal padding reduced proportionally. The category chip row, already horizontally scrollable on desktop, should maintain that behavior with touch-optimized scroll snapping.

The arena illustration, being a fixed aspect ratio scene, should scale down while preserving the spatial relationship between floating model badges. At very narrow widths, the illustration may crop horizontally or switch to a simplified version, with badges repositioning to remain legible.

The leaderboard bar chart, already extending beyond viewport on desktop, should transition to a horizontally scrollable container on all viewports, with visible scroll indicators. Category filter pills should remain horizontally scrollable with maintained touch targets of at least 44px height.

Navigation links in the top bar should collapse to a menu button on narrow viewports, preserving the logo's visibility. The two utility icons (notifications, user) may consolidate into a single menu or remain exposed depending on available space.

## Practical implementation guidance

**Preserve**
- The warm canvas tone against pure white surfaces; this temperature difference creates subtle depth without shadows
- The classical serif for display only, never for body text or UI labels
- The fully rounded pill shape for all primary actions and category filters; partial rounding would break the system's soft character
- The minimal data visualization approach: colored bars without background grids or heavy axes
- The architectural illustration as a distinctive brand asset, with model badges positioned within its spatial logic

**Avoid**
- Adding strong shadows or elevation effects; the system relies on flat color and spacing for hierarchy
- Using the display serif below 2rem or for functional text
- Introducing additional accent colors beyond the muted earth palette; the restrained range is integral to the classical mood
- Sharp-cornered containers for interactive elements; maintain the consistent soft rounding
- Heavy borders or outlines on data visualization elements

**Recommended build order**
1. Establish the canvas background and set up the two-font typographic system with base sizes
2. Build the pill-shaped button and chip components as the most reused interactive elements
3. Implement the centered hero layout with prompt input and category filter row
4. Add the arena illustration layer with positioned model badges
5. Construct the leaderboard page with horizontal scroll containers for both filters and bar chart
6. Refine data visualization colors, ensuring sufficient value differentiation between sage, olive, teal, and clay

**Accessibility**
- Ensure the muted-ink secondary text (#6B6B6B) meets contrast requirements against the canvas background; if insufficient, darken to approximately #595959
- The black-on-white active chip state provides strong contrast; maintain this pairing for all primary actions
- Leaderboard bars need text labels outside the colored bars, not relying on color alone for model identification
- Horizontal scroll regions should have visible focus indicators and keyboard-accessible scroll controls
- The prompt input should have a clearly visible focus state, potentially using the border-medium color at increased thickness

## Scope note

This guide covers the homepage hero and leaderboard visualization surfaces visible in the supplied images. Mobile layouts, breakpoint-specific adaptations, hover and focus states beyond basic requirements, loading and error states, dark mode, and any interior pages (Evals, Blog, Methodology) are not represented. Measurements are practical adaptation targets derived from visible proportions against the 0.25rem base unit.
