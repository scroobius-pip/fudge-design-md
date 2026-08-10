# How going.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/going.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark teal footer with four-column link grid, social icons, app store badges, and cream bottom bar with Going logo.](https://pin.fontofweb.com/2594?format=jpg)](https://design.withfudge.com/share/pin-2594)

[Dark teal footer with four-column link grid, social icons, app store badges, and cream bottom bar with Going logo.](https://design.withfudge.com/share/pin-2594)

[![FAQ section with split layout: mountain photography on left, accordion questions with teal text on pale cream right panel.](https://pin.fontofweb.com/2593?format=jpg)](https://design.withfudge.com/share/pin-2593)

[FAQ section with split layout: mountain photography on left, accordion questions with teal text on pale cream right panel.](https://design.withfudge.com/share/pin-2593)

[![Content section with large teal heading, highlighted 'great deal' text on pale blue, travel photography, and guitar-playing illustration.](https://pin.fontofweb.com/2592?format=jpg)](https://design.withfudge.com/share/pin-2592)

[Content section with large teal heading, highlighted 'great deal' text on pale blue, travel photography, and guitar-playing illustration.](https://design.withfudge.com/share/pin-2592)

[![Membership comparison table with three tiers, green checkmarks, gray X marks, and purple filled button versus outlined buttons.](https://pin.fontofweb.com/2591?format=jpg)](https://design.withfudge.com/share/pin-2591)

[Membership comparison table with three tiers, green checkmarks, gray X marks, and purple filled button versus outlined buttons.](https://design.withfudge.com/share/pin-2591)

## Overview

Going is a travel-deals platform that helps users discover cheap flights, mistake fares, and points-and-miles opportunities. The visual system balances trustworthy professionalism with playful wanderlust energy. Deep teal ink against warm cream backgrounds creates a distinctive, readable foundation, while vibrant purple accents draw attention to primary actions. Playful line illustrations of travelers and musicians appear alongside destination photography, reinforcing the brand's approachable, adventure-forward personality. The design prioritizes clarity in complex information—membership comparisons, FAQ accordions, and dense footer navigation—while maintaining visual warmth through rounded shapes, generous whitespace, and carefully curated imagery.

## Colors

The palette centers on a deep teal ink that feels trustworthy and travel-appropriate, paired with an exceptionally warm cream canvas that softens the overall impression. A vibrant purple accent provides energetic contrast for calls-to-action, while a pale blue highlight draws attention to key phrases within headings.

| token | value | use |
|---|---|---|
| ink | #003C3C | Primary text, headings, strong borders, footer background |
| canvas | #FEFDF5 | Page background, footer text on dark, button text on purple |
| surface | #FFFFFF | Card backgrounds, elevated panels, table cells |
| accent | #5B3DF5 | Primary buttons, featured column emphasis, interactive highlights |
| accent-hover | #4A2DE0 | Button hover states, deeper purple for emphasis |
| muted | #6B8A8A | Secondary text, disabled states, subtle metadata |
| success | #4ADE80 | Checkmark indicators, positive confirmation states |
| highlight | #B8E6F0 | Inline text highlights, key phrase backgrounds |
| border | #E5E7EB | Dividers, table row separators, accordion borders |
| border-strong | #003C3C | Footer top edge, focused outlines, prominent dividers |

The system operates primarily in light mode: warm cream canvas with teal ink text. The footer inverts this relationship, using teal as a solid background with cream text. Photography introduces natural color variation—mountain landscapes, urban street scenes, architectural details—while illustrations add controlled accent colors like coral, pink, and sky blue that complement without competing with the core palette. The purple accent is reserved for high-priority interactive moments, creating clear visual hierarchy between browsing and conversion.

## Typography

The type system uses PP Mori exclusively, a contemporary sans-serif with geometric clarity and subtle humanist warmth. The Regular weight serves all text roles, relying on size and spacing rather than weight variation to establish hierarchy. This creates a calm, consistent reading experience across marketing and functional content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | PP Mori | 3.5rem | 400 | 1.1 | -0.02em | Page headlines, major section introductions |
| section-display | PP Mori | 2.5rem | 400 | 1.15 | -0.01em | Section headings, feature titles |
| body-large | PP Mori | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, introductory copy |
| body | PP Mori | 1rem | 400 | 1.6 | 0 | Primary reading text, descriptions, FAQ answers |
| body-small | PP Mori | 0.875rem | 400 | 1.5 | 0 | Footer links, metadata, captions |
| label | PP Mori | 0.75rem | 400 | 1.4 | 0.05em | Buttons, badges, uppercase labels |
| navigation | PP Mori | 0.875rem | 400 | 1 | 0.02em | Header and footer navigation links |

Tight negative tracking on display sizes gives headlines confident presence, while body text uses neutral tracking for comfortable extended reading. The label style's uppercase transformation and positive tracking create clear distinction for interactive elements. Verify licensing for PP Mori before production use; the family is available from Pangram Pangram Foundry with design by Caio Kondo, Mathieu Desjardins, and Satsuki Arakaki.

## Layout

The layout system uses a centered content container with generous horizontal padding, creating breathing room around dense information. Sections stack vertically with substantial separation, allowing each content block to feel distinct while maintaining scroll momentum.

The grid adapts to content type: marketing sections use asymmetric two-column layouts with text on one side and photography or illustration on the other; comparison tables use structured multi-column grids with clear vertical alignment; FAQ sections split the viewport between immersive photography and scrolling accordion content. Footer navigation organizes into four equal columns on desktop, collapsing logically on smaller viewports.

Spacing follows a 0.25rem base unit. Section vertical padding uses 6rem to create dramatic separation between major content areas. Component internal padding uses 1.5rem for comfortable touch targets and readable line lengths. Content gaps between related elements use 2rem. The system avoids cramped information density—table cells, accordion items, and footer links all receive generous vertical breathing room.

Border radius varies by element role: panels and cards use 0.75rem for subtle softness, buttons use full pill shapes at 9999px, and inputs use 0.5rem for approachable utility. The membership comparison table's featured column uses a stronger border treatment to elevate the Premium tier visually.

## Visual language

Photography style emphasizes authentic travel moments over polished stock imagery: misty mountain landscapes, street musicians in European plazas, candid cultural encounters. Images receive minimal treatment, allowing natural color and texture to contrast with the clean interface. Rounded corners on photographs (0.75rem) integrate them smoothly with adjacent UI elements.

Illustrations follow a consistent line-art style with selective color fills—coral hair, pink clothing, blue instruments—creating playful characters that embody the joy of travel. These figures often appear partially outside image bounds or overlapping photographs, breaking rigid grid lines and adding dynamic energy.

Iconography uses simple geometric forms: globes for tier indicators, diamonds for premium status, chevrons for accordion expansion. Checkmarks and X marks in the comparison table use soft green circles and subtle gray backgrounds for clear at-a-glance scanning.

The overall impression balances trustworthy information architecture with emotional travel aspiration. Deep teal conveys reliability and expertise; warm cream invites prolonged engagement; purple accents create moments of decisive action; illustrations and photography inject human warmth and destination desire.

## Components

### Primary Action Button

- **Anatomy**: Text label centered within a fully rounded pill shape
- **Surface and text color**: Solid purple (#5B3DF5) background with cream (#FEFDF5) text
- **Typography**: Label token, uppercase, with positive letter spacing
- **Shape**: 9999px border radius creating perfect pill
- **Spacing**: 0.875rem vertical padding, 2rem horizontal padding
- **Composition**: Typically appears as the sole or dominant action in a group
- **Variants**: Hover state deepens to accent-hover (#4A2DE0)

### Secondary Action Button

- **Anatomy**: Text label centered within outlined pill shape
- **Surface and text color**: Transparent background with teal ink (#003C3C) text and border
- **Typography**: Label token, uppercase, with positive letter spacing
- **Shape**: 9999px border radius, 2px solid border
- **Spacing**: 0.875rem vertical padding, 2rem horizontal padding
- **Composition**: Appears alongside primary buttons or in lower-priority contexts

### Accordion Item

- **Anatomy**: Question text with right-aligned chevron icon, expandable answer area below
- **Surface and text color**: Transparent background, teal ink text, with border-bottom divider
- **Typography**: Question uses body token; answer uses body token with standard line height
- **Shape**: Full-width, no border radius
- **Spacing**: 1.25rem vertical padding per item
- **Composition**: Stacked vertically in a contained list; expanded state reveals paragraph text below question
- **States**: Collapsed shows downward chevron; expanded shows upward chevron with visible answer text

### Membership Comparison Table

- **Anatomy**: Row labels left, three tier columns (Limited, Premium, Elite) with icon headers; checkmarks or X marks indicate feature availability; action buttons at column bases
- **Surface and text color**: Cream canvas background; featured Premium column has stronger border treatment; green checkmarks in soft circles, gray X marks for unavailable features
- **Typography**: Row labels use body token; tier names use body with icon prefix; buttons use label token
- **Shape**: 0.75rem border radius on container; featured column may have full border outline
- **Spacing**: Generous cell padding for scannability; substantial gap between table and buttons
- **Composition**: Premium column visually elevated through border weight and centered purple primary button; other tiers use secondary outlined buttons

### Footer

- **Anatomy**: Full-width dark teal panel with four-column link grid, social icon row, app store badges, and bottom cream bar with logo and legal links
- **Surface and text color**: Teal ink (#003C3C) background with cream (#FEFDF5) text; bottom bar inverts to cream background with teal text
- **Typography**: Column headers use body-small with standard weight; links use body-small with uppercase transformation and positive letter spacing
- **Shape**: No border radius; sharp top edge against content above
- **Spacing**: Substantial internal padding; consistent vertical rhythm between link items
- **Composition**: About, Resources, Support, and Follow Us columns; social icons in horizontal row; App Store and Google Play badges stacked; bottom bar spans full width with logo left, legal links right

### Content Feature Block

- **Anatomy**: Large heading with optional inline highlight, supporting paragraph, and accompanying media (photography or illustration)
- **Surface and text color**: Cream or white background; teal ink text; highlight span uses pale blue (#B8E6F0) background
- **Typography**: Heading uses section-display or hero-display; body text uses body-large
- **Shape**: Media elements use 0.75rem border radius; illustrations may break bounds
- **Spacing**: 2rem gap between text and media; 6rem section padding
- **Composition**: Asymmetric two-column layout with text left, media right; illustrations may overlap or extend beyond image frames

## Responsive behavior

The design should maintain its warm, approachable character across viewport sizes. On narrower screens, the asymmetric two-column layouts stack vertically with text preceding imagery. The membership comparison table may require horizontal scrolling or transformation into a stacked card view to preserve scannability. Footer columns collapse to two-column then single-column grids with maintained link grouping.

Accordion content should remain fully accessible with touch-friendly tap targets; chevron icons should scale appropriately. Photography should maintain aspect ratio while adapting container width. The pill-shaped buttons maintain their proportions but may use reduced horizontal padding on very narrow screens.

Typography scales down proportionally: hero-display reduces to approximately 2.5rem, section-display to 2rem, maintaining the tight tracking and line height ratios. Body text remains at 1rem minimum for readability.

## Practical implementation guidance

### Preserve
- The warm cream canvas as the dominant background; it distinguishes Going from colder white-background competitors
- PP Mori's consistent Regular weight across all text roles; the calm uniformity is intentional
- The deep teal ink for primary text; it provides sufficient contrast without black's harshness
- Full pill shapes for primary and secondary buttons; the roundedness reinforces approachability
- Inline pale blue highlights for key phrases within headings; this draws attention without breaking text flow
- The asymmetry between text and imagery in feature blocks; perfect symmetry would feel static

### Avoid
- Introducing additional font weights; the single-weight system is a core differentiator
- Using the purple accent for non-interactive elements; it should remain reserved for actions
- Replacing authentic photography with generic travel stock; the candid, atmospheric quality matters
- Crowding the comparison table; generous cell padding enables quick feature scanning
- Darkening the cream canvas toward gray; the warm yellow undertone is essential

### Recommended Build Order
1. Establish the cream canvas background and teal ink text defaults
2. Implement PP Mori at body size with proper line height and spacing
3. Build the pill button system with primary purple and secondary outlined variants
4. Create the section spacing rhythm with 6rem vertical separation
5. Implement the asymmetric two-column feature block pattern
6. Build the accordion with proper expand/collapse states and chevron rotation
7. Construct the membership comparison table with featured column elevation
8. Implement the dark teal footer with four-column navigation grid

### Accessibility
- Ensure teal ink (#003C3C) on cream (#FEFDF5) meets WCAG AA contrast ratios for all text sizes
- Purple accent buttons should maintain sufficient contrast; consider a slightly lighter cream or white text if needed
- Accordion items should be keyboard navigable with Enter/Space to toggle, Arrow keys to move between items
- Comparison table should include proper scope attributes and screen reader descriptions for checkmark/X mark meanings
- All interactive elements should have visible focus indicators, preferably using the teal ink color with outline offset

## Scope note

This guide covers the marketing and informational surfaces of Going.com including the homepage and How It Works page. The membership comparison table, FAQ accordion, feature content blocks, and site footer are fully represented. Not included: authenticated member dashboards, email alert interfaces, checkout flows, mobile application designs, and animation or motion specifications. Measurements are practical adaptation targets derived from visible interface elements.
