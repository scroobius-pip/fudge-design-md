# How maciej.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/maciej.co-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large 'build things' typographic illustration, navigation bar, and introduction panel with action buttons](https://pin.fontofweb.com/4123?format=jpg)](https://design.withfudge.com/share/pin-4123)

[Hero section with large 'build things' typographic illustration, navigation bar, and introduction panel with action buttons](https://design.withfudge.com/share/pin-4123)

[![Full-bleed 'build things' artwork with thank-you message and minimal footer containing contact links and copyright](https://pin.fontofweb.com/4122?format=jpg)](https://design.withfudge.com/share/pin-4122)

[Full-bleed 'build things' artwork with thank-you message and minimal footer containing contact links and copyright](https://design.withfudge.com/share/pin-4122)

[![Expanded view showing Selected Projects section with Metadrop case study, project tags, and link buttons with navigation arrows](https://pin.fontofweb.com/4121?format=jpg)](https://design.withfudge.com/share/pin-4121)

[Expanded view showing Selected Projects section with Metadrop case study, project tags, and link buttons with navigation arrows](https://design.withfudge.com/share/pin-4121)

[![Selected Projects grid with Metadrop entry, service tags, and circular arrow navigation buttons on dark surface](https://pin.fontofweb.com/4120?format=jpg)](https://design.withfudge.com/share/pin-4120)

[Selected Projects grid with Metadrop entry, service tags, and circular arrow navigation buttons on dark surface](https://design.withfudge.com/share/pin-4120)

## Overview

This design system captures the visual language of an independent designer's portfolio built on a near-black canvas with a single dominant typographic illustration. The centerpiece is a massive, custom letterform artwork spelling "build things" where white glyphs serve as masks for overlapping circles of red, green, blue, yellow, and pink. This illustration establishes the site's personality immediately, sitting above a structured content layer of dark gray panels containing introduction text, action buttons, and project case studies. The overall impression is confident and restrained: the colorful hero provides all the visual energy while the interface itself stays muted and functional. Navigation and metadata rely on monospace typography for a technical, precise counterpoint to the organic, playful illustration. The system prioritizes readability through high contrast between white text and dark surfaces, with a single desaturated blue serving as the only interface accent color.

## Colors

The palette is intentionally narrow, deriving visual interest from the photographic/illustrative content rather than interface chrome. Four core colors define the system:

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Page background, hero illustration backdrop |
| surface | #1a1a1a | Primary content panels, introduction card |
| surface-elevated | #2a2a2a | Secondary buttons, link buttons, elevated cards |
| ink | #ffffff | Primary text, hero illustration letterforms |
| ink-muted | #888888 | Navigation links, secondary button text, metadata |
| ink-dim | #555555 | Service tags, tertiary labels |
| action | #4a5a8a | Primary buttons, circular navigation, active states |
| action-hover | #5a6a9a | Hover state for action elements |

The canvas color is a warm-leaning near-black that lets the colorful hero illustration achieve maximum saturation impact. Surface colors step up in lightness in 10% perceptual intervals, creating clear depth hierarchy without introducing additional hues. The action blue is desaturated and dark enough to sit comfortably against the dark palette without visual vibration. All text colors maintain WCAG AA contrast against their respective backgrounds. The hero illustration's internal colors—red, green, blue, yellow, pink—are treated as image-palette values belonging to the artwork itself, not as extractable UI tokens.

## Typography

Two type families from Lineto drive the system: Replica Pro Tt for all proportional text and Replica Mono Ll for navigation, labels, and technical metadata. Replica Pro Tt, designed by Norm (Dimitri Bruni, Manuel Krebs), provides a clean, contemporary sans-serif voice with enough character to carry display sizes without feeling anonymous. Replica Mono Ll offers a precise, engineered counterpoint that signals functionality and structure.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Replica Pro Tt | 8rem | 400 | 0.9 | -0.02em | Hero illustration text |
| section-display | Replica Pro Tt | 2rem | 400 | 1.1 | -0.01em | Project titles, section headings |
| body | Replica Pro Tt | 1.25rem | 400 | 1.4 | 0em | Introduction paragraph, descriptions |
| body-small | Replica Pro Tt | 1rem | 400 | 1.5 | 0em | Project descriptions, card content |
| label | Replica Mono Ll | 0.875rem | 400 | 1.2 | 0.02em | Buttons, tags, metadata |
| navigation | Replica Mono Ll | 0.875rem | 400 | 1.2 | 0.01em | Top nav, footer links |

The hero display size at 8rem creates the massive scale needed for the "build things" illustration to dominate the viewport. Negative letter spacing tightens the large forms optically. Body text at 1.25rem ensures comfortable reading in the introduction panel without overwhelming the composition. The monospace family appears at a single size across all functional contexts, establishing a consistent rhythm for interactive and metadata elements. Verify licensing for these families before production use.

## Layout

The page follows a single-column flow with full-bleed sections. The hero illustration spans the entire viewport width, sitting flush against the canvas background with no container constraints. Below it, content panels introduce asymmetry through varied internal structure rather than sidebar columns.

The introduction panel occupies a substantial horizontal band with generous internal padding. Action buttons within this panel arrange horizontally, with the primary "Open" button given more visual weight through its accent background while secondary buttons share a row with equal height but subdued surfaces.

The Selected Projects section introduces a more complex grid. Project entries use a multi-column layout at desktop widths: project title and year occupy a left column, description and link buttons fill a wider central area, and service tags stack in a right column. This creates an editorial rhythm where scanning moves from identity to narrative to capabilities.

Navigation appears in two contexts: a top bar spanning the full width with evenly distributed links, and a minimal footer repeating contact information with copyright. Both use the same monospace style and muted color, treating navigation as infrastructure rather than decoration.

Spacing between major sections uses 4rem as a baseline, with the hero illustration receiving no top margin so it connects directly to the navigation. Internal panel padding of 1.5rem provides breathing room for text and buttons without excessive emptiness on dark surfaces.

## Visual language

The dominant visual element is the custom "build things" typographic illustration, rendered at viewport-scale with white letterforms that act as windows onto overlapping colored circles. The circles use flat, unshaded colors—pure red, green, blue, yellow, and pink—creating a playful, almost sticker-like quality against the severe black background. The letterforms themselves appear to be custom or heavily modified, with distinctive cuts in the "b" ascender and the "t" crossbar that create rhythm and prevent the massive text from feeling static.

This illustration establishes the site's emotional register: creative, optimistic, and craft-oriented. Everything else in the interface deliberately understates to avoid competition. The dark gray panels feel like matte physical surfaces, with rounded corners softening their presence without becoming friendly or casual. The single blue accent color appears only on interactive elements, creating a clear signal hierarchy: blue means clickable, gray means structural, white means content.

The monospace typography reinforces a maker aesthetic, suggesting code, specifications, and precision tools. This technical voice balances the organic, hand-arranged quality of the circle illustration. Together they communicate a designer who works systematically but thinks expressively.

Photography and project imagery appear within the case study cards, receiving no special framing or borders beyond the card container itself. This treatment keeps focus on the work rather than presentation effects.

## Components

**Navigation Bar**
- Anatomy: Full-width bar with name left, role center-left, contact email center, social links right
- Surface: Transparent over canvas, no background
- Typography: `{typography.navigation}` in `{colors.ink-muted}`
- Spacing: 1rem vertical padding, 2rem horizontal margins
- Composition: Distributed with space-between alignment

**Hero Illustration**
- Anatomy: Full-bleed container with SVG or image rendering "build things" letterforms
- Surface: `{colors.canvas}` background
- Typography: Custom letterforms at `{typography.hero-display}` scale
- Colors: White letterforms with internal circle overlays in red, green, blue, yellow, pink
- Composition: Centered horizontally, generous vertical presence

**Introduction Panel**
- Anatomy: Rounded rectangle containing greeting emoji, name, role description, and action buttons
- Surface: `{colors.surface}` with `{rounded.panel}` corners
- Typography: `{typography.body}` for description, `{typography.label}` for emoji prefix
- Spacing: `{spacing.panel-padding}` internal padding
- Composition: Left-aligned text, buttons in horizontal row below with gap

**Action Button (Primary)**
- Anatomy: Pill-shaped button with text and optional arrow icon
- Surface: `{colors.action}` background, `{rounded.button}` shape
- Typography: `{typography.label}` in `{colors.ink}`
- Spacing: Horizontal padding approximately 1.5rem, vertical padding 0.75rem
- Variants: "Open" state with filled background

**Action Button (Secondary)**
- Anatomy: Pill-shaped button with text and arrow icon
- Surface: `{colors.surface-elevated}` background
- Typography: `{typography.label}` in `{colors.ink-muted}`
- Spacing: Same as primary, distinguished by surface color

**Project Card**
- Anatomy: Rounded container with year, title, description, link buttons, service tags, and navigation arrows
- Surface: `{colors.surface}` with `{rounded.panel}` corners
- Typography: `{typography.section-display}` for title, `{typography.body-small}` for description, `{typography.label}` for tags and buttons
- Spacing: `{spacing.panel-padding}` internal padding
- Composition: Multi-column grid at desktop: title left, description center, tags right

**Link Button**
- Anatomy: Pill-shaped button with text and right arrow
- Surface: `{colors.surface-elevated}` background
- Typography: `{typography.label}` in `{colors.ink-muted}`
- Composition: Appears in pairs for project links (Homepage, App)

**Circular Navigation Button**
- Anatomy: Small circle containing left or right arrow
- Surface: `{colors.action}` background, 50% border radius
- Typography: Arrow icon in `{colors.ink}`
- Size: Approximately 2.5rem diameter

**Service Tag**
- Anatomy: Text label with optional hollow circle prefix
- Surface: Transparent
- Typography: `{typography.label}` in `{colors.ink-dim}`
- Composition: Stacked vertically in right column of project card

## Responsive behavior

The design appears optimized for desktop viewing given the scale of the hero illustration and the multi-column project layout. At narrower viewports, the following adaptations should preserve the visual hierarchy:

The hero illustration should scale down proportionally, maintaining its aspect ratio and centering. Text within the illustration may need minimum size enforcement to preserve legibility of the letterform details.

The introduction panel's action buttons should stack vertically on narrow screens, with the primary "Open" button remaining full-width and secondary buttons following at equal width.

Project cards should collapse from multi-column to single-column flow: year and title first, then description, then link buttons stacked, and service tags moving below as a horizontal wrap or remaining vertical.

Navigation links in the top bar should collapse to a simplified set or hamburger menu on mobile, though the current visible design shows no mobile menu pattern. The footer navigation can remain as stacked links.

The monospace navigation text at 0.875rem remains readable down to small sizes, but touch targets for all interactive elements should maintain minimum 44px height regardless of viewport.

## Practical implementation guidance

**Preserve**
- The extreme contrast between the colorful hero and muted interface
- The single blue accent for all interactive states
- Monospace typography exclusively for navigation, labels, and metadata
- Generous rounding on buttons (full pills) versus moderate rounding on panels
- The custom "build things" illustration as the unmistakable brand signature

**Avoid**
- Adding additional accent colors beyond the desaturated blue
- Using borders or dividers between sections; rely on spacing and surface color changes
- Making the interface lighter than the content; maintain dark-dominant hierarchy
- Replacing the custom illustration with standard type at any size
- Animating the circle colors or adding gradients to the flat illustration palette

**Recommended Build Order**
1. Establish the canvas background and load both Replica font families
2. Implement the hero illustration with responsive scaling behavior
3. Build the introduction panel with correct surface color and padding
4. Create the button system with primary and secondary variants
5. Implement navigation bar with monospace styling
6. Build the project card grid with multi-column desktop layout
7. Add footer with repeated contact links
8. Polish spacing and responsive collapse behavior

**Accessibility**
- Ensure the hero illustration includes appropriate alt text or aria-label describing the "build things" message
- Maintain focus indicators on all interactive elements; the blue action color can serve as focus ring color
- Verify color contrast ratios: white on dark surfaces exceeds WCAG AA, but muted gray text should not be used for critical information
- Consider reduced-motion preferences for any scroll or hover animations
- The emoji prefix in the introduction should have appropriate text alternative

## Scope note

This guide covers the homepage surface including the hero illustration, introduction panel, action buttons, and Selected Projects section with the Metadrop case study. Measurements are practical adaptation targets. Footer behavior, additional project entries, mobile navigation patterns, and any interior pages are not represented in the supplied material. Hover states, loading sequences, and form interactions are not documented.
