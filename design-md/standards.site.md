# How standards.site is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/standards.site-design)

Last updated: 2026-08-10

## Captured pages

[![Enterprise page showing trusted brand logos in a six-column grid with a bold section heading and a tabbed feature list with directional arrow imagery.](https://pin.fontofweb.com/7284?format=jpg)](https://design.withfudge.com/share/pin-7284)

[Enterprise page showing trusted brand logos in a six-column grid with a bold section heading and a tabbed feature list with directional arrow imagery.](https://design.withfudge.com/share/pin-7284)

[![Agencies page hero with a large 'Made for designers.' headline above a dense mosaic of colorful product screenshots and interface mockups.](https://pin.fontofweb.com/7283?format=jpg)](https://design.withfudge.com/share/pin-7283)

[Agencies page hero with a large 'Made for designers.' headline above a dense mosaic of colorful product screenshots and interface mockups.](https://design.withfudge.com/share/pin-7283)

[![Agencies page section on flexible client workflows with a split layout showing explanatory text on the left and a transfer-complete illustration on the right.](https://pin.fontofweb.com/7282?format=jpg)](https://design.withfudge.com/share/pin-7282)

[Agencies page section on flexible client workflows with a split layout showing explanatory text on the left and a transfer-complete illustration on the right.](https://design.withfudge.com/share/pin-7282)

[![Agencies page feature section with a 'Save time' heading and tabbed navigation alongside a dark-themed asset management interface screenshot.](https://pin.fontofweb.com/7281?format=jpg)](https://design.withfudge.com/share/pin-7281)

[Agencies page feature section with a 'Save time' heading and tabbed navigation alongside a dark-themed asset management interface screenshot.](https://design.withfudge.com/share/pin-7281)

## Overview

Standards presents itself as a refined tool for building and hosting brand guidelines online. The visual system is deliberately restrained: a warm off-white canvas, black typography with occasional muted gray secondary text, and a single vivid orange accent that appears sparingly—most notably on the period after the wordmark and on primary call-to-action buttons. The overall impression is editorial and Swiss-influenced, with generous whitespace, large display type, and a clear hierarchy that lets product screenshots and brand imagery carry the visual weight. The design speaks to design professionals through its own disciplined consistency rather than through decorative flourish.

## Colors

The palette is intentionally minimal, relying on contrast and restraint rather than complexity. The warm off-white canvas prevents the sterility of pure white, while the near-black ink provides maximum legibility. The muted gray serves as a secondary text color for inactive states and supporting copy. The orange accent is used surgically: the wordmark period, primary buttons, and occasional emphasis.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, navigation, logo |
| muted-ink | #A1A1A1 | Inactive tab labels, secondary text, subtle borders |
| canvas | #F2F2F2 | Page background, logo grid cells, section fills |
| surface | #FFFFFF | Button text on dark backgrounds, occasional card fills |
| action | #FF2E00 | Primary buttons, wordmark accent period, emphasis links |
| action-hover | #A1A1A1 | Hover state for secondary actions |

The interface operates in a single light mode. Product screenshots within the marketing pages introduce their own dark themes, colorful brand palettes, and photographic imagery, but these are content rather than system colors. The orange accent maintains consistent energy across all pages without competing with the varied colors of the showcased work.

## Typography

Two type families drive the system: Klim Type Foundry-Buch for nearly all text, and Söhne-Halbfett for button labels. Both are designed by Kris Sowersby and distributed by Klim Type Foundry. The primary family is used at weights that feel light and open despite being technically Regular (400), achieved through generous sizing and the face's own proportions.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Klim Type Foundry-Buch | 3.25rem | 400 | 1.275 | -0.01em | Page headlines, section titles |
| section-display | Klim Type Foundry-Buch | 1.9375rem | 400 | 1.15 | normal | Feature tab labels, sub-headings |
| body | Klim Type Foundry-Buch | 1.25rem | 400 | 1.55 | normal | Paragraphs, descriptions |
| body-small | Klim Type Foundry-Buch | 0.875rem | 400 | 1.45 | normal | Footer links, captions, metadata |
| label | Klim Type Foundry-Buch | 0.625rem | 400 | 1.15 | normal | Navigation labels, microcopy |
| navigation | Klim Type Foundry-Buch | 1.25rem | 400 | 1.55 | normal | Header menu items |
| action | Söhne-Halbfett | 0.875rem | 600 | 1 | normal | Button labels, CTAs |

The display sizes feature tight negative tracking that gives headlines a crafted, bespoke quality. Body text maintains comfortable reading measure through its generous line height. The small label size is used surprisingly for primary navigation, creating an elegant contrast with the oversized headlines. Verify licensing for these families before production use.

## Layout

The layout follows a consistent two-column rhythm for feature sections, with text content on the left and product imagery on the right. The grid is fluid but anchored by generous fixed padding of 1.875rem on the horizontal edges. Vertical rhythm is dramatic: hero sections receive substantial top and bottom padding (approximately 16.125rem each), creating breathing room that emphasizes the editorial quality.

The header is minimal and functional, containing the wordmark left-aligned and navigation distributed across the remaining width. The wordmark uses the label typography size but with bold weight implied by the face's design, followed by the orange period accent. Navigation items are spaced evenly, with primary actions ("Try free", "Sign in") grouped at the far right.

Content sections stack with large gaps between them. Feature sections use a tabbed interface on the left: a vertical list of options where the active item appears in full black while inactive items fade to muted gray. The right side holds imagery that changes with the selected tab. This split-panel composition appears consistently across the agencies and enterprise pages.

The logo grid on the enterprise page uses a six-column layout with equal-height cells in the canvas color, each containing a centered monochrome brand logo. This grid sits below a full-width headline, creating a social proof section that feels curated rather than cluttered.

## Visual language

The visual language is confident in its restraint. Rounded corners appear only on interactive elements—buttons receive a subtle 0.25rem radius—while all other surfaces remain sharp and rectilinear. Shadows are absent; depth is created through color contrast and spatial separation rather than elevation effects.

Imagery is treated as content-first: product screenshots appear at full fidelity, showing dark interfaces, colorful brand systems, and typographic specimens. These are never framed with decorative borders or overlaid with gradients. The surrounding canvas provides all the necessary containment.

The orange accent operates as a signature element. Its most consistent application is the period after "standards" in the wordmark, a small detail that anchors the brand identity. When used for calls-to-action, it appears as solid fills with white text, creating high-contrast moments that draw attention without disrupting the overall calm.

Motion is implied through the tabbed interfaces but not described in still views. The arrow grid on the enterprise page suggests directional transitions, with white arrows on black tiles that rotate to indicate state changes or navigation patterns.

## Components

### Primary action button
- **Anatomy**: Text label centered within a solid fill container
- **Surface and text color**: action background (#FF2E00) with surface text (#FFFFFF)
- **Typography**: action token, Söhne-Halbfett at 0.875rem, weight 600
- **Shape**: 0.25rem border radius, sharp enough to feel precise but slightly softened
- **Spacing**: approximately 0.83125rem padding on all sides, creating a compact but tappable target
- **Composition**: Appears inline with navigation or below descriptive text

### Secondary action button
- **Anatomy**: Text label centered within a light container
- **Surface and text color**: surface background with ink text, or transparent with ink text on canvas
- **Typography**: action token
- **Shape**: 0.25rem border radius
- **Composition**: Used for alternative choices alongside primary actions

### Section heading
- **Anatomy**: Large display text, often a complete sentence with terminal punctuation
- **Typography**: hero-display token at 3.25rem
- **Color**: ink (#000000)
- **Spacing**: 3rem margin below to separate from subsequent content
- **Composition**: Left-aligned, full width, occasionally followed by a period in the action color

### Feature tab list
- **Anatomy**: Vertical stack of text labels, one active, others inactive
- **Typography**: section-display token at 1.9375rem for active items, same size in muted-ink for inactive
- **Color**: Active in ink, inactive in muted-ink (#A1A1A1)
- **Spacing**: Items stack with approximately 1.5rem between them
- **Composition**: Left column of split layouts, paired with imagery on the right

### Logo grid cell
- **Anatomy**: Square or near-square container with centered content
- **Surface**: canvas (#F2F2F2)
- **Composition**: Part of a multi-column grid with small gaps between cells
- **Content**: Monochrome brand logos, preserved in their original forms, scaled to fit comfortably within padding

### Navigation bar
- **Anatomy**: Full-width strip containing wordmark, primary links, and utility actions
- **Surface**: Transparent or matching canvas
- **Typography**: label token for wordmark and navigation items, navigation token for menu items
- **Spacing**: 1.875rem horizontal padding
- **Composition**: Wordmark left, distributed navigation center, actions right

### Body text block
- **Anatomy**: Paragraph of running text
- **Typography**: body token at 1.25rem
- **Color**: ink
- **Spacing**: 3rem margin below, comfortable line length through container width
- **Composition**: Left-aligned, maximum width constrained for readability

## Responsive behavior

The system appears optimized for desktop viewing, with layouts that assume generous horizontal space. The two-column feature sections would naturally collapse to single-column on narrower viewports, with imagery stacking below text. The logo grid's six columns would reduce to three or two columns on tablet, and potentially scroll horizontally on mobile to preserve logo legibility.

Typography scales down proportionally: the 3.25rem hero display may reduce to 2.5rem on tablet and 2rem on mobile. The 1.9375rem section display would similarly compress to maintain hierarchy. Navigation items may consolidate into a menu trigger on smaller screens, though this pattern is not visible in the supplied material.

The substantial vertical padding (16.125rem) in hero sections should reduce on mobile to prevent excessive scrolling before content appears. A reduction to 6rem or 8rem would maintain the spacious feel while respecting viewport constraints.

## Practical implementation guidance

### Preserve
- The warm off-white canvas (#F2F2F2) rather than pure white; this subtle warmth is essential to the editorial character
- The precise tracking on display type (-0.01em at hero sizes)
- The orange period as a consistent brand signature
- The generous whitespace around headlines and between sections
- The two-column split for feature sections with text left, imagery right
- The monochrome treatment of partner logos in the canvas-colored grid cells

### Avoid
- Adding decorative shadows, gradients, or border effects
- Using the orange accent for large background areas; it should remain an accent
- Tightening the line height on body text below 1.5
- Introducing additional typefaces beyond the two specified families
- Cropping or altering the proportions of showcased brand imagery

### Recommended build order
1. Establish the canvas background and set up the two font families with proper loading
2. Implement the navigation bar with wordmark, distributed links, and utility actions
3. Build the hero section with large display type and generous vertical padding
4. Create the two-column feature section component with tabbed text left and imagery right
5. Implement the logo grid with consistent cell sizing and gap spacing
6. Add the primary action button with its distinctive orange fill
7. Polish spacing tokens and verify responsive collapse behavior

### Accessibility
- Ensure the orange action color (#FF2E00) meets contrast requirements when used for text; on white it may fail WCAG AA for small text, so reserve it for large buttons or decorative elements
- The muted-ink color (#A1A1A1) should not be used for body text or critical information
- Maintain the generous line heights and spacing that support readability for users with cognitive or visual needs
- When implementing tabbed interfaces, ensure keyboard navigation and focus indicators are present
- Provide alt text for all product screenshots and brand imagery that convey functional information

## Scope note

This guide covers the marketing and feature pages of Standards as visible in desktop views. Mobile layouts, breakpoint behavior, form interactions, account dashboards, and motion specifications are not included. The design system is built from the supplied imagery and should be validated against live implementation for interactive states and responsive behavior.
