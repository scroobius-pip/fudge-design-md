# How codepen.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/codepen.io-design)

Last updated: 2026-08-04

## Captured pages

[![Sidebar navigation beside the neon topic cards and hero art](https://pin.fontofweb.com/8437?format=jpg)](https://design.withfudge.com/share/pin-8437)

[Sidebar navigation beside the neon topic cards and hero art](https://design.withfudge.com/share/pin-8437)

[![Hero stack with code cards and the bright cyan-green arc graphic](https://pin.fontofweb.com/8435?format=jpg)](https://design.withfudge.com/share/pin-8435)

[Hero stack with code cards and the bright cyan-green arc graphic](https://design.withfudge.com/share/pin-8435)

[![Feature cards above the community grid and project preview row](https://pin.fontofweb.com/8433?format=jpg)](https://design.withfudge.com/share/pin-8433)

[Feature cards above the community grid and project preview row](https://design.withfudge.com/share/pin-8433)

[![Team upsell card with sponsor logos and footer treatment](https://pin.fontofweb.com/8438?format=jpg)](https://design.withfudge.com/share/pin-8438)

[Team upsell card with sponsor logos and footer treatment](https://design.withfudge.com/share/pin-8438)

[![Profile settings form with avatar upload and pale input fields](https://pin.fontofweb.com/8432?format=jpg)](https://design.withfudge.com/share/pin-8432)

[Profile settings form with avatar upload and pale input fields](https://design.withfudge.com/share/pin-8432)

## Overview

CodePen is a dark builder shell with a strong split between utility chrome and promotional stage content. The left rail, top search bar, and account controls stay compact and disciplined. The main lane opens into large white statements, dark cards, and bright accent graphics that make the product feel active without turning the interface glossy or heavy.

The page uses a clear hierarchy: oversized display type for the promise, smaller bold titles for cards and sections, then dense Lato text for explanation and controls. Green buttons move the user forward. Cyan highlights mark search, code-adjacent cues, and decorative linework. Yellow PRO badges sit inside the interface as small attention markers, not as general decoration. The result is a developer-facing system that feels energetic, but still plainly functional.

## Colors

CodePen is dark-first. Most of the page sits on charcoal and near-black surfaces, then the system introduces color only where it does visible work: green for primary actions, cyan for technical emphasis, yellow for PRO labels, and a narrow set of brighter accents inside the decorative arcs and topic art. Light text is used as the default on all dark surfaces, while the settings screen inverts one part of the system with pale input fields against dark panels.

| token | hex | use |
|---|---|---|
| action | `#47CF73` | Primary buttons such as Start Coding, Sign Up, and team CTAs |
| accent | `#76DAFF` | Cyan links, search emphasis, and code-adjacent highlights |
| canvas | `#010101` | Page background, rail fill, and the deepest dark surfaces |
| surface | `#1D1E22` | Main cards, sponsor panels, and settings blocks |
| surface-2 | `#202125` | Slightly lifted card fills and darker shell layers |
| surface-3 | `#2C303A` | Topic tiles, promo cards, and secondary dark panels |
| surface-4 | `#444857` | Gray action buttons and neutral control surfaces |
| border | `#4C4F5A` | Hairline borders, control edges, and dark separators |
| ink | `#FFFFFF` | Headings, button text, icons, and logo marks on dark surfaces |
| ink-muted | `#C7C9D3` | Supporting copy on dark cards and footer text |
| ink-soft | `#AAAEBC` | Secondary navigation and subdued supporting lines |
| ink-dim | `#868CA0` | Lowest-emphasis metadata, especially in footer and settings |
| badge | `#FFDD40` | PRO chips and tiny callout markers |
| form-surface | `#E3E4E8` | Light input fields and editable form areas in settings |
| highlight | `#F1F1F3` | Pale panel accents and the lightest neutral fills |
| neon-red | `#FF1035` | Decorative glow inside the hero artwork and accent graphics |

The system keeps those colors in separate jobs. The page background and shell surfaces stay neutral so the content lane can carry the mood. Green buttons are the only persistent forward-moving fill. Cyan is the most visible highlight in the graphics, but it does not replace the action color. Yellow stays small and label-like. That separation is a major part of the brand’s clarity.

## Typography

Type, Telefon, Lato, and Sf Mono all appear in the interface, but they do different jobs. Type carries the largest promotional statements. Telefon appears in alternate section statements and some prominent page labels. Lato is the workhorse for navigation, body copy, buttons, form labels, and footer text. Sf Mono appears in compact code-like labels and technical microcopy. Arial, Lato-900, Lato-Italic, and Lato-Italic Regular are part of the same family set and should be treated as supporting faces or fallback variants rather than as the main hierarchy. Licensing note: only Sf Mono and Type carry supplied designer or vendor credit; the other families are listed here without attribution claims.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Type | 3.75rem | 400 | 1.1 | 0em | Main home headline and largest product promise |
| section-display | Telefon | 1.875rem | 700 | 1.2 | 0em | Strong section headings and card-level statements |
| card-title | Lato | 1.3125rem | 700 | 1.2 | 0em | Feature cards, sponsor panels, and settings labels |
| body | Lato | 0.9375rem | 400 | 1.5 | 0em | Supporting copy, short descriptions, and explanatory text |
| body-strong | Lato | 0.9375rem | 700 | 1.5 | 0em | Button copy, emphasized lines, and inline emphasis |
| navigation | Lato | 1.0546875rem | 500 | 1 | 0em | Left rail links, top utility links, and small controls |
| eyebrow | Lato | 0.8203125rem | 700 | 1.4 | 0.12em | Small labels, the PRO tag, and rail prompts |
| mono-label | Sf Mono | 0.703125rem | 600 | 1.2 | 0.02em | Tiny technical labels and code-adjacent metadata |
| code-line | Sf Mono | 0.8125rem | 400 | 1.3 | 0em | Inline code snippets and editor-like text |
| legal | Lato | 0.75rem | 400 | 1.5 | 0em | Footer legal text and low-emphasis system copy |

The hierarchy depends on size and weight more than on style variation. Big statements are centered, white, and tightly organized. Supporting copy opens up just enough to stay readable on the dark canvas. Labels and chips stay compact so they never compete with the main sales message. The result is a page that feels precise, not airy, and avoids the loose editorial tone of a lifestyle brand.

## Layout

The home shell uses a fixed left rail, a wide central lane, and a content rhythm that alternates between hero, topic tiles, sponsor panels, feature cards, community previews, and footer. That composition keeps the interface feeling like an app rather than a landing page pasted onto an app. The rail is always present on desktop, so the main stage can change without breaking orientation.

The hero section is centered and broad. It places the strongest headline at the top, then a short support paragraph, then one primary action. To the right or below, depending on the screen, the page introduces code cards, framework tiles, or decorative arc graphics. Those images are not framed like gallery art; they are part of the page structure and help the product feel in motion.

Below the hero, the page often shifts into modular dark cards. Topic tiles are square or near-square, with a single icon and a label. Sponsor panels become long horizontal cards with a pale product block on one side and a sentence or two on the other. Community previews use image cards with a caption strip and author line. The footer is comparatively quiet: link groups on the left, brand block and legal text on the right.

The settings page changes the layout language but keeps the same tone. It uses a left settings rail, a central form column, and a right-side account menu. Panels remain dark and rectangular. Input fields turn light, which makes the profile form feel editable and separate from the surrounding shell. The page keeps the same spacing discipline as the marketing home, so the whole product still feels like one system.

## Visual language

The most recognizable part of the visual language is the contrast between dark shell and bright motion lines. Cyan, green, yellow, pink, and violet arc shapes sweep behind the content and around the lower home sections. They act like a signature illustration system: soft-edged, rounded, and segmented, with a neon feel that supports the product without drowning it.

Cards are simple and almost flat. Depth comes from layered dark values, not from heavy shadows or glass effects. Most surfaces rely on subtle tonal differences: one charcoal for the rail, another for cards, a lighter one for buttons and panels. That small tonal ladder keeps the interface readable even when many blocks sit close together.

Rounded corners stay modest. The design uses small radii on buttons and tiles, not large pill shapes. The visible rhythm is therefore crisp and technical. The only exceptions are the bigger profile images and some mascot-style artwork, which soften the page without changing the underlying geometry.

Icons and logos are treated as clean white or brand-colored marks, usually centered in their tiles or aligned with text. The system prefers short labels over long phrases. Where it does use longer copy, it gives the text a stable left edge and keeps the line length narrow. That restraint is part of the brand: the page feels like a place to work, not a place to browse ornate presentation screens.

## Components

### Left rail

- **Anatomy:** logo, short eyebrow line, primary button, stacked links, and a small PRO marker.
- **Surface:** very dark shell with a slightly lifted button and muted rail separators.
- **Typography:** Lato for links and prompts; the eyebrow is compact and uppercase-feeling.
- **Shape:** small button radii and straight vertical stacking.
- **Hierarchy:** the button leads, then the navigation links, then the smaller badge and utility items.
- **Visible state:** the active rail treatment is subtle; the page relies on tone and position more than on loud selection chrome.

### Top utility bar

- **Anatomy:** search field, small icon button, sign-up or log-in actions, and account controls on some pages.
- **Surface:** dark bar with compact controls and a strong boundary from the content lane.
- **Typography:** Lato at interface sizes; short control labels stay readable and tight.
- **Shape:** shallow rounded rectangles for the field and buttons.
- **Composition:** the search control sits near the center or left of the top bar, while account actions gather on the right.

### Hero stage

- **Anatomy:** oversized statement, supporting paragraph, one primary action, then editor-like cards or topic art.
- **Surface:** deep charcoal or black with floating imagery and neon arcs.
- **Typography:** Type for the headline; Lato for the paragraph; Sf Mono where code-like snippets appear.
- **Hierarchy:** the headline dominates, the support copy stays narrow, and the green button finishes the message.
- **Composition:** the illustration sits beside or behind the text, but never replaces the text as the main reading path.

### Topic tiles

- **Anatomy:** icon, short label, and a compact card body.
- **Surface:** dark slate cards with light text and colored marks.
- **Typography:** Lato labels with enough weight to stay legible at a glance.
- **Shape:** modest corners and generous internal padding.
- **Variants:** framework tiles, discovery tiles, and icon-led promo tiles all follow the same dark-card grammar.

### Sponsor and team panels

- **Anatomy:** logo tile or sponsor image, heading, one paragraph, and a green action.
- **Surface:** wider dark cards that read like featured modules.
- **Typography:** a bold title, then regular body text, then a single strong button.
- **Composition:** the sponsor image block anchors one side; the copy and button sit beside it.
- **Visible state:** the team panel can include a bright PRO chip and a row of monochrome sponsor logos beneath the CTA.

### Community preview cards

- **Anatomy:** large preview image, title strip, creator line, and sometimes a PRO tag.
- **Surface:** nearly black cards with a thumbnail on top and a caption band below.
- **Typography:** title text is bold and white; creator names are smaller and lower contrast.
- **Spacing:** the image gets most of the card height, and the caption strip stays tight.
- **Hierarchy:** the visual preview is the first read, followed by the title and author.

### Settings shell

- **Anatomy:** left settings nav, central profile panels, light input fields, and a right account menu.
- **Surface:** dark background with raised panels and pale form controls.
- **Typography:** bold section labels and regular field text keep the form readable.
- **Shape:** small corners on inputs and cards; the menu items keep the same compact geometry.
- **Visible state:** the active nav item is marked by a tonal bar rather than by large color fills.

## Responsive behavior

Keep the left rail, top utility area, and centered content lane intact when width allows it. When space narrows, the structure should collapse in the same order the page already implies: hero first, then supporting cards, then previews, then footer. Topic tiles can stack into fewer columns, but the tonal separation between shell, card, and control should stay intact. The settings page should preserve the rail and form order even when the form becomes a single column.

Do not stretch the hero into a full-height poster on smaller screens. The page works because the content arrives in compact blocks and then opens into a wider display stage. Preserve that order. Keep button labels short, avoid forcing the arc graphics to wrap awkwardly, and prevent the footer from becoming a dense wall of links.

## Practical implementation guidance

### Preserve

- Keep the dark shell as the default, with white text and charcoal panel layering.
- Use green only for the main forward action.
- Keep cyan for technical highlights, links, and decorative linework.
- Preserve the small-radius geometry on buttons, cards, and inputs.
- Keep the PRO chip small and yellow.
- Retain the left rail as the product’s anchor on desktop.

### Avoid

- Avoid replacing the system with a soft, light, or glassy aesthetic.
- Avoid large rounded corners on every block.
- Avoid heavy shadows as the main depth cue.
- Avoid turning the decorative arcs into framed illustrations.
- Avoid using Type or Telefon for body copy; they belong in the headline ladder.
- Avoid making the interface feel like a generic SaaS dashboard.

### Recommended build order

1. Build the dark shell, left rail, and top utility bar.
2. Set the typography ladder: Type first, then Telefon, then Lato and Sf Mono.
3. Add the primary button, the PRO chip, and the shared card radius.
4. Recreate the hero with its code cards and neon arc artwork.
5. Add topic tiles, sponsor panels, and the team upsell block.
6. Build the community preview grid and the footer.
7. Finish with the settings layout and pale form controls.

### Accessibility

- Keep text contrast high on dark surfaces and dark text readable on the pale form fields.
- Do not rely on green, cyan, or yellow alone to communicate meaning.
- Keep button labels and nav items legible at the smaller Lato sizes.
- Give form fields and menu items a clear focus treatment.
- Provide descriptive alt text for the preview images, logos, and mascot-style artwork.
- Preserve enough separation between cards so the page remains scannable at a glance.

## Scope note

This guide covers the CodePen desktop homepage shell and the profile settings screen shown in the selected desktop images. It does not include mobile breakpoints, motion, hover or focus specifics, or any layout details that are not present in those screens.
