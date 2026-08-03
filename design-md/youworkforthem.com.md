# How youworkforthem.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/youworkforthem.com-design)

Last updated: 2026-08-03

## Captured pages

[![Free-font grid with black specimen cards, green prices, and pager row](https://pin.fontofweb.com/7437?format=jpg)](https://design.withfudge.com/share/pin-7437)

[Free-font grid with black specimen cards, green prices, and pager row](https://design.withfudge.com/share/pin-7437)

[![Collection page with centered badge, intro copy, and alternating rows](https://pin.fontofweb.com/7436?format=jpg)](https://design.withfudge.com/share/pin-7436)

[Collection page with centered badge, intro copy, and alternating rows](https://design.withfudge.com/share/pin-7436)

[![Home page with black header, search bar, and dense promotional strip](https://pin.fontofweb.com/7435?format=jpg)](https://design.withfudge.com/share/pin-7435)

[Home page with black header, search bar, and dense promotional strip](https://design.withfudge.com/share/pin-7435)

[![Wide home view with centered feature block, CTA pill, and footer links](https://pin.fontofweb.com/7434?format=jpg)](https://design.withfudge.com/share/pin-7434)

[Wide home view with centered feature block, CTA pill, and footer links](https://design.withfudge.com/share/pin-7434)

[![Blue registration gate with split illustration and stacked signup form](https://pin.fontofweb.com/7433?format=jpg)](https://design.withfudge.com/share/pin-7433)

[Blue registration gate with split illustration and stacked signup form](https://design.withfudge.com/share/pin-7433)

## Overview

YouWorkForThem is a catalog-first marketplace with a very quiet shell and very loud specimens. The interface frame stays almost entirely monochrome: a black utility bar at the top, a white canvas beneath it, and pale controls that keep their distance from the artwork. The page does not try to become a brand poster. It behaves like a working foundry storefront, where the product tiles carry the personality and the surrounding UI only organizes the flow.

The strongest visible rhythm comes from contrast in density. The home and listing pages keep a strict grid of large cards, while the collection pages use a lighter editorial opening and then move into rows of alternatives. The free-fonts view adds pagination, sort controls, and a compact search field without changing the overall tone. The registration gate is the one place where the palette steps out of the monochrome frame and turns saturated blue, but that is a separate conversion surface rather than a system-wide color language.

The visual system is built from small, repeatable parts: black nav, white page, light pill controls, bold product art, small metadata lines, and a narrow green accent for free prices. Everything else is background logic.

## Colors

The brand shell uses a tight set of visible roles.

| token | value | use |
|---|---:|---|
| action | `#000000` | Top-bar links, primary text emphasis, and the dominant neutral control color |
| canvas | `#ffffff` | Main page background and the open space around catalog sections |
| ink | `#000000` | Headings, product titles, navigation text, and general body copy |
| surface | `#f4f4f4` | Soft control fills, quiet chips, and button backgrounds |
| surface-soft | `#efefef` | Slightly stronger fills for pills, pagers, and small utility blocks |
| border | `#e5e5e5` | Hairline separators, input edges, and toolbar framing |
| inverse | `#ffffff` | Text and icons on the black header and dark specimen art |
| free-price | `#0f8548` | The `from Free` callout and other free-item pricing accents |
| shadow | `#c3c3c3` | The softest visible depth treatment, used sparingly |

The shell stays black, white, and gray. That discipline matters because the product art is already saturated: orange, teal, black, cream, mint, lavender, and photographic neutrals appear inside the cards themselves. Those image colors should not become interface tokens. They are specimen color, not brand chrome.

The green free-price accent is the one semantic exception. It carries commercial meaning without competing with the black page frame. Keep it small and literal. Do not spread it across the interface as a general success system; on the pages shown here it is a price signal, not a mood color.

The page also uses a very pale layer for controls. The pills, dropdowns, and pager cells read as off-white or light gray against the pure white canvas, so they stay visible without becoming heavy. That slight tonal separation is enough; the site does not need strong borders or repeated fills to define structure.

## Typography

The visible interface is mostly set in **Valid**, with **Helvetica** appearing in the registration button on the gate screen. Valid is the stable catalog voice: plain, compact, and functional, with regular and bold cuts doing the work. The font feels like a good retail UI face because it disappears when the page is dense and sharpens when the page needs emphasis. Helvetica appears as a one-off control treatment in the modal and should be treated as a local exception rather than a second system face.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `page-title` | Valid | 1.125rem | 700 | 1.1 | -0.01em | Page headings such as “Free Fonts” and collection names |
| `section-title` | Valid | 1.125rem | 700 | 1.2 | -0.005em | Section labels like “Discover Popular Font Alternatives” |
| `card-title` | Valid | 0.875rem | 700 | 1.2 | 0em | Product names beneath each specimen tile |
| `body` | Valid | 0.875rem | 400 | 1.6 | 0em | Intro copy, descriptions, and card bylines |
| `meta` | Valid | 0.875rem | 400 | 1.4 | 0em | Breadcrumbs, counts, and supporting catalog text |
| `button` | Helvetica | 0.875rem | 400 | 1 | 0em | The registration button treatment in the modal |
| `brand-ui` | Valid | 0.875rem | 400 | 1.5 | 0em | Top-bar navigation and small utility controls |
| `label` | Valid | 0.75rem | 700 | 1.1 | 0.01em | Tight utility labels, page controls, and accent tags |

The hierarchy is compact, not expressive. Titles are just large enough to steer the eye. The product art does the shouting, so the surrounding text should stay modest and readable. The site’s most important typographic move is the consistent pairing of a bold product title with a quieter byline or category line directly below it. That makes the dense grids scannable without needing bigger typography.

Font licensing is not established in the supplied materials.

## Layout

The layout is organized as stacked catalog chapters, not as a marketing landing page with dramatic vertical resets. The black header sits on top of everything, then the white canvas opens into a narrow editorial intro, then the grid takes over.

The free-fonts page is the clearest example of the system. It begins with a short title and breadcrumb, followed by a single-line search field aligned to the right. Under that is a paragraph of explanatory copy that stays short and calm. The next row is a toolbar: pagination cells on the left and sort plus view toggles on the right. Only after that does the grid begin. This sequencing is important because it tells the user that browsing and filtering are the core tasks, not decoration.

The collection page uses a different first beat. A circular mark and a short title block create a centered editorial header, then the grid expands into four-up rows of alternative specimens. The text block is narrow and left aligned, which keeps the opening feeling like a catalog introduction rather than a hero banner. The cards are wide enough to let the specimen art dominate while the titles and blurbs sit quietly below.

The home page uses a broader promotional strip. It shows multiple large specimen tiles in a horizontal run, then follows with a centered discovery section, a CTA pill, a registration prompt, and finally a footer. That sequencing creates a long browsing page with clear transitions: showcase, collection, call to action, conversion. The dense home view also shows that the grid can become more expansive on wider screens without changing its structural language.

Whitespace is generous, but it is always functional. It gives the artwork room to breathe and keeps the controls from clumping into the catalog rows. The page avoids ornamental dividers, deep shadows, and nested cards. Separation comes from spacing, consistent widths, and the contrast between pure white background and bold image surfaces.

## Visual language

The site’s visual language is specimen-led and editorial. The cards are not generic product thumbnails; they are poster-like previews that often fill the entire tile with a single typographic composition. Some use black fields with huge white lettering. Others use bright orange, teal, mint, or cream. A few use photographic or textured backgrounds. The effect is a marketplace that feels stocked with many voices while keeping one consistent frame around them.

Three visual habits define the page:

1. **Quiet chrome, loud content.** The top bar, search field, controls, and footer are calm. The product art gets the color and scale.
2. **Flat structure, small relief.** Borders are thin, shadows are rare, and corners are only slightly rounded. The page is not trying to look soft or material-heavy.
3. **Catalog rhythm over hero drama.** Even the larger promotional sections are arranged like shelves or rows, not like a single oversized campaign panel.

The green free-price text is the only recurring UI accent that reads as semantic rather than decorative. Everything else in the shell is almost aggressively neutral. The registration gate breaks that rule with a saturated blue field on the left and a white form on the right. That panel is useful because it shows the brand can temporarily switch modes for conversion without rewriting the whole system.

Shape is also part of the language. The interface controls are mildly rounded, the pills are clearly pills, and the cards are mostly square with minimal corner treatment. That lets the specimen imagery feel framed rather than decorated. The system should keep those shapes simple and not introduce a second, softer rounding scale for no reason.

## Components

### Top bar

- **Anatomy:** Left logo, centered category navigation, and right-side utility links for login, currency, and search.
- **Surface:** Solid black bar with white text and icons.
- **Typography:** Small, regular-weight Valid.
- **Shape:** Rectangular, no visible softness.
- **Composition:** Keep the header visually light in weight even though it is dark in color. It anchors the page but does not compete with the product art.

### Search field

- **Anatomy:** Compact pill input with an icon and placeholder text.
- **Surface:** Pale fill on a white page.
- **Typography:** Small, quiet Valid.
- **Shape:** Fully pill-like with gentle corners.
- **Spacing:** Enough horizontal padding to make the field feel calm rather than dense.
- **Visible state:** Stays understated; the page does not turn the search bar into a hero object.

### Toolbar and pager

- **Anatomy:** Page numbers, next-step cells, a sort dropdown, and view toggles.
- **Surface:** Light gray or off-white control blocks with thin borders.
- **Typography:** Small Valid with clear hierarchy between labels and numbers.
- **Shape:** Slight rounding, but not full pills for every control.
- **Composition:** The toolbar should read as a utility row, not a secondary navigation bar. Keep the controls separated, evenly padded, and easy to scan.

### Product card

- **Anatomy:** Specimen image, bold product title, byline/category line, and a price aligned to the right.
- **Surface:** White card body under a loud art tile.
- **Typography:** Bold name, regular byline, and a small price treatment.
- **Shape:** Mostly square, with minimal rounding.
- **Composition:** The artwork is the largest element and should remain visually uninterrupted. The metadata beneath it should stay tight and consistent from card to card.
- **Visible states:** Some cards carry a small red sale tab in the upper-left corner; free items keep the price in green. Those states should remain small and literal.

### Collection feature card

- **Anatomy:** Large specimen tile, collection name, and one or two lines of description.
- **Typography:** Bold title with a quieter paragraph.
- **Surface:** Often very high contrast in the specimen image, but the surrounding text stays neutral.
- **Composition:** Use four-up rows or similarly dense grouping. The cards should feel editorial and browseable, not like isolated hero modules.

### Registration gate

- **Anatomy:** Split layout with a bright blue illustrated panel on the left and a white form on the right.
- **Typography:** Oversized white promise text on the blue field; smaller form labels and a prominent button on the right.
- **Shape:** Rounded form fields and rounded buttons; still clean and not playful in a generic way.
- **Composition:** The left side is emotional and promotional, while the right side is transactional. Keep that contrast clear.
- **Visible states:** Checkbox, stacked third-party sign-up buttons, and a close control are all visible and should remain easy to find.

### Footer and contact chip

- **Anatomy:** Multi-column link grid, centered legal copy, social icons, and a floating contact chip.
- **Surface:** White, with light divider lines and very low-contrast text.
- **Typography:** Small Valid throughout.
- **Composition:** The footer should feel like a utility directory after the catalog work is done. The floating contact chip stays secondary and should not interrupt the product grid.

## Responsive behavior

Only the wide desktop behavior is visible in the supplied views. On the standard desktop layout, the free-fonts page holds a four-column product grid with a compact control row above it. On wider views, the home page and collection pages become denser and longer, showing that the system is willing to add visual breadth rather than only scaling the same layout. The intro copy narrows into a centered editorial column while the grid takes most of the horizontal space.

Do not assume a full mobile breakpoint ladder from these views. The visible behavior is about desktop densification, not about a phone layout. If a smaller viewport is needed, the safest inference is that the system would stack the editorial blocks and preserve the catalog order, but that is not confirmed here and should not be presented as fact.

## Practical implementation guidance

### Preserve

- Keep the shell monochrome: black header, white canvas, light controls, dark text.
- Let specimen art carry the expressive color and visual energy.
- Preserve the tight relationship between product title, byline, and price.
- Keep the green free-price accent isolated and consistent.
- Use thin borders and generous spacing instead of heavy elevation.
- Treat the registration gate as a separate conversion surface, not as the site’s default color system.

### Avoid

- Do not turn the chrome into a decorative brand stage.
- Do not add gradients, glass effects, or heavy shadows to the catalog frame.
- Do not replace the dense grid with oversized feature cards that reduce browsing speed.
- Do not make every control a pill; the toolbar needs a mix of cells, fields, and dropdowns.
- Do not invent a second accent palette from the colors inside the specimen art.
- Do not claim mobile or hover behavior that is not established in the page views.

### Recommended build order

1. Build the black header and the white page canvas.
2. Set the Valid-based type scale for titles, metadata, and controls.
3. Add the search field, toolbar row, and pager.
4. Build the specimen card with title, byline, and green free-price variant.
5. Add the collection intro and dense alternative-card rows.
6. Add the registration gate as a separate conversion layout.
7. Finish with the footer and floating contact chip.

### Accessibility

- Keep the green free-price text readable against white and never rely on color alone for meaning.
- Make the card title and byline contrast strong enough to survive against loud specimen art.
- Provide clear focus states for the header links, search field, pager, sort menu, and CTA pills.
- Keep the modal form labels visible and separate from placeholder text.
- Ensure the close control in the gate is obvious and not buried in the layout.
- Treat every specimen image as meaningful content that needs descriptive alternative text.

## Scope note

This guide covers the visible desktop catalog surfaces on the home page, free-font listing, collection listing, registration gate, footer, and floating contact chip. Mobile layout, hover motion, loading states, and broader font licensing details are not established here.

## Colors

- `#000000`
- `#ffffff`
- `#000000`
- `#f4f4f4`
- `#efefef`
- `#e5e5e5`
- `#ffffff`
- `#0f8548`
- `#c3c3c3`

## Typography used on youworkforthem.com

- **Valid** — weight 400 · size 14px
- **Helvetica** — weight 400 · size 14px
