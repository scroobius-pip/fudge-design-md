# How frankchimero.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/frankchimero.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section showing two-column conference and client list with country codes and copyright line on black background](https://pin.fontofweb.com/7427?format=jpg)](https://design.withfudge.com/share/pin-7427)

[Footer section showing two-column conference and client list with country codes and copyright line on black background](https://design.withfudge.com/share/pin-7427)

[![About section with biographical text in serif body copy and structured experience timeline with interview links](https://pin.fontofweb.com/7426?format=jpg)](https://design.withfudge.com/share/pin-7426)

[About section with biographical text in serif body copy and structured experience timeline with interview links](https://design.withfudge.com/share/pin-7426)

[![Entries archive showing chronological blog post list with dates from 2009-2025 and section heading in serif](https://pin.fontofweb.com/7425?format=jpg)](https://design.withfudge.com/share/pin-7425)

[Entries archive showing chronological blog post list with dates from 2009-2025 and section heading in serif](https://design.withfudge.com/share/pin-7425)

[![Book promotion panel for The Shape of Design with purchase links and cover image on dark gray surface](https://pin.fontofweb.com/7424?format=jpg)](https://design.withfudge.com/share/pin-7424)

[Book promotion panel for The Shape of Design with purchase links and cover image on dark gray surface](https://design.withfudge.com/share/pin-7424)

## Overview

Frank Chimero's personal website presents a dark, editorial aesthetic that prioritizes reading comfort and typographic refinement. The design establishes immediate atmosphere through a pure black canvas, letting content emerge through carefully graded gray tones rather than high-contrast white. Two typefaces create a clear hierarchy: Martina Plantijn, a warm contemporary serif, handles display and editorial moments, while IBM Plex Sans provides neutral, highly legible body text. The overall impression is of a designer's notebook—spacious, unhurried, and confident in its restraint. Content sections breathe with generous padding, and the layout avoids decorative excess in favor of structural clarity. The site functions as both portfolio and archive, with chronological lists, biographical narrative, and project promotion sharing a consistent visual treatment.

## Colors

The color system is intentionally minimal, built on a dark foundation with precise gray steps for functional differentiation.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, primary surface |
| surface | `#202020` | Elevated panels, book promotion card |
| ink | `#CCCCCC` | Primary text, headings, body copy |
| muted-ink | `#555555` | Secondary text, dates, captions, footer links |
| border | `#202020` | Subtle dividers, list separators |
| hairline | `#FFFFFF` | Top borders on interactive elements |

The palette operates in a single dark mode. The black canvas absorbs light, while `#CCCCCC` provides sufficient contrast for extended reading without the harshness of pure white. The muted-ink tone at `#555555` creates gentle hierarchy for metadata, dates, and supplementary information. The surface token at `#202020` appears only for distinct content panels like the book promotion, creating subtle elevation without shadows. No accent colors appear in the interface; visual interest comes entirely from typography and photography. Image palettes from the site's photographs introduce warmer and cooler grays, but these remain photographic rather than systemic.

## Typography

The type system pairs two families with distinct roles. Martina Plantijn, designed by Kris Sowersby at Klim Type Foundry, serves as the editorial voice—warm, slightly irregular, and human. IBM Plex Sans, designed by Mike Abbink, Paul van der Laan, and Pieter van Rosmalen at Bold Monday, handles functional text with neutral clarity. The design facts identify a specific font file labeled "Ibm Plex Sans-Text" that serves as the primary text weight in use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| section-display | Martina Plantijn | 1.5rem | 400 | 1.2 | normal | Page headings, section titles, book title |
| editorial-body | Martina Plantijn | 1.125rem | 400 | 1.5 | normal | Biographical paragraphs, long-form reading |
| body | IBM Plex Sans | 1rem | 400 | 1.5 | normal | Primary body paragraphs, descriptions |
| body-small | IBM Plex Sans | 0.875rem | 400 | 1.5 | normal | List items, navigation, compact text |
| label | IBM Plex Sans | 0.875rem | 400 | 1.5 | normal | Captions, metadata, secondary labels |
| caption | IBM Plex Sans | 0.875rem | 400 | 1.714 | normal | Footer text, fine print |

Martina Plantijn appears at 24px for section headings and select display moments, with a comfortable 28.8px line height that preserves its classical proportions. At 18px with 27px line height, it serves biographical and editorial body text where warmth supports extended reading. IBM Plex Sans operates at 16px for body text and 14px for smaller functional sizes. The 14px size with 21px line height appears extensively in lists and metadata, while a slightly looser 24px line height serves footer links and certain compact blocks. The "Ibm Plex Sans-Text" file provides the 400 weight used throughout the interface. Verify licensing for these families before production use.

## Layout

The layout follows a centered, narrow-column approach that emphasizes readability and editorial pacing. The main content area occupies a constrained width, creating generous margins that focus attention on text.

Content sits within a centered container with substantial horizontal padding of 64px on each side. This padding creates breathing room between the viewport edge and content, particularly important on the dark background where text might otherwise feel exposed. The effective content width appears to max out around 640-720px, creating an optimal measure for reading.

Vertical rhythm is established through consistent section spacing. Major sections receive 64px top padding, while list items and related elements use 12px vertical padding to maintain grouping without excessive separation. Paragraphs within biographical text carry 18px top and bottom margins, with occasional tighter 4.5px spacing where content clusters more densely.

The grid is fundamentally single-column for text content. Lists of entries and experience items stack vertically with horizontal rules between them. The conference and client list in the footer breaks into two equal columns, maintaining the same item spacing and border treatment. The book promotion panel introduces a two-column layout within its contained surface, with text and links on the left and the book cover image on the right.

## Visual language

The visual language derives from editorial print traditions translated to screen. The black background evokes uncoated paper under dim light, or perhaps the dark mode of a reading application. This darkness is not merely aesthetic—it creates a contained, contemplative environment appropriate for long-form content.

Typography carries the full expressive burden. The contrast between Martina Plantijn's humanist warmth and IBM Plex Sans's rational neutrality creates tension without conflict. Plantijn's slightly irregular stroke modulation and generous proportions feel hand-set, while Plex Sans recedes into functional clarity.

Horizontal rules serve as the primary structural element. Thin 1px lines in `#202020` separate list items, creating subtle rhythm without visual weight. These rules extend full-width within the content column, anchoring each entry to the grid. The footer introduces a white top border on certain interactive elements, a rare inversion that signals actionability.

Imagery appears selectively. The book cover in the promotion panel floats within its dark surface, its white cover and colorful radiating lines providing the site's most vivid visual moment. Photographs elsewhere in the site appear to carry their own color temperature, introducing warmer or cooler notes that break the monochrome system without disrupting it.

## Components

### Entry list

The chronological archive presents blog posts and essays as a vertical stack. Each item contains a title in body-small typography and a right-aligned date in muted-ink. Items are separated by full-width horizontal rules in the border color. The composition is spare: title left, date right, rule below. Hover or active states are not visible in the supplied images, but the structure suggests titles may function as links.

### Experience item

Work history and similar structured data appear as grouped entries with a title, organization or description, and date range. The title uses body-small in ink, while the organization and date use muted-ink. A short horizontal rule separates each entry. The vertical spacing is tighter than entry lists, with 4px top padding and 12px bottom padding, creating denser information grouping appropriate for CV-style content.

### Book panel

The promotion for *The Shape of Design* appears as a contained card on the surface color. The left side holds the title in section-display typography, a description in muted-ink, and stacked action links in body-small. Each link sits above a thin white top border, creating a distinctive treatment that separates these actions from surrounding content. The right side displays the book cover image with rounded corners. The panel itself uses 8px border radius, the only rounded element in the visible system.

### Footer

The site footer contains two distinct zones. The upper zone presents a two-column list of conferences, clients, or appearances, each with a name and country code. The lower zone holds contact links—Email, Newsletter, RSS—alongside copyright text. Both zones use label typography in muted-ink. The footer carries 14px top padding and is separated from main content by a horizontal rule. Links appear underlined, distinguishing them from static text.

## Responsive behavior

The narrow content column suggests the design was conceived for comfortable reading across viewport sizes. The 64px horizontal padding would need reduction on smaller screens to preserve content width. The two-column footer list should collapse to single-column on narrow viewports to prevent cramped text. The book panel's side-by-side layout would benefit from stacking on mobile, with the cover image following the text and links. Font sizes appear fixed rather than fluid; maintaining the 16px body minimum ensures readability without scaling. No breakpoint-specific behavior is visible in the supplied images, so these recommendations follow general responsive principles applied to this specific layout.

## Practical implementation guidance

### Preserve
- The pure black canvas and careful gray gradation; this is the site's defining atmosphere
- The type pairing of warm serif display with neutral sans body
- Generous horizontal padding and narrow measure for reading comfort
- Horizontal rules as the sole decorative structural element
- The restrained use of rounded corners, limited to contained panels

### Avoid
- Introducing accent colors or highlights that would break the monochrome discipline
- Increasing contrast beyond `#CCCCCC` on `#000000`; the current pairing is calibrated for extended reading
- Adding shadows or elevation effects; the flat, printed quality is intentional
- Expanding the border radius system beyond the single panel use case
- Using Martina Plantijn for body text; its proportions are designed for display sizes

### Recommended build order
1. Establish the black canvas and center the content column with 64px padding
2. Implement IBM Plex Sans at 16px/24px for body and 14px/21px for small text
3. Add Martina Plantijn at 24px/28.8px for section headings
4. Build the entry list with horizontal rules and muted-ink dates
5. Create the experience item component with tighter vertical spacing
6. Implement the book panel with surface background and white-bordered action links
7. Add the two-column footer with country codes and contact links

### Accessibility
- The `#CCCCCC` on `#000000` combination provides approximately 7:1 contrast, exceeding WCAG AAA for body text
- Ensure interactive elements maintain visible focus indicators against the dark background
- The underlined footer links provide clear affordance without relying on color alone
- Consider adding `prefers-reduced-motion` support for any future interactive enhancements
- The narrow content column naturally supports readable line lengths without additional constraints

## Scope note

This guide covers the visible homepage surface including the entry archive, about section, book promotion, and footer. Interior pages, article templates, hover states, focus indicators, and mobile-specific layouts are not represented in the supplied images. The 8px border radius and 64px padding values derive from the exact measurement records; all other spacing follows the established relative unit of 2px. Verify licensing for Martina Plantijn, IBM Plex Sans, and Ibm Plex Sans-Text before production use.
