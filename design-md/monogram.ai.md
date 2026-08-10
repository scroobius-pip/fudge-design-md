# How monogram.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/monogram.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with Monogram logo, headline AI with a visual interface, download button, and floating phone mockup showing movie recommendations interface](https://pin.fontofweb.com/9955?format=jpg)](https://design.withfudge.com/share/pin-9955)

[Hero section with Monogram logo, headline AI with a visual interface, download button, and floating phone mockup showing movie recommendations interface](https://design.withfudge.com/share/pin-9955)

[![Lower page view showing phone mockup with recipe content, cookie recipe suggestion chips, and footer with large Monogram wordmark and navigation links](https://pin.fontofweb.com/9954?format=jpg)](https://design.withfudge.com/share/pin-9954)

[Lower page view showing phone mockup with recipe content, cookie recipe suggestion chips, and footer with large Monogram wordmark and navigation links](https://design.withfudge.com/share/pin-9954)

## Overview

Monogram's landing page presents an AI assistant product through a restrained, light-mode visual system. The design centers on a bold, left-aligned hero with the Monogram wordmark and a single commanding headline, balanced by a floating phone mockup on the right that demonstrates the app's visual interface. The overall impression is clean, confident, and product-focused—letting the interface demonstration speak louder than decorative elements.

The page uses a near-white canvas with warm off-white surfaces for depth, creating subtle hierarchy without heavy borders or strong contrasts. The type system is built on Inter for all visible interface text, with Applesystem appearing as a system-level fallback in certain contexts. The phone mockups are the central visual element, rendered with layered shadows and gradient borders that suggest physical depth and premium hardware presentation. The footer extends this warmth with an oversized, faint Monogram logotype that anchors the page without competing with content.

## Colors

The palette is intentionally minimal and warm-leaning, built around near-black text on bright white with warm gray surfaces for structural depth.

| token | value | use |
|---|---|---|
| ink | #1F1F1F | Primary text, headings, logo |
| ink-secondary | #2C2A26 | Secondary text, subtle emphasis |
| ink-tertiary | #4A4A4A | Tertiary text, captions |
| muted | #6E6A62 | Muted labels, footer links |
| canvas | #FFFFFF | Page background, phone mockup fill |
| surface | #F5F4F0 | Footer background, suggestion chips |
| surface-warm | #EBE9E1 | Warm surface accents |
| border | #DBDBE1 | Divider lines, subtle borders |
| border-light | #DFDFE2 | Gradient stops in conic borders |
| action | #000000 | Primary button fill, dark accents |
| action-inverse | #FFFFFF | Text on dark buttons |

The color system operates in a single light mode. Text hierarchy is achieved through the ink scale rather than color variation—#1F1F1F for maximum impact in headlines, stepping down through #2C2A26 and #4A4A4A for supporting content. The warm surfaces (#F5F4F0, #EBE9E1) appear primarily in the footer and suggestion chips, preventing the page from feeling sterile. The phone mockups introduce their own shadow tones through layered box-shadows rather than explicit color tokens.

## Typography

The type system uses Inter for all visible interface text, with weight and size creating hierarchy rather than multiple families. Applesystem appears in the source as a system-level family at 14px in limited contexts, functioning as a fallback rather than a primary design voice. The display treatment is tight and bold, while functional text remains readable and open.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3.75rem | 600 | 1.1 | -0.05em | Main headline |
| section-heading | Inter | 1.125rem | 600 | 1.4 | -0.02em | Subsection titles in phone UI |
| body | Inter | 1rem | 400 | 1.5 | normal | Default paragraph text |
| body-small | Inter | 0.875rem | 400 | 1.4 | normal | Captions, descriptions |
| label | Inter | 1rem | 600 | 1.375 | -0.02em | Button text, emphasized labels |
| navigation | Inter | 0.875rem | 400 | 1.4 | normal | Footer links, nav items |

The hero headline at 60px with -3px letter spacing creates a distinctive, tightly-set display treatment that feels modern and confident. This is the only place where tracking goes beyond subtle negative values. Body text maintains a comfortable 1.5 line height for readability. The 16px/22px treatment for buttons with -0.32px tracking creates a slightly more compact, button-appropriate density. Verify licensing for these families before production use.

## Layout

The page follows a centered, single-column structure with a split hero composition. The main content area uses generous horizontal padding (24px on each side) with a maximum content width that keeps text readable and the phone mockup properly scaled.

The hero section places text content on the left and the phone mockup on the right, creating an asymmetric balance that draws the eye toward the product demonstration. Below the hero, the phone mockups continue with additional interface states, maintaining right-side visual weight. The footer spans full width with warm background, using a two-column link arrangement beneath an oversized, low-opacity Monogram wordmark.

Spacing follows a clear rhythm: 32px gaps between major content blocks, 16px for related elements, and 24px top margins for stacked components. The footer uses substantial top padding (120px) to create breathing room after the content area, with 48px bottom padding for comfortable closure. The phone mockups sit within their own elevated plane, separated from the flat page background through shadow depth rather than explicit borders.

## Visual language

The visual language emphasizes product realism through detailed phone mockups that appear to float above the page. These mockups use complex layered shadows: a deep ambient shadow for ground contact, a mid shadow for elevation, and subtle inset highlights that suggest glass or polished edge surfaces. A conic gradient border creates a rotating metallic sheen effect, while an inner linear gradient adds surface reflection.

The Monogram brand mark uses a geometric, angular "M" symbol that echoes the letterform without literal representation—suggesting precision and modernity. This mark appears at small scale in the header and footer, always in the ink color against light backgrounds.

Photography within the phone mockups shows lifestyle and product imagery with natural color grading—movie stills, food photography, and recipe content that demonstrates the AI's visual understanding. These images use rounded corners within the mockup interface, typically 12-16px radii for content cards.

The overall aesthetic avoids decoration in favor of product demonstration. Every visual element serves to show what Monogram does: understand and present visual information. The restraint in the surrounding page design ensures the phone mockups remain the focal point.

## Components

### Primary button
- **Anatomy**: Rounded pill containing text label and optional icon, with consistent horizontal padding
- **Surface**: Solid black (#000000) fill with white text
- **Typography**: {typography.label} — 16px semibold with slight negative tracking
- **Shape**: Full pill border radius (9999px)
- **Spacing**: 12px vertical padding, 20px horizontal padding, 6px gap between icon and text
- **Composition**: Centered content, appears below hero headline

### Secondary button / text link
- **Anatomy**: Text with optional leading icon, no background fill
- **Surface**: Transparent, inherits page background
- **Typography**: {typography.body} — 16px regular weight
- **Shape**: No border radius (text-only)
- **Spacing**: Minimal padding, appears inline or stacked below primary actions

### Phone mockup
- **Anatomy**: Rounded rectangle representing device frame, containing scrollable app interface with header, content cards, and bottom input area
- **Surface**: White fill with complex layered shadow system
- **Shape**: 48px border radius for outer frame, 12-16px for inner content cards
- **Spacing**: 1.5px padding creating the "bezel" effect, 24px top margin from preceding content
- **Composition**: Right-aligned in hero, vertically centered against left text content
- **Shadows**: Four-layer system — deep ambient (rgba(42, 37, 32, 0.26) at 60px blur), mid elevation (rgba(42, 37, 32, 0.125) at 32px), top inset highlight (rgba(255, 255, 255, 0.39)), bottom inset shadow (rgba(0, 0, 0, 0.067))
- **Border effect**: Conic gradient from 68deg creating metallic rotation through #FCFCFE, #DBDBE1, #DFDFE2 stops

### Suggestion chip
- **Anatomy**: Pill-shaped button with leading emoji/icon and text label
- **Surface**: Warm off-white (#F5F4F0) fill
- **Typography**: {typography.body-small} — 14px regular
- **Shape**: Full pill border radius
- **Spacing**: Compact padding, appears in horizontal row below phone mockup
- **Composition**: Horizontally scrollable or wrapping row of related suggestions

### Footer
- **Anatomy**: Full-width section with oversized background wordmark, two-column link grid, copyright, and social icons
- **Surface**: Warm off-white (#F5F4F0) background
- **Typography**: {typography.navigation} for links, {typography.body-small} for copyright
- **Shape**: No border radius, flat top edge
- **Spacing**: 120px top padding, 32px horizontal padding, 48px bottom padding; 48px gap between link columns, 10px between stacked links
- **Composition**: Large faint "Monogram" wordmark as decorative background element, actual content positioned above with clear hierarchy

## Responsive behavior

The desktop layout shows a clear left-right split in the hero, with text content occupying roughly 40% width and the phone mockup the remaining space. On narrower viewports, this should stack vertically with the headline centered above the mockup, maintaining the visual priority of product demonstration.

The phone mockups should scale proportionally, preserving their internal layout ratios. At very narrow widths, the mockup may become the full viewport width with reduced horizontal margins.

Footer links currently show in a multi-column arrangement; this should collapse to a single column on mobile with maintained link grouping. The oversized background wordmark should remain visible but may crop at extreme narrow widths.

The announcement banner at page top appears as a simple centered text link; this should remain single-line and truncate with ellipsis if space-constrained.

## Practical implementation guidance

### Preserve
- The tight, bold hero headline treatment with -0.05em tracking — this is the primary brand expression
- Complex four-layer shadow system on phone mockups; simplified shadows lose the physical depth
- Warm off-white footer background that separates page conclusion from content
- The 48px mockup border radius and 1.5px "bezel" padding creating device-like proportions
- Conic gradient border effect for premium hardware suggestion

### Avoid
- Adding heavy borders or strong dividers between sections — the design relies on whitespace and shadow depth
- Using pure black (#000000) for text; the specified #1F1F1F provides warmth and reduces eye strain
- Flattening the phone mockup shadows to a single layer — the complexity creates the floating effect
- Treating Applesystem as a primary design voice; it serves system-level fallback purposes only

### Recommended build order
1. Establish base typography with Inter at 16px/24px body size
2. Implement hero section with centered layout and headline styling
3. Build phone mockup component with shadow system and gradient borders
4. Add primary button with pill shape and proper padding
5. Create footer with warm background and link structure
6. Refine spacing rhythm across all sections

### Accessibility
- Ensure the announcement banner link has sufficient color contrast against its background
- Phone mockup content (images, text) is decorative demonstration; provide alt text describing the interface purpose rather than transcribing all visible content
- The "Watch the demo" link should have a visible focus state distinct from hover
- Footer links should maintain clear focus indicators against the warm background
- Consider reduced-motion preferences for any scroll-triggered mockup animations

## Scope note

This guide covers the Monogram landing page hero, product demonstration area with phone mockups, and footer. Interior pages, additional breakpoints, motion behavior, and the actual application interface within the mockups are not represented. The navigation system beyond footer links is not visible in the supplied material. Applesystem appears in source records but is not a primary design voice in the visible interface.
