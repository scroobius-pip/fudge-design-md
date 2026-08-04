# How ahrefsevolve.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ahrefsevolve.com-design)

Last updated: 2026-08-04

## Captured pages

[![Full-width hero stage with the oversized Evolve wordmark and orange Singapore badge](https://pin.fontofweb.com/7037?format=jpg)](https://design.withfudge.com/share/pin-7037)

[Full-width hero stage with the oversized Evolve wordmark and orange Singapore badge](https://design.withfudge.com/share/pin-7037)

[![Long-scroll page with speaker grid, pricing panels, and stacked black editorial sections](https://pin.fontofweb.com/7036?format=jpg)](https://design.withfudge.com/share/pin-7036)

[Long-scroll page with speaker grid, pricing panels, and stacked black editorial sections](https://design.withfudge.com/share/pin-7036)

[![Mosaic photo wall beside black explainer copy and the blue-orange split CTA](https://pin.fontofweb.com/7035?format=jpg)](https://design.withfudge.com/share/pin-7035)

[Mosaic photo wall beside black explainer copy and the blue-orange split CTA](https://design.withfudge.com/share/pin-7035)

[![Deep-blue signup panel with 200+ stat, labeled fields, and the outline submit pill](https://pin.fontofweb.com/7034?format=jpg)](https://design.withfudge.com/share/pin-7034)

[Deep-blue signup panel with 200+ stat, labeled fields, and the outline submit pill](https://design.withfudge.com/share/pin-7034)

[![Black speaker lineup grid with portrait tiles, names, roles, and the speak card](https://pin.fontofweb.com/7033?format=jpg)](https://design.withfudge.com/share/pin-7033)

[Black speaker lineup grid with portrait tiles, names, roles, and the speak card](https://design.withfudge.com/share/pin-7033)

## Overview

Ahrefs Evolve is a conference microsite built like a sequence of event posters. The black field gives the page a stage-like base, while a giant white Evolve wordmark, orange ticket actions, and blue information blocks do most of the visual work. The hero pairs live stage photography with compact event copy, then the page moves into speaker cards, ticket tiers, social-proof walls, sponsor calls, and a blue registration form. Inter carries every practical label; Evolve V 20, Evolve Draft, and Evolve provide the oversized brand statement and its smaller accent fragments. The result feels theatrical but still direct: a ticket-first event page, not a product dashboard.

The system is intentionally narrow in palette and broad in contrast. Black remains the default ground, white remains the default text color, blue carries informational and registration sections, and orange marks the primary actions and location badges. The visual story shifts from stage photography to dense card grids to two-panel calls to action, yet the typography and color rules stay fixed so the page reads as one continuous event identity.

## Colors

Ahrefs Evolve uses a compact palette with a hard black ground, white copy, and two strong accent families. Blue is the informational family: it holds the signup block, the pricing ramp, and the cooler half of the split calls to action. Orange is the action family: it marks tickets, sponsorship, and the active Singapore badge. Secondary text stays pale blue or muted gray-blue so the page can carry a lot of content without losing the poster feel.

| token | hex | role | use |
|---|---|---|---|
| canvas | `#000000` | Page ground | Main backdrop for the hero, speakers, reviews, and footer |
| paper | `#FFFFFF` | Primary text | Headings, body copy, button copy, and bright card text on dark fields |
| stage | `#02030B` | Deep stage base | The black-to-blue gradient starts here and the hero shadowing stays close to it |
| stage-deep | `#0E1549` | Deep navy field | Darker blue sections and the lower end of the signup ramp |
| stage-blue | `#1E2B85` | Mid blue field | Intermediate color in the blue chapter panels |
| stage-blue-mid | `#2133B3` | Brighter blue field | The left side of the blue split CTA and parts of the form block |
| stage-blue-bright | `#3A52FD` | Bright blue surface | Sign-up panel, energetic gradients, and the strongest blue cards |
| stage-panel | `#1B1F23` | Dark card surface | Speaker and review cards that sit above the black field |
| stage-line | `#3B434B` | Hairline border | Thin dividers, card edges, and quiet structural lines |
| blue-soft | `#DDE6FF` | Secondary text | Supporting copy on dark blue fields and lighter outline text |
| blue-highlight | `#6591FF` | Light accent | Chip outlines, sheen in gradient text, and subtle emphasis |
| action | `#FF6300` | Primary action | Ticket buttons, sponsor buttons, and the active Singapore badge |
| action-bright | `#FF8D00` | Hot orange surface | The brighter end of the orange panels and glows |
| action-glow | `#FFAB3D` | Warm highlight | The light edge of the orange gradients and bright label accents |
| muted-ink | `#ACABAB` | Quiet copy | Legal copy, secondary metadata, and lower-contrast event details |
| warm-panel | `#FFF0E3` | Soft warm fill | Light warm accents inside the orange family and pale panel highlights |

The page uses two gradient systems instead of many separate surfaces. The blue chapter moves through `#02030B` into `#3A52FD` or `#2133B3`, and the orange chapter moves through `#0C0400` into `#FF6300` and `#FF8D00`. Those ramps are strong enough to energize the page but disciplined enough to keep the system from feeling colorful in a generic way. White text stays the anchor across both ramps, while the muted gray-blue text softens supporting lines on the black field and on the blue signup block. The overall relationship is simple: black for structure, blue for information, orange for action, white for emphasis.

## Typography

Inter carries the editorial system: section heads, body copy, speaker names, tier names, labels, form fields, button text, and legal lines. Evolve V 20 appears only when the page wants the event name or a large number to feel graphic and oversized. Evolve Draft appears as the orange accent fragment inside the wordmark treatment, and Evolve appears as a compact logo-like accent. That split gives the site a practical reading voice and a poster voice without introducing a second everyday text family. Inter is credited to Rasmus Andersson and Rsms. Licensing details were not supplied with the fonts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-wordmark | Evolve V 20 | 6.25rem | 163 | 1 | 0em | Oversized Evolve wordmark and other poster-scale branding |
| hero-accent | Evolve Draft | 2.21rem | 400 | 1 | 0em | Orange accent fragment inside the hero wordmark |
| logo-accent | Evolve | 1.84rem | 293 | 1.2 | 0em | Smaller brand-mark accent and compact decorative lettering |
| section-display | Inter | 3rem | 400 | 1.17 | -0.025em | Main section headings such as speaker and review chapter titles |
| card-title | Inter | 2rem | 400 | 1.25 | -0.02em | Speaker names, panel titles, and large card headlines |
| body | Inter | 1.125rem | 400 | 1.44 | 0em | Hero copy, panel explanations, and ticket benefits |
| label | Inter | 1rem | 500 | 1.5 | 0.03em | CTA text, city chips, form labels, and small UI prompts |
| meta | Inter | 0.875rem | 400 | 1.71 | 0em | Roles, locations, legal lines, and footer metadata |
| stat | Evolve V 20 | 3rem | 163 | 1.17 | 0em | Large counts and poster-like numerals in the blue section |

The scale stays close to the visible page sizes: 100px for the wordmark, 48px for major heads, 32px for card titles, 24px and 18px for supporting copy, 16px for controls, and 14px for the quietest text. The rhythm comes from size and weight more than from many different families. Display text is light and wide; reading text is steady and compact. The wordmark and stat treatment should feel like signage. The rest of the system should feel like a conference guide that is easy to scan in a crowd.

## Layout

The page is built on a narrow central reading column inside a wide black canvas, then it breaks out into full-bleed cards whenever the content needs more energy. The opening chapter is a poster: the stage photograph spans the width, the giant Evolve wordmark sits across the middle, and the orange Singapore badge floats over the right side. Below that, the page settles into long-form copy that stays left aligned and roomy, with the support text set off from the hero by large vertical space.

Speaker content is arranged as a grid of image-first cards. The portraits are large enough to carry identity, but the captions underneath keep the names and roles readable without needing borders around each block. Ticket pricing uses a paired-card layout with two contrasting surfaces and a perforation line across the middle, which makes the price comparison feel like a physical ticket strip instead of a standard pricing table. The social-proof wall is denser and more mosaic-like, with many dark cards packed together to create the sense of a busy event stream. The split speaker and sponsor call-to-action blocks reopen the composition into two equal halves, each with its own color and button.

The final blue signup section shifts the page into a simpler form-led layout: a large numeric statement, a short pitch, stacked form fields, and a wide submit pill. That block is less editorial and more functional, but it keeps the same stage energy through the saturated blue surface and the white typography. Throughout the page, vertical rhythm matters more than fine grid rules. Large gaps separate the chapters, while the inside of each chapter stays tight enough to preserve poster tension.

## Visual language

The system mixes three visual registers: stage photography, graphic typography, and utility cards. Photography is always large, often full-width, and usually tinted by blue stage light or warm orange flare. The typography is poster-like: the huge Evolve wordmark is cropped, overlaid, and allowed to sit partly on top of the photography instead of being confined to a neat header block. The cards are simple, with rounded corners, thin borders, and high-contrast fills. The page likes visible joins: perforation lines, pill chips, outline buttons, and panel seams. Those repeated shapes make the site feel like a ticketing environment even when the content shifts to speakers, reviews, or updates.

The strongest visual idea is contrast between utility and spectacle. The stage image and the oversized wordmark make the page feel like a live event announcement. The speaker roster and pricing panels then turn that energy into concrete choices. The review collage extends the event feeling by showing dense crowds and social proof, but it still uses the same dark ground and the same bright accents. The final blue form panel is almost pure utility, yet the glow and scale keep it inside the same branded world.

Shape is used sparingly but deliberately. The orange button is a long capsule, not a sharp rectangle. The pricing cards use large rounded outer corners and a perforation split that reads like a ticket edge. Some portrait tiles round only the image block, while the captions stay square and quiet underneath. The site avoids decorative ornament beyond those few shapes, which keeps the whole experience bold and legible.

## Components

### Hero poster

- **Anatomy:** Small Ahrefs mark at the top, city chips on the right, a full-width stage photograph, the oversized Evolve wordmark, a short event description, date and location text, and the orange ticket pill.
- **Surface:** Black field with a cool blue haze under the wordmark and a warm orange flare on the right.
- **Typography:** Evolve V 20 at 100px for the wordmark; Evolve Draft and Evolve as compact brand accents; Inter at 24px and 18px for the supporting copy.
- **Shape:** City chips and the ticket button use capsule geometry; the hero stays soft rather than angular.
- **Composition:** The photograph sits above the wordmark, so the stage and audience remain the first read before the text resolves.

### City chips and top controls

- **Anatomy:** Two compact pills, one for San Diego and one for Singapore.
- **Surface:** The active chip is orange; the inactive chip stays lighter and outlined.
- **Typography:** Small uppercase-like label treatment in Inter 16px Medium.
- **Shape:** Narrow capsules with fully rounded ends.
- **Visible states:** The active state is filled and warm; the inactive state is quieter and lighter.

### Speaker roster cards

- **Anatomy:** Portrait tile, name, role, and in some cases a country or company line.
- **Surface:** Black background with image-first cards, not boxed thumbnails with heavy borders.
- **Typography:** Names in large Inter text, roles in smaller muted Inter, and occasional special cards in the same family.
- **Shape:** The portrait block carries the rounding; captions stay square and grounded beneath it.
- **Composition:** The grid reads left to right in clean rows, then breaks for a special speaker-callout tile.
- **Visible states:** The “Speak at Evolve” card replaces a portrait with a blue gradient panel and an outlined action.

### Ticket pricing panels

- **Anatomy:** Day chip, tier name, benefit list, perforated line, lower price ladder, and a wide CTA.
- **Surface:** Left card in blue, right card in orange, both with bright gradient depth.
- **Typography:** Tier titles use oversized display treatment; benefits stay in Inter 18px or 16px.
- **Shape:** Large rounded outer corners and black circular notches along the split line give the cards a ticket feel.
- **Visible states:** A sold-out row is crossed out and dimmed; the current tier stays bright and readable.
- **Composition:** The two cards are mirrored so the comparison is immediate without needing a legend.

### Reviews wall

- **Anatomy:** Dark testimonial cards, small avatar circles, screenshot-style posts, and short praise lines.
- **Surface:** Deep black with charcoal cards and thin boundaries.
- **Typography:** White comment text with smaller metadata and muted secondary lines.
- **Spacing:** Tight packing creates a masonry wall rather than a loose grid.
- **Composition:** Many small rectangles build density and social proof instead of one large quote block.

### Split calls to action

- **Anatomy:** Two equal panels, one for speaking and one for sponsoring.
- **Surface:** Blue gradient on the left, orange gradient on the right.
- **Typography:** Large 32px headings, brief supporting copy, and centered outline pills.
- **Shape:** Rounded outer corners with a softer lower-right or lower-left arc depending on the panel.
- **Composition:** Each half is self-contained, but the pair reads as one billboard.

### Event updates form

- **Anatomy:** Large statistic, short pitch, stacked inputs, a wide submit pill, and small consent copy.
- **Surface:** Saturated blue gradient with a black-to-blue depth shift.
- **Typography:** Evolve V 20 for the large number treatment; Inter for the form labels and helper copy.
- **Shape:** Inputs stay underlined and quiet; the action is a capsule with enough width to feel primary.
- **Visible states:** Labels stay visible above the fields, which keeps the form legible even when empty.

### Footer

- **Anatomy:** Legal links on the left and a year marker on the right.
- **Surface:** Pure black, with no decorative border.
- **Typography:** Small Inter text in 14px to 16px.
- **Composition:** Sparse, low-contrast, and intentionally quiet so it closes the page without competing with the event content.

## Responsive behavior

The narrower composition keeps the same order but compresses the grids. The hero still reads as a poster first, with the wordmark remaining dominant above the event copy and ticket action. Speaker rows can drop from four columns to fewer columns before the portraits become too small, and the ticket panels should stack before their benefit text feels cramped. The review wall can tighten into denser rows, but the black ground, orange actions, and blue callouts should not change. If space gets tight, secondary copy should shrink before the poster wordmark loses its scale.

The main rule is to preserve the sequence of chapters: hero, explainer, speaker roster, ticket pricing, social proof, split calls to action, update form, footer. Only the card count, column count, and internal spacing should move. The system should never become a generic stacked brochure; it should stay a sequence of event panels even when the width narrows.

## Practical implementation guidance

### Preserve

- Keep the black field and the giant Evolve wordmark as the first visual read.
- Keep orange tied to tickets, sponsorship, and the active location badge.
- Keep blue tied to registration, informational chapters, and the cooler half of split CTAs.
- Keep the capsule button language and the perforated ticket edge; those shapes give the page its event identity.
- Keep photography large and direct, not reduced to small framed thumbnails.

### Avoid

- Avoid adding a second display family or a new accent color.
- Avoid replacing the black ground with pale surfaces or product-like cards.
- Avoid heavy shadows; the hierarchy here comes from contrast, scale, and color blocks.
- Avoid shrinking the wordmark into ordinary headline size.
- Avoid over-fragmenting the layouts with too many borders or nested boxes.

### Recommended build order

1. Build the hero poster with the stage image, city chips, wordmark, and orange ticket button.
2. Add the poster-scale event copy and the date/location block.
3. Build the speaker roster grid and the “Speak at Evolve” callout tile.
4. Add the paired pricing panels with the perforation and sold-out state.
5. Add the review wall and the two-panel speaker/sponsor call to action.
6. Finish with the blue updates form and the minimal footer.

### Accessibility

- Keep white and pale-blue copy legible against the black and blue fields.
- Give the orange button enough border or inset contrast so it remains clear on orange gradients.
- Use plain, explicit labels for form fields and button text that names the action.
- Keep image alt text specific to the speaker, panel, or crowd moment shown.
- Preserve visible focus styling that still reads on the dark ground and under the glow.

## Scope note

This guide covers the conference homepage and its long-scroll chapters: hero, speaker roster, ticket pricing, social proof, sponsor calls, update form, and footer. It does not include motion rules, exact breakpoint values, or interaction-state styling.
