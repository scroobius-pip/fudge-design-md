# How medium.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/medium.com-design)

Last updated: 2026-08-10

## Captured pages

[![Explore topics page with category navigation pills, search bar, and three-column topic directory with green accent links](https://pin.fontofweb.com/9708?format=jpg)](https://design.withfudge.com/share/pin-9708)

[Explore topics page with category navigation pills, search bar, and three-column topic directory with green accent links](https://design.withfudge.com/share/pin-9708)

[![Homepage hero with large serif display headline on warm cream background, green illustration, and dark pill button](https://pin.fontofweb.com/9706?format=jpg)](https://design.withfudge.com/share/pin-9706)

[Homepage hero with large serif display headline on warm cream background, green illustration, and dark pill button](https://design.withfudge.com/share/pin-9706)

[![Writing landing page hero with centered serif headline and dark pill CTA on white background](https://pin.fontofweb.com/9603?format=jpg)](https://design.withfudge.com/share/pin-9603)

[Writing landing page hero with centered serif headline and dark pill CTA on white background](https://design.withfudge.com/share/pin-9603)

[![Three feature cards with line illustrations on cream background above centered publishing CTA section](https://pin.fontofweb.com/9602?format=jpg)](https://design.withfudge.com/share/pin-9602)

[Three feature cards with line illustrations on cream background above centered publishing CTA section](https://design.withfudge.com/share/pin-9602)

## Overview

Medium's design system is built around editorial clarity and warm restraint. The visual language pairs dramatic serif display typography with highly legible sans-serif body text, creating a hierarchy that feels both literary and contemporary. The system relies on generous whitespace, a warm cream ground for marketing surfaces, and crisp white for functional and content-heavy pages. Green appears sparingly as an action accent, while the majority of the interface communicates through tonal blacks, warm grays, and subtle border definitions. The overall impression is of a calm, authoritative reading environment that lets written content dominate without visual competition.

The system serves two primary contexts: the reading experience, which prioritizes uninterrupted text flow and clean navigation, and the marketing experience, which uses large display type and illustrative elements to communicate platform value. Both contexts share the same typographic foundation and color logic, differing primarily in scale and background treatment.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, logo, and strong borders |
| ink-secondary | #242424 | Button fills, hover states, dark UI elements |
| ink-tertiary | #6B6B6B | Secondary text, captions, metadata, topic links |
| canvas | #FFFFFF | Primary page background, card surfaces, button text on dark |
| surface-warm | #F7F4ED | Marketing page hero backgrounds, feature sections |
| surface-muted | #F2F2F2 | Search inputs, subtle UI backgrounds |
| surface-cool | #F9F9F9 | Topic pill backgrounds, inactive tab states |
| action | #1A8917 | Primary action links, active topic pills, success indicators |
| action-hover | #191919 | Darker hover state for action elements |
| border | #242424 | Button borders, active navigation states |
| border-light | #F2F2F2 | Subtle dividers, section separators on light backgrounds |

The color model operates on a near-monochrome foundation with two functional accents. Black and near-black carry all primary information, while warm grays create depth without introducing chromatic noise. The green accent is reserved for interactive confirmation: topic exploration links, active states, and the occasional marketing highlight. Marketing pages introduce a warm cream ground that distinguishes them from the clinical white of reading and topic pages. No gradients or shadows appear in the visible interface; depth is achieved through background color shifts and single-pixel borders.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | GT Super | 7.5rem | 400 | 1 | -0.055em | Homepage hero headlines |
| section-display | GT Super | 5.3125rem | 400 | 1.035 | -0.055em | Section heroes, publishing CTA |
| card-headline | GT Super | 2rem | 400 | 1.125 | -0.035em | Feature card titles |
| body | Sohne | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, general content |
| body-large | Sohne | 1.25rem | 400 | 1.4 | 0 | Hero subheadings, lead paragraphs |
| body-small | Sohne | 0.875rem | 400 | 1.43 | 0 | Search inputs, compact descriptions |
| label | Sohne | 0.875rem | 500 | 1.43 | 0 | Category headings, topic pills, navigation |
| navigation | Sohne | 0.875rem | 400 | 1.43 | 0 | Header links, footer links |
| button | Sohne | 0.875rem | 400 | 1.43 | 0 | Button labels, CTAs |

The typographic system pairs two distinct families. GT Super, a sharp, high-contrast serif, handles all display and headline duties at large sizes with tight negative tracking that creates a refined, editorial density. Sohne, a clean grotesque sans-serif, manages all functional and body text with neutral proportions and open leading for sustained reading. The weight range is intentionally narrow: Regular and Medium weights suffice for the entire system, with hierarchy established through size and family contrast rather than boldness.

The source materials also reference several system and fallback families that appear in the platform's font stack: Applesystem, Arial, Times, and Contentsansseriffont serve as platform fallbacks and system UI defaults. Sohne-Buch and Klim Type Foundry-Not Licensed For Desktop Use represent variant sources and licensing states for the Sohne family. GT Super is attributed to its designers and vendor as listed in the source materials. Sohne is attributed to Kris Sowersby, Noe Blanco, Dave Foster, with Klim Type Foundry as vendor. Verify licensing for these families before production use.

## Layout

The layout system favors centered, single-column compositions for marketing content and multi-column grids for functional directories. Marketing heroes occupy the full viewport width with generous vertical padding, typically 5rem to 6.25rem, placing large display type left-aligned or centered against the warm cream ground. The homepage hero pairs the headline with an asymmetric illustration on the right, while the writing landing page centers both headline and call-to-action for direct focus.

Functional pages like the topic explorer use a contained width with horizontal padding of 1.5rem to 2rem, expanding to a three-column directory grid below a full-width search interface. The topic directory organizes categories in equal columns with nested link lists, using consistent vertical spacing of 1.5rem between major sections and 0.5rem between individual links.

Cards appear in horizontal rows with 1.5rem gutters, each card receiving 3rem internal padding. The card grid on the writing page sits on the warm cream surface, with cards themselves rendered in pure white to create subtle elevation without shadows.

Section spacing follows a clear rhythm: 5rem between major content blocks, 3rem between related elements within a block, and 1rem to 1.5rem for tight groupings of text and interactive elements. Horizontal margins vary by context: marketing pages use wider side margins of 4rem, while functional pages compress to 1.5rem for maximum content area.

## Visual language

Medium's visual character is defined by restraint and editorial confidence. The interface avoids decorative excess, relying instead on precise typography, generous whitespace, and carefully placed line illustrations. Marketing surfaces introduce a warm, human quality through hand-drawn botanical and geometric illustrations in the brand green, which contrast with the otherwise austere typographic environment.

The illustration style is spare and linear: black ink-like lines with selective green fills, appearing as single large elements rather than scattered decorations. These illustrations occupy asymmetric positions, balancing the heavy left-aligned serif headlines without competing for attention.

Border treatments are minimal and functional. Single-pixel horizontal rules in light gray separate sections, while dark borders define active and interactive states. Rounded corners appear only on interactive elements: pills for topics and buttons, modest 0.75rem radius for cards. No border-radius appears on images or primary content containers.

The overall density is low. Text blocks breathe with ample line height and paragraph spacing. Even the topic directory, which contains hundreds of links, maintains visual calm through consistent indentation, muted link colors, and clear category headings.

## Components

### Primary button

- Anatomy: Text label centered within a fully rounded pill container
- Surface and text color: Dark fill (#242424) with white text, or white fill with dark border for secondary variant
- Typography: Sohne at 0.875rem, Regular weight
- Shape: Full pill border radius (9999px)
- Spacing: 0.5rem vertical padding, 1.25rem horizontal padding
- Composition: Inline placement following headlines or within navigation bars
- Variants: Dark fill (primary), white fill with dark border (secondary), green text link (tertiary)

### Topic pill

- Anatomy: Text label within a rounded pill with optional icon prefix
- Surface and text color: Light gray fill (#F9F9F9) with black text in default state; white fill with black border in active state
- Typography: Sohne at 0.875rem, Medium weight
- Shape: Full pill border radius
- Spacing: 0.375rem vertical padding, 1rem horizontal padding
- Composition: Horizontal scrollable row or wrapping flex container
- Variants: Default (gray), Active (white with border), Action (green text link)

### Feature card

- Anatomy: Line illustration at top, serif headline below, sans-serif description paragraph beneath
- Surface and text color: White card on warm cream ground; black text throughout
- Typography: GT Super at 2rem for headline, Sohne at 1rem for body
- Shape: 0.75rem border radius
- Spacing: 3rem internal padding, 1.5rem gap between cards in row
- Composition: Equal-width columns in horizontal row, vertically top-aligned

### Search input

- Anatomy: Magnifying glass icon prefix with placeholder text
- Surface and text color: Light gray background (#F2F2F2) with dark placeholder text
- Typography: Sohne at 0.875rem
- Shape: Full pill border radius
- Spacing: 0.625rem vertical padding, 1.25rem right padding
- Composition: Centered below page headline, full width within content container

### Topic directory

- Anatomy: Category heading in bold sans-serif, followed by nested list of topic links in muted gray
- Surface and text color: White background, black headings, gray links (#6B6B6B)
- Typography: Sohne Medium at 1rem for headings, Sohne Regular at 1rem for links
- Shape: No border radius on container
- Spacing: 1.5rem between category blocks, 0.5rem between individual links
- Composition: Three equal columns on desktop, single column on narrow viewports
- Variants: Expandable sections with "Show all" disclosure links in green

### Header navigation

- Anatomy: Logo left, text links center-right, pill button far right
- Surface and text color: Transparent or white background, black text, dark pill for primary CTA
- Typography: Sohne at 0.875rem for links, same for button label
- Shape: No border on navigation container; pill radius on CTA only
- Spacing: 1.5rem horizontal padding, 1rem gap between links
- Composition: Flex row with space-between alignment

## Responsive behavior

The system adapts through scale reduction and column stacking rather than layout transformation. The homepage hero headline reduces from 7.5rem to approximately 5.3rem on narrower viewports, maintaining left alignment and illustration pairing. The topic directory collapses from three columns to two, then to a single column with maintained category grouping.

Marketing cards stack vertically with full-width occupation on mobile, preserving internal padding and illustration scale. Navigation compresses to essential links plus a menu trigger, though the exact breakpoint is not visible in the supplied materials.

Typography does not change family or weight at smaller sizes; only scale and line length adjust. The generous line heights in body text accommodate narrower measures without reflow issues.

## Practical implementation guidance

### Preserve
- The strict serif/sans-serif pairing: GT Super for display, Sohne for everything functional
- The warm cream (#F7F4ED) as a marketing surface distinct from white content pages
- Full pill radius on all interactive elements; no partial rounding
- Single-pixel borders in light gray for section separation
- The green accent (#1A8917) for active states and links only, never for primary text or backgrounds
- Generous vertical padding (5rem+) on marketing heroes

### Avoid
- Introducing additional colors beyond the monochrome-plus-green palette
- Using GT Super at small sizes or for body text
- Adding box shadows or gradients to simulate depth
- Rounding corners on images or primary content containers
- Reducing whitespace to increase information density

### Recommended build order
1. Establish the typographic foundation with Sohne at 1rem body and GT Super at display sizes
2. Implement the color palette with warm cream and white as distinct surface tokens
3. Build the pill button component as the primary interactive element
4. Create the topic pill and directory grid for functional pages
5. Assemble the marketing hero with headline, subhead, and CTA
6. Add feature cards with illustration placeholders
7. Implement header navigation with logo and pill CTA

### Accessibility
- Ensure the green action color (#1A8917) meets contrast requirements when used for text; the dark ink colors provide safer default link colors
- Maintain the generous line heights (1.4–1.5) for body text to support readability at all sizes
- Use the full pill radius consistently so interactive elements are immediately recognizable
- Preserve clear focus indicators on pill buttons and topic links, as the flat design provides no other affordance for keyboard navigation

## Scope note

This guide covers the marketing and topic-exploration surfaces of Medium's platform. Article reading pages, mobile layouts, dark mode, and interactive states such as hover, focus, loading, and error are not represented in the supplied materials. The writing interface and member paywall flows are likewise outside the current scope.
