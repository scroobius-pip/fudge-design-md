# How app.squareup.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.squareup.com-design)

Last updated: 2026-08-03

## Captured pages

[![Wide sign-in layout with centered form and right-hand black panel](https://pin.fontofweb.com/9724?format=jpg)](https://design.withfudge.com/share/pin-9724)

[Wide sign-in layout with centered form and right-hand black panel](https://design.withfudge.com/share/pin-9724)

[![Tall black capability panel with bright active line and embedded screenshot](https://pin.fontofweb.com/9725?format=jpg)](https://design.withfudge.com/share/pin-9725)

[Tall black capability panel with bright active line and embedded screenshot](https://design.withfudge.com/share/pin-9725)

## Overview

Square’s sign-in page is a split-stage gate: a calm white authentication surface on one side and a black brand panel on the other. The white side keeps the task plain and procedural. The black side carries the product story through stacked benefit lines and a floating software screenshot. The page feels serious because it uses very few colors, very little ornament, and a tight rhythm of text, controls, and spacing.

The two halves are intentionally different. The form is centered, sparse, and direct. The dark panel is heavier, denser, and more expressive. The contrast is not only visual; it is also behavioral. One side asks for an account action, the other side explains value. That separation gives the page a clear hierarchy that should stay intact in any rebuild.

The overall language is corporate, restrained, and highly legible. Nothing here tries to be playful. The design depends on black, white, gray, soft corners, and a few carefully sized text roles. Keep the interface calm, keep the brand panel strong, and avoid adding competing accents.

## Colors

The interface palette is narrow by design. White and near-white build the form side, pure black anchors the marketing panel and primary action, and two gray steps handle secondary text. This limited palette is what gives the page its disciplined tone.

| token | value | role |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page background and open white space |
| `canvas-soft` | `#FAFAFA` | Input fill and pale secondary surfaces |
| `ink` | `#101010` | Primary text on white surfaces |
| `ink-strong` | `#000000` | Dark panel fill and strongest text or marks |
| `ink-muted` | `#666666` | Supporting copy, labels, and lighter prompts |
| `ink-faint` | `#808080` | Quiet secondary lines in the dark panel stack |
| `panel-dark` | `#000000` | Full dark story panel |
| `on-dark` | `#FFFFFF` | Active line and text on black surfaces |

The form side should stay almost empty of color. White and near-white are enough to keep the controls readable without turning them into cards. The dark panel should remain a pure black field, not a tinted surface. That black field is what allows the gray benefit lines to recede until one line turns white and takes focus.

The screenshot card inside the dark panel may show many colors because it is real product imagery, but those colors should remain inside the picture. They are not page tokens. The page itself should not borrow from that photographic palette. The only dependable UI colors are the neutral steps above.

The relationship between light, dark, and image content is simple: light surfaces support input and navigation, dark surfaces support brand narrative, and the image sits between them as proof. If future work adds any accent color, it should stay subordinate to that neutral structure.

## Typography

The page uses three material families from the packet: **Square Sans Vf** for the interface and the large black-panel voice, **Cash Sans** only for small 16px utility text, and **Applesystem** as a system fallback. The dominant face is Square Sans Vf. That is the family that carries both the 32px sign-in heading and the larger 32.634px panel line. Cash Sans is not the display voice here; it stays in the small supportive role it actually occupies.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Square Sans Vf | 2rem | 600 | 1.25 | 0em | The sign-in heading and other page-level headings |
| `brand-display` | Square Sans Vf | 2.04rem | 600 | 1.6 | 0em | The white active line and the large stacked panel claims |
| `body` | Square Sans Vf | 1rem | 400 | 1.5 | 0em | Field text, buttons, and standard supporting copy |
| `helper` | Square Sans Vf | 0.875rem | 400 | 1.43 | 0em | Small prompts, underlines, and compact helper text |
| `button` | Square Sans Vf | 1rem | 600 | 1.25 | 0em | Primary and secondary actions |
| `cash-note` | Cash Sans | 1rem | 400 | 1.5 | 0em | Small utility text and minor promotional copy |
| `system-fallback` | Applesystem | 1rem | 400 | 1.5 | 0em | Platform fallback when the main face is unavailable |

The visible scale is compact. Most interface text sits at 16px, while helper text drops to 14px. The heading on the sign-in side is a concise 32px semibold line. The black panel’s benefit line is slightly larger and softer in rhythm, which lets it feel like a voice rather than a label. That voice should stay Square Sans Vf. The image does not support a separate display family for the dark panel.

Weight carries a lot of the hierarchy. The heading is semibold, the main field text is regular, the active panel line is semibold and white, and the muted panel lines are regular and gray. Cash Sans should remain reserved for the smaller 16px utility text that appears in the supporting areas. Do not move it into the large black-panel claims, and do not use it for the main sign-in heading.

## Layout

The page is organized as two uneven columns. The left column is the form. It starts with a small Square mark at the top-left, then a centered sign-in block with a heading, a short sign-up prompt, one input, one primary action, a separator, and one secondary passkey action. The right column is the brand story. It contains a tall black panel with a stacked set of benefit lines and a floating product screenshot, then a short Square Plus teaser below it.

The asymmetry is important. The form side is open and quiet, with enough empty space around the controls to make the task feel safe and direct. The black side is denser and more intentional, with a strong inset that keeps the benefit stack compact. The page should not be balanced like a brochure spread. One side is for action, the other side is for promise.

Spacing follows a small number of repeated steps. The packet’s 24px, 48px, and 64px rhythms are visible in the dark panel and in the image card placement. The form shell uses the 25px page gutter from the packet, which reads as a slightly tighter frame around the centered login area. That mix keeps the page from feeling either cramped or airy. It feels controlled.

The floating screenshot sits inside the black panel rather than breaking out of it. Its shadow and small radius make it feel like a lifted object, but it still belongs to the black field. The teaser under the panel stays narrow and subordinate. It should extend the value message without competing with the sign-in task or turning the page into a second marketing landing page.

## Visual language

The page’s visual language is built from contrast, repetition, and proof. The white form says “enter here” with almost no ornament. The black panel says “this is what you get” by stacking short claims and showing a real interface screenshot. That screenshot matters because it keeps the dark panel from becoming abstract brand theater. It grounds the page in a recognizable product scene.

The black-panel text treatment is the strongest signature. Multiple benefit lines are stacked in one column, most of them dim gray, with one line promoted to white. That single bright line creates emphasis without movement or color. It also makes the panel feel current, as if one capability is being singled out at a time. That is a useful pattern to preserve.

Shape is restrained. The controls use 6px corners, not large pill forms. The screenshot card uses the same soft radius and then rises above the black field with a deep shadow. There are no gradients, glow effects, or decorative icons competing for attention. The black-and-white split is the decoration. The rest of the page simply supports that split.

The strongest design principle here is “quiet utility with one hard edge.” The hard edge is the black panel and the primary button. Everything else should stay soft enough to keep the page trustworthy and easy to scan.

## Components

### Shell

The shell is a two-column page with a white action field on one side and a black brand field on the other. The left side feels centered and procedural. The right side feels fixed and compact. Keep those voices separate. Do not average them into one generic account page.

### Logo and top chrome

The Square mark sits small and unobtrusive in the upper-left area. It is there for orientation, not persuasion. The top chrome should stay minimal so the page can move quickly into the sign-in task. The logo should not grow into a large header or a second title block.

### Sign-in form

- **Anatomy:** Heading, short sign-up prompt, input, primary action, separator, secondary passkey action.
- **Typography:** `hero-display` for the heading, `body` for field text and buttons, `helper` for the prompt.
- **Surface:** White canvas with pale control fills.
- **Shape:** 6px corners on the field and buttons.
- **Spacing:** Tight vertical rhythm with one clear gap between the primary and secondary actions.
- **Visible state:** The input reads as editable through a pale border and flat fill, not through ornament.

The form should remain extremely plain. That plainness is a strength. It keeps the page anchored in account access rather than in marketing. The sign-up link is small and underlined, so it stays discoverable without competing with the field or the main action.

### Primary button

- **Surface:** Solid black fill with white label.
- **Typography:** `button`.
- **Shape:** 6px corners.
- **Composition:** Full-width control with centered label and no extra icon treatment.
- **Role:** The strongest action on the page.

This button should remain the most assertive element in the form. It should not gain gradients, glow, or extra shadow. The black fill and white label already provide enough strength. Anything more would disturb the hierarchy.

### Secondary passkey button

- **Surface:** Pale gray fill.
- **Typography:** `button`.
- **Shape:** 6px corners.
- **Composition:** Full-width utility control with a small icon and centered text.
- **Visible state:** Lower emphasis than the primary button, but still clearly interactive.

The passkey action is important because it offers a second path. Visually, though, it must stay secondary. The pale fill and softer contrast keep the primary button on top of the stack.

### Marketing panel

- **Anatomy:** Tall stack of benefit lines plus a floating product screenshot.
- **Typography:** `brand-display` for the large stacked lines, with `cash-note` only for small utility text.
- **Surface:** Pure black.
- **Text treatment:** Most lines sit in muted gray; one line turns white.
- **Composition:** Left-aligned text column with the screenshot offset to the right.

This is the page’s voice of promise. It should feel like a compressed product reel. The stack of lines gives the panel a fast cadence, while the screenshot gives it proof. The panel should stay dense and editorial rather than becoming a poster or a card gallery.

### Floating product screenshot

- **Surface:** Light interface inside a card.
- **Shape:** 6px corners.
- **Depth:** Strong black shadow to separate it from the dark field.
- **Role:** Real product proof, not decoration.

The screenshot should remain crisp and legible. Its shadow is there to keep it readable against black, not to decorate it. The card should feel like it belongs to the panel, not like a detached asset.

### Square Plus teaser

- **Anatomy:** Short heading, one line of supporting copy, one pale button.
- **Typography:** `hero-display` for the heading, `body` for the supporting line, `button` for the action.
- **Surface:** White background with quiet contrast.
- **Role:** Secondary conversion support that stays below the sign-in task.

This block should feel like a practical extension of the black-panel message. It is not a second hero. It is a short support area that keeps the interface grounded in what happens after sign-in.

## Responsive behavior

When the page narrows, the two-voice structure should remain clear. The sign-in form should stay first in reading order, and the black panel should remain visually distinct rather than collapsing into generic stacked content. The stacked benefit lines should keep their one-promoted-line rhythm even if the type scale drops.

The screenshot should stay above or beside the teaser only if there is enough room to keep both legible. If the viewport becomes tight, reduce the panel’s text scale before reducing its role. The dark panel is a core part of the page identity. Shrinking it too aggressively would erase the brand message.

The form controls should continue to read as full-width, high-clarity actions. Their 6px corners and pale fills matter more than any fixed desktop offset. The Square mark should stay modest rather than turning into a large header. On smaller screens, the layout should simplify, but the hierarchy should not.

## Practical implementation guidance

### Preserve

- Keep the black-and-white split as the core idea.
- Keep the centered, procedural feel of the sign-in form.
- Keep one bright line in the black panel and leave the rest muted.
- Keep 6px corners on fields, buttons, and the screenshot card.
- Keep the screenshot visibly real and embedded in the dark panel.
- Keep the compact 24px, 48px, 64px rhythm and the tighter 25px frame around the form shell.

### Avoid

- Avoid adding accent colors that compete with the neutral hierarchy.
- Avoid turning the form into a card stack with heavy shadows.
- Avoid gradients, glow effects, or illustration layers.
- Avoid giving every control the same weight; the primary button must stay strongest.
- Avoid splitting the benefit list into multiple columns or scattered badges.
- Avoid widening the radius beyond the soft 6px feel the page already uses.

### Recommended build order

1. Set the white canvas and black panel contrast.
2. Establish the Square Sans Vf hierarchy for the form, the panel stack, and the teaser.
3. Add the primary and secondary actions with the correct contrast ladder.
4. Build the black marketing panel and its stacked benefit lines.
5. Place the screenshot card with the right shadow and radius.
6. Add the Square Plus teaser below the panel.
7. Check that spacing, alignment, and hierarchy still read cleanly when the page narrows.

### Accessibility

- Keep the primary button and input field highly legible against white.
- Make sure the muted lines on black still maintain usable contrast, especially the white active line.
- Keep labels and helper text visible, not placeholder-only.
- Give the screenshot meaningful alternative text that explains the interface it shows.
- Preserve visible keyboard focus on every actionable control, especially the sign-in field, Continue button, and passkey button.
- Do not rely on color alone to mark the active line in the black panel; weight and brightness should change together.

## Scope note

This guide covers the desktop login page: the left sign-in form, the right black brand panel, the floating product card, and the Square Plus teaser beneath it. The packet rounds spacing to a 0.25rem step. Mobile breakpoints, hover states, keyboard focus styling, loading and error states, animation, and the post-login dashboard are outside this guide.
