# How capacity.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/capacity.so-design)

Last updated: 2026-08-04

## Captured pages

[![Hero stage with serif headline over a warm desert gradient and a centered prompt box](https://pin.fontofweb.com/7415?format=jpg)](https://design.withfudge.com/share/pin-7415)

[Hero stage with serif headline over a warm desert gradient and a centered prompt box](https://design.withfudge.com/share/pin-7415)

[![Dark feature callout with bullet list left and a green checklist card right](https://pin.fontofweb.com/7716?format=jpg)](https://design.withfudge.com/share/pin-7716)

[Dark feature callout with bullet list left and a green checklist card right](https://design.withfudge.com/share/pin-7716)

[![Community gallery with filter chips and a wide two-row grid of rounded project cards](https://pin.fontofweb.com/7715?format=jpg)](https://design.withfudge.com/share/pin-7715)

[Community gallery with filter chips and a wide two-row grid of rounded project cards](https://design.withfudge.com/share/pin-7715)

[![Clone page with aurora wash, translucent URL field, and compact example chips below](https://pin.fontofweb.com/7714?format=jpg)](https://design.withfudge.com/share/pin-7714)

[Clone page with aurora wash, translucent URL field, and compact example chips below](https://design.withfudge.com/share/pin-7714)

[![MVP builder page with a centered serif promise and a black prompt module](https://pin.fontofweb.com/7713?format=jpg)](https://design.withfudge.com/share/pin-7713)

[MVP builder page with a centered serif promise and a black prompt module](https://design.withfudge.com/share/pin-7713)

[![Pricing page with four plan cards, a one-time purchase band, and a dark FAQ block](https://pin.fontofweb.com/7712?format=jpg)](https://design.withfudge.com/share/pin-7712)

[Pricing page with four plan cards, a one-time purchase band, and a dark FAQ block](https://design.withfudge.com/share/pin-7712)

## Overview

Capacity reads as a dark, centered product-site system for AI website building. The pages lean on one calm formula: a near-black canvas, white or zinc text, rounded cards with thin borders, and a warm action color that appears only where the interface needs a decision. Large serif headlines do the selling. Smaller sans text does the explaining. The result feels technical without turning into a dashboard, and cinematic without becoming decorative.

The visual rhythm comes from contrast between surfaces. The hero pages sit over textured scenic gradients and blurred color fields, while the gallery and pricing views sit on flat charcoal backgrounds with dense card grids. Black prompt boxes, translucent panels, and white selected pills keep the interface legible against those atmospheric backdrops. The whole system favors broad spacing, compact copy blocks, and a few strongly framed controls rather than many competing accents.

## Colors

Capacity uses a narrow dark palette and then adds warmth only where the page needs a focal point. The base surface is almost black; the card stack lifts one step above it; borders stay close to the surfaces so they shape panels without drawing attention. White text carries the main message. Zinc copy carries the quieter labels and helper text. Orange is the main action family, and green appears as a confirmation and checklist color, never as a general decoration.

| token | value | use |
|---|---|---|
| `canvas` | `#09090B` | Full-page background, hero base, and the deepest marketing surfaces |
| `surface` | `#171717` | Primary cards, prompt wells, and dark panel fills |
| `surface-raised` | `#1C1C1C` | Higher-emphasis cards, pricing tiles, and nested modules |
| `surface-subtle` | `#232323` | Secondary card fills, utility strips, and quiet panel contrast |
| `border` | `#27272A` | Card outlines, control edges, and grid separators |
| `ink` | `#FAFAFA` | Main text, headings, white buttons, and high-contrast chip text |
| `muted-ink` | `#A1A1AA` | Supporting copy, labels, metadata, and inactive controls |
| `quiet-ink` | `#D4D4D4` | Softer helper text, short descriptions, and subdued notes |
| `paper` | `#FAFAFA` | Filled light actions, selected chips, and high-emphasis pills |
| `action` | `#F6894A` | Primary CTA fills, focus moments, and warm hero accents |
| `action-strong` | `#FE4019` | Stronger warm emphasis in gradients and highlight moments |
| `success` | `#00C950` | Check icons, positive status marks, and confirmation cues |
| `success-strong` | `#00A63E` | Deeper green used when the mark needs more contrast |

The relationship between light and dark modes is simple: dark is the default stage, light appears only as a decision surface, and photographic color sits behind the interface rather than replacing it. Orange is the only persistent warm accent. Green stays small and functional, so the page never becomes a multicolor app shell. Because the hero art is already saturated, the UI colors must remain restrained; otherwise the page loses its sense of control.

## Typography

Capacity splits the voice between a serif headline family and a neutral sans family. The serif carries the promise and the page titles; the sans handles navigation, buttons, cards, and all of the descriptive copy that must stay readable inside compact modules. The large headings are light in weight and tight in leading, which gives the page its calm editorial feeling. The smaller UI text is medium enough to hold up inside dark controls without shouting.

`System-Uiserif` supplies the large display lines. `System-Uisansserif` supplies the interface text, labels, and body copy. `Noto Sans` appears only in the tiniest badge-like treatment inside a few compact controls; it is credited to the Monotype Design Team and Monotype Imaging Inc. The system and serif faces are used as uncredited system families.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | System-Uiserif | 3.75rem | 400 | 1 | -0.05em | Main hero promise and page-opening statements |
| `section-display` | System-Uiserif | 3rem | 400 | 1 | -0.04em | Pricing titles and major mid-page section headers |
| `card-display` | System-Uiserif | 2.25rem | 400 | 1 | -0.04em | Large price figures and compact promotional statements |
| `card-heading` | System-Uisansserif | 1.875rem | 600 | 1.2 | -0.01em | Card titles, panel headers, and feature labels |
| `body` | System-Uisansserif | 1rem | 400 | 1.5 | 0em | Supporting copy, descriptions, and long helper text |
| `body-medium` | System-Uisansserif | 1rem | 500 | 1.5 | 0em | Buttons, selected tab copy, and emphasized body lines |
| `label` | System-Uisansserif | 0.875rem | 500 | 1.43 | 0em | Navigation links, chip labels, and small control text |
| `helper` | System-Uisansserif | 0.75rem | 400 | 1.33 | 0em | Short notes, secondary pricing details, and muted metadata |
| `micro-badge` | Noto Sans | 0.6875rem | 400 | 1 | 0em | Tiny badge glyphs and compact chip adornments |

The hierarchy depends on scale and spacing more than on many type families. Hero copy sits close to the headline, with very little extra line height. Card titles open a little more so they can sit above dense bullet lists. Helper text stays short and quiet, usually one step below the body. The site does not need wide tracking or decorative caps to feel branded; the contrast between serif headlines and neutral interface text does the work.

## Layout

The layout is built around centered content with broad side margins and large vertical breathing room. Most sections feel like stages rather than containers. The home hero opens with a centered statement and a black prompt module floating in the middle of the frame. Below that, the gallery page switches to a denser browsing pattern: a section title on the left, filter controls on the right, and a wide card grid beneath. The pricing page uses the same dark canvas but compresses into a tight four-column comparison, then widens again for a one-time purchase band and a supporting disclosure block.

The major structural pattern is contrast between full-width atmosphere and tightly bounded interface. The builder heroes use scenic gradients across the whole viewport, then place a prompt box and a few example chips in a restrained center column. The community gallery uses no scenic image at all; instead, it relies on dark card rows, thin borders, and measured gaps. That shift matters: the page is not one continuous style. It alternates between mood, inventory, and decision points, but each shift stays within the same dark grammar.

Spacing is generous but disciplined. Large sections rely on 64–160px of vertical separation, while cards and controls cluster around 12–32px gaps. Padding grows quickly inside cards so the content feels spacious, but borders remain thin enough that the panels never become bulky. Rounded corners stay in the 8–24px range and soften the sharpness of the black background without making the UI look soft or playful. The system prefers simple horizontal alignment, centered headlines, and low visual noise.

## Visual language

The visual language is cinematic, but not glossy. Atmosphere comes from textured gradients, blurred landscapes, and deep color washes that sit behind a black control surface. The hero art often leans warm: orange, rust, amber, and dusty rose. Other pages lean cooler or more violet, but the actual interface still holds to black, charcoal, white, and zinc. That separation keeps the product legible. The scenic background suggests possibility; the UI frame delivers the task.

Cards are flat or nearly flat. The few shadows are subtle and functional. Instead of heavy depth, the design uses thin borders, restrained fills, and selected-state inversions. A white pill means selected. A green check means confirmed. A warm orange button means act now. The page never needs a full rainbow because the architecture already provides hierarchy. The hero prompt boxes are the strongest example of this approach: one dark rectangle, one line of input, one or two compact controls, and just enough glow around the frame to keep it from sinking into the background.

The typographic contrast is just as important as the color contrast. Large serif promises give the site a serious tone. Sans labels and helper text keep the interface practical. That mix lets the product feel both ambitious and usable. The cards and chips follow the same logic: the surfaces stay quiet so the text can stay direct.

## Components

### Hero stage

- **Anatomy:** Top navigation, one centered serif headline, one short supporting sentence, a dark prompt module, and a few example chips or quick-start options.
- **Surface:** Often placed over a scenic gradient or textured wash. The prompt module itself stays black or near-black so the input reads cleanly.
- **Typography:** The headline uses the largest serif size with very tight leading. Supporting text and controls use the sans family in 14–16px ranges.
- **Shape:** The prompt module and chips use soft 8–16px corners. The module is the visual anchor; the rest stays secondary.
- **Composition:** The hierarchy is vertical and centered. The prompt sits below the claim, and the examples sit below the prompt as a light utility row.

### Feature callout

- **Anatomy:** Short title, bullet-style benefits, and a separate checklist or confirmation card.
- **Surface:** One shared dark panel with a clear left/right split.
- **Typography:** Strong heading, regular body bullets, and short checklist labels. The text is direct and compact.
- **Visible states:** Green marks indicate completion or included value. The panel itself stays calm and flat.
- **Composition:** Keep the text and the checklist balanced. The section works because it explains one idea quickly instead of building a complex layout.

### Community gallery

- **Anatomy:** Section title, sort control, category chips, and a grid of rounded project cards.
- **Surface:** Dark canvas with cards lifted by borders and slight tonal differences.
- **Typography:** The title is prominent, while chips and metadata use medium-weight sans text.
- **Visible states:** The selected chip flips to a light fill with dark text. Inactive chips remain dark and muted.
- **Composition:** The gallery is dense but orderly. Cards are arranged in rows with enough padding that the thumbnails can still dominate.

### Pricing

- **Anatomy:** Four plan cards, a single wide add-on strip, and a supporting FAQ block.
- **Surface:** Cards sit on the same black canvas but use slightly different fills so one plan can feel more prominent.
- **Typography:** Price figures are large and compact. The monthly suffix and benefit lists stay small and clear.
- **Shape:** Cards use rounded corners and thin borders. Buttons stay pill-like or softly rounded rather than square.
- **Visible states:** One plan often looks more ready to choose through a brighter button or more contrast in the card face.
- **Composition:** The page relies on symmetry, then breaks it with the wide add-on band so the user can see the next purchase shape.

### Prompt module

- **Anatomy:** Input field, tiny mode or privacy labels, and a single right-aligned submit action.
- **Surface:** Deep black rectangle with subdued inner contrast.
- **Typography:** All text stays in the sans family, with helper notes one step smaller than the main field label.
- **Shape:** Rounded but controlled. The module should feel technical, not bubbly.
- **Visible states:** Active pills invert to light fills; tiny status glyphs stay green or warm orange as needed.
- **Composition:** The module must remain centered and wide enough to feel substantial, but not so wide that it loses focus.

## Responsive behavior

On smaller screens, the design should keep the same order of importance: headline, prompt or primary action, supporting text, then secondary chips or cards. The hero can collapse from a single centered column into a stacked layout, but the prompt module should still read as the main action surface. In the gallery, cards should reduce from wide rows to fewer columns or a single vertical stack while preserving the chip row above them. In pricing, the comparison cards should stack before the add-on strip so the plans remain easy to scan.

The serif hierarchy also needs to compress carefully. The 60px headline can step down to the 48px and 36px roles without losing the page’s tone, but it should not fall all the way into generic marketing copy sizes. The dark surfaces must keep enough padding that the text does not crowd the borders. If the scenic background crops tighter on narrow widths, the overlay behind the headline and prompt should stay strong enough to preserve legibility. The design should keep selection pills and action buttons comfortably large enough to tap without introducing extra visual weight.

## Practical implementation guidance

### Preserve

- Keep the page dark by default. Let scenic color live behind the interface, not replace it.
- Preserve the serif headline voice at the top of each major page.
- Keep warm orange as the main action color and use green only for confirmation marks.
- Keep borders thin and corners soft. The system relies on restraint, not heavy depth.
- Keep the prompt module, pricing cards, and gallery cards visually calm so the content can carry the page.

### Avoid

- Avoid a bright app-shell background or generic light dashboard styling.
- Avoid extra font families, decorative scripts, or oversized rounded blobs.
- Avoid heavy shadows, thick outlines, and glass effects that fight the dark surfaces.
- Avoid spreading the orange accent across too many elements.
- Avoid making every chip or card look unique; the system works because most pieces share the same quiet base.

### Recommended build order

1. Set the dark palette and the serif/sans type split.
2. Build the centered hero and the black prompt module.
3. Add the button, chip, and selection-state system.
4. Build the feature callout and gallery grid with the same card language.
5. Finish with pricing cards, the add-on strip, and the FAQ block.
6. Compress the same hierarchy for narrow screens without changing the tone.

### Accessibility

- Keep all text readable against the dark canvas and especially against textured or gradient backgrounds.
- Use the action color as a cue, not the only cue. Selected chips, check marks, and filled buttons need shape or fill differences too.
- Keep button and chip targets large enough to tap, even when the visual treatment stays compact.
- Preserve strong contrast for the smallest helper and badge text.
- If a scenic background passes behind copy, add a dark overlay before lowering text opacity.

## Scope note

This guide covers the desktop marketing surfaces shown in the packet: the home hero, feature callout, community gallery, clone-website hero, MVP builder hero, and pricing page. Narrow-screen treatment, hover or focus animation details, authenticated product screens, and any non-marketing app interface are not included.
