# How lucumr.pocoo.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lucumr.pocoo.org-design)

Last updated: 2026-08-10

## Captured pages

[![Blog article page with dark navy background, decorative blue camouflage header pattern, Lora serif title "The Final Bottleneck", and Merriweather body text with inline links](https://pin.fontofweb.com/7057?format=jpg)](https://design.withfudge.com/share/pin-7057)

[Blog article page with dark navy background, decorative blue camouflage header pattern, Lora serif title "The Final Bottleneck", and Merriweather body text with inline links](https://design.withfudge.com/share/pin-7057)

[![Page footer with centered copyright text, contact links, and large blue camouflage decorative pattern on dark navy background](https://pin.fontofweb.com/7056?format=jpg)](https://design.withfudge.com/share/pin-7056)

[Page footer with centered copyright text, contact links, and large blue camouflage decorative pattern on dark navy background](https://design.withfudge.com/share/pin-7056)

## Overview

This design system describes a dark-mode personal blog with a distinctive visual identity built on contrast between a pure black canvas and warm, readable serif typography. The site presents long-form technical writing in a focused, immersive reading environment. The canvas is pure black throughout, with no intermediate surface colors for content containers. A signature decorative element appears as organic blue camouflage-like patterns in the header and footer, rendered in varying shades of medium blue against the dark ground. The typographic system pairs Lora, a medium-weight transitional serif, for display headings with Merriweather, a sturdy old-style serif, for all body text and navigation. This combination creates hierarchy through weight and scale rather than dramatic family contrast, maintaining a cohesive, literary feel. The overall impression is of a carefully crafted, personal publishing space that prioritizes readability and calm focus over visual noise.

## Colors

The color system is intentionally restrained, built around a dark-mode foundation with a single warm accent family for interactive elements. The palette derives its character from the pure black canvas, the cool-tinted ink colors, and the medium blue that serves as the primary action color and decorative pattern fill.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, empty space between content areas, footer background |
| ink | `#DCE7F3` | Primary body text, main content paragraphs, footer text |
| muted-ink | `#AEC3D6` | Article titles, section headings, secondary text |
| action | `#66B3FF` | Inline links, navigation links, decorative pattern foreground |
| action-hover | `#96AFDA` | Link hover states, lighter blue for interactive feedback |

The canvas is pure black, creating maximum contrast with the warm-tinted ink colors. No lighter surface color appears in content containers; the black extends uniformly across the page. The ink color `#DCE7F3` is a very light blue-gray that reads as near-white against the dark background, used for all body text to ensure comfortable reading at length. The muted-ink `#AEC3D6` is a noticeably desaturated blue-gray reserved for headings, creating a subtle hierarchy where titles feel slightly softer than body text while remaining highly legible.

The action color `#66B3FF` is a medium-light blue with good saturation that stands out clearly against the black canvas. It serves double duty as the link color and as the primary fill for the decorative camouflage patterns, unifying interactive and ornamental elements. The lighter action-hover `#96AFDA` provides visible feedback for link interactions without shifting hue.

The decorative patterns use multiple overlapping blue tones—ranging from the action blue through lighter sky blues to deeper navy shadows—creating depth through layered transparency rather than additional palette tokens. These pattern variations are image-based and do not require separate color tokens.

## Typography

The typographic system relies on two complementary serif families. Lora, designed by Olga Karpushina and Alexei Vanyashin of Cyreal, serves exclusively for display headings at medium weight. Merriweather, designed by Eben Sorkin, handles all body text, navigation, and meta information in regular and italic cuts. Both families are available under open licenses; verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lora | 3.25rem | 500 | 1.08 | normal | Article titles (H1) |
| section-display | Lora | 2.625rem | 500 | 1.05 | normal | Section headings (H2) |
| body | Merriweather | 1.0625rem | 400 | 1.7 | normal | Primary body paragraphs |
| body-italic | Merriweather-Italic | 1.0625rem | 400 | 1.7 | normal | Emphasized paragraphs, captions |
| body-small | Merriweather | 1rem | 400 | 1.56 | normal | Footer text, secondary content |
| navigation | Merriweather | 1.0625rem | 400 | 1.47 | normal | Site navigation links |
| meta | Merriweather | 1.0625rem | 400 | 1.47 | normal | Dates, bylines, metadata |

Lora appears at two sizes: 52px for article titles and 42px for section headings. Both use medium weight (500) with tight line-height ratios that keep multi-line headings compact. The slight size difference between 52px and 42px establishes clear hierarchy without dramatic scale jumps.

Merriweather body text is set at 17px with a generous 28.9px line-height (1.7 ratio), optimized for extended reading. A smaller 16px size with 25px line-height appears in footer and secondary contexts. The italic variant is used for specific paragraphs and emphasis, maintaining the same metrics as regular body text. Navigation links share the 17px size with slightly tighter 25px line-height.

Letter spacing remains normal throughout, relying on each family's built-in spacing rather than tracked adjustments. The warm, humanist character of both serifs creates a cohesive reading experience that feels personal and crafted rather than institutional.

## Layout

The layout follows a centered single-column structure with generous horizontal padding and fixed maximum content width. The page uses the full viewport height with content anchored in the center, creating ample breathing room on large displays.

The content container uses horizontal padding of 40px (2.5rem) on both sides, ensuring text never touches viewport edges. The main content area is centered with auto margins, achieving a maximum readable width of approximately 765px (47.8125rem). This narrow measure suits the serif body text and prevents excessive line lengths that would impair readability.

Vertical spacing follows a consistent rhythm. Article titles receive 5px top margin and 25px bottom margin, sitting close to the content they introduce. Section headings use 25px top margin and 10px bottom margin, creating slightly more separation between thematic sections. Paragraphs stack with 15px vertical margins, producing comfortable but not excessive white space between blocks of text.

The site header contains a small circular avatar image alongside the site title and navigation links, arranged horizontally with the navigation pushed to the right. The header sits above the main content with minimal vertical padding, keeping the focus on the article.

The footer is centered and contains multiple lines of small text including copyright, licensing information, contact links, and color scheme toggles. It sits above a large decorative camouflage pattern that spans the full viewport width.

Decorative camouflage patterns appear at both top and bottom of the page, rendered as full-width SVG or background images. The top pattern sits immediately above the content area, while the bottom pattern dominates the lower region with its organic blue shapes against the black canvas.

## Visual language

The visual language balances technical precision with organic warmth. The dark canvas and cool-tinted typography create a focused, nighttime reading environment. The decorative camouflage patterns introduce playful, irregular shapes that soften the otherwise strict typographic layout.

The camouflage patterns consist of overlapping blob-like forms in varying shades of blue, from bright `#66B3FF` through lighter sky blues to deeper navy shadows. These shapes have soft, rounded edges and appear to float at different depths through layered transparency. The pattern reads as abstract and decorative rather than literal military camouflage, evoking organic forms like water, clouds, or cellular structures.

Photography and imagery are minimal. The only visible image element is a small circular avatar in the site header, approximately 32px in diameter, showing the author's portrait. This personal touch reinforces the blog's individual voice. The avatar uses a fully circular shape with 50% border radius.

The overall density is low to moderate. Generous line-height, paragraph spacing, and margins create a relaxed reading pace. The narrow content width prevents visual fatigue, while the dark background reduces eye strain during extended reading sessions. There are no visible borders, cards, or container shadows—depth and separation come entirely from color contrast and spacing.

Interactive elements are understated. Links appear in the action blue without underlines in their default state, relying on color difference alone for identification. The hover state lightens to action-hover, providing subtle feedback. No buttons, badges, or other prominent interactive surfaces appear in the visible content.

## Components

### Article page

- **Anatomy**: Centered single column containing site header, article title, metadata line, body content with section headings, and footer with decorative pattern.
- **Surface**: Canvas background (`{colors.canvas}`) for all page regions.
- **Typography**: Body text uses `{typography.body}`, titles use `{typography.hero-display}`, section headings use `{typography.section-display}`.
- **Spacing**: Content padding of `{spacing.content-padding}` horizontally, section gaps of `{spacing.section-gap}` between major elements.

### Site header

- **Anatomy**: Horizontal bar containing circular avatar image, site title text, and inline navigation links.
- **Surface**: Transparent or canvas background, no visible border or shadow.
- **Typography**: Site title in `{typography.navigation}`, navigation links in `{typography.navigation}` with `{colors.action}`.
- **Composition**: Avatar and title left-aligned, navigation links right-aligned in the same row.

### Article title

- **Anatomy**: Single H1 element, occasionally multi-line.
- **Typography**: `{typography.hero-display}` with `{colors.muted-ink}`.
- **Spacing**: 5px top margin, 25px bottom margin.
- **Shape**: No background, border, or decorative elements.

### Section heading

- **Anatomy**: H2 element marking thematic sections within the article.
- **Typography**: `{typography.section-display}` with `{colors.muted-ink}`.
- **Spacing**: 25px top margin, 10px bottom margin.

### Body paragraph

- **Anatomy**: Standard text block, occasionally containing inline links.
- **Typography**: `{typography.body}` with `{colors.ink}`, or `{typography.body-italic}` for emphasized passages.
- **Spacing**: 15px vertical margins between paragraphs.

### Inline link

- **Anatomy**: Anchor element within body text.
- **Surface**: No background or border.
- **Typography**: Inherits surrounding body text size and family.
- **Color**: `{colors.action}` in default state, `{colors.action-hover}` on hover.
- **Shape**: No underline visible in default state.

### Site footer

- **Anatomy**: Centered text block containing copyright, license statement, contact links, sponsorship link, imprint, subscription options, and color scheme toggle.
- **Surface**: Canvas background with large decorative camouflage pattern below.
- **Typography**: `{typography.body-small}` with `{colors.ink}`.
- **Composition**: All text centered, multiple lines with natural line breaks.

### Decorative camouflage pattern

- **Anatomy**: Full-width decorative image or background pattern.
- **Surface**: Overlapping organic shapes in action blue and lighter tints against the black canvas.
- **Composition**: Spans full viewport width, height approximately 200-300px. Top version appears as header accent; bottom version serves as lower page background.
- **Variants**: Top pattern is more compact; bottom pattern is taller and more densely filled.

## Responsive behavior

The design appears optimized for desktop reading with its fixed content width and generous side margins. On narrower viewports, the 40px horizontal padding should remain to prevent text from touching screen edges, while the content width scales down to fit. The navigation links in the header may require wrapping or collapsing to a menu on very small screens.

The decorative camouflage patterns should maintain full width but may scale proportionally in height to preserve their visual character. The circular avatar in the header should remain visible but may reduce slightly in size on mobile devices.

The color scheme toggle in the footer suggests the site supports light, dark, and auto modes. The current visible state represents the dark mode. A light mode implementation would likely invert the palette: light canvas, dark ink, and adjusted action colors for sufficient contrast.

Line length should remain the primary responsive constraint. If viewport width drops below the comfortable measure, text size may need slight reduction or padding adjustment to maintain readable line lengths.

## Practical implementation guidance

### Preserve
- The dark canvas with warm-tinted ink colors; this is the site's signature reading environment.
- The Lora and Merriweather serif pairing; the typographic personality depends on this specific combination.
- The decorative camouflage patterns; they provide essential visual identity and warmth.
- The generous line-height (1.7) for body text; this supports extended reading comfort.
- The narrow content measure; wide text blocks would destroy the focused reading experience.

### Avoid
- Adding borders, cards, or container shadows; the design achieves separation through color and spacing alone.
- Introducing sans-serif fonts; they would clash with the warm, literary character.
- Using pure white text; the tinted ink colors are specifically chosen for dark-mode comfort.
- Making the content area full-width; the narrow measure is essential to the design.
- Adding background colors to inline code or other elements without careful contrast checking.

### Recommended build order
1. Establish the dark canvas and ink color tokens.
2. Implement the typographic scale with Lora for headings and Merriweather for body.
3. Create the centered content container with 40px padding and maximum width constraint.
4. Add the article title and body paragraph spacing.
5. Implement link colors and hover states.
6. Add the decorative camouflage patterns to header and footer.
7. Build the site header with avatar and navigation.
8. Implement the footer with centered text and color scheme toggle.
9. Test line-length comfort across viewport widths and adjust as needed.

### Accessibility
- Ensure link color contrast meets WCAG AA against the black canvas; the action blue should be verified.
- Provide visible focus indicators for keyboard navigation; the default link styling may need enhancement.
- Respect the user's color scheme preference via the auto toggle and `prefers-color-scheme` media query.
- Maintain generous touch targets for navigation links on mobile devices.
- Preserve the ability to zoom without horizontal overflow; the padding and max-width approach supports this.

## Scope note

This guide covers the article page template as visible in the supplied images. The blog archive, project pages, travel section, and other site areas are not represented. Light mode and auto color scheme implementations are referenced in the footer but not documented here. No form components, buttons beyond text links, or interactive states beyond link hover are visible in the source material. Measurements are derived from the exact values supplied in the design facts.
