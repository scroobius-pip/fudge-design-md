# How earth.google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/earth.google.com-design)

Last updated: 2026-08-08

## Captured pages

[![Centered upgrade dialog over the dark planet and star field](https://pin.fontofweb.com/9655?format=jpg)](https://design.withfudge.com/share/pin-9655)

[Centered upgrade dialog over the dark planet and star field](https://design.withfudge.com/share/pin-9655)

[![Left rail projects view with a wide banner and empty table](https://pin.fontofweb.com/9654?format=jpg)](https://design.withfudge.com/share/pin-9654)

[Left rail projects view with a wide banner and empty table](https://design.withfudge.com/share/pin-9654)

[![Dimmed comparison dialog with three pricing columns and blue buttons](https://pin.fontofweb.com/9653?format=jpg)](https://design.withfudge.com/share/pin-9653)

[Dimmed comparison dialog with three pricing columns and blue buttons](https://design.withfudge.com/share/pin-9653)

## Overview

Google Earth Web is an immersive dark application in which the planet, map layers, and project tools share the same stage. The page does not compete with the Earth imagery; instead, it frames the globe with restrained charcoal chrome, compact labels, and a single strong blue action color. The result feels technical and cinematic at once. The interface is built around floating panels, edge-anchored controls, and centered overlays that sit above the map without breaking the sense of depth.

The strongest visual idea is restraint. Black and near-black surfaces hold the UI together, while the globe and satellite layers provide the richest color in the composition. Small pills, thin borders, and low-key cards keep the controls readable without turning the workspace into a dashboard full of noise. When a dialog opens, the rest of the page darkens and the main action stays obvious. When a project page is open, the left rail and banner card organize the work without hiding the map-driven identity of the product.

## Colors

The color system is dominated by dark surfaces and cool blue accents. The background stays almost pure black so the Earth, map tiles, and star field can supply the visual atmosphere. Charcoal cards and rails create depth without becoming bright enough to pull attention away from the planet. Blue is reserved for the actions that matter most: active navigation, selected states, and primary buttons. Pale blue supports secondary emphasis and selected chips. White and near-white text remain the default on dark surfaces, while muted gray handles labels, counts, and supporting copy.

The UI token table stays limited to interface roles. The globe and map imagery carry their own deep blues, pale land tones, and muted atmospheric grays inside the artwork itself. Those photo-driven hues belong to the scene, not to the chrome around it, so the controls remain steady across changing terrain and preview art. The interface does not need a light page-wide mode to work; instead, it uses small light text and blue accents inside a dark shell.

| token | value | role | use |
|---|---|---|---|
| action | #1A73E8 | primary action | Main buttons, selected navigation pills, and high-priority links |
| action-soft | #8AB4F8 | secondary accent | Active chips, secondary highlights, and softer selection fills |
| canvas | #000000 | app canvas | Full-screen map stage and the space around overlays |
| surface | #000000 | base surface | Top bar, chips, and quiet control backgrounds |
| surface-raised | #1F1F1F | raised surface | Modal sheets, panels, and large cards |
| surface-alt | #26282C | alternate rail | Left sidebar and other persistent navigation areas |
| border | #33363B | divider | Hairline panel edges, card outlines, and segmented controls |
| ink | #E8EAED | primary text | Headings, buttons, and the most readable content on dark surfaces |
| muted-ink | #A1A6AD | supporting text | Labels, helper text, storage counts, and secondary metadata |

## Typography

The visible screens rely on compact system text rather than a dramatic editorial stack. Applesystem carries the main interface voice: headings, buttons, rail labels, dialog text, and table-like project content all feel like one family. Times is present as the secondary family in the supplied set and can support legacy or policy-style copy when a serif line is needed. The scale stays modest, because the globe and map tiles are the real headline. Type works by contrast, weight, and spacing instead of by huge sizes.

Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Applesystem | 1.75rem | 600 | 1.15 | -0.02em | Large dialog headlines and the most prominent page titles |
| section-display | Applesystem | 1.25rem | 600 | 1.2 | -0.01em | Banner titles and major section labels |
| card-heading | Applesystem | 1rem | 600 | 1.2 | -0.01em | Card headers, plan names, and compact panel titles |
| body | Applesystem | 1rem | 400 | 1.5 | 0em | Supporting descriptions and explanatory copy |
| body-medium | Applesystem | 1rem | 500 | 1.5 | 0em | Primary buttons, active labels, and emphasized text |
| label | Applesystem | 0.75rem | 500 | 1.2 | 0.04em | Small uppercase labels and status lines |
| navigation | Applesystem | 1rem | 500 | 1.25 | 0em | Top bar items, rail items, and compact controls |
| legal-copy | Times | 0.75rem | 400 | 1.4 | 0em | Fine print, policy-style notes, and storage or attribution lines |

The hierarchy is intentionally restrained. The jump from labels to headings is enough to organize the interface, but the page never depends on oversized type to make the point. Small text remains readable because the dark background gives it strong contrast. Medium weight is used sparingly on the blue actions and selected items so they stand out from the many quiet labels surrounding them.

## Layout

The app is built around a full-viewport stage. On the globe view, the planet sits near the center and the controls float at the edges. On the project page, a left rail takes over part of the width and the main content forms a broad, stable column. In both states, the page preserves generous negative space so the map remains the dominant visual object. Nothing tries to fill every inch.

The top bar is persistent and compact. It keeps the logo, search field, and utility icons on a single line so the page can move between exploration and management without changing structure. The search field is wide enough to feel like the main command surface, but it still reads as part of the bar rather than a separate hero. In the projects view, the left rail uses stacked controls with a selected pill that is wide, bright blue, and unmistakable against the darker rail.

The main content area behaves like a series of floating cards. A large banner across the top of the dashboard uses rounded corners, a short kicker, a headline, a supporting line, and one or two actions. The banner image sits to the right, giving the content a clear split between message and imagery. Below that, the project list area becomes more utilitarian: a heading, a segmented control, filter chips, and a sparse table region. The table area is quiet because the empty state or project list needs room to breathe.

Overlays are a major part of the layout language. The centered modal in the globe view and the plan comparison dialog on the dashboard both sit above a dimmed background. They are wide enough to hold a preview, a headline, and actions without feeling cramped, but they still keep the edges soft and rounded. The cards inside the pricing dialog line up in columns, with thin borders and subtle fills separating plans instead of loud color blocks. That keeps the decision structure legible while preserving the dark, low-glare mood of the rest of the product.

Spacing is measured and consistent. Small gaps organize chips, medium gaps separate control groups, and larger gaps define the boundaries between banners, content regions, and modal sections. The overall effect is calm and orderly, with just enough breathing room to make every label and button feel deliberate.

## Visual language

The visual language is rooted in immersion and restraint. The Earth itself is the expressive surface: deep blue oceans, light atmospheric edges, and scattered land tones bring life into a black field. The UI refuses to overpower that scene. Instead, it uses matte charcoal panels, thin gray borders, and soft rounded corners to frame the map. This keeps the planet feeling vast, not boxed in.

The interface borrows little ornament. There are no decorative gradients across the controls, no glossy chrome, and no heavy shadows. Depth comes from layering: the top bar sits above the canvas, cards rise above the rail, and dialogs hover over a dimmed world. Blue carries the interaction story. A filled blue pill means “this is the place to click now,” while a paler blue can signal a secondary choice or an active segment. The blue is bright enough to guide the eye, but not so electric that it fights the map imagery.

Shape is calm and functional. Large rounded rectangles handle banners and dialogs; smaller pills shape filters, tabs, and active buttons; icon buttons stay simple and compact. This mix keeps the application from feeling rigid without drifting into softness. The geometry also supports the product’s tone: mapping software with a consumer-friendly surface. That balance is important, because the tool is capable and technical, yet the visual language remains approachable.

Imagery and interface work in different registers. The planet, the map tiles, and the preview art can carry complex color and texture. The chrome around them should stay neutral so the imagery can breathe. When the dashboard shows a blank project area, the empty state remains sparse and centered; when it shows a comparison dialog, the plan columns use structure and contrast instead of illustration to do the explaining. The system reads best when every screen has one clear visual lead.

## Components

### Globe stage

- **Anatomy:** Full-screen black canvas, centered Earth sphere, faint star field, small attribution strip, and compact corner tools.
- **Surface:** Pure black or near-black with imagery supplying the color.
- **Composition:** The globe dominates the center of the page. Controls hug the edges and stay visually light.
- **Visible states:** Idle exploration, map controls visible, and overlay mode when a dialog appears above the planet.

### Top bar and search field

- **Anatomy:** Logo, search input, utility icons, account area, and plan label.
- **Typography:** Small medium-weight labels and compact input text.
- **Shape:** Rounded search pill and small icon buttons with soft edges.
- **Spacing:** Tight spacing within the bar, with enough room to keep the search input readable.
- **Hierarchy:** Search is the most important object in the bar; icons remain secondary and quiet.

### Sidebar rail and selected navigation pill

- **Anatomy:** New button, selected section pill, storage footer, and small utility icons.
- **Surface:** Dark rail slightly lighter than the main canvas.
- **Typography:** Short navigation labels in medium weight.
- **Shape:** Large rounded active pill, smaller rounded utility surfaces, and thin separators.
- **Visible states:** The current section is filled blue with white text; inactive items stay muted.

### Banner card and dashboard header

- **Anatomy:** Upper label, headline, supporting line, action pair, and a right-side image strip.
- **Surface:** Raised charcoal card with a thin border and soft corners.
- **Typography:** Kicker in label style, headline in section-display, body copy in regular body text.
- **Composition:** Copy sits on the left; imagery balances the right side.
- **Variants:** Informational banner, action-led banner, and compact announcement strip.

### Centered modal and upgrade dialog

- **Anatomy:** Header, close button, preview image or table, headline, supporting text, secondary link, and primary action.
- **Surface:** Dark floating sheet above a dimmed background.
- **Shape:** Larger radius than the top bar or rail; corners stay soft without feeling playful.
- **Spacing:** Strong internal padding, generous separation between headline and actions, and tight alignment inside pricing columns.
- **Visible states:** Informational overlay on the globe and pricing overlay on the dashboard. The primary button is blue; the current-plan button is subdued.

### Plan comparison columns

- **Anatomy:** Three vertical columns with plan names, price, feature lists, and plan buttons.
- **Typography:** Plan names use card-heading; prices are larger and heavier; feature lines stay small.
- **Surface and border:** Dark cards with thin outlines; the selected or promoted plan may use a clearer blue accent.
- **Composition:** The comparison grid is symmetrical and easy to scan.
- **States:** Current plan, upgrade path, and strongest plan are distinguished mainly through button treatment and price emphasis.

### Chips, filters, and segmented controls

- **Anatomy:** Small pills for people, modified, Google Drive, and local device choices.
- **Surface:** Quiet dark fills with thin borders until selected.
- **Shape:** Fully rounded pills or gentle chip radii.
- **Typography:** Small, medium-weight labels.
- **Visible states:** Selected pills turn blue; inactive pills remain muted and outlined.

## Responsive behavior

The design should preserve the same hierarchy on narrower screens: planet or banner first, controls second, and supporting content last. The search bar can compress before the core actions do, and the rail can collapse into a lighter navigation pattern when horizontal space gets tight. Banner cards, plan columns, and modal content should stack in a clear order rather than shrinking into unreadable columns. The Earth stage should remain visually dominant even when the interface becomes more compact.

Touch targets need extra breathing room in the rails, chips, and icon clusters. The selected blue state should stay obvious without relying on tiny outlines alone. Dialogs should still read as floating surfaces, but their internal spacing can tighten slightly so the content remains comfortable in smaller widths. When comparison tables no longer fit side by side, the plan structure should convert into stacked cards with the same order of names, prices, feature lists, and actions.

## Practical implementation guidance

### Preserve

- Keep the interface dark enough that the Earth imagery can supply the color story.
- Use one saturated blue for primary actions and selected states.
- Let the top bar, rail, cards, and modal sheets feel like quiet floating layers.
- Preserve the large negative space around the globe and the generous padding inside overlay cards.
- Keep typographic contrast strong enough for compact labels, not just for the largest headings.

### Avoid

- Avoid bright white control surfaces that would flatten the map stage.
- Avoid decorative gradients on chrome; the imagery already provides visual richness.
- Avoid heavy shadows on every element; depth should come from layering, not glow.
- Avoid mixing too many accent colors in the UI itself.
- Avoid oversized text blocks that would compete with the map rather than support it.

### Recommended build order

1. Build the black canvas and centered Earth stage.
2. Add the top bar, search field, and basic utility icons.
3. Add the left rail, selected navigation pill, and storage footer.
4. Add the dashboard banner and project-area table structure.
5. Build the centered modal and the pricing comparison dialog.
6. Add chips, segmented controls, and small state variations.
7. Polish spacing, borders, and selected blue states across all panels.

### Accessibility

- Keep every icon-only control labeled so the meaning does not depend on the icon shape alone.
- Maintain strong contrast for white text on charcoal panels and for blue text or fills against dark surfaces.
- Make selected pills and current-plan states readable without color alone.
- Preserve visible keyboard focus on the search field, rail items, chips, close buttons, and primary actions.
- Keep legal and attribution text legible at small sizes, especially against the black canvas.

## Scope note

This guide covers the desktop Earth Web globe, the map projects dashboard, and the upgrade modal shown here; mobile layouts, motion, exact breakpoints, and broader interaction states are not included. Measurements are practical adaptation targets.
