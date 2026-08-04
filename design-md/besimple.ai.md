# How besimple.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/besimple.ai-design)

Last updated: 2026-08-04

## Captured pages

[![Centered hero with serif headline and black demo button](https://pin.fontofweb.com/9798?format=jpg)](https://design.withfudge.com/share/pin-9798)

[Centered hero with serif headline and black demo button](https://design.withfudge.com/share/pin-9798)

[![Benchmark report with large percentage card and structured rows](https://pin.fontofweb.com/9802?format=jpg)](https://design.withfudge.com/share/pin-9802)

[Benchmark report with large percentage card and structured rows](https://design.withfudge.com/share/pin-9802)

[![Comparison section with muted copy and waveform graphic](https://pin.fontofweb.com/9801?format=jpg)](https://design.withfudge.com/share/pin-9801)

[Comparison section with muted copy and waveform graphic](https://design.withfudge.com/share/pin-9801)

[![Closing call to action above the pale footer band](https://pin.fontofweb.com/9800?format=jpg)](https://design.withfudge.com/share/pin-9800)

[Closing call to action above the pale footer band](https://design.withfudge.com/share/pin-9800)

## Overview

Besimple.ai presents voice-AI audio licensing as an editorial product story rather than a noisy dashboard. The page sits on a warm stone canvas, uses a tall serif for claims, a quiet sans for explanation, and a single orange accent for brand marks, button chips, benchmark highlights, and small chart-like details. White cards and thin rules organize the technical material into easy-to-scan blocks. The result feels like a research report laid onto a calm marketing page: spare, centered, and highly legible.

The design depends on contrast in tone more than on ornament. Large headings carry most of the weight, while the supporting copy stays light and quiet. The page does not try to look futuristic; it looks measured, printed, and deliberate. That restraint is important to the brand because the subject matter is exact tokens, exact values, and structured audio data. The interface never overwhelms that material.

## Colors

Besimple’s palette is small and disciplined. Light surfaces dominate the page. The warm canvas and pale panel fills do most of the framing, while the darkest tone is reserved for the black action button, tiny utility chips, and a few strong value blocks. Orange is the only saturated accent, so it reads as a signal color rather than a decorative wash. Gray tones step down in a clear hierarchy: headline ink, muted explanatory text, soft captions, then border lines and separators.

The page stays in one light palette. Dark fills appear only in compact controls and high-contrast buttons, while orange handles emphasis across labels, benchmark numbers, and pixel-like artwork. There is no separate photographic color layer; the drawn waveform and peach bars use the same restrained accent family as the page artwork. Flat fills and hairline borders do the structural work, so the system never needs gradients or shadows to separate sections.

| token | hex | use |
|---|---|---|
| action | `#FF6533` | Brand fruit, benchmark percentage, section eyebrow, waveform bars, and small accent chips |
| ink | `#252322` | Main headlines, body copy, and most navigation text |
| muted-ink | `#5D5852` | Secondary paragraphs, comparison copy, and subdued labels |
| soft-ink | `#9A9A9A` | Quiet captions, report metadata, and lighter utility text |
| canvas | `#EEECE8` | Main page background and large open fields between sections |
| surface | `#F0EFEB` | Pale panel fills, footer band, and soft UI surfaces |
| surface-raise | `#FAFAFA` | White cards, benchmark blocks, and row backgrounds |
| border | `#D9D7D2` | Card outlines, table rules, and tab separators |
| rule | `#E8E3DF` | Very soft dividers, hairlines, and inset separators |
| control-dark | `#111111` | Primary button fill and other compact dark controls |

## Typography

The site uses three visible families: **N Type 82** for the expressive serif headings, **Suisse Intl** for the neutral body and interface system, and **Applesystem** for tiny utility labels. N Type 82 gives the page its editorial authority. Suisse Intl keeps the system readable, neutral, and calm. Applesystem appears only in small utility text and should stay subordinate, because no designer or vendor credit is supplied for that family in the source material.

N Type 82 is credited to Colophon Foundry. Suisse Intl is credited to Swiss Typefaces. Licensing details are not supplied, so keep implementation notes limited to the provided family credits.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | N Type 82 | 4.5rem | 400 | 0.98 | 0em | Hero claim and other page-opening statements |
| section-display | N Type 82 | 4rem | 400 | 1 | 0em | Large section headings such as the comparison band title |
| article-display | N Type 82 | 3.875rem | 400 | 1 | 0em | Dense report headlines and split-screen article titles |
| card-title | N Type 82 | 1.875rem | 400 | 1.15 | 0em | Large supporting statements inside the report and footer blocks |
| body-lead | Suisse Intl | 1.625rem | 300 | 1.52 | 0em | Intro copy under the hero and the longer comparison paragraphs |
| body | Suisse Intl | 1rem | 400 | 1.5 | 0em | Standard explanatory copy, notes, and supporting text |
| ui | Suisse Intl | 0.875rem | 400 | 1 | 0em | Navigation, buttons, tabs, and short utility labels |
| micro | Suisse Intl | 0.8125rem | 400 | 1 | 0.02em | Section eyebrows, captions, and compact report metadata |
| utility-note | Applesystem | 0.875rem | 400 | 1 | 0em | Tiny utility labels and small footer-style helper text |
| data-mono | System-Uimonospace | 1.25rem | 400 | 1.2 | 0em | Code-like values, exact tokens, and numeric readouts |

The hierarchy works because the serif sizes step cleanly from hero to section to card, while the sans sizes stay compact and understated. Leading is tight on the serif and a little looser on the body copy, so the page reads as one long editorial stack rather than a grid of disconnected modules. Keep letter spacing nearly neutral; the page relies on scale and contrast, not on exaggerated tracking.

## Layout

The page is built as a centered, spacious column with very wide outer margins and a calm, warm background. The hero section leaves a large amount of empty field around the main claim, which makes the content feel expensive and deliberate. A compact top bar sits above it as a thin white strip, with the logo at one end, navigation in the middle, and a dark acquisition button at the far side. That structure repeats the page’s core balance: quiet chrome, strong action.

The first major content block is a two-column hero. The left side holds the eyebrow, title, paragraph, and two actions. The right side holds a white benchmark card with a small label, a large orange percentage, a model name, and a note. That split is the page’s most important layout pattern because it joins editorial language to a concrete result.

Below the hero, the tab row sits low and horizontal, with small pill-like tabs on the left and a separate outlined control on the right. Beneath that, the report content uses stacked bordered rows. Each row is low in height, visually flat, and easy to scan. The orange left label, central structured value, and quiet right-side explanation form a compact data grammar.

The comparison band is wider and more open. It uses three parts: muted left copy, a central waveform illustration, and a right-hand orange-heading explanation. That center graphic bridges the old and new approaches and keeps the section from feeling like a plain two-column essay.

The closing portion brings the page back to a centered call to action above a pale footer-like band. The footer band is broad, lightly inset, and intentionally quiet. On the right, the orange square-wave illustration and green leaf shape add brand character without breaking the page’s calm rhythm. The overall composition stays horizontal, generous, and mostly flat from top to bottom.

## Visual language

Besimple’s visual language is editorial, measured, and technical at the same time. Large serif headings carry the argument; smaller sans text handles explanation and utility. That combination makes the page feel more like a published report than a marketing template. The page also uses a very specific orange: not a gradient system, not a neon product color, just one clear accent that marks the brand fruit, the benchmark result, the section eyebrow, and the waveform graphics.

The other important language is structure. Thin borders, square tabs, white cards, and low-height rows establish a rhythm of exactness. Nothing is heavily shadowed or deeply layered. Flat planes do the work. The benchmark card and the structured rows feel almost like printed slips or measurement sheets, which fits the subject matter well. The footer illustration turns that exactness into something warmer by converting the audio idea into a pixel-like orange wave. That small decorative move keeps the system from becoming sterile.

## Components

### Header bar
- **Anatomy:** Small fruit mark at one side, centered navigation, and a compact dark action button.
- **Surface:** White strip floating over the canvas with a very light border and soft radius.
- **Typography:** `ui` for navigation and button text.
- **Shape:** Tiny corner radii, with the button reading slightly firmer than the nav links.
- **Composition:** Keep the header light and narrow so it never competes with the hero claim.

### Hero claim block
- **Anatomy:** Eyebrow, large serif claim, supporting paragraph, then two actions.
- **Typography:** `micro` for the eyebrow, `hero-display` for the claim, `body-lead` for the paragraph, `ui` for the buttons.
- **Spacing:** Large vertical separation between the claim and the actions; the block needs room to breathe.
- **Visible states:** The primary action is dark and compact; the secondary action is lighter and quieter.
- **Composition:** The block should feel centered even when aligned in the left column of the hero split.

### Benchmark stat card
- **Anatomy:** Small label, oversized orange percentage, model name, and a short explanatory note.
- **Surface:** White card with a clear border and a calm interior.
- **Typography:** The percentage should read as the strongest visual element; supporting lines stay smaller and quieter.
- **Shape:** Slightly rounded corners, but still box-like and restrained.
- **Composition:** This card anchors the hero by translating the page promise into one hard number.

### Structured-value rows
- **Anatomy:** Orange left label, exact value in the middle, short interpretation on the right.
- **Surface:** White strips separated by thin borders.
- **Typography:** `ui` or `body` for the row text; the value itself can move up a size when it needs emphasis.
- **Spacing:** Tight vertical stack, uniform row height, very little wasted space.
- **Visible states:** These rows do not need decorative hover language; their clarity comes from alignment and repetition.

### Comparison band
- **Anatomy:** Muted left essay, central waveform art, orange-right headline with supporting paragraph.
- **Surface:** Same light canvas, with the graphic acting as the center of gravity.
- **Typography:** Left copy stays quieter; the right heading can reintroduce the serif emphasis.
- **Composition:** Keep the waveform centered and let the two text columns frame it like a diagram.
- **Visible states:** The contrast between muted and accent text is the whole point of the section.

### Footer band
- **Anatomy:** Compact call to action, a row of small navigation pills, legal links, and a brand illustration at one end.
- **Surface:** Pale inset band sitting inside the main canvas.
- **Typography:** `ui` for the compact links and `micro` for legal text where needed.
- **Shape:** Small pills, very light corners, and no heavy depth.
- **Composition:** The illustration should live outside the reading path and act as a closing visual signature.

## Responsive behavior

The desktop composition should collapse by stacking the hero card under the opening copy, then letting the tab row, report rows, comparison band, and footer band span the full column width. Serif headings need to reflow cleanly without changing the visual hierarchy, and the narrow buttons should keep their compact padding so the page still feels editorial rather than cramped. On smaller widths, preserve the large vertical gaps but reduce the side margins first, so the page keeps its calm breathing room before it gives up scale. The footer illustration can shrink or shift below the text without changing the reading order.

## Practical implementation guidance

### Preserve
- Keep the serif and sans pairing exactly this way: serif for claims, sans for support.
- Preserve the warm off-white background; it is part of the page’s calm tone.
- Keep orange as the only saturated accent.
- Use thin borders and tiny radii instead of shadows and heavy cards.
- Let whitespace do more work than ornament.

### Avoid
- Avoid blue, purple, or extra accent colors.
- Avoid large gradients, glass effects, or glossy shadows.
- Avoid turning the buttons into rounded capsules; they should stay compact and square-leaning.
- Avoid filling the page with pill badges or decorative chips.
- Avoid overbuilding the report rows; the system is strongest when the structure stays plain.

### Recommended build order
1. Set the canvas, ink, border, and action colors.
2. Build the header bar and the primary/secondary actions.
3. Recreate the hero claim block and the right-side benchmark card.
4. Add the tab row and the structured report rows.
5. Add the comparison band with the waveform illustration.
6. Finish with the closing CTA and footer band.

### Accessibility
- Keep the orange accent readable against the pale surfaces.
- Make the black action button and white text meet contrast needs on every size.
- Preserve clear focus styles on all links, tabs, and buttons.
- Do not rely on color alone for row meaning; the left label, center value, and right explanation must stay distinct by position and spacing.
- Keep line lengths comfortable in the hero and comparison paragraphs so the serif headings do not force awkward wraps.

## Scope note

This guide covers the desktop home hero, benchmark report block, comparison band, and closing footer strip on besimple.ai. It does not include mobile reflow, hover or focus states, motion, loading states, or browser-default form chrome. Spacing and radii use practical rem targets rounded to the site’s 0.125rem step.
