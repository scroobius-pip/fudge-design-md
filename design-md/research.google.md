# How research.google is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/research.google-design)

Last updated: 2026-08-10

## Captured pages

[![People page hero with oversized display heading, research photography collage, and filterable researcher grid below](https://pin.fontofweb.com/9575?format=jpg)](https://design.withfudge.com/share/pin-9575)

[People page hero with oversized display heading, research photography collage, and filterable researcher grid below](https://design.withfudge.com/share/pin-9575)

[![Dense researcher directory with sidebar filter checklist, search bar, and three-column portrait cards](https://pin.fontofweb.com/9576?format=jpg)](https://design.withfudge.com/share/pin-9576)

[Dense researcher directory with sidebar filter checklist, search bar, and three-column portrait cards](https://design.withfudge.com/share/pin-9576)

[![Join us recruitment section with dark pill button and overlapping editorial photography with decorative green dot](https://pin.fontofweb.com/9578?format=jpg)](https://design.withfudge.com/share/pin-9578)

[Join us recruitment section with dark pill button and overlapping editorial photography with decorative green dot](https://design.withfudge.com/share/pin-9578)

[![Pagination controls and researcher cards with square portrait thumbnails and research area tags](https://pin.fontofweb.com/9577?format=jpg)](https://design.withfudge.com/share/pin-9577)

[Pagination controls and researcher cards with square portrait thumbnails and research area tags](https://design.withfudge.com/share/pin-9577)

## Overview

Google Research presents a calm, authoritative digital environment built around oversized display typography and expansive negative space. The visual system prioritizes readability and trust through a near-monochrome palette, letting research photography and content hierarchy carry the emotional weight. Every page shares a consistent structural rhythm: a fixed header with minimal navigation, a dramatic hero section with scale-driven headlines, and content areas that breathe through generous margins and deliberate grid spacing. The design avoids decorative excess, relying instead on precise typographic contrast, subtle border treatments, and rounded pill-shaped interactions to create a modern, approachable research portal.

## Colors

The palette is intentionally restrained, built on a foundation of deep neutrals with a single blue accent reserved for interactive states. Light backgrounds dominate, with occasional warm gray surfaces providing subtle section differentiation.

| token | value | use |
|---|---|---|
| ink | #121317 | Primary headings, body text, primary buttons |
| ink-secondary | #202124 | Secondary text, active navigation |
| ink-tertiary | #2F3034 | Tertiary text, subtle labels |
| muted | #45474D | Research area tags, metadata |
| muted-secondary | #5F6368 | Count indicators, disabled states |
| border | #212226 | Card borders, dividers, input outlines |
| border-light | #B2BBC5 | Sidebar borders, subtle separators |
| surface | #EFF2F7 | Alternate section backgrounds |
| surface-warm | #F8F9FC | Footer background, subtle panels |
| canvas | #FFFFFF | Primary page background, button fills |
| action | #1A73E8 | Links, active filters, focus indicators |

The system operates in a light mode exclusively across all captured surfaces. Text hierarchy is achieved through value contrast rather than hue variation: headings use the deepest ink, body text steps down to ink-secondary, and metadata employs muted tones. The single blue accent appears sparingly, typically for active navigation states and interactive highlights. Photography retains natural color without overlay treatments, allowing the neutral UI to recede behind content.

## Typography

The type system centers on Google Sans Flex, a variable-width sans-serif that provides both the dramatic compression needed for display headlines and the comfortable readability required for dense research listings. Roboto appears in a supporting role for specialized interface elements. Applesystem and System-Sansserif are also present in the interface, used for system-level fallback contexts and header region rendering respectively.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Google Sans Flex | 6.125rem | 450 | 0.98 | -0.034em | Page titles, hero statements |
| section-display | Google Sans Flex | 2.625rem | 450 | 1.04 | normal | Section headings, feature titles |
| body | Google Sans Flex | 1.09375rem | 400 | 1.45 | normal | Primary body text, descriptions |
| body-secondary | Google Sans Flex | 1rem | 400 | 1.5 | normal | Card content, researcher details |
| label | Google Sans Flex | 0.90625rem | 450 | 1.45 | normal | Buttons, navigation, filters |
| caption | Google Sans Flex | 0.625rem | 400 | 1.45 | normal | Research area tags, metadata |
| navigation | Google Sans Flex | 0.90625rem | 450 | 1.45 | normal | Header links, active states |

The hero display size creates immediate visual impact through extreme scale contrast against the 1.09375rem body. Weight 450, between Regular and Medium, provides sufficient presence without heaviness. Line heights stay tight for headlines and generous for body text, ensuring comfortable scanning of long researcher directories. Letter spacing is slightly negative only at display sizes, preserving natural rhythm elsewhere.

Verify licensing for these families before production use. Roboto is designed by Christian Robertson and provided by Google.

## Layout

The page structure follows a consistent centered container model with substantial side margins that create a gallery-like presentation. Content never touches viewport edges, reinforcing the spacious, unhurried character.

The main content area uses a maximum width of approximately 1276px centered with auto margins, flanked by 204px side margins on standard viewports. Sections stack vertically with 72px to 80px vertical padding, creating clear rhythmic separation. The header remains fixed with 48px horizontal padding and an 80px gap between logo and navigation clusters.

Grid systems adapt to content type. Researcher directories employ a three-column grid with 64px column gaps and 36px row gaps, allowing portrait cards to maintain consistent alignment while accommodating variable name lengths. Filter sidebars occupy a fixed narrow column with 16px internal padding, separated from results by a 24px gap. Hero sections often split asymmetrically, with text content left-aligned and photography occupying the right portion with overlapping compositions.

Vertical spacing follows a modular scale: 8px for tight internal gaps, 16px for related element pairs, 24px for component separation, 36px for subsection breaks, 64px for major content divisions, and 72-80px for section boundaries.

## Visual language

The aesthetic is deliberately institutional yet warm, combining the credibility of academic publishing with the approachable clarity of consumer technology. Photography plays a central role, presented without filters or overlays in rounded rectangular frames that soften the technical precision of the layout.

Portrait thumbnails use 16px corner radius, creating friendly, approachable researcher representations without the formality of perfect circles. Editorial photography in hero sections receives the same treatment, though at larger scales. Decorative elements appear sparingly: a small green dot accent in recruitment sections, thin connecting arcs between overlapping images, and subtle shadow layers that lift photography slightly from the white ground.

Iconography is minimal and functional, rendered in the muted ink tones. The user silhouette placeholder for researchers without photos uses a light gray circular background with a darker icon, maintaining visual consistency in incomplete data states.

The overall impression is one of confident restraint—every element earns its place through utility, and the generous whitespace signals institutional confidence without austerity.

## Components

### Header

The global header spans the full viewport with a thin bottom border in border-light. It contains the Google Research wordmark left-aligned, a horizontal navigation cluster with 80px gap spacing, and a search trigger right-aligned. Navigation links use the navigation token at 450 weight, with active states shifting to ink-secondary. The header background is transparent over white, creating a seamless integration with page content.

### Hero section

Hero sections establish page identity through extreme typographic scale. The hero-display token creates page titles that dominate the upper viewport, paired with a brief description in body text and occasionally a primary button. Photography appears to the right in overlapping compositions, with images offset vertically and connected by thin decorative arcs. The "Join us" variant pairs left-aligned text with a dark pill button against a collage of editorial workplace photography.

### Researcher card

Each researcher card presents a square portrait thumbnail at 16px radius, followed by the name in body-secondary weight and research area tags in caption size. Cards without photos display a circular placeholder with a user silhouette icon on a light gray ground. Tags stack vertically with 4px row gaps, wrapping to multiple lines when research areas exceed three items. Cards maintain consistent internal spacing of 26px padding, creating breathable units within the dense grid.

### Filter sidebar

The filter interface presents a vertical checklist of research areas with associated counts. Each row contains a square checkbox, the area name in body-secondary, and a count in muted-secondary. The sidebar header uses a collapsible accordion pattern with a chevron indicator. Active filters apply a subtle background highlight. The full sidebar scrolls independently when content exceeds viewport height.

### Search input

The search field uses a pill-shaped container with 9999px radius, containing a magnifying glass icon and placeholder text. The input sits within the filter bar area, right-aligned with a count indicator showing result totals. Focus states should apply a subtle border color shift to action blue.

### Pagination

Pagination controls center below result grids, presenting numbered page links in circular containers with 50% radius. The current page receives a filled background in surface, while adjacent pages remain transparent. Previous and next arrows use chevron icons in circular bordered containers. A page count input allows direct navigation to specific results pages.

### Primary button

The primary button uses a filled ink background with canvas text, rendered as a full pill with 9999px radius. Padding measures 12px vertical and 24px horizontal, with the label token at 450 weight. The button appears in recruitment sections and key conversion points, standing out against white backgrounds through value contrast rather than color saturation.

### Secondary button

Secondary buttons appear as outlined pills with ink borders and ink text, or as ghost buttons with transparent backgrounds. These serve filter actions, view toggles, and supplementary navigation. Padding is slightly reduced at 8px by 16px, maintaining hierarchy below primary actions.

## Responsive behavior

The design should adapt gracefully below the captured desktop viewport. The three-column researcher grid should collapse to two columns at intermediate widths and single column on narrow viewports, maintaining 36px row gaps throughout. The filter sidebar should transition to a horizontal scrollable chip bar or collapsible drawer on smaller screens. Hero typography should scale down proportionally, with the hero-display reducing to section-display size on mobile to prevent excessive line breaks. The 204px side margins should compress to 72px on tablets and 24px on mobile, preserving content readability without excessive reflow. Header navigation should collapse to a hamburger menu with the search icon persisting as a primary action.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between hero-display headings and body text; this is the signature visual move
- Generous 72-80px section padding and 204px side margins that create the gallery-like presentation
- The restrained monochrome palette with single blue accent; avoid introducing additional brand colors
- Pill-shaped buttons and 16px radius on all photography; these rounded treatments soften the technical precision
- Overlapping photography compositions with connecting arcs in hero sections

### Avoid
- Tightening margins or padding to fit more content; the spaciousness is integral to the institutional tone
- Adding background colors behind text content; the white-dominant approach maintains clarity
- Using perfect circles for portraits; the 16px radius creates a distinctive, friendly rectilinear treatment
- Introducing drop shadows on cards or containers; the flat layering keeps the system clean
- Multiple button styles beyond the filled and outlined pill variants

### Recommended build order
1. Establish the typographic foundation with Google Sans Flex at all defined sizes
2. Implement the header with transparent background and thin bottom border
3. Build the hero section with hero-display scaling and asymmetric image placement
4. Create the researcher card component with portrait, name, and tag structure
5. Implement the three-column grid with 64px column gaps
6. Add the filter sidebar with checkbox checklist pattern
7. Style primary and secondary pill buttons
8. Implement pagination with circular numbered controls

### Accessibility
- Ensure hero-display text maintains sufficient contrast against any photography backgrounds; use text-shadow or background overlays if images shift
- Provide visible focus indicators using the action blue for all interactive elements
- Maintain keyboard navigability through the filter checklist with clear checked states
- Ensure researcher placeholder icons have adequate contrast and descriptive alt text
- Support reduced motion preferences for any decorative arc animations

## Scope note

This guide covers the People directory and related landing surfaces of Google Research. It does not include the Resources section, blog templates, conference pages, or mobile-specific layouts. Motion behavior, hover states, and loading skeletons are not documented from the captured still images. Measurements reflect the exact values present in the supplied interface records.
