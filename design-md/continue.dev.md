# How continue.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/continue.dev-design)

Last updated: 2026-08-03

## Captured pages

[![Top hero strip with green action chips and faint footer links](https://pin.fontofweb.com/8680?format=jpg)](https://design.withfudge.com/share/pin-8680)

[Top hero strip with green action chips and faint footer links](https://design.withfudge.com/share/pin-8680)

[![Wide hero with purple schematic art and the review workspace below](https://pin.fontofweb.com/8679?format=jpg)](https://design.withfudge.com/share/pin-8679)

[Wide hero with purple schematic art and the review workspace below](https://design.withfudge.com/share/pin-8679)

[![Alternate hero with browser mock, soft shadow, and feature row](https://pin.fontofweb.com/8678?format=jpg)](https://design.withfudge.com/share/pin-8678)

[Alternate hero with browser mock, soft shadow, and feature row](https://design.withfudge.com/share/pin-8678)

[![About page hero with pink-violet art and backed-by logos beneath](https://pin.fontofweb.com/6708?format=jpg)](https://design.withfudge.com/share/pin-6708)

[About page hero with pink-violet art and backed-by logos beneath](https://design.withfudge.com/share/pin-6708)

[![Airy openings list with bordered rows and a restrained footer](https://pin.fontofweb.com/6709?format=jpg)](https://design.withfudge.com/share/pin-6709)

[Airy openings list with bordered rows and a restrained footer](https://design.withfudge.com/share/pin-6709)

## Overview

Continue’s site uses a restrained developer-brand system built from pale neutral space, compact black-on-white interface pieces, and one vivid green action color. The page opens with a lightweight headline and a simple split hero: text on one side, a schematic or product mock on the other. The rest of the layout stays disciplined and airy so the art, the code-review surface, and the call to action carry the weight without visual clutter.

The site does not lean on ornamental branding. Instead, it repeats a narrow set of moves: near-black text, white cards, thin borders, soft shadows, monospaced utility text, and abstract violet-and-pink artwork that feels technical rather than decorative. The voice is calm, exact, and developer-facing. A page section usually has one clear job, one dominant surface, and very little incidental chrome.

Across the home and About pages, the same hierarchy keeps returning: a small eyebrow label, a large light headline, short supporting copy, a dark primary button, then a product or team story rendered inside a framed white panel. Below that, quieter rows handle trust signals, job listings, and footer links.

## Colors

### Core roles

| token | value | role |
|---|---|---|
| `action` | `#020817` | Primary button fill, dark hero CTA, strongest chrome |
| `ink` | `#000000` | Main headline text, strongest copy on pale fields |
| `muted-ink` | `#0F172A` | Supporting copy, secondary navigation, quiet UI text |
| `canvas` | `#FAFAFA` | Overall page field and open whitespace |
| `surface` | `#FFFFFF` | Cards, framed art, review workspace, list rows |
| `surface-soft` | `#F9F3F4` | Pale review highlights, quiet panel tint |
| `border` | `#EFE4E7` | Hairline rules, card edges, row separators |
| `success` | `#05BD48` | Positive checks, accepted state, green indicators |
| `success-strong` | `#00A72E` | Active green control fill and stronger success accent |
| `art-accent` | `#312E81` | Purple schematic ink in the hero artwork |
| `art-deep` | `#161434` | Deep violet-blue in art and code-like surfaces |
| `code-emphasis` | `#09090B` | Dark utility chrome, dark footer or code contrast |

### Color behavior

The page is mostly light. Canvas and white surfaces do the framing work, while text stays near-black for clarity. The action color is not decorative; it is reserved for the strongest button and a few compact UI accents. The green family appears only where the interface needs a positive signal or a selected state. Violet and pink belong to the art panels and give the brand its technical illustration energy without turning the whole page colorful.

Dark surfaces are used sparingly. When they appear, they read as code, tooling, or footer-level utility rather than as a full dark theme. That restraint keeps the page calm and lets the art stand out against the white field.

## Typography

Continue uses two main sans families plus two utility faces. Ibm Plex Sans carries the product voice on the home page and most supporting UI. Manrope appears in the About story header and the openings material. Ibm Plex Mono and Monaco handle code-like and metadata surfaces. System appears in the smallest labels and eyebrow-style utility text. Licensing details are not supplied in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Ibm Plex Sans | 4rem | 300 | 1.05 | -0.025em | Home hero and similar page-leading statements |
| `hero-display-alt` | Manrope | 4rem | 300 | 1.05 | -0.025em | About-us headline treatment |
| `section-display` | Ibm Plex Sans | 3.5rem | 300 | 1.05 | -0.025em | Secondary hero statements and major section leads |
| `feature-heading` | Ibm Plex Sans | 1.5rem | 600 | 1.25 | 0em | Strong card titles and small tool headings |
| `body-large` | Ibm Plex Sans | 1.125rem | 400 | 1.63 | 0em | Hero support copy and wider explanatory text |
| `body` | Ibm Plex Sans | 1rem | 400 | 1.5 | 0em | General body copy, row descriptions, footer text |
| `body-strong` | Ibm Plex Sans | 1rem | 600 | 1.5 | 0em | Emphasized labels, active chips, small UI emphasis |
| `nav` | Ibm Plex Sans | 0.9375rem | 400 | 1.5 | 0em | Top navigation and compact page links |
| `button` | Ibm Plex Sans | 0.875rem | 500 | 1.43 | 0em | Primary and secondary buttons, chip labels |
| `eyebrow` | System | 0.75rem | 400 | 1.33 | 0.2em | Uppercase story labels and section tags |
| `mono-meta` | Ibm Plex Mono | 0.6875rem | 400 | 1.5 | 0.025em | Footer metadata and very small utility text |
| `mono-code` | Monaco | 0.75rem | 400 | 1.5 | 0em | Code-like surfaces and narrow technical detail |
| `system-meta` | System | 0.75rem | 400 | 1.33 | 0.2em | Small labels that need a crisp utility feel |

The type hierarchy depends on scale and weight more than on many font families. The light 300-weight headlines are the signature move. Supporting copy is quiet, roomy, and left aligned. Small labels gain authority from letter spacing and capitalization rather than from boldness.

## Layout

The page is built as a sequence of wide, low-friction bands. It prefers open canvas over nested containers, and it uses a small number of stable alignments instead of a complex grid language. The home hero is a split composition: text column on one side, a framed schematic artwork or product mock on the other. The About hero follows the same logic, with the story copy on the left and a white art panel on the right.

A review workspace occupies a large card below the hero on the home page. It reads like a product screenshot: a top bar, a narrow left rail, a wide main pane, and centered accept/reject controls. The card is large, flat, and softly shadowed, with enough white space around the content that the interface feels calm rather than busy.

Lower on the page, trust and company sections switch to simpler rows. The backed-by strip is a horizontal logo line with ample breathing room. The openings section becomes a list of wide bordered rows, each row carrying a title, a short supporting line, and a right-aligned arrow. The footer is the quietest zone: low-contrast links, small metadata, and a final row of legal text.

The layout rhythm comes from vertical spacing more than from heavy separators. Sections usually end with open whitespace, a thin rule, or a new surface color. That makes the long page feel measured and deliberate.

## Visual language

Continue’s visual language is technical, editorial, and restrained. The loudest pieces are the framed artwork panels: abstract violet and pink ink forms wrapped in precise line grids. Those images feel like engineering diagrams loosened into motion. They stay disciplined because the ink sits inside a white frame and the linework remains geometric.

The product mockups keep the same discipline. Cards are flat or lightly shadowed, with 6px corners and thin borders. Controls are small and precise. The active buttons are dark, compact, and rectangular or pill-shaped depending on the context. The chip set uses outline pills with tiny icons, then flips a single item into a filled or stronger state when one choice is active.

Color is used as a cue, not as a decoration layer. Green indicates a positive or accepted state. Red appears only in review feedback. Purple and pink belong to art or diff-like emphasis. Most of the interface stays monochrome so those cues remain legible.

The page avoids dense ornament. No heavy gradients are needed. No large iconography system is needed. The white field, hairline borders, and selective art do the work.

## Components

### Header and navigation

**Anatomy:** Left wordmark, right-aligned text links, minimal top chrome.  
**Typography:** `nav` in Ibm Plex Sans.  
**Surface:** Transparent over the pale canvas.  
**Hierarchy:** The brand mark leads; navigation remains visually quiet.  
**Visible states:** Default links are simple text, not buttons.

### Hero statement block

**Anatomy:** Small eyebrow label, large headline, short supporting paragraph, primary button, secondary text link.  
**Typography:** `eyebrow`, `hero-display`, `body-large`, and `button`.  
**Shape:** The button is a 6px-radius rectangle; the secondary action stays text-only.  
**Spacing:** Tight vertical stack with generous breathing room around the block.  
**Composition:** The headline is compact and left aligned, with the art panel balancing it on the opposite side.

### Framed artwork panel

**Anatomy:** Large white rectangle containing abstract linework and purple-violet ink.  
**Surface:** White frame with a very light shadow.  
**Shape:** Mostly square or wide rectangular, with little internal chrome.  
**Composition:** The artwork fills the frame without extra labels or UI.  
**Role:** It is the visual anchor for the hero and About story.

### Review workspace card

**Anatomy:** Top title strip, left checks rail, main review pane, centered accept/reject controls.  
**Surface:** White card with pale separators and soft shadow.  
**Typography:** Small labels in mono or compact sans, main title in a stronger sans size.  
**Shape:** 6px corners, thin borders, pill controls.  
**Visible states:** One control reads as active or positive in green; the opposing control reads as muted or negative.  
**Composition:** The main pane stays broad and calm so code or diff content can breathe.

### Feature row

**Anatomy:** Three equal text columns with a small heading and a short explanation.  
**Typography:** `feature-heading` plus `body`.  
**Hierarchy:** The heading leads; the description stays low contrast.  
**Spacing:** Wide gutters between columns, no heavy card borders.  
**Role:** It turns product claims into a quiet summary band rather than a promo block.

### Backed-by strip and openings list

**Anatomy:** Small uppercase label, grayscale logos, then a stacked list of openings.  
**Typography:** `eyebrow`, `body`, and stronger list titles.  
**Surface:** Open canvas with thin top and bottom rules.  
**Shape:** The job rows are full-width rectangles with 6px corners and 1px borders.  
**Composition:** The arrows sit at the far right so each row reads like a clean affordance.

### Footer

**Anatomy:** Low-contrast link row, small icons, legal line.  
**Typography:** `nav`, `mono-meta`, and `system-meta` as needed.  
**Surface:** Bare canvas or very subtle dark utility chrome, depending on the page section.  
**Hierarchy:** It recedes behind the main story rather than competing with it.  
**Visible states:** Links remain plain and restrained.

## Responsive behavior

When the layout narrows, the hero should stack before the art panel gets cramped. The headline should stay light and large enough to carry the page, but it can reduce to a more compact scale before any weight increase. The review workspace should collapse into one vertical stack with the left rail moving above or below the main pane. The three-column feature row should become a single column so the copy stays readable.

On smaller screens, keep the white cards full width, preserve the 6px corners, and keep the borders thin. Do not invent heavier shadows or larger radii to compensate for less space. The page should remain spacious, with vertical rhythm doing the work instead of horizontal compression.

## Practical implementation guidance

### Preserve

- The 300-weight headline hierarchy.
- The pale canvas and white surface pairing.
- The dark primary action and the green positive state.
- The framed schematic artwork as the main visual event.
- Thin borders, 6px corners, and low-contrast supporting copy.
- The left-aligned, editorial reading flow.

### Avoid

- Avoid bold, chunky SaaS headlines.
- Avoid bright blue button fills.
- Avoid decorative gradients across the whole page.
- Avoid heavy shadows on every card.
- Avoid rounding every container into a soft pill.
- Avoid crowding the page with too many icons or badges.

### Recommended build order

1. Set the type scale and line lengths first.
2. Build the header and the hero copy block.
3. Add the framed artwork panel.
4. Build the review workspace card and chip set.
5. Add the three-column feature row.
6. Add the backed-by strip, openings list, and footer.
7. Tighten spacing and border treatment across breakpoints.

### Accessibility

- Keep contrast strong on all body copy and links.
- Use visible focus rings on buttons, chips, rows, and navigation links.
- Do not rely on red and green alone to communicate review states.
- Provide useful alt text for the artwork and product mockup panels.
- Keep tap targets large enough on the chip row and job rows.
- Preserve reading order when sections stack on smaller screens.

## Scope note

This guide covers the home hero, review workspace, feature row, About hero, backed-by strip, openings list, and footer. It does not define mobile breakpoints, hover or pressed states, motion, or any interaction behavior not shown in the stills. Type and spacing values use the supplied relative-unit scale rounded to a consistent 0.125rem step.
