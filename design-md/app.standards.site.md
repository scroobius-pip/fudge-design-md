# How app.standards.site is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.standards.site-design)

Last updated: 2026-08-03

## Captured pages

[![Dark workspace with a centered upgrade modal over the giant gray wordmark](https://pin.fontofweb.com/8524?format=jpg)](https://design.withfudge.com/share/pin-8524)

[Dark workspace with a centered upgrade modal over the giant gray wordmark](https://design.withfudge.com/share/pin-8524)

[![Wide setup screen with a huge specimen heading and a right-side task checklist](https://pin.fontofweb.com/8523?format=jpg)](https://design.withfudge.com/share/pin-8523)

[Wide setup screen with a huge specimen heading and a right-side task checklist](https://design.withfudge.com/share/pin-8523)

[![Type-specimen page showing the oversized Lorem ipsum heading and blue Finish button](https://pin.fontofweb.com/8522?format=jpg)](https://design.withfudge.com/share/pin-8522)

[Type-specimen page showing the oversized Lorem ipsum heading and blue Finish button](https://design.withfudge.com/share/pin-8522)

[![Font upload screen with a square drop zone above the stacked specimen copy](https://pin.fontofweb.com/8520?format=jpg)](https://design.withfudge.com/share/pin-8520)

[Font upload screen with a square drop zone above the stacked specimen copy](https://design.withfudge.com/share/pin-8520)

[![Menu style gallery with multiple flyout and sidebar layout previews](https://pin.fontofweb.com/8519?format=jpg)](https://design.withfudge.com/share/pin-8519)

[Menu style gallery with multiple flyout and sidebar layout previews](https://design.withfudge.com/share/pin-8519)

[![Components page with the Yes/No segmented control and stacked button examples](https://pin.fontofweb.com/8518?format=jpg)](https://design.withfudge.com/share/pin-8518)

[Components page with the Yes/No segmented control and stacked button examples](https://design.withfudge.com/share/pin-8518)

## Overview

app.standards.site is a dark, disciplined design-ops workspace. The page treats the interface like a specimen sheet: a huge wordmark, stacked typography samples, layout previews, and setup controls all sit on a black field with only a few bright accents. The result feels serious and editorial rather than playful. Most of the page is empty space, which gives the labels, cards, and buttons enough room to feel deliberate.

The visual system is built from a narrow range of ingredients. Black and near-black surfaces carry the shell. White text and pale cards cut through the darkness. Gray type sizes and checklist marks handle hierarchy without adding decoration. Blue appears only where the interface needs a clear progression signal, such as the Finish button or a selected control. There is no photographic palette in this set; the contrast comes from light versus dark surfaces and from the jump between oversized display type and compact UI text.

## Colors

The palette stays close to black and white, with one saturated blue used as the active accent. The main canvas is black, while secondary surfaces step up only slightly to `#101010` and `#242424`. That small separation is enough to frame cards, panels, and rails without breaking the monochrome tone.

| token | value | role |
|---|---|---|
| action | `#2395E7` | Primary progression button, selected state, and the only vivid accent |
| ink | `#000000` | Main shell background and deepest page field |
| ink-soft | `#101010` | Secondary dark surface for cards, rails, and modal bodies |
| muted-ink | `#898989` | Sample text, field hints, and low-priority labels |
| canvas | `#FFFFFF` | Light preview cards, logo tiles, and high-contrast content fields |
| surface | `#242424` | Raised dark panel fill used for previews and card groups |
| border | `#333333` | Neutral 1px rules around panels and tiles |
| border-strong | `#3A3A3A` | Slightly stronger rule for controls and boxed states |

White is not a decorative background; it is a functional contrast surface for logo previews and specimen cards. Blue is not a general brand color; it marks the one clear action path in the setup flow and the selected segment in controls. Gray fills, borders, and labels keep the interface legible without pulling attention away from the large typography. That restraint is the core color behavior to preserve.

## Typography

The type system mixes one oversized specimen face with a compact modern sans and a dense serif body face. Licensing for reuse should be verified before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Fontsohnehalbfett | 10.625rem | 600 | 1 | 0em | Giant wordmarks and poster-scale specimen headers |
| section-display | Klim Type Foundry | 1.625rem | 400 | 1.38 | 0em | Main setup headings and large specimen lines |
| subhead | Klim Type Foundry | 1.125rem | 400 | 1.36 | 0em | Secondary headings such as section labels and step titles |
| body | Times | 1rem | 400 | 1 | 0em | Dense explanatory copy and long descriptive paragraphs |
| ui-strong | Söhne | 0.8125rem | 600 | 1.2 | 0em | Buttons, checklist rows, and compact emphasized controls |
| sidebar-heading | Söhne | 1.125rem | 600 | 1.2 | 0em | Strong small headings in the setup rail |
| meta | Klim Type Foundry | 0.6875rem | 400 | 1.2 | 0em | Tiny field hints, captions, and auxiliary labels |

The hierarchy relies on size jumps more than on stylistic flourishes. Fontsohnehalbfett carries the giant specimen wordmark and gives the page its most memorable shape. Klim Type Foundry handles the visible ladder of display sizes in the setup pages, from the big “Lorem ipsum” sample down to the smaller line labels. Söhne appears in the control chrome, where it gives buttons and checklist items a firmer tone. Times sits underneath that structure and keeps the descriptive copy dense and compact. The face mix works because each family has a clear role rather than a decorative overlap.

## Layout

The layout is structured like a workspace with rails. A central content field carries the main specimens, while a persistent right rail holds setup progress and the Finish action. In the editor view, the shell also includes a left navigation column and a top utility bar, so the content area is framed on both sides without feeling boxed in. The central stage stays visually dominant because its width and emptiness are larger than the surrounding chrome.

The page rhythm comes from large fixed paddings and a few repeated spacing steps. The strong outer inset is 80px on the sides and 90px at the top, which creates the heavy breathing room seen in the setup screens. Long sections use 120px vertical blocks, while internal groupings often drop to 30px, 20px, or 14px for heading and control relationships. That produces a strict hierarchy: broad sections, compact labels, then tightly stacked controls.

Panels and cards use 4px corners everywhere. The small radius keeps the interface sharp and disciplined. It also lets the large type and the bright blue button carry the personality instead of the geometry. The layout previews depend on grids of dark tiles with small spacing gaps, while the upload and logo screens use larger single cards with centered icons and generous empty space. The overall composition stays rectilinear, with one or two soft shadows only where a tile or modal needs to sit above the field.

## Visual language

The visual language is spare, contrast-heavy, and almost printed. There is very little ornament. Instead, the interface uses scale, spacing, and value contrast to distinguish meaning. The most striking move is the jump from enormous specimen type to tiny control text. That jump makes the page feel like a working style guide rather than a marketing site.

Hard edges dominate. The system uses 1px rules, 4px corners, and flat fills. Even when a card is lifted, the shadow is soft and restrained, not glossy. Selected states rely on a bright blue fill or a small check badge, not on glow or animation. Incomplete states stay as hollow circles, muted labels, or dark inactive segments. This makes the page easy to scan even when many options are shown at once.

The dark surface is not a pure void; it is a tuned backdrop for pale cards and gray specimen text. White preview tiles, black logo samples, and light upload fields punctuate that backdrop and keep the composition from collapsing into one plane. Blue is the only temperature shift in the system, so it reads as an instruction, not a decoration. Keep that discipline intact.

## Components

### Shell and rails

The shell uses a black field with narrow chrome around it. The left rail and right rail feel secondary to the content, but they still need structure. Their labels are small, their controls are compact, and their spacing is disciplined. The top bar is thin and functional. It carries mode labels, device labels, and the publish action without crowding the main stage.

### Setup checklist

The right-side setup rail shows a vertical list of steps. Completed items use a filled checkmark circle, while incomplete items stay hollow. The labels are small and bright against the dark rail. The Finish button sits below the list, filled in the blue action color with 4px corners and centered white text. This is the clearest active control in the set, so it should remain visually isolated from secondary links.

### Typography specimen blocks

The type pages are the center of the visual story. They stack a huge wordmark, then progressively smaller specimen lines, then smaller explanatory text. The words sit close to the left edge, which makes the scale feel more dramatic. The black background keeps the gray type legible while letting the specimen form dominate. Labels such as “Super,” “Extra Large,” “Large,” “Medium Bold,” and “Small” are not decorative tags; they are part of the reading structure and should stay small and quiet.

### Upload and logo cards

The upload pages use boxed areas with a strong outline and a centered icon. The square drop zone is spare and geometric, with a dark fill and a single white arrow symbol in the middle. The logo preview card switches to white, which makes the black logo sample read like a formal artifact. These cards depend on generous internal space and on the contrast between dark and light fields.

### Layout galleries and menu styles

The menu and breakpoint pages show a grid of preview tiles. Each tile is a miniature layout mockup with its own dark or light surface, title, and selection mark. A selected tile gets a tiny check badge in the corner. The cards are uniform enough to compare quickly, but their internal mockups vary so the user can see different menu shapes, flyouts, and split layouts. The grid needs even spacing and a steady rhythm; it should not collapse into a dense picker.

### Controls and segmented choices

The components page shows a segmented yes/no choice and a stack of example buttons. The selected segment fills blue, while the inactive option remains dark. This is the same action logic used elsewhere in the app: one vivid affirmative state, one quiet background state. Buttons remain rectangular and compact, with no pill softness. That keeps them aligned with the rest of the interface and prevents the control layer from drifting toward consumer-app styling.

## Responsive behavior

The visible pages are built for wide desktop widths, but the design language itself is easy to compress: keep the black shell, keep the right rail readable, and preserve the large type scale as long as possible. When space tightens, the specimen stack should collapse before the rails lose clarity. The blue action and the selection badges need to stay visible even when the surrounding chrome becomes denser. Preview grids should reduce column count before they reduce tile clarity.

## Practical implementation guidance

### Preserve

- Keep the palette nearly monochrome, with `#2395E7` reserved for the main action and selected state.
- Keep 4px corners on panels, tiles, and controls.
- Preserve the 80px side inset and 90px top inset on desktop shells.
- Let the huge specimen type dominate; do not shrink it into ordinary headline scale.
- Use 1px rules and flat fills before adding elevation.

### Avoid

- Avoid colorful gradients, glossy shadows, or soft pill buttons.
- Avoid mixing extra font families into the chrome.
- Avoid rounding cards beyond the 4px system.
- Avoid turning helper labels into louder display text.
- Avoid adding decorative backgrounds that compete with the specimen type.

### Recommended build order

1. Build the black shell and the side rails.
2. Add the blue action button and the checklist states.
3. Set the typography ladder from the 170px specimen down to 11px labels.
4. Add the upload cards, logo preview tiles, and layout galleries.
5. Finish with the button set and segmented control examples.

### Accessibility

- Keep gray text readable against the black field; do not let muted labels drift too close to the background.
- Use checkmarks, labels, and selected fills together so state is not carried by color alone.
- Keep the blue action button large enough to read and easy to target.
- Give preview tiles, upload areas, and checklist items explicit text labels.
- Preserve strong focus styling when translating the static look into an interactive build.

## Scope note

This guide covers the dark desktop workspace, setup flows, type-specimen pages, menu previews, upload cards, and component examples shown here. It does not define mobile behavior, motion, or alternate themes beyond those screens. All spacing values are rounded to the shared 0.125rem step.
