# How every.to is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/every.to-design)

Last updated: 2026-08-08

## Captured pages

[![Wide desktop hero with a centered serif headline, pale feature panel, and black framing rails](https://pin.fontofweb.com/8446?format=jpg)](https://design.withfudge.com/share/pin-8446)

[Wide desktop hero with a centered serif headline, pale feature panel, and black framing rails](https://design.withfudge.com/share/pin-8446)

[![Dense black card grid with serif story titles, small summaries, and thin vertical separators](https://pin.fontofweb.com/8445?format=jpg)](https://design.withfudge.com/share/pin-8445)

[Dense black card grid with serif story titles, small summaries, and thin vertical separators](https://design.withfudge.com/share/pin-8445)

[![Rounded mobile drawer with stacked links, line icons, and a wide subscribe button at the bottom](https://pin.fontofweb.com/8444?format=jpg)](https://design.withfudge.com/share/pin-8444)

[Rounded mobile drawer with stacked links, line icons, and a wide subscribe button at the bottom](https://design.withfudge.com/share/pin-8444)

## Overview

Every uses a black editorial shell with a very restrained grayscale system, then lifts attention through oversized serif headlines, white pill actions, and thin dividers. The page reads less like a conventional software homepage and more like a magazine front page that happens to sell products, newsletters, and subscriptions.

The structure depends on contrast rather than ornament. A centered hero band sits inside a wide black frame, article and product cards line up in dense columns, and the newsletter footer returns to the same dark ground so the page ends with a quiet, high-contrast form. Serif display copy does most of the expressive work. Sans utility text handles labels, form copy, author lines, and small navigation items.

The system should preserve these qualities:

- a nearly all-black page shell with white text
- serif headlines that feel editorial and a little literary
- compact sans labels for buttons, forms, and navigation
- thin rules and minimal chrome
- white rounded actions that stand out without loud color
- broad horizontal breathing room around the main content

## Colors

### Core interface colors

| token | value | role |
|---|---|---|
| `action` | `#FFFFFF` | Primary pills, clear calls to action, and bright control surfaces on the black shell |
| `ink` | `#000000` | Main text on white surfaces, field text, and dark accents inside light controls |
| `muted-ink` | `#626262` | Secondary copy, support text, and quieter footer or form labels |
| `secondary-ink` | `#8C8D91` | Low-emphasis metadata, small notes, and the softest readable gray |
| `line` | `#BCBCBC` | Thin separators, rules, and understated outlines |
| `line-soft` | `#BDBDBD` | Slightly softer dividers and secondary borders |
| `canvas` | `#FFFFFF` | Light panels, field fill, and the white side of reverse contrast |
| `surface` | `#000000` | The page shell, cards, header bar, menu drawer, and footer field |

The visible language stays monochrome across the interface itself. Black carries the overall frame; white powers the highest-contrast controls and any light insert; zinc grays separate hierarchies without introducing new moods. The button system stays deliberately simple: white pills, black text, and occasional thin borders. That makes the action layer feel crisp rather than decorative.

Artwork inside the page can introduce brighter color, especially in featured tiles and promotional panels, but those hues should stay inside the media area. They do not become part of the chrome. The chrome should remain black, white, and gray so the site keeps its newspaper-like calm even when a card image is vivid.

The light grays are not decorative background tones. They work as rules, metadata, and quiet hierarchy markers. If a block needs to recede, it should move toward `secondary-ink` or `line-soft` rather than inventing a new accent.

## Typography

Every and Switzer form the active type pair. Every carries the masthead, large headings, story titles, and hero statements. Switzer handles navigation, buttons, form fields, author lines, summaries, and legal copy. The family list also includes Klim Type Foundry, but this guide does not assign it a live role; verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Every | 3rem | 400 | 1.05 | -0.02em | Main homepage statement inside the feature band |
| `section-display` | Every | 2.25rem | 400 | 1.1 | -0.015em | Section leads and large footer headings |
| `card-title` | Every | 1.75rem | 400 | 1.12 | -0.01em | Story cards, product names, and article tiles |
| `body` | Switzer | 1.125rem | 400 | 1.5 | 0em | Supporting paragraphs, summaries, and footer descriptions |
| `ui` | Switzer | 1rem | 500 | 1.45 | 0.01em | Buttons, nav items, form labels, and compact interface text |
| `legal` | Switzer | 0.875rem | 400 | 1.6 | 0em | Legal copy, metadata, and the least prominent footer text |
| `overline` | Switzer | 0.75rem | 500 | 1.2 | 0.08em | Small category labels and terse navigation accents |

The hierarchy depends on size and texture more than on weight changes. Every’s regular cut still feels substantial because the words are large, tightly composed, and often centered. Switzer stays practical and legible, giving the page a clean operational layer under the more expressive serif headlines.

The display rhythm is especially important. The hero and card titles should sit close to one another in tone even when their sizes differ. That keeps the page from feeling like a patchwork of unrelated modules. The sans layer should stay visually quiet so the reading path always returns to the story surfaces first.

## Layout

The page is built as a wide black field with strong centered content and generous lateral breathing room. The top bar sits directly on the shell, with the logo centered and utility actions pulled to the edges. This creates a clear upper frame before the content starts.

The hero occupies a large inset band. It is not edge-to-edge; the surrounding black margins matter because they make the pale center panel feel like a page within the page. That inset composition is a recurring move. It lets Every use large editorial type without losing the calm of the black shell. The hero panel also leaves room for media below the statement, which helps the section feel like a publication cover rather than a plain marketing card.

Below the hero, the page settles into a dense index structure. Cards line up in even columns, each with a thumbnail, a serif title, short supporting text, and a small author or metadata line. Thin vertical and horizontal separators keep the grid readable without adding heavy boxes. The cards feel close together, but the breathing room between text blocks prevents the page from becoming crowded.

The footer repeats the same discipline at a quieter scale. A newsletter form lives on the left with a headline, short explanation, a labeled field, and a wide button. A separate link column sits to the right. The footer keeps the same dark ground as the rest of the site so the page ends in continuity rather than a sudden palette shift.

Large desktop spacing is part of the identity. Wide side margins, tall section padding, and steady internal gaps make the content feel deliberate and editorial. The system should avoid micro-layout tricks that would shrink that presence.

## Visual language

Every feels like an editorial index with a dark theater frame around it. The black background is not just a backdrop; it is the main surface that unifies the page. Against it, white copy looks sharp and quiet, while light gray rules, borders, and metadata create a measured rhythm. The result is calm and serious, but not sterile.

The expressive force comes from type and image placement rather than from shape language. Headlines are large enough to act as visual objects. Card artwork is colorful and varied, but the interface does not try to match that energy with more chrome. Instead, the shell stays restrained so the imagery can do the energetic work without disrupting the system.

Rounded corners are used sparingly. White pills, small field outlines, and the mobile drawer all use soft radius, but the card grid and page structure remain mostly rectilinear. That restraint keeps the page from drifting into a consumer-app look. The slight rounding is enough to soften the high contrast without making the interface playful.

The mobile menu continues the same voice in a tighter composition. It uses a dark panel, stacked rows, tiny line icons, and a broad bottom CTA. Nothing becomes ornate when space shrinks. The language stays clear, direct, and editorial.

## Components

### Top navigation

- **Anatomy:** centered wordmark, left-side utility icons, and right-side sign-in plus a white pill subscribe action.
- **Surface:** a black bar with a thin bottom rule.
- **Typography:** Switzer for the utility items; the wordmark stays in the serif brand voice.
- **Shape:** the subscribe control uses the pill radius; the rest of the navigation stays flat.
- **Visible states:** the navigation reads as quiet and neutral; the action stands out because it is filled and bright, not because it is oversized.

### Hero feature band

- **Anatomy:** centered brand mark, large serif headline, and a bright inset media block below the statement.
- **Surface:** a light panel floating inside the black shell.
- **Typography:** `hero-display` for the main line, with supporting text remaining secondary to the statement.
- **Composition:** centered alignment, wide side framing, and a strong pause between the headline and the media strip.
- **Role:** this section sets the page’s tone by combining editorial type with product-forward imagery.

### Story and product cards

- **Anatomy:** thumbnail, large serif title, one or two lines of summary, and a small author or metadata line.
- **Surface:** black cards separated by thin rules and narrow gutters.
- **Typography:** `card-title` for the title, `body` or `legal` for the summary and byline.
- **Composition:** grid columns stay even, and each card keeps its own reading lane.
- **Variants:** some cards are pure editorial stories; others point to products or tools, but the visual grammar stays the same.

### Newsletter footer

- **Anatomy:** large heading, short supporting sentence, labeled email field, wide subscribe button, and a secondary link column.
- **Surface:** black footer field with white field treatment.
- **Typography:** `section-display` for the lead, `body` for the explanation, and `ui` for the field label and button.
- **Shape:** the input and button use soft corners rather than sharp boxes.
- **Hierarchy:** the form comes first, the support links come second, and the legal text stays quiet at the bottom.

### Mobile drawer

- **Anatomy:** stacked navigation rows, small line icons, chevrons, and a wide bottom CTA.
- **Surface:** a dark floating panel with a softer radius than the page cards.
- **Typography:** `ui` and `legal` keep the rows readable at smaller sizes.
- **Composition:** the list is vertically packed but still breathable, with the CTA separated from the links.
- **Visible states:** the drawer feels open, controlled, and full-height without needing bright color.

## Responsive behavior

On narrow screens, the page should keep the same hierarchy but compress the arrangement. The black shell stays in place, the white action language remains visible, and the serif headings still lead. What changes is the grid: multi-column rows collapse into a single stack, the hero media crops tighter, and the footer form turns into a more compact vertical block.

The navigation becomes a drawer instead of a full-width header. That drawer needs the same monochrome discipline as the desktop bar, with stacked rows and a clear bottom action. The cards should keep their readable order even when they reflow into one column, because the title-first editorial rhythm is part of the brand.

Spacing must tighten, but not collapse. The page should still feel deliberate on a phone, not dense. Preserve the generous black margins wherever possible, even if the inner content shifts toward the center. The rounded subscribe and menu controls should remain visibly tappable, and any fields should keep enough internal padding to feel deliberate rather than cramped.

## Practical implementation guidance

### Preserve

- Keep the black shell as the dominant surface.
- Use Every for the expressive editorial layer and Switzer for the utility layer.
- Keep white pills and thin rules as the main interface cues.
- Let artwork stay vivid inside its own frame while the chrome remains monochrome.
- Retain the card-grid rhythm and the wide desktop framing.

### Avoid

- Avoid introducing new accent colors into navigation, chrome, or form treatments.
- Avoid heavy shadows, glossy surfaces, or thick borders.
- Avoid turning every block into a boxed panel; the page works because much of it stays flat.
- Avoid replacing the serif headlines with a single sans family.
- Avoid over-tightening spacing until the editorial calm disappears.

### Recommended build order

1. Establish the black shell, white text, and thin rule system.
2. Build the type scale, with Every for display and Switzer for utility text.
3. Recreate the top navigation and white pill action.
4. Build the hero feature band and its inset media treatment.
5. Add the story and product card grid.
6. Finish with the newsletter footer and mobile drawer.

### Accessibility

- Keep visible contrast strong for all text on the black shell.
- Make sure the white pill actions have a clear focus treatment.
- Label the email field explicitly and keep helper text readable.
- Provide meaningful alternative text for thumbnails and promotional artwork.
- Keep icon-only controls paired with text or accessible labels.
- Ensure the drawer can be used from the keyboard without losing the reading order.

## Scope note

This guide covers the homepage shell, the featured band, the story and product grid, the newsletter footer, and the mobile drawer. Interior article layouts, motion, and exact interactive transitions are not included.
