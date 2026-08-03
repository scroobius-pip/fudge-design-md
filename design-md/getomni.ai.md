# How getomni.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/getomni.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Blue hero with oversized lending headline and dotted light field](https://pin.fontofweb.com/6871?format=jpg)](https://design.withfudge.com/share/pin-6871)

[Blue hero with oversized lending headline and dotted light field](https://design.withfudge.com/share/pin-6871)

[![Centered security section with mint glow and six rounded cards](https://pin.fontofweb.com/6870?format=jpg)](https://design.withfudge.com/share/pin-6870)

[Centered security section with mint glow and six rounded cards](https://design.withfudge.com/share/pin-6870)

[![White testimonial section with two quote cards and metric row](https://pin.fontofweb.com/6869?format=jpg)](https://design.withfudge.com/share/pin-6869)

[White testimonial section with two quote cards and metric row](https://design.withfudge.com/share/pin-6869)

[![Large feature section with three-up cards and metric callouts](https://pin.fontofweb.com/6868?format=jpg)](https://design.withfudge.com/share/pin-6868)

[Large feature section with three-up cards and metric callouts](https://design.withfudge.com/share/pin-6868)

[![Full-page layout showing hero, feature section, and footer rhythm](https://pin.fontofweb.com/6867?format=jpg)](https://design.withfudge.com/share/pin-6867)

[Full-page layout showing hero, feature section, and footer rhythm](https://design.withfudge.com/share/pin-6867)

[![Minimal white footer with logo, legal links, and social icons](https://pin.fontofweb.com/6872?format=jpg)](https://design.withfudge.com/share/pin-6872)

[Minimal white footer with logo, legal links, and social icons](https://design.withfudge.com/share/pin-6872)

## Overview

OmniAI presents itself as a confident lending product with a simple visual promise: a loud blue opening, a calm sequence of white trust-building sections, and a quiet footer. The page does not lean on decoration. It leans on contrast, scale, and air. The blue hero establishes urgency and clarity immediately, while the later sections trade that intensity for pale surfaces, rounded cards, and soft colored glows that make the interface feel safe enough for a financial workflow.

The strongest pattern is the shift in mood between chapters. The hero uses a saturated blue field with white type and a dotted highlight zone. The security section moves to a white canvas with a mint-and-blue wash behind a centered headline and six cards. The testimonial and feature sections keep the same light canvas but vary density: one uses two large quote cards and a metric strip, the other uses a large left-aligned headline with a card grid. The footer removes most color and leaves only the logo, links, and social icons.

## Colors

The palette is narrow and disciplined. Blue carries action, emphasis, and the brand’s main visual energy. White and near-white surfaces carry most of the page. Black is used for the heavy headings and the most important labels. Muted blue-gray copy softens the lower-priority text. Pale green, lilac, and rose appear only as atmosphere inside trust sections and small chips; they do not compete with the main blue voice.

| token | value | role |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page background and card fill |
| `ink` | `#000000` | Hero headlines and strongest section titles |
| `muted-ink` | `#526074` | Supporting copy, footer text, and quiet labels |
| `border` | `#DCE1F6` | Hairline borders around cards and pills |
| `surface` | `#F6F7FB` | Soft section background on light chapters |
| `action` | `#2563EB` | Primary button fill, logo accent, and key links |
| `action-strong` | `#1A6CE7` | Deeper blue used in the hero field |
| `hero-deep` | `#2437AF` | Dark blue end of the hero gradient |
| `hero-light` | `#6DA6FA` | Light blue middle of the hero gradient |
| `security-glow` | `#DBFFD6` | Mint glow behind the security section |
| `security-cloud` | `#BBD4FF` | Pale blue tint inside trust sections |
| `accent-lilac` | `#E9D5FF` | Secondary tint inside cards and chips |
| `accent-rose` | `#FBCFE8` | Warm tint for secondary highlights |

The blue family does most of the work. `action` handles buttons and link moments. `action-strong` and `hero-deep` deepen the opening field so the hero feels decisive rather than decorative. The light sections stay on `canvas` or `surface`, so the page never becomes visually heavy. The green and blue glows are atmospheric only; they should sit behind content, not turn into blocks that compete with the cards. Dark mode is not a separate brand chapter here. The design lives primarily in light mode, with dark color reserved for ink, not for the page shell.

## Typography

The hierarchy depends on two things: a compact geometric display face for headlines and a neutral sans face for explanation. Dm Sans 9 Pt is the voice of the large headings, while Inter carries paragraph text, card copy, and footer detail. Plus Jakarta Sans appears in the tiny badge-like element and works well there because its slightly different texture keeps the pill from feeling identical to the rest of the page. No designer or vendor credit is supported by the packet for these faces, so no attribution claim is made here.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Dm Sans 9 Pt | 3.75rem | 500 | 1.16 | -0.02em | Main hero headline |
| `section-display` | Dm Sans 9 Pt | 3.125rem | 500 | 1.16 | -0.02em | Large section titles |
| `panel-heading` | Dm Sans 9 Pt | 1.5rem | 500 | 1.16 | -0.02em | Card titles and compact labels |
| `metric` | Dm Sans 9 Pt | 3rem | 400 | 1 | -0.02em | Large numeric callouts |
| `body` | Inter | 1.25rem | 400 | 1.44 | -0.02em | Hero support copy and section intros |
| `body-small` | Inter | 0.9375rem | 400 | 1.44 | -0.02em | Card descriptions and secondary lines |
| `legal` | Inter | 0.875rem | 400 | 1.44 | -0.02em | Footer links and fine print |
| `badge` | Plus Jakarta Sans | 0.75rem | 500 | 1.2 | -0.02em | Tiny trust pill and compact tags |

The scale is straightforward: 60px and 50px headlines dominate, 24px and 20px copy supports, and 12px badges stay compact. The tracking is consistently tight, which gives the headings a controlled, product-first tone instead of a conversational one. Line length matters more than ornamental rhythm. The large text needs enough white space around it to feel premium; the smaller Inter copy needs enough leading to remain readable against pale backgrounds and inside card bodies.

## Layout

The page uses a wide desktop frame with generous side gutters and large vertical gaps between chapters. The hero is the widest-feeling section because it sits on a solid blue field and leaves a lot of breathing room around the text. The rest of the page moves between centered and left-aligned structures, but always with the same sense of openness. Cards do not crowd one another. They sit inside a clear grid with broad padding and visible separation.

The hero treatment is split in spirit even when the content is simple. Copy sits left, a decorative blue pattern or conversational graphic sits right, and the call to action stays under the lead paragraph. The next sections are more editorial: a centered security chapter with six cards in a three-column grid, then a testimonial chapter with two large quote cards and a statistic strip, then a feature chapter with a bold left column and a multi-card matrix. The footer returns to a sparse, single-line rhythm and leaves the lower page quiet.

Spacing is the hidden structure. Large top and bottom insets create chapter breaks, while the cards use a smaller internal rhythm so the content remains compact inside each module. Rounded corners are present, but they do not become the whole story. The layout always prefers width, spacing, and hierarchy over heavy chrome.

## Visual language

OmniAI’s visual language is clean and persuasive rather than ornamental. The blue hero does the first job: it announces the product with certainty. The white sections do the second job: they translate that certainty into a trustable system of cards, quotes, and benefit blocks. The page never asks for attention with busy illustration or complex backgrounds. It uses a few strong signals instead: a saturated blue field, a dotted or misty texture, soft glows under headings, thin borders, and rounded cards.

The cards are intentionally calm. Their borders are faint, their corners are generous, and their shadows are minimal to nonexistent. Inside them, small icon circles and bold titles keep the structure legible. The security chapter uses pale green and blue light to make the section feel protected and almost weightless. The testimonial chapter uses the same restraint but lets the quote cards become the main visual anchors. The feature chapter adds more information density, yet it still keeps the cards clean and evenly spaced so the section reads as organized rather than crowded.

The brand’s blue should stay exclusive enough to feel meaningful. When it appears in the hero, on the button, or in the logo mark, it should feel intentional. When pale tints appear, they should soften the page, not tint everything. That contrast is what gives the site its fintech seriousness without making it stiff.

## Components

### Hero stage

- **Anatomy:** logo, small trust or update pill, large headline, short support paragraph, primary call to action, and a right-side graphic or message cluster.
- **Surface:** a full-bleed blue field with a smooth gradient from lighter to deeper blue.
- **Typography:** Dm Sans 9 Pt for the headline; Inter for the paragraph.
- **Shape:** the button is a long pill; the page surface itself stays flat.
- **Composition:** the left column carries the message. The right side is decorative and should stay visually secondary.
- **Visible states:** the hero button in blue-on-white mode and white-on-blue mode both fit the system; the contrast simply flips with the background.

### Security and trust cards

- **Anatomy:** centered eyebrow, strong title, short subtitle, then six cards in a three-column grid.
- **Surface:** white cards over a soft green-and-blue glow.
- **Typography:** Dm Sans 9 Pt for the heading and card titles; Inter for the body text.
- **Shape:** card corners are rounded, not pill-like; icon containers are circular and lighter than the card body.
- **Hierarchy:** the section title stays dominant; the cards act as proof points.
- **Visible states:** the cards read as neutral, not interactive. Their role is to explain.

### Testimonial block

- **Anatomy:** centered heading, short supporting line, a small action pill, then two large quote cards.
- **Surface:** white canvas with lightly bordered cards.
- **Typography:** a large Dm Sans 9 Pt heading; Inter for quote text and attribution.
- **Composition:** each card balances a logo or mark at the top, the quote in the middle, and author details at the bottom.
- **Spacing:** the cards sit apart with enough room to feel editorial, not promotional.
- **Visible states:** the card content is calm and static; the emphasis comes from the scale of the quote and the openness around it.

### Feature grid and metric row

- **Anatomy:** a large section title, a smaller explanatory line, then a grid of feature cards with compact diagrams, icons, and copy; some views add a metric strip with large numbers and small labels.
- **Surface:** white background with faint borders and occasional pale image glows.
- **Typography:** Dm Sans 9 Pt for headings and metrics; Inter for explanatory copy.
- **Shape:** cards stay rectangular with strong corner radii; the metric row uses simple vertical dividers.
- **Hierarchy:** the section headline leads, the cards explain, and the metrics compress the outcome into a quick scan.
- **Visible states:** the cards should remain crisp and uncluttered; avoid heavy shadows or dense chrome.

### Primary action and trust pill

- **Primary action:** a long pill with the brand blue fill on light surfaces, or a white fill with blue text on the hero field.
- **Trust pill:** a small rounded chip with a faint border and compact text, used for the backing or credibility callout.
- **Treatment:** both are soft-edged, but the primary action is the only one that should feel urgent.
- **Hierarchy:** one main action per chapter is enough; the trust pill should feel informative, not clickable.

### Footer

- **Anatomy:** logo, short explanatory line, trust pill, legal links, social icons, and copyright.
- **Surface:** white canvas with muted text.
- **Typography:** Inter and the smaller badge style.
- **Composition:** keep the footer horizontal and sparse. It should feel like an exit, not another marketing block.
- **Visible states:** links and icons are visually quiet; the footer’s job is to close the page with clarity.

## Responsive behavior

When the layout narrows, keep the reading order simple: headline, support copy, action, then the supporting graphic or card grid. The hero should not lose its hierarchy when it stacks. The security cards should collapse from three columns to two and then to one without changing their internal order. The testimonial cards should remain balanced, but the quotes can become full-width blocks on smaller screens. The feature grid should preserve its card sequence, even if the second row becomes a long vertical stack. The footer should compress into a single column before it starts hiding information.

The page should also protect its line lengths. Large headings need to wrap cleanly without awkward breaks. Supporting copy should remain short enough that it never turns into a dense paragraph block. The blue hero can stay bold on mobile, but its right-side decorative pattern should shrink back so the message remains the first thing a person sees. Buttons should stay pill-shaped and large enough to tap comfortably. The same is true for the small trust chip if it remains interactive.

## Practical implementation guidance

### Preserve

- Keep the page mostly white, with the blue hero as the strongest color moment.
- Use Dm Sans 9 Pt for all major headings and Inter for explanatory text.
- Keep the cards airy, lightly bordered, and generously rounded.
- Let the green and blue glows support trust sections without becoming dominant.
- Reuse the same pill geometry for the main CTA and the small credibility chip.

### Avoid

- Avoid heavy shadows, thick borders, or stacked container chrome.
- Avoid introducing a second loud accent color that fights the blue hero.
- Avoid dense text blocks inside the cards; the design works because the copy stays compact.
- Avoid small, sharp corners on major panels; they would break the calm fintech feel.
- Avoid making every section equally intense. The page needs contrast between the hero and the white chapters.

### Recommended build order

1. Set the blue, white, ink, and border tokens.
2. Build the hero stage with the inverse button treatment.
3. Build the trust card grid and its pale glow background.
4. Build the testimonial cards and metric strip.
5. Build the feature grid and compact stat row.
6. Finish with the footer and its muted link hierarchy.

### Accessibility

- Keep text on the blue hero high-contrast and large enough to read at a glance.
- Give each icon, logo, and diagram a useful alternative text string.
- Keep keyboard focus visible on the buttons, pills, links, and social icons.
- Do not rely on color alone to separate action from support text.
- Maintain readable line length and line spacing in cards and footer text.

## Scope note

This guide covers the desktop home page: the blue hero, the trust sections, the testimonial area, the feature grid, and the footer. It does not define mobile breakpoint values, motion, hover behavior, loading states, or error states. The spacing values are expressed on the site’s 2px-relative step.
