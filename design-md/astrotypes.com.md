# How astrotypes.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/astrotypes.com-design)

Last updated: 2026-08-03

## Captured pages

[![Tanker card showing the bold headline and command row](https://pin.fontofweb.com/8440?format=jpg)](https://design.withfudge.com/share/pin-8440)

[Tanker card showing the bold headline and command row](https://design.withfudge.com/share/pin-8440)

[![Zodiak card showing the serif headline and load-more control](https://pin.fontofweb.com/8439?format=jpg)](https://design.withfudge.com/share/pin-8439)

[Zodiak card showing the serif headline and load-more control](https://design.withfudge.com/share/pin-8439)

## Overview

Astrotypes is a type specimen page with a deliberately narrow visual range. The page does not try to create a full brand world; it lets the type families do the work. Each section reads like a large light card placed on a slightly darker canvas, with a single oversized face name, one calm supporting sentence, and a small command strip anchored near the bottom. The repetition is the identity: the same frame, the same spacing rhythm, and the same restrained controls make each font family feel like a member of one system rather than a separate poster.

The site’s mood is quiet, editorial, and utility-first. It looks built for comparing type choices, not for decoration. Black and near-black text sit on pale surfaces, with very little else competing for attention. Large display names dominate first, then the supporting sans or serif line softens the tone, and finally the monospace command row closes each card with a practical note. That hierarchy should stay intact.

The qualities to preserve are the strong 3.75rem specimen name, the compact 0.5rem corner radius, and the 2rem to 3rem padding rhythm.

## Colors

Astrotypes uses a disciplined grayscale palette. The palette is not about atmospheric shading or brand tint; it is about keeping the type legible and the specimen cards distinct without adding visual noise. The canvas color is `#F5F5F5`, a soft field tone that lets the cards read as lighter sheets. The main card surface is `#FAFAFA`, slightly brighter and closer to paper. Text moves from `#000000` for the darkest utility marks and the most forceful controls, through `#0A0A0A` for primary body text, down to `#737373` for supporting notes and metadata. `#171717` works as a deep neutral for emphasis when the design needs a darker edge without switching to true black.

The most important relationship is contrast by closeness, not contrast by color family. The page succeeds because the differences are small but consistent: canvas to surface, surface to ink, ink to muted ink. That makes the typography feel crisp while keeping the overall tone soft. The system reads as a light design rather than a dark one, and no photographic palette or accent mode is shown here; the same grayscale stack should carry both the field and the cards.

## Typography

The typographic system is the core of the page. It depends on a short ladder: a 3.75rem specimen name, a 1.25rem supporting line, a 1rem reading size for body copy, and 0.75rem to 0.875rem utility text for metadata and controls. The display words are not interchangeable decoration; each family gives the same size a different texture. Tanker feels blunt and blocky, Technor feels more engineered, and Zodiak brings a sharper serif contrast. Supreme and Plus Jakarta Sans sit underneath the specimen name as supporting voices, while Inter carries the quieter explanatory and navigational text. Geist Mono is reserved for the command-like row so the page keeps a terminal-adjacent detail without turning the whole interface into code styling.

Font licensing is not supplied and should be verified before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| specimen-display-tanker | Tanker | 3.75rem | 500 | 1 | -0.025em | Large specimen title on the first card |
| specimen-display-technor | Technor | 3.75rem | 500 | 1 | -0.025em | Alternate large specimen title |
| specimen-display-zodiak | Zodiak | 3.75rem | 500 | 1 | -0.025em | Serif specimen title with a cooler tone |
| support-display-supreme | Supreme | 1.25rem | 500 | 1.4 | 0em | Secondary sentence beneath the title |
| support-copy-plus-jakarta | Plus Jakarta Sans | 1.25rem | 500 | 1.4 | 0em | Another supportive sentence style |
| body | Inter | 1rem | 400 | 1.5 | 0em | General explanatory copy |
| label | Inter | 0.875rem | 500 | 1.43 | 0em | Top metadata line and compact UI labels |
| meta | Inter | 0.75rem | 400 | 1.33 | 0em | Small muted notes and helper text |
| code | Geist Mono | 0.72rem | 400 | 1.37 | 0em | Command row and shell-like snippets |

The hierarchy should stay stable even when the family changes. The same 3.75rem size is the anchor; what changes is the texture of the letters, not the scale. Use the display sizes exactly where the page wants emphasis and avoid sprinkling them into smaller utility slots. The body copy should stay at a calm 1rem so the page can support the large headlines without feeling dense. The 0.75rem and 0.875rem utilities should remain small and restrained, because they are there to frame the specimen rather than compete with it.

## Layout

The page is organized as a vertical stack of broad, rounded cards on a pale canvas. The canvas should stay a touch darker than the card fill, which makes each card read as a bright stage rather than a heavy block. There is no complex grid, no strong side rail, and no visual split that would pull the eye away from the specimen name. Each card occupies the full reading width with generous internal padding and a clean edge radius, so the card itself becomes the unit of comparison. That is the right structure for a font showcase: one family per stage, with enough room for the letters to breathe.

Inside each card, the composition follows a clear order. A small meta line sits at the top left. The giant family name sits below it with a lot of empty space around the letterforms. A supportive sentence follows with a more relaxed line height and a quieter color. Near the bottom, the command row sits left-aligned, while the compact dark arrow control lands at the far right edge of the card. That bottom line gives the card a practical finish and keeps the eye from drifting past the page rhythm. The page works because the top and bottom anchors stabilize the large empty middle.

The spacing pattern is decisive. The internal padding feels like a combination of 2rem and 3rem, which creates a roomy specimen stage without making the card feel soft or decorative. Between cards, the gap is enough to make each sample feel separate but not detached. The design should keep using these larger breathing zones instead of adding borders, dividers, or shadows to force separation. The difference between sections comes from spacing and scale, not from ornamental framing.

The cards also read as intentionally wide, not as small centered modules. That width lets the display families present at full strength, especially the rounded and heavy forms in Tanker and the more delicate contrast in Zodiak. The layout should continue to prioritize horizontal room for the title line and enough bottom clearance for the command strip and action control.

## Visual language

Astrotypes uses a restrained, specimen-led visual language. Its main gesture is size: the letters are large enough to become shape, and the shape is important enough that the page can stay otherwise quiet. The page avoids background texture, gradient treatment, illustration, and any decorative device that would weaken that typographic focus. White and near-white surfaces create a calm field, and the black or near-black text gives the whole interface a printed, almost catalog-like clarity.

The other important gesture is repetition with variation. Every card shares the same shell, the same bottom command pattern, and the same broad spacing logic. What changes is the font family itself and the emotional tone that comes with it. Tanker feels heavier and more assertive. Technor feels more technical and engineered. Zodiak feels more literary and refined. Supreme and Plus Jakarta Sans keep the supporting copy human and readable. Geist Mono adds a compact machine-like note that makes the page feel practical rather than merely decorative.

Controls are also part of the language, but they stay small. The copy icon button beside the command text and the dark arrow button at the end of the row are the only dense objects on the page. Their compact shape and dark fill help close each card without turning it into a busy interface. Keep those controls understated. They should mark interaction, not become the design.

The whole page feels disciplined because every component serves the specimen. There is no crowded chrome, no competing card style, and no extra hierarchy trying to tell a second story. That restraint is the design.

## Components

### Specimen card

- **Anatomy:** Top metadata line, oversized family name, one supporting sentence, bottom command row, compact utility controls.
- **Surface:** Very light card surface on a slightly darker canvas field; the card surface stays quiet so the typography can carry the visual weight.
- **Shape:** 0.5rem corner radius with generous internal padding.
- **Composition:** The title is left aligned and dominates the center of the card, while the command row sits low and the arrow control sits flush right.
- **Visible state:** The card feels static and calm; there is no sign of heavy elevation or hover-driven theatrics.

### Specimen title

- **Typography:** 3.75rem display size with 3.75rem line height and slightly negative tracking.
- **Families:** Tanker, Technor, and Zodiak all serve this role, each with a different texture.
- **Hierarchy:** It is the only element on the card that can feel truly bold and large; everything else should support it.
- **Spacing:** Leave enough air above and below so the shapes of the letters stay readable at a glance.

### Supporting sentence

- **Typography:** 1.25rem or 1rem depending on the card, with a looser line height around 1.75rem or 1.5rem.
- **Families:** Supreme or Plus Jakarta Sans for the warmer, more editorial tone; Inter for the plainer explanatory tone.
- **Color:** Muted ink rather than pure black, so the sentence lowers the volume after the title.
- **Role:** It translates the specimen from a name into a short human-readable line without competing with the main face.

### Command row

- **Anatomy:** Small monospace string at left, tiny pale square utility button, and a compact dark square arrow control at the far right.
- **Typography:** Geist Mono at 0.72rem utility sizing.
- **Surface:** The string sits directly on the card; the controls feel like inserts rather than framed widgets.
- **Shape:** The utility buttons keep the 0.5rem radius and stay very small.
- **Visible states:** The row reads as a practical action area, but it remains visually secondary to the specimen title.

### Load more control

- **Anatomy:** Centered text-only control beneath the stack.
- **Typography:** Small Inter utility text.
- **Hierarchy:** It closes the list without introducing a new card or a strong visual block.
- **Role:** It should stay minimal so the page still feels like a type catalog, not a dense feed.

## Responsive behavior

At narrower widths, the same order should remain intact: meta line, specimen title, supporting sentence, command row, then the load-more control. The layout should preserve the clean vertical reading path and avoid collapsing the cards into cramped blocks. The display title may wrap, but the wrapping should feel intentional and balanced rather than forced. The command row can stack more tightly if needed, yet it should still read as a small utility strip, not as a multi-row control cluster. The biggest risk on smaller screens is overfilling the card with padding and leaving too little room for the display family, so the spacing should contract carefully while keeping the title dominant. The page should never introduce a second visual system for mobile.

## Practical implementation guidance

### Preserve

- Keep the page monochrome and let the type families supply the personality.
- Preserve the 0.5rem radius and the broad card shell; the cards are the frame for the specimens.
- Hold onto the 3.75rem display size and the compact bottom command row.
- Use 2rem and 3rem spacing as the main structural rhythm.
- Keep the utility controls small and dark so they anchor the row without stealing attention.

### Avoid

- Avoid accent colors, gradients, soft shadows, or any decorative surface treatment that competes with the fonts.
- Avoid compressing the cards into dense panels with tight padding.
- Avoid using more font sizes than the page already needs.
- Avoid turning the command row into a loud button bar.
- Avoid introducing a different card pattern for one family and a second pattern for another.

### Recommended build order

1. Establish the grayscale palette and the pale canvas.
2. Build the rounded specimen card shell with the 2rem to 3rem internal spacing.
3. Set the display title system at 3.75rem and wire in Tanker, Technor, and Zodiak variants.
4. Add the supporting sentence styles with Inter, Supreme, and Plus Jakarta Sans.
5. Finish the command row with Geist Mono and the two utility controls.
6. Add the centered load-more control and verify the vertical rhythm across the stack.

### Accessibility

- Keep text contrast strong enough that the muted gray lines remain readable on the pale surfaces.
- Give the small utility buttons clear keyboard focus styling; their size makes focus visibility important.
- Do not rely on color alone to signal the command row or the load-more control.
- Make sure the large display words still read in order when they wrap on smaller screens.
- Use descriptive labels for the small icon buttons so their function is clear without visual context.

## Scope note

This guide covers the homepage specimen stack, including the large type cards, the command rows, the small utility buttons, and the centered load-more control. It does not cover alternate pages, hidden interaction states, motion, or mobile-specific rearrangements beyond the visible structure here. Spacing values follow the page’s 0.5rem rhythm. Font licensing is not supplied and should be verified before reuse.
