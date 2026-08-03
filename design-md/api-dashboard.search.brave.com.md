# How api-dashboard.search.brave.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/api-dashboard.search.brave.com-design)

Last updated: 2026-08-03

## Captured pages

[![Centered subscription modal with spending-cap chips and dual actions](https://pin.fontofweb.com/9446?format=jpg)](https://design.withfudge.com/share/pin-9446)

[Centered subscription modal with spending-cap chips and dual actions](https://design.withfudge.com/share/pin-9446)

[![Dark API keys empty state with a single lavender browse-plans button](https://pin.fontofweb.com/9445?format=jpg)](https://design.withfudge.com/share/pin-9445)

[Dark API keys empty state with a single lavender browse-plans button](https://design.withfudge.com/share/pin-9445)

[![Plans page with two tall pricing cards and a compact tab switcher](https://pin.fontofweb.com/9444?format=jpg)](https://design.withfudge.com/share/pin-9444)

[Plans page with two tall pricing cards and a compact tab switcher](https://design.withfudge.com/share/pin-9444)

[![Dashboard overview with left rail, top search field, and analytics panel](https://pin.fontofweb.com/9443?format=jpg)](https://design.withfudge.com/share/pin-9443)

[Dashboard overview with left rail, top search field, and analytics panel](https://design.withfudge.com/share/pin-9443)

[![Sparse verify-email page with centered copy on a nearly empty canvas](https://pin.fontofweb.com/9442?format=jpg)](https://design.withfudge.com/share/pin-9442)

[Sparse verify-email page with centered copy on a nearly empty canvas](https://design.withfudge.com/share/pin-9442)

## Overview

api-dashboard.search.brave.com is a dark, state-driven developer console. The page is built to make account status, plan selection, API keys, and verification messages easy to scan before anything else. The design stays disciplined: one strong lavender-blue action color, charcoal surfaces with tight borders, and compact Inter text that keeps long forms and pricing blocks readable without decorative noise.

The structure feels like an application workspace rather than a marketing page. A thin top bar, a persistent left rail, and a large rounded main canvas create the core frame. Inside that frame, content switches between empty states, dense pricing cards, analytics panels, and modal dialogs, but the visual language stays consistent. The strongest difference between screens is density: some states are almost empty, while others stack tabs, cards, filters, and tables into a careful grid.

The system’s personality comes from restraint. It uses clear hierarchy, soft rounded corners, and a small palette of near-black surfaces plus pale lavender highlights. The result is technical and calm, with enough contrast to make plan choice and account state obvious at a glance.

## Colors

The palette lives almost entirely in the dark end of the scale. `#141415`, `#1C1C1D`, `#1F1F23`, and `#252527` form the main surfaces. `#000000` appears at the edge of the shell and in the deepest negative space. Borders sit just above the surfaces with `#303032` and `#39393B`, which keeps panels separated without turning the interface into a grid of bright boxes.

Text follows a clear ladder. `#FAFAFB` is the primary reading color on dark panels. `#FFFFFF` appears where maximum contrast is needed. `#E4E4E5` and `#F2F2F3` support headings, labels, and light text treatments inside cards. `#C9C9CA` and `#909093` soften body copy, helper text, and metadata so the page can carry a lot of information without feeling loud.

The action system is intentionally narrow. `#B2C3FF` is the main fill for primary buttons and selected plan controls. `#7C91FF` sharpens the same family for links, selected tabs, and active accents. `#212848` gives the action color a deeper wash for inset or layered moments. Together these tones create a lavender-blue signature that reads clearly against the charcoal canvas without drifting into neon. The page does not rely on gradients or colorful surface blocks; color is used as signal, not decoration.

## Typography

Licensing for Inter and Applesystem was not supplied.

Inter is the designed face of the console. It carries the entire visible hierarchy, from sparse verification copy to large page headings and card titles. The rhythm is compact and practical: strong weight changes, modest tracking adjustments, and line heights tuned for short dense paragraphs. Applesystem appears only as a system fallback in a few raw controls; it does not need a separate brand role.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| page-title | Inter | 2rem | 700 | 1.31 | -0.016em | Main screen headings such as Dashboard and API keys |
| section-title | Inter | 1.75rem | 600 | 1.29 | -0.018em | Secondary section headers such as Available plans |
| card-title | Inter | 1.375rem | 600 | 1.27 | -0.018em | Plan names and modal titles inside panels |
| body | Inter | 0.875rem | 400 | 1.57 | 0em | Supporting copy, explanations, and status text |
| body-strong | Inter | 0.875rem | 600 | 1.57 | 0em | Emphasis inside cards, labels, and compact summaries |
| control | Inter | 0.833rem | 400 | 1 | 0em | Small button and chip text |
| control-strong | Inter | 0.833rem | 600 | 1.5 | 0.03em | Primary buttons, tab labels, and pill controls |
| label | Inter | 0.75rem | 600 | 1.5 | 0em | Field labels, small headings, and compact metadata |

The hierarchy depends on size and weight more than on decorative contrast. Page titles sit at 32px and stay highly legible on the dark canvas. Section titles step down only a little, which helps each major area feel substantial. Card titles remain firm but smaller, so the pricing blocks and modal headers do not compete with the screen title. Body copy stays at 14px and remains the default language for explanations. The small control styles are important because the interface uses many pills, tabs, and compact actions; their medium weight and slight tracking give them enough authority to read as buttons instead of labels.

## Layout

The layout is an app shell with a strong internal frame. A fixed left rail holds navigation groups. A top bar spans the page with search at the center and utility links or account controls on the right. The main workspace sits inside a large rounded panel with generous inset spacing, so the content feels like a contained system rather than a browser page.

Spacing is disciplined and repetitive. Horizontal gutters around the shell are wide, with the main canvas sitting well inside the edges. The top bar and rail use 24px gaps and 28px to 40px padding bands. Large interior sections often open with 64px vertical spacing, then tighten into 24px or 16px gaps for cards, tabs, and filters. That contrast keeps the page from flattening into a single long column.

The pricing view uses a two-column card grid beneath a compact tab row. Each card is tall, heavily bordered, and segmented into title, summary, price, call to action, and feature list. The dashboard overview switches the same canvas toward analytic structure: a headline block, a status card, then a chart-like panel with filter controls running along the top edge of the visualization area. The empty API keys state uses a centered stack with a small icon, a short message, and one main action button. The verify-email page is even sparser, placing a small centered text block high on a nearly empty canvas so the instruction is impossible to miss.

The modal is the most compressed layout in the system. It floats above a dimmed background, holds a single decision, and uses clear vertical separation between the spending-cap choice, chip-style options, and the final action row. Rounded corners, even internal spacing, and centered alignment keep the dialog calm despite its transactional content.

## Visual language

The visual language is controlled and utilitarian. Surfaces are flat, borders are hairline-thin, and shadows are almost absent. Depth comes from layered panels and clear containment rather than glow or blur. That choice makes the interface feel reliable for work that involves keys, plans, and account access.

Lavender-blue is the only expressive color family. It marks the primary call to action, the selected tab, and the active choice inside plan and spending controls. Elsewhere, the page prefers grays and near-blacks. This gives the system a strong hierarchy: the eye goes first to the current action, then to the current state, then to the supporting details.

Corner treatment is soft but not playful. Buttons are fully pill-shaped, cards use moderate rounding, and the largest workspace panel rounds just enough to separate it from the shell. Fields and chips sit in a middle range between squared and rounded, which keeps the interface from feeling either severe or toy-like. The overall tone is dense, quiet, and precise.

## Components

### Top bar and left rail

The shell combines a persistent rail with a thin header strip. The rail groups navigation into clear sections such as dashboard, subscriptions, and account. Items are stacked with generous vertical rhythm so the list stays readable even when it is long. The top bar holds search in a centered field, with action links and account controls pushed to the right. This arrangement makes the workspace feel navigable at all times, even on screens that are mostly empty.

### Main workspace panels

Most content lives inside large rounded panels that share the same dark fill and border language. These panels carry the main page title, explanatory text, and the next action. Their value is structural rather than ornamental: they keep each state self-contained. The empty states use this structure to stay focused, while the pricing and analytics screens use it to hold denser information without visual clutter.

### Pricing cards and tabs

The plans view uses a compact tab row followed by two tall pricing cards. Tabs are pill-like and low-contrast until selected, at which point the active label shifts brighter and gains stronger emphasis. Each pricing card has a clear anatomy: title, short explanation, price block, primary button, credit note, capacity line, and feature list. Dividers carve the card into readable bands. The cards are nearly symmetrical, which makes comparison easy.

### Modal dialog

The subscription confirmation dialog is a centered decision surface. It uses a darker panel over a dimmed backdrop, then divides choices with internal borders and a bright outline around the active spend limit. Radio-like selectors, chip choices, and the final action row create a simple decision path. The primary button is the largest lavender element in the system, while the secondary button stays quiet and bordered. The dialog’s strength is clarity: one choice, one cap, one way forward.

### Buttons, chips, and small controls

Primary buttons are pill-shaped, filled with `#B2C3FF`, and set in dark text or very dark text depending on context. Secondary buttons keep a charcoal fill with a border so they recede behind the main action. Chip controls are smaller and denser, often in a row of options with one selected state carrying the strongest fill or outline. Small buttons and labels use medium-weight Inter at 12px to 13px so they still read as deliberate controls rather than miniature body copy.

### Empty states and status copy

Empty states are minimal and centered. They rely on one icon, one heading, one short explanation, and one clear action. The verify-email page uses the same idea with even less visual weight: a centered line of instruction and a linked next step. These screens prove that the system can carry sparse content without becoming weak or unfinished.

## Responsive behavior

On narrower widths, the rail should collapse before the content panels lose their breathing room. The main canvas should keep its internal spacing and allow cards to stack cleanly rather than forcing narrow columns. Pricing cards can drop from two columns to one, while tabs and chips should wrap or scroll in a controlled way.

The top bar should keep search usable at smaller sizes, even if that means tightening the surrounding utility area. Modal dialogs should remain centered with enough edge clearance to avoid clipping the rounded corners. Long body copy should reflow without changing the typographic scale too aggressively; the system works because its text is already compact. The most important rule is to preserve contrast and panel integrity before squeezing decorative spacing.

## Practical implementation guidance

### Preserve

- Keep the dark shell, not a light admin background.
- Keep Inter as the visible interface face.
- Keep lavender-blue as the only strong action color.
- Keep the border-first panel language and moderate corner radii.
- Keep the difference between empty states, pricing cards, dashboards, and dialogs.

### Avoid

- Avoid gradients, glass effects, neon accents, and soft illustration-style treatments.
- Avoid mixing many unrelated accent colors into the shell.
- Avoid oversized shadows or blurred card depth.
- Avoid tiny text below the existing 12px control scale.
- Avoid turning every panel into a separate visual “hero”; the page works because the structure is steady.

### Recommended build order

1. Build the shell: rail, top bar, and main canvas.
2. Add the core typography scale and dark color tokens.
3. Build the shared panel and button primitives.
4. Add empty states and centered instruction blocks.
5. Add pricing cards and tab controls.
6. Add the analytics panel and filter row.
7. Add the subscription modal and spending chips.
8. Refine responsive stacking and overflow handling.

### Accessibility

- Keep the lavender action color paired with shape or border changes, not color alone.
- Preserve strong contrast for body copy on every dark surface.
- Make focus states visible on pills, chips, tabs, and icon controls.
- Keep all clickable controls large enough to be used comfortably.
- Ensure empty states still expose a clear action path when the screen is sparse.

## Scope note

This guide covers the authenticated console states shown here: dashboard overview, API keys empty state, plans browser, subscription confirmation, and verify-email screen. Mobile-specific layouts, hover or pressed styling, animated transitions, and alternate light-theme surfaces are not included. Spacing values are rounded to the packet’s 0.125rem step.
