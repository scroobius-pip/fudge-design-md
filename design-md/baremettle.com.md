# How baremettle.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/baremettle.com-design)

Last updated: 2026-08-04

## Captured pages

[![Main forum index with dark chrome, green register button, and thread list](https://pin.fontofweb.com/6253?format=jpg)](https://design.withfudge.com/share/pin-6253)

[Main forum index with dark chrome, green register button, and thread list](https://design.withfudge.com/share/pin-6253)

[![Footer band with centered Bare Mettle mark and narrow utility links](https://pin.fontofweb.com/6254?format=jpg)](https://design.withfudge.com/share/pin-6254)

[Footer band with centered Bare Mettle mark and narrow utility links](https://design.withfudge.com/share/pin-6254)

## Overview

Bare Mettle’s forum index is a dark, compact shell wrapped around a classic message-board layout. It does not try to look like a marketing homepage. The page opens with a centered studio navigation strip, then drops into forum chrome: toolbar, breadcrumb, board title, pagination, and a thread table. The visual hierarchy is built from stacked black and charcoal planes, thin separators, and a single accent action. The overall feeling is quiet, industrial, and a little theatrical, with the smoky backdrop giving the chrome depth without turning the interface into a poster.

The important part is the tension between atmosphere and utility. The backdrop is moody and desaturated, but the working surfaces stay flat and scannable. Thread titles remain readable at a glance, metadata stays subdued, and the only saturated signal is the register control. That balance is what makes the system feel like an official forums skin rather than a generic dark-mode app.

## Colors

| token | value | role | use |
|---|---|---|---|
| `canvas` | `#000000` | Outer void | Full-page backdrop and the deepest footer field |
| `surface` | `#101010` | Primary panel | Main board card, thread field, and dark content planes |
| `chrome` | `#191919` | Raised bar | Top forum toolbar and other chrome strips |
| `rail` | `#404040` | Section rail | Sticky and regular thread label bands, strong separators |
| `rule` | `#818181` | Hairline rule | Thin borders, dividers, and understated outlines |
| `quiet-ink` | `#8D8D91` | Quiet text | Lower-priority labels and the faintest readable copy |
| `muted-ink` | `#B0B0B0` | Secondary text | Counts, timestamps, and supporting metadata |
| `fog` | `#AAAAAA` | Soft support | Light neutral support for minor labels and subdued chrome |
| `soft-ink` | `#D7D7D7` | Main light text | Board title, thread titles, and the clearest light copy |
| `warm-ink` | `#F6EEDD` | Warm highlight | Small warm light in the system, suitable for tiny emphasis only |
| `ink` | `#FFFFFF` | Strong text | Small chrome labels, icon buttons, and the brightest text |

The page is almost entirely monochrome. Black provides the structural field, then three gray levels step upward from `#101010` to `#191919` and `#404040` so the interface can stack without looking glossy. Text also moves in steps: pure white for the smallest chrome labels, soft gray for the main board titles, and quieter gray for counts and timestamps. That keeps the page calm even when it is dense.

There is no separate light theme here. The few lighter values are text, rules, and small chrome details inside the dark shell. The photographic backdrop sits behind the UI and stays subordinate to the content planes. The accent register control is the only bright interruption, and it should remain isolated so the gray system keeps its authority everywhere else. The warm cream tone is present in the page’s palette and can support tiny brand marks or small emphasis, but it should never replace the gray text system on the content surface.

## Typography

Bare Mettle’s visible type voice is Oswald throughout. The family gives the page its condensed, upright, uppercase character. Use it as a single-family system. Hierarchy comes from scale, tracking, and surface contrast more than from switching to a second font or leaning on many weights. Confirm the Oswald license before shipping a production build.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `navigation` | Oswald | 0.875rem | 400 | 1.2 | 0.04em | Top studio nav and compact forum chrome |
| `board-title` | Oswald | 1.5rem | 400 | 1.05 | 0.03em | Board heading such as COFFEE DIARY |
| `thread-title` | Oswald | 1rem | 400 | 1.15 | 0.01em | Thread names inside the list |
| `meta` | Oswald | 0.875rem | 400 | 1.2 | 0.01em | Reply counts, view counts, and timestamps |
| `label` | Oswald | 0.75rem | 400 | 1 | 0.08em | Sticky / regular section labels and small control text |
| `footer-mark` | Oswald | 1.5rem | 400 | 1 | 0.02em | The centered Bare Mettle brand mark in the footer band |

The typography is intentionally compressed. The uppercase navigation and section labels need extra tracking so the letters do not crush together. The board title should feel larger and more open than the thread list, but not theatrical; it is a heading for a utilitarian page, not a hero headline for a landing page. The thread table depends on compact lines and restrained leading so several rows can sit in view without turning into a wall of text.

The page does not ask typography to do decorative work that color or shape can do better. Instead, it uses strong case, consistent family choice, and a narrow range of sizes to keep the interface coherent. The result is a forum that feels branded without becoming noisy.

## Layout

The page is built as a centered column over a full-bleed dark field. On the wide desktop composition, the left and right edges are occupied by smoky environmental art, while the actionable interface stays locked into the middle. That contrast matters: the backdrop gives the page atmosphere, but the forum stack stays the thing the eye returns to.

The top studio bar is the first structural layer. It sits above the forum chrome and behaves like a distinct site shell, not part of the board itself. Under that, the forum toolbar collects the key actions into one dark strip: forum navigation on the left, account actions and small icon buttons on the right. The breadcrumb strip below it is flatter and quieter, acting as a transition into the board content.

The board header card is a single dark slab with a large title and one short line of supporting copy. Beneath it, pagination appears as a compact strip of small chips, followed by the list header and the thread table. That order is important. It gives the page a clear reading path: identity, utility, section, list.

The thread list itself is columnar and tight. Each row keeps the avatar on the left, the title and timestamp beside it, counts in the middle, and the last-activity area on the right. Sticky and regular threads are separated by darker label rails instead of big white gaps. The footer then leaves the forum stack and returns to pure black, where the centered wordmark and thin link strip can breathe.

Spacing stays disciplined at every scale. Vertical separation is used to define hierarchy, but it is never allowed to break the dense forum rhythm. The page works because the large black field, the narrow centered column, and the compact row structure all reinforce one another. If any of those expands too far, the page stops feeling like a forum and starts feeling like a generic content template.

## Visual language

This system leans on atmosphere, restraint, and hard edges. The backdrop is smoky and environmental, but the interface surfaces are nearly flat. There is very little shadow play. Instead, the page creates depth by layering black, near-black, and charcoal planes with sharp rules and occasional inset treatment. That makes the chrome feel practical rather than glossy.

Shape is restrained. Small 3–4px radii keep controls slightly softened without drifting into pill territory. The small square utility buttons and the compact pagination chips feel mechanical and controlled. The avatars bring the only obvious round form into the index, which is useful because they break the rows just enough to keep the list from feeling rigid.

The accent register control is the system’s loudest move. It sits inside a dark toolbar and therefore reads as a deliberate exception, not a random accent. The rest of the page relies on grayscale hierarchy and spacing, so the button becomes immediately visible without requiring a larger size or a stronger shadow.

The footer changes tone without changing the palette. It is still black and gray, but the centered wordmark introduces a more branded, almost hand-drawn note. That keeps the page from ending as a purely mechanical table. The visual language stays coherent because the same narrow type family and the same muted surfaces carry through to the bottom.

## Components

### Studio shell

The top strip uses centered uppercase site navigation with strong spacing between items. The letters are pale gray against a dark band, and the active destination feels aligned rather than boxed. It should remain quieter than the forum toolbar below it. The shell frames the page, but it should never compete with the board title or the thread list.

### Forum toolbar

This is the strongest utility bar on the page. On the left, grouped forum actions sit inside the dark chrome; on the right, account actions and small icon buttons are arranged as compact rectangles. The register control is the only filled action and the only bright accent surface in the toolbar. Keep the bar visually level and avoid extra depth: a thin border, a small radius, and close text spacing are enough. It should read as a working strip, not as a hero module.

### Breadcrumb strip

The breadcrumb is a flatter, lighter gray bar that separates the toolbar from the board card. It reads as a quiet path indicator rather than a large navigation element. Small square utility buttons can sit to its right, but they should stay secondary to the path text. The strip works because it lowers the visual energy before the board title arrives.

### Board header

The board header is a single panel with a large Oswald title and one short supporting sentence. The title is the first large reading moment on the page. The supporting copy stays lighter and smaller so the title retains dominance. The card should feel broad and calm, with enough internal padding to keep the text from hugging the edges.

### Pagination

Pagination is compact and chip-like. The active page is the clearest chip in the strip, while the remaining pages are darker and quieter. The Next control should read as part of the same set, not as a separate button. The chips need to stay tight so they can sit immediately above the thread table without consuming vertical space. Their job is to support quick movement, not to become a second row of calls to action.

### Thread rows

Each row uses a repeatable forum grid: avatar, title block, counts, and last activity. The titles are the clearest part of the row, with counts and timestamps receding into secondary gray. Sticky threads are distinguished by the label rail above them, not by a radically different card style. Rows should remain compact and uniform so the list can be scanned quickly. The rhythm of rows is more important than any single row.

### Footer band

The footer is a separate black field with a thin link strip and a centered brand mark. The wordmark is the main visual object there; the legal line stays tiny and quiet below it. The footer should not pick up the accent color or any new ornament. Its job is to close the page cleanly and return the eye to a nearly pure black field.

## Responsive behavior

On narrower screens, preserve the reading order: studio navigation, forum toolbar, breadcrumb, board title, pagination, and thread list. The toolbar should collapse before the board header loses clarity, and the thread rows should keep the title and last-activity information legible even when the counts stack. The page can afford to reduce decorative side space aggressively because the backdrop is not carrying information.

Keep the title sizes and chip sizes compact rather than scaling them dramatically. The system works because it stays dense. If the layout narrows, reduce horizontal spread first, then allow the rows to stack more vertically only where necessary. The footer should remain calm and centered, with the brand mark still legible after the columns simplify.

Do not let the navigation become a second hero on smaller widths. The central content stack should remain dominant even when the outer chrome compresses. The forum should still feel like a forum, just with less horizontal breathing room.

## Practical implementation guidance

### Preserve

- Keep the page mostly monochrome, with the register action reserved as the only bright interruption.
- Keep Oswald as the only visible family and let uppercase, tracking, and scale do the hierarchy work.
- Preserve the compact forum density: small radii, thin rules, and tightly organized rows.
- Keep the smoky backdrop behind the chrome, not inside the content cards.
- Keep the footer quieter than the main board so the thread table remains the page’s center of gravity.

### Avoid

- Avoid bright secondary accents, especially blues or purples that would compete with the register control.
- Avoid large rounded cards, soft shadows, and glossy gradients.
- Avoid mixing type families or introducing a second display face.
- Avoid generous padding that turns the forum index into a marketing layout.
- Avoid making every control feel equally important; the toolbar needs one clear primary action and several quiet companions.

### Recommended build order

1. Set the black and charcoal background stack.
2. Build the studio navigation shell.
3. Add the forum toolbar with the register control.
4. Add the breadcrumb strip and board header card.
5. Build pagination and the thread grid.
6. Finish with the footer band and centered mark.
7. Tune contrast, tracking, and row density together so the page reads as one system.

### Accessibility

- Keep text contrast strong on the darkest surfaces, especially for thread titles and small chrome labels.
- Do not rely on color alone to identify the active page or the register action.
- Keep focus states visible on the small square controls and pagination chips.
- Provide useful alt text for avatar images and the footer mark if they are rendered as images.
- Preserve readable line lengths in the board title and metadata so the narrow Oswald forms do not become hard to scan.

## Scope note

This guide covers the baremettle.com forums index and footer shell shown here: the studio navigation, forum toolbar, breadcrumb, board header, pagination, thread rows, and the bottom brand band. It does not cover post interiors, account flows, alternate site sections, or any mobile-specific layout beyond the guidance above.
