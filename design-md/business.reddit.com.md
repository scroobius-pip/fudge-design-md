# How business.reddit.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/business.reddit.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer navigation with four-column link groups, Reddit logo, legal links, and social icons on a black background with white text and orange logo accent.](https://pin.fontofweb.com/4581?format=jpg)](https://design.withfudge.com/share/pin-4581)

[Footer navigation with four-column link groups, Reddit logo, legal links, and social icons on a black background with white text and orange logo accent.](https://design.withfudge.com/share/pin-4581)

[![Promotional banner with rounded corners featuring a person holding a phone on coral background, orange panel with white headline, and two pill-shaped action buttons.](https://pin.fontofweb.com/4580?format=jpg)](https://design.withfudge.com/share/pin-4580)

[Promotional banner with rounded corners featuring a person holding a phone on coral background, orange panel with white headline, and two pill-shaped action buttons.](https://design.withfudge.com/share/pin-4580)

[![Success Stories carousel section with Oreo case study card, dark image with rocket stat badge, quote text, and orange outlined Read case study button with dot navigation.](https://pin.fontofweb.com/4579?format=jpg)](https://design.withfudge.com/share/pin-4579)

[Success Stories carousel section with Oreo case study card, dark image with rocket stat badge, quote text, and orange outlined Read case study button with dot navigation.](https://design.withfudge.com/share/pin-4579)

[![Community demographics section with topic cards, 100k+ active communities stat on magenta, Reddit post screenshots, and 85% honesty statistic on yellow card.](https://pin.fontofweb.com/4578?format=jpg)](https://design.withfudge.com/share/pin-4578)

[Community demographics section with topic cards, 100k+ active communities stat on magenta, Reddit post screenshots, and 85% honesty statistic on yellow card.](https://design.withfudge.com/share/pin-4578)

## Overview

Reddit for Business presents a marketing platform with a visual identity rooted in Reddit's consumer brand while elevating the presentation for enterprise advertisers. The system pairs extreme contrast—pure black against pure white—with Reddit's signature orange as the primary action color. The result is a confident, approachable tone that balances corporate credibility with the platform's community-driven personality.

The design relies on two complementary type families: Reddit Display for bold, tight headlines that command attention, and Reddit Sans for readable body text and functional labels. Rounded corners appear throughout, from pill-shaped buttons to generously curved cards and promotional panels, softening the high-contrast palette. Photography and 3D illustration coexist: lifestyle imagery of people using devices alongside playful rendered objects like rockets, upvote arrows, and speech bubbles. The layout alternates between clean white sections and immersive dark or colored panels, creating rhythm across long scrolling pages.

## Colors

The color system is intentionally restrained, deriving its energy from Reddit's established brand orange against neutral extremes. Black and white serve as the foundation, with orange as the singular accent. Supporting surface colors—magenta, yellow, and coral—appear in specific promotional and statistical contexts, drawn from illustration palettes rather than competing with the primary brand mark.

| token | value | use |
|---|---|---|
| action | #FF4500 | Primary buttons, links, logo mark, key CTAs |
| action-hover | #E63E00 | Hover state for action elements |
| ink | #000000 | Primary text on light backgrounds, footer background |
| ink-inverse | #FFFFFF | Text on dark or colored backgrounds, button labels on orange |
| canvas | #FFFFFF | Page background, card backgrounds |
| surface | #F6F7F8 | Subtle section alternation, case study card backgrounds |
| surface-magenta | #D93A96 | Statistical highlight cards, community count badges |
| surface-yellow | #FFC72C | Trust statistic cards, accent panels |
| surface-coral | #FF8A65 | Promotional imagery backgrounds, gradient partner |
| border | #E5E5E5 | Subtle dividers, inactive carousel dots |
| border-inverse | #FFFFFF | Outlines on dark or orange backgrounds |

The orange action color dominates interactive elements: filled buttons, text links, and the Reddit logo mark. On the dark footer, orange appears only in the logo, maintaining legibility while preserving brand recognition. The supporting surface colors—magenta, yellow, and coral—function as illustration-adjacent accents that appear in isolated cards and promotional imagery rather than as repeating UI elements. This keeps the system coherent while allowing moments of visual play.

## Typography

Reddit for Business uses two related families designed by Stephen Hutchings for Reddit: Reddit Display for headlines and Reddit Sans for everything else. The Display family carries extreme weights (Black and Extra Bold) with tight tracking for marketing impact, while Sans provides a full range from Regular through Bold for functional hierarchy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Reddit Display | 3rem | 800 | 1.1 | -0.02em | Page headlines, major section titles |
| section-display | Reddit Display | 2.5rem | 800 | 1.15 | -0.01em | Subsection headings, stat numbers |
| body-large | Reddit Sans | 1.25rem | 400 | 1.5 | 0 | Introductory paragraphs, hero descriptions |
| body | Reddit Sans | 1rem | 400 | 1.5 | 0 | Standard paragraphs, card descriptions |
| body-small | Reddit Sans | 0.875rem | 400 | 1.5 | 0 | Captions, metadata, fine print |
| label | Reddit Sans | 0.875rem | 600 | 1.25 | 0.02em | Button text, navigation labels, category tags |
| navigation | Reddit Sans | 0.875rem | 400 | 1.25 | 0 | Footer links, header menu items |
| stat-display | Reddit Display | 2.5rem | 800 | 1 | -0.02em | Large statistics, metric highlights |

The type scale builds from a 4px relative unit. Display sizes use tight line heights for impact, while body sizes maintain generous 1.5 leading for readability. Label and navigation tokens share the same 0.875rem size but differentiate through weight: 600 for interactive labels, 400 for navigation links. The stat-display token matches section-display in size but tightens leading further for single-line metric presentation.

Verify licensing for these families before production use. Reddit Display and Reddit Sans are proprietary to Reddit, designed by Stephen Hutchings.

## Layout

The page structure follows a centered, contained model with full-bleed sections for promotional and statistical content. Content max-width sits around 1200px, with generous internal padding creating breathing room around dense information.

Sections stack vertically with substantial 6rem gaps between major content blocks. Within sections, two-column layouts are common: text content on the left paired with imagery or cards on the right, as seen in the community demographics and success stories sections. The promotional banner breaks this pattern with a split-panel composition: rounded imagery on the left, solid color with text and buttons on the right.

The footer uses a four-column grid for link organization, with a full-width sub-footer containing legal links and social icons. Horizontal rules in subtle gray separate the column links from the logo and legal row.

Card-based components employ asymmetric compositions. Case study cards float a statistic badge over the imagery corner, creating depth through overlap. Statistical cards in magenta and yellow break the grid, positioned to partially overlap adjacent content and create visual tension.

Spacing follows a 4px base unit. Component internal padding ranges from 1.5rem to 2rem. Section vertical rhythm uses 6rem for major breaks, 2rem for related content clusters, and 0.5rem for tight element groupings like button pairs.

## Visual language

The visual personality balances corporate clarity with Reddit's playful community essence. Three-dimensional rendered objects—upvote arrows, speech bubbles, rockets, and microphones—appear as decorative elements, rendered in brand orange and supporting accent colors. These objects cast soft shadows and have rounded, toy-like proportions that feel approachable rather than childish.

Photography shows diverse individuals in natural settings using devices, cropped to focus on hands and faces. Images receive rounded-corner treatment matching the UI, with 1.5rem to 2rem radii that feel contemporary and friendly.

Community representation uses screenshot-style cards showing actual Reddit post interfaces, complete with subreddit names, vote counts, and comment indicators. These are framed as authentic platform content, reinforcing the marketing message with real interface patterns.

The stat badge pattern overlays bold white numbers on dark rounded rectangles, positioned at image corners with small 3D icons perched on top. This creates a layered, dimensional quality that elevates flat marketing pages.

Color blocking divides promotional content: coral-tinted imagery zones against solid orange text zones, or white content areas against magenta and yellow stat interruptions. The transitions between these zones are hard-edged rather than gradient, maintaining graphic punch.

## Components

### Primary Button
- **Anatomy**: Rounded pill containing centered label text
- **Surface and text color**: Solid action orange background with white text
- **Typography**: label token, weight 600
- **Shape**: Full pill border radius, 9999px
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Appears singly or in pairs alongside secondary variants

### Secondary Button (Inverse)
- **Anatomy**: Rounded pill with transparent fill and white border
- **Surface and text color**: Transparent background, white text, 1px white border
- **Typography**: label token, weight 600
- **Shape**: Full pill border radius
- **Spacing**: Matches primary button padding
- **Composition**: Used on dark or colored backgrounds where filled orange would compete

### Outlined Button
- **Anatomy**: Rounded pill with transparent fill and colored border
- **Surface and text color**: Transparent background, action orange text, 2px action orange border
- **Typography**: label token, weight 600
- **Shape**: Full pill border radius
- **Spacing**: Standard button padding
- **Composition**: Used for tertiary actions like "Read case study" on light backgrounds

### Promotional Banner
- **Anatomy**: Full-width rounded panel with split content: imagery zone and text zone
- **Surface**: Left portion shows lifestyle photography on coral-tinted background; right portion is solid action orange
- **Typography**: hero-display token in white for headline; label token for buttons
- **Shape**: 2rem outer border radius, continuous rounded contour
- **Spacing**: Internal padding approximately 2rem to 3rem
- **Composition**: Two buttons aligned horizontally below headline; left button is filled white with dark text, right button is inverse outline

### Case Study Card
- **Anatomy**: Large rounded card containing image, floating stat badge, brand logo, quote text, and CTA button
- **Surface**: Light gray surface background, dark image with gradient overlay, dark stat badge
- **Typography**: section-display for stat number in white on badge; body for quote text; label for CTA
- **Shape**: 2rem card radius, 1.5rem image radius, full-pill badge and button
- **Spacing**: 2rem internal padding, stat badge overlaps image corner
- **Composition**: Asymmetric layout with image left, content right; stat badge positioned bottom-left of image

### Stat Card
- **Anatomy**: Colored rounded rectangle with large number and supporting text
- **Surface**: Magenta or yellow background with white or black text depending on contrast
- **Typography**: stat-display for number; body-small for description
- **Shape**: 1.5rem border radius
- **Spacing**: 1.5rem internal padding
- **Composition**: Positioned to partially overlap adjacent content, with small 3D icon attached to top edge

### Footer
- **Anatomy**: Full-width dark section with four-column link grid, horizontal rule, logo and legal row, social icons
- **Surface**: Black background throughout
- **Typography**: label token in uppercase for column headers; navigation token for links; body-small for copyright
- **Shape**: No border radius; full-bleed rectangle
- **Spacing**: Generous top padding, 2rem gap between link grid and legal row, separated by 1px border in dark gray
- **Composition**: Four equal columns with 8-10 links each; legal links in horizontal row left-aligned with social icons right-aligned

## Responsive behavior

The layout is optimized for desktop widths, with substantial side margins and multi-column arrangements. At narrower viewports, the two-column section layouts should stack vertically, with imagery preceding text in promotional sections and following text in explanatory sections. The four-column footer grid should collapse to two columns on tablet and single column on mobile, maintaining category grouping.

Button pairs in promotional banners should remain horizontal where space permits, stacking only on the narrowest viewports. Case study cards should transition from side-by-side image and content to stacked, with the stat badge repositioning to overlay the image top rather than corner.

The rounded card radii should scale down slightly on mobile to prevent excessive corner rounding relative to reduced card width. Typography should maintain hierarchy while reducing display sizes: hero-display to 2rem, section-display to 2rem, with body sizes holding constant for readability.

## Practical implementation guidance

### Preserve
- The extreme contrast between black, white, and orange; this is the core brand recognition
- The rounded pill shape for all interactive elements; sharp-cornered buttons would break the friendly tone
- The 3D illustration style with soft shadows and rounded proportions
- The asymmetric stat badge overlap on case study imagery
- The two-type-family hierarchy: Display for impact, Sans for function

### Avoid
- Introducing additional accent colors beyond the established orange, magenta, yellow, and coral
- Using Reddit Display for body text or long passages; its tight spacing reduces readability
- Sharp corners on cards or buttons; the rounded language is consistent across all surfaces
- Gradient backgrounds; the design uses flat color blocks for graphic clarity
- Centering all text; the asymmetric left-aligned layouts create dynamic tension

### Recommended Build Order
1. Establish the color tokens and type scale with the two font families
2. Build the button system with three variants: filled orange, inverse outline, and orange outline
3. Create the card component with configurable background and radius
4. Implement the promotional banner as a split-panel composition
5. Build the case study carousel with stat badge overlay
6. Construct the footer with responsive column collapse
7. Add 3D illustration assets and photography treatment

### Accessibility
- Ensure orange action elements on white meet WCAG AA contrast ratios; the pure orange may need darkening for small text
- Provide visible focus states on pill buttons, likely using a contrasting ring or offset shadow
- Maintain text contrast on the magenta stat card; white text on #D93A96 should be verified programmatically
- Add aria-labels to icon-only social links in the footer
- Ensure carousel navigation is keyboard operable with visible active state on dot indicators
- Respect reduced-motion preferences for any carousel auto-advance

## Scope note

This guide covers the Reddit for Business marketing homepage and its visible promotional, statistical, and footer components. Mobile breakpoints, form interactions, interior page templates, motion specifications, and hover state details are not represented in the supplied material. Measurements are practical adaptation targets.
