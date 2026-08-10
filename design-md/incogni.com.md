# How incogni.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/incogni.com-design)

Last updated: 2026-08-10

## Captured pages

[![Three-step process section with numbered timeline, bold headings, and blue accent dots on light gray background](https://pin.fontofweb.com/10801?format=jpg)](https://design.withfudge.com/share/pin-10801)

[Three-step process section with numbered timeline, bold headings, and blue accent dots on light gray background](https://design.withfudge.com/share/pin-10801)

[![Money-back guarantee banner with floating currency illustrations, centered headline, and blue CTA button on pale blue background](https://pin.fontofweb.com/10800?format=jpg)](https://design.withfudge.com/share/pin-10800)

[Money-back guarantee banner with floating currency illustrations, centered headline, and blue CTA button on pale blue background](https://design.withfudge.com/share/pin-10800)

[![Social proof section with tabbed navigation, media partner logos, and trust badge with shield icon on white background](https://pin.fontofweb.com/10799?format=jpg)](https://design.withfudge.com/share/pin-10799)

[Social proof section with tabbed navigation, media partner logos, and trust badge with shield icon on white background](https://design.withfudge.com/share/pin-10799)

## Overview

Incogni's design system communicates digital privacy and personal data protection through a visual language that balances technical credibility with approachable simplicity. The interface relies on generous whitespace, a restrained two-family type system, and a single vibrant blue accent that signals action and trust across all touchpoints. Surfaces shift between near-white and pale blue to create subtle depth without visual noise, while bold, tightly-set headings in a geometric sans-serif establish immediate hierarchy. The overall impression is of a professional security service that feels accessible rather than intimidating—clean enough to scan quickly, structured enough to convey reliability. Every element serves the core narrative of removing friction from a complex process: the design itself feels effortless, with rounded corners on interactive elements, clear step-by-step presentations, and prominent guarantees that reduce perceived risk.

## Colors

The palette is intentionally narrow, built around a high-energy blue against neutral grounds. This constraint reinforces brand recognition and keeps attention focused on content and calls-to-action.

| token | hex | use |
|---|---|---|
| action | #3555FF | Primary buttons, active tabs, links, step indicators |
| action-hover | #1B2FF5 | Button hover states, deeper emphasis |
| action-deep | #0024FF | Maximum contrast accents, focus indicators |
| ink | #09090B | Primary headings, highest-contrast text |
| ink-secondary | #27272A | Body text, secondary headings |
| muted-ink | #454545 | Supporting descriptions, captions |
| muted | #686868 | Inactive tab labels, subtle metadata |
| canvas | #FAFAFA | Default page background, section alternation |
| surface | #FFFFFF | Cards, badges, content panels, button text |
| surface-blue | #F0F5FF | Promotional banners, guarantee sections, hero backgrounds |

The system operates in a light mode throughout. The blue family progresses from action at #3555FF for standard interactive elements through action-hover at #1B2FF5 for elevated states to action-deep at #0024FF for maximum emphasis. Neutral text follows a clear hierarchy from ink at #09090B for display headings down to muted at #686868 for inactive or supplementary information. Surface colors create environmental variety: canvas at #FAFAFA provides the default restful ground, surface-blue at #F0F5FF introduces atmospheric color for promotional or guarantee content without competing with the action blue, and pure surface white isolates cards and badges.

## Typography

Two sans-serif families divide the work: Rethink Sans carries all display and heading voices with bold weight and confident presence, while DM Sans handles everything from body copy to navigation and labels with a friendlier, more open character.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Rethink Sans | 2.5rem | 700 | 1.3 | 0em | Major section headlines, guarantee banners |
| section-display | Rethink Sans | 2.125rem | 700 | 1.3 | 0em | Subsection headings, proof section titles |
| body | DM Sans | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, general content |
| body-tight | DM Sans | 1rem | 400 | 1.3 | 0em | Dense informational blocks, step descriptions |
| label | DM Sans | 0.875rem | 700 | 1.5 | 0em | Buttons, step markers, emphasized labels |
| navigation | DM Sans | 0.875rem | 400 | 1.5 | 0em | Tab labels, nav items, secondary links |

Rethink Sans appears exclusively at 700 weight, creating a consistent bold voice for all headings. DM Sans operates at 400 for reading text and 700 for interactive or emphasized elements. The type scale is compact: display sizes sit at 2.5rem and 2.125rem, body at 1rem, and the small size at 0.875rem for labels and navigation. No letter-spacing adjustments are applied—everything sits at 0em for a natural, unmanipulated feel. Line heights are generous for body at 1.5, tightened to 1.3 for display and dense content to maintain visual cohesion. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous breathing room. Content lives within a maximum width container that creates comfortable line lengths and clear focal points.

The base spacing unit is 0.125rem (2px), from which all measurements derive. Section vertical padding uses 4rem for standard sections and 5rem for emphasized areas. The content container centers with auto margins, creating approximately 282.5px side margins on desktop viewports. Internal gutters and gaps cluster at 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, and 3rem depending on element density.

Horizontal rhythm relies on consistent gap values: 0.5rem for tight element groupings like icon-text pairs, 1rem for related content clusters, 1.5rem for card internals, and 2rem for distinct content blocks. The tab navigation in the proof section demonstrates the system's approach to horizontal spacing—items sit with comfortable separation, neither cramped nor dispersed.

Vertical stacking follows a clear hierarchy: section headlines receive 1.5rem to 2rem of bottom margin before content begins. Step indicators and process flows use connected horizontal lines with 0.5rem dot markers, creating timeline-like visual progression. Card and badge internals maintain 0.75rem to 1rem padding for comfortable touch targets and readable density.

## Visual language

The visual character is defined by clarity, rounded friendliness, and strategic color deployment. Illustrations take the form of soft, dimensional objects—floating currency bills with gradient mesh surfaces in greens and blues—that add personality without clutter. These elements have blurred edges and organic shapes, contrasting with the crisp geometry of the UI itself.

Step indicators use small filled circles in action blue connected by thin horizontal lines, creating progress visualization that feels lightweight and modern. The dot-and-line pattern repeats across process sections, establishing a recognizable rhythm for how-to content.

Surface transitions create environmental variety: the default canvas at #FAFAFA gives way to surface-blue at #F0F5FF for guarantee and promotional moments, while pure white cards and badges float above both. This three-surface system (canvas, blue, white) provides enough depth for hierarchy without introducing additional colors.

The tab underline in the proof section uses a 2px action blue line for active state indication—thicker than standard borders to signal selection clearly. Iconography is simple and functional: a shield icon accompanies the trust badge, chevrons indicate linked navigation. These elements inherit text color or action blue depending on their interactive status.

## Components

### Primary button

- **Anatomy**: Text label centered within a solid filled rectangle
- **Surface**: action (#3555FF) background with surface (#FFFFFF) text
- **Typography**: label token, DM Sans 0.875rem at 700 weight
- **Shape**: 0.25rem border radius, creating subtle rounding without pill extremes
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Centered alignment, typically standalone or below descriptive text
- **Variants**: Appears prominently in guarantee banners against surface-blue backgrounds

### Secondary button / trust badge

- **Anatomy**: Text with optional icon, bordered container
- **Surface**: surface (#FFFFFF) background with subtle outline
- **Typography**: body or navigation token depending on content
- **Shape**: 0.5rem border radius for slightly softer presence than primary buttons
- **Spacing**: 0.75rem to 1rem internal padding
- **Composition**: Inline icon-text pairs with 0.5rem gap, right-aligned chevron for linked actions
- **Variants**: Trust badge includes shield icon and asterisked disclaimer text with "Learn more" link in action blue

### Tab navigation

- **Anatomy**: Horizontal text labels with active underline indicator
- **Surface**: Transparent background, canvas or surface depending on section
- **Typography**: navigation token, DM Sans 0.875rem at 400 weight
- **Shape**: No visible container, 2px solid action underline for active item
- **Spacing**: Items separated by 1.5rem to 2rem horizontal gap
- **Composition**: Left-aligned or centered depending on section context
- **Variants**: Active state uses action color and underline; inactive uses muted color with no decoration

### Step indicator / process flow

- **Anatomy**: Numbered or unnumbered dot, horizontal connector line, heading, description
- **Surface**: Transparent on canvas background
- **Typography**: label token for step marker, section-display or body-tight for content
- **Shape**: 0.5rem filled circle in action blue, thin horizontal line extending to next step
- **Spacing**: 2rem to 3rem between step columns, 0.75rem between dot and heading
- **Composition**: Three-column grid with equal distribution, top-aligned content
- **Variants**: Steps may show numbers or rely on sequential position alone

### Logo bar / social proof

- **Anatomy**: Grayscale partner logos in horizontal row
- **Surface**: Transparent on white or canvas background
- **Typography**: None for logos; section-display for preceding headline
- **Shape**: Logos at natural aspect ratios, no containers
- **Spacing**: Even distribution with 2rem to 3rem between logos
- **Composition**: Centered or full-width spread depending on container
- **Variants**: Single-row display for media partners, multi-tab for different proof categories

## Responsive behavior

The visible layouts suggest a desktop-first approach with contained maximum widths. The three-column step process should stack vertically on narrower viewports, with connector lines becoming vertical or disappearing entirely. Tab navigation may compress into a horizontal scroll or dropdown selector when space is insufficient for full labels.

The guarantee banner's floating illustrations should scale down or simplify on mobile to maintain headline prominence. Logo bars should wrap to two rows or scroll horizontally depending on partner count.

Button widths should expand to full container on smallest viewports for touch accessibility, while maintaining auto-width centered presentation on larger screens. Section padding should reduce proportionally, with 4rem desktop sections becoming 2.5rem to 3rem on mobile.

## Practical implementation guidance

### Preserve
- The strict two-family type hierarchy—Rethink Sans for display, DM Sans for everything else
- The single blue accent against neutral grounds; resist adding secondary accent colors
- The generous whitespace and contained maximum widths that create the calm, trustworthy atmosphere
- The rounded corners on interactive elements (0.25rem to 0.5rem) that soften technical subject matter
- The step indicator pattern with connected dots for process visualization

### Avoid
- Introducing additional font families or weights beyond the established 400 and 700
- Using pure black (#000000) in place of the nuanced ink values
- Making buttons fully rounded pills; the slight rounding is intentional and distinctive
- Cluttering the blue surface-blue sections with additional decorative elements
- Using the action blue for large area backgrounds; reserve it for interactive elements and accents

### Recommended build order
1. Establish the type system with both font families at specified weights and sizes
2. Implement the three-surface color environment (canvas, surface-blue, surface white)
3. Build the primary button component with exact padding and radius
4. Create the step indicator pattern with dot, line, and content stack
5. Implement tab navigation with active underline behavior
6. Add the trust badge with icon-text composition and linked action

### Accessibility
- Ensure action blue (#3555FF) on white meets WCAG AA contrast ratios for normal text; test carefully at small sizes
- Provide visible focus states using action-deep (#0024FF) outlines for keyboard navigation
- Maintain logical heading hierarchy with Rethink Sans display sizes mapping to h1-h2 levels
- Preserve adequate touch targets for buttons at 44px minimum height
- Consider reduced-motion preferences for any floating illustration animations

## Scope note

This guide covers the economics and proof sections of the Incogni marketing site as visible in desktop layouts. Mobile layouts, navigation header, footer, form interactions, and checkout flows are not represented. Motion behavior, hover states, and dark mode variants were not documented. Measurements are practical adaptation targets.
