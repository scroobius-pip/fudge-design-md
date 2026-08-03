# How cursor.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cursor.com-design)

Last updated: 2026-08-03

## Captured pages

[![Three upgrade cards above the dark usage heatmap and left account rail](https://pin.fontofweb.com/8861?format=jpg)](https://design.withfudge.com/share/pin-8861)

[Three upgrade cards above the dark usage heatmap and left account rail](https://design.withfudge.com/share/pin-8861)

[![Marketplace grid with category rail, search field, and two-column plugin tiles](https://pin.fontofweb.com/6662?format=jpg)](https://design.withfudge.com/share/pin-6662)

[Marketplace grid with category rail, search field, and two-column plugin tiles](https://design.withfudge.com/share/pin-6662)

[![Centered publish form with plugin picker, stacked inputs, and orange links](https://pin.fontofweb.com/6663?format=jpg)](https://design.withfudge.com/share/pin-6663)

[Centered publish form with plugin picker, stacked inputs, and orange links](https://design.withfudge.com/share/pin-6663)

[![Billing page with usage table, invoices block, and dim left navigation](https://pin.fontofweb.com/6660?format=jpg)](https://design.withfudge.com/share/pin-6660)

[Billing page with usage table, invoices block, and dim left navigation](https://design.withfudge.com/share/pin-6660)

[![Settings page with privacy, sessions, and the red delete-account row](https://pin.fontofweb.com/6659?format=jpg)](https://design.withfudge.com/share/pin-6659)

[Settings page with privacy, sessions, and the red delete-account row](https://design.withfudge.com/share/pin-6659)

## Overview

Cursor’s visual language is a dark developer workspace, not a bright consumer app. The page surfaces sit on a warm near-black canvas, the copy stays light and compact, and the layout keeps a strong split between navigation chrome and the working area. The result feels controlled and technical, with just enough polish to read as a premium product.

The system alternates between two modes. Public-facing marketplace pages use a brandier voice with Cursor Gothic and larger section headings. The account, billing, settings, and integration views shift into denser app chrome with System UI text, smaller labels, and tighter controls. Berkeley Mono Variable appears in code-like strings and technical readouts, while Sf Pro shows up sparingly inside controls. That mix gives the site a single identity across marketing and product surfaces without flattening everything into one style.

The most important qualities to preserve are the warm black palette, the restrained orange emphasis, the small radii, and the low-noise surfaces. Panels, rows, and inputs stay legible through border and fill contrast rather than decoration. The page reads as a workstation: useful first, branded second.

## Colors

The palette is built from dark surfaces and a small set of sharp accents. The canvas is a warm black rather than a neutral gray, which keeps the interface from feeling sterile. Surfaces step forward with slightly different blacks and browns, so the app can separate panels, rows, and cards without leaning on heavy shadows. Borders are thin and muted; they outline structure without drawing attention away from the content.

Orange is the primary emphasis color. It belongs to links, key calls to action, and occasional highlighted text. It should stay rare. In the screenshots, the app itself leans mostly on neutral fills and text contrast; orange becomes stronger when Cursor wants to signal a primary route or a forward-moving action.

Light text is split into two layers. `#EDECEC` carries the main body and heading weight. `#D6D6DD` and `#E4E4E4` soften labels, helper lines, and secondary descriptions. That separation matters because many panels sit on very close dark tones. The text hierarchy has to do the work that bright cards or decorative separators might do elsewhere.

Teal and green act as state colors, not brand colors. They appear in the usage heatmap and success-style accents, giving the interface a cool technical counterpoint to the orange emphasis. Red is reserved for destructive or risky actions, such as account removal. It should remain isolated so it keeps its warning weight. The relationship is simple: orange drives, green measures, red warns, and the warm blacks hold everything together.

## Typography

Cursor uses typography as a structural tool. Brand-facing sections depend on Cursor Gothic for large, quiet headlines that feel geometric and modern. The product UI shifts to System for dense chrome, forms, and settings because the interface needs speed and legibility more than personality. Berkeley Mono Variable is the technical voice: short identifiers, path-like strings, and data-like labels. Sf Pro appears only in a few control contexts and should stay secondary.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| brand-display | Cursor Gothic | 3.25rem | 400 | 1.15 | -0.025em | Large public-page headline |
| section-display | Cursor Gothic | 2.25rem | 400 | 1.2 | -0.02em | Marketplace and section lead |
| panel-heading | Cursor Gothic | 1.5rem | 400 | 1.08 | -0.01em | Card and form section titles |
| body | Cursor Gothic | 1rem | 400 | 1.5 | 0em | Supporting copy on branded pages |
| ui | System | 0.875rem | 400 | 1.43 | -0.005em | Sidebar text, list labels, helper copy |
| mono | Berkeley Mono Variable | 0.75rem | 400 | 1.67 | 0em | Command-like strings and technical values |
| control | Sf Pro | 1rem | 400 | 1.4 | -0.005em | Occasional control labels and button text |

The hierarchy is based on scale and spacing more than on weight. Headings are not overly bold; they are clean, compact, and separated by generous vertical space. The smaller sizes do most of the interface work. The 13px and 14px ranges are especially important for the sidebar, row labels, and helper lines. That density is part of the brand: Cursor feels fast because the typography never wastes room.

Licensing details for these families are not supplied in the packet.

## Layout

Cursor’s layout is a hybrid of app shell and product landing page. The desktop shell uses a left rail, a slim top bar, and a centered working column. The public marketplace pages keep the same dark tonal range but shift toward a more editorial arrangement: a left category rail, a headline block, and a structured content grid. Across both modes, the main column stays wide enough for readable cards but narrow enough to keep the page feeling focused.

The page rhythm is built from repeated full-width panels with modest internal padding. Cards and rows usually sit inside larger containers rather than floating in open space. That makes the interface feel stable. The content areas are padded enough to breathe, but not so much that the page drifts into brochure territory. The visual center is always clear: heading first, then the main panel, then the supporting list or form.

Desktop spacing is notably wide. On the larger frames, the central content sits inside large side gutters, which gives the page a centered, premium feel even when the information density is high. This is especially visible in the marketplace and settings views, where the page never stretches edge to edge. The left rail acts as an anchor, while the main content maintains a disciplined column width.

Cards and rows use a small set of corner radii. Buttons are the tightest shape. Inputs and tiles open up slightly. Larger content sheets and form panels use the softest corners in the system, but the look stays square enough to feel technical. That balance is important: the UI should feel deliberate and engineered, not plush.

The layout also depends on hierarchy through stacking. A section title, then a compact explanatory line, then a card group, then another list. That sequence repeats across billing, integrations, and marketplace publishing. The user always sees the current task first and the supporting details second.

## Visual language

Cursor’s visual language is low-gloss and disciplined. Surfaces are flat or nearly flat. Borders do more of the work than shadows. The dark backgrounds vary just enough to make shell, card, and panel layers readable, but the system never becomes glossy or glassy. It is a terminal-like product interface with a careful finish.

The pages mix three visual registers. First is the shell register: navigation, account state, and utility actions. Second is the content register: cards, tables, and forms that explain what the user can do. Third is the brand register: larger headings and public-page panels that make the product feel recognizable. The visual system keeps all three in the same dark family so the product never feels split into separate websites.

Color is used with restraint. The orange accent is the loudest note, but it appears as punctuation, not wallpaper. Teal-green is a data and status language. Red is a warning language. Everything else sits inside the near-black range. That keeps the interface calm and makes any colored element feel intentional.

Icons are small and monochrome. They support wayfinding but do not become decorative features. Row separators are thin and close to invisible until the eye needs them. The whole system works by clarity through reduction: fewer shapes, fewer colors, fewer competing weights.

## Components

### Shell and navigation

The shell uses a dark top-level canvas with a left navigation rail. The active row is indicated by a darker filled strip rather than a bright underline or loud badge. Text remains small and quiet, usually in the 13px to 16px range. Icons sit to the left of each label and stay subordinate to the text.

The top bar is minimal. It carries the brand mark, a small set of links, and a compact account action. The rail is more important than the top bar in the app views, because it carries account state, settings sections, and access to the main product areas. This is a dashboard-first shell, not a marketing header.

### Upgrade cards and summary panels

The billing and overview cards are shallow rectangles with a dark surface, a thin border, and a short block of copy. Each card has a heading, a price or status line, and one compact button. The cards are arranged in a row and feel like plan summaries rather than sales blocks. The content is concise and left aligned.

The usage panel beneath them is more analytical. It uses a grid of small squares, labels on the edge, and a tiny tonal ramp from dark to teal-green. The visual focus is the density map, not the numbers. The ramp should remain subtle so the panel reads as a technical summary.

### Marketplace tiles and category rails

The marketplace view combines a left category rail with a dense tile grid. The rail is text-first and sparse. One item is active, the rest are quiet. The content area uses two-column cards with an icon, a title, and one truncated description line. The cards are compact and rectangular, with a small radius and a soft border.

This part of the system feels like a catalog, but not a bright one. The tiles should stay close to the shell color family so the list reads as part of the product, not an external marketplace. The main distinction comes from spacing and structure, not from a different color scheme.

### Publish form

The publish page centers a taller form stack inside a broad dark field. A preview-like panel sits near the top, followed by descriptive copy and a series of labeled inputs. The form is not boxed into a light card; it remains inside the same warm dark system. Orange links appear inside the explanatory text and act as the only bright editorial cue.

Inputs are full-width, low-profile fields with restrained borders and quiet placeholder text. Labels sit above the fields in a small UI face. Helper text is even quieter. The form feels careful and developer-oriented, like submitting structured product information rather than filling a consumer signup flow.

### Tables, lists, and status rows

Billing, integrations, and settings all use row-based layouts. Each row has a left icon or label, a short supporting line, and a right-aligned action. Buttons are compact, often outlined or filled in a neutral dark tone. The rows depend on spacing and hierarchy to stay readable. They do not need heavy separators.

Destructive rows use the danger color sparingly. The red action should stay isolated and clear. Positive or connected states should use the green family instead of orange, which keeps action, state, and warning distinct.

## Responsive behavior

When the layout narrows, the system should keep its order and shrink by stacking, not by rethinking the visual language. The left rail can collapse before the content grid becomes unreadable. Two-column plugin tiles should fall to one column once the available width no longer supports their icon-title-description rhythm. Form pairs should also collapse into a single column before labels wrap awkwardly.

Type should stay within the 13px to 16px range for app chrome and row labels, even on smaller screens. The public headings can reduce in size, but the hierarchy must remain strong enough that the section title still leads the panel. The main goal on smaller widths is to preserve task clarity: navigation first, primary panel second, supporting details last.

Do not let responsive changes introduce a new visual language. The dark canvas, thin borders, and compact controls should survive the layout shift. The page can stack; it should not restyle itself into a different brand.

## Practical implementation guidance

### Preserve

- Keep the warm near-black canvas as the default base.
- Use orange for primary emphasis, but keep it sparse.
- Preserve the small radii and thin borders.
- Keep app chrome dense and public sections restrained.
- Let typography do the heavy lifting before adding visual decoration.

### Avoid

- Avoid bright white page backgrounds.
- Avoid multiple competing accent colors.
- Avoid oversized corner radii or plush shadows.
- Avoid turning the dashboard into a marketing page.
- Avoid making every card feel like a separate illustration.

### Recommended build order

1. Set the dark palette and text roles.
2. Build the shell, rail, and top bar.
3. Add the shared card, tile, and row primitives.
4. Wire the marketplace grid and publish form.
5. Add billing tables, settings rows, and state colors.
6. Finish with spacing tuning and responsive collapse rules.

### Accessibility

- Keep strong contrast between light text and the warm dark surfaces.
- Do not encode state with color alone; pair color with label, fill, or border change.
- Keep focus styles visible on rail items, buttons, and inputs.
- Ensure icon-only controls have labels.
- Preserve readable line lengths in the centered columns so the app remains usable at smaller widths.

## Scope note

This guide covers the supplied desktop account, billing, settings, integrations, marketplace, and publish views. It does not establish mobile breakpoints, motion, hover or disabled states, or any lighter marketing-theme variant. Spacing values are rounded to the packet’s 0.125rem step.
