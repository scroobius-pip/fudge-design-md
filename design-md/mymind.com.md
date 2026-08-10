# How mymind.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mymind.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer area with navigation columns, logo lockup, and soft gradient border on warm off-white background](https://pin.fontofweb.com/8990?format=jpg)](https://design.withfudge.com/share/pin-8990)

[Footer area with navigation columns, logo lockup, and soft gradient border on warm off-white background](https://design.withfudge.com/share/pin-8990)

[![Three editorial cards with vivid orange backgrounds, oval portraits, and stacked serif typography](https://pin.fontofweb.com/8989?format=jpg)](https://design.withfudge.com/share/pin-8989)

[Three editorial cards with vivid orange backgrounds, oval portraits, and stacked serif typography](https://design.withfudge.com/share/pin-8989)

[![Centered manifesto statement with large serif text, thin circular outline, and coral CTA button](https://pin.fontofweb.com/8988?format=jpg)](https://design.withfudge.com/share/pin-8988)

[Centered manifesto statement with large serif text, thin circular outline, and coral CTA button](https://design.withfudge.com/share/pin-8988)

[![Use cases section with tabbed navigation and mint-green feature panel showing moodboard imagery](https://pin.fontofweb.com/8987?format=jpg)](https://design.withfudge.com/share/pin-8987)

[Use cases section with tabbed navigation and mint-green feature panel showing moodboard imagery](https://design.withfudge.com/share/pin-8987)

## Overview

The mymind.com visual system is built around a philosophy of calm confidence and editorial warmth. The design avoids the cold minimalism typical of productivity tools, instead embracing a gallery-like atmosphere where content breathes. Large serif display type dominates the hierarchy, set in a classical roman style with tight leading and negative letter-spacing that feels intentionally crafted rather than default. This editorial voice is balanced by a restrained sans-serif layer for navigation, labels, and functional text, creating a clear separation between emotional expression and practical utility.

The color story moves between warm off-white foundations and moments of vivid energy. The default canvas is a soft warm gray that avoids sterile pure white, while feature sections introduce mint-green panels and coral-orange accents that feel contemporary without being aggressive. Photography and imagery are treated as first-class content, often appearing in rounded containers with generous padding that frames each piece like a gallery print. The overall rhythm is spacious and unhurried, with section padding that allows the eye to rest between moments of visual intensity.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, body copy |
| ink-secondary | #343552 | Secondary headings, emphasized UI text |
| ink-tertiary | #717286 | Tertiary labels, inactive tab states |
| muted-ink | #748297 | Footer links, de-emphasized navigation |
| canvas | #F9FAFC | Default page background, light sections |
| canvas-warm | #F6F4F2 | Warm alternative background, editorial areas |
| surface | #FFFFFF | Card backgrounds, elevated panels, footer |
| surface-mint | #CCDDD8 | Feature panels, moodboard containers |
| surface-coral | #FF5924 | Primary CTA buttons, accent backgrounds |
| surface-coral-light | #FFF1F1 | Coral-tinted subtle backgrounds |
| border | #E4E8EC | Dividers, hairline separators |
| border-warm | #E5EAF2 | Warm-tinted borders for editorial areas |
| accent-coral | #FF5924 | Active tab indicators, primary actions |
| accent-blue | #1573DD | Links, interactive text states |

The palette operates in three modes. The light mode uses canvas or canvas-warm as a foundation with ink text, creating the airy default experience. Accent mode introduces surface-coral for high-energy moments like signup buttons and active states, or surface-mint for calm feature demonstrations. The dark mode appears sparingly in gradient text treatments, where ink transitions to a deep charcoal (#2F343C) for dimensional headline effects. Image palettes are drawn from photography and do not serve as UI tokens; the coral and mint accents are intentionally synthetic to create contrast with organic imagery.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Avenir Lt W 0145 1475508 | 6rem | 400 | 0.88 | normal | Largest homepage headlines |
| section-display | By Matthieu Cortat | 6rem | 400 | 0.88 | -0.04em | Section titles, editorial headers |
| manifesto-display | By Matthieu Cortat | 3.375rem | 400 | 1.25 | -0.02em | Centered philosophical statements |
| feature-headline | By Matthieu Cortat | 5rem | 400 | 0.88 | -0.04em | Feature panel headlines with italic pairing |
| body | Avenir Lt W 0145 1475508 | 1.25rem | 400 | 1.4 | normal | Primary body text, descriptions |
| body-small | Avenir Lt W 0145 1475508 | 1rem | 400 | 1.5 | normal | Compact body, footer content |
| label | Inter | 1rem | 400 | 1 | 0.06em | Uppercase category labels, metadata |
| label-medium | Inter | 1.5rem | 400 | 1.125 | -0.06em | Medium emphasis labels, tab text |
| navigation | Nunito | 0.9375rem | 400 | 1.67 | 0.05em | Primary navigation, header links |
| ui-body | Open Sans | 1.125rem | 400 | 1.67 | normal | Interface descriptions, form text |
| caption | Inter | 1.25rem | 400 | 1.4 | normal | Captions, secondary descriptions |

The type system pairs two distinct voices. Display and editorial text uses the classical serif family by Matthieu Cortat (Louize), with its sharp terminals and refined proportions, for headlines that feel like magazine pull-quotes. The italic variant appears within feature headlines for emphasized phrases, creating a rhythmic contrast within single lines. Functional and body text relies on Avenir for its warm, humanist clarity, while Open Sans handles interface-heavy paragraphs at a slightly larger size for comfortable reading. Inter serves the label and caption roles with its neutral, precise geometry, and Nunito provides the navigation voice with rounded, approachable letterforms.

The complete font inventory includes Avenir Lt W 0145 1475508, Avenir Ltw 0145 Book, By Matthieu Cortat, By Matthieu Cortat-13217474072927555962, Inter, Louize, Louize-Italic, Maison Neue, Neuehaasgrotesk, Nunito, and Open Sans. Neuehaasgrotesk appears in label and heading roles at 16px and 24px with medium weight. Maison Neue is available in Light weight. The Louize family is designed by Matthieu Cortat and available from 205.tf. Avenir is designed by Adrian Frutiger and available from Monotype. Inter is designed by Rasmus Andersson. Nunito is designed by Vernon Adams. Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column editorial model with occasional full-bleed feature panels. Maximum content width is constrained by generous horizontal padding of 70px on desktop, creating a framed composition that floats within the viewport. Sections stack vertically with substantial vertical rhythm, typically 120px to 200px between major content blocks, allowing each section to feel like a distinct page within the scroll experience.

The grid is intentionally loose rather than rigid. Feature panels use rounded rectangles with 20px corner radii that sit inset from the viewport edges, creating a card-like presentation within the page. Editorial cards appear in horizontal groups of three, each with consistent internal padding and rounded corners, maintaining equal visual weight across the row. The manifesto section breaks this pattern with centered, max-width-constrained text that creates a moment of focused reading.

Navigation sits at the top in a minimal bar, with logo left and utility links right. The header uses a transparent or warm-tinted background that integrates with the hero section below. Footer content organizes into a multi-column link grid with clear category labels, maintaining the spacious horizontal padding of the main content area. A thin horizontal rule separates the footer body from copyright and legal links below.

## Visual language

The visual language balances editorial sophistication with digital product clarity. Rounded corners are a defining feature, applied consistently to cards, panels, and buttons at 16px to 20px for content containers and 120px for pill-shaped interactive elements. This softness counteracts the precision of the typography, preventing the design from feeling too austere.

Imagery is treated as content rather than decoration. Photographs appear in rounded containers with subtle shadows, often in grid arrangements that suggest moodboards or collections. The oval crop appears in editorial portraits, creating a classical cameo effect against vivid accent backgrounds. Feature panels use full-bleed imagery within their rounded containers, with content overlaid or positioned above.

The coral accent (#FF5924) is used sparingly but decisively: for primary calls-to-action, active navigation states, and occasional background panels. It provides the only warm hue in an otherwise cool-neutral palette, making it immediately recognizable as the action color. Mint green (#CCDDD8) serves as a calm alternative for feature demonstrations, suggesting creativity without the urgency of coral.

Gradients appear in text treatments, where headlines transition from pure black to deep charcoal (#2F343C) for subtle dimensional depth. This technique is reserved for the largest display text, adding refinement without visual noise. Shadows are minimal and soft, used primarily for elevated cards rather than dramatic depth.

## Components

### Primary Button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: backgroundColor `{colors.surface-coral}`, text color `{colors.surface}`
- **Typography**: `{typography.navigation}` with uppercase treatment and positive letter-spacing
- **Shape**: 120px border radius creating full pill, no visible border
- **Spacing**: 10px vertical padding, 32px horizontal padding
- **Composition**: Centered within its container, often appearing below manifesto text or in header navigation

### Editorial Card

- **Anatomy**: Rounded container with background image or solid color, overlaid or below text content
- **Surface**: Vivid coral (`{colors.surface-coral}`) or photographic background, with ink text
- **Typography**: Stacked serif display for "Into my mind" lockup, sans-serif label above, body description below
- **Shape**: 16px border radius, consistent aspect ratio across card groupings
- **Spacing**: Internal padding of 50px, external gutter between cards
- **Composition**: Three-column grid on desktop, equal width with consistent vertical alignment of text baselines below

### Feature Panel

- **Anatomy**: Large rounded container with background color, category label, headline, and imagery grid
- **Surface**: Mint green (`{colors.surface-mint}`) background, ink text
- **Typography**: Uppercase label (`{typography.label}`), large serif headline with italic emphasis (`{typography.feature-headline}`), body text below
- **Shape**: 20px border radius, full content width minus horizontal padding
- **Spacing**: 80px to 120px internal padding, imagery grid with tight internal gutters
- **Composition**: Centered text above, masonry or grid imagery below, all contained within rounded panel

### Navigation Tab Group

- **Anatomy**: Horizontal row of text links with active indicator
- **Surface**: Transparent background, coral active state, gray inactive states
- **Typography**: `{typography.label-medium}` for tab labels
- **Shape**: No visible container, text-only with dot indicator below active item
- **Spacing**: Even horizontal distribution, 30px to 48px between items
- **Composition**: Centered below section headline, serving as filter or view switcher

### Footer

- **Anatomy**: Logo lockup, multi-column link grid, horizontal rule, legal row
- **Surface**: White or warm off-white background, muted ink and ink-secondary text
- **Typography**: Body-small for links, label for category headers, ui-body for legal
- **Shape**: Full width with 70px horizontal padding, thin border-top separator
- **Spacing**: 60px to 80px vertical padding, 40px between link columns and legal row
- **Composition**: Logo and primary links left-aligned, category columns distributed right, legal centered or split

## Responsive behavior

The design maintains its editorial character across viewport sizes through proportional scaling rather than dramatic restructuring. Horizontal padding reduces from 70px on desktop to 20px on narrow viewports, preserving the framed composition while maximizing content area. Section spacing compresses proportionally, though the generous rhythm remains a defining feature.

Typography scales down in discrete steps. Display headlines drop from 6rem to approximately 3.375rem, maintaining the tight leading and negative tracking that defines the editorial voice. Body text remains at a readable minimum of 1rem. The three-column editorial card grid collapses to a single column on narrow viewports, with cards stacking vertically and maintaining their internal proportions.

The navigation bar should collapse to a minimal state on scroll, with reduced height and potentially a subtle background blur or solid fill to maintain legibility over varied content. Tab groups may scroll horizontally if they exceed viewport width, or wrap to two rows with maintained spacing.

## Practical implementation guidance

### Preserve
- The tight leading on display type (0.88) that creates the distinctive editorial density
- The pairing of classical serif headlines with clean sans-serif functional text
- Generous section spacing that lets content breathe
- Rounded corners on all elevated surfaces, consistently applied
- The warm off-white canvas as the default foundation

### Avoid
- Pure white backgrounds that eliminate the subtle warmth of the design
- Tight body text leading that conflicts with the airy display typography
- Harsh shadows or dramatic elevation that contradicts the flat, gallery-like aesthetic
- Saturated colors beyond the defined coral and mint accents
- Generic button shapes; maintain the full pill for all primary actions

### Recommended Build Order
1. Establish the type scale with loaded web fonts, verifying the Louize italic renders correctly
2. Implement the color tokens and canvas background
3. Build the navigation bar with transparent-to-solid scroll behavior
4. Create the hero section with centered display typography
5. Develop the feature panel component with mint background and image grid
6. Implement the editorial card with coral variant and photographic variant
7. Build the footer with multi-column link grid
8. Add the manifesto section with centered text and CTA

### Accessibility
- Ensure the coral-on-white and coral-on-coral combinations meet minimum contrast ratios; the vivid coral may need adjustment for small text
- Provide focus indicators that match the rounded pill shape of buttons
- Maintain readable line lengths in body text, ideally 45-75 characters per line
- Consider reduced-motion preferences for any scroll-triggered animations
- Ensure navigation tabs communicate active state through more than color alone

## Scope note

This guide covers the mymind.com homepage and its primary marketing surfaces. Browser extension pages and account dashboards are not represented in the supplied material. Motion behavior, mobile-specific layouts, form states, and error handling are not documented. Measurements are derived from the exact values present in the interface records.
