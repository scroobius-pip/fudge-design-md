# How samsung.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/samsung.com-design)

Last updated: 2026-08-10

## Captured pages

[![Global footer with copyright, legal links, social icons, and app promotion cards on white background](https://pin.fontofweb.com/2362?format=jpg)](https://design.withfudge.com/share/pin-2362)

[Global footer with copyright, legal links, social icons, and app promotion cards on white background](https://design.withfudge.com/share/pin-2362)

[![History timeline section with era navigation tabs, blue dot markers, and three-column year cards with bullet lists](https://pin.fontofweb.com/2361?format=jpg)](https://design.withfudge.com/share/pin-2361)

[History timeline section with era navigation tabs, blue dot markers, and three-column year cards with bullet lists](https://design.withfudge.com/share/pin-2361)

[![CEO profile section with centered portrait, bold display heading, and structured biographical role list](https://pin.fontofweb.com/2360?format=jpg)](https://design.withfudge.com/share/pin-2360)

[CEO profile section with centered portrait, bold display heading, and structured biographical role list](https://design.withfudge.com/share/pin-2360)

[![Dark immersive values banner with rounded corners, white text overlay on technology imagery, and circular plus button](https://pin.fontofweb.com/2359?format=jpg)](https://design.withfudge.com/share/pin-2359)

[Dark immersive values banner with rounded corners, white text overlay on technology imagery, and circular plus button](https://design.withfudge.com/share/pin-2359)

## Overview

Samsung's digital presence communicates technological leadership through a disciplined interplay of bold display typography, expansive photography, and restrained interface elements. The system alternates between immersive dark environments and clean white editorial surfaces, creating rhythm across long-form pages. Typography carries the brand voice: Samsung Sharp Sans delivers confident headlines with tight tracking, while Samsung One Latin Compact handles body copy and functional text with neutral clarity. The visual hierarchy is established through scale contrast rather than decorative elements—large display type sits directly on photography or generous white space, with minimal chrome between content and viewer. Component surfaces are intentionally flat, avoiding shadows or dimensional effects that would compete with product imagery. The overall impression is of precision engineering translated into digital space: every element serves a clear communicative purpose, and nothing ornamental remains.

## Colors

The palette is fundamentally binary, built on maximum contrast between pure black and white with a single blue accent for interactive states. This restraint allows product photography and campaign imagery to dominate the visual field without chromatic competition.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, dark banner backgrounds, footer rules |
| canvas | #ffffff | Page backgrounds, text on dark surfaces, card surfaces |
| surface | #f7f7f7 | Subtle section backgrounds, timeline card fills, alternating content bands |
| action | #1428a0 | Timeline dot markers, link underlines, interactive accents |
| muted-ink | #555555 | Secondary body text, captions, legal copy |

The dark mode appears in immersive campaign banners where white text overlays full-bleed photography. Light mode dominates editorial and informational sections, with surface gray providing gentle separation between content zones without introducing a third color family. The action blue is used sparingly—only for timeline indicators and text links—preserving its signaling power. No gradient fills or tinted overlays appear in the interface layer; any color variation comes from photography itself.

## Typography

Samsung employs two distinct type families with clear role separation. Samsung Sharp Sans, designed by Sharp Type Corporation, serves exclusively for display headlines with its geometric construction and confident weight. Samsung One Latin Compact, from Brody Associates (designed by Neville Brody, Luke Prowse, and Florian Runge), handles all functional and body text. The family is available in two weights: Samsung One Latin Compact-400 for regular text and Samsung One Latin Compact-700 for bold emphasis. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Samsung Sharp Sans | 3rem | 700 | 1.1 | -0.02em | Primary page headlines, immersive banner titles |
| section-display | Samsung Sharp Sans | 2.5rem | 700 | 1.15 | -0.01em | Section headings, profile names, timeline year markers |
| headline | Samsung One Latin Compact-400 | 1.5rem | 700 | 1.2 | 0 | Subsection titles, card headers |
| body | Samsung One Latin Compact-400 | 1rem | 400 | 1.5 | 0 | Paragraph text, list items, descriptions |
| body-bold | Samsung One Latin Compact-700 | 1rem | 700 | 1.5 | 0 | Emphasized body text, lead paragraphs |
| label | Samsung One Latin Compact-400 | 0.875rem | 400 | 1.4 | 0 | Captions, metadata, secondary information |
| navigation | Samsung One Latin Compact-400 | 0.875rem | 400 | 1 | 0 | Header and footer links, tab labels |
| legal-copy | Samsung One Latin Compact-400 | 0.75rem | 400 | 1.4 | 0 | Copyright, privacy links, compliance text |

The display sizes use tight negative tracking for visual density appropriate to a technology brand, while body text remains neutral and highly legible. The 1rem body size with 1.5 line height provides comfortable reading for extended content such as the timeline bullet lists.

## Layout

The layout system is centered and contained, with generous breathing room around content. Maximum content width appears to be approximately 1200px, centered with automatic margins. Sections stack vertically with substantial separation—typically 5rem between major content zones. The grid is fundamentally single-column for editorial content, expanding to three columns for the timeline cards and two columns for footer information.

Horizontal rhythm relies on consistent internal padding: content cards and banners use approximately 1.5rem to 2rem of internal spacing. The timeline section demonstrates a structured grid with three year columns of equal width, separated by consistent gutters. Each column contains a year marker in display type, followed by bullet lists with hanging indentation.

The footer organizes into horizontal bands: a primary band with legal links left-aligned and social icons right-aligned, separated by a thin rule from a secondary band containing copyright and regional selector. This creates clear information hierarchy without visual heaviness. App promotion cards in the footer use bordered containers with internal padding, maintaining the same spacing vocabulary as the main content.

## Visual language

Photography treatment is central to Samsung's visual identity. The values banner demonstrates a full-bleed immersive approach: a close-up technology image fills the entire container, with a dark gradient or overlay ensuring white text legibility. The image itself is not masked by hard edges; instead, the container has rounded corners that soften the rectangular frame. A circular plus button in the lower right invites expansion or detail view, its pure white fill contrasting against the dark imagery.

The CEO portrait follows a different treatment: centered, formally lit, with neutral background that allows the subject to read clearly against the white page. This editorial approach signals corporate authority rather than product excitement.

Iconography is minimal and functional. Social icons in the footer are simple monochrome glyphs. The timeline uses small circular dots as temporal markers, filled with the action blue and connected by a thin horizontal line. No decorative illustration or pattern work appears in the visible system.

The overall motion language, inferred from static states, suggests smooth transitions: the timeline tabs imply horizontal content swapping, while the plus button suggests modal or expandable content. These patterns align with the brand's emphasis on technological sophistication.

## Components

### Values Banner

- **Anatomy**: Full-bleed background image, gradient overlay for text legibility, headline block left-aligned, body copy beneath headline, circular action button bottom-right
- **Surface and text color**: Background uses photographic content with dark overlay; text is pure white
- **Typography**: Headline uses hero-display token; body copy uses body token at reduced opacity or lighter weight for hierarchy
- **Shape**: Container uses large border radius (1.5rem); action button is perfect circle (50%)
- **Spacing**: Generous internal padding, approximately 3rem from edges; text block occupies left 50% of container
- **Composition**: Asymmetric balance with visual weight on left, action anchor on right
- **Variants**: Likely adapts to different photography with consistent overlay treatment

### Timeline Section

- **Anatomy**: Era navigation tabs as horizontal list, section headline centered, three-column grid of year cards, each with dot marker, year display, and bullet list
- **Surface and text color**: Light surface background (#f7f7f7) for card area; black text throughout
- **Typography**: Section title uses section-display; year markers use section-display at slightly reduced size; body text uses body token
- **Shape**: Cards have subtle or no visible border radius; dot markers are circular
- **Spacing**: Generous vertical separation between navigation and content; consistent column gutters
- **Composition**: Centered section title above asymmetric three-column content; equal column widths with left-aligned text
- **Variants**: Navigation tabs show active state with underline or bold weight; content swaps horizontally by era

### CEO Profile

- **Anatomy**: Centered display heading, portrait image, name in display type, structured role list with dates
- **Surface and text color**: White background throughout; black text with possible gray for secondary roles
- **Typography**: Section heading uses hero-display; name uses section-display; role list uses body or label token
- **Shape**: Portrait is rectangular with no visible border radius; content is centered
- **Spacing**: Vertical rhythm with approximately 1.5rem between elements; portrait has generous margin above and below
- **Composition**: Strictly centered, creating formal symmetry appropriate to executive presentation
- **Variants**: None visible; likely static content block

### Footer

- **Anatomy**: Copyright line, bordered app promotion cards, horizontal rule, legal link row with social icons, regional selector
- **Surface and text color**: White background; black text; cards have visible borders
- **Typography**: Legal links use navigation token; copyright uses legal-copy; promotional text uses label or body
- **Shape**: Cards have rounded corners; social icons are simple glyphs
- **Spacing**: Multiple horizontal bands with consistent vertical padding; links separated by pipe characters or spacing
- **Composition**: Left-right split between legal information and social engagement; bottom-aligned copyright
- **Variants**: App cards may have hover states; social icons likely have target areas larger than visible glyphs

## Responsive behavior

The timeline's three-column layout should collapse to single column on narrower viewports, with year cards stacking vertically and dot markers aligning to left margin. The values banner text block should expand to full width on small screens, maintaining internal padding while allowing the background image to crop differently. Footer legal links should wrap to multiple lines, with social icons moving above or below the link row. Display type sizes should scale down proportionally, with hero-display reducing to approximately 2rem on mobile to prevent overflow. The CEO profile centering should remain consistent across breakpoints, with portrait width constrained by viewport rather than fixed pixel dimensions.

## Practical implementation guidance

### Preserve
- The strict two-family typography system with Sharp Sans reserved exclusively for display
- Maximum contrast between dark immersive banners and light editorial sections
- Generous whitespace as a brand element, not merely absence of content
- Rounded corners on containers that hold photography, creating approachable technology aesthetic
- Centered formal layouts for executive and corporate content

### Avoid
- Introducing additional colors beyond the single blue accent
- Using Sharp Sans for body text or functional labels
- Adding decorative shadows, gradients, or dimensional effects to interface elements
- Crowding the timeline with more than three visible columns
- Left-aligning content that is formally centered in the source design

### Recommended build order
1. Establish typography system with both font families loaded and fallbacks defined
2. Implement color tokens with strict binary light/dark mode
3. Build values banner component with responsive image handling and text overlay
4. Create timeline section with tab navigation and column grid
5. Develop footer with legal link patterns and social icon integration
6. Add CEO profile as centered content template

### Accessibility
- Ensure text on photographic backgrounds maintains 4.5:1 contrast ratio through overlay controls
- Provide visible focus indicators for timeline tabs and footer links
- Structure timeline content with proper heading hierarchy for screen reader navigation
- Include alt text for CEO portrait that identifies the subject and context
- Make circular plus button target size at least 44x44px for touch accessibility

## Scope note

This guide covers the corporate and editorial surfaces visible on Samsung's About Us and homepage sections, including the values banner, timeline, executive profile, and global footer. Product detail pages, e-commerce flows, navigation menus, and mobile-specific layouts are not represented in the supplied material. Measurements are practical adaptation targets.
