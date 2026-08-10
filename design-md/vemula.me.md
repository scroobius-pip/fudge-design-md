# How vemula.me is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/vemula.me-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large serif headline, avatar inline with text, status indicator, and colorful project card strip at bottom](https://pin.fontofweb.com/4328?format=jpg)](https://design.withfudge.com/share/pin-4328)

[Hero section with large serif headline, avatar inline with text, status indicator, and colorful project card strip at bottom](https://design.withfudge.com/share/pin-4328)

[![Same hero layout showing full project card strip with cyan, dark teal, black, red, cream, orange, pink, blue, yellow, and gray cards](https://pin.fontofweb.com/4327?format=jpg)](https://design.withfudge.com/share/pin-4327)

[Same hero layout showing full project card strip with cyan, dark teal, black, red, cream, orange, pink, blue, yellow, and gray cards](https://design.withfudge.com/share/pin-4327)

## Overview

This design system captures a personal portfolio homepage that balances editorial elegance with playful color energy. The visual hierarchy leads with a large, confident serif headline that introduces the designer by name, embedding a circular avatar directly within the text flow for warmth and personality. Below this introduction, a status indicator grounds the page in present-tense activity. The lower portion of the viewport is dominated by a horizontal strip of project cards, each rendered as a bold color block with uppercase monospace labels. The overall impression is of a designer who values craft and clarity—sophisticated typography above, vibrant creative work below, with generous white space creating breathing room between these two zones.

## Colors

The palette operates in two registers: a restrained, high-contrast typographic zone and an exuberant, multicolored project zone.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headline color, card labels on light backgrounds |
| canvas | #FFFFFF | Page background, negative space, text on dark cards |
| accent-cyan | #00B4D8 | Status indicator dot, "STAX.AI" link, active state emphasis |
| accent-yellow | #FFD60A | Sparkle emoji accent, project card background (EMAIL card) |
| accent-orange | #FF6B35 | Project card background (SUBSTACK card), warm accent |

The interface relies on pure black for all reading text against a pure white ground, creating maximum contrast for the serif display type. The cyan accent functions as the sole interface color outside the project strip, marking the current employment status and providing a clickable destination. The project cards introduce a full spectrum of hues—cyan, dark teal, near-black, red, cream, orange, pink, blue, yellow, and gray—each card becoming its own miniature brand environment. These card colors are drawn from project imagery and identity work rather than a fixed product palette, making the strip feel like a curated gallery rather than a standardized component set.

## Typography

The type system pairs a refined serif for display and reading with a technical monospace for labels and navigation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Awesome Serif | 4rem | 400 | 1.1 | -0.02em | Main headline, name introduction |
| body | Awesome Serif | 1rem | 400 | 1.5 | 0 | Default paragraph text |
| label-mono | Gt Flexa Mono Trial | 0.75rem | 400 | 1.2 | 0.05em | Status badge, small captions |
| navigation-mono | Gt Flexa Mono Trial | 0.875rem | 400 | 1.2 | 0.02em | Project card labels, uppercase navigation |

Awesome Serif, designed by Nicky Laatz, supplies the site's voice—classical in structure but with enough warmth to feel personal rather than institutional. Its Regular weight carries the full headline without needing bold emphasis, letting scale and proximity create hierarchy. The negative tracking on the display size tightens the wordforms for impact at large sizes.

Gt Flexa Mono Trial, from Grilli Type (designer Dominik Huber Moire), provides structural contrast. Its monospace rhythm evokes technical documentation and design tools, appropriate for a product designer's portfolio. The uppercase treatment on project labels, combined with the font's even spacing, makes each card title feel like a category or destination rather than a sentence.

Verify licensing for these families before production use. The "Trial" designation on Gt Flexa Mono indicates it may require purchase for commercial deployment.

## Layout

The page follows a single-column, full-bleed structure with asymmetric internal alignment. The hero content occupies the upper left quadrant, leaving substantial empty canvas to the right and below. This negative space is not merely background—it is an active compositional element that isolates the introduction and creates anticipation for the content below.

The project card strip sits at the bottom edge, functioning as a horizontal scroll or fixed footer element. Cards appear to share equal height while varying in width, creating a rhythm of narrow and wide panels. The strip's bottom alignment grounds the page, while its horizontal extension beyond the viewport implies continuation and invites exploration.

Spacing follows a 4px base unit (0.25rem). Section padding appears generous, with the hero zone receiving roughly 6rem of top inset. Card internal padding is tight, approximately 1rem, keeping labels close to their colored surfaces. The gap between cards reads as 0.5rem, tight enough to read as a continuous band while preserving individual card identity.

## Visual language

The site's personality emerges from the tension between its two halves: the restrained, almost austere typography zone and the saturated, playful project zone. The inline avatar—rendered as a small circular photograph within the headline—humanizes the large serif type, preventing it from feeling like a magazine masthead. The yellow sparkle emoji performs similar work, adding a touch of informal enthusiasm that matches the "polishing ideas until they shine" message.

Project cards function as both navigation and preview. Each card's background color appears drawn from its project's own palette, making the strip a chromatic index of the designer's range. Labels sit in the upper-left corner of each card, consistently positioned regardless of background color, with text color inverting between black and white based on background luminance. The final gray card with oversized "Resume" typography breaks the pattern, suggesting a call-to-action or secondary destination with different visual weight.

No borders, shadows, or dimensional effects are visible on cards. The design relies entirely on color contrast and typographic hierarchy to separate elements, achieving a flat, contemporary materiality.

## Components

### Hero Headline

- **Anatomy**: Text string with two embedded inline elements—circular avatar image and sparkle emoji
- **Surface**: Transparent, sitting directly on white canvas
- **Typography**: `{typography.hero-display}`
- **Composition**: Left-aligned, maximum width approximately 85% of viewport; line breaks after "Charmin" and "shine" to create three-line stack
- **Spacing**: Generous top inset, tight leading between lines for display cohesion

### Status Badge

- **Anatomy**: Small filled circle (cyan) followed by text "Currently at" and linked "STAX.AI"
- **Surface**: Transparent
- **Typography**: `{typography.label-mono}` for full string; link receives same color as dot
- **Composition**: Inline flow, positioned below headline with moderate top margin
- **States**: Link state implied by color match to dot; no visible underline

### Project Card

- **Anatomy**: Colored rectangular panel with uppercase label in upper-left corner; some cards show partial imagery or pattern
- **Surface**: Solid color fill, varying per card; no border, no shadow
- **Typography**: `{typography.navigation-mono}`, uppercase, color inverting between `{colors.ink}` and `{colors.canvas}` based on background
- **Shape**: `{rounded.card}` corner radius
- **Spacing**: Internal padding approximately 1rem; external gap `{spacing.card-gap}`
- **Composition**: Horizontal strip, bottom-aligned; equal height, variable width; overflow implied beyond viewport
- **Variants**: Color-driven—each card's hue is content-derived rather than systematized; final card (gray/Resume) uses oversized display type instead of small label

### Card Strip Container

- **Anatomy**: Full-width horizontal band containing multiple project cards in sequence
- **Surface**: Transparent, allowing cards to sit directly on page canvas
- **Composition**: Bottom-aligned, edge-to-edge; cards touch or nearly touch viewport edges
- **Spacing**: No internal padding at strip level; card gaps handled by `{spacing.card-gap}`
- **Behavior**: Implied horizontal overflow with partial card visibility at right edge to suggest scrollability

## Responsive behavior

The horizontal card strip should scroll horizontally on narrow viewports or reflow to a vertical stack. If scrolling, preserve the bottom-edge anchoring and equal-height constraint. The headline should reduce in size on smaller screens, maintaining the inline avatar and emoji but allowing more natural line breaks. The generous upper negative space may compress on mobile, bringing the card strip closer to the introduction. Consider making the status badge a block element below the headline rather than inline when horizontal space is constrained.

## Practical implementation guidance

### Preserve
- The stark black-on-white typographic zone as the primary reading experience
- Inline avatar and emoji within the headline—these are not decorative but integral to the voice
- Color-derived project card backgrounds, treating each card as its own mini-brand
- Monospace uppercase labels as the consistent card treatment across all color variations

### Avoid
- Adding borders, shadows, or elevation to project cards—the flat color is the effect
- Systematizing card colors into a fixed palette; let content drive hue selection
- Bold weight on the serif headline; the Regular weight's elegance is sufficient
- Generic sans-serif substitutions for either font; the contrast between serif and monospace is essential

### Recommended build order
1. Establish the 4px spacing grid and white canvas
2. Implement Awesome Serif at display and body sizes with correct tracking
3. Build the headline component with inline avatar and emoji
4. Add the status badge with cyan dot and link
5. Create the project card component with variable background color and inverted text logic
6. Assemble the horizontal strip with consistent height and gap spacing
7. Test color contrast for all card background and label combinations

### Accessibility
- Ensure all project card label colors meet WCAG contrast minimums against their backgrounds; the cyan-on-white status badge should be verified
- Provide `aria-label` or visible text for the avatar image since it carries semantic content within the headline
- If cards are interactive, ensure focus indicators are visible against all background colors
- Consider reduced-motion preferences for any horizontal scroll behavior

## Scope note

This guide covers the homepage hero and project strip as visible in the supplied images. Navigation, interior pages, project detail views, contact forms, and footer content are not represented. Measurements are practical adaptation targets. Hover states, loading behavior, and mobile-specific layouts are not documented from the available material.
