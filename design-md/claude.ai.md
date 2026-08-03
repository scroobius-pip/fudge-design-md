# How claude.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/claude.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Dark desktop login with serif headline and tall image column](https://pin.fontofweb.com/9549?format=jpg)](https://design.withfudge.com/share/pin-9549)

[Dark desktop login with serif headline and tall image column](https://design.withfudge.com/share/pin-9549)

[![Narrow login stack with oversized headline and compact sign-in card](https://pin.fontofweb.com/9266?format=jpg)](https://design.withfudge.com/share/pin-9266)

[Narrow login stack with oversized headline and compact sign-in card](https://design.withfudge.com/share/pin-9266)

[![Light swatch board showing forest, lime, slate, and red rows](https://pin.fontofweb.com/8942?format=jpg)](https://design.withfudge.com/share/pin-8942)

[Light swatch board showing forest, lime, slate, and red rows](https://design.withfudge.com/share/pin-8942)

[![Workspace editor with green primary action and right sidebar](https://pin.fontofweb.com/8941?format=jpg)](https://design.withfudge.com/share/pin-8941)

[Workspace editor with green primary action and right sidebar](https://design.withfudge.com/share/pin-8941)

[![Chat canvas with warning banners, chips, and composer at bottom](https://pin.fontofweb.com/8940?format=jpg)](https://design.withfudge.com/share/pin-8940)

[Chat canvas with warning banners, chips, and composer at bottom](https://design.withfudge.com/share/pin-8940)

## Overview

Claude.ai uses two tightly related surface families. The dark family handles the login and first-contact pages: near-black backgrounds, soft white type, rounded cards, and one strong blue action color. The light family handles the workspace, design-system, and palette pages: warm paper backgrounds, black ink, pale dividers, and compact controls with more air around them. The product stays coherent because the same serif-and-sans typographic split runs through both modes. The mood changes, but the structure does not.

The design feels warm, restrained, and editorial. Large serif headlines carry the emotional weight. Sans-serif body copy and labels keep the interface practical. Boxes are rounded, but not playful; borders stay present, but not loud; color is disciplined, but not sterile. The result is a product that reads as calm and intentional instead of crowded or mechanical.

## Colors

Claude.ai relies on a small set of roles rather than a broad decorative palette. The dark shell uses `#0F0C08` and `#141413` for depth, with text lifted in `#FFFFFF` or `#F8F8F6`. The lighter workspace shifts to `#FAF9F5`, `#FFFFFF`, `#F2F0EA`, and `#ECEAE4`, which keeps the page paper-like without turning it stark. Borders sit in a warm gray range: `#DEDCD1` for lighter surfaces and `#30302E` when the panel is dark.

Blue is the main action color. `#2C84DB` is the primary button and link tone, `#256ABF` is the deeper pressed or hover color, and `#74ABE2` is the softer supporting tone. Green appears as a success and positive-state color in the palette board and workspace actions; `#4A7B00` is the strong green, with `#F2F8EA` as its quiet surface tint. Red carries deletion and caution; `#B93535` is the direct alert color, with `#F8ECEC` as the pale supporting background.

Warm accent colors keep the system from feeling cold. `#D97757` and `#C6613F` sit in the coral range and work for small emphasis, tags, or alternate accent moments. `#FFC130` is the strongest warning highlight, while `#FAF8F4` keeps warning surfaces soft rather than harsh. The main rule is simple: one dominant text color, one dominant action color, and the rest reserved for state changes.

## Typography

The core pair is Anthropic Serif and Anthropic Sans. Anthropic Serif carries the large statements, section openings, and editorial headings. Anthropic Sans handles controls, helper copy, buttons, labels, and longer explanatory text. The visible product also uses Applesystem in a few workspace and card labels, Arial in fallback button text, Inter in compact swatch and metadata labels, Jet Brains Mono for code-like strings, Open Dyslexic in the accessibility-mode content, and System as a fallback face. No designer or vendor attribution claims are made here because the family credit entries are empty.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Anthropic Serif | 3.75rem | 400 | 1 | -0.02em | Dark login and landing headlines |
| section-display | Anthropic Serif | 3.5rem | 290 | 1.14 | -0.02em | Large workspace and feature headings |
| card-heading | Anthropic Serif | 1.125rem | 360 | 1.45 | 0em | Compact section and card titles |
| body | Anthropic Sans | 1rem | 400 | 1.5 | 0em | Main explanatory copy and form text |
| body-small | Anthropic Sans | 0.875rem | 400 | 1.43 | 0em | Helper text, captions, and secondary notes |
| ui-label | Anthropic Sans | 0.75rem | 500 | 1.33 | 0.08em | Tabs, eyebrow labels, and small control text |
| mono | Jet Brains Mono | 0.6rem | 400 | 1.33 | 0em | Code-like snippets and token strings |

The serif headings are light in tone and visually spacious even when they are large. The sans text is neutral and functional, with 16px body copy, 14px support text, and 12px labels recurring across the interface. The hierarchy comes from scale and weight more than from color or ornament. The small utility families sit in specialized roles, so they should not be spread across the interface without a clear reason.

## Layout

The layout shifts between a dark centered login composition and a lighter dashboard-style workspace. In the login view, the page uses a wide dark field with the logo at top left, a large serif headline, a short supporting line, and a compact sign-in card below the headline. A tall image panel sits to the right and acts as a visual anchor rather than a decorative afterthought. On narrow screens, the same content stacks into one vertical column so the headline leads and the card stays easy to reach.

The workspace views use a more editorial, application-like structure. A thin top bar holds navigation and utility icons. The left side often behaves like a conversation or file rail, with stacked messages, short badges, and status banners. The center is the main canvas, where sections, swatch grids, or editor content sit inside generous margins. The right side becomes an inspector or share panel when the screen is wide enough. The result is a three-zone layout that can change role without changing rhythm.

Spacing is generous at the page edges and tighter inside control clusters. Larger surfaces hold their own breathing room, while buttons, inputs, and chips sit close enough to read as a set. The visual tempo comes from alternating wide open space and compact functional groups. The page never feels grid-heavy; it feels composed.

## Visual language

Claude.ai prefers calm contrast over decorative layering. The dark login shell feels immersive because the background is almost black and the main card is softly inset with rounded corners. The light workspace feels like paper because the surfaces are warm, the borders are faint, and shadows are light or absent. Separation comes from surface color, edge definition, and distance between blocks instead of from heavy depth effects.

The corner system is friendly and consistent. Large shells and major panels use a 2rem radius, which keeps the auth shell and workspace panels close to the rounded feel shown in the interface. Smaller cards move down to a 1.75rem radius, while compact controls use smaller radii and pills become fully rounded. Inputs feel quiet rather than button-like, and tabs stay low-profile enough to sit above the content without taking over the page.

Color also carries structure. Blue marks the main path forward. Green marks a positive system state or workspace action. Red marks deletion, refusal, or caution. Amber and pale rose act as warning surfaces rather than hard stops. Because the palette is so disciplined, each colored element reads clearly without needing a heavy frame or extra ornament.

## Components

### Login shell
The login shell is a two-part composition: a serif headline and supporting line on the left, and a tall image panel on the right in the wider view. The headline is large, centered in its column, and given generous vertical breathing room. On narrow screens, the same content becomes a stacked column with the headline first, then the sign-in card, then the secondary download button. The mood is intimate and direct rather than promotional.

### Sign-in card
The sign-in card is a compact dark box with a rounded outer shell, a thin border, and a flatter inner control stack. It combines one social sign-in button, a small divider, an email field, and a light continuation button. The controls are wide and easy to scan. The light primary button stands out against the dark card, while the field stays subdued enough to avoid competing with it. Helper copy stays tiny and quiet below the button row.

### Palette board
The palette board uses a light canvas and a grid of rounded swatches. Each row groups a color family, and each swatch carries a small numeric label. The board reads as a reference sheet rather than a live editor, so the spacing is orderly and the labels stay compact. The green, blue, and red families are easy to separate because each row keeps its own tonal logic. This component depends on alignment and small shape changes more than on borders or shadows.

### Chat and status surfaces
The chat canvas uses stacked message blocks, pale warning banners, small chips, and a low-contrast composer. The banners are important because they break the monotony of the message stream and carry the product’s alert language. Chips sit close to the messages and feel like tags or quick context markers. The composer is restrained: soft border, muted placeholder, and a small send control. The overall effect is conversational but still systematized.

### Workspace chrome and inspector
The workspace chrome combines a top bar, a left list or conversation rail, a central canvas, and a right settings or share panel. Primary actions are green in some views and red for destructive actions, which makes the control hierarchy obvious at a glance. The inspector panel is narrow, text-dense, and segmented into labeled blocks. It works because the surrounding canvas is calm and largely empty. The component family should stay modular: one pattern for the rail, one for the canvas, one for the inspector, and one for the tab strip.

## Responsive behavior

The system should collapse by preserving order, not by inventing new visual logic. On narrow screens, the login page stacks the headline, card, and button block before the image, which keeps the main promise readable without horizontal scanning. In the workspace, side rails should move below the primary canvas or become drawers rather than shrinking into unreadable slivers. Serif headlines can step down, but they should remain prominent enough to anchor the page.

Controls should stay touchable, and long labels should wrap before they compress buttons into awkward widths. The palette board can reduce column count while keeping its family groupings intact. The chat composer should remain pinned in a stable position so the user never loses the entry point. The inspector and share panels should simplify into single-column groups with clear section separation. Stack first, simplify second, and only then hide secondary chrome.

## Practical implementation guidance

### Preserve
- Keep the serif/sans split. Serif owns the emotional statement; sans owns the interface.
- Keep the dark login shell and the warm paper workspace as distinct surface families.
- Keep blue as the main action color and reserve green, red, and amber for meaningful states.
- Keep shells and major panels on the larger 2rem radius, and use smaller radii for nested cards and controls.
- Keep helper text small and quiet so the interface feels composed rather than dense.

### Avoid
- Avoid introducing a second bright action color that competes with the existing blue.
- Avoid cold gray surfaces that erase the warm paper character.
- Avoid heavy shadows or glossy gradients; the system reads best when it stays mostly flat.
- Avoid mixing destructive red and confirmation green on the same control unless the state difference truly matters.
- Avoid over-tightening spacing in the rails, banners, and card stacks; the openness is part of the brand.

### Recommended build order
1. Define the dark and paper surface tokens, plus the action, success, danger, and warning colors.
2. Build the serif headline scale and the sans body/UI scale.
3. Recreate the login shell and sign-in card.
4. Build the workspace canvas, top bar, rail, and inspector.
5. Add the palette board, banners, chips, and composer.
6. Add destructive and confirmation states last so they inherit the same shape and spacing rules.

### Accessibility
- Keep text contrast high on the dark shell and on the pale warning banners.
- Use non-color cues for destructive, warning, and positive states; color alone is not enough.
- Keep focus rings visible on buttons, inputs, tabs, and chips.
- Make the sign-in controls and composer large enough for direct pointer and touch use.
- Provide clear alternative text for tall imagery and keep decorative panels clearly separate from interactive content.

## Scope note

This guide covers the login shell, palette board, chat surfaces, and workspace/editor chrome visible in the supplied images. It does not define motion, hover and focus details, loading states, or other product pages. Measurements are rounded to the packet’s 0.125rem step.
