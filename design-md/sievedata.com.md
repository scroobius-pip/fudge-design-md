# How sievedata.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sievedata.com-design)

Last updated: 2026-08-10

## Captured pages

[![About page with Mission, Our Team, and Investors sections showing serif headings and investor card grid on light background](https://pin.fontofweb.com/2009?format=jpg)](https://design.withfudge.com/share/pin-2009)

[About page with Mission, Our Team, and Investors sections showing serif headings and investor card grid on light background](https://design.withfudge.com/share/pin-2009)

[![Homepage hero with black-and-white video thumbnail strips, centered serif tagline, dark and light pill buttons, and careers CTA section](https://pin.fontofweb.com/2008?format=jpg)](https://design.withfudge.com/share/pin-2008)

[Homepage hero with black-and-white video thumbnail strips, centered serif tagline, dark and light pill buttons, and careers CTA section](https://design.withfudge.com/share/pin-2008)

[![Features grid with Scalable API, Secure, Compliant, and Dedicated partnership cards with SOC 2 badge illustration](https://pin.fontofweb.com/2007?format=jpg)](https://design.withfudge.com/share/pin-2007)

[Features grid with Scalable API, Secure, Compliant, and Dedicated partnership cards with SOC 2 badge illustration](https://design.withfudge.com/share/pin-2007)

[![Working with us section showing numbered process steps with pill buttons and 3D mechanical arm imagery on white background](https://pin.fontofweb.com/2006?format=jpg)](https://design.withfudge.com/share/pin-2006)

[Working with us section showing numbered process steps with pill buttons and 3D mechanical arm imagery on white background](https://design.withfudge.com/share/pin-2006)

## Overview

Sieve presents itself as a research-lab and infrastructure company focused on video data for frontier AI. The visual system communicates precision, technical depth, and understated confidence through a restrained palette and deliberate typographic contrast. The interface relies on a near-white canvas with true black ink, creating maximum legibility and a clinical, laboratory-like atmosphere. Display typography uses a refined serif for headlines and section titles, while all functional text—navigation, labels, body copy, and buttons—employs a clean sans-serif. The overall impression is one of serious technical capability without visual noise: generous whitespace, minimal decorative elements, and a consistent pill-shaped language for interactive elements. Photography and imagery appear in black and white, reinforcing the analytical, data-first positioning. The system prioritizes content hierarchy through scale contrast and spacing rather than color variation, making it highly adaptable across marketing, product, and documentation surfaces.

## Colors

The color system is intentionally minimal, built on a high-contrast foundation of pure black and white with subtle warm neutrals for structural elements. This restraint supports the research-lab identity and ensures that content—whether text, photography, or data visualizations—remains the focal point.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active navigation, filled buttons, borders on light surfaces |
| canvas | #FFFFFF | Page background, card surfaces, secondary button fill |
| muted-ink | #2A2A2A | Secondary text, subtle headings, inactive states |
| surface | #F5F5F5 | Investor cards, subtle section backgrounds, hover states |
| border | #E5E5E5 | Card outlines, dividers, secondary button borders |
| action-primary | #1A1A1A | Primary button fill, strong CTAs, active tab backgrounds |
| action-secondary | #FFFFFF | Secondary button fill, inverted text on dark surfaces |

The palette operates in a single light mode. Dark values are reserved for text and primary actions, while light values provide breathing room and elevation. The near-black action-primary offers a slight softening from pure black for interactive elements, creating visual distinction between static ink and actionable surfaces. Photography throughout the interface is rendered in black and white, which harmonizes with the achromatic UI and prevents color competition. No accent colors appear in the interface; emphasis is achieved through weight, scale, and containment rather than chromatic contrast.

## Typography

The typographic system pairs IBM Plex Serif for display and editorial moments with Geist for all functional and interface text. This serif-sans relationship creates clear hierarchy: the serif carries authority and humanistic warmth for headlines, while the sans-serif ensures crisp readability at small sizes and in dense information layouts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | IBM Plex Serif | 2.5rem | 400 | 1.2 | -0.01em | Homepage hero tagline, major section headers |
| section-display | IBM Plex Serif | 2rem | 400 | 1.25 | -0.01em | Section titles like "Mission", "Our Team", "Investors" |
| body | Geist | 1rem | 400 | 1.6 | 0em | Paragraph text, descriptions, feature explanations |
| body-small | Geist | 0.875rem | 400 | 1.5 | 0em | Secondary descriptions, metadata, legal copy |
| label | Geist | 0.875rem | 500 | 1.4 | 0em | Button text, navigation, tab labels |
| navigation | Geist | 0.875rem | 400 | 1.4 | 0em | Header links, footer links, social icons |

IBM Plex Serif is designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen; distributed by Bold Monday. Geist is designed by Basementstudio (Andrés Briganti, Mateo Zaragoza) with Guido Ferreyra; distributed by Vercel and Basementstudio. Verify licensing for these families before production use.

The display sizes use slight negative tracking for tighter, more intentional word shapes at large scale. Body sizes maintain neutral tracking for extended reading. The weight range is intentionally narrow—Regular and Medium only—keeping the system quiet and avoiding the visual aggression of bold weights.

## Layout

The layout follows a centered, single-column content model with generous horizontal margins and substantial vertical breathing between sections. Content rarely extends to full viewport width; instead, it is contained within a comfortable reading measure that reinforces focus and readability.

The page structure alternates between full-bleed atmospheric sections and contained content blocks. The homepage hero presents a full-width strip of video thumbnails above and below a centered text-and-action cluster. Below this, sections like "Built for leading teams" and "Working with us" return to a narrower content well. The About page maintains this same centered discipline, with Mission, Our Team, and Investors sections stacking vertically with consistent section spacing.

Grid systems appear in specific components rather than as page-wide structures. The investor grid uses a two-column layout with equal-width cards. The features grid employs a similar two-column arrangement with an asymmetrical right column containing a badge illustration. Process steps in the "Working with us" section use a numbered vertical list with left-aligned numerals and right-aligned content, creating a clear temporal reading order.

Spacing between sections is substantial—typically 6rem or more—allowing each content block to feel distinct and self-contained. Internal spacing within cards and around text clusters follows a tighter 1.5rem rhythm. The overall density is low, supporting the research-lab positioning through visual calm and deliberate pacing.

## Visual language

The visual language is characterized by restraint, precision, and monochrome photography. Every decorative decision serves clarity rather than ornament.

Imagery throughout the interface is black and white, spanning documentary photography, technical illustrations, and 3D renders. This treatment unifies diverse subject matter—cockpit interiors, aerial views, architectural details, animated characters, mechanical assemblies—into a coherent visual system. The monochrome approach also prevents photographic color from competing with the achromatic UI.

Pill-shaped containers define the interactive vocabulary. Buttons, tabs, and tags all use fully rounded caps, creating soft, approachable forms against the rectilinear grid of cards and images. This rounded language contrasts subtly with the sharp edges of photography and the precise geometry of layout containers.

Line work is minimal and functional. Borders appear as 1px hairlines in light gray, delineating cards and subtle sections without heavy visual weight. No shadows are used for elevation; depth is communicated through spacing and background value shifts alone.

The SOC 2 badge illustration in the features section introduces a rare decorative element: concentric shield outlines creating a target-like radiance around a central certification mark. This is the most ornamental visual in the system, reserved for trust signaling.

## Components

### Primary button

- **Anatomy**: Text label centered within a fully rounded pill container
- **Surface and text color**: Background uses action-primary (#1A1A1A), text uses canvas (#FFFFFF)
- **Typography**: label token, Geist at 0.875rem with Medium weight
- **Shape**: pill border radius (9999px), padding 0.75rem vertical and 1.5rem horizontal
- **Spacing**: Appears inline with other buttons, separated by 0.75rem gap
- **Composition**: Typically paired with a secondary button variant; primary action sits left

### Secondary button

- **Anatomy**: Text label centered within a fully rounded pill container with hairline border
- **Surface and text color**: Background uses canvas (#FFFFFF), text uses ink (#000000), border uses border (#E5E5E5)
- **Typography**: label token, Geist at 0.875rem with Medium weight
- **Shape**: pill border radius, identical padding to primary button
- **Composition**: Appears to the right of primary buttons in paired CTAs; also used for inline actions like "Explore" and "Request Samples"

### Feature card

- **Anatomy**: Heading, descriptive paragraph, optional illustration or badge
- **Surface and text color**: Background uses canvas (#FFFFFF), text uses ink (#000000), border uses border (#E5E5E5)
- **Typography**: Heading uses section-display token or body token with increased weight; body uses body token
- **Shape**: 0.75rem border radius, 1px solid border, 1.5rem internal padding
- **Spacing**: Cards arranged in two-column grid with 1.5rem gap
- **Variants**: Text-only cards (Scalable API, Compliant, Dedicated partnership) and illustration-containing cards (Secure with SOC 2 badge)

### Investor card

- **Anatomy**: Organization name as primary text, optional individual names as secondary text
- **Surface and text color**: Background uses surface (#F5F5F5), text uses ink (#000000), secondary text uses muted-ink (#2A2A2A)
- **Typography**: Organization name uses body token with Medium weight; individual names use body-small token
- **Shape**: 0.75rem border radius, no visible border, 1.5rem internal padding
- **Spacing**: Two-column grid with 1.5rem gap between cards
- **Composition**: Cards are equal height within rows, creating a clean tabular appearance

### Tab switcher

- **Anatomy**: Two or more pill-shaped options in a segmented container
- **Surface and text color**: Active tab uses action-primary background with canvas text; inactive tabs use transparent background with ink text
- **Typography**: label token
- **Shape**: Individual pills with 9999px radius, contained within a rounded rect with border
- **Composition**: Centered horizontally, used for switching between content modes like "Packaged Datasets" and "Custom Datasets"

### Process step

- **Anatomy**: Ordinal numeral, step title, step description, optional action button
- **Surface and text color**: Transparent background, text uses ink (#000000)
- **Typography**: Numeral uses body token; title uses section-display or body token with Medium weight; description uses body token
- **Spacing**: Steps stack vertically with 2rem separation; numeral positioned left of title-description block
- **Composition**: Left-aligned numeral creates a timeline rhythm; buttons appear below description when present

### Footer

- **Anatomy**: Copyright text left-aligned, social icon links right-aligned
- **Surface and text color**: Background uses canvas (#FFFFFF), text uses muted-ink (#2A2A2A)
- **Typography**: body-small token for copyright; icons are simple line representations
- **Spacing**: Generous top padding (6rem equivalent), separated from content by subtle border or whitespace
- **Composition**: Horizontal flex with space-between alignment

## Responsive behavior

The system appears optimized for desktop viewing with a contained content well. At narrower viewports, the two-column grids for investors and features should collapse to single-column stacking to maintain readable line lengths. The hero video thumbnail strips, which present multiple images in horizontal sequence, will require horizontal scrolling or reduction in visible items on smaller screens.

Typography scales down proportionally: hero-display should reduce to section-display size on tablet, and section-display should approach body scale with increased weight on mobile to maintain hierarchy without excessive size. The pill buttons maintain their proportions but may stack vertically when horizontal space is constrained.

The numbered process steps should maintain their left-aligned numeral layout but allow the content block to expand to full width. Tab switchers may require horizontal scrolling or conversion to a dropdown when options exceed viewport width.

## Practical implementation guidance

### Preserve
- The strict black-and-white photography treatment; any color imagery will break the cohesive research-lab aesthetic
- The serif-sans typographic pairing; IBM Plex Serif for display, Geist for everything functional
- The pill-shaped button language across all interactive elements
- The generous section spacing that creates visual breathing room
- The high-contrast ink-on-canvas foundation for maximum legibility

### Avoid
- Introducing accent colors or chromatic highlights; the system achieves emphasis through value contrast and scale
- Using bold weights for body text; the weight range should remain in Regular and Medium
- Adding drop shadows for elevation; rely on spacing and background shifts instead
- Extending cards or buttons to full viewport width; maintain the contained content well
- Using rounded corners on photography; keep images rectilinear to contrast with the soft UI elements

### Recommended build order
1. Establish the color tokens and apply canvas background with ink text globally
2. Implement the typography system with IBM Plex Serif for headings and Geist for body text
3. Build the pill button components with primary and secondary variants
4. Create the card components with consistent border and padding treatment
5. Implement the grid systems for features and investors
6. Add the hero section with thumbnail strips and centered CTA cluster
7. Polish with section spacing, footer, and responsive collapse behaviors

### Accessibility
- Maintain the 4.5:1 minimum contrast ratio between ink (#000000) and canvas (#FFFFFF); the current palette exceeds this substantially
- Ensure pill buttons have adequate target size; the current padding provides 44px+ height
- Provide visible focus indicators for keyboard navigation; consider an outline offset or background shift
- Use semantic heading hierarchy with IBM Plex Serif headings mapping to h1-h3 and Geist body text as paragraphs
- For the black-and-white imagery, ensure adjacent text has sufficient contrast regardless of image positioning
- When implementing tab switchers, use proper ARIA roles and keyboard navigation patterns

## Scope note

This guide covers the homepage and About page surfaces visible in the supplied images, including hero sections, feature grids, process flows, investor listings, and footer. Navigation header, mobile layouts, form interactions, motion behavior, and additional product or documentation pages are not represented. Measurements are practical adaptation targets derived from visual inspection of the supplied images.
