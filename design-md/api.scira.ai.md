# How api.scira.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/api.scira.ai-design)

Last updated: 2026-08-08

## Captured pages

[![Large rounded hero card with pale peach action buttons](https://pin.fontofweb.com/5944?format=jpg)](https://design.withfudge.com/share/pin-5944)

[Large rounded hero card with pale peach action buttons](https://design.withfudge.com/share/pin-5944)

[![Split feature section with editorial text and a dark code panel](https://pin.fontofweb.com/5943?format=jpg)](https://design.withfudge.com/share/pin-5943)

[Split feature section with editorial text and a dark code panel](https://design.withfudge.com/share/pin-5943)

[![Compact footer with link columns and small social icons](https://pin.fontofweb.com/5945?format=jpg)](https://design.withfudge.com/share/pin-5945)

[Compact footer with link columns and small social icons](https://design.withfudge.com/share/pin-5945)

## Overview

Scira’s public page is a restrained developer landing system built almost entirely from dark surfaces, soft borders, and one warm action color. The page avoids visual noise and instead gives each section a clear job: a rounded call-to-action card, a split feature block with code, and a compact footer with navigation and legal links. The result feels technical and calm rather than playful or promotional.

The strongest pattern is contrast by surface, not by ornament. Deep charcoal fills the page, slightly lighter panels hold the main content, and the pale peach button marks the one obvious invitation to move forward. Text stays left aligned and close to the grid, while the cards and buttons use large radii that soften the otherwise strict structure. The code panel reinforces the developer focus and keeps the tone practical.

The system reads as a single dark family with three supporting accents: the warm action fill, the lighter panel surface, and the small syntax colors inside code. That keeps the layout coherent across the hero-like CTA, the feature explanation, and the footer.

## Colors

Scira uses a narrow palette with a very dark base, a slightly lighter card surface, a defined border tone, and a pale peach action. The page does not rely on bright background changes; instead, the distinction comes from careful shifts between near-black values and warm highlights. The same palette supports all visible sections because the layout is meant to feel continuous from top to bottom.

| token | value | use |
|---|---|---|
| `canvas` | `#0E0E0E` | Page background, outer field, and overall dark ground |
| `surface` | `#171717` | Main cards, code containers, and section panels |
| `surface-strong` | `#1F1F1F` | Secondary button fill and slightly lifted dark controls |
| `border` | `#2E2E2E` | Hairline borders around cards and buttons |
| `ink` | `#F1F1F1` | Primary text on dark surfaces |
| `muted-ink` | `#A6A6A6` | Supporting copy, footer links, and low-priority labels |
| `action` | `#F2D4B3` | Filled primary button and the page’s clearest call to action |
| `action-strong` | `#E9BF91` | Hover or emphasis state for the warm action family |
| `code-cyan` | `#5EC8C4` | Syntax highlight for links, properties, or APIs in code |
| `code-green` | `#6BD17E` | Syntax highlight for strings and success-like tokens in code |
| `code-amber` | `#D7A24A` | Syntax highlight for values, methods, or standout code tokens |

The relationship between modes is simple: the page stays dark first, then lets the warm action color do the talking. The code panel adds small cool and amber accents so the developer example remains readable without disturbing the larger monochrome feel. The design should keep these accents sparse; if every element becomes colorful, the CTA loses its force.

## Typography

The page depends on a neutral sans-serif stack for marketing copy and a monospace stack for the code sample. That keeps the voice direct and contemporary. The main shift is scale: the headline is large and compact, the section heading is strong but smaller, and the footer deliberately drops into quiet text. Weight stays modest, so the page feels crisp rather than heavy.

Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | neutral sans-serif | 4.5rem | 500 | 0.95 | -0.04em | Big lead line in the call-to-action card |
| `section-display` | neutral sans-serif | 3rem | 500 | 1 | -0.03em | Main feature heading |
| `feature-display` | neutral sans-serif | 2.25rem | 500 | 1.03 | -0.03em | Secondary emphasis inside feature content |
| `body` | neutral sans-serif | 1rem | 400 | 1.55 | 0em | Paragraph copy and supporting explanations |
| `body-medium` | neutral sans-serif | 1rem | 500 | 1.45 | 0em | Button labels and short emphasized text |
| `navigation` | neutral sans-serif | 0.75rem | 400 | 1.4 | 0em | Header and footer links |
| `legal-copy` | neutral sans-serif | 0.75rem | 400 | 1.5 | 0em | Copyright and fine print |
| `code` | monospace | 0.75rem | 400 | 1.6 | 0em | API sample and code comments |

The hierarchy should feel steep even when the weights stay close together. Large headings need a tight line-height so they sit confidently inside rounded dark panels. Body text should remain open enough to breathe on the dark ground without turning airy. Code should keep a slightly calmer rhythm than the marketing copy so the example reads as practical rather than decorative.

## Layout

The layout is centered and spacious, with each major block set inside a broad dark field. The CTA card is the most expansive element: a wide rounded rectangle with generous internal padding, a left-aligned message, and a row of two pill-shaped buttons. The surrounding field acts as framing space, so the card feels like a destination instead of a box pasted onto the page.

The feature section uses a strict two-column composition. The text column is narrower and more editorial, while the code panel occupies the larger right side and visually balances the heading. This split is important because it prevents the page from becoming a long wall of text. The left column explains the product; the right column proves the product with a concrete request example. Keep that ratio intact so the section remains legible at a glance.

The footer switches from persuasion to navigation. It uses multiple short columns, each separated by ample horizontal breathing room. The brand block, link groups, and legal line are all small enough to stay quiet, but they still align to the same overall grid. The page’s shape language stays consistent throughout: large corner radii on primary containers, pill buttons for actions, and subtle borders instead of heavy dividers.

Vertical rhythm matters more than ornamental separators. There is clear space between the CTA card, the feature block, and the footer, and each section needs enough margin to feel self-contained. The layout should never crowd the code sample against the headline or push footer links too close to the edges.

## Visual language

Scira’s visual language is minimal, technical, and softly rounded. The dark background gives the page a studio-like mood, while the warm action color keeps the interface from feeling sterile. The code sample and the footer anchors make the design read as a tool for builders, but the page still leans on marketing composition: large promise, clear proof, simple next step.

The card surfaces are nearly flat, with borders doing the structural work. That keeps the page disciplined and helps the rounded corners read as the main decorative gesture. Buttons are deliberately pill-shaped, which makes them feel friendly without becoming casual. The primary button is the brightest object in the system, so it must stay visually dominant. The secondary button should remain quiet and slightly darker, acting as the less urgent alternative.

The code block introduces the page’s only strong detail density. It gives the section a working, tangible feeling through syntax colors and monospaced rhythm, but it should still sit inside the same dark surface family as the rest of the page. Nothing here should look chrome-heavy or glossy. The system depends on restraint, subtle borders, and a steady balance between darkness and warmth.

## Components

### Call-to-action card

The main card is a large rounded panel with a short headline, one supporting sentence, and two horizontally arranged buttons. The composition leaves the right side open, which makes the left-aligned message feel confident rather than crowded. Use `feature-panel` as the base and keep the internal padding generous so the text and buttons sit comfortably inside the surface. The headline should use the larger display style, while the supporting sentence stays in body size and a muted tone. This card needs to feel like the page’s first and most important decision point.

### Primary action

The filled button uses `action` against the dark page and should remain the most luminous element in the system. The text sits in dark ink so the button reads clearly at a glance. Its pill radius and compact proportions make it feel current without becoming soft or playful. Keep the label short. This control is not a container for explanation; it is the direct invitation to proceed.

### Secondary action

The secondary button is a dark pill with a visible border. It is important because it preserves choice without competing with the primary action. Keep the surface close to `surface-strong`, with text in `ink` and a thin border in `border`. That balance makes it readable while keeping the action hierarchy intact. If a hover or active state is added later, it should stay within the same dark family and never outshine the warm primary button.

### Feature split block

The feature section combines an editorial left column and a code panel on the right. The left side holds the section label, a strong heading, and a brief paragraph. The right side is a framed code sample with syntax colors and compact internal padding. This component depends on contrast between explanation and proof. Keep the left column narrow enough to read quickly and keep the code block wide enough that the sample does not wrap awkwardly. The visual weight should feel balanced, not symmetrical.

### Code panel

The code panel is a dark inset surface with a thin border, a monospace type treatment, and syntax accents in cyan, green, and amber. It should feel functional and calm. The code must remain readable on the dark surface without relying on bright backgrounds or loud shadows. Avoid making the panel feel like a separate product; it should read as part of the same page system. The corners, border, and spacing should match the other containers so the section feels coherent.

### Footer

The footer is quiet but structured. It includes a small brand block, several link columns, and a legal line. Text sizes step down to `navigation` and `legal-copy`, and the palette shifts toward `muted-ink` so the section recedes after the main content. Keep the columns evenly spaced and aligned to the same grid as the rest of the page. The footer should not introduce a new visual language; it should close the page with the same darkness, the same border discipline, and the same restrained rhythm.

## Responsive behavior

On narrower screens, the hierarchy should stack in the same order: message first, action second, proof third, footer last. The CTA card can become taller, but the headline must remain easy to scan without awkward line breaks. The feature section should move from a two-column layout to a vertical flow with the text above the code sample. The footer columns should collapse cleanly into a shorter list while keeping the spacing generous enough for touch use.

The warm action should remain the dominant color at every width. The dark surfaces should stay dark, because the page relies on that atmosphere to keep the code block and footer legible. When the layout contracts, preserve the large radii and pill buttons rather than swapping to sharp rectangles; the rounded language is part of the brand feel. Keep the typography scales proportionate, but do not shrink the headings so much that the page loses its strong opening statement.

## Practical implementation guidance

### Preserve

Keep the entire system rooted in a dark canvas with one warm action color. Preserve the wide card proportions, the soft corners, the bordered surfaces, and the left-aligned text structure. Keep the code panel honest and legible, because it is the visual proof that the page is aimed at builders. Maintain the quiet footer so the page ends in the same tone it begins with.

### Avoid

Avoid bright background switches, decorative gradients, heavy shadows, or extra accent colors that compete with the action button. Avoid turning every card into a separate visual theme. Avoid center-aligning the body copy in the feature section, because the design depends on a readable left edge. Avoid using the warm action color for long text runs; it should stay reserved for controls and small emphasis.

### Recommended build order

1. Establish the dark canvas, card surfaces, border tone, and action color.
2. Build the pill buttons and the rounded card geometry.
3. Recreate the CTA card with its headline and supporting line.
4. Build the feature split with text on the left and the code panel on the right.
5. Finish with the footer grid, subdued links, and legal line.
6. Tune spacing and type scale so the page still feels open at smaller widths.

### Accessibility

Use the darkest text treatment on the warm button so the label stays readable. Keep the border visible enough that the secondary button reads as a real control, not just text on a dark patch. Maintain strong contrast for the footer links and code comments. Give keyboard focus a clear outline that works on both `canvas` and `surface`. If syntax colors are used in code, make sure they support meaning rather than acting as the only cue.

## Scope note

This guide covers the public marketing surface: the rounded call-to-action card, the feature section with the code sample, and the dark footer. It does not cover authenticated product screens or motion. Measurements are practical adaptation targets.
