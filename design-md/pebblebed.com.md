# How pebblebed.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pebblebed.com-design)

Last updated: 2026-08-10

## Captured pages

[![Events page showing two-column event cards with serif headings, mono body text, and magenta pagination accents on a warm off-white canvas.](https://pin.fontofweb.com/9836?format=jpg)](https://design.withfudge.com/share/pin-9836)

[Events page showing two-column event cards with serif headings, mono body text, and magenta pagination accents on a warm off-white canvas.](https://design.withfudge.com/share/pin-9836)

[![Careers page featuring a centered job posting with tabbed navigation, underlined email link in magenta, and a decorative circular badge around the active nav item.](https://pin.fontofweb.com/9835?format=jpg)](https://design.withfudge.com/share/pin-9835)

[Careers page featuring a centered job posting with tabbed navigation, underlined email link in magenta, and a decorative circular badge around the active nav item.](https://design.withfudge.com/share/pin-9835)

[![Team member profile for Keith Adams with large serif name, mono biography text, and a writing list with date stamps in muted gray.](https://pin.fontofweb.com/9834?format=jpg)](https://design.withfudge.com/share/pin-9834)

[Team member profile for Keith Adams with large serif name, mono biography text, and a writing list with date stamps in muted gray.](https://design.withfudge.com/share/pin-9834)

[![Blog article body showing dense mono text with inline links, footnote markers, and a minimal footer with render mode toggle in magenta.](https://pin.fontofweb.com/9833?format=jpg)](https://design.withfudge.com/share/pin-9833)

[Blog article body showing dense mono text with inline links, footnote markers, and a minimal footer with render mode toggle in magenta.](https://design.withfudge.com/share/pin-9833)

## Overview

Pebblebed presents itself as a quiet, intellectually rigorous presence on the web. The design system is built around a deliberate tension: warm, humanist serif display typography from Reckless S anchors headings and names, while the body and interface layer speaks in the clipped precision of Abc Favorit Mono Unlicensed. This pairing creates a voice that feels simultaneously editorial and technical—appropriate for a venture firm that positions itself as a home for builders.

The visual field is overwhelmingly light. A warm off-white canvas, slightly grayed rather than pure white, fills the viewport. Against this, near-black ink provides primary readability, with a stepped hierarchy of secondary and tertiary grays for supporting material. Magenta appears rarely and with purpose: as an underline on interactive email links, as a pagination arrow, as a mode toggle, and as a decorative ring around an active navigation state. The restraint of this accent makes every instance feel intentional.

The layout philosophy favors generous whitespace and asymmetric balance. Content sits in a left-weighted main column with substantial right-hand breathing room. A persistent vertical navigation hugs the right edge, creating a sidebar-like structure without the visual heaviness of a traditional panel. Sections are separated by significant vertical margins, allowing each block to feel self-contained. The overall impression is of a well-typeset document that happens to live in a browser.

## Colors

| token | value | use |
|---|---|---|
| ink | #151515 | Primary body text, navigation items, default interactive states |
| ink-secondary | #1D1B1B | Page titles, section headings, display typography |
| ink-tertiary | #4E4E4E | Muted labels, timestamps, secondary metadata, inactive tab text |
| muted | #917971 | Warm gray for subtle borders, hairlines, and de-emphasized structure |
| accent | #D64BCF | Active navigation states, underlined links, pagination controls, mode toggles |
| canvas | #F1F1EF | Page background, the dominant surface color |

The color model is essentially monochromatic with a single warm accent. The canvas is not pure white but carries a subtle gray-green warmth that prevents eye strain and gives the site a paper-like quality. The ink hierarchy moves from near-black through charcoal to medium gray, with each step clearly distinguishable for accessibility. The magenta accent is fully saturated but used at small scale—never as a background fill, always as a signal. This creates a system where color means action: if you see magenta, something can be clicked or is currently active.

No dark mode is visible in the supplied material. The photography and imagery that appears is generally muted in tone, harmonizing with the warm gray palette rather than competing with it.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Reckless S | 3rem | 350 | 1.1 | -0.01em | Page titles, profile names, major section headers |
| section-display | Reckless S | 1.5rem | 350 | 1.2 | -0.01em | Subsection headings, card titles, article list items |
| body | Abc Favorit Mono Unlicensed | 0.9375rem | 350 | 1.4 | -0.01em | Paragraphs, navigation, general interface text |
| body-loose | Abc Favorit Mono Unlicensed | 0.9375rem | 350 | 1.7 | -0.01em | Long-form reading passages, biographical text |
| label | Abc Favorit Mono Unlicensed | 0.75rem | 350 | 1.87 | 0.03em | Timestamps, metadata, category tags, uppercase labels |
| label-tight | Abc Favorit Mono Unlicensed | 0.8125rem | 350 | 1.4 | 0.03em | Small interface labels requiring compact leading |
| navigation | Abc Favorit Mono Unlicensed | 0.9375rem | 350 | 1.4 | -0.01em | Primary navigation items, sidebar links |

Reckless S, designed by Martin Vácha and available from Displaay Type Foundry, provides the display voice. It appears at 32px for page titles and 24px for subsection headings, with a consistent weight of 350 that reads as light but not fragile. The slight negative tracking tightens word spacing without feeling compressed.

Abc Favorit Mono Unlicensed, from Dinamo Typefaces, handles everything else. At 15px with 21px line height, it forms the workhorse body size. The mono construction gives code references, dates, and technical content natural habitat. A smaller 12px size with expanded tracking serves timestamp and label duties. The 350 weight is consistent across all mono applications, creating a uniform texture.

Applesystem appears in the design facts as a 14px fallback on div elements in an unknown region, but it does not contribute visibly to the rendered interface. The site's typographic identity is carried entirely by Reckless S and Abc Favorit Mono Unlicensed.

Verify licensing for these families before production use. The Abc Favorit Mono files referenced are trial versions.

## Layout

The page architecture follows an asymmetric two-zone model: a primary content area that occupies roughly the left two-thirds of the viewport, and a persistent navigation zone along the right edge. This is not a traditional sidebar with background separation; the navigation floats against the shared canvas, creating a lighter structural relationship.

Content containers use horizontal padding of 20px (1.25rem) on both sides, with the main content area receiving additional top padding of 20px and substantial bottom padding of 96px. The outermost wrapper carries a dramatic bottom padding of 200px, creating an extended scroll past the final content element.

Vertical rhythm is established through large section gaps. The main content wrapper typically begins 128px below the viewport top, and internal sections separate by 80px to 120px. Within sections, tighter gaps of 16px to 24px group related elements. Lists use 12px row gaps between items, with ordered lists receiving 24px left indentation and unordered lists using 20px.

The navigation panel is padded 32px vertically and 24px on the right, with 40px gaps between major navigation groups. Navigation list items stack with 12px vertical spacing. This creates a comfortable, scannable menu that remains visually subordinate to the main content.

Grid behavior is not explicitly defined in the supplied material, but the event cards suggest a two-column layout at this viewport width with 20px gutters. Content blocks generally max out at readable line lengths rather than filling available width.

## Visual language

The aesthetic character is restrained editorial with technical undertones. There are no border radii in the system—everything is rectilinear, from buttons to cards to the navigation itself. This flat geometry reinforces the document-like quality of the experience.

Imagery, when present, is photographic and naturalistic. There are no visible gradients, shadows, or dimensional effects. Surface hierarchy is achieved entirely through spacing, typography scale, and color value.

The magenta accent operates as the sole decorative element. It appears as a text underline on email links, as arrow icons in pagination, as a circular ring drawn around the active navigation item, and as a mode indicator in the footer. This limited vocabulary of accent application makes the color feel precious rather than cheap.

Iconography is minimal and functional. Small arrow glyphs indicate directionality in pagination. The logo mark combines a geometric symbol with the wordmark in the mono typeface. SVG elements in the navigation inherit the ink color, maintaining the monochrome treatment until interaction or active state calls for accent color.

## Components

### Page title

- **Anatomy**: A single heading element, typically an h1, positioned at the top-left of the content area.
- **Surface and text color**: Transparent background, ink-secondary text.
- **Typography**: hero-display token, Reckless S at 3rem.
- **Shape and border**: No border, no radius, no background.
- **Spacing**: Sits flush to the content padding, with substantial margin below before the first content section.

### Event card

- **Anatomy**: A linked block containing a date stamp, a serif title, a mono description paragraph, and venue details.
- **Surface and text color**: Transparent background. Date and venue use ink-tertiary. Title uses ink-secondary. Description uses ink.
- **Typography**: Date stamp uses label token, uppercase. Title uses section-display. Body uses body token at standard leading.
- **Shape and border**: No visible border or background separation. Cards are distinguished by spacing alone.
- **Spacing**: Internal vertical gap of 16px between title and description. Card padding of 40px top, 32px bottom.
- **Composition**: Cards arrange in a two-column grid with 20px gutters.

### Navigation sidebar

- **Anatomy**: A vertical stack of navigation links, with the Pebblebed logo at top. Active item receives a decorative circular ring.
- **Surface and text color**: Transparent background. Default items use ink. Active item uses accent, with a hand-drawn circular ring rendered in accent color.
- **Typography**: navigation token for all items. Small nested items use label-tight in ink-tertiary.
- **Shape and border**: No panel background, no border. The circular ring is the only decorative shape.
- **Spacing**: 32px vertical padding, 24px right padding. 40px gap between logo and link groups. 12px between individual links.
- **Variants**: Default, hover (not visible), active (accent color with ring).

### Tab switcher

- **Anatomy**: A horizontal row of text buttons, separated by a slash divider.
- **Surface and text color**: Transparent background. Active tab uses ink. Inactive tab uses ink-tertiary.
- **Typography**: label token, uppercase, with expanded tracking.
- **Shape and border**: No visible container. No underline or background indicator for active state—reliance on color value alone.
- **Spacing**: Tight horizontal packing with slash separators.

### Article list item

- **Anatomy**: A linked block with a serif title and a mono date stamp below.
- **Surface and text color**: Transparent background. Title in ink-secondary. Date in ink-tertiary.
- **Typography**: Title uses section-display. Date uses label token, uppercase.
- **Shape and border**: No visible border. Items are separated by spacing alone.
- **Spacing**: 16px vertical gap between title and date. Items stack with comfortable vertical rhythm.

### Footer

- **Anatomy**: A minimal bar containing copyright text, location, and a render mode toggle.
- **Surface and text color**: Transparent background. Text uses ink-tertiary. Mode toggle uses accent.
- **Typography**: label token for copyright. body token for toggle.
- **Shape and border**: No border, no background separation from the canvas.
- **Spacing**: 24px vertical padding, 20px horizontal padding. Positioned at the extreme bottom of the extended page wrapper.

### Inline link

- **Anatomy**: Text link within body copy.
- **Surface and text color**: Default state uses ink. Email links use accent with a solid underline.
- **Typography**: Inherits surrounding body text.
- **Shape and border**: Underline on email links is a solid 1px rule in accent color.

## Responsive behavior

The supplied images show a consistent desktop viewport width with the navigation sidebar visible. No narrower breakpoints are captured. Based on the layout structure, a reasonable responsive strategy would:

- Maintain the two-column event grid until a medium breakpoint, then collapse to a single column.
- Convert the right-edge navigation to a horizontal top bar or hamburger menu on narrow viewports, as the persistent sidebar would consume excessive horizontal space.
- Reduce the hero-display size to 2rem or 1.75rem on small screens to maintain comfortable line lengths.
- Maintain the 20px horizontal padding as a minimum safe margin.

The generous whitespace and mono body text suggest that readability, not density, is the priority at all sizes.

## Practical implementation guidance

### Preserve
- The strict typographic pairing: Reckless S for display, Abc Favorit Mono for everything else. This is the core identity.
- The warm off-white canvas. Pure white would feel clinical and lose the paper-like quality.
- The restrained magenta accent. Every instance should earn its place through functional meaning.
- The asymmetric layout with right-edge navigation. This spatial signature distinguishes Pebblebed from centered, symmetrical templates.
- The absence of borders, radii, and shadows. The flatness is intentional and sophisticated.

### Avoid
- Introducing additional accent colors. The single magenta against neutrals is a deliberate constraint.
- Using the mono typeface for headings or the serif for body text. The role separation is fundamental.
- Adding background fills to cards or navigation. The transparent, spacing-driven hierarchy is essential to the aesthetic.
- Heavy drop shadows or elevation effects. These would violate the document-flat philosophy.
- Border radii on any element. The rectilinear language should remain consistent.

### Recommended build order
1. Establish the canvas background and ink color tokens.
2. Implement the typography scale with both families at their specified sizes and weights.
3. Build the navigation sidebar with correct spacing and the active-state ring treatment.
4. Create the main content wrapper with its asymmetric padding and section gap structure.
5. Implement page titles and section headings with Reckless S.
6. Build event cards and article list items as spacing-driven, borderless components.
7. Add the magenta accent to links, pagination, and active states.
8. Implement the extended bottom padding and minimal footer.

### Accessibility
- The 15px mono body at 350 weight against the warm canvas should be verified for contrast compliance; the near-black ink likely passes WCAG AA, but the ink-tertiary used for labels may need scrutiny at small sizes.
- The magenta accent against the off-white canvas should be checked for sufficient contrast in interactive contexts.
- The navigation's reliance on color alone for active state should be supplemented with an aria-current attribute or visible text change for screen reader users.
- The mono typeface, while characterful, can be less readable for dyslexic users; consider offering a system sans-serif alternative if user feedback suggests difficulty.

## Scope note

This guide covers the desktop experience of Pebblebed's marketing pages, including events, careers, team profiles, and blog content. Mobile breakpoints, hover and focus states, form validation, loading indicators, and dark mode are not represented in the supplied material. The circular active-navigation decoration and its exact drawing mechanism are described from visible appearance rather than confirmed implementation detail.
