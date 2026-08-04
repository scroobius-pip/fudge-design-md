# How abc.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/abc.xyz-design)

Last updated: 2026-08-04

## Captured pages

[![White investor-relations hero with a blue G cube, handwritten signature, and floating alphabet blocks](https://pin.fontofweb.com/2306?format=jpg)](https://design.withfudge.com/share/pin-2306)

[White investor-relations hero with a blue G cube, handwritten signature, and floating alphabet blocks](https://design.withfudge.com/share/pin-2306)

[![Cookie consent card anchored over the pale footer strip with a red accept button](https://pin.fontofweb.com/2305?format=jpg)](https://design.withfudge.com/share/pin-2305)

[Cookie consent card anchored over the pale footer strip with a red accept button](https://design.withfudge.com/share/pin-2305)

## Overview

ABC.xyz presents Alphabet Investor Relations as a quiet, high-margin editorial page. The surface is almost entirely white, so the eye lands first on the sparse structure: a small top bar, a left-aligned statement, and a few floating alphabet blocks that give the page a light sculptural feel. The page reads as intentional emptiness rather than unfinished layout. Large areas of blank canvas become the main design material, and the remaining elements are placed with enough distance to feel curated.

The visual center is a single conversational block on the left. A square blue “G” tile, the line “is for Google,” a short paragraph, a small “more” link, and a handwritten signature form one compact stack. On the right, the letter cubes hover independently, adding a playful object lesson without competing with the text. The footer closes the page with a pale band, a red Alphabet wordmark, and understated utility links. A cookie card sits above that band at the lower right, using the only strong action color on the page.

## Colors

The page uses a narrow palette with one saturated accent and a family of near-white structural tones. White is the main canvas, so every other color has to earn its place. The red brand tone appears in the Alphabet wordmark and the cookie accept button, which makes it feel decisive rather than decorative. Gray carries the structure: rules, secondary copy, and the softer text around the hero. The blue tile in the hero introduces a second accent, but it belongs to the floating alphabet object rather than the interface chrome. There is no visible dark mode on this surface; the system is built to stay bright, airy, and low-friction.

| token | value | role |
|---|---|---|
| `action` | `#E51D2B` | Primary affordance color for the cookie accept button and similar calls to action |
| `brand-red` | `#D93025` | Alphabet wordmark and other brand signposts that need to feel official |
| `ink` | `#222222` | Main body copy, hero text, and footer text on white or pale surfaces |
| `muted-ink` | `#666666` | Secondary navigation and quieter supporting text |
| `canvas` | `#FFFFFF` | Main page background and the cookie card surface |
| `surface` | `#F7F8FB` | Footer strip and other low-contrast framing areas |
| `surface-quiet` | `#F1F3F6` | Soft background wash where the page needs separation without weight |
| `border` | `#E6E6E6` | Thin dividers, card edges, and the top rule under the header |

The relationship among these colors is simple: canvas first, border second, ink for reading, and red only for decisions. The page does not depend on gradients, chromatic overlays, or layered color atmospheres. Its calm comes from restraint. The blue cube and the colored letter blocks act like objects inside the page, not as interface tokens.

## Typography

Google Sans is the only visible family in the supplied material, and the system uses it without stylistic drift. The hierarchy is created through size, weight, and spacing rather than through a mix of families. The overall feel is friendly and corporate at the same time: rounded enough to soften investor-relations language, but disciplined enough to keep the page feeling official. The large hero line is not aggressive; it sits with open spacing and a relaxed rhythm. Smaller labels and links keep the same family but tighten the scale and add a little weight where needed.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Google Sans | 3.25rem | 400 | 1.08 | -0.02em | Main statement on the left side of the page |
| `section-display` | Google Sans | 2rem | 400 | 1.15 | -0.01em | Secondary headline treatment when a larger supporting title is needed |
| `body` | Google Sans | 1rem | 400 | 1.5 | 0em | Paragraph text and explanatory copy |
| `body-medium` | Google Sans | 1rem | 500 | 1.45 | 0em | Small emphatic text such as links and button labels |
| `navigation` | Google Sans | 0.875rem | 400 | 1.4 | 0em | Top-right navigation and footer utility links |
| `small-label` | Google Sans | 0.875rem | 500 | 1.3 | 0.01em | Short interface labels and subtle legal or utility markers |
| `cookie-copy` | Google Sans | 1rem | 400 | 1.45 | 0em | Cookie notice body text and similar inline notices |

The handwritten signature is not part of the typographic system; treat it as a graphic mark. Keep the family usage conservative. The page does not need a display face, condensed face, or ornamental caption style. It needs a quiet sans-serif system with enough size separation to make the hero legible from a distance and enough restraint to keep the investor-relations tone intact.

Google Sans is the named family in the packet; confirm reuse rights separately before deployment.

## Layout

The page is built around large blank space and a single left-side narrative column. The header sits very close to the top edge and uses a thin horizontal rule to separate navigation from content without introducing a heavy band. The logo area is aligned left, while the “Investors” link sits alone at the far right, which makes the top bar feel symmetrical even though its content is minimal.

The hero composition is notably asymmetrical. The left column contains almost all of the readable content, but it never feels crowded because the line lengths are short and the spacing between the cube, the heading, the paragraph, the link, and the signature is generous. The right side is intentionally spacious, with the floating letter blocks distributed vertically rather than clustered. Their placement creates a light diagonal rhythm that keeps the page from feeling static.

Vertical spacing is the main organizing device. Instead, the page relies on distance: between the header and hero, between the hero text and the cubes, and between the main content and the footer. The footer is a soft visual reset. Its pale background separates utility from storytelling and keeps the bottom area from collapsing into the white of the main canvas.

The cookie notice adds a second layer of layout logic. It is fixed to the lower-right corner, slightly overlapping the footer area, and it reads like a compact system dialog rather than a branded panel. Its border, padding, and button placement keep it legible without making it louder than the page itself.

## Visual language

The page’s personality comes from a tension between restraint and play. The institutional side is expressed through white space, narrow gray rules, and plain text. The playful side appears in the letter cubes, which feel like small physical objects dropped into an otherwise editorial composition. They are the only elements that introduce color movement and depth, and even they stay measured: soft shadows, matte faces, and a consistent paper-like material quality.

Depth is subtle. The interface does not depend on glossy surfaces, heavy gradients, or strong drop shadows. The cubes cast the most visible shadow on the page, and the cookie card uses just enough lift to read as a foreground element. That restraint is important because the page already has enough contrast from the red logo and button. Adding more visual effects would make the page feel less serious.

The overall language is confident because it is so sparse. Every object is given room to breathe. The left column does not try to fill the page, and the right-side cubes do not try to explain themselves with labels. The result is a page that feels like a quiet introduction to Alphabet rather than a marketing landing page. It communicates scale through space, not through density.

## Components

### Header

- **Anatomy:** Left-aligned Alphabet Investor Relations wordmark, single right-aligned “Investors” link, and a thin divider line below the bar.
- **Typography:** Small Google Sans text with low visual weight.
- **Surface:** White background with no filled chrome.
- **Spacing:** Wide horizontal spacing and a compact vertical footprint.
- **Hierarchy:** The logo is the anchor; the link reads as a utility destination, not a competing nav item.

### Hero statement block

- **Anatomy:** Blue square “G” tile, large statement, short paragraph, small “more” link, signature graphic, and author name.
- **Typography:** The statement uses the largest type on the page; paragraph and link drop back to body scale.
- **Surface:** White canvas with no container around the text.
- **Composition:** The elements are stacked in a narrow column and separated by open air instead of borders.
- **Visible state:** The “more” link is subtle and inline, which keeps the block from feeling button-heavy.

### Floating alphabet cubes

- **Anatomy:** Independent letter blocks arranged across the right side of the page.
- **Surface:** Matte white faces with saturated letter colors and soft depth shadows.
- **Shape:** Small square objects with beveled, product-like presence.
- **Composition:** The cubes are distributed, not grouped; their spacing creates movement and a loose vertical arc.
- **Role:** They provide the page’s only expressive imagery and keep the composition from feeling too corporate.

### Footer strip

- **Anatomy:** Red Alphabet wordmark, compact utility links, and a pale background band.
- **Typography:** Small, restrained Google Sans with muted emphasis.
- **Surface:** Very light gray rather than pure white, so the footer reads as a separate plane.
- **Hierarchy:** The wordmark leads, the links follow in a single line, and everything else stays quiet.
- **Spacing:** The links are separated by short gaps rather than boxed tabs or separators.

### Cookie consent card

- **Anatomy:** Short explanation text and one prominent red confirmation button inside a white card.
- **Surface:** White panel with a fine gray border and a gentle shadow.
- **Typography:** Body-size copy with a clear, readable line break.
- **Shape:** Rounded corners are present but restrained; the panel feels like a system dialog.
- **Visible state:** The red button is the only strong interaction target and should remain visually dominant inside the card.

## Responsive behavior

This page should keep its emptiness when it narrows. On smaller screens, the left hero column should remain first, the cubes should reflow without forming a dense cluster, and the footer should preserve its utility-first tone. The top bar can collapse, but the logo and the investor link should stay readable and separated. The cookie card should remain legible and avoid covering the main statement. If the layout tightens, reduce the distance between the hero pieces before introducing new containers or new visual treatments. The page works because it resists clutter.

## Practical implementation guidance

### Preserve

- Keep the page mostly white. The blank canvas is the main visual asset.
- Keep the red accent limited to brand marks and decisive actions.
- Preserve the thin divider under the header and the pale footer band.
- Use Google Sans consistently across navigation, body, and utility text.
- Treat the cubes as individual objects with soft depth, not as a repeating icon set.

### Avoid

- Avoid adding dark sections, gradients, or colored panels that would compete with the white field.
- Avoid mixing in a second text family or a decorative display font.
- Avoid thick borders, heavy shadows, and boxed navigation.
- Avoid crowding the hero with extra links, badges, or metadata.
- Avoid making the cookie card louder than the page’s own brand marks.

### Recommended build order

1. Establish the white canvas, top bar, and thin divider.
2. Build the left hero stack and tune the spacing between its pieces.
3. Place the floating letter cubes so the right side feels balanced but open.
4. Add the pale footer strip and utility links.
5. Layer in the cookie card last, since it sits above the page rather than inside its flow.

### Accessibility

- Keep the red button on the cookie card high contrast against white.
- Make the “more” link distinguishable without relying on color alone.
- Provide meaningful alternative text for the cubes and the signature graphic.
- Preserve visible focus treatment for the top link, footer links, and cookie action.
- Maintain readable line length in the hero so the statement does not collapse into a narrow column on smaller screens.

## Scope note

This guide covers the supplied desktop investor-relations landing page: the header, hero block, floating letter cubes, footer strip, and cookie notice. It does not include alternate routes, hidden pages, mobile breakpoints, motion rules, or interactive states not shown here. Measurements are practical adaptation targets.
