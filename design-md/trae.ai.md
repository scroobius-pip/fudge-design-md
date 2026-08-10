# How trae.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/trae.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with green TRAE wordmark, download button, and multi-column link grid on near-black background](https://pin.fontofweb.com/5775?format=jpg)](https://design.withfudge.com/share/pin-5775)

[Footer section with green TRAE wordmark, download button, and multi-column link grid on near-black background](https://design.withfudge.com/share/pin-5775)

[![Hero section with particle-field visualization, split headline, and paired action buttons on dark canvas](https://pin.fontofweb.com/5772?format=jpg)](https://design.withfudge.com/share/pin-5772)

[Hero section with particle-field visualization, split headline, and paired action buttons on dark canvas](https://design.withfudge.com/share/pin-5772)

## Overview

TRAE presents a developer-focused identity that pairs an almost-black canvas with an electric green accent. The visual system is built for technical credibility: minimal ornament, maximum contrast, and a generative particle-field aesthetic that suggests AI-driven computation without literal illustration. The homepage splits attention between a dramatic typographic statement and functional conversion paths, using the green only where action is required. Every surface reads as intentional—there are no decorative gradients, no soft shadows, no rounded containers beyond the minimum necessary for button targets. The result is a system that feels like a tool rather than a marketing page, appropriate for an audience evaluating software engineering products.

## Colors

The palette is severely constrained: one near-black ground, one electric green accent, and a grayscale text range. This restraint lets the generative imagery and large typography carry the visual weight.

| token | value | use |
|---|---|---|
| canvas | `#0A0A0A` | Primary page background, hero ground, footer ground |
| surface | `#141414` | Elevated panels, navigation bar, subtle container differentiation |
| action | `#3DED8B` | Primary buttons, links, badge accents, brand wordmark fill |
| action-hover | `#2DD97A` | Button hover states, interactive accent emphasis |
| ink | `#FFFFFF` | Headlines, primary body text, navigation labels, button text on dark |
| muted-ink | `#8A8A8A` | Secondary descriptions, footer links, legal copy, disabled states |
| border | `#2A2A2A` | Hairline dividers, secondary button outlines, subtle separators |

The green functions as the only chromatic element in the interface. It appears in the "Download TRAE" button, the "Explore now" link in the hero badge, and the massive TRAE wordmark at the footer edge. Against the near-black canvas, this green vibrates with sufficient luminance to read as energetic without becoming garish. Text hierarchy is established through white-to-gray value steps rather than size alone, keeping the typographic rhythm tight and modern.

## Typography

The system uses a single type family across all roles, relying on weight and size contrast to establish hierarchy. Inter 18 Pt was designed by Rasmus Andersson and is distributed by Rsms. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter 18 Pt | 4rem | 600 | 1.1 | -0.02em | Hero headlines, major page titles |
| section-display | Inter 18 Pt | 2.5rem | 600 | 1.15 | -0.01em | Section headers, CTA titles |
| body | Inter 18 Pt | 1rem | 400 | 1.6 | 0 | Descriptions, paragraphs, footer body |
| body-medium | Inter 18 Pt | 1rem | 500 | 1.6 | 0 | Button labels, emphasized body |
| label | Inter 18 Pt | 0.75rem | 500 | 1.4 | 0.02em | Category labels, metadata, badges |
| navigation | Inter 18 Pt | 0.875rem | 500 | 1.4 | 0 | Top-bar links, dropdown triggers |

The hero headline uses tight negative tracking and a semi-bold weight to achieve density without heaviness. Body text is set at a comfortable 1rem with generous line height for readability in longer descriptions. The label size at 0.75rem serves compact metadata and footer category headers. No display or decorative fonts are used; the system's personality comes from scale and color, not typeface variety.

## Layout

The page employs a full-bleed dark canvas with centered content bands. The hero section occupies the full viewport height, with a split composition: the headline anchors the lower-left quadrant while supporting copy and action buttons occupy the lower-right. This asymmetric balance creates visual tension and draws the eye across the particle field that fills the background.

Content is constrained by a maximum width of 80rem, with generous internal padding. The navigation bar spans the full width, containing the TRAE logotype left-aligned and utility actions right-aligned. The footer extends the full width with a multi-column link grid above a massive cropped wordmark that bleeds beyond the viewport edge.

Spacing follows a 0.25rem base unit. Section vertical padding is 6rem, creating substantial breathing room between content bands. Component gaps within sections are 1rem. The footer link grid uses consistent 1rem row spacing between items, with category headers separated from their lists by the same measure.

The generative particle field is not contained; it renders across the full viewport behind all hero content, with particles clustering in organic shapes that suggest neural networks or constellation maps. This element is treated as atmospheric background rather than bounded imagery.

## Visual language

The aesthetic is computational minimalism: every element justifies its presence through function or brand recognition. The particle field is the single expressive visual element, rendered as thousands of small dots in varying densities. Some particles carry the brand green; most read as gray against the dark ground. The effect suggests data in motion without literal animation.

Photography and illustration are absent. The TRAE wordmark at the footer scale is the only brand graphic, rendered in solid green with a geometric diamond replacing the crossbar of the 'A'. This logomark treatment is consistent across scales, from the navigation bar to the oversized footer treatment.

Borders are hairline-thin and low-contrast, used to delineate secondary buttons and footer sections without introducing visual weight. No shadows are employed; depth is suggested through the particle field's spatial clustering rather than layered surfaces.

The overall impression is of a tool that has stripped away everything non-essential, leaving only the information and actions a developer needs to evaluate and adopt the product.

## Components

### Navigation bar

- **Anatomy**: Logotype left, primary links center-left, utility actions right
- **Surface**: Transparent over hero, effectively `{colors.canvas}` against dark content
- **Typography**: `{typography.navigation}` for all links
- **Composition**: Horizontal flex with space-between alignment
- **Variants**: "Log in" as text link, "Download" as `{components.primary-action}` at reduced padding

### Hero section

- **Anatomy**: Particle-field background, badge announcement, split headline, description, paired buttons
- **Surface**: Full-bleed `{colors.canvas}` with generative particle overlay
- **Typography**: `{typography.hero-display}` for headline, `{typography.body}` for description
- **Composition**: Headline lower-left, description and buttons lower-right, badge above headline
- **Variants**: "Download TRAE" as `{components.primary-action}`, "Explore SOLO" as `{components.secondary-action}`

### Primary action button

- **Anatomy**: Label with optional leading icon, arrow indicator on specific instances
- **Surface**: `{colors.action}` background, `{colors.canvas}` text
- **Typography**: `{typography.body-medium}`
- **Shape**: `{rounded.button}` corners
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **States**: Hover shifts to `{colors.action-hover}`

### Secondary action button

- **Anatomy**: Label only
- **Surface**: Transparent background, `{colors.border}` outline, `{colors.ink}` text
- **Typography**: `{typography.body-medium}`
- **Shape**: `{rounded.button}` corners
- **Spacing**: Matches primary button padding

### Footer

- **Anatomy**: CTA band, link grid, social row, legal row, oversized wordmark
- **Surface**: `{colors.canvas}` throughout
- **Typography**: `{typography.section-display}` for CTA headline, `{typography.label}` for category headers, `{typography.body}` for links
- **Composition**: CTA headline left, download button right; four-column link grid below; social and legal in bottom row
- **Variants**: "Back to top" link with circular arrow icon

### Announcement badge

- **Anatomy**: Leading lightning icon, text label, trailing link with chevron
- **Surface**: Transparent, sitting directly on particle field
- **Typography**: `{typography.label}` for the status text, `{typography.body-medium}` for the linked action
- **Composition**: Inline horizontal arrangement, positioned above the hero headline
- **Variants**: Static display with "TRAE SOLO is generally available" messaging and "Explore now" linked action

## Responsive behavior

The split hero composition should stack vertically on narrower viewports, with the headline preceding the description and buttons. The particle field remains full-bleed but may reduce particle density to maintain performance and legibility.

The footer link grid should collapse from four columns to two, then to a single column, maintaining category grouping. The oversized TRAE wordmark should scale proportionally, remaining partially cropped at the viewport edge to preserve the dramatic scale effect.

Navigation links should collapse to a menu trigger at smaller breakpoints, preserving the logotype and primary action button in the bar. The "Download TRAE" button should remain visible as the highest-priority action across all sizes.

## Practical implementation guidance

### Preserve
- The near-black canvas as the dominant ground; do not lighten the base background
- The single green accent for all interactive emphasis and brand moments
- The particle field as a full-bleed atmospheric element, not a contained card
- The tight typographic hierarchy using only weight and size within one family
- The hairline border treatment for secondary buttons and dividers

### Avoid
- Introducing additional accent colors; the green carries all chromatic meaning
- Using shadows or gradients for depth; the system relies on flat planes
- Rounding corners beyond the minimal button radius; avoid card-like containers
- Replacing the particle field with literal photography or illustration
- Lightening the canvas for "contrast" purposes; the dark ground is intentional

### Recommended build order
1. Establish the canvas color and Inter font loading
2. Implement the particle field as a fixed or absolute background layer
3. Build the navigation bar with logotype and primary action
4. Compose the hero section with split headline and paired buttons
5. Add the footer with link grid and oversized wordmark
6. Refine hover states and responsive stacking

### Accessibility
- Ensure the green action color meets contrast requirements against the near-black canvas; verify for the 0.75rem label size specifically
- Provide a reduced-motion alternative for the particle field for users with vestibular sensitivities
- Maintain focus indicators that are visible against both canvas and action surfaces
- Structure the footer link grid with proper heading hierarchy for screen reader navigation

## Scope note

This guide covers the TRAE homepage hero and footer surfaces visible in the supplied images. Interior pages, product documentation, pricing tables, and mobile-specific layouts are not represented. Motion behavior for the particle field, dropdown menus, and form interactions are not described. Measurements are practical adaptation targets derived from visual inspection against a 0.25rem base unit.
