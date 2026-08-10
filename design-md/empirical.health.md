# How empirical.health is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/empirical.health-design)

Last updated: 2026-08-10

## Captured pages

[![Hero banner with warm terracotta gradient, white headline, and pill CTA over lifestyle photography of older adult with phone](https://pin.fontofweb.com/3215?format=jpg)](https://design.withfudge.com/share/pin-3215)

[Hero banner with warm terracotta gradient, white headline, and pill CTA over lifestyle photography of older adult with phone](https://design.withfudge.com/share/pin-3215)

[![Blog article page with centered black headline, terracotta accent banner, navigation bar, and blockquote with left border](https://pin.fontofweb.com/3214?format=jpg)](https://design.withfudge.com/share/pin-3214)

[Blog article page with centered black headline, terracotta accent banner, navigation bar, and blockquote with left border](https://design.withfudge.com/share/pin-3214)

## Overview

Empirical Health presents a health-tech editorial experience that balances clinical credibility with approachable warmth. The system centers on a cream-white canvas with black typography, punctuated by a distinctive terracotta accent that appears in the brand mark, primary actions, and promotional banners. The visual hierarchy is restrained: one sans-serif family carries all text weights, relying on size and generous whitespace rather than weight contrast to establish structure. The overall impression is of a modern medical journal crossed with a consumer wellness product—authoritative but not austere, warm but not casual.

The design serves two primary contexts visible in the supplied material: a blog article reading experience and a marketing footer with promotional hero. Both share the same restrained palette and spacing logic, suggesting a unified system where content and conversion moments coexist without visual disruption.

## Colors

The palette is intentionally narrow, deriving its character from temperature rather than variety. Warm terracotta against cool cream and stark black creates the signature Empirical Health impression.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, headlines, navigation, body copy |
| canvas | `#FEFBF7` | Page background, announcement banner fill |
| surface | `#FFFFFF` | Button fills, card backgrounds, footer base |
| action | `#B85C4E` | Brand mark, primary CTA text, banner accents, link hover states |
| action-muted | `#D4A59A` | Decorative gradients, blockquote borders, subtle warm separators |
| muted-ink | `#5C5C5C` | Footer links, secondary metadata, captions |

The terracotta family dominates the emotional register. The full action color appears only in high-intent moments: the logo mark, the "Get tested" button text, and the "New" announcement banner. The muted variant softens into atmospheric use, forming the warm gradient of the hero banner and the thin left border of blockquotes. Black carries all reading text without exception; no gray body copy appears. The cream canvas prevents the white surface elements from feeling clinical by introducing a barely perceptible warmth that harmonizes with the terracotta photography tones.

## Typography

The system commits entirely to Manrope, a geometric-humanist sans-serif designed by Mikhail Sharanda. All text is set in Regular weight; the hierarchy is established through size and spacing alone, not weight contrast. This creates a calm, even reading rhythm appropriate for medical content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Manrope | 2.5rem | 400 | 1.2 | -0.01em | Hero banner headlines, major page titles |
| section-display | Manrope | 2rem | 400 | 1.25 | -0.01em | Article headlines, section headers |
| body | Manrope | 1rem | 400 | 1.6 | 0em | Paragraph text, descriptions |
| body-small | Manrope | 0.875rem | 400 | 1.5 | 0em | Metadata, dates, captions, banner text |
| label | Manrope | 0.875rem | 400 | 1.4 | 0em | Button labels, form labels |
| navigation | Manrope | 0.875rem | 400 | 1 | 0em | Primary navigation, dropdown triggers |

The article headline at section-display size is centered with generous line-height, creating a magazine-like entry point. Body text maintains a comfortable 1.6 line-height for extended reading. The negative tracking on display sizes prevents looseness at large scales without becoming tight. Verify licensing for these families before production use.

## Layout

The layout follows a centered content model with full-bleed atmospheric moments. The article page establishes a narrow reading column—approximately 680px at desktop—centered within the viewport, with substantial margins that isolate the text block from peripheral interface elements.

The navigation bar spans full width with internal padding, carrying the logo left and utility actions right. Below it, the announcement banner occupies full width with centered text, creating a horizontal band of warm cream that separates navigation from content without a hard rule.

The hero banner inverts this logic: full-bleed photography with a warm terracotta-to-mauve gradient overlay, text positioned left with comfortable padding, and the subject cropped to the right third. This asymmetric composition preserves readability while leveraging lifestyle photography.

The footer expands into a multi-column link grid, with the brand mark occupying a wide left column and four narrower columns for categorized links. This creates a stable base that anchors the page without competing with content above.

Spacing follows a 0.25rem base unit. Section vertical padding is generous—5rem separates major regions. Content gaps of 1.5rem stack related elements within a section. The announcement banner uses tighter internal padding, approximately 0.75rem vertical, to read as an inline strip rather than a full section.

## Visual language

Photography treatment favors soft-focus lifestyle imagery with warm color grading that harmonizes with the terracotta palette. The hero image shows an older adult in natural light, desaturated and warmed to blend with the overlay gradient rather than compete with it. This suggests a photographic brief: authentic moments, mature subjects, warm processing, shallow depth of field.

The gradient overlay on the hero is not a flat color but a directional wash from deep terracotta left to pale mauve right, creating depth and ensuring text contrast without a harsh scrim. The transition is smooth enough to read as atmospheric rather than decorative.

Iconography is minimal and functional. The logo combines a heart mark with wordmark in matching terracotta. Navigation dropdowns use simple chevrons. The CTA button pairs text with a right arrow, suggesting forward motion without visual weight. No illustrative or decorative graphics appear in the visible material.

The overall character is editorial restraint: every element earns its place, warmth is introduced through color temperature rather than ornament, and the clinical subject matter is made approachable through human photography and generous space.

## Components

### Primary action button

- **Anatomy**: Text label with right-pointing arrow icon, no visible border
- **Surface**: White fill on dark or colored backgrounds; terracotta text
- **Typography**: label token, 0.875rem
- **Shape**: Full pill, 9999px border radius
- **Spacing**: Approximately 1rem horizontal padding, 0.75rem vertical
- **Composition**: Inline with text, typically following a headline and subheadline
- **Variants**: Appears on hero gradient as white pill; on light backgrounds would invert to terracotta fill with white text

### Navigation bar

- **Anatomy**: Logo left, text links center-left, dropdown triggers with chevrons, utility button right
- **Surface**: Transparent or white, no visible border
- **Typography**: navigation token for links, label token for "Download" button
- **Shape**: No border radius on bar; download button uses rounded rectangle with subtle border
- **Spacing**: Generous horizontal padding, approximately 1.5rem between link items
- **Composition**: Flex row, space-between alignment with logo and actions at extremes

### Announcement banner

- **Anatomy**: Full-width strip with centered text, "New" label in action color followed by description and arrow
- **Surface**: canvas background
- **Typography**: body-small token, action color for "New" label, muted-ink or ink for remainder
- **Shape**: No border radius
- **Spacing**: Tight vertical padding, approximately 0.75rem
- **Composition**: Single line, centered, with inline arrow suggesting link behavior

### Article headline block

- **Anatomy**: Centered headline, author name, publication date
- **Surface**: Transparent over canvas background
- **Typography**: section-display token for headline, body-small for metadata
- **Spacing**: 1.5rem between headline and author, 0.5rem between author and date
- **Composition**: Centered alignment, narrow maximum width for headline line breaks

### Blockquote

- **Anatomy**: Left border with indented text, attribution inline or following
- **Surface**: Transparent
- **Border**: 2-3px solid action-muted on left edge
- **Typography**: body token, italic style for quoted text
- **Spacing**: 1.5rem left padding to clear border, 1.5rem vertical margin from surrounding paragraphs
- **Composition**: Full width of content column, left-aligned text within

### Footer

- **Anatomy**: Logo and wordmark left, four category columns right
- **Surface**: White or very light cream
- **Typography**: body-small for links, label weight for column headers
- **Spacing**: 5rem top padding, generous internal column gaps
- **Composition**: Asymmetric grid with brand occupying approximately 30% width, links distributed across remaining space

## Responsive behavior

The visible desktop layout suggests clear adaptation priorities. The centered article column should maintain narrow measure on all viewports—expanding slightly to perhaps 720px on large screens, contracting to comfortable margins on tablets, and retaining side padding on mobile rather than edge-to-edge text.

The hero banner's left-positioned text would likely stack above the photographic subject on narrower viewports, with the gradient overlay becoming more uniform to ensure contrast. The footer columns would collapse from four-across to two-by-two, then single column, with the brand mark remaining prominent at top.

Navigation dropdowns would convert to a mobile menu pattern, though the specific implementation is not visible. The "Download" utility button should remain accessible, potentially simplifying to icon-only at the smallest sizes.

## Practical implementation guidance

### Preserve
- The single-weight typographic system; do not introduce Bold or Semibold where Regular carries the hierarchy
- The warm cream canvas against pure white surfaces; this subtle temperature shift defines the brand
- The terracotta-to-mauve gradient direction on hero overlays, left to right, deep to pale
- Centered article headlines with narrow measure; the editorial character depends on this restraint
- Full-pill buttons with arrow icons; the shape language is consistently rounded

### Avoid
- Heavy drop shadows or elevated cards; the system is flat and atmospheric
- Cool grays or blues that would clash with the warm terracotta photography grading
- Multiple font weights; the calm voice depends on weight consistency
- Dense link clusters without category headers; the footer structure provides necessary wayfinding

### Recommended build order
1. Establish the canvas and ink color tokens with Manrope at Regular weight
2. Build the article page structure: centered column, display headline, body text, blockquote
3. Add the navigation bar with logo, links, and download utility
4. Implement the announcement banner as a full-width, centered strip
5. Create the hero banner component with gradient overlay and pill CTA
6. Construct the footer grid with brand mark and categorized links
7. Fine-tune spacing tokens against actual content

### Accessibility
- Ensure the terracotta action color meets contrast requirements against white; at `#B85C4E` it may be close to the 4.5:1 boundary for small text
- The hero gradient overlay must maintain sufficient contrast for white text; test the pale mauve region specifically
- The centered headline structure should use proper heading hierarchy without skipping levels
- Blockquote left border provides a non-color indicator for quoted content; preserve this for screen reader context
- Navigation dropdowns should be keyboard accessible with clear focus indicators, though the specific interaction pattern is not visible in still images

## Scope note

This guide covers the blog article page and promotional footer visible in the supplied material. Mobile breakpoints, hover and focus states, form components, loading patterns, and the complete icon set are not represented. Measurements are practical adaptation targets derived from the visible desktop layout.
