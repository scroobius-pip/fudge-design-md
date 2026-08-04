# How afterquery.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/afterquery.com-design)

Last updated: 2026-08-04

## Captured pages

[![Centered contact form card with pale blue fields, a boxed textarea, and a blue send pill](https://pin.fontofweb.com/3992?format=jpg)](https://design.withfudge.com/share/pin-3992)

[Centered contact form card with pale blue fields, a boxed textarea, and a blue send pill](https://design.withfudge.com/share/pin-3992)

[![Careers page with an italic serif headline and small outlined apply pills in a sparse stack](https://pin.fontofweb.com/3991?format=jpg)](https://design.withfudge.com/share/pin-3991)

[Careers page with an italic serif headline and small outlined apply pills in a sparse stack](https://design.withfudge.com/share/pin-3991)

[![Research layout with a botanical plate, pale cream field, and floating white note cards](https://pin.fontofweb.com/3990?format=jpg)](https://design.withfudge.com/share/pin-3990)

[Research layout with a botanical plate, pale cream field, and floating white note cards](https://design.withfudge.com/share/pin-3990)

[![Leaderboard page with a left headline block and cream benchmark cards under a blue chart](https://pin.fontofweb.com/3988?format=jpg)](https://design.withfudge.com/share/pin-3988)

[Leaderboard page with a left headline block and cream benchmark cards under a blue chart](https://design.withfudge.com/share/pin-3988)

[![Home page strip mixing the opening form, research callout, and benchmark sections in one flow](https://pin.fontofweb.com/3987?format=jpg)](https://design.withfudge.com/share/pin-3987)

[Home page strip mixing the opening form, research callout, and benchmark sections in one flow](https://design.withfudge.com/share/pin-3987)

## Overview

AfterQuery uses a restrained editorial system built around serif headlines, generous whitespace, and thin cool borders. The page feels like a research dossier and a recruiting landing page at the same time: centered statements, short explanatory paragraphs, simple forms, and small outlined pills keep the interface calm, while botanical illustrations and benchmark charts add texture and subject matter. The visual story stays light-first. Pale blush and cream surfaces carry the bulk of the layout, and a single strong blue acts as the main directional accent. Most sections are centered or gently split rather than tightly gridded, so the eye moves from one large idea to the next without much friction.

The most important qualities to preserve are the formal serif voice, the airy page rhythm, the pale paper backgrounds, the hairline blue borders, and the contrast between elegant editorial text and very plain controls. The system does not depend on dense ornament. Instead, it uses a small set of visible moves repeatedly: a large italic headline, a centered form card, an illustrated research panel, a leaderboard grid, and understated pills for action.

## Colors

The palette is quiet and paper-like, but it is not monochrome. Light surfaces vary just enough to separate sections, and the illustrations bring in rose, olive, gold, and lilac notes. Blue is the only persistent interaction color, so it should remain reserved for actions, chart marks, and the occasional line or rule. Darker tones are used sparingly for text, chart rails, and outlines; they never take over the page as a full dark mode.

| token | value | role |
|---|---|---|
| `canvas` | `#FDF6FE` | Main pale blush page canvas and large open fields |
| `canvas-alt` | `#F5F5F5` | Cool neutral page background for the quieter white sections |
| `surface-cream` | `#FAF1D4` | Warm research and solution panels that need a paper feel |
| `surface-warm` | `#FDEAAF` | Golden field behind the botanical solution illustration |
| `ink` | `#000000` | Primary headline, paragraph, and label text |
| `muted-ink` | `#474746` | Supporting copy, captions, and lower-contrast explanatory text |
| `border` | `#C1C9DA` | Thin field borders, card outlines, and light separators |
| `action` | `#1F56B5` | Primary buttons, chart accents, and the strongest directional signal |
| `accent-lilac` | `#736FD5` | Secondary data accent and soft illustrative color |
| `accent-rose` | `#FCC0AD` | Warm support tone in illustrated and panel details |
| `accent-olive` | `#6D7355` | Botanical stems, leaves, and other organic illustration notes |

The page reads as a progression from nearly white canvas into warm paper panels, then into image-led moments where the illustration palette takes over. The blue action color stays stable across all of those surfaces. It should not drift toward teal or navy; its role is to cut through the softness without breaking it. Dark contrast comes from text and borders, not from a separate dark theme.

## Typography

Typography is the core of the system. The site depends on a refined serif family for nearly all narrative text, then uses utility faces for compact controls and technical-looking microcopy. The result is formal but not heavy. The serif headlines are large, calm, and slightly theatrical; the body copy stays readable and measured; the pills and small labels feel more functional so the interface never becomes purely decorative.

`Cmu Serif` and `Cmu Serif-Italic` need separate license confirmation before production reuse. `Geist` is credited to Basementstudio and Vercel contributors, while `Ibm Plex Mono` is credited to Bold Monday and the IBM type designers listed in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Cmu Serif | 3.5rem | 400 | 0.95 | -0.03em | Main landing headlines and the largest editorial statements |
| `section-display` | Cmu Serif-Italic | 2.75rem | 400 | 1 | -0.02em | Section openers and the more theatrical research headlines |
| `body` | Cmu Serif | 1.125rem | 400 | 1.5 | 0em | Paragraph copy, supporting text, and form helper copy |
| `ui-label` | Geist | 0.875rem | 400 | 1.2 | 0em | Small controls, interface labels, and quiet utility text |
| `mono-label` | Ibm Plex Mono | 0.875rem | 400 | 1.2 | 0em | Pills, benchmark labels, and compact button text |

The hierarchy is driven by contrast in style rather than by many weights. Display text should stay lightly set with tight leading. Body text should breathe enough to keep the page calm. Small controls should look practical and almost understated next to the serif content, which helps the buttons and labels feel intentional instead of branded for their own sake.

## Layout

The layout alternates between centered editorial blocks and split compositions. Large margins are a defining feature. The page leaves a lot of open canvas around each section, which makes the serif headlines feel even larger and gives the illustrations room to breathe. Content widths are narrow enough that copy reads like a statement, not a brochure.

The contact area is the most enclosed part of the system. It places a full form inside a centered card with a thin blue border, soft rounding, and a pale background. Fields stack in a disciplined rhythm, then a single blue pill button closes the form. This structure should remain simple and symmetrical.

The careers and leaderboard areas are more editorial. One uses a centered heading, short explanatory copy, and a pair of small outlined apply buttons. The other combines a left-aligned statement with a right-side chart and then introduces a row of benchmark cards below. These sections rely on spacing and alignment more than on heavy dividers. Hairlines and whitespace do the organizing.

The research section is the most illustrative. A botanical plate sits in a wide cream field, and the text is held in floating note cards that read like annotations rather than standard blocks. This composition should stay spacious and diagrammatic. The page is strongest when text and image have clear roles: one states the point, the other shows it.

## Visual language

The visual language blends old-paper illustration with modern data presentation. The botanical images look like engravings or specimen plates, but they are used alongside very simple UI shapes: pill buttons, field outlines, thin card borders, and clean chart bars. That contrast is the personality of the site. It makes the brand feel academic, selective, and mildly formal without becoming nostalgic.

Corners are restrained. Rounded pills are clearly rounded, but cards and panels stay closer to rectangular with just enough radius to soften the formality. Borders are cool and light, not heavy or shadowed. The page avoids deep drop shadows; most separation comes from color change, spacing, and border contrast. Where shadows appear, they should be faint and secondary.

The illustration palette matters as much as the UI palette. Rose flowers, olive stems, gold fruit, lilac data marks, and blue chart bars all contribute to the page mood. These tones should remain localized inside illustrations or chart elements. They are not primary interface tokens and should not spread into every control.

## Components

### Section opener

- **Anatomy:** Small italic eyebrow, oversized serif headline, one short supporting paragraph.
- **Typography:** Use `section-display` for the heading and `body` for the supporting line.
- **Composition:** Center the block and keep the line length narrow enough that the text feels like a proposition rather than a block of copy.
- **Surface:** Usually sits directly on canvas or on a subtle warm field.
- **Visible state:** The heading can switch between upright and italic emphasis, but it should remain calm and unembellished.

### Form card

- **Anatomy:** Centered card, paired fields, a wider email row, a larger textarea, and one primary pill action.
- **Surface:** Pale canvas with a thin border in `border`.
- **Typography:** Inputs and helper copy should use the utility faces, while the submit action uses `mono-label`.
- **Shape:** Soft field corners, slightly larger panel corners, and a fully rounded action button.
- **Spacing:** Fields sit in even rows with clear vertical gaps; the card itself needs generous internal padding so the border reads as a frame, not as a cage.
- **Visible state:** A filled blue button is the strongest action on the page, and it should feel more assertive than the outlined pills elsewhere.

### Outlined pill button

- **Anatomy:** Short text label, sometimes paired with an arrow, inside a thin outlined capsule.
- **Surface:** White or near-white fill with a cool border.
- **Typography:** `ui-label` or `mono-label`, depending on whether the button reads as editorial or functional.
- **Shape:** Fully rounded ends.
- **Composition:** Used for apply actions, paper links, and quieter secondary actions.
- **Visible state:** The outline keeps the button low-contrast until it is needed.

### Benchmark card and chart

- **Anatomy:** Cream card with a centered title and stacked horizontal bars.
- **Surface:** Soft paper background with dark rails and bright fills.
- **Typography:** Labels are compact and technical, so `mono-label` works well here.
- **Composition:** Use a clean left-to-right reading order, and keep the chart bars tight and regular.
- **Visible state:** One card may read as a “coming soon” treatment, which should stay visibly secondary and muted.

### Research annotation card

- **Anatomy:** Small floating white card, blue heading, short paragraph, and numbered callout connections.
- **Surface:** Light panel over a cream field.
- **Typography:** A restrained serif or utility face for the body, with blue labels for the calls to attention.
- **Composition:** Let the botanical illustration remain visible behind and around the cards.
- **Visible state:** The cards function as notes attached to the central illustration, not as standalone content blocks.

### Data-story section

- **Anatomy:** Left narrative, right illustration or chart, followed by a smaller supporting row below.
- **Surface:** Alternates between canvas and cream.
- **Typography:** Large serif statement plus smaller body copy.
- **Composition:** Keep the split wide and airy; do not compress the text against the image.
- **Visible state:** The section should feel like a chapter transition, not a dense product pitch.

## Responsive behavior

On narrower screens, the order should collapse to the same reading sequence used on desktop: headline, supporting copy, media or chart, then actions. The form should stack from two columns to one without losing the clear field hierarchy. Benchmark cards should become a vertical stack before they become too narrow to scan. The illustration-led sections should keep the key annotation cards legible and avoid cropping away the central plant or chart structure. The important rule is to preserve the large-serif voice and the calm spacing; the page should not turn into a dense mobile dashboard.

## Practical implementation guidance

### Preserve

- Keep the serif family as the dominant voice across all narrative sections.
- Preserve the pale blush and cream surfaces; they are part of the brand, not just background color.
- Keep blue reserved for actions, chart marks, and a few key lines.
- Maintain generous margins around every major section.
- Use illustrations as content, not as decoration layered behind everything.

### Avoid

- Avoid heavy shadows, glossy gradients, and other effects that fight the paper-like feel.
- Avoid filling the page with many different border radii; the system only needs a few.
- Avoid turning every button into the same filled blue pill.
- Avoid mixing in bold sans typography as a second headline voice.
- Avoid tight, boxy layouts that erase the page’s airy rhythm.

### Recommended build order

1. Set the serif typography scale and the small utility face roles.
2. Build the shared border, radius, and spacing tokens.
3. Recreate the centered section opener and the form card.
4. Add the outlined pill button pattern.
5. Build the research annotation layout and the benchmark chart card.
6. Finish with the split editorial sections and their image compositions.

### Accessibility

- Keep text contrast high on the pale canvases and cream surfaces.
- Make the blue action button clearly distinct from the outlined pills.
- Provide visible focus treatment that respects the thin-border aesthetic.
- Keep form labels readable and close to their inputs.
- Do not rely on color alone for benchmark status or button hierarchy.

## Scope note

This guide covers the supplied desktop marketing, careers, research, leaderboard, and contact surfaces for afterquery.com. Mobile layouts, hover or focus choreography, motion, exact production font licensing, and internal application screens are not included. Measurements are practical adaptation targets.
