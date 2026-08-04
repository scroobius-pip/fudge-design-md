# How bland.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bland.ai-design)

Last updated: 2026-08-04

## Captured pages

[![Full-width compare table with pale section bands and green check rows](https://pin.fontofweb.com/9670?format=jpg)](https://design.withfudge.com/share/pin-9670)

[Full-width compare table with pale section bands and green check rows](https://design.withfudge.com/share/pin-9670)

[![Four pricing cards with tinted headers, bold prices, and compact CTAs](https://pin.fontofweb.com/9669?format=jpg)](https://design.withfudge.com/share/pin-9669)

[Four pricing cards with tinted headers, bold prices, and compact CTAs](https://design.withfudge.com/share/pin-9669)

[![Split demo page with headline stack and bordered intake form](https://pin.fontofweb.com/9668?format=jpg)](https://design.withfudge.com/share/pin-9668)

[Split demo page with headline stack and bordered intake form](https://design.withfudge.com/share/pin-9668)

[![Hero with pastel haze, centered media circles, and large claim](https://pin.fontofweb.com/9667?format=jpg)](https://design.withfudge.com/share/pin-9667)

[Hero with pastel haze, centered media circles, and large claim](https://design.withfudge.com/share/pin-9667)

[![Latency section with oversize numbers and a thin orange progress rule](https://pin.fontofweb.com/9665?format=jpg)](https://design.withfudge.com/share/pin-9665)

[Latency section with oversize numbers and a thin orange progress rule](https://design.withfudge.com/share/pin-9665)

## Overview

Bland uses a strict white canvas, near-black typography, and a single warm action color to keep a technically dense product feeling controlled. The page reads like an enterprise sales system rather than a playful brand site: headline first, proof second, then cards, tables, and forms that explain limits and capabilities without clutter. Orange-red appears as a top announcement strip; gold appears on the main call to action; green appears only for trust marks and approved states. Everything else stays quiet.

The strongest part of the system is the balance between scale and restraint. Large headlines do most of the selling, but the surrounding structure is modest: 1px rules, 6px corners, small gaps, and pale surfaces. That keeps pricing, demo intake, and comparison content legible even when the page becomes information-heavy. The visual language is consistent across home, pricing, and demo pages, so the site feels like one system instead of separate landing pages stitched together.

## Colors

Bland is light-first, not theme-driven. The white canvas carries the page, the warm off-white surface supports cards and tables, and the border tint is soft enough to frame content without making the layout feel boxed in. The ink color is very dark but not pure black, which keeps long blocks of copy slightly softer than a hard monochrome. Gold is reserved for the main action; orange-red is reserved for the announcement strip and other high-visibility promotional moments; green is reserved for trust, checks, and success cues. A small cool blue utility tone is available, but it should remain secondary and rare.

| token | value | use |
|---|---|---|
| `announcement` | `#D8441F` | Top announcement strip and other urgent marketing accents |
| `action` | `#F9A900` | Primary buttons and the strongest conversion cue |
| `ink` | `#151515` | Headlines, body copy, table text, and card labels |
| `deep-black` | `#000000` | Rare pure-black fragments and media-adjacent contrast |
| `trust` | `#0F6435` | Checkmarks, approved states, and confidence markers |
| `utility` | `#1F3A6F` | Secondary UI accent and restrained cool-toned utility detail |
| `canvas` | `#FFFFFF` | Page background and open breathing room |
| `surface` | `#F6F6F1` | Pricing card fills, soft section bands, and quiet panel tops |
| `panel-border` | `#E5E4DC` | Card borders, table rules, and form outlines |

The relationship between these colors matters more than any single swatch. White and warm gray create the base. Ink establishes authority. Gold gives the site a clear action path. Orange-red adds urgency without turning the whole system hot. Green is never decorative; it only marks confidence or inclusion. The result is a palette with one loud note and several quiet structural tones.

## Typography

Söhne carries the whole system in three material cuts: Söhne-Buch for body, Söhne-Halbfett for display and section headings, and Söhne-Kräftig for UI labels and button text. Applesystem appears only as a tiny utility face and should stay subordinate. The family credit belongs to Kris Sowersby and Klim Type Foundry. The hierarchy depends on scale, weight, and tight spacing more than on different families, so the page feels coherent even when the content shifts from hero claims to tables and forms.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Söhne-Halbfett | 4rem | 600 | 1 | -0.04em | Home hero and the largest marketing claims |
| `section-display` | Söhne-Halbfett | 2.75rem | 600 | 1.05 | -0.04em | Pricing intros, customer stories, and strong section heads |
| `stat-display` | Söhne-Buch | 10rem | 300 | 0.92 | -0.02em | Large benchmark numbers and latency comparisons |
| `card-price` | Söhne-Halbfett | 3rem | 600 | 1 | -0.04em | Pricing figures inside the plan cards |
| `card-heading` | Söhne-Halbfett | 1.5rem | 600 | 1 | -0.04em | Plan names, table heads, and card titles |
| `lead` | Söhne-Buch | 1.25rem | 400 | 1.45 | -0.025em | Hero supporting lines and short explanatory copy |
| `body` | Söhne-Buch | 1rem | 400 | 1.4 | -0.02em | Standard paragraph copy and table text |
| `body-medium` | Söhne-Kräftig | 1rem | 500 | 1.4 | -0.02em | Buttons, emphasized copy, and compact emphasis |
| `ui` | Söhne-Kräftig | 0.875rem | 500 | 1.3 | -0.02em | Navigation, secondary actions, and form helpers |
| `micro` | Söhne-Kräftig | 0.6875rem | 500 | 1.2 | 0.08em | Announcement text and small uppercase labels |
| `legal` | Söhne-Buch | 0.75rem | 400 | 1.4 | -0.01em | Fine-print text and low-priority notes |
| `system-label` | Applesystem | 0.875rem | 400 | 1 | 0em | Tiny utility labels when the system face appears |

The type rhythm is sharp rather than airy. Headlines compress into a strong block, then body copy loosens just enough to stay readable. Small labels use tracking instead of extra weight, so the interface can stay calm while still feeling precise. The biggest numbers in the benchmark section should keep their own lane; they are not body text blown up, they are a separate visual event.

## Layout

The page uses a wide, centered desktop column with substantial side air, which gives the content room to breathe even when the sections become dense. Vertical spacing is generous at the top level: large bands of white separate the announcement bar, nav, hero, pricing blocks, compare table, and intake forms. Within each block, spacing becomes much tighter and more controlled. That contrast is important. The site feels spacious overall, but each component is compact and efficient when you get close.

The hero and form pages follow a split structure. One side carries a bold statement and a short supporting line; the other side holds either a live form or a proof panel. On the demo page, the form sits inside a bordered card with all fields aligned to a consistent grid, which makes the long input stack feel orderly rather than overwhelming. On pricing pages, the cards line up in a row with equal heights, pale tinted tops, and a clear purchase path at the same vertical level.

The comparison table is the most grid-like layout on the site. It stretches across the available width, groups rows into sections with pale bands, and uses horizontal rules instead of heavy borders to keep the content readable. Column headings stay centered while the feature names remain left-aligned. That makes the plan matrix easy to scan from both directions: by feature or by plan.

Proof sections use a more editorial layout. A large card can pair a photograph or video thumbnail on the left with a bold claim or metric on the right. The card border is light, the background stays warm and quiet, and the typography does the work. This gives the site a human center without losing the enterprise tone.

## Visual language

Bland’s visual language is flat, clean, and border-led. The system avoids glossy effects and heavy depth. Most separation comes from spacing, 1px strokes, and soft background tints rather than from shadows. That keeps the interface calm even when the page presents a lot of pricing and capability detail. Rounded corners are present, but only at a modest scale; they soften forms and cards without turning the system into a pill-heavy SaaS template.

The brand’s loudest color is gold, and it is used sparingly so it keeps its force. Orange-red is even more selective: it reads as an announcement tone, not a general decorative tint. Green checks are small but important because they turn inclusion into a quick visual read. Together, those accents create a strong practical grammar: gold means act, orange-red means announce, green means trust.

Photography and media are used in service of proof, not atmosphere. When a section uses imagery, the image is typically paired with a claim, a customer result, or a benchmark. The main hero can soften the page with a blurred pastel field or a circular media cluster, but the broader system still stays sober. There is no reliance on illustration, icon clutter, or layered gradients for personality. The page gets its character from typography, spacing, and color discipline.

The result is a brand that feels regulated, precise, and sales-driven without turning cold. It wants to communicate volume, reliability, and simplicity in the same breath, and the design system supports that by keeping everything immediate and legible.

## Components

### Announcement bar

- **Anatomy:** Single-line full-width strip with centered message and a right-side close control.
- **Surface:** Orange-red fill with white text.
- **Typography:** Micro label sizing, compact weight, tight vertical rhythm.
- **Hierarchy:** It sits above navigation and never competes with the hero claim.
- **Visible states:** A dismiss affordance is visible at the far right.

### Top navigation

- **Anatomy:** Brand mark, a small set of text links, and two acquisition actions at the right edge.
- **Typography:** `ui` for the links and small buttons.
- **Shape:** Light borders and small 6px-class corners on the smaller buttons.
- **Spacing:** Moderate horizontal spacing; the nav stays calm and does not stretch into a second hero row.
- **Composition:** The navigation reads as a thin control strip, not a dense utility bar.

### Primary action

- **Surface:** Gold fill with dark text.
- **Typography:** `ui` or `body-medium`, depending on context.
- **Shape:** Small rounded rectangle, not a pill.
- **Spacing:** Compact horizontal padding, shallow vertical padding.
- **Visible states:** It is the strongest click target on the page and is used consistently for the main conversion step.

### Hero stage

- **Anatomy:** Large headline, short supporting line, primary action, and a visual element or proof cluster.
- **Typography:** `hero-display` with a `lead` line beneath it.
- **Composition:** Left-heavy text with a right-side media object or centered media cluster.
- **Surface:** Mostly white, with occasional soft color haze behind the media.
- **Hierarchy:** The headline dominates; everything else supports it.

### Pricing card

- **Anatomy:** Small top label, plan name, short plan summary, price, CTA, and a short list of included items.
- **Surface:** Warm off-white fill with a light border.
- **Typography:** `card-heading` for the plan name, `card-price` for the price, and `body` for the included list.
- **CTA:** The main plan cards end with a dark filled button with light text; the enterprise card uses a quieter outlined request button.
- **Shape:** Modest rounded corners and a consistent card height.
- **Visible states:** One card can carry a small recommended badge above the header tone.

### Compare table

- **Anatomy:** Plan columns, section divider bands, feature-name column, and rows of checks, dashes, or values.
- **Surface:** White with pale section separators.
- **Typography:** `body` for rows; stronger weight only where the column heading or value needs emphasis.
- **Shape:** Straight grid lines with minimal rounding.
- **Hierarchy:** Section bands break the matrix into usage, infrastructure, and feature groups.
- **Visible states:** Green checks and gray dashes communicate inclusion or absence without extra text.

### Form panel

- **Anatomy:** Border-framed form with stacked labels, text fields, radio groups, and checkbox groups.
- **Surface:** White with a light border and no decorative fill.
- **Typography:** `body` for fields and `ui` for labels and helper text.
- **Shape:** 6px-class corners on inputs and the outer card.
- **Spacing:** Fields sit in a strict vertical rhythm, with comfortable gaps between field groups.
- **Hierarchy:** Labels are clear and close to their inputs; the submit action sits at the bottom as the final bold step.

### Proof card

- **Anatomy:** Large claim or metric, short supporting text, and a framed media block or customer note.
- **Surface:** Warm, quiet fill with a restrained border.
- **Typography:** `section-display` for the claim and `body` for the explanation.
- **Composition:** The media usually anchors one side while the headline carries the other.
- **Visible states:** A single highlighted figure in orange-red or black gives the section its center of gravity.

## Responsive behavior

On narrower screens, the layout should collapse in the same order the story is told: announcement, navigation, headline, action, proof, pricing, then forms and tables. Pricing cards should stack before the comparison table becomes unreadable. The comparison matrix should keep the feature-name column visible; if the plan columns no longer fit, horizontal scrolling is safer than dropping data. Form panels should move to full width, with labels staying directly above inputs and the 1px borders and small radii preserved. Large display type should step down before the layout starts to feel crowded, but the hierarchy should remain unmistakable.

## Practical implementation guidance

### Preserve

- Keep the page white-first and border-led.
- Preserve the gold primary action as the main conversion color.
- Keep orange-red confined to announcement-style messaging.
- Use green only for checks, approval, or included items.
- Maintain the narrow, centered feel of desktop content and the generous vertical section rhythm.
- Keep corners modest and consistent across cards, forms, and buttons.

### Avoid

- Avoid adding extra saturated accents.
- Avoid heavy shadows, glass effects, or layered gradients.
- Avoid rounded pills for every control.
- Avoid mixing a second display family into the hierarchy.
- Avoid tightening the layouts so much that the pricing and comparison content starts to feel cramped.
- Avoid replacing the table structure with cards when the dense comparison is the point.

### Recommended build order

1. Build the shell: announcement bar, navigation, and the base white canvas.
2. Set the Söhne hierarchy and lock the large headline styles.
3. Add the hero and primary action.
4. Build the pricing cards.
5. Add the compare table with section bands and row rules.
6. Add the demo form panel.
7. Finish with proof cards and trust marks.

### Accessibility

- Keep contrast strong on white, pale, and gold surfaces.
- Do not rely on color alone for checks and dashes; the row labels and headings must make the meaning clear.
- Keep inputs visibly separated, with labels directly attached to fields.
- Make small UI text large enough to remain readable beside the dense table and form content.
- Preserve a clear focus treatment on navigation links, buttons, and form controls.
- Keep the announcement strip dismiss control obvious and large enough to hit comfortably.

## Scope note

This guide covers the home hero, pricing cards, compare-plans table, demo form, and proof sections on bland.ai. It does not specify motion, hover details, breakpoint values, or alternate theme behavior; Applesystem appears only as a small utility face.
