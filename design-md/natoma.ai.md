# How natoma.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/natoma.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Light gray section with verified MCP server icons grid and mint green CTA banner with dark display text](https://pin.fontofweb.com/7711?format=jpg)](https://design.withfudge.com/share/pin-7711)

[Light gray section with verified MCP server icons grid and mint green CTA banner with dark display text](https://design.withfudge.com/share/pin-7711)

[![Dark mode feature section with 3D auth illustration and four feature cards with mint green accents](https://pin.fontofweb.com/7710?format=jpg)](https://design.withfudge.com/share/pin-7710)

[Dark mode feature section with 3D auth illustration and four feature cards with mint green accents](https://design.withfudge.com/share/pin-7710)

[![Hero section with mint gradient background, product dashboard screenshot, and black pill CTA button](https://pin.fontofweb.com/7709?format=jpg)](https://design.withfudge.com/share/pin-7709)

[Hero section with mint gradient background, product dashboard screenshot, and black pill CTA button](https://design.withfudge.com/share/pin-7709)

## Overview

Natoma's design system serves an enterprise MCP gateway platform, balancing technical credibility with approachable clarity. The visual language operates across two distinct modes: a light, airy mint-tinted hero experience that suggests freshness and innovation, and a deep, immersive dark mode for product feature storytelling. This dual-mode approach lets the brand shift from welcoming introduction to serious infrastructure discussion without losing coherence.

The system relies on restrained color deployment—mint green functions as the singular accent against near-black and clean white surfaces. Typography is exclusively Inter for all content, with system sans-serif reserved for micro-labels and navigation metadata. Component shapes favor generous rounding on primary containers and full pill shapes for calls-to-action, creating a friendly but precise character appropriate for developer tooling. The overall impression is of a mature product that does not need visual noise to prove its sophistication.

## Colors

| token | value | use |
|---|---|---|
| action | #7AF1A7 | Primary accent for highlights, active states, and key visual moments |
| action-muted | #B8F7CF | Subtle mint tint for gradients and hover backgrounds |
| ink | #171717 | Primary text on light surfaces, dark section backgrounds |
| ink-secondary | #262626 | Secondary text, card backgrounds in dark mode |
| muted-ink | #0A0A0A | Deepest black for maximum contrast elements |
| canvas | #F0FDF4 | Hero gradient base, lightest mint wash |
| surface | #FFFFFF | Primary content backgrounds, cards in light mode |
| surface-alt | #F4F4F4 | Alternate light background, icon tile fills |
| border | #E5E5E5 | Subtle dividers and hairline separators |
| border-subtle | #000000 | Shadow color, overlay scrims |

The color strategy centers on mint green as the sole brand accent against a near-monochrome foundation. Light mode dominates the top of the experience: a soft mint gradient washes across the hero, transitioning from #F0FDF4 toward white, creating an ethereal, forward-looking atmosphere. Dark mode inverts this completely—deep charcoal and near-black surfaces (#171717, #262626) let the mint accent pop with electric clarity when it appears in headlines, badges, or icon highlights.

The mint accent serves multiple functional roles: it signals interactive elements, marks "new" or featured states in navigation, and provides the emotional core of the brand. On dark backgrounds, #7AF1A7 maintains excellent perceptual brightness without the harshness of pure neon. The gradient from #F0FDF4 to transparent, used as a fade overlay, allows content to emerge smoothly from the mint atmosphere without hard edges.

Photographic and illustrative content follows a controlled palette—3D renders use desaturated whites and soft grays with selective mint accents, while icon grids present partner brands in their native colors against rounded white tiles. This restraint prevents visual chaos despite high information density.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 600 | 1.33 | -0.04em | Page headlines, hero statements |
| section-display | Inter | 2.5rem | 500 | 1.2 | -0.005em | Section headings, feature titles |
| body | Inter | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions |
| body-large | Inter | 1.5rem | 400 | 1.4 | -0.017em | Lead paragraphs, introductory copy |
| label | Inter | 1.25rem | 500 | 1.2 | 0em | Card titles, feature labels |
| navigation | System-Sansserif | 0.75rem | 400 | 1 | 0em | Nav links, metadata, small labels |
| legal-copy | Inter | 0.875rem | 400 | 1.43 | 0em | Captions, fine print |

Inter carries the full typographic load at weights 400, 500, and 600. The hero-display token at 48px with -2px letter spacing creates tight, confident headlines that anchor each section. Section-display at 40px with minimal tracking provides hierarchy without competing. Body sizes scale from 14px for dense feature descriptions to 24px for introductory statements that need breathing room.

The navigation token uses system sans-serif at 12px, creating deliberate contrast with Inter's more refined proportions. This functional separation helps users scan structural elements differently from content. Line heights stay tight for display sizes—64px on 48px headlines—while body copy relaxes to 1.5 for readability.

Verify licensing for these families before production use.

## Layout

The page architecture follows a full-bleed sectional rhythm with generous vertical padding. Major sections carry 148px top and bottom padding with 64px horizontal gutters, creating substantial breathing room that signals enterprise confidence. Content max-widths appear to center around a comfortable reading measure, with asymmetric compositions in the hero placing text left and product imagery right.

The hero section establishes the spatial vocabulary: large display text left-aligned with ample negative space, a prominent pill CTA below, and a floating product screenshot angled into the right portion of the frame. This diagonal energy breaks the rigid grid without sacrificing clarity. Below, a logo bar sits in a tighter band, followed by alternating light and dark sections that create visual rhythm through the scroll.

Dark sections reverse the spatial logic—content often centers or distributes across multi-column card grids. Feature cards in dark mode use internal padding of 24px, with icon tiles and text blocks arranged in clear two-by-two or three-column formations. The 3D illustration in the "Skip the auth complexity" section occupies roughly half the horizontal space, with text and supporting cards filling the remainder.

Spacing tokens derive from a 4px base unit. Key values include 8px for tight internal gaps, 16px for component padding, 24px for card interiors, 32px for button padding, 64px for horizontal section margins, 128px for large vertical offsets, and 148px for primary section padding. Border radius follows three scales: 10px for small cards, 24px for panels and containers, and 9999px for pill buttons and badges.

## Visual language

The visual identity balances technical precision with organic warmth. The mint green accent—neither clinical blue nor aggressive neon—positions the brand in a growing but still differentiated space. 3D illustrations use soft, rounded forms with subtle surface reflections, avoiding the flat vector aesthetic common in developer tools. This tactile quality suggests infrastructure that is robust but not brittle.

Iconography in the partner grid uses rounded-square containers (approximately 24px radius) with white fills, letting colorful brand marks sit cleanly against the light gray background. The grid itself flows horizontally with consistent gaps, suggesting abundance without overwhelming. In dark sections, icons invert to line-art or mint-tinted solids against charcoal tiles.

Shadows are minimal but present: a soft ambient shadow (rgba(0,0,0,0.1) at 0px 1px 48px -8px) lifts the product screenshot in the hero, while a more complex layered shadow creates depth on floating elements. The gradient overlay from #F0FDF4 to transparent, positioned at the bottom of light sections, creates a gentle content fade that eases transitions between modes.

Motion is implied through the interface screenshots—connection lines, status indicators, and data tables suggest live systems. The static design captures this through careful alignment and spacing that implies activity without literal animation.

## Components

### Primary button
- Anatomy: Text label with right-pointing arrow icon, full pill shape
- Surface: Solid #171717 fill on light backgrounds; mint or white fill possible on dark
- Typography: navigation token, white text
- Shape: 9999px border radius, 16px vertical padding, 24px horizontal padding (32px on left for arrow balance)
- Spacing: Sits below headlines with 24px–32px margin
- Composition: Inline-flex with icon trailing; arrow suggests forward motion

### Feature card (dark mode)
- Anatomy: Icon tile, headline, description paragraph; optional status badge
- Surface: #262626 background, subtle rounding
- Typography: label token for headline, body token for description (white text)
- Shape: 10px–24px border radius depending on context
- Spacing: 24px internal padding, 16px–24px between elements
- Composition: Stacked vertically; icon tile may be large (illustration) or small (glyph)

### Icon tile
- Anatomy: Rounded square container with centered brand icon or custom glyph
- Surface: #FFFFFF fill in light mode, #262626 or transparent in dark mode
- Shape: 24px border radius, consistent 1:1 aspect ratio
- Composition: Grid-aligned with 8px–16px gaps; may scale to large feature illustration

### Navigation bar
- Anatomy: Logo left, text links center, CTA buttons right
- Surface: Transparent over hero gradient; solid on scroll
- Typography: navigation token for links, label token for "New" badge
- Composition: Horizontal flex, 64px horizontal margins, 8px vertical padding
- Variants: "New" badge on Playground uses mint accent pill

### Section heading block
- Anatomy: Display headline, optional subhead, optional CTA link
- Typography: section-display or hero-display for headline, body-large for subhead
- Spacing: 148px top padding creates section break; 64px horizontal margins
- Composition: Left-aligned in light sections; may center in dark

### Logo bar
- Anatomy: "Trusted by" label, horizontal logo row
- Surface: Light gray or white background
- Typography: navigation token for label
- Composition: Centered, logos evenly distributed with grayscale or original color treatment

## Responsive behavior

The desktop-first layout assumes a wide viewport for the hero's asymmetric composition. On narrower screens, the hero should stack vertically: headline and CTA above, product screenshot below with reduced rotation or full width. The multi-column feature grids in dark sections should collapse to single column, maintaining card internal proportions.

Navigation should convert to a hamburger menu below approximately 768px, with the two CTA buttons potentially stacking or hiding behind the menu. The partner icon grid should wrap to multiple rows with consistent gaps rather than horizontal scrolling, which would hide the breadth of integrations.

Font sizes should scale down modestly: hero-display to 2.5rem, section-display to 2rem on small screens. The tight letter spacing on headlines may need slight loosening (-0.02em) below 375px to prevent glyph collision. Section padding should reduce to 96px vertical and 24px horizontal on mobile to maintain proportion without excessive scrolling.

## Practical implementation guidance

### Preserve
- The mint-to-white gradient in the hero as the signature first impression
- Full pill shapes for all primary actions; the roundedness is central to the friendly enterprise tone
- High contrast between dark sections and mint accents—never dilute the accent with opacity
- Inter at weights 400, 500, 600 only; the weight range is intentionally narrow
- Generous section padding; the breathing room signals product maturity

### Avoid
- Adding secondary accent colors; the single mint against monochrome is the core identity
- Sharp corners on interactive elements; even small cards should carry visible rounding
- Pure black (#000000) for text or backgrounds; the slightly lifted #171717 and #0A0A0A prevent harshness
- System sans-serif for body copy; reserve it for navigation and micro-labels only
- Horizontal scrolling for the partner grid; wrapping maintains accessibility

### Recommended build order
1. Establish the 4px spacing base and core color tokens (ink, surface, action)
2. Implement Inter with the three specified weights and hero/section/body scale
3. Build the pill button component with arrow icon pattern
4. Create light and dark section wrappers with correct padding
5. Implement hero with gradient background and asymmetric layout
6. Add feature card variants for dark mode content
7. Integrate icon tile grid for partner/social proof sections
8. Polish with shadow tokens and gradient overlays

### Accessibility
- Ensure mint green (#7AF1A7) on white meets minimum contrast for large text only; use #171717 for small text on mint backgrounds
- Dark mode sections should maintain 4.5:1 minimum for body copy; the white-on-charcoal pairing exceeds this
- The arrow icon in buttons needs aria-label or hidden text treatment for screen readers
- Focus states should use a visible outline distinct from the mint fill, such as a 2px #171717 ring on mint buttons
- Reduce motion should disable any parallax on the hero screenshot; the gradient and layout work without movement

## Scope note

This guide covers the Natoma homepage including hero, feature sections, partner grid, and primary navigation. Footer content, additional interior pages, form validation states, and mobile-specific navigation patterns are not represented in the supplied materials. The 3D illustration style and specific iconography are described by their visible treatment but source files are not included.
