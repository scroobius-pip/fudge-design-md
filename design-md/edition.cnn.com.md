# How edition.cnn.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/edition.cnn.com-design)

Last updated: 2026-08-10

## Captured pages

[![Article body text showing Noto Serif Bold Italic in a long-form news story about an oil tanker seizure, with generous line spacing and dark gray body copy.](https://pin.fontofweb.com/9108?format=jpg)](https://design.withfudge.com/share/pin-9108)

[Article body text showing Noto Serif Bold Italic in a long-form news story about an oil tanker seizure, with generous line spacing and dark gray body copy.](https://design.withfudge.com/share/pin-9108)

[![Article body text with bold and underlined inline links in a measles outbreak story, showing the link styling and paragraph rhythm of CNN's health coverage.](https://pin.fontofweb.com/9107?format=jpg)](https://design.withfudge.com/share/pin-9107)

[Article body text with bold and underlined inline links in a measles outbreak story, showing the link styling and paragraph rhythm of CNN's health coverage.](https://design.withfudge.com/share/pin-9107)

[![Sports article lead with bold dateline and underlined inline links, demonstrating the typographic hierarchy for location-based news intros.](https://pin.fontofweb.com/9106?format=jpg)](https://design.withfudge.com/share/pin-9106)

[Sports article lead with bold dateline and underlined inline links, demonstrating the typographic hierarchy for location-based news intros.](https://design.withfudge.com/share/pin-9106)

[![Politics article with navigation bar, hero image with caption, and body text showing the full article template including section labels and photo credits.](https://pin.fontofweb.com/9105?format=jpg)](https://design.withfudge.com/share/pin-9105)

[Politics article with navigation bar, hero image with caption, and body text showing the full article template including section labels and photo credits.](https://design.withfudge.com/share/pin-9105)

## Overview

CNN's international edition presents a deliberately restrained editorial design system that prioritizes readability and journalistic authority over visual spectacle. The interface operates on a stark binary of black ink against white canvas, with typography doing the heavy lifting to establish hierarchy and tone. The system separates functional navigation from expressive content: a clean sans-serif family handles wayfinding and labels, while a traditional serif face carries the emotional weight of reported stories. This division creates a recognizable CNN voice—modern and efficient at the margins, classic and trustworthy in the narrative core.

The design philosophy centers on uninterrupted reading flow. Articles are composed as continuous vertical streams with minimal chrome, generous paragraph spacing, and consistent typographic rhythm. Visual interest comes from photography and the assertive styling of inline links rather than from colored panels, cards, or decorative elements. The overall impression is of a publication that trusts its content to command attention without systemic embellishment.

## Colors

The palette is severely limited, functioning as a high-contrast monochrome system with a single mid-tone for secondary information.

| token | value | use |
|---|---|---|
| ink | #0C0C0C | Primary text, headlines, datelines, navigation labels |
| body | #0C0C0C | Long-form article text, default reading copy |
| muted-ink | #6E6E6E | Photo captions, image credits, secondary metadata |
| link | #000000 | Inline text links with underline decoration |
| canvas | #FFFFFF | Page background, article surfaces, navigation bar |
| surface | #FFFFFF | Content containers, modal backgrounds |
| border | #6E6E6E | Subtle dividers, hairline separators when needed |

The near-black ink (#0C0C0C) rather than pure black (#000000) for text creates a slightly softened reading experience while maintaining strong contrast against the white canvas. Pure black is reserved specifically for link elements, creating a subtle but perceptible hierarchy between body text and interactive text. The muted gray (#6E6E6E) serves exclusively for photographic attribution and caption material, keeping it visually subordinate to the narrative. There are no accent colors, no brand red in the content area, and no tinted backgrounds—this is a system that relies on typographic weight and spatial rhythm rather than chromatic variety.

## Typography

Two families divide the typographic labor: Cnn Sans W 04 for the functional layer and Noto Serif for the editorial voice.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Noto Serif | 1.125rem | 400 | 1.6 | 0em | Article paragraphs, running text |
| body-bold | Noto Serif | 1.125rem | 700 | 1.6 | 0em | Emphasized phrases within body |
| body-bold-italic | Noto Serif | 1.125rem | 700 | 1.6 | 0em | Pull quotes, attributed emphasis |
| label | Cnn Sans W 04 | 0.875rem | 400 | 1.25 | 0.02em | Section labels, metadata tags |
| navigation | Cnn Sans W 04 | 0.875rem | 400 | 1.25 | 0.01em | Top-bar section links |
| caption | Noto Serif | 0.875rem | 400 | 1.4 | 0em | Image captions, photo credits |
| dateline | Noto Serif | 1.125rem | 700 | 1.6 | 0em | Location leads, story openers |

Noto Serif appears at 1.125rem (18px) with a generous 1.6 line height, creating comfortable measure for long reading sessions. The Bold Italic variant appears in pull quotes and emphasized narrative moments, lending a slightly more literary voice to the news reportage. Cnn Sans W 04 handles all interface text at 0.875rem (14px), keeping navigation compact and unobtrusive. The tracking on sans-serif labels is slightly opened to compensate for the smaller size and lighter weight.

Verify licensing for these families before production use. No designer or vendor attribution is supported for either family in the available records.

## Layout

The article layout follows a single-column reading model with controlled measure. Content is centered in the viewport with generous side margins that expand on wider screens, keeping line lengths optimal for sustained reading. The basic structure stacks vertically: navigation bar, optional hero image with caption, dateline or section label, article headline, and continuous body text.

Spacing derives from a 0.25rem unit base. Key layout values include:

- **paragraph-gap**: 1.5rem (24px) between paragraphs, creating clear but not excessive breaks in the reading flow
- **content-pad**: 3rem (48px) horizontal padding for article containers at comfortable widths
- **narrow-pad**: 0.75rem (12px) for tight component internal spacing
- **section**: 6rem (96px) for major vertical divisions between page regions

The navigation bar sits flush at the top with minimal height, presenting section links in a horizontal row. Article images span the full content width with captions tucked beneath in italic muted text. There are no sidebar elements, no floating widgets, and no mid-article ad breaks visible in the captured layouts—just the essential content stream.

## Visual language

The visual character is austere and institutional, communicating credibility through restraint. Photography carries the emotional and informational payload, while the typography provides steady, unadorned narration. The design avoids cards, pills, badges, or other container shapes that would fragment the reading experience. Corners are sharp throughout; there is no border-radius on any visible element.

Inline links are the primary interactive visual element, rendered in bold weight with underline decoration in pure black. This makes them immediately scannable within paragraphs without requiring color shifts that would disrupt the monochrome reading field. The bold weight creates sufficient distinction even for colorblind readers or in grayscale conditions.

Image captions adopt an italic voice in the muted gray, visually separating attribution from narrative while maintaining the serif family connection. This creates a gentle hierarchy: the photograph speaks, the caption whispers, and the article text carries the main argument forward.

## Components

### Article body

- **Anatomy**: Continuous vertical stack of paragraph blocks with no internal borders or background separation
- **Surface and text color**: `{colors.canvas}` background, `{colors.body}` text
- **Typography**: `{typography.body}` for default paragraphs, `{typography.body-bold}` for emphasized phrases, `{typography.body-bold-italic}` for attributed quotes or special emphasis
- **Shape and border**: No border, no border-radius, flush edges
- **Spacing**: `{spacing.paragraph-gap}` between paragraphs
- **Composition**: Full content width up to a maximum comfortable measure, centered in viewport

### Inline link

- **Anatomy**: Text span within paragraph flow
- **Surface and text color**: `{colors.link}` text, no background change
- **Typography**: Bold weight (700) with underline decoration, inheriting size from parent paragraph
- **Shape and border**: No border, no padding, no radius
- **Spacing**: Inline with surrounding text
- **Composition**: Underline sits close to baseline, creating dense visual anchors within text blocks

### Navigation bar

- **Anatomy**: Horizontal row of text links at page top
- **Surface and text color**: `{colors.canvas}` background, `{colors.ink}` text
- **Typography**: `{typography.navigation}`
- **Shape and border**: No visible border or shadow, flush with viewport edges
- **Spacing**: Compact vertical padding, horizontal distribution of links
- **Composition**: Left-aligned or evenly distributed section labels

### Image with caption

- **Anatomy**: Full-width image with text caption below
- **Surface and text color**: Image as provided, caption in `{colors.muted-ink}`
- **Typography**: `{typography.caption}` for caption text, italic style
- **Shape and border**: No border on image, no radius
- **Spacing**: Tight coupling between image and caption, generous margin above and below the figure
- **Composition**: Image bleeds to content edges, caption indented or aligned to content margin

### Dateline

- **Anatomy**: Bold location name followed by em-dash and narrative continuation
- **Surface and text color**: `{colors.ink}` text
- **Typography**: `{typography.dateline}`
- **Shape and border**: No special container
- **Spacing**: Standard paragraph spacing, often first element after headline
- **Composition**: Inline with body text, location name in bold weight creates immediate geographic context

## Responsive behavior

The single-column layout adapts gracefully to narrower viewports by maintaining readable measure through dynamic side margins. At very narrow widths, the content-pad reduces to narrow-pad to preserve horizontal space for text. The navigation bar may collapse to a menu trigger or horizontal scroll on small screens, though this behavior should be verified against current implementations.

Typography scales down minimally if at all—the 1.125rem body size appears to be treated as a minimum viable reading size across devices. Images maintain aspect ratio and full content width. Paragraph spacing remains constant to preserve reading rhythm.

For implementation, consider:
- Maintaining 45-75 character measure for body text through max-width constraints
- Preserving generous whitespace above and below images at all breakpoints
- Ensuring inline link underlines remain visible at reduced sizes

## Practical implementation guidance

### Preserve
- The stark monochrome palette with near-black text on pure white
- The serif/sans-serif division between content and navigation
- Bold underlined inline links as the primary interactive pattern
- Generous 1.6 line height for body text
- Italic muted captions for image attribution
- Flush edges and zero border-radius throughout

### Avoid
- Adding background tints, cards, or elevated surfaces to article content
- Using color as the sole link indicator—weight and underline are required
- Reducing body text below 1.125rem for accessibility
- Introducing border-radius on images or containers
- Cluttering the reading stream with mid-content widgets or ads

### Recommended build order
1. Establish the typographic foundation with Noto Serif at 1.125rem/1.6
2. Implement the single-column content container with responsive padding
3. Add the navigation bar with Cnn Sans W 04 labels
4. Style inline links with bold weight and underline
5. Build the image-plus-caption figure component
6. Fine-tune paragraph spacing and vertical rhythm

### Accessibility
- The high contrast between #0C0C0C text and #FFFFFF background exceeds WCAG AAA standards
- Bold weight plus underline for links satisfies requirements without color dependency
- Generous line height and paragraph spacing aid readers with dyslexia or low vision
- Ensure navigation links have adequate touch targets on mobile implementations
- Consider focus indicators that maintain the bold-underline pattern for keyboard navigation

## Scope note

This guide covers the article reading experience on CNN's international edition. The supplied images show body content, navigation, and image-caption combinations from news, health, sports, and politics verticals. Measurements are practical adaptation targets. Header treatments above the navigation bar, footer content, search functionality, video players, advertising units, and mobile-specific layouts are not represented in the available material. Interactive states for links and buttons, dark mode variants, and breakpoint-specific behavior should be verified against live implementation.
