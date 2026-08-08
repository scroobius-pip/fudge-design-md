# How app.reve.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.reve.com-design)

Last updated: 2026-08-08

## Captured pages

[![Left rail with one tile and a wide empty work field](https://pin.fontofweb.com/8374?format=jpg)](https://design.withfudge.com/share/pin-8374)

[Left rail with one tile and a wide empty work field](https://design.withfudge.com/share/pin-8374)

[![Account page with stacked rows and a green energy meter](https://pin.fontofweb.com/8375?format=jpg)](https://design.withfudge.com/share/pin-8375)

[Account page with stacked rows and a green energy meter](https://design.withfudge.com/share/pin-8375)

[![Full inspiration grid with cool ice, red fruit, and blue flowers](https://pin.fontofweb.com/8372?format=jpg)](https://design.withfudge.com/share/pin-8372)

[Full inspiration grid with cool ice, red fruit, and blue flowers](https://design.withfudge.com/share/pin-8372)

[![Detail workspace with a centered image stage and action rail](https://pin.fontofweb.com/8373?format=jpg)](https://design.withfudge.com/share/pin-8373)

[Detail workspace with a centered image stage and action rail](https://design.withfudge.com/share/pin-8373)

[![Pricing page with two dark plan cards and white pill actions](https://pin.fontofweb.com/8370?format=jpg)](https://design.withfudge.com/share/pin-8370)

[Pricing page with two dark plan cards and white pill actions](https://design.withfudge.com/share/pin-8370)

## Overview

Reve is built as a dark creative workspace with a strict split between the black shell and the content that sits inside it. The left rail stays narrow and quiet so the main area can change shape without breaking the system. On one page the content becomes a small project starter, on another it becomes a centered pricing comparison, and on another it expands into a full image board or a focused detail workspace. The design is not trying to look lively through chrome. It stays restrained and lets the imagery supply motion, color, and drama.

The strongest repeated cue is the white pill action. It appears as a compact commitment shape that stands out cleanly against charcoal and black surfaces. Secondary controls stay darker and flatter. That contrast keeps the interface legible even when the page is dense with rows, feature lists, or image tiles. The result feels premium because it is controlled, not because it is ornate.

The visual character comes from discipline, from the way empty space is left open, and from the way the artwork is allowed to dominate the pages that need it.

## Colors

Reve relies on a dark base. The UI chrome stays in black and charcoal, while the images bring in the cool and warm color that keeps the pages from feeling flat. Light mode, if one is ever added, should keep the same role map: background, surface, border, ink, action, and status should keep their relationship even if the tones invert. Photographic content keeps its own palette. Accent color belongs to actions and status marks, not to the chrome itself.

### Core UI colors

| token | value | use |
|---|---|---|
| `canvas` | `#000000` | Main page background, left rail, and the broad dark field behind the work area |
| `surface` | `#111111` | Dark buttons, top-bar chips, and the deepest non-black UI surfaces |
| `surface-elevated` | `#1A1A1A` | Card bodies, settings rows, and pricing panels that need to sit above the canvas |
| `surface-raised` | `#232323` | Slightly brighter card fill for stronger separation inside dense panels |
| `border` | `#303030` | Hairline rules, button outlines, and divider lines between settings groups |
| `ink` | `#F5F5F5` | Main text on dark surfaces, including headings and primary labels |
| `ink-muted` | `#A1A1A1` | Helper text, secondary labels, and low-priority metadata |
| `action` | `#FFFFFF` | Primary pills such as Sign up, Get Free, Get Pro, and Upgrade |
| `action-ink` | `#111111` | Text inside white pills |
| `status` | `#34D269` | Plan meters, small positive marks, and compact system indicators |
| `danger` | `#E35656` | Destructive links such as delete actions |

### Image and media accents

| token | value | use |
|---|---|---|
| `image-ice` | `#A9D7E9` | Glacier tones, cool image fields, and pale blue photography backgrounds |
| `image-blue` | `#5DA7F2` | Secondary cool accents inside image-heavy boards |
| `image-violet` | `#7A77F1` | Saturated floral and abstract image regions |
| `image-red` | `#E11B2D` | Bright fruit, flower, and highlight-heavy imagery |
| `image-gold` | `#E2C45E` | Warm highlight bands, sunlit edges, and soft amber image tones |

The interface should remain nearly monochrome even when the page becomes colorful. Use `status` only for positive system cues, use `danger` only for destructive actions, and keep the image colors tied to the artwork rather than the UI shell. The chrome reads as a dark stage, while the media can burst into blue, violet, red, and gold without changing the tone of the controls.

## Typography

The family is not identified with certainty, so the safe choice is a neutral sans stack documented as unverified. The page relies on size, weight, and spacing to build hierarchy, not on decorative letterforms. That makes the text feel compact, modern, and direct. Strong headings sit above quieter labels, while rows, helper copy, and metadata stay smaller and lighter. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | unverified sans | 3.5rem | 700 | 1 | -0.03em | Large landing headings and the strongest page statements |
| `section-display` | unverified sans | 2.5rem | 700 | 1.05 | -0.025em | Page titles, pricing headings, and major section leads |
| `card-heading` | unverified sans | 1.25rem | 600 | 1.15 | -0.02em | Plan names, section labels, and prominent card headings |
| `body` | unverified sans | 1rem | 400 | 1.5 | 0em | Explanatory copy, helper text, and account details |
| `body-strong` | unverified sans | 1rem | 600 | 1.5 | 0em | Button labels, emphasized row labels, and value text |
| `label` | unverified sans | 0.75rem | 600 | 1.2 | 0.08em | Small section labels, compact utility text, and short captions |
| `meta` | unverified sans | 0.75rem | 400 | 1.4 | 0em | Secondary notes and supportive copy beneath labels |
| `navigation` | unverified sans | 0.75rem | 500 | 1.3 | 0em | Sidebar items, top-bar links, and short utility navigation |

The key rhythm is the jump from display text to body copy, then from body copy to metadata. Headings should feel weighty without becoming oversized. Labels should stay crisp so the side rail, settings sections, and pricing details are easy to scan. The system should never depend on a quirky typeface to carry personality; the layout and contrast already do that work.

## Layout

Reve uses a narrow left rail and a much larger working field on the right. The rail keeps the brand, destinations, and utility links in one quiet vertical stack. That leaves the main area free to become whatever the page needs: a sparse project starter, a centered comparison page, a layered account form, or a dense image board. The left rail never competes with the content. It exists to orient the user, not to dominate the screen.

The home and project views are intentionally open. A single square album tile sits near the top, with a lot of empty space around it. That makes the tile feel like the first action rather than one card among many. The page title stays small and aligned so the whole screen keeps a calm, studio-like feel. When the page needs to move from browsing to making, the composition does not change radically; it simply gives the focal tile more breathing room.

The inspiration pages use the opposite strategy. They fill the viewport with a tight mosaic of large rectangles. Seams are thin and the images sit close together, so the page reads as an editorial wall rather than a list. The large grid makes the image color feel abundant, but the black chrome keeps the interface controlled. The page title and actions stay above the board and out of the way.

Pricing returns to balance. Two equal cards sit centered beneath a large heading, and both cards keep the same height and width. The comparison is immediately clear because the eye does not have to solve an uneven layout. The account page narrows again into a simple column with stacked sections, separators, and right-aligned controls. The detail workspace gives the central image stage most of the width and pushes tools into a side rail, so the image remains the hero of the screen.

The layout is built around contrast in density: sparse on the home and account surfaces, dense on the inspiration board, and balanced on pricing. That variation makes each page feel appropriate without breaking the shared system.

## Visual language

Reve’s visual language is dark, cinematic, and tightly edited. The base surface is black, not gray, and that choice gives every lighter panel a strong sense of lift. Charcoal cards rise above the canvas only a little. Borders stay thin. Shadows, if they appear at all, should be restrained. The interface should never feel glossy or overworked.

Rounded shapes are soft but controlled. Pills are reserved for actions and status chips. Cards and tiles use moderate corner radii that keep the surfaces calm without turning them playful. The shapes repeat across the app shell, pricing cards, and settings rows so the whole product feels like one system rather than a set of unrelated screens.

Color is rationed carefully in the chrome. White marks the strongest actions. Green is for positive status and energy indicators. Red is for destructive links. Everything else stays muted. The actual media is where the bright ice, red fruit, blue flowers, violet fields, and gold highlights appear. That separation matters because it lets the interface stay premium while the imagery stays vivid.

Spacing does a lot of the work too. Large empty fields make the page feel focused. Thin dividers separate account sections without adding visual bulk. In the image-rich views, the tight seams between tiles create an immersive wall. In the quieter views, more breathing room makes the primary tile or comparison card feel important.

## Components

### App shell

- **Anatomy:** Brand at the top, a short vertical navigation list, and a few utility items near the bottom.
- **Surface:** The rail sits on the pure black canvas so the content field can read as a separate plane.
- **Typography:** Compact `navigation` text with small icons that remain secondary to the labels.
- **Shape:** Mostly square and low-profile, with any active row shown as a soft dark pill rather than a loud highlight.
- **Composition:** Keep the rail narrow and let the content area own the width.

### Primary and secondary actions

- **Primary action:** White pill, black label, medium weight, used for the strongest commitments such as Sign up, Get Free, Get Pro, and Upgrade.
- **Secondary action:** Dark pill with a thin border, used for actions such as Log out, Reset, Connect, Open, and Contact.
- **Spacing:** Keep the buttons compact and consistent so they feel like one family across the site.
- **Visible states:** The primary pill should stay crisp against dark surfaces; the secondary pill should remain readable without becoming a full button system.

### Pricing cards

- **Anatomy:** Plan name, price, short intro line, feature list, and one button at the bottom.
- **Surface:** Charcoal cards on the black pricing field, with the Pro card taking on a slightly cooler tint.
- **Typography:** `card-heading` for plan names, `body` for feature lines, and `body-strong` for the button.
- **Shape:** Medium-radius cards with a fully rounded call to action.
- **Composition:** Keep both cards the same height and the same width so the comparison stays simple.

### Album and project tiles

- **Anatomy:** A single square tile with a centered plus, followed by a short label and a muted description.
- **Surface:** A flat dark block that looks ready to be replaced by real work.
- **Typography:** Small `body` or `meta` text below the tile; avoid oversized labels.
- **Shape:** Straightforward square geometry with a soft corner radius.
- **Hierarchy:** The tile should feel like a starting point, not a thumbnail gallery.

### Inspiration grid

- **Anatomy:** Large rectangular image tiles arranged in a tight mosaic.
- **Surface:** The images supply nearly all of the color, while the chrome remains black and minimal.
- **Shape:** Small radii at most; the grid should read as a clean matrix, not a set of floating cards.
- **Composition:** Use wide tiles and only narrow seams so the board feels immersive.
- **Visible states:** Keep selection and focus affordances subtle so the images stay dominant.

### Account settings column

- **Anatomy:** User identity block, plan section, login section, support section, preferences section, and a final destructive link.
- **Surface:** Dark rows with thin separators and muted helper copy beneath the main labels.
- **Typography:** `card-heading` or `body-strong` for section titles and row labels, `meta` for the helper line.
- **Shape:** Buttons remain pill-shaped, while the rows stay open and list-like.
- **Hierarchy:** The most important control is the plan status and upgrade action; the rest should feel subordinate and orderly.

### Detail workspace and inspector rail

- **Anatomy:** Large central image stage, top action strip, right-side rail of actions, and a small instruction area near the bottom.
- **Surface:** Black field with dark action blocks so the image remains the brightest element.
- **Composition:** Keep the image centered and give the inspector enough width to feel usable without competing with the stage.
- **Visible states:** Action buttons should be clear, but they should not break the dark hierarchy of the workspace.

## Responsive behavior

When the layout tightens, keep the same reading order: brand first, then navigation, then the page title, then the main content. The rail should collapse cleanly instead of forcing text into a cramped strip. The inspiration board should reduce to fewer columns while keeping the wide, immersive feel of the image tiles. Pricing should stack its cards with equal spacing and preserve the white action pills. The account page should widen into a single column with dividers still clear and controls still aligned. The detail workspace should let the stage shrink before the side rail takes over. Keep the dark system intact at every size.

## Practical implementation guidance

### Preserve

- Keep the black-first shell across home, inspiration, pricing, account, and the detail workspace.
- Use white pill actions for the highest-value calls to action.
- Keep green limited to status and energy indicators.
- Preserve the narrow left rail and the spacious content field to its right.
- Let the imagery carry saturation while the chrome stays quiet.

### Avoid

- Avoid colorful app chrome or multi-hue button sets.
- Avoid deep shadows, glossy gradients, and heavy glows.
- Avoid tiny rounded cards nested inside other tiny rounded cards.
- Avoid mixing image color into the UI token set.
- Avoid turning every row into a button; the account page works because it is mostly plain text and divider lines.

### Recommended build order

1. Establish the black canvas, charcoal surfaces, and white text pair.
2. Build the pill buttons and the compact sans hierarchy.
3. Recreate the left rail and the main content split.
4. Add the pricing cards and the account settings column.
5. Build the inspiration mosaic with image-first behavior.
6. Tune the responsive collapse so the same hierarchy survives on small screens.

### Accessibility

- Keep contrast high on charcoal backgrounds, especially for helper text and small labels.
- Give icon-only controls visible labels or adjacent text.
- Use a clear focus style on pills, side-rail items, and small utility actions.
- Do not rely on green alone to communicate plan or status changes.
- Keep destructive actions distinct in color and placement so they are easy to recognize.

## Scope note

This guide covers the dark home shell, the inspiration board and detail workspace, the pricing page, and the account/settings surface. It does not define mobile breakpoints, motion, loading states, or alternate color themes. Measurements are practical adaptation targets.
