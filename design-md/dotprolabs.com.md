# How dotprolabs.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dotprolabs.com-design)

Last updated: 2026-08-08

## Captured pages

[![Black poster-grid hero with oversized orange headlines and compact white copy](https://pin.fontofweb.com/7494?format=jpg)](https://design.withfudge.com/share/pin-7494)

[Black poster-grid hero with oversized orange headlines and compact white copy](https://design.withfudge.com/share/pin-7494)

[![Diagonal orange ticker above stacked service bands and the cream contact strip](https://pin.fontofweb.com/7493?format=jpg)](https://design.withfudge.com/share/pin-7493)

[Diagonal orange ticker above stacked service bands and the cream contact strip](https://design.withfudge.com/share/pin-7493)

[![Huge CONTACT US headline above the pale booking footer and link column](https://pin.fontofweb.com/7492?format=jpg)](https://design.withfudge.com/share/pin-7492)

[Huge CONTACT US headline above the pale booking footer and link column](https://design.withfudge.com/share/pin-7492)

## Overview

DotPro Labs is built like a wall of posters on a black stage. The page speaks in giant orange headlines, compact pale copy, and a few small hand-drawn accents that keep the tone rough and direct. The visual energy comes from scale and contrast rather than from ornament, so the words themselves become the main shapes on the page.

The structure moves in clear chapters. The opening area uses dense dark cards and oversized questions. The middle chapter turns into long horizontal service bands with a strong orange ramp. The ending relaxes into a pale footer block with a booking action, a short note, and a compact link column. That shift from black to orange to cream gives the site a loud introduction, a louder service list, and a calmer closing step without changing the voice.

The system should feel heavy, loud, and confident, but still orderly. Keep the headlines dominant, keep the supporting copy short, and let the background do part of the compositional work.

## Colors

The palette is narrow and forceful. Black carries most of the structure, orange carries all of the energy, and cream appears only when the page needs to soften at the end. On dark surfaces, the text flips to near-white or muted gray. On the cream footer, the text flips back to black so the closing block feels grounded and easy to scan.

| token | value | use |
|---|---|---|
| `canvas` | `#000000` | Main page ground, hero cards, service chapter, and headline fields |
| `ink` | `#000000` | Footer text, logo text on light ground, and dark text on cream |
| `ink-on-dark` | `#FAFAFA` | Primary copy and strong contrast text on black |
| `ink-soft-on-dark` | `#AEAEAE` | Secondary lines, small notes, and quiet footer detail on black |
| `paper` | `#F7EFD4` | Closing footer surface and the calm end of the page |
| `paper-bright` | `#FAFAFA` | Bright utility surfaces, small highlights, and light text fields |
| `paper-soft` | `#ECECEC` | Subtle light text, muted copy, and pale utility marks |
| `action` | `#FF4000` | Loud headlines, the ticker ribbon, and the strongest accent blocks |
| `action-mid` | `#FF6C10` | Buttons, emphasized labels, and the main orange utility tone |
| `action-light` | `#FF7E2D` | Mid-tone service bands and orange gradients |
| `action-soft` | `#FFD8C9` | The lightest orange tint for warm panels and soft transitions |

Orange does all the expressive work, but it stays in one family so the page reads as a single voice. The darker orange is best for the biggest words. The mid-tone orange works for buttons and band fills. The lighter orange keeps the service list from feeling flat. The pale peach tone is useful when the footer or a small support panel needs warmth without losing the black-and-orange identity.

## Typography

Anton drives the billboard words. Raleway handles the smaller explanations and footer copy. Monigue Demo should stay rare and tiny, used only for the hand-drawn accent moments that give the page a rough studio edge. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Anton | 15rem | 700 | 0.88 | -0.04em | Massive closing words such as the full-screen contact callout |
| `section-display` | Anton | 6rem | 700 | 0.9 | -0.03em | Large section names such as the services chapter heading |
| `panel-heading` | Anton | 4.5rem | 700 | 0.9 | -0.03em | Bold card titles and dense poster blocks |
| `service-heading` | Anton | 4rem | 700 | 0.9 | -0.03em | Right-aligned service labels inside the horizontal bands |
| `action-label` | Anton | 1rem | 700 | 1 | 0.04em | Button text and compact orange pills |
| `body` | Raleway | 1.25rem | 400 | 1.6 | 0em | Short explanatory paragraphs beside the hero and in card blocks |
| `body-small` | Raleway | 1rem | 400 | 1.55 | 0em | Footer links, small notes, and supporting lines |
| `body-strong` | Raleway | 1rem | 700 | 1.45 | 0em | Emphasized phrases and compact helper lines |
| `footnote` | Raleway | 0.75rem | 400 | 1.4 | 0.04em | Tiny footer support copy and very quiet labels |
| `handwritten-note` | Monigue Demo | 1.5rem | 400 | 1.1 | 0em | Thin orange flourish text and rough hand-drawn accents |

The hierarchy depends on size and weight more than on multiple families. Anton is condensed and assertive, so it should hold the largest words and the short uppercase phrases. Raleway is calmer and more open, so it should carry the lines that need breathing room. Monigue Demo works only when a loose handwritten touch is needed; it should not compete with the billboard headings.

## Layout

The page uses a strong left-to-right rhythm, then a stacked chapter rhythm, then a closing strip. The first screen is dense: large orange text, short paragraphs, and dark cards arranged with generous gaps. The middle section turns into full-width orange bands that stack one after another. The last section shifts to a pale footer with a left-side action and a right-side link column. That sequence makes the page feel like a deliberate pitch rather than a standard brochure.

Large screens need wide outer breathing room. The supplied spacing patterns point to a heavy page gutter, around 92px at the edges, with card interiors usually set at 48px to 64px. The content never feels cramped, even when the copy is short, because the headlines are so large and the negative space is doing a lot of the work. Use the wider spacing values for the hero and contact close, and the slightly tighter values for the inner cards and service rows.

The opening card wall works best as a multi-column layout with uneven heights. The largest heading blocks can sit left or center, while the smaller explanatory copy stays narrow and aligned to one side. In the service chapter, each band should stretch full width so the page feels like a sequence of printed strips. In the footer, the cream panel should span the full width of the page and keep its inner content in a calmer, more readable grid.

## Visual language

The site feels like a set of loud studio posters arranged on a black wall. The orange type is the star, but the page avoids becoming chaotic because every orange element belongs to the same family and the same hard-edged voice. Headlines are oversized and tight. Short helper lines stay quiet. The contrast between those two scales is what creates the drama.

A few rough accents keep the page from feeling too polished. The thin orange hand-drawn mark near the contact area adds a human touch. The small circular row icons in the service bands add a mild mechanical note without softening the tone. The overall effect is aggressive and direct, but not glossy. It feels like a creative team that wants to look sharp, fast, and practical.

The service bands are especially distinctive because they turn the page into a color ramp. Each bar is a slightly different orange, so the list feels active even before the labels are read. The final cream footer changes the mood without breaking the brand. It is quieter, easier to scan, and more inviting, but it still keeps the orange action and the black text that define the rest of the site.

## Components

### Poster card grid

- **Anatomy:** Large orange heading, short pale paragraph, and occasional small decorative note or icon mark.
- **Surface:** Deep black field with subtle tonal variation.
- **Typography:** Anton for the headline, Raleway for the smaller line.
- **Shape:** Mostly square or softly rounded at 8px, with the card edge defined by spacing rather than borders.
- **Spacing:** Give the headline room to breathe and keep the paragraph narrow.
- **Composition:** Let the heading dominate one half of the card and keep the body text compact beside it.

### Service ticker and service bands

- **Anatomy:** A diagonal orange ribbon at the top, then a stacked list of wide service rows.
- **Surface:** Solid orange bands that step through lighter and darker tones.
- **Typography:** Anton, all caps, with the service names aligned to the right and the row numbers set large on the left.
- **Shape:** Full-width bars with no decorative border treatment.
- **Spacing:** Keep the row heights tall enough for the words to feel printed, not cramped.
- **Visible states:** The bands should read clearly as a list even without motion or interaction.

### Contact close

- **Anatomy:** Huge CONTACT US headline, tiny helper line above it, then a cream footer strip beneath.
- **Surface:** Black headline stage above a pale paper-like footer.
- **Typography:** Anton for the headline and button label; Raleway for the quote, links, and small supporting lines.
- **Composition:** Put the button or booking action on the left, the link stack on the right, and the social marks below.
- **Spacing:** Use generous vertical separation so the closing block feels like a deliberate landing area.
- **Visible states:** The closing area should look calm and stable, not crowded with extra controls.

### Primary action

- **Fill:** Strong orange.
- **Text:** Black or near-black for crisp contrast.
- **Shape:** Long pill with a very large radius.
- **Typography:** Anton in a compact uppercase label.
- **Spacing:** Keep the pill narrow enough to feel like a loud call, not a full-width panel.
- **Visible states:** The action should stay simple; avoid adding a second accent color or a heavy shadow system.

### Footer strip and link column

- **Anatomy:** Brand mark, short note, stacked links, and a small social row.
- **Surface:** Cream paper with black text.
- **Typography:** Raleway for the supporting lines and footnote copy.
- **Shape:** Rectangular footer plane with only the button using a pill shape.
- **Composition:** Put the brand and button on the left; keep the links and small marks grouped on the right.
- **Hierarchy:** The button comes first, then the links, then the quiet legal or support text.

## Responsive behavior

The mobile version should keep the same order of importance: headline first, short copy second, action third, supporting details last. The long billboard words may need to stack more tightly, but they should still feel huge. The service rows can collapse into simpler blocks while keeping the orange ramp and the left number / right label logic. The footer should keep its pale closing tone and must not become a cramped list of tiny links.

On smaller screens, the page should preserve the hard contrast between black, orange, and cream. Do not replace the orange bands with neutral cards. Do not reduce the headline scale so far that the page loses its poster feel. The dark cards can stack vertically, but the spacing between them should still feel deliberate. The contact close should stay loud, with the action always easy to spot.

## Practical implementation guidance

### Preserve

- Keep black as the main ground and orange as the only strong accent family.
- Use Anton for the biggest words and Raleway for the smaller explanatory lines.
- Keep the service chapter as a stack of full-width horizontal bands.
- Let the footer soften the page with a cream surface, but keep the text contrast strong.
- Treat the hand-drawn accent as a small signature, not as a repeated decoration.

### Avoid

- Avoid introducing cool accent colors that fight the orange voice.
- Avoid soft card shadows and polished SaaS surfaces.
- Avoid thin, quiet typography for the main headlines.
- Avoid turning the service list into a standard accordion or a boxed checklist.
- Avoid shrinking the contact close until it feels like an ordinary footer.

### Recommended build order

1. Set the black and cream surfaces, then lock in the orange family.
2. Build the Anton hierarchy for the largest headlines and row labels.
3. Recreate the opening poster-card grid with short text blocks.
4. Build the diagonal ticker and the stacked service bands.
5. Add the contact close and the cream footer strip.
6. Finish with small accents, the button shape, and the link column.

### Accessibility

- Keep the orange text bright enough against black to remain readable at large sizes.
- Use black text on the cream footer so the closing area is easy to scan.
- Give every icon and social mark a clear text alternative.
- Make the action pill large enough to tap comfortably on touch screens.
- Keep focus indicators visible if any of the bands, links, or buttons are interactive.
- Do not rely on color alone to separate the service rows; keep the numbers and labels clear.

## Scope note

This guide covers the desktop home page: the poster-style hero, the stacked service chapter, the contact close, and the cream footer. Mobile stacking, motion, hover details, exact wrap behavior, and any other page type are not included here. Type and spacing use a 4px step.
