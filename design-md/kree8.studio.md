# How kree8.studio is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kree8.studio-design)

Last updated: 2026-08-10

## Captured pages

[![Comparison table with rounded white cards, green checkmarks, and kree8 logo against light gray background](https://pin.fontofweb.com/3000?format=jpg)](https://design.withfudge.com/share/pin-3000)

[Comparison table with rounded white cards, green checkmarks, and kree8 logo against light gray background](https://design.withfudge.com/share/pin-3000)

[![Dark rounded hero banner with white pill button, marquee tags, and footer with social links](https://pin.fontofweb.com/2999?format=jpg)](https://design.withfudge.com/share/pin-2999)

[Dark rounded hero banner with white pill button, marquee tags, and footer with social links](https://design.withfudge.com/share/pin-2999)

[![FAQ accordion with chat-style bubbles, avatar thumbnails, and dark rounded action button](https://pin.fontofweb.com/2998?format=jpg)](https://design.withfudge.com/share/pin-2998)

[FAQ accordion with chat-style bubbles, avatar thumbnails, and dark rounded action button](https://design.withfudge.com/share/pin-2998)

[![FAQ section with expanded answer cards, circular minus icons, and centered section heading](https://pin.fontofweb.com/2997?format=jpg)](https://design.withfudge.com/share/pin-2997)

[FAQ section with expanded answer cards, circular minus icons, and centered section heading](https://design.withfudge.com/share/pin-2997)

## Overview

Kree8 Studio presents itself as a creative subscription agency with a visual system that balances professional credibility and approachable personality. The interface relies on a restrained monochrome palette punctuated by warm, rounded shapes and conversational UI patterns. Large section headings sit in a bold geometric sans, while body copy and functional text use a clean neo-grotesque for readability. The design's signature move is treating informational content—pricing comparisons, FAQs, service descriptions—as chat-like exchanges, with rounded bubbles and cards that soften the transactional nature of agency services. Dark banners with high-contrast white text create dramatic focal points for calls to action, while the surrounding light-gray canvas keeps the overall experience airy and uncluttered. This is a system built for trust through transparency: every comparison, every answer, every process step is exposed in open, readable formats rather than hidden behind modal layers or dense paragraphs.

## Colors

The color system is intentionally minimal, relying on value contrast and surface hierarchy rather than chromatic variety. Four core colors define the entire interface, with a fifth reserved for subtle structural elements.

| token | value | use |
|---|---|---|
| ink | #151515 | Primary text, dark banner backgrounds, active question bubbles |
| canvas | #F5F5F5 | Page background, footer bar, inactive FAQ areas |
| surface | #FFFFFF | Cards, comparison tables, primary buttons on dark, answer bubbles |
| muted | #6B6B6B | Secondary text, table row labels, footer links, placeholder text |
| action | #1A1A1A | Hover states, emphasis surfaces, tag backgrounds in dark mode |
| action-text | #FFFFFF | Text on dark surfaces, button labels, inverted navigation |
| border-subtle | #E5E5E5 | Hairline dividers between table rows, bubble outlines |

The light mode dominates: nearly all content sits on `#F5F5F5` or `#FFFFFF` with `#151515` text. Dark sections invert this relationship, using `#151515` or `#1A1A1A` backgrounds with `#FFFFFF` text and surface-colored buttons. No accent colors appear in the functional UI—visual interest comes from photography, illustration, and the rounded geometry of components rather than hue variation. The muted gray serves as the sole de-emphasis tool, keeping the hierarchy strictly value-based.

## Typography

The type system pairs a distinctive display face for brand moments with a workhorse sans for everything functional. Five font families are present in the source, though two serve specialized roles.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Euclid Circular B | 3rem | 700 | 1.1 | -0.02em | Major section headings, CTA banners |
| section-display | Euclid Circular B | 2.5rem | 700 | 1.15 | -0.01em | Subsection titles, FAQ header |
| body | Inter | 1rem | 400 | 1.6 | 0em | Paragraphs, answers, descriptions |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0em | Table cells, captions, footer text |
| label | Inter | 0.875rem | 400 | 1.4 | 0em | Buttons, tags, form labels |
| navigation | Inter | 0.875rem | 400 | 1 | 0em | Menu items, social links |
| brand-mark | Chelsea Market | 1.5rem | 400 | 1 | 0em | Logo wordmark, small brand moments |

Euclid Circular B, designed by Swiss Typefaces, provides the bold, slightly geometric character that distinguishes headlines. Its tight tracking and substantial weight give authority to section openers without feeling corporate. Inter, by Rasmus Andersson, handles all functional text with neutral clarity. Chelsea Market appears only in the logo, lending a hand-crafted, slightly whimsical quality that offsets the system's otherwise clean precision. False and Geist are present in the source but do not appear in visible interface text; they may serve loading states, hidden labels, or future expansion. Phudu Light's source points to an unrelated asset path and should be treated as unsupported.

Verify licensing for Euclid Circular B, Inter, Chelsea Market, False, and Geist before production use.

## Layout

The page structure follows a centered, single-column rhythm with generous breathing room. Maximum content width appears to sit around 1200px, with internal cards and tables occupying roughly 90% of that at full width. Sections stack vertically with `5rem` to `6rem` of vertical separation, creating clear territorial boundaries without heavy rules.

The comparison table in pin 3000 demonstrates the system's approach to complex information: a full-width rounded card containing a multi-column grid. The leftmost column holds row labels, while subsequent columns align vertically for easy scanning. Row dividers are hairline strokes in `border-subtle`, subtle enough to guide the eye without boxing content in.

FAQ sections use an asymmetric two-column illusion within a centered container. Question bubbles align right, answer cards align left with avatar thumbnails anchoring the conversation thread. This chat metaphor extends to the accordion behavior: expanded answers push subsequent content downward with natural flow, rather than overlaying or replacing.

The dark CTA banner in pin 2999 breaks the light rhythm with a full-bleed rounded rectangle, internally centered. Its pill button and tag marquee sit in the vertical middle, with footer information below separated by a hairline. This creates a clear visual finale to the scroll experience.

Spacing within components follows a `1.5rem` standard for card padding and bubble margins. The `0.25rem` base unit allows fine adjustments for optical alignment, particularly around the circular avatar images and small plus/minus icons.

## Visual language

Roundedness is the system's most consistent signature. Every interactive surface carries substantial radius: `1.5rem` for large panels, `1.25rem` for speech-like bubbles, `9999px` for buttons and tags. Even the dark banner uses `1.5rem` corners, preventing any harsh rectangular interruption in the flow. This softness supports the conversational, approachable brand positioning.

Shadows are minimal or absent in the visible interface. Depth is created through value contrast—white cards on gray canvas, dark banners on light page—rather than elevation effects. The comparison table's white surface against the gray background provides sufficient separation without additional shadow layers.

The avatar images in FAQ sections use perfect circular masks with thin borders, reinforcing the human, conversational quality. Small icons—checkmarks, crosses, plus and minus signs—are line-weight consistent, appearing to be 1.5px to 2px strokes in the same muted gray or ink color as their context demands.

Photography and illustration appear in avatars and potentially in hero areas, but the visible interface treats them as circular crops or contained within the chat metaphor. No full-bleed photographic backgrounds appear in the supplied images; the system prefers clean surfaces with image accents.

## Components

### Comparison Table

A full-width rounded card presenting tabular data with the brand as the implied first column. The surface is white with `1.5rem` padding. Row labels sit in the left column in `body-small` weight, left-aligned. Data cells use the same size with green checkmarks or red crosses as visual boolean indicators, followed by brief text. Column headers center above their data. The kree8 logo with a small star icon occupies the brand column header, establishing identity without explicit labeling. Hairline horizontal rules separate rows in `border-subtle`. The table avoids vertical rules, relying on whitespace and alignment for structure.

### FAQ Accordion

A conversational pattern with two distinct bubble types. **Question bubbles** use `action` background with `action-text` color, `rounded.bubble` corners, and a small circular `action` button with white minus icon to the left. The bubble text uses `body` size. **Answer cards** use `surface` background, `ink` text, larger `rounded.panel` corners, and include a circular avatar thumbnail at top-left. The avatar sits partially outside the card's top edge, creating a casual, pinned-note effect. Answer text runs in `body` with comfortable line length.

Collapsed questions show a `surface` or `canvas` circular button with a plus icon, paired with a lighter bubble outline or filled surface. The transition between states is implied by the icon change and bubble color shift.

### Primary Pill Button

A `surface`-filled capsule with `ink` text, `rounded.pill` corners, and `label` typography. The visible instance includes a small sparkle or star icon left of the text, suggesting optional iconography. On dark backgrounds, the pill inverts to `surface` background with `ink` text, creating a high-contrast focal point. Padding appears generous, approximately `1rem` horizontal and `0.75rem` vertical.

### Tag Marquee

A horizontally scrolling row of small pill tags with `action` or dark background and `action-text` or muted text. Tags include checkmark icons and brief labels like "Branding," "Logo," "Landing Page." The marquee creates ambient motion and social proof, suggesting active project types. Tags use `label` size with `rounded.pill` corners and compact internal spacing.

### Footer Bar

A full-width `canvas` strip with `body-small` text. Left side holds copyright with year. Center holds the `brand-mark` logo. Right side holds social links in `muted` color with `navigation` size, separated by whitespace. The footer avoids heavy top borders, relying on the `canvas` surface change and the preceding dark banner for separation.

## Responsive behavior

The comparison table should reflow to a stacked card view on narrow viewports, with each row becoming a vertical comparison block. The multi-column header collapses to a simple "Kree8 vs. Others" binary.

FAQ bubbles should remain conversational but may lose the asymmetric offset, centering both questions and answers with avatars inline rather than offset. The answer card's avatar-overlap effect requires sufficient horizontal space; below approximately 640px, avatars may sit inside the card top-left without overflow.

The dark CTA banner's pill button and tag marquee should remain centered, but tag density should reduce to prevent horizontal compression. The marquee may pause or become a static wrap on reduced-motion preferences.

Typography scales down by one step on mobile: `hero-display` to `2rem`, `section-display` to `1.75rem`. Body sizes remain at `1rem` for readability.

## Practical implementation guidance

### Preserve
- The rounded-everywhere aesthetic; maintain `1.25rem` minimum radius on all cards and `9999px` on all buttons
- The strict monochrome palette with value-based hierarchy
- The chat-bubble metaphor for FAQ and conversational content
- The brand mark in Chelsea Market at consistent scale
- Green checkmark / red cross iconography in comparison contexts

### Avoid
- Adding accent colors that compete with the black-white-gray system
- Sharp corners on any interactive or content surface
- Box shadows as primary depth mechanism
- Dense table borders or grid lines; keep comparison rows open
- Replacing the asymmetric FAQ layout with standard centered accordions

### Recommended Build Order
1. Establish the `canvas` page background and `ink` text defaults
2. Implement `Euclid Circular B` for headings and `Inter` for body at the specified scale
3. Build the rounded card primitive with `surface` background and `panel` radius
4. Create the comparison table as the first complex component
5. Implement the FAQ bubble system with avatar support
6. Add the dark banner with pill CTA and tag marquee
7. Polish with footer and responsive reflow behaviors

### Accessibility
- Ensure the green checkmark / red cross pattern is supplemented with text or `aria-label` for colorblind users
- Dark banner text should maintain at least 7:1 contrast; the current `action-text` on `action` surface meets this
- FAQ accordion buttons need clear `aria-expanded` states and keyboard focus indicators
- The tag marquee should respect `prefers-reduced-motion` and provide pause controls
- All interactive pills and bubbles need visible focus rings that respect the rounded geometry

## Scope note

This guide covers the landing page surface visible in the supplied images: comparison table, FAQ accordion, dark CTA banner, and footer. Navigation, hero section, pricing tiers, and mobile breakpoints are not represented in the source material. Measurements are practical adaptation targets derived from the visible interface.
