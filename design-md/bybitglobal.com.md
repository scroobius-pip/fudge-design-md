# How bybitglobal.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bybitglobal.com-design)

Last updated: 2026-08-10

## Captured pages

[![Referral modal with dark surface, orange gradient card, social share buttons, and QR code on black background](https://pin.fontofweb.com/3461?format=jpg)](https://design.withfudge.com/share/pin-3461)

[Referral modal with dark surface, orange gradient card, social share buttons, and QR code on black background](https://design.withfudge.com/share/pin-3461)

[![Hero section with orange gradient glow, centered white display text, and rounded orange CTA button on black](https://pin.fontofweb.com/3460?format=jpg)](https://design.withfudge.com/share/pin-3460)

[Hero section with orange gradient glow, centered white display text, and rounded orange CTA button on black](https://design.withfudge.com/share/pin-3460)

[![Feature card showing Bybit Card product photography with pill tags, orange text link, and 3D metallic ring decoration](https://pin.fontofweb.com/3459?format=jpg)](https://design.withfudge.com/share/pin-3459)

[Feature card showing Bybit Card product photography with pill tags, orange text link, and 3D metallic ring decoration](https://design.withfudge.com/share/pin-3459)

[![Trading fee table with tiered VIP rows, orange accent links, and dark card surface with subtle borders](https://pin.fontofweb.com/3458?format=jpg)](https://design.withfudge.com/share/pin-3458)

[Trading fee table with tiered VIP rows, orange accent links, and dark card surface with subtle borders](https://design.withfudge.com/share/pin-3458)

## Overview

The Bybit Global Mantle landing page presents a dark, immersive environment built around a near-black canvas with warm orange accent lighting. The visual system prioritizes high contrast between white typography and the dark background, using orange as the single energetic accent for calls-to-action, links, and atmospheric glow effects. The page promotes the Mantle (MNT) token through a series of feature sections that alternate between editorial imagery, data tables, and benefit cards. The overall impression is premium and technical—suited to a crypto-native audience—with careful attention to surface hierarchy through subtle variations in dark gray values rather than heavy borders or shadows. Product photography and 3D rendered elements receive generous space, while UI components maintain a restrained, utilitarian precision.

## Colors

The color system is built on a dark-mode foundation with a single warm accent. The near-black canvas creates immersion, while carefully stepped surface elevations provide subtle depth. Orange appears consistently as the action color, from buttons to text links to atmospheric gradient glows.

| token | value | use |
|---|---|---|
| action | #F7A23B | Primary buttons, text links, accent glow, interactive highlights |
| action-hover | #E8942E | Button hover states, link hover |
| canvas | #000000 | Page background, deepest surface |
| surface | #141414 | Cards, table rows, secondary panels |
| surface-elevated | #1A1A1A | Modals, elevated panels, referral card background |
| ink | #FFFFFF | Primary text, headings, body copy on dark |
| muted-ink | #A0A0A0 | Secondary text, captions, table sub-values |
| border | #2A2A2A | Visible dividers, card outlines |
| border-subtle | #1F1F1F | Table row separators, faint structural lines |

The orange accent (#F7A23B) functions as the sole warm color against the cool dark palette. It appears in gradient form in hero sections, creating an atmospheric glow that rises from the bottom edge of the viewport. On interactive elements, it provides clear affordance without competing with the product imagery. White text maintains excellent readability across all dark surfaces, while muted gray handles supporting information and data table secondary values.

## Typography

The type system uses IBM Plex Sans as the sole text family, with Inter available for potential interface elements. Weights range from Regular through Medium to Semibold, supporting a clear hierarchy without excessive variation. Display sizes are restrained rather than oversized, fitting the technical precision of the brand.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | IBM Plex Sans | 3rem | 400 | 1.1 | -0.01em | Hero headlines, major section titles |
| section-display | IBM Plex Sans | 2.5rem | 400 | 1.15 | -0.01em | Section headings, feature titles |
| body | IBM Plex Sans | 1rem | 400 | 1.5 | 0 | Primary body text, descriptions |
| body-small | IBM Plex Sans | 0.875rem | 400 | 1.5 | 0 | Table data, captions, secondary content |
| label | IBM Plex Sans | 0.75rem | 500 | 1.25 | 0.05em | Tags, category labels, uppercase section markers |
| navigation | IBM Plex Sans | 0.75rem | 400 | 1.25 | 0 | Footer links, utility navigation |

IBM Plex Sans was designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen, and is available from Bold Monday. Inter was designed by Rasmus Andersson. Verify licensing for these families before production use. The label token uses positive letter-spacing and medium weight to create clear visual separation from body text, appropriate for uppercase category markers like "USE" and "HOLD" seen in section headers.

## Layout

The page employs a centered, single-column editorial layout with generous vertical breathing room. Sections stack with substantial spacing between them, allowing each feature or benefit to command full attention. Content max-width appears constrained to approximately 1200px, with internal elements often centered rather than left-aligned.

The hero section uses full-bleed atmospheric treatment: the orange gradient rises from the bottom edge while text remains centered in the upper-middle portion of the viewport. This creates a stage-like presentation that avoids the conventional split-screen or side-by-side hero pattern.

Feature sections alternate between asymmetric compositions—product photography on one side with text on the other—and centered data presentations. The trading fee section demonstrates a split layout with editorial content left and a structured data table right, both contained within a rounded card surface that lifts above the canvas.

Spacing follows a clear modular system based on 0.25rem units. Section spacing of 6rem creates dramatic vertical rhythm, while 1.5rem handles content gaps within components. Card padding at 2rem provides comfortable internal margins without excessive whitespace. The 3D decorative elements—metallic rings, rendered cards—break the rectangular grid intentionally, extending beyond their containers to create visual dynamism.

## Visual language

The visual identity balances technical precision with premium warmth. The orange glow effect is the signature atmospheric treatment, appearing in hero sections and behind product imagery to create depth and emotional resonance. This glow is not a flat color but a radial or linear gradient that fades into the black canvas, suggesting energy and momentum.

Product photography receives high production value: the Bybit Card is shot with soft studio lighting against neutral gray, while 3D rendered elements use metallic materials with realistic reflections. These elements are presented with rounded corners that echo the UI component language, creating cohesion between photography and interface.

Iconography appears minimal and functional. Social share buttons in the referral modal use circular colored backgrounds with white glyphs—Facebook blue, WhatsApp green, LinkedIn blue, Line green, Telegram blue, X dark gray. The "More" option uses a neutral dark circle with ellipsis. These follow platform conventions rather than custom design, ensuring immediate recognition.

Data visualization favors clean tables over charts. The VIP tier table uses subtle row separation, small circular tier badges with numbers, and color-coded discount indicators (green checkmarks with orange "MNT" labels). This prioritizes scannable precision over decorative presentation.

## Components

### Primary Action Button

- **Anatomy**: Rounded pill shape containing centered text label
- **Surface**: Solid orange (#F7A23B) background with black text
- **Typography**: Body token, medium weight implied by button context
- **Shape**: Full pill border-radius (9999px)
- **Spacing**: Generous horizontal padding (approximately 2rem) with moderate vertical padding (approximately 0.875rem)
- **Composition**: Centered within its container, often the sole interactive element in a hero section
- **Variants**: Appears in hero at larger scale; footer and modal contexts may use smaller sizing

### Feature Card

- **Anatomy**: Rounded rectangular container with internal image and text stack
- **Surface**: Dark surface (#141414) with subtle border treatment
- **Typography**: Section-display for headline, body for description, label for category tags
- **Shape**: 1rem border-radius
- **Spacing**: 2rem internal padding with comfortable gaps between image and text
- **Composition**: Asymmetric layouts alternate image left/text right; centered text stacks for data sections
- **Variants**: Editorial cards with photography; data cards with tables; benefit cards with iconography

### Referral Modal

- **Anatomy**: Overlay panel with header, promotional card preview, form fields, social share grid, and close control
- **Surface**: Elevated dark surface (#1A1A1A) with subtle shadow against darker backdrop
- **Typography**: Body for labels, body-small for helper text, label for section headers
- **Shape**: 0.75rem border-radius for panel; 1rem for internal card preview
- **Spacing**: 1.5rem panel padding with structured internal spacing
- **Composition**: Two-column layout with promotional material left and form/social actions right
- **States**: Close button (X) in upper right; copy icon for referral code; social buttons in two-row grid

### Data Table

- **Anatomy**: Column headers with tier labels, row-based data with circular badges, nested value pairs
- **Surface**: Alternating or uniform dark rows (#141414) with subtle bottom borders (#1F1F1F)
- **Typography**: Body-small for all data; label for column headers; muted-ink for secondary values
- **Shape**: Rounded container (1rem) with internal rows that may have reduced or no radius
- **Spacing**: Comfortable cell padding maintaining scanability
- **Composition**: Left column for tier identification, center and right columns for spot and futures rates
- **Variants**: VIP tiers 1-5 plus Non-VIP and Supreme VIP; each with circular numbered/symbol badge

### Text Link with Arrow

- **Anatomy**: Inline text with right-pointing arrow icon
- **Surface**: Transparent background
- **Typography**: Body token in orange (#F7A23B)
- **Shape**: No border-radius (inline element)
- **Spacing**: Tight padding matching text flow
- **Composition**: Appears in pairs or groups below feature descriptions
- **States**: Hover likely shifts to action-hover color; arrow may translate right on interaction

### Tag/Pill

- **Anatomy**: Rounded inline label with text
- **Surface**: Transparent with subtle border (#2A2A2A)
- **Typography**: Label token, often white text
- **Shape**: Full pill border-radius
- **Spacing**: Compact horizontal and vertical padding (approximately 0.25rem vertical, 0.75rem horizontal)
- **Composition**: Horizontal row of tags above feature headlines
- **Variants**: "Bybit Card", "Bybit Pay" as seen in feature section

## Responsive behavior

The layout appears optimized for desktop viewport widths, with centered content and generous margins. At narrower widths, the asymmetric feature layouts should stack vertically, with product imagery preceding text content to maintain visual flow. The data table requires horizontal scroll or reflowed card presentation on small screens, as the multi-column VIP structure cannot compress indefinitely.

The hero section's centered text and single button adapt naturally to reduced widths, though the orange gradient glow may need vertical adjustment to avoid overwhelming the composition. Modal dialogs should transition to full-screen or near-full-screen on mobile, with social buttons rearranging to fit available width.

Typography scales down proportionally: hero-display may reduce to 2rem on tablet and 1.75rem on mobile, while maintaining the same weight and leading ratios. Body text remains at 1rem for readability minimum. Touch targets for buttons and social icons must maintain at least 44px minimum dimension regardless of viewport.

## Practical implementation guidance

### Preserve
- The dark canvas with warm orange accent as the sole color energy
- Generous section spacing and centered editorial layouts
- Rounded pill buttons with high-contrast orange fill
- Subtle surface elevation through gray value steps rather than heavy shadows
- Premium product photography with neutral backgrounds
- Clean data tables with minimal visual noise

### Avoid
- Adding additional accent colors beyond the orange system
- Heavy borders or outlines that compete with the dark surfaces
- Left-aligning hero content; the centered stage presentation is signature
- Flat orange backgrounds without gradient glow treatment in hero contexts
- Small touch targets for social share buttons

### Recommended Build Order
1. Establish the dark canvas and surface color tokens
2. Implement IBM Plex Sans with the full type scale
3. Build the pill button component with orange fill
4. Create the card container with proper radius and padding
5. Implement hero section with gradient glow and centered text
6. Build feature sections with asymmetric layouts
7. Create the data table with VIP tier structure
8. Add modal overlay with referral flow
9. Implement social share button grid

### Accessibility
- Ensure orange text on dark backgrounds meets WCAG AA contrast (4.5:1 for normal text, 3:1 for large text)
- Provide focus indicators that are visible against dark surfaces
- Add aria-labels to icon-only social share buttons
- Consider reduced-motion preferences for any gradient or glow animations
- Maintain readable table structure with proper header associations for screen readers

## Scope note

This guide covers the Mantle token landing page visible in the supplied images, including hero, feature sections, data table, and referral modal. Navigation header, footer beyond the visible strip, other site pages, mobile breakpoints, and interactive states such as form validation or loading are not represented. Measurements are practical adaptation targets derived from visual inspection.
