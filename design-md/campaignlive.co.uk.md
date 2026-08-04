# How campaignlive.co.uk is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/campaignlive.co.uk-design)

Last updated: 2026-08-04

## Captured pages

[![Split hero with three devices and a centered subscription pitch](https://pin.fontofweb.com/7894?format=jpg)](https://design.withfudge.com/share/pin-7894)

[Split hero with three devices and a centered subscription pitch](https://design.withfudge.com/share/pin-7894)

[![Campaign Red intro with dark analytics panels beside long copy](https://pin.fontofweb.com/7893?format=jpg)](https://design.withfudge.com/share/pin-7893)

[Campaign Red intro with dark analytics panels beside long copy](https://design.withfudge.com/share/pin-7893)

[![Article page with oversized headline and a right-rail promo stack](https://pin.fontofweb.com/7891?format=jpg)](https://design.withfudge.com/share/pin-7891)

[Article page with oversized headline and a right-rail promo stack](https://design.withfudge.com/share/pin-7891)

[![Classic article layout with social rail and bottom red banner](https://pin.fontofweb.com/7890?format=jpg)](https://design.withfudge.com/share/pin-7890)

[Classic article layout with social rail and bottom red banner](https://design.withfudge.com/share/pin-7890)

## Overview

Campaign Live is a trade-publication design system built from three clear materials: a black-and-white editorial reading surface, a red subscription accent, and a compact set of boxed commerce modules. The page hierarchy is blunt and practical. Headlines are heavy and often oversized. Supporting copy is calmer and narrower in measure. Utility links, navigation, and list-heavy modules use a disciplined sans face, while long-form article text leans into a serif voice that keeps the site grounded in editorial authority.

The system changes tone by page type, but it does not change its core rules. Subscription and campaignred pages use pale gray or white ground, red action buttons, and large product or analytics imagery. Article pages stay white, keep the headline dominant, and push subscription offers into the right rail or the bottom edge. The result feels like a magazine, a membership service, and a data product sharing one visual grammar instead of three separate skins.

## Colors

### Core interface colors

| token | value | use |
|---|---|---|
| `action` | `#FF0000` | Primary subscription buttons, highlighted words, and the loudest brand signal |
| `action-strong` | `#C5001D` | Secondary red emphasis for brand marks, active states, and deeper headline accents |
| `ink-strong` | `#000000` | Logo wordmark, the heaviest display text, and the darkest neutral text tone |
| `ink` | `#1C1C1C` | Main headline color on white surfaces and the default reading color for articles |
| `article-ink` | `#212121` | Dense body copy, captions, and list text when the page needs a slightly softer black than the logo |
| `ink-soft` | `#3C3C3C` | Secondary paragraph copy, meta text, and explanatory lines that should recede slightly |
| `deep-ink` | `#0D101A` | Dark analytical panels, dark UI screenshots, and the few places where the page turns technical |
| `canvas` | `#FFFFFF` | Page background, article canvas, card fills, and the base for most subscription layouts |
| `surface` | `#F9F9F9` | Soft page sections, quiet framing, and the near-white blocks behind hero and package content |
| `surface-muted` | `#E6E6E6` | Pale subscription fields, wide page bands, and the light gray fields behind device montages |
| `rule` | `#E5E5E5` | Thin separators, card borders, table dividers, and the faint lines that keep dense pages legible |

The palette is intentionally small. White and pale gray carry most of the page. Charcoal and near-black do the reading work. Red is reserved for actions, highlights, and a few brand words so it remains a direction signal instead of becoming background noise. The darker mode appears only in product screenshots and analytics-style panels; it should sit next to the same red rather than introducing a new accent family. Photography and collage imagery rest on the light surfaces, so the page does not need tinted overlays or decorative gradients to feel complete.

## Typography

Campaign Live uses two visual voices. Tabletgothicnarrow handles the press-like shell: navigation, section heads, package titles, labels, and the red wordmarks inside the commerce pages. Freightpro and Freightpro-Italic Regular carry the editorial paragraphs and the long-copy surfaces that read like magazine text. Lato appears as a sharper promotional face in a few callout blocks and should stay limited to those moments. Licensing is not specified.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Tabletgothicnarrow | 3.65625rem | 900 | 1.2 | 0em | Large article or landing-page headline |
| `section-display` | Tabletgothicnarrow | 2.75rem | 700 | 1.2 | 0em | Package titles, campaignred heads, and major section leads |
| `list-heading` | Tabletgothicnarrow | 2rem | 700 | 1.2 | 0em | Dense commerce blocks and bold subsection labels |
| `promo-callout` | Lato | 1.49625rem | 700 | 1.2 | 0em | Short promotional copy inside boxed offers |
| `kicker` | Freightpro | 1.29375rem | 400 | 1.5 | 0em | Intro paragraphs and short explanatory lines |
| `body` | Freightpro | 1.25rem | 400 | 1.5 | 0em | Article text, membership descriptions, and package copy |
| `body-strong` | Freightpro | 1.25rem | 700 | 1.5 | 0em | Strong phrases inside list items and feature lists |
| `body-italic` | Freightpro-Italic Regular | 1.25rem | 400 | 1.5 | 0em | Editorial emphasis and softer descriptive copy |
| `navigation` | Tabletgothicnarrow | 1.125rem | 400 | 1.5 | 0em | Header links, utility nav, and red banner buttons |
| `meta` | Tabletgothicnarrow | 0.95625rem | 400 | 1.7 | 0em | Dates, read-time labels, and secondary article metadata |

The hierarchy works by contrast rather than by many sizes. The big heads are heavy and nearly solid-set. The body copy opens up just enough to stay readable in long lists and columns. The navigation face is narrower and more mechanical, which keeps the top bar from competing with the hero title. The editorial serif gives the page a newspaper cadence; the sans face keeps the membership and product layers from drifting into softness.

## Layout

### Desktop frame

The main page structures are wide and centered, with generous side breathing room and strong vertical separation between content chapters. White space is not decorative here; it is the mechanism that keeps a dense editorial product readable. The logo and utility links sit on a narrow top strip, then the page drops into a much larger content area where a single dominant story gets room to breathe. On article pages, the headline block usually occupies the left or center column while promotional cards and subscription prompts sit to the right. On subscription pages, the hero often splits into a visual half and a copy half, which creates a simple sell-through rhythm: image first, promise second, action last.

### Information rhythm

The page moves between three kinds of layouts. First is the hero montage, where multiple device screenshots overlap a pale field. Second is the comparison and package layout, where equally sized cards line up in a rigid grid and use checkmark lists to show the scope of each plan. Third is the article layout, where the text column is primary and the commerce material becomes a rail or a bottom bar. Each mode keeps the same red accent and the same black typography, which makes the change in structure feel intentional rather than like a new theme.

### Rails and bands

The right rail is a recurring structural tool. It holds promo cards, team-license offers, and related subscription calls without interrupting the main reading path. The bottom sticky red banner adds a second conversion path that is visually loud but compact. Thin rules, card borders, and pale gray sections create the scaffolding. Heavy boxes and large headlines provide the content weight. The layout never needs deep shadows or playful overlap to separate layers; line, spacing, and scale do the work.

## Visual language

Campaign Live looks editorial before it looks corporate. The strongest shapes are rectangular cards, hard-edged headlines, and thin divider lines. Corners stay mostly square, which gives the page a press-room seriousness and keeps the commerce modules from feeling soft. The red color is used sparingly but confidently: a button fill, a highlighted word in a headline, a brand word inside the campaignred system, or a sticky call-to-action bar. That restraint is what makes the red feel urgent.

The imagery is not lifestyle photography. It is a mix of page screenshots, tablet collages, report screenshots, and article mockups. Devices are often tilted, stacked, and partially overlapping, which turns the promotion into a visual summary of breadth and regional coverage. The visuals are information-dense rather than atmospheric. Even when the page shifts into darker analytical panels, the material stays utilitarian: dark screenshots, chart-heavy dashboards, and data tables. The system prefers directness over mood.

The visual language also relies on editorial hierarchy within cards. Big black or red headings sit above short explanatory lines. Checkmark lists convert features into scannable rows. Buttons are rectangular, filled, and explicit. No element needs to pretend to be a gesture or a floating object. Everything looks placed, grouped, and aligned for reading.

## Components

### Global header

- **Anatomy:** Logo on the left, utility links on the right, a narrow top strip, and a second tier on article pages with section navigation and search.
- **Typography:** Small uppercase or compact title-case utility text in Tabletgothicnarrow.
- **Surface:** White with thin rules or pale separators.
- **Visible states:** Links may appear red or black depending on emphasis and context, but the pattern is always restrained and linear.

### Subscription hero

- **Anatomy:** Large device collage on a pale gray field, centered selling copy, and a single red action button.
- **Surface and shape:** Light gray background behind the image; the copy side stays white and uncluttered.
- **Typography:** Heavy black headline with a smaller serif paragraph underneath.
- **Composition:** The image half and copy half are clearly separated, which gives the page an immediate left-right rhythm.
- **Action:** The button is the visual endpoint; it should stay compact, red, and unmistakably clickable.

### Campaign Red introduction

- **Anatomy:** Brand wordmark, short introduction, longer explanatory paragraph, a bold subsection title, and a list of analytical benefits.
- **Typography:** Large red-and-black brand wordmark treatment, then serif body copy, then a strong section title.
- **Composition:** The content reads like a product editorial: description first, value list second, action last.
- **Visible states:** Red words and links are used inside the copy to punctuate the product name and key terms without breaking the page’s disciplined tone.
- **Layout behavior:** Supporting screenshots sit beside or below the copy, creating a split between explanation and proof.

### Package comparison cards

- **Anatomy:** Three equal cards, each with a campaign wordmark, plan name, brief pitch, a red button, and a long checkmark list.
- **Surface and border:** White cards with faint gray borders and almost no shadow.
- **Typography:** Bold headlines, serif explanatory text, and compact list copy.
- **Composition:** The cards are strictly aligned and evenly spaced, which makes comparison easy.
- **Visible states:** The red button repeats across each plan so the same action language applies to personal, team, and enterprise offers.

### Article page with commerce rail

- **Anatomy:** Big headline, date and read-time metadata, social icons or share controls, feature image, and a right rail of subscription cards.
- **Typography:** The headline uses the biggest black weight on the page; metadata is small and quiet.
- **Surface:** White reading ground with thin bordered side cards.
- **Composition:** The main story stays central while the promotional rail remains visible but secondary.
- **Visible states:** Red buttons and red headings in the rail create a deliberate contrast with the black editorial body.

### Sticky red banner

- **Anatomy:** Full-width red bar at the bottom, white supporting text, and a dark or black pill button.
- **Surface:** Solid action red, no gradient.
- **Typography:** Compact sans text that reads like a short instruction rather than a slogan.
- **Composition:** The bar is always direct and short, so it does not fight the article or package content above it.
- **Visible states:** The banner acts as a persistent conversion prompt, not a decorative footer.

## Responsive behavior

On narrower screens, the system should keep the same order of priorities: logo, heading, explanation, action, then supporting modules. The hero collage can stack above the copy, but the red action should stay near the promise it fulfills. Package cards should collapse into a vertical sequence while keeping the red button and list structure intact. Right-rail promotions should move below the article body rather than becoming a second reading column. The typographic system should scale by reducing size while preserving the weight contrast, because the page depends more on hierarchy than on decorative treatments. The red sticky banner can remain fixed if it does not block the article and if its close or dismiss control stays easy to reach.

## Practical implementation guidance

### Preserve

- Keep red as the only loud action color across subscription, membership, and article surfaces.
- Preserve the split between editorial serif text and compact sans utility text.
- Keep cards square or nearly square, with faint borders instead of heavy shadows.
- Let images communicate breadth: devices, report screens, article mockups, and data dashboards.
- Maintain the right-rail pattern for offers so the core reading column stays clean.

### Avoid

- Avoid pastel brand palettes or soft gradients that dilute the newspaper feel.
- Avoid mixing in a third headline face; the page already has enough typographic contrast.
- Avoid rounded, playful cards that would weaken the trade-publication tone.
- Avoid large shadow stacks or glassy effects; the system relies on line and scale.
- Avoid making every red element interactive; red must stay selective to retain urgency.

### Recommended build order

1. Set the white canvas, red action, and charcoal text palette.
2. Build the header and utility navigation.
3. Build the main headline and body typography.
4. Recreate the split hero and the package comparison cards.
5. Add the article layout with a right rail and a sticky action bar.
6. Finish the dark analytical module style for campaignred content.
7. Verify the spacing rhythm across the long page and reduce unnecessary visual noise.

### Accessibility

- Keep red buttons readable against their fill and preserve strong contrast for white text on red.
- Use visible focus states on the header links, package buttons, and sticky banner controls.
- Give the image collages descriptive alternative text so the product story is clear without the visual stack.
- Keep list items and metadata short enough that they do not wrap into dense blocks.
- Do not rely on color alone to distinguish selected nav items or highlighted product names; pair red with weight, underline, or placement.

## Scope note

This guide covers the desktop subscription, package-comparison, campaignred, and article surfaces on campaignlive.co.uk. It does not fix mobile breakpoints, motion, hover behavior, or the full article taxonomy. Licensing is not specified.
