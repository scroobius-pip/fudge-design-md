# How runwayml.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/runwayml.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with cinematic medieval knight imagery, white headline 'Building AI to Simulate the World', and horizontal partner logo bar on light background](https://pin.fontofweb.com/7635?format=jpg)](https://design.withfudge.com/share/pin-7635)

[Hero section with cinematic medieval knight imagery, white headline 'Building AI to Simulate the World', and horizontal partner logo bar on light background](https://design.withfudge.com/share/pin-7635)

[![Dark footer with five-column link grid, white text on near-black background, and small legal copy with Runway logo](https://pin.fontofweb.com/7634?format=jpg)](https://design.withfudge.com/share/pin-7634)

[Dark footer with five-column link grid, white text on near-black background, and small legal copy with Runway logo](https://design.withfudge.com/share/pin-7634)

[![Light research section with alternating image-text rows for GWM-1 and Gen-4.5 products, dark text on white background](https://pin.fontofweb.com/7633?format=jpg)](https://design.withfudge.com/share/pin-7633)

[Light research section with alternating image-text rows for GWM-1 and Gen-4.5 products, dark text on white background](https://design.withfudge.com/share/pin-7633)

[![Atmospheric research panel with blurred gradient background, white text, and three linked research items with arrow icons](https://pin.fontofweb.com/7632?format=jpg)](https://design.withfudge.com/share/pin-7632)

[Atmospheric research panel with blurred gradient background, white text, and three linked research items with arrow icons](https://design.withfudge.com/share/pin-7632)

## Overview

Runway's design system operates on a stark binary: immersive darkness for hero and research moments, and clinical lightness for product storytelling. The visual language treats AI infrastructure as a cinematic experience—full-bleed imagery, generous negative space, and typography that whispers rather than shouts. A single type family, Abc New, carries the entire voice through weight and tracking variations rather than stylistic diversity. The result is a system that feels simultaneously technical and emotional, precise and atmospheric.

The homepage alternates between these modes. The hero plunges visitors into a dark, filmic scene with white text anchored to the lower left. Below, a light editorial section presents research and products with the clarity of a technical journal. A research panel returns to darkness with a blurred, abstract gradient background. The footer completes the cycle in near-black. This rhythm of dark-light-dark creates visual breathing room while maintaining continuous momentum.

## Colors

The palette is intentionally narrow, deriving its range from background depth rather than hue variation. All interface colors are achromatic or near-achromatic, allowing generated imagery and video to supply chromatic energy.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, hero sections, footer |
| surface | #0C0C0C | Elevated dark panels, card backgrounds on dark |
| surface-elevated | #1A1A1A | Button and interactive element backgrounds on dark |
| ink | #FFFFFF | Primary text on dark backgrounds, hero headlines |
| ink-muted | #666E7A | Secondary text on dark, footer category labels |
| ink-secondary | #999999 | Tertiary information, captions on light backgrounds |
| ink-tertiary | #6B7280 | Muted body text, partner section descriptions |
| border | #2A2A2A | Subtle dividers on dark backgrounds |
| border-light | #404040 | Hairline rules in research panels |
| action-primary | #FFFFFF | Primary button background on dark |
| action-primary-text | #1A1A1A | Text on primary buttons |
| action-secondary-bg | #262626 | Secondary button background |
| action-secondary-text | #FFFFFF | Text on secondary buttons |
| accent-warm | #E5E7EB | Light section backgrounds, partner bar |
| accent-cool | #EEF1F5 | Subtle cool tint for alternate light surfaces |

The dark mode dominates the experience. Light sections appear as deliberate interruptions—moments of clarity that let product imagery and technical descriptions breathe. The research panel introduces a gradient-blurred atmospheric treatment that sits between these poles: dark enough for white text, but soft enough to feel contemplative. No saturated accent colors compete with the generative media that fills the site's imagery containers.

## Typography

Abc New, designed by Tania Chacana and distributed through Alphabets.cl, is the sole type family. The system uses two optical cuts loaded from distinct sources: Abc New-Normal for body and display settings, and Abc New-Neutral for semibold weights in buttons and labels. This restraint creates a unified voice that shifts tone through weight and tracking rather than family change.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Abc New | 3rem | 400 | 1 | -0.025em | Hero headlines, maximum impact statements |
| section-display | Abc New | 2.5rem | 400 | 1 | 0em | Section headings on light backgrounds |
| subhead-large | Abc New | 1.5rem | 400 | 1.25 | 0em | Research panel descriptions, feature intros |
| body | Abc New | 1rem | 400 | 1.5 | 0em | Paragraphs, navigation, general content |
| body-small | Abc New | 0.875rem | 400 | 1.25 | 0em | Product descriptions, secondary text |
| label | Abc New | 0.875rem | 500 | 1.43 | 0.025em | Category tags, uppercase labels |
| navigation | Abc New | 1rem | 400 | 1.5 | 0em | Header links, footer primary links |
| button-primary | Abc New | 0.875rem | 600 | 1.43 | 0em | Button text, call-to-action links |
| legal | Abc New | 0.6875rem | 450 | 1.3 | 0em | Copyright, terms, system status |

The hero display at 48px uses tight negative tracking (-1.2px) to create density and authority. Section displays at 40px maintain the same weight but neutral tracking for calmer reading. The 14px button and label sizes cluster around interface chrome, while 16px body text carries the narrative weight. Verify licensing for Abc New through Alphabets.cl before production use.

## Layout

The layout alternates between full-bleed immersive compositions and contained editorial grids. The hero occupies the full viewport width with content inset from the left edge, creating asymmetrical tension against the centered or right-weighted imagery. Below, a partner logo bar uses extreme horizontal padding to create a breathing zone between the cinematic opening and the information that follows.

Content sections on light backgrounds employ a two-column asymmetric grid: imagery occupies roughly 55% width on the left, with text content offset to the right. This creates a staggered reading rhythm as users scroll through product announcements. The research panel reverses this logic, placing a large text block on the left and a stacked list of linked research items on the right, separated by thin horizontal rules.

Spacing follows a deliberate hierarchy. Major section breaks use 160px vertical padding (10rem) to create dramatic pauses. Between related elements, 48px (3rem) separates headlines from body copy. Component internals use 16px-24px gaps. The header maintains a fixed position with 20px horizontal padding, while the main content area uses variable margins that expand to 97.5px on wider viewports.

## Visual language

The system's visual character emerges from contrast: absolute black against luminous imagery, whisper-thin typography against cinematic scale, technical precision against emotional content. Generated and filmed media fills large rectangular containers with slight rounding (8px), never fully circular or aggressively angular. These containers sit flush or with minimal padding, treating imagery as the primary content rather than decoration.

The partner logo bar demonstrates the system's restraint: logos appear in monochrome, evenly spaced, without borders or background separation. The transition from dark hero to light partner section happens without gradient—an abrupt cut that mirrors the system's binary logic.

In the research panel, a blurred, abstract background creates depth without competing with text. Thin 1px horizontal rules in #E5E7EB separate linked items, their delicacy suggesting precision instruments. Arrow icons on the right of each item indicate external or deep links, their small size maintaining the typographic hierarchy.

## Components

### Primary button

- **Anatomy**: Text label with right-pointing chevron icon, contained in a rounded rectangle
- **Surface**: White background (#FFFFFF) on dark sections, near-black (#1A1A1A) on light sections
- **Typography**: `{typography.button-primary}`, semibold weight
- **Shape**: 6px border radius, 6px 10px padding
- **Spacing**: 32px top margin when following body text
- **Variants**: Dark variant uses #262626 background with white text for secondary actions

### Navigation header

- **Anatomy**: Logo left, primary links center, utility links and CTA right
- **Surface**: Transparent over hero, transitioning to solid black on scroll
- **Typography**: `{typography.navigation}` for links, `{typography.button-primary}` for "Try Runway" CTA
- **Shape**: No border, full-width with 20px horizontal padding
- **Spacing**: 52.5px side margins on content area, 20px vertical padding
- **Composition**: Logo locks to left edge, links distribute evenly in center cluster, utility items right-aligned

### Product feature card

- **Anatomy**: Large media container left, text block right with headline, description, and link
- **Surface**: White or transparent background, media with 8px radius
- **Typography**: `{typography.section-display}` for headline, `{typography.body}` for description, `{typography.button-primary}` for "Learn more" link
- **Shape**: Media container at 8px radius, text block unbounded
- **Spacing**: 64px vertical gap between stacked cards, 48px internal gap between media and text
- **Composition**: Asymmetric two-column, approximately 55/45 split

### Research link list

- **Anatomy**: Stacked rows with title, description, and arrow icon, separated by horizontal rules
- **Surface**: Transparent over blurred gradient background
- **Typography**: `{typography.subhead-large}` for titles, `{typography.body-small}` for descriptions
- **Shape**: Full-width rows with 1px top border in #E5E7EB
- **Spacing**: 28px vertical padding per row, 16px gap between title and description
- **Composition**: Right-aligned column occupying approximately 40% of panel width

### Footer

- **Anatomy**: Five-column link grid above legal bar with logo
- **Surface**: Near-black (#0C0C0C) background
- **Typography**: `{typography.navigation}` for links, `{typography.legal}` for copyright and terms, `{typography.label}` for column headers in muted gray
- **Shape**: Full-width, no border radius
- **Spacing**: 24px bottom padding for link grid, 16px gap between legal items
- **Composition**: Columns distribute evenly, logo anchors bottom left, legal text bottom center-left

## Responsive behavior

The system presents a desktop-first layout. For narrower viewports, the two-column product cards should stack vertically with media above text, maintaining the 8px media radius and increasing vertical padding between cards. The research panel's right-aligned link list should expand to full width below the descriptive text.

The hero headline scales down proportionally, though the tight tracking should be preserved to maintain character. Navigation collapses to a hamburger menu or consolidates into a "Menu" label, with the "Try Runway" CTA remaining visible as a persistent action.

Footer columns should reflow to two columns on tablet and single column on mobile, with category headers remaining as section dividers. Partner logos may scroll horizontally or wrap to multiple rows rather than compressing to illegibility.

## Practical implementation guidance

### Preserve
- The absolute black (#000000) hero backgrounds—this is the system's signature
- Single-family typography with weight-based hierarchy
- Generous section spacing (160px) for dramatic pacing
- Slight media rounding (8px) without heavy shadows
- Monochrome treatment of partner and third-party logos

### Avoid
- Adding saturated accent colors that compete with generative media
- Reducing hero tracking below -0.025em—tighter becomes illegible
- Using borders heavier than 1px for dividers
- Centering hero text—left anchoring creates cinematic asymmetry
- Multiple font families for "visual interest"

### Recommended build order
1. Establish the black canvas and white ink foundation
2. Implement Abc New at 400 weight with the full type scale
3. Build the hero section with full-bleed media and left-anchored text
4. Create the two-column product card pattern
5. Add the research panel with blurred background and link list
6. Implement the five-column footer
7. Refine spacing tokens against actual content density

### Accessibility
- Ensure white text on black backgrounds meets WCAG AAA contrast (the current combination does)
- Provide visible focus states for keyboard navigation—consider 2px outline offset on buttons
- Add `prefers-reduced-motion` handling for any scroll-triggered animations
- Maintain semantic heading hierarchy: h1 for hero, h2 for sections, h3 for card titles
- Ensure partner logos have appropriate alt text or aria-labels when linked

## Scope note

This guide covers the Runway homepage including hero, product research, partner, and footer surfaces. Interior pages, mobile breakpoints, loading states, and motion behavior are not represented in the supplied material. The spacing and radius values reflect exact measurements from the desktop interface.
