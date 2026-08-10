# How ground.news is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ground.news-design)

Last updated: 2026-08-10

## Captured pages

[![Ground News homepage hero with dark textured background, headline 'See every side of every news story', and news card overlay showing political bias spectrum](https://pin.fontofweb.com/8644?format=jpg)](https://design.withfudge.com/share/pin-8644)

[Ground News homepage hero with dark textured background, headline 'See every side of every news story', and news card overlay showing political bias spectrum](https://design.withfudge.com/share/pin-8644)

[![Gift Subscriptions page section with dark background, halftone gift box illustration, and tan accent buttons for supporter calls-to-action](https://pin.fontofweb.com/8643?format=jpg)](https://design.withfudge.com/share/pin-8643)

[Gift Subscriptions page section with dark background, halftone gift box illustration, and tan accent buttons for supporter calls-to-action](https://design.withfudge.com/share/pin-8643)

[![Group Subscriptions section with newspaper collage illustration on dark background transitioning to light FAQ area with dark accordion cards](https://pin.fontofweb.com/8642?format=jpg)](https://design.withfudge.com/share/pin-8642)

[Group Subscriptions section with newspaper collage illustration on dark background transitioning to light FAQ area with dark accordion cards](https://design.withfudge.com/share/pin-8642)

[![Pricing comparison table with four columns showing Vantage, Premium, and Pro tiers with checkmarks, feature limits, and dark call-to-action buttons](https://pin.fontofweb.com/8641?format=jpg)](https://design.withfudge.com/share/pin-8641)

[Pricing comparison table with four columns showing Vantage, Premium, and Pro tiers with checkmarks, feature limits, and dark call-to-action buttons](https://design.withfudge.com/share/pin-8641)

## Overview

Ground News presents a dark-first editorial experience built around the promise of multi-perspective journalism. The visual system anchors readers in a near-black environment that reduces eye strain during extended news consumption while making photographic content and data visualizations feel immersive. The interface balances serious editorial credibility with approachable warmth through selective use of tan accents and a humanist sans-serif type family.

The design operates across two primary modes: a dark canvas for content consumption and a light surface for transactional moments like pricing comparisons. Political bias visualization appears as a core interface element, rendered through a three-color spectrum that gives readers immediate orientation on source positioning. Typography carries significant weight in establishing hierarchy, with tightly tracked display weights for headlines and a lighter regular weight for sustained reading. The overall impression is of a premium news tool—confident, uncluttered, and purpose-built for readers who want to see beyond single-source narratives.

## Colors

The palette is built on a dark foundation with strategic warmth and functional color coding for political bias.

| token | value | use |
|---|---|---|
| canvas | `#121212` | Primary page background, body color |
| canvas-elevated | `#000000` | Deepest blacks, header bars, gradient endpoints |
| surface | `#262626` | Card backgrounds, elevated containers, bias bar tracks |
| surface-light | `#E6E8DE` | Pricing tables, FAQ sections, light transactional surfaces |
| ink | `#EEEFE9` | Primary text on dark backgrounds, headlines, body copy |
| ink-muted | `#A6A6A1` | Secondary text, timestamps, metadata, disabled states |
| ink-inverse | `#121212` | Text on light surfaces, tan buttons |
| accent-tan | `#D1BD91` | Primary call-to-action buttons, gift imagery accents, supporter highlights |
| accent-blue | `#204986` | Right-leaning bias indicator, conservative source tagging |
| accent-red | `#802727` | Left-leaning bias indicator, progressive source tagging |
| border-subtle | `#393938` | Card borders, dividers on dark surfaces |
| border-light | `#A6A6A1` | Hairline rules, subtle separators |

The dark mode dominates the experience. The canvas at `#121212` provides sufficient depth below pure black, preventing the harsh contrast that can fatigue readers during long sessions. Surface elevations at `#262626` create subtle layering for news cards and interactive containers without breaking the dark continuity.

Light surfaces appear intentionally, primarily in pricing and subscription contexts where readability of dense tabular data benefits from higher contrast. The surface-light tone carries a warm gray-green cast that harmonizes with the tan accent rather than competing against it.

The bias visualization system uses a saturated red-blue pair against neutral white for the center position. These colors appear in horizontal bars, source tags, and coverage percentage indicators. The tan accent functions as the brand's emotional warmth—appearing in gift subscription imagery, supporter calls-to-action, and primary conversion buttons where the goal is reader generosity rather than urgency.

## Typography

Ground News uses the Universal Sans family across all interface text, with three weight variants deployed for distinct roles. The family was designed by Briton Smith and is available from Family Type. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Universal Sans 680 | 2.625rem | 680 | 1.1 | -0.05em | Homepage hero headlines, major section titles |
| section-display | Universal Sans 680 | 1.625rem | 680 | 1.15 | -0.05em | Subsection headings, feature titles |
| headline | Universal Sans 800 | 1.375rem | 800 | 1.14 | -0.05em | Card titles, pricing tier names, FAQ questions |
| body-large | Universal Sans 480 | 1.125rem | 480 | 1.5 | -0.025em | Lead paragraphs, hero descriptions, button labels |
| body | Universal Sans 480 | 1rem | 400 | 1.5 | -0.05em | Article summaries, feature descriptions, table content |
| body-small | Universal Sans 480 | 0.875rem | 400 | 1.25 | -0.05em | Metadata, captions, fine print, billing details |
| label | Universal Sans 480 | 0.75rem | 600 | 1.0 | normal | Tags, badges, source indicators, category pills |
| navigation | Universal Sans 480 | 0.75rem | 500 | 1.5 | normal | Header links, topic pills, footer links |

The type system relies on weight contrast rather than size contrast alone. The 680 and 800 weights provide substantial presence for headlines without requiring oversized type. Tight negative tracking at -0.05em gives display text a contemporary, compact feel that suits the information-dense news context. Body text at 400 weight with -0.05em tracking maintains readability while preserving the family's character.

The Universal Sans 680 weight serves as the primary display voice, appearing in hero headlines and section titles. Universal Sans 800 adds extra authority for card headlines and pricing tier names where immediate scanning is essential. The 480 weight handles interface text and larger body copy, while 400 provides the sustained reading weight for article summaries and descriptions.

## Layout

The layout system favors centered single-column flows for marketing content and multi-column grids for news density. Maximum content widths create comfortable reading measure while allowing full-bleed dark backgrounds to extend to viewport edges.

The homepage hero occupies a full-width dark band with a subtle textured background pattern. Content aligns left within a centered container, leaving generous right-side negative space for an overlapping news card demonstration. This card floats partially outside the text block, creating depth and previewing the product interface.

Below the hero, a social proof band breaks the darkness with a light surface showing press logos and app store accolades. This band uses a horizontal flex layout with vertical dividers, maintaining the full width of the viewport.

The Daily Briefing section introduces a three-column editorial grid. The left column carries a compact story list with thumbnail images and headline stacks. The center column features a dominant hero image with overlaid headline text and a bias visualization bar at the bottom. The right column presents specialty content modules like Blindspot with their own sub-branding and image cards. Column gutters use consistent spacing, and the overall grid maintains alignment to a shared baseline.

Subscription pages transition to a centered, narrower content well. Gift and Group subscription sections stack vertically with alternating image-text layouts. The FAQ section inverts to a light background with dark accordion cards, creating visual rhythm through the page scroll.

Pricing tables use a four-column layout with the feature list fixed in the leftmost column and three tier columns scrolling horizontally on narrower viewports. Each tier column maintains equal width with internal horizontal rules separating features.

## Visual language

The visual language communicates journalistic authority through restraint and precision. Rounded corners are minimal—cards use modest 8px radii, buttons are nearly square with 4px corners, and pills achieve their shape through 9999px radius for tags and bias indicators.

Shadows are absent from the system. Depth is achieved through background color layering, border definition, and occasional gradient fades. The homepage hero features a linear gradient from `#262626` to transparent at the top of image cards, ensuring text legibility over photographic content without heavy shadow overlays.

Photography appears in two modes: full-color editorial images within news cards, and halftone or duotone illustrations in subscription marketing sections. The gift subscription imagery uses a newsprint halftone effect on wrapped packages, while the supporter section shows a raised fist in similar treatment against a tan circular background. These illustrations bridge the gap between serious journalism and accessible community appeal.

The bias visualization is the most distinctive visual element. A horizontal bar divides into left (red), center (white), and right (blue) segments with percentage labels. This bar appears at multiple scales—from compact source indicators to large coverage summaries beneath article headlines. The color coding is immediate and consistent, training readers to scan for perspective balance.

Iconography is minimal and functional. Checkmarks and crosses in the pricing table use simple strokes without decorative containers. Navigation relies on text labels rather than icon buttons, preserving clarity for a broad readership.

## Components

### Primary button

- **Anatomy**: Text label centered within a rectangular button with subtle rounding
- **Surface**: Background `{colors.accent-tan}`, text `{colors.ink-inverse}`
- **Typography**: `{typography.body-large}` at weight 480
- **Shape**: Border radius `{rounded.button}`, padding `0.75rem 2.5rem`
- **Spacing**: Generous horizontal padding creates substantial click targets
- **Variants**: Dark variant uses `{colors.canvas-elevated}` background with `{colors.ink}` text for secondary actions on light surfaces

### News card

- **Anatomy**: Container with source header, headline, image area, and bias bar footer
- **Surface**: `{colors.surface}` background with `2px solid {colors.border-subtle}` border
- **Typography**: Headline uses `{typography.headline}`, source label uses `{typography.label}`
- **Shape**: `{rounded.card}` border radius
- **Composition**: Image fills width with gradient overlay for text legibility; bias bar sits at bottom edge with segmented color fill
- **States**: Dismissible via close button in upper right corner

### Bias bar

- **Anatomy**: Horizontal track with three proportional segments
- **Surface**: Track uses `{colors.surface}`, segments use `{colors.accent-red}`, `{colors.ink}`, and `{colors.accent-blue}`
- **Shape**: Full pill radius `{rounded.pill}`
- **Composition**: Segments sized by percentage, labeled with position and value
- **Variants**: Compact form appears as source tag pills; expanded form shows beneath article headlines with coverage counts

### Pricing card

- **Anatomy**: Vertical stack with tier name, feature list, price display, and call-to-action button
- **Surface**: `{colors.surface-light}` background
- **Typography**: Tier name uses `{typography.headline}`, features use `{typography.body}`, price uses `{typography.section-display}`
- **Shape**: `{rounded.panel}` border radius
- **Composition**: Features align horizontally across cards via shared row structure; checkmarks indicate inclusion, crosses indicate exclusion in gray
- **Spacing**: Internal padding creates breathing room around dense feature lists

### Accordion item

- **Anatomy**: Question header with expandable answer area
- **Surface**: Dark card on light background, or light text on dark surface depending on section context
- **Typography**: Question uses `{typography.headline}`, answer uses `{typography.body}`
- **Shape**: `{rounded.card}` with subtle border definition
- **Composition**: Full-width within content well, stacked vertically with minimal gap

### Topic pill

- **Anatomy**: Text label with optional plus icon for following
- **Surface**: Transparent with `{colors.ink}` text, or `{colors.surface}` background when elevated
- **Typography**: `{typography.navigation}`
- **Shape**: `{rounded.button}` for standard pills, `{rounded.pill}` for active or featured states

## Responsive behavior

The design prioritizes desktop readability with clear adaptation paths for smaller viewports. The three-column Daily Briefing grid should collapse to single-column stacking on tablet and below, with the center hero image maintaining aspect ratio and the bias bar remaining legible at reduced width.

Pricing tables present a known challenge: the four-column comparison requires horizontal scrolling on narrow viewports or a transformed stacked layout showing one tier at a time with a selector. The feature list column should remain visible as a fixed left column during horizontal scroll to preserve context.

The homepage hero's overlapping news card demonstration may need repositioning below the headline text on mobile rather than floating to the right, ensuring the primary value proposition remains immediately visible without scroll.

Navigation collapses to a hamburger menu with the search field expanding to full width below the logo bar. Topic pills scroll horizontally within a masked container, preserving the follow functionality without wrapping into excessive vertical space.

Text scaling should respect user preferences, with display sizes reducing proportionally while maintaining the weight hierarchy. The tight tracking on headlines may require slight loosening at very small sizes to preserve character distinction.

## Practical implementation guidance

### Preserve
- The near-black canvas as the default background; light surfaces are intentional exceptions
- Weight 680 for all display headlines; do not substitute with 800 or 480 for primary headings
- The three-color bias visualization system with exact red, white, and blue values
- Generous section spacing that lets dark areas breathe between content bands
- Halftone illustration treatment for subscription marketing imagery
- The tan accent for primary conversion moments only, not general decoration

### Avoid
- Pure black (`#000000`) as primary backgrounds; reserve for gradients and deepest elevations
- Shadows for depth; rely on color layers and borders instead
- Rounded corners larger than 8px on cards; the system favors editorial sharpness
- Blue or red accents outside bias visualization contexts
- Centered text alignment for body copy; left-alignment maintains reading rhythm

### Recommended build order
1. Establish the dark canvas and surface color tokens with text contrast verification
2. Implement the Universal Sans font stack with all three weights
3. Build the bias bar component with flexible segment sizing
4. Create the news card with gradient overlay and source header pattern
5. Develop the pricing table with cross-card row alignment
6. Add the subscription section layouts with image-text composition
7. Polish with button variants, topic pills, and accordion interactions

### Accessibility
- Ensure bias bar segments maintain perceptible differences for colorblind users; position labels (Left, Center, Right) are required text, not optional tooltips
- Provide sufficient contrast between tan accent buttons and their text; the combination of `#D1BD91` background with `#121212` text meets WCAG AA
- Preserve focus indicators on dark backgrounds; default browser outlines may be insufficient against `#121212`
- Consider reduced motion preferences for any bias bar animations or card entrance effects
- Ensure pricing table cross marks are distinguishable from checkmarks by more than color alone

## Scope note

This guide covers the Ground News homepage and subscription flow surfaces. It does not include the article reading experience, account dashboard, mobile application interfaces, or email newsletter templates. Interactive states such as hover, active, and loading are not documented from the available material. Measurements reflect the desktop viewport widths captured in the source images.
