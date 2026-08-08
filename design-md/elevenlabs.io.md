# How elevenlabs.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/elevenlabs.io-design)

Last updated: 2026-08-08

## Captured pages

[![Studio workspace with left rail, project cards, and large image row](https://pin.fontofweb.com/9196?format=jpg)](https://design.withfudge.com/share/pin-9196)

[Studio workspace with left rail, project cards, and large image row](https://design.withfudge.com/share/pin-9196)

[![Home dashboard with app tiles and voice library list](https://pin.fontofweb.com/9195?format=jpg)](https://design.withfudge.com/share/pin-9195)

[Home dashboard with app tiles and voice library list](https://design.withfudge.com/share/pin-9195)

[![Voice generator hero with large rounded stage and soft spheres](https://pin.fontofweb.com/9194?format=jpg)](https://design.withfudge.com/share/pin-9194)

[Voice generator hero with large rounded stage and soft spheres](https://design.withfudge.com/share/pin-9194)

[![AI agents page with split hero, watch-video pill, and testimonial](https://pin.fontofweb.com/9192?format=jpg)](https://design.withfudge.com/share/pin-9192)

[AI agents page with split hero, watch-video pill, and testimonial](https://design.withfudge.com/share/pin-9192)

[![Narrow agents header with offset pill control and wide spacing](https://pin.fontofweb.com/9191?format=jpg)](https://design.withfudge.com/share/pin-9191)

[Narrow agents header with offset pill control and wide spacing](https://design.withfudge.com/share/pin-9191)

## Overview

ElevenLabs presents two related faces: a light, orderly product shell and a broader marketing system that stays mostly monochrome even when it becomes more theatrical. The app views are built around a fixed left rail, a thin top utility bar, and roomy content modules that hold creation cards, lists, and search. The marketing views keep the same restraint, but they open up into larger statements, soft rounded stages, and image-led panels that explain the product through use cases rather than ornament.

The visual logic is simple and consistent. White canvas, near-black type, pale gray structure, and one black filled action carry almost the whole system. Large headings appear when the page needs authority; smaller Inter text keeps the app legible during longer sessions. Rounded corners soften the surfaces, but nothing becomes bubbly or playful. The overall feeling is polished, technical, and quiet.

## Colors

### Core interface colors

| token | value | role |
|---|---|---|
| `action` | `#000000` | Primary buttons, strongest triggers, and filled pills |
| `ink` | `#0F0F10` | Main text on white surfaces |
| `ink-strong` | `#000011` | Deep text, icons, and dark UI marks |
| `chrome` | `#000001` | The darkest background tone in marketing and app chrome |
| `chrome-strong` | `#1C1C1D` | Heavy dark surfaces and deep panel edges |
| `muted-ink` | `#57534E` | Secondary prose and quiet labels |
| `secondary-ink` | `#5B5B64` | Supporting UI text on white panels |
| `tertiary-ink` | `#6E6E6E` | Tertiary labels, helper text, and timestamps |
| `warm-muted-ink` | `#777169` | Warm gray body text and low-emphasis copy |
| `cool-muted-ink` | `#787881` | Cool gray metadata and navigation accents |
| `border` | `#E5E5E8` | Dividers, card edges, inputs, and chip outlines |
| `canvas` | `#FFFFFF` | Page background, cards, and white panels |

The palette is almost entirely neutral. The strongest visual separation comes from value contrast, not hue. `#000000` handles the most decisive buttons, while the near-black family around `#0F0F10`, `#000001`, `#000011`, and `#1C1C1D` gives the app enough depth to feel premium without introducing a bright brand accent. `#E5E5E8` is the workhorse line color; it keeps rows, fields, and card frames soft instead of hard. `#57534E`, `#5B5B64`, `#6E6E6E`, `#777169`, and `#787881` form a controlled gray ladder for support text and metadata, so the interface can quiet down when needed without losing clarity. White canvas is the default surface across the app shell and the marketing pages. Light surfaces keep `#0F0F10` as the readable text tone, dark chrome pulls from the deeper near-black values, photography sits inside pale framed cards, and the accent system stays monochrome so emphasis comes from black fills, gray borders, and contrast rather than a second hue family.

## Typography

Inter carries the workspace UI, while the Kmr Waldenburg family set carries the larger page statements and section titles. The visible system spans Eleven Waldenburg, Inter, Kmr Waldenburg, Kmr Waldenburg Buch, and Kmr Waldenburg Fett Halbschmal. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Kmr Waldenburg Buch | 3.5rem | 400 | 0.95 | -0.04em | Marketing hero statements and large landing headlines |
| `section-display` | Kmr Waldenburg | 2.5rem | 400 | 1 | -0.03em | Research leads and in-page chapter titles |
| `panel-title` | Kmr Waldenburg Fett Halbschmal | 1.75rem | 400 | 1.05 | -0.02em | Large panel headings and feature names |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Explanatory copy, list content, and long-form text |
| `body-medium` | Inter | 1rem | 500 | 1.5 | 0em | Buttons, active labels, and emphasized body copy |
| `navigation` | Inter | 0.875rem | 500 | 1.3 | 0em | Sidebar items, top-bar labels, and tab text |
| `label` | Inter | 0.75rem | 500 | 1.2 | 0.02em | Small captions, chips, and status tags |
| `microcopy` | Inter | 0.75rem | 400 | 1.35 | 0em | Metadata, helper lines, and subdued notes |

The hierarchy depends on family choice, size, and weight more than on line spacing alone. Inter keeps the product readable in dense navigation and utility regions. The Kmr display faces widen the tone for the marketing pages and give the larger headings a more editorial edge. Black text on white remains the default, with gray reserved for support lines so the strongest words stay easy to find.

## Layout

The app shell is built around a fixed left rail and a broad content canvas. The rail stacks the workspace switcher, core navigation, pinned tools, a lower invitation card, and an upgrade button into one calm vertical column. The content area begins with a thin top bar, then opens into large blocks of space that let the user focus on one task at a time. Studio uses a row of large creation cards, while Home uses a grid of quick-launch tiles and a list-and-detail split beneath. That arrangement keeps the shell useful for both browsing and getting work started.

The marketing pages use the same visual discipline, but the composition becomes more open and more editorial. A hero usually starts with a compact title block on the left and a short support column on the right. Below that, large rounded panels hold one main idea, a few supporting tabs or chips, and a centered visual stage. The research section uses a large pale panel with a timeline feel and arrow controls, while the AI voice and AI agents sections use wide card rows with soft image blocks and concise captions. This rhythm lets the page move from claim to proof without ever feeling cluttered.

Spacing is generous almost everywhere. Content breathes through large top margins, wide side gutters, and deliberate gaps between rows. Cards are separated more by distance than by heavy borders. That gives the design a steady, premium pace even when the pages contain a lot of tools.

## Visual language

The design relies on restraint rather than decoration. White panels, pale gray fills, and black actions do the structural work. Small circular icons, tidy pills, and soft rounded rectangles keep the interface approachable, but the surfaces stay crisp. The app uses quiet hierarchy: selected navigation rows gain a light fill, chips stay outlined or softly filled, and active actions turn solid black. Marketing sections keep the same discipline while allowing more visual range inside the panels, especially through large image cards, soft color fields, and pale hero stages.

Photography and product imagery are framed rather than overlaid. Cards hold the images with enough padding to let the content breathe, and the corners stay moderately rounded so the panels feel polished. Empty or inactive spots remain as soft light blocks instead of noisy placeholders. The result is a system that can support both a utility-heavy workspace and a public-facing product story without changing its voice.

## Components

### Shell chrome

- **Anatomy:** Left rail, workspace selector, top utility row, main canvas, and lower callout area.
- **Surface:** White background with thin gray dividers and very little elevation.
- **Typography:** Inter for every rail label and utility control.
- **Shape:** Rounded corners on controls; broader cards use slightly softer radii than small pills.
- **Composition:** The rail stays narrow and stable while the canvas takes most of the width.
- **Visible states:** The current section is marked by a light gray fill and darker text.

### Sidebar navigation

- **Anatomy:** Brand area, Home and Studio links, tool list, pinned list, team invite card, and Upgrade button.
- **Surface and text color:** White base, near-black text, cool gray support copy.
- **Typography:** Navigation text is compact, medium weight, and highly legible.
- **Shape:** Rows use soft 14–16 px style corners; the invite card is more like a small panel.
- **Spacing:** Tight vertical stacking with small icon gaps and modest breathing room between groups.
- **Visible states:** The selected item reads as a soft highlighted row rather than a loud badge.

### Top utility bar

- **Anatomy:** Page label on the left, small action buttons on the right, and a few icon-only controls.
- **Surface:** Flat white with a fine divider below.
- **Typography:** Small Inter labels with medium weight.
- **Shape:** Small rounded pills and circles, not square buttons.
- **Composition:** The bar stays quiet so the main page can lead.
- **Visible states:** Primary utilities look slightly more solid than the icon-only controls.

### Primary and secondary actions

- **Primary action:** Black fill, white text, rounded pill shape, and a compact horizontal rhythm. This treatment is used for New blank project, Sign up, Watch Video, and similar top-level triggers.
- **Secondary action:** White fill, gray border, dark text, and the same pill shape. It sits beside the primary action without competing with it.
- **Typography:** Inter medium weight for both, with the primary action feeling a touch firmer.
- **Spacing:** Padding is generous enough to make the pills feel substantial.
- **Visible states:** The black button is the strongest control anywhere in the system.

### Content cards and gallery tiles

- **Anatomy:** Title, short subtitle, and a media or thumbnail area.
- **Surface:** White or very pale fills, thin gray edges, and soft corners.
- **Typography:** Panel titles use the Kmr family; supporting lines use Inter or quiet gray copy.
- **Composition:** Studio cards and marketing tiles sit in even rows with stable widths.
- **Variants:** Plain placeholder cards, photo cards, and colorful product cards all keep the same frame logic.
- **Visible states:** The selected or active tile stays visually calm; emphasis comes from size, not decoration.

### Marketing hero and research stage

- **Anatomy:** Left-aligned headline, short support column, a stage panel, and sometimes a CTA pair.
- **Surface:** White canvas around a large off-white or pale stage.
- **Typography:** The headline uses the larger Kmr faces; support copy stays in Inter.
- **Shape:** Large rounded stage corners, often around a 24 px feel.
- **Composition:** One main message, one visual stage, and a small amount of supporting text.
- **Visible states:** Arrow controls, tabs, and chips remain understated so the panel stays the focus.

## Responsive behavior

The system should keep its basic order when space tightens: navigation or utility first, then the main heading, then actions, then the cards or panel content. The left rail can compress into a narrower navigation shell, but the selection pattern should stay visible. Large marketing panels should stack before they shrink too far, because their structure depends on clean internal spacing and readable headlines. The card grids can reduce from many columns to fewer columns, but each card should keep its rounded frame and a comfortable content inset. Small controls should remain pill-shaped rather than turning into dense icon clusters.

Typography should step down in clear jumps, not in tiny changes. The large Kmr headings can move to smaller display sizes, but they should still feel distinct from the Inter body text. Support copy should stay readable at all widths, and long labels should wrap before they collide with controls. The interface works best when it keeps enough white space for every module to breathe.

## Practical implementation guidance

### Preserve

- Keep the black primary action as the strongest and most repeated interaction color.
- Keep the left rail calm, narrow, and clearly separated from the main canvas.
- Keep the difference between Kmr display text and Inter UI text easy to read.
- Keep borders thin and gray rather than turning them into heavy frames.
- Keep card spacing generous so the layout feels polished rather than crowded.

### Avoid

- Avoid introducing bright accent colors that fight the monochrome system.
- Avoid heavy shadows, glass blur, or decorative gradients on basic UI panels.
- Avoid making every chip or row look equally important.
- Avoid squeezing the rail, toolbar, or card rows into a dense enterprise grid.
- Avoid collapsing the large marketing panels into small boxes that lose their calm scale.

### Recommended build order

1. Set the Inter and Kmr roles before building anything else.
2. Build the left rail, top bar, and primary action styles.
3. Add the Studio and Home card structures.
4. Build the search row, list rows, and chip treatments.
5. Add the marketing hero, research stage, and large use-case panels.
6. Finish with spacing, border, and contrast checks across all surfaces.

### Accessibility

- Keep visible focus treatment on pills, icon buttons, and sidebar rows.
- Do not rely on color alone to show the selected state; pair fill, weight, and contrast.
- Label icon-only controls clearly so their function is obvious.
- Make sure gray helper text still reads cleanly on white and pale panels.
- Provide meaningful alternative text for every image card and product panel.

## Scope note

This guide covers the visible desktop app shell, the Home and Studio workspace pages, and the white marketing sections with the voice and agents panels. It does not include mobile layouts, hover or disabled states, motion rules, or editor behaviors not shown here.
