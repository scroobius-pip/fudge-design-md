# How app.ahrefs.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.ahrefs.com-design)

Last updated: 2026-08-10

## Captured pages

[![Promotional banner with orange Subscribe button, sparkline icons, and pricing on dark charcoal background](https://pin.fontofweb.com/1744?format=jpg)](https://design.withfudge.com/share/pin-1744)

[Promotional banner with orange Subscribe button, sparkline icons, and pricing on dark charcoal background](https://design.withfudge.com/share/pin-1744)

[![Project import page with two-panel layout, Google Search Console branding, and step indicator on dark background](https://pin.fontofweb.com/1743?format=jpg)](https://design.withfudge.com/share/pin-1743)

[Project import page with two-panel layout, Google Search Console branding, and step indicator on dark background](https://design.withfudge.com/share/pin-1743)

## Overview

The Ahrefs web application presents a dark-mode SaaS interface built for SEO professionals managing website projects. The visual system prioritizes functional clarity over decorative elements, using deep charcoal surfaces that reduce eye strain during extended analytical work. The design employs a restrained palette where warm orange accents signal primary actions and progress, while cool grays establish information hierarchy. Typography relies entirely on Inter, a neo-grotesque sans-serif that maintains crisp legibility at small sizes for data-dense dashboards. The interface architecture favors card-based layouts with clear vertical rhythm, using subtle borders and background shifts rather than heavy shadows to separate content regions. Every element serves the core workflow of project creation, verification, and data exploration, with promotional surfaces integrated unobtrusively into the task flow.

## Colors

The color system operates in a dark-mode context where surfaces descend from near-black to medium charcoal, and text progresses from pure white to muted gray. The orange accent derives from the brand identity and appears exclusively on interactive elements that advance user goals.

| token | value | use |
|---|---|---|
| canvas | #1E1E1E | Primary application background behind all content |
| surface | #2A2A2A | Card backgrounds, panel containers, promotional banners |
| surface-elevated | #3A3A3A | Hover states, active step indicators, secondary button fills |
| ink | #FFFFFF | Primary headings, active labels, primary button text |
| ink-muted | #9A9A9A | Body copy, descriptions, inactive states, helper text |
| action | #FF9500 | Primary buttons, promotional badges, pricing highlights |
| action-hover | #FFB84D | Lighter orange for hover feedback on action elements |
| border | #4A4A4A | Subtle dividers, panel outlines, separator lines |
| success | #4CD964 | Verification checkmarks, positive status indicators |
| info | #007AFF | External link indicators, informational accents |

The dark canvas and surface layers create depth through value contrast rather than shadow. The action orange maintains high visibility against dark backgrounds while avoiding the aggression of pure red. Muted ink serves the majority of readable content, reserving pure white for maximum emphasis. The border color appears as one-pixel hairlines that define panel edges without visual weight. Success and info colors appear sparingly as functional signals within lists and link treatments.

## Typography

The type system uses Inter at multiple weights, designed by Rasmus Andersson and distributed by Rsms. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 2rem | 700 | 1.2 | -0.02em | Page titles, major section headings |
| section-display | Inter | 1.5rem | 700 | 1.3 | -0.01em | Panel headings, card titles |
| body | Inter | 1rem | 400 | 1.5 | 0 | Primary descriptions, list items |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, captions |
| label | Inter | 0.75rem | 600 | 1.4 | 0.02em | Buttons, badges, step numbers |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Tab labels, menu items |

The hierarchy relies on weight and size contrast rather than color variation. Bold weights appear exclusively at display sizes, with medium weight handling navigation and semibold reserved for compact labels. Body text maintains generous line height for readability of longer descriptions. The negative tracking on display sizes tightens word spacing for visual impact at large sizes, while labels gain slight positive tracking for all-caps or small-caps treatments. The type scale progresses in whole-number multiples of the 4px base unit, yielding clean rem values that align to the spacing grid.

## Layout

The application uses a centered single-column layout for focused task flows, with content constrained to readable widths and generous surrounding canvas. The project creation page demonstrates this pattern: a centered heading pair sits above a full-width panel that contains the primary decision interface.

The panel system employs a two-column split for binary choices, separated by a vertical divider with an "OR" label positioned at the vertical center. Each column maintains internal padding and aligns its content to a consistent top edge. The left column carries external service branding and a feature list with checkmark icons; the right column presents a step indicator and bulleted considerations. This symmetrical treatment gives equal visual weight to both paths while allowing content length to vary.

Vertical spacing follows a section-based rhythm. Major headings receive substantial top margin to separate them from preceding content. Panel containers sit below explanatory text with clear separation. Within panels, element spacing uses consistent gaps between icon, heading, list, and action regions. The promotional banner in the secondary view demonstrates horizontal composition: icon cluster left, text block center, pricing and action right, all vertically centered within the banner height.

The layout assumes a minimum comfortable width and does not attempt to compress complex decision interfaces into narrow viewports. Content maintains left alignment within columns rather than centering, preserving scannable text edges for list content.

## Visual language

The interface communicates through a sparse, utilitarian visual vocabulary. Decorative elements are limited to functional icons and brand marks. The sparkline-style icons in the promotional banner use simple geometric shapes—four-pointed stars and diamonds—in orange and blue gradients, suggesting data visualization without complexity. These icons carry no background container, sitting directly on the surface.

Step indicators use filled circles with numbers, where the active step receives a lighter fill than inactive steps. This creates progression readability without checkmark complexity. Feature lists use simple checkmarks rather than custom icons, maintaining consistency with platform conventions.

The "New" badge on promotional content uses a small rectangular container with slightly rounded corners, filled with a muted surface color and set in small semibold type. This restraint prevents promotional elements from overwhelming functional content.

Borders appear as single-pixel lines in the border color, never doubling or shadowing. The vertical divider in the two-panel layout extends nearly the full height, with the "OR" text interrupting it at center. This classical treatment avoids decorative alternatives like dotted lines or icon separators.

External links indicate themselves with a small arrow icon following the link text, maintaining the pattern established by the platform rather than relying on color alone.

## Components

### Promotional banner

- **Anatomy**: Horizontal container with three zones: icon cluster left, text center, pricing and action right
- **Surface**: Background uses surface color with one-pixel border in border color
- **Typography**: Heading uses section-display weight and size in ink; description uses body-small in ink-muted; pricing uses hero-display weight for numerals with body-small for unit suffix; link uses body-small in info color
- **Shape**: Rounded corners at panel radius; badge has smaller button-radius corners
- **Spacing**: Internal padding of 1.5rem vertical, 2rem horizontal; gap between text and pricing zones approximately 2rem
- **Composition**: Flex row with vertical centering; text block left-aligned within its zone; action button right-aligned
- **Variants**: Standard promotional variant with "New" badge; badge positioned inline with heading text

### Two-panel decision card

- **Anatomy**: Full-width panel containing two equal columns separated by vertical divider with centered "OR" text
- **Surface**: Panel background in surface color; no visible border on panel itself
- **Typography**: Column headings use section-display in ink; list items use body in ink-muted; action buttons use navigation weight; "OR" text uses body-small in ink-muted
- **Shape**: Panel corners at panel radius; no additional shaping on internal elements
- **Spacing**: Panel padding of 2rem; column internal spacing of 1.5rem between elements; divider extends to near panel edges
- **Composition**: Columns share equal width; content top-aligned within each column; action buttons positioned consistently below content
- **Variants**: Left column may carry external branding; right column shows step progression indicator

### Primary action button

- **Anatomy**: Text label within rectangular container
- **Surface**: Background in action color; text in ink
- **Typography**: Label token, semibold weight, typically sentence case
- **Shape**: Small rounded corners at button radius
- **Spacing**: Generous horizontal padding of 1.5rem, vertical padding of 0.75rem
- **Composition**: Inline-flex with centered text; may appear standalone or in banner context

### Step indicator

- **Anatomy**: Horizontal sequence of numbered circles with dot separators
- **Surface**: Active circle in surface-elevated; inactive circles in surface; numbers in ink-muted
- **Typography**: Label token for numerals
- **Shape**: Perfect circles, likely 1.5rem diameter
- **Spacing**: Circles separated by dots with consistent gap
- **Composition**: Centered within its container zone

### Feature list

- **Anatomy**: Vertical stack of text items, each prefixed by icon
- **Surface**: Transparent; icons in success color for checkmarks
- **Typography**: Body token for text
- **Spacing**: Items separated by 0.75rem vertical gap; icon to text gap of 0.5rem
- **Composition**: Left-aligned with icon and text in horizontal row

## Responsive behavior

The two-panel decision layout should stack vertically on narrow viewports, with the "OR" divider transforming to a horizontal rule or simple text between sections. Column padding should reduce proportionally while maintaining readable text widths. The promotional banner should stack its three zones vertically on narrow screens, with icon top, text center, and pricing with action below.

Typography should maintain its rem-based scale across viewport sizes, with display sizes potentially reducing by one step on very narrow screens. The interface does not appear to employ a fluid type scale; discrete breakpoints with adjusted tokens would maintain the systematic approach.

Touch targets for buttons should maintain minimum 44px height regardless of viewport, which the current generous padding already satisfies. Step indicators may require increased spacing between touchable elements when rendered as interactive controls.

## Practical implementation guidance

### Preserve
- The dark canvas with subtle surface elevation for panels and cards
- Orange action color reserved exclusively for primary advancement and promotional emphasis
- Inter font family at all sizes with weight-based hierarchy
- Generous internal padding on interactive containers
- One-pixel hairline borders rather than shadows for separation
- Left-aligned text within columns for scannable list content

### Avoid
- Light mode adaptations without complete palette inversion
- Additional accent colors beyond orange, success green, and info blue
- Heavy drop shadows or glow effects on elevated surfaces
- Center-aligned body text in multi-line descriptions
- Rounded corners larger than the modest panel and button radii
- Decorative background patterns or gradients on functional surfaces

### Recommended build order
1. Establish canvas and surface color tokens with proper contrast ratios
2. Implement Inter at all defined sizes and weights with proper font loading
3. Build the panel container with correct padding and border treatment
4. Create the two-column decision layout with divider and responsive stacking
5. Implement primary and secondary button components with hover states
6. Add typography components for headings, body, and label scales
7. Integrate promotional banner with its three-zone composition
8. Polish with step indicators, feature lists, and external link treatments

### Accessibility
- Ensure all text meets WCAG AA contrast against dark backgrounds; the ink-muted color should be verified for small text compliance
- Provide visible focus indicators on all interactive elements, using action color or surface-elevation change
- Maintain logical tab order through the two-panel decision flow
- Use aria-label or visible text to clarify the "OR" divider's semantic purpose
- Ensure step indicators communicate progress to assistive technology when interactive

## Scope note

This guide covers the project creation and promotional surfaces visible in the supplied images. Dashboard analytics, report views, navigation shells, and account management interfaces are not represented. Motion, loading states, form validation, and mobile-specific adaptations are not described. Measurements are practical adaptation targets derived from visible proportions rather than extracted specifications.
