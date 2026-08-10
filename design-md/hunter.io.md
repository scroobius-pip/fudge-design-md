# How hunter.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hunter.io-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ accordion section with left-aligned heading and right-aligned expandable question list on light gray background](https://pin.fontofweb.com/2902?format=jpg)](https://design.withfudge.com/share/pin-2902)

[FAQ accordion section with left-aligned heading and right-aligned expandable question list on light gray background](https://design.withfudge.com/share/pin-2902)

[![Three-column feature grid with teal icons, orange accent links, and outbound platform headline](https://pin.fontofweb.com/2901?format=jpg)](https://design.withfudge.com/share/pin-2901)

[Three-column feature grid with teal icons, orange accent links, and outbound platform headline](https://design.withfudge.com/share/pin-2901)

[![Hero section with orange headline accent, dark pill-shaped tags, and prominent orange CTA button](https://pin.fontofweb.com/2900?format=jpg)](https://design.withfudge.com/share/pin-2900)

[Hero section with orange headline accent, dark pill-shaped tags, and prominent orange CTA button](https://design.withfudge.com/share/pin-2900)

[![Feature showcase with email editor mockup, six icon-labeled capabilities, and orange primary action button](https://pin.fontofweb.com/2899?format=jpg)](https://design.withfudge.com/share/pin-2899)

[Feature showcase with email editor mockup, six icon-labeled capabilities, and orange primary action button](https://design.withfudge.com/share/pin-2899)

## Overview

Hunter.io presents a polished, conversion-oriented SaaS experience built around email outreach and lead generation tools. The visual system balances professional credibility with approachable warmth through its distinctive orange accent color against a predominantly neutral palette. The design prioritizes clarity and action: generous whitespace frames focused content blocks, while bold typography and prominent call-to-action buttons guide users toward tool adoption.

The interface follows a consistent pattern of light backgrounds with elevated white cards for feature presentation. Headlines employ a confident, modern sans-serif with tight letter spacing, while body text maintains comfortable readability through ample line height. The orange accent appears strategically in headlines, primary buttons, and interactive links, creating visual momentum without overwhelming the restrained foundation. Component surfaces range from flat transparent backgrounds to subtly bordered cards, with pill-shaped tags and rounded buttons softening the overall geometry.

## Colors

The color system centers on a high-contrast neutral foundation with a single warm accent that carries brand recognition and action-oriented energy.

| token | value | use |
|---|---|---|
| action | #F26522 | Primary buttons, headline accents, interactive links, CTA emphasis |
| action-hover | #D9561A | Hover state for primary actions |
| ink | #1A1A2E | Primary text, dark tags, strong headings |
| muted-ink | #6B7280 | Secondary text, descriptions, placeholder content |
| canvas | #FFFFFF | Page backgrounds, card surfaces, button text on dark |
| surface | #F9FAFB | Section backgrounds, FAQ areas, subtle content bands |
| surface-elevated | #FFFFFF | Feature cards, modal backgrounds, raised containers |
| border | #E5E7EB | Card borders, dividers, structural separators |
| border-subtle | #F3F4F6 | Accordion dividers, hairline separators |
| success | #10B981 | Positive indicators, verification states |
| info | #3B82F6 | Informational highlights, feature icons |

The light mode dominates all visible surfaces: white and near-white backgrounds establish breathing room, while dark ink text ensures legibility. The orange accent functions as the sole warm color, appearing in headline phrases like "all-in-one" and "Beats every other method" to draw attention to value propositions. Dark pill-shaped tags with white text provide contrast clusters for feature categorization, while outlined pill tags offer a lighter alternative for secondary selections. Teal and blue tints appear in feature icons as supplementary accents, though orange remains the primary action color throughout.

## Typography

The type system pairs a distinctive display family for headlines with a highly readable body family, creating clear hierarchy through weight and size contrast.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Familjen Grotesk | 3rem | 700 | 1.1 | -0.02em | Page headlines, major section titles |
| section-display | Familjen Grotesk | 2.25rem | 700 | 1.2 | -0.01em | Section headings, feature titles |
| body-large | Inter | 1.25rem | 400 | 1.6 | 0 | Lead paragraphs, introductory text |
| body | Inter | 1rem | 400 | 1.6 | 0 | Primary body text, descriptions |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, captions |
| label | Inter | 0.75rem | 500 | 1.4 | 0.02em | Button text, badges, small labels |
| navigation | Inter | 0.875rem | 500 | 1.5 | 0 | Menu items, header links |

Familjen Grotesk serves as the display face, bringing geometric clarity and contemporary character to headlines. Its tight letter spacing and bold weight create impactful, compact headlines that anchor each section. Inter handles all body and interface text, offering excellent screen readability at multiple sizes with its open apertures and balanced proportions.

The scale progresses in whole-number multiples of the 4px base unit: 12px (label), 14px (body-small, navigation), 16px (body), 20px (body-large), 36px (section-display), and 48px (hero-display). This stepped approach ensures consistent vertical rhythm and predictable component sizing.

Verify licensing for these families before production use. Inter is designed by Rasmus Andersson and distributed by Rsms. Open Sans credits appear in source references but are not visibly deployed in the analyzed interface. Font Awesome families serve iconography exclusively and are not treated as typography.

## Layout

The layout follows a centered, contained approach with generous horizontal margins and clear vertical sectioning. Content max-width appears to center around 1200px, creating comfortable reading lines while allowing feature grids to breathe.

Sections stack vertically with substantial padding between them, typically 6rem or more, establishing clear content territories. The hero and feature sections employ centered text alignment for headlines and descriptions, while functional content like FAQs and feature grids shift to asymmetric or multi-column arrangements.

The three-column feature grid demonstrates the system's responsive logic: equal-width cards with internal padding, separated by consistent gutters. Each card maintains vertical internal alignment with icon, heading, description, and link stacked in predictable order. The FAQ section inverts this pattern, placing the section heading in a left column while the accordion occupies a wider right column, creating visual interest through asymmetry.

Spacing follows a 4px base unit, with semantic tokens aggregating these into practical values. Component gaps of 1rem separate related elements, while 2rem content gaps divide distinct content blocks within a section. Card padding at 2rem ensures comfortable internal margins without excessive whitespace. Section spacing at 6rem provides dramatic separation between major content areas, preventing visual fatigue on longer pages.

## Visual language

The visual language communicates efficiency and modern professionalism through restrained surfaces and purposeful accents. Rounded corners appear consistently: 0.5rem for buttons, 0.75rem for cards, and full pill shapes for tags and selection chips. This rounded geometry softens the otherwise rectilinear grid structure.

Shadows remain minimal or absent in the visible interface, relying instead on border definition and background color shifts to create depth. The surface-elevated token provides pure white cards against slightly off-white section backgrounds, creating subtle elevation without explicit shadow.

Iconography appears as simple line icons in teal and blue tints, contained within small rounded squares or circles. These icons precede feature headings and capability labels, serving as quick visual identifiers without dominating the composition. The icon style favors clarity and minimal detail, matching the overall clean aesthetic.

Photography and illustration appear limited in the analyzed surfaces; the system favors UI mockups and abstract graphics to demonstrate product functionality. The email editor mockup in the feature showcase exemplifies this approach, presenting a realistic interface preview within a rounded container.

## Components

### Primary action button

The primary action button carries the orange action background with white text, using medium-weight label typography at 0.75rem. Corners round to 0.5rem, creating a friendly but not fully pill-shaped appearance. Padding of 0.875rem vertical and 1.5rem horizontal provides substantial click target. The button appears prominently below feature descriptions and in hero areas, often paired with secondary text links.

### Secondary text link

Secondary actions appear as plain text with arrow indicators, using body-small typography in ink color. These links sit adjacent to primary buttons, offering alternative paths without competing visually. The arrow suffix suggests forward momentum and external navigation.

### Feature card

Feature cards present on white elevated surfaces with 0.75rem border radius and 2rem internal padding. A thin border in the border color may appear, though some cards rely solely on background contrast. Each card contains: a small rounded icon container with teal or blue line icon, a bold section-display heading, body text description, and an orange action link with arrow. Cards arrange in equal-width grids with consistent gutters.

### Tag pill

Dark filled pills use the ink background with white text, rounding fully to pill shape. These appear as category indicators or selected states in feature comparisons. Outlined variants use transparent backgrounds with muted-ink text and border-color borders, serving as unselected or secondary options. Both variants use body-small typography with 0.5rem vertical and 1rem horizontal padding.

### Accordion

Accordion items stack vertically with hairline separators in border-subtle. Each item presents a question in body typography with a plus or minus indicator at the right edge. Expanded items reveal answers in body-small text with muted-ink color, maintaining the same left alignment. The container sits on a surface background, with the section heading positioned in a separate left column on wider viewports.

### Email editor mockup

The product demonstration container presents a realistic interface preview with rounded corners and subtle shadow suggestion. Internal elements include a header bar with icon and title, subject line field, rich text body area with formatting toolbar, and status footer with metrics. This component demonstrates the product without requiring live interaction.

## Responsive behavior

The layout appears optimized for desktop presentation with centered content and multi-column grids. At narrower viewports, the asymmetric FAQ layout should stack to single column, with the section heading preceding the accordion. The three-column feature grid should collapse to single column on mobile, maintaining card internal structure while stacking vertically.

Typography should scale down proportionally: hero-display reducing to 2rem on tablet and 1.75rem on mobile, preserving impact without overflow. Section-display correspondingly adjusts to 1.75rem and 1.5rem. Body text maintains 1rem minimum for readability across all breakpoints.

Spacing should compress moderately: section padding reducing from 6rem to 4rem on tablet and 3rem on mobile. Card padding remains consistent to preserve internal readability. Component gaps may reduce from 2rem to 1.5rem to conserve vertical space.

The pill tag arrays in comparison sections should wrap naturally, maintaining horizontal scroll as a fallback only when wrapping would break semantic grouping.

## Practical implementation guidance

### Preserve
- The distinctive orange accent against neutral backgrounds; this contrast defines brand recognition
- Generous whitespace around content sections; the breathing room conveys confidence and clarity
- Rounded corner consistency: cards at 0.75rem, buttons at 0.5rem, pills at full radius
- The two-tier typography pairing: bold display headlines with readable body text
- Icon-then-heading-then-description vertical rhythm in feature cards

### Avoid
- Introducing additional accent colors that compete with the orange action role
- Reducing whitespace below 3rem for major section separations
- Using the dark ink background for large areas; reserve it for tags, buttons, and text
- Sharp corners on interactive elements; the rounded language is consistent throughout
- Body text smaller than 1rem for primary content; Inter performs best at standard sizes

### Recommended build order
1. Establish the neutral foundation: canvas white, surface off-white, ink text, muted-ink secondary
2. Implement the orange action color for primary buttons and headline accents
3. Set up the typography hierarchy with Familjen Grotesk headlines and Inter body
4. Build the card component with consistent padding, border, and radius
5. Create the pill tag system in filled and outlined variants
6. Assemble section layouts with proper spacing tokens
7. Add the accordion pattern for FAQ and expandable content

### Accessibility
- Ensure orange action elements maintain 3:1 contrast against white for large text, 4.5:1 for body text
- Provide visible focus indicators on all interactive elements, extending the existing border-radius approach
- Use semantic heading hierarchy: single h1 per page, followed by h2 for sections, h3 for card titles
- Include aria-expanded state on accordion triggers with corresponding panel visibility
- Maintain touch targets at minimum 44px for pill tags and buttons on mobile viewports

## Scope note

This guide covers the marketing and feature pages of Hunter.io, including the AI Writing Assistant landing page and pricing surfaces. Mobile breakpoints, animation behavior, form validation states, and the authenticated application interface are not represented in the supplied materials. Measurements are practical adaptation targets derived from visible desktop compositions.
