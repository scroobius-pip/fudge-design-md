# How audio.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/audio.com-design)

Last updated: 2026-08-04

## Captured pages

[![Dark hero with floating player cards around the centered headline](https://pin.fontofweb.com/6243?format=jpg)](https://design.withfudge.com/share/pin-6243)

[Dark hero with floating player cards around the centered headline](https://design.withfudge.com/share/pin-6243)

[![Subscription pricing screen with annual toggle and magenta continue button](https://pin.fontofweb.com/6244?format=jpg)](https://design.withfudge.com/share/pin-6244)

[Subscription pricing screen with annual toggle and magenta continue button](https://design.withfudge.com/share/pin-6244)

[![Four-column benefits strip separated by thin vertical dividers](https://pin.fontofweb.com/6245?format=jpg)](https://design.withfudge.com/share/pin-6245)

[Four-column benefits strip separated by thin vertical dividers](https://design.withfudge.com/share/pin-6245)

[![White plugin rows, dark AI tool cards, and bright genre tiles](https://pin.fontofweb.com/6240?format=jpg)](https://design.withfudge.com/share/pin-6240)

[White plugin rows, dark AI tool cards, and bright genre tiles](https://design.withfudge.com/share/pin-6240)

[![Music and podcasts catalog cards above the dark footer columns](https://pin.fontofweb.com/6241?format=jpg)](https://design.withfudge.com/share/pin-6241)

[Music and podcasts catalog cards above the dark footer columns](https://design.withfudge.com/share/pin-6241)

## Overview

audio.com uses a dark creator-platform language: deep charcoal backgrounds, bright off-white type, magenta actions, and narrow hairline borders that keep the interface crisp instead of glossy. The page reads as an app first and a marketing site second. Large centered statements do most of the selling, while the supporting blocks stay compact and card-like.

Poppins carries the whole system, so hierarchy comes from scale, weight, and spacing rather than from mixed families. The pages move between a spare hero, a pricing layout with strong plan emphasis, utility sections with thin dividers, and dense catalog grids. White content strips appear in the middle of the dark shell when the product needs a cleaner, more explanatory stage. That contrast is a major part of the brand feel: dark studio mood outside, bright product explanation inside.

## Colors

The color system is narrow and purposeful. Dark charcoal is the default canvas. Off-white text dominates every dark surface. Magenta is the primary action color, while green is reserved for savings, success, or plan emphasis. Warm oranges, pinks, yellow, and blue appear in catalog art and genre tiles, but they behave as content accents rather than as primary interface signals. Thin borders stay close to the surrounding dark values so the card grid feels structured without turning noisy.

| token | value | use |
|---|---|---|
| `action` | `#FF465F` | Main call-to-action buttons and the strongest conversion accent |
| `action-deep` | `#DF135F` | Deeper magenta used for stronger button depth and emphasis |
| `success` | `#02BA29` | Savings badges, positive markers, and green utility notes |
| `canvas` | `#1A1825` | Main page background and dark shell color |
| `surface` | `#33313B` | Raised dark cards, support bars, and secondary panels |
| `surface-strong` | `#413E48` | Slightly lifted card surfaces and dense plan blocks |
| `surface-accent` | `#420039` | Deep plum accent used in dark panel headers and trims |
| `paper` | `#FFFFFF` | Light plugin strips, white cards, and bright inset content areas |
| `ink` | `#F2F1F4` | Primary text on dark surfaces, including headlines and body copy |
| `muted-ink` | `#A7A5AA` | Secondary copy, labels, and de-emphasized metadata |
| `border` | `#4E4B55` | 1px card borders, separators, and plan outlines |
| `link` | `#6AABF1` | Support links and secondary informational links |
| `warm` | `#E48A23` | Warm catalog art and orange content blocks |
| `sun` | `#FFD706` | Bright genre tile and content highlight color |
| `rose` | `#FF9CCA` | Soft pink catalog tile and decorative content accent |
| `coral` | `#FFAD72` | Peach-orange genre tile and warm card fill |

Dark and light modes are not separate themes here; they are chapter changes inside one system. The dominant language is still dark, but the white plugin strips and bright content tiles keep the page from feeling monochrome. Use magenta for the main action path. Keep green for positive status only. Treat the warm content colors as media and category signals, not as button colors.

## Typography

Poppins is the sole family. The packet credits Jonny Pinhorn and Indian Type Foundry. The hierarchy is compact, bold at the top, and steady in the body. Headlines are heavy but not oversized in line height; they sit close enough together to feel efficient. Labels and buttons rely on weight and spacing more than decoration. The result is a practical, product-led tone rather than a magazine tone.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Poppins | 3.125rem | 600 | 1.28 | 0em | Hero headlines and the largest marketing statements |
| `section-display` | Poppins | 2rem | 600 | 1.25 | 0em | Section headers and plan-area headings |
| `card-title` | Poppins | 1.5rem | 600 | 1.167 | 0em | Strong feature titles and highlighted card headings |
| `item-title` | Poppins | 1.25rem | 600 | 1.2 | 0em | Tool names, plan names, and catalog card labels |
| `body` | Poppins | 1rem | 400 | 1.5 | 0em | Explanatory copy, plan notes, and supporting text |
| `body-strong` | Poppins | 1rem | 600 | 1.5 | 0em | Emphasized body copy, button copy, and list leaders |
| `small` | Poppins | 0.875rem | 400 | 1.571 | 0em | Footnotes, helper text, and secondary metadata |
| `label` | Poppins | 0.75rem | 600 | 1.667 | 0em | Uppercase tags, savings chips, and eyebrow labels |
| `button` | Poppins | 0.75rem | 600 | 1.667 | 0em | Pills, continue buttons, and support actions |

The visible scale clusters around 12px, 14px, 16px, 20px, 24px, 32px, and 50px. That keeps the system easy to reproduce: one strong display size, one section size, one card-title size, and a compact body scale. The brand does not need letterspacing tricks to feel distinctive. The clear weight jump between labels, body copy, and headlines does most of the work.

## Layout

The page is built from centered blocks inside a dark shell. The top navigation sits close to the edge with the logo at left, text links across the middle, search and account controls at right, and the magenta primary action parked near the end. The hero then opens into a wide, quiet field with a centered headline and short supporting line. Floating player cards and small product previews sit around the headline so the page feels alive without becoming crowded.

The pricing area tightens the structure. A short intro sits beside a pair of plan cards, one of which gets stronger emphasis through a colored top band and a brighter button. The monthly and annual toggle reads as a small pill cluster above the cards, so the plan choice stays visually attached to the pricing decision. The layout is strict enough to compare plans quickly, but it still leaves room for savings badges, monthly equivalents, and short reassurance lines.

Utility sections use even stricter rhythm. The subscription-benefits row is divided into equal columns with thin vertical rules, small icons, and short paragraphs. Later sections switch into grids: white strips for plugin and effects content, dark blocks for AI tools, and saturated tiles for genre browsing. The tile matrix and catalog rows are compact, repetitive, and easy to scan. Footer areas flatten into columns of links and small platform download pills, which lowers the visual temperature without losing clarity.

Spacing stays generous at the macro level and tight at the micro level. The cards use 24px and 32px padding heavily, with 40px and larger gaps creating breathing room between blocks. Hairline borders replace heavy outlines. The combination makes the page feel controlled even when the content density rises.

## Visual language

The visual language depends on contrast between shape families. Almost-square cards with 1px radii sit next to fully rounded pills. That mix gives the brand a crisp, technical edge while still letting the call-to-action feel soft and approachable. The most important surfaces are flat or nearly flat. Shadows do not drive depth; borders and color shifts do.

The colorful catalog tiles are a strong part of the identity. They use saturated fills, bold black or near-black text, and simple iconography to make each category read quickly. Those tiles feel like a music library shelf rather than generic SaaS cards. In the same system, the white plugin strips feel like product documentation panels: lighter, cleaner, and more editorial. The dark tool cards and plan cards sit between those extremes and keep the overall mood grounded in a studio-app environment.

The page also uses content framing as a visual device. Hero cards hover around a large central statement. The pricing plans are framed as competing blocks. The support bar and footer compress information into a quieter bottom band. That means the page can move from promotional to utilitarian without changing its core language.

## Components

### Top navigation

- **Anatomy:** logo, primary text links, search field, upload action, free-trial action, account icon.
- **Surface:** dark shell with no heavy container box; the controls float on the same canvas.
- **Typography:** small, boldish Poppins text for the links and pills.
- **Shape:** the two actions use full pills; the account icon stays circular.
- **Composition:** keep the navigation compact so the hero remains the dominant element.
- **Visible states:** the active section can be marked by a simple brighter text treatment.

### Hero stage

- **Anatomy:** centered headline, short subline, primary action, and floating player previews.
- **Surface:** deep charcoal with bright off-white copy.
- **Typography:** the hero uses the largest Poppins size with a tight line box.
- **Spacing:** ample empty space around the central message; side previews should not crowd the headline.
- **Composition:** let the small player cards orbit the headline rather than forming a dense grid.
- **Hierarchy:** the headline does the selling; the previews prove the product context.

### Subscription plans

- **Anatomy:** intro copy at left, annual/monthly toggle, two large plan cards, savings badges, price, primary button, and a short reassurance line.
- **Surface:** dark card bodies with thin borders; the strongest plan gets a darker magenta band.
- **Typography:** section display for the heading, item titles for plan names, and body copy for the pricing notes.
- **Shape:** cards stay square and the action remains a pill.
- **Spacing:** keep the cards separated enough to read as competing choices, not one merged panel.
- **Visible states:** the best-choice plan has the clearest accent, while the other plan stays quieter but still fully legible.

### Subscription-benefits strip

- **Anatomy:** icon, small label, and short paragraph in each column.
- **Surface:** dark canvas with vertical hairline dividers.
- **Typography:** label size for the category chip, body for the explanation.
- **Composition:** use equal columns and keep each column narrow enough to read as a quick scan.
- **Hierarchy:** the icons are small markers; the text carries the meaning.
- **Visible states:** the strip feels static and informational, not interactive.

### White feature strips and tool cards

- **Anatomy:** brand mark or app icon, title, supporting sentence, and magenta try action.
- **Surface:** white paper panels against the dark page, which creates a clean break in the rhythm.
- **Typography:** item titles and body copy with dark text on white.
- **Shape:** nearly square cards and straight edges; the button returns to a pill.
- **Composition:** use left-to-right reading, with the logo or icon anchoring the first column.
- **Hierarchy:** these sections should feel more explanatory than promotional.

### Genre and catalog tiles

- **Anatomy:** title, count or subtitle, and a simple icon or artwork block.
- **Surface:** saturated color tiles with dark text or art-led covers.
- **Typography:** bold item titles and small supporting counts.
- **Shape:** square or near-square cards with tight borders.
- **Composition:** arrange tiles in a clean matrix so the library feel is immediate.
- **Visible states:** the cards should stay visually stable; the strength comes from color and repetition.

### Footer and support bar

- **Anatomy:** support prompt, portal button, link columns, platform download controls, and small social or legal links.
- **Surface:** the darkest band or a deep raised surface.
- **Typography:** small, restrained copy with only one strong action.
- **Shape:** the support action remains a pill; the rest stays text-led.
- **Composition:** keep the footer dense but quiet so it closes the page instead of competing with it.
- **Hierarchy:** download and support actions come before legal and utility links.

## Responsive behavior

On narrower widths, keep the reading order intact: nav, hero, pricing, benefits, tools, tiles, footer. The layout should stack before it compresses the copy too far. Plan cards should move from two columns to one without changing their internal emphasis. The benefits strip should become a vertical list with the same icon-label-copy rhythm. The tile matrix can drop to fewer columns while preserving the saturated fills and the square card logic. The hero can keep its floating preview idea, but those previews should give way before they crowd the headline. The footer should collapse into fewer columns and keep the support action easy to reach.

## Practical implementation guidance

### Preserve

- Keep the dark shell as the dominant frame.
- Use magenta for the main conversion action and green only for positive status or savings.
- Preserve the near-square cards and the fully rounded pills.
- Keep borders thin and restrained.
- Use white feature strips only where the page needs a cleaner explanatory pause.
- Let catalog colors stay bold and saturated.

### Avoid

- Avoid turning the whole page into a soft, glossy marketing layout.
- Avoid adding a second primary action color.
- Avoid heavy shadows as the main depth cue.
- Avoid mixing too many border radii.
- Avoid replacing the hero previews with dense decorative clutter.
- Avoid letting the colored content tiles become the same visual weight as the primary action.

### Recommended build order

1. Establish the dark shell, text scale, and main action pill.
2. Build the top navigation and hero stage.
3. Add the pricing block with its toggle and competing cards.
4. Add the subscription-benefits strip with hairline separators.
5. Add the white plugin or effects strips.
6. Add the dark tool cards and the colorful genre grid.
7. Finish with the catalog rows, support bar, and footer columns.

### Accessibility

- Keep magenta buttons readable against the dark shell and white strips.
- Do not rely on color alone for savings or selected-plan emphasis.
- Give icon-only controls clear labels.
- Keep focus treatment visible on pills, tabs, and footer actions.
- Make sure small body copy still holds comfortable contrast on both dark and white surfaces.
- Use meaningful text for artwork-heavy cards so the tile grid still works without color recognition.

## Scope note

This guide covers the dark homepage, subscriptions area, feature strips, tool grids, genre and catalog cards, support bar, and footer. It does not lock down mobile breakpoints, motion, hover choreography, or app-state transitions.
