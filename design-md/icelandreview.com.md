# How icelandreview.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/icelandreview.com-design)

Last updated: 2026-08-10

## Captured pages

[![Header with Iceland Review logo, navigation dropdowns, and folk music hero image with photo credit](https://pin.fontofweb.com/9128?format=jpg)](https://design.withfudge.com/share/pin-9128)

[Header with Iceland Review logo, navigation dropdowns, and folk music hero image with photo credit](https://design.withfudge.com/share/pin-9128)

[![Article body with red hyperlinks, What's the Story summary box with blue heading and bullet points](https://pin.fontofweb.com/9127?format=jpg)](https://design.withfudge.com/share/pin-9127)

[Article body with red hyperlinks, What's the Story summary box with blue heading and bullet points](https://design.withfudge.com/share/pin-9127)

[![Article with red hyperlinks, summary box, dark section heading, and bordered content block](https://pin.fontofweb.com/9126?format=jpg)](https://design.withfudge.com/share/pin-9126)

[Article with red hyperlinks, summary box, dark section heading, and bordered content block](https://design.withfudge.com/share/pin-9126)

[![Clean article body with generous line-height text and atmospheric landscape photography](https://pin.fontofweb.com/9129?format=jpg)](https://design.withfudge.com/share/pin-9129)

[Clean article body with generous line-height text and atmospheric landscape photography](https://design.withfudge.com/share/pin-9129)

## Overview

Iceland Review presents a restrained, editorial news experience built for readability and journalistic clarity. The design system prioritizes long-form text consumption through generous line heights, ample whitespace, and a near-monochromatic palette punctuated by strategic color accents. The visual identity centers on Open Sans as the primary typeface, deployed across all content with subtle weight variations rather than dramatic size contrasts. System-Sansserif appears as a fallback family in the font stack. The overall impression is of a serious publication that lets photography and reporting speak without decorative interference.

The interface maintains a stark light-mode presentation with white backgrounds and near-black text, creating maximum contrast for extended reading sessions. Navigation appears in a compact header bar with dropdown menus, while article content flows in a single-column layout with consistent vertical rhythm. Color is used sparingly and purposefully: red signals hyperlinks and editorial urgency, while a deep blue marks summary headings and secondary accents. Photography receives prominent placement with full-width treatment and understated captions. The system avoids cards, shadows, and rounded corners entirely, favoring flat planes and crisp edges that reinforce the publication's authoritative tone.

## Colors

The palette is intentionally minimal, built around a high-contrast core with two functional accent colors. Every color serves a specific editorial or interactive purpose.

| token | value | use |
|---|---|---|
| ink | `#0A0A0A` | Primary body text, dominant reading color |
| ink-secondary | `#0C0C0C` | Slightly lighter text variants, div content |
| ink-tertiary | `#252525` | Borders, subtle dividers, caption text |
| canvas | `#FFFFFF` | Page background, content areas, summary box fill |
| surface | `#000000` | Header bar background, maximum contrast regions |
| muted | `#54595F` | Section headings, secondary labels, de-emphasized text |
| action | `#BC0404` | Hyperlinks, editorial highlights, source attributions |
| accent-blue | `#334FA0` | Summary box headings, structured content labels |
| accent-blue-alt | `#3351A6` | Blue variant for hover or active link states |

The light canvas dominates every page, with ink text providing the primary reading experience. The action red appears exclusively for inline hyperlinks and source citations like "as reported by RÚV," creating immediate visual distinction for clickable and referenced material. The accent blue appears in "What's the Story?" summary boxes, establishing a consistent pattern for structured information callouts. Dark backgrounds are limited to the header navigation bar, where white or light text reverses out for wayfinding. No dark mode is present in the visible system; the design assumes persistent light conditions optimized for daytime reading.

## Typography

The typographic system relies on Open Sans with weight and size modulation to establish hierarchy. Open Sans serves all content needs, from body paragraphs to headings to navigation. System fonts appear in the header navigation at a slightly smaller size. The design facts also record System-Sansserif as an available family, though it does not appear as the primary face in any captured element.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Open Sans | 1rem | 400 | 1.9 | normal | Article paragraphs, list items, general content |
| body-emphasis | Open Sans | 1rem | 450 | 1.9 | normal | Paragraphs with medium weight for subtle emphasis |
| section-heading | Open Sans | 1.25rem | 600 | 1 | normal | Subsection headings like "Investigation continues internationally" |
| subheading | Open Sans | 1.125rem | 500 | 1.1 | normal | Elevated labels, summary box titles at 18px |
| navigation | System | 0.9375rem | 400 | 2 | normal | Header menu items, dropdown labels |
| system-fallback | System-Sansserif | 1rem | 400 | 1.9 | normal | Fallback sans-serif for system-level rendering |

The body size of 16px with a 30.4px line height creates exceptionally spacious reading conditions, with nearly double the font size in leading. This generous proportion prevents visual fatigue during long articles. Headings compress to 1.0 line height, creating tight visual blocks that contrast with the airy body text. Weight distinctions are subtle: 400 for standard text, 450 for emphasized paragraphs, 500 for subheadings, and 600 for section headings. No bold 700 weight appears in the visible content hierarchy. Letter spacing remains normal throughout, preserving the typeface's open character.

Open Sans is provided by Ascender Corporation. Verify licensing for these families before production use.

## Layout

The layout follows a single-column editorial model with consistent containment and measured spacing. Content occupies a centered container with moderate side padding, creating comfortable reading margins without excessive whitespace.

The header presents a fixed top bar with the Iceland Review logo on the left and navigation categories—News, Culture, Travel, Books—arranged horizontally with dropdown indicators. The header uses a dark background with light text, establishing immediate brand recognition through color reversal. Navigation items carry 10px vertical padding and horizontal margins that center the menu cluster.

Article content flows below without hero interruption, though individual articles may lead with full-width photography. The main content area uses 10px vertical padding on containing divs, with paragraphs separated by 16px bottom margins. This creates a steady vertical rhythm where each text block breathes independently.

Summary boxes break the flow with bordered containers featuring 15px internal padding. These boxes contain bullet-point lists with 40px left indentation, creating clear information hierarchy within the structured content. The boxes appear mid-article to distill key facts, with blue headings that signal their auxiliary role.

Images receive full-width treatment with centered caption text below, set in a smaller or lighter weight than body copy. The photography dominates visually when present, with the interface receding to support rather than compete.

Spacing tokens derive from a 2px base unit, with practical values at 8px, 10px, 15px, 16px, and 40px serving component needs. The 150.4px header margin suggests a centered navigation cluster on wider viewports.

## Visual language

The visual character is austere and Nordic, reflecting the publication's subject matter through design restraint. Flat planes replace dimensional effects: no shadows, no gradients, no rounded corners appear in the interface. Borders are hairline-precise at 0.8px, creating subtle definition for summary boxes without visual weight. All corners remain square at 0rem radius, maintaining the sharp editorial aesthetic.

Photography carries significant expressive load, with atmospheric landscapes and documentary images providing the only visual warmth. Images are uncropped in aspect ratio, presented as the photographer composed them. Captions sit directly below with minimal styling, maintaining the documentary aesthetic.

Color application follows strict editorial conventions. Red appears only for active hyperlinks and source attributions, training readers to recognize actionable or cited content. Blue appears only in summary headings, training recognition of condensed information. The muted gray of section headings creates intermediate hierarchy without competing with body text or accents.

The overall density is low, with generous paragraph spacing and ample margins. This openness suits the publication's long-form journalism, allowing complex narratives to unfold without visual clutter. The system avoids sidebar widgets, related article grids, and promotional interruptions within the reading flow.

## Components

### Article Body

The primary content container presents continuous prose with consistent typographic treatment. Paragraphs use the body token at 16px with 1.9 line height, creating spacious reading conditions. Bottom margins of 16px separate paragraphs. Strong emphasis within paragraphs uses weight 450 or 700 for named entities and key phrases. Links appear in action red without underline in default state, relying on color alone for identification.

### Summary Box

A bordered information module that distills key facts from the article. Anatomy includes a blue heading ("What's the Story?"), followed by bullet-point list items. Surface uses white background with a 0.8px solid border in ink-tertiary. Internal padding measures 15px all around. List items carry 40px left indent with standard bullet markers. Typography uses the subheading token for the title and body token for list content. The box interrupts article flow with 8px bottom margin on preceding elements.

### Section Heading

Subsection dividers within articles, appearing as h2 elements in muted gray. Typography uses the section-heading token at 20px with 600 weight and tight 1.0 line height. Top padding of 10px creates separation from preceding content. The headings read as structural labels rather than display typography, sitting close to the content they introduce.

### Inline Link

Hyperlinks within body text use the action color without text decoration. The red value `#BC0404` provides strong contrast against the near-black body text. Links appear in source attributions ("as reported by RÚV"), named entities, and reference material. No visited state color is visible in the captured content.

### Header Navigation

The top bar contains logo mark and category dropdowns. Surface uses black background with light text. Navigation items use the navigation token at 15px with 30px line height. Dropdown indicators appear as small chevrons beside category labels. Horizontal arrangement with centered cluster via auto margins. The Iceland Review logo appears as white text on a teal or dark rectangular mark.

### Image with Caption

Full-width photographs with centered caption below. Caption text uses reduced size or lighter weight, positioned immediately beneath the image with minimal spacing. Photo credits include attribution to source and publication. Images bleed to container edges when used as article heroes.

## Responsive behavior

The captured content shows desktop presentation with a centered content column. The navigation header maintains horizontal arrangement with dropdown menus. On narrower viewports, the navigation should collapse to a hamburger menu or stacked categories to preserve touch accessibility. The single-column article layout adapts naturally to mobile widths without reflow complexity.

Summary boxes should maintain their bordered structure at reduced widths, with list indentation preserved or slightly reduced. Image captions may require smaller text size on mobile to prevent line-break awkwardness. The generous body line height remains appropriate across viewport sizes, though paragraph margins could tighten slightly on small screens to reduce excessive scrolling.

No breakpoint-specific behavior is visible in the supplied material. Implement fluid typography if desired, though the fixed 16px body size with relative line height provides adequate adaptability.

## Practical implementation guidance

### Preserve
- The spacious 1.9 line height for body text; this is the system's defining readability feature
- Single-color hyperlink treatment in action red without underline
- Flat, shadowless surfaces with hairline borders only
- Full-width photography with minimal caption styling
- The two-accent color discipline: red for links, blue for summary headings
- Generous paragraph spacing at 16px bottom margins
- Square corners at 0rem radius throughout the interface

### Avoid
- Cards, elevated surfaces, or rounded corners that contradict the flat editorial aesthetic
- Multiple typefaces or display fonts that compete with Open Sans
- Underlined links or button-like link treatments
- Sidebar content that interrupts the single-column reading flow
- Dark mode implementations without explicit editorial direction

### Recommended Build Order
1. Establish the typographic foundation with Open Sans at 16px/1.9 line height
2. Implement the light canvas with ink text and verify contrast ratios
3. Build the header navigation with dark surface and centered menu cluster
4. Create article body styles with paragraph spacing and link colors
5. Add summary box component with bordered container and blue heading
6. Implement image caption treatment and full-width photography rules
7. Apply final spacing refinements and responsive adjustments

### Accessibility
- The high contrast between `#0A0A0A` text and `#FFFFFF` background exceeds WCAG AAA requirements
- Link color `#BC0404` against white passes AA large text and AA normal text thresholds; verify against the near-black body text for adjacent non-link text distinction
- The 1.9 line height supports readers with dyslexia and visual tracking needs
- Ensure dropdown navigation is keyboard accessible with visible focus indicators
- Provide skip links for header navigation to reach article content directly

## Scope note

This guide covers the article reading experience and header navigation as visible on news article pages. Footer content, archive listings, search results, comment systems, and subscription flows are not represented in the supplied material. Interactive states including hover, focus, active, and visited links are not documented from still images. System-Sansserif is recorded in the design facts but does not appear as a primary face in captured content.
