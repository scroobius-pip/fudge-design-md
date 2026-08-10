# How renode.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/renode.io-design)

Last updated: 2026-08-10

## Captured pages

[![Getting started section with download cards for Debian, Fedora, Arch, macOS, and Windows on a dotted white background with blue accents](https://pin.fontofweb.com/5865?format=jpg)](https://design.withfudge.com/share/pin-5865)

[Getting started section with download cards for Debian, Fedora, Arch, macOS, and Windows on a dotted white background with blue accents](https://design.withfudge.com/share/pin-5865)

[![Footer bar with Renode and antmicro logos, social icons, and copyright on a bright blue background with white text](https://pin.fontofweb.com/5864?format=jpg)](https://design.withfudge.com/share/pin-5864)

[Footer bar with Renode and antmicro logos, social icons, and copyright on a bright blue background with white text](https://design.withfudge.com/share/pin-5864)

[![Six feature cards with white line icons on blue grid backgrounds describing simulation framework capabilities](https://pin.fontofweb.com/5863?format=jpg)](https://design.withfudge.com/share/pin-5863)

[Six feature cards with white line icons on blue grid backgrounds describing simulation framework capabilities](https://design.withfudge.com/share/pin-5863)

[![Hero section for Continuous Integration with large white heading, body text, and workflow diagram on blue dotted background](https://pin.fontofweb.com/5862?format=jpg)](https://design.withfudge.com/share/pin-5862)

[Hero section for Continuous Integration with large white heading, body text, and workflow diagram on blue dotted background](https://design.withfudge.com/share/pin-5862)

## Overview

Renode's design system serves a developer-focused embedded simulation platform with a visual language that balances technical credibility and approachable clarity. The interface operates in two distinct modes: a clean white canvas for content and download interactions, and a vibrant blue environment for storytelling and feature communication. Both modes share a consistent dotted grid background texture that evokes engineering blueprints and circuit board design, reinforcing the tool's hardware-simulation purpose.

The system's personality comes through in its confident use of scale contrast—large bold headings set in a geometric sans-serif against generous whitespace, paired with precise small-label navigation and functional download cards. The blue mode inverts the typical content hierarchy, using white typography on saturated blue to create immersive section experiences. Throughout, the design maintains a utilitarian precision: sharp corners, explicit borders, grid-aligned elements, and iconography that references technical documentation and system architecture.

## Colors

The palette is intentionally constrained to create strong mode contrast while maintaining functional clarity across technical content.

| token | value | use |
|---|---|---|
| action | #0078D7 | Primary buttons, active card fills, link text, icon accents |
| action-hover | #005A9E | Darker blue for hover states on interactive elements |
| canvas | #FFFFFF | Main page background, card surfaces, content areas |
| canvas-blue | #0078D7 | Immersive section backgrounds, footer, feature grids |
| ink | #000000 | Primary headings, body text on white backgrounds |
| ink-inverse | #FFFFFF | All text on blue backgrounds, icons, logo marks |
| muted-ink | #666666 | Secondary labels, disabled states, subtle metadata |
| border | #0078D7 | Card outlines, section dividers, active indicators |
| border-subtle | #CCCCCC | Inactive card borders, hairline separators |

The white canvas mode dominates functional pages like the download section, where clarity and scannability are paramount. The blue canvas mode creates emotional impact for feature storytelling and brand expression, using the same action blue at full saturation as the background. This dual-mode approach lets the site shift from practical tool interface to inspiring product narrative without changing the underlying component vocabulary. The dotted grid texture appears in both modes at low opacity, unifying the experience with a consistent technical substrate.

## Typography

The type system pairs a bold, geometric display face for headlines with a neutral humanist sans for body and interface text. This combination projects engineering confidence while maintaining readability for dense technical content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Kanit | 3rem | 700 | 1.1 | -0.01em | Page hero headings, major section titles |
| section-display | Kanit Semi Bold | 2.5rem | 600 | 1.15 | 0 | Section headings, feature card titles |
| body | Work Sans | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general content |
| body-large | Work Sans | 1.25rem | 400 | 1.5 | 0 | Introductory paragraphs, emphasized body |
| label | Work Sans | 0.875rem | 400 | 1.4 | 0.02em | Card labels, metadata, captions |
| navigation | Work Sans | 0.875rem | 400 | 1 | 0.05em | Primary navigation, uppercase treatments |
| legal-copy | Work Sans | 0.75rem | 400 | 1.4 | 0 | Footer text, copyright, fine print |

Kanit provides the visual anchor with its geometric construction and bold weights, used exclusively for headlines where its distinctive character supports brand recognition. Work Sans handles all functional typography with its open forms and even rhythm, ensuring comfort during extended reading of technical documentation. The size hierarchy uses a 4px base grid, with display sizes at 48px and 40px, body at 16px, and labels descending to 12px for legal text. Verify licensing for these families before production use.

## Layout

The layout follows a centered content model with generous horizontal margins and clear vertical sectioning. A maximum content width of approximately 75rem keeps line lengths comfortable for technical reading while allowing breathing room on large displays.

The header uses a fixed or sticky navigation bar with the Renode wordmark left-aligned and primary navigation right-aligned. Navigation items are spaced with consistent gaps, using uppercase treatment with wide letter-spacing for a technical, measured feel. A thin horizontal rule separates the header from page content.

Section spacing follows a major-minor rhythm: large vertical gaps between thematic sections (approximately 6rem) and tighter internal spacing within components (1rem to 2rem). The dotted grid background creates an implicit alignment system—content blocks feel naturally anchored to the underlying pattern.

The download cards in the Getting Started section use a two-column grid on desktop, with cards arranged in a staggered or offset pattern that creates visual interest while maintaining scannability. Each card maintains consistent internal padding and a fixed height ratio, with a vertical divider separating the text content from the platform icon.

The feature grid on blue backgrounds uses a strict three-column layout with equal-width cards. Each card centers its icon and text, creating a rhythmic pattern that supports quick scanning of capabilities. The workflow diagram in the CI section uses a horizontal flow with connected nodes, positioned within a dashed boundary that suggests a system architecture diagram.

## Visual language

The visual language draws from engineering and systems design, using blueprint aesthetics to communicate technical depth without visual noise.

The dotted grid texture is the most distinctive surface treatment—a regular field of small dots that covers both white and blue backgrounds at low contrast. On white, the dots read as a subtle technical substrate; on blue, they reinforce the blueprint metaphor more explicitly. This texture unifies all sections and distinguishes the site from generic SaaS aesthetics.

Line iconography uses a consistent 2px stroke weight with geometric construction—circles, rectangles, and connecting lines form abstract representations of network nodes, code repositories, testing frameworks, and development workflows. Icons sit within implied grid squares with corner registration marks, suggesting precision and measurability. The white icons on blue backgrounds use pure #FFFFFF with no opacity variation, maintaining crispness at all sizes.

The workflow diagram in the CI section extends this language into a connected system visualization: rectangular nodes with internal icons, directional arrows, and labeled stages arranged in a logical flow. A dashed bounding box groups related elements, while subtle depth is suggested through overlapping shapes and consistent shadow absence.

Photography and illustration are absent from the visible interface; the design relies entirely on constructed graphics, reinforcing the tool's nature as a precise, configurable system rather than a consumer product.

## Components

### Navigation bar

- **Anatomy**: Renode wordmark left, primary links right, thin bottom border
- **Surface**: White background (#FFFFFF) with black text, or blue background (#0078D7) with white text in alternate contexts
- **Typography**: Navigation token, uppercase with wide tracking
- **Shape**: Full-width bar, sharp corners, 0rem border-radius
- **Spacing**: Compact vertical padding (approximately 1rem), generous horizontal margins
- **Composition**: Flexbox row with space-between alignment
- **Variants**: Transparent overlay on hero sections; solid fill on content pages

### Download card

- **Anatomy**: Platform name, format description, "Download" label, platform icon in right column
- **Surface**: White fill with blue border (#0078D7), or solid blue fill for active/selected state
- **Typography**: Platform name uses section-display token at smaller scale; format and download use label token
- **Shape**: Sharp rectangle with 1px border, 0rem border-radius
- **Spacing**: Internal padding approximately 1.5rem, vertical divider between text and icon areas
- **Composition**: Two-column internal layout with left-aligned text, centered icon
- **Variants**: Default (white with blue text), active (blue fill with white text), hover state darkens border or fill

### Feature card

- **Anatomy**: Line icon in grid frame, bold description text below
- **Surface**: Transparent on blue background, no distinct card surface
- **Typography**: Section-display token for descriptions, centered
- **Shape**: Icon area uses implied square with corner registration marks
- **Spacing**: Generous gap between icon and text (approximately 2rem), consistent card spacing in grid
- **Composition**: Vertical stack, centered alignment, three-column grid container
- **Variants**: None visible; all cards share identical structure

### Footer bar

- **Anatomy**: Logo lockup with "By: antmicro", social icons (X, GitHub), copyright text
- **Surface**: Solid blue fill (#0078D7)
- **Typography**: Legal-copy token in white
- **Shape**: Full-width bar, sharp corners, 0rem border-radius
- **Spacing**: Compact vertical padding, horizontal distribution of elements
- **Composition**: Flexbox row with logo left, social center-right, copyright far right
- **Variants**: Extended version with additional navigation links visible in some contexts

### Section step indicator

- **Anatomy**: Horizontal rule, current step number, total step count
- **Surface**: Transparent
- **Typography**: Label token, with current step in bold weight
- **Shape**: Short horizontal line (approximately 3rem width) left of number
- **Spacing**: Positioned above section heading with modest vertical gap
- **Composition**: Left-aligned or centered depending on section context
- **Variants**: White line and text on blue backgrounds; dark line and text on white backgrounds

## Responsive behavior

The visible desktop layouts suggest a straightforward responsive strategy. The three-column feature grid should collapse to two columns on tablet and single column on mobile, maintaining centered icon and text alignment. The download card grid, currently showing two columns with staggered placement, should stack vertically on narrow viewports with full-width cards.

The navigation bar likely collapses to a hamburger menu on mobile, given the number of primary links. The Renode wordmark should remain visible and left-aligned at all breakpoints.

The large hero headings use fluid sizing or stepped breakpoints to prevent overflow on narrow screens. The 3rem hero-display size should reduce to 2rem on mobile while maintaining the tight line-height for impact.

The dotted grid background texture should scale or tile seamlessly; its regular pattern supports any viewport size without visible seams. On very small screens, the dot density may read as visual noise—consider reducing opacity or switching to a simpler treatment below 480px width.

The workflow diagram in the CI section requires the most careful responsive handling. The horizontal flow should reorient to vertical on narrow screens, with arrows pointing downward and nodes stacking in sequence. Maintain the dashed bounding box and node labels at readable sizes.

## Practical implementation guidance

### Preserve
- The sharp-corner, zero-radius aesthetic throughout all components—this technical precision is central to the brand
- The dotted grid background texture in both color modes; it is the primary visual differentiator
- The bold weight contrast between Kanit headlines and Work Sans body text
- The two-mode color system with explicit context switches between white and blue backgrounds
- The uppercase, wide-tracking navigation treatment that suggests engineering documentation

### Avoid
- Rounded corners on cards or buttons; they contradict the blueprint aesthetic
- Drop shadows or elevation effects; the design relies on flat color and line weight for hierarchy
- Gradient backgrounds; the solid color fields are intentional and distinctive
- Decorative photography or illustration; the constructed iconography is sufficient
- Mixing the blue and white modes within a single section; maintain clear mode boundaries

### Recommended build order
1. Establish the 4px base grid and dotted background texture as global foundations
2. Implement the typography scale with Kanit and Work Sans loaded at required weights
3. Build the navigation bar with mode-aware color switching
4. Create the download card component with default and active variants
5. Implement the feature card grid for blue-background sections
6. Add the footer bar with logo lockup and social icons
7. Polish with section step indicators and workflow diagram components

### Accessibility
- Ensure the blue-on-white and white-on-blue color combinations meet WCAG AA contrast ratios; the #0078D7 blue on white passes for large text but verify at body sizes
- Add visible focus indicators to the sharp-cornered interactive elements, as the zero-radius design removes the affordance of rounded focus rings
- Provide text alternatives for the workflow diagram that describe the CI process flow
- Consider adding `prefers-reduced-motion` support if any scroll-triggered animations are implemented for the dotted grid or section transitions
- The dotted background may cause visual vibration for some users; offer a high-contrast mode that removes or simplifies the texture

## Scope note

This guide covers the Renode homepage and its primary section types: hero content, feature grids, download interfaces, and footer. Interior pages, documentation layouts, and interactive tool interfaces are not represented in the supplied material. Motion design, mobile breakpoints, and form components are not covered. Measurements are practical adaptation targets derived from visible proportions.
