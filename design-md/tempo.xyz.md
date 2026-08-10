# How tempo.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tempo.xyz-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with light background, dark primary button, and dense diagonal transaction log texture on the right half](https://pin.fontofweb.com/5486?format=jpg)](https://design.withfudge.com/share/pin-5486)

[Homepage hero with light background, dark primary button, and dense diagonal transaction log texture on the right half](https://design.withfudge.com/share/pin-5486)

[![Homepage hero in dark mode with inverted button colors and the same diagonal transaction texture](https://pin.fontofweb.com/5485?format=jpg)](https://design.withfudge.com/share/pin-5485)

[Homepage hero in dark mode with inverted button colors and the same diagonal transaction texture](https://design.withfudge.com/share/pin-5485)

[![Lower homepage section showing stablecoin messaging with angled transaction stream and dark bottom banner](https://pin.fontofweb.com/5484?format=jpg)](https://design.withfudge.com/share/pin-5484)

[Lower homepage section showing stablecoin messaging with angled transaction stream and dark bottom banner](https://design.withfudge.com/share/pin-5484)

[![Infrastructure partners page with large serif headline, partner logo grid, and light warm-gray background](https://pin.fontofweb.com/3442?format=jpg)](https://design.withfudge.com/share/pin-3442)

[Infrastructure partners page with large serif headline, partner logo grid, and light warm-gray background](https://design.withfudge.com/share/pin-3442)

## Overview

Tempo presents itself as a payments-focused blockchain infrastructure company through a deliberately restrained visual system. The design alternates between light and dark modes with confidence, using pure black and white as its anchors rather than softened neutrals. Editorial sensibility comes through in the display typography: a high-contrast serif with sharp, almost engraved details that feels borrowed from financial print tradition. Against this, the interface layer remains strictly utilitarian—clean sans-serif navigation, compact label-style buttons, and generous whitespace that lets the typography breathe.

The most distinctive visual element is a dense, diagonal texture of transaction data that slices across the right portion of hero sections. This stream of monospace characters, hashes, and amounts creates a sense of velocity and technical depth without relying on illustration or photography. The overall impression is one of institutional seriousness mixed with contemporary tech minimalism: a system built for developers and financial decision-makers who value clarity over ornament.

## Colors

The palette is intentionally austere, built on a binary of pure black and white with a single warm gray for secondary surfaces. This restraint supports the brand's positioning as infrastructure—reliable, unembellished, focused on function.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, dark mode backgrounds, primary button fills, logo mark |
| canvas | #FFFFFF | Light mode backgrounds, dark mode text, primary button labels |
| muted-ink | #171717 | Announcement bar background, subtle dark surfaces, footer areas |
| surface-warm | #E8E8E6 | Secondary page backgrounds, partner grid cards, elevated panels |
| border-subtle | #D4D4D4 | Hairline dividers, secondary button borders, rule lines |

The light mode dominates marketing pages: white canvas with black ink text. Dark mode inverts this cleanly—black backgrounds with white text—while preserving the same typographic hierarchy and component structure. The warm gray appears selectively on content-heavy pages like the infrastructure partners listing, where it provides gentle separation between partner logos without introducing color. No accent colors appear in the interface; the only chromatic variation comes from photography or external partner brand assets.

## Typography

Four type families create a clear hierarchy between editorial voice and functional interface. The display serif carries brand personality; the sans-serif handles all interface and body text; the monospace family serves data-dense contexts. The supplied families include Exposure 0, Exposure Trial, Inter, and Söhne Mono-Buch.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Exposure 0 | 4rem | 400 | 1 | -0.02em | Homepage hero headlines, major page titles |
| section-display | Exposure 0 | 2.5rem | 400 | 1.1 | -0.01em | Section headings, feature callouts |
| body | Inter | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, general content |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Captions, metadata, secondary descriptions |
| label | Inter | 0.75rem | 500 | 1.2 | 0.02em | Button text, tags, category labels |
| navigation | Inter | 0.875rem | 400 | 1 | 0 | Header links, menu items |
| mono | Söhne Mono-Buch | 0.875rem | 400 | 1.4 | 0 | Transaction data, code snippets, technical values |

Exposure 0 and Exposure Trial, both designed by Federico Parra Barrios and available from 205 Tf, provide the editorial character. Their sharp serifs and tight spacing convey precision and establishment credibility. Inter, designed by Rasmus Andersson, handles all functional typography with neutral clarity. Söhne Mono-Buch, from Klim Type Foundry, serves the transaction stream texture and any technical data display. Verify licensing for these families before production use.

## Layout

The layout follows a split-composition logic on key pages: editorial content occupies the left portion while technical texture or data visualization fills the right. This asymmetry creates visual tension and reinforces the brand's dual identity—human-readable messaging alongside machine-scale throughput.

Content containers max out at 75rem with generous horizontal padding. The hero section on the homepage uses a two-zone composition: approximately 40% width for the headline, description, and call-to-action stack on the left, with the remaining 60% dedicated to the diagonal transaction texture. This texture begins at the top edge and extends to the bottom, angled at roughly 15 degrees, creating a sense of depth as if viewing a data stream from above.

Vertical rhythm is spacious. Major sections separate by 6rem, with internal component spacing built on a 0.25rem base unit. The header remains fixed and minimal: logo mark left, navigation links center-right, no background separation in light mode, subtle contrast in dark mode. A persistent announcement bar sits below the header on the homepage, carrying testnet launch messaging with an arrow link.

On content pages like the infrastructure partners listing, the layout shifts to a centered single-column format with a narrower reading measure for body text, approximately 50rem, while the headline expands to the full container width.

## Visual language

The signature visual element is the transaction stream: a dense field of monospace characters, hexadecimal addresses, amounts, and status indicators rendered at small scale, flowing diagonally across the right portion of hero sections. This texture uses the mono typography token at reduced opacity against the background, creating a watermark-like effect that suggests constant activity without competing with foreground content.

The stream's angle and density imply velocity and scale—thousands of transactions visible at once, stretching beyond the viewport edge. In light mode, the stream appears in dark gray against white; in dark mode, it inverts to light gray against black. The effect is photographic rather than animated: a frozen moment of data flow.

Photography and illustration are absent from the core interface. The only visual richness comes from type contrast and this data texture. Partner logos on the infrastructure page appear as monochrome or near-monochrome marks within uniform rectangular tiles, maintaining the system's chromatic restraint.

## Components

### Primary action button

- **Anatomy**: Text label with optional arrow icon, contained within a rounded rectangle
- **Surface**: Solid ink background in light mode, solid canvas background in dark mode
- **Typography**: Label token, uppercase or title-case depending on context
- **Shape**: 0.5rem border radius
- **Spacing**: Internal padding approximately 0.75rem vertical, 1.25rem horizontal
- **Composition**: Icon positioned to the right of text with small gap
- **Variants**: Light mode shows black fill with white text; dark mode inverts to white fill with black text

### Secondary action button

- **Anatomy**: Text label with optional arrow icon, transparent background with border
- **Surface**: Transparent fill, 1px border in border-subtle color
- **Typography**: Label token, matching primary button
- **Shape**: 0.5rem border radius, identical to primary
- **Spacing**: Same internal padding as primary
- **Composition**: Often paired immediately beside primary action with small gap
- **Variants**: Border visibility adjusts for mode; dark mode may use lighter border

### Announcement bar

- **Anatomy**: Full-width strip below header, containing text and link with arrow
- **Surface**: Muted-ink background, canvas text
- **Typography**: Body-small token
- **Spacing**: Compact vertical padding, approximately 0.5rem
- **Composition**: Text left-aligned, arrow link right-aligned or inline
- **States**: Collapsible or dismissible on interaction

### Partner logo tile

- **Anatomy**: Rectangular container with centered partner mark and name
- **Surface**: Slightly elevated from page background, using surface-warm
- **Typography**: Partner name in body-small or label token when displayed
- **Shape**: 0.75rem border radius
- **Spacing**: Internal padding creates breathing room around marks
- **Composition**: Arranged in responsive grid, four columns at desktop width
- **Variants**: Some tiles show logo only, others include wordmark

### Navigation header

- **Anatomy**: Logo mark with wordmark left, horizontal link list right
- **Surface**: Transparent, blending with page background
- **Typography**: Navigation token for links
- **Spacing**: Generous horizontal padding, comfortable target sizes
- **Composition**: Flex row with space-between alignment
- **Variants**: Minimal change between modes beyond color inversion

## Responsive behavior

The split hero composition likely collapses to single-column on narrower viewports, with the transaction stream either scaling down, repositioning to a horizontal band, or hiding entirely to prioritize the headline and call-to-action stack. The partner logo grid should reduce from four columns to two, then single column, maintaining tile proportions.

Typography scales down proportionally: the 4rem hero display should reduce to approximately 2.5rem on tablet and 2rem on mobile to prevent overflow. The section display token can serve as the mobile hero size. Body text remains at 1rem across breakpoints for readability.

The announcement bar may wrap to multiple lines on narrow screens, with the link moving below the primary message. Navigation likely collapses to a menu trigger, preserving the minimal header aesthetic.

## Practical implementation guidance

### Preserve
- The stark black-and-white binary; do not introduce brand colors that compete with this restraint
- The diagonal transaction stream as a signature element on primary landing pages
- The type hierarchy: serif for display, sans-serif for everything functional, monospace for data
- The generous whitespace around editorial content; the system feels premium because of what it excludes
- The warm gray surface for secondary pages that need subtle differentiation

### Avoid
- Adding accent colors to buttons or calls-to-action; the monochrome inversion is sufficient
- Using the display serif for body text or interface labels; it belongs at large sizes only
- Crowding the hero with additional imagery alongside the transaction stream
- Making the transaction stream too prominent; it should read as atmosphere, not content
- Rounding corners more aggressively than the 0.5rem button standard

### Recommended build order
1. Establish the color system with mode switching infrastructure
2. Implement the type hierarchy with all four families at their designated roles
3. Build the split hero composition with the transaction stream texture
4. Create the button system with mode-aware inversion
5. Construct the navigation header with transparent background behavior
6. Add the announcement bar component
7. Develop the partner grid and content page templates
8. Implement responsive scaling and collapse behaviors

### Accessibility
- Ensure the transaction stream texture meets contrast minimums as decorative content, or mark it as presentational
- Provide visible focus indicators on the monochrome buttons; the inversion alone may be insufficient
- Maintain touch target sizes of at least 44px for navigation and button elements
- Support reduced motion preferences; the transaction stream should not animate for users who request stillness
- Use semantic heading hierarchy with the display type sizes, ensuring the visual h1 maps to the structural h1

## Scope note

This guide covers the homepage hero, navigation system, announcement bar, and infrastructure partners page as visible in the supplied images. Footer content, additional interior pages, form interactions, loading states, and motion behavior are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px base unit. Mobile breakpoint behavior and detailed component states should be verified during implementation.
