# How 247artists.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/247artists.com-design)

Last updated: 2026-08-04

## Captured pages

[![Peach FAQ stage with huge cropped black letters and a thin white nav strip](https://pin.fontofweb.com/3619?format=jpg)](https://design.withfudge.com/share/pin-3619)

[Peach FAQ stage with huge cropped black letters and a thin white nav strip](https://design.withfudge.com/share/pin-3619)

[![Lavender membership panel with white pricing cards and a bold left headline](https://pin.fontofweb.com/3618?format=jpg)](https://design.withfudge.com/share/pin-3618)

[Lavender membership panel with white pricing cards and a bold left headline](https://design.withfudge.com/share/pin-3618)

[![Purple tiled network wall with a centered white info card and stacked photos](https://pin.fontofweb.com/3617?format=jpg)](https://design.withfudge.com/share/pin-3617)

[Purple tiled network wall with a centered white info card and stacked photos](https://design.withfudge.com/share/pin-3617)

[![Red slogan panel with oversized black type and a small cookie card in the corner](https://pin.fontofweb.com/3616?format=jpg)](https://design.withfudge.com/share/pin-3616)

[Red slogan panel with oversized black type and a small cookie card in the corner](https://design.withfudge.com/share/pin-3616)

[![Charcoal collage hero with arced grid lines and layered portrait cutouts](https://pin.fontofweb.com/3615?format=jpg)](https://design.withfudge.com/share/pin-3615)

[Charcoal collage hero with arced grid lines and layered portrait cutouts](https://design.withfudge.com/share/pin-3615)

[![Dark tunnel hero with white display text, floating photos, and magenta button](https://pin.fontofweb.com/3614?format=jpg)](https://design.withfudge.com/share/pin-3614)

[Dark tunnel hero with white display text, floating photos, and magenta button](https://design.withfudge.com/share/pin-3614)

## Overview

24/7 Artists uses the look of a music-community poster system and turns it into a full-page interface. The page is built from oversized Gellix headlines, thin dark rules, compact utility strips, and saturated stage colors. The typography does the heavy lifting: statements arrive in large, tightly set blocks, while supporting copy stays small and direct. That split keeps the page readable even when the backgrounds are loud.

The system changes mood by chapter. A warm peach stage holds the FAQ rows; a lavender stage carries the membership cards; a purple tiled field builds a network-like composition; a red field delivers blunt manifesto text; and the darker hero stages switch to white type on charcoal grid backgrounds. Magenta stays constant as the action tone, so the user always knows what matters most.

The result is energetic rather than decorative. Structure comes from borders, index marks, card edges, and layered image blocks. The design feels editorial and promotional at the same time, with enough order to support long scrolling sections and enough color to keep each section distinct.

## Colors

| token | value | role |
|---|---|---|
| `action` | `#F55BEE` | Action |
| `ink` | `#000000` | Ink |
| `muted-ink` | `#5C4B4D` | Muted ink |
| `canvas` | `#FEFDFD` | Canvas |
| `surface-paper` | `#FEFDFD` | Surface paper |
| `surface-warm` | `#FCAD9A` | Surface warm |
| `surface-lavender` | `#AB7AF9` | Surface lavender |
| `surface-red` | `#FF4437` | Surface red |
| `surface-deep` | `#231F26` | Surface deep |
| `surface-grid` | `#272127` | Surface grid |
| `border` | `#272127` | Border |

24/7 Artists depends on strong, flat color fields rather than subtle tonal shifts. Near-black ink handles the question text, body text, and logo marks on pale surfaces. White or near-white surfaces hold the pricing cards, utility strip, and cookie copy. Warm peach is the most visible light-stage background, lavender supports the membership and notice panels, red powers the short slogan stages, and deep charcoal anchors the darker hero and collage compositions. Magenta is the persistent action color and also appears in edge accents and button fills.

| token | role |
|---|---|
| `action` | Primary button fill, pink accents, and highlighted edges |
| `ink` | Main text on light surfaces |
| `muted-ink` | Supporting copy, sublabels, and quiet metadata |
| `canvas` | White framing space and utility surfaces |
| `surface-paper` | White cards, panels, and strips |
| `surface-warm` | Peach FAQ stage and warm section backgrounds |
| `surface-lavender` | Membership stage and notice panels |
| `surface-red` | Bold slogan stages |
| `surface-deep` | Dark hero and collage stages |
| `surface-grid` | Grid lines, dark structural rules, and tunnel tone |
| `border` | Thin rules, card outlines, and row separators |

The palette works best when it stays blunt. The light sections should keep borders dark and spare, so the peach and lavender fills remain the main color story. The dark sections should flip to white text and let the grid or tunnel linework supply texture instead of gradients or glow.

## Typography

Gellix carries the entire interface. The design uses one family in several weights, which keeps the loud page from feeling fragmented. Large headlines use a compressed, heavy cut with negative tracking. Supporting copy opens up to standard reading rhythm. The site’s rhythm comes from scale and weight, not from switching families. Licensing for Gellix should be checked before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Gellix | 4.5rem | 600 | 0.9 | -0.04em | Main hero statements on dark grid stages |
| `section-display` | Gellix | 3.75rem | 600 | 0.95 | -0.035em | Big section headings such as membership and network calls |
| `feature-display` | Gellix | 3rem | 600 | 0.95 | -0.03em | Short manifesto lines on red or peach fields |
| `card-heading` | Gellix | 1.5rem | 600 | 1.05 | -0.02em | FAQ questions, plan titles, and white card headings |
| `body` | Gellix | 1rem | 400 | 1.5 | 0em | Paragraph copy and explanatory card text |
| `body-medium` | Gellix | 1rem | 500 | 1.5 | 0em | Buttons, emphasized body copy, and small utility text |
| `label` | Gellix | 0.875rem | 500 | 1.1 | 0.08em | Small capsules, labels, and index cues |
| `legal-copy` | Gellix | 0.75rem | 400 | 1.4 | 0.04em | Footer and disclaimer-style text |

The hierarchy is simple but forceful. Display copy is almost poster-like, with tight spacing and short line breaks. The body copy is never tiny enough to disappear, and the labels stay crisp because of their slightly expanded tracking. That combination keeps the page readable while the color fields do most of the atmosphere work.

## Layout

The page is organized as a sequence of full-bleed stages. Each stage owns its own background color, but the layout logic stays consistent: a dominant text block, a supporting card cluster or image cluster, and a persistent utility strip that helps the user find the account action. The large stages are separated by white or pale framing bands, which keeps the page from turning into one long block of color.

The FAQ stage uses a table-like structure. Questions span the width of a peach panel in thick, row-height strips. Each row is divided by thin dark rules, and the right edge carries small index cells such as `#01` and `#02`. The open state drops into a white answer panel with a dark close block, so the component reads more like a poster accordion than a standard web widget.

The membership stage shifts into a split composition. A large left-aligned heading and short paragraph sit beside two white plan cards. The cards are tall, rectangular, and very simple: title, price or plan label, bullet list, then a button near the base. The Premium card gets the stronger accent edge and the more saturated button, so the eye knows which plan is emphasized.

The network stage is the most modular. It uses a purple square grid that fills the whole field, then breaks that field with a centered white information card and stacked photo fragments that interrupt the regular rhythm. This stage needs the widest horizontal space in the system because its meaning depends on the grid spreading out.

The darker hero and collage stages rely on asymmetry. One uses centered white type over a perspective tunnel; another uses a lower-left statement beside a field of overlapping portrait cutouts and curved grid lines. In both cases, the image layers are allowed to float beyond the main text block, which gives the page its sense of motion and scale.

## Visual language

The visual language is loud, architectural, and image-led. Flat fills do most of the work, but the page never feels plain because the backgrounds carry strong structural patterns. The dark hero uses a wireframe tunnel that pulls the eye inward. The purple network section uses square tiles with narrow gaps, edge slivers, and a central white card. The red and peach sections feel almost poster-printed, with large type placed directly on color and only a few hard lines to contain it.

Image treatment is equally direct. Portraits appear as cropped rectangles, stacked fragments, or floating tiles with sharp edges. They are never overprocessed into soft hero photography. The result is more like a contact sheet or collage wall than a conventional lifestyle image. That keeps the page grounded in people while preserving the graphic tone of the typography.

Depth comes from layering rather than shadow. White cards sit on saturated fields, photos overlap one another, and small dark voids appear between tiles to create pause. The strongest accents are magenta and black: magenta for calls to action, black for rules, logos, and text. Rounded corners are used sparingly, mainly on buttons and small notices, so the overall look stays crisp and poster-like.

## Components

### Utility strip

- **Anatomy:** Compact logo block, login chip, and a bright Create Account action.
- **Surface:** White or near-white with thin dark borders.
- **Typography:** Small medium-weight Gellix with short labels and tight spacing.
- **Shape:** Rectangular blocks with only slight rounding on chips and buttons.
- **Composition:** Anchored low-left on dark and red stages so it acts as a steady orientation point.
- **Visible state:** The action is always the loudest element in the strip, while the login option stays quieter and lighter.

### Hero statement stage

- **Anatomy:** Oversized display line, floating portrait tiles or cropped imagery, and a centered or low-left CTA.
- **Surface:** Charcoal tunnel grid or warm peach field.
- **Typography:** Large white type on dark stages; large black type on warm stages.
- **Shape:** The CTA is a chunky rounded rectangle or pill, with magenta fill and dark text.
- **Composition:** The hero keeps generous negative space around the headline so the floating imagery feels suspended rather than crowded.
- **Visible state:** The dark hero and the peach slogan stage are two versions of the same loud opening gesture.

### FAQ rows

- **Anatomy:** Full-width question row, right-side index cell, and an open answer block beneath.
- **Surface:** Peach rows with white expanded content.
- **Typography:** Bold question text in the row; smaller body text in the open panel.
- **Shape:** Mostly square edges with thin dark dividers.
- **Composition:** The list reads like a ruled board, not a simple accordion.
- **Visible state:** Closed rows stay compact and uniform; the open row breaks the pattern with a white interior and a dark close control.

### Membership cards

- **Anatomy:** Left introduction block, Free card, Premium card, plan bullets, and a button near the bottom of each card.
- **Surface:** Lavender field behind white cards.
- **Typography:** Large section heading on the left, smaller plan titles and body copy inside the cards.
- **Shape:** Tall rectangles with sharp outlines and only slight rounding.
- **Composition:** The premium option is visually stronger because of its brighter edge treatment and more saturated button.
- **Visible state:** The cards remain plain and legible; the premium treatment relies on accent color rather than ornamental depth.

### Network mosaic

- **Anatomy:** Purple tile field, centered white info card, stacked photographs, and narrow dark breaks in the grid.
- **Surface:** Purple field with black and pink interruptions.
- **Typography:** A large numeric or short headline on the white card with a concise paragraph below.
- **Shape:** Square modules and card-like inserts.
- **Composition:** The grid is the layout itself, so the text block feels embedded in a larger system rather than placed on top of it.
- **Visible state:** The mosaic can open up to make room for the center card, but the surrounding tile rhythm stays present.

### Cookie and notice cards

- **Anatomy:** Short consent-style message, two or three small control buttons, and a compact rounded container.
- **Surface:** Lavender notice box over dark or red stages.
- **Typography:** Small body text with medium-weight controls.
- **Shape:** Softer corners than the main content cards.
- **Composition:** Tucked into a corner so it does not disrupt the main poster-like hierarchy.
- **Visible state:** Buttons are lower-contrast than the main CTA, which keeps this utility surface secondary.

## Responsive behavior

On narrower screens, the design should reduce the amount of side-by-side composition and keep the chapter order intact. The hero should stack before the call to action rather than squeezing the headline into a wide, unreadable line. The FAQ rows should remain clearly separated, but the right-side index cells may need to move under the question or shrink into a smaller label line. The membership cards should become a single-column stack with the premium option still emphasized through the same magenta treatment. The purple mosaic should simplify first, because its effect depends on horizontal spread. The utility strip should stay visible as a compact anchor, even if its labels wrap.

## Practical implementation guidance

### Preserve

- Keep one hot-magenta action color across the whole system.
- Keep Gellix as the only type family so the page feels unified.
- Keep the page chaptered by color: peach, lavender, purple grid, red, then charcoal.
- Keep the thin dark rules, since they are the main separator in the FAQ and card layouts.
- Keep the portrait tiles sharp and stacked, not softened into generic lifestyle art.

### Avoid

- Avoid adding soft drop shadows or glass effects; the design is mostly flat.
- Avoid turning every card into the same rounded shape; the system needs contrast between strips, cards, and pills.
- Avoid mixing extra accent colors into buttons or labels.
- Avoid overfilling the dark stages with extra copy; the scale already does the storytelling.
- Avoid shrinking the display type until it loses the poster quality that defines the page.

### Recommended build order

1. Establish the Gellix type scale and the color tokens.
2. Build the utility strip and the hamburger-style menu button.
3. Recreate the FAQ row pattern on the peach stage.
4. Build the membership cards and the lavender section.
5. Build the purple network mosaic with the centered white card.
6. Build the red slogan panel and the dark tunnel hero.
7. Add the collage stage, then tune spacing and line weights across the sequence.

### Accessibility

- Keep text contrast strong on peach, lavender, red, and charcoal surfaces.
- Make the menu button, FAQ rows, and account buttons visibly focusable.
- Give the stacked portraits and icon-like controls clear alternative text.
- Keep the row separators and card outlines crisp so the structure remains legible without color alone.
- Preserve readable line lengths by letting the largest headlines break early rather than forcing a single long line.

## Scope note

This guide covers the desktop homepage sequence shown here: the peach FAQ stage, lavender membership stage, purple network mosaic, red slogan panels, charcoal collage hero, and the compact utility strip. Measurements are practical adaptation targets. It does not include mobile collapse rules, motion, or alternate page templates.
