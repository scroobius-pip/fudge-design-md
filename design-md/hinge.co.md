# How hinge.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hinge.co-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with full-bleed photography of a couple by a fountain, featuring the tagline 'The dating app designed to be deleted' in large white serif typography overlaid on the](https://pin.fontofweb.com/10069?format=jpg)](https://design.withfudge.com/share/pin-10069)

[Hero section with full-bleed photography of a couple by a fountain, featuring the tagline 'The dating app designed to be deleted' in large white serif typography overlaid on the](https://design.withfudge.com/share/pin-10069)

[![Dark footer section with Hinge logo, multi-column navigation links organized under Index, Resources, and Legal headings, plus copyright and language selector at the bottom.](https://pin.fontofweb.com/10070?format=jpg)](https://design.withfudge.com/share/pin-10070)

[Dark footer section with Hinge logo, multi-column navigation links organized under Index, Resources, and Legal headings, plus copyright and language selector at the bottom.](https://design.withfudge.com/share/pin-10070)

[![Header navigation bar with Mission, Impact, Labs links on the left, centered Hinge wordmark logo, and Newsroom, Careers on the right against a dark background.](https://pin.fontofweb.com/10068?format=jpg)](https://design.withfudge.com/share/pin-10068)

[Header navigation bar with Mission, Impact, Labs links on the left, centered Hinge wordmark logo, and Newsroom, Careers on the right against a dark background.](https://design.withfudge.com/share/pin-10068)

## Overview

Hinge's design system communicates a dating brand built on intentionality and real-world connection. The visual language balances editorial sophistication with approachable clarity through a stark two-mode color system: expansive light pages for content and deep black surfaces for immersive moments. The hero experience dominates with full-bleed lifestyle photography that captures candid, joyful interactions between people in natural settings. Typography creates clear hierarchy through contrast—an elegant serif display face carries emotional weight in headlines, while a geometric sans-serif handles all functional text with precision. The overall impression is confident but not cold, premium but accessible, with generous whitespace and restrained decoration letting photography and messaging breathe.

## Colors

The palette operates in two distinct modes that alternate across the page surface. Light mode uses an off-white canvas with near-black text for readable long-form content. Dark mode inverts this relationship, using pure black surfaces with warm white text for immersive sections including the hero, footer, and navigation overlay.

| token | value | use |
|---|---|---|
| ink | #1A1A1A | Primary text on light backgrounds; body copy, headings, and interactive elements in main content areas |
| canvas | #FFFEFD | Page background in light mode; text on dark surfaces; button fills on dark backgrounds |
| surface | #000000 | Hero section background; footer background; header navigation background; immersive dark sections |
| muted-ink | #484848 | Secondary text, captions, and supporting information on light backgrounds |
| muted-canvas | #A3A3A3 | Disabled or tertiary text states; subtle dividers and decorative elements |
| action | #1A1A1A | Primary button backgrounds in light mode; active navigation states |

The dark sections use pure black rather than a softened charcoal, creating maximum contrast with photography and making the white typography feel luminous. The off-white canvas (#FFFEFD) avoids the clinical quality of pure white, adding subtle warmth that complements the skin tones in lifestyle photography. No accent colors appear in the interface itself—color comes entirely from photography, which shows natural greens, blues, and warm neutrals from outdoor settings.

## Typography

Three type families appear in the system. Tiempos Headline, a contemporary serif designed by Kris Sowersby at Klim Type Foundry, carries display and headline duties with authority and warmth. Modern Era, designed by Omse for Omse Type, handles all body text, navigation, labels, and UI elements with clean geometric neutrality. Applesystem appears as a system font fallback at 14px in limited contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Tiempos Headline | 3.625rem | 600 | 1.18 | 0.005em | Hero headlines, major section titles; the brand's most expressive moments |
| body | Modern Era | 1rem | 400 | 1.5 | 0.01em | Paragraph text, descriptions, general content |
| body-bold | Modern Era | 1rem | 700 | 1.5 | 0em | Emphasized body text, footer category headings, active navigation items |
| label | Modern Era | 0.75rem | 700 | 1.25 | 0.01em | Buttons, tags, small functional labels |
| navigation | Modern Era | 1rem | 400 | 1.5 | 0.01em | Header and footer link lists |
| navigation-medium | Modern Era | 1rem | 500 | 1.5 | 0.01em | Selected or emphasized navigation items |

The hero display size of 58px (3.625rem) with its tight 68.44px line height creates a compact, impactful block of text that sits confidently over photography without dominating the image. The slight positive letter spacing (0.29px) adds refinement at this scale. Body text maintains a comfortable 16px with 24px line height and consistent 0.16px letter spacing for readability across long passages.

Modern Era is available in Regular (400), Medium (500), and Bold (700) weights. Tiempos Headline appears only in Semibold (600) in this system. Verify licensing for these families before production use. Modern Era is available from Omse Type; Tiempos Headline from Klim Type Foundry.

## Layout

The layout follows a centered, contained approach with consistent horizontal padding and generous vertical rhythm. The base spacing unit is 2px (0.125rem), from which all measurements derive as whole-number multiples.

**Page structure:** The header sits fixed or sticky at the viewport top with 32px horizontal padding. Content sections flow vertically with alternating light and dark backgrounds. The hero section breaks the container model with full-bleed photography edge-to-edge. The footer uses substantial top padding (144px) to create breathing room after content, with 64px bottom padding and 32px horizontal padding matching the header.

**Content width:** Text and navigation elements align to a consistent maximum width, creating a clear central column that keeps reading comfortable on wide screens. The hero headline breaks this convention, positioning large text at the left edge over photography for dramatic effect.

**Spacing scale:**
- 2px (0.125rem): Micro-adjustments, icon offsets
- 6px (0.375rem): Tight internal gaps
- 8px (0.5rem): Compact element spacing
- 12px (0.75rem): Button padding vertical, small margins
- 16px (1rem): Standard gap, button padding horizontal, navigation link padding
- 24px (1.5rem): Comfortable component padding, footer link margins
- 32px (2rem): Section horizontal padding, content gutters
- 64px (4rem): Footer bottom padding, medium section breaks
- 72px (4.5rem): Header offset compensation, section top padding
- 112px (7rem): Large section vertical padding
- 144px (9rem): Footer top padding, major section separators

## Visual language

Photography drives the emotional core of the design. Images show candid, unposed moments between people in vibrant outdoor settings—parks, fountains, city streets with natural light. The photography style favors medium shots that show environment and context, not tight portraits. Colors in images tend toward natural greens, warm skin tones, and urban neutrals, which harmonize with the restrained interface palette.

The interface itself is deliberately minimal. No borders separate sections except a single 1px hairline (#484848) that appears in specific content divisions. No shadows, gradients, or decorative shapes appear. Rounded corners are absent—buttons, containers, and the overall composition favor crisp right angles that feel confident and modern.

Iconography appears sparingly: social media links in the footer use simple outlined icons, and a small globe icon accompanies the language selector. These inherit the current text color and maintain the same stroke weight as body text.

The Hinge wordmark logo appears centered in the header and left-aligned in the footer, rendered in white on dark surfaces. It uses a distinctive custom letterform with a flowing, connected quality that contrasts with the geometric typefaces elsewhere.

## Components

### Site header

- **Anatomy:** Horizontal bar with left navigation cluster (Mission, Impact, Labs), centered Hinge wordmark logo, right navigation cluster (Newsroom, Careers)
- **Surface:** Background color `{colors.surface}` (pure black)
- **Typography:** Navigation links use `{typography.navigation}`; logo is a custom SVG mark
- **Spacing:** 32px horizontal padding; navigation links have 12px vertical and 24px horizontal padding with -24px margin compensation for flush alignment
- **Composition:** Flexbox row with space-between distribution; logo absolutely centered or flex-centered

### Hero section

- **Anatomy:** Full-viewport or near-full-viewport container with background photography, overlaid headline text at lower left, trademark symbol
- **Surface:** Background is full-bleed photography; no overlay or scrim
- **Typography:** Headline uses `{typography.hero-display}` in `{colors.canvas}`; trademark uses smaller superscript styling
- **Composition:** Text positioned at lower left quadrant, allowing the photographic subject to occupy center-right; generous padding from edges

### Content sections

- **Anatomy:** Alternating light and dark sections with centered content blocks
- **Surface:** Light sections use `{colors.canvas}` background with `{colors.ink}` text; dark sections use `{colors.surface}` with `{colors.canvas}` text
- **Spacing:** 112px vertical padding for major sections; 32px horizontal padding

### Footer

- **Anatomy:** Large dark section with left-aligned Hinge logo, multi-column link grid organized by category (Index, Resources, Legal), copyright and language selector at bottom
- **Surface:** Background `{colors.surface}`; all text `{colors.canvas}`
- **Typography:** Category headings use `{typography.body-bold}`; links use `{typography.navigation}`; copyright and legal use smaller body size with `{colors.muted-canvas}`
- **Spacing:** 144px top padding, 64px bottom padding, 32px horizontal padding; link columns have 24px gaps
- **Composition:** Logo occupies left portion; three link columns (Index, Resources, Legal) fill right portion; bottom row spans full width

### Navigation links

- **Anatomy:** Text link with optional active state
- **Typography:** Default `{typography.navigation}`; active or emphasized items use `{typography.navigation-medium}` or `{typography.body-bold}`
- **Spacing:** 12px vertical padding, 24px horizontal padding for header items; 8px bottom margin for stacked footer links
- **States:** Default is `{colors.canvas}` on dark or `{colors.ink}` on light; no visible hover state in static view

### Primary button

- **Anatomy:** Text label with optional icon; appears in header and content areas
- **Surface:** Background `{colors.canvas}` on dark surfaces; text `{colors.surface}`
- **Typography:** `{typography.label}` (12px Bold)
- **Spacing:** 12px vertical padding, 24px horizontal padding; icon has 2px bottom margin and 6px left margin when following text
- **Shape:** No border radius; sharp rectangular corners

## Responsive behavior

The design appears optimized for desktop viewport widths. The header navigation shows all items inline without collapse. The hero headline scales to fit available width while maintaining its left-edge anchoring. Footer columns maintain their three-column grid.

For narrower viewports, consider these adaptations: stack footer columns vertically with category headings as expandable sections; reduce hero headline size while maintaining the 58px/68.44px ratio; convert header navigation to a hamburger menu with the centered logo preserved; maintain 32px horizontal padding down to small breakpoints, then reduce to 16px for very narrow screens.

The high-contrast dark hero section will remain effective at all sizes, but verify that text maintains sufficient contrast against the most luminous areas of photography at smaller scales where text may overlap more of the image.

## Practical implementation guidance

### Preserve
- The stark alternation between light and dark sections—this rhythm defines the brand experience
- The serif/sans-serif hierarchy: Tiempos Headline for emotional headlines, Modern Era for everything functional
- Full-bleed photography without overlays, gradients, or scrims
- Sharp corners throughout; no border radius on any interactive element
- The centered header logo with balanced left/right navigation clusters
- Generous vertical spacing, especially the 144px footer top padding

### Avoid
- Adding accent colors to the interface palette; let photography provide color
- Rounded buttons or cards; they contradict the system's crisp geometry
- Drop shadows or elevation effects; the flat, confident surfaces are intentional
- Pure white (#FFFFFF) instead of the warm off-white #FFFEFD
- Tight letter spacing on body text; the 0.16px positive tracking is part of the refined feel

### Recommended build order
1. Establish the two-mode color system with CSS custom properties
2. Implement Modern Era at 16px/24px as the foundational body style
3. Add Tiempos Headline at 58px/68.44px for hero display
4. Build the header with centered logo and flex navigation
5. Create the hero section with full-bleed image and positioned text
6. Implement alternating section backgrounds with consistent 112px vertical padding
7. Build the multi-column footer with correct category groupings
8. Add buttons and fine-tune spacing micro-adjustments

### Accessibility
- Ensure hero text has sufficient contrast against all areas of the background photography; consider a subtle text-shadow or slight darkening if needed
- Maintain the visible focus indicators for keyboard navigation; the high-contrast modes help but explicit focus styles are essential
- The 12px label text should be used sparingly and never for critical information; verify WCAG contrast ratios for this size
- Language selector and legal links in the footer use muted colors; verify these meet minimum contrast requirements

## Scope note

This guide covers the Hinge homepage including the header navigation, hero section with lifestyle photography, alternating content sections, and multi-column footer. Mobile layouts, interactive states, form elements, and interior pages are not represented in the supplied material. The spacing values derive directly from the implemented interface with no estimation required.
