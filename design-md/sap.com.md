# How sap.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sap.com-design)

Last updated: 2026-08-08

## Captured pages

[![Centered hero with pale world map, trust line, and blue action button](https://pin.fontofweb.com/2381?format=jpg)](https://design.withfudge.com/share/pin-2381)

[Centered hero with pale world map, trust line, and blue action button](https://design.withfudge.com/share/pin-2381)

[![Three-column solution grid with pale blue symbol tiles and compact cards](https://pin.fontofweb.com/2380?format=jpg)](https://design.withfudge.com/share/pin-2380)

[Three-column solution grid with pale blue symbol tiles and compact cards](https://design.withfudge.com/share/pin-2380)

[![Light footer with contact block, link columns, and floating blue action](https://pin.fontofweb.com/2379?format=jpg)](https://design.withfudge.com/share/pin-2379)

[Light footer with contact block, link columns, and floating blue action](https://design.withfudge.com/share/pin-2379)

## Overview

SAP’s homepage presents enterprise software as steady and globally established rather than flashy. The page leans on a pale base, a faint world-map wash, centered headline language, and a restrained blue action color to create a calm first impression. The message is direct: the site wants to feel dependable, broad in reach, and easy to scan.

The structure is consistent from top to bottom. The hero opens with generous whitespace and a single strong button. The solution area becomes more modular, with repeated cards and small blue glyph tiles. The footer closes the page with a denser directory treatment that still keeps the same light surface and quiet text rhythm. The system works because it uses type, spacing, and a narrow color set to carry most of the hierarchy.

## Colors

The palette is deliberately narrow, and that narrowness is part of the brand voice. Most of the page sits on near-white or very light gray surfaces, so the blue action color can stay clearly legible without competing with other saturated accents. Dark text provides the reading anchor, while softer gray-blue tones support secondary content, separators, and the footer. The pale icon tiles repeat the same family of cool hues so the grid feels related without becoming loud.

This is a light-only system for the covered page surface. The pale map wash and the logo imagery stay subordinate to the UI palette rather than becoming separate color modes. Blue remains the action and emphasis color across the hero, solution cards, and footer. There is no dark counterpart in the covered surface, so contrast comes from value relationships and restraint instead of switching palettes. The logo and photographic-like details behave as background context, not as the dominant color story.

| token | value | use |
|---|---|---|
| action | #0A6ED1 | Primary buttons, emphasis links, and the floating contact action |
| action-soft | #E5F1FA | Soft blue tile tint and quiet highlighted backgrounds |
| canvas | #F5F7F9 | Main page canvas and open areas behind the hero |
| surface | #FFFFFF | Card surfaces, content blocks, and inset white panels |
| ink | #1D2B36 | Main headlines, card titles, and strongest readable text |
| muted-ink | #516270 | Supporting lines, explanatory copy, and low-priority labels |
| border | #D7E0E8 | Thin card edges, quiet separators, and subtle framing |
| tile | #D9ECFA | Pale icon backgrounds behind the blue line symbols |
| tile-ink | #0A63C7 | Symbol strokes and small marks inside the tiles |
| footer-surface | #ECEFF3 | Footer background and the lower utility band |
| footer-ink | #3F4D5A | Footer links, contact details, and legal copy |

The palette keeps white and off-white surfaces dominant, which gives the blue action color room to read as the clear clickable cue. The tile colors are slightly softer than the button blue, so the cards can feel active without stealing focus from the main call to action. Footer gray stays in the same family as the rest of the page, which lets the bottom area feel like a continuation of the same system rather than a separate zone.

## Typography

The main text system uses **72 Brand Variable**. It carries the full hierarchy from the hero headline down to legal copy, with weight and size doing most of the work. The large headings are bold and compact, while body copy stays open enough to support long enterprise descriptions. **Sapcomicons** supplies the small UI glyphs in the contact rail, social marks, and utility controls; it is separate from the text hierarchy and should not be treated as body text. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | 72 Brand Variable | 3.25rem | 700 | 1.1 | -0.03em | Large top-section headline |
| section-display | 72 Brand Variable | 2.75rem | 700 | 1.1 | -0.025em | Big solution-section heading |
| card-heading | 72 Brand Variable | 1.25rem | 700 | 1.2 | -0.01em | Solution card titles |
| body | 72 Brand Variable | 1rem | 400 | 1.5 | 0em | Supporting copy and explanatory text |
| body-medium | 72 Brand Variable | 1rem | 600 | 1.5 | 0em | Buttons, links, and emphasized short labels |
| label | 72 Brand Variable | 0.75rem | 600 | 1.4 | 0em | Small utility labels such as region or section tags |
| legal | 72 Brand Variable | 0.75rem | 400 | 1.4 | 0em | Footer legal text and secondary notes |
| ui-glyphs | Sapcomicons | 0.75rem | 400 | 1 | 0em | Small interface symbols in contact and utility areas |

The scale is crisp and enterprise-like. Headlines need enough weight to feel authoritative, but the page does not use theatrical compression or ornamental lettering. Body text should stay readable over long spans, especially in the solution cards and footer columns. The relationship between `body`, `body-medium`, and `card-heading` is what gives the page its structure; those steps should remain intact because they carry the main reading rhythm.

## Layout

The layout unfolds in three clear chapters. First comes the trust-heavy hero: a pale world-map backdrop, a centered headline, a strong blue button, and a row of customer logos. That composition makes global reach feel immediate before any product detail appears. The hero leaves generous space around the message so the button and logo row can breathe instead of feeling stacked.

The second chapter is a modular solution grid. On wide screens, the cards align in a multi-column arrangement with even spacing between rows and columns. Each card follows the same order: a small rounded symbol tile, a bold title, a compact descriptive paragraph, and then a blue text link. That repetition is important because it lets the reader compare offerings quickly without relearning the structure from one card to the next. The grid feels open, but the card copy is still dense enough to support enterprise messaging.

The third chapter is the footer directory. It becomes more compact, yet it keeps the same pale visual language. A contact block sits to the left, multiple link columns fill the center and right, and a legal row closes the page near the bottom. A floating blue contact button stays present without breaking the calm tone. The layout succeeds because the page stays left-aligned, keeps the grid stable, and uses whitespace as the main separator instead of heavy framing.

The page’s proportions are also important. Large sections use broad top and bottom breathing room, while internal groups rely on smaller vertical gaps to keep related items together. The result is a page that can carry a lot of enterprise content without looking crowded or rushed.

## Visual language

The visual language is direct, corporate, and highly legible. A pale gray-white base keeps the page feeling open and controlled. The faint world-map layer in the hero adds reach and context without becoming a decorative focal point. Blue appears in three roles: as the primary action color, as the tint behind the symbol tiles, and as the link color in cards and footer items. That repetition ties the page together across different content zones.

The symbol style is simple and line-based rather than filled or pictorial. The tiles are rounded and lightly tinted, which keeps them friendly while still professional. Headlines are heavy and dark so the interface can support a large amount of information without looking crowded. Borders are quiet and thin, and shadows are minimal. That flatness matters because the page relies on spacing and type instead of depth effects.

The footer keeps the same visual discipline as the rest of the page. It is not treated as a separate brand end cap. Instead, it extends the same light system in a denser form. Even the floating contact button uses the same blue and rounded shape language, so it reads as part of the system rather than as a separate overlay.

## Components

### Hero trust band

- **Anatomy:** Centered headline, blue action button, and a row of customer logos below the message.
- **Surface:** Very light canvas with a pale world-map wash.
- **Typography:** A large bold display line followed by compact support text or a button label.
- **Composition:** Keep the headline centered and leave enough room for the logo row to read as a trust strip rather than a sponsor bar.
- **Visible states:** The primary action is solid blue with white text; it should remain the clearest clickable element in the section.

### Solution card

- **Anatomy:** Small rounded symbol tile, bold title, short explanatory paragraph, and a text link.
- **Surface:** White card on a pale page background with a subtle border or no heavy frame.
- **Typography:** Strong card title, then lighter body copy with comfortable line spacing.
- **Shape:** Rounded tile at the top and restrained panel corners on the card itself.
- **Spacing:** Keep the tile separated from the title so the card reads as a structured stack, not as a single block.
- **Visible states:** Links should stay visibly blue and distinct from body copy; the card should remain simple enough to scan in rows.

### Footer directory

- **Anatomy:** Contact summary on the left, multiple link columns in the middle and right, and legal copy below.
- **Surface:** Light gray footer surface rather than a dark end cap.
- **Typography:** Smaller weights and sizes than the solution area, with a muted hierarchy for secondary information.
- **Composition:** Keep the columns aligned and evenly spaced; the footer should feel organized, not compressed.
- **Visible states:** Social and utility buttons are small, square, and lightly framed; the floating contact button is the most prominent action in this zone.

### Floating contact action

- **Anatomy:** A fixed blue button with a small symbol and label.
- **Surface:** Strong blue fill with white text and symbol.
- **Shape:** Rounded rectangle, slightly larger than the inline buttons used elsewhere.
- **Composition:** Anchor it away from the main content so it does not interrupt the reading path.
- **Visible states:** It should stay high contrast against the pale footer surface and remain legible at a glance.

### Utility links and contact text

- **Anatomy:** Region line, phone number, contact link, and policy or company links.
- **Typography:** Small but readable text with a restrained weight.
- **Composition:** Use vertical spacing to separate related lines, then group the columns so they remain scannable.
- **Visible states:** Link text should remain distinct from supporting copy through color and placement, not through decoration alone.

### Logo row and trust marks

- **Anatomy:** A horizontal line of customer marks beneath the hero call to action.
- **Surface:** The marks sit on the same pale field as the hero so they feel integrated rather than boxed in.
- **Typography and mark treatment:** The row uses brand logos rather than narrative text, so the surrounding type must stay quiet and centered.
- **Composition:** Keep the row visually balanced and give each mark enough spacing to read at a glance.
- **Visible states:** The marks should feel like proof of scale, not like interactive navigation.

## Responsive behavior

On narrower screens, the layout should keep the same order of meaning: hero message first, trust row second, solution cards next, and footer last. The hero should keep the headline prominent even when the logo row wraps or compresses. The solution grid should reduce column count cleanly rather than squeezing the cards into an unreadable row. The footer should stack its columns in a controlled way so contact details remain easy to find before the legal links.

The type scale should also step down in clean increments. Display lines must stay strong enough to carry the page without occupying too much vertical space, and the card copy must remain comfortable to read. The blue action color should not change at smaller sizes; it is the main navigational cue across the page. If the floating contact button remains fixed on smaller screens, it should avoid covering the footer links or the card links.

The logo row may wrap or compress, but it should keep its role as a trust band rather than becoming a dense logo wall. The symbol tiles should remain readable at small sizes, which means the surrounding spacing and card padding need to stay generous enough to prevent the grid from feeling tight.

## Practical implementation guidance

### Preserve

- Keep the page light and open; the pale canvas is part of the brand voice.
- Use SAP blue consistently for buttons, links, and the floating contact action.
- Maintain the bold 72 Brand Variable hierarchy so the page feels authoritative.
- Keep the solution cards uniform in structure so the grid scans quickly.
- Let whitespace do the separation work instead of adding stronger borders or heavy shadows.

### Avoid

- Avoid dark or saturated background sections that would fight the calm enterprise tone.
- Avoid decorative gradients, because the visible system depends on flat clarity.
- Avoid overly rounded card shells that would make the interface feel consumer-oriented.
- Avoid small variations in symbol-tile styling; the tiles should feel like one repeatable system.
- Avoid stacking too many interactive colors; blue should remain the main signal.

### Recommended build order

1. Build the page canvas, base typography, and color tokens.
2. Create the hero trust band with the centered headline and logo row.
3. Add the primary blue button and the blue link treatment.
4. Build the solution-card component and place it in a responsive grid.
5. Add the footer directory, contact block, and legal text.
6. Finish with the floating contact action and small utility controls.
7. Test narrow-screen stacking to keep the reading order intact.

### Accessibility

- Keep text contrast strong against the pale background and footer surface.
- Make the blue button and text links large enough to read and tap comfortably.
- Use visible keyboard focus on the floating contact button, footer controls, and every card link.
- Give the logo row and symbol tiles useful alternate text or labels where they carry meaning.
- Preserve readable line lengths in the solution cards and footer so the copy does not feel cramped.

## Scope note

This guide covers the desktop homepage hero, trust strip, solution grid, footer directory, and floating contact action. Dark-mode, alternate photo-led variants, mobile-specific layouts, motion, loading states, and full interaction behavior are outside this guide. Measurements are practical adaptation targets.
