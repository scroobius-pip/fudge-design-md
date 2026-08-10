# How tinywins.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tinywins.com-design)

Last updated: 2026-08-10

## Captured pages

[![Approach page hero with blurred photographic background and white serif headline overlay](https://pin.fontofweb.com/9781?format=jpg)](https://design.withfudge.com/share/pin-9781)

[Approach page hero with blurred photographic background and white serif headline overlay](https://design.withfudge.com/share/pin-9781)

[![About page team roster with orange background and black serif names in two columns](https://pin.fontofweb.com/9780?format=jpg)](https://design.withfudge.com/share/pin-9780)

[About page team roster with orange background and black serif names in two columns](https://design.withfudge.com/share/pin-9780)

[![About page with navigation bar showing logo and menu items over orange team section](https://pin.fontofweb.com/9779?format=jpg)](https://design.withfudge.com/share/pin-9779)

[About page with navigation bar showing logo and menu items over orange team section](https://design.withfudge.com/share/pin-9779)

[![Homepage Shipyard section with blue background and white typography layout](https://pin.fontofweb.com/9778?format=jpg)](https://design.withfudge.com/share/pin-9778)

[Homepage Shipyard section with blue background and white typography layout](https://design.withfudge.com/share/pin-9778)

## Overview

TinyWins presents itself as an emotion-led brand and digital agency with a visual system that deliberately balances warmth and precision. The design language moves between two dominant modes: expansive, high-energy color fields in electric blue and vivid orange, and restrained, editorial white space with black typography. This duality reflects the studio's positioning—creative and human, yet structured and strategic. The system relies on strong typographic contrast rather than decorative elements, using an elegant serif display face for moments of personality and a clean Swiss sans-serif for everything functional. Photography appears full-bleed and atmospheric, often with motion blur or soft focus, creating emotional depth behind crisp typographic overlays. The overall impression is confident, contemporary, and intentionally gallery-like, with each page section functioning as a distinct visual statement.

## Colors

The palette is intentionally small and high-impact, built around two accent surfaces that alternate as emotional anchors against a neutral base.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary text, borders, navigation backgrounds, and all typography on light or colored surfaces |
| canvas | #FFFFFF | Page backgrounds, text on dark or colored sections, and the primary reading surface |
| accent-orange | #FF6F0A | Team roster sections, energetic highlights, and warm brand moments |
| accent-blue | #3670E1 | Shipyard partnership section and cool-toned brand expressions |

The system operates in three distinct surface modes. The default mode uses white canvas with black ink text for clean, editorial readability. The warm mode deploys accent-orange as a full-bleed background with black ink text, creating an energetic, communal feeling appropriate for team and culture content. The cool mode uses accent-blue with white canvas text for partnership and corporate trust signals. No gradients or shadows are used; color transitions are always hard cuts between full-bleed sections. Photography integrates naturally with all three modes, often desaturated or color-graded to harmonize with the surrounding palette.

## Typography

Three type families appear in the system: Abc Gramercy, a refined serif with classical proportions; Suisse Intl, a contemporary Swiss sans-serif with multiple weights; and Applesystem, the platform sans-serif used for a specific 14px text role. The primary pairing of Abc Gramercy and Suisse Intl creates editorial elegance for display moments and functional clarity for everything else.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Suisse Intl | 6.25rem | 600 | 0.9 | -0.03em | Homepage hero headlines and major section statements |
| section-display | Abc Gramercy | 2.5rem | 400 | 1.1 | -0.04em | Team names, approach headlines, and medium display moments |
| body | Suisse Intl | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, and general reading text |
| body-tight | Suisse Intl | 1rem | 400 | 1.1 | -0.02em | Compact text blocks and space-constrained descriptions |
| label | Suisse Intl | 0.875rem | 500 | 1.429 | -0.01em | Buttons, tags, and interactive labels |
| navigation | Suisse Intl | 0.875rem | 500 | 1.429 | -0.01em | Primary navigation and wayfinding |
| legal-copy | Suisse Intl | 0.875rem | 400 | 1.2 | -0.01em | Footer text, credits, and secondary information |

Abc Gramercy appears exclusively in Regular weight, lending a consistent, understated elegance to display settings. Suisse Intl operates across Book (400), Medium (500), and Semi Bold (600) weights, with Semi Bold reserved for the largest hero display sizes to maintain optical weight at scale. Applesystem appears at 14px in a single Regular weight, serving a specific functional text role. Negative tracking increases with size, creating tighter, more impactful headlines while preserving readability in body text. Verify licensing for these families before production use. Abc Gramercy is designed by Robert Janes, Johannes Breyer, and Fabian Harb for Dinamo Typefaces GmbH. Suisse Intl is designed and distributed by Swiss Typefaces.

## Layout

The layout system favors generous breathing room and asymmetric compositions that feel editorial rather than grid-locked. Sections are defined by dramatic vertical padding and full-bleed color transitions rather than contained boxes.

Page sections use substantial vertical padding, typically 8rem top and bottom, with horizontal padding scaling from 1rem on mobile to 5rem on desktop. The homepage hero and approach pages feature full-viewport or near-full-viewport sections where typography floats over photographic backgrounds. Content rarely centers mechanically; instead, text blocks occupy deliberate positions—upper left, lower left, or offset right—creating visual tension and movement.

The team roster on the About page demonstrates a two-column layout with names flowing in continuous lists, using the full width of the orange background without additional containment. Navigation sits as a floating pill element, detached from the top edge with margin-top spacing, reinforcing the airy, unconstrained feeling.

Spacing follows a 0.125rem base unit, with semantic tokens at 1.5rem for content gaps and 2rem for component separation. Section breaks use 8rem vertical space to create clear rhythmic pauses between distinct visual modes. Horizontal margins of 4.25rem appear in footer and certain content areas, creating an inset frame that distinguishes interior content from edge-to-edge sections.

## Visual language

The visual language is built on contrast and restraint: maximal color impact with minimal decorative elements. Photography plays a central role, appearing full-bleed with soft focus, motion blur, or atmospheric treatment that allows typography to sit cleanly on top. Images are not framed or bordered; they merge directly with the page surface.

Typography is the primary visual element. Headlines are large, tightly tracked, and given generous line height to feel declarative rather than cramped. The shift between serif and sans-serif creates tonal variation—serif for warmth and personality, sans-serif for directness and function. No icons, illustrations, or ornamental graphics appear in the visible system; even the logo is a simple wordmark.

The color strategy is section-based rather than component-based. An entire section commits to one surface color, creating immersive moments that reset the viewer's attention. The orange team section and blue Shipyard section function as visual landmarks within the page flow. Borders are absent except for subtle 1px hairlines in specific content divisions, and no shadows or elevation effects are used.

## Components

### Navigation

The navigation appears as a floating horizontal pill, positioned below the top edge with margin-top spacing rather than flush against it. The container uses a black ink background with white canvas text, creating a discrete, high-contrast element that hovers over any section color.

- **Anatomy**: Logo wordmark on the left, horizontal link list in the center, and a "Latest Wins" status indicator on the right
- **Surface**: Background color `{colors.ink}`, text color `{colors.canvas}`
- **Typography**: `{typography.navigation}` for links, with active state indicated by visual prominence
- **Shape**: Pill border radius `{rounded.pill}`, padding `0.5625rem 1.125rem 0.5625rem 0.625rem`
- **Spacing**: Internal gap of `1.75rem` between navigation items
- **Composition**: Detached from viewport edge, creating a floating, editorial presence

### Hero section

Hero sections combine full-bleed photography with overlaid typography, using the image as atmospheric background rather than contained illustration.

- **Anatomy**: Background image with text overlay, optional label above headline, and call-to-action link below
- **Surface**: Text color adapts to image—white on dark or warm photography, black on light backgrounds
- **Typography**: Label uses `{typography.label}`, headline uses `{typography.section-display}` or `{typography.hero-display}` depending on scale
- **Shape**: No border radius; full edge-to-edge coverage
- **Spacing**: Generous internal padding to position text in lower or central reading zone
- **Composition**: Asymmetric text placement, often left-aligned with substantial margin from edge

### Team roster

The team roster is a distinctive content pattern using the orange accent surface as a full-bleed background for a two-column name list.

- **Anatomy**: Continuous list of names in two balanced columns
- **Surface**: Background color `{colors.accent-orange}`, text color `{colors.ink}`
- **Typography**: `{typography.section-display}` at 2.5rem, creating elegant, readable name entries
- **Shape**: No border radius; fills entire section width
- **Spacing**: Section padding of `8rem` vertical and `5rem` horizontal
- **Composition**: Names flow top-to-bottom in each column, creating a dense but orderly typographic texture

### Content card

Content cards appear in grid arrangements on the homepage, containing project or service information with image, title, and metadata.

- **Anatomy**: Image area, title text, and optional description or tag
- **Surface**: White or transparent background with black text
- **Typography**: Title uses `{typography.body-tight}` or scaled sans-serif, description uses `{typography.body}`
- **Shape**: `{rounded.card}` for image corners
- **Spacing**: Internal padding `1.5rem 1rem 1rem`, gap between cards `2rem` to `4rem`
- **Composition**: Asymmetric grid with varying image heights, creating visual rhythm

### Call-to-action link

Text-based actions use a simple arrow prefix and minimal styling, avoiding button-like containment.

- **Anatomy**: Arrow symbol followed by label text
- **Surface**: Inherits parent text color
- **Typography**: `{typography.label}` or `{typography.body}` depending on context
- **Shape**: No background or border; inline text treatment
- **Spacing**: Margin-top `1.5rem` from preceding content, internal gap `0.5rem` between arrow and text
- **Composition**: Left-aligned with content block, maintaining the system's asymmetric tendencies

### Footer

The footer uses a clean, spacious layout with large display typography for contact or partnership prompts.

- **Anatomy**: Large headline, supporting description, and link list
- **Surface**: White background with black text, or inverted for specific sections
- **Typography**: Headline uses `{typography.hero-display}` at reduced scale or `{typography.section-display}`, links use `{typography.legal-copy}`
- **Shape**: No border radius
- **Spacing**: Padding `2rem 5rem 1.25rem`, with `2.75rem` top margin for content separation
- **Composition**: Asymmetric with substantial left margin for link groups

## Responsive behavior

The system maintains its bold character across viewport sizes through proportional scaling rather than structural transformation. The navigation pill remains horizontal, though link labels may collapse to a menu trigger on narrow viewports. Hero headlines scale down from 6.25rem to approximately 3rem on mobile, preserving tight tracking and line height ratios. The team roster transitions from two columns to a single column when viewport width no longer supports comfortable side-by-side reading. Section padding reduces from 8rem vertical to 4rem on mobile, maintaining the generous proportion while respecting limited screen height. Image grids reflow from multi-column to single-column stacking, with card border radius remaining consistent. Typography does not switch families at breakpoints; the serif and sans-serif roles remain fixed, with only size and spacing adjusting.

## Practical implementation guidance

### Preserve
- The stark alternation between white, orange, and blue sections as the primary page rhythm
- The floating navigation pill with its detached top margin and high-contrast black fill
- The tight tracking on large headlines, especially the -0.03em on hero display sizes
- The two-column team roster as a distinctive brand pattern
- The arrow-prefixed text links for all secondary actions

### Avoid
- Adding borders, shadows, or elevation effects to cards or containers
- Using the serif face for body text or functional labels
- Centering headlines mechanically; maintain asymmetric offsets
- Introducing additional accent colors beyond orange and blue
- Framing photography with borders or rounded corners beyond the 0.5rem card radius

### Recommended build order
1. Establish the type system with Suisse Intl as the base and Abc Gramercy for display
2. Implement the three surface modes (white, orange, blue) as section-level tokens
3. Build the floating navigation pill with correct padding and pill radius
4. Create the hero section with full-bleed image and text overlay positioning
5. Develop the team roster as a two-column typographic component
6. Add content cards with asymmetric grid and consistent spacing
7. Polish with tracking adjustments and responsive scaling

### Accessibility
- Ensure text over photography maintains minimum contrast ratios; use semi-transparent overlays or text shadows where necessary
- Provide focus indicators for the floating navigation that are visible against all section backgrounds
- Respect reduced-motion preferences for any scroll-triggered section transitions
- Use semantic heading hierarchy despite the visual size variations

## Scope note

This guide covers the homepage, About page, and Approach page surfaces visible in the supplied images. Mobile layouts, hover states, form interactions, and project detail pages are not represented. The spacing and radius values reflect the exact measurements from the desktop interface.
