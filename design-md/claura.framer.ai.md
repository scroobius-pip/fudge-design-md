# How claura.framer.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/claura.framer.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Split hero with floral art card beside a rounded intake form](https://pin.fontofweb.com/8122?format=jpg)](https://design.withfudge.com/share/pin-8122)

[Split hero with floral art card beside a rounded intake form](https://design.withfudge.com/share/pin-8122)

[![Centered brand hero with dot-grid flower and multi-column footer](https://pin.fontofweb.com/8121?format=jpg)](https://design.withfudge.com/share/pin-8121)

[Centered brand hero with dot-grid flower and multi-column footer](https://design.withfudge.com/share/pin-8121)

[![Tall serif hero with a single image panel and quiet partner row](https://pin.fontofweb.com/8120?format=jpg)](https://design.withfudge.com/share/pin-8120)

[Tall serif hero with a single image panel and quiet partner row](https://design.withfudge.com/share/pin-8120)

## Overview

Claura feels like a calm studio landing page built around one warm visual temperature. The page uses a cream canvas, dark espresso text, and a single brown action color, then lets large serif headlines and rounded panels carry the brand. The tone is polished but not glossy, with enough softness in the surfaces to keep the page approachable.

The layout alternates between two modes. One mode is a split hero: a tall art panel on one side and a rounded intake form on the other. The other mode is a centered editorial stack with a headline, a short support line, a small icon row, a floral image, a brand strip, and a quiet footer. That contrast gives the site rhythm without needing extra color or heavy decoration.

The system is built for restraint. One display family sets the mood, one sans-serif family handles the functional text, and the interface stays inside a narrow cream-and-brown range. The bright visual interest comes from the floral artwork and its gradient treatment, not from a busy UI palette.

## Colors

Claura is mostly a one-family neutral system. The canvas is a warm off-white, the surface tones step slightly deeper for forms and cards, and the border sits only a shade lower so it separates fields without drawing attention. Ink and action are the same espresso brown, which makes the brand feel unified: headings, links, and the primary button all belong to one visual voice. Muted ink is a stone taupe used for helper text, labels, and secondary lines so those details stay present but never compete with the headline or the call to action.

The page does not depend on chromatic interface accents. Instead, hierarchy comes from lightness, shape, and type scale. `paper` provides the pure white needed for button text and the brightest label moments. `surface-soft` works well for chips, pills, and gentle UI fills. `surface` is the main field for cards and form blocks. `border` is close enough to the surface tone to read as structure rather than decoration. The whole range should stay warm and low-contrast so the floral imagery can bring the only vivid color into the composition.

## Typography

False sets the emotional register. It is the display face for the big statements and the wordmark-sized moments, and it needs room because the letters are wide and elegant even at modest weights. Geist handles the practical layer: form labels, body copy, buttons, helper lines, and small supporting text. That split keeps the page readable while preserving the editorial feel. The tiny System setting may appear only in utility copy; the visible hierarchy should still rely on False and Geist.

Licensing should be confirmed separately before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | False | 4.375rem | 400 | 1.1 | -0.05em | Large hero lines and central brand statements |
| section-display | False | 3.5rem | 400 | 1.1 | -0.06em | Secondary display headlines and lower-page statements |
| lead | Geist | 1.25rem | 400 | 1.5 | -0.05em | Short supporting lines under the main headline |
| body | Geist | 1rem | 400 | 1.5 | -0.04em | Paragraph copy, footer text, and long-form support lines |
| body-medium | Geist | 1rem | 500 | 1.5 | -0.04em | Button labels and emphasized utility copy |
| label | Geist | 0.875rem | 500 | 1.5 | -0.04em | Form labels, chip labels, and compact navigation text |
| micro | System | 0.75rem | 400 | 1.2 | 0em | Tiny legal or utility text when the browser default is left in place |

The type scale should stay compact and disciplined. Display text is large but not heavy; the impression comes from scale, contrast, and tracking rather than bold weight. Supporting copy sits around 16px to 20px with comfortable leading, which lets the page breathe even when the content is dense. Labels remain small and firm so the form section feels structured. The whole hierarchy works because the line lengths are short and the page gives each block enough open cream space.

## Layout

The page is built on a soft centered frame with generous outer margins and a wide inner gutter. The top navigation is simple and low-profile: links at one side, the wordmark in the middle, and a dark rounded button at the far end. That top strip should feel like a quiet header above a large editorial scene, not a control bar.

The opening section uses a split composition. One column holds the floral media panel, which is tall, rounded, and visually dense. The other column holds the intake form, which is lighter in tone and broken into stacked fields, chip-like selectors, and one large rounded submit button. The two sides depend on contrast in texture and density: the art panel is expressive and atmospheric, while the form panel is plain and organized. Their shared rounded corners make them feel related even though they serve different jobs.

The centered version of the hero shifts the composition from side-by-side to vertical stacking. A small trust line sits above the main statement, then a short supporting line, then a compact icon row, then the floral panel, then a logo strip. That order matters because it moves from identity to proof to image to partners without interruption. The footer stays in the same warm family and spreads into columns with even spacing, so the page ends with structure rather than visual noise.

Spacing should remain generous. The page uses open vertical gaps instead of hard separators, and the rounded geometry is a major part of the rhythm. The large media card can hold the strongest radius, while the form fields and chips stay tighter and more functional. The layout feels expensive because the components are spaced with care, not because they are heavily ornamented.

## Visual language

Claura’s visual language is soft, warm, and art-directed. The strongest visual element is the floral imagery: a blurred flower-like form with orange, coral, rose, teal, and cream tones floating inside a rounded rectangle. In one treatment, the art sits behind a dotted overlay that makes the panel feel constructed rather than purely photographic. That overlay turns a decorative image into a branded stage.

The interface chrome stays minimal. Pills, chips, and fields are rounded, but the corners are not playful; they are smooth and mature. The page avoids hard edges, dense outlines, and noisy shadows. Instead, it leans on large blank areas and tonal steps between cream surfaces. Brown type against cream panels gives the design a quiet, print-like quality.

Because the palette is restrained, shape does a lot of work. The 12px radius suits small fields and labels, the 28px radius suits large cards and framed panels, and the pill forms belong on buttons and selected controls. Those three levels are enough to create hierarchy. The result is a brand that feels like a boutique agency: warm, composed, and visually controlled, with one expressive image moment carrying most of the emotion.

## Components

### Top navigation

The header is spare. It uses short text links, a centered wordmark, and a dark rounded call to action. The typography is small and firm, so the header reads as structure rather than a separate section. The button should keep the same espresso fill used elsewhere so the page has one consistent action color. The header never needs heavy borders or a large background block; the cream canvas is already quiet enough.

### Split hero media panel

The media panel is the most dramatic component on the page. It is tall, rounded, and image-led, with the flower or gradient artwork filling almost the entire frame. The content inside the panel stays simple: a small trust line near the top, a large serif statement in the center, and a compact brand strip near the bottom. The typography is large, but the composition remains calm because the image provides the atmosphere. This panel should feel like an art board rather than a product screenshot.

### Intake form

The form uses stacked rounded fields with soft fills and minimal borders. The labels are concise, the fields are generous, and the choice chips sit in rows that feel almost like tags. The selected chip is darker and more grounded, while the unselected chips stay pale. The submit button is the strongest control on the page: wide, pill-shaped, dark brown, and centered enough to be unmistakable. The helper text below it stays small and quiet.

### Centered brand block

The centered hero block is all about hierarchy. A small trust line appears first, then the main serif statement, then a short explanation, then a narrow icon row, then the floral image, then the logo rail. The spacing between these pieces is as important as the pieces themselves. The logo row should be muted and evenly spaced so it supports the headline rather than interrupting it. This component defines the page’s editorial pacing.

### Footer

The footer keeps the same warm tone as the rest of the page. It is organized into several tidy columns with small headings and restrained link lists, followed by a thin legal line and a faint credit row. The footer should not become dark or dense. Its job is to close the page with order, not to create a separate visual chapter. The text remains low-contrast, but still readable, and the column rhythm should feel measured and calm.

## Responsive behavior

On narrower screens, the layout should move from wide, side-by-side compositions to a stacked reading order. The hero image, form, centered statement, logo strip, and footer need to remain in that narrative sequence. The display type should scale down carefully so the line breaks stay elegant and do not force awkward wraps. Chips and buttons should remain comfortably tappable, and the form fields need enough height to feel like real inputs rather than small capsules. The same warm palette should hold; only the proportions change.

## Practical implementation guidance

### Preserve

- Keep the canvas warm and cream rather than stark white.
- Let False own the large headline moments; do not replace it with a generic sans display face.
- Keep the primary action dark brown with white text so the page has one clear interaction color.
- Preserve the rounded field stack and the large art panel; those shapes define the brand.
- Leave the UI mostly flat and let the floral image carry the expressive color.

### Avoid

- Avoid bright blue interface accents, heavy shadows, and sharp card edges.
- Avoid splitting the page into a dense dashboard grid.
- Avoid mixing extra fonts into the body hierarchy.
- Avoid tiny pills or cramped fields that would make the form feel technical.
- Avoid over-decorating the footer; the page should end quietly.

### Recommended build order

1. Set the cream canvas, surface tones, border tone, and espresso action color.
2. Establish the False display sizes and the Geist body, label, and button styles.
3. Build the top navigation and the rounded primary button.
4. Build the split hero with the floral media panel and the intake form.
5. Add the centered brand block, logo row, and footer columns.
6. Finish the chip states, helper text, and spacing refinements.

### Accessibility

- Keep the brown text and button label readable against the pale surfaces.
- Make the submit button and chips large enough to support clear pointer and keyboard use.
- Give every input a visible label; placeholders should not carry the whole meaning.
- Keep a visible focus ring that fits the quiet palette but still stands out.
- Treat the floral artwork as decorative when it does not add useful information, so it does not compete with the form or the heading.

## Scope note

This guide covers the desktop landing page surfaces shown here: the top navigation, the split hero, the centered brand section, the logo row, the intake form, and the footer. Smaller-screen stacking, hover and focus details, motion, validation, and alternate content states are not included.
