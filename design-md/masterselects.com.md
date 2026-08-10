# How masterselects.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/masterselects.com-design)

Last updated: 2026-08-10

## Captured pages

[![Full application workspace showing three-panel layout with dark canvas, left properties sidebar, right export panel, and bottom timeline with video tracks](https://pin.fontofweb.com/6250?format=jpg)](https://design.withfudge.com/share/pin-6250)

[Full application workspace showing three-panel layout with dark canvas, left properties sidebar, right export panel, and bottom timeline with video tracks](https://design.withfudge.com/share/pin-6250)

[![Changelog modal overlay with version header, filter pills, blue info banner, and grouped feature entries with status icons](https://pin.fontofweb.com/6248?format=jpg)](https://design.withfudge.com/share/pin-6248)

[Changelog modal overlay with version header, filter pills, blue info banner, and grouped feature entries with status icons](https://design.withfudge.com/share/pin-6248)

[![Right-side export panel detail showing encoder settings, video codec options, audio controls, and track addition buttons](https://pin.fontofweb.com/6252?format=jpg)](https://design.withfudge.com/share/pin-6252)

[Right-side export panel detail showing encoder settings, video codec options, audio controls, and track addition buttons](https://design.withfudge.com/share/pin-6252)

[![Bottom timeline section showing playhead at start, time ruler with five-second intervals, and stacked video and audio tracks](https://pin.fontofweb.com/6251?format=jpg)](https://design.withfudge.com/share/pin-6251)

[Bottom timeline section showing playhead at start, time ruler with five-second intervals, and stacked video and audio tracks](https://design.withfudge.com/share/pin-6251)

## Overview

MASterSelects presents a dark-themed professional video editing environment built for sustained creative work. The interface adopts a near-black foundation with carefully layered surface elevations that create depth without visual fatigue. The design prioritizes information density: every panel, control, and timeline element serves immediate functional purposes with minimal decorative overhead. Three primary zones organize the workspace—a left properties sidebar, a central preview canvas, and a right-side export panel—while a bottom timeline anchors the temporal editing experience. The visual language speaks to professional users through precise monospace typography, consistent control patterns, and a restrained accent system that highlights actionable states without chromatic excess. The overall impression is of a tool that respects the user's attention, presenting complex encoding options and timeline data with clarity and predictable spatial relationships.

## Colors

The color system operates on a dark-mode philosophy where surfaces progress from deep black through subtle grays, and text maintains high contrast through near-white primary ink. Accents appear sparingly and carry semantic weight.

| token | value | use |
|---|---|---|
| canvas | #0A0A0A | Deepest background for preview canvas and timeline void |
| surface-primary | #111111 | Main application background, panel foundations |
| surface-secondary | #141414 | Elevated cards, changelog entries, secondary panels |
| surface-elevated | #1A1A1A | Modal overlays, info banners, hovered or focused regions |
| surface-input | #1E1E1E | Form fields, dropdowns, button backgrounds, control surfaces |
| ink-primary | #F0F0F0 | Primary text, labels, headings, active controls |
| ink-secondary | #888888 | Secondary labels, timestamps, muted metadata, disabled states |
| ink-muted | #333333 | Tertiary information, subtle borders, inactive track elements |
| accent-blue | #3B82F6 | Active selections, checkmarks, info states, primary actions |
| accent-blue-light | #93C5FD | Info banner text, highlighted secondary actions |
| accent-gold | #E5C07B | Warning states, attention markers, version badges |
| border-subtle | #333333 | Panel divisions, input borders, timeline grid lines |
| border-default | #FFFFFF | High-contrast borders for focused elements, modal outlines |
| status-success | #3B82F6 | Completed operations, verified settings, active toggles |

The interface maintains strict value separation: backgrounds never compete with content, and the blue accent family provides the only saturated color in an otherwise achromatic environment. The gold accent appears reserved for version indicators and exceptional states. White borders function as structural emphasis rather than decoration, appearing around modals and focused inputs to establish clear elevation boundaries.

## Typography

The interface relies on system monospace for all textual content, establishing a technical, precise character appropriate for video editing metadata and encoding parameters.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| system-mono | System | 0.8125rem | 400 | 1.5 | normal | Primary interface text, labels, timestamps, encoding values |
| system-mono-small | System | 0.75rem | 400 | 1.5 | normal | Secondary metadata, count badges, track labels, fine print |

The monospace treatment unifies diverse information types—timecodes, bitrate values, resolution specifications—into a coherent readable layer. At 13px with 19.5px line height, the base size maintains legibility in dense panels without consuming excessive vertical space. The smaller 12px variant serves secondary contexts where space is constrained: filter pill counts, timeline track identifiers, and modal footer hints. Weight remains consistently regular across both sizes; hierarchy derives from color value and capitalization rather than boldness. Labels in the export panel use sentence case with generous letter spacing inherent to the monospace face. Section headers such as "ENCODER" and "VIDEO" appear in all-caps with increased tracking through spacing rather than font feature. Verify licensing for these families before production use.

## Layout

The workspace follows a classic three-column production layout with a persistent bottom timeline. The central preview canvas dominates visual attention, framed by functional sidebars of narrower fixed width. The left properties panel occupies approximately one-fifth of the horizontal space, presenting clip attributes and editing controls in a vertically scrollable column. The right export panel matches this proportion, containing stacked encoding options organized by category. Both sidebars share the same surface treatment and internal spacing rhythm.

The bottom timeline spans the full viewport width, separated from the upper workspace by a subtle horizontal rule. Within the timeline, track headers align left with fixed width while the time ruler and clip area extend to the right edge. Time markers appear at five-second intervals with finer subdivision lines for frame-accurate positioning. The playhead renders as a vertical red line with a triangular top marker, providing unambiguous temporal reference.

Modal overlays such as the changelog center within the viewport with generous surrounding backdrop darkness. Internal modal content uses card-based grouping with consistent padding and rounded corners that distinguish the overlay from underlying workspace panels. The layout maintains strict alignment grids: sidebar padding, input field widths, and button groups all follow multiples of the base unit.

## Visual language

The interface communicates through density and precision rather than flourish. Controls follow a repeated pattern of dark input surfaces with subtle borders, creating tactile affordance without skeuomorphic depth. Dropdown selectors display current values with right-aligned chevrons; adjacent checkboxes use native styling with blue active states. Sliders combine a track, draggable thumb, and numeric readout in compact horizontal arrangements.

Iconography remains minimal and functional: lightning bolts indicate accelerated encoding, checkmarks confirm selections, plus signs denote addition operations. Status indicators use color alone sparingly, preferring icon-shape differentiation. The timeline grid employs alternating subtle vertical lines to demarcate time segments, with track dividers using slightly stronger horizontal rules.

The preview canvas presents as pure black void when empty, emphasizing the content-to-chrome ratio. When active, footage occupies this space with surrounding letterboxing maintaining aspect ratio. Playback controls float above the canvas bottom edge with reduced opacity, appearing on interaction.

## Components

### Panel

Panels form the fundamental container unit across the interface. Each panel uses `surface-primary` background with optional `border-subtle` borders on dividing edges. Internal padding follows a consistent `relaxed` 1.5rem on sides with `default` 1rem vertical spacing. Section headers within panels receive `compact` 0.75rem top padding and `tight` 0.5rem bottom margin, rendered in `ink-secondary` uppercase text. Panel corners remain unrounded for workspace regions, with `rounded.panel` applied only to floating or modal variants.

### Input Field

Text inputs and dropdown selectors share a unified treatment: `surface-input` background, `border-subtle` 1px border, and `rounded.input` 0.25rem corner radius. Internal padding measures `compact` 0.75rem horizontal with `tight` 0.5rem vertical. Typography uses `system-mono` at the base size. Focus states receive `border-default` white outline with no shadow elevation. Dropdown menus extend below the trigger with matching surface treatment and item hover states in `surface-elevated`.

### Button

Buttons appear in two primary variants. Default buttons use `surface-input` background, `border-subtle` 1px border, `ink-primary` text, and `rounded.input` corners with `compact` horizontal and `tight` vertical padding. Active or primary buttons maintain the same structure with `accent-blue` border and text color. Icon buttons in toolbars reduce padding to `tight` 0.5rem square dimensions with centered glyphs. The timeline track addition buttons use pill-shaped `rounded.pill` with plus icon and label pairs.

### Filter Pill

Filter pills organize categorical content in horizontal rows, as seen in the changelog modal. Each pill uses `surface-secondary` background, `ink-secondary` text, and `rounded.pill` full corner rounding. Active pills invert to `accent-blue` background with white text. Internal padding measures `tight` 0.5rem horizontal with `unit` 0.125rem vertical. Count badges within pills render in `system-mono-small` with slightly reduced opacity.

### Info Banner

Banners communicate system status with elevated visual presence. The container uses `surface-elevated` background, `accent-blue` left border or full border treatment, and `rounded.panel` corners. Icon and text pairings align horizontally with `default` 1rem internal padding. Text renders in `accent-blue-light` for secondary information with `ink-primary` for headings. Banners may include dismiss actions as icon buttons in the right corner.

### Timeline Track

Tracks stack vertically with `canvas` background and `border-subtle` horizontal dividers. Track headers contain disclosure triangles, track type icons, and mute/solo controls in a fixed-width left column. The clip area extends rightward with time-based positioning. Active tracks receive subtle left-edge accent indicators. Empty tracks display dashed placeholder regions for clip insertion.

### Modal Overlay

Modals center with `surface-secondary` background, `rounded.modal` corners, and `border-default` outline. Backdrop uses `canvas` at high opacity. Internal spacing begins with `section` 2rem header padding, followed by content regions at `relaxed` 1.5rem, and footer actions at `default` 1rem. Scrollable content areas maintain right padding for scrollbar accommodation.

## Responsive behavior

The interface targets desktop workstations with precision pointer input. The three-column layout requires minimum viewport widths approximately 1280 pixels to prevent sidebar compression. Below this threshold, the right export panel should collapse to a tabbed or flyout pattern, preserving canvas and timeline visibility. The left properties panel may similarly narrow or transition to overlay mode.

Timeline horizontal scrolling must remain independent of vertical page scroll, with touchpad and mouse-wheel input mapped appropriately. On reduced vertical viewports, the timeline should maintain minimum height sufficient for two video tracks and one audio track, with additional tracks accessible through vertical scroll.

Modal dialogs should constrain maximum width to 640 pixels centered, with internal content reflowing to single column. Filter pill rows should wrap rather than compress on narrow modals.

## Practical implementation guidance

### Preserve
- The near-black canvas foundation and layered gray surfaces that reduce eye strain during extended sessions
- Monospace typography for all data-dense regions, maintaining the technical tool character
- Consistent 1px border treatment with color variation rather than width variation for state changes
- The five-second major interval with subdivided minor intervals in the timeline ruler
- Blue accent restraint: reserve saturation for interactive confirmation and information states only

### Avoid
- Introducing additional accent colors beyond the established blue and gold semantic pair
- Rounding corners on primary workspace panels; reserve radius for floating elements and modals
- Shadows or elevation effects; rely on border and background value changes for depth
- Variable font weights; maintain the uniform 400 regular weight throughout
- Light mode inversion without complete surface recalculation; the current values assume dark adaptation

### Recommended build order
1. Establish the base canvas and surface color stack with correct value progression
2. Implement the three-column grid with proportional sidebar widths and timeline footer
3. Build the input field and button components with shared border and radius tokens
4. Create the timeline with grid overlay, track stacking, and playhead interaction
5. Add modal overlay system with backdrop and centered content constraints
6. Implement export panel with categorized field groups and dropdown patterns
7. Polish with focus states, active selections, and disabled treatments

### Accessibility
- Ensure all interactive elements maintain minimum 4.5:1 contrast against their immediate backgrounds
- Provide visible focus indicators on all keyboard-navigable controls, using `border-default` white outline
- Associate labels explicitly with form inputs; the dense layout risks context loss for screen reader users
- Consider timeline alternatives for users with limited fine motor control; keyboard nudging and zoom controls support precise playhead positioning
- Respect `prefers-reduced-motion` by disabling playhead animation and modal transition effects

## Scope note

This guide covers the primary editing workspace, export panel, timeline, and changelog modal visible in the captured interface. Mobile layouts, audio waveform visualization, color grading tools, and collaborative features are not represented. Keyboard shortcut overlays, custom workspace arrangements, and plugin extension interfaces fall outside current coverage.
