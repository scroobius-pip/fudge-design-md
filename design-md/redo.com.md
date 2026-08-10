# How redo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/redo.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer with serif headline, orange CTA button, and multi-column navigation links on near-black background](https://pin.fontofweb.com/5429?format=jpg)](https://design.withfudge.com/share/pin-5429)

[Dark footer with serif headline, orange CTA button, and multi-column navigation links on near-black background](https://design.withfudge.com/share/pin-5429)

[![FAQ accordion section with large serif heading and expandable questions with plus icons on dark background](https://pin.fontofweb.com/5428?format=jpg)](https://design.withfudge.com/share/pin-5428)

[FAQ accordion section with large serif heading and expandable questions with plus icons on dark background](https://design.withfudge.com/share/pin-5428)

[![Product feature carousel showing Returns, Claims, Shipping, and Warranties cards with UI screenshots and orange CTA button](https://pin.fontofweb.com/5427?format=jpg)](https://design.withfudge.com/share/pin-5427)

[Product feature carousel showing Returns, Claims, Shipping, and Warranties cards with UI screenshots and orange CTA button](https://design.withfudge.com/share/pin-5427)

[![Bento-style social proof grid with statistics, brand logos, and testimonial quotes on dark background](https://pin.fontofweb.com/5426?format=jpg)](https://design.withfudge.com/share/pin-5426)

[Bento-style social proof grid with statistics, brand logos, and testimonial quotes on dark background](https://design.withfudge.com/share/pin-5426)

## Overview

Redo presents a sophisticated dark-mode SaaS experience built around post-purchase commerce operations. The visual system establishes immediate credibility through restrained elegance: a near-black canvas hosts warm white typography, punctuated by a vivid orange that drives action without overwhelming the editorial tone. The design language speaks to operations teams and brand decision-makers through clarity and confidence rather than playful decoration.

The interface structure follows a content-first hierarchy. Large serif display headings anchor each section, drawing from classical publishing aesthetics to differentiate Redo from typical utilitarian SaaS competitors. These headings sit in deliberate tension with the technical subject matter—returns management, shipping workflows, warranty claims—creating a memorable brand impression. The sans-serif body layer provides the necessary readability for detailed explanations, while a compact extended sans-serif handles labels and calls-to-action with mechanical precision.

Visual density remains low throughout, with generous negative space allowing product screenshots and photography to breathe. The dark environment serves practical purposes for a tool that merchants might reference throughout their workday, while also elevating the presentation of interface mockups and brand imagery that appear within cards and carousels.

## Colors

| token | value | use |
|---|---|---|
| canvas | `#111111` | Primary page background, establishes the dark environment |
| surface | `#1a1a1a` | Card backgrounds, footer regions, secondary containers |
| surface-elevated | `#242424` | Hover states, elevated panels, accordion backgrounds |
| ink | `#ffffff` | Primary text, headings, active navigation, button text on action |
| ink-muted | `#a3a3a3` | Secondary text, descriptions, footer links, inactive states |
| action | `#ff4d00` | Primary buttons, CTAs, accent highlights, interactive indicators |
| action-hover | `#e64500` | Button hover states, darker action emphasis |
| border | `#333333` | Dividers, card outlines, accordion separators |
| border-subtle | `#2a2a2a` | Invisible structural boundaries, subtle container edges |

The color system operates on a principle of controlled warmth against cool darkness. The canvas at `#111111` avoids pure black's harshness while maintaining excellent contrast for extended viewing. Surface layers step up in lightness with disciplined 8-10% increments, creating depth without visual noise. The action orange at `#ff4d00` carries enough yellow to feel energetic and human rather than clinical or alarming; it appears sparingly, reserved for the primary conversion moment in each view.

Text hierarchy depends on opacity through color rather than weight alone. Pure white commands attention for headings and primary statements, while the muted gray at `#a3a3a3` recedes appropriately for supporting copy. This two-tone text approach simplifies implementation and ensures consistent contrast ratios. Border colors remain deliberately subdued, functioning as structural guides that disappear from conscious attention.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif | 3.5rem | 400 | 1.1 | -0.01em | Page headlines, section anchors, major statements |
| section-display | Instrument Serif | 2.5rem | 400 | 1.15 | -0.01em | Subsection headings, carousel titles, feature intros |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, accordion content |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Captions, card descriptions, footer details |
| label | Maison Neue Extended | 0.75rem | 500 | 1.4 | 0.05em | Buttons, tags, category labels, navigation |
| navigation | Inter | 0.875rem | 400 | 1.5 | 0 | Header and footer link lists |

The typographic system unites three distinct voices. Instrument Serif, designed by Rodrigo Fuenzalida for Frag Type, provides the editorial personality—its high contrast and slightly condensed proportions lend sophistication to marketing language. Inter, from Rasmus Andersson, handles the utilitarian reading load with excellent screen rendering at all sizes. Maison Neue Extended, from Timo Gaessner at Milieu Grotesque, brings geometric precision to compact labels and calls-to-action; its extended width and medium weight create a distinctive mechanical rhythm that contrasts with the organic serif.

The supplied font families also include Roboto, designed by Christian Robertson for Google. While not visibly assigned to a specific typographic role in the captured interface, it remains available as a system-ready sans-serif option for fallback contexts or extended applications.

Type sizing follows a clear modular scale based on a 4px relative unit. Display sizes at 56px and 40px establish dramatic presence, while the body layer at 16px and 14px maintains practical readability. The smallest functional size at 12px appears exclusively in uppercase labels with positive tracking, ensuring legibility despite its compactness. Line heights remain tight for display use, opening up for body text to support scanning and comprehension.

Verify licensing for these families before production use. Instrument Serif and Inter offer broad availability, while Maison Neue Extended requires direct licensing through Milieu Grotesque. Roboto is openly available through Google Fonts.

## Layout

The layout system favors horizontal breathing room and vertical rhythm over complex grid gymnastics. Content occupies a centered container with generous side margins, creating a gallery-like presentation that frames product imagery and interface mockups as artifacts worth examining.

Section spacing follows a 6rem baseline, with major transitions receiving full section padding to reset the reader's attention. Within sections, content gaps of 1.5rem maintain relationship proximity without crowding. The feature carousel demonstrates the system's approach to dense information: four cards share a horizontal track with consistent internal padding, each containing a screenshot, category title, and brief description. Navigation between carousel states uses minimal circular buttons with chevron icons, positioned below the content track.

The FAQ section reveals an asymmetric two-column structure that the system employs for mixed-content layouts. The left column carries the section heading in large serif, while the right column hosts the interactive content—accordion items stacked with hairline separators. This pattern of "heading + content" appears across multiple page types, suggesting a reusable section template.

Footer organization extends the two-column logic into a multi-column grid. The brand mark occupies the left edge, followed by four equal link columns with category headers. This density is appropriate for the page bottom, where users expect comprehensive navigation options. The footer maintains the dark canvas background, avoiding the common pattern of inverting colors for the page end.

Card containers use subtle rounded corners at 0.75rem, enough to soften edges without suggesting physical materiality. Buttons receive slightly tighter rounding at 0.5rem, appropriate to their smaller scale and more frequent interactive use.

## Visual language

Photography and interface screenshots receive prominent presentation within the dark environment. Product mockups appear at high fidelity, with their native light interfaces creating natural contrast against the dark cards that contain them. This technique—showing actual software within branded containers—builds trust through transparency while maintaining visual control.

The bento-grid social proof section demonstrates sophisticated image treatment. Brand photography sits behind semi-transparent dark overlays, ensuring white text remains legible while preserving the emotional quality of the original imagery. Statistics appear at enormous scale in the serif display type, treated as graphic elements rather than mere numbers. The 51% and 17% figures dominate their respective cards, with explanatory text positioned below at standard body size.

Iconography remains minimal and functional. The accordion system uses simple plus and close marks for expand/collapse states, rendered in the muted ink color. Carousel navigation employs thin chevrons within circular boundaries. No decorative illustration system is visible; the visual interest derives from typography hierarchy, photography, and the orange accent.

The overall impression balances technical credibility with human warmth. The dark environment suggests seriousness and focus, while the serif headings and warm orange prevent coldness. This duality serves a platform that must appeal to both operational efficiency and brand experience values.

## Components

### Primary action button

- **Anatomy**: Text label centered within a solid filled container
- **Surface**: Background `{colors.action}`, text `{colors.ink}`
- **Typography**: `{typography.label}`—uppercase, letter-spaced, medium weight
- **Shape**: `border-radius: {rounded.button}` (0.5rem)
- **Spacing**: Generous horizontal padding approximately 2rem, vertical padding approximately 0.875rem
- **Composition**: Typically positioned below descriptive text, left-aligned with content
- **Variants**: Appears in header contexts and inline within sections; maintains consistent styling across placements

### Feature card

- **Anatomy**: Screenshot image area above, category title below, description beneath title
- **Surface**: Background `{colors.surface}`, no visible border
- **Typography**: Title in `{typography.section-display}` at reduced scale or `{typography.body}` with increased weight; description in `{typography.body-small}` with `{colors.ink-muted}`
- **Shape**: `border-radius: {rounded.card}` (0.75rem)
- **Spacing**: Internal padding `{spacing.card-padding}` (1.5rem)
- **Composition**: Arranged in horizontal carousel with equal widths, gap between cards approximately 1.5rem
- **States**: Hover likely elevates with `{colors.surface-elevated}`; navigation arrows advance the track

### Accordion item

- **Anatomy**: Question text left-aligned, toggle icon right-aligned; expanded state reveals answer paragraph below
- **Surface**: Transparent background, `border-bottom: 1px solid {colors.border}`
- **Typography**: Question in `{typography.body}`; answer in `{typography.body-small}` with `{colors.ink-muted}`
- **Spacing**: Vertical padding approximately 1.5rem per item
- **Composition**: Stacked vertically with full-width separators
- **States**: Collapsed shows plus icon; expanded shows close icon and reveals content with subtle spacing increase

### Statistic card

- **Anatomy**: Large percentage figure, supporting description, optional contextual image
- **Surface**: Background `{colors.surface}` or photographic image with dark overlay
- **Typography**: Figure in `{typography.hero-display}` at maximum scale; description in `{typography.body-small}`
- **Composition**: Figure dominates upper portion, description anchors bottom-left; images positioned to the right or as full backgrounds
- **Variants**: Pure statistic cards use solid surfaces; testimonial cards overlay text on brand photography

### Footer navigation

- **Anatomy**: Brand mark, four category columns with header and link lists, compliance badges, copyright
- **Surface**: Background `{colors.canvas}`
- **Typography**: Category headers in `{typography.label}` or `{typography.navigation}` with `{colors.ink}`; links in `{typography.body-small}` with `{colors.ink-muted}`
- **Composition**: Brand mark left-aligned with substantial margin; columns distributed with equal spacing; legal elements bottom-left
- **Spacing**: Generous top padding approximately 4rem, bottom padding approximately 2rem

## Responsive behavior

The layout system appears optimized for desktop presentation based on visible content. The two-column FAQ pattern should stack vertically on narrower viewports, with the serif heading moving above the accordion rather than beside it. Feature carousels require horizontal scroll or reduced card counts at smaller sizes; consider swipe gestures for touch contexts.

Typography scales should reduce proportionally: hero-display may drop to 2.5rem, section-display to 1.75rem on mobile. The generous section spacing of 6rem should compress to 4rem to maintain rhythm without excessive scrolling. Navigation columns in the footer should collapse to two columns on tablet and single column on mobile, with category headers becoming expandable if space is constrained.

The dark canvas benefits all viewport sizes by reducing eye strain, but ensure orange action elements maintain sufficient size for touch targets—minimum 44px height recommended. Carousel navigation arrows may hide on mobile in favor of swipe indicators or pagination dots.

## Practical implementation guidance

### Preserve
- The dark canvas as the default environment; avoid introducing light-mode sections that break the immersive quality
- The serif/sans-serif pairing; Instrument Serif for display, Inter for body, Maison Neue Extended for labels
- The restrained orange accent; use only for primary actions and critical highlights
- High-fidelity product screenshots within dark cards; this transparency builds credibility
- Generous negative space around content sections; density undermines the premium positioning

### Avoid
- Pure black backgrounds; the slight warmth of `#111111` prevents harsh contrast
- Decorative borders or shadows on cards; the flat surface treatment maintains sophistication
- Multiple accent colors; the single orange carries sufficient energy
- Small serif text; Instrument Serif performs best above 24px
- Centered body text; left-alignment supports the editorial, tool-like character

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement the typography hierarchy with Instrument Serif headings and Inter body
3. Build the primary action button with exact orange and label styling
4. Create the feature card component with screenshot containers
5. Develop the accordion pattern for FAQ and expandable content
6. Construct the footer navigation grid
7. Add the bento-grid social proof section with image overlays
8. Implement carousel behavior with minimal navigation controls

### Accessibility
- Ensure all text on photographic backgrounds maintains 4.5:1 contrast minimum; use dark overlays where necessary
- Provide visible focus states for keyboard navigation; consider a 2px outline in action color
- Include aria-expanded attributes on accordion toggles with corresponding state management
- Add skip navigation for the multi-column footer link structure
- Respect reduced-motion preferences for carousel transitions

## Scope note

This guide covers the marketing and product category surfaces visible in the supplied images, including the operations category page, FAQ section, feature carousel, and footer patterns. Pricing pages, mobile layouts, form interactions, loading states, and animation specifications are not represented in the available material. Measurements are practical adaptation targets based on visual analysis of the desktop interface.
