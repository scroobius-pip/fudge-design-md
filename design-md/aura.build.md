# How aura.build is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aura.build-design)

Last updated: 2026-08-08

## Captured pages

[![Bright white portfolio hero with oversized left headline](https://pin.fontofweb.com/8824?format=jpg)](https://design.withfudge.com/share/pin-8824)

[Bright white portfolio hero with oversized left headline](https://design.withfudge.com/share/pin-8824)

[![Dark workspace with floating selection modal over hero art](https://pin.fontofweb.com/8823?format=jpg)](https://design.withfudge.com/share/pin-8823)

[Dark workspace with floating selection modal over hero art](https://design.withfudge.com/share/pin-8823)

[![Dense changelog list with stacked release rows and thumbnails](https://pin.fontofweb.com/8663?format=jpg)](https://design.withfudge.com/share/pin-8663)

[Dense changelog list with stacked release rows and thumbnails](https://design.withfudge.com/share/pin-8663)

[![Dark release-history hero with centered release card](https://pin.fontofweb.com/8662?format=jpg)](https://design.withfudge.com/share/pin-8662)

[Dark release-history hero with centered release card](https://design.withfudge.com/share/pin-8662)

[![Changelog section with colored feature pills and long release copy](https://pin.fontofweb.com/8661?format=jpg)](https://design.withfudge.com/share/pin-8661)

[Changelog section with colored feature pills and long release copy](https://design.withfudge.com/share/pin-8661)

[![Dark AI landing page with huge headline and right-side utility card](https://pin.fontofweb.com/8660?format=jpg)](https://design.withfudge.com/share/pin-8660)

[Dark AI landing page with huge headline and right-side utility card](https://design.withfudge.com/share/pin-8660)

## Overview

Aura is built around a dark application shell and a bright inner canvas. The site moves between template pages, a React generator workspace, and a changelog timeline, but the same narrow palette, thin borders, and rounded cards keep those pages in one family. The result feels like a product studio: serious enough for technical work, yet polished enough for a template marketplace.

The most important contrast is structural, not decorative. Near-black chrome frames the page. White or lightly toned canvases carry the showcase material. Small mint, cream, and pale blue accents mark actions, badges, and status labels without taking over the page. Inter does the full job of the type system, so hierarchy comes from size, weight, and spacing rather than switching faces. The design stays compact, but the content never feels cramped because the large surfaces hold a lot of breathing room around the focused blocks.

## Colors

Aura uses a restrained palette with a few soft accents. The dark shell stays close to black, the working cards sit in charcoal, and the template canvas turns fully white when the page needs a bright presentation surface. Accent colors stay soft rather than loud, which keeps the interface calm even when the page is dense with controls, release notes, and preview grids.

| token | value | use |
|---|---|---|
| `action` | `#BFDBFE` | Cool action fill for primary buttons and selected pills |
| `actionStrong` | `#6EE7B7` | Bright success fills and active feature badges |
| `canvas` | `#FFFFFF` | The white inner stage for template previews and hero pages |
| `surface` | `#191C21` | Main charcoal cards, release blocks, and dark page sections |
| `surfaceDeep` | `#000000` | Outer shell, rails, and the deepest app chrome |
| `surfaceMuted` | `#F5F5F5` | Quiet light panels, inset fields, and pale preview surfaces |
| `ink` | `#FAFAFA` | Main text on the dark shell and dark cards |
| `inkSoft` | `#A3A3A3` | Metadata, helper copy, and secondary labels |
| `lineSoft` | `#D4D4D4` | Thin rules and quiet separators on white canvases |
| `borderLight` | `#E5E5E5` | Light frames around bright preview surfaces |
| `border` | `#737373` | Standard hairline borders on dark cards and panels |
| `borderStrong` | `#191C21` | Denser borders for overlays and nested dark surfaces |
| `statusSuccess` | `#BBF7D0` | Green feature chips and positive status marks |
| `statusWarm` | `#FEF3C7` | Cream badges and highlight labels |
| `statusNeutral` | `#A6A6A6` | Quiet utility marks and inactive control text |

The relationship between the modes is simple: the dark shell carries navigation and dense app structure, the bright canvas gives template work room to breathe, and the accent colors stay small so they read as signals instead of decoration. Mint and cream are used for short labels, while the cool blue supports action controls and gentle selection states. Photographic imagery sits inside framed cards and previews on both light and dark surfaces, while the accent colors remain secondary so the images keep the focus.

## Typography

Inter is the only type family visible in the system, so the design depends on scale and weight to create hierarchy. Large titles are tight and confident, while metadata and utility labels stay compact and quiet. The pages use the same family for navigation, controls, release dates, and long-form descriptions, which keeps the interface consistent even when the layout changes from a white showcase page to a dark changelog board.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `heroDisplay` | Inter | 4rem | 700 | 0.95 | -0.04em | Main template hero headings |
| `sectionDisplay` | Inter | 3rem | 700 | 0.98 | -0.03em | Large changelog and workspace headlines |
| `pageDisplay` | Inter | 2.5rem | 700 | 1 | -0.02em | Page titles and major section leads |
| `cardTitle` | Inter | 1.25rem | 600 | 1.15 | -0.01em | Card titles and release headings |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Long descriptions and supporting copy |
| `bodyMedium` | Inter | 1rem | 500 | 1.5 | 0em | Primary buttons and emphasized body text |
| `ui` | Inter | 0.75rem | 500 | 1.35 | 0.01em | Navigation, control text, and toolbar labels |
| `meta` | Inter | 0.75rem | 400 | 1.4 | 0em | Views, dates, and author-style metadata |
| `label` | Inter | 0.75rem | 600 | 1.2 | 0.08em | Uppercase chips and compact state tags |

The type system stays focused on one family and a small set of roles. Bigger headings carry the page, mid-scale titles separate cards and sections, and the smaller roles keep the dense workspace and changelog rows readable. Heavy titles are paired with roomier leading. Utility text is smaller and slightly tighter, which helps it sit beside icons, timestamps, and button text without stealing attention. The emphasis changes with weight and spacing instead of any change in family. Verify licensing for these families before production use.

## Layout

### Framing

Aura frames most pages inside a dark outer shell with thin borders and wide side gutters. The shell is not decorative; it acts like the border of an editor window and makes the content feel contained. On the template page, the shell surrounds a bright white inner canvas. On the changelog pages, it surrounds stacked release cards and a large centered content column. On the React workspace, it becomes a left rail plus a large active stage. The same framing logic appears everywhere, which makes the site feel like one product even when the page purpose changes.

### Template hero

The brand template page uses a split hero: a large title and compact metadata cluster on the left, with a visual preview on the right. The preview sits in a framed browser-like window that has a wide bright interior and a thin border. The hero does not stretch edge to edge without restraint; it stays inside generous side margins so the white canvas feels deliberate rather than empty. The action cluster sits near the title rather than buried below it, which keeps the page fast to scan.

### Timeline and release blocks

The changelog layout is vertical and measured. A large headline and a short explanatory paragraph sit above a bordered release card. That card contains version labels, dates, long headings, body text, and image groups that stack to the right of the main copy. The structure uses 24px to 32px internal spacing for reading comfort, then opens to larger 64px and 96px gaps between major sections. The result is dense but not heavy. Hairline rules separate entries without creating a full grid of boxes.

### Workspace and overlay

The React generator view uses a more operational layout. A narrow dark rail holds messages and prompts, while the main stage holds the active design. A floating selection panel sits above the stage and blocks part of the view, but it does not erase the underlying structure. The panel uses the same border language and rounded corners as the rest of the site, so it feels like part of the system instead of a foreign window. Utility controls remain in the top bar, keeping the stage itself clean.

## Visual language

Aura’s visual language is controlled, technical, and lightly editorial. It does not rely on color for its personality alone. Instead, it combines three things: a near-black shell, a bright showcase canvas, and small accent chips. That combination makes the page feel precise and current without turning flashy. The page is comfortable with very large headlines, but those headlines are always paired with calm copy and simple shapes.

The system prefers straight edges and moderate rounding. Chips are small and nearly square at the scale of a tag. Buttons and popovers soften into pill or panel shapes. Cards sit in the middle with 16px radii, which is enough to separate them from the background without making them playful. The strongest visual moments come from the relationship between contrast and depth: bright white next to charcoal, then a floating dialog or a preview frame on top.

Depth is subtle. Instead of dramatic shadows, the site uses borders, nested surfaces, and the occasional soft lift to separate layers. That makes the interface feel sturdy. The preview images matter more than ornamental effects, so the visual language gives them room. Release thumbnails, template canvases, and modal lists all get enough border and spacing to read clearly even when the page is full.

## Components

### Top navigation

The top bar is a thin horizontal strip anchored by the Aura mark on the left and a centered set of navigation links. The links are compact, uppercase or near-uppercase, and spaced evenly so the row reads as a control surface rather than a marketing menu. On dark pages, the bar blends into the shell and stays understated. The active state is quiet, using subtle contrast rather than a heavy underline or loud fill. Utility icons at the far right stay small and circular so they never compete with the main page title.

### Template page hero

The template hero combines an eyebrow, a large title, a metadata row, and one or two action buttons. The title is the strongest element on the page, and it sits flush left with a lot of room around it. The metadata row stays compact beneath it, using small icons and light text. The action buttons are rounded pills, with the primary action using the accent fill and the secondary action staying more neutral. This component depends on a strong visual balance: text on one side, preview on the other, with neither side overfilling the frame.

### Browser preview frame

The browser-like frame is one of the clearest structural motifs in the system. It uses a dark outer body, a light inner canvas, small window controls, and a thin boundary that keeps the content from floating away. The frame works best when the interior is almost empty around the key composition, because that open space makes the preview feel intentional. The frame radius is larger than the chip radius but smaller than a pill, so it sits comfortably between control and card. This is the component that makes the template page feel like a product sample instead of a static poster.

### Release cards and timeline rows

Release cards are dense, information-rich blocks. They combine a version mark, a date, a bold heading, a supporting paragraph, and a grid of visual examples. Rows inside the card are separated by fine borders and just enough vertical space to keep the text readable. The cards use the dark surface, light text, and soft status chips, so they feel related to the rest of the app rather than isolated announcements.

### Status chips

Status chips are small, rounded labels such as NEW and FEATURE. They use mint, cream, or a cool blue fill, with dark text and very compact padding. Their job is to organize dense lists quickly, so they need to stay legible at a glance. The label weight is strong, the letter spacing is slightly opened, and the corners are soft but not full pills unless the chip appears in a button-like context. These chips should never grow into large banners; they work because they are small, repeated, and easy to scan.

### React workspace and modal

The React generator workspace adds a darker operational tone. A left rail holds conversation or prompt history, while the center holds the live design stage. The modal panel floats above the stage with a denser border and its own scroll area. It shows selection rows, image thumbnails, and small tags that help sort assets without leaving the page. The component’s success comes from restraint: the overlay should feel like a tool window, not a second page. Keep the typography compact and the spacing tight enough for lists, but not so tight that the rows collapse together.

### Account popover

The account popover is a compact dark menu with an avatar, plan status, usage counters, and a short navigation list. It uses the same border and radius language as the rest of the site, which keeps it from feeling pasted on. The rows should be clearly separated, but the popover still needs to feel lightweight enough to dismiss quickly. The plan line and usage counts deserve the strongest contrast in the panel. Secondary actions, such as settings and logout, belong lower in the list and can use the quieter text tone.

## Responsive behavior

Aura should keep the same reading order as the layout narrows: title, metadata, action, then preview or supporting content. The template page can collapse its two-column hero into a vertical stack, but the visual preview should still come after the main message. The changelog card should stay readable as a single column with images stacked below text rather than squeezed into a too-tight grid. The React workspace needs a clear fallback where the left rail becomes a drawer or collapsible column and the floating modal can still be reached without blocking the stage.

The type scale should reduce in steps, not jump abruptly. The biggest headline can soften to a lower display size, while body text and labels stay close to their desktop sizes for legibility. Spacing should compress in the outer gutters first, then inside the cards, while the chip and button shapes keep their proportions. The white template canvas must remain visibly distinct from the dark shell even on narrower screens, so borders and spacing need to do part of the job that large empty margins do on desktop.

## Practical implementation guidance

### Preserve

- Keep the dark shell, bright canvas, and soft accent chips together; that contrast is the core of the system.
- Use Inter everywhere and let scale, weight, and tracking create hierarchy.
- Preserve the small-to-large rounding progression for tags, controls, and larger cards.
- Keep release rows, template frames, and overlay panels separated by borders and spacing, not by heavy shadows.
- Let preview imagery stay prominent and give it enough air to read clearly.

### Avoid

- Avoid swapping in a second font family for display headings.
- Avoid neon accents, glossy gradients, and heavy blur effects that fight the restrained palette.
- Avoid over-rounding every surface into a pill; the system needs some straight, firm edges.
- Avoid turning every badge into a large button-like control.
- Avoid compressing the dense changelog and modal rows so tightly that their text becomes hard to scan.

### Recommended build order

1. Build the dark shell, top navigation, and utility strip.
2. Add the bright template canvas with the hero and action cluster.
3. Add the browser-style preview frame and the release card pattern.
4. Add the status chips and the changelog timeline blocks.
5. Add the React workspace split view and the floating selection panel.
6. Finish with the account popover, spacing cleanup, and responsive stacking.

### Accessibility

- Keep contrast strong on both the black shell and the white canvas.
- Make sure chips, buttons, and status labels are readable without color alone carrying the meaning.
- Use clear focus states on navigation links, buttons, and menu items.
- Keep line lengths reasonable in the big titles and in the longer changelog copy.
- Preserve enough separation between the bright canvas and the dark shell so the edge of the page remains obvious.

## Scope note

This guide covers Aura’s dark shell, the white template preview page, the React generator workspace, the changelog timeline, and the account popover. It does not define alternate landing layouts, full mobile breakpoints, motion, empty states, or the complete icon set.
