# How extropic.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/extropic.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with dark cinematic background, amber gradient display type reading THERMODYNAMIC, white serif subhead COMPUTING, and announcement card with gold accent border](https://pin.fontofweb.com/4188?format=jpg)](https://design.withfudge.com/share/pin-4188)

[Homepage hero with dark cinematic background, amber gradient display type reading THERMODYNAMIC, white serif subhead COMPUTING, and announcement card with gold accent border](https://design.withfudge.com/share/pin-4188)

[![Homepage hero alternate view showing hardware device in warm lighting, navigation bar with pill-shaped container, and featured video card with gold left border accent](https://pin.fontofweb.com/4187?format=jpg)](https://design.withfudge.com/share/pin-4187)

[Homepage hero alternate view showing hardware device in warm lighting, navigation bar with pill-shaped container, and featured video card with gold left border accent](https://design.withfudge.com/share/pin-4187)

[![Footer section with deep maroon background, repeating abstract symbol pattern in muted red, navigation links, email capture field with gold border, and legal footer text](https://pin.fontofweb.com/4186?format=jpg)](https://design.withfudge.com/share/pin-4186)

[Footer section with deep maroon background, repeating abstract symbol pattern in muted red, navigation links, email capture field with gold border, and legal footer text](https://design.withfudge.com/share/pin-4186)

## Overview

Extropic presents a dark, immersive visual system built around thermodynamic computing hardware. The design pairs cinematic photography of physical devices with warm, energy-evoking typography. The homepage opens with full-bleed hardware imagery bathed in amber and gold light, establishing immediate material credibility. Display typography uses a distinctive geometric sans with gradient color treatments that echo heat and energy states, while serif subheads provide classical contrast. The overall mood is serious, scientific, and premium—positioning advanced hardware research with the gravitas of institutional science and the allure of breakthrough technology. Navigation sits in a subtle pill-shaped container that floats above imagery without competing for attention. The footer reveals a deeper layer of the brand identity through a repeating abstract symbol pattern in muted red against deep maroon, creating a tapestry-like texture that rewards closer inspection.

## Colors

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary background for hero sections and page base |
| ink | #FFFFFF | Primary text on dark backgrounds, hero subheads |
| accent | #C4A35A | Gold details: card borders, focus states, email field outline, active navigation |
| surface-deep | #1A0505 | Deep maroon for footer background and announcement cards |
| surface-warm | #2D0A0A | Slightly lighter maroon for pattern layers and secondary surfaces |
| muted | #8B6914 | Desaturated gold for secondary labels and inactive states |

The color system operates in a dark-first mode with warm undertones. Black serves as the primary canvas, allowing hardware photography to dominate visual hierarchy. White provides crisp contrast for readable body text and elegant serif display. The gold accent (#C4A35A) functions as the signature brand color, appearing in thin borders, underlines, and interactive outlines—never as large fills. Deep maroon surfaces (#1A0505, #2D0A0A) create depth in footer areas and card backgrounds, suggesting the infrared heat spectrum that connects to the thermodynamic computing theme. The muted gold (#8B6914) appears in secondary labels and pattern elements where full accent brightness would compete with photography. No light mode is visible in the supplied material; the system assumes persistent dark presentation.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Rephlex Trial | 4rem | 400 | 0.9 | 0.02em | Primary display headlines with gradient treatment |
| hero-subhead | Kessler | 3.5rem | 400 | 1 | -0.01em | Large serif subheads beneath display type |
| body | Suisse Bp Intl | 1rem | 400 | 1.5 | 0 | Paragraph text and descriptions |
| label | Suisse Intl Mono | 0.75rem | 400 | 1.2 | 0.05em | Category tags, card labels, small metadata |
| navigation | Suisse Intl Mono | 0.75rem | 400 | 1 | 0.08em | Primary navigation and footer links |

The typographic system pairs four distinct families across functional roles. Rephlex Trial, designed by Nico Schweizer with Luca Pellegrini for Lineto, provides the distinctive geometric display face with squared curves and technical character—ideal for "THERMODYNAMIC" and similar headlines. Kessler, designed by Alaric Garnier for Production Type, supplies the high-contrast serif used for "COMPUTING" and similar subheads, bringing editorial refinement that balances the display geometry. Suisse Bp Intl, designed by Ian Party for Bp Swiss Typefaces, handles body text with clean neo-grotesque neutrality. Suisse Intl Mono, from Swiss Typefaces, serves all interface labels, navigation, and metadata with monospace clarity that reinforces the engineering credibility.

All font sizes are whole-number multiples of 0.25rem (4px). The display hierarchy steps from 3.5rem to 4rem, while interface text settles at 0.75rem. Verify licensing for these families before production use.

## Layout

The layout follows a full-bleed immersive model with floating interface elements. The homepage hero occupies the entire viewport with hardware photography as the dominant layer. Content anchors to the lower-left quadrant, preserving upper and right areas for the photographic subject. Navigation floats at the top edge, centered horizontally within a pill-shaped container with semi-transparent dark fill and subtle light border.

The footer presents a dramatic shift to pattern-dominated space. A dense grid of abstract symbols fills the entire background, with navigation links distributed across the top edge in equal horizontal intervals. The email capture field and legal footer occupy the bottom edge, creating a stable base. This creates a three-zone vertical rhythm: immersive hero (full viewport), content sections (not visible in supplied images), and patterned footer (full width, deep color).

Spacing follows a 0.25rem base unit. Section-level padding uses 6rem for major vertical breaks. Component internal spacing uses 1.5rem for comfortable text blocks, 0.5rem for tight label-to-content pairings. The announcement and featured cards use a consistent left-border accent treatment with 0.25rem visible gold line, creating horizontal rhythm without heavy containers.

## Visual language

The visual language merges scientific instrumentality with cinematic warmth. Photography dominates—specifically shallow-focus hardware shots with dramatic side-lighting that reveals metallic surfaces and precision engineering. The gradient typography treatment on display headlines mimics the color temperature shifts visible in the photography, creating direct visual rhyme between text and image.

The abstract symbol pattern in the footer introduces a secondary visual system: repeating geometric marks that suggest circuit diagrams, thermal maps, or crystalline structures. These appear in muted red against deeper maroon, creating a moiré-like texture that shifts between decorative and meaningful depending on viewing distance. This pattern functions as brand wallpaper—identifiable without demanding primary attention.

Border treatments are consistently thin and precise. The gold left-border on cards measures as a hairline, approximately 1px, providing elegant containment without visual weight. The email capture field uses a complete gold outline at similar weight, making it the most prominent interactive element in the footer through outline alone. No shadows are visible; depth comes from photography, color layering, and the symbol pattern density.

## Components

### Hero Section

- **Anatomy**: Full-bleed background image, display headline with gradient fill, serif subhead in white, body description, optional announcement/featured card
- **Surface**: Background image with dark overlay gradient from bottom; text directly on image
- **Typography**: `{typography.hero-display}` for primary headline with warm gradient; `{typography.hero-subhead}` for secondary headline in white; `{typography.body}` for description
- **Shape**: Full viewport width and height
- **Spacing**: Content inset from left edge approximately 8rem, bottom-aligned with 6rem bottom padding
- **Composition**: Headlines stack vertically with tight leading; description sits below with 1.5rem separation; card floats to right or below depending on viewport

### Navigation Bar

- **Anatomy**: Logo mark left, horizontal link list right, both within pill-shaped container
- **Surface**: Semi-transparent black fill (approximately 40% opacity) with subtle white border (15% opacity)
- **Typography**: `{typography.navigation}` in all caps
- **Shape**: Pill radius (`{rounded.pill}`), height approximately 2.5rem
- **Spacing**: Internal horizontal padding 1.5rem, link spacing 2rem
- **Composition**: Centered horizontally near top edge, floating above hero content

### Announcement Card / Featured Card

- **Anatomy**: Label tag left, title right, thin left border accent
- **Surface**: `{colors.surface-deep}` background, `{colors.accent}` left border
- **Typography**: `{typography.label}` for category tag (ANNOUNCEMENT, FEATURED); `{typography.body}` for title
- **Shape**: Rectangular with sharp corners, 0.25rem left border visible
- **Spacing**: Internal padding 1rem horizontal, 0.75rem vertical; label and title separated by 1rem
- **Variants**: Announcement variant with "ANNOUNCEMENT" label; Featured variant with "FEATURED" label and action-oriented title

### Email Capture Field

- **Anatomy**: Text input with placeholder, full gold outline
- **Surface**: Transparent fill, `{colors.accent}` border
- **Typography**: `{typography.label}` for placeholder and input text
- **Shape**: Rectangular with sharp corners, 1px outline
- **Spacing**: Internal padding 0.75rem vertical, 1rem horizontal
- **Composition**: Centered or left-aligned in footer, width approximately 20rem

### Footer Pattern

- **Anatomy**: Repeating grid of abstract symbols, navigation links above, legal text below
- **Surface**: `{colors.surface-deep}` base, symbols in `{colors.surface-warm}` and muted red tones
- **Typography**: `{typography.navigation}` for section links; `{typography.label}` for legal copy
- **Spacing**: Symbol grid fills entire background; navigation links distributed with generous horizontal spacing; legal text clustered at bottom edges

## Responsive behavior

The supplied images show desktop presentation only. Based on the visible composition, several responsive adaptations are recommended. The hero content stack should maintain left alignment but reduce horizontal inset on narrower viewports, likely shifting from 8rem to 2rem. The display headline may require size reduction to maintain single-line or controlled two-line breaks; consider a 2.5rem minimum for Rephlex Trial to preserve character distinction. The navigation pill may need to collapse to a menu trigger on small screens, as the full link list would exceed narrow viewport widths.

The footer symbol pattern should scale tile size proportionally, maintaining density without introducing scroll-jacking. Navigation links in the footer should stack vertically on narrow screens rather than distributing horizontally. The email capture field should expand to full width with comfortable side margins on mobile.

## Practical implementation guidance

### Preserve
- The dark-first presentation with warm accent restraint
- Gradient headline treatment that echoes photographic color temperature
- Thin gold borders as the primary interactive and decorative accent
- Full-bleed hardware photography with shallow depth of field
- Monospace labels for all interface metadata and navigation
- The serif/display sans pairing for headline hierarchy

### Avoid
- Light backgrounds or high-key photography that would break the immersive mood
- Heavy drop shadows or dimensional effects—the system relies on photography for depth
- Rounded corners on cards and containers; keep the sharp rectangular language
- Multiple accent colors; gold carries all emphasis responsibility
- Large solid fills in accent color; use only for borders and outlines

### Recommended Build Order
1. Establish dark canvas and typography scale with Rephlex Trial and Kessler loaded
2. Implement hero section with full-bleed image and content positioning
3. Build navigation pill with semi-transparent treatment
4. Create announcement/featured card component with left-border accent
5. Develop footer with symbol pattern and email capture
6. Refine gradient headline treatment to match photographic warmth

### Accessibility
- Ensure gradient headlines maintain minimum 3:1 contrast against dark backgrounds; the amber-to-orange range may need adjustment for full WCAG AA compliance
- Provide text alternatives for the abstract symbol pattern if it conveys meaning
- Consider a reduced-motion option if the symbol pattern animates
- Maintain focus visibility on gold-outlined interactive elements with sufficient contrast shift

## Scope note

This guide covers the homepage hero, navigation, and footer surfaces visible in the supplied images. Interior page layouts, article content styling, motion behavior, and additional component states are not represented. Measurements are practical adaptation targets derived from visual estimation against the 0.25rem base unit. Mobile breakpoints, form validation states, and loading sequences require additional design exploration.
