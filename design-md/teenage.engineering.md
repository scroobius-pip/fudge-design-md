# How teenage.engineering is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/teenage.engineering-design)

Last updated: 2026-08-10

## Captured pages

[![Horizontal navigation bar with custom iconography for products, store, latest, and finder sections alongside Japanese text and KO logo mark on light gray background.](https://pin.fontofweb.com/10227?format=jpg)](https://design.withfudge.com/share/pin-10227)

[Horizontal navigation bar with custom iconography for products, store, latest, and finder sections alongside Japanese text and KO logo mark on light gray background.](https://design.withfudge.com/share/pin-10227)

[![Editorial article header with thin sans-serif title 'catching up with INVT' and date above a full-bleed polaroid-style photograph with rounded corners.](https://pin.fontofweb.com/10226?format=jpg)](https://design.withfudge.com/share/pin-10226)

[Editorial article header with thin sans-serif title 'catching up with INVT' and date above a full-bleed polaroid-style photograph with rounded corners.](https://design.withfudge.com/share/pin-10226)

[![Long-form article body with light weight typography, grayscale photography, and muted caption text describing founders and accessibility philosophy.](https://pin.fontofweb.com/10225?format=jpg)](https://design.withfudge.com/share/pin-10225)

[Long-form article body with light weight typography, grayscale photography, and muted caption text describing founders and accessibility philosophy.](https://design.withfudge.com/share/pin-10225)

[![Article section with bold question header and dense paragraph text about record cutter engineering above a detailed product photography image with rounded corners.](https://pin.fontofweb.com/10224?format=jpg)](https://design.withfudge.com/share/pin-10224)

[Article section with bold question header and dense paragraph text about record cutter engineering above a detailed product photography image with rounded corners.](https://design.withfudge.com/share/pin-10224)

## Overview

The teenage engineering design system is a study in radical restraint. Every surface, type weight, and spatial decision serves a single purpose: to let engineered objects and photographic content speak without visual competition. The system operates across two primary modes—a light, airy editorial mode built on warm off-white backgrounds with black typography, and a dark, immersive product mode that inverts the relationship to place luminous content against deep black fields.

The visual language draws from mid-century technical documentation and contemporary minimalism simultaneously. Custom iconography replaces conventional navigation patterns, with each section identified by a distinctive geometric mark rather than a standard text link. The typography relies exclusively on a single type family—Univers—in extremely light weights, creating an almost ethereal reading experience that demands attention through delicacy rather than force.

This is a system built for long-form editorial content, product storytelling, and brand expression where the boundary between engineering specification and cultural narrative dissolves. The spacing is generous to the point of austerity, with content breathing in isolated blocks separated by significant vertical territory. Rounded corners appear on media elements with mathematical precision, softening the otherwise rigorous grid without introducing decorative excess.

## Colors

The palette is aggressively limited, functioning as a near-monochrome system with strategic accent deployment.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, dark surfaces, media card backgrounds |
| muted-ink | #0F0E12 | Navigation text, subtle dark elements |
| canvas | #E5E5E5 | Primary page background in editorial mode |
| surface | #F0F0EF | Secondary background, elevated panels |
| surface-bright | #F6F8F7 | Lightest surface variant |
| nav-text | #0F0E12 | Navigation and interactive text |
| accent-blue | #0071BB | Links, interactive accents, product highlights |
| muted-text | #7F7F7F | Captions, secondary metadata, disabled states |
| border-subtle | #B2B2B2 | Dividers, hairline borders |
| border-light | #D0D1D2 | Table borders, form outlines |
| dark-surface | #272727 | Deep UI elements, footer regions |
| mid-gray | #4D4D4D | Secondary dark elements |
| gray | #737373 | Tertiary text, placeholder content |

The editorial mode dominates the experience: warm off-white canvas backgrounds with pure black text create maximum legibility and a clean, gallery-like presentation. The dark mode inverts this relationship for product pages, placing near-black backgrounds behind content with light gray text. The accent blue appears sparingly—reserved for links and interactive states where it provides the sole chromatic interruption in an otherwise achromatic field. Image palettes drawn from photography introduce warm amber, cool gray, and occasional saturated tones, but these remain confined to photographic content rather than bleeding into interface elements.

## Typography

The type system is built on custom-cut Univers variants: Univers Te 20-Light Oct 2022, Univers Te 20-Thin Oct 2022, and Univers Te 40-Light Oct 2022. Two optical sizes serve distinct roles. The narrower, more compact Univers Te 20 handles body text and UI elements, while the wider, more open Univers Te 40 serves display and headline purposes. Both exist exclusively in light and thin weights—never bold or even medium—creating a consistent voice of quiet authority.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Univers Te 40 | 3.75rem | 300 | 1.1 | 0em | Major page headlines, product titles |
| section-display | Univers Te 40 | 3.5rem | 300 | 1.1 | 0em | Section headers, article titles |
| headline | Univers Te 20 | 2.25rem | 100 | 1.15 | 0em | Article subheads, bold statements |
| body-large | Univers Te 20 | 2rem | 300 | 1.5 | 0em | Primary body text, editorial content |
| body | Univers Te 20 | 1.75rem | 300 | 1.5 | 0em | Standard paragraphs, descriptions |
| label | Univers Te 20 | 1rem | 300 | 1.1 | 0em | UI labels, metadata |
| caption | Univers Te 20 | 0.9375rem | 300 | 1.1 | 0em | Image captions, fine print |
| nav-primary | Univers Te 20 | 2rem | 100 | 1.5 | 0em | Main navigation text |
| nav-secondary | Univers Te 20 | 1.25rem | 100 | 1.5 | 0em | Secondary nav, dropdown items |
| nav-tertiary | Univers Te 20 | 0.5625rem | 100 | 1.5 | 0em | Small nav annotations |
| system-fallback | Applesystem | 0.875rem | 400 | 1 | 0em | System UI, fallback text |

The type scale is constructed on a 2px relative unit, with sizes snapping to whole-number multiples. Display sizes at 56px and 63px create hierarchy through scale contrast rather than weight variation. Body text at 33px is unusually large for web reading, treating editorial content with the generosity of print magazine typography. Line heights remain tight—1.1 for display, 1.5 for body—creating dense blocks of text that hold together as visual masses.

The Univers family was designed by Adrian Frutiger and the Linotype Design Studio, produced by Linotype GmbH. Verify licensing for these families before production use.

## Layout

The layout system is defined by extreme horizontal padding and generous internal spacing. Content sits within a central column flanked by substantial margins, creating a reading experience that feels more like a printed broadsheet than a conventional website.

The primary grid uses approximately 94px of horizontal padding on each side at desktop widths, collapsing to narrower margins on smaller viewports. This creates a content column that occupies roughly 60% of the viewport width, forcing the eye to focus on a constrained reading area. Vertical spacing between major sections uses multiples of the base unit, with article sections separated by significant whitespace that allows each content block to register as a distinct moment.

Media elements—photographs, product images, video embeds—break from the text column to fill the full padded width, creating a rhythmic alternation between narrow text blocks and wide visual fields. Rounded corners on media elements use a 3rem radius, substantial enough to read as intentional geometry rather than subtle softening. Some circular elements use a 50px radius, approaching full pills for avatar-like or badge components.

The navigation system appears as a horizontal bar with custom iconography, each section marked by a distinctive geometric symbol paired with thin text labels. This bar maintains the same horizontal padding as content areas, creating alignment between navigation and reading zones. On product pages, the layout shifts to accommodate immersive imagery, with text blocks floating over or beside large-format photography.

## Visual language

The visual language of teenage engineering is immediately recognizable for its rejection of conventional web patterns. Custom iconography replaces standard navigation symbols—each section receives a unique geometric mark that functions as both identifier and decorative element. The products section uses a four-petal flower form, store uses a simplified building facade, latest uses a square frame, and finder combines directional and circular elements into a compound mark.

Photography receives premium treatment. Images appear with substantial rounded corners, often in monochrome or desaturated color palettes that harmonize with the achromatic interface. Editorial photography favors documentary intimacy—candid portraits, process shots, and atmospheric landscapes—rather than polished product renders. On product pages, photography shifts to dramatic studio lighting with deep shadows, letting physical objects emerge from darkness with sculptural presence.

The relationship between text and image is deliberately unhurried. Captions sit with generous spacing above or below photographs, set in the smallest type size with muted color. Body text blocks are wide and short, with line lengths that encourage sustained reading. The overall impression is of a publication that happens to exist digitally—a design journal or technical annual rather than a conventional commerce or marketing site.

## Components

### Navigation Bar

The navigation bar presents the primary wayfinding system through a combination of custom geometric icons and thin typographic labels.

- **Anatomy**: Horizontal flex container with logo mark left, icon-label pairs center, and utility links right. Each section pairs a distinctive black icon with stacked or adjacent text labels.
- **Surface**: Transparent or canvas background, no visible border or shadow.
- **Typography**: `{typography.nav-primary}` for main labels, `{typography.nav-secondary}` for sub-labels, `{typography.nav-tertiary}` for annotations.
- **Spacing**: Horizontal padding matching content areas, internal gaps of approximately 1.3rem between icon-label units.
- **Composition**: Icons sit to the left of text with consistent alignment. Japanese text appears in some variants, maintaining the same typographic weight and size.

### Article Header

The article header establishes editorial context with minimal elements.

- **Anatomy**: Centered or left-aligned headline, optional date stamp below, optional category label above.
- **Typography**: `{typography.section-display}` for the headline, `{typography.caption}` for date and metadata.
- **Surface**: Canvas background, no border.
- **Spacing**: Generous top and bottom padding, typically 3-4rem above and below the text block.

### Media Card

Media cards present photography and video content with distinctive corner treatment.

- **Anatomy**: Full-width image container with rounded corners, optional caption below.
- **Shape**: 3rem border radius on all corners.
- **Surface**: Pure black background visible during image load or for video content.
- **Typography**: `{typography.caption}` for captions, centered or left-aligned, with muted text color.
- **Spacing**: Significant margin above and below, typically 2-3rem separation from adjacent text.

### Article Body

The article body contains long-form text with specific formatting conventions.

- **Anatomy**: Constrained width text column with paragraphs separated by standard line height.
- **Typography**: `{typography.body-large}` for primary text, `{typography.headline}` for pull quotes or section breaks.
- **Surface**: Canvas background.
- **Spacing**: Paragraphs separated by 1em line height, sections by 2-3rem additional margin.

### Product Feature Block

Product pages use immersive feature blocks that invert the editorial palette.

- **Anatomy**: Full-width section with dark background, large product photography, and overlaid or adjacent text.
- **Surface**: Pure black or near-black background.
- **Typography**: `{typography.hero-display}` for product names, `{typography.body}` for descriptions, all in light gray or off-white.
- **Shape**: Some elements use 1.5rem radius, others approach full circular forms at 3rem.

## Responsive behavior

The system maintains its core character across viewport sizes through proportional scaling rather than radical restructuring. The generous horizontal padding reduces on smaller screens, but the central content column remains narrower than the full viewport, preserving the reading experience.

Typography scales down in discrete steps. The 33px body text may reduce to 28px on tablet and 22px on mobile, maintaining legibility without becoming cramped. Display sizes compress proportionally, with hero headlines dropping from 63px to 47px to 31px across breakpoints.

Navigation reorganizes from horizontal icon-label pairs to a more compact form, potentially collapsing to a single menu trigger or maintaining the horizontal scroll pattern seen in some implementations. Media cards retain their rounded corners at all sizes, with the 3rem radius becoming relatively more prominent as overall dimensions shrink.

The two primary modes—light editorial and dark product—maintain their palettes across breakpoints, with no additional theme variations for mobile contexts.

## Practical implementation guidance

### Preserve
- The extreme light weights of Univers; substituting heavier weights destroys the system's distinctive voice.
- Generous horizontal padding and narrow content columns; the spaciousness is essential to the gallery-like presentation.
- Custom iconography alongside text labels; the geometric marks are integral to brand recognition.
- Monochrome or desaturated photography treatments; color images should be processed to harmonize with the limited palette.
- Tight line heights on display text; the slight compression creates visual density that balances the airy weight.

### Avoid
- Bold or medium typographic weights; the system functions exclusively in light and thin.
- Decorative borders, shadows, or gradients; surfaces should read as flat and material.
- Standard web navigation patterns like hamburger menus or text-only links; the custom iconography system is non-negotiable.
- Crowded layouts or sidebars; the single-column reading experience is fundamental.
- Saturated interface colors beyond the single blue accent.

### Recommended Build Order
1. Establish the typographic system with licensed Univers variants at the specified weights and sizes.
2. Implement the base layout with 94px horizontal padding and narrow content column.
3. Build the navigation bar with custom SVG iconography and thin text labels.
4. Create media card components with 3rem rounded corners and black fallback backgrounds.
5. Develop article templates with proper heading hierarchy and caption spacing.
6. Implement the dark mode variant for product pages with inverted colors.
7. Add the accent blue for interactive states and links.

### Accessibility
- The extreme thin weights, while visually distinctive, may present legibility challenges for users with low vision. Consider offering a weight enhancement option that shifts thin to light or light to regular while maintaining the same type family.
- The near-monochrome palette provides strong contrast in most combinations, but the muted text color on canvas backgrounds should be verified against WCAG guidelines for small text.
- Custom iconography requires text labels or aria attributes to function for screen reader users.
- The large body text size (33px equivalent) aids readability for many users but increases line length considerations; maintain the narrow content column to prevent excessive eye travel.

## Scope note

This guide covers the editorial and product page surfaces visible in the supplied imagery, including the "now" news section and OP-1 product pages. The full e-commerce flow, checkout process, and account interfaces are not represented. Motion behavior, hover states, and mobile-specific layouts were not captured and should be designed to extend the visible static system. The type system uses the exact supplied families: Univers Te 20-Light Oct 2022, Univers Te 20-Thin Oct 2022, and Univers Te 40-Light Oct 2022.
