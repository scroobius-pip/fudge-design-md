# How cavalry.scenegroup.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cavalry.scenegroup.co-design)

Last updated: 2026-08-03

## Captured pages

[![Dark feature banner with neon-green wireframe mark and compact CTA](https://pin.fontofweb.com/7158?format=jpg)](https://design.withfudge.com/share/pin-7158)

[Dark feature banner with neon-green wireframe mark and compact CTA](https://design.withfudge.com/share/pin-7158)

[![Purple FAQ split with ruled white accordion rows and arrow markers](https://pin.fontofweb.com/7157?format=jpg)](https://design.withfudge.com/share/pin-7157)

[Purple FAQ split with ruled white accordion rows and arrow markers](https://design.withfudge.com/share/pin-7157)

[![Light gray how-it-works board with oversized step numbers and grid lines](https://pin.fontofweb.com/7156?format=jpg)](https://design.withfudge.com/share/pin-7156)

[Light gray how-it-works board with oversized step numbers and grid lines](https://design.withfudge.com/share/pin-7156)

[![White feature section with purple emphasis and dense logo wall below](https://pin.fontofweb.com/7155?format=jpg)](https://design.withfudge.com/share/pin-7155)

[White feature section with purple emphasis and dense logo wall below](https://design.withfudge.com/share/pin-7155)

[![Full-page desktop composition with gray hero and diagonal section break](https://pin.fontofweb.com/7153?format=jpg)](https://design.withfudge.com/share/pin-7153)

[Full-page desktop composition with gray hero and diagonal section break](https://design.withfudge.com/share/pin-7153)

## Overview

Cavalry’s pages are built like motion-design posters translated into web layout. The system prefers a small set of loud ingredients: black or charcoal fields, white type, one saturated purple, one neon green, thin rules, and clean pill buttons. The page does not rely on softness or ornamental texture. Instead, it uses hard edges, strong contrast, and large type to make each section feel like a separate chapter.

The visual rhythm comes from switching surfaces, not from adding many new shapes. A dark hero can sit next to a white FAQ block, then a pale gray process board, then a logo-heavy feature section. That alternation keeps a long marketing page readable without crowding it. The neon-green geometric mark and arrow motifs give the site a technical, constructed feel; the purple panels give it a louder promotional voice.

This system should be reproduced with restraint. Keep the forms simple, let the headings carry weight, and use color only when it does real work.

## Colors

The palette is deliberately narrow. Black, white, and deep gray make up the structural base. Purple is the main promotional color: it fills large panels, highlights select words in headlines, and colors the primary contrast against white surfaces. Neon green is the secondary accent and feels more like a signal color than a decorative tint; it belongs on CTA fills, wireframe marks, arrows, and diagrammatic details. The two accents should not compete in the same component unless one is clearly dominant and the other stays in a supporting role.

Use `#000000`, `#141414`, and `#292929` for dark stages and text contrast. Use `#FFFFFF` and `#F5F5F5` for the bright canvas and card backgrounds. `#F4F4F4` and `#C8C8C8` fit the quieter process and footer areas, while `#666666` and `#909090` suit borders, muted labels, and less important copy. `#6437FF` is the signature purple; `#4FFD7A` is the signature green. Black text on white and white text on charcoal are the default pairs. Purple fields should use white text, and green fills should usually use black text so the page stays crisp instead of glowing.

Borders are part of the palette. Thin black rules divide FAQ items, while lighter gray rules separate secondary content and footer lines. Avoid introducing extra semantic colors for status or decoration unless they already match this stripped-down language.

## Typography

Merriweather Sans carries the visible voice of the site. It handles the large page headlines, the mid-size section headings, the body text, and most supporting copy. Applesystem appears in a few compact utility labels and button captions, where the interface needs a slightly tighter, system-like tone. Public Sans appears as a small accent family rather than a core reading face; it suits graphic marks and short decorative treatments. No licensing credit is supplied for these families.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Merriweather Sans | 3.625rem | 800 | 1.2 | -0.02em | Main hero headlines on gray and dark panels |
| section-display | Merriweather Sans | 3.125rem | 800 | 1.2 | -0.02em | Large chapter headings such as “Explore Cavalry” |
| panel-display | Merriweather Sans | 2.25rem | 700 | 1.15 | -0.01em | Feature intros, strong subheads, and panel labels |
| card-heading | Merriweather Sans | 1.75rem | 700 | 1.15 | -0.01em | Smaller feature titles and stepped content headers |
| body | Merriweather Sans | 1rem | 400 | 1.7 | 0em | Supporting paragraphs, FAQ answers, and explanations |
| body-strong | Merriweather Sans | 1rem | 700 | 1.7 | 0em | Inline emphasis inside feature copy and callouts |
| nav | Merriweather Sans | 0.9375rem | 400 | 1.2 | 0em | Top navigation and compact section labels |
| button-label | Applesystem | 0.875rem | 400 | 1.9 | 0.03em | Small CTA labels and utility text on buttons |
| legal-copy | Merriweather Sans | 0.6875rem | 300 | 1.15 | 0em | Footer fine print and the smallest metadata |
| graphic-accent | Public Sans | 2.25rem | 400 | 1 | 0em | Decorative mark fragments and compact graphic text |

The hierarchy is strong and mostly horizontal: big headline, short support copy, action. A bold heading usually sits under a thick top rule, then a short paragraph follows with generous spacing. Supporting text stays calm and does not compete with the headline. In the white sections, body copy is black and reads like a clean product explanation. In the dark sections, white body text is used sparingly and kept short enough to preserve the poster-like feel.

## Layout

The page relies on split compositions and large surface changes. The most common move is a left-aligned text column paired with a large graphic area to the right. That pattern appears in the dark hero and in the promotional feature banners, where the text is compact and the illustration gets a lot of visual room. Another recurring move is a full-width section broken by a diagonal edge, which creates a dramatic transition between the gray hero and the lighter content below.

The site also likes rigid vertical stacks. The how-it-works board uses one heading, then numbered steps, then short explanatory paragraphs, each separated by wide empty space and faint background geometry. The FAQ section flips that logic into a split screen: a solid purple column on the left and a white accordion on the right. The result feels architectural rather than editorial.

Spacing is wide and intentional. Side padding ranges from about `5rem` to `15.625rem` on the larger layouts, and vertical spacing often lands in the `3.125rem` to `7.5rem` range. That generous spacing is part of the brand voice. It gives the bold type room to breathe and keeps the green graphic language from feeling crowded. The layout should keep strong alignment, even when the content grows more complex.

## Visual language

Cavalry’s visual language is geometric, direct, and a little industrial. The brand mark is a triangulated wireframe shape that repeats across the site as a large hero graphic, a smaller icon, or a faint background pattern. Those lines are often neon green or very light gray, and they make the page feel constructed rather than illustrated. The arrows are equally important: they show up inside buttons, in FAQ rows, and in diagrammatic callouts. They make the whole system feel directional and tool-like.

Shape language stays blunt. Buttons are rounded pills. Big sections are mostly rectangular or cut by a single diagonal plane. Cards are flat and sit on high-contrast surfaces. Borders are thin and usually black, so the silhouette of the content matters more than shadow. On bright pages, the purple panel and green icons carry the energy. On dark pages, the black field and white type carry the weight.

The brand also likes pairing a precise graphic structure with a large empty field. That contrast is visible in the hero, the FAQ split, and the logo-wall section. Dense information is usually balanced with one large graphic or one large heading. The result is assertive, technical, and easy to scan.

## Components

### Hero banner

- **Anatomy:** Thick top rule, oversized heading, short paragraph, pill CTA, and a large geometric mark or app tile on the opposite side.
- **Surface:** Often charcoal or gray, with white text and a green or white accent graphic.
- **Typography:** The heading uses the largest Merriweather Sans size on the page; supporting copy drops to a compact body size.
- **Shape:** The CTA is a pill. The graphic mark is angular and faceted, not soft or illustrated.
- **Composition:** Keep the text column narrow and let the right side carry the visual drama.

### Primary CTA

- **Surface:** Neon green fill on dark or neutral panels.
- **Text:** Black, compact, and usually paired with a right-pointing arrow.
- **Shape:** Full pill with no sharp corners.
- **Spacing:** Moderate horizontal padding, a tighter vertical rhythm, and enough room for the arrow to breathe.
- **Visible states:** The button should feel like the strongest action on the page, but still stay small enough to remain a utility object rather than a billboard.

### FAQ split

- **Anatomy:** Left color block, right accordion list, repeated row rules, and a single expanded answer area.
- **Surface:** Purple on the left, white on the right.
- **Typography:** Large stacked heading on the left; medium-size question text on the right.
- **Shape:** The rows are flat and ruled, with arrow markers as the primary cue.
- **Hierarchy:** The expanded item should be easy to spot through spacing and the purple link accent inside the answer text.

### Process board

- **Anatomy:** A top heading, then a numbered sequence of steps with short paragraphs and small geometric illustrations.
- **Surface:** Very light gray with faint wireframe geometry in the background.
- **Typography:** The numbers are large and pale; the step titles are black and bolder than the body copy.
- **Composition:** Keep each step aligned to the same vertical axis so the page reads like a system diagram.
- **Visible states:** The graphics should look like diagrammatic icons, not friendly mascots.

### Feature grid and logo wall

- **Anatomy:** A headline with one purple-emphasized word, two supporting paragraphs, small icon cards, and a dense logo grid below.
- **Surface:** White, with black text and selective purple or green accents.
- **Typography:** Large headline first, then readable paragraph text, then smaller brand names and labels.
- **Shape:** Icons use square outlines, stacked sheets, and circular badges. The logo wall is flat and orderly.
- **Composition:** Keep the icon cards aligned to a strict grid and let the logo wall carry the proof-like density of the section.

### Footer and utility elements

- **Anatomy:** Centered brand mark, social icons, navigation columns, and a small legal line.
- **Surface:** Light gray or charcoal depending on the page family, with muted text.
- **Typography:** Small, quiet, and low-contrast compared with the rest of the site.
- **Shape:** Utility buttons and small floating controls can be square, but they should still use the same green signal color when active.
- **Visible states:** The floating utility button at bottom right should stay discreet, with a black base and a neon-green icon.

## Responsive behavior

When the layout narrows, preserve the order of importance: headline, support copy, action, then graphic. The split FAQ and the hero should stack without losing the strong contrast between the colored block and the content area. The hero mark can move below the text if needed, but the large heading and pill CTA should stay close together. The process board should compress into a single column while keeping the numbered sequence intact. The logo wall should wrap into balanced rows instead of becoming a long, uneven list.

Keep the rule-based structure visible on smaller screens. The thick top rules, the FAQ dividers, and the card outlines are part of the identity and should not disappear. If line length gets too wide, reduce the display size before tightening the spacing too aggressively. The brand relies more on scale and empty space than on dense content.

## Practical implementation guidance

### Preserve

- Keep the purple and green accents in separate jobs: purple for large promotional surfaces and headline emphasis; green for actions, arrows, and wireframe marks.
- Preserve the thick top rule above large headings. It is one of the clearest brand signatures.
- Use flat surfaces and thin rules instead of heavy shadows.
- Keep button shapes pill-like and compact.
- Hold onto the geometric line art and triangular logo language; it is the main visual anchor after type.

### Avoid

- Avoid soft gradients, glassy blur, or casual rounded cards.
- Avoid mixing too many accent colors in one section.
- Avoid tiny, dense paragraphs. The site reads best with short, decisive copy blocks.
- Avoid decorative shadows as the main separation system.
- Avoid replacing the wireframe graphics with generic stock imagery.

### Recommended build order

1. Set up the color pairs and the thick-rule headline treatment.
2. Build the pill button styles and the green CTA variant.
3. Recreate the dark hero with the geometric mark.
4. Build the purple FAQ split and the white ruled accordion.
5. Add the gray process board with the numbered steps.
6. Add the white feature grid and the logo wall.
7. Finish with the footer and the small floating utility control.

### Accessibility

- Keep white text on purple and charcoal surfaces at strong contrast.
- Make sure the green CTA remains legible against dark backgrounds.
- Give the arrow icons and geometric marks a non-redundant text alternative when they carry meaning.
- Keep keyboard focus visible on pill buttons, accordion rows, and any floating utility control.
- Maintain usable spacing around the small action targets so they still work well when the layout compresses.

## Scope note

This guide covers the teams, pricing, and promotional marketing surfaces shown in the supplied views: the dark hero, FAQ split, process board, feature grid, footer, and floating utility control. It does not define smaller-screen stacking, motion, hover behavior, form states, or alternate page families beyond those sections.
