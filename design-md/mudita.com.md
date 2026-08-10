# How mudita.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mudita.com-design)

Last updated: 2026-08-10

## Captured pages

[![MuditaOS product page hero with E Ink phone mockup, navigation tabs, and dark CTA button on light grid background](https://pin.fontofweb.com/3740?format=jpg)](https://design.withfudge.com/share/pin-3740)

[MuditaOS product page hero with E Ink phone mockup, navigation tabs, and dark CTA button on light grid background](https://design.withfudge.com/share/pin-3740)

[![Cookie consent banner with black primary button, white secondary button, and Mudita logo mark](https://pin.fontofweb.com/3739?format=jpg)](https://design.withfudge.com/share/pin-3739)

[Cookie consent banner with black primary button, white secondary button, and Mudita logo mark](https://design.withfudge.com/share/pin-3739)

## Overview

The Mudita design system embodies a philosophy of digital minimalism and intentional living. The visual language is deliberately restrained: a near-monochrome palette, generous whitespace, and typography that favors clarity over ornament. The system serves a technology brand that positions itself against the excesses of always-connected culture, and every design choice reinforces this positioning.

The interface architecture centers on product storytelling. Large hero surfaces present hardware and software in idealized, clean environments. Navigation is understated but persistent, using small uppercase labels that recede until needed. Content hierarchy is established through scale contrast rather than color variation, with the primary typeface carrying most of the communicative weight. The overall impression is of a premium, contemplative product—something closer to a well-designed book than a conventional technology website.

The system balances two typefaces with distinct roles: a geometric sans-serif for functional labels and navigation, and a contemporary humanist sans-serif for display and body text. This pairing creates subtle texture without visual noise. Surfaces are predominantly white and warm light gray, with black reserved for maximum emphasis and action. The result is a design that feels both modern and timeless, appropriate for a brand advocating slower, more mindful technology use.

## Colors

The color system is intentionally limited, deriving its sophistication from restraint rather than variety. Four semantic tokens describe the full interface palette, with black and white serving multiple roles across the system.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, active navigation, primary button fill, logo mark, emphasis borders |
| canvas | `#FFFFFF` | Page background, button text on dark surfaces, card backgrounds, input fields |
| surface | `#F5F7F8` | Hero section backgrounds, subtle panel fills, alternate content bands |
| muted | `#7A8288` | Secondary text, inactive navigation states, descriptive copy, footer content |
| border | `#E2E6E8` | Hairline dividers, secondary button borders, subtle panel edges |

The light mode dominates all visible surfaces. The near-white canvas establishes breathing room around content, while the warm-leaning surface gray creates gentle depth in hero and feature sections without introducing color complexity. The muted gray serves as the primary desaturation tool, allowing information hierarchy without the visual weight of full black.

Black is deployed surgically: for the brand mark, primary calls to action, and active navigation states. This creates clear affordance with minimal color usage. The border gray is light enough to read as structural rather than decorative, maintaining the system's airy quality.

No dark mode is visible in the supplied material. The photographic content—product hardware and interface mockups—introduces its own tonal range, but these remain separate from the UI palette. Accent colors from product photography should not be extracted as interface tokens.

## Typography

Two font families operate in distinct functional zones. PP Mori handles all display and body reading, while Montserrat manages navigational and labeling tasks in uppercase treatment.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | PP Mori | 2.5rem | 400 | 1.2 | -0.01em | Page titles, major section headings |
| section-display | PP Mori | 1.5rem | 400 | 1.3 | 0 | Subsection headings, feature titles |
| body | PP Mori | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general reading |
| label | Montserrat | 0.75rem | 400 | 1.4 | 0.08em | Buttons, tags, metadata, CTAs |
| navigation | Montserrat | 0.75rem | 400 | 1 | 0.12em | Primary nav, secondary tabs, breadcrumbs |

PP Mori, designed by Caio Kondo, Mathieu Desjardins, and Satsuki Arakaki for Pangram Pangram Foundry, provides a contemporary sans-serif with subtle humanist warmth. Its open apertures and balanced proportions support both large display settings and extended reading. The slightly negative tracking on hero display sizes tightens the word image without feeling compressed.

Montserrat, designed by Julieta Ulanovsky, contributes geometric clarity at small sizes. Its uppercase treatment with generous letter-spacing ensures navigation remains legible and distinct from body content. The 0.75rem size with expanded tracking creates a functional, almost editorial label quality that complements the more expressive PP Mori.

All type sizes are whole-number multiples of the 4px relative unit. Verify licensing for these families before production use.

## Layout

The layout system prioritizes centered, single-column reading with occasional asymmetric breaks for product presentation. The underlying grid is loose and generous, with substantial margins that frame content as curated rather than crowded.

Page containers appear to max out at approximately 1200px, with content typically constrained to narrower reading widths for text-heavy sections. The hero section in the product page demonstrates the primary layout pattern: a full-width surface panel with internal padding of roughly 6rem vertical and 4rem horizontal, containing a two-column composition that offsets text content against a large product visualization.

The navigation architecture uses a persistent top bar with logo left, primary links center-right, and utility icons (search, cart, locale) at the far right. Below this, a secondary tab bar appears for product sub-pages, using pill-shaped active states and simple text links for inactive items. Breadcrumb navigation sits between the two bars, providing wayfinding without visual weight.

Vertical rhythm is established through section spacing of 6rem, with content blocks separated by 2rem gutters. The surface-colored hero panels create implicit section boundaries without requiring additional dividers. Product imagery breaks the rectangular grid with subtle rotation and shadow, introducing dimensional interest within the otherwise flat design language.

The cookie consent banner demonstrates a fixed-bottom pattern: full-width, white background, with content constrained to the same maximum width as the page. Two buttons align right, stacked vertically on smaller viewports or placed side-by-side when space permits.

## Visual language

The visual character is defined by absence: absence of color, absence of decoration, absence of visual urgency. This restraint is the system's primary expressive tool. Where conventional technology marketing employs gradients, glows, and motion to create desire, Mudita's design cultivates calm through material simplicity.

Photography and product visualization follow this principle. The E Ink phone mockup in the hero appears on a subtle isometric grid that suggests technical precision without clinical coldness. The grid lines are faint, creating texture rather than pattern. Product interfaces shown within mockups mirror the website's own restraint: black text on white, clear hierarchy, no ornamental elements.

Shadow usage is minimal and functional. The floating phone mockup employs a soft, diffuse shadow that grounds the object without dramatic elevation. This shadow reads as environmental rather than stylistic—suggesting natural light rather than interface chrome.

Iconography is line-based and geometric. The brand mark combines three curved strokes into an abstract floral or meditative form, executed in single-weight outlines. Navigation icons (search, cart) follow the same thin-stroke convention. The overall iconographic approach favors recognition over expression.

The isometric grid pattern visible in hero backgrounds provides the system's single decorative motif. Its subtlety ensures it reads as atmosphere rather as ornament, reinforcing the technical credibility of the product without introducing visual competition.

## Components

### Primary action button

The primary button uses a solid black fill with white uppercase text. It is the system's most emphatic interactive element, reserved for the single most important action on any page.

- **Anatomy**: Text label centered within a rectangular button with slight corner rounding
- **Surface**: Background `{colors.ink}`, text `{colors.canvas}`
- **Typography**: `{typography.label}` — Montserrat at 0.75rem, uppercase, 0.08em tracking
- **Shape**: Border radius of 0.25rem, creating subtle rounding without pill-like softness
- **Spacing**: Padding of 0.75rem vertical and 1.5rem horizontal
- **Composition**: Typically left-aligned within content columns, or centered when standing alone

### Secondary action button

The secondary button inverts the primary's surface logic, using white fill with black text and a visible border. It appears in the cookie consent as the "Customize" option.

- **Anatomy**: Text label with right-pointing chevron, centered within bordered rectangle
- **Surface**: Background `{colors.canvas}`, text `{colors.ink}`, border `{colors.border}`
- **Typography**: `{typography.label}` with chevron icon as inline suffix
- **Shape**: Border radius of 0.25rem, matching primary button
- **Spacing**: Padding of 0.75rem vertical and 1.5rem horizontal
- **Composition**: Stacked below primary button in constrained widths, or placed adjacent when horizontal space allows

### Product hero panel

The hero panel contains the primary product narrative, combining headline, description, and product visualization within a contained surface.

- **Anatomy**: Heading, subheading, body paragraph, optional CTA, and product image
- **Surface**: Background `{colors.surface}`, full-width within page margins
- **Typography**: Heading uses `{typography.hero-display}`, subheading uses `{typography.section-display}`, body uses `{typography.body}`
- **Shape**: Border radius of 0.75rem, creating a contained card-like appearance
- **Spacing**: Internal padding of approximately 6rem vertical and 4rem horizontal
- **Composition**: Asymmetric two-column layout with text left and product image right; image may break the panel boundary with overflow

### Navigation tab bar

The secondary navigation for product pages uses a pill-shaped container with individual text links.

- **Anatomy**: Horizontal row of text links, with active item in filled pill and inactive items as plain text
- **Surface**: Container background `{colors.surface}`, active pill `{colors.ink}` with `{colors.canvas}` text
- **Typography**: `{typography.label}` for all items
- **Shape**: Container radius of 0.75rem, active item radius of 9999px
- **Spacing**: Internal padding of approximately 0.5rem, with generous gap between items
- **Composition**: Centered below primary navigation, spanning moderate width

### Cookie consent banner

A fixed-position disclosure bar with brand mark, explanatory text, and dual action buttons.

- **Anatomy**: Logo mark, heading, description text, details link, primary button, secondary button
- **Surface**: Background `{colors.canvas}`, full-width with subtle top border or shadow
- **Typography**: Heading uses `{typography.section-display}`, body uses `{typography.body}`, buttons use `{typography.label}`
- **Shape**: No visible border radius on the banner itself; buttons use 0.25rem radius
- **Spacing**: Comfortable padding of approximately 1.5rem vertical
- **Composition**: Three-zone layout with logo left, text center-left, buttons right; responsive to stack on narrow viewports

## Responsive behavior

The supplied images show desktop-width layouts. Based on the visible structure, the following responsive adaptations are recommended.

The primary navigation should collapse to a hamburger menu at moderate breakpoints, preserving the uppercase Montserrat treatment in the mobile drawer. The secondary tab bar may scroll horizontally or convert to a dropdown selector when space is constrained.

The product hero's two-column composition should stack vertically on smaller viewports, with the product image preceding the text to maintain visual interest. The asymmetric overflow of product imagery should be contained within the panel bounds on mobile to prevent horizontal scrolling.

Button groups in constrained spaces, such as the cookie consent, should stack vertically with the primary action above the secondary, maintaining full-width button presentation for easy touch targeting.

Type scale should reduce modestly: hero-display from 2.5rem to 2rem, section-display from 1.5rem to 1.25rem. Body text may remain at 1rem for readability. Navigation and label sizes are already small and may persist unchanged.

Section spacing should compress from 6rem to 4rem on tablet and 3rem on mobile, preserving the airy quality without excessive scrolling.

## Practical implementation guidance

### Preserve
- The near-monochrome palette; any additional colors should be evaluated against the system's restraint
- Generous whitespace around all content; resist the urge to fill surface areas
- The uppercase Montserrat treatment for all functional labels and navigation
- The subtle warm-gray surface for hero and feature panels
- The geometric line-weight consistency across icons and the brand mark

### Avoid
- Gradients, glows, or drop-shadows beyond the soft environmental shadow on product imagery
- Color accents that would compete with the black-and-white photography and product renders
- Rounded pill shapes for primary buttons; the slight 0.25rem radius is intentional restraint
- Dense information layouts that contradict the brand's mindful positioning
- Animated or persistent decorative patterns beyond the subtle grid texture

### Recommended build order
1. Establish the type scale with both font families loaded and tested at all sizes
2. Implement the color tokens and surface patterns, verifying the warm-gray against pure neutral grays
3. Build the navigation components, including primary header and secondary tab bar
4. Create the product hero panel as the primary content pattern
5. Implement button variants with consistent padding and radius logic
6. Add the cookie consent as a fixed-position overlay pattern
7. Refine responsive behavior with particular attention to the hero image overflow

### Accessibility
- Ensure the 0.75rem label size meets minimum legibility requirements; consider 1rem for critical actions if user testing reveals issues
- Maintain the visible focus indicator on the black primary button; a white or light outline will be necessary against the dark fill
- The muted gray text should meet WCAG AA contrast ratios against white and surface backgrounds; verify with automated testing
- Product imagery with interface mockups should include appropriate alt text describing the visible screen content
- The cookie consent should trap focus until dismissed, following standard modal dialog patterns

## Scope note

This guide covers the MuditaOS product page and cookie consent banner visible in the supplied material. Other product pages, marketing landing pages, checkout flows, and account interfaces are not represented. Motion, hover states, loading indicators, and form validation patterns are not documented. Measurements are practical adaptation targets based on visible proportions in the supplied images.
