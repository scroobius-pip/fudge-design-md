# How httpie.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/httpie.io-design)

Last updated: 2026-08-10

## Captured pages

[![Desktop download page with bold condensed headline, white pills on dark ground, and mint-green blob behind app screenshot](https://pin.fontofweb.com/3953?format=jpg)](https://design.withfudge.com/share/pin-3953)

[Desktop download page with bold condensed headline, white pills on dark ground, and mint-green blob behind app screenshot](https://design.withfudge.com/share/pin-3953)

[![CLI documentation section showing code blocks with purple prompt symbols, underlined links, and dark surface cards](https://pin.fontofweb.com/3952?format=jpg)](https://design.withfudge.com/share/pin-3952)

[CLI documentation section showing code blocks with purple prompt symbols, underlined links, and dark surface cards](https://design.withfudge.com/share/pin-3952)

[![AI feature page with concentric circle pattern, pink-accented HTTPie AI wordmark, and email capture field](https://pin.fontofweb.com/3951?format=jpg)](https://design.withfudge.com/share/pin-3951)

[AI feature page with concentric circle pattern, pink-accented HTTPie AI wordmark, and email capture field](https://design.withfudge.com/share/pin-3951)

[![Community footer with blue gradient background, stacked pill-shaped taglines, social buttons, and dark footer columns](https://pin.fontofweb.com/3950?format=jpg)](https://design.withfudge.com/share/pin-3950)

[Community footer with blue gradient background, stacked pill-shaped taglines, social buttons, and dark footer columns](https://design.withfudge.com/share/pin-3950)

## Overview

HTTPie's design system is built for developer trust and visual impact. The brand leans heavily into a near-black canvas that makes electric accent colors feel luminous rather than garish. The typography pairing is deliberately extreme: Fk Screamer delivers compressed, high-impact display headlines that shout with confidence, while the Poly Pie family provides the technical, measured rhythm of body text, labels, and code. This contrast between expressive display and utilitarian reading creates a personality that feels both playful and precise—appropriate for a tool that lives in terminals and browser tabs.

The visual language organizes content into generous vertical sections with clear hierarchy. Pill-shaped buttons and inputs appear throughout, softening the technical edge of the monospace and sans-serif pairings. Accent colors shift by page context: mint green signals product and download actions, pink highlights AI features, and blue anchors community and social proof. Photography and product screenshots float against the dark ground with minimal framing, often accompanied by organic blob shapes that break the rigid grid. The overall effect is a developer brand that avoids the sterile conventions of enterprise SaaS in favor of something more memorable and emotionally resonant.

## Colors

The color system operates on a dark-mode-first principle. The canvas is not pure black but a warm, desaturated near-black that reduces eye strain and provides depth for layered surfaces. Against this ground, two electric accents compete for attention: a mint green that reads as fresh and actionable, and a hot pink that signals novelty and AI features. A medium blue serves community and social contexts. Text hierarchy is established through opacity and saturation rather than multiple ink colors.

| token | value | use |
|---|---|---|
| canvas | #1E1E1E | Primary page background, hero sections, navigation bar |
| canvas-deep | #141414 | Footer background, deepest layering surface |
| ink | #F5F5F5 | Primary text, headlines, active navigation, primary button fill |
| ink-muted | #A0A0A0 | Secondary text, captions, footer links, disabled states |
| accent-mint | #7FE17F | Primary action buttons, download CTAs, success indicators, active nav highlights |
| accent-pink | #FF6BFF | AI feature accents, decorative wordmark highlights, waiting-list submit buttons |
| accent-blue | #5B7FE1 | Community section backgrounds, social proof areas, newsletter sections |
| surface-elevated | #2A2A2A | Card backgrounds, input fields, elevated containers on canvas |
| surface-code | #363636 | Code block backgrounds, terminal-style containers |
| border-subtle | #404040 | Dividers, inactive button borders, hairline separators |

The relationship between modes is straightforward: the system is permanently dark. There is no light-mode equivalent in the visible surfaces. Photography appears with natural color against the dark ground, and gradients are used sparingly—primarily as section backgrounds that shift between accent colors at large scale. The mint and pink accents never compete directly; they are assigned to separate page contexts or product lines, creating clear wayfinding through color.

## Typography

HTTPie employs two distinct font families with no intermediaries. Fk Screamer, designed by Florian Karsten, handles all display work with a bold, compressed, almost poster-like presence. The Poly Pie family, designed by Milos Mitrovic and available from Gradient, covers everything else across four cuts: Neutral for body text, Median for emphasis, Slim for labels and UI chrome, and Slim Mono for code and terminal representations.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Fk Screamer | 5rem | 700 | 0.9 | -0.02em | Page headlines, product announcements, download page titles |
| section-display | Fk Screamer | 3rem | 700 | 1 | -0.01em | Section headers, feature titles, CLI page headings |
| body | Poly Pie-Neutral | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general reading |
| body-medium | Poly Pie-Median | 1rem | 500 | 1.6 | 0 | Emphasized body text, link text, feature descriptions |
| label | Poly Pie-Slim | 0.875rem | 400 | 1.4 | 0.01em | Buttons, navigation, tags, metadata |
| code | Poly Pie-Slim Mono | 0.875rem | 400 | 1.5 | 0 | Terminal commands, code blocks, API examples |
| navigation | Poly Pie-Neutral | 0.875rem | 400 | 1 | 0 | Header navigation, footer links |

Fk Screamer is used exclusively at large sizes where its compressed forms remain legible. The tight line height and negative letter spacing are essential to its character—looser settings would dissipate the visual punch. Poly Pie-Neutral and Median are nearly identical in metrics, allowing seamless weight shifts within paragraphs without reflow. The Slim Mono cut is not a generic monospace; its proportions match the rest of the Poly Pie family, creating visual continuity between code samples and UI labels.

Verify licensing for these families before production use. Fk Screamer is available from Florian Karsten. Poly Pie variants are available from Gradient.

## Layout

The layout system is built on a 4px relative unit, with spacing expressed in rem values derived from that base. Sections are generously separated, typically 6rem of vertical padding, which allows the bold display typography to breathe against the dark canvas. Content is constrained to a maximum width of 75rem, centered with auto margins.

The grid is implicit rather than rigid. Hero sections often center content vertically and horizontally, with text blocks stacking above pill-shaped action rows. Product screenshots and decorative shapes break the centered axis, floating to one side with overlapping z-index layers. The CLI documentation page uses a more linear, single-column flow with code blocks spanning nearly the full content width, punctuated by descriptive paragraphs.

Navigation sits at the top in a fixed or sticky bar, with the HTTPie logomark on the left, text links in the center, and a primary action button on the right. The footer expands into a multi-column grid: brand mark, product links, company links, community links, and a dark-mode toggle with newsletter capture. This footer structure repeats across pages with only background color shifts.

Card-like containers appear for code examples and feature callouts, using 0.75rem border radius. Buttons, inputs, and tags use full pill rounding at 9999px. The pill shape is a defining motif—nearly every interactive element shares this geometry, creating consistency across CTAs, platform download buttons, email fields, and social proof badges.

## Visual language

The visual language balances technical credibility with playful energy. The near-black canvas creates a stage-like environment where bright accents and white typography perform. Organic blob shapes in mint green appear behind product screenshots, introducing softness that contrasts with the geometric precision of the pill buttons and grid lines.

Concentric circle patterns appear in feature sections, particularly around AI messaging, creating a sense of radiating signal or processing depth. These patterns are subtle—low-contrast against the dark ground—so they add texture without competing with foreground content.

Product photography and screenshots are presented with minimal chrome. The desktop application window appears as a dark rectangle with rounded corners, its interface visible but not overwhelmed by framing. This treatment makes the product feel immediate and accessible, as if already running on the viewer's machine.

Social proof and community elements use a brighter blue background that lifts them from the dark canvas, creating a distinct emotional register: the product pages feel focused and intense, while community sections feel open and inviting. The stacked pill taglines—"Open source. Open hearted. Open minded."—demonstrate how the pill shape scales from small buttons to large display containers, each line a self-contained unit with generous internal padding.

## Components

**Primary Action Button**
- Anatomy: Text label centered within a pill container; may include leading icon
- Surface: Mint green background with near-black text, or white background with near-black text for secondary emphasis
- Typography: `{typography.label}`
- Shape: Full pill with 9999px border radius
- Spacing: Horizontal padding approximately 1.5rem, vertical padding approximately 0.75rem
- Composition: Appears in horizontal groups of two to four, evenly spaced with 1rem gaps
- Variants: Mint fill for primary actions, white fill for secondary, transparent with border for ghost actions

**Code Block**
- Anatomy: Terminal-style container with prompt symbol, command text, and optional output
- Surface: Dark gray background at `{colors.surface-code}`, with subtle border
- Typography: `{typography.code}`; prompt symbol rendered in pink accent
- Shape: 0.75rem border radius
- Spacing: Internal padding approximately 1rem; vertical margin between blocks approximately 1.5rem
- Composition: Full-width within content column, stacked sequentially
- Variants: Static display blocks; prompt symbol may vary by shell type

**Email Capture Field**
- Anatomy: Text input with placeholder text and circular submit button
- Surface: Elevated dark background with lighter placeholder text; submit button in accent color
- Typography: `{typography.body}` for input, `{typography.label}` for placeholder
- Shape: Full pill for input container; circular button with arrow icon
- Spacing: Input spans approximately 20rem width; button overlaps right edge or sits adjacent
- Composition: Centered or left-aligned depending on section context
- Variants: Pink submit for AI waiting list; mint submit for newsletter signup

**Navigation Bar**
- Anatomy: Logomark, text links, social icons, primary CTA button
- Surface: Transparent or matching canvas background
- Typography: `{typography.navigation}` for links; active state uses `{colors.accent-mint}`
- Shape: No visible container; elements float freely
- Spacing: Horizontal distribution with logo left, links center, actions right
- Composition: Fixed or sticky positioning at viewport top
- Variants: Minimal variant on interior pages; expanded with additional elements on homepage

**Feature Card / Product Screenshot**
- Anatomy: Application window or device frame containing interface screenshot
- Surface: Dark interface chrome with content visible within
- Typography: Inherits from captured interface, not system typography
- Shape: Rounded rectangle with subtle shadow
- Spacing: Positioned with overlapping decorative shapes; negative space around frame
- Composition: Often offset from center, with text content balancing on opposite side
- Variants: Desktop application, terminal window, or browser context depending on product line

**Footer**
- Anatomy: Multi-column grid with brand, links, social icons, newsletter, legal
- Surface: Deepest canvas color, creating visual closure
- Typography: `{typography.label}` for headings, `{typography.navigation}` for links
- Shape: No rounded elements; strict rectangular regions
- Spacing: Generous top padding, compact row spacing between link lists
- Composition: Four to five columns on desktop, collapsing on smaller viewports
- Variants: Standard dark footer; community section may precede with blue background

## Responsive behavior

The design is authored for desktop-first viewing, with content widths constrained and centered. The bold display typography and generous section spacing suggest that mobile adaptation should maintain vertical rhythm while scaling type proportionally. Fk Screamer headlines should reduce by approximately 30-40% on narrow viewports to prevent overflow and maintain legibility.

Navigation should collapse to a horizontal scroll or hamburger menu on viewports below approximately 60rem. The multi-column footer should stack to single-column with section headings becoming expandable accordions if interaction density becomes problematic.

Pill button groups, particularly the platform download buttons, should wrap to multiple lines rather than compress horizontally. Code blocks should remain horizontally scrollable rather than reflowing, preserving command-line accuracy. Product screenshots may shift from side-by-side composition to stacked vertical arrangement, with decorative blobs repositioned to maintain visual balance without obscuring content.

## Practical implementation guidance

### Preserve
- The extreme contrast between Fk Screamer display type and Poly Pie body text; this pairing is the brand's signature
- Full pill rounding on all interactive elements; partial rounding would break the visual system
- Dark canvas as default; light-mode inversion would require complete recoloring of photography and accents
- Pink and mint accents in their assigned contexts; swapping them creates confusion between product lines
- The terminal-style code blocks with colored prompt symbols; this pattern establishes technical credibility immediately

### Avoid
- Adding a third font family; the two-family system is intentionally stark
- Using Fk Screamer at small sizes or for body text; its compression becomes illegible below approximately 2rem
- Pure black backgrounds; the warm near-black provides necessary depth and reduces harsh contrast
- Sharp-cornered buttons or inputs; the pill motif is pervasive and should not be diluted
- Centering body text; the system relies on left-aligned reading rhythms for technical content

### Recommended build order
1. Establish the dark canvas and text colors with proper contrast ratios
2. Implement Fk Screamer for hero headlines with tight line height and negative tracking
3. Build the pill button component with all three variants (mint fill, white fill, ghost)
4. Add Poly Pie body text and code typography with appropriate weights
5. Construct the navigation bar with active-state color logic
6. Implement code blocks with terminal styling and prompt symbol coloring
7. Build section spacing and max-width constraints
8. Add footer grid with newsletter capture
9. Implement accent color assignments by page context

### Accessibility
- Ensure mint green and pink accents meet contrast requirements against the dark canvas when used for text; they may need adjustment from their pure decorative values
- Code blocks should support keyboard focus for copy actions and horizontal scrolling
- The concentric circle background patterns should be implemented as non-essential decorative layers with `aria-hidden` or equivalent
- Pill buttons should maintain minimum 44px touch targets even when visual padding appears smaller
- Dark mode is the only visible mode; do not assume a light-mode toggle exists without verification

## Scope note

This guide covers the marketing site surfaces visible in the supplied homepage, CLI, AI, and download page captures. Mobile layouts, component hover states, form validation, loading indicators, and the desktop application interface itself are not represented. Measurements are practical adaptation targets derived from visible proportions.
