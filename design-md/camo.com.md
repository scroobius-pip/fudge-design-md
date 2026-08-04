# How camo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/camo.com-design)

Last updated: 2026-08-04

## Captured pages

[![Hero with a translucent top nav pill, centered video headline, and gold download action](https://pin.fontofweb.com/7176?format=jpg)](https://design.withfudge.com/share/pin-7176)

[Hero with a translucent top nav pill, centered video headline, and gold download action](https://design.withfudge.com/share/pin-7176)

[![Use-cases section with a framed desk video, lavender tabs, and centered explanatory copy](https://pin.fontofweb.com/7178?format=jpg)](https://design.withfudge.com/share/pin-7178)

[Use-cases section with a framed desk video, lavender tabs, and centered explanatory copy](https://design.withfudge.com/share/pin-7178)

[![Centered studio demo with a large editor screenshot and app badges beneath](https://pin.fontofweb.com/7177?format=jpg)](https://design.withfudge.com/share/pin-7177)

[Centered studio demo with a large editor screenshot and app badges beneath](https://design.withfudge.com/share/pin-7177)

## Overview

Camo Studio’s `/studio` page is a dark, product-forward marketing system built around one promise: the camera feed and the software interface are the proof. The page does not depend on ornamental illustration or a bright landing-page shell. It uses a deep navy canvas, white Inter type, gold action, and lavender chapter markers to frame large media scenes and a full-width editor screenshot. The result feels controlled and technical, but still friendly enough for general consumer software.

The structure is simple and repeatable. A rounded, translucent navigation pill sits over the dark field. The hero combines a short label, a large two-line statement, supporting copy, and two compact pills. Below that, the page moves into a use-cases band with a framed video still, centered tabs, and a short paragraph. Farther down, a large desktop app screenshot takes over the width of the page and is supported by app badges. Each section stays in the same visual family: dark background, bright text, rounded shells, and a small amount of warm gold.

## Colors

Camo’s palette is intentionally narrow. The page base is dark, not light. White appears in headlines, button faces, and product UI chrome. Gold is the only warm accent, and lavender handles navigation state, section labels, and subtle emphasis. The page also needs true black for embedded interface chrome and image interiors, while cool pale blue carries secondary text and small supporting notes.

| token | hex | use |
|---|---|---|
| `action` | `#F7BE38` | Warm accent for upgrade text, highlighted words, and high-attention emphasis |
| `accent` | `#A7A2F8` | Eyebrow labels, tab text, and gentle chapter markers on the dark canvas |
| `accent-strong` | `#9992F7` | Active underline, stronger lavender state, and small focus-like emphasis |
| `canvas` | `#09111F` | Main page background, section foundation, and dark pill surfaces |
| `ink` | `#FFFFFF` | Major headings, nav text, and bright copy on the dark background |
| `ink-soft` | `#DCE2F4` | Supporting paragraphs, captions, and quiet explanatory copy |
| `surface-ink` | `#000000` | True-dark media interior, button text, and dark interface chrome inside screenshots |
| `surface-light` | `#FFFFFF` | White button face, bright logo chips, and high-contrast small UI surfaces |

The relationship between modes is tight rather than expansive. The dark canvas dominates the page, so the lighter surfaces need to feel intentional and small. White is not a theme of its own; it is a utility for contrast. Gold is the only color that breaks the cool range, and it should stay concentrated in calls to action and key moments, never spread across the page. Lavender is structural, not decorative: it marks sections, active tabs, and inline highlights. Photographic content sits inside dark overlays and rounded frames, so the images feel like part of the system instead of a separate visual layer.

## Typography

Inter is the only family in the supplied material. It carries the whole page with a compact range of sizes and two clear weights: 400 for body text and 600 for headings, tabs, and button copy. The page relies on scale and tight rhythm more than on multiple families. Large headings feel dense and direct; supporting text opens up just enough to stay readable against the dark field.

Licensing for Inter is not supplied here; confirm reuse separately before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Inter | 3.75rem | 600 | 1 | -0.011em | Hero statement and other top-level page claims |
| `section-display` | Inter | 2.25rem | 600 | 1.111 | -0.011em | Section headings such as the use-cases lead and feature titles |
| `eyebrow` | Inter | 1.125rem | 600 | 1.167 | 0em | Small lavender labels above the main heading |
| `body` | Inter | 1rem | 400 | 1.5 | -0.011em | Paragraph copy under headings and in section bodies |
| `supporting` | Inter | 0.9rem | 400 | 1.556 | -0.011em | Secondary notes, helper lines, and short captions |
| `button` | Inter | 0.875rem | 600 | 1.5 | 0em | Button labels, pill actions, and tab text |
| `legal` | Inter | 0.75rem | 400 | 1.5 | 0em | Small supporting copy and fine-print style notes |

The page’s typography stays disciplined. The hero uses a large, heavy headline with little vertical slack, so the statement lands as one block instead of a loose paragraph. The use-cases band keeps the same family but reduces scale and weight, which lets the video frame carry more visual mass. Buttons and tabs are compact and semibold, with enough weight to read as interactive even on a dark background. The page does not need ornate letterforms or alternate families; the visual interest comes from placement, contrast, and the size jump between display text and utility text.

## Layout

The layout is centered and wide, with large side gutters and enough vertical room for each section to breathe. The page does not fill every inch with content. Instead, it places a narrow text column above or beside a broad media frame, then leaves generous dark space around both. That empty space is part of the composition; it makes the media feel premium and gives the headings room to breathe.

The hero is the most layered part of the page. A translucent pill nav sits near the top, then the main heading and supporting copy occupy the center. The primary message is short and punchy, and the two CTA pills sit immediately below it. Behind or below the text, the media frame stretches wide and keeps the story grounded in a real camera scene. The frame is not generic decoration; it is the product context.

The use-cases section changes the rhythm without changing the system. The section starts with a lavender eyebrow and a large centered heading, followed by a short line of body copy. The media below is a large desk scene inside a rounded container, and the tab rail sits beneath it with a thin active underline. This creates a clear hierarchy: label, title, proof image, tab state, then explanatory text. The line lengths remain short enough to read quickly against the dark background.

The product-screenshot section uses a similar center alignment but lets the software interface dominate. The screenshot is wide, bordered by dark chrome, and the row of app badges beneath it extends the narrative beyond the Camo app itself. That row helps the page speak to compatibility and workflow without adding another explanatory block. On a narrow layout, this section should stack in the same order: heading, paragraph, screenshot, then badges.

## Visual language

The visual language is “show the camera, then show the interface.” Camo is not selling an abstract concept. It is showing the person on camera, the camera setup, the editing or control surface, and the surrounding ecosystem. The design therefore keeps both photography and software screenshots crisp, framed, and large. Rounded corners soften the heavy dark field, but they do not make the page feel playful. They make the media feel polished.

Gold is used sparingly and with confidence. It appears as a call-to-action color and as a small highlight against the navy background. Lavender handles the structural accents: page labels, active tab state, and small interface emphasis. The cool blue-white text family keeps the page calm and readable, especially in the centered copy blocks. Black appears inside the product screenshots and in some of the interface chrome, where the page needs a real dark interior rather than a tinted navy approximation.

The page also uses dark overlays to anchor imagery. Video stills and screenshots are not left floating on a neutral field; they are embedded into dark shells that match the surrounding canvas. This keeps the composition coherent and prevents the media from looking pasted on. The result is a system that can support several kinds of proof—people, desks, app screens, and compatibility badges—without losing a single visual grammar.

## Components

### Header / nav pill

- **Anatomy:** Camo wordmark on the left, centered page links, and compact right-side links.
- **Surface:** Dark translucent pill against the canvas.
- **Shape:** Wide pill geometry with soft rounding, not a sharp bar.
- **Typography:** Small semibold Inter, sized to stay subordinate to the hero.
- **State:** The current page link sits in the middle and is reinforced with lavender glow or a small underline-like treatment.

### Hero statement

- **Anatomy:** Lavender eyebrow, two-line headline, short supporting paragraph, and a pair of CTAs.
- **Hierarchy:** The headline is the main event; the paragraph stays compact and controlled.
- **Spacing:** Tight vertical grouping between label, heading, and body, with slightly more room before the buttons.
- **Tone:** Direct and product-led, with no long setup before the media appears.

### Call-to-action pills

- **Primary pill:** White surface, black text, compact semibold label, and a rounded capsule shape.
- **Secondary pill:** Dark surface with gold text, matching the page’s warm accent.
- **Composition:** The two buttons sit side by side and read as a paired decision rather than separate ads.
- **State language:** The pills should remain visually crisp and should not rely on heavy shadows or multiple warm tones.

### Use-cases band

- **Anatomy:** Section label, large centered heading, short explanatory copy, framed desk video, tab rail, and a centered paragraph below.
- **Tabs:** Inactive items are quiet; the active tab uses lavender text and a stronger lavender underline.
- **Media frame:** Large rounded rectangle, dark border logic, and a photographic interior that fills the width.
- **Rhythm:** The tab row adds order after the media, which keeps the section from becoming just another hero.

### Product screenshot block

- **Anatomy:** Large centered heading, supporting line, desktop app screenshot, and a row of compatibility badges.
- **Surface:** The screenshot sits inside a dark shell so the app chrome and the page background feel related.
- **Typography:** The heading is still bold and compact, but it is slightly less dominant than the hero.
- **Hierarchy:** The screenshot is the proof; the badges extend the proof into daily use.

### Floating help chip

- **Anatomy:** Small rounded chip in the lower-right corner with a purple/lavender fill.
- **Role:** Light utility affordance that stays out of the main reading path.
- **Shape:** Fully pill-like with a small icon and compact label.
- **Treatment:** It should feel present but not urgent.

## Responsive behavior

The desktop composition depends on wide gutters and centered media, so narrower layouts should preserve the same reading order while reducing the side pressure. The hero should stack text above media rather than compressing the headline into a cramped side column. The use-cases section should keep the tab rail visible and legible, even if the media frame becomes shorter or the tabs wrap. The screenshot block should remain large enough to read as an interface, not as a thumbnail.

On smaller screens, the most important move is to keep the hierarchy intact: label, heading, body, media, then supporting utilities. The gold and lavender accents should stay small and controlled, because they work best when the background still does most of the visual work. If the CTAs need to stack, the white action should remain the stronger choice and the gold-accented alternative should remain clearly secondary.

## Practical implementation guidance

### Preserve

- Keep the page dark first and bright second. The canvas should stay close to the navy base across the full page.
- Preserve the large, centered media treatment. The video stills and screenshots are the product proof.
- Keep Inter’s scale tight: 60px for the hero, 36px for section titles, 16px for most body copy, and 14px or 12px only for utility text.
- Use gold for attention and lavender for structure. That separation makes the page feel deliberate.
- Keep corners rounded but not sugary. The 24px panel radius and the pill controls do the heavy lifting.

### Avoid

- Avoid adding a bright light-mode section just to vary the page. The dark field is the identity.
- Avoid multi-accent rainbow treatment. Gold and lavender are enough.
- Avoid stacking too many small cards around the screenshot. The media itself should remain the hero.
- Avoid oversized body copy. The hierarchy works because the headlines are much stronger than the surrounding text.
- Avoid heavy drop shadows or glossy effects. The page already has enough depth from dark shells and framed media.

### Recommended build order

1. Establish the dark canvas, white text, gold action, and lavender state colors.
2. Build the centered Inter scale and the pill-shaped nav and CTA controls.
3. Create the hero shell with the large media frame and the short intro block.
4. Add the use-cases section with the lavender eyebrow and active tab rail.
5. Add the screenshot-led product section and the compatibility badge row.
6. Finish with the floating help chip and any small utility surfaces.

### Accessibility

- Keep contrast strong on every dark surface, especially for the white headline and the cool secondary copy.
- Make the active tab state visible without color alone; the underline is part of the signal.
- Keep button labels short and high-contrast so the pill shapes remain readable at a glance.
- Give the video stills and screenshots descriptive alt text that names the interface state or the scene shown.
- If the help chip is interactive, it should retain a visible focus ring that is distinct from the lavender fill.

## Scope note

This guide covers Camo’s `/studio` desktop marketing page: the hero, use-cases band, product screenshot section, header pill, and floating help affordance. Alternate site pages, smaller-screen specifics, motion, hover transitions, and detailed interaction states are not included.
