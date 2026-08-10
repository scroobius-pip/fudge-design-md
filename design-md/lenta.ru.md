# How lenta.ru is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lenta.ru-design)

Last updated: 2026-08-10

## Captured pages

[![Article page with large Lato Black headline, author byline with avatar, body text in serif, and inline image with caption credit line](https://pin.fontofweb.com/9088?format=jpg)](https://design.withfudge.com/share/pin-9088)

[Article page with large Lato Black headline, author byline with avatar, body text in serif, and inline image with caption credit line](https://design.withfudge.com/share/pin-9088)

[![Weather article showing section label, editor credit, body paragraphs with embedded photo of pedestrians in snow, and minimal sidebar](https://pin.fontofweb.com/9087?format=jpg)](https://design.withfudge.com/share/pin-9087)

[Weather article showing section label, editor credit, body paragraphs with embedded photo of pedestrians in snow, and minimal sidebar](https://design.withfudge.com/share/pin-9087)

[![Long-form weather report with multi-line headline, pull quote with red quotation marks, and centered attribution to Hydrometeorological Center](https://pin.fontofweb.com/9078?format=jpg)](https://design.withfudge.com/share/pin-9078)

[Long-form weather report with multi-line headline, pull quote with red quotation marks, and centered attribution to Hydrometeorological Center](https://design.withfudge.com/share/pin-9078)

[![Sports article with reaction widget showing emoji counters, inline source link in red, and football player photograph with agency credit](https://pin.fontofweb.com/9077?format=jpg)](https://design.withfudge.com/share/pin-9077)

[Sports article with reaction widget showing emoji counters, inline source link in red, and football player photograph with agency credit](https://design.withfudge.com/share/pin-9077)

## Overview

Lenta.ru presents a direct, high-contrast editorial experience built for rapid news consumption. The visual system centers on dramatic size contrast: massive geometric sans-serif headlines in Lato Lenta Black dominate the page, while Source Serif Pro Lenta handles long-form reading at a comfortable 17 pixels. The palette is almost entirely grayscale, with a single vibrant red reserved for interactive elements, source citations, and occasional emphasis. This restraint keeps attention on photography and text hierarchy rather than decorative chrome. The layout follows a classic single-column editorial model with generous margins, occasional breakout images, and minimal sidebar intrusion. Every element serves the reading flow: headlines announce, body text explains, and the sparse color system signals what can be tapped or followed.

## Colors

The color system is deliberately austere, built on a grayscale foundation with one functional accent. This reflects the serious news context and ensures photographs remain the primary source of color on the page.

| token | value | use |
|---|---|---|
| ink | #292929 | Primary text, headlines, body copy, navigation |
| muted-ink | #999999 | Secondary text, timestamps, photo credits, inactive states |
| canvas | #FFFFFF | Page background, card surfaces, input fields |
| surface | #F0F0F0 | Reaction widget backgrounds, subtle containment areas |
| hairline | #EAEAEA | Horizontal rules, dividers, inset borders, blockquote borders |
| action | #CC3333 | Inline links, source citations, quotation mark accents, active indicators |
| action-hover | #000000 | Link hover states, pressed interactions |

The grayscale progression from ink to hairline provides four distinct value steps for establishing hierarchy without introducing chromatic noise. The action red appears sparingly and always carries semantic weight: it marks something clickable, attributable, or emphasized. Body backgrounds remain pure white, while #F0F0F0 appears only for contained interactive elements like reaction buttons. No dark mode is visible in the supplied material; the system assumes light-background reading throughout.

## Typography

Three type families create a clear functional division: Lato Lenta for display and interface elements, Source Serif Pro Lenta for reading text, and System-Sansserif for structural navigation and metadata. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lato Lenta | 2rem | 900 | 1.1 | normal | Article headlines, page titles |
| section-display | Lato Lenta | 1.125rem | 400 | 1.25 | normal | Section labels, deck text, subheads |
| body | Source Serif Pro Lenta | 1.0625rem | 400 | 1.35 | normal | Article paragraphs, captions, pull quotes |
| label | Lato Lenta | 0.75rem | 400 | 1.25 | normal | Timestamps, photo credits, reaction counts |
| navigation | System-Sansserif | 1rem | 400 | 1 | normal | Menu items, breadcrumbs, structural links |
| byline | System-Sansserif | 1rem | 700 | 1 | normal | Author names, editor credits |
| pull-quote | Source Serif Pro Lenta | 1.0625rem | 400 | 1.35 | normal | Extracted quotations with accent marks |

The headline scale is aggressive: at 32 pixels and 900 weight, Lato Lenta Black produces an almost poster-like impact that distinguishes Lenta from more restrained competitors. This pairs with 18 pixel section labels in regular weight that provide context without competing. The body size of 17 pixels with 22.95 pixel line height yields a comfortable 1.35 ratio for Cyrillic text. System-Sansserif at 16 pixels with tight 16 pixel line height handles navigation and metadata with mechanical efficiency. No italic styles are visible in the supplied material; emphasis is achieved through weight, color, or size rather than slant.

## Layout

The page structure follows a centered single-column model with variable inset margins that create reading zones. The main content area typically sits within 90 pixel side margins (5.625rem), expanding to 130 pixels (8.125rem) for certain breakout elements. This asymmetry creates visual interest while maintaining alignment integrity.

Content hierarchy flows vertically: section label, headline, byline with avatar, then body paragraphs with inline images. Images float right or center within the text flow, breaking the column rhythm without destroying it. The top of articles often carries a hairline rule in #EAEAEA that separates header navigation from story content.

Spacing follows a consistent paragraph rhythm: 20 pixel (1.25rem) gaps between paragraphs, 15 pixel (0.9375rem) gaps between secondary elements, and 10 pixel (0.625rem) internal padding for contained components. Negative margins appear occasionally for visual correction, such as -10 pixel adjustments to tighten label-to-headline relationships.

The layout does not employ a complex grid system visible in the supplied pages. Instead, it relies on straightforward block flow with strategic margin variations. Breakout images occasionally extend beyond the standard content inset, creating moments of expanded visual field before text resumes its narrower measure.

## Visual language

The overall impression is one of editorial urgency delivered with typographic confidence. The massive headlines create immediate visual entry points, while the serif body text establishes credibility and reading comfort. Photography is treated journalistically: images carry credit lines in muted gray, appear at natural aspect ratios, and serve the story rather than decorating the page.

The single red accent (#CC3333) functions as a signal color. It appears on inline links, source names like "The Sun" or "канале", and the large quotation marks that introduce pull quotes. This limited use makes every red element feel intentional and clickable. The quotation marks in pull quotes are oversized and colored red, transforming a structural element into a visual accent.

Horizontal rules in #EAEAEA separate content zones with minimal weight. These 1 pixel hairlines appear above comment sections, below headlines, and between related modules. They provide structure without the heaviness of card-based layouts.

Author bylines include small circular avatars, creating a human touch in an otherwise austere system. The avatar sits beside the author name and editor designation, establishing provenance without demanding attention.

## Components

### Article headline

- **Anatomy**: A single `h1` element containing the story title, occasionally with nested `span` elements for styling control.
- **Surface and text color**: `{colors.ink}` on `{colors.canvas}` background.
- **Typography**: `{typography.hero-display}` at 2rem, 900 weight, 1.1 line height.
- **Spacing**: 20 pixel bottom margin (1.25rem), zero top margin.
- **Composition**: Full width of content column, left-aligned, no maximum width constraint visible.

### Section label

- **Anatomy**: A `div` or `span` preceding the headline, indicating the story category or subcategory.
- **Surface and text color**: `{colors.muted-ink}` text on `{colors.canvas}`.
- **Typography**: `{typography.section-display}` at 1.125rem, 400 weight.
- **Spacing**: 10 pixel top padding, negative 10 pixel top margin with 15 pixel bottom margin for tight headline coupling.
- **Variants**: May include editor credit in parentheses, rendered in the same style.

### Body paragraph

- **Anatomy**: `p` elements containing running text, with occasional `a` elements for inline links.
- **Surface and text color**: `{colors.ink}` for text, `{colors.action}` for links, `{colors.canvas}` background.
- **Typography**: `{typography.body}` at 1.0625rem, 400 weight, 1.35 line height.
- **Spacing**: 20 pixel bottom margin between paragraphs.
- **Composition**: Left-aligned, full content column width, comfortable measure for Cyrillic reading.

### Inline image

- **Anatomy**: `div` container with `img`, followed by credit line in `span` or `div`.
- **Surface and text color**: Image displayed at natural color; credit line in `{colors.muted-ink}`.
- **Typography**: Credit line uses `{typography.label}` at 0.75rem.
- **Spacing**: Margins vary; some images sit flush with text, others have breakout margins.
- **Composition**: Typically right-floating or centered within text flow; credit appears below right-aligned.

### Pull quote

- **Anatomy**: Block-level quotation with large decorative quotation marks, attribution line.
- **Surface and text color**: `{colors.ink}` text; quotation marks in `{colors.action}`.
- **Typography**: `{typography.pull-quote}` for body; attribution in `{typography.label}` or `{typography.section-display}`.
- **Spacing**: Generous vertical margins, centered alignment.
- **Composition**: Set off from body text by spacing rather than borders; the red quotation marks provide the only chromatic interruption in the reading flow.

### Reaction widget

- **Anatomy**: Horizontal row of pill-shaped buttons containing emoji icons and vote counts.
- **Surface and text color**: `{colors.surface}` background pills; `{colors.muted-ink}` for counts; `{colors.ink}` for active states.
- **Shape**: Pill shape with 9999px border radius.
- **Spacing**: 4 pixel vertical padding, 10 pixel horizontal padding per pill; 5 pixel gaps between pills.
- **Typography**: Counts in `{typography.label}` at 0.75rem.
- **Composition**: Left-aligned below article content, compact horizontal arrangement.

### Author byline

- **Anatomy**: Circular avatar image beside author name and role designation.
- **Surface and text color**: `{colors.ink}` for name, `{colors.muted-ink}` for role.
- **Typography**: `{typography.byline}` for name; role in `{typography.label}` or lighter weight.
- **Spacing**: Tight coupling with headline, typically 10-15 pixel vertical proximity.
- **Shape**: Avatar appears circular, though exact radius not confirmed in supplied material.

## Responsive behavior

The supplied images show desktop presentation only. Based on the visible layout patterns, the following responsive adaptations are recommended:

At narrower viewports, the 90-130 pixel side margins should collapse to a minimum comfortable reading inset, likely 20 pixels. The headline scale may reduce from 2rem to maintain screen fit without excessive wrapping. Body text at 1.0625rem should remain comfortable on mobile devices and may stay constant.

Images that float right in desktop layouts should likely stack full-width above or within the text flow on narrow screens. The reaction widget's horizontal pill arrangement should persist but may wrap to two rows if space is constrained.

The generous paragraph spacing of 1.25rem supports readability across viewport sizes and should be maintained. Hairline dividers remain effective at any width.

## Practical implementation guidance

### Preserve
- The stark contrast between 900-weight Lato Lenta headlines and 400-weight Source Serif Pro Lenta body text. This pairing defines the brand.
- The single red accent for all interactive and attributable elements. Do not introduce additional accent colors.
- The generous paragraph spacing and comfortable line height for body text; these support extended reading.
- The journalistic treatment of photography with visible credit lines.

### Avoid
- Adding background colors to body text areas; the white canvas is essential to the system's clarity.
- Using the headline font for body text or vice versa; the functional division is absolute.
- Introducing card-based containers or shadow effects; the flat, rule-based structure is intentional.
- Reducing headline size below 1.5rem; the dramatic scale is a core brand expression.

### Recommended build order
1. Establish the type system with Lato Lenta and Source Serif Pro Lenta loaded at correct weights.
2. Implement the color palette with grayscale foundation and single red accent.
3. Build the article page template: section label, headline, byline, body paragraph flow.
4. Add inline image handling with credit line styling.
5. Implement pull quote component with red quotation marks.
6. Add reaction widget with pill-shaped buttons.
7. Refine spacing scale and margin insets across viewport sizes.

### Accessibility
- Ensure the 1.35 line height for body text supports readability for users with low vision.
- The #CC3333 red on white meets minimum contrast for large text but should be verified against WCAG AA for smaller sizes; consider darkening to #B52B2B if needed for 4.5:1 compliance at body sizes.
- Headline hierarchy should use proper `h1` through `h3` structure without skipping levels.
- Reaction widget emoji buttons need accessible labels describing each emotion option.
- Focus indicators should be visible on all interactive elements; the default browser outline may be enhanced with a 2px offset in the action color.

## Scope note

This guide covers the article page surface visible in the supplied material: headline, byline, body text, inline images, pull quotes, and reaction widgets. Navigation headers, footers, homepage layouts, search interfaces, and mobile-specific adaptations are not represented.
