# How withdavid.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/withdavid.ai-design)

Last updated: 2026-08-10

## Captured pages

[![News page with left sidebar navigation, large serif page title, and funding announcement cards with colorful bar graphics on warm off-white background](https://pin.fontofweb.com/5460?format=jpg)](https://design.withfudge.com/share/pin-5460)

[News page with left sidebar navigation, large serif page title, and funding announcement cards with colorful bar graphics on warm off-white background](https://design.withfudge.com/share/pin-5460)

[![Contact page with left sidebar, stacked form fields with light placeholders, dark submit pill button, and colorful striped illustration on the right](https://pin.fontofweb.com/5459?format=jpg)](https://design.withfudge.com/share/pin-5459)

[Contact page with left sidebar, stacked form fields with light placeholders, dark submit pill button, and colorful striped illustration on the right](https://design.withfudge.com/share/pin-5459)

[![Process step section with roman numeral labels, serif headings, muted body text, and abstract circular striped artwork with gradient accent on warm cream background](https://pin.fontofweb.com/5458?format=jpg)](https://design.withfudge.com/share/pin-5458)

[Process step section with roman numeral labels, serif headings, muted body text, and abstract circular striped artwork with gradient accent on warm cream background](https://design.withfudge.com/share/pin-5458)

[![Dark brown footer section with outlined icons, numbered steps, and a light pill button on deep espresso background with warm gray text](https://pin.fontofweb.com/5457?format=jpg)](https://design.withfudge.com/share/pin-5457)

[Dark brown footer section with outlined icons, numbered steps, and a light pill button on deep espresso background with warm gray text](https://design.withfudge.com/share/pin-5457)

## Overview

David AI presents itself as a premium provider of audio datasets for speech and conversational AI. The visual system communicates technical credibility through editorial restraint rather than complexity. A warm off-white canvas dominates, letting content breathe while a distinctive serif typeface—Besley—lends intellectual weight to headlines and page titles. Inter handles all functional text with quiet efficiency. The overall impression is of a research-forward company that values clarity and precision: generous margins, uncluttered navigation, and a consistent left-sidebar layout that anchors every page. Color appears sparingly, reserved for data visualizations and accent moments, while the core interface relies on subtle tonal shifts between warm grays and near-black ink. The design avoids trendy gradients or heavy shadows, preferring flat planes of color and crisp typographic hierarchy to establish trust with technical buyers and researchers.

## Colors

The palette is intentionally minimal, built on warm neutrals with a single near-black serving both text and interactive roles. Dark sections invert this relationship for dramatic contrast in calls-to-action and footer areas.

| token | value | use |
|---|---|---|
| ink | #1C1917 | Primary text, active navigation, button fills, logo mark |
| muted-ink | #78716C | Secondary text, inactive navigation, placeholders, captions |
| canvas | #FAFAF9 | Page background, primary reading surface |
| surface | #F5F5F4 | Subtle content bands, card backgrounds on light pages |
| surface-warm | #EFEBE6 | Featured cards, announcement panels, illustration backgrounds |
| dark-surface | #292524 | Footer sections, dark CTA bands, inverted content areas |
| dark-ink | #E7E5E4 | Headings on dark backgrounds |
| dark-muted | #A8A29E | Body text and descriptions on dark backgrounds |
| action | #1C1917 | Primary button fill, submit actions |
| action-text | #FAFAF9 | Text on primary buttons |
| border | #E7E5E4 | Input underlines, dividers, light borders |
| border-dark | #44403C | Borders on dark surfaces |

The light mode establishes warmth through the canvas and surface-warm tokens, avoiding sterile pure white. Dark sections use a deep espresso brown rather than true black, maintaining the warm character. Colorful accents appear only in data visualizations and decorative illustrations—yellow, blue, purple, pink, orange, and teal bars—never as UI chrome. This discipline keeps the interface calm while allowing brand personality to emerge in content imagery.

## Typography

Two families create a clear functional division: Besley for display and editorial moments, Inter for everything else. Besley appears exclusively in Regular weight, letting its classical proportions carry authority without heaviness. Inter provides the full weight range for labels and navigation clarity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Besley | 4rem | 400 | 1 | -0.02em | Page titles: News, Contact |
| section-display | Besley | 2.5rem | 400 | 1.1 | -0.01em | Section headings, card titles, numbered steps |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, form labels |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, introductory copy |
| label | Inter | 0.875rem | 500 | 1.4 | 0.01em | Buttons, tags, metadata |
| navigation | Inter | 0.875rem | 400 | 1.4 | 0 | Sidebar links, footer links |
| legal | Inter | 0.75rem | 400 | 1.5 | 0.01em | Copyright, terms, privacy |

Besley contributes an italic variant used sparingly for emphasis or stylistic variation in editorial contexts. The type scale is built on a 4px relative unit, with display sizes at 64px and 40px, body at 16px, and labels at 14px. Verify licensing for these families before production use. Inter is designed by Rasmus Andersson and available from Rsms.

## Layout

The system employs a persistent left sidebar on desktop, creating a book-like reading experience. The sidebar occupies approximately 20% of viewport width, containing the logo mark, navigation links, and active page indicator. Main content flows in the remaining space with generous left padding that aligns to a clear content column.

Page sections stack vertically with substantial breathing room. The section spacing token of 6rem creates clear separation between content bands without visual rules. Content within sections typically centers in a max-width container, though some full-bleed illustrations break this rhythm for visual impact.

Grid behavior favors single-column editorial flow for text-heavy pages, switching to two-column layouts for process steps, feature lists, and card grids. The contact page demonstrates an asymmetric split: form content occupies the left two-thirds while a decorative illustration fills the right third, maintaining the sidebar's presence.

Vertical rhythm follows the 4px base unit. Text blocks stack with 1.5rem gaps between paragraphs and headings. Form fields use tighter 1rem spacing to group related inputs visually. Cards and panels receive 2rem internal padding, creating clear figure-ground separation from the canvas.

## Visual language

The aesthetic merges technical precision with editorial warmth. Geometric illustrations featuring striped patterns, circular forms, and gradient accents appear throughout, referencing audio waveforms and data visualization without literal representation. These illustrations use the brand's limited accent palette—yellow, blue, purple, pink, orange—against warm neutral backgrounds.

Iconography is minimal and linear, using simple strokes rather than filled shapes. Process steps use outlined icons for request, purchase, receive, and experiment actions. Social links in the footer use familiar platform marks in muted tones.

Photography and data graphics receive warm, desaturated treatment that harmonizes with the neutral interface. Announcement cards feature bold numerical displays ($50M, $25M, $5M) in large serif type, paired with colorful horizontal bar charts that suggest growth and momentum.

The overall density is low. Whitespace is treated as an active design element, framing content and guiding attention through scale contrast rather than decorative elements. Borders are hairline-thin and reserved for input fields and subtle dividers.

## Components

### Sidebar navigation

Anatomy: Logo mark with wordmark at top, followed by vertical stack of page links. Active page shows a left vertical rule and darker text.

Surface and text color: Transparent background, `{colors.muted-ink}` default, `{colors.ink}` active.

Typography: `{typography.navigation}`.

Spacing: Links stack with 0.5rem vertical padding, 1.5rem left indent for text, 0.25rem left border for active indicator.

Composition: Fixed position on desktop, full-height column. Collapses to header menu on smaller viewports.

### Page title

Anatomy: Single large heading, occasionally preceded by a small roman numeral or section label.

Typography: `{typography.hero-display}`.

Spacing: 2rem top margin from sidebar baseline, 1.5rem bottom margin to content.

### Announcement card

Anatomy: Warm background panel containing an illustration or data graphic, followed by a serif headline, date metadata, and category tag.

Surface: `{colors.surface-warm}` background, no border, subtle rounding.

Typography: Headline uses `{typography.section-display}`, metadata uses `{typography.label}` in `{colors.muted-ink}`.

Shape: `{rounded.panel}` corners.

Spacing: 2rem internal padding, 2rem gap between cards in grid.

### Contact form

Anatomy: Stacked text inputs with floating labels, each with an underline-only border. Single submit button below.

Surface: Transparent inputs, `{colors.border}` bottom border, `{colors.ink}` text, `{colors.muted-ink}` placeholders.

Typography: Labels use `{typography.body}`, submit uses `{typography.label}` on `{colors.action}` pill.

Shape: Inputs are rectangular with no visible background; submit uses `{rounded.pill}`.

Spacing: 1.5rem vertical gap between fields, 2rem above submit button.

### Process step

Anatomy: Roman numeral prefix, serif heading, sans-serif description. Optional icon above heading in dark sections.

Surface: Light sections use `{colors.canvas}` background; dark sections use `{colors.dark-surface}`.

Typography: Numerals in `{typography.label}` muted, headings in `{typography.section-display}`, body in `{typography.body}`.

Composition: Two-column grid in dark sections, single column in light. Icons are 24px outlined strokes.

### Primary button

Anatomy: Text label centered in pill shape.

Surface: `{colors.action}` fill, `{colors.action-text}` text.

Typography: `{typography.label}`.

Shape: `{rounded.pill}`, full pill with generous horizontal padding.

Spacing: 0.75rem vertical, 1.5rem horizontal padding.

### Footer

Anatomy: Copyright left, legal links center, social icons right. In dark variant: process steps above, CTA banner at top.

Surface: `{colors.dark-surface}` background, `{colors.dark-ink}` and `{colors.dark-muted}` text.

Typography: Copyright and links use `{typography.legal}`, step headings use `{typography.section-display}`.

Spacing: 2rem internal padding, 1rem gap between link groups.

## Responsive behavior

The sidebar navigation should collapse to a horizontal header or hamburger menu on viewports below approximately 1024px. The two-column process grid should stack to single column on tablet and below. Hero display type should scale down to `{typography.section-display}` size on mobile to prevent overflow. Form layouts should remain single column, with the decorative illustration moving above or below the form rather than beside it. Dark sections maintain full-bleed backgrounds at all sizes. Touch targets for navigation and buttons should maintain minimum 44px height.

## Practical implementation guidance

### Preserve
- The warm neutral palette; avoid introducing saturated UI colors beyond the illustration accents.
- The Besley serif for all display headings; this is the primary brand differentiator.
- The generous whitespace and low information density; resist filling empty space.
- The left sidebar as a persistent navigation anchor on desktop.
- The hairline input borders and transparent field backgrounds in forms.

### Avoid
- Heavy drop shadows or elevation effects; the design is intentionally flat.
- Pure black or pure white; the warm variants are essential to the character.
- Filled icons; maintain the outlined stroke style throughout.
- Multiple button styles; the single dark pill is sufficient for all actions.
- Underlining links outside of body text; navigation and buttons rely on color and shape.

### Recommended build order
1. Establish the 4px base grid and spacing tokens.
2. Implement the color system with warm neutrals and dark inversion.
3. Load Besley and Inter with correct weights; verify Besley italic availability.
4. Build the sidebar navigation with active state logic.
5. Create the type hierarchy with hero and section display sizes.
6. Implement form components with underline-only inputs.
7. Add dark section variants for footer and CTA areas.
8. Integrate illustration system with striped and circular motifs.

### Accessibility
- Ensure `{colors.muted-ink}` on `{colors.canvas}` meets WCAG AA for large text; use `{colors.ink}` for small body copy.
- Dark section text should use `{colors.dark-ink}` for headings and `{colors.dark-muted}` only for non-essential content.
- Form labels should remain visible even when placeholders are present; consider persistent labels above inputs.
- Focus indicators should be clearly visible against both light and dark surfaces; a 2px outline offset from buttons and inputs is recommended.
- The sidebar active indicator should not rely solely on color; the left border provides sufficient non-color distinction.

## Scope note

This guide covers the marketing site surfaces visible in the supplied images: homepage, news, and contact pages. Product interfaces, dataset browsing tools, documentation, mobile navigation behavior, and motion design are not represented. Measurements are practical adaptation targets derived from visual inspection of the desktop experience.
