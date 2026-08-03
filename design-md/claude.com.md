# How claude.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/claude.com-design)

Last updated: 2026-08-03

## Captured pages

[![Wide startup hero with floating rounded video tiles around the centered serif headline](https://pin.fontofweb.com/10037?format=jpg)](https://design.withfudge.com/share/pin-10037)

[Wide startup hero with floating rounded video tiles around the centered serif headline](https://design.withfudge.com/share/pin-10037)

[![Expanded FAQ block with open answer text and thin ruled accordion rows](https://pin.fontofweb.com/10036?format=jpg)](https://design.withfudge.com/share/pin-10036)

[Expanded FAQ block with open answer text and thin ruled accordion rows](https://design.withfudge.com/share/pin-10036)

[![Claude Code page with the centered install strip and logo row beneath](https://pin.fontofweb.com/9222?format=jpg)](https://design.withfudge.com/share/pin-9222)

[Claude Code page with the centered install strip and logo row beneath](https://design.withfudge.com/share/pin-9222)

[![Download page footer with dense link columns and quiet dark chrome](https://pin.fontofweb.com/6390?format=jpg)](https://design.withfudge.com/share/pin-6390)

[Download page footer with dense link columns and quiet dark chrome](https://design.withfudge.com/share/pin-6390)

## Overview

Claude.com is built as a dark editorial brand system rather than a conventional SaaS shell. The page stays close to a near-black charcoal canvas, then lifts the important actions and media into paper-colored pills, thin ruled rows, and rounded image frames. The visual weight belongs to the serif headlines, which are large, pale, and tightly composed. Sans text stays quiet, compact, and functional. Terracotta appears as a brand signal and a small accent, not as a flood of color.

The page rhythm is chapter-like. A hero uses a wide collage of rounded video tiles around a centered statement. Product pages switch into tighter systems with a command strip, logo rows, and compact explanatory copy. The widest startup hero uses a 112px light serif statement; narrower startup views step down to the 90.4px tier without changing the voice. The footer settles into a dense directory on the same dark base. Across those modes, the site keeps the same ingredients: dark ground, paper text, soft corners, minimal borders, and very little shadow.

The design is strongest when it feels restrained and confident. Large type leads. Media crops stay soft. Rules stay thin. Accent color stays rare. The interface should feel like a serious publishing layout that happens to explain software.

## Colors

Claude.com uses a very narrow palette. The base is not pure black; it is a warm near-black that reads as charcoal and keeps the white text from feeling harsh. Raised shells and command bars step up only slightly from that base, so the page feels layered without becoming glossy. The paper tone is the primary light surface: it appears in CTA pills, code blocks, and the brightest parts of logo and footer treatments. That paper tone also works as the main text color on dark surfaces.

The terracotta family is the only warm accent that breaks the neutral system. It shows up in the Claude mark, in headline emphasis on the Claude Code page, and in small highlights that need extra emphasis without becoming loud. A slightly cooler mid-gray group supports secondary text, borders, and quiet metadata. Those grays keep nav, FAQ prompts, and footer lists legible while staying visually subordinate. The page does not depend on gradients; color contrast comes from shifts between charcoal, paper, and the terracotta accent.

| token | value | role |
|---|---|---|
| `action` | `#FAF9F5` | Primary filled buttons, paper chips, and bright command surfaces |
| `action-ink` | `#141413` | Text inside the paper-filled action surfaces |
| `accent` | `#D97757` | Brand mark, emphasized product-page words, and warm highlight moments |
| `accent-subtle` | `#C46849` | Slightly deeper terracotta for compact emphasis |
| `ink` | `#FAF9F5` | Main text on dark surfaces and dark panels |
| `muted-ink` | `#9C9A92` | Supporting copy, meta text, and quieter labels |
| `canvas` | `#141413` | Main page background |
| `surface` | `#1A1918` | Raised dark shells, command bars, and footer blocks |
| `surface-raised` | `#1F1E1D` | Slightly lifted containers and grouped panels |
| `border` | `#30302E` | Hairlines and structural separators |
| `border-strong` | `#3D3D3A` | Stronger divider lines and inset edges |
| `code-surface` | `#1A1918` | Code and install strip background |
| `code-ink` | `#FAF9F5` | Code strip text and control labels |
| `code-muted` | `#B0AEA5` | Secondary command text and helper copy |

## Typography

The typography stack is split cleanly between a refined serif voice for large statements and a sans voice for everything operational. Anthropic Serif carries the hero and section headlines in the light cut shown on the startup views. Anthropic Sans handles navigation, explanatory copy, labels, FAQ items, and footer directories. Anthropic Mono and Jet Brains Mono appear where the page needs command-like or code-like treatment. Applesystem and System are present in browser-level fallback slots and should stay out of the main hierarchy. The result is a strict hierarchy: display first, utility second, code last.

The serif headlines are wide, light in color, and set with very compact leading. They are not decorative in the ornamental sense; they are the page structure. The sans text is close-set and calm, with enough air to remain readable against the dark ground. The mono family adds a precise, technical note on the install and code pages, where commands and inline code must read differently from prose.

Licensing details were not included in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Anthropic Serif | 7rem | 300 | 0.9 | 0em | Main hero statement on startup and product pages |
| `section-display` | Anthropic Serif | 5.65rem | 300 | 0.9 | 0em | Large section leads and secondary marketing statements |
| `card-display` | Anthropic Serif | 3.25rem | 300 | 1.2 | 0em | Smaller display moments and centered page headings |
| `body` | Anthropic Sans | 1.25rem | 400 | 1.6 | 0em | Supporting copy, explanations, and general page text |
| `body-strong` | Anthropic Sans | 1.25rem | 500 | 1.6 | 0em | Filled CTA labels and emphasized body copy |
| `nav` | Anthropic Sans | 1.25rem | 400 | 1.6 | 0em | Header navigation and top-level links |
| `meta` | Anthropic Sans | 1.0625rem | 400 | 1.6 | 0em | Kicker text, small labels, and quiet helpers |
| `legal` | Anthropic Sans | 0.75rem | 400 | 1.6 | 0.01em | Footer legal copy and low-emphasis notes |
| `code-shell` | Jet Brains Mono | 1.25rem | 400 | 1.45 | 0em | Install bar and visible command lines |
| `code-inline` | Anthropic Mono | 1.0625rem | 400 | 1.6 | 0em | Short inline command fragments and emphasis tokens |
| `browser-fallback` | Applesystem | 0.875rem | 400 | 1.6 | 0em | Low-level browser fallback text and helper chrome |
| `browser-default` | System | 1rem | 400 | 1.6 | 0em | Root fallback text when native UI fonts win |

## Layout

The layout is centered and spacious, but not symmetrical in a rigid grid sense. The startup hero uses a broad field of empty charcoal around a centered serif statement. Rounded video tiles float at different sizes around that center, creating a loose constellation rather than a tiled wall. That collage gives the page energy without heavy ornament. The structure depends on spacing and crop, not on visible frames or layered cards.

A strong top bar sits above the hero, separated by a thin rule. Navigation items stay small and even, while the two right-side actions form a clear hierarchy: a quiet outline control and a brighter filled control. Below the hero, the page falls into long dark sections with more vertical room than horizontal decoration. The layout uses generous top padding, often in the 6rem to 12.5rem range, so each section can breathe before the next band begins. The widest startup hero reaches the 112px serif tier; tighter startup and code views step down without changing the overall center-weighted composition.

The Claude Code page compresses the same language into a centered stack: kicker, headline, command strip, and a row of logos. The command strip behaves like a capsule container with a paper segment and a darker code area. The download page keeps the same dark base, then finishes with a compact footer grid. In all cases, the site uses thin separators, restrained container widths, and round-cornered media rather than nested panels.

Use a small semantic set of layout tokens: a large hero section gap, a tighter content stack, a modest cluster gap, and a panel inset for cards and command strips. Those few sizes are enough to reproduce the page’s rhythm without turning every measured value into a separate token.

## Visual language

The visual language is editorial, warm, and intentionally sparse. Large serif headlines do most of the storytelling. Supporting text stays understated, almost like captions in a magazine layout. The imagery is the other major voice: warm indoor photographs, rounded video thumbnails, and soft-focus room scenes with people at work. These images are not framed as product screenshots in the usual sense. They feel like story clips placed into a calm stage.

Shape is used consistently. Rounded rectangles dominate, but the radii are moderate rather than playful. Cards and media tiles lean into the 12px to 20px range, while buttons stay a little tighter. The site does not depend on shadow stacks for depth. Borders and spacing do that work. Thin rules separate rows and sections. Slightly lighter charcoal shells provide the only real lift.

Terracotta is the accent that prevents the system from feeling monochrome. It should remain small and precise: a brand mark, a highlighted word, a small label, a selected state, or a code-page callout. The rest of the palette should stay neutral so the accent reads as a signal rather than a theme color.

## Components

### Global header

- **Anatomy:** Claude mark at left, compact navigation in the middle, right-aligned secondary links, outline action, and filled action.
- **Surface:** Transparent over the dark canvas, with a thin bottom rule.
- **Typography:** Sans, small and even, with no dramatic weight jumps.
- **Shape:** The action controls use soft pills, not hard rectangles.
- **Hierarchy:** The filled action is the clearest interactive element. The outline action stays visually quieter.
- **Visible state:** The header should remain subdued so the hero can carry the page.

### Startup hero collage

- **Anatomy:** Small kicker, oversized light serif headline, muted supporting copy, one paper CTA, and several floating rounded video tiles.
- **Composition:** The headline stays centered while the image tiles sit off-axis around it. That asymmetry gives the page motion without a carousel feel.
- **Surface:** Dark canvas with warm, low-saturation imagery.
- **Shape:** Media tiles use a generous radius and soft cropping. The play badge is a tiny dark square within the image.
- **Typography:** Serif display for the headline; sans for kicker and body.
- **Visible state:** The CTA reads as paper-filled against the dark stage.

### Primary action

- **Surface:** Paper fill with dark ink text.
- **Typography:** Bold sans, compact and direct.
- **Shape:** Soft pill radius with moderate horizontal padding.
- **Hierarchy:** Used for the main next step on a page, never competing with the headline.
- **Visible state:** It should feel calm and certain, not loud.

### Claude Code command strip

- **Anatomy:** A left control segment, a right command area, and a small helper link below.
- **Surface:** Dark capsule with a slightly lifted shell; the command text reads like terminal output.
- **Typography:** Mono for the command, sans for the control label and helper text.
- **Shape:** Wide rounded container with a clear internal split.
- **Composition:** Keep the command line centered and wide enough to read as a single gesture.
- **Visible state:** Terracotta can appear in the headline word or a small label, but the bar itself stays mostly neutral.

### FAQ accordion

- **Anatomy:** Large centered section number, serif FAQ title, thin horizontal rules, stacked question rows, and a right-aligned plus/minus symbol.
- **Surface:** Same dark canvas, with no heavy panel framing.
- **Typography:** Serif for the heading; sans for each question and answer.
- **Spacing:** Large vertical breathing room above the list, then compact row spacing inside the accordion.
- **Visible states:** Closed rows stay flat and quiet. Open rows reveal softer gray answer text without changing the whole page.
- **Shape:** No card chrome; the rules carry the structure.

### Footer directory

- **Anatomy:** Brand area, short helper controls, then several columns of links and policy text.
- **Surface:** Deep charcoal that remains consistent with the rest of the page.
- **Typography:** Small sans for all columns, with legal text pushed lowest in contrast.
- **Composition:** Dense columns on the right, more open brand area on the left.
- **Visible states:** Links should look orderly and calm, not promotional.
- **Hierarchy:** Primary navigation comes before legal and corporate material, but the whole block stays visually quiet.

## Responsive behavior

The page should collapse by preserving story order, not by squeezing the collage into a brittle grid. On narrower widths, the centered headline stays first, the supporting copy follows, and the media tiles stack or crop before the footer becomes a dense vertical list. The header should simplify without losing the right-aligned action hierarchy. The command strip should remain readable as a single line until it must wrap; when it wraps, the label and command should still read as one unit.

The hero collage needs special care. Tiles should not become tiny cards with hard edges. They can reduce in number, shift lower in the stack, or move to a simple two-up arrangement, but they should keep the rounded image language and soft spacing. The FAQ should remain legible as a full-width list with obvious row separation. The footer can condense into fewer columns and more vertical grouping, but it should keep the same low-contrast hierarchy.

## Practical implementation guidance

### Preserve

- Keep the serif headline as the main identity signal.
- Keep the canvas very dark and warm rather than neutral gray.
- Use paper fill for the most important CTA, and reserve terracotta for small, memorable accents.
- Keep borders thin and spacing generous; let the composition do the work.
- Use rounded media crops for people and product stories.

### Avoid

- Avoid glossy gradients and dense shadow systems.
- Avoid turning the page into a card grid everywhere.
- Avoid mixing too many font families or weights in one section.
- Avoid bright blue interface chrome; it breaks the warm editorial tone.
- Avoid making terracotta the default action color on every control.

### Recommended build order

1. Establish the dark canvas, border color, and paper text pair.
2. Set the serif display hierarchy and the sans body rhythm.
3. Build the shared button treatments and header actions.
4. Recreate the startup hero collage with rounded video tiles.
5. Add the Claude Code command strip and logo row.
6. Add the FAQ accordion and footer directory.
7. Tune responsive stacking so the visual order survives narrow widths.

### Accessibility

- Keep text contrast high on the dark canvas and on dark shells.
- Make the paper action button large enough to read as the primary step.
- Give the play badge and any icon-only control a clear focus state.
- Keep accordion row boundaries obvious for keyboard users.
- Use meaningful alt text for portrait and product imagery, since the images carry much of the page story.

## Scope note

This guide covers the dark claude.com marketing surfaces in the supplied packet: the startup hero, Claude Code, the download page, the FAQ block, and the footer directory. It does not include unseen motion, hover and focus states, smaller breakpoints, or product areas outside this set. Type and spacing values use the packet’s relative-unit rounding.
