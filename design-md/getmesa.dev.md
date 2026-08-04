# How getmesa.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/getmesa.dev-design)

Last updated: 2026-08-04

## Captured pages

[![Centered hero with two stacked Syne lines, one bright white and one softened gray, over a pure black field](https://pin.fontofweb.com/8058?format=jpg)](https://design.withfudge.com/share/pin-8058)

[Centered hero with two stacked Syne lines, one bright white and one softened gray, over a pure black field](https://design.withfudge.com/share/pin-8058)

[![Quiet explanatory section with two long paragraphs and a sparse mono utility line on deep black](https://pin.fontofweb.com/8057?format=jpg)](https://design.withfudge.com/share/pin-8057)

[Quiet explanatory section with two long paragraphs and a sparse mono utility line on deep black](https://design.withfudge.com/share/pin-8057)

[![Dark editorial collage of code panes, terminal cards, and soft radial glows arranged in a grid](https://pin.fontofweb.com/8056?format=jpg)](https://design.withfudge.com/share/pin-8056)

[Dark editorial collage of code panes, terminal cards, and soft radial glows arranged in a grid](https://design.withfudge.com/share/pin-8056)

[![Two-column feature matrix with colored role labels, thin rules, and a large product canvas inset](https://pin.fontofweb.com/8054?format=jpg)](https://design.withfudge.com/share/pin-8054)

[Two-column feature matrix with colored role labels, thin rules, and a large product canvas inset](https://design.withfudge.com/share/pin-8054)

[![Rainbow word-stack hero with oversized category nouns and icon glyphs under a dotted black grid](https://pin.fontofweb.com/8053?format=jpg)](https://design.withfudge.com/share/pin-8053)

[Rainbow word-stack hero with oversized category nouns and icon glyphs under a dotted black grid](https://design.withfudge.com/share/pin-8053)

## Overview

Mesa reads like a dark studio for software work rather than a conventional marketing site. The page is built around a single idea: one canvas can hold the whole stack. That idea is expressed with huge centered type, short supporting copy, and dense technical panels that look closer to an editor, terminal, and workspace map than to a glossy product brochure.

The composition stays deliberately spare. Large fields of black space isolate each statement, while thin white rules and faint glow effects hold the layout together. Bright accent colors enter as signals, not decoration: they tag categories, mark states, identify tools, and punctuate the oversized headline. The result feels technical, focused, and controlled, with enough visual drama to make the product feel expansive without becoming noisy.

The site’s rhythm comes from alternating density. A centered hero opens the page, then quieter explanatory copy follows, then a grid of dark cards, then a louder multi-color statement section. Each chapter keeps the same family of surfaces and typography, but the emphasis shifts between statement, explanation, and inventory.

## Colors

Mesa is almost entirely dark, so the palette works by contrast and restraint. Black and charcoal are the structural colors; white and near-white carry the text; saturated accents appear in small, deliberate doses. There is no bright background wash. Even the livelier hues stay inside words, labels, outlines, bars, and tiny diagram nodes. That keeps the canvas calm and makes the product itself feel like the source of light.

| token | value | use |
|---|---|---|
| `canvas` | `#050505` | Main page background and the deepest empty fields |
| `surface` | `#0A0A0A` | Slightly lifted dark panels and card bodies |
| `surface-raised` | `#111111` | Editor-like panels, grouped content blocks, and inset stages |
| `surface-deep` | `#161616` | Stronger container tone for bands, frames, and utility areas |
| `rule` | `#0A0A0C` | Hairline borders and low-contrast separators |
| `ink` | `#FAFAFA` | Primary text on dark surfaces |
| `ink-strong` | `#FFFFFF` | Button fills, high-contrast labels, and the brightest UI text |
| `action-blue` | `#539BF5` | Primary technical accent, links, and diagram highlights |
| `action-green` | `#3CCF91` | Success states, status markers, and category accents |
| `action-purple` | `#A78BFA` | Secondary category accent and node labeling |
| `action-gold` | `#DAAA3F` | Warm emphasis in the headline stack and tool labels |
| `action-pink` | `#D26A9E` | Team or collaboration accent in the headline and diagrams |
| `action-red` | `#E5534B` | Alert-like emphasis and structural contrast in the headline stack |
| `action-orange` | `#E07A3A` | Warm tool accent and small visual interrupts |

The relationship between modes is simple: the page stays dark everywhere, but some sections feel more open and luminous than others. The hero is the most minimal stage, with white type floating on near-black. The feature grid introduces stronger charcoal blocks and brighter accent nodes. The multicolor headline section turns the accents into the main event, but only inside the text itself. That makes the colors feel structural rather than ornamental.

## Typography

Mesa uses three families with clear jobs. Syne carries the large statements and headline fragments. Plus Jakarta Sans handles explanatory prose, navigation, and the button label. Jet Brains Mono handles labels, file names, code-like snippets, and the small utility text that makes the interface feel developer-native. Plus Jakarta Sans is credited to Gumpita Rahayu at Tokotype; the other two families carry no credit metadata in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Syne | 5.5rem | 700 | 1.08 | -0.03em | Centered hero and oversized marketing statements |
| `section-display` | Syne | 3.75rem | 600 | 1.1 | -0.025em | Large section headings and the quieter hero variant |
| `card-heading` | Syne | 1.625rem | 600 | 1.12 | -0.02em | Feature card titles and compact panel headlines |
| `body` | Plus Jakarta Sans | 1rem | 400 | 1.5 | 0em | Supporting paragraphs and explanatory text |
| `body-compact` | Plus Jakarta Sans | 0.9375rem | 400 | 1.625 | 0em | Tighter helper copy and small contextual notes |
| `nav` | Plus Jakarta Sans | 0.8125rem | 500 | 1.5 | 0em | Header links, action labels, and small calls to action |
| `label` | Jet Brains Mono | 0.6875rem | 500 | 1.5 | 0.12em | Uppercase-style section labels and technical tags |
| `code` | Jet Brains Mono | 0.5625rem | 400 | 1.5 | 0em | File names, snippets, terminal text, and tiny metadata |

The hierarchy depends on size and compression more than on a mix of typefaces. Syne is large, tight, and slightly theatrical; Plus Jakarta Sans is calm and readable; Jet Brains Mono is clipped and technical. The strongest visual move is the hero’s stacked headline, where line breaks and weight do as much work as the letters themselves. Supporting text stays compact so that the display type can dominate without feeling isolated.

## Layout

The layout is centered and poster-like at the top, then it spreads into grids and bands that feel like a workspace dashboard. The hero occupies a narrow column inside a large black field, which lets the headline read as an object rather than a full-width banner. The page uses broad outer gutters, and the content often appears centered inside an even larger invisible frame. That wide framing makes the cards and code panes feel deliberate, as if each one were dropped onto a canvas.

The top section relies on one vertical stack: wordmark, navigation, headline, supporting line, button, and tiny utility text. Nothing is crowded. The eye moves straight down the center, and the page resists side-to-side motion until the feature grids begin. That restraint is important because it gives the later panels room to become denser without feeling cramped.

Below the hero, the layout shifts to modular blocks. Some sections are two-column compositions with text on one side and a technical stage on the other. Others are multi-card grids with thin separators and consistent internal padding. The grids often combine a large lead panel with smaller support cards, so the structure feels hierarchical rather than repetitive. A dotted background appears in some chapters, which reinforces the feeling of a digital workspace without overwhelming the panels.

Near the bottom, the composition relaxes into a lower utility band. The wordmark, tagline, and links sit on a single baseline-like strip, which closes the page with the same low-contrast discipline used at the top. The whole system depends on spacing as much as on color: generous empty fields, 1px rules, and regular panel insets keep the dense technical imagery legible.

## Visual language

Mesa’s visual language is built from a few repeating ideas. First, the page treats black as an active surface, not a void. The canvas is so dark that the white copy and bright accents feel emitted rather than placed. Second, the layout uses technical artifacts as imagery: code panes, terminal blocks, tabs, status chips, progress bars, and diagram nodes. Those elements carry the brand story more effectively than photographs would.

The hero language is typographic and almost metallic. White text sometimes shifts into a softer gray tone within the same phrase, which creates a subtle glow without a gradient wash across the whole page. The multicolor headline section takes the opposite approach: each word is a different accent color, and the icons beside them turn the words into a catalog of capabilities. That section feels energetic, but it still respects the dark canvas because the accents remain letter-sized and do not flood the background.

Borders and shadows stay restrained. Most panels use thin light rules or barely visible dark edges. Depth comes from overlap, inset spacing, and a few soft glows around the technical stages. The result is clean, controlled, and built for scanning. Nothing looks ornamental unless it also helps explain the product.

## Components

### Masthead

- **Anatomy:** Small Mesa wordmark at left, compact navigation links at right, and a white-outlined download action.
- **Surface:** Transparent over the black canvas, with no heavy header bar.
- **Typography:** Navigation uses Plus Jakarta Sans at the small UI scale, while the wordmark stays visually simple and compact.
- **Shape:** The action button uses the shared small radius and a crisp light fill or outline.
- **Hierarchy:** Keep the header subordinate to the hero. It should frame the page, not compete with the headline.

### Hero statement

- **Anatomy:** Two-line Syne headline, short supporting copy, primary download button, and tiny helper links beneath.
- **Surface:** Pure dark canvas with very little ornament.
- **Typography:** Large centered display type, with compact leading and a slight gray shift in the second line.
- **Spacing:** Generous vertical gaps keep the statement floating. The button sits close enough to feel attached to the pitch, but not so close that the block collapses.
- **Composition:** Center the text stack and keep the width narrow. The hero works because the eye reads one line, then the next, then the button.

### Feature and explanation panels

- **Anatomy:** Uppercase label, large heading, short paragraph, and a code or product illustration.
- **Surface:** Charcoal panels with thin rules and low-contrast internal boundaries.
- **Typography:** Syne for the headline; Plus Jakarta Sans for the paragraph; Jet Brains Mono for file names, labels, and snippets.
- **Shape:** Small rounded corners are enough. The panels should feel engineered, not cushioned.
- **Composition:** Use one dominant message per panel. The technical image or code pane should support the copy, not equal it.

### Code cockpit cards

- **Anatomy:** Code windows, terminal blocks, status chips, tabs, and small title bars.
- **Surface:** Nearly black cards with faint separation lines and subtle glows.
- **Typography:** Jet Brains Mono handles the smallest text, while Plus Jakarta Sans can carry supporting copy where readability matters.
- **Visible states:** Default dark state, light-on-dark text, and accent-coded labels. The interface should stay quiet even when several colors appear at once.
- **Composition:** Stack cards in a clear hierarchy: lead panel first, support cards beneath or beside it, and tiny metadata last.

### Multicolor capability statement

- **Anatomy:** Large stacked words, each with a different accent color and a small icon or glyph.
- **Surface:** Dotted black field with no decorative frame.
- **Typography:** Oversized Syne, heavy weight, tight line breaks, and pronounced contrast between words.
- **Hierarchy:** The color itself becomes the hierarchy. Keep the arrangement legible from a distance and let the individual words stay large enough to scan quickly.
- **Composition:** Use this section as a loud summary, not as a place for long copy.

### Lower utility band

- **Anatomy:** Small wordmark, short tagline, and a row of utility links.
- **Surface:** Deep black with minimal contrast.
- **Typography:** Small Plus Jakarta Sans text and compact link labels.
- **Spacing:** Tight but breathable; the band should feel like a quiet landing strip after the more complex panels.
- **Visible states:** Links should remain subtle until activated, with the same restraint used everywhere else.

## Responsive behavior

On smaller screens, keep the reading order intact: wordmark, navigation, hero statement, primary action, explanatory copy, then the grid sections. The headline should be allowed to wrap naturally before it is scaled down too aggressively. Syne loses force if it becomes small too early, so preserve the structure of the statement first and the exact fit second.

The multi-card sections should collapse cleanly into one column or a simple two-up stack, depending on available width. Keep the spacing generous enough that the card borders do not blur together. The mono labels must remain readable, so reduce density before reducing type. If the colorful headline section wraps, keep the icon-word pairs together so the color system still reads as a set.

The dotted background, thin rules, and dark fills should remain low-contrast on smaller screens. A cramped dark page turns muddy quickly, so the mobile version should rely on spacing and line breaks rather than stronger borders or extra shadows. The button should stay prominent, but it does not need to become larger than the surrounding visual language.

## Practical implementation guidance

### Preserve

- Keep the page predominantly black, with charcoal only where a panel needs separation.
- Use Syne for the big statements and resist the temptation to replace it with a softer sans.
- Keep the accent colors as local signals inside words, labels, nodes, and bars.
- Preserve the thin-rule look. The site depends on 1px boundaries more than on shadows.
- Maintain the narrow hero column and the large empty fields around it.

### Avoid

- Avoid glossy gradients, glass effects, or large illuminated backgrounds.
- Avoid turning the accent colors into full-width fills.
- Avoid heavy rounded corners; the 7px radius should stay subtle.
- Avoid using too many type sizes. The hierarchy is already strong.
- Avoid crowding the cards with extra labels, badge stacks, or nested borders.

### Recommended build order

1. Build the black canvas and the shared surface tokens.
2. Add the Syne headline system and the Plus Jakarta Sans body styles.
3. Recreate the hero with its centered column and primary action.
4. Build the dark technical cards with Jet Brains Mono utility text.
5. Add the grid sections and the multicolor capability statement.
6. Finish with the lower utility band and spacing refinements.

### Accessibility

- Keep white text on dark surfaces high enough in contrast, especially where type becomes small.
- Do not rely on color alone for meaning; pair accents with labels, icons, or position.
- Preserve a visible focus treatment on links and buttons, even if it stays thin and quiet.
- Make the mono labels large enough to remain readable at narrower widths.
- If the technical panes become interactive, give them clear names and roles so the visual structure is matched semantically.

## Scope note

This guide covers the Mesa desktop marketing homepage surfaces shown here: the centered hero, explanatory text block, dark code and status cards, multicolor capability section, and the lower utility band. It does not cover unpublished app screens, mobile-specific stacking, motion, or interaction states beyond the default visual treatment.
