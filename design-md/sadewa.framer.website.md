# How sadewa.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sadewa.framer.website-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer with large outlined Sadewa wordmark and circuit-board icon on near-black background](https://pin.fontofweb.com/5966?format=jpg)](https://design.withfudge.com/share/pin-5966)

[Dark footer with large outlined Sadewa wordmark and circuit-board icon on near-black background](https://design.withfudge.com/share/pin-5966)

[![Vibrant lime-green CTA section with 3D glass circuit icon and multi-column dark footer navigation](https://pin.fontofweb.com/5965?format=jpg)](https://design.withfudge.com/share/pin-5965)

[Vibrant lime-green CTA section with 3D glass circuit icon and multi-column dark footer navigation](https://design.withfudge.com/share/pin-5965)

[![Light blog section with editorial card grid, category tags, and asymmetric image cropping](https://pin.fontofweb.com/5964?format=jpg)](https://design.withfudge.com/share/pin-5964)

[Light blog section with editorial card grid, category tags, and asymmetric image cropping](https://design.withfudge.com/share/pin-5964)

[![FAQ accordion with stacked gray panels, plus-minus toggles, and bold left-aligned section heading](https://pin.fontofweb.com/5963?format=jpg)](https://design.withfudge.com/share/pin-5963)

[FAQ accordion with stacked gray panels, plus-minus toggles, and bold left-aligned section heading](https://design.withfudge.com/share/pin-5963)

## Overview

Sadewa presents itself as an AI automation agency through a deliberately stark visual system: near-black backgrounds dominate promotional and closing sections, while clean white and warm gray surfaces carry editorial content. The design relies on extreme scale contrast—massive display type set tight with negative tracking against tiny mono-spaced labels—to create a technical, engineered personality. Electric lime green functions as the sole saturated accent, reserved for primary calls-to-action and contact highlights. Glass-morphism 3D renders of circuit-board pathways reinforce the AI/automation positioning without falling into generic tech illustration. The overall impression is confident and minimal: every element competes for attention through size and weight rather than decorative complexity.

## Colors

The palette operates in three distinct modes: a dark mode for impact sections, a light mode for readable content, and an accent system that bridges both.

| token | value | use |
|---|---|---|
| ink | #131313 | Primary text on light surfaces, dark section backgrounds |
| ink-secondary | #3A3A3A | Secondary text, muted headings |
| ink-tertiary | #797979 | Tertiary text, timestamps, captions |
| canvas | #FFFFFF | Primary page background, card surfaces |
| surface | #F2F2F2 | FAQ panels, subtle card backgrounds |
| surface-warm | #F3F3F3 | Alternate light surface, footer subdivisions |
| border | #D3D3D3 | Hairline dividers, subtle separators |
| border-subtle | #E5E5E5 | Very light rules, top borders on sections |
| action | #98FE00 | Primary buttons, email links, active states |
| action-hover | #FF9500 | Hover state for interactive accents |
| accent-blue | #0000EE | Unvisited link fallback |

Dark sections use `ink` as a near-black background with `canvas` text reversed. Light sections invert this relationship. The lime `action` color appears only on interactive elements and contact information, never as a background fill for large areas. Gray surfaces (`surface`, `surface-warm`) create subtle elevation without shadow, used for accordion panels and card clusters. The system avoids gradients in favor of flat, decisive color blocking.

## Typography

Three families create a strict hierarchy: False for all display and heading matter, Satoshi for body and UI text, and Roboto Mono for metadata and labels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | False | 5rem | 700 | 0.9 | -0.04em | Homepage hero, massive statements |
| section-display | False | 4rem | 700 | 1 | -0.04em | Section headings, closing CTAs |
| heading-large | False | 2.5rem | 700 | 1.2 | -0.045em | FAQ titles, blog section headers |
| heading-medium | False | 2rem | 700 | 1.1 | -0.04em | Card titles, sub-section heads |
| heading-small | False | 1.5rem | 700 | 1.2 | -0.04em | Small headings, feature labels |
| heading-xs | False | 1.25rem | 700 | 1.2 | -0.02em | Footer links, compact headings |
| body-large | Satoshi | 1.5rem | 500 | 1.5 | -0.01em | Lead paragraphs, hero descriptions |
| body | Satoshi | 1.125rem | 500 | 1.4 | -0.02em | Standard paragraphs, descriptions |
| body-small | Satoshi | 1rem | 500 | 1.5 | -0.01em | Card excerpts, compact body |
| label | Roboto Mono | 0.875rem | 400 | 1 | normal | Category tags, section labels |
| label-small | Roboto Mono | 0.75rem | 400 | 1 | normal | Timestamps, micro-copy |

False is credited to Deni Anggara via Indian Type Foundry. Satoshi shares the same designer and vendor. Geist appears in the source but is not assigned to visible text roles. Roboto Mono is attributed to Google. Verify licensing for these families before production use.

The type system depends on extreme scale jumps: labels at 12–14px against display type at 64–80px. Tracking is aggressively negative on all False headings, creating a compressed, engineered feel. Line heights stay tight, especially on display sizes where 0.9–1.0 prevents vertical sprawl.

## Layout

The page uses a centered container with generous horizontal padding. Content blocks alternate between full-bleed dark sections and contained light sections. Vertical rhythm is established through section spacing of 4–6rem, with internal component gaps at 1–2rem.

The blog grid (Image 3) demonstrates an asymmetric editorial layout: one large feature card occupies roughly half the width, with two smaller cards stacked beside it. This creates visual tension without complex masonry. Cards align to a consistent top line, with images cropped to varying aspect ratios—some landscape, some near-square—unified by consistent corner radius and label placement below.

The FAQ section (Image 4) splits the viewport roughly 40/60: the bold stacked heading anchors the left, while accordion panels fill the right. This two-column pattern repeats across content-heavy sections, keeping headings visually connected to their content without consuming readable line lengths.

Footer navigation (Image 2) uses a four-column grid on dark background, with column headers in mono-spaced labels and links in medium-weight sans. The layout stretches edge-to-edge within the container, with generous vertical padding separating the CTA area above from the link columns below.

Spacing tokens derive from a 2px base unit, expressed in rem at 0.125rem increments. Common values include 0.5rem for tight internal gaps, 1.5rem for comfortable padding, 2rem for card interiors, and 4–6rem for section breaks.

## Visual language

Imagery follows a technical-glass aesthetic: 3D circuit-board pathways rendered with translucent green and clear acrylic materials, set against dark voids. These elements glow with subtle internal illumination, suggesting active processing without literal LED effects. Photography, where it appears in blog cards, is naturalistic and warm-toned—hands on keyboards, workspaces—providing human contrast to the synthetic hardware renders.

The corner treatment is decisive: 4px radius on cards and panels, 64px (4rem) radius on pills and large buttons. No intermediate values appear. Borders are rare and functional: hairline rules in `#D3D3D3` separate sections, while panels rely on background color change rather than stroke for definition.

The Sadewa wordmark (Image 1) uses an outlined stroke treatment at massive scale, functioning as decorative texture rather than legible text. This outlined style echoes the circuit-board imagery—traces, pathways, technical drawing. The brand icon, a stylized S-shaped circuit, appears in both neon-green active states and ghosted gray passive states.

Motion is implied by the design's static qualities: the tight tracking and flush alignment suggest snap-to-grid precision, while the lime accent against black creates afterimage persistence. Any animation should respect this mechanical precision—quick, decisive transitions rather than eased floats.

## Components

### Primary button
- **Anatomy**: Text label with optional arrow icon, contained in a rounded pill
- **Surface**: `action` background with `ink` text
- **Typography**: `{typography.body-small}`
- **Shape**: `{rounded.pill}` (4rem radius), full pill caps
- **Spacing**: Padding 0.75rem vertical, 1.5rem horizontal; icon in square sub-container at right edge
- **Composition**: Text left-aligned within pill, icon button flush right with matching background
- **Variants**: Default lime state; hover should shift toward `action-hover` orange

### Blog card
- **Anatomy**: Image container, category label, date stamp, title, excerpt
- **Surface**: Transparent or `canvas` background; image with 4px radius
- **Typography**: Title in `{typography.heading-medium}`, excerpt in `{typography.body-small}`, category and date in `{typography.label}`
- **Shape**: Image corners at `{rounded.card}`; no border
- **Spacing**: 1.5rem between image and text cluster; 0.5rem between label and title
- **Composition**: Image top, metadata row below (category left, date right), title beneath, optional excerpt
- **Variants**: Large feature card spans ~50% width; standard cards stack in pairs

### FAQ accordion
- **Anatomy**: Question row, expandable answer area, plus/minus toggle
- **Surface**: `surface` background, `{rounded.card}` corners
- **Typography**: Question in `{typography.heading-large}` at 2.5rem, answer in `{typography.body-small}`
- **Shape**: 4px radius; full-width panels with 1rem vertical padding, 2rem horizontal
- **Spacing**: 1rem gap between stacked panels
- **Composition**: Question text left-aligned, toggle button right-aligned; answer reveals below with additional padding
- **States**: Collapsed shows plus icon; expanded shows minus icon with answer text visible

### Footer CTA block
- **Anatomy**: Display heading, description, primary button, decorative 3D icon
- **Surface**: `ink` background, `canvas` text
- **Typography**: Heading in `{typography.section-display}`, body in `{typography.body-large}`, button in `{typography.body-small}`
- **Shape**: Button at `{rounded.pill}`; icon in rounded square container
- **Spacing**: 2rem between heading and button; icon positioned absolute or floated right
- **Composition**: Text left, icon right; vertical centering

### Footer navigation
- **Anatomy**: Column headers, link lists, contact details, legal line
- **Surface**: `ink` background throughout
- **Typography**: Column headers in `{typography.label}`, links in `{typography.heading-xs}`, email in `{typography.body-large}` with `action` color
- **Shape**: No visible borders; subtle top rule optional
- **Spacing**: 4rem vertical padding above link grid; 2rem between columns
- **Composition**: Four-column grid on desktop; contact details span left column; legal line full-width below

### Navigation bar
- **Anatomy**: Logo, link items, optional CTA
- **Surface**: `surface-warm` or `canvas` background, `ink` text
- **Typography**: Links in `{typography.label}`
- **Shape**: 4px radius on container; individual link padding 1rem
- **Spacing**: 6px 16px on compact variant; 16px standard
- **Composition**: Horizontal row, logo left, links center-right, CTA far right

## Responsive behavior

The design's scale contrast demands careful handling at narrow widths. Display type at 80px/64px must reduce to 40–48px on mobile to maintain line integrity. The two-column FAQ layout should stack to single column, with the heading above the accordion. Blog grid collapses from asymmetric three-card to single-column stacked cards, preserving image aspect ratios.

The four-column footer grid compresses to two-column tablet and single-column mobile, with contact details promoted to top. Navigation collapses to a menu trigger; the mono-spaced label style suggests a full-screen overlay rather than a dropdown.

Dark sections maintain their character across breakpoints—the lime accent against black remains legible even at reduced scale. Touch targets for the pill buttons should maintain minimum 44px height, with horizontal padding increased to 2rem for thumb-friendly tapping.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between 12px mono labels and 64–80px display headings
- The single lime accent against near-black; do not introduce additional saturated colors
- The 4px and 64px radius system—no intermediate values
- Tight negative tracking on all False headings
- The outlined/wordmark treatment as decorative texture, not readable text

### Avoid
- Gradients on UI surfaces; the design is flat and decisive
- Shadows for elevation; rely on background color changes
- Generic tech iconography; the circuit-board renders are specific to the brand
- Body text in False; reserve it for headings only
- Centered text in editorial sections; left alignment drives the rhythm

### Recommended build order
1. Establish the type scale with False and Satoshi loaded, verifying the tight tracking renders correctly
2. Implement the dark/light section alternation with exact color values
3. Build the pill button component with icon sub-container
4. Create the FAQ accordion with expand/collapse states
5. Assemble the blog card grid with asymmetric sizing
6. Layer in the 3D imagery and outlined wordmark as decorative finishing

### Accessibility
- Ensure the lime `#98FE00` on black `#131313` meets WCAG AA for large text; it may fail for small body copy—use white for fine print on dark backgrounds
- The tight line heights on display type (0.9) risk clipping with certain font renderers; test with aggressive line-height padding
- Roboto Mono at 12px may fall below comfortable reading size for some users; consider 14px minimum for critical labels
- Accordion toggles need explicit button semantics and aria-expanded states
- Dark mode is the default for CTA sections; ensure no automatic switching overrides the intentional contrast

## Scope note

This guide covers the homepage and visible landing sections including the blog preview, FAQ, footer, and navigation. Interior pages such as individual case studies and blog posts are not represented. Mobile breakpoints, hover transitions, form validation states, and loading sequences are not documented. Measurements derive from the supplied interface data.
