# How aeon.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aeon.co-design)

Last updated: 2026-08-03

## Captured pages

[![Black hero stage with centered serif title over the brain image](https://pin.fontofweb.com/6521?format=jpg)](https://design.withfudge.com/share/pin-6521)

[Black hero stage with centered serif title over the brain image](https://design.withfudge.com/share/pin-6521)

[![White essay page with left metadata rail and syndication button](https://pin.fontofweb.com/6522?format=jpg)](https://design.withfudge.com/share/pin-6522)

[White essay page with left metadata rail and syndication button](https://design.withfudge.com/share/pin-6522)

[![Reading column broken by a full-width pale support band](https://pin.fontofweb.com/6523?format=jpg)](https://design.withfudge.com/share/pin-6523)

[Reading column broken by a full-width pale support band](https://design.withfudge.com/share/pin-6523)

[![Pink donation panel with lantern art and highlighted headline](https://pin.fontofweb.com/6525?format=jpg)](https://design.withfudge.com/share/pin-6525)

[Pink donation panel with lantern art and highlighted headline](https://design.withfudge.com/share/pin-6525)

[![Wide footer with newsletter field and quiet legal copy](https://pin.fontofweb.com/6526?format=jpg)](https://design.withfudge.com/share/pin-6526)

[Wide footer with newsletter field and quiet legal copy](https://design.withfudge.com/share/pin-6526)

## Overview

Aeon looks like a magazine that trusts the argument more than the interface. The page is built from a white reading field, a black hero stage, and occasional pale support bands that reset the mood without adding decorative clutter. Acaca carries the large editorial statements: essay titles, donation headlines, and other moments that need authority. Atlas Grotesk handles the rest of the page with a plain, measured voice. Atlas Typewriter appears only in small labels, utility copy, and compact controls, which gives the site a faint print-shop edge without turning the interface nostalgic.

The design reads in chapters. A story may begin with a stark, black image-led hero; move into a tight essay column with topic links and a left metadata rail; then break into a pale pink support panel, related-essay cards, and a quiet footer. Color is used sparingly and with intent. Raspberry marks the main action, teal and deep teal handle subject areas and menu color coding, red and gold add additional category distinction, and the neutrals keep the reading surface calm.

## Colors

Aeon is anchored by two neutrals: `#FFFFFF` for the reading field and `#000000` for the inverse hero and masthead treatment. Those two colors do the heavy structural work. The supporting neutrals are quieter but still important: `#333333` carries the main body tone when full black would feel too abrupt, `#666666` softens secondary copy, and `#999999` is best for credits, metadata, and other material that should not fight the essay.

The action color is a deep raspberry, `#930B51`, with a slightly warmer twin at `#940B52`. That hue marks links, highlighted prompts, donation buttons, and other calls to act without breaking the editorial mood. The subject-area palette widens the page without making it noisy: `#0C776D` and `#035A6D` provide the cool teal range, `#9D1D20` brings a dark editorial red, and `#C16E15` adds a warm gold for the colorful category stack in the open menu. `#ECECEC` works as the soft divider and field tone for pale interface blocks. The result is a system that can move from black hero imagery to white prose and back again while keeping one recognizable accent family.

| role | hex | use |
|---|---|---|
| action | `#930B51` | Primary links, donation buttons, highlighted prompts |
| action-strong | `#940B52` | Alternate filled action and emphasis states |
| ink | `#000000` | Titles, masthead text, body copy on white |
| muted ink | `#333333` | Secondary prose and quieter body text |
| quiet ink | `#666666` | Supporting text, captions, and explanatory lines |
| soft ink | `#999999` | Credits, bylines, and low-priority notes |
| canvas | `#FFFFFF` | Main reading surface and footer field |
| surface | `#ECECEC` | Pale separators, quiet panels, and light utility fields |
| accent teal | `#0C776D` | Subject-area color and category stack |
| accent deep teal | `#035A6D` | Deeper subject-area color in the menu stack |
| accent red | `#9D1D20` | Supporting subject color and label contrast |
| accent gold | `#C16E15` | Warm category color in the navigation system |

## Typography

Aeon uses three material families, each with a narrow job. **Acaca** owns the display moments and gives the site its literary weight. **Atlas Grotesk** is the workhorse for body copy, navigation, metadata, and form controls. **Atlas Typewriter** adds a small mechanical note to labels and tiny utility text, which keeps buttons and chips from feeling too polished. The hierarchy depends on scale and spacing more than on many font switches, so the page stays disciplined even when the story moves from a hero image to a long article or a support banner.

Font licensing is not provided in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Acaca | 4.5rem | 700 | 1 | -0.016em | Main essay hero and large landing statements |
| `menu-topic` | Atlas Grotesk | 2.625rem | 600 | 1.1 | 0em | Oversized category links in the open menu |
| `menu-link` | Atlas Grotesk | 2rem | 400 | 1.4 | 0em | Secondary menu links such as Essays and About |
| `section-display` | Acaca | 2.875rem | 700 | 1 | -0.02em | Donation headlines and major promo statements |
| `feature-display` | Acaca | 1.875rem | 700 | 1.05 | -0.01em | Card titles and shorter editorial headings |
| `lead` | Atlas Grotesk | 1rem | 400 | 1.5 | 0em | Hero deck, intro copy, and explanatory prose |
| `body` | Atlas Grotesk | 1rem | 400 | 1.5 | 0em | Main essay text and footer body copy |
| `body-medium` | Atlas Grotesk | 1rem | 600 | 1.5 | 0em | Filled buttons and emphatic inline text |
| `ui` | Atlas Grotesk | 0.875rem | 400 | 1.5 | 0em | Navigation, small labels, and utility lines |
| `ui-strong` | Atlas Grotesk | 0.875rem | 600 | 1.5 | 0.01em | Stronger utility text and compact controls |
| `meta` | Atlas Grotesk | 0.75rem | 400 | 1.35 | 0em | Copyright, image credits, and quiet metadata |
| `label` | Atlas Typewriter | 0.75rem | 400 | 1.35 | 0.1em | Button labels and small utility markers |
| `micro` | Atlas Typewriter | 0.84375rem | 400 | 1.45 | 0.05em | Tiny control text and spare inline prompts |

The serif headlines are compact and decisive. They sit on tight line heights and prefer a few strong breaks rather than long airy stacks. The grotesk family is more neutral, but it still carries a magazine tone because it is set large in the menu and kept regular in the body. The typewriter face is not decorative; it is a cue that a piece of text is functional, not editorial.

## Layout

Aeon’s page structure works as a sequence of long, readable blocks rather than as a grid of interchangeable cards. The black hero stage is the most theatrical section: the image fills the frame, the title sits low and centered, and the deck stays close to the headline so the whole block reads as one unit. The hero is followed by white reading space, which gives the essay room to breathe after the heavy image.

The article pages use a two-column editorial arrangement. A slim left rail holds word count, topic links, and small utility actions such as syndication. The main column carries the essay text in a narrow measure that keeps each paragraph legible. This rail-and-column relationship is one of the page’s most important shapes because it lets metadata stay visible without crowding the prose. The spacing is generous but not loose; the page prefers wide outer margins, short internal gaps, and a clear vertical rhythm between paragraph blocks.

Support sections change the geometry. Donation and newsletter panels use side-by-side arrangements with an image or illustration on one side and stacked copy plus controls on the other. Related-essay sections switch to a card row where the image leads, the topic line stays small, and the title can sit large underneath. The footer returns to a simpler multi-column layout with links, social icons, and a signup form, all arranged on a calm white field.

The open topic menu is its own layout language. It uses a white canvas, a large vertical list of color-coded subject links on one side, and a compact utility column on the other. That asymmetry makes the menu feel like a page in the same publication rather than a generic app drawer.

## Visual language

Aeon’s visual language is editorial, restrained, and high-contrast. White space is not empty; it is the main frame that lets the serif title, the image credit, and the article text separate cleanly. Black is used as a stage color for hero imagery and inverse navigation, not as a generic background for the whole site. The system therefore switches between reading mode and poster mode instead of trying to blend both at once.

The imagery is dramatic and close-cropped. In the hero, the brain image is treated almost like a textured object rather than a literal illustration, and the title floats over it with enough contrast to remain readable. In promo bands, the image shifts to a lantern or other illustrative scene, but the compositional rule stays the same: one strong visual anchor, one large headline, and a concise support line. The site avoids heavy shadows and glossy treatments. Rectangles, thin rules, and quiet borders do the structural work.

Color is used as a wayfinding system. The category stack in the menu becomes a graphic element because each line has its own color. Raspberry highlights action. Teal and gold make subject areas easy to scan. The donation band feels distinct because it softens the strict black-and-white base with a pale pink surface and a highlighted headline. The result is a publication that can be serious without becoming static.

## Components

### Open topic menu

The expanded menu is one of the clearest examples of Aeon’s graphic restraint. It sits on a white field and turns navigation into a typographic composition. The left side is dominated by very large subject links with a distinct color per line, so the menu reads almost like a poster. The right side is quieter: simple stacked links for Essays, Videos, Popular, and About, followed by utility actions for donate, newsletter, search, and partner branding. The close control is tiny and understated, which keeps the colored subject stack as the main event.

### Masthead

The masthead is slim and functional. It stays visually light, with black text on white or white text on black depending on the surface behind it. The logo is centered in the inverse hero treatment and reduced to a small, steady anchor instead of a large brand banner. Utility links are short, compact, and spaced apart enough to stay readable. The masthead should never compete with the essay title or the image.

### Hero stage

The hero stage is a full-width black panel that lets the image carry the emotion of the page. The title is large, white, serif, and centered low in the frame. The deck sits directly beneath it in a smaller grotesk face, which keeps the heading from feeling overly theatrical. A small image credit sits outside the stage on the white field below, where it can remain quiet without disappearing. This component depends on strong overlap: the title must sit on the image, not beside it.

### Article body and metadata rail

The essay layout uses a left rail for topic tags, word count, and a light utility button, while the main column holds the reading text. The rail is narrow and calm. The text column is the real focus: paragraphs are compact, left-aligned, and separated by enough vertical space to support long reading sessions. Topic links use the raspberry accent, while less important metadata stays in darker gray or soft gray. This component should remain spare; adding extra boxes or badges would weaken the editorial tone.

### Donation and support band

The support band is the most expressive non-hero component. It uses a pale pink field, a large Acaca headline, and a short explanatory paragraph, then groups the controls into a clear action row. The main button is filled in raspberry; the alternate option is outlined and quieter. In the more promotional version, the illustration sits to one side and the headline uses a highlighted phrase so the call to action feels urgent without becoming loud. The band should feel like a special interruption in the reading flow, not a generic subscription card.

### Related-essay cards

The related cards use image-first composition. Each card begins with a compact image, then a small topic line, then a large serif title and a short excerpt. The cards are rectangular and clean, with no visible elevation. Their job is to keep the reading path moving without shifting the site into marketplace mode. The typography and crop discipline matter more than the card shell.

### Footer and newsletter block

The footer is quiet and structured. Link columns sit beside the newsletter form, and the whole area stays on a white canvas with small gray text. Inputs are plain and lightly bordered. The subscribe control uses a filled red or raspberry button so the action is still easy to find, but the rest of the footer remains low contrast. Social links and legal text should stay secondary to the newsletter module and the main link columns.

## Responsive behavior

On narrower screens, the page should keep the order of attention intact: masthead, hero, metadata, article text, support band, related cards, then footer. The left rail should collapse above or beside the essay text only when the measure would otherwise become cramped. The hero title should scale down before it wraps into a dense stack, and the image credit should remain legible below the stage. The open menu should collapse from a two-column composition into a single vertical flow if space runs short. Card rows should move to one column when there is no room for three across. The goal is to preserve the editorial rhythm, not to preserve the desktop geometry.

## Practical implementation guidance

### Preserve

- Keep Acaca for the big statements and only the big statements.
- Keep Atlas Grotesk for the body, metadata, and navigation so the page stays calm.
- Keep Atlas Typewriter for small labels, utility copy, and controls that need a slightly mechanical feel.
- Keep the black hero stage, white reading field, and pale support bands as the main chapter markers.
- Keep the left rail separate from the main essay column so metadata never swallows the prose.

### Avoid

- Avoid soft shadows, glossy fills, and any card treatment that makes the site feel app-like.
- Avoid using more accent colors than the page already shows; the palette is small on purpose.
- Avoid centered body copy, because the essay measure works best left-aligned.
- Avoid turning every control into a pill or every block into a rounded panel.
- Avoid using the support band as a generic template; it should stay special and editorial.

### Recommended build order

1. Build the masthead and the open menu.
2. Recreate the hero stage with image, title, deck, and credit line.
3. Build the article rail and essay text column.
4. Add the donation and support band.
5. Add related cards.
6. Finish with the footer and newsletter block.

### Accessibility

- Keep heading order strict so the story is easy to follow with assistive tech.
- Make the title readable over the black hero stage with strong contrast and a stable image crop.
- Give topic links, donate, search, subscribe, and close controls visible focus treatment.
- Keep button targets large enough that the compact labels remain usable.
- Make image credit text and footers readable at small sizes instead of pushing them into near-invisible gray.

## Scope note

This guide covers the Aeon essay template, the expanded topic menu, the support band, related-essay cards, and the footer. It does not set exact breakpoints, motion, hover styling, or article variants outside the supplied page set. Spacing values use the packet’s relative-unit step.
