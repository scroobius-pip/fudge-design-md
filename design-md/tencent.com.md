# How tencent.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tencent.com-design)

Last updated: 2026-08-10

## Captured pages

[![About Us page with light blue hero banner showing Tencent headquarters skyline, white navigation bar, and clean body text on white canvas](https://pin.fontofweb.com/2333?format=jpg)](https://design.withfudge.com/share/pin-2333)

[About Us page with light blue hero banner showing Tencent headquarters skyline, white navigation bar, and clean body text on white canvas](https://design.withfudge.com/share/pin-2333)

[![Homepage dark hero with night cityscape, italic headline announcing quarterly results, and What's New section with image cards and cyan accent panel](https://pin.fontofweb.com/2332?format=jpg)](https://design.withfudge.com/share/pin-2332)

[Homepage dark hero with night cityscape, italic headline announcing quarterly results, and What's New section with image cards and cyan accent panel](https://design.withfudge.com/share/pin-2332)

[![Footer area with social icons, three-column link groups, blue Tencent wordmark, and circular back-to-top button](https://pin.fontofweb.com/2331?format=jpg)](https://design.withfudge.com/share/pin-2331)

[Footer area with social icons, three-column link groups, blue Tencent wordmark, and circular back-to-top button](https://design.withfudge.com/share/pin-2331)

## Overview

Tencent's corporate web presence communicates scale and technological leadership through a restrained visual system built on photographic hero banners, a single blue brand accent, and generous white space. The design alternates between light and dark atmospheric modes: daytime cityscapes with clean white interfaces for informational pages, and dramatic night photography with light text for homepage announcements. The system prioritizes readability and trust, using a custom sans-serif typeface at comfortable sizes with open line heights. Navigation remains minimal and persistent, while content organizes into modular cards and panels that allow editorial flexibility without visual fragmentation.

## Colors

The palette centers on a single brand blue against neutral grounds, with a cyan accent reserved for interactive highlights and featured content panels. Dark surfaces appear only within photographic hero banners, never as solid UI backgrounds beyond the image itself.

| token | value | use |
|---|---|---|
| brand-blue | #0052D9 | Logo wordmark, active navigation states, primary actions |
| ink | #1A1A1A | Primary headings, body text on light grounds |
| muted-ink | #666666 | Secondary body text, footer links, captions |
| canvas | #FFFFFF | Page background, card surfaces, light hero text |
| surface | #F5F5F5 | Footer background, subtle section alternation |
| dark-surface | #0A0A0A | Dark hero banner ground behind photography |
| accent-cyan | #00A4FF | Featured panel backgrounds, date badges, progress indicators |
| border-light | #E5E5E5 | Subtle dividers, hairline rules |

The light mode dominates: white canvas with near-black ink for maximum contrast on long-form reading pages. The dark mode is photographic rather than painted—night cityscapes provide natural depth while white text maintains legibility. The cyan accent functions as a signal color for temporal markers and priority content blocks, never competing with the deeper brand blue for identity. Muted ink bridges the two modes, appearing on both light and dark-adjacent surfaces where hierarchy needs softening without full disappearance.

## Typography

Tencent Sans serves as the sole typeface, delivering a neutral, contemporary voice with open aperture forms that remain legible at corporate scale. The family appears exclusively in Regular weight across all visible applications, relying on size and color contrast for hierarchy rather than weight variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Tencent Sans | 3rem | 400 | 1.2 | -0.01em | Hero banner headlines, major announcements |
| section-display | Tencent Sans | 2rem | 400 | 1.3 | 0 | Page section titles, "About Us" headers |
| body-large | Tencent Sans | 1.25rem | 400 | 1.6 | 0 | Lead paragraphs, introductory statements |
| body | Tencent Sans | 1rem | 400 | 1.75 | 0 | Standard paragraphs, card descriptions |
| label | Tencent Sans | 0.75rem | 400 | 1.5 | 0.02em | Date badges, metadata, small captions |
| navigation | Tencent Sans | 0.875rem | 400 | 1.5 | 0 | Primary and secondary navigation |

Italic styling appears on hero headlines as a visible treatment, creating editorial distinction for featured announcements. Line heights remain generous throughout, with body text at 1.75 to support extended reading about corporate operations and initiatives. Tracking stays tight on large display sizes to prevent looseness, while body sizes use neutral tracking. Verify licensing for these families before production use.

## Layout

The page structure follows a predictable corporate rhythm: fixed navigation bar, full-bleed hero banner, optional secondary navigation strip, content sections with centered or left-aligned text blocks, and a comprehensive footer. Maximum content width appears constrained to a comfortable reading measure, with generous external margins that let the design breathe on large viewports.

The navigation bar spans full width with internal padding, carrying the logo at left and horizontal link groups at center-right, plus language toggles at the far right. Below the hero, a secondary tab bar may appear for page-level wayfinding, using a hairline underline to indicate active position. Content sections stack vertically with substantial section spacing, typically beginning with a centered display heading followed by paragraphs at a narrower measure than the full page width.

The footer expands to a three-column link grid with social icons above, maintaining the same constrained width as content sections. A circular back-to-top button fixes to the lower right corner, providing persistent navigation assistance without scroll-dependent visibility.

## Visual language

Photography drives emotional impact while the UI recedes. Hero images show Tencent's physical presence—headquarters towers, city skylines, corporate events—always at atmospheric scale with text overlaid in the lower-left quadrant. The composition leaves significant negative space in the sky or darkened areas, ensuring text legibility without heavy gradients or scrims.

Iconography remains minimal and functional: social platform logos in monochrome, simple arrow indicators for carousel navigation, and a chevron for the back-to-top action. No decorative illustration or pattern work appears. The visual restraint extends to borders and shadows—cards sit flat on the canvas without elevation, separated by spacing rather than rules except where structural division demands a hairline.

The blue brand mark anchors every page, appearing in the navigation and footer at consistent scale. Its presence is singular and unaccompanied by secondary logos or certification badges in the main view.

## Components

### Primary navigation

- **Anatomy**: Logo mark left, horizontal link group center-right, language toggle far right
- **Surface**: Transparent or white background depending on scroll position; dark hero pages show white text variant
- **Typography**: Navigation token, Regular weight
- **Spacing**: Compact vertical padding, generous horizontal gaps between links
- **Composition**: Flex row with space-between alignment; links evenly distributed across the center-right zone

### Hero banner

- **Anatomy**: Full-bleed photographic background, italic headline lower-left, optional carousel controls and pagination dots
- **Surface**: Photographic image with natural dark areas for text placement; no artificial overlay detected
- **Typography**: Hero-display token in italic, white text
- **Shape**: Full viewport width, approximately 60% viewport height
- **Composition**: Text anchored left with comfortable margin; pagination dots bottom-right; arrow controls bottom-left

### Content card

- **Anatomy**: Featured image top, date badge overlay or inline, headline, descriptive paragraph
- **Surface**: White canvas background, flat presentation
- **Typography**: Body for descriptions, section-display for headlines, label for dates
- **Spacing**: Internal padding around text block, image bleeds to card edge
- **Composition**: Vertical stack with image dominant; text sits below with standard content-gap spacing

### Accent panel

- **Anatomy**: Solid cyan background, white text, headline and paragraph
- **Surface**: Accent-cyan fill, no border or shadow
- **Typography**: Body in white, section-display for headline
- **Shape**: Rectangular, full card dimensions
- **Composition**: Text block with standard padding, left-aligned

### Footer

- **Anatomy**: Social icon row, three-column link grid, legal text row, logo mark right-aligned
- **Surface**: Surface token background
- **Typography**: Body for column headers, navigation for links, label for legal copy
- **Spacing**: Generous section padding above, compact vertical rhythm within columns
- **Composition**: Asymmetric balance with content left and logo right; legal text spans full width below

### Back-to-top button

- **Anatomy**: Circular button with upward chevron icon
- **Surface**: Transparent or white fill with border
- **Shape**: 9999px radius for full circle
- **Position**: Fixed lower-right corner

## Responsive behavior

The navigation likely collapses to a condensed menu on narrow viewports, though the exact breakpoint is not visible. Hero text should maintain left anchoring while scaling down to prevent overflow across the photographic subject. The three-column footer grid should reflow to a single column stack, preserving link group order. Content card layouts should shift from side-by-side arrangements to vertical stacking, with the accent panel maintaining full width. Touch targets for carousel controls and pagination dots should expand to minimum 44 by 44 pixels. Language toggle placement may move to a secondary menu or footer on constrained screens.

## Practical implementation guidance

### Preserve
- The single-brand-blue discipline: use #0052D9 only for identity moments and active states, never as a decorative wash
- Generous line heights for body text, especially in bilingual contexts where Chinese and English may intermix
- The italic hero treatment as an editorial signature for featured announcements
- Flat card surfaces without artificial elevation or shadow
- Full-bleed photography with natural text placement rather than gradient overlays

### Avoid
- Introducing additional accent colors beyond the established blue and cyan
- Weight variations in Tencent Sans where size and color already establish hierarchy
- Card borders or background tints that compete with photography
- Centered body text for long paragraphs; maintain left alignment for readability
- Decorative patterns or illustrations that dilute the photographic focus

### Recommended build order
1. Establish the type scale with Tencent Sans at root, verifying web font loading
2. Implement the navigation bar with light and dark text variants
3. Build the hero banner component with responsive image handling and text positioning
4. Create content card and accent panel as modular content units
5. Assemble the footer with link column grid and legal text row
6. Add the back-to-top button with smooth scroll behavior

### Accessibility
- Ensure hero text meets contrast ratios against both light sky and dark building areas of photographs; test with actual image content
- Provide visible focus indicators for navigation links and carousel controls
- Include aria-labels for icon-only buttons such as back-to-top and social links
- Maintain logical heading hierarchy from hero h1 through section h2s
- Consider reduced-motion preferences for any carousel auto-advance

## Scope note

This guide covers the corporate homepage and About Us page surfaces visible in the supplied images. Interior pages, mobile breakpoints, form components, loading states, and motion behavior are not represented. Measurements are practical adaptation targets derived from visual estimation against a 4px relative unit grid.
