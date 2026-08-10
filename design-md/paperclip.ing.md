# How paperclip.ing is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/paperclip.ing-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large serif headline over illustrated pink flamingos and floating pill navigation bar](https://pin.fontofweb.com/8403?format=jpg)](https://design.withfudge.com/share/pin-8403)

[Hero section with large serif headline over illustrated pink flamingos and floating pill navigation bar](https://design.withfudge.com/share/pin-8403)

[![Features grid with nine bordered cards, small icons, and section heading in serif type](https://pin.fontofweb.com/8404?format=jpg)](https://design.withfudge.com/share/pin-8404)

[Features grid with nine bordered cards, small icons, and section heading in serif type](https://design.withfudge.com/share/pin-8404)

[![Bring your own bot section with org-chart diagram and agent integration icons](https://pin.fontofweb.com/8405?format=jpg)](https://design.withfudge.com/share/pin-8405)

[Bring your own bot section with org-chart diagram and agent integration icons](https://design.withfudge.com/share/pin-8405)

## Overview

Paperclip presents itself as an open-source orchestration platform for autonomous companies, and its visual language communicates this through a deliberate tension between editorial warmth and technical precision. The design centers on a hero area dominated by an expressive illustration—pink flamingos in flight against a gradient sky—that immediately signals creative confidence rather than typical SaaS sterility. Above this artwork floats a pill-shaped navigation bar with frosted translucency, grounding the page in contemporary UI patterns while letting the illustration breathe.

The type system pairs Instrument Serif for display headings with Inter for all interface text, creating a clear hierarchy between poetic brand moments and functional readability. Color is restrained: near-black ink on warm off-white canvas, with stone-gray surfaces providing subtle depth. The overall impression is of a tool sophisticated enough for technical users yet approachable enough to invite exploration. Sections flow vertically with generous breathing room, alternating between full-bleed illustrated moments and contained content areas with bordered cards and grid layouts.

## Colors

The palette is intentionally narrow, relying on temperature and luminance rather than hue to create hierarchy. Warm stone tones provide surface differentiation while near-black ink ensures crisp readability.

| token | hex | use |
|---|---|---|
| ink | #1A1A1A | Primary text, headings, primary button fill |
| ink-secondary | #4A4A4A | Secondary text, muted labels |
| muted | #888880 | Body copy in feature descriptions, captions |
| canvas | #FFFFFF | Page background, card surfaces, button text on dark |
| surface | #F5F3F0 | Label pill backgrounds, subtle UI chrome |
| surface-warm | #F0ECE7 | Navigation bar background, elevated surfaces |
| border | #E0DCD6 | Card borders, dividers, hairline rules |
| border-nav | #FFFFFF | Navigation bar border for frosted edge |

The light mode dominates entirely. Dark accents appear only as the primary button fill and occasional background blocks for emphasis. The hero illustration introduces saturated color—cyan skies, magenta birds, pale yellow clouds—but these remain strictly photographic, contained within the artwork and never bleeding into UI elements. This separation keeps the interface calm while allowing the brand illustration to carry emotional weight. No dark mode is visible in the supplied material.

## Typography

Two families serve distinct roles: Instrument Serif provides editorial personality for headlines, while Inter handles all functional text with neutral clarity. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif | 4.5rem | 400 | 1.15 | -0.01em | Hero headline, page title |
| section-display | Instrument Serif | 2.8rem | 400 | 1.15 | -0.01em | Section headings |
| body | Inter | 1rem | 400 | 1.6 | normal | Paragraphs, navigation, general UI |
| body-small | Inter | 0.9375rem | 400 | 1.6 | normal | Feature descriptions, secondary copy |
| label | Inter | 0.8rem | 500 | 1.6 | normal | Buttons, pills, tags, category labels |
| caption | Inter | 0.68rem | 400 | 1.3 | normal | Small metadata, fine print |
| subhead | Inter | 1.05rem | 600 | 1.6 | normal | Card titles, feature names |

Instrument Serif appears only at display sizes with negative tracking, giving headlines a tight, magazine-like quality. Inter spans a wider range of sizes and weights, from semibold subheads to small captions. The 1.6 line height on body text creates comfortable reading density without excessive looseness. No italic or bold variants of Instrument Serif are used in the visible material.

## Layout

The page follows a single-column flow with centered content bands. Maximum content width appears constrained to a readable measure, with generous horizontal padding creating breathing room on wider viewports.

The hero section occupies full viewport height, with the illustration serving as background and content overlaid at the bottom third. A subtle gradient or fade transitions from the illustrated area to solid white, allowing the headline to sit cleanly without legibility concerns. The navigation bar floats independently, centered horizontally near the top, with its own internal flex layout distributing links, brand mark, and action button.

Below the hero, sections alternate between full-width atmospheric moments and contained content areas. The features grid uses a strict three-column layout with equal-width cards separated by shared borders—each internal edge serves adjacent cards simultaneously, creating a unified table-like appearance rather than individual floating panels.

Vertical rhythm is established through section spacing of approximately 5rem between major content bands. Internal spacing within cards uses 1.75rem padding, while text blocks maintain 1.5rem gaps between related elements. The org chart section in the lower portion uses asymmetric two-column layout, with explanatory text on the left and the diagram on the right, breaking the centered pattern for narrative variety.

## Visual language

The aesthetic balances editorial sophistication with startup directness. The flamingo illustration is the most distinctive visual element—stylized, retro-printed, and confidently colorful against the restrained interface. This single image carries the brand's personality, allowing all surrounding UI to remain minimal and functional.

Iconography throughout is thin-line and monochrome, appearing at small sizes within feature cards and as integration logos. The agent icons—OpenClaw, Claude, Codex, Cursor, Bash—use simple geometric marks in muted gray, never competing with the headline illustration.

Border treatments are precise and omnipresent. Cards share 1px solid borders in warm gray, with 0.625rem corner radius softening the geometry without becoming friendly-rounded. The navigation bar uses a larger 2.375rem radius for its pill shape, with an additional 1px white border creating a subtle frosted-glass edge effect. Buttons are fully pill-shaped at 100px radius or 50% of their height.

Shadow appears minimally: the navigation bar carries a soft ambient shadow for elevation, and no other elements appear to float significantly above the page plane. This flatness reinforces the editorial, print-like quality of the design.

## Components

### Navigation bar

A floating pill-shaped container centered near the top of the viewport. Contains left-aligned links (Docs, GitHub), center-aligned brand mark with paperclip icon and wordmark, and right-aligned star button.

- **Surface**: Background in surface-warm with 1px white border and subtle shadow
- **Shape**: 2.375rem border radius, full pill
- **Typography**: Body token for links, label token for button
- **Spacing**: Horizontal padding of 1.75rem, internal gap distributed by flex alignment
- **Composition**: Fixed or sticky positioning, centered horizontally with viewport margins

### Hero section

Full-viewport-height introduction with illustrated background and overlaid text.

- **Anatomy**: Background illustration, gradient fade overlay, centered headline group, dual-button row
- **Typography**: Hero-display for main headline, body for subtitle
- **Surface**: Illustration provides all color; text sits on faded lower portion
- **Spacing**: Headline to subtitle approximately 0.75rem, subtitle to buttons approximately 1.5rem
- **Composition**: Text centered horizontally, positioned in lower third of viewport

### Section label pill

Small rounded tag preceding major headings.

- **Surface**: Background in surface, text in ink
- **Shape**: Full pill radius
- **Typography**: Label token
- **Spacing**: Padding of 0.32rem vertical, 0.88rem horizontal; margin below of 1.5rem
- **Use**: Category markers like "Features" or "Bring Your Own Agent"

### Feature card

Contained within a larger bordered grid, each card holds an icon, title, and description.

- **Surface**: Background in canvas, 1px border in border color
- **Shape**: 0.625rem radius at outer corners of the overall grid; internal cards share edges
- **Typography**: Subhead token for title, body-small for description
- **Spacing**: 1.75rem padding, icon to title approximately 1rem, title to description approximately 0.5rem
- **Composition**: Icon top-left, text below, left-aligned

### Primary button

Solid dark action element.

- **Surface**: Background in ink, text in canvas
- **Shape**: Full pill radius
- **Typography**: Label token
- **Spacing**: Padding of 0.8rem vertical, 2rem horizontal

### Secondary button

Outlined alternative with lighter presence.

- **Surface**: Background in canvas, text in ink-secondary, 1px border in border
- **Shape**: Full pill radius
- **Typography**: Label token
- **Spacing**: Same padding as primary button
- **States**: Visible with external link arrow icon

### Org chart diagram

Illustrative component showing hierarchical agent relationships.

- **Surface**: Cards in canvas with subtle borders, connecting lines in muted gray
- **Typography**: Small labels for roles and agent names
- **Composition**: Tree structure with CEO at top, branching to CMO/CTO/COO, further branching to engineer roles
- **Spacing**: Generous internal padding within each node, consistent connector lengths

## Responsive behavior

The supplied images show only desktop layout. Based on visible patterns, the following responsive adaptations are recommended:

The three-column features grid should collapse to two columns on tablet viewports and single column on mobile, maintaining the shared-border pattern where adjacent cards touch. The hero headline at 4.5rem should scale down to approximately 2.5rem on narrow viewports to prevent overflow. The floating navigation bar may need to condense to a hamburger menu or scroll horizontally on very narrow screens, as its current five-element layout requires substantial width.

The asymmetric two-column org chart section should stack vertically on mobile, with the diagram following the explanatory text. Illustration-based sections should maintain full bleed but may require adjusted focal points if the artwork is cropped.

## Practical implementation guidance

### Preserve
- The sharp contrast between Instrument Serif headlines and Inter body text; this pairing is the core brand expression
- The warm stone palette; replacing these with pure grays would lose the editorial warmth
- The full-bleed illustrated hero with gradient fade; this is the page's most memorable moment
- The shared-border card grid; individual card shadows would break the table-like precision

### Avoid
- Adding saturated colors to UI elements; let the illustration carry all chromatic energy
- Rounding corners more than specified; the 0.625rem card radius is intentionally restrained
- Using Instrument Serif at small sizes or for body text; it functions only as display type
- Heavy drop shadows on cards; the design achieves depth through borders and spacing instead

### Recommended build order
1. Establish the type system with both families at specified sizes and weights
2. Implement the hero section with illustration, gradient overlay, and centered text
3. Build the floating navigation pill with proper border, shadow, and internal flex layout
4. Create the features grid with shared borders and three-column logic
5. Add section label pills and button components
6. Implement the org chart section with asymmetric layout
7. Apply responsive breakpoints for grid collapse and type scaling

### Accessibility
- Ensure the hero illustration has appropriate alt text describing the flamingo scene
- Verify that text over the illustration meets contrast requirements; the gradient fade should provide sufficient coverage
- Maintain focus indicators on the pill-shaped buttons and navigation links
- The muted body text at #888880 on white should be checked against WCAG AA standards for small text; consider darkening to #767676 if it falls short

## Scope note

This guide covers the landing page hero, features grid, and org chart sections visible in the supplied material. Footer content, additional interior pages, mobile layouts, and interactive states such as hover, focus, loading, or error conditions are not represented. Motion, animation, and dark mode variants are not documented. Measurements are drawn from the exact values provided.
