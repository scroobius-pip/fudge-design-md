# How abcdinamo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/abcdinamo.com-design)

Last updated: 2026-08-03

## Captured pages

[![Centered home stage with left section links and utility pills](https://pin.fontofweb.com/40?format=jpg)](https://design.withfudge.com/share/pin-40)

[Centered home stage with left section links and utility pills](https://design.withfudge.com/share/pin-40)

[![Quote and Buy hero with neon selector and stacked option panels](https://pin.fontofweb.com/8621?format=jpg)](https://design.withfudge.com/share/pin-8621)

[Quote and Buy hero with neon selector and stacked option panels](https://design.withfudge.com/share/pin-8621)

[![Archive feed with bright header strip and thumbnail rows](https://pin.fontofweb.com/39?format=jpg)](https://design.withfudge.com/share/pin-39)

[Archive feed with bright header strip and thumbnail rows](https://design.withfudge.com/share/pin-39)

[![Hardware grid with pale product cards and price or status lines](https://pin.fontofweb.com/35?format=jpg)](https://design.withfudge.com/share/pin-35)

[Hardware grid with pale product cards and price or status lines](https://design.withfudge.com/share/pin-35)

## Overview

abcdinamo.com is a type-foundry storefront with the confidence of a studio archive and the restraint of a catalog. The design puts specimen type first, then surrounds it with compact utilities, pill-shaped actions, and very little ornamental framing. The site alternates between large typographic statements and orderly product or article grids, so the user always knows whether they are looking at a specimen, a purchase flow, or a store section.

The visual tone is severe but playful. Black remains the default for titles, labels, and marks. A bright neon green is reserved for the current action, active choice, or the family selector that sits inside the buy flow. Violet appears more sparingly, mostly as a secondary status color for small notes, price deltas, or supporting emphasis. The page field is a pale gray rather than a pure white, which keeps the interface soft enough to let the type and product imagery carry the contrast.

## Colors

The palette is intentionally narrow. That narrowness is part of the brand voice: the page does not need much color because the typography is already loud.

| token | value | role |
|---|---|---|
| `ink` | `#000000` | Main type, wordmarks, icons, form labels, and the strongest contrast on light surfaces |
| `muted-ink` | `#A0A0A0` | Helper copy, quiet counts, inactive utility text, and low-priority notes |
| `canvas` | `#F0F4F6` | Page field, card backplates, and the light neutral base under product grids |
| `action` | `#63F450` | Primary action, active selection, the family pill in the buy hero, and the archive header strip |
| `accent` | `#6E32E1` | Secondary emphasis, small status color, and rare price or support highlights |

The system depends on contrast more than layering. The packet does not supply gradient or shadow tokens, so depth should stay minimal and the hierarchy should come from color blocking, scale, and spacing. Black text on the pale gray field is the default reading condition. Neon green needs enough empty space around it because it is loud enough to become the focal point even at small sizes. Violet should stay secondary; if it starts competing with the green, the page loses its hierarchy. The muted gray is useful for supporting information, but it should never become the primary reading color on the pale background.

The light field does most of the structural work, while darker text holds the content together. If the interface is inverted for a dark treatment, the same roles should swap rather than gaining new hues: the canvas should become the readable base, ink should become the contrast layer, and action and accent should stay the only strong highlights. Photography and product imagery live on pale backplates, so the images add density without taking over the page colors.

## Typography

Both families are material to the site: **Monument Grotesk** carries the interface and most of the page, while **Abc Diatype** appears as a rare specimen accent in the hero selector and related emphasis moments. The packet does not state a licensing credit for either family, so confirm usage rights before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Monument Grotesk | 5.244rem | 400 | 0.9 | -0.01em | Oversized page titles such as QUOTE & BUY and HARDWARE |
| `family-pick` | Abc Diatype | 4.195rem | 400 | 0.95 | 0em | The neon-green family name inside the selector pill |
| `intro` | Monument Grotesk | 1.360rem | 400 | 1.15 | 0em | Short centered explanatory copy and page intros |
| `body` | Monument Grotesk | 1.068rem | 400 | 1.25 | 0em | Form prompts, product names, article titles, and common reading text |
| `label` | Monument Grotesk | 0.639rem | 400 | 1.2 | 0.05em | Dates, counts, utility notes, and small status text |
| `utility` | Monument Grotesk | 0.388rem | 400 | 1.2 | 0.05em | Top-right utility pills, tiny counters, and compact control text |
| `legal-copy` | Monument Grotesk | 0.639rem | 400 | 1.2 | 0em | Small disclaimers, VAT notes, and short support lines |

The hierarchy is built by size and restraint rather than by many weights. Monument Grotesk stays regular and compact, which makes the giant titles feel more deliberate. The hero and section titles are set large enough to dominate the page, but the supporting copy remains calm and readable. Abc Diatype should stay special; if it starts appearing everywhere, the buy hero loses the contrast that makes the selector feel like a product object instead of another button.

The smallest Monument Grotesk role is useful for the utility cluster and other narrow metadata where the interface should stay visually quiet. The body role handles ordinary scanning, while the label and legal-copy roles cover the smaller explanatory lines that support the buying and catalog flows. Because the family split is so strong, size changes do most of the work; the page does not need many weight changes to establish hierarchy.

## Layout

The layout language is built from three rhythms: a centered specimen stage, a narrow stacked purchase lane, and wider product or article grids.

The home page begins with a very open header row: a small menu control at the far left, the DINAMO wordmark centered, and a tight utility cluster on the right. Under that, the home view uses a large centered specimen window with a lot of surrounding canvas. The left side of the page often carries a vertical list of sections, which gives the page a studio-directory feeling instead of a conventional marketing landing-page structure. The specimen itself sits in a framed panel with enough breathing room that the page feels like a poster system rather than a normal web layout.

The quote-and-buy page compresses the content into a single centered column. The headline is huge and all caps, the selector pill sits directly beside it, and the supporting explanation stays narrow and centered beneath. The step cards below are stacked vertically and use rounded white panels on the pale field. The flow is not a dense form; it is a sequence of selection blocks. That distinction matters because the user is choosing from large, legible options rather than entering lots of text.

The archive and hardware sections widen again. The archive feed uses a bright green top bar and then a long vertical list of dated entries with small thumbnails aligned to one side. The hardware page uses a centered title, a short explanatory paragraph, and then a grid of product cards. Product images sit on pale card fields with generous gutters, so the grid feels like a showroom wall rather than a retail matrix. Across all of these views, the large whitespace is doing real structural work: it lets the oversized titles and rounded controls feel intentional instead of crowded.

Spacing is strongly bimodal. Utility rows and chip groups sit close together, while section-to-section jumps are much larger. The result is a page that can switch from tiny administrative labels to giant display type without feeling noisy. The packet’s spacing scale supports that rhythm cleanly; the interface should keep using a small set of recurring gaps rather than inventing one-off values for every block.

The page is easiest to read when each major section keeps a single center line and a clear left edge for secondary navigation or labels. The home specimen, the buy flow, and the archive list all depend on that simple alignment system. When the layout widens, the content can open into cards and grids, but the underlying discipline stays the same: strong center for the hero, controlled widths for copy, and generous margins around the object-like elements.

## Visual language

Dinamo’s visual language mixes foundry seriousness with a little bit of playful studio theater. The site uses a desktop-software memory in the specimen windows, menu bars, and framed product views, but it strips away most of the heavy interface chrome. That leaves the type, the pills, and the product imagery to carry the brand.

Pill shapes are everywhere. They show up in the family selector, the utility buttons, the online-count badges, the archive button, and the little status tags around articles and products. That repeated shape gives the site a cohesive tactile feel. It also softens the otherwise blunt typography. The page never becomes rounded in a generic startup way, though; the pills are specific and fairly minimal, while the rest of the layout stays rectangular and orderly.

Color is used as punctuation. Neon green marks the active state and the most important action. Violet is more like annotation than branding paint. Black remains the default, which keeps the typography grounded. The pale gray field prevents the layout from feeling stark or clinical, and the product photography gets enough room to feel like curated objects on a table.

The image style leans toward object photography and printed matter. Product cards show shirts, boards, candles, books, and tote bags against light backplates. The archive page uses smaller photographic thumbnails to break up the list, but the text remains the main content. The result is a site that reads as a type shop first and a merchandise store second.

The visual system also depends on deliberate contrast between an oversized statement and a tiny supporting element. A giant title can sit next to a compact chip without feeling mismatched because both belong to the same family of plain geometry. This keeps the page from becoming decorative. Instead of layered illustration or elaborate ornament, the site uses scale, spacing, and the occasional neon surface to create emphasis.

## Components

### Header and utility row

- **Anatomy:** Hamburger at the left edge, centered DINAMO wordmark with a lips mark, and a compact utility cluster on the right for online count, trial fonts, login, search, and bag.
- **Typography:** Small utility text uses the `utility` role; the brand wordmark sits visually above it without needing a separate token.
- **Shape:** The right-side controls are pill-shaped and very rounded. Some are filled dark, others are pale, but they all stay compact.
- **Spacing:** The header is flat and shallow. It should not steal vertical space from the specimen stage.
- **Visible states:** Online counts appear as tiny badges; the bag can switch to a filled dark pill, while search stays icon-only.

### Quote & Buy stage

- **Anatomy:** Huge headline, neon-green family selector, centered explanatory copy, then a stacked set of license and company-size panels.
- **Surface:** The selector pill is the brightest object on the page and should feel like a product switch, not a decorative badge.
- **Typography:** The headline uses `hero-display`; the family name inside the pill uses `family-pick`; the supporting text uses `intro` and `body`.
- **Shape:** The family selector is a very wide capsule. The lower form cards use soft roundness and flatter edges than the action pill.
- **Composition:** The flow is vertically centered and kept narrow enough that each choice reads as a single unit.
- **Visible states:** Selected choices are shown by filled dark dots or filled pills; unselected choices remain outlined or pale. Discount notes sit on the right in violet.

### Step cards and chip groups

- **Anatomy:** Radio-like yes/no rows, a company-size matrix, and optional add-on rows with right-aligned percentage notes and tiny help marks.
- **Typography:** Prompts remain in the body style; the small dates, counts, and percentage notes use the label style.
- **Spacing:** The chips wrap into dense rows with even gaps. The matrix has enough breathing room to stay readable while still feeling compact.
- **Shape:** Each chip is a pill, but the overall panel remains rectilinear, so the rounded controls stand out against the more neutral container.
- **Visible states:** One size chip can be filled while the rest stay pale; unavailable states look quieter and lighter, never more colorful.

### Archive feed

- **Anatomy:** Bright green top strip, centered archive title, small corner marks, list rows with date, title, tags, and a thumbnail on the far side.
- **Typography:** Dates are small and light; post titles use a larger body-sized line that can wrap cleanly.
- **Surface:** The archive strip makes the page feel like a board or placard. The rows themselves stay calm and open.
- **Shape:** Tags are small pills with dark outlines or pale fills. Thumbnails have rounded corners and sit inside the reading rhythm, not outside it.
- **Visible states:** The bottom action repeats the green pill language and acts like the page’s main continuation control.

### Product grid and hardware cards

- **Anatomy:** Large image tile, light backplate, product name below, then price or status text.
- **Typography:** Product names stay in the body role. Prices and status notes can be smaller and more emphatic, but they should remain legible and direct.
- **Surface:** Product cards are quiet and pale, which lets the merchandise imagery stay central.
- **Spacing:** The grid uses wide gutters and a lot of vertical room between title blocks and image blocks.
- **Visible states:** Items that are unavailable stay labeled beneath the item name. That keeps the catalog honest and easy to scan.

### Home specimen panel

- **Anatomy:** Large framed central artwork, compact supporting copy below, and a left-side section list that acts like a table of contents.
- **Typography:** The hero image is the dominant object, while the supporting paragraph uses the body or intro role depending on width.
- **Shape:** The frame around the specimen is rectangular and calm, which lets the content inside feel like a poster or software window.
- **Composition:** The panel must remain centered and isolated from the edge of the viewport so the specimen reads as the site’s anchor.
- **Visible states:** The section list stays quiet and compact until one section becomes current, then the active item can take on the action color.

## Responsive behavior

The page should preserve the reading sequence when it tightens: brand row, specimen or headline, explanatory copy, then the stacked choices or grid. On narrower widths, the big title can wrap, but it should still remain the dominant object on screen. Utility controls should compress before the specimen type does. Chip rows may wrap sooner than on desktop, but they should remain pill-based and not collapse into dense text links. Product grids should reduce columns while keeping the card ratio and the generous inner padding. Archive rows can stack their thumbnail below or beside the text, but the date and title must remain the first reading pass.

A narrower layout should not change the personality of the page. It should only reduce the number of columns and the amount of side-by-side content. The header can tighten, but the centered brand mark and the small utility cluster should still read as a deliberate top line. The buy flow should keep the selector visible above the step cards, and the archive should keep its green strip and row rhythm even when the thumbnail arrangement changes. The key rule is to preserve the hierarchy, not the exact desktop arrangement.

## Practical implementation guidance

### Preserve

- Keep the palette narrow: black, pale gray, neon green, violet, and muted gray are enough.
- Keep Monument Grotesk as the daily interface face and reserve Abc Diatype for specimen moments.
- Keep the pill shape consistent across actions, badges, and selectors.
- Let whitespace do most of the separation work.
- Keep product imagery and specimen type large enough that the page still feels like a foundry site, not a generic shop.

### Avoid

- Avoid extra accent colors or decorative gradients.
- Avoid adding shadow-heavy depth; the page is mostly flat.
- Avoid small, overstyled cards inside cards.
- Avoid replacing the pill language with square buttons.
- Avoid lowering the title scale to the point where the specimen stops feeling like the product.
- Avoid claiming font credits or licensing facts that are not stated in the packet.

### Recommended build order

1. Set the type hierarchy and the two-family split.
2. Build the palette and the pill/button shape system.
3. Recreate the header and the centered specimen or buy hero.
4. Add the stacked form panels and chip groups.
5. Build the archive strip and list rows.
6. Build the hardware and product grids.
7. Tighten responsive wrapping and verify that the large title remains dominant.

### Accessibility

- Keep visible focus treatment on every pill, chip, and utility control.
- Do not rely on color alone for selected states; use fill, outline, and position together.
- Preserve strong contrast for black text on the pale field and for text on the neon-green pill.
- Give product photos and article thumbnails useful alt text.
- Keep label text large enough to remain readable when the layout compresses, especially dates, prices, and helper marks.

## Scope note

This guide covers the supplied home, buy, archive, and hardware views for abcdinamo.com. It does not define mobile breakpoints, motion, hover or focus states beyond general accessibility advice, or exact interaction states that are not visible here. Spacing and sizes are rounded to the packet’s 0.125rem step for implementation.
