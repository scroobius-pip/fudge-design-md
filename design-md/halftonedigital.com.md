# How halftonedigital.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/halftonedigital.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with coral CTA headline, dark teal background, and multi-column service links](https://pin.fontofweb.com/4419?format=jpg)](https://design.withfudge.com/share/pin-4419)

[Footer section with coral CTA headline, dark teal background, and multi-column service links](https://design.withfudge.com/share/pin-4419)

[![Our Approach section with mint green background, large office photograph, and coral pill button](https://pin.fontofweb.com/4418?format=jpg)](https://design.withfudge.com/share/pin-4418)

[Our Approach section with mint green background, large office photograph, and coral pill button](https://design.withfudge.com/share/pin-4418)

[![Team member cards with coral-tinted portrait photos, rounded borders, and arrow link rows](https://pin.fontofweb.com/4417?format=jpg)](https://design.withfudge.com/share/pin-4417)

[Team member cards with coral-tinted portrait photos, rounded borders, and arrow link rows](https://design.withfudge.com/share/pin-4417)

[![Trusted By logo bar with centered dark heading and grayscale client logos on light background](https://pin.fontofweb.com/4416?format=jpg)](https://design.withfudge.com/share/pin-4416)

[Trusted By logo bar with centered dark heading and grayscale client logos on light background](https://design.withfudge.com/share/pin-4416)

## Overview

Halftone Digital presents a confident, personality-forward creative agency aesthetic built on stark color blocking and typographic contrast. The system alternates between warm, inviting surfaces and deep, dramatic backgrounds to create visual rhythm across long-scrolling pages. Coral serves as the signature accent—appearing in call-to-action buttons, display headlines, and interactive highlights—while deep teal anchors footer sections and dramatic moments. Mint green provides an unexpected, fresh intermediate surface that breaks up the warm-cool tension. The overall impression is approachable professionalism with creative edge: condensed display type shouts key messages, while clean sans-serif body copy maintains readability. Rounded pill buttons and card corners soften the bold geometry, and arrow icons consistently signal interactive elements.

## Colors

| token | value | use |
|---|---|---|
| coral | `#FF8B7B` | Primary accent for CTAs, display headlines on dark backgrounds, interactive highlights, and social icons |
| deep-teal | `#0A2E33` | Footer backgrounds, dramatic section fills, and high-contrast moments |
| mint | `#B8E6E0` | Secondary section backgrounds, providing fresh contrast between warm and dark surfaces |
| off-white | `#F5F5F0` | Primary canvas, card backgrounds, and light sections |
| ink | `#1A1A1A` | Primary text on light surfaces, card borders, and logo display |
| muted-ink | `#4A4A4A` | Secondary text, captions, and supporting information |

The color strategy operates in three distinct modes. Light mode dominates: off-white canvas with ink text and coral accents for interactive elements. Dark mode appears selectively in the footer and dramatic CTA zones, where coral inverts to become the headline color against deep teal. Mint green functions as a transitional surface, appearing in content-heavy sections to refresh the eye without competing with photography. The coral-to-teal pairing creates maximum contrast for accessibility while maintaining brand warmth—coral carries energy and approachability, while deep teal grounds the composition with sophistication. No gradients appear in the interface; color fields are flat and decisive.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Anton | 4rem | 400 | 1 | -0.01em | Footer CTA headlines, major page statements |
| section-display | Anton | 3.5rem | 400 | 1.05 | -0.01em | Section headings like "OUR APPROACH", "THE DREAM TEAM" |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions |
| body-bold | Inter | 1rem | 700 | 1.6 | 0 | Emphasized inline text, subheadings |
| label | Inter | 0.875rem | 500 | 1.4 | 0.02em | Button text, category labels, contact details |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0.01em | Footer link columns, nav items |

The typographic system pairs a single condensed display face with a neutral sans-serif workhorse. Anton provides extreme horizontal compression and uppercase presence for section headings, creating immediate visual hierarchy through scale and density. Its tight leading and slight negative tracking maximize impact in large sizes. Inter handles all functional text with clarity and range, from body paragraphs to button labels to footer navigation.

Type scale steps follow a 4px grid, with display sizes at 56px and 64px, body at 16px, and labels at 14px. The contrast between display and functional type is severe—there is no intermediate heading size, which reinforces the system's bold, direct personality. Uppercase treatment is reserved for display type and button text only; body copy remains sentence case for readability.

Verify licensing for Anton and Inter before production use.

## Layout

The page employs a centered, contained layout with generous breathing room. Maximum content width sits at approximately 75rem, with sections padding inward from viewport edges. Vertical rhythm is established through large section gaps—typically 6rem between major zones—creating clear territorial boundaries without visible dividers.

Content sections alternate between full-bleed color fields and contained interior elements. The "Our Approach" section demonstrates this pattern: mint green fills the full viewport width, while an interior photograph and text block align to the centered content column. Photography breaks the grid intentionally, extending wider than text columns to create visual tension.

The footer compresses information densely while maintaining hierarchy. A five-column grid distributes service links beneath the main CTA, with category labels in coral and links in muted coral on deep teal. Social icons cluster above the acknowledgment text, separated from link columns by substantial vertical space.

Team cards use a two-column layout with equal-width containers, each holding a left-aligned portrait and right-aligned details. The card interior divides informally: image occupies roughly 40% width, text content the remainder, with a bottom row spanning full width for the action link.

## Visual language

Photography treatment is warm and human-centered, with portraits receiving a distinctive coral color wash that unifies team imagery with the brand palette. Environmental photography—such as the office interior—remains natural and documentary, providing authentic context without heavy processing. The coral tint on portraits is consistent and saturated, creating immediate brand recognition for team content.

Graphic elements are minimal but purposeful. A large asterisk mark appears in coral as a decorative accent near the footer CTA, scaling to display size and rotating slightly off-axis. Arrow icons accompany every button and card link, angled upward-right to suggest forward momentum. Social icons use simple filled squares in coral, matching the button aesthetic.

Border treatments are decisive: team cards carry 2px solid ink borders with 1rem corner radius, creating a sticker-like quality that separates content from the off-white canvas. Buttons eliminate borders entirely, relying on solid coral fill with rounded pill shape for definition. No shadows appear in the interface; depth is created through color contrast and scale alone.

The logo bar demonstrates restraint—grayscale client marks on off-white, separated by thin vertical rules, with no hover states visible. This neutrality lets the agency's own color system dominate while conveying established credibility.

## Components

### Primary Button

- **Anatomy**: Solid fill container with centered text label and trailing arrow icon
- **Surface**: Coral background (`{colors.coral}`) with deep teal text on dark backgrounds, or deep teal text inferred for light backgrounds
- **Typography**: Label token, uppercase, medium weight
- **Shape**: Full pill radius (`{rounded.pill}`), generous horizontal padding (1.5rem), comfortable vertical padding (0.75rem)
- **Spacing**: Typically appears below display headings with 1.5rem to 2rem separation
- **Composition**: Arrow icon sits inline after text, matching text color, with slight baseline offset
- **Variants**: On dark backgrounds, text inverts to deep teal; on light backgrounds, coral fill with dark text

### Team Card

- **Anatomy**: Rounded rectangle containing left portrait, right text block, and bottom action row
- **Surface**: Off-white fill (`{colors.off-white}`) with 2px ink border (`{colors.ink}`)
- **Typography**: Name in section-display token at reduced size (approximately 1.5rem), role in muted-ink label, contact details in body size
- **Shape**: 1rem corner radius (`{rounded.card}`)
- **Spacing**: Internal padding approximately 1.5rem; portrait inset with slight margin from card edge
- **Composition**: Portrait occupies left portion with rounded corners; text aligns left with generous line spacing; bottom row spans full width with "MEET [NAME]" label left and arrow icon right
- **States**: Arrow icon implies hover interaction; no visible pressed or disabled state

### Footer CTA

- **Anatomy**: Centered display heading with supporting button, decorative asterisk, and full-width footer content below
- **Surface**: Deep teal background (`{colors.deep-teal}`) with coral text (`{colors.coral}`)
- **Typography**: Hero-display token for headline, centered; label token for button
- **Shape**: Button uses pill radius; asterisk mark is free-floating, scaled large, slightly rotated
- **Spacing**: Generous vertical padding (approximately 6rem) above footer links; substantial gap between headline and button
- **Composition**: Asymmetric balance with asterisk positioned upper right, headline centered, button centered below

### Service Link Column

- **Anatomy**: Stacked category label with 4-5 links beneath
- **Surface**: Transparent on deep teal background
- **Typography**: Category label in coral, uppercase, medium weight; links in muted coral or lighter teal tone
- **Spacing**: Tight vertical stacking with approximately 0.5rem between links; columns evenly distributed across footer width
- **Composition**: Five columns spanning full content width, left-aligned text within each

## Responsive behavior

The layout appears optimized for desktop viewing with substantial horizontal space. On narrower viewports, the five-column footer grid should collapse to two columns and then single column, maintaining category grouping. Team cards would stack vertically, with portrait and text potentially reorganizing to vertical layout. The "Our Approach" section's side-by-side heading and body text would likely stack, with heading above and body below. Photography should maintain aspect ratio, scaling to full width on mobile with contained margins. Button text should remain single-line where possible; pill buttons may need padding reduction on small screens. The display type scale should reduce proportionally—hero-display potentially to 2.5rem on mobile—to maintain fit without excessive wrapping.

## Practical implementation guidance

### Preserve
- The stark coral-on-teal and coral-on-off-white contrast pairings; these define brand recognition
- Condensed display type for section headings; do not substitute with wider or lighter weights
- Consistent arrow iconography on all interactive elements
- Coral color wash on team portraits for unified brand photography
- Full pill buttons with generous horizontal padding; avoid squarish or slightly rounded alternatives
- The alternating section rhythm: light, mint, dark, with photography breaking containment

### Avoid
- Adding drop shadows to cards or buttons; the system relies on flat color and border definition
- Using coral for body text or long-form reading; reserve for accents, buttons, and display headlines
- Introducing additional accent colors; the palette is intentionally constrained to coral, teal, mint, and neutrals
- Rounding card corners beyond 1rem or below 0.75rem; the current radius creates deliberate sticker-like quality
- Centering body text; left alignment maintains the system's direct, confident tone

### Recommended build order
1. Establish color tokens and apply to body background (off-white) and text (ink)
2. Implement display typography with Anton for headings, Inter for body
3. Build primary button component with pill shape, coral fill, and arrow icon
4. Create section containers with alternating background colors and consistent vertical padding
5. Implement team card with border, rounded corners, and internal two-column layout
6. Build footer with deep teal background, centered CTA, and multi-column link grid
7. Add photography treatment pipeline for consistent coral tint on portraits

### Accessibility
- Ensure coral on deep teal meets WCAG AA contrast for large text; verify with tooling
- Provide focus indicators for pill buttons and card links; default browser outlines may clash with rounded shapes
- Maintain semantic heading hierarchy despite visual size similarities; hero-display should map to h1, section-display to h2
- Arrow icons should have accessible labels or aria-hidden treatment with visible text
- Footer link columns should use semantic lists for screen reader navigation

## Scope note

This guide covers the homepage surface visible in supplied images: hero-adjacent sections, team presentation, client logo bar, and footer with service links and CTA. Navigation header, mobile layouts, form interactions, and interior pages are not represented. Measurements are practical adaptation targets derived from visual inspection. Motion, hover states, and loading behavior are not documented.
