# How cobe.vercel.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cobe.vercel.app-design)

Last updated: 2026-08-03

## Captured pages

[![Hero globe with sticker pins and the centered install prompt](https://pin.fontofweb.com/8174?format=jpg)](https://design.withfudge.com/share/pin-8174)

[Hero globe with sticker pins and the centered install prompt](https://design.withfudge.com/share/pin-8174)

[![Polaroid globe with floating cards and pager controls](https://pin.fontofweb.com/8177?format=jpg)](https://design.withfudge.com/share/pin-8177)

[Polaroid globe with floating cards and pager controls](https://design.withfudge.com/share/pin-8177)

[![Playground globe beside stacked controls and sliders](https://pin.fontofweb.com/8180?format=jpg)](https://design.withfudge.com/share/pin-8180)

[Playground globe beside stacked controls and sliders](https://design.withfudge.com/share/pin-8180)

[![Custom labels section with tabs, code sample, and CSS box](https://pin.fontofweb.com/8179?format=jpg)](https://design.withfudge.com/share/pin-8179)

[Custom labels section with tabs, code sample, and CSS box](https://design.withfudge.com/share/pin-8179)

[![API reference grid with blue rules and paired option cells](https://pin.fontofweb.com/8176?format=jpg)](https://design.withfudge.com/share/pin-8176)

[API reference grid with blue rules and paired option cells](https://design.withfudge.com/share/pin-8176)

## Overview

COBE reads like a developer library built around one live object. A white field gives the globe room, while the rest of the page turns into a sequence of compact reference surfaces: tabs, prompt bars, code cards, a control panel, and a table of options. The mood is precise and slightly playful because the globe, stickers, and label cards carry the personality while the UI chrome stays thin and rectilinear.

The page works because the monospaced labels and blue fills are quiet enough to let the globe stay central, but strong enough to keep the documentation readable. The sections in this packet move from a hero-style demo into progressively denser reference content without changing the core visual language. The result feels like one system, not a landing page with unrelated modules.

## Colors

The interface stays on a white canvas and uses black for the main reading layer. `#2D5E9D` is the primary structural blue: it fills the active tab, draws the command strip, and defines the blue rules that frame code and tables. `#6266D1` is the lighter companion blue, useful for secondary link treatment, small highlights, and page controls that need to feel related without repeating the exact same shade.

`#00A67D` gives the code examples a narrow green-teal accent, so inline syntax and emphasized tokens stay readable without introducing a full rainbow of token colors. `#8996A3` and `#A2A6A8` are the quiet support colors: one for muted copy and one for thin chrome, borders, and control outlines. `#000000` remains the anchor for body text, while `#FFFFFF` is the default surface and text color on blue controls. The sections shown here stay light rather than flipping into a dark shell, so contrast comes from blue fills, 1px rules, and dark text on white.

The system is built on a split between structural color and atmospheric color. Structural color is the blue that marks actions, selected tabs, and framed technical blocks. Atmospheric color is the black-and-white globe treatment, the muted labels, and the restrained gray support text. That split keeps the page legible even when the globe adds visual noise, because the interface never has to compete with more than one saturated accent at a time.

## Typography

COBE uses only two material families: **Geist Pixel** for almost all prose and interface text, and **Departure Mono** for labels, tabs, code, counters, and other small control surfaces. Geist Pixel gives the page a compact, slightly retro documentation tone; Departure Mono makes the controls feel exact and technical. The hierarchy is modest rather than theatrical: most reading text sits at 16px or 13.6px, while labels and code elements tighten down to 10.4px–12.8px.

Licensing details are not supplied for either family.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Geist Pixel | 1rem | 400 | 1.6 | 0.015em | Paragraphs and general explanatory copy |
| support | Geist Pixel | 0.85rem | 400 | 1.6 | 0.015em | Short helper lines and section descriptions |
| link | Geist Pixel | 0.8rem | 400 | 1.6 | 0.015em | Inline links and short link rows |
| table-body | Geist Pixel | 0.75rem | 400 | 1.6 | 0.015em | Dense option descriptions in tables |
| button | Departure Mono | 0.75rem | 400 | 1.6 | 0.02em | Copy labels and compact tab text |
| code | Departure Mono | 0.8rem | 400 | 1.6 | 0.02em | Code samples, option names, and inline snippets |
| eyebrow | Departure Mono | 0.65rem | 400 | 1.6 | 0.12em | Section labels above each block |
| micro | Departure Mono | 0.6rem | 400 | 1.6 | 0.02em | Pager counts, tiny metadata, and control text |

The system relies on contrast of role and scale more than on a big range of weights. The mono labels are small but deliberate, and the body copy stays open enough to read quickly inside narrow columns. The page never needs a large headline font to feel important; the globe and the blue geometry do that work.

## Layout

This page is a vertical documentation stack built on a wide white field. The hero and demo sections are centered with substantial breathing room on both sides, while the supporting content resolves into a single column of framed cards and tables. The globe remains the focal object wherever it appears; everything else either explains it or configures it.

Section headings sit small and quiet above each block, usually in monospaced labels with tight leading. The most important actions are framed as tab strips, prompt bars, code cards, or tables, so the page never needs heavy promotional copy to feel complete. The overall rhythm alternates between blank space, a blue-edged framed block, and a short line of explanatory text.

The playground section breaks the strict center column by placing the globe on the left and a narrow settings panel on the right. That panel is stacked top to bottom: sliders, select menus, a checkbox group, and compact numeric readouts. The panel should feel like a settings surface, not a dashboard; the globe remains the thing being tuned. The proportions matter more than the exact pixel math: the globe needs enough air to read as a display object, while the controls need to compress into a disciplined column that feels practical rather than luxurious.

The polaroid section uses a different structure: a centered sphere, floating photo cards, then a title row, pager dots, and small arrow controls. The cards sit above the globe rather than beside it, so the eye reads them as annotations attached to the same object. The API section returns to strict structure with a two-column grid and horizontal rules that keep the content scannable. Code blocks stay full width inside the column, but they still feel framed and separate because the blue border and internal padding give them their own visual container.

The layout language is stable across the whole page: centered hero, framed technical content, then another framed technical content block. It avoids wide asymmetrical magazine layouts and avoids dense admin-panel packing. That keeps the page readable as a product story and as a reference page at the same time.

## Visual language

COBE's visual language is skeletal and technical, but not cold. The globe supplies the only soft form: a dotted sphere with subtle lighting, then small pinned labels, stickers, or photo cards floating around it. Everything else is rectangular and grid-aligned: tab rows, prompt bars, bordered code windows, checkbox groups, sliders, and the API grid. That contrast is the core of the page.

Blue is used as an event color, not decoration. It marks the active tab, fills the prompt strip, outlines code and table blocks, and identifies the tiny selected points in the pager. Black text on white gives the page a laboratory feel, while the muted gray chrome keeps the interface from collapsing into plain raw code. The small amount of green-teal syntax color keeps examples readable and gives the code blocks a little life without changing the overall mood.

The page avoids soft consumer-product shapes. Corners are mostly square, borders are thin, and depth is minimal. When the design wants emphasis, it uses scale, spacing, and filled blue rectangles rather than shadows or layered surfaces. The globe and its overlays are the only parts that feel playful; the rest is instrumentation.

This visual language depends on contrast between object and tool. The globe is an object to look at. The tabs, code examples, and tables are tools to understand the object. That relationship explains why the page can stay almost entirely white and black without feeling empty: the globe contributes motion and texture, while the interface contributes structure and instruction.

## Components

### Hero globe stage

The hero stage pairs the globe with small floating stickers, a compact caption row, and understated links below. The globe is the largest form on the page and should stay visually dominant; the text around it is support, not a second headline. Blue dots and short labels keep the composition readable without crowding the sphere.

The hero feels balanced because the object is centered and the surrounding controls stay visually secondary. The page does not rely on an oversized marketing heading. Instead, the object itself is the headline, and the labels around it act like callouts. The surrounding links are lighter and smaller, so they do not flatten the composition into a standard hero banner.

### Segmented tabs and prompt bar

The tab row is a low-profile segmented control with one active blue tab and several inactive white tabs edged in light borders. Keep the active state filled, keep the inactive states quiet, and avoid adding extra decoration inside the tabs. The prompt bar uses a blue strip on top of a bordered command field; the command line sits inside a white body with a small right-aligned copy action.

These controls need to feel exact, not expressive. Their job is to frame a command or switch context, so the chrome should stay thin and the spacing should stay compact. The active blue tab does the main signaling work. The inactive tabs should remain open and readable without competing with the selected state. The prompt bar follows the same rule: a strong blue header defines the action, while the field below stays calm so the instruction text can be scanned quickly.

### Code card and CSS panel

Code sections are framed white cards with thin blue borders and generous internal padding. The code is left aligned, compact, and monospaced, with the syntax colors doing the only ornamental work. In the custom-labels view, the code sample and the CSS panel are separate boxes, so the layout can explain the markup first and the styling second.

The code card should feel like a sample sheet rather than a terminal. That means no heavy dark panel treatment and no decorative shadows. The border is the container, the padding is the breathing room, and the mono type is the signal. The CSS panel works because it is visually parallel to the code sample while still reading as a distinct layer of explanation. That separation makes the page useful to a builder who wants to copy the pattern directly.

### Playground shell

The playground uses a split composition: globe on the left, controls on the right. The control column is narrow and stacked, with sliders, select menus, and checkboxes laid out in a predictable vertical rhythm. The panel should feel like a settings surface, not a dashboard; the globe remains the thing being tuned.

The controls need to look functional even when they are visually quiet. Thin rules, compact labels, and evenly spaced inputs keep the panel legible without making it feel like a heavy admin form. The left-right division also matters: the globe gets the open display space, while the control column compresses all the technical tuning into one readable strip. That split is one of the strongest structural cues in the whole system.

### API table

The API reference uses a strict two-column grid with blue rules and small text. Each cell combines a short option name, a type note, and a one-line explanation. Required markers and the occasional blue fill provide emphasis, but the grid stays mostly flat and readable so the table can carry a large amount of detail without becoming noisy.

The table works because it is unapologetically procedural. The blue lines create a hard lattice that makes every option feel discrete. The small type lets the page hold a lot of information without looking cluttered. Keep the cell density high enough to feel technical, but not so high that the text turns into a wall. The table should feel like a reference card expanded to full width.

### Polaroid pager

The polaroid section centers the globe and lets photo cards float above it. Beneath the sphere, the page uses a small title, a row of dots with one active blue dot, and simple square arrow buttons. The visual emphasis sits on the content above; the pager remains secondary and almost editorial in scale.

This component is the most playful part of the system, but it still obeys the same rules. White background, thin borders, compact text, and one blue signal color. The floating cards are small and slightly offset, so they feel attached to the globe rather than freely arranged. The pager is minimal on purpose: it should support the sequence without turning into a major chrome pattern.

## Responsive behavior

The layout should collapse by stacking the playground controls below the globe, letting tab rows wrap cleanly, and allowing code cards to become full-width blocks while keeping their borders and padding intact. The globe should stay visually dominant even when the page narrows; it should not turn into a tiny decorative icon. Tables should preserve their paired-cell reading order as long as space allows, then move to a single-column flow without losing the blue rules or the compact type rhythm.

Small labels and inline links can wrap, but they should keep their tight mono or pixel rhythm. Spacing should compress before the type scale changes dramatically. The page works best when each section still reads as a framed reference block rather than a collapsed stack of generic cards. When space gets tight, the layout should reduce lateral spread first and only then reduce internal padding. That keeps the globe, code samples, and table rows recognizable at smaller widths.

The responsive version should also preserve the difference between display and control surfaces. The globe remains the visual anchor. The reference blocks remain the reading anchor. If the layout shifts too aggressively, those two roles blur together and the page loses its character.

## Practical implementation guidance

### Preserve

- Keep the white field as the default surface.
- Use the two-family type system consistently: Geist Pixel for reading, Departure Mono for controls and code.
- Keep the blue accent scarce and structural.
- Preserve the blue-bordered card language for code, API, and reference blocks.
- Let the globe remain the only organic form.

### Avoid

- Avoid shadows, glass effects, or soft consumer-app cards.
- Avoid adding extra saturated colors to chrome.
- Avoid rounded pills where the screenshots use square or nearly square geometry.
- Avoid making the docs feel like marketing copy; the page should read as a technical reference.
- Avoid generic table styling that weakens the strong blue rules.

### Recommended build order

1. Establish the font pair, small labels, and compact reading scale.
2. Build the shared white card, blue border, and tab primitives.
3. Add the prompt bar and code block variants.
4. Add the playground shell with a left globe area and right settings column.
5. Build the API table and pager patterns.
6. Finish with the polaroid and sticker treatments so the globe views feel related.

### Accessibility

- Keep visible focus states on every tab, button, slider, and select control.
- Make the blue text on blue surfaces large enough and sufficiently contrasted before shipping.
- Give the copy action and pager controls explicit names that match their visible purpose.
- Preserve readable line lengths in code and table cells when the layout narrows.
- Ensure the globe labels and floating cards still have a clear reading order when the page stacks.

## Scope note

This guide covers the supplied COBE pages: the hero globe, sticker and polaroid demos, custom-label and usage code blocks, playground controls, and API reference tables. Exact breakpoint behavior, motion, hover and focus styling details, and alternate themes are not included. Relative-unit values are rounded to the packet's 0.125rem step.
