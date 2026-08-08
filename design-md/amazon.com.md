# How amazon.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/amazon.com-design)

Last updated: 2026-08-08

## Captured pages

[![Dark utility header with compact search and account controls](https://pin.fontofweb.com/2307?format=jpg)](https://design.withfudge.com/share/pin-2307)

[Dark utility header with compact search and account controls](https://design.withfudge.com/share/pin-2307)

[![Blue promotional hero above bright white merch cards](https://pin.fontofweb.com/2308?format=jpg)](https://design.withfudge.com/share/pin-2308)

[Blue promotional hero above bright white merch cards](https://design.withfudge.com/share/pin-2308)

[![Deep footer directory with dense link columns and locale controls](https://pin.fontofweb.com/2309?format=jpg)](https://design.withfudge.com/share/pin-2309)

[Deep footer directory with dense link columns and locale controls](https://design.withfudge.com/share/pin-2309)

## Overview

Amazon’s home page is built as a dense retail interface rather than a narrative landing page. The structure moves from a dark utility header into a large promotional banner, then into tight merchandising cards, a long product rail, and a deep information-heavy footer. The result is a page that rewards quick scanning: the strongest message appears at the top, smaller shopping choices fill the middle, and the bottom turns into a wide directory of links and account utilities.

The visual system depends on contrast and repetition more than ornament. Dark chrome frames the search, account, and cart tools. A bright campaign banner separates promotional messaging from the rest of the page. White panels keep product groups clear against the pale page field. The footer falls into a deeper band and compresses large amounts of navigation into compact columns. Amazon Ember carries the visible voice throughout, while Video Js belongs to the family set without shaping the shown desktop sections. Verify licensing for these families before production use.

## Colors

| token | value | use |
|---|---|---|
| `ink` | `#000000` | Core text, iconography, and the darkest label treatment |

The color story is built from role changes rather than a broad token palette. Dark utility chrome sits above the shopping content and gives the page a firm frame. The hero area shifts into a brighter campaign field so the top offer stands apart immediately. The middle of the page uses pale, nearly neutral cards to keep product images and category titles easy to compare. The footer returns to a darker band that lowers visual intensity while increasing link density. In this system, the only exact token kept is black ink, which supports the strongest text and line treatment across the page.

That restraint matters because the page already uses color for hierarchy at the surface level. The brand does not need a large set of named swatches to communicate structure. Instead, the header, promotion, content modules, and footer each rely on their own surface role. Black remains the stable exact token for copy and icons, while the other color relationships stay descriptive: dark chrome, bright campaign field, white panel, and deep directory band.

## Typography

Amazon Ember is the dominant retail family on the page. It carries the large campaign headline, the smaller section titles, the card labels, the utility navigation, and the legal text at the bottom. The hierarchy comes from scale, weight, and spacing rather than from many different families. That consistency is part of what makes the page feel sturdy even though it holds many content types at once.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Amazon Ember | 3.25rem | 700 | 1 | -0.02em | Large promotional headline in the top banner |
| `section-display` | Amazon Ember | 2rem | 700 | 1.1 | -0.02em | Merchandising section titles and rail headings |
| `card-heading` | Amazon Ember | 1.25rem | 700 | 1.15 | -0.01em | Product module titles and card headers |
| `body` | Amazon Ember | 1rem | 400 | 1.45 | 0em | Supporting copy, item labels, and explanatory lines |
| `navigation` | Amazon Ember | 0.75rem | 700 | 1.2 | 0.04em | Utility navigation, compact category labels, and small controls |
| `legal-copy` | Amazon Ember | 0.75rem | 400 | 1.3 | 0em | Footer links, legal lines, and quiet metadata |

The type scale is compact but deliberate. The campaign headline is heavy and tightly set so it reads as a single promotional block. Section titles remain bold, but they step down enough to anchor each module without competing with the hero. Body copy stays plain and restrained so thumbnails and product imagery can carry most of the attention. The footer uses the same family in a lighter and smaller treatment, which lets the dense directory remain legible without turning ceremonial.

The set also shows how the page treats emphasis. Upper navigation is compact and forceful, while the body line is calmer and easier to scan. That contrast keeps the page efficient: the user can move from a headline to a module title to a link list without needing a new visual language each time. The result is a single family that works across retail promotion, browsing, and policy text.

## Layout

The page is organized in full-width bands with strong content hierarchy. The top strip contains the utility controls, followed by a large banner that takes over the width of the page. Below that, the interface shifts into a pale shopping field where cards sit in a grid with even spacing and thin framing. A horizontal product rail stretches across the page afterward, and the footer finishes the layout with a stacked directory that extends far downward.

The middle section is the most important structural move. White cards sit on a pale field and create a stable grid for category browsing. Each card keeps its title, image set, and call-to-action in one frame, so the page can present many categories at once without feeling disjointed. The rail beneath that changes the rhythm from grid to strip. Instead of compressing the product set into more boxes, the page lets the objects run laterally so breadth becomes part of the experience. That shift gives the layout a clear pulse: grid, rail, then directory.

Spacing is practical and consistent. Major bands are separated strongly so the page reads in layers. Inside each card, the spacing is tighter, which keeps the modules dense and efficient. The outer gutter is wide enough to keep the content from touching the viewport edges. Borders remain thin and quiet, supporting the boxy structure without adding weight. Corners are minimal, which reinforces the catalog feel and keeps the interface from drifting into a soft consumer aesthetic.

The footer is a layout system of its own. It begins with a slim return-to-top strip, moves into brand and locale controls, and then expands into a large link matrix. That matrix has wide horizontal coverage but very compact vertical rhythm, which lets the site fit a large amount of utility content into a controlled space. The layout is not decorative; it is a distribution system for shopping choices, support links, and account destinations.

## Visual language

Amazon’s visual language is direct, segmented, and highly practical. The page prefers literal product photography over atmospheric imagery. Categories are shown in tidy grids. Headlines are short and forceful. Links are stacked in lists. The page signals scale by showing many options at once rather than by making any one item feel editorial or isolated.

Surface changes create the strongest rhythm. Dark chrome frames the tools at the top. A vivid promotional band marks the hero. White modules return the page to neutral browsing. The footer drops into a deeper field and becomes a dense directory. Because those surfaces are already distinct, the design does not need ornate shadows, elaborate curves, or complex gradients to organize attention. Borders and spacing do most of the work.

The page also relies on contrast between activity levels. The header is compact and task-focused. The hero is loud and promotional. The cards are balanced and comparison-driven. The footer is informational and compressed. That change in intensity helps the shopper understand where to act, where to browse, and where to look for policy or account links. The visual system stays coherent because every section uses the same family, the same restrained shape language, and the same box-based rhythm.

Shape is especially restrained. Controls are compact, cards are mostly rectangular, and large curves are rare. The result feels dependable and inventory-driven rather than boutique or editorial. This is a system built to move products, not to stage a mood.

## Components

### Utility header and search bar

- **Anatomy:** Brand mark, delivery cue, central search field, account links, cart, and a secondary category strip below.
- **Surface:** Dark chrome with white text and a pale search field.
- **Typography:** Small bold navigation text with compact tracking.
- **Shape:** Low-radius controls and a rectangular search field; the search button reads as a strong colored block.
- **Spacing:** Tight vertical packing, with the search field taking most of the horizontal width.
- **Composition:** The search bar dominates the row, while account and cart controls stay compact at the right edge.
- **Visible states:** The input framing and strong button contrast make the main action easy to find.

### Hero promotional banner

- **Anatomy:** Large headline, short supporting line, pill-shaped action, and a product image placed to the right.
- **Surface:** Bright campaign field with high contrast text and a warm action accent.
- **Typography:** Oversized bold display copy with a smaller supporting line below.
- **Shape:** Rounded pill action; the rest of the banner stays flat and rectangular.
- **Spacing:** Large open area around the product image so the copy remains dominant.
- **Composition:** Left-aligned message, right-side object, and side chevrons that imply browsing.
- **Visible states:** The banner depends on strong contrast and a clear action shape rather than decorative effects.

### Merchandising card grid

- **Anatomy:** Section title, a 2x2 set of product thumbnails, short item labels, and a footer link.
- **Surface:** White card on a pale page field with a thin border.
- **Typography:** Bold card title and smaller regular labels beneath each image.
- **Shape:** Nearly square card body with minimal corner rounding.
- **Spacing:** Small internal image gaps and narrow vertical spacing between title, thumbnails, and the callout link.
- **Composition:** Each card acts like a compact shelf, keeping category, image, and link in one clear block.
- **Visible states:** The module reads as a clickable unit through framing and consistency rather than shadow or motion.

### Horizontal bestseller rail

- **Anatomy:** Rail title, a long row of book covers, and side chevrons for browsing.
- **Surface:** White strip with dense product imagery.
- **Typography:** Small bold heading at the rail start.
- **Shape:** Flat strip; product covers provide most of the visual rhythm.
- **Spacing:** Tight item spacing with enough separation to keep each cover distinct.
- **Composition:** The covers run laterally to suggest breadth and quick comparison.
- **Visible states:** The edge chevrons signal movement through the set and keep the rail feeling active.

### Footer directory

- **Anatomy:** Return-to-top strip, brand and locale row, large link directory, and legal line.
- **Surface:** Deep directory band with muted light text.
- **Typography:** Small compact headings and lighter legal copy.
- **Shape:** Rectangular bands with no decorative framing.
- **Spacing:** Tall link columns with consistent vertical rhythm and broad horizontal separation.
- **Composition:** Information is grouped by topic, then compressed again at the bottom for policy and copyright text.
- **Visible states:** The locale controls and links remain legible through contrast rather than size alone.

## Responsive behavior

On narrower screens, the page should keep the same attention order: header tools first, then the hero promotion, then the shopping modules, then the footer. The search bar will usually need to compress before the product cards do. Card grids should move from four columns to two, then to one, while keeping the title and thumbnail order intact. Horizontal rails should remain swipeable or scrollable rather than being forced into tall stacks. The footer can stack its columns, but the link groups should still read as grouped topics rather than one long list. The surface rhythm should remain consistent at every width so the page stays instantly recognizable.

The layout should also preserve the sense of density. When columns collapse, modules should not spread too far apart. The page works because it feels full of choice, so spacing should shrink before the interface loses its catalog character. The hero can keep its message-first structure, and the footer can stay information-heavy even when broken into smaller vertical groupings.

## Practical implementation guidance

### Preserve
- Keep the dark utility chrome, bright hero field, white cards, and deep footer in the same order of contrast.
- Preserve the dense catalog feel; the page should show many choices without turning cluttered.
- Keep type compact and bold in the hero, then smaller and more regular in card copy and footer links.
- Let borders and spacing separate modules rather than adding extra decorative frames.

### Avoid
- Avoid softening the page into a lifestyle editorial layout.
- Avoid large rounded cards, heavy shadows, or pastel drift.
- Avoid giving every module a different accent treatment.
- Avoid oversized whitespace that weakens the retail density.
- Avoid introducing alternate families for minor emphasis.

### Recommended build order
1. Build the dark header and search bar.
2. Add the promotional hero with its action pill and right-side image.
3. Build one reusable merchandising card.
4. Repeat that card into the grid and then add the horizontal product rail.
5. Finish with the footer directory and locale controls.

### Accessibility
- Keep contrast strong on the promotional banner and the dark footer.
- Make the search field, chevrons, and links clearly focusable.
- Give product thumbnails concise alt text that names the item or category.
- Do not rely on color alone to distinguish action buttons from plain links.
- Keep tap targets large enough for the search button, locale control, and rail arrows.

## Scope note

This guide covers the desktop home page surface shown here: the utility header, seasonal hero, merchandising grid, product rail, and footer. It does not include mobile reflow, signed-in personalization, hover motion, checkout flows, or alternate campaign layouts.
