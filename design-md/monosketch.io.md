# How monosketch.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/monosketch.io-design)

Last updated: 2026-08-10

## Captured pages

[![Light-themed Contribution section with coral-outlined GitHub button, pill-shaped sponsor badges, and ASCII cat illustration on white canvas](https://pin.fontofweb.com/6500?format=jpg)](https://design.withfudge.com/share/pin-6500)

[Light-themed Contribution section with coral-outlined GitHub button, pill-shaped sponsor badges, and ASCII cat illustration on white canvas](https://design.withfudge.com/share/pin-6500)

[![Dark terracotta hero slide showing ASCII system architecture diagram with white line-art boxes and monospace labels](https://pin.fontofweb.com/6499?format=jpg)](https://design.withfudge.com/share/pin-6499)

[Dark terracotta hero slide showing ASCII system architecture diagram with white line-art boxes and monospace labels](https://design.withfudge.com/share/pin-6499)

[![Dark slate-blue hero with white ASCII circuit diagram, teal primary action button, and left-aligned product headline](https://pin.fontofweb.com/6498?format=jpg)](https://design.withfudge.com/share/pin-6498)

[Dark slate-blue hero with white ASCII circuit diagram, teal primary action button, and left-aligned product headline](https://design.withfudge.com/share/pin-6498)

## Overview

MonoSketch's design system is built around the aesthetic of ASCII art and terminal culture, using a single monospace type family across every surface. The visual experience alternates between immersive dark hero slides and clean, readable light content sections. The dark heroes use deep slate-blue and terracotta backgrounds with white ASCII line-art diagrams that demonstrate the product's capabilities. Light sections provide documentation, contribution guidelines, and community information on a pure white canvas with black text and selective coral accents. This dual-mode approach creates a rhythm: the dark slides establish technical credibility and visual drama, while the light sections prioritize legibility and action. Every interactive element carries a hard-edged, pixel-perfect shadow offset that reinforces the digital, constructed feel of ASCII graphics. The system is intentionally restrained—one type family, a handful of colors, zero border radius on most elements—to let the ASCII artwork and diagrams remain the visual focus.

## Colors

| token | value | use |
|---|---|---|
| canvas | `#000000` | Deepest background for dark mode heroes, shadow offsets |
| surface | `#FFFFFF` | Primary background for light content sections and cards |
| ink | `#000000` | Primary text on light surfaces, navigation bar background |
| ink-inverse | `#FFFFFF` | Text on dark backgrounds, button fills |
| accent-coral | `#EA5455` | Primary action outlines, sponsor badges, link highlights |
| accent-coral-deep | `#AE445A` | Shadow color for coral-accented elements |
| accent-teal | `#22668D` | Primary action fill on dark backgrounds, muted navigation links |
| accent-teal-light | `#78C1F3` | Footer links on dark surfaces |

The color system operates in two distinct modes. Dark mode heroes use `canvas` or deep terracotta-tinted dark backgrounds with `ink-inverse` text, creating high-contrast environments for white ASCII artwork. Light mode sections invert to `surface` backgrounds with `ink` text. The accent colors are sparingly applied: coral draws attention to calls-to-action and community support elements, while teal anchors the primary conversion button in dark contexts. Shadows are not soft ambient glows but hard, single-color offsets in `canvas` or `accent-coral-deep`, maintaining the crisp, digital character. The palette avoids gradients entirely, relying on flat fills and the offset shadow for depth.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Jetbrains Mono | 2.5rem | 200 | 1.4 | normal | Hero headlines on dark slides |
| section-display | Jetbrains Mono | 1.5rem | 700 | 1.2 | normal | Section headings on light surfaces |
| body | Jetbrains Mono | 1rem | 400 | 1.5 | normal | Paragraphs, navigation, buttons |
| body-large | Jetbrains Mono | 1.2rem | 400 | 1.42 | normal | Descriptive text in hero areas |
| label | Jetbrains Mono | 0.9rem | 400 | 1.2 | normal | Small labels, sponsor badges |
| navigation | Jetbrains Mono | 0.9rem | 400 | 1.2 | normal | Top bar links, footer text |

Jetbrains Mono is the sole type family, used at weights 200, 400, and 700. The ultra-light 200 weight creates an elegant, spacious quality in large hero headlines without sacrificing monospace character. Body text at 400 maintains the terminal aesthetic while remaining readable. The 700 weight is reserved for section headings to establish clear hierarchy. Line heights are generous for the genre—1.4 for heroes, 1.5 for body—preventing the cramped feel common in monospace designs. Verify licensing for this family before production use.

## Layout

The page structure alternates between full-viewport dark hero slides and contained light content sections. Heroes are edge-to-edge with generous internal padding, typically `4rem` to `2rem` depending on context, centering or left-aligning content against the dark background. The hero in pin 6498 shows a split composition: left-aligned text block occupying roughly 40% of the width, with a large ASCII circuit diagram floating on the right. This asymmetric layout lets the artwork breathe while keeping the product message prominent.

Light sections use a centered, narrow content column—approximately `640px` to `720px` effective reading width based on the padding values of `32px` side margins and centered text blocks. The navigation bar is fixed or sticky, with a `surface` background in light mode and `ink` background in dark contexts, containing the product mark left and utility links right.

Spacing follows a `0.25rem` base unit. Section vertical padding is `4rem` (`64px`), creating clear separation between content areas. Component internal padding uses `2rem` (`32px`) for buttons and cards. Tight spacing of `0.5rem` (`8px`) handles paragraph margins and inline element gaps. The shadow system uses a consistent `2.5px` horizontal and vertical offset with `1px` blur, creating a hard, constructed depth effect.

## Visual language

The defining visual characteristic is ASCII line art integrated throughout the interface. In dark heroes, these are functional diagrams—circuit schematics, system architecture maps—rendered in white characters against deep backgrounds. In light sections, decorative ASCII illustrations appear: cats in a field, speech bubbles with monospace text. This artwork is not ornamental filler but proof of the product's purpose.

The shadow treatment is distinctive: single-color, hard-offset shadows with minimal blur. Buttons and outlined elements cast a `2.5px` by `2.5px` shadow in a darker tone of their accent color or in pure black. This creates a pop-up, sticker-like quality that references pixel graphics and early computing interfaces.

The interface avoids curves almost entirely. Primary buttons, cards, and input areas use `0` border radius. Only sponsor badges and similar compact labels use full pill rounding (`9999px`), creating a deliberate contrast between the rigid primary interface and these soft community-support elements. The overall impression is of a precision tool—clean, technical, and slightly playful through its ASCII personality.

## Components

### Navigation bar

- **Anatomy**: Product mark left ("MonoSketch [*]"), utility cluster right with GitHub stars count and primary action button
- **Surface**: `surface` background in light mode, `ink` background in dark mode; full-width with internal padding
- **Typography**: `{typography.navigation}` for links, `{typography.label}` for the stars badge
- **Composition**: Flex row, space-between alignment, vertically centered items

### Primary action button

- **Anatomy**: Text label centered within a rectangular button
- **Surface**: `accent-teal` fill with `ink-inverse` text; or `surface` fill with `accent-coral` text and border
- **Typography**: `{typography.body}`
- **Shape**: `0` border radius, `2px` solid border matching text color
- **Spacing**: `11.2px` vertical padding, `32px` horizontal padding
- **Shadow**: `2.5px 2.5px 1px 0px` offset in `canvas` or `accent-coral-deep`
- **Variants**: Dark hero variant uses teal fill with white text and black shadow; light section variant uses white fill with coral text and coral-deep shadow

### Secondary action button

- **Anatomy**: Icon or text label, sometimes with leading icon (GitHub mark, heart)
- **Surface**: Transparent or white fill with `accent-coral` text and border
- **Typography**: `{typography.body}`
- **Shape**: `0` border radius, `2px` solid `accent-coral` border
- **Shadow**: `2.5px 2.5px 1px 0px` in `accent-coral-deep`
- **Composition**: Full-width in content columns, centered text

### Sponsor badge

- **Anatomy**: Leading icon (heart, coffee cup) followed by label text
- **Surface**: `accent-coral` fill with `ink-inverse` text
- **Typography**: `{typography.label}`
- **Shape**: `9999px` border radius, full pill
- **Spacing**: Compact internal padding, approximately `0.5rem` vertical
- **Composition**: Inline-flex, appearing in pairs or small groups

### Content section

- **Anatomy**: Heading, paragraph block, optional action button or illustration
- **Surface**: `surface` background, `ink` text
- **Typography**: `{typography.section-display}` for heading, `{typography.body}` for paragraphs
- **Spacing**: `64px` vertical padding, `32px` horizontal padding; heading margin-bottom `12.8px`; paragraph margin-top `8px`
- **Composition**: Centered narrow column for text; full-width for ASCII illustrations that extend beyond text measure

### Hero slide

- **Anatomy**: Headline, description, primary action, large ASCII artwork
- **Surface**: `canvas` or deep terracotta-tinted background, `ink-inverse` text
- **Typography**: `{typography.hero-display}` for headline, `{typography.body-large}` for description
- **Spacing**: Generous padding, `80px` top margin for headline in some layouts
- **Composition**: Asymmetric split with text left and artwork right, or centered stacked layout

## Responsive behavior

The design should maintain its monospace character across viewport sizes. The narrow content column in light sections provides natural readability without requiring complex breakpoint changes. Hero slides with side-by-side ASCII artwork should stack vertically on smaller viewports, with the artwork appearing below the text block to preserve the headline's immediate impact. The hard-offset shadows remain consistent at all sizes, though touch targets should expand to at least `44px` height for accessibility. Navigation may collapse to a simplified mark or hamburger pattern on narrow screens, though only desktop layouts are visible in the supplied images.

## Practical implementation guidance

### Preserve
- The single-font-family constraint; do not introduce sans-serif or serif companions
- Hard-offset shadows with minimal blur; avoid soft, diffuse box-shadows
- The two-mode rhythm of dark heroes and light content sections
- Zero border radius on primary interactive elements; reserve pills for badges only
- ASCII artwork as content, not decoration—maintain its crisp, white-on-dark or single-color character

### Avoid
- Gradients, which contradict the flat, terminal-inspired aesthetic
- Border radius on buttons and cards, which softens the technical precision
- Multiple accent colors in the same context; coral and teal serve different modes
- Soft shadows or glow effects that break the pixel-perfect illusion

### Recommended build order
1. Establish the `0.25rem` spacing unit and apply to section padding, component gaps, and type scale
2. Implement Jetbrains Mono at weights 200, 400, 700 with the specified size hierarchy
3. Build the dark hero template with `canvas` background, `ink-inverse` text, and a sample ASCII diagram
4. Create the light section template with `surface` background and centered narrow column
5. Implement the two button variants with their distinct shadow offsets and border treatments
6. Add the navigation bar with mode-aware background switching

### Accessibility
- Ensure `ink-inverse` text on dark backgrounds meets WCAG AA contrast ratios; the white-on-slate-blue and white-on-terracotta combinations should be verified
- Provide focus indicators that match the hard-edged aesthetic, such as `2px` solid outlines with offset
- Maintain logical heading hierarchy: `hero-display` as `h1`, `section-display` as `h2`
- Do not rely on color alone for button state; the shadow offset and border changes provide additional visual cues

## Scope note

This guide covers the marketing page surface of MonoSketch, including the dark hero slides and light content sections for contribution and support information. Mobile layouts, interactive states beyond the static visible presentation, form components, and the sketching application interface itself are not included. The ASCII artwork shown is representative of the product's output style but specific diagram content will vary.
