# How theguardian.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/theguardian.com-design)

Last updated: 2026-08-10

## Captured pages

[![Article body with Guardian Egyptian body text, red inline links, and a large hero photograph of an industrial steelworks site.](https://pin.fontofweb.com/9146?format=jpg)](https://design.withfudge.com/share/pin-9146)

[Article body with Guardian Egyptian body text, red inline links, and a large hero photograph of an industrial steelworks site.](https://design.withfudge.com/share/pin-9146)

[![Full article page showing the navy header bar with yellow Support us button, navigation pills, article headline in light serif, and a Most viewed sidebar.](https://pin.fontofweb.com/7065?format=jpg)](https://design.withfudge.com/share/pin-7065)

[Full article page showing the navy header bar with yellow Support us button, navigation pills, article headline in light serif, and a Most viewed sidebar.](https://design.withfudge.com/share/pin-7065)

[![Homepage section with Winter Olympics 2026 coverage, featuring large headline cards with photography, topic labels in blue, and stacked story layouts.](https://pin.fontofweb.com/6618?format=jpg)](https://design.withfudge.com/share/pin-6618)

[Homepage section with Winter Olympics 2026 coverage, featuring large headline cards with photography, topic labels in blue, and stacked story layouts.](https://design.withfudge.com/share/pin-6618)

[![Footer area with deep navy background, yellow Support the Guardian branding, multi-column link lists, and a back-to-top circular button.](https://pin.fontofweb.com/6617?format=jpg)](https://design.withfudge.com/share/pin-6617)

[Footer area with deep navy background, yellow Support the Guardian branding, multi-column link lists, and a back-to-top circular button.](https://design.withfudge.com/share/pin-6617)

## Overview

The Guardian's design system is built for high-volume news publishing, combining editorial authority with approachable readability. The visual language rests on a stark contrast between deep navy structural elements and warm white content surfaces. Typography drives the hierarchy: sharp, elegant serif headlines in GH Guardian Headline establish tone and importance, while Guardian Egyptian delivers long-form body text with comfortable line measure. Guardian Sans handles all navigation, labels, and supporting metadata with clean neutrality.

The system uses color strategically to guide attention. Warm red accents mark inline links and interactive elements within articles, while a bright yellow serves as the primary call-to-action color for subscriptions and support messaging. Photography sits prominently in the layout, often bleeding to edges or occupying dominant positions in card compositions. The overall impression is one of institutional confidence—serious journalism presented with contemporary clarity and enough warmth to invite sustained reading.

## Colors

| token | value | use |
|---|---|---|
| ink | #121212 | Primary text, headlines, body copy |
| ink-secondary | #333333 | Secondary text, captions, metadata |
| ink-tertiary | #707070 | Timestamps, tertiary labels |
| canvas | #FFFFFF | Page background, content surfaces |
| surface-navy | #041F4A | Header bar, footer background, navigation wells |
| surface-navy-deep | #052962 | Navigation pills, gradient endpoints |
| accent-red | #C70000 | Inline article links, active states, editorial highlights |
| accent-red-warm | #C74600 | Variant red for specific section branding |
| accent-yellow | #FFE500 | Primary CTA buttons, support messaging, subscription prompts |
| accent-blue | #0077B6 | Topic labels, section identifiers, ski and sport accents |
| border-light | #DCDCDC | Dividers, card borders, subtle separators |
| border-muted | #506991 | Footer borders, secondary dividers on navy |

The color model operates in three modes. Light mode dominates: white canvas with near-black ink and red accents for interactivity. Dark navy surfaces appear in structural zones—the header, footer, and occasional navigation bands—where white text reverses out for legibility. Accent colors are disciplined: yellow is reserved for revenue-related actions, red for editorial links and urgency, blue for topical classification. Photography introduces its own palette, but UI colors remain stable across content types.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | GH Guardian Headline | 2.125rem | 300 | 1.15 | normal | Major homepage headlines, feature titles |
| section-display | GH Guardian Headline | 1.75rem | 700 | 1.15 | normal | Section headers, category titles |
| article-headline | GH Guardian Headline | 2.125rem | 300 | 1.15 | normal | Article page titles |
| card-headline | GH Guardian Headline | 1.5rem | 700 | 1.15 | normal | Card titles, story headlines |
| subheadline | GH Guardian Headline | 1.0625rem | 500 | 1.15 | normal | Subheads, bylines, secondary headings |
| body | Guardian Egyptian | 1.0625rem | 400 | 1.4 | normal | Article body text, descriptions |
| label | Guardian Sans | 0.875rem | 400 | 1.3 | normal | Timestamps, captions, metadata |
| navigation | Guardian Sans | 0.875rem | 400 | 1.3 | normal | Nav items, topic labels, footer links |
| support-cta | Guardian Sans | 1.0625rem | 700 | 1.3 | normal | Support buttons, subscription CTAs |

The design facts identify several font family labels that appear in the source data: GH Guardian Headline, Guardian Egyptian, Guardian Sans, Guardian Sans-6430536669070680467, Guardian Sans-6681715598841418084, Times, and Times New Roman. The Guardian Sans tokens used above consolidate the two Guardian Sans variants (Guardian Sans-6430536669070680467 for Regular and Guardian Sans-6681715598841418084 for Bold) under the shared Guardian Sans family name. Times and Times New Roman appear in the data as fallback or system font references. GH Guardian Headline was designed by Tim Ripper and is available from Commercial Type Inc. Guardian Egyptian was designed by Paul Barnes and Christian Schwartz, available from Paul Barnes And Christian Schwartz Commercial Type. Guardian Sans was designed by Christian Schwartz and Paul Barnes, available from Commercial Type Inc. Verify licensing for these families before production use.

The typographic system creates clear role separation through family choice rather than weight alone. Headlines use the light weight of GH Guardian Headline for an elegant, open feel that distinguishes editorial voice from the denser body text. Guardian Egyptian's slightly larger x-height and generous leading support extended reading. Guardian Sans at 14px handles all interface chrome with crisp neutrality.

## Layout

The layout follows a centered content well with responsive margins. The main content area typically runs with `padding: 0 1.25rem` and a maximum width that centers the reading experience. Article pages use a narrower measure for body text—approximately 40-45rem—while homepage cards and feature layouts expand to wider grids.

Vertical rhythm is established through consistent section spacing. Major content blocks separate with `3rem` margins. Internal element spacing uses the `0.125rem` base unit, with common increments at `0.5rem`, `0.75rem`, `1rem`, and `1.5rem`. The grid is fundamentally asymmetric: article pages place the main content left-of-center with a sidebar for related stories, while homepage layouts use multi-column card arrangements with varying image sizes.

The header occupies a fixed navy band with internal padding of `0.5rem 1.25rem`. Navigation pills sit below the main masthead, with a gradient fade on overflow. The footer expands to full width with deep navy background, using multi-column link lists with `1.25rem` gutters between columns. Cards on homepage sections use `0.625rem` gutters and stack vertically with `2.5rem` bottom margins.

## Visual language

Photography is treated as primary content, not decoration. Hero images on article pages appear full-width above the headline, with captions in muted gray below. Homepage cards pair images with headlines in asymmetric layouts—sometimes image-left, sometimes image-top, with the image occupying 50-60% of the card area. Images are uncropped in display, preserving editorial context.

Lines and borders are used sparingly and precisely. A `1px` solid rule in `#DCDCDC` separates major sections. The footer uses a muted navy border `#506991` for internal column dividers. No shadows appear in the interface; depth is created through color contrast and scale rather than elevation.

The Guardian's visual identity is carried through the masthead logo, which appears in white against the navy header. Section branding uses color coding: red underlines for active navigation, blue accents for sport and topical content, yellow for support messaging. The overall effect is clean, authoritative, and immediately recognizable as a news publication of record.

## Components

### Header

- **Anatomy**: Navy background bar with Guardian logo right-aligned, section navigation left-aligned, support CTA and utility links top-right.
- **Surface**: `background-color: {colors.surface-navy}` with white text and logo.
- **Typography**: Navigation uses `{typography.navigation}` in white; active section receives a red underline accent.
- **Spacing**: `0.5rem 1.25rem` vertical and horizontal padding.
- **Composition**: Logo anchors the right edge; navigation pills scroll horizontally with a gradient fade indicating overflow.

### Navigation Pills

- **Anatomy**: Horizontal scrollable list of section links below the main header.
- **Surface**: `background-color: {colors.surface-navy-deep}` with gradient overlay on right edge (`linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(5, 41, 98) 100%)`).
- **Typography**: `{typography.navigation}` in white.
- **Spacing**: `0.5rem 0.75rem` per pill; `0.5rem` gap between items.
- **Shape**: No border radius; sharp rectangular forms.

### Article Card

- **Anatomy**: Image container paired with headline, standfirst, and metadata.
- **Surface**: White background; optional `1px` bottom border in `{colors.border-light}`.
- **Typography**: Headline uses `{typography.card-headline}`; standfirst uses `{typography.body}`; timestamp uses `{typography.label}`.
- **Spacing**: `2.5rem` bottom margin; `0.625rem` internal gutter.
- **Composition**: Image and text stack vertically on narrow layouts; side-by-side on wider breakpoints with image dominant.

### Topic Tag

- **Anatomy**: Rounded pill containing topic text.
- **Surface**: Transparent background with `1px` border in `{colors.border-light}`.
- **Typography**: `{typography.label}` in `{colors.accent-blue}`.
- **Shape**: `0.75rem` border radius.
- **Spacing**: `0.125rem 0.5625rem` padding.

### Support CTA Button

- **Anatomy**: Pill-shaped button with text and arrow icon.
- **Surface**: `background-color: {colors.accent-yellow}`; text in `{colors.ink}`.
- **Typography**: `{typography.support-cta}`.
- **Shape**: Full pill (`9999px` radius).
- **Spacing**: `0.5rem 1rem` padding.
- **Variants**: Header variant appears compact; footer variant larger with "Support the Guardian" display text above.

### Article Body

- **Anatomy**: Sequential paragraphs with inline links, occasional subheads.
- **Surface**: White background.
- **Typography**: `{typography.body}` for paragraphs; `{typography.subheadline}` for subheads.
- **Links**: `{colors.accent-red}` with no underline in default state.
- **Spacing**: `0.75rem` bottom margin on paragraphs.

### Footer

- **Anatomy**: Full-width navy band with multi-column link lists, support messaging, and back-to-top button.
- **Surface**: `background-color: {colors.surface-navy}`; `1px` top border in `{colors.border-muted}` for internal dividers.
- **Typography**: Column headers use `{typography.support-cta}` in `{colors.accent-yellow}`; links use `{typography.label}` in white.
- **Spacing**: `1.25rem` column gutters; `0.75rem` vertical spacing between links.
- **Composition**: Four to five columns on desktop; support messaging prominent in rightmost column.

### Back to Top Button

- **Anatomy**: Circular button with upward arrow.
- **Surface**: White background with navy icon.
- **Shape**: `50%` border radius for perfect circle.
- **Position**: Fixed or inline at footer bottom-right.

## Responsive behavior

The system adapts through content reflow rather than dramatic breakpoint shifts. Article pages maintain a readable measure across widths, with the sidebar collapsing below the main content on narrow viewports. Homepage cards transition from multi-column grids to single-column stacks, with images maintaining aspect ratio.

Navigation pills become horizontally scrollable on all widths, with the gradient fade indicating additional content. The header compresses by hiding utility links behind menus, preserving the logo and primary section navigation.

Typography scales down modestly: card headlines may drop from `1.5rem` to `1.25rem`, body text remains stable at `1.0625rem` for readability. Section spacing reduces from `3rem` to `2rem` on narrow viewports.

Touch targets maintain minimum `2.75rem` height for navigation items. The support CTA remains prominent across all breakpoints, often fixed in the header on scroll.

## Practical implementation guidance

### Preserve
- The stark navy-to-white contrast in header and footer; this is central to brand recognition.
- The light weight of GH Guardian Headline for major headlines; heavier weights feel less editorial.
- Red for inline links only; do not extend to buttons or backgrounds.
- Yellow exclusively for support and subscription CTAs.
- The generous line height of Guardian Egyptian body text; compression harms readability.

### Avoid
- Generic sans-serif substitutes for headline text; the serif character is essential.
- Underlined links in default state; the red color alone signals interactivity.
- Shadows or elevation effects; the system is flat by design.
- Rounded corners on cards or major containers; sharp edges maintain editorial seriousness.
- Centered body text; left-aligned ragged right is the established reading pattern.

### Recommended Build Order
1. Establish the type scale with all three font families loaded.
2. Build the header with navy background, white logo, and navigation pills.
3. Implement article body styles with proper measure and link colors.
4. Create card components for homepage layouts.
5. Build the footer with multi-column link structure.
6. Add support CTA components with yellow accent.
7. Implement responsive reflow for navigation and card grids.

### Accessibility
- Ensure navy text on white meets WCAG AA contrast (the `#121212` on `#FFFFFF` exceeds requirements).
- White text on navy `#041F4A` should be verified at smaller sizes; consider `#FFFFFF` on `#052962` for enhanced contrast.
- Red links `#C70000` on white require verification for contrast compliance; consider a darker red variant if needed.
- Support CTAs in yellow `#FFE500` with black text provide excellent contrast.
- Maintain focus indicators for keyboard navigation; the default browser outline may be enhanced with a `2px` offset in accent blue.
- Horizontal scrolling navigation should be operable via keyboard and announce overflow to screen readers.

## Scope note

This guide covers the article page and homepage surfaces visible in the supplied images. Mobile breakpoints, search interfaces, comment sections, video players, and live blog variants are not represented. Interactive states beyond default and hover are not documented. The design facts also reference Times and Times New Roman as additional font family labels. Measurements are derived from the exact values in the design facts and rounded to practical implementation targets.
