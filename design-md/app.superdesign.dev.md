# How app.superdesign.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.superdesign.dev-design)

Last updated: 2026-08-03

## Captured pages

[![Dark home workspace with centered prompt composer and project tiles](https://pin.fontofweb.com/6128?format=jpg)](https://design.withfudge.com/share/pin-6128)

[Dark home workspace with centered prompt composer and project tiles](https://design.withfudge.com/share/pin-6128)

[![Split launch editor with a left control column and a stark preview stage](https://pin.fontofweb.com/6127?format=jpg)](https://design.withfudge.com/share/pin-6127)

[Split launch editor with a left control column and a stark preview stage](https://design.withfudge.com/share/pin-6127)

## Overview

Superdesign is a dark workshop interface for building pages from prompts, templates, and imported references. The home screen is spare and centered: a small top bar, a concise headline, a large prompt composer, then a row of recent-project cards. The launch screen shifts into a split workspace, with a dense control column on the left and a bright preview stage on the right. That contrast is the brand: operational chrome in near-black grays, then a theatrical generated result that can turn stark, loud, and poster-like.

The design language is not decorative in the shell. It relies on flat surfaces, thin borders, soft rounding, and a narrow gray scale. The expressive part lives in the preview stage, where typography gets oversized, blocks get boxed, and labels can feel like stickers. The system works because the editor stays quiet enough to support that output.

Keep the identity anchored in three things: compact Inter type, dark gray surfaces, and sharp white-on-black contrast. The chrome should feel efficient. The preview should feel authored.

## Colors

The interface is built from a very small gray-scale set. Black is the canvas, deep charcoal separates regions, and off-white is reserved for strong foreground contrast. There is no busy brand palette in the shell; the hierarchy comes from tone steps instead of saturated color.

Use `canvas` for the outer page, `panel` for the main composer and lower cards, `panel-2` and `panel-3` for slightly lifted controls or secondary containers, and `border` for the thin separators that keep the surfaces legible without bright outlines. `text-primary` carries the main labels and headings, while `text-secondary`, `text-subtle`, and `text-muted` create the quieter levels of hierarchy in descriptions, timestamps, and helper text. `surface-inverse` and `text-inverse` define the white preview stage and its dark text, which is the strongest light mode in the system.

The visible relationship between modes matters more than any single swatch. The shell should stay dark and controlled. The preview stage should turn dramatically lighter when the design calls for it, especially on the launch page where the product example sits inside a white frame. The site does not need a rainbow of accent tokens to work; the contrast between black, charcoal, and white already carries the brand.

## Typography

Inter is the only font family supplied in the packet. Licensing is not stated in the packet. The type system is compact, practical, and slightly tight in tracking, which helps the dark surfaces feel crisp rather than heavy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Inter | 1.25rem | 600 | 1.25 | -0.025em | Main page headline and the strongest launch title |
| `page-title` | Inter | 1rem | 600 | 1.25 | -0.011em | Section headings, tool titles, and prominent labels |
| `body` | Inter | 1rem | 400 | 1.5 | -0.011em | Descriptions, helper copy, and project metadata |
| `body-medium` | Inter | 1rem | 500 | 1.5 | -0.011em | Primary buttons, selected chips, and emphasis inside controls |
| `support` | Inter | 0.875rem | 400 | 1.43 | -0.013em | Secondary notes, timestamps, and quieter supporting text |
| `tag` | Inter | 0.75rem | 500 | 1.33 | -0.015em | Small badges, labels, and compact status text |

The hierarchy depends on weight and surface contrast more than on extreme size jumps. The home page headline is modest in size but clear in weight and placement. Button and chip copy sits close to the same scale as body text, which keeps the interface calm. The launch preview, by contrast, can use far heavier visual compression inside the generated composition: large white slab type, condensed labels, and tight boxed copy. That difference is essential. Inter carries the editor; the preview can behave like a graphic poster.

## Layout

The home screen is centered and symmetrical. A compact navigation strip sits at the top, but the main attention lands on the prompt composer. The composer is wide, rounded, and horizontally stable, with its input area occupying most of the block and the submit control pinned to the right edge. Supporting tools live below as a tight row of pill buttons. Recent projects start only after a clear vertical break, which gives the upper prompt area room to act as the primary task surface.

The launch page changes the composition completely. The left side becomes a fixed information column with a page title, a paragraph of explanation, author metadata, a prompt section, and several collapsible rows. The right side becomes a large preview stage that fills the rest of the width. That stage is inset inside a white rounded container, so the interface has a framed gallery feeling instead of a raw app canvas. The generated page inside the frame uses its own internal hierarchy, but the host shell stays dark and understated.

Spacing is generous at the macro level and tight inside controls. The page uses broad separations between major zones, but the interior of each block is compact: short paddings, small chip gaps, and restrained copy stacks. This tension is what makes the interface feel fast. Nothing is overbuilt, yet the preview still has room to read as a finished artifact.

The layout should be treated as two related systems: a command surface for the editor, and an exhibit surface for the generated page. The command surface is vertically stacked and easy to scan. The exhibit surface is the visual punchline.

## Visual language

Superdesign uses contrast as structure. Dark surfaces hold the tool chrome, bright surfaces hold the output, and the border color does the work of separating fields without drawing attention to itself. Shadows are not the main device. Instead, the design depends on surface value, thin outlines, and large enough corner radii to soften the boxy geometry.

The shell language is operational: narrow headers, rounded cards, quiet metadata, and compact chips. The preview language is more aggressive. It can use huge headline type, boxed badges, heavy black-and-white framing, and sticker-like labels that sit at slight angles. That generated language reads as authored and promotional, while the chrome reads as the place where the work happens. The two modes should never blur together. If the shell starts to borrow too much of the preview's drama, the hierarchy collapses.

The smallest details matter. A border on a dark card reads as a boundary, not decoration. A white filled button on black reads as the primary action immediately. A dashed outline around an empty project tile reads as an invitation to start. These are all different visual jobs, but they are all executed with the same restrained material set: charcoal, white, and close gray steps.

## Components

### App header

- **Anatomy:** Left brand mark, workspace name, centered navigation cluster, compact account/credit area on the right.
- **Surface:** Dark page-top strip with text in white and soft gray.
- **Typography:** Small Inter labels with restrained weight; the header never competes with the main prompt.
- **Shape:** Mostly unframed, with small rounded pills around nav and status elements.
- **Composition:** Keep the brand, navigation, and account states on one horizontal axis so the interface feels like a control room rather than a marketing page.
- **Visible states:** The active location uses a subtle dot or underline; inactive items stay quiet.

### Prompt composer

- **Anatomy:** Large rounded input block, placeholder text, tool icons on the left, model selector text, optional mode control, circular submit button on the right.
- **Surface:** Slightly lighter than the page canvas, with a soft charcoal fill and a thin border.
- **Typography:** The placeholder and control labels use the same Inter family but different weights and tones.
- **Shape:** Large rounded corners, with the submit control rendered as a circle.
- **Spacing:** Generous internal padding, then a tight row of controls below the text area.
- **Visible states:** The submit button reads as a bright, high-contrast action; the rest of the row stays subdued.

### Quick action chips

- **Anatomy:** Short pills for actions such as screenshot recreation, importing, or effects.
- **Surface:** Dark filled pills with low contrast against the shell.
- **Typography:** Small semibold Inter labels.
- **Shape:** Full pill corners.
- **Composition:** Keep them grouped in one row under the composer so they read as optional helpers, not competing actions.

### Recent project card

- **Anatomy:** Grid tile with preview thumbnail, title or status line, and a muted subtitle.
- **Surface:** Dark charcoal card, sometimes with a dashed or softer boundary for the empty state.
- **Typography:** Title in readable body weight; supporting line in muted gray.
- **Shape:** Large rounded rectangle.
- **Visible states:** Empty project tiles can be outlined more lightly; populated cards feel slightly more solid and inset.

### Left workspace column

- **Anatomy:** Back navigation, page title, long description, author line, prompt tools, collapsible rows, tag row.
- **Surface:** Continuous dark panel that holds many layers of information without breaking the page.
- **Typography:** Page title in `page-title`, body copy in `body`, small status labels in `support` or `tag`.
- **Spacing:** Tight vertical rhythm with clear gaps between content clusters.
- **Composition:** The column should feel like a briefing sheet, not a nested dashboard.

### Preview stage

- **Anatomy:** White rounded frame containing a full generated page with header block, headline, call-to-action, and supporting cards.
- **Surface:** Bright inverse field inside the dark shell.
- **Typography:** Much larger and bolder than the editor chrome; the preview can use stacked display type and sharp poster-like labels.
- **Shape:** Big rounded outer frame; interior elements can become squared or sticker-like.
- **Visible states:** High-contrast filled buttons and outlined badges are the dominant controls; the stage itself stays clean so the generated content carries the energy.

## Responsive behavior

The dense control column and large preview stage suggest a desktop-first system. On narrower widths, the layout should preserve the order of importance: brand, prompt, quick actions, project access, then the preview. The prompt composer needs to stay readable before any secondary tool row wraps. The preview frame should keep its internal hierarchy intact even if the host shell stacks. The home screen can collapse from a centered wide composition into a single vertical column, but the composer should remain the main anchor.

Text scaling should be conservative. The system depends on compact Inter labels and dense control rows, so oversized mobile type would weaken the workshop feel. Likewise, the preview stage should not lose its frame; it needs clear separation from the dark shell even when stacked.

## Practical implementation guidance

### Preserve

- Keep the shell mostly monochrome and let contrast do the hierarchy work.
- Preserve the wide, centered prompt composer as the home-screen anchor.
- Use large rounded rectangles for major surfaces and pills for short actions.
- Keep Inter compact and slightly tight in tracking.
- Treat the generated preview as a separate visual language from the editor chrome.

### Avoid

- Avoid adding bright brand colors to the chrome when the gray scale already solves the layout.
- Avoid heavy shadows; the design reads better when separation comes from tone and edge.
- Avoid small nested cards inside the control column unless they solve a real information problem.
- Avoid making every chip look active; the interface works because most controls stay quiet.
- Avoid turning the preview into a second dark editor surface; it needs a clear light/dark contrast against the shell.

### Recommended build order

1. Build the dark shell, top bar, and base spacing rhythm.
2. Add the centered prompt composer with its submit control.
3. Add the quick action pill row and recent-project grid.
4. Build the split launch layout with the left control column.
5. Add the white preview frame and the internal generated-page stage.
6. Tune the contrast levels and border tones so the shell remains calm while the preview stays loud.

### Accessibility

- Keep the white-on-black contrast strong in the shell and verify muted gray text remains readable on the actual dark surfaces.
- Give the submit control a clearly distinguishable shape and label, not color alone.
- Ensure the dashed empty-state project card still reads as interactive through text and spacing.
- Keep focus rings visible on pills, header links, and the composer controls.
- Preserve readable line lengths in the left launch column so the description block does not become a single wall of text.

## Scope note

This guide covers the dark home workspace and the split launch/editor view shown in the supplied packet. It does not include mobile navigation, hover or disabled styling, motion rules, alternate themes, or font licensing details beyond what is stated above.
