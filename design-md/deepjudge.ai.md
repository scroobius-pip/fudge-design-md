# How deepjudge.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/deepjudge.ai-design)

Last updated: 2026-08-08

## Captured pages

[![Centered light hero with serif headline, black nav pill, and purple line accents](https://pin.fontofweb.com/6301?format=jpg)](https://design.withfudge.com/share/pin-6301)

[Centered light hero with serif headline, black nav pill, and purple line accents](https://design.withfudge.com/share/pin-6301)

[![Charcoal modal stage with a cream demo form card and compact black submit button](https://pin.fontofweb.com/3424?format=jpg)](https://design.withfudge.com/share/pin-3424)

[Charcoal modal stage with a cream demo form card and compact black submit button](https://design.withfudge.com/share/pin-3424)

[![Dark testimonial chapter with oversized serif heading and light quote cards](https://pin.fontofweb.com/3422?format=jpg)](https://design.withfudge.com/share/pin-3422)

[Dark testimonial chapter with oversized serif heading and light quote cards](https://design.withfudge.com/share/pin-3422)

## Overview

DeepJudge is built as a legal-tech editorial system rather than a busy software dashboard. The home page starts on a warm ivory field with a centered black navigation pill, a large serif promise, and a sparse line motif that gives the page a controlled, almost printed rhythm. That opening feels calm and formal, with the product message placed above visual structure instead of inside it.

The page then turns into darker chapters. A near-black stage holds the demo request form, while the testimonial section uses the same dark base to support large white serif headings and pale cards. The contrast between the soft paper surfaces and the charcoal backgrounds is the main organizing idea. Nothing feels decorative for its own sake; each surface change marks a new piece of the story.

The system relies on one serif family, a narrow range of warm neutrals, and a single lavender accent for thin highlight moments. The result is measured, high-trust, and severe in a polished way.

## Colors

DeepJudge uses a small palette with clear roles. The light pages are not pure white; they lean toward warm paper, which softens the black type and keeps the brand from feeling cold. The dark chapters are not absolute black either; they sit in a deep charcoal that still reads as a designed surface rather than a blank void. The accent color appears in the slender vertical bars under the hero, so it should stay restrained and precise. Black controls, white text, and beige field fills do most of the work.

| token | value | use |
|---|---|---|
| `canvas` | `#FFFFFF` | Main light page background and the open hero field |
| `surface` | `#FFFFFF` | Cream cards and field panels on dark stages |
| `surface-muted` | `#E9E1D8` | Input fills, subtle panel interiors, and quiet separators |
| `ink` | `#1A1A1A` | Primary text, headline color, and body copy on light surfaces |
| `muted-ink` | `#5B564F` | Supporting copy, labels, and helper text |
| `border` | `#D8D0C5` | Soft field borders and light dividers |
| `surface-dark` | `#242422` | Dark chapters, modal backdrops, and testimonial fields |
| `on-dark` | `#FFFFFF` | Headings, body text, and controls on dark surfaces |
| `action` | `#242422` | Primary button fills and dark control pills on light cards |
| `accent` | `#9A86FF` | Thin highlight bars and small emphasis details |

Light and dark modes should feel related, not swapped. Keep the paper surfaces warm enough to feel editorial. Keep the charcoal surfaces deep enough to make white text look crisp. Use the lavender accent only where a narrow signal is needed; it should not become a broad brand wash. A black action surface works best against cream cards because it preserves the system’s serious tone.

## Typography

The site uses one serif family, `Font`, across the page. The family carries the full hierarchy through size and spacing rather than through a mix of styles. The headlines are large and quiet, with tight leading and slight negative tracking. Supporting copy opens up just enough to stay legible inside the strong display system. No extra typographic personality is needed.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Font | 6rem | 400 | 0.95 | -0.04em | Home hero statement on the light field |
| `section-display` | Font | 4.75rem | 400 | 0.95 | -0.035em | Dark chapter headings and testimonial leads |
| `modal-display` | Font | 4rem | 400 | 1 | -0.03em | Demo-request heading above the form card |
| `body` | Font | 1rem | 400 | 1.5 | 0em | Main explanatory copy and form prose |
| `body-small` | Font | 0.875rem | 400 | 1.45 | 0em | Secondary notes, helper text, and short captions |
| `label` | Font | 0.75rem | 400 | 1.25 | 0.04em | Field labels, microcopy, and small headings |
| `button` | Font | 0.75rem | 400 | 1 | 0.12em | Uppercase button labels and compact controls |
| `navigation` | Font | 0.875rem | 400 | 1.2 | 0em | Top navigation links inside the dark pill |

The hierarchy depends on a large first line, then a clean fall into smaller supporting text. Keep the serif voice continuous from hero to form card to testimonials. Avoid mixing in a second family for UI chrome, because the current system gains strength from consistency. Verify licensing for this family before production use.

## Layout

The page is arranged as a centered, wide editorial column with strong vertical chapter changes. In the hero, the announcement line sits above a compact dark navigation capsule, and both stay centered over a generous light field. The headline occupies the middle of the page and leaves large side margins, so the composition reads as deliberate rather than crowded. Below the headline, a short paragraph sits in a narrower text block, and the decorative line field stretches horizontally across the width to anchor the section.

The modal chapter uses a different geometry. The dark background fills the full stage, then a cream card sits centered with enough breathing room around it to read as a floating sheet. The form itself uses a two-column grid for the first rows of fields, then moves to a wider textarea and a centered button. That internal structure is calm and regular, which keeps the form from feeling dense even though it holds many inputs.

The testimonial chapter returns to the dark field but keeps the layout open. A large serif heading sits high and left, while the card row spans the lower area. This creates a long horizontal reading path and lets the dark stage do the framing. Across the page, the layout avoids stacked boxes with equal visual weight. Instead, each chapter has one dominant focal point and one supporting structure.

## Visual language

DeepJudge speaks in contrast, restraint, and surface change. The light hero feels like an editorial cover page: black serif type, centered alignment, thin rules, and a small lavender interruption that keeps the composition from becoming purely monochrome. The dark chapters feel more private and confidential, with white type floating over charcoal fields and cream cards that resemble paper laid over a desk.

Shape is also part of the language. Cards and controls have modest rounded corners, but the design never turns soft or playful. Corners are present to reduce harshness, not to suggest friendliness. Borders are quiet and low-contrast, so fills and spacing carry most of the separation. Shadows stay minimal or absent. The form card and testimonial tiles rely on contrast and placement more than depth effects.

There is a strong balance between type and structure. The hero headline is the main visual event, the form card is the main utility event, and the testimonial row is the main proof event. The line motif under the hero is the most distinctive visual device outside type. It should stay thin, ordered, and slightly rhythmic, like a filing system made visible.

## Components

### Top announcement and navigation pill

- **Anatomy:** A short announcement line above a centered navigation capsule with the logo, links, and a book-a-demo control.
- **Surface:** The pill sits on the light field in deep charcoal, which makes it read as an object instead of a band.
- **Typography:** Use `navigation` for links and `button` for the call to action.
- **Shape:** Keep the capsule and button corners modest and rectangular, with `rounded.card` for the pill and `rounded.panel` for the action.
- **Composition:** Let the links breathe evenly. The logo and CTA should bookend the row and keep the center line tidy.

### Hero statement and line field

- **Anatomy:** One oversized serif headline, a short explanatory paragraph, and a wide field of vertical line bars below.
- **Typography:** Use `hero-display` for the headline and `body` for the supporting text.
- **Spacing:** Give the headline generous top and bottom room, then compress the paragraph into a narrower measure so it feels editorial.
- **Visual role:** The line field acts like a structural base. The lavender bars are accents, not decoration to repeat everywhere.
- **Visible states:** The hero should remain composed even without the full line field; the type hierarchy must still carry the page.

### Demo request form card

- **Anatomy:** Cream card, two-column label-and-field grid, dropdown, checkbox row, message area, consent line, and centered submit button.
- **Surface:** `surface` with subtle field fills in `surface-muted` and low-contrast borders in `border`.
- **Typography:** Use `label` for field labels, `body-small` for helper copy, and `button` for the submit control.
- **Shape:** Inputs should stay softly rectangular. The card can be slightly rounder than the fields so the sheet feels separate from the stage.
- **Spacing:** Keep field gaps tight and consistent. The card should feel ordered, not airy.
- **Visible states:** Placeholders should stay quiet. The selected state of the dropdown can be darker text on the same pale fill.

### Testimonial cards on the dark stage

- **Anatomy:** Dark chapter heading, wide background graphic, and a row of pale testimonial cards with names, roles, and a small action button.
- **Surface:** `surface-dark` for the chapter and `surface` for the cards.
- **Typography:** Use `section-display` for the chapter heading and `body` or `body-small` for testimonial text and attribution.
- **Composition:** Keep the cards aligned in a long row so the section reads like a controlled gallery.
- **Shape:** The cards should stay lightly rounded and flat, with the dark background doing the framing.
- **Visible states:** The arrow control should remain small and unobtrusive; the quote text should stay the dominant content inside each card.

## Responsive behavior

On narrower screens, preserve the order of meaning: announcement, navigation, hero statement, supporting copy, line field, form card, then testimonials. The headline can shrink, but it should still feel like the first thing the page says. The form card should collapse into a single-column rhythm before it becomes cramped. The testimonial row should stack in a way that preserves card rhythm and keeps the attribution readable.

The dark chapters need special care because the contrast is carrying both structure and mood. Maintain the paper card surface inside the dark stage so the page still has a focal object. Keep the line motif from becoming too dense on smaller widths; its job is to add character, not clutter. The same serif family should continue across breakpoints so the page does not lose its formal voice when the layout tightens.

## Practical implementation guidance

### Preserve

- Keep the whole system anchored in one serif family and one strong contrast story.
- Use warm paper tones rather than cold white for the main surfaces.
- Keep black controls compact and rectangular.
- Let the lavender accent remain rare and thin.
- Preserve the chapter rhythm: light hero, dark form, dark testimonials.

### Avoid

- Avoid bright saturated marketing colors that fight the serif tone.
- Avoid glossy shadows, glass effects, or soft gradients on the cards.
- Avoid mixing in a second font family just to separate UI from editorial content.
- Avoid rounded pills that become playful or soft.
- Avoid filling every section with equal-weight boxes; the page works because one element leads each chapter.

### Recommended build order

1. Establish the warm canvas, charcoal stage, and cream card surfaces.
2. Build the serif hierarchy from hero to section heading to small labels.
3. Recreate the navigation pill and primary button treatment.
4. Build the form card grid and field states.
5. Add the testimonial chapter and its card row.
6. Finish with spacing checks so the page keeps its wide, centered stance.

### Accessibility

Use strong contrast for all body text on both light and dark surfaces. Keep field labels visible and separate from placeholder text. Make the black submit button large enough to read quickly and tap comfortably. Ensure the lavender accent never becomes the only cue for meaning. Preserve visible focus styling on links, fields, and the button so the calm visual language does not remove usability.

## Scope note

This guide covers the home hero, the demo request form chapter, and the testimonial chapter on the main site. It does not define mobile-specific micro-layouts, motion, hover effects, or alternate page families. Measurements are practical adaptation targets.
