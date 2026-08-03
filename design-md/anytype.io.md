# How anytype.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/anytype.io-design)

Last updated: 2026-08-03

## Captured pages

[![White hero with pink serif headline and line-art module collage](https://pin.fontofweb.com/8145?format=jpg)](https://design.withfudge.com/share/pin-8145)

[White hero with pink serif headline and line-art module collage](https://design.withfudge.com/share/pin-8145)

[![Privacy split with oversized serif claim and mint key-lock icons](https://pin.fontofweb.com/8021?format=jpg)](https://design.withfudge.com/share/pin-8021)

[Privacy split with oversized serif claim and mint key-lock icons](https://design.withfudge.com/share/pin-8021)

[![Dark feature band with three-column cards and compact teal nav pill](https://pin.fontofweb.com/8019?format=jpg)](https://design.withfudge.com/share/pin-8019)

[Dark feature band with three-column cards and compact teal nav pill](https://design.withfudge.com/share/pin-8019)

[![Pricing grid with four tall plan cards and soft pastel plan emblems](https://pin.fontofweb.com/8018?format=jpg)](https://design.withfudge.com/share/pin-8018)

[Pricing grid with four tall plan cards and soft pastel plan emblems](https://design.withfudge.com/share/pin-8018)

[![Black footer with teal links and a large network-style line illustration](https://pin.fontofweb.com/1980?format=jpg)](https://design.withfudge.com/share/pin-1980)

[Black footer with teal links and a large network-style line illustration](https://design.withfudge.com/share/pin-1980)

## Overview

Anytype's marketing pages rely on a strict contrast between white canvas and black content, then soften that contrast with a single pink accent and a set of restrained gray steps. The result feels editorial rather than software-like. The page often starts with a large serif line, then moves into compact sans-serif sections, then returns to a dark band for emphasis. That rhythm is the core of the system: one strong statement, one plain explanation, one clear action.

The layout language is equally disciplined. Thin rules divide sections. Large empty areas keep the headline legible. Cards sit in even columns with centered type and modest spacing. The whole site is built from a small number of repeated shapes, which keeps the pages calm even when they contain many sections. The illustration style, when present, is spare and line-based: black outlines, simple fills, and a small amount of warm or pastel glow around the edges.

## Colors

The visible interface palette is deliberately small. Black and white do most of the work, while the gray values support hierarchy and divide content without stealing attention. Pink is the only persistent accent color. It appears in the hero line, in selected emphasis moments, and in a few small cues that need to stand out from the otherwise monochrome shell. That restraint makes the brand feel composed rather than decorative.

| token | value | role |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page ground, most feature sections, and pricing backgrounds |
| `ink` | `#000000` | Primary headlines, logo text, icons, and dark section text |
| `ink-soft` | `#252525` | Secondary type on dark surfaces and quiet header details |
| `muted-ink` | `#5B5B5B` | Supporting copy and lower-priority text |
| `faint-ink` | `#808080` | Quiet captions, muted labels, and less prominent plan text |
| `hairline` | `#949494` | 1px dividers, card rules, and section boundaries |
| `action` | `#FF6A7B` | Pink accent for the lead phrase and a few emphasis points |

White and black are not interchangeable accents; they are the page's structural poles. White is the default field for explanation and comparison. Black is reserved for the dramatic chapters: the dark storytelling band, the footer, and the full-width contrast sections that need to feel more immersive. The gray family should stay narrow and functional. Use it for text hierarchy, not for decorative surfaces.

The screenshot set also shows soft mint, peach, lilac, and blue atmospheres inside illustrations, plan emblems, and ambient glows. Those colors support the visual story, but they should stay in imagery or illustration treatment rather than becoming core UI tokens.

## Typography

Anytype uses two families with very distinct jobs. Riccione Tsx carries the dramatic display lines. Inter handles every practical layer: navigation, body copy, labels, pricing detail, and buttons. That split gives the site its tone: expressive at the top, controlled everywhere else. The display family is often set very large with compact leading, while Inter is kept open enough to read cleanly inside a grid or card.

The licensed-use status is not specified in the supplied packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-sans` | Inter | 5.5rem | 300 | 1.02 | -0.065em | First line of the hero statement |
| `hero-display` | Riccione Tsx | 6rem | 400 | 0.94 | -0.025em | Second hero line and other large feature statements |
| `pricing-display` | Riccione Tsx | 6.75rem | 400 | 0.89 | -0.025em | Centered pricing headline and similarly prominent section leads |
| `section-display` | Riccione Tsx | 7.5rem | 400 | 0.83 | -0.027em | Tall privacy and dark-band headlines |
| `card-heading` | Inter | 1.375rem | 500 | 1.27 | -0.03em | Feature titles, pricing plan names, and section headers |
| `body` | Inter | 1.125rem | 400 | 1.44 | -0.015em | Hero support text, feature copy, and pricing introduction |
| `body-small` | Inter | 1rem | 400 | 1.5 | -0.012em | Lower body copy inside cards and footer notes |
| `button` | Inter | 1rem | 500 | 1.5 | -0.012em | Download buttons, plan buttons, and compact actions |
| `label` | Inter | 0.875rem | 400 | 1.43 | 0.071em | Navigation, toggles, and small all-caps style labels |
| `legal-copy` | Inter | 0.75rem | 500 | 1.67 | -0.008em | Footer metadata and fine-print text |

The strongest type behavior is contrast, not variety. Big display lines should stay sparse and slightly theatrical. Inter should remain neutral, with medium weight for controls and regular weight for explanation. Tight negative tracking works on the display family, while the practical text should stay closer to normal letterfit so the grids remain readable.

## Layout

The page composition uses a boxed, centered canvas with visible boundaries. A thin border often frames the hero or the section group, and the interior spacing is generous enough to make the content feel deliberate. The hero is typically two-column: a statement block on the left and an illustration or product collage on the right. That balance keeps the page from becoming a poster; the image and the message reinforce each other.

Below the hero, the layout becomes modular. One pattern is a four-column strip with centered headings and short explanatory copy. Another pattern is a split information band: a large statement on one side, a functional explanation or icon pair on the other. The pricing page expands that idea into an evenly spaced grid of tall cards, each card carrying its own heading, list, price, and action. The footer then compresses the system into a denser black field with columns of links and a large graphic mark.

The site uses strong vertical pauses between chapters. The white sections breathe; the black sections feel more compressed and immersive. That change is not decorative. It creates a clear reading order and lets the display type land with more force when the background shifts.

Spacing should stay disciplined. The packet shows recurring values around 16px, 20px, 24px, 32px, 64px, 80px, 96px, 128px, and 136px. Those steps are large enough to keep the page airy but not so large that the content starts drifting apart. Use the larger values for section insets and hero staging, the smaller values for card padding and internal text rhythm.

## Visual language

The visible visual language is spare, almost diagrammatic. The line-art illustrations use black outlines with white interiors and a few simple pixel-like details. They feel handmade but controlled. The page does not rely on heavy shadow or glossy depth. Instead, it uses line weight, framing, and empty space to separate elements. That makes the brand feel calm and direct.

The pink accent matters because it is rare. When it appears inside the hero, it behaves like a signal flare against the monochrome field. The accent should not spread into every control or card. It works best when it is attached to one phrase or one point of emphasis. The rest of the page stays grounded in black, white, and gray.

The site also uses contrast in section mood. Light sections feel open, almost paper-like. Dark sections feel inward and focused. The illustration and plan-emblem colors stay soft so they do not fight with the main text. Even where the page introduces pastel tones, they are subdued and rounded rather than bright or saturated.

## Components

### Header

The header is compact and quiet. A small wordmark sits at the left edge, while the main action sits at the right in a dark rounded button. A small menu icon stays adjacent to the action. The header should not compete with the hero line. It only needs enough presence to anchor the page and make the primary action easy to find.

### Hero statement

The hero combines a sans first line with a large serif continuation. That mix gives the page an immediate tension between utility and editorial style. The text block sits on the left, usually with a measured width that keeps the line breaks clean. On the right, a line-art cluster of folders, documents, a calendar, and a laptop turns the product idea into a simple object stack. The illustration should stay crisp, black, and lightly playful, without becoming cartoonish.

### Feature strip

The four-up strip below the hero uses centered headings, short supporting copy, and thin vertical rules. The cards are plain white and behave more like editorial tiles than app cards. One tile may hold a small video thumbnail or a simple play state, but the overall tone stays restrained. This strip is about clarity and categories, not motion or spectacle.

### Privacy split

The privacy section uses an oversized serif statement on one side and a functional explanation on the other. The right side often includes a pair of simple icons, such as a lock and a key, inside soft mint frames. The centered pill controls below the section feel like a navigation strip rather than a standard tab set. Their role is to point to related content, not to become a major control pattern.

### Dark story band

The dark band flips the entire page mood. The background becomes pure black, the headline becomes white, and the supporting cards below become dark blocks separated by fine lines. This section feels more immersive and more technical, but it still keeps the same disciplined spacing. If you use this component, keep the card count low and the text short so the headline remains the main event.

### Pricing grid

The pricing page centers a tall serif heading above a row of evenly spaced plan cards. Each card uses a circular pastel emblem at the top, a bold plan name, a short feature list, and a rounded button near the bottom. One plan can be given a stronger visual weight, but the system stays symmetrical. The typography and the borders do the organizing; the cards do not need heavy shadows or dense color blocks.

### Footer

The footer is a black closing band with a large line of copy, a line-based diagram or network drawing, and a set of utility links. Teal or cool-tinted text can appear here as a lower-key contrast against the black field. The footer should feel like a final panel, not an afterthought. It closes the page with the same directness that the hero opens it.

## Responsive behavior

When the layout narrows, the hierarchy should stay intact: headline first, then illustration, then supporting cards or detail blocks. The display type can shrink, but the split between Riccione Tsx and Inter should remain visible. The four-up strips should stack cleanly into one-column or two-column arrangements without changing their plain card language. The pricing cards should preserve their order and spacing, even if they wrap. The dark band should keep its contrast and should not collapse into an overly dense block of text.

## Practical implementation guidance

### Preserve

- Keep the white-and-black shell dominant.
- Use Riccione Tsx only for the large editorial statements.
- Keep Inter for everything that behaves like interface text.
- Leave generous empty space around the hero and the section headlines.
- Use thin rules to separate panels instead of heavy shadows.
- Keep the pink accent rare and meaningful.

### Avoid

- Avoid adding new accent colors to core UI controls.
- Avoid rounding every surface the same way.
- Avoid decorative shadows, glass effects, or glossy gradients on cards.
- Avoid dense copy blocks inside the hero or pricing cards.
- Avoid turning the footer into a second hero.
- Avoid mixing display and body roles in the same text treatment.

### Recommended build order

1. Establish the monochrome palette and the pink accent.
2. Set the Riccione Tsx and Inter hierarchy.
3. Build the header and the hero split.
4. Add the feature strip and the privacy split.
5. Add the dark story band.
6. Build the pricing grid and the business panel.
7. Finish with the footer and then test the responsive reflow.

### Accessibility

- Keep text contrast strong on both white and black fields.
- Make sure the pink accent never becomes the only cue for meaning.
- Keep link and button states visibly distinct from surrounding text.
- Provide useful alternative text for the line-art illustration and plan emblems.
- Preserve readable line lengths in the hero, the privacy split, and the footer when the viewport narrows.

## Scope note

This guide covers the marketing pages shown in the packet: the homepage hero, feature strip, privacy section, dark story band, pricing page, and footer. It does not specify app interiors, motion, hover or focus styling, or breakpoint-specific rearrangements beyond what is visible here.
