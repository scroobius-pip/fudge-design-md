# How dub.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dub.co-design)

Last updated: 2026-08-08

## Captured pages

[![Dark hero with centered headline, twin buttons, and a quiet footer band](https://pin.fontofweb.com/7583?format=jpg)](https://design.withfudge.com/share/pin-7583)

[Dark hero with centered headline, twin buttons, and a quiet footer band](https://design.withfudge.com/share/pin-7583)

[![White changelog band with a left intro block and a vertical update rail](https://pin.fontofweb.com/7582?format=jpg)](https://design.withfudge.com/share/pin-7582)

[White changelog band with a left intro block and a vertical update rail](https://design.withfudge.com/share/pin-7582)

[![Scale section with orange metrics, pale globe art, and stacked stat cards](https://pin.fontofweb.com/7581?format=jpg)](https://design.withfudge.com/share/pin-7581)

[Scale section with orange metrics, pale globe art, and stacked stat cards](https://design.withfudge.com/share/pin-7581)

[![Wide pricing grid with tabs, four plans, and a free tier row](https://pin.fontofweb.com/3064?format=jpg)](https://design.withfudge.com/share/pin-3064)

[Wide pricing grid with tabs, four plans, and a free tier row](https://design.withfudge.com/share/pin-3064)

[![Footer directory with social marks, status pill, and multi-column links](https://pin.fontofweb.com/3066?format=jpg)](https://design.withfudge.com/share/pin-3066)

[Footer directory with social marks, status pill, and multi-column links](https://design.withfudge.com/share/pin-3066)

## Overview

Dub presents link attribution as a disciplined SaaS interface with a strong black-and-white backbone. The most promotional moments sit on a very dark stage with centered copy and compact trust markers, while the operational pages open up into wide white systems of pricing tables, changelog timelines, and directory-style footers. That shift from dark theater to bright information architecture gives the site a clear rhythm: ask for attention in one mode, then explain the product in a calmer one.

The design feels software-first rather than decorative. Headings are large and assertive, body copy stays restrained, and the interface leans on thin borders, even spacing, and a small number of color roles. Black and white carry almost all of the layout weight. Orange appears only as a tight accent for badges, tiny icon squares, and highlight marks, so it reads as a signal rather than a brand wash.

The page story is built from a few repeated moves: centered hero copy, dense white tables, vertical timelines, and broad footer directories. Those patterns should stay consistent across the site because they are what make Dub feel calm, scalable, and businesslike. The same discipline carries from the homepage to pricing and the lower utility areas, so the whole system reads as one product rather than a set of unrelated marketing panels.

## Colors

Dub uses a narrow neutral palette with one warm accent. White and near-white surfaces dominate pricing, navigation, and footer areas. The hero and other promotional sections switch to a near-black field so the white text lands with high contrast. Orange is not a page-wide brand color; it is a small signal used for badges, mini icons, selected markers, and a few numerical highlights. Hairline borders stay light and quiet so the content remains the focus.

| token | hex | use |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page background, pricing cards, footer surface |
| `canvas-soft` | `#FAFAFA` | Soft card fill, status pill, subtle section backing |
| `ink` | `#0A0A0A` | Primary text on white, quiet button text, nav text |
| `ink-strong` | `#000000` | Strongest text, black fills, the darkest utility marks |
| `ink-soft` | `#525252` | Supporting copy, descriptions, muted labels |
| `muted-ink` | `#737373` | Secondary dates, light utility text, low-priority labels |
| `status` | `#A3A3A3` | De-emphasized copy and future timeline rows |
| `border` | `#FAFAFA` | Card outlines, column separators, table rules |
| `border-strong` | `#A3A3A3` | Slightly firmer divider lines and selected frames |
| `surface-dark` | `#171717` | Hero stage, dark promotional sections, inverted copy blocks |
| `surface-deep` | `#000000` | Deepest dark utility surface and black fills |
| `action` | `#000000` | Primary CTA fill on light surfaces, top-level buttons |
| `accent` | `#EA580C` | Small badges, product icons, emphasis dots, orange metrics |
| `accent-deep` | `#7C2D12` | Deep orange supporting tone for stronger emphasis |

The system is split between light information pages and a dark promotional opening, but the palette stays coherent because the same text colors are reused in both modes. White text on `surface-dark` and black text on `canvas` are the two stable pairs. Orange should remain tiny so the page does not lose its neutral discipline. It works best when it marks a label, a feature chip, or a numeric callout instead of becoming a full surface color.

There is very little photographic treatment in the interface. When small brand marks, product glyphs, or utility art appear, they should stay neutral and low-saturation so they do not compete with the core black, white, and orange system. The accent should never become the dominant field color; it works as a point of emphasis, not as a surface wash.

## Typography

Dub’s hierarchy depends on a compact set of geometric, modern faces. Satoshi carries the display work, Inter handles the explanatory and interface copy, and Geist Mono is reserved for the large numeric readouts that need a technical flavor. The type system is bold at the top, quiet in the middle, and very small in the footer. That contrast is a key part of the brand’s seriousness.

Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Satoshi | 3.5rem | 700 | 1 | -0.03em | Dark hero headline and other major promotional statements |
| `section-display` | Satoshi | 3rem | 700 | 1.02 | -0.03em | Large section leaders in white bands |
| `page-title` | Satoshi | 2rem | 700 | 1.05 | -0.025em | Pricing and page-level titles |
| `card-title` | Satoshi | 1.25rem | 500 | 1.2 | -0.01em | Plan names, changelog items, and feature headers |
| `metric` | Geist Mono | 1.5rem | 400 | 1.1 | -0.02em | Large linked numbers, counters, and technical stats |
| `body` | Inter | 1rem | 400 | 1.55 | 0em | Paragraph copy, descriptions, and explanatory text |
| `body-strong` | Inter | 1rem | 500 | 1.55 | 0em | Button labels, emphasized body copy, and short list items |
| `navigation` | Inter | 0.875rem | 500 | 1.2 | 0em | Top navigation and small utility links |
| `label` | Inter | 0.875rem | 500 | 1.15 | 0.02em | Badges, plan labels, and small interface tags |
| `legal` | Inter | 0.75rem | 400 | 1.4 | 0em | Footer text, notes, and low-priority legal copy |

The scale is straightforward: display text jumps quickly, then the system steps down to 20px, 16px, 14px, and 12px for everything else. Medium weight is enough for most interface copy; the site does not need semibold clutter. The mono style belongs only to values and metrics, where the spacing of figures matters more than the texture of prose.

Satoshi should stay on the larger headlines and plan names so the brand keeps its compact, confident tone. Inter should carry the navigation, descriptions, and footer directory because it stays clear at small sizes and does not fight the layout. Geist Mono should stay limited to data-rich callouts, where its fixed rhythm helps the numeric blocks stand apart from the surrounding copy.

## Layout

The page uses a chapter-like structure. The opening hero is centered inside a wide dark field with very little peripheral noise. The copy block stays narrow, which makes the headline feel deliberate rather than sprawling. Two compact buttons sit under the heading, and a small trust row sits beneath them. That arrangement creates a single point of focus before the page opens into more detailed content.

The white sections use a different rhythm. The changelog band splits into two halves: a short intro on one side and a vertical event rail on the other. The rail uses a thin spine, round markers, and a stacked set of titles and dates so the eye can scan recent updates quickly. The scale section uses a similar split but with the visual weight reversed: text and numeric proof on one side, a large globe or sphere illustration on the other. Those large shapes keep the section from feeling like a simple stats table.

Pricing is the most grid-heavy area. It uses tabs, evenly divided plan cards, and thin vertical separators so the tiers can be compared easily. Each card keeps the same internal rhythm: title, price, short explanation, then a stacked list of features and a single button. The lower free tier strip stretches across the page and acts like a reset line beneath the main offers. The cards and strips stay tall enough that the eye can move down each column without confusion.

The footer spreads out into a wide directory grid. It lowers contrast, increases column count, and lets navigation categories do the organizing. Social marks, a system-status pill, certification badges, and copyright text all sit in the same calm field. The result is broad but not crowded. It feels like a destination rather than a simple end cap.

Spacing should stay generous. White pages breathe at the edges, while dark stages rely on centered columns and large negative space. Hairline borders should do most of the separation work, not heavy shadows. The structure needs clear gutters between cards, clear room around the hero headline, and enough air in the footer that the link columns do not collapse into one another.

## Visual language

Dub’s visual language is controlled, factual, and intentionally plain in the best sense. The site prefers rectangles, thin rules, and small radii over expressive shapes. Corners are softened just enough for comfort, but the system never becomes playful. The strongest shapes are the full-width hero band, the pricing columns, and the footer grid. Secondary boxes stay simple and quiet.

Color is used with discipline. Black, white, and near-white are the structural colors. Orange is the only warm note, and it appears in tiny units that act like pointers: app badges, icon squares, metric highlights, and feature markers. Because the accent is so contained, the page can feel premium without feeling glossy.

Depth is minimal. Most separation comes from white space and fine borders. If any shadow is used, it should be subtle enough that the grid still reads as flat and organized. That flatness matters because the product is about tracking and attribution, not about visual spectacle.

The typography follows the same rule. Headlines are bold and short. Explanatory copy is compact and unembellished. The mono figures add a technical tone to the stats section, but they do not take over the page. In practice, the site feels like a precise control room dressed in a neutral marketing shell. The design avoids ornamental flourishes because the structure already communicates confidence.

## Components

### Top navigation

- **Anatomy:** Left-aligned wordmark, centered product and resource links, right-aligned account actions, and a clear filled sign-up button.
- **Surface:** White on light pages; it can sit over the dark hero without adding extra decoration.
- **Typography:** `navigation` for links, utilities, and button text.
- **Shape:** `button` radius for the main action; the rest stays flat and compact.
- **Spacing:** Keep the row airy, with enough gap that the menu reads as a calm horizontal line rather than a packed toolbar.
- **Hierarchy:** The sign-up action is strongest, login is quieter, and the product links sit in the middle as plain text.
- **Visible states:** Selected or active items should stay understated; this system does not need loud navigation chrome.

### Hero stage

- **Anatomy:** Centered headline, one supporting sentence, two adjacent calls to action, and a small trust or rating row below.
- **Surface:** `surface-dark` with white copy and a very restrained warm glow in the background.
- **Typography:** `hero-display` for the main line, `body` for the subhead, `body-strong` for action labels.
- **Shape:** Buttons use `button` radius; everything else stays square and stable.
- **Spacing:** Large vertical breathing room above and below the headline; the center block should feel isolated inside the dark field.
- **Composition:** The text block is narrow, the actions are compact, and the trust row is visually lighter than the buttons.
- **Visible states:** The primary button is black on light surfaces and inverted on the dark stage when needed.

### Changelog timeline

- **Anatomy:** Short lead-in on one side, vertical timeline rail on the other, circular markers, event titles, and dates.
- **Surface:** White with light separators and low-contrast future items.
- **Typography:** `card-title` for event titles and `body` or `legal` for the dates.
- **Shape:** Markers are circular; the rail and cards stay square and disciplined.
- **Spacing:** Leave enough room between markers so the spine reads clearly without crowding.
- **Composition:** Titles are the visual anchor; dates should sit just below them as supporting metadata.
- **Visible states:** Current and recent items stay darker; older items fade to `status` strength.

### Scale section

- **Anatomy:** Headline, short paragraph, stacked numbers, and a large globe or sphere illustration with event cards beside it.
- **Surface:** White with orange used only for the key figures.
- **Typography:** `section-display` for the heading, `body` for the explanation, `metric` for the numbers.
- **Shape:** Illustration cards and stat blocks remain simple rectangles with light borders or soft separation.
- **Spacing:** The left column should feel tall and open, while the right column can stack denser content.
- **Hierarchy:** The numbers are the proof; the paragraph gives them context; the globe provides scale and reassurance.
- **Visible states:** Orange figures should feel emphatic but not interactive.

### Pricing table

- **Anatomy:** Tabs at the top, four main plan columns, repeated feature lists, and a lower free-tier strip.
- **Surface:** White with light borders, with one highlighted card if a plan needs emphasis.
- **Typography:** `page-title` for the lead, `card-title` for plan names, `body` and `body-strong` for descriptions and buttons.
- **Shape:** `card` radius for the main plan blocks; tabs and buttons keep the smaller button radius.
- **Spacing:** Equal column spacing, calm vertical rhythm inside each card, and a clear break between the paid tiers and the free tier.
- **Composition:** Price, summary, action, and feature list must stay in that order so scanning feels easy.
- **Visible states:** Selected tabs, featured plans, and the lower free row should be obvious without heavy color shifts.

### Footer directory

- **Anatomy:** Brand mark, social row, system-status pill, multi-column link directory, compliance badges, and copyright line.
- **Surface:** White with very light contrast shifts only.
- **Typography:** `navigation` for link groups and `legal` for the lowest-contrast text.
- **Shape:** The status pill is fully rounded; the rest of the footer remains mostly flat.
- **Spacing:** Broad columns with generous vertical space; the footer should feel like a destination, not a dense wall.
- **Composition:** Put the brand and status details first, then the link grid, then the legal and badge row last.
- **Visible states:** The status pill and badge treatments should stay subtle and readable.

## Responsive behavior

On narrower screens, the hero should keep its reading order: headline, subhead, buttons, then trust row. The changelog timeline can collapse into a single vertical stack, but the markers and dates should remain clear. Pricing should become scrollable or stack into fewer columns before any card loses its internal order. The footer can reduce to fewer link columns while keeping the brand, status pill, and legal row intact.

The biggest risk on smaller screens is crowding. This system needs generous line length control and enough vertical space that the dark hero does not turn heavy. The same is true for the pricing grid: if the cards compress too aggressively, the hierarchy between plan name, price, and feature list becomes hard to scan. The layout should prefer fewer columns over tighter gutters when space gets limited.

## Practical implementation guidance

### Preserve

- Keep the site mostly neutral and let the structure do the branding.
- Use Satoshi for large headlines and Inter for the rest of the interface.
- Reserve orange for small signals, not full sections.
- Keep borders light and shadows minimal so the grid stays crisp.
- Let the dark hero and the white information bands feel like two parts of the same system.

### Avoid

- Avoid adding a second saturated accent color.
- Avoid decorative gradients, glossy glass effects, or heavy drop shadows.
- Avoid making every card equally prominent; the strongest card should still be the exception.
- Avoid mixing unrelated font styles or using mono type for ordinary copy.
- Avoid over-rounding the cards; the design should stay disciplined.
- Avoid tightening the spacing so much that the pricing grid and footer directory lose their calm rhythm.

### Recommended build order

1. Build the typography scale and neutral color tokens.
2. Build the top navigation and the dark hero stage.
3. Build the changelog timeline and the scale section.
4. Build the pricing grid with tabs and the free-tier strip.
5. Build the footer directory and status pill.
6. Add responsive collapse rules after the desktop hierarchy is stable.

### Accessibility

- Maintain strong contrast on both the dark hero and the white utility pages.
- Give the orange accent a text or shape cue so it never carries meaning alone.
- Keep visible keyboard focus on nav links, tabs, and buttons.
- Label the social marks, status pill, and plan actions clearly.
- Make sure the timeline dates and pricing details remain readable when the layout narrows.
- Preserve enough spacing around small controls so the interface stays usable without precise pointer targeting.

## Scope note

This guide covers dub.co’s homepage hero, changelog band, scale section, pricing table, and footer directory. It does not set motion, hover behavior, loading states, exact mobile breakpoints, or menu, tab, and card interaction details.
