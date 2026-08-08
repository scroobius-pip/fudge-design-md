# How aistudio.google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aistudio.google.com-design)

Last updated: 2026-08-08

## Captured pages

[![Tall settings rail with stacked dark cards and compact controls](https://pin.fontofweb.com/6258?format=jpg)](https://design.withfudge.com/share/pin-6258)

[Tall settings rail with stacked dark cards and compact controls](https://design.withfudge.com/share/pin-6258)

[![Wide composer with tool chips and a right-aligned run button](https://pin.fontofweb.com/6257?format=jpg)](https://design.withfudge.com/share/pin-6257)

[Wide composer with tool chips and a right-aligned run button](https://design.withfudge.com/share/pin-6257)

[![Centered model hero with banana pair and blue outlined prompt card](https://pin.fontofweb.com/4974?format=jpg)](https://design.withfudge.com/share/pin-4974)

[Centered model hero with banana pair and blue outlined prompt card](https://design.withfudge.com/share/pin-4974)

[![Same hero crop with the floating banana prompt and output card](https://pin.fontofweb.com/4973?format=jpg)](https://design.withfudge.com/share/pin-4973)

[Same hero crop with the floating banana prompt and output card](https://design.withfudge.com/share/pin-4973)

[![Lower footer with centered brand block and four-column link grid](https://pin.fontofweb.com/1804?format=jpg)](https://design.withfudge.com/share/pin-1804)

[Lower footer with centered brand block and four-column link grid](https://design.withfudge.com/share/pin-1804)

## Overview

Google AI Studio presents itself as a dark, compact workbench with a marketing surface layered above it. The interface is not trying to feel airy or ornamental. It feels controlled, technical, and immediate: a narrow settings rail, a centered prompt composer, a large hero block for a featured model, and a restrained footer. The result is a page that moves between product configuration and product story without changing its visual language.

The strongest pattern is contrast by density rather than by color variety. Dense controls sit in stacked dark cards, while the marketing areas open into broad empty fields with a centered headline and a single action. Floating image tiles, thin divider lines, compact buttons, and small icon marks keep the page compact. The overall effect is confident and utilitarian, with enough softness in corner treatment to avoid feeling severe.

## Colors

The visible system is built around a deep black base with closely related charcoal layers around it. The exact retained value is the darkest shell tone; it anchors the page background, the smallest icon strokes, and the most compressed chrome accents. The lighter grays seen in the interface should be recreated as nearby implementation steps around this core rather than promoted as brand tokens.

| token | value | role |
|---|---|---|
| shell | #000000 | Deep page base, icon strokes, and the strongest chrome accents |

The page does not rely on saturated brand color for structure. Instead, it uses depth, outline strength, and text contrast to separate regions. On the hero model card, a cool blue edge treatment lifts the prompt panel away from the dark field. In the composer, the active tool chip and the run control read as the most actionable elements through stronger contrast and slightly brighter surface treatment. The footer lowers contrast again, letting the page end quietly instead of introducing a new color block.

Because the system is so dark, color roles should stay semantic: deepest shell, muted shell, active shell, and quiet shell are more useful than a long palette of near-identical grays. The screenshots support a single explicit color token in the shared vocabulary, while the rest of the surface ladder should be treated as implementation palette, not as brand identity.

## Typography

Inter Tight carries the prominent display copy and the centered hero statements. Inter handles the control rail, prompt area, labels, and footer links. Google Symbols appears only in the smallest iconography: chevrons, tool glyphs, the plus mark, and compact control decorations. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter Tight | 3.5rem | 400 | 1 | -0.03em | Centered model headline |
| section-display | Inter Tight | 2.5rem | 400 | 1.05 | -0.02em | Feature statements and large callouts |
| card-heading | Inter Tight | 1.5rem | 400 | 1.1 | -0.02em | Stack titles inside dark cards |
| body | Inter | 1rem | 400 | 1.5 | 0em | Descriptive copy and general prose |
| body-medium | Inter | 1rem | 500 | 1.4 | 0em | Primary buttons, selected chips, emphasized labels |
| label | Inter | 0.75rem | 500 | 1.2 | 0.06em | Small section labels and control captions |
| legal-copy | Inter | 0.75rem | 400 | 1.4 | 0em | Footer links and fine-print text |
| icon | Google Symbols | 1rem | 300 | 1 | 0em | Small glyphs and control marks |

The hierarchy depends on scale compression more than on heavy weight changes. Headlines are large, but not bold. Labels are compact and slightly widened, which keeps them legible against the dark shell without competing with the larger headings. Body copy stays calm and open, with enough leading to keep the dense control rail readable. The whole system feels better when line length is short and the display faces are allowed to sit with broad margins around them.

## Layout

The page reads as a sequence of three different spaces. First is the narrow utility rail: a vertical stack of settings cards, toggles, sliders, and selectors that keeps the prompt setup visible without taking over the screen. Second is the centered work area: a wide composer with a prompt field, tool chips, and a primary run action. Third is the showcase space: a broad, centered hero with a large heading, a short supporting line, and a floating image composition that explains the featured model. The footer closes the page with a simple brand block and a multi-column link grid.

The left-side rail is intentionally compressed. Cards sit one above another with little visual noise, so the user can scan model choice, system instructions, API key status, temperature, aspect ratio, resolution, tools, and advanced settings in one pass. The composer is the opposite: it stretches horizontally, giving the prompt field room to breathe and letting chip-like controls sit along the lower edge. That wide, low posture is important. It makes the page feel like a place where work happens, not a form to be completed.

The hero section uses a much more theatrical layout. The headline is centered, the supporting line is quieter, and the prompt-and-result demo sits in the middle of a broad dark field. The page uses overlap to create depth: one card sits in front of another, and the output image anchors the lower right corner of the composition. The footer then drops the pace again. Its columns are orderly, narrow, and low contrast, which gives the page a clean ending instead of a heavy final panel.

Spacing should stay disciplined and repetitive. The same small gaps should govern the card stack, the same wider section spacing should separate the major chapters, and the same corner treatment should recur across panels and controls. That repetition is what makes the interface feel like one system rather than several unrelated screens.

## Visual language

The design language is built from soft geometry inside a dark shell. Panels are softly edged but not bubbly. Dividers are thin and quiet. Buttons are compact, and their shape is restrained by the surrounding grid. Nothing gleams. Nothing shouts. The visual energy comes from contrast between flat dark planes and a few sharper focal points: the hero headline, the blue-edged model card, the floating result image, and the active control chips.

The settings rail is almost architectural. Each block is a self-contained module with a title, a compact body, and an interaction control. The hero area is more editorial. It combines a headline, a small explanatory line, and a miniature product scene that feels like a demo image placed on the page. The footer is pure utility: many small links, aligned in a measured grid, with the brand name centered above them. Across the page, the language stays consistent because the shapes are simple and the text does most of the explanatory work.

The most important visual cue is restraint. Even the feature card avoids decorative layering beyond its overlap and outline. The result is a system that feels precise and credible, especially for a tool that asks users to configure models, parameters, and output behavior.

## Components

### Settings rail

- **Anatomy:** Section title, stacked option cards, slider row, select rows, tools group, advanced settings group, and a small toggle.
- **Surface:** Dark cards sit on a darker shell, with only subtle separation between modules.
- **Typography:** Inter for labels and explanatory text, with compact label styling for section names and control captions.
- **Shape:** Compact cards and compact controls; the visible structure is soft-edged, not jagged.
- **Spacing:** Tight vertical stacking inside each card, then slightly larger gaps between the major groups.
- **Visible states:** The tools toggle is on, collapsed groups show chevrons, and the slider thumb sits toward the right, implying a mid-high value.

### Prompt composer

- **Anatomy:** Large text field, attached tool chips, a plus control, and a run button.
- **Surface:** A wide dark tray with a slightly raised inner plane for the input region.
- **Typography:** The prompt area uses a lighter, calmer tone than the action controls; chips keep their text compact.
- **Shape:** Broad outer container, compact chips, and a compact button at the far edge.
- **Composition:** The prompt area spans the width, while the chips and actions form a low horizontal band beneath it.
- **Visible states:** One tool chip is active and visibly selected; the run control is ready but not expanded.

### Model showcase hero

- **Anatomy:** Centered brand heading, short subheading, floating prompt card, source image, result image, and a small action row below.
- **Surface:** Deep dark field with a subtle blue edge around the prompt card and a black backdrop behind the floating images.
- **Typography:** Large, light-weight Inter Tight for the headline; smaller Inter for the supporting line.
- **Shape:** Soft-edged rectangles with overlapping corners, making the images feel like stacked tiles.
- **Composition:** The prompt card sits left of center, the output image sits lower right, and the overlap creates a stable layered composition.
- **Visible states:** The prompt field looks active through its cursor line and stronger outline treatment.

### Footer

- **Anatomy:** Centered brand block, then a four-column link grid.
- **Surface:** The same dark shell, but with lower contrast than the hero and composer.
- **Typography:** Small Inter links with restrained spacing, keeping the footer quiet.
- **Shape:** No strong containers; the footer is defined by alignment and spacing.
- **Composition:** The brand sits above the links instead of beside them, which keeps the ending calm and symmetrical.
- **Visible states:** No busy controls, no promotional cards, and no competing highlights.

## Responsive behavior

On narrower screens, the system should preserve the order of importance rather than the exact two-column arrangement. The settings rail can collapse into a single stack, but the model choice and run action should stay easy to reach. The prompt composer should remain prominent and full width, with its chips wrapping only when necessary. The hero headline should stay centered and readable, and the floating demo should scale before it reflows into a cluttered collage. The footer can compress into fewer columns, but the brand block should remain above the links so the page still feels deliberate at the end.

Typography should scale down by preserving the same family roles and weight rhythm, not by swapping families. The tight display face can remain for headlines, while the interface face handles controls and small copy. Keep the dark shell intact; do not introduce a bright mobile-only background that breaks the mood. Preserve chip shapes and card corners, and keep the visual distinction between action buttons and passive labels.

## Practical implementation guidance

### Preserve

- Keep the dark shell as the default surface language.
- Keep Inter Tight for the large centered statements and Inter for controls, labels, and footer links.
- Keep the page split between dense utility controls and spacious showcase sections.
- Keep compact controls, cards, and thin separators as the main structural tools.
- Keep the floating demo composition in the hero; it is a major identity cue.

### Avoid

- Avoid glossy gradients, glass effects, or neon surfaces that fight the restrained shell.
- Avoid heavy shadows; the design reads through contrast and layout, not depth tricks.
- Avoid making every module equally prominent. The rail should stay subordinate to the hero.
- Avoid broad changes in type family or weight that make the interface feel patched together.
- Avoid overfilling the footer; it should end the page quietly, not become a second hero.

### Recommended build order

1. Build the dark shell and the basic type scale.
2. Build the settings rail as stacked cards with compact controls.
3. Build the prompt composer as the main work surface.
4. Build the hero headline and floating model demo.
5. Build the footer link grid and brand block.
6. Tune spacing, corner treatment, and contrast so the three page zones feel like one system.

### Accessibility

- Keep visible focus states on every chip, select, toggle, and button.
- Do not rely on icon glyphs alone; pair them with text labels or accessible names.
- Preserve readable contrast for the small footer links and the stacked control text.
- Keep hit targets generous enough for the compact controls and the toggle switch.
- Ensure the prompt field, slider, and selects remain clearly labeled when the layout tightens.

## Scope note

This guide covers the dark Google AI Studio surfaces shown here: the settings rail, prompt composer, model showcase, and footer. It does not define mobile breakpoints, motion, loading or error states, or alternate product modes beyond these screens.
