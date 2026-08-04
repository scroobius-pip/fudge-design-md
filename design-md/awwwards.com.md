# How awwwards.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/awwwards.com-design)

Last updated: 2026-08-04

## Captured pages

[![Wide jobs board hero with centered black headline and four-card grid](https://pin.fontofweb.com/6995?format=jpg)](https://design.withfudge.com/share/pin-6995)

[Wide jobs board hero with centered black headline and four-card grid](https://design.withfudge.com/share/pin-6995)

[![White home hero with a huge black title and bright illustrated feature panel](https://pin.fontofweb.com/3078?format=jpg)](https://design.withfudge.com/share/pin-3078)

[White home hero with a huge black title and bright illustrated feature panel](https://design.withfudge.com/share/pin-3078)

[![FAQ page with centered title and dotted-row question list](https://pin.fontofweb.com/243?format=jpg)](https://design.withfudge.com/share/pin-243)

[FAQ page with centered title and dotted-row question list](https://design.withfudge.com/share/pin-243)

[![Tech-integrator case page with oversized black headline and a dark dock](https://pin.fontofweb.com/6996?format=jpg)](https://design.withfudge.com/share/pin-6996)

[Tech-integrator case page with oversized black headline and a dark dock](https://design.withfudge.com/share/pin-6996)

[![Black poster page with stacked white uppercase titles in a centered column](https://pin.fontofweb.com/5789?format=jpg)](https://design.withfudge.com/share/pin-5789)

[Black poster page with stacked white uppercase titles in a centered column](https://design.withfudge.com/share/pin-5789)

## Overview

Awwwards uses one visual grammar across a few page types: a quiet pale stage for utility content, a white stage for list and card systems, and a black stage for poster-like statements. The constant is Inter Tight. Headlines are huge, centered, and uncompromising; supporting controls stay small, rounded, and mostly flat. The jobs board, home hero, and FAQ pages all keep the same disciplined shell even when the center shifts from a grid to a single headline to a long question list.

The system feels curated rather than decorative. It relies on scale, spacing, and contrast instead of layered ornament. One bright blue accent marks the actions that matter most, while the rest of the interface stays close to black, white, and soft gray. That restraint gives the site a calm tone even when the content is loud.

## Colors

The palette is nearly monochrome. Pale canvas values carry the page background, white keeps cards and rows clean, and black handles the strongest text and the poster-style inverted pages. The blue accent is intentionally rare. It should appear on conversion controls, live indicators, and selected states, not as a general decorative color.

| token | hex | use |
|---|---|---|
| `canvas-soft` | `#F8F8F8` | Main pale stage behind the jobs board, FAQ list, and other quiet page sections |
| `canvas` | `#FFFFFF` | White cards, search fields, utility surfaces, and the body of most content blocks |
| `surface` | `#EDEDED` | Hairline separators, faint rules, and light structural divisions inside white sections |
| `ink` | `#000000` | The heaviest headline color and the inverted tone on black poster pages |
| `ink-soft` | `#222222` | Body text, navigation, card copy, and secondary labels on pale stages |
| `action` | `#49B3FC` | Primary blue buttons, active filter counts, and small live badges |
| `inverse-canvas` | `#000000` | Full-bleed dark chapters and the poster-like stacked-title page |
| `inverse-ink` | `#FFFFFF` | Reversed text, icons, and labels on dark surfaces |

Light, dark, photographic, and accent modes work as a single system. Light pages alternate between `canvas-soft` and `canvas`, with `ink` and `ink-soft` carrying the hierarchy. Dark pages do not introduce a separate colorful palette; they simply invert the same structure to white on black. Photography and illustration sit inside that neutral framework, so they stay dominant without forcing the shell into a second brand language. The blue accent should remain a sharp point of emphasis, never a wash.

## Typography

Inter Tight is the only material family in the packet, credited to Rasmus Andersson and Rsms. The site uses a narrow weight range: light body text, medium UI labels, semibold titles, and occasional heavier display lines. Licensing should be confirmed before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Inter Tight | 9.493rem | 600 | 1 | 0em | The centered jobs-board headline and other oversized front-page statements |
| `section-display` | Inter Tight | 8.711rem | 600 | 1 | 0em | Large case-study headlines and poster-like stacked titles |
| `card-title` | Inter Tight | 1.339rem | 600 | 1.307 | 0em | Job titles, FAQ questions, and other prominent mid-page headings |
| `body` | Inter Tight | 0.875rem | 300 | 1.4 | 0em | Descriptions, helper copy, and card paragraphs |
| `body-strong` | Inter Tight | 0.875rem | 600 | 1.4 | 0em | Buttons, labels, emphasized row text, and compact calls to action |
| `meta` | Inter Tight | 0.831rem | 500 | 2 | 0em | Utility links, nav items, search hints, and small status text |
| `micro` | Inter Tight | 0.625rem | 500 | 1.7 | 0em | Tiny chips, badges, and the small ambient strip copy |

The hierarchy depends on scale and leading more than on family changes. The biggest titles are bold, centered, and line-by-line readable. Mid-size headings remain semibold but do not crowd the page. Body copy stays light, airy, and short enough to keep the listings from feeling dense. The result is legible at a glance and still precise when the page gets long.

## Layout

The page structure is built from a few repeated arrangements. A thin full-width promo strip can sit above the main header. Under it, the header row packs the logo, navigation, a long search field, login links, and two high-priority actions into one compact band. That top area is busy in content but light in tone because the spacing is generous and the colors stay restrained.

The jobs board version adds a filter rail directly below the header. Rounded dropdown pills sit on the left, while a reset control and a small blue counter sit on the right. The hero is then centered in a broad empty field: a massive title, a smaller subtitle, and a tiny blue hiring badge. This gives the page a single dominant focal point before the card grid begins.

The card grid itself is wide and symmetrical. On desktop it reads as four equal white panels, each with a top identity row, a title block, descriptive copy, metadata rows, and a footer line with time and an arrow. The FAQ page uses a stricter vertical stack: centered page title, short intro, then a left-aligned question list separated by dotted rules and right-aligned outline buttons.

The home hero uses a different layout but the same discipline. A huge centered title sits above a large image block, with the nav kept light and the supporting text short. The black poster-style page removes most chrome and turns the entire surface into a single centered column of stacked uppercase lines. That chapter depends on the same spacing logic, only inverted.

## Visual language

Awwwards feels like a catalog of bold statements held together by a calm shell. The strongest move is contrast: huge black type against white or pale gray, then white type against a black field. The shell never competes with the content. Dotted dividers on the FAQ page, faint surface rules in the cards, and small rounded controls all serve the hierarchy rather than decorating it.

Shadows are almost absent. Separation comes from fill color, whitespace, and thin rules. Cards look clean and crisp rather than lifted. Corners are soft enough to keep the pages approachable, but not so rounded that the system feels playful. The rounded geometry is controlled, not cute.

The accent blue is functional and sparse. It works best on the Post a Job button, hiring tags, active counters, and selected small controls. The rest of the system should remain almost colorless so those blue points stay meaningful. That restraint matters because the page already has strong content-level drama: oversized headlines, image-led home blocks, and dark poster sections. The visual language works when the interface steps back and lets the content lead.

## Components

### Top utility strip

This is a thin ambient banner rather than a primary nav element. It uses small, medium-weight text on a light surface, with repeated promo copy spaced across the width. The tone is neutral and low-contrast. Keep it lightweight so it reads as a site-wide announcement band, not a second header.

### Global header

The header is compact and horizontal. A black `W.` mark anchors the left side, followed by short text navigation, then a long rounded search field, then the account actions. The main actions sit on the far right: a black filled button and the blue filled button. The overall feel is disciplined and utility-first, with no oversized logos or decorative framing.

### Search and filter rail

The search field is broad, pale, and softly rounded. The filter rail beneath it uses small dropdown pills with light borders and a restrained radius. A small blue count badge gives the active state without shouting. The reset control remains secondary, so the rail stays functional instead of turning into a feature block.

### Hero block

The jobs hero is a single centered typographic statement. The title is enormous, the subtitle is small, and the blue hiring badge is tucked close to the headline so it reads as part of the statement. The large image-led home hero follows the same logic: one statement, one supporting line, one large visual. Keep the composition open and avoid crowding the top of the page with extra copy.

### Job card

Each job card is a white surface with clear internal rows. The top line carries company identity and a small remote chip when needed. The title block is semibold and larger than the body, followed by a short description paragraph. Lower rows label location and website, and the footer closes with a timestamp on the left and an arrow on the right. The card should feel like a precise listing, not a marketing panel.

### FAQ row

The FAQ layout is a page of questions, not a collage of accordions. Each row stretches across the width, separated by a dotted rule. The question sits on the left in stronger type, and the outline `View more` button sits on the right. Keep the row rhythm calm and predictable so the list remains easy to scan.

### Poster list

The black poster page is almost pure type. Uppercase white lines are centered in the frame with large vertical breathing room. The page has little chrome beyond the text itself, so spacing and alignment do the work. This component is most effective when treated as a poster or index page, not as a card-based layout.

## Responsive behavior

When the layout narrows, the first changes should protect the headline rhythm and the list structure. The promo strip should compress before it wraps awkwardly. The header can reduce horizontal gaps, but the search field should remain usable and visible. The jobs grid should collapse from four columns to fewer columns only when the width can no longer support the card rhythm. The hero title should step down before line breaks become awkward or the badge overlaps the words.

The FAQ rows should keep the question and action on one line when possible. If the width is tight, the outline button can drop below the question, but the dotted divider should still read as one continuous row. The poster page should preserve its centered stack and reduce font size in measured steps rather than switching to a different layout pattern. Avoid introducing a new visual language at smaller widths; the page should feel like the same system, just compressed.

## Practical implementation guidance

### Preserve

- Keep the palette close to black, white, pale gray, and one bright blue accent.
- Keep the headline scale extreme; that scale is a defining part of the page.
- Preserve the soft card radius and the lighter control radius as two separate roles.
- Use flat surfaces and hairline rules instead of heavy shadows.
- Let imagery and typography lead; the shell should stay quiet.

### Avoid

- Avoid adding extra brand colors into the header or card chrome.
- Avoid turning the jobs board into a dense data table.
- Avoid glossy shadows, glass effects, or decorative gradients in the interface.
- Avoid mixing another type family into the core hierarchy.
- Avoid making every small control blue; the accent loses force when it spreads.

### Recommended build order

1. Establish the color roles and the Inter Tight type scale.
2. Build the utility strip and global header.
3. Add the search field and filter rail.
4. Recreate the centered hero and supporting callout.
5. Build the white job card and FAQ row patterns.
6. Add the black poster-style chapter.
7. Tune spacing and line breaks at narrower widths.

### Accessibility

- Keep text contrast strong on both pale and black surfaces.
- Do not rely on blue alone to signal selection or active state.
- Make keyboard focus visible on chips, buttons, and the search field.
- Keep hit targets large enough for the small pill controls.
- Provide useful alternative text for the large image-led sections and illustrations.
- Preserve readable line lengths in the giant headings so they do not become a single exhausting line on narrower viewports.

## Scope note

This guide covers the desktop home hero, jobs board, FAQ list, and poster-like case pages shown in the supplied images. It does not define mobile breakpoints, motion, hover or focus animation, loading states, or alternate admin surfaces.
