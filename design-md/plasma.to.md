# How plasma.to is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/plasma.to-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ page with wireframe cube hero, accordion questions, and category filter pills on white background](https://pin.fontofweb.com/3453?format=jpg)](https://design.withfudge.com/share/pin-3453)

[FAQ page with wireframe cube hero, accordion questions, and category filter pills on white background](https://design.withfudge.com/share/pin-3453)

[![Dark footer with 'Designed for stablecoins' tagline, multi-column links, and social icons on near-black surface](https://pin.fontofweb.com/3452?format=jpg)](https://design.withfudge.com/share/pin-3452)

[Dark footer with 'Designed for stablecoins' tagline, multi-column links, and social icons on near-black surface](https://design.withfudge.com/share/pin-3452)

[![Newsletter signup with centered headline, email input field, black subscribe button, and decorative pixel blocks](https://pin.fontofweb.com/3451?format=jpg)](https://design.withfudge.com/share/pin-3451)

[Newsletter signup with centered headline, email input field, black subscribe button, and decorative pixel blocks](https://design.withfudge.com/share/pin-3451)

[![Global reach section with wireframe globe, regional partner logos, and four large metric statistics on white background](https://pin.fontofweb.com/3450?format=jpg)](https://design.withfudge.com/share/pin-3450)

[Global reach section with wireframe globe, regional partner logos, and four large metric statistics on white background](https://design.withfudge.com/share/pin-3450)

## Overview

Plasma presents a disciplined, engineering-forward visual identity built for a financial infrastructure platform. The design communicates trust through restraint: generous whitespace, a single type family, and a near-monochrome palette punctuated by warm geometric accents. Wireframe 3D graphics—cubes, globes, and pixel blocks—appear throughout as signature motifs, suggesting blockchain geometry without literal cryptocurrency iconography. The system balances institutional credibility with contemporary minimalism, using stark contrast between light and dark surfaces to create rhythm across long-scrolling pages. Navigation remains understated, allowing content and data to dominate. The overall impression is of a mature protocol: precise, global, and technologically assured.

## Colors

The color system is intentionally narrow, deriving its character from value contrast rather than hue variety. Black and white establish the primary reading environment, with a warm stone accent appearing in decorative elements and select typographic moments.

| token | value | use |
|---|---|---|
| ink | #111111 | Primary text, active buttons, wireframe strokes, dark surfaces |
| muted-ink | #666666 | Secondary text, descriptions, footer links, metric labels |
| canvas | #ffffff | Primary backgrounds, light sections, input text on dark |
| surface | #f5f5f5 | Filter pill backgrounds, subtle section alternation |
| surface-dark | #1a1a1a | Footer background, dark mode surfaces |
| border | #e5e5e5 | Hairline dividers, accordion separators, subtle boundaries |
| accent | #8b7355 | Decorative pixel blocks, newsletter headline accent, warm geometric elements |

The light mode dominates: white canvas with black ink creates maximum legibility for technical content. Dark surfaces appear as deliberate anchors—primarily in the footer—where reversed text maintains the same typographic scale. The warm accent color functions exclusively as an illustrative accent, never as an interactive signal. No gradient or shadow tokens are present in the visible system; depth is achieved through flat value shifts and geometric layering.

## Typography

A single type family carries all communication, lending the system its unified, engineered tone. PP Mori, designed by Caio Kondo and Mathieu Desjardins for Pangram Pangram Foundry, provides a contemporary grotesque with subtle humanist warmth. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | PP Mori | 3rem | 400 | 1.1 | -0.02em | Page titles, major section headlines |
| section-display | PP Mori | 2rem | 400 | 1.2 | -0.01em | FAQ questions, metric numbers, sub-section headers |
| body | PP Mori | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, form labels |
| body-small | PP Mori | 0.875rem | 400 | 1.5 | 0 | Navigation, buttons, footer links |
| label | PP Mori | 0.75rem | 400 | 1.4 | 0.01em | Filter pills, tags, micro-copy |
| navigation | PP Mori | 0.875rem | 400 | 1 | 0 | Header links, active states |

The type scale is built on a 4px relative unit. Display sizes employ tight negative tracking for a compact, authoritative presence. Body text maintains generous line height for extended reading about technical concepts. No bold weight is used in the visible system; hierarchy is established through size and color contrast alone.

## Layout

The page architecture follows a centered, contained model with generous breathing room. Maximum content width appears to sit around 1200px, with internal padding creating comfortable margins on either side. Sections stack vertically with substantial separation—typically 6rem between major content blocks.

The header occupies a fixed or sticky position at the viewport top, containing the Plasma logomark left, a horizontal navigation center, and a primary action button right. Navigation links distribute evenly with consistent spacing.

Content sections employ asymmetric two-column layouts where editorial content sits left and interactive or illustrative content sits right. The FAQ page demonstrates this clearly: the section title and filter pills occupy the left third, while the accordion occupies the right two-thirds. This ratio creates visual tension while preserving reading comfort.

The footer inverts the light dominance, expanding to full width with a dark surface. Its internal grid uses four columns: brand tagline and social links left, then three link columns for Products, About, and Learn. Legal links and copyright occupy a sub-row with horizontal separation.

Vertical rhythm is maintained through consistent section padding rather than visible rules. The wireframe graphics—cubes, globes, pixel blocks—break the rectangular grid intentionally, extending to edges or floating in negative space to create dimensional interest.

## Visual language

Three distinctive motifs define Plasma's visual character. First, wireframe 3D geometry appears as hero illustrations: isometric cube clusters on the FAQ page, a gridded globe on the global reach section. These render in thin black strokes on white or near-white backgrounds, suggesting technical precision and global network topology without literal map imagery.

Second, pixel-block decorations frame select sections—warm stone-colored squares arranged in partial checkerboard patterns at corners. These appear in the newsletter section, introducing organic asymmetry and brand warmth to otherwise rectilinear layouts.

Third, data presentation favors large numerals with minimal annotation. Metrics like "$1B" and "15+" render at display scale, with small muted labels beneath. No borders or background cards contain these figures; they sit directly on the canvas, emphasizing transparency.

The overall aesthetic avoids gradients, shadows, and rounded surfaces beyond functional pills. Corners are sharp. Transitions between sections are abrupt value shifts rather than blended fades. This flat, declarative approach reinforces the platform's positioning as infrastructure rather than consumer application.

## Components

### Header

- Anatomy: Logomark (circular icon with radiating lines + "Plasma" wordmark), horizontal link list, primary action button
- Surface: Transparent or white background, black ink text
- Typography: Navigation token for links, body-small for button
- Shape: Full-width bar, sharp corners
- Spacing: Compact vertical padding, generous horizontal margins
- Composition: Flex row with space-between, logo left, navigation center, action right

### Primary Button

- Anatomy: Text label with optional arrow icon
- Surface: Solid ink background, canvas text
- Typography: Body-small, regular weight
- Shape: Sharp rectangle, no radius
- Spacing: 0.75rem vertical, 1.5rem horizontal
- States: Default only visible; hover/focus not determinable from still images

### Filter Pill

- Anatomy: Text label in rounded container
- Surface: Surface gray background, ink text; active state inverts to ink background, canvas text
- Typography: Label token
- Shape: Full pill radius
- Spacing: 0.5rem vertical, 1rem horizontal
- Composition: Horizontal row with 0.5rem gap between pills, wrapping permitted

### Accordion

- Anatomy: Question text, expand/collapse icon (minus or plus), answer text, bottom border
- Surface: Transparent background, border-bottom in border color
- Typography: Section-display for question, body for answer
- Shape: Full width, sharp corners
- Spacing: 1.5rem vertical padding per item
- Composition: Question and icon in flex row with space-between; answer appears below with top margin
- States: Expanded (minus icon, answer visible) and collapsed (plus icon, answer hidden)

### Input Field

- Anatomy: Text placeholder, optional submit button attached
- Surface: Surface gray background, ink text
- Typography: Body token
- Shape: Sharp rectangle, no radius
- Spacing: 0.875rem vertical, 1rem horizontal padding
- Composition: Often paired with primary button in horizontal flex arrangement

### Footer

- Anatomy: Brand tagline, social icon links, three link columns, legal sub-row
- Surface: Surface-dark background, muted-ink text, canvas text for headings
- Typography: Section-display for column headings, body-small for links
- Shape: Full-width, sharp top edge
- Spacing: Generous internal padding, 6rem equivalent vertical breathing room
- Composition: Asymmetric grid with brand area left, link columns right; legal row spans full width below

## Responsive behavior

The visible desktop layouts suggest a single-column transformation for narrow viewports. The FAQ two-column layout would stack naturally: filter pills becoming a horizontal scroll or wrap, accordion expanding to full width. The footer link columns would compress to a single column or accordion pattern.

The wireframe graphics maintain their aspect ratios; the globe illustration would scale down proportionally, potentially becoming a centered hero element rather than a side-positioned graphic. Metric statistics currently in a 2x2 grid would likely stack vertically on mobile.

Typography scales down proportionally: hero-display at 3rem may reduce to 2rem or section-display size on narrow screens. Navigation would collapse to a hamburger menu or simplify to logo-plus-action-button, though this pattern is not visible in supplied images.

## Practical implementation guidance

### Preserve
- The stark monochrome palette with single warm accent; this restraint is central to brand recognition
- Sharp corners throughout; resist introducing border-radius to buttons, inputs, or cards
- Wireframe illustration style—thin strokes, no fills, isometric or perspective geometry
- Generous whitespace between sections; the system breathes through absence rather than decoration
- Single-family typography; mixing in secondary faces would dilute the engineered tone

### Avoid
- Gradients, drop shadows, or glassmorphism effects; these contradict the flat, declarative aesthetic
- Rounded corners on primary interactive elements; the system uses pills only for filter tags
- Color beyond the defined accent for interactive states; rely on value inversion instead
- Decorative borders or card containers around content; let spacing and typography create structure
- Multiple font weights for emphasis; size and color contrast suffice

### Recommended build order
1. Establish the 4px relative unit and type scale with PP Mori at all six defined sizes
2. Implement the monochrome color system with CSS custom properties
3. Build the header with logo, navigation, and primary button
4. Create the accordion component with expand/collapse states and border separators
5. Implement the filter pill group with active state inversion
6. Construct the footer with dark surface and multi-column link grid
7. Add wireframe illustrations as SVG or lightweight 3D renders
8. Polish with section spacing and responsive stacking behavior

### Accessibility
- Ensure the ink-on-canvas and canvas-on-ink pairings meet WCAG AA contrast minimums; the near-black and white combination exceeds requirements
- Provide visible focus indicators for sharp-cornered buttons and inputs; the lack of radius should not mean lack of focus state
- Use aria-expanded on accordion triggers and associate answer content with aria-controls
- Maintain keyboard operability for the filter pill group as a single-select or toggle pattern
- Consider reduced-motion preferences for any accordion expand/collapse animations

## Scope note

This guide covers the marketing homepage and FAQ page surfaces visible in the supplied images. Dashboard interfaces, mobile breakpoints, loading states, form validation, and motion behavior are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px grid.
