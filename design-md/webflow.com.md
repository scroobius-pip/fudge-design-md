# How webflow.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/webflow.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing table comparing CMS and Business plans with feature lists and blue call-to-action buttons on dark background](https://pin.fontofweb.com/6023?format=jpg)](https://design.withfudge.com/share/pin-6023)

[Pricing table comparing CMS and Business plans with feature lists and blue call-to-action buttons on dark background](https://design.withfudge.com/share/pin-6023)

[![Starter plan card showing free tier with publishing and hosting features in vertical layout](https://pin.fontofweb.com/6022?format=jpg)](https://design.withfudge.com/share/pin-6022)

[Starter plan card showing free tier with publishing and hosting features in vertical layout](https://design.withfudge.com/share/pin-6022)

[![Solutions dropdown menu with audience categories and promotional card for Answer Engine Optimization](https://pin.fontofweb.com/6021?format=jpg)](https://design.withfudge.com/share/pin-6021)

[Solutions dropdown menu with audience categories and promotional card for Answer Engine Optimization](https://design.withfudge.com/share/pin-6021)

[![Hero section with large display headline, partner logo strip, and dual call-to-action buttons](https://pin.fontofweb.com/6020?format=jpg)](https://design.withfudge.com/share/pin-6020)

[Hero section with large display headline, partner logo strip, and dual call-to-action buttons](https://design.withfudge.com/share/pin-6020)

## Overview

Webflow's design system is built for high-contrast, dark-mode-first product marketing. The visual language centers on absolute black backgrounds, electric blue action elements, and a single custom typeface that scales from restrained body copy to oversized display headlines. The system prioritizes information density—pricing tables, feature comparisons, and navigation mega-menus all occupy the same dark canvas without visual fatigue. White typography provides primary hierarchy, while a mid-tone gray handles secondary information. The blue accent color appears almost exclusively in interactive moments: primary buttons, active navigation states, and promotional badges. This creates a clear behavioral pattern where color signals action and the monochrome field supports reading. The overall impression is technical confidence—generous whitespace in hero sections gives way to tightly packed data in product surfaces, suggesting a tool that scales from aspirational promise to detailed specification.

## Colors

The palette is severely constrained, using color almost exclusively for functional signaling rather than atmospheric effect.

| token | value | use |
|---|---|---|
| action | #146EF5 | Primary buttons, active navigation indicators, promotional badges |
| canvas | #000000 | Page background, deepest surface layer |
| surface | #080808 | Card backgrounds, elevated panels, pricing table cells |
| surface-elevated | #363636 | Secondary buttons, hover states, subtle elevation |
| ink | #FFFFFF | Primary headings, body text, navigation labels |
| muted-ink | #ABABAB | Secondary descriptions, feature labels, disabled indicators |
| border | #333333 | Horizontal rules, card outlines, table dividers |
| border-subtle | #363636 | Inner panel divisions, subtle separators |

The dark mode is not an alternative but the foundation. Every surface builds from absolute black upward through near-black grays. The blue accent maintains consistent saturation and brightness across contexts, appearing as filled buttons, underlined active states, and small filled badges. White text dominates, with the muted gray reserved for explanatory copy and category labels like "PUBLISHING" or "HOSTING" in pricing tables. No warm tones appear in the interface; the color temperature stays cool and neutral. Photography and illustration introduce color variation, but the UI itself remains disciplined. Light mode, if it exists, would need to invert the canvas-to-surface relationship while preserving the blue accent and weight hierarchy.

## Typography

Webflow uses a single custom variable font, Wf Visual Sans, across all interface text. The family supports weight variation from 400 to 700 and appears to include optical sizing. Verify licensing for this family before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Wf Visual Sans | 5rem | 600 | 1.04 | -0.01em | Homepage heroes, major section openings |
| section-display | Wf Visual Sans | 3.5rem | 600 | 1.04 | normal | Section headings, feature introductions |
| feature-headline | Wf Visual Sans | 2.5rem | 600 | 1.2 | normal | Feature cards, sub-section titles |
| pricing-value | Wf Visual Sans | 2rem | 600 | 1.2 | normal | Plan prices, large metric displays |
| body-large | Wf Visual Sans | 1.25rem | 400 | 1.5 | normal | Hero descriptions, introductory paragraphs |
| body | Wf Visual Sans | 1rem | 400 | 1.6 | normal | General content, feature lists, navigation |
| label | Wf Visual Sans | 0.875rem | 400 | 1.6 | normal | Small print, metadata, category tags |
| navigation | Wf Visual Sans | 1rem | 500 | 1.2 | -0.01em | Top-level nav, dropdown links |
| button | Wf Visual Sans | 1rem | 500 | 1.2 | -0.01em | Button labels, call-to-action text |
| micro-label | Wf Visual Sans | 0.8rem | 550 | 1.2 | normal | Plan badges, status indicators |

The type system relies on weight and size contrast rather than style variation. Regular weight handles all body content; Medium and Semibold appear in navigation and buttons; Bold and weight 600 carry display and headline roles. Letter spacing tightens slightly at display sizes and in navigation, creating optical correction for larger forms. Line heights are compact—display text sits at 1.04, creating tight stacks that feel intentional rather than cramped. The 1.6 ratio for body copy provides adequate reading comfort against the dark background.

## Layout

The layout system uses a centered container with generous horizontal margins, creating a focused reading column that expands for hero moments and contracts for dense information.

The global navigation spans full width with internal padding, sitting directly on the black canvas. Below it, content sections alternate between centered single-column layouts for messaging and full-width grids for data-dense surfaces like pricing tables. The pricing page demonstrates a clear spatial logic: hero section with centered headline and description, followed by plan cards in a multi-column grid, then detailed feature comparison tables that extend to full width.

Spacing follows a modular rhythm based on 2px increments. Major section breaks use 6rem or more. Internal component padding typically runs 1.5rem for cards and 1rem for buttons. The pricing tables show tighter internal spacing—approximately 0.75rem vertical padding per feature row—with horizontal rules providing structural rhythm.

Grid behavior on the pricing page suggests a responsive collapse: three or four plan columns on desktop, likely stacking to single column on smaller viewports. Feature comparison rows maintain their label-plus-checkmark pattern across widths, with the plan name and price anchoring each column's top. Negative margin techniques appear in the spacing data, suggesting row-based layouts with gutter compensation.

## Visual language

The visual character is austere and technical, with three distinctive elements: absolute darkness, electric blue punctuation, and typographic scale contrast.

Imagery appears primarily in promotional contexts—small cards within dropdown menus, hero illustrations—rather than as atmospheric background. When present, images use rounded corners at 0.5rem and sit within the dark frame without bleeding to edges. The partner logo strip in the hero section demonstrates a common pattern: monochrome or near-monochrome marks arranged horizontally, treated as texture rather than color elements.

Iconography is minimal and functional. Information icons appear as simple circles with lowercase "i" marks in feature tables. Checkmarks indicate inclusion. No decorative illustration competes with the information architecture.

The blue accent maintains consistent treatment: filled rectangles for primary buttons, small filled pills for badges like "POPULAR" or "FLEXIBLE", and underline indicators for active navigation. This restraint makes the color more powerful when it appears.

Surface elevation is subtle. Cards and panels use slightly lighter backgrounds (#080808 against #000000 canvas) rather than shadows. The border color #333333 provides definition without glow or blur effects.

## Components

### Primary button

- **Anatomy**: Text label centered within a filled rectangular container
- **Surface**: Background #146EF5, text #FFFFFF
- **Typography**: `{typography.button}` — 1rem, weight 500, letter-spacing -0.01em
- **Shape**: Border radius 0.25rem, no border
- **Spacing**: Padding 1rem vertical, 1.5rem horizontal
- **Composition**: Typically appears in pairs with secondary button, or alone in card footers
- **Variants**: Full-width in pricing cards; auto-width in hero sections

### Secondary button

- **Anatomy**: Text label centered within a filled rectangular container
- **Surface**: Background #363636, text #FFFFFF
- **Typography**: `{typography.button}`
- **Shape**: Border radius 0.25rem
- **Spacing**: Padding matches primary button
- **Composition**: Appears adjacent to primary button with 0.75rem gap

### Pricing card

- **Anatomy**: Plan name, optional badge, description, price block, primary button, feature list with category headers
- **Surface**: Background #080808, border #333333 on relevant sides
- **Typography**: Plan name uses `{typography.pricing-value}` or larger display size; description uses `{typography.body}`; feature list uses `{typography.body}` with `{typography.micro-label}` for category headers
- **Shape**: Border radius 0.5rem
- **Spacing**: Internal padding approximately 1.5rem; feature rows separated by 1px horizontal rules
- **Composition**: Vertical stack with consistent left alignment; price prominently displayed above button; feature list scrolls below fold on shorter viewports
- **Variants**: "Popular" and "Flexible" badge variants with small filled pill in upper right

### Navigation dropdown

- **Anatomy**: Trigger link, expanded panel with categorized link lists, optional promotional card
- **Surface**: Panel background matches canvas or slightly elevated surface; promotional card contains image with rounded corners
- **Typography**: Category headers use `{typography.feature-headline}` at smaller size; links use `{typography.navigation}`
- **Shape**: Full-width panel below navigation bar
- **Spacing**: Generous internal padding, approximately 3rem vertical; link lists organized in columns with 1.5rem gaps
- **Composition**: Left side holds categorized navigation links; right side holds promotional content with image, headline, description, and arrow link

### Feature table row

- **Anatomy**: Feature label left, inclusion indicator or value right; category header rows span full width
- **Surface**: Transparent background; 1px top border #333333
- **Typography**: Feature name uses `{typography.body}`; category header uses `{typography.micro-label}` in muted ink
- **Spacing**: Vertical padding approximately 0.75rem per row
- **Composition**: Label left-aligned; indicator right-aligned; information icon inline with label when present

### Hero section

- **Anatomy**: Display headline, supporting paragraph, button group, optional social proof strip
- **Surface**: Canvas background #000000
- **Typography**: Headline uses `{typography.hero-display}`; paragraph uses `{typography.body-large}`
- **Spacing**: Generous vertical padding, approximately 6rem or more; headline to paragraph gap approximately 1.5rem; paragraph to buttons gap approximately 2rem
- **Composition**: Left-aligned text block occupies roughly half width; partner logo strip spans full width above or below

## Responsive behavior

The design system appears optimized for desktop presentation, with the pricing page showing complex multi-column layouts that would require significant reorganization at narrower widths. The following adaptations are recommended:

- Pricing cards should stack vertically below approximately 1024px, maintaining full-width cards with internal feature lists collapsed behind "Show features" toggles
- Navigation dropdowns should convert to full-screen overlays on mobile, preserving category groupings but stacking vertically
- Hero display size should reduce to `{typography.section-display}` below 768px, maintaining readability without excessive line breaks
- Partner logo strips should scroll horizontally or wrap to multiple rows
- Feature comparison tables should transform to card-based layouts, with each plan's features listed independently rather than in aligned rows

## Practical implementation guidance

### Preserve
- The absolute black canvas as the default background; do not introduce gray page backgrounds
- The single typeface approach; Wf Visual Sans carries all weight from micro-label to hero display
- The tight line-height on display text (1.04); this is intentional and characteristic
- The restrained use of blue; limit to buttons, active states, and small badges
- The 1px hairline borders in #333333 for structural separation

### Avoid
- Introducing additional accent colors; the system derives energy from monochrome restraint punctuated by blue
- Using shadows for elevation; rely on background color shifts and borders
- Rounding corners beyond 0.5rem; the system favors slight rounding over pill shapes except for small badges
- Center-aligning body text; left alignment dominates even in centered containers

### Recommended build order
1. Establish the dark canvas and typography scale with Wf Visual Sans
2. Implement the button system with primary and secondary variants
3. Build the pricing card component with internal spacing and feature list pattern
4. Create the navigation shell with dropdown behavior
5. Add the hero section with display typography and button pairing
6. Implement feature table rows with border rhythm and information icons

### Accessibility
- Ensure white text on black backgrounds meets WCAG contrast ratios; the #FFFFFF on #000000 combination exceeds requirements
- The muted ink #ABABAB on #000000 should be verified for small text compliance; consider lightening to #B0B0B0 if necessary
- Blue buttons should maintain sufficient contrast; #146EF5 on white text passes standard thresholds
- Focus indicators should be visible against dark backgrounds; consider light outlines or offset shadows
- Pricing feature lists with information icons should have accessible labels or expanded descriptions available

## Scope note

This guide covers the pricing page and related marketing surfaces visible in the supplied images.Motion behavior, form interactions, mobile navigation patterns, and checkout flows are not described. The spacing and sizing values reflect desktop presentation; responsive adaptations are recommended targets rather than verified implementations.
