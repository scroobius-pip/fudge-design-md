# How baseten.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/baseten.co-design)

Last updated: 2026-08-04

## Captured pages

[![Hero with black headline, bright green underline, and isometric system diagram](https://pin.fontofweb.com/9008?format=jpg)](https://design.withfudge.com/share/pin-9008)

[Hero with black headline, bright green underline, and isometric system diagram](https://design.withfudge.com/share/pin-9008)

[![Two-column feature grid with pale panels and technical cube-and-ring diagrams](https://pin.fontofweb.com/9326?format=jpg)](https://design.withfudge.com/share/pin-9326)

[Two-column feature grid with pale panels and technical cube-and-ring diagrams](https://design.withfudge.com/share/pin-9326)

[![Centered call-to-action band with white field and paired black-outline buttons](https://pin.fontofweb.com/9327?format=jpg)](https://design.withfudge.com/share/pin-9327)

[Centered call-to-action band with white field and paired black-outline buttons](https://design.withfudge.com/share/pin-9327)

[![Large quote block on pale canvas with oversized testimonial text and small attribution](https://pin.fontofweb.com/9325?format=jpg)](https://design.withfudge.com/share/pin-9325)

[Large quote block on pale canvas with oversized testimonial text and small attribution](https://design.withfudge.com/share/pin-9325)

[![Black footer matrix with compact link columns, logo stack, and green status pill](https://pin.fontofweb.com/9328?format=jpg)](https://design.withfudge.com/share/pin-9328)

[Black footer matrix with compact link columns, logo stack, and green status pill](https://design.withfudge.com/share/pin-9328)

## Overview

Baseten presents itself as a systems brand, not a product with ornamental polish. The page is built from a white canvas, black display type, a very small set of green signals, and occasional pink markers inside the diagram language. The hero is severe and spacious: a large left-aligned headline, a short supporting block, and two compact actions. The right side carries the explanation with stacked cylinders, cubes, labels, and dotted connectors. That split gives the page its identity immediately.

The rest of the page keeps the same discipline. White and soft off-white sections alternate with faint ruled guides, then the tone flips hard into a black footer that reads like an operations console. The brand does not rely on gradients, shadow theatrics, or photography. Instead, it uses precise geometry, strict alignment, and a narrow accent range to make the interface feel engineered. The result is calm, technical, and confident without becoming cold.

## Colors

Baseten uses a light-first system with one hard dark endpoint. White and pale tints carry the main story, black is reserved for the strongest type and the footer, and green is the active signal that ties the page together. The brighter green reads as emphasis; the deeper green reads as fill, bars, and button states. Pink stays small and secondary, used as a diagram marker rather than a brand override. There is no photo-led mode here; the explanatory work comes from illustration, grid lines, and color blocks. That means the accent palette must stay narrow so the diagrams remain legible and the typography keeps the lead.

| token | value | use |
|---|---|---|
| action | `#000000` | Filled primary buttons and the strongest call-to-action contrast |
| signal | `#00B86B` | Main green fill for bars, diagrams, and highlighted brand moments |
| signal-bright | `#19E76E` | Brighter green used for energetic strips and small status accents |
| ink | `#000000` | Headline text, body text, and black footer text on light fields |
| ink-soft | `#333333` | Quieter dark text for supporting copy and quote blocks |
| muted-ink | `#909A8B` | Soft label tone, restrained metadata, and light diagram text |
| soft-ink | `#A4B09F` | Faint utility text and subdued scaffold details |
| line | `#B3B3B3` | Hairline dividers and the faint drafting-grid tone |
| line-soft | `#B9C6B3` | Softer panel rules and pale structural boundaries |
| canvas | `#FFFFFF` | Main page background and white button/field surfaces |
| surface | `#F5F8F4` | Quiet pale fields and softened section backgrounds |
| surface-soft | `#F0F5EE` | Feature-band fill and light diagram underlays |
| surface-tint | `#E1EADD` | Slightly deeper pale wash for tonal separation inside panels |
| accent-pink | `#FFA9FD` | Small diagram markers and secondary floating highlights |

## Typography

Neue Alte Grotesk does the brand work. It carries the large headlines, the section titles, and the more compact supporting text with a firm geometric shape and tight tracking at display sizes. Chivo Mono handles labels, chips, and the footer’s technical utility text, which keeps the system feeling precise and tool-like. System and System-Uisansserif appear in the navigational and utility layers, where the page needs a neutral interface voice instead of a branded one. Neue Alte Grotesk is attributed to Krzysztof Chuc and Visual Works.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Neue Alte Grotesk | 5.5rem | 600 | 0.91 | -0.02em | Main home hero and large page statements |
| section-display | Neue Alte Grotesk | 4rem | 600 | 1.25 | -0.03em | Wide section headlines and strong chapter openers |
| card-title | Neue Alte Grotesk | 3rem | 600 | 1.25 | -0.03em | Feature-panel titles and mid-page emphasis |
| subhead | Neue Alte Grotesk | 1.5rem | 600 | 1.25 | -0.02em | Smaller section headlines and quote-like emphasis |
| body | Neue Alte Grotesk | 1rem | 400 | 1.5 | 0em | Paragraph copy and explanatory text blocks |
| navigation | System-Uisansserif | 1rem | 400 | 1.5 | 0em | Main nav, footer columns, and neutral interface text |
| utility | System | 1rem | 400 | 1.5 | 0em | Small shell labels and generic interface copy |
| label | Chivo Mono | 0.875rem | 400 | 1.29 | -0.02em | Chips, buttons, and compact technical labels |
| legal-copy | Chivo Mono | 0.75rem | 400 | 1.33 | -0.02em | Footer legal text and tiny technical notes |

The hierarchy depends on scale and weight more than on style variation. Headings are heavy, close-set, and mostly black. Body copy opens up just enough to keep infrastructure language readable. Mono labels stay compact and all-caps in feel even when the case is mixed, which gives buttons and chips a control-panel character.

## Layout

The page is organized like a sequence of chapters with clear pauses between them. A wide centered frame gives the hero and later content enough breathing room, while the internal grid keeps text and diagrams aligned. The hero is the most explicit two-column layout: message on the left, technical illustration on the right. That split is repeated in smaller forms later, where cards pair copy with diagrams or labels with small visual nodes.

Section spacing is generous but not loose. The page uses recurring gaps that feel closer to a measured system than to casual editorial spacing: compact internal padding, wider band separation, and a much larger break before the footer. Those transitions matter because the page has no photographs to create visual variety. The structure has to do that work instead.

The logo wall under the hero is evenly regular and trust-oriented. It acts like a calm proof strip before the page moves into the feature panels. Those panels are boxed by faint dashed rules and held on a very light background, so each unit reads as an independent explanation without losing the page-wide order. The testimonial band then opens up again, with a soft field, large quote, and modest attribution. At the end, the black footer compresses everything into a dense information matrix.

On narrower widths, this layout should collapse by preserving the reading order rather than the desktop geometry. Copy should remain first, diagrams should drop under the headline, and the footer should stay legible as a stacked information block rather than a squeezed grid.

## Visual language

Baseten’s visual language feels like a drafting board translated into a marketing page. Faint dashed lines and pale rules form the underlying grammar. The page does not use heavy cards or glossy depth; instead, it relies on exact alignment, open space, and a few repeated geometric forms. That restraint makes the diagrams feel more credible.

The green system is the strongest visual cue. The deeper green fills cubes, bars, and stacked cylinders. The brighter lime appears as a highlight strip, a small status chip, or a quick signal inside a diagram. Those two greens are related but not interchangeable: one carries the larger structural forms, the other marks the places where the layout should feel active. Pink is even more selective. It appears as a small marker, a floating chip, or a secondary diagram part, so it adds variety without competing with the main signal color.

The diagrams themselves are compact and technical: stacked disks, cubes, ring halos, tiny labels, and dotted connectors. Their purpose is explanation, not decoration. They keep the page from becoming a plain text brochure while still avoiding illustration noise. The footer completes the language shift. On black, the same brand becomes more operational: white link columns, tiny legal copy, and a compact green status badge create a dense final panel that feels like the end of a technical journey.

## Components

### Announcement bar

- **Anatomy:** One-line full-width strip, short promo copy, and a small inline link.
- **Surface:** Bright green strip on white page chrome.
- **Typography:** Chivo Mono-like compact utility text with strong contrast.
- **Hierarchy:** It sits above everything else and acts as a signal, not a banner ad.
- **Visible state:** Flat and direct, with no decorative depth.

### Global navigation

- **Anatomy:** Logo at left, center-aligned section links, and two terminal actions at right.
- **Typography:** Neutral system text with restrained spacing.
- **Composition:** The links sit on a wide baseline, leaving the hero free to dominate.
- **Visible state:** Clean, minimal, and quiet enough to disappear behind the hero.

### Hero

- **Anatomy:** Large left headline, brief supporting copy, paired actions, and a right-side isometric system diagram.
- **Typography:** Huge Neue Alte Grotesk headline with tight tracking and compact leading.
- **Surface:** Mostly white, with green and pink floating elements in the diagram.
- **Shape:** Straight edges and hard alignment; the only soft shapes are the diagram volumes.
- **Composition:** The headline stays left and heavy, while the diagram keeps the right side open and technical.
- **Visible states:** The primary path is black-filled; the secondary path is a white outlined button.

### Feature panels and explainer cards

- **Anatomy:** Heading, short paragraph, small label, action, and a diagram or metric cluster.
- **Surface:** White or very pale green fields with faint dashed dividers.
- **Typography:** Large Neue Alte Grotesk titles and compact mono labels for chips.
- **Shape:** Straight-edged, square-cornered panels; the system avoids bubble-like corners.
- **Composition:** Cards are arranged in even columns, with copy and illustration balanced rather than stacked randomly.
- **Visible states:** The label chips and metric plaques stay small so the diagrams can remain readable.

### Testimonial band

- **Anatomy:** Large quote, brand name or avatar, and a small attribution line.
- **Surface:** Soft pale field rather than a dark panel.
- **Typography:** Oversized black quote text with modest supporting text.
- **Spacing:** Wide internal margins create a calm reading lane.
- **Hierarchy:** The quote owns the space; attribution is deliberately quiet.
- **Visible states:** No loud framing, no decorative controls, no extra chrome.

### Footer

- **Anatomy:** Logo, social row, multi-column navigation, legal links, and compliance marks.
- **Surface:** Pure black.
- **Typography:** White system text for links and Chivo Mono for tiny legal details.
- **Composition:** Dense columns with generous horizontal separation, then a final status line and badges.
- **Shape:** No visible ornament beyond the small green status pill.
- **Visible states:** The footer is the terminal mode of the system: quiet, strict, and information-heavy.

## Responsive behavior

A smaller viewport should preserve the order of the story rather than the desktop columns. The hero copy should stay first, the diagram should move below it, and the two actions should remain adjacent so the primary path is not buried. The feature grid should collapse in a way that keeps each card’s title, short body, and action together; that trio matters more than the exact number of columns. The logo wall should not become a crowded stamp collection. It can compress, but the marks should remain evenly spaced and readable.

The same applies to the footer. On a narrower screen, the link matrix should become a stacked list or compact column set, but the black surface, white text, and green status marker should survive intact. The page depends on contrast between open white sections and dense black sections, so the responsive version should keep those tonal shifts rather than flattening everything into one middle tone. Typography should scale down, but not so far that the display face loses its squared, assertive rhythm. The diagram language should simplify before it shrinks into illegibility.

## Practical implementation guidance

### Preserve

- Keep the page mostly white and let black text carry the authority.
- Use green as the signal color, not as a general surface tint.
- Keep pink small and secondary inside the diagram system.
- Preserve the dashed grid and pale rules so the page keeps its drafting-table tone.
- Keep the footer fully black and information-dense.

### Avoid

- Avoid photography; the page’s explanation system depends on illustration and linework.
- Avoid shadows and glossy depth.
- Avoid extra accent colors beyond green and pink.
- Avoid over-rounding cards or turning the system soft and playful.
- Avoid letting utility text compete with the main headline hierarchy.

### Recommended build order

1. Set the type scale and the black/white/green foundation.
2. Build the hero with the two-button action pair and the right-side diagram.
3. Add the faint grid and the even feature-card rhythm.
4. Add the testimonial band as a quiet contrast break.
5. Finish with the black footer, status pill, and dense link matrix.

### Accessibility

- Keep the black-on-white contrast strong across body text and headings.
- Verify that green-highlighted text or bars never make the headline hard to read.
- Give every diagram node and logo mark useful alternative text.
- Keep label text legible at 14px and 12px sizes.
- Maintain visible focus styles on actions, footer links, and any small utility controls.

## Scope note

This guide covers Baseten’s desktop marketing surfaces: the home hero, feature panels, testimonial band, and black footer on baseten.co. It does not include app-console views, unseen mobile behavior, motion, or interaction states not visible in the supplied page sections. Measurements are rounded to a 0.125rem step.
