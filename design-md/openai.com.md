# How openai.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/openai.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with floating product packaging and oversized display typography on pure black canvas](https://pin.fontofweb.com/10128?format=jpg)](https://design.withfudge.com/share/pin-10128)

[Hero section with floating product packaging and oversized display typography on pure black canvas](https://design.withfudge.com/share/pin-10128)

[![Footer area with large back-navigation link, horizontal rule, and compact legal row](https://pin.fontofweb.com/10127?format=jpg)](https://design.withfudge.com/share/pin-10127)

[Footer area with large back-navigation link, horizontal rule, and compact legal row](https://design.withfudge.com/share/pin-10127)

[![Technical specifications panel with line-art product diagram and two-column data layout](https://pin.fontofweb.com/10126?format=jpg)](https://design.withfudge.com/share/pin-10126)

[Technical specifications panel with line-art product diagram and two-column data layout](https://design.withfudge.com/share/pin-10126)

[![Product detail page with navigation bar, hero headline, and e-commerce purchase module](https://pin.fontofweb.com/10125?format=jpg)](https://design.withfudge.com/share/pin-10125)

[Product detail page with navigation bar, hero headline, and e-commerce purchase module](https://design.withfudge.com/share/pin-10125)

## Overview

The OpenAI.com design system is built on radical restraint: absolute black backgrounds, pure white typography, and almost no decorative chrome. The visual hierarchy is established through scale rather than color, with display type that pushes into oversized territory and tracking so tight it nearly touches. Product photography and technical diagrams sit directly on the black canvas without framing containers, creating a gallery-like presentation where the hardware or interface becomes the only color and texture in the frame. Navigation is minimal and persistent, e-commerce elements are reduced to essential controls, and the overall impression is of a premium technology brand that trusts its audience to read subtle spatial cues rather than explicit labels.

## Colors

The palette is intentionally austere: two functional colors and one surface variant. Every interface element derives from this trio.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, hero sections, footer ground |
| surface | #1F1F1F | Elevated panels, button hover states, subtle containment |
| ink | #FFFFFF | All primary text, icons, borders, and interactive labels |
| ink-inverted | #000000 | Text on filled white buttons or light product surfaces |
| border | #FFFFFF | Hairline rules, button outlines, and divider strokes |

The system operates in a permanent dark mode. There is no light-mode equivalent in the visible interface. Product photography introduces its own color—prismatic packaging gradients, anodized aluminum, RGB lighting—but these are treated as content rather than system colors. The black canvas absorbs shadow and creates infinite depth behind floating product renders. White text at full opacity provides maximum contrast for accessibility; the single gray surface token (#1F1F1F) appears only when an element needs slight elevation without breaking the monochrome discipline, such as language selectors or secondary button fills.

## Typography

The type system is anchored by Open AI Sans, a custom family designed by Dinamo Typefaces GmbH, with SF Mono appearing sparingly for technical labels. The hierarchy is extreme: body text remains modest at 17px while display sizes explode to 137px, creating a deliberate tension between reading comfort and visual impact. The design facts also record Applesystem and System-Uisansserif as detected families, though these appear to serve fallback or system-ui roles rather than as primary design voices in the visible interface.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Open AI Sans | 8.5625rem | 700 | 1 | -0.02em | Primary page titles, campaign headlines |
| section-display | Open AI Sans | 7rem | 500 | 1 | -0.0057em | Section headers, large navigational statements |
| headline | Open AI Sans | 3rem | 500 | 1.32 | -0.01em | Product names, feature titles |
| subheadline | Open AI Sans | 1.875rem | 500 | 1.1 | -0.01em | Supporting headers, pricing display |
| body | Open AI Sans | 1.0625rem | 400 | 1.647 | -0.01em | Paragraphs, descriptions, navigation links |
| body-small | Open AI Sans | 1rem | 400 | 1.5 | -0.0106em | Dense technical copy, specifications |
| label | Open AI Sans | 0.875rem | 500 | 1 | normal | Buttons, tags, category labels |
| caption | Open AI Sans | 0.8125rem | 500 | 1.512 | normal | Footer links, legal text, metadata |
| navigation | Open AI Sans | 1.0625rem | 400 | 1.647 | -0.01em | Header and footer navigation |
| mono-label | SF Mono | 0.875rem | 500 | 1.2 | -0.0171em | Technical specifications, code references |

Open AI Sans is used in Regular (400), Medium (500), Semibold (600), and Bold (700) weights. The display sizes feature aggressive negative tracking that tightens wordforms into cohesive blocks. Body text maintains a slight negative tracking for optical density without sacrificing readability. SF Mono appears at a single size for technical annotations. Applesystem and System-Uisansserif are present in the detected font stack but do not carry distinct sizing or weight roles in the visible design. Verify licensing for these families before production use.

## Layout

The layout system is centered and spacious, with generous horizontal margins that create a narrow reading column on wide viewports.

Page containers use a consistent horizontal padding of 2rem (32px) and a maximum content width constrained by auto margins of approximately 8.28rem (132.5px) on each side. This produces a centered column that feels editorial rather than full-bleed commercial. Section spacing is dramatic: 10rem (160px) between major content blocks, with internal row gaps of 4rem (64px) for related elements. The hero area often breaks this containment, allowing product imagery to extend toward the viewport edges while text remains pinned to the central column.

The grid is implicit rather than explicit. Product detail pages use a two-column asymmetry: imagery occupies the left portion with generous negative space, while product information, pricing, and purchase controls stack vertically on the right. Technical specification pages employ a similar split, with line-art diagrams on the left and definition-list-style data on the right. Footer content compresses into a single row with extreme horizontal distribution: brand mark and copyright at the far left, legal links centered, and a language selector pill at the far right.

Vertical rhythm is established through margin-top rather than padding-bottom, creating a cascading flow where each section pushes away from its predecessor. Negative margins appear occasionally to pull decorative elements closer to their associated text, such as product diagrams that overlap with their descriptive headers.

## Visual language

The visual language is defined by absence: no gradients in the UI layer, no drop shadows, no background textures. The black canvas functions as both ground and frame. Product photography is lit with studio precision, often showing hardware at slight angles that reveal depth without casting visible shadows onto the page. Packaging materials introduce the only systematic color—holographic films, purple foams, white matte surfaces—creating a material palette that contrasts with the digital austerity surrounding it.

Typography is the primary expressive element. Display headlines are set so large that individual letters become architectural, their negative spaces as important as their strokes. The tight tracking creates moments where letterforms almost collide, particularly in the Bold weight, giving headlines a machined, engineered quality that matches the hardware aesthetic.

Interactive elements are reduced to geometric primitives: pills, circles, and hairline rectangles. Buttons are either filled white with black text or outlined white with transparent fills. There are no ghost buttons with partial opacity, no gradient fills, no animated underlines. The visual system communicates confidence through restraint, suggesting that the products themselves are complex enough without interface embellishment.

## Components

### Navigation bar

- **Anatomy**: Logo mark left, horizontal link list center-right, utility actions far right
- **Surface**: Transparent over black canvas, no background fill
- **Typography**: `{typography.navigation}` for all links
- **Spacing**: 2rem horizontal padding, 2rem gap between link clusters
- **Composition**: Flex row with space-between alignment; links use 1.5rem horizontal padding for touch targets

### Hero display

- **Anatomy**: Single headline, occasionally with subordinate product imagery layered behind or beside
- **Typography**: `{typography.hero-display}` or `{typography.section-display}` depending on page context
- **Spacing**: 6.4rem top padding, 8.625rem bottom margin to subsequent content
- **Composition**: Text often overlaps with product photography; z-index layering places imagery behind type

### Product detail module

- **Anatomy**: Product imagery carousel left, information stack right
- **Typography**: `{typography.headline}` for product name, `{typography.subheadline}` for price, `{typography.body}` for description
- **Spacing**: 4rem gap between image and text columns; 1.5rem vertical stack within information panel
- **Surface**: No background fill; imagery floats on black canvas
- **Variants**: Switcher controls for product options (e.g., "CLICKY" / "SILENT") use bordered pills with active state indicated by filled background

### Primary button

- **Surface**: `{colors.ink}` fill, `{colors.ink-inverted}` text
- **Typography**: `{typography.label}`
- **Shape**: Full pill, `{rounded.pill}`
- **Spacing**: 0 1.25rem horizontal padding, 2.5rem height
- **Composition**: Often paired with arrow icon at 0.26rem gap

### Secondary button

- **Surface**: Transparent fill, 1px `{colors.border}` stroke
- **Typography**: `{typography.label}`
- **Shape**: Full pill, `{rounded.pill}`
- **Spacing**: Identical to primary button

### Technical specifications panel

- **Anatomy**: Line-art product diagram left, two-column definition list right
- **Typography**: `{typography.body-small}` for values, `{typography.label}` uppercase for category headers
- **Spacing**: 4rem gap between diagram and data; 1.5rem row gap between specification rows
- **Composition**: Diagram is centered in its half; data aligns to a consistent left edge with generous internal padding

### Footer

- **Anatomy**: Horizontal rule, then single-row flex with brand mark, copyright, legal links, and language selector
- **Typography**: `{typography.caption}` for all text
- **Surface**: `{colors.canvas}` continuation; 1px top border in subtle gray
- **Spacing**: 3rem top padding, 2rem horizontal padding, 5rem bottom margin
- **Composition**: Extreme space-between distribution; legal links use 1.5rem gap

## Responsive behavior

The system is documented from desktop viewports. At narrower widths, the centered column with 132.5px side margins would compress to smaller fixed values or transition to percentage-based gutters. The two-column product layout should stack vertically on tablet and below, with imagery preceding information. Display type scales down proportionally: the 137px hero size may reduce to 64px on tablet and 48px on mobile to maintain line-length control. Navigation collapses to a hamburger menu or condensed link set when horizontal space is exhausted. Touch targets for buttons and links should maintain a minimum 44px height regardless of viewport.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the default ground for all pages
- The extreme scale contrast between body text and display headlines
- Tight negative tracking on all display sizes, especially the Bold weight
- Full-pill buttons with either solid fill or 1px stroke—no intermediate states
- The centered, narrow content column with generous external margins
- Product imagery that floats without visible borders or shadow containers

### Avoid
- Adding background colors, gradients, or textures behind content
- Using more than the three interface colors for UI elements
- Introducing drop shadows or elevation effects
- Setting display type with loose tracking or increased line height
- Creating buttons with rounded rectangles instead of full pills
- Placing body text at sizes below 16px for accessibility

### Recommended build order
1. Establish the black canvas and white text defaults
2. Implement Open AI Sans with the full weight range and tracking values
3. Build the centered container with 32px padding and auto margins
4. Create the pill button system with primary and secondary variants
5. Add display typography at hero and section scales
6. Implement the two-column product layout with responsive stacking
7. Add the footer with its extreme horizontal distribution

### Accessibility
- Maintain the documented contrast ratios: white on black provides 21:1, which exceeds WCAG AAA for all text sizes
- Ensure interactive elements have visible focus indicators; the minimal chrome means focus rings may need custom styling
- Provide reduced-motion alternatives for any product imagery that includes animation
- Use semantic heading hierarchy despite the visual similarity between some sizes
- Test that tight tracking does not compromise readability for users with dyslexia or low vision

## Scope note

This guide covers the OpenAI.com marketing and product pages visible in the supplied images, including the Supply Co. hardware storefront and Codex product pages. It does not include documentation for unseen mobile breakpoints, interactive states beyond static view, chat interfaces, or internal dashboard surfaces. The rounded value 6.08px appears in legacy data but is not represented in current visible components; measurements are exact where retained and practical adaptation targets where rounded to the 2px grid.
