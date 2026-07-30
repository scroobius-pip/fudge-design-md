# How linear.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/linear.app-design)

Last updated: 2026-07-30

## Captured pages

[![Product-development homepage](https://pin.fontofweb.com/10441?format=jpg)](https://design.withfudge.com/share/pin-10441)

[Product-development homepage](https://design.withfudge.com/share/pin-10441)

[![Team issue list](https://pin.fontofweb.com/8256?format=jpg)](https://design.withfudge.com/share/pin-8256)

[Team issue list](https://design.withfudge.com/share/pin-8256)

[![Project overview](https://pin.fontofweb.com/8249?format=jpg)](https://design.withfudge.com/share/pin-8249)

[Project overview](https://design.withfudge.com/share/pin-8249)

[![Empty inbox](https://pin.fontofweb.com/8257?format=jpg)](https://design.withfudge.com/share/pin-8257)

[Empty inbox](https://design.withfudge.com/share/pin-8257)

## Design character

Linear combines an editorially spare product pitch with an operational workspace. The marketing capture is a near-black stage: a short navigation bar, a large white proposition, muted supporting copy, and a product frame that becomes the proof. The application is quieter and denser. It makes project work legible through persistent chrome, shallow layers, compact metadata, hairline separators, and purposeful empty space rather than through large cards or decorative color.

The character to preserve is **controlled, technical, and low-friction**. Visual attention is earned by hierarchy and alignment: a heading, a selected row, a status marker, or a single orange team mark can stand out because the rest of the interface stays restrained.

## Supported design tokens

The values below are directly recorded from the captured pages. The names are practical labels for this guide, not claimed source-token names. They describe a useful pattern inventory, not a complete design system.

### Typography

No declared typeface family was retained, so this guide does not name or recommend one. The captured hierarchy is nevertheless clear: regular text does most of the work; medium weight marks navigation, labels, and issue titles; the large marketing statement uses a slightly heavier display treatment with tight tracking.

| Token | Recorded value | Observed use |
|---|---:|---|
| `type.display` | 64px / 64px, weight 510, tracking -1.408px | Homepage proposition |
| `type.body` | 16px / 24px, weight 400 | Marketing support copy and primary workspace reading text |
| `type.label` | 13px, weight 500 | Compact controls, issue metadata, and small navigation labels |
| `type.compact` | 12–15px, weights 450–600 | Dense project metadata and secondary information |

The most durable relationship is scale, not a particular family: the marketing headline is roughly four times body size, while the workspace stays close to a 12–16px operating range. Preserve regular text for most information and use stronger weight selectively; turning every label into a bold badge would lose the calm hierarchy.

### Color

The batch did not retain structured color roles, palette samples, or background values, so exact color tokens are intentionally omitted. Visual inspection supports a dark marketing and workspace treatment with off-white primary copy, lower-contrast gray supporting text, fine dark dividers, and a limited warm status/team accent. The project-detail capture also shows a light surface. These are appearance observations, not reusable hex specifications.

When adapting the system, establish your own accessible dark and light palettes, then preserve the captured relationship: broad neutral fields; high-contrast primary reading text; muted secondary text; and a very small accent budget. Do not infer a complete success, warning, error, disabled, or focus palette from these pages.

### Spacing and layout

| Token | Recorded value | Observed use |
|---|---:|---|
| `space.micro` | 2px | Tight inset around compact controls |
| `space.tight` | 8px | Repeated row and control rhythm in workspace views |
| `space.row` | 14–16px | Project detail inset and vertical row spacing |
| `space.group` | 24px | Separation between project-detail groups |
| `space.section` | 64px | Larger project-page interval |
| `space.marketing-top` | 72px | Homepage section lead-in |

The homepage also records 46px horizontal padding and 146px side margins in its large capture. Treat those as outcomes of that wide composition, not portable spacing tokens. The application’s repeated 8px and 14–16px values are the more transferable density cues.

### Shape and separators

| Token | Recorded value | Observed use |
|---|---:|---|
| `radius.row` | 6px | Repeated homepage and workspace regions |
| `radius.control` | 8px | Compact controls and selected items |
| `radius.panel` | 12px | Larger framed surfaces on the marketing page |
| `radius.pill` | 9999px | Limited fully rounded chips or status elements |
| `border.hairline` | 0.5px solid | Repeated homepage frame and divider treatment |
| `border.standard` | 1px solid | Project-detail controls and panels |

These values support modest, functional rounding. Corners soften interaction regions without making the application look card-led. Shadows are not a foundation here: only a few isolated records occur, and the stills read primarily through separators, slight surface contrast, and selected-row fills.

## Layout

### Marketing: proposition above proof

The homepage uses a full-width dark shell with a narrow, horizontally organized navigation row. Its main statement starts well below the header, is left aligned, and occupies the left side of the frame; a small “New” callout balances it on the right. The workspace preview is then set inside a large rounded, outlined container beneath the copy. This produces a simple sequence: identify the product, explain its purpose, then show it in use.

The product preview is not decorative background imagery. It is a working interface with a persistent sidebar, issue content, metadata, and an assistant panel. Keep the product demonstration concrete and framed; avoid replacing it with abstract gradients or a carousel when borrowing this composition.

### Workspace: frame, list, detail

The application captures share a persistent outer frame, a shallow top bar, and thin horizontal dividers. In the wide team view, filter chips and view controls occupy the top; a single group header introduces a stack of issue rows. Each row aligns identifier, state marker, task name, and peripheral metadata on one baseline. The visual design favors a table-like scan path without rendering every row as a bordered card.

The project page shifts from list density to a vertical detail sequence: title, muted summary placeholder, one line of inline properties, a full-width update prompt, then sections for description and milestones. Information is introduced in the order needed to act, and unfinished areas are allowed to stay visibly quiet.

### Empty-state composition

The inbox establishes a useful restraint rule. The page keeps its title and utility controls in the header, then leaves a broad field empty except for a small outlined tray illustration and “No notifications” message. The empty state is centered in the available content region, not wrapped in an attention-seeking card. Reserve this treatment for the absence of content; do not reuse it as a generic onboarding hero.

## Visual language

### Surfaces and depth

The inspected dark views use very close surface layers: the page canvas, top chrome, selected row, and framed product preview differ subtly rather than dramatically. Hairline rules define boundaries. The light project-detail capture follows the same discipline—white space and pale borders do the structural work. A selected row or compact control can gain a faint fill, but elevation remains subdued.

### Icons and status marks

Icons are compact, mostly line-based, and paired with text or used as familiar utilities. Issue rows use small circular state marks; project properties use tiny icons alongside readable labels; the team marker supplies the warm accent in an otherwise neutral context. Use icons to improve scanning, not as a substitute for the task name or state text.

### Type as interface structure

Text carries the hierarchy. The large homepage statement is the only expressive display moment. Inside the application, title, issue name, metadata, placeholder, and helper text remain tightly controlled in scale. The result is a tool that feels fast to scan even when it contains many short labels. Avoid oversized application headings, decorative display type in tables, or excessive uppercase utility text.

### Motion

Motion, transitions, sticky behavior, and animation timing are not established by the supplied still captures. Do not derive interaction choreography from this guide.

## Components and visible states

### Global navigation and workspace chrome

The marketing navigation places brand identity at the left, a compact center/right link group, a divider before documentation, and a light rounded “Open app” action. The workspace uses a thinner utility header with page title, filter or settings icons, and control clusters. These are visible desktop states; menu expansion, keyboard navigation, and mobile transformations are not shown.

### Filter chips and view controls

The team list shows small rounded chips in a horizontal strip. Some carry a layered icon and short label; the selected/active treatment is communicated through restrained fill and contrast rather than a large colored tab. A plus control extends the strip, while filter/settings utilities stay at the far edge. The capture supports the selected visual state only; overflow, hover, and pressed treatments are not available.

### Issue list row

A repeated issue row contains a compact identifier, circular status mark, title, and right-aligned date/assignee information. The list group has its own header and count. One row is visibly selected with a slightly different surface, while the others remain nearly flush with the canvas. Preserve the stable text baselines and low-contrast separators; do not turn each issue into an independently elevated card.

### Project property strip

The project overview presents status, priority, lead, target date, team, and an overflow control on one compact line. Each item combines a small icon or marker with a short label. The narrow project capture shows the same properties as a vertically stacked detail panel, which supports the principle that metadata can reflow from an inline strip to a one-per-row list while keeping the label/value pairing intact.

### Update prompt and empty fields

The “Write first project update” region is a full-width, lightly bordered prompt with an edit icon; descriptions and milestones use muted invitation copy rather than filled placeholder cards. This creates an editable, incomplete state without visual noise. Validation, loading, error, permission, and populated-editor states are not shown.

### Inbox empty state

The empty inbox has a small centered illustration and a single message. It demonstrates the no-notifications state only. Badge counts, notification grouping, loading, and error states are outside the captured scope.

## Supported responsive behavior

The project overview appears at 837px and 400px widths, plus narrower captures. Across those views, the information order persists: project identity before properties, update prompt, then lower-detail sections. At the 400px view, property information is presented as a vertical list in a single content column; the 837px view places it in a compact horizontal strip. This supports a responsive rule of reflowing metadata before compressing labels or hiding information.

The supplied set does not establish breakpoint values, mobile navigation behavior, the wide issue-list collapse pattern, sidebar behavior, or responsive type scaling. For an adaptation, preserve reading order and tap-friendly row structure as space narrows, but treat exact breakpoints and control substitutions as design decisions to test rather than observed Linear behavior.

## Practical guidance

### Preserve

1. Build hierarchy from alignment, type contrast, and hairlines before introducing color or elevation.
2. Keep application text compact but readable, with 16px/24px as the recorded main reading reference and smaller labels reserved for metadata.
3. Use 8px and 14–16px spacing for dense controls and rows; open out only when moving between content groups.
4. Give selected rows and small controls subtle surface contrast instead of heavy borders or shadows.
5. Keep issue and project metadata close to the item it qualifies, using compact icon-plus-label pairs.
6. Let empty states be genuinely sparse: one clear message, a small illustration when useful, and ample surrounding space.
7. Use a framed real product view to support a marketing proposition.

### Avoid

1. Do not promote every workspace region into a floating card.
2. Do not use bright accents for routine labels, filters, or row separators.
3. Do not make compact metadata compete with the issue title or project name.
4. Do not normalize the wide homepage margins into a universal spacing scale.
5. Do not invent a full semantic color palette, named font family, or shadow system from these captures.
6. Do not assume unseen hover, keyboard, loading, validation, or error behavior.

## Known gaps and reference scope

This guide studies eight captures from Linear’s marketing homepage, inbox, team list, and project overview. The four gallery images cover the principal marketing composition, a wide issue list, a project detail layout, and a dark empty state.

Structured color data, declared font families, component-level color roles, gradients, composition data, media details, and semantic typography roles were not retained in this batch. Several spacing and border inventories are also bounded rather than exhaustive. The captures do not establish a complete accessible palette, font licensing or availability, interaction states beyond the visible selected/empty/unfinished states, animation, desktop-to-mobile breakpoints, sidebar behavior, or the broader Linear account and settings experience.
