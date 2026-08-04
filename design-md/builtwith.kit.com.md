# How builtwith.kit.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/builtwith.kit.com-design)

Last updated: 2026-08-04

## Captured pages

[![Dark trial hero with centered CTA, creator portrait strip, and compact footer links](https://pin.fontofweb.com/6376?format=jpg)](https://design.withfudge.com/share/pin-6376)

[Dark trial hero with centered CTA, creator portrait strip, and compact footer links](https://design.withfudge.com/share/pin-6376)

[![Charcoal feature section with oversized headline and four dark benefit cards](https://pin.fontofweb.com/6375?format=jpg)](https://design.withfudge.com/share/pin-6375)

[Charcoal feature section with oversized headline and four dark benefit cards](https://design.withfudge.com/share/pin-6375)

[![Off-white editorial hero framing the email editor mockup and blue trial button](https://pin.fontofweb.com/6374?format=jpg)](https://design.withfudge.com/share/pin-6374)

[Off-white editorial hero framing the email editor mockup and blue trial button](https://design.withfudge.com/share/pin-6374)

## Overview

Kit's homepage uses a simple but forceful contrast system: dark promotional chapters, a bright off-white editorial chapter, and one electric-blue action color that stays constant across both moods. The page does not depend on decorative gradients or ornamental framing. Instead, it builds identity from scale, contrast, and a small set of repeated shapes. Large Kit Sans headlines carry the message, while Libre Franklin keeps the supporting copy plain and legible.

The visual rhythm is chapter-based. A dark social-proof hero opens with a centered trial button and a row of creator portraits. A darker feature chapter follows with a massive statement and four equal benefit cards. The light hero then flips the mood, placing the email editor inside a white shell on a warm canvas. That shift keeps the page from feeling monotone without introducing a second accent language. The result is energetic, direct, and product-led.

## Colors

Kit's palette is narrow and disciplined. The page relies on five core values: pure black, deep charcoal, white, a warm off-white canvas, and a saturated blue action color. Black and charcoal handle the dark marketing chapters and the heavier text moments. The warm off-white canvas softens the light hero without sliding into gray. White is used for the editor shell, text reversal, and the cleanest surfaces. Blue is reserved for the primary action, the hero button, and the bright emphasis words inside the main headline.

The color structure works because each tone has a clear job. The dark chapters use contrast to make the portraits, icon graphics, and blue controls feel vivid. The light chapter uses the off-white ground to make the email editor feel tangible and centered. There is no rainbow accent system. Blue is the one recurring signal for action, so every CTA reads as part of the same product story.

| token | hex | use |
|---|---|---|
| action | `#44B1FF` | Primary buttons, headline emphasis, and small interface accents |
| ink | `#000000` | Strongest display text, wordmark treatment, and the deepest text contrast |
| ink-soft | `#1E1E1E` | Dark section surfaces, card bodies, and the charcoal page mood |
| canvas | `#F2EFE9` | Off-white hero background and the calmer editorial chapter |
| paper | `#FFFFFF` | Editor shell, reversed text, and bright interface framing |

The same palette supports both promotional and product-heavy content. When the page turns dark, white text and blue controls keep it readable. When it turns light, black text restores the editorial feel. That shift is structural, not decorative.

## Typography

Kit Sans gives the site its voice. It is used for the oversized page headlines, the short feature statements, and the logo treatment. Libre Franklin handles everything that needs sustained reading: button copy, card descriptions, portrait captions, legal text, and the explanatory lines under the hero. The relationship is blunt and effective. One family shouts; the other explains.

Kit Sans is credited to Marko Hrastovec Mihael Šandro at Hot Type. Libre Franklin is credited to Pablo Impallari, Rodrigo Fuenzalida, and Nhung Nguyen at Impallari Type. Licensing should be confirmed before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Kit Sans | 5rem | 700 | 0.95 | -0.01em | Main homepage headline and oversized statement copy |
| section-display | Kit Sans | 4rem | 700 | 1 | -0.01em | Large feature chapter headline on dark surfaces |
| feature-display | Kit Sans | 3rem | 700 | 1 | -0.01em | Secondary display lines and product-side callouts |
| lead | Libre Franklin | 1.25rem | 700 | 1.5 | -0.01em | Short supporting lines under the hero and section titles |
| body | Libre Franklin | 1rem | 400 | 1.5 | -0.01em | Paragraph copy, card descriptions, and legal text |
| button | Libre Franklin | 1rem | 600 | 1 | -0.01em | CTA labels and small action text |
| caption | Libre Franklin | 0.75rem | 400 | 1.5 | -0.01em | Portrait captions, role lines, and quiet footer copy |

The hierarchy depends on size and weight more than on line complexity. Display text is compact and heavy. Supporting text opens up enough to stay readable against dark surfaces, but it does not become airy or editorial in the usual magazine sense. The site keeps headings short so the large type can stay powerful without breaking into awkward multi-line blocks.

## Layout

The page is built as a sequence of wide, centered bands. Each band is self-contained and uses generous vertical spacing so the next chapter feels deliberate rather than continuous. On the dark trial hero, a centered headline and button sit above a single row of creator portraits. Those portraits form an even, horizontal proof strip with consistent spacing and short captions underneath, which keeps the section from feeling crowded even with many faces present.

The feature chapter switches to a grid. One large headline occupies the top of the band, then four equal cards sit below it. Each card has the same basic footprint, so the page reads as a comparison of capabilities rather than a stacked list of competing modules. The cards are separated by breathing room more than by borders. This is important: the dark background already does the separation work.

The light hero changes the layout again. A centered headline and trial button sit above a large product mockup, which is framed like a real application window rather than a marketing illustration. The shell stays wide and stable, with the editor pane taking most of the width and a narrow settings column on the right. That balance makes the product feel usable without turning the page into a dashboard demo.

Horizontal padding stays modest on smaller widths and expands into broad side gutters on larger views. The wide gutter keeps the headline and card grid from reaching the edges, while the compact inner padding preserves the dense, confident feel of the feature cards.

## Visual language

Kit's visual language is friendly but assertive. The site uses enormous headline type, simple blocky surfaces, and a single bright blue to keep the page from feeling flat. The dark chapters create a stage for portraits and feature cards; the light chapter creates a stage for the editor mockup. Both modes depend on the same idea: one clear focal point per section.

The page favors direct imagery over metaphor. The creator portraits are literal proof, not mood boards. The editor mockup is literal product UI, not a stylized device mock. The feature icons are compact and shiny, but they do not become decorative illustrations that fight the copy. This keeps the brand energetic while still product-centered.

Shapes are soft but not cute. Rounded corners are modest, closer to 8px and 12px than to pills. Cards stay rectangular and sturdy. The blue button is the only object that feels especially interactive, which makes it easy to scan. There is very little shadow play, so the design relies on contrast, spacing, and scale instead of depth tricks.

## Components

### Hero section

The hero comes in two visible modes. The dark mode centers the trial message and places proof underneath it. The light mode puts the headline above the email editor shell. In both cases, the headline is the dominant element and the button is the only strong action signal. The supporting line stays short, so the hero can hold its shape without looking busy.

### Primary action button

The button is a small, bright blue rectangle with soft corners and dark text. It has enough padding to feel substantial, but not so much that it turns into a pill. Its role is to stand out against both charcoal and off-white backgrounds. Because blue is used so consistently, the button never feels like a one-off accent.

### Creator portrait strip

The social-proof row uses a repeated portrait tile pattern: image, name, and short descriptor. Each tile is visually consistent, with the photograph doing most of the work. The names sit in bold white type, and the descriptors are smaller and quieter. The row reads as a stable band of credibility, not a gallery wall.

### Feature cards

The feature section uses four dark cards aligned in a row. Each card starts with a small icon, then a strong heading, then a short explanatory line. Below that, the card uses a checklist of specific benefits. The checks are bright and legible, so the feature lists stay skimmable even with many items. The cards are similar enough to feel systematic, but each one has its own topic and list length.

### Email editor shell

The light chapter's editor mockup is the most product-like component on the page. It is framed in a clean white shell with a narrow interface border and a split layout inside: editing surface on the left, controls on the right. The top bar, typography controls, and content area are all visible at once, which makes the product feel configurable and real. The shell needs to stay crisp, because it is the main bridge between the marketing page and the actual software.

### Footer and legal cluster

The footer compresses the brand into a compact dark zone. The logo, trial CTA, social icons, legal links, and copyright line live together without much visual drama. That keeps the end of the page tidy and keeps the CTA present even after the main story is over. The footer works because it lowers contrast and scale without losing clarity.

## Responsive behavior

The design should preserve its chapter sequence on smaller screens: headline, action, proof, feature cards, then product mockup and footer. The order matters more than the exact two-column arrangement. When space tightens, the portrait row and feature grid can collapse into vertical stacks, but the system should keep the same color logic and the same typographic contrast. The headline sizes should step down gradually rather than switching to a different hierarchy.

The blue button should remain the dominant action at every size. The off-white chapter should stay warm and airy, not washed out. The dark chapters should keep enough contrast that the portrait captions and checklists remain readable without extra decoration. Compact spacing is acceptable on mobile, but the page should not feel compressed into a dense SaaS dashboard.

## Practical implementation guidance

### Preserve

- Keep Kit Sans as the only display family.
- Keep blue as the only recurring action color.
- Keep the dark and off-white chapters clearly distinct.
- Keep cards mostly flat and let spacing do the separation work.
- Keep corners modest and consistent.

### Avoid

- Avoid introducing a second accent color.
- Avoid turning cards into pills or glassy panels.
- Avoid replacing the big headlines with smaller, safer copy.
- Avoid heavy shadows or ornamental gradients.
- Avoid mixing unrelated font families or adding decorative scripts.

### Recommended build order

1. Set the color tokens and Kit Sans / Libre Franklin roles.
2. Build the primary button and the large headline scale.
3. Recreate the dark hero with portrait proof.
4. Build the four-card feature row.
5. Add the light editorial hero with the editor shell.
6. Finish with the footer and legal cluster.

### Accessibility

- Keep blue CTA text readable on charcoal and off-white backgrounds.
- Use specific alt text for every portrait and product screen.
- Keep button and link focus styles visible in both color modes.
- Do not rely on color alone for checklist meaning.
- Keep the longest headlines from wrapping into awkward, low-contrast lines.

## Scope note

This guide covers the supplied homepage surfaces: the dark trial hero with creator portraits, the dark feature grid, the off-white editor hero, and the footer. Inner application screens, mobile choreography, motion, hover behavior, and form validation are not included.
