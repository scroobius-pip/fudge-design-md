# How openweb.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/openweb.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with centered headline, body text, and three floating phone mockups showing conversation interfaces on warm cream background](https://pin.fontofweb.com/1970?format=jpg)](https://design.withfudge.com/share/pin-1970)

[Hero section with centered headline, body text, and three floating phone mockups showing conversation interfaces on warm cream background](https://design.withfudge.com/share/pin-1970)

[![Upper hero area with navigation bar, centered sunburst logo, and black contact button on pale background](https://pin.fontofweb.com/1969?format=jpg)](https://design.withfudge.com/share/pin-1969)

[Upper hero area with navigation bar, centered sunburst logo, and black contact button on pale background](https://design.withfudge.com/share/pin-1969)

[![Full hero composition with diagonal phone mockups displaying topic feeds and article cards with photography](https://pin.fontofweb.com/1968?format=jpg)](https://design.withfudge.com/share/pin-1968)

[Full hero composition with diagonal phone mockups displaying topic feeds and article cards with photography](https://design.withfudge.com/share/pin-1968)

## Overview

OpenWeb's landing page presents a restrained, editorial visual system built around a single serif typeface and a warm, high-contrast palette. The design centers on a bold, declarative headline that occupies the upper viewport, supported by a concise mission statement and a single call-to-action button. Below the messaging, floating phone mockups demonstrate the product's conversation interfaces, creating depth through diagonal composition against a uniform cream background. The overall impression is one of confident simplicity: no gradients, no decorative borders beyond a single hairline rule, and no competing visual elements. Every choice serves readability and direct communication. The sunburst logo mark reinforces the brand's name through radiating lines, while the black-and-cream pairing evokes print editorial traditions translated to a digital context. The system prioritizes whitespace, generous line height in body text, and clear hierarchy through size contrast alone.

## Colors

The palette is intentionally minimal, relying on temperature and contrast rather than variety. The warm cream canvas dominates, with pure black serving as the sole ink color for all text, rules, and filled buttons. White appears primarily within the device mockups as interface surface color. A muted gray provides secondary text roles where hierarchy demands softer emphasis.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, logo, navigation, button fills, hairline rules |
| canvas | #f2ebe8 | Page background, hero section ground, navigation bar ground |
| surface | #ffffff | Button text, device mockup screens, card backgrounds within mockups |
| muted | #6b6b6b | Secondary text, captions, metadata within product demonstrations |

The warm canvas tone distinguishes the brand from cooler neutral grays common in technology marketing. This warmth carries through the entire visible page, creating a continuous field against which black elements achieve sharp definition. The absence of accent colors means all emphasis derives from scale, weight, and spatial position. Within the phone mockups, the product interface introduces small touches of blue and green through functional UI elements like notification badges and topic tags, but these belong to the application interface rather than the marketing page system itself. The black button with white text inverts the dominant page relationship, creating a clear action target without introducing new hues.

## Typography

The system employs a single font family across all text roles, establishing cohesion through size and spacing variation alone. Copernicus Book, supplied by Village Type Design Llc, is a contemporary serif with moderate contrast and open aperture, readable at both display and body sizes. Its italic style is used for the button label, adding a subtle humanist gesture to the otherwise upright composition.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Copernicus Book | 4.5rem | 400 | 1.05 | -0.02em | Main headline, centered, two-line maximum |
| body-large | Copernicus Book | 1.25rem | 400 | 1.5 | 0em | Supporting mission statement, max-width constrained |
| navigation | Copernicus Book | 1rem | 400 | 1.2 | 0em | Primary navigation links, dropdown triggers |
| button-label | Copernicus Book | 1rem | 400 | 1 | 0em | Primary CTA, rendered in italic style |

The hero display size achieves impact through scale rather than weight, relying on the typeface's inherent presence. Negative letter spacing tightens the large headline slightly, preventing the open counters from creating excessive visual looseness. Body text maintains generous line height for comfortable reading of the mission statement. The navigation and button label share the same base size but diverge in style and context: navigation remains upright and functional, while the button adopts italic for approachable emphasis. Verify licensing for these families before production use.

## Layout

The page follows a centered, single-column structure with a full-width navigation bar. The navigation contains a logo lockup on the left, a horizontal link cluster in the center, and a contact button on the right, separated from the main content by a thin horizontal rule. Below this, the hero section occupies the majority of the viewport height.

The hero's internal composition stacks elements vertically: sunburst logo mark, headline, body paragraph, and button, each centered with consistent vertical rhythm. The content width is constrained to maintain readable line lengths, approximately 64rem at maximum. Below the text block, phone mockups enter the composition at a diagonal angle, overlapping slightly and extending beyond the bottom edge of the viewport, suggesting continuation and depth.

Spacing follows a modular system based on quarter-rem increments. Section padding provides generous breathing room, while content gaps maintain clear separation between typographic elements. The phone mockups introduce an asymmetrical lower boundary that breaks the otherwise rectilinear page structure, creating visual interest without additional decorative elements.

The navigation bar uses flex distribution with space-between alignment, keeping the logo and button anchored at the extremes while centering the link group. Dropdown indicators appear as small chevrons beside "Publishers," "Advertisers," "Resources," and "About," signaling expandable menus without expanding the visual footprint.

## Visual language

The design language draws from editorial print traditions: generous margins, single typeface discipline, and a warm uncoated-paper color suggestion. The sunburst logo mark functions as the sole decorative element, its radiating lines echoing the "open" in the brand name through outward energy. This mark appears at two scales: small in the navigation bar beside the wordmark, and larger as a centered hero element.

The phone mockups serve as both product demonstration and compositional device. Their diagonal arrangement introduces dynamic tension against the rigid horizontal centering of text elements. Each mockup shows a different product view—conversation threads, topic selection, article reading—suggesting breadth without requiring multiple screenshots in grid formation. The mockups cast soft shadows onto the cream background, creating subtle elevation that separates them from the flat page plane.

Interface elements within the mockups follow conventional mobile patterns: rounded rectangles, avatar circles, and small tag pills. These remain visually subordinate to the marketing page system, appearing as content within the demonstration rather than design system tokens. The overall effect balances warmth and professionalism, approachable without being casual.

## Components

### Navigation bar

- **Anatomy**: Logo lockup (sunburst icon + "OpenWeb" wordmark), centered link cluster with dropdown indicators, right-aligned contact button
- **Surface**: Transparent or canvas-colored background, black 1px bottom border as hairline rule
- **Typography**: Navigation token, upright style
- **Spacing**: Vertical padding of approximately 1rem, horizontal margins keeping content within readable bounds
- **Composition**: Flex row with space-between distribution

### Primary button

- **Anatomy**: Text label only, no icon
- **Surface**: Solid black fill, white text
- **Typography**: Button-label token, italic style
- **Shape**: Sharp corners with zero border radius, maintaining editorial severity
- **Spacing**: Generous horizontal padding, approximately 2.5rem, with 1rem vertical padding
- **States**: Visible state is the filled black variant; no hover state is discernible from still images

### Hero section

- **Anatomy**: Stacked vertical sequence of logo mark, headline, body paragraph, primary button, then phone mockups
- **Surface**: Canvas background continuous with page
- **Typography**: Hero-display for headline, body-large for paragraph, button-label for CTA
- **Spacing**: Consistent vertical rhythm between elements, approximately 1.5rem gaps
- **Composition**: Centered alignment for all text elements; mockups break centering with diagonal placement

### Phone mockup

- **Anatomy**: Device frame with screen content showing application interface
- **Surface**: White screen ground, with interface elements in standard mobile patterns
- **Shape**: Rounded rectangle device frame with visible corner radius, approximately 1.5rem
- **Composition**: Three devices in diagonal cascade, overlapping, with leftmost highest and rightmost lowest; soft drop shadow beneath each

## Responsive behavior

The centered single-column structure adapts naturally to narrower viewports. The headline would scale down proportionally, maintaining the two-line break after "save" for as long as viewport width permits. The navigation link cluster should collapse to a menu trigger at smaller breakpoints, preserving the logo and contact button as persistent elements.

The phone mockups, currently arranged in a wide diagonal, would likely stack vertically or reduce to a single featured device on narrow screens. Their overlapping composition depends on horizontal space; without it, the depth effect would compress into a scroll sequence.

Text constraints should remain in place: the body paragraph maintains its maximum width for readability regardless of viewport size. Padding should reduce proportionally on smaller screens, preserving the relative spaciousness without creating excessive margins.

## Practical implementation guidance

### Preserve
- The single-serif-typeface discipline; do not introduce sans-serif elements
- The warm cream canvas as the dominant background color
- The sharp-cornered button style against the otherwise soft composition
- The centered, stacked hero alignment with generous vertical spacing
- The hairline rule beneath the navigation bar as the sole horizontal divider

### Avoid
- Adding accent colors that compete with the black-and-cream relationship
- Rounding button corners, which would soften the editorial stance
- Grid-based mockup arrangements that lose the diagonal dynamism
- Multiple typefaces or weights that dilute the Copernicus Book presence
- Decorative elements beyond the sunburst logo mark

### Recommended build order
1. Establish the canvas background and centering container
2. Implement the navigation bar with logo, links, and hairline rule
3. Set hero-display and body-large typography with proper constraints
4. Add the primary button with sharp corners and italic label
5. Position phone mockups with diagonal overlap and subtle shadows
6. Verify spacing rhythm across all breakpoints

### Accessibility
- Ensure the black-on-cream text pairing maintains WCAG AA contrast ratios; the current combination exceeds requirements
- Provide visible focus indicators for the navigation links and primary button, as the high-contrast palette supports clear outlines
- Consider reduced-motion preferences for any scroll-triggered mockup animations
- Maintain semantic heading hierarchy with a single h1 for the hero headline

## Scope note

This guide covers the OpenWeb homepage hero and navigation surface visible in the supplied images. Footer content, interior pages, dropdown menu designs, and responsive states below desktop width are not represented. Motion, hover states, and form interactions are not documented. Measurements are practical adaptation targets.
