# How docs.apara.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/docs.apara.design-design)

Last updated: 2026-08-08

## Captured pages

[![Welcome hub with bright gradient shortcut cards and a white shell](https://pin.fontofweb.com/7986?format=jpg)](https://design.withfudge.com/share/pin-7986)

[Welcome hub with bright gradient shortcut cards and a white shell](https://design.withfudge.com/share/pin-7986)

[![Terms page with centered banner art, body copy, and right-side contents](https://pin.fontofweb.com/7987?format=jpg)](https://design.withfudge.com/share/pin-7987)

[Terms page with centered banner art, body copy, and right-side contents](https://design.withfudge.com/share/pin-7987)

## Overview

Apara Docs uses a restrained editorial shell instead of a dashboard-like interface. The page is built around three stable parts: a narrow navigation rail at left, a centered reading column, and a slim helper rail at right. That frame stays the same across the home hub and the terms page, but the content inside it changes from a welcoming entry point to a formal article. The home page leans on greeting copy and bright shortcut cards. The terms page swaps that energy for a strong title, update metadata, a large banner card, and stacked text sections.

The system feels airy and measured because the structure does not fight the content. Black text carries the main reading burden. Gray text handles labels, timestamps, and quiet navigation. Blue appears only where the page wants direct action or a clear link. The colorful gradients are not general surface colors; they belong to the feature cards and banner art, where they add warmth without weakening the plain document frame.

## Colors

| token | value | use |
|---|---|---|
| action | `#0000EE` | Inline links, direct actions, and the strongest clickable emphasis |
| ink | `#000000` | Main titles, section headings, and high-contrast body text |
| muted-ink | `#646464` | Secondary labels, body text in lighter contexts, and subdued helper copy |
| secondary-ink | `#707070` | Rail labels, update text, and supporting navigation copy |
| quiet-ink | `#757575` | Chips, time stamps, and the lightest readable metadata |
| soft-ink | `#A5A5A5` | Low-emphasis labels and the faintest visible text in the layout |
| border | `#B2B2B2` | Hairline dividers, card edges, and quiet structural boundaries |
| canvas | `#FFFFFF` | Main page background, article surfaces, and card fields |

The palette is almost entirely light. White sets the base field for both pages, and black provides the strongest reading contrast. The gray ladder moves in small steps, so the rail, metadata, and utility text can stay distinct without becoming visually loud. `#646464` is the darkest of the gray tones and works well for text that still needs to read clearly but should not compete with headlines. Blue is the only fixed bright interface color, so it reads as action instead of decoration. The gradient artwork inside the cards and banner is the expressive part of the page, but it should remain inside those art surfaces rather than spreading into the rest of the shell.

There is no separate dark version in the supplied views. The design depends on white space, gray hierarchy, and one direct blue accent. That makes the document content feel calm and steady, while the warmer gradient art gives the home hub and article banner a friendlier edge.

## Typography

Apara Docs uses one neutral sans-serif voice for almost every visible text role. Inter carries the main reading experience, the helper rails, and the card labels. System acts as the fallback for the most utilitarian copy. The unusual family, `A 8 Vp Nyp Lzcud Gbirn 8 Oe Wq Belq`, appears in the brand mark and should be treated as a separate visible family rather than folded into Inter or System. That keeps the typography section complete without turning the page into a mixed-style composition. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| brand-mark | A 8 Vp Nyp Lzcud Gbirn 8 Oe Wq Belq | 0.75rem | 400 | 1 | 0em | Small rail wordmark and compact brand label |
| hero-display | Inter | 2.75rem | 500 | 1.1 | -0.03em | Welcome headline and main article title |
| section-display | Inter | 1.5rem | 700 | 1.2 | -0.02em | Major article sections and strong panel headings |
| subsection-heading | Inter | 1.125rem | 700 | 1.3 | -0.01em | Smaller article headings and local section labels |
| body | Inter | 0.875rem | 400 | 1.5 | 0em | Paragraph text, link lists, and general explanatory copy |
| body-strong | Inter | 0.875rem | 500 | 1.5 | 0em | Emphasized links, card labels, and direct calls to action |
| meta | Inter | 0.75rem | 400 | 1.4 | 0em | Update lines, chips, and quiet helper text |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0em | Left-rail items and top-level navigation labels |
| legal-copy | System | 0.75rem | 400 | 1.4 | 0em | Small legal notes and compact utility text |

The hierarchy is driven by size, weight, and spacing rather than by a wide family mix. Hero text is large but not overly dramatic. Section headings are bold and clear, while the article body stays compact enough for comfortable scanning. The rail labels need enough weight to stand apart from the page chrome without overpowering the content column. The smaller sizes matter because the interface includes many short labels, timestamps, and utility links, so the system must stay legible even when the content is terse.

## Layout

The desktop layout uses a three-column rhythm. The left rail is narrow, vertically stacked, and visually quiet. It carries the brand mark, primary navigation, and document categories without feeling like a separate app frame. The center column is the main reading zone. It has the widest measure, the strongest type hierarchy, and the clearest vertical flow. The right rail stays slim and behaves like a margin note. It holds the contents list, a few quick actions, and supporting utility text without competing with the article.

The home hub and the terms page share this frame, but they organize content differently. The home hub starts with a greeting, a large headline, a short intro, then a set of colorful shortcut cards and simpler link tiles. The terms page starts with breadcrumbs and a title, then uses the banner card as a pause before the article body begins. That shift from a promotional entry to a formal reading surface is one of the most important structural changes in the system.

Spacing feels generous because the page relies on clear gaps between blocks rather than on thick borders. The article column needs enough breathing room to support long lines of text, but not so much width that reading becomes tiring. The cards on the home page sit close enough together to feel related. The right rail should remain visually subordinate and should not expand into a second main column. Borders, when used, should stay light and functional, serving as quiet separators rather than strong frames.

The overall rhythm is open and centered. The design uses small measurements to keep text steady and readable, then introduces larger surfaces only where the page needs a visual anchor. That balance gives the site a calm editorial quality while still leaving room for expressive card art and clear navigational structure.

## Visual language

The visual language blends plain document styling with gentle color accents. The basic layer is almost spare: black reading text, gray labels, white surfaces, and thin boundaries. The expressive layer appears only in the gradient cards and the banner art, where broad color fields add warmth and make the home page feel welcoming. The gradients are smooth rather than noisy, and they work best when the surrounding chrome stays simple.

Iconography is minimal and linear. Small outline icons help the rail and utility areas stay recognizable without taking attention away from the words. The system does not depend on heavy shadows or elaborate depth cues. Shape comes from modest corner rounding, soft card edges, and the contrast between rectangular content blocks and the colorful art surfaces. The result is formal enough for policy and reference material, but not stiff.

The page feels polished because every part has a narrow job. Text explains. Blue marks what is clickable. Gray recedes. Colorful art provides a moment of relief at the top of the experience. Nothing in the layout needs to be loud to feel deliberate.

## Components

### Side rail

The left rail is compact and ordered. It groups the brand mark, general destinations, document links, and download items into a single vertical run. The selected item should read as slightly stronger than the rest, but not as a filled button. The rail uses the same white field as the main page, which keeps it from feeling like a separate application panel. Its job is to guide, not to dominate.

### Hero block

The home page hero is simple: a short greeting, a large headline, and a supporting line of copy. The key visual element is typography, not framing. The headline should feel open and direct, and the block should leave enough space below it for the shortcut cards. In the terms page, the title plays the same role, but with a more formal tone and tighter surrounding metadata.

### Quick-access cards

The large shortcut cards are the most colorful elements in the home hub. They use broad gradient fields, centered labels, and soft rounded corners. Their role is to feel immediately clickable and visually distinct from the flatter link tiles below them. The labels sit inside the cards, so the whole surface reads as a direct entry point. The cards should stay smooth and bright, but not glossy or overworked.

### Secondary tiles

The smaller link tiles below the main cards are quieter. They rely on type, spacing, and simple line icons rather than on saturated fills. Their role is to support the shortcut cards without competing with them. Some items are lighter in emphasis than others, and that difference should come from text weight and color rather than from a disabled treatment.

### Article banner

The banner card on the terms page acts as a chapter marker. It uses a wide gradient field with a centered white document symbol. That banner introduces the article with a visual pause before the dense text begins. It should feel like a single strong block, not like an illustration with many layers. The white symbol and the warm gradient are enough to give the page a distinct opening image.

### Right-side helper column

The helper rail contains the contents list and the quick-action area. The contents list should read like a map of the page, with the current item darker than the rest. The quick-action area stays smaller and more utilitarian, so it never overtakes the article. Blue is appropriate only for the actions that should clearly invite interaction.

### Inline links and legal copy

Inline links are blue and underlined so they remain obvious inside dense text. They should stay light in weight but never ambiguous. Small legal notes and utility copy can use the System family when a more neutral fallback voice helps the page feel steady. That keeps the reading surface calm without making the typography look inconsistent.

### Newsletter bar

The newsletter bar on the home hub is the strongest call to action in the system. It uses a solid blue surface, white text, and a simple plus symbol. The shape is compact and clearly button-like, which makes it stand out from the softer cards and quiet tiles around it. It should read as a direct action rather than as another decorative panel.

## Responsive behavior

On smaller screens, the page should collapse into a straightforward reading order. The rail content should become compact, the main article or welcome content should move first in the flow, and helper content should drop below it. The right rail should not squeeze the reading column. The colorful cards should stack vertically so their labels remain legible, and the banner card should stay wide enough to preserve its visual impact.

The type hierarchy should remain stable as the layout tightens. Headings should keep their clear contrast, and metadata should not become so small that it disappears. The system should favor readable line lengths over keeping every desktop spacing relationship intact. When space is limited, the design should protect the article content first, then simplify the rails and card grid around it.

## Practical implementation guidance

### Preserve

- Keep the white canvas and the black-to-gray reading hierarchy.
- Preserve the left rail, centered article column, and slim helper rail.
- Keep blue reserved for links and direct actions.
- Keep the gradient cards and banner art as the only strong decorative moments.
- Hold the reading column narrow enough for long-form text.

### Avoid

- Avoid turning the rail into a dark app sidebar.
- Avoid adding extra saturated colors to the shell chrome.
- Avoid heavy shadows, glossy finishes, or thick borders.
- Avoid making every card equally prominent.
- Avoid replacing the soft card rounding with pill-shaped surfaces everywhere.

### Recommended build order

1. Build the white page frame and the three-column desktop structure.
2. Add the typography hierarchy and the gray text levels.
3. Recreate the hero or article title block.
4. Add the large gradient cards and the quieter link tiles.
5. Build the article banner, contents rail, and quick-action area.
6. Tighten the spacing and border color across both page types.
7. Reduce the layout into a clear stacked order for narrow screens.

### Accessibility

- Keep blue links underlined so color is not the only cue.
- Maintain strong contrast for black text on white.
- Keep the current item in the contents list distinct through weight and color.
- Give card art and utility icons clear labels where they carry meaning.
- Preserve visible focus styling on every interactive element.

## Scope note

This guide covers the home hub and the terms article surfaces for docs.apara.design. It does not include mobile breakpoints, motion, hover styling, loading states, or the full fallback stack. Verify licensing for these families before production use.
