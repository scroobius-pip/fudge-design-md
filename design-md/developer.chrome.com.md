# How developer.chrome.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/developer.chrome.com-design)

Last updated: 2026-08-04

## Captured pages

[![Centered hero with blue headline, white subhead, and pill CTA](https://pin.fontofweb.com/6426?format=jpg)](https://design.withfudge.com/share/pin-6426)

[Centered hero with blue headline, white subhead, and pill CTA](https://design.withfudge.com/share/pin-6426)

[![Two large rounded feature cards with blue illustrations and outlined buttons](https://pin.fontofweb.com/6425?format=jpg)](https://design.withfudge.com/share/pin-6425)

[Two large rounded feature cards with blue illustrations and outlined buttons](https://design.withfudge.com/share/pin-6425)

[![Docs catalog with four dense columns of topic links on a dark shell](https://pin.fontofweb.com/6427?format=jpg)](https://design.withfudge.com/share/pin-6427)

[Docs catalog with four dense columns of topic links on a dark shell](https://design.withfudge.com/share/pin-6427)

[![Homepage feature grid with four icon circles, big titles, and link lists](https://pin.fontofweb.com/6424?format=jpg)](https://design.withfudge.com/share/pin-6424)

[Homepage feature grid with four icon circles, big titles, and link lists](https://design.withfudge.com/share/pin-6424)

[![Minimal 404 page with centered search, low-contrast error number, and rainbow footer rule](https://pin.fontofweb.com/5809?format=jpg)](https://design.withfudge.com/share/pin-5809)

[Minimal 404 page with centered search, low-contrast error number, and rainbow footer rule](https://design.withfudge.com/share/pin-5809)

## Overview

developer.chrome.com is a dark developer hub that treats Chrome as both a product platform and a publishing system. The page language stays consistent across the homepage, docs index, and 404 recovery page: charcoal background, bright blue interactions, light text, and large rounded surfaces that keep content readable at a glance. The brand feels engineered rather than decorative. Most of the visual energy comes from the contrast between the dark shell and the blue illustration blocks, not from ornament.

The site also separates page chapters clearly. The hero is spacious and centered. The feature area is more modular and card-driven. The docs index becomes denser, with many small links inside a disciplined grid. The 404 page strips the layout back to a centered recovery prompt and a thin multicolor rule at the bottom. That rhythm is a core part of the identity: the design changes density and scale, but not tone.

## Colors

### Core interface colors

| token | value | use |
|---|---|---|
| `canvas` | `#202124` | Main page field, header shell, docs background, and the base dark layer behind almost every section |
| `rule-dark` | `#000000` | Deepest border tone, dark glyph cuts, and the hardest edge in the shell |
| `ink` | `#000000` | Button labels on blue pills and the darkest small marks where the design needs hard contrast |
| `text` | `#F8F9FA` | Primary headings, body text, and the main light text on dark surfaces |
| `muted-text` | `#AFB2B6` | Secondary labels, low-priority metadata, and subtle utility text |
| `soft-text` | `#CAD1DD` | Quieter supporting copy, link notes, and the light gray that softens dense lists |
| `action` | `#4285F4` | Filled buttons, active links, feature accents, and the strongest interactive blue |
| `action-soft` | `#70B1FF` | Hero highlight blue, outlined actions, and lighter interactive emphasis |
| `accent-deep` | `#1B3C72` | Deeper blue for contrast against the dark field and for more restrained blue detail |
| `border` | `#DEDEDE` | Hairlines, dividers, and the subtle outline around utility controls |

The palette is narrow on purpose. Dark surfaces do most of the framing work, so the blues can stay readable and meaningful. `action` is the stable interaction color. `action-soft` lifts the hero headline and the outlined buttons so they read as active without becoming loud. `text` stays nearly white for primary content, while `muted-text` and `soft-text` separate tertiary navigation and dense metadata. `border` is used sparingly; on this site, a hairline should support structure, not become the structure.

Light, dark, photographic, and accent modes all stay in the same family. The homepage hero sits on the dark shell with bright blue emphasis. The feature cards introduce local bright color inside the tile illustrations, but the page background does not change to match them. The 404 page keeps the same dark field and only adds the thin multicolor Chrome rule as a brand note. That means the site can move from promotional to technical content without changing its base contrast logic.

## Typography

Google Sans 18 Pt is the visible interface face across the supplied pages. Roboto Mono is listed in the packet, but it does not appear in these screens, so it has no live role in this guide. The hierarchy depends on size, weight, and line height more than on font switching. Headlines are heavy and compact. Supporting text opens up just enough to stay legible on the dark field.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Google Sans 18 Pt | 6rem | 700 | 1.1 | 0em | Centered homepage headline with the largest blue and white statement |
| `page-display` | Google Sans 18 Pt | 3rem | 700 | 1.25 | 0em | 48px-level section and error-page headings |
| `section-display` | Google Sans 18 Pt | 1.75rem | 500 | 1.29 | 0em | Feature-card titles and the more compact large headings |
| `body` | Google Sans 18 Pt | 1rem | 400 | 1.5 | 0em | Paragraphs, footer copy, and general explanatory text |
| `body-medium` | Google Sans 18 Pt | 1rem | 500 | 1.5 | 0em | Filled buttons, primary utility labels, and emphasized short text |
| `nav` | Google Sans 18 Pt | 0.875rem | 400 | 1.43 | 0em | Top navigation and lighter header controls |
| `micro` | Google Sans 18 Pt | 0.75rem | 500 | 1.33 | 0em | Small pills, compact utility marks, and tiny interface labels |
| `dense-label` | Google Sans 18 Pt | 0.8125rem | 400 | 1.85 | 0em | Tight catalog rows and dense docs lists on the dark background |

The scale is intentionally simple. The hero uses a 96px headline because the page wants one dominant opening statement. The 48px display size appears in the 404 and docs surfaces when the page needs a strong but less theatrical heading. The 28px card title bridges the gap between marketing and documentation. Body copy stays at 16px, which keeps the dense docs page readable without making the layout feel light. The 13px and 14px UI sizes carry navigation and secondary labels, and their line heights stay generous enough to keep the dark shell from feeling cramped.

## Layout

The site is built on a centered, wide-column composition. On large screens, the main content sits well inside the viewport with wide side margins, creating the same calm shell around both the homepage and the docs index. Internal spacing is large enough to let each chapter breathe: 24px and 32px in the cards and lists, 54px and larger for section separation, and a very broad content gutter in the centered pages. That combination makes the design feel stable and editorial, not crowded.

The homepage hero is the clearest example of the layout logic. The headline is centered, the subcopy sits directly underneath, and the primary pill sits on the same vertical axis. There is no side rail fighting for attention. The hero leaves enough empty space around the stack that the bright blue word in the heading can act as the first visual anchor. That same centered logic returns on the 404 page, where the error number and search affordance sit in a large empty field rather than inside a box.

The homepage feature section moves to a two-up structure: two large cards side by side, each with a generous radius and a separate illustration zone. The cards are wide enough to hold a strong title, a short paragraph, and an outlined action without feeling like a list item. The docs page uses a denser four-column grid instead. It keeps the same dark canvas and the same typography, but it trades illustration for compact topic lists and short prompts. That shift in density tells the user whether they are browsing, learning, or recovering from a missing page.

The footer stays wide and structured. It divides content into link columns, then adds a bottom row for legal items and language controls. On the 404 page, the footer is marked by a thin multicolor Chrome rule, which becomes a visual handoff from the empty recovery field to the utility links below.

## Visual language

The visual language is a mix of soft geometry and hard technical clarity. Major containers are rounded rectangles with large radii, while small controls are pills or compact chips. The design avoids sharp corners except where utility elements demand them. That gives the page a friendly surface while keeping the content systematic.

The blue illustration blocks are the most vivid local color on the homepage. They sit inside large cards or circular frames and contrast with the dark shell without breaking the palette. Those illustrations are not decorative noise; they are the visual shorthand for platform capabilities, quality tools, productivity, and open standards. In other words, the imagery does the labeling work that many sites would push into long explanatory copy.

Shadows are restrained. The page reads more through color plane and spacing than through depth. That restraint keeps the docs pages from becoming glossy. It also makes the 404 page feel intentional rather than branded as a special effect. The one exception is the floating sense of brightness around blue controls and highlighted title words, which gives the interface a clear interaction cue without a heavy shadow stack.

Another important part of the language is repetition with small variation. Rounded tiles recur in many contexts: homepage cards, docs tiles, utility buttons, and icon containers. The system never needs a new shape family to explain a new section. It only changes scale, content density, and whether the surface carries illustration, prose, or a grid of links.

## Components

### Top bar

**Anatomy:** Chrome mark and wordmark on the left, main navigation near the center, search and utility controls on the right, and a language control plus sign-in action at the edge.

**Surface:** The bar sits directly on the dark shell rather than on a separate raised strip. That keeps it quiet and lets the hero or section headline take the lead.

**Typography:** Navigation is compact, light, and regular-weight. The controls read like utility text, not like a separate section header.

**Shape:** The visible controls lean on small radii and thin outlines. The language control and some utility buttons read as compact pills.

**Composition:** The top bar stays sparse. It frames the page but never competes with the main title or the card grid.

### Hero

**Anatomy:** Large centered headline, one short supporting line, and a single pill-shaped primary action.

**Typography:** The headline uses the largest display size in the system, with a strong blue first line and a white second line. Supporting copy drops to a smaller body size and stays centered.

**Surface:** Dark canvas only. The hero does not need a panel because the empty field is part of the composition.

**Shape:** The primary action is a filled pill with a noticeably rounded endcap shape.

**Spacing:** The hero relies on tall vertical breathing room. The headline, subhead, and button are stacked with enough gap to keep the line break readable.

### Feature cards

**Anatomy:** Large rounded tile, bright illustration or icon field, bold title, short paragraph, and either an outlined action or a short link group.

**Surface:** The cards sit on the same dark base as the rest of the page, but their internal artwork supplies the brightest local color.

**Typography:** Titles use the 28px-level display size. Body copy sits below in 16px text and stays short.

**Shape:** The cards use a 24px-class panel radius and feel intentionally soft rather than generic. Circular icon stages appear inside the cards as a secondary shape.

**Composition:** Cards are wide enough to feel like feature panels, not list rows. The visual weight of the illustration balances the title and links.

**Visible states:** The outlined button variant is blue-stroked with blue text; the filled action variant appears as the stronger call to action on the hero.

### Docs catalog

**Anatomy:** Four-column topic grid with section labels, short intro text, and dense link lists.

**Typography:** Section labels are larger and bolder than the list items. The list items stay compact and readable at the smaller UI size.

**Surface:** The docs grid keeps the same dark background, but the content density increases sharply.

**Composition:** Each column behaves like a topic lane. The separation comes from spacing, not from card borders.

### Footer and 404 recovery

**Anatomy:** Footer link columns, legal row, and in the 404 page a centered search affordance with a low-contrast error number above it.

**Surface:** The footer returns to the same dark field, while the 404 page leaves a very large empty middle zone before the footer begins.

**Typography:** Footer links are quiet and functional. The 404 number is large but intentionally subdued so the recovery prompt stays readable.

**Visible states:** The 404 page shows the search entry point and a small slash hint. The bottom rule uses Chrome’s multicolor identity line as a finishing cue.

## Responsive behavior

The page should keep the same order of importance as it narrows: brand shell, primary message, action, then supporting links or cards. The hero can collapse to a single centered stack. The two-card homepage section should step down to one card per row before the docs catalog collapses into fewer columns. The footer should retain its column groups for as long as space allows, then stack cleanly without changing the visual tone. The rounded card language should remain intact on smaller screens, because the radii are part of the site’s identity, not decoration.

## Practical implementation guidance

### Preserve

- Keep the dark shell as the default surface.
- Use `action` for the main filled CTA and `action-soft` for the lighter blue emphasis.
- Keep the display scale bold and simple: 96px hero, 48px page title, 28px card title.
- Preserve the 24px-class panel radius on feature cards and the pill shape on buttons.
- Keep the docs index denser than the homepage, but do not change the underlying typography system.

### Avoid

- Avoid switching the site to a light shell just to make cards feel more vivid.
- Avoid tiny corner radii that make the cards look generic.
- Avoid heavy shadows; the system works through color blocks and spacing.
- Avoid adding a second font family to create faux variety.
- Avoid turning the 404 page into a special illustration scene; its value is in restraint.

### Recommended build order

1. Set the dark shell, blue palette, and Google Sans hierarchy.
2. Build the top bar and the hero stack.
3. Build the reusable rounded feature card.
4. Build the docs topic grid with dense list styling.
5. Add the footer and the 404 recovery state.
6. Refine spacing so the homepage, docs index, and 404 page feel like one system.

### Accessibility

- Keep the hero and page titles on strong enough contrast against the dark canvas.
- Do not rely on blue alone to indicate links or actions; keep the button shape, underlines, or border treatment visible.
- Preserve visible focus styles on navigation, search, and every action control.
- Make sure the dense docs lists stay readable at small sizes and do not compress below the 13px and 14px roles used here.
- Keep the 404 search affordance discoverable with its label and shortcut hint intact.

## Scope note

This guide covers the homepage hero and feature cards, the docs index shell, the dense docs catalog sections, the footer, and the 404 recovery page shown here. Mobile breakpoints, hover and focus transitions, motion, and code-sample styling are not covered. Roboto Mono does not appear in the supplied screens.
