# How steven-hanley.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/steven-hanley.com-design)

Last updated: 2026-08-10

## Captured pages

[![Project header with client metadata row showing 7-Eleven branding, role assignment, and summary section with thin horizontal rules](https://pin.fontofweb.com/5074?format=jpg)](https://design.withfudge.com/share/pin-5074)

[Project header with client metadata row showing 7-Eleven branding, role assignment, and summary section with thin horizontal rules](https://design.withfudge.com/share/pin-5074)

[![Selected work index with arrow-prefixed project rows, category tags, and footer contact bar with availability indicator](https://pin.fontofweb.com/5073?format=jpg)](https://design.withfudge.com/share/pin-5073)

[Selected work index with arrow-prefixed project rows, category tags, and footer contact bar with availability indicator](https://design.withfudge.com/share/pin-5073)

[![7-Eleven case study with large isometric illustration, mobile app mockup, and descriptive paragraph on warm neutral background](https://pin.fontofweb.com/5072?format=jpg)](https://design.withfudge.com/share/pin-5072)

[7-Eleven case study with large isometric illustration, mobile app mockup, and descriptive paragraph on warm neutral background](https://design.withfudge.com/share/pin-5072)

[![Homepage work index with locked coming-soon entries, about section, and contact footer with Berlin timezone](https://pin.fontofweb.com/5071?format=jpg)](https://design.withfudge.com/share/pin-5071)

[Homepage work index with locked coming-soon entries, about section, and contact footer with Berlin timezone](https://design.withfudge.com/share/pin-5071)

## Overview

Steven Hanley's portfolio presents a disciplined, engineering-forward visual system that treats the browser as a structured document rather than a fluid canvas. The design language is built on absolute precision: every element sits within a rigorous grid of horizontal hairlines, creating a tabular, almost spreadsheet-like reading experience. The homepage and project index pages use this grid to organize work chronologically and hierarchically, while case-study pages introduce warmth through a single neutral surface that offsets the clinical structure elsewhere.

The system communicates professionalism through restraint. There are no decorative gradients, no shadow systems, no border-radius curves. Typography is small, uppercase, and spaced with mechanical consistency. Color is reduced to black, white, and a single warm tone reserved for immersive project presentations. The overall impression is of a designer who values clarity, systematic thinking, and the quiet confidence of well-organized information.

Navigation is omnipresent and utilitarian. The header contains a location-aware clock, sound toggle, and identity mark. The footer anchors contact information with availability status. Between these fixed elements, content flows in ruled rows that invite scanning rather than leisurely reading. This is a portfolio designed for busy creative directors and recruiters who need to assess scope and capability quickly.

## Colors

The palette is intentionally austere, with color reserved for functional and atmospheric roles rather than decorative expression. Black carries the entire information hierarchy; white provides the ground; and a warm neutral appears only when project imagery demands a softer container.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, icons, and all hairline rules |
| canvas | #FFFFFF | Page background, header, footer, and index surfaces |
| muted-ink | #808080 | Secondary text, disabled states, coming-soon labels, and "click to copy" hints |
| warm-surface | #F5EDE6 | Case-study section backgrounds behind large project imagery |
| accent-green | #00D26A | Availability indicator dot in footer |

The ink and canvas pairing dominates every page. The index views—both homepage and selected work—are pure black on white, with no chromatic distraction. This extreme contrast supports the small type sizes and dense information layout. The muted-ink token appears sparingly: on locked project entries marked "COMING SOON," on the secondary "CLICK TO COPY" instruction beside the email address, and on the timestamp in the footer. It functions as a de-emphasis color rather than a true secondary brand hue.

The warm-surface token is the single atmospheric exception. It appears behind the isometric 7-Eleven illustration and mobile mockup, creating a gallery-like presentation that separates project imagery from the structural chrome. This warmth is drawn from the illustration's own palette—the pale peach of the convenience store scene—and extends the image's tonal world into the surrounding canvas. The accent-green appears only as a small dot preceding availability text, functioning as a status indicator rather than a brand color.

No dark mode is visible in the supplied material. The system assumes light surfaces throughout.

## Typography

Two families serve distinct roles: Geist for all interface and body text, Jet Brains Mono for labels, metadata, and technical annotations. The pairing reinforces the portfolio's engineering sensibility—Geist's clean geometry for readable prose, Jet Brains Mono's fixed-width discipline for tabular information.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| navigation | Geist | 0.75rem | 400 | 1 | 0.05em | Header links, project list items, category tags |
| body | Geist | 1.25rem | 400 | 1.4 | -0.01em | Case-study descriptions and paragraphs |
| display | Geist | 2rem | 400 | 1.1 | -0.02em | Large introductory statements |
| label | Jet Brains Mono | 0.75rem | 400 | 1 | 0.02em | Metadata keys, footer labels, timestamps |
| code | Jet Brains Mono | 0.75rem | 400 | 1.2 | 0 | Technical annotations, inline values |

All type is rendered at exact multiples of the 4px relative unit. The navigation and label tokens share a 12px size but diverge in family and tracking: Geist navigation is wider-spaced for scanability, while Jet Brains Mono labels stay tight to preserve column alignment. The body token at 20px provides comfortable reading for case-study paragraphs without breaking the system's modest scale. Display text at 32px is reserved for the most prominent statements, tracked slightly tighter for visual density.

Every text element in the interface is uppercase. This is a non-negotiable system rule that applies to navigation, labels, metadata values, and even the availability timestamp. The uppercase treatment, combined with small sizes and generous tracking, produces the distinctive bureaucratic-meets-elegant tone.

Geist was designed by Basement Studio (Andrés Briganti, Mateo Zaragoza) and is available through Vercel. Jet Brains Mono was designed by Philipp Nurullin and Konstantin Bulenkov for JetBrains. Verify licensing for these families before production use.

## Layout

The layout system is built on a single structural principle: full-width horizontal rows separated by 1px hairlines. This creates a table-like reading experience where every piece of information occupies its own ruled band. The grid is absolute—there are no cards, no floating panels, no offset compositions.

Page structure follows a consistent vertical stack. The header row contains identity on the left, live clock in the center, and sound toggle on the right. Below this, metadata rows on project pages display client, role, and summary information, each in its own ruled band with icon-key pairs on the left and values on the right. The main content area on index pages is a scrollable list of project entries, each a single row with arrow icon, project name, category tags, and optional index number. The footer row mirrors the header's utilitarian density: contact label, email with copy action, location, time, and availability status.

Horizontal rhythm relies on consistent page gutters. Content is inset from viewport edges by a fixed margin, creating a framed effect that contains the full-width rules. On case-study pages, this gutter contains large imagery that bleeds to the inner content edge while maintaining the outer frame.

The row height system is strict. Header, metadata, project list, and footer rows share a common minimum height that accommodates the 12px uppercase text with comfortable vertical padding. This consistency means the interface can be read as a continuous ledger—each row is interchangeable in its vertical footprint, varying only in content density.

No sidebar, no off-canvas navigation, no modal overlays are visible. The entire information architecture is flat and scrollable, with depth created only through the case-study pages' warm-surface sections that interrupt the white grid with atmospheric color.

## Visual language

The visual language is defined by what it refuses: no rounded corners, no drop shadows, no gradient fills, no decorative illustration outside of project content. The design's personality emerges from this negation—its confidence is in the precision of its constraints.

Hairline borders are the primary visual element. At 1px and pure black, they divide every section with absolute clarity. These rules are not subtle separators; they are structural members that hold the layout together. The cumulative effect is architectural: the page reads as a series of stacked beams and plates.

Iconography is minimal and functional. Small geometric icons precede labels: a cube for identity, folder for selected work, arrow for project links, person-outline for role, information square for summary, envelope for contact. These icons share the 12px scale of their accompanying labels and are rendered in the same ink color without hover states or animation indicators.

The single expressive moment in the system is project imagery. The 7-Eleven case study displays a large isometric illustration with saturated brand colors—red, green, orange, pink—against the warm-surface background. This illustration breaks the grid's severity without violating its structure: it sits within the content frame, respecting gutters, but introduces color, depth, and playful detail that the surrounding interface deliberately suppresses. The mobile mockup floating beside it reinforces the designer's product focus while maintaining the presentation's editorial quality.

## Components

### Header bar

- **Anatomy**: Full-width row with left-aligned identity mark and name, center-aligned location and live clock, right-aligned sound toggle with switch indicator.
- **Surface and text color**: Canvas background, ink text, 1px bottom border in ink.
- **Typography**: Navigation token, uppercase, tracked wide.
- **Shape and border**: Zero border-radius; full-width 1px bottom hairline.
- **Spacing**: Standard row height with horizontal page gutters.
- **Composition**: Three-zone flex layout with identity, clock, and utility toggle.

### Metadata row

- **Anatomy**: Icon-key pair on left, value on right; divided by vertical hairline on project pages.
- **Surface and text color**: Canvas background, ink text for active entries, muted-ink for disabled.
- **Typography**: Label token for keys, navigation token for values.
- **Shape and border**: Full-width 1px top and bottom borders; vertical divider between client and role columns.
- **Spacing**: Standard row height; generous horizontal padding between icon and key text.
- **Composition**: Two-column on project pages, single-span on index.

### Project list item

- **Anatomy**: Arrow icon, project name, category tags, optional index number in brackets.
- **Surface and text color**: Canvas background, ink text; muted-ink for coming-soon entries with lock icon replacing arrow.
- **Typography**: Navigation token throughout; category tags in same size with comma separation.
- **Shape and border**: Full-width 1px top border; no bottom border (shared with next item's top).
- **Spacing**: Standard row height; text vertically centered.
- **Composition**: Left-to-right flow with arrow as status indicator, name as primary, tags as secondary, index as tertiary right-aligned.
- **Variants**: Active (arrow + ink), locked (lock icon + muted-ink + "COMING SOON" tag).

### Case-study body

- **Anatomy**: Descriptive paragraph above large project imagery; imagery may include device mockups and environmental illustrations.
- **Surface and text color**: Warm-surface background, ink text for body copy; imagery contains its own color.
- **Typography**: Body token for descriptions; generous line height for readability at 20px.
- **Shape and border**: No border-radius; imagery respects content gutters.
- **Spacing**: Section spacing above and below; large internal padding around imagery.
- **Composition**: Single-column text above full-width imagery; imagery may contain multiple elements in editorial arrangement.

### Footer bar

- **Anatomy**: Contact label with icon, email address, "CLICK TO COPY" hint, location and time, availability dot and date.
- **Surface and text color**: Canvas background, ink text; muted-ink for hint and time; accent-green for availability dot.
- **Typography**: Label token for labels and time; navigation token for email.
- **Shape and border**: Full-width 1px top border.
- **Spacing**: Standard row height; horizontal page gutters.
- **Composition**: Left contact cluster, center utility hint, right status cluster.

## Responsive behavior

No mobile or tablet layouts are visible in the supplied material. The following guidance is recommended for implementation:

The row-based structure should collapse gracefully. On narrow viewports, metadata rows should stack vertically rather than maintaining side-by-side columns, with vertical dividers converting to horizontal rules. The header's three-zone layout should prioritize identity and sound toggle, moving the clock below or hiding it. Project list items should maintain their left-to-right flow but allow category tags to wrap or truncate.

The uppercase, small-type navigation may require size increase for touch targets. Consider a minimum 44px tap height while preserving the visual density of the row system. The warm-surface case-study sections should maintain their atmospheric role but may require reduced imagery scale to prevent excessive scrolling.

## Practical implementation guidance

### Preserve
- The absolute 1px hairline grid; this is the system's signature.
- Uppercase treatment for all interface text without exception.
- The two-family typographic split: Geist for prose and navigation, Jet Brains Mono for metadata and labels.
- The warm-surface color for case-study imagery backgrounds only.
- The framed page gutters that contain full-width rules.

### Avoid
- Rounded corners on any element; the system is explicitly rectilinear.
- Drop shadows or elevation effects; depth is created through color and imagery only.
- Decorative gradients or animated backgrounds.
- Mixed-case text in navigation or labels.
- Color outside the defined tokens; the 7-Eleven illustration's saturated palette is content, not system.

### Recommended build order
1. Establish the 4px relative unit and hairline border system.
2. Implement the row component with standard height and full-width rules.
3. Add the two typographic families with uppercase and tracking specifications.
4. Build header and footer bars as fixed structural elements.
5. Create project list items with active and locked variants.
6. Implement case-study pages with warm-surface sections and imagery gutters.
7. Add interactive elements: sound toggle, copy-to-clipboard, live clock.

### Accessibility
- The extreme ink-on-canvas contrast meets WCAG AAA for normal text.
- Small type sizes (12px) may require user zoom support; ensure the layout remains functional at 200% magnification.
- The uppercase, wide-tracked navigation should be tested with screen readers; consider `aria-label` additions where icon-key pairs may read redundantly.
- The sound toggle should include visible state change beyond the switch position for users with color vision differences.
- Coming-soon entries should be clearly distinguished from active links for keyboard navigation; the lock icon and muted color help, but explicit `aria-disabled` is recommended.

## Scope note

This guide covers the homepage, selected work index, and project case-study pages visible in the supplied material. It does not include motion behavior, hover or focus states, sound design, additional project pages, or responsive breakpoints. Measurements are practical adaptation targets derived from visual inspection of the desktop interface. Verify licensing for Geist and Jet Brains Mono before production use.
