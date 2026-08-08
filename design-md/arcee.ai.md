# How arcee.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/arcee.ai-design)

Last updated: 2026-08-08

## Captured pages

[![Three bordered cards with serif headings and small magenta diagram marks](https://pin.fontofweb.com/6373?format=jpg)](https://design.withfudge.com/share/pin-6373)

[Three bordered cards with serif headings and small magenta diagram marks](https://design.withfudge.com/share/pin-6373)

[![Centered headline with teal emphasis above the three framed cards](https://pin.fontofweb.com/6372?format=jpg)](https://design.withfudge.com/share/pin-6372)

[Centered headline with teal emphasis above the three framed cards](https://design.withfudge.com/share/pin-6372)

## Overview

Arcee AI uses a restrained editorial layout that feels more like a printed argument than a busy software home page. The page is built from a white field, a centered serif headline, and a row of three equal cards below it. Each card carries a short promise, a thin border, and a small geometric drawing near the bottom edge. The result is calm and direct: the page gives the main statement room to breathe, then repeats the supporting ideas with the same structure so nothing feels privileged by accident.

The strongest quality in the page is its discipline. Black type does most of the work, teal is reserved for a single highlighted word, and the magenta mark appears only inside the small line drawings. The page never relies on shine, shadow, or layered surfaces to create interest. Instead, it uses scale, spacing, and the contrast between serif headline text and sans body copy. That balance gives the design a technical tone without making it feel cold.

The system should be treated as a light, high-contrast landing page with a sparse visual vocabulary. If a future dark, photographic, or accent-led version is built, it should keep the same hierarchy and use teal as the one brand note against deeper neutral surfaces.

## Colors

| token | value | role | use |
|---|---|---|---|
| `canvas` | `#FFFFFF` | Page ground | Main page background and card fill |
| `ink` | `#0A0A0A` | Primary text | Headlines, labels, and body copy |
| `muted-ink` | `#4B4B4B` | Secondary text | Supporting lines and quieter explanations |
| `border` | `#A0A0A0` | Structural line | Card outlines and section framing |
| `action` | `#008C8C` | Brand emphasis | The highlighted word in the headline and small UI accents |
| `accent` | `#F04AD6` | Diagram detail | The small center marks inside the line drawings |

The palette stays intentionally small so the page reads as one controlled system. White is the dominant surface and should remain visually clean, with the border color doing just enough work to define the cards and the page edges. Ink is the main text color and should stay strong and dark rather than softened into a near-black that feels gray. Muted ink is useful only when the design needs a quieter line of copy inside a card or a secondary note beneath a larger statement.

Teal is the only color that should feel like a brand signal. It belongs to the single emphasized word in the headline and to any similarly small callout that needs to stand forward without changing the rest of the page. Magenta is even more restrained. It is a tiny pulse inside the geometric drawings, giving the diagrams a point of focus while leaving the structure mostly monochrome. This guide describes the light page; any dark, photographic, or accent-led version should keep the same hierarchy and use teal as the single brand note against deeper neutral surfaces.

## Typography

The page relies on one serif family for the strongest statements and one sans family for the explanatory copy. Noto Serif Armenian gives the headline area its serious, declarative voice. Sora keeps the supporting text crisp and steady. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Noto Serif Armenian | 4.5rem | 700 | 1.05 | -0.03em | Centered hero statement |
| `section-display` | Noto Serif Armenian | 4rem | 700 | 1.05 | -0.025em | Large supporting titles |
| `card-heading` | Noto Serif Armenian | 2rem | 700 | 1.1 | -0.02em | Card headlines |
| `body` | Sora | 1rem | 400 | 1.5 | 0em | Body copy in cards |
| `body-strong` | Sora | 1rem | 400 | 1.5 | 0em | Sans text that needs a steadier tone without a heavier weight |
| `label` | Sora | 1rem | 400 | 1 | 0.08em | Short tags, small labels, and utility text |

The largest serif lines should feel compact and forceful. Tight leading keeps the headline units together so the statement reads as one thought rather than a stack of fragments. The body copy needs more air, because it sits inside a bordered card and must remain easy to scan at a glance. Sora regular is enough for all sans text on this page; emphasis in the sans family should come from spacing, placement, or color instead of a bold weight.

It should remain part of the same typographic line so the emphasis feels built into the sentence rather than pasted on. That keeps the hero treatment elegant and prevents the teal note from turning into a badge. The serif family should remain the voice for declaration, while Sora handles the explanatory sentences and any small utility text. The different roles are clear enough that the page does not need decorative type tricks to create hierarchy.

## Layout

The layout is centered and symmetrical at the top, then becomes a three-part row below. The headline sits on its own band with generous space around it, which gives the page a strong entry point before the eye reaches the cards. Each card has the same width, the same border weight, the same white fill, and a matching amount of internal space. That repetition is what makes the page feel orderly. The cards do not compete with each other; they sit in a measured row and each one receives the same visual treatment.

The structure depends on large open zones rather than dense nesting. The content inside each card is placed high enough to read quickly, while the diagram stays low so the title and paragraph lead the experience. This separation creates a predictable reading path: title, support line, then the small geometric form. Because the cards are square-edged and the borders are light, the layout feels exact without becoming rigid. It has enough air to feel premium, but not so much that the cards drift apart visually.

The grid should keep the same broad spacing between columns and around the outer page edges. The headline requires a clear buffer above the card row, and the cards need room to read as a group rather than as isolated blocks. If more content is added later, it should continue the same column rhythm and use the same thin framing instead of introducing smaller nested modules that would break the calm of the page.

## Visual language

The page speaks in contrast and restraint. Its visual language is built from plain surfaces, sharp borders, and a small amount of color used with discipline. The serif type has enough weight to feel confident, but it is never accompanied by ornate decoration. The drawings are simple line forms: one nested hexagon, one concentric circular form, and one pointed geometric figure. They feel like symbolic diagrams, not illustrations that tell a story on their own.

That diagrammatic quality is central to the page. The forms are thin, low-contrast outlines with a small bright center, which makes them read as precise marks rather than playful graphics. The magenta center is especially important because it prevents the monochrome outlines from becoming dull. It adds a brief moment of energy while keeping the overall composition quiet. The teal headline word works in the same way: it marks one idea, then hands the eye back to the black text.

Flatness matters here. There are no obvious shadows, glossy panels, or layered depths. The cards feel printed on the page rather than floating above it. That choice keeps attention on the copy and the line drawings, and it makes the whole system look measured, technical, and controlled. The design should avoid anything that makes the page feel soft or ornamental, because the current strength comes from directness.

## Components

### Section headline

- **Anatomy:** A centered serif line with one emphasized word.
- **Typography:** Use `hero-display` or `section-display` depending on the section scale.
- **Color:** Keep the main text in `ink`; use `action` only for the highlighted word.
- **Composition:** The accent word should stay embedded in the line so the sentence still reads as one statement.
- **Spacing:** Leave substantial space above and below so the headline acts as the page's opening anchor.

### Feature card

- **Anatomy:** One title, one short support paragraph, and a geometric drawing near the bottom.
- **Surface:** White fill with a thin `border`.
- **Typography:** Use `card-heading` for the title and `body` for the paragraph.
- **Shape:** Square corners and a straight outline.
- **Spacing:** Keep the title near the upper edge, the paragraph below it, and the drawing low in the card.
- **Hierarchy:** The title should dominate the card, with the drawing serving as a quiet visual counterweight.

### Diagram mark

- **Anatomy:** A thin line form with a small colored center.
- **Surface:** Monochrome outlines with a tiny `accent` or `action` core.
- **Role:** The mark suggests structure and precision rather than literal illustration.
- **Balance:** Keep the form small enough that it never overtakes the text above it.

### Body copy block

- **Anatomy:** Short explanatory text in one or two compact paragraphs.
- **Typography:** Use `body` in Sora regular weight.
- **Color:** Prefer `ink`; reserve `muted-ink` for lines that need to sit back slightly.
- **Composition:** Use a narrow measure so the lines remain quick to scan inside the card.
- **Tone:** Keep the phrasing direct and factual so the text supports the title instead of adding a second voice.

### Accent word treatment

- **Anatomy:** One word inside a larger serif statement.
- **Typography:** Same family and same weight as the full heading.
- **Color:** `action` only.
- **Use:** Reserve it for the single word that needs the strongest emphasis in the line.

## Responsive behavior

On a narrower screen, the three cards should stack in the same order they appear on desktop. The top headline should stay above them, and the spacing between sections should remain generous enough that the page still feels open. The thin borders should continue to frame each card clearly, even when the cards become full width. The diagrams should keep their low placement and should not stretch to fill extra vertical space.

Type should scale down in a way that preserves the same family relationships and the same overall contrast between serif headline and sans body copy. The serif heading must remain the most prominent element, but it should wrap cleanly instead of forcing awkward breaks. The cards should keep their internal rhythm: title first, paragraph second, drawing last. That reading order matters more than any exact width, because it preserves the page's calm structure on smaller screens.

If the page becomes part of a longer scroll, the white canvas and thin borders should continue to do the same work at every width. Avoid introducing extra separators or denser modules just to fill space. The point of the design is that every part feels spaced on purpose, not compressed to fit.

## Practical implementation guidance

### Preserve

- Keep the white canvas dominant.
- Keep the serif headline family for the largest claims.
- Keep Sora regular for body copy and utility text.
- Keep the border light and consistent across all cards.
- Keep teal as the single strong brand note and magenta as a tiny diagram accent.
- Keep the layout centered at the top and evenly spaced in the card row.

### Avoid

- Avoid shadows, gloss, and layered depth.
- Avoid rounded corners on the cards or the diagrams.
- Avoid introducing extra accent colors.
- Avoid bold sans text for emphasis; the current system does not need it.
- Avoid shrinking the cards until the title, paragraph, and drawing feel crowded.

### Recommended build order

1. Set the white background, ink text, border color, and teal emphasis color.
2. Build the centered serif headline with the highlighted word.
3. Create one card with the serif title, regular-weight sans paragraph, and low-positioned drawing.
4. Repeat that card across the row with the same spacing and border treatment.
5. Tune the vertical gaps so the headline, cards, and diagrams feel balanced on both wide and narrow screens.

### Accessibility

- Keep contrast strong for the black text, teal emphasis, and thin borders against white.
- Do not rely on color alone if the highlighted word carries functional meaning.
- Treat the diagrams as decorative unless they convey specific content; if they matter, provide text that explains them.
- Keep the reading order clear from headline to cards to drawings.
- Preserve visible focus states if any card or headline word becomes interactive.

## Scope note

This guide covers the homepage section with the centered heading and the three bordered feature cards. It does not include other pages, alternate states, hover or focus styling, motion, or different content arrangements. Measurements are practical adaptation targets.
