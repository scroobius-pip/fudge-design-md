# How ibm.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ibm.com-design)

Last updated: 2026-08-10

## Captured pages

[![Services page showing Hybrid cloud management and Cybersecurity sections with IBM Plex Sans Light headings, blue primary buttons, and four-column service card grids with arrow](https://pin.fontofweb.com/6555?format=jpg)](https://design.withfudge.com/share/pin-6555)

[Services page showing Hybrid cloud management and Cybersecurity sections with IBM Plex Sans Light headings, blue primary buttons, and four-column service card grids with arrow](https://design.withfudge.com/share/pin-6555)

[![Dark footer with IBM logo, four-column link groups labeled Discover, Connect, Follow, and About, plus bottom legal links on near-black background.](https://pin.fontofweb.com/6554?format=jpg)](https://design.withfudge.com/share/pin-6554)

[Dark footer with IBM logo, four-column link groups labeled Discover, Connect, Follow, and About, plus bottom legal links on near-black background.](https://design.withfudge.com/share/pin-6554)

[![Next steps section with light gray background, large IBM Plex Sans Light heading, blue LinkedIn follow button, and three-column newsletter and careers card grid.](https://pin.fontofweb.com/6553?format=jpg)](https://design.withfudge.com/share/pin-6553)

[Next steps section with light gray background, large IBM Plex Sans Light heading, blue LinkedIn follow button, and three-column newsletter and careers card grid.](https://design.withfudge.com/share/pin-6553)

[![Customer successes section with IBM Plex Sans Light heading, four client logo cards with case study text, and strategic partnership logo row below.](https://pin.fontofweb.com/6552?format=jpg)](https://design.withfudge.com/share/pin-6552)

[Customer successes section with IBM Plex Sans Light heading, four client logo cards with case study text, and strategic partnership logo row below.](https://design.withfudge.com/share/pin-6552)

## Overview

The IBM.com design system presents a mature corporate technology aesthetic built on restraint, clarity, and systematic hierarchy. The visual language centers on IBM Plex Sans as the sole type family for text, deployed in a limited but expressive range of weights and sizes. The system favors generous whitespace over dense information packing, creating breathing room that signals confidence and accessibility. Content sections alternate between pure white backgrounds and subtle warm-gray surfaces, with occasional dark inversions for footer areas. The overall impression is one of institutional credibility: precise without being cold, structured without being rigid. Every element serves a navigational or communicative purpose, from the light-weight display headings that announce section topics to the consistent blue action language that guides users toward deeper engagement. The system scales across service descriptions, consulting offerings, career pages, and product narratives while maintaining visual coherence through its disciplined typographic and spatial logic.

## Colors

The color system operates on a high-contrast foundation with a single vibrant accent. The palette is intentionally narrow, deriving its sophistication from value relationships rather than chromatic variety.

| token | value | use |
|---|---|---|
| ink | #161616 | Primary text, headings, body copy, and iconography on light backgrounds |
| muted-ink | #525252 | Secondary text, supporting descriptions, and footer link hover states |
| canvas | #FFFFFF | Primary page background and card surfaces |
| surface | #F4F4F4 | Alternate section backgrounds, subtle content grouping, and newsletter areas |
| action | #0F62FE | Primary buttons, arrow links, and interactive emphasis |
| action-hover | #0050E6 | Button hover state |
| action-active | #0043CE | Button active and pressed state |
| link | #0062FE | Inline text links and secondary interactive elements |
| border | #C6C6C6 | Structural dividers, hairline separators between sections |
| inverse-ink | #FFFFFF | Text on dark backgrounds, button labels on blue surfaces |
| inverse-surface | #161616 | Footer background, dark section inversions |

The system employs a predominantly light mode with white and near-white surfaces dominating the reading experience. The near-black ink provides exceptional legibility without the harshness of pure black. Blue serves as the singular accent color, appearing in buttons, arrow-paired links, and interactive highlights. This blue is saturated and luminous, creating clear affordances without competing with content. Dark inversions appear selectively, most notably in the global footer where the IBM logo and navigation links reverse to white on near-black. No gradient or shadow effects are used for structural purposes; depth is achieved through spacing and background alternation alone.

## Typography

IBM Plex Sans, designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen of Bold Monday, is the exclusive type family for all text content. The system leverages three weights—Light (300), Regular (400), and Semi Bold (600)—across a compact scale of sizes. The Cl 3 Iskicons family appears as an icon font for symbolic UI elements. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | IBM Plex Sans | 3.75rem | 300 | 1.17 | normal | Page hero headings, major section titles |
| section-display | IBM Plex Sans | 3.75rem | 300 | 1.17 | normal | Section headings within content flow |
| body-large | IBM Plex Sans | 1.5rem | 400 | 1.33 | normal | Introductory paragraphs, subheadings, descriptive lead text |
| body | IBM Plex Sans | 1rem | 400 | 1.5 | normal | Standard paragraphs, card descriptions, navigation items |
| label | IBM Plex Sans | 1rem | 600 | 1.375 | normal | Card titles, emphasis within body context, footer category headers |
| navigation | IBM Plex Sans | 1rem | 400 | 1 | normal | Header navigation, footer links, utility text |
| button | IBM Plex Sans | 1rem | 400 | 1 | normal | Button labels, call-to-action text |

The typographic hierarchy is established through weight and size contrast rather than decorative variation. Light weight at 60px creates an elegant, open display treatment for headings that feels contemporary and approachable. Regular weight at 16px handles the bulk of reading content with comfortable 24px line height. The 24px size with 32px line height serves as an intermediate scale for section introductions and emphasized descriptions. Semi Bold appears sparingly, reserved for structural labels and category headers that need to assert hierarchy without increasing size. Letter spacing remains normal throughout, preserving the typeface's designed proportions. The system avoids italic styles and uppercase treatments, maintaining a conversational, direct tone.

## Layout

The layout system is built on a fluid container with consistent internal padding and generous vertical rhythm. Content areas employ a maximum width constraint with centered alignment, creating contained reading experiences that feel deliberate rather than sprawling.

Horizontal padding follows a 16px base increment, with content blocks typically receiving 16px right padding and variable left padding depending on nesting depth. Section-level containers use 40px horizontal padding for broader content bands. The global negative margin pattern of -860px on outer wrappers creates full-bleed backgrounds where inner content remains constrained while decorative or background elements extend to viewport edges.

Vertical spacing operates on a doubling scale rooted in 16px. Component gaps of 16px separate related items within cards or grids. Section margins of 32px, 48px, and 64px create progressive separation between content groups. Major section headings receive 64px bottom margin, establishing clear territorial boundaries. The most generous spacing appears in career and landing page contexts, where 100px and 128px top padding create dramatic entry points for content sections.

Grid structures visible in the interface include four-column service card layouts, three-column newsletter and resource grids, and two-column split compositions pairing large headings with descriptive text and action buttons. The four-column customer success grid maintains equal distribution with consistent internal padding. Logo rows for strategic partnerships use a horizontal flex arrangement with fixed-height containers and centered alignment.

The footer breaks from the light-mode convention with a full-width dark surface containing a four-column link grid. The IBM logo occupies the leftmost column, while categorized navigation links fill the remaining space. A horizontal rule separates the primary footer content from legal links below.

## Visual language

The visual language communicates enterprise reliability through systematic restraint. Photography and illustration appear in service of content rather than as decorative elements. Client logos in the customer successes section are presented at natural scale within bordered containers, treated as credentials rather than ornament. The partnership logo row uses a light gray border treatment to contain each logo, creating a unified presentation without competing for attention.

Iconography is minimal and functional. Arrow indicators accompany text links, providing directional affordance without decorative flourish. The LinkedIn icon appears inline with button text for social actions. No complex illustrative system is visible; the design relies on typography, spacing, and color to create visual interest.

Surface treatments are flat. Cards do not carry shadows or elevation effects. Borders are hairline precision—1px solid rules in subtle gray that separate sections without creating visual weight. The only rounded elements are buttons at 12px radius, a modest softening that prevents mechanical harshness. All other corners are square, reinforcing the system's engineered precision.

The blue accent color carries semantic consistency: it always indicates action, navigation, or external reference. This discipline prevents color confusion and trains users to recognize interactive elements immediately. On hover, blue links likely shift to the darker hover value, though exact transition behavior is not visible in static view.

## Components

### Primary button

- **Anatomy**: Rectangular button with 12px border radius, containing left-aligned text label and right-aligned arrow icon
- **Surface and text color**: Solid #0F62FE background with white text
- **Typography**: 16px Regular weight, 16px line height
- **Shape**: 12px radius corners, no border
- **Spacing**: 16px padding on all sides
- **Composition**: Text and icon arranged horizontally with space-between logic, icon positioned at right edge
- **Variants**: Full-width container variant for prominent calls-to-action; compact width for inline usage

### Arrow link

- **Anatomy**: Text label followed by right-pointing arrow character, inline or block-level
- **Surface and text color**: Transparent background, #0062FE text
- **Typography**: 16px Regular weight, matching body text size
- **Shape**: No border or background; purely typographic
- **Spacing**: Natural text flow with arrow as inline element
- **Composition**: Text and arrow treated as single interactive unit
- **Variants**: Single-line and multi-line wrapping versions; some instances include additional arrow on subsequent line for long labels

### Service card

- **Anatomy**: Category title in Semi Bold, descriptive paragraph in Regular, followed by arrow link
- **Surface and text color**: White or transparent background, #161616 text
- **Typography**: 16px Semi Bold label, 16px Regular body at 24px line height
- **Shape**: No border radius, no shadow
- **Spacing**: Internal padding of 16px right, variable bottom spacing
- **Composition**: Vertical stack with title, description, and action link
- **Variants**: Four-column grid layout in main content; two-column in narrower contexts

### Section heading block

- **Anatomy**: Large Light weight heading paired with descriptive text and optional action button
- **Surface and text color**: #161616 heading on white or #F4F4F4 background
- **Typography**: 60px Light weight heading, 16px or 24px Regular description
- **Shape**: No containing border or background
- **Spacing**: 64px bottom margin below heading; 16px left padding for alignment offset
- **Composition**: Two-column split with heading left and description with button right, or full-width stack

### Footer

- **Anatomy**: IBM logo, four category columns of links, horizontal rule, legal links row
- **Surface and text color**: #161616 background, #FFFFFF primary links, #C6C6C6 or muted secondary links
- **Typography**: 16px Regular for links, 16px Semi Bold for category headers
- **Shape**: Full-width, no border radius
- **Spacing**: Generous internal padding, 16px between link items vertically
- **Composition**: Logo left-aligned, link columns in grid, legal links in three-column row below rule
- **Variants**: Dark mode exclusive; no light footer variant visible

### Newsletter card

- **Anatomy**: Title in Semi Bold, description in Regular, arrow link for subscription
- **Surface and text color**: Transparent on #F4F4F4 section background
- **Typography**: 16px Semi Bold title, 16px Regular description
- **Shape**: No border or background distinction
- **Spacing**: 16px component gap, consistent with service cards
- **Composition**: Vertical stack within three-column grid

## Responsive behavior

The system shows fluid adaptation through its container-based approach. The -860px negative margin pattern produces full-bleed backgrounds that scale with viewport while content maintains readable measure. Four-column grids visible in service and customer success sections would logically collapse to two columns at intermediate widths and single column on narrow viewports. The two-column heading-description splits would stack vertically when horizontal space becomes constrained.

Typography scales proportionally: the 60px display size may reduce to 48px or 40px on smaller screens to maintain line length control. The generous section padding (100px–128px) would compress to 48px–64px on mobile to preserve content density without excessive scrolling.

Button behavior should adapt to full-width on narrow viewports, particularly for the prominent blue call-to-action buttons. Arrow links may wrap to multiple lines, as shown by instances already displaying two-line layouts with trailing arrows.

The footer link columns would reorganize from four-column grid to two-column or accordion stack on narrow screens, maintaining category grouping while respecting touch target sizing.

## Practical implementation guidance

### Preserve
- The exclusive use of IBM Plex Sans across all text elements; do not introduce secondary typefaces for visual variety
- The 300-weight Light treatment for display headings; this is distinctive to the IBM voice
- The single blue accent (#0F62FE) for all interactive elements; resist adding secondary accent colors
- Generous whitespace ratios; the system's credibility depends on breathing room
- Square corners on cards and containers; reserve rounding for buttons only
- The dark footer inversion as a terminal page element

### Avoid
- Drop shadows on cards or containers; the system achieves hierarchy through spacing and background alternation
- Gradient backgrounds or decorative patterns behind content
- Uppercase text treatments, even for labels or buttons
- Multiple arrow icons per link; one directional indicator suffices
- Pure black (#000000) for text; the specified near-black (#161616) is intentionally softer

### Recommended build order
1. Establish IBM Plex Sans font loading with Light, Regular, and Semi Bold weights
2. Implement the color foundation: ink, canvas, surface, and action tokens
3. Build the typographic scale with exact pixel-to-rem conversions
4. Create the section container with max-width and horizontal padding behavior
5. Implement primary button with 12px radius and arrow icon positioning
6. Build arrow link component as reusable text+icon pattern
7. Construct service card grid with four-column responsive behavior
8. Implement footer with dark inversion and four-column link structure
9. Add section spacing tokens and vertical rhythm rules

### Accessibility
- Maintain the high contrast between #161616 text and #FFFFFF backgrounds, which exceeds WCAG AAA requirements
- Ensure blue action elements (#0F62FE) on white meet minimum 4.5:1 contrast ratio for text
- Preserve visible focus indicators on all interactive elements; the system's flat aesthetic requires deliberate focus styling
- Use semantic heading hierarchy with h1 for page titles and h2 for section headings, matching the visual weight progression
- Provide adequate touch targets for footer links and arrow links on mobile viewports, minimum 44px height
- Ensure the dark footer maintains sufficient contrast between white text and #161616 background

## Scope note

This guide covers the IBM.com marketing and services page surfaces visible in the supplied images, including the services listing, consulting pages, careers entry points, and global footer. Product interfaces, documentation sites, and authenticated application experiences are not represented. Motion, hover states, focus behavior, and mobile-specific layouts are not documented from the static views. Measurements are practical adaptation targets based on the interface values.
