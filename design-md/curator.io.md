# How curator.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/curator.io-design)

Last updated: 2026-08-03

## Captured pages

[![Centered homepage hero with floating social cards and a black signup button](https://pin.fontofweb.com/7653?format=jpg)](https://design.withfudge.com/share/pin-7653)

[Centered homepage hero with floating social cards and a black signup button](https://design.withfudge.com/share/pin-7653)

[![Blog landing section with rounded filter chips above a three-column article grid](https://pin.fontofweb.com/7656?format=jpg)](https://design.withfudge.com/share/pin-7656)

[Blog landing section with rounded filter chips above a three-column article grid](https://design.withfudge.com/share/pin-7656)

[![Pricing comparison grid with monthly plans and a black enterprise card](https://pin.fontofweb.com/7654?format=jpg)](https://design.withfudge.com/share/pin-7654)

[Pricing comparison grid with monthly plans and a black enterprise card](https://design.withfudge.com/share/pin-7654)

[![Alternative homepage hero with trust logos and a pale feature band](https://pin.fontofweb.com/7651?format=jpg)](https://design.withfudge.com/share/pin-7651)

[Alternative homepage hero with trust logos and a pale feature band](https://design.withfudge.com/share/pin-7651)

## Overview

Curator’s visual language is a clean, sales-focused SaaS system built from white space, black type, rounded cards, and one bright blue secondary accent. The page is structured as a long marketing story: a centered hero, a row of pill filters, article cards, a pricing comparison area, a CTA block, and a restrained footer. The work is not decorative in a lush sense; instead, it relies on proportion, rhythm, and a few high-contrast components to keep the page moving.

The strongest impression comes from the balance between editorial calm and product clarity. Large headlines sit in generous empty space, while the supporting UI stays compact and highly regular. Black filled pills carry primary actions. Light outline chips and small colored dots organize categories without crowding the page. The pricing area shifts into a more analytical mode, but it keeps the same type scale and rounded geometry so the site still feels like one system.

## Colors

Curator uses a mostly monochrome interface: white canvas, black text, and gray support copy. The black fill is the default for the most important interactive controls, especially signup buttons and the active filter chip. Blue is not the main action color; it works as a small, energetic accent for links, category markers, social cues, and tiny highlights inside the content blocks. That keeps the page crisp instead of overly branded.

The visible color roles are narrow and deliberate:

| token | role | use |
|---|---|---|
| `action` | primary fill | Main buttons and the active filter chip |
| `ink` | main text | Headlines, labels, and strong body copy |
| `muted_ink` | supporting text | Excerpts, dates, and secondary labels |
| `quiet_ink` | quiet support | Lower-emphasis metadata and helper copy |
| `canvas` | page base | Blog cards, hero space, and general background |
| `surface_inverse` | inverse surface | Enterprise pricing card and dark CTA moments |
| `accent` | secondary cue | Small links, markers, and content accents |
| `accent_purple` | badge fill | Small status pills and “save” style markers |
| `accent_blue_soft` | soft label tint | Light category chips and small badge backgrounds |

The page also borrows a few vivid platform-like hues for tiny social labels: LinkedIn blue, Facebook blue, Instagram magenta, and orange accent notes. Those hues stay small. They do not compete with the black/white base. That restraint is part of the brand: the interface feels lively without turning into a rainbow system.

## Typography

Curator’s typography is compact, heavy enough to feel confident, and never ornamental. The site uses Geist for the visible product and editorial copy, with the generic system sans-serif for utility navigation and tiny interface text. The scale is simple: a very large hero line, a strong section headline, card titles that still read like display type, and body text that stays open and legible. Weight changes matter more than family changes.

The packet does not supply licensing details for Geist or System.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero_display` | Geist | 3.5rem | 500 | 1.2 | -0.02em | Hero headline and major page statements |
| `section_display` | Geist | 3rem | 500 | 1.2 | -0.02em | Section heads like pricing and comparison blocks |
| `card_heading` | Geist | 2rem | 600 | 1.2 | -0.02em | Blog post titles and plan names |
| `plan_price` | Geist | 1.25rem | 500 | 1.2 | -0.02em | Price lines and plan summaries |
| `body` | Geist | 1rem | 400 | 1.5 | 0em | Excerpts, feature copy, and descriptive text |
| `meta` | Geist | 0.875rem | 400 | 1.5 | 0em | Dates, short notes, and supporting labels |
| `label` | Geist | 0.875rem | 500 | 1.4 | 0em | Buttons, tag text, and compact controls |
| `navigation` | System | 0.875rem | 400 | 1.4 | 0em | Top navigation and utility links |
| `micro` | System | 0.75rem | 400 | 1.2 | 0em | Tiny badges and secondary status text |

The hero and pricing headings are medium-weight rather than ultra-bold, which gives the page a softer, more editorial feel. Body text stays close to 16px with generous leading, so cards can carry longer copy without feeling dense. The 14px and 12px utility text is clean and quiet, which helps the larger headlines stay dominant.

## Layout

The page is built from broad horizontal bands with lots of breathing room between them. The hero is centered and open, with the message column aligned to the middle and supporting imagery or content cards offset to one side. Below that, the site introduces a band of rounded filter chips and then a grid of article cards. Each card has a title, a date, a small category badge, and a short excerpt. The geometry stays consistent even as the content changes.

The layout rhythm is driven by a small, reusable spacing scale: 20px gutters, 16px and 32px local gaps, 60px and 96px section separations, and 120px chapter-like breaks. That produces a page that feels spacious without becoming loose. The blog section uses a three-column card grid on the visible desktop compositions. The pricing section switches into a comparison mode: one left column for feature names and several plan columns across the top. That makes the page read as both marketing and decision support.

The hero and pricing sections use alignment to create hierarchy. In the hero, the headline is centered and the supporting copy is short enough to keep the column tight. In pricing, the top headings are centered over their columns, while the feature list aligns left for scanning. The footer is a multi-column text directory with a clean rule above it, which lowers contrast as the page reaches less important material.

## Visual language

Curator’s visual language is almost entirely about shape, spacing, and a controlled set of fills. Rounded rectangles dominate. Cards are soft, pills are fully rounded, and the enterprise pricing panel turns into a deep black block so the eye has one clear contrast point. The page avoids ornamental borders and heavy gradients. Depth is handled gently, through faint shadows and simple separation rather than dramatic layering.

The interface feels editorial because the cards are treated like neat content tiles rather than app chrome. Blog cards are white panels with restrained borders, strong titles, and compact metadata. Filter chips are equally simple: the active state is black with white text, while inactive chips stay white and light. Tiny colored dots give category identity without requiring large labels. That keeps the filters readable at a glance while preserving the calm white field around them.

Social and platform motifs appear as small colored badges or floating marks, not as large banners. Those accents give the site a lively, networked feel, but they never overturn the base system. The black filled button, the white card, and the bright blue cue remain the core visual grammar. Everything else is a variation on that grammar.

## Components

### Top navigation

The top navigation is a narrow utility strip with a small circular mark, a row of text links, and a right-aligned login plus signup action. The text is small and light enough to stay out of the way of the hero. The signup button is a black pill with white text, which makes it the clearest call to action on the page. The nav feels present, but not loud.

### Hero

The hero uses a large centered headline, a short supporting paragraph, and a single black CTA. In the more illustrative composition, the right side fills with floating content cards, small circular social icons, and a larger feature card that overlaps the cluster. The composition creates motion without animation: the cards look stacked and arranged in space, but the layout still reads as flat and controlled. Keep the headline the main event.

### Filter chips

The blog filters are rounded pills with one active black state and several inactive outlined states. A tiny colored dot precedes most inactive labels, which gives each category a quick visual hook. The chip row is compact and centered, and it should remain visually light. These controls work best when they stay small and evenly spaced rather than becoming large tabs.

### Blog cards

Blog cards are white, softly rounded panels with a strong title at the top, a small date line, a tiny category badge, and a short excerpt below. The title weight is high enough to read as a card headline, while the date and badge keep the block scannable. The cards feel like article previews, not product tiles. Their job is to create a clean reading grid.

### Pricing comparison

The pricing section mixes two component types. First is a comparison table with feature names on the left and plan columns across the top. Second is a row of plan cards that show Free, Pro, Business, and a dark Enterprise option. The light cards use white or pale backgrounds, while the Enterprise card flips to black with light text. The purple “popular” or “save” badge is small and intentionally secondary. The main CTA at the bottom of each plan stays black and pill-shaped.

### CTA block and footer

The CTA block is centered and direct: a short headline, a few small social markers or brand tokens above it, and two black buttons. It feels like a final handoff rather than a separate campaign module. The footer follows with four quiet link columns and a thin rule. It reduces visual noise, keeps the typography small, and lets the page end with a calm utility grid.

## Responsive behavior

When the layout narrows, the hero collage should move below the headline or compress into a simpler stack so the message remains first. Filter chips should wrap cleanly rather than shrinking into unreadable tabs. Blog cards should drop from three columns to two, then to one, while preserving the same card spacing and rounded corners. The pricing comparison should either stack by plan or switch to a controlled horizontal scroll so the feature list stays aligned with the columns. Footer columns should collapse in a predictable order.

## Practical implementation guidance

### Preserve

- Keep the black primary button as the strongest interaction.
- Preserve the Geist-led hierarchy and the compact 56 / 48 / 32 / 20 / 16 / 14 scale.
- Keep cards rounded but restrained; 20px-class corners are the main card shape.
- Use blue only as a secondary cue, not as the default action color.
- Maintain the long white-space rhythm between major page bands.

### Avoid

- Avoid dark, glossy, or gradient-heavy marketing treatments.
- Avoid multiple competing accent families.
- Avoid heavy borders around every card.
- Avoid oversized motion cues that would fight the quiet page rhythm.
- Avoid turning the utility text into a second headline system.

### Recommended build order

1. Set the type scale and black/white button language.
2. Build the top navigation and hero.
3. Add the chip row and the blog card grid.
4. Build the pricing comparison table and the plan cards.
5. Add the CTA block and the footer.
6. Refine spacing and card rounding as one shared system.

### Accessibility

- Keep visible focus states on pills, buttons, and cards.
- Do not rely on color alone for active chips or plan badges.
- Maintain strong contrast on the black Enterprise card and on gray metadata.
- Give the floating social cards and logos descriptive alternative text.
- Keep touch targets generous on the pill controls and primary buttons.

## Scope note

This guide covers the desktop hero, blog index, pricing comparison, CTA block, and footer for curator.io. It does not define mobile navigation patterns, motion, loading states, exact divider color, or the full behavior of interactive controls beyond what is visible here.
