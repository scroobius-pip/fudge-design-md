# How app.superlist.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.superlist.com-design)

Last updated: 2026-07-28

## Design character

Superlist is a calm, document-like task workspace. The product UI reads as a three-pane productivity shell: a narrow dark-to-neutral left rail, a white middle list of tasks, and a spacious right detail/chat column. Personality comes from soft avatars, pill labels, and a single electric-blue primary action—not from heavy chrome or decoration.

What should survive adaptation:

- A **three-column work surface** with clear ownership of nav / list / detail.
- **Quiet monochrome structure** so task content and people stay primary.
- **Blue as the only loud interactive accent** (primary buttons, selection, links).
- Soft **rounded list rows and chips** instead of hard industrial frames.

## Foundations

### Color

Visually the app is light-mode first: white canvas, near-black primary text, cool gray secondary labels, and a saturated blue for primary CTAs and selected nav. Soft multi-color avatars and pastel status chips (green/yellow/red/lavender) sit on top of the neutral shell. No measured role hexes were available for these captures; treat the palette as visual interpretation from the screenshots.

### Typography

Sans-serif throughout. Hierarchy is modest: page title around mid-size bold, list row titles at body weight, metadata and timestamps in smaller gray. Line lengths in the middle column stay short enough for scanning task titles; the right panel uses comfortable body leading for notes and chat.

### Spacing and layout

Generous outer padding and consistent vertical rhythm between list rows. The left rail is icon+label dense but not cramped; the center list uses full-width clickable rows with checkbox, title, date, and assignee cluster. The right panel stacks header, metadata chips, and a chat/composer block with breathing room.

## Visual language

- **Shape:** medium corner radius on cards, chips, and inputs; circular avatars.
- **Borders:** hairline separators between list rows and panel sections rather than heavy boxes.
- **Elevation:** mostly flat; selection and hover are color/background shifts, not deep shadows.
- **Imagery:** people avatars and small status glyphs; no marketing photography in-app.

## Components and states

- **Left navigation:** Home, Inbox, Private, plus nested lists and favorites; selected item highlighted.
- **Task rows:** checkbox, title, due date, assignee avatars, optional status pill.
- **Detail header:** title, share, favorite, more menu; metadata row with status/date/assignee.
- **Chat/notes thread** with composer at the bottom.
- **Primary CTA** as a filled blue pill (e.g. Upgrade).
- Empty and loading states were not clearly captured; do not invent them.

## Responsive behavior

Both captures are the same wide desktop inbox layout (~1712px). Mobile/collapsed patterns are not established here.

## Practical guidance

**Preserve**

- Three-pane information architecture.
- One accent color for commitment actions.
- Soft, human avatars and chips against a quiet shell.

**Avoid**

- Turning the shell into a colorful dashboard.
- Over-bordering every list row.
- Competing accent colors for primary actions.

## Scope note

Studied two captures of `/inbox` at desktop width. Structured color/type tokens were largely unavailable; character is grounded in screenshot inspection. No mobile breakpoints in this set.

## Captured pages

[![Superlist](https://pin.fontofweb.com/8892?format=jpg)](https://design.withfudge.com/share/pin-8892)

[Superlist](https://design.withfudge.com/share/pin-8892)

[![Superlist](https://pin.fontofweb.com/8891?format=jpg)](https://design.withfudge.com/share/pin-8891)

[Superlist](https://design.withfudge.com/share/pin-8891)
