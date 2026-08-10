# How cryptix.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cryptix.framer.website-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with centered tagline, navigation bar with neon green CTA button, and four-column feature grid with circular icon containers on dark background](https://pin.fontofweb.com/5560?format=jpg)](https://design.withfudge.com/share/pin-5560)

[Hero section with centered tagline, navigation bar with neon green CTA button, and four-column feature grid with circular icon containers on dark background](https://design.withfudge.com/share/pin-5560)

[![Complete landing page view showing hero typography, Why Choose Cryptix section heading, and feature cards with shield, lightning, arrows, and monitor icons in circular frames](https://pin.fontofweb.com/5559?format=jpg)](https://design.withfudge.com/share/pin-5559)

[Complete landing page view showing hero typography, Why Choose Cryptix section heading, and feature cards with shield, lightning, arrows, and monitor icons in circular frames](https://design.withfudge.com/share/pin-5559)

## Overview

Cryptix presents itself as a premium cryptocurrency trading platform through a deliberately restrained visual system. The design commits to a near-black canvas that absorbs light, allowing a single electric green accent to carry all interactive energy. This is not a busy financial dashboard crowded with charts and tickers; it is a calm, spacious landing experience that speaks in large centered statements and geometric iconography. The hierarchy is flat and horizontal, with a persistent top navigation, a commanding hero statement, and a benefits grid that reads left to right like a checklist of institutional promises. The overall impression is one of controlled confidence: the darkness suggests sophistication and security, while the neon green action elements signal modernity and forward motion. Every element is given room to breathe, with generous vertical spacing between sections and clear horizontal divisions that keep the structure legible at a glance.

## Colors

The color system is intentionally minimal, built on a near-monochrome dark foundation with a single high-saturation accent. This restraint amplifies the impact of the green interactive elements and keeps the interface feeling premium rather than playful.

| token | value | use |
|---|---|---|
| canvas | `#09090b` | Primary page background, deepest layer |
| surface | `#18181b` | Elevated containers, icon backgrounds, subtle depth |
| ink | `#fafafa` | Primary text, headings, navigation labels |
| muted-ink | `#a1a1aa` | Secondary descriptions, supporting body copy |
| action | `#22c55e` | Primary buttons, brand accent, interactive highlights |
| action-hover | `#16a34a` | Button pressed or hovered state |
| border | `#27272a` | Dividers, card borders, icon container strokes |

The canvas color is not pure black but a very dark charcoal with subtle warmth, preventing the harshness of `#000000` while maintaining the deep space effect. The surface token sits just above it, providing enough separation for circular icon containers and any elevated panels without breaking the monochrome continuity. Ink is an off-white that reduces eye strain against the dark ground compared to pure white. The muted-ink serves all descriptive and secondary text, creating a clear two-level text hierarchy without introducing additional hues. The action green is vivid and slightly yellow-tinted, ensuring visibility against the dark background while feeling energetic rather than clinical. Borders are extremely subtle, present as hairline divisions that structure space without drawing attention to themselves.

## Typography

The type system relies on a single family across all roles, differentiated by size, weight, and spacing rather than family change. This creates a cohesive, almost editorial voice appropriate for a platform making trust-based claims.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | DM Sans 9 Pt | 3rem | 400 | 1.2 | -0.01em | Main hero statement, page-level headline |
| section-display | DM Sans 9 Pt | 2.5rem | 400 | 1.2 | -0.01em | Section headings like "Why Choose Cryptix?" |
| body | DM Sans 9 Pt | 1rem | 400 | 1.6 | 0em | Primary descriptions, longer text blocks |
| body-small | DM Sans 9 Pt | 0.875rem | 400 | 1.5 | 0em | Feature card descriptions, tighter spaces |
| label | DM Sans 9 Pt | 1rem | 500 | 1.4 | 0em | Feature titles, button text, emphasized labels |
| navigation | DM Sans 9 Pt | 0.875rem | 400 | 1 | 0em | Top bar links, utility text |

The hero-display and section-display tokens share the same weight and tracking, creating a family relationship between the page's two largest statements. The slight negative tracking tightens the word shapes without becoming compressed, appropriate for a dark mode where letterforms need to hold together visually. Body leading is generous at 1.6, ensuring readability in the feature descriptions. The label token adds weight rather than size to create emphasis, keeping the vertical rhythm more consistent than a size-jump approach would allow. Navigation text is compact and neutral, designed to recede until hovered or selected.

Verify licensing for these families before production use.

## Layout

The page structure follows a centered, single-column philosophy with controlled horizontal expansion. The navigation bar spans full width with internal constraints, while the main content area holds centered text blocks that do not stretch to extreme widths.

The navigation bar sits fixed or static at the top, containing the Cryptix wordmark and links on the left, with the primary action button pushed to the far right. A subtle bottom border separates it from the hero space. The hero section itself is vertically generous, with the main tagline centered both horizontally and within a large top-to-bottom breathing room. Below this, the "Why Choose Cryptix?" section introduces a heading-subheading pair, again centered, before transitioning to the four-column feature grid.

The feature grid is the most structurally complex element visible. It divides the available width into four equal columns, each containing a circular icon container, a bold feature title, and a short description. The grid appears to sit flush or near-flush with the section edges, with thin vertical borders separating the columns. This creates a tabular, almost spreadsheet-like regularity that reinforces the platform's claims of precision and reliability.

Spacing between major sections is substantial, likely in the range of 6rem or more, allowing each statement to land with impact before the eye travels downward. Within sections, content gaps are tighter but still comfortable, around 1.5rem between heading and subheading, and similar spacing between icon, title, and description within each feature card.

## Visual language

The visual language of Cryptix is geometric, minimal, and nocturnal. Every decorative element serves a functional or symbolic purpose. The circular icon containers are the most distinctive repeated shape: perfect circles with thin borders, each housing a simple white line icon. These circles echo the form of coins and tokens without being literal, creating a subtle thematic resonance appropriate to the crypto domain.

The iconography itself is drawn with single-weight strokes, avoiding filled shapes or gradients. The visible icons—a shield for security, a lightning bolt for speed, crossing arrows for optimization, and a monitor for interface—are immediately legible at small sizes and maintain clarity against the dark surface backgrounds. This line-art approach keeps the visual weight light despite the density of the dark canvas.

There is no photography visible in the supplied images, and no gradient backgrounds or decorative patterns. The design relies entirely on type, space, line, and the single green accent to create interest. This asceticism is itself a brand statement: the platform presents as tool-like and serious, avoiding the speculative exuberance often associated with cryptocurrency marketing.

The border language is consistent throughout: 1px hairlines in the border color, used for navigation separation, column divisions, and icon container perimeters. These borders are present enough to structure the layout but subdued enough to disappear from conscious attention.

## Components

### Navigation bar

- **Anatomy**: Logo mark (stylized "C" icon) plus "Cryptix" wordmark on the left; horizontal link list in the center-left; pill-shaped primary button on the far right.
- **Surface**: Transparent or canvas-colored background, with a 1px bottom border in border color.
- **Typography**: Navigation token for all links, label token for the CTA button.
- **Spacing**: Horizontal padding of approximately 2rem, vertical padding of approximately 1rem. Links spaced evenly with comfortable gaps.
- **Composition**: Flex row with space-between logic, logo group and button anchoring the extremes.

### Primary button

- **Anatomy**: Text label centered within a fully rounded pill container.
- **Surface**: Solid action green background, canvas-colored text.
- **Typography**: Label token, medium weight.
- **Shape**: Full pill with 9999px border radius.
- **Spacing**: Generous horizontal padding creating a capsule proportion, approximately 0.75rem vertical and 1.5rem horizontal.
- **Variants**: The visible state is the default; a darker action-hover should be implemented for interaction feedback.

### Hero statement

- **Anatomy**: Single block of centered text, no supporting imagery or form fields visible.
- **Typography**: Hero-display token, centered alignment.
- **Spacing**: Large vertical margins above and below, isolating the statement in open canvas space.
- **Composition**: Maximum width constrained to maintain readable line lengths, likely around 800px centered.

### Section heading group

- **Anatomy**: Large heading followed by a smaller descriptive line.
- **Typography**: Section-display for the heading, body for the description.
- **Spacing**: Tight gap between heading and description, approximately 1rem, with larger space above and below the group.
- **Composition**: Centered alignment matching the hero.

### Feature card

- **Anatomy**: Circular icon container, bold feature title, descriptive paragraph.
- **Surface**: Transparent or canvas background; the card is defined by its position in the grid and optional border divisions rather than a containing box.
- **Typography**: Label token for the title, body-small for the description.
- **Spacing**: Icon container sized at approximately 3.5rem diameter, with 1.5rem to 2rem between icon and title, and similar spacing between title and description.
- **Composition**: Vertical stack, left-aligned text within each column.

### Icon container

- **Anatomy**: Perfect circle with centered icon.
- **Surface**: Surface-colored fill with 1px border in border color.
- **Shape**: 50% border radius for perfect circularity.
- **Size**: Approximately 3.5rem diameter.
- **Icon treatment**: White or ink-colored line icons, single stroke weight, centered within the circle.

## Responsive behavior

The desktop layout visible in the images shows a four-column feature grid and a horizontally expanded navigation. For narrower viewports, the following adaptations are recommended:

- The navigation links should collapse into a hamburger menu or hide behind a "Menu" disclosure, preserving the logo and primary button.
- The hero statement should reduce in size, likely to the section-display token or slightly below, maintaining centered alignment.
- The four-column feature grid should reflow to two columns on tablet and a single column on mobile, with each card stacking vertically and maintaining internal alignment.
- Horizontal padding should compress from 2rem to 1rem or 0.75rem on the narrowest screens.
- The icon containers may reduce slightly in size but should remain large enough for touch targets, maintaining at least 2.75rem diameter.

## Practical implementation guidance

### Preserve
- The extreme contrast between dark canvas and bright action green; this is the signature of the brand.
- The generous vertical breathing room around major statements; crowding the hero would destroy the premium tone.
- The single-family typography system; introducing a second family would fracture the cohesive voice.
- The geometric purity of the circular icon containers and pill buttons.
- The hairline border language; thicker borders would feel heavy and cheap.

### Avoid
- Pure black backgrounds; the subtle warmth of the canvas color prevents harshness.
- Additional accent colors; the single green is intentionally dominant.
- Filled or multi-color icons; the line-art style is essential to the restrained aesthetic.
- Box shadows or elevation effects; the flat layering with borders is sufficient.
- Centered text blocks that exceed comfortable reading width; constrain hero and section text to approximately 800px maximum.

### Recommended build order
1. Establish the canvas background and ink text colors as global defaults.
2. Implement the typography scale with DM Sans 9 Pt, ensuring the hero and section display sizes are correct.
3. Build the navigation bar with logo, links, and the pill-shaped primary button.
4. Create the hero section with centered, width-constrained text.
5. Develop the icon container component with its circular shape and border treatment.
6. Construct the feature grid with four columns, vertical borders, and the icon-title-description stack.
7. Apply responsive breakpoints to collapse the grid and adjust type sizes.

### Accessibility
- Ensure the action green meets contrast requirements against the canvas for interactive elements; the green-on-dark combination should be verified for WCAG AA compliance.
- Provide visible focus states for all interactive elements, likely using the action color with an outline offset.
- Maintain semantic heading hierarchy with a single h1 in the hero and h2 for section headings.
- Ensure icon containers have appropriate aria-labels or are accompanied by visible text labels.
- Consider a reduced-motion preference for any scroll or entrance animations.

## Scope note

This guide covers the landing page hero and benefits section visible in the supplied images. The complete site likely contains additional sections such as pricing, testimonials, FAQ, and footer content not shown here. Measurements are practical adaptation targets. No mobile layouts, hover states, form interactions, or animation behavior are documented. The design system should be extended as additional surfaces are verified.
