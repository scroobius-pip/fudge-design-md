# How daisyui.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/daisyui.com-design)

Last updated: 2026-08-04

## Captured pages

[![Narrow generator column with theme list and compact controls](https://pin.fontofweb.com/6207?format=jpg)](https://design.withfudge.com/share/pin-6207)

[Narrow generator column with theme list and compact controls](https://design.withfudge.com/share/pin-6207)

[![Wide workspace with sidebar list and dark preview board](https://pin.fontofweb.com/6206?format=jpg)](https://design.withfudge.com/share/pin-6206)

[Wide workspace with sidebar list and dark preview board](https://design.withfudge.com/share/pin-6206)

[![Mid-width editor with control column beside the preview grid](https://pin.fontofweb.com/6205?format=jpg)](https://design.withfudge.com/share/pin-6205)

[Mid-width editor with control column beside the preview grid](https://design.withfudge.com/share/pin-6205)

[![White marketing hero with floating theme cards on the right](https://pin.fontofweb.com/5972?format=jpg)](https://design.withfudge.com/share/pin-5972)

[White marketing hero with floating theme cards on the right](https://design.withfudge.com/share/pin-5972)

[![Centered community hero with mascot and contributor grid](https://pin.fontofweb.com/5971?format=jpg)](https://design.withfudge.com/share/pin-5971)

[Centered community hero with mascot and contributor grid](https://design.withfudge.com/share/pin-5971)

## Overview

daisyUI’s visual system splits into two clear faces: a sparse marketing homepage and a dense theme-generator workspace. The homepage uses white space, an oversized headline, and playful mascot-driven imagery to make a component library feel friendly and open. The workspace compresses that same brand into a tool surface full of swatches, rows, pills, toggles, and dark preview panels. The result is not two unrelated designs; it is one system tuned for two jobs. The public face sells the product with air and scale. The working face lets users compare themes quickly without losing the brand’s simple black-and-white backbone.

The shared structure is easy to recognize across both modes. Text is mostly black on white. The action color is a bright blue used sparingly for emphasis. Rounded controls stay prominent even when the page becomes busy. Outfit carries the display voice, while Vazirmatn carries the interface voice. Large statements are short and heavy. Utility labels are smaller, quieter, and tightly organized. The whole system leans on contrast between very large type, very small labels, and rounded modules rather than on ornament or texture.

## Colors

| token | value | use |
|---|---|---|
| `action` | `#0069FF` | Primary calls to action, small highlights, and selected emphasis |
| `ink` | `#000000` | Headings, body text, controls, and dark preview boards |
| `canvas` | `#FFFFFF` | Page background, light shells, and open framing space |

These three colors carry the whole chrome. White is the default field for both the marketing page and the editor shell. Black provides the strongest readable text and also becomes the surface for the dark preview area, where the component demo shifts from airy marketing into a focused workboard. Blue is the only persistent accent and should stay rare. It works best for the top-level action button, active emphasis, and small directional cues. When it is overused, the system loses the crisp, nearly monochrome feel that makes the page read as a tool rather than a decorative landing page.

The richer hues in the swatch editor are not fixed brand tokens. They are theme data shown inside the product. That distinction matters: the interface chrome stays restrained, while the editor reveals that daisyUI can generate many palettes. Light shells, black demos, and blue actions keep the navigation clear; the swatch matrix supplies the colorful variety.

## Typography

Outfit is the credited display face and gives the site its oversized, slightly editorial voice. It is credited to Rodrigo Fuenzalida and Frag Type. Vazirmatn handles the interface layer with cleaner small text, labels, and controls. The system font appears for a tiny utility treatment in the workspace. Font licensing is not included here and should be confirmed before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Outfit | 4.5rem | 900 | 1 | -0.03em | The bold homepage headline |
| `hero-skinny` | Outfit | 3.75rem | 300 | 1 | -0.02em | The lighter statement line in the community hero |
| `workspace-title` | Outfit | 1.5rem | 600 | 1.1 | -0.01em | Section titles such as the generator board heading |
| `body` | Vazirmatn | 1rem | 400 | 1.5 | 0em | General UI copy, nav text, and explanatory prose |
| `body-strong` | Vazirmatn | 0.875rem | 600 | 1.5 | 0em | Buttons, selected rows, and short emphasized labels |
| `label` | Vazirmatn | 0.75rem | 400 | 1.33 | 0em | Swatch labels, helper text, and control captions |
| `micro` | Vazirmatn | 0.625rem | 400 | 1.5 | 0em | The smallest measurement labels and status text |
| `utility-glyph` | System | 1.5rem | 900 | 1.33 | 0em | Compact utility treatment in the workspace chrome |

The scale depends on weight contrast as much as size. The homepage headlines sit at the far end of the range: one line can be heavy and dense, another thin and airy, yet both still feel part of the same family. The generator’s interface text drops to 14–16px and stays practical. Labels are small enough to stay out of the way, but not so small that the editor feels fragile. Buttons use a stronger weight to separate actions from the rest of the panel. The key pattern is simple: large display type for the public story, compact sans text for the working area, and no noisy intermediate steps.

## Layout

The homepage is built like a showroom. One version centers a mascot above a large statement and a wide grid of faded contributor tiles. Another version uses a left-aligned headline with a pill-shaped command line callout, two large actions, and floating product cards on the right. In both cases, the page leaves a lot of white space around the message. That empty field is not dead space; it is what lets the typography feel large without becoming crowded. The image treatment is also deliberately sparse. A hero illustration or card stack does the work of many smaller decorations.

The theme generator uses a very different layout grammar. It reads as a desktop workspace with a narrow left theme rail, a light control column in the middle, and a dark preview board on the right. The left rail is long and scroll-like, with a simple list of theme names and tiny multicolor markers. The middle column groups color controls, radius samples, effect toggles, and size settings into tidy blocks separated by thin rules and modest gaps. The right board is dense and modular, built from rounded black cards that hold charts, lists, audio controls, alerts, and status pills. The composition is intentionally asymmetric: controls stay light and compact, while the preview area expands into a much darker, more information-rich stage.

Spacing has a strong role in the layout language. Small control clusters rely on 0.5rem to 1.5rem spacing. Cards and preview surfaces open up to 2rem and 2.5rem. The public hero uses much larger vertical breathing room, with the most open compositions pushing content far from the edges. That contrast between tight control clusters and loose marketing framing is one of the clearest structural ideas in the system.

## Visual language

The visual language is built from a few repeated moves: rounded pills, square swatches, thin dividers, black preview boards, and strongly separated text scales. Shapes stay friendly without becoming bubbly. The common pill radius gives buttons and chips a soft profile, but the cards are still organized and rectangular enough to feel like tools. The radius samples in the editor make this language explicit by showing a sequence of increasing corner softness. Nothing in the system depends on sharp angles or heavy framing.

Color is used as a function of role, not as decoration. White and black are the structural anchors. Blue marks intent. The swatch matrix introduces chromatic variety, but only inside the theme editor, where color is the thing being edited. That keeps the chrome calm while still showing the product’s range. On the homepage, the mascot and contributor grid soften the otherwise technical subject. On the workspace board, the dark cards, badges, and status rows create a more serious control room feel. The system moves easily between friendly and technical because it keeps the same typography and control shape language in both modes.

The result is a brand that feels open and developer-friendly without looking generic. It is light where the user needs room to read, and dense where the user needs many options visible at once.

## Components

### Top navigation

The navigation is minimal and functional. On the homepage it stays small so the hero can own the page. In the workspace it becomes part of a full app shell with a menu icon, brand mark, search entry, version label, and utility links. Typography stays compact and neutral. Spacing is tight enough to keep the bar out of the way, but the links remain clear and readable.

### Marketing hero

The marketing hero uses a large headline, a short supporting paragraph or secondary statement, and one or two prominent actions. The layout favors left-aligned text on a clean white field. The supporting imagery is either a floating card collage or a centered mascot with a generous halo of space. The headline is the main object. It should remain bold, brief, and strongly separated from the body copy. A pill-shaped command hint can sit above it, and a secondary line can follow underneath without breaking the large-scale rhythm.

### Theme rail

The theme list is a long, narrow column of rows with tiny multicolor markers, text labels, and a selected state that uses a pale rounded background. This rail is not decorative; it is the index for the entire editor. The rows are compact, with enough height to scan quickly and enough spacing to keep the list from collapsing into a blur. The selected item should remain soft rather than loud.

### Color and radius editor

The color editor is built from square swatches arranged in a predictable grid. Each swatch has a label, and several tiles include a large letter mark inside the block to show contrast or text color. The base swatches are dark and numbered, while the semantic swatches use vivid fills such as primary, secondary, accent, neutral, info, success, warning, and error. The radius section follows the same logic with sample shapes that progressively round off. These blocks make the theme controls feel concrete. They are simple samples, not full cards.

### Effects and size controls

The effects section uses short labels and switch-like controls. The on and off states are readable through position and color contrast, not through heavy decoration. The size section begins below with similarly restrained labels. These controls stay secondary to the swatches, but they reinforce the idea that the editor can tune many parts of the theme from one panel.

### Dark preview board

The right-hand board is the densest component in the system. It uses a black surface, rounded large cards, and a stacked grid of internal modules. Some cards contain charts, some hold lists, some show status pills or action buttons, and one panel presents an audio player treatment. The consistent black surface makes the cards feel related even when the content changes. Blue, green, orange, and red accents appear as status markers inside the board, but they never overwhelm the base black chrome. The component family works because every card uses the same large rounding and the same compact label hierarchy.

### Pills, badges, and buttons

Pills and badges are everywhere: theme actions, selected tabs, status chips, and top-level actions. Their shape is the same broad rounded capsule, while fill and border do the visual sorting. Primary actions use the blue fill. Secondary actions remain light or black depending on context. Small status pills inside the dark board stay narrow and readable, which keeps dense information legible without turning the workspace into a grid of equal-weight controls.

## Responsive behavior

At desktop widths, the generator should preserve the three-part structure: theme rail, editor controls, preview board. When the layout narrows, the middle control column can compress first, and the preview board should stack beneath the controls before the theme rail loses its meaning. The order matters. The list of themes should remain the first thing a user can scan, because it anchors the whole editing workflow.

The homepage can also shift more aggressively. The community hero can center its mascot and statement, while the product hero can move from a two-column composition to a vertical stack with text first and imagery second. The display type should scale down before the spacing disappears. That keeps the page open and editorial instead of crowded. The control pattern should stay touch-friendly at smaller widths, with pills and swatches remaining large enough to tap without precision.

## Practical implementation guidance

### Preserve

- Keep the black, white, and blue chrome intact; the palette works because it is disciplined.
- Preserve the strong split between Outfit for display and Vazirmatn for interface text.
- Keep rounded pills and cards large; the 32px-class corners are part of the brand feel.
- Let the swatches act as product data inside the editor, not as sitewide decorative color.
- Keep the homepage airy and the generator dense; that contrast is the system’s main structural idea.

### Avoid

- Avoid adding extra brand colors to the shell when the design only needs blue, black, and white.
- Avoid replacing the rounded controls with square buttons or heavy boxy panels.
- Avoid soft gray dashboard chrome that would dilute the black-and-white backbone.
- Avoid mixed font families beyond the three that appear in the packet.
- Avoid shrinking the dark preview board into a generic card grid; it should stay a concentrated workspace.

### Recommended build order

1. Build the header and the main type scale.
2. Recreate the homepage hero with the simplest possible spacing.
3. Add the theme rail and color swatch editor.
4. Add the radius, effect, and size sections.
5. Build the dark preview board as a reusable card matrix.
6. Finish with responsive stacking rules that preserve reading order.

### Accessibility

- Keep text contrast strong on white shells and black cards.
- Make selected rows and active pills recognizable without color alone.
- Preserve clear focus styles on every control, including swatches and chips.
- Give swatches readable labels so theme data is not color-only.
- Keep touch targets generous enough for the pill buttons and list rows in the editor.

## Scope note

This guide covers the homepage hero views and the theme-generator workspace. It does not specify hidden mobile breakpoints, motion rules, focus styling, loading or error states, or other brand assets outside these screens.
