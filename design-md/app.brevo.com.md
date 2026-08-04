# How app.brevo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.brevo.com-design)

Last updated: 2026-08-04

## Captured pages

[![Home dashboard with greeting, calendar, and onboarding cards](https://pin.fontofweb.com/10059?format=jpg)](https://design.withfudge.com/share/pin-10059)

[Home dashboard with greeting, calendar, and onboarding cards](https://design.withfudge.com/share/pin-10059)

[![Campaign listing with pink alert banner and compact metric rows](https://pin.fontofweb.com/10111?format=jpg)](https://design.withfudge.com/share/pin-10111)

[Campaign listing with pink alert banner and compact metric rows](https://design.withfudge.com/share/pin-10111)

[![API keys settings page with lavender notice and blank table](https://pin.fontofweb.com/10058?format=jpg)](https://design.withfudge.com/share/pin-10058)

[API keys settings page with lavender notice and blank table](https://design.withfudge.com/share/pin-10058)

[![Billing customization page with promo strip and purchase summary](https://pin.fontofweb.com/5148?format=jpg)](https://design.withfudge.com/share/pin-5148)

[Billing customization page with promo strip and purchase summary](https://design.withfudge.com/share/pin-5148)

## Overview

Brevo’s app reads as a compact operational console. The page language is calm and direct: pale side navigation, white workspace cards, thin gray boundaries, and a small set of purple actions carry the whole system. Nothing feels theatrical. The interface is built to let a user move from one task to the next without losing the thread, so the design emphasizes legibility, short labels, and a clear relationship between headings, controls, and data blocks.

The visual system stays steady across home, campaigns, settings, and billing. A slim utility bar sits above each view, a large page title anchors the route, and the content below shifts between summary cards, table-like rows, notices, and plan builders. State changes are easy to spot because they use restrained color cues instead of heavy decoration: green for active navigation, lavender for recommendation panels, blue for information, pink for warning, and purple for the main action path. The result is a product UI that carries a lot of information while still feeling orderly.

## Colors

| token | hex | use |
|---|---|---|
| action | `#6358DE` | Primary buttons, active tabs, selected outlines, and link accents |
| ink | `#1B1B1B` | Headings, row titles, icons, and the strongest reading color |
| muted-ink | `#696969` | Supporting copy, timestamps, helper text, and quiet metadata |
| canvas | `#FFFFFF` | Main page background and the default card fill |
| shell | `#FAFAFA` | The light neutral shell used on broad structural surfaces |
| surface | `#F7F7FD` | Soft card backgrounds and calm empty-space panels |
| surface-quiet | `#EFEEFC` | Recommendation blocks and low-pressure callouts |
| surface-blue | `#E1F1FF` | Information strips, help notes, and cool notices |
| surface-mint | `#D8EFE8` | Positive highlights and completion-adjacent states |
| surface-green | `#D7FEC8` | Selected navigation rows and active emphasis |
| surface-danger | `#FFECEE` | Warning banners and suspension notices |
| surface-warm | `#FFFDF6` | Soft caution panels and low-stress alerts |
| border | `#E3E3E3` | Card outlines, table rules, and field strokes |
| border-soft | `#F0F0F0` | Quiet dividers and inset edges |
| accent | `#DEAF02` | Premium badges, outlined highlights, and special affordances |
| success | `#0B996F` | Confirmation dots, success text, and positive status marks |
| dark | `#1B1B1B` | Filled dark buttons and the strongest text emphasis |
| dark-2 | `#2C2C2C` | Dark button gradients and deeper control surfaces |
| text-soft | `#CFCFCF` | Disabled or tertiary text on pale surfaces |

The palette is mostly white and near-white. That makes the workspace feel open even when it carries dense tables, forms, or plan details. Purple is the dependable action color, and it stays scarce enough that it can do real work as a signal. Green marks active state and success. Blue and lavender support explanation and recommendation. Pink is reserved for warnings and account issues, while cream keeps caution soft instead of alarming. Gold appears as a premium marker, not as a broad brand field. The neutral stack from white to shell to surface to border gives the app structure without turning every panel into a hard box.

## Typography

Inter is the core voice of the interface. It carries headings, body copy, labels, values, and navigation with very little contrast in style, which helps the console feel unified rather than overdesigned. Arial appears in the tiniest button chrome and utility controls, where the interface compresses into compact browser-like labels. Times and Applesystem are present as fallback layers, not as the intended design voice. Tomato Grotesk is also part of the family set, credited to Andrea Biggio and The Designers Foundry, but it does not drive the visible hierarchy on these screens. Inter is credited to Rasmus Andersson and Rsms.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| page-title | Inter | 1rem | 600 | 1.5 | -0.01em | Page titles, section anchors, and stronger card labels |
| body | Inter | 1rem | 400 | 1.5 | 0em | Most interface text, descriptions, and row content |
| label | Inter | 0.875rem | 400 | 1.43 | 0em | Sidebar items, tabs, filter labels, and quiet metadata |
| value | Inter | 1rem | 700 | 1.25 | 0em | Counts, prices, key metrics, and primary row values |
| micro-ui | Arial | 0.833rem | 400 | 1 | 0em | Compact button text and tiny utility chrome |
| navigation | Inter | 0.875rem | 600 | 1.43 | 0em | Sidebar destinations, top utility labels, and active route text |

The hierarchy relies more on weight and spacing than on a big size ladder. Bold is used carefully, mostly for page titles, selected navigation, and important metrics. Regular body copy stays close to 16px, while secondary labels sit at 14px. That keeps the whole interface calm and readable. The smallest controls are still legible because they keep a clean line height and avoid decorative letter spacing. The system works best when text remains short, sentence case is consistent, and the page does not introduce a second display family for emphasis.

## Layout

The layout is built around a pale left rail and a wide main workspace. The rail runs tall, grouped by product area, and the active destination is shown with a soft green fill and a compact rounded capsule shape. Premium destinations use a small gold badge that marks difference without interrupting the rail’s calm rhythm. The main content sits on a white field and starts with a utility strip, then a page title, then the route-specific surface. That sequence holds across the home dashboard, campaign listing, API keys page, and plan customization flow.

Spacing is disciplined and compact. The outer workspace feels generous, but the interior rhythm stays tight enough for operational work. The page repeatedly returns to 4px, 8px, 12px, 16px, 24px, 32px, 40px, 64px, and 120px as the main steps. Smaller values separate filters, chips, and compact button groups. Mid-range spacing gives rows, cards, and banners room to breathe. Larger values separate major sections and keep the home dashboard from feeling crowded. That balance is what lets the product carry lists, summaries, notices, and forms on the same screen without becoming visually loud.

Corners repeat in a small family: 8px for fields, 12px for chips, 16px for cards and rows, 20px for softer panels, and 32px for larger frames. The most useful shape is the 16px card radius, which shows up in data rows, settings panels, and plan cards. Borders are thin, usually 1px, and they do most of the separation work. A faint shadow only appears where a surface needs a little lift. Because the layout is so text-forward, the spacing system matters as much as the palette: every block needs enough air to keep titles, helper text, and values readable at a glance.

The route family also follows a stable composition pattern. The home dashboard uses a greeting, a calendar block, onboarding cards, and summary tiles. Campaigns shifts into alerts, filters, and a dense list of rounded rows. Settings turns into an anchored panel with a notice, search, and a table frame. Billing uses a promo strip, a summary block, and a purchase action. In each case, the page keeps the same visual grammar even when the content type changes.

## Visual language

Brevo’s visual language is administrative and controlled. It uses flat white cards, thin borders, and short color bursts to organize information. The strongest visual moves are tints, not ornaments. Pink marks a risk or interruption, lavender marks a recommendation, blue marks an information block, green marks an active selection, and cream keeps caution soft. This makes the app feel calm even when the account state is urgent.

Buttons are small and purposeful. The primary action is a dark filled pill. Secondary actions are white, outlined, or edged with gold. Tabs are understated and rely on a purple underline instead of a large pill or a heavy fill. Rows behave like compact cards: a bold title on the left, lighter supporting text beneath, and aligned metrics or actions on the right. Icons function as punctuation. They help scan a row or a notice, but they do not take over the page.

Depth is minimal. A faint border or a very soft shadow is usually enough to separate one block from another. That restraint matters because the pages already carry a lot of text, numbers, and form controls. The system does not need photography, dramatic gradients, or layered glass effects to work. Its strength is the way it keeps a dense interface legible through repetition, alignment, and a very narrow visual vocabulary.

## Components

### Application shell

- **Anatomy:** Pale left rail, white main workspace, and a slim top utility row.
- **Surface:** The rail sits on a soft neutral background while the content area stays white.
- **Typography:** Rail items use the quieter navigation rhythm; the utility row uses the same restrained voice.
- **Shape:** Active destinations read as filled capsules with medium-rounded corners.
- **Spacing:** Keep the rail vertically grouped and let the main workspace breathe with generous outer padding.
- **Visible states:** The current route uses `surface-green`; premium destinations carry a small gold badge.

### Page header and utility bar

- **Anatomy:** Route label, page title, right-aligned utilities, and one or two actions.
- **Surface:** The bar remains transparent over the white workspace.
- **Typography:** The title is the strongest text on the page, but it stays inside the same Inter-led system.
- **Composition:** Title on the left, utilities and actions on the right.
- **Variants:** Home uses a greeting style; campaigns uses a direct section title; billing uses a strong step title.
- **Visible states:** The primary action is dark filled; the secondary action is outlined or lightly accented.

### Status banners

- **Anatomy:** Icon, short message, and sometimes a linked phrase or action.
- **Surface:** Pink for danger and suspension, lavender for recommendation, blue for information.
- **Typography:** One-line or two-line body copy, with the link reading as part of the sentence.
- **Shape:** A large rounded rectangle with enough padding to read as a distinct block.
- **Spacing:** The banner sits directly under the title or top content edge, before the data area.
- **Visible states:** Warning, info, and recommendation are the key states; none should become visually loud.

### Data workspace

- **Anatomy:** Tab strip, search field, filters, bulk checkbox, list rows, metrics, and pagination.
- **Surface:** White rows with light borders and enough internal padding to hold names, statuses, and counts.
- **Typography:** Row titles are bold; timestamps, status text, and metrics are quieter.
- **Composition:** Filters sit above the data, metrics sit to the right, and row actions sit at the far edge.
- **Shape:** Rows feel like cards, but they should remain compact and efficient.
- **Visible states:** The selected tab is purple; empty values become dashes; status dots use small green or gray marks.

### Forms, toggles, and option cards

- **Anatomy:** Labeled inputs, slider tracks, pill toggles, and side-by-side option cards.
- **Surface:** Fields and cards are white with 1px neutral strokes; selected choices get a stronger purple edge.
- **Typography:** Labels and helper text stay modest; values and totals are slightly stronger.
- **Composition:** The form reads top to bottom, with the most important total or current value aligned to the right or anchored to the bottom.
- **Variants:** Recommended add-ons use lavender panels; radio-style cards show one selected and one unselected option.
- **Visible states:** On/off switches, selected plan cards, and filled radio markers are the key states.

### Pricing and checkout blocks

- **Anatomy:** Promo strip, purchase summary, billing selector, included features, total, and final action.
- **Surface:** A dark promo block can sit above a white pricing body without breaking the page tone.
- **Typography:** Prices should read with the strongest weight in the block; line items remain plain.
- **Composition:** Keep the total and checkout action anchored so the decision is easy to find.
- **Shape:** Rounded panels and pill buttons keep the block aligned with the rest of the app.
- **Visible states:** Monthly and yearly choices appear as a simple toggle, not as a complex control surface.

## Responsive behavior

When the layout tightens, preserve the reading order: top utility row, title, alerts, controls, content, then supporting actions. The left rail should compress before the main content loses space. Tables should become stacked rows or cards before they feel cramped. Keep the primary action visible near the top of the workspace, and let secondary actions move below it on smaller widths. The 14px and 16px text rhythm should remain intact when the page reflows, because that rhythm is what keeps the product readable in dense states.

On narrower widths, the home dashboard should reduce from a multi-card grid to a single-column stack, with the most important summary first. Campaign rows should continue to read as complete units, even if their metric clusters wrap or compress. Settings and billing panels should keep the notice or summary block above the form body so the user sees context before controls. The intent is not to invent a different mobile design; it is to preserve the same visual hierarchy in a tighter space.

## Practical implementation guidance

### Preserve

- Keep purple as the single dependable brand accent.
- Keep the workspace light, with white surfaces doing most of the structural work.
- Keep selected states quiet but unmistakable: green for active navigation, purple for tabs and primary actions, lavender and pink for notices.
- Keep cards flat, with thin borders and only the smallest amount of depth.
- Keep the app text-led; let the metric blocks, banners, and rows do the work.

### Avoid

- Avoid adding a second saturated primary color.
- Avoid large imagery, dramatic gradients, or heavy shadows.
- Avoid turning the rail into a promotional surface.
- Avoid a bigger type system than the retained 14px / 16px / 13.333px rhythm supports.
- Avoid making every control look like a pill; the app depends on variety between fields, tabs, rows, and buttons.

### Recommended build order

1. Build the shell and left rail.
2. Add the top utility row and page title.
3. Add the banner, tab, filter strip, and row list.
4. Build the dashboard cards and summary panels.
5. Build the settings notice and table frame.
6. Build the plan customization form, option cards, and checkout block.
7. Finish with selection, status, and focus treatment.

### Accessibility

- Keep text contrast strong on pink, lavender, and mint surfaces.
- Give every tab, field, toggle, and row action a visible focus treatment.
- Use clear labels for search, filters, metrics, and plan options.
- Do not rely on color alone for active state; pair color with shape, underline, or position.
- Keep the table and card layouts legible when values are missing or reduced to dashes.

## Scope note

This guide covers the authenticated app shell, home dashboard, campaign listing, API keys and settings surfaces, and the plan customization flow shown in the supplied pages. It does not include mobile adaptations, hover choreography, motion, or routes beyond those surfaces.
