# How getviktor.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/getviktor.com-design)

Last updated: 2026-08-04

## Captured pages

[![Hero with stacked headline, Slack badge, and right-side task notes](https://pin.fontofweb.com/6484?format=jpg)](https://design.withfudge.com/share/pin-6484)

[Hero with stacked headline, Slack badge, and right-side task notes](https://design.withfudge.com/share/pin-6484)

[![Integrations wall with icon grid, 3K figure, and soft glow base](https://pin.fontofweb.com/6488?format=jpg)](https://design.withfudge.com/share/pin-6488)

[Integrations wall with icon grid, 3K figure, and soft glow base](https://design.withfudge.com/share/pin-6488)

[![Three thread cards showing task requests, replies, and summaries](https://pin.fontofweb.com/6487?format=jpg)](https://design.withfudge.com/share/pin-6487)

[Three thread cards showing task requests, replies, and summaries](https://design.withfudge.com/share/pin-6487)

[![Weeks-long timeline grid with floating status cards and markers](https://pin.fontofweb.com/6486?format=jpg)](https://design.withfudge.com/share/pin-6486)

[Weeks-long timeline grid with floating status cards and markers](https://design.withfudge.com/share/pin-6486)

[![Pricing trio with a bright center plan and dark outer cards](https://pin.fontofweb.com/6485?format=jpg)](https://design.withfudge.com/share/pin-6485)

[Pricing trio with a bright center plan and dark outer cards](https://design.withfudge.com/share/pin-6485)

[![Footer with tiny links and a huge cropped getviktor.com wordmark](https://pin.fontofweb.com/6482?format=jpg)](https://design.withfudge.com/share/pin-6482)

[Footer with tiny links and a huge cropped getviktor.com wordmark](https://design.withfudge.com/share/pin-6482)

## Overview

Viktor’s page is a dark landing system built around sharp contrast, large type, and a strong sense of structure. The page speaks in short, confident sections rather than long explanatory blocks. Most of the canvas stays close to a deep coffee-brown black, so the bright text, pale cards, and thin dividers carry the hierarchy instead of decorative graphics or heavy shading.

The design reads as a series of chapters. The hero establishes the voice with a large stacked headline and a small Slack badge. The next sections expand the promise through integration counts, task threads, long-running work timelines, pricing, FAQ, and footer links. Each chapter keeps the same disciplined spacing and corner treatment, which makes the page feel coherent even as the content shifts from product claims to pricing and help content.

The visual balance is simple: one dominant headline, one supporting stack, one action, then a dense but controlled product story. The center pricing card and the final footer wordmark widen the rhythm without breaking the underlying system.

## Colors

The palette is narrow and deliberately low-chroma. Dark browns and near-black fields do most of the work. Off-white text keeps the page readable, while a soft lavender accent appears as a rare highlight rather than a permanent brand color. Pale paper surfaces appear inside the pricing module and selected framed cards, giving the page a brief lighter register before it returns to the dark canvas.

| token | hex | use |
|---|---|---|
| `canvas` | `#262219` | Main page background and the base tone for the hero, feature sections, and footer |
| `surface` | `#312D24` | Raised dark panels, soft card fields, and the body of deep content sections |
| `surface-quiet` | `#222222` | Darker structural surfaces and heavy text blocks that need a slightly deeper field |
| `ink` | `#F5F3F0` | Primary headings, button text, large numbers, and the strongest readable text on dark fields |
| `muted-ink` | `#EFEEEC` | Secondary copy, quieter labels, and lower-emphasis text on dark surfaces |
| `accent` | `#D1C2F4` | The pale lavender strip in the center pricing card and other restrained highlight moments |
| `void` | `#000000` | The deepest wordmark fill, inner dark weight, and the sharpest voids in the system |

The relationship between modes is simple. Dark mode dominates, paper mode appears only for the central pricing card and a few bright boxes, and the accent color stays local so it never competes with the text hierarchy. There is no need for a broad rainbow of utility colors; the site depends on contrast, not saturation.

## Typography

The site uses two families: **Satoshi** for almost everything visible and **Roboto Mono** for labels, microcopy, and technical-looking metadata. Satoshi is credited to Deni Anggara and Indian Type Foundry. Roboto Mono is credited to Google. The hierarchy comes from size, weight, and spacing more than from family switching.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Satoshi | 5rem | 500 | 1 | -0.03em | Main hero line and other top-level statements |
| `section-display` | Satoshi | 4rem | 500 | 1 | -0.03em | Major section titles like pricing, FAQ, and feature chapter heads |
| `price-display` | Satoshi | 3rem | 500 | 1.2 | -0.03em | The 3K statistic and the large price figure in the center card |
| `feature-display` | Satoshi | 1.125rem | 500 | 1.2 | -0.01em | Card headers, thread titles, and compact section labels |
| `body` | Satoshi | 1rem | 500 | 1.2 | -0.01em | Supporting text, product descriptions, and most paragraph copy |
| `body-small` | Satoshi | 0.875rem | 500 | 1.4 | -0.01em | FAQ answers, legal text, and quieter explanatory copy |
| `mono-label` | Roboto Mono | 1rem | 500 | 1 | 0.02em | Chips, short badges, and small uppercase-looking labels |
| `mono-meta` | Roboto Mono | 0.75rem | 500 | 1.2 | 0.02em | Timestamps, tiny annotations, and footer microcopy |
| `decorative-wordmark` | Satoshi | 17rem | 500 | 1 | -0.03em | The cropped footer wordmark and oversized ending flourish |

Satoshi is the workhorse because it can move from 5rem headlines down to 1rem support without feeling like a different system. The weight stays steady at 500, so the page relies on scale, leading, and negative tracking for drama. Roboto Mono adds a machine-leaning register for labels and tiny metadata, which makes the product feel operational rather than ornamental.

## Layout

The page is built on a very wide centered column with large lateral gutters. The supplied desktop views repeatedly show content sitting inside an outer field rather than stretching edge to edge. That creates room for the hero to breathe, for the pricing cards to stand apart, and for the footer wordmark to crop dramatically without crowding the rest of the page.

Vertical rhythm is equally important. Major sections use generous top spacing, then tighten around local clusters such as labels, dividers, and calls to action. The page uses 80px and 128px top offsets as the default chapter spacing, with 24px and 16px inside cards. This keeps the content organized without introducing ornate separators. Thin dashed rules and 1px borders do most of the sectioning work.

The strongest structural pattern is the alternation between full-width dark chapters and inset modules. The hero and feature chapters are mostly dark field plus text and product callouts. The pricing section switches to three framed cards, with the center card made brighter and visually heavier than the others. The FAQ returns to a dark, quiet grid with a single column of questions. The footer ends by collapsing the page into tiny links and a massive wordmark that sits low in the frame.

## Visual language

Viktor’s visual language is operational, not decorative. The page favors screenshots, thread-like cards, integration icons, and timed updates. These elements make the product feel active and persistent. Instead of rich illustration or photography, the page uses app UI fragments and task logs as the hero imagery.

The background treatment is also part of the language. Some sections carry a soft smoky veil that fades from the dark canvas into transparency, which gives the page depth without introducing literal shadows. The result feels like a low-lit workspace. That mood is reinforced by the sparse palette, the pale text, and the tiny icon marks at the start of rows and labels.

Geometry stays crisp. Corners are small and consistent at 4px. Cards are boxy. Borders are thin and often dashed. The center pricing card is the main exception: it uses a pale paper surface and a lilac strip to pull attention away from the surrounding dark cards. The footer wordmark is the only truly oversized flourish, and even that feels controlled because it is cropped rather than centered as a decorative logo treatment.

## Components

### Hero masthead

- **Anatomy:** Small Slack badge, stacked headline, supporting sentence, row of topic chips, and a primary action.
- **Typography:** The headline uses the largest Satoshi scale; the badge and chips use Roboto Mono.
- **Surface:** Dark canvas with very little framing.
- **Composition:** Left-aligned text dominates. The supporting modules are kept compact so the headline stays in charge.
- **Visible state:** The page starts with immediate contrast: large light text on a dark field, no competing border grid.

### Integration wall

- **Anatomy:** Icon grid, large 3K figure, short integration notes, and a split layout that balances a visual block against a text block.
- **Typography:** The count is oversized but slightly smaller than the hero; the notes stay small and dense.
- **Shape:** Square icon cells and restrained framing.
- **Spacing:** Tight within the grid, wide outside it.
- **Hierarchy:** The figure is the hero inside the section, not the icon row.

### Thread cards and work examples

- **Anatomy:** Small framed cards that look like Slack threads or task summaries.
- **Surface:** Dark card fields with thin borders and compact padding.
- **Typography:** Small headers, tiny timestamps, and paragraph blocks in the same family.
- **Composition:** Cards overlap the section visually without losing their own borders.
- **Visible states:** The layout uses contrast between the card border and the dark field more than elevation or shadow.

### Long-run timeline section

- **Anatomy:** Section title, short notes, a grid-like timeline, and floating status blocks.
- **Visual treatment:** Vertical guides and low-contrast lines create the feeling of a schedule or operational map.
- **Spacing:** Wide horizontal spans, with content floating in the middle of a deep field.
- **Hierarchy:** The title is large, but the timeline is the real structure. The tiny blocks keep the composition active.

### Pricing cards

- **Anatomy:** Three-column plan grid with a lighter middle card, plan names, prices, summaries, feature lists, and bottom actions.
- **Surface:** The side cards stay dark; the center card shifts to a bright paper field.
- **Typography:** Large plan prices, smaller descriptive copy, and compact action labels.
- **Shape:** 4px corners, thin borders, and clean rectangles.
- **Variants:** The middle plan is the emphasis state. The outer plans feel quieter and more utilitarian.
- **Hierarchy:** The CTA row sits low and wide, giving the pricing module a stable base.

### FAQ accordion

- **Anatomy:** Large section title on the left and a single-column accordion list on the right.
- **Typography:** Questions are set in clear, small Satoshi lines; answers open in the same family with more breathing room.
- **Surface:** Dark field with thin row separators.
- **Composition:** The list is intentionally sparse. Nothing interrupts the rhythm except the open answer.
- **Visible states:** Closed rows are quiet and even; the open row becomes a short block of readable text.

### Footer

- **Anatomy:** Tiny links at the top and a cropped, oversized `getviktor.com` wordmark below.
- **Typography:** Small Roboto Mono-like microcopy above, then monumental Satoshi below.
- **Surface:** Deep dark base with almost no framing.
- **Composition:** The footer is more of a landing strip than a legal slab. The giant wordmark gives the page its final scale change.

## Responsive behavior

On narrower screens, keep the reading order intact: headline first, supporting line second, action third, then the product modules. The system should not depend on side-by-side comparisons to make sense. The dark chapter rhythm should remain, but the wide margins should collapse into a single comfortable page gutter.

The pricing module should preserve the center-plan emphasis when it stacks. If the three-card row becomes one column, the middle plan should still read as the recommended choice through fill color, border treatment, or placement. The FAQ should remain scan-friendly, with the questions still separated by clear rules and enough space for open answers.

The footer wordmark should be handled carefully on small screens. If it becomes too wide, crop it more aggressively rather than shrinking it into a weak line of text. The system works best when the typography stays bold and the spacing stays calm.

## Practical implementation guidance

### Preserve

- Keep the page in a dark register and let the light text do most of the structural work.
- Reuse Satoshi for the full hierarchy, from hero headline to body copy, and reserve Roboto Mono for labels, timestamps, and compact badges.
- Keep the 4px radius consistent. The small corner is part of the tone.
- Use thin dashed or solid rules to separate information. The page should feel engineered, not ornamental.
- Keep the accent local. The lavender tone should emphasize one module, not become a broad UI color system.

### Avoid

- Avoid soft, bubbly corners or heavy shadows. They would fight the strict, technical mood.
- Avoid introducing a second display family or a bright utility palette.
- Avoid filling the page with framed boxes. The design depends on alternating open dark space and a few decisive modules.
- Avoid overcomplicating the pricing card hierarchy. The center card already does the emphasis work.
- Avoid using large photographic treatments or illustration systems that would break the product-first voice.

### Recommended build order

1. Establish the dark canvas, off-white text, and 4px radius.
2. Build the hero with the badge, stacked headline, supporting line, and chips.
3. Add the integration section with the count block and small icon grid.
4. Add the thread cards and the long-run timeline module.
5. Build the pricing cards, then emphasize the center plan with the lighter surface and accent strip.
6. Finish with the FAQ and footer so the page closes with the same discipline it starts with.

### Accessibility

- Keep contrast strong on every dark section; the system relies on text clarity more than visual decoration.
- Give the large numeric statements and dense cards enough line height to stay readable.
- Preserve clear focus states on all clickable rows, chips, and buttons.
- Make the FAQ questions fully readable without relying on the open state to explain the topic.
- Ensure the pale center pricing card still has enough text contrast and does not depend only on the accent strip for meaning.

## Scope note

This guide covers the desktop homepage surface for Viktor: hero, integrations, thread examples, long-run timeline, pricing, FAQ, and footer. Mobile rearrangement, motion, hover and focus styling, loading states, and exact interaction behavior are not included. The spacing values are rounded to the site’s 4px step.
