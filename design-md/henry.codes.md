# How henry.codes is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/henry.codes-design)

Last updated: 2026-08-10

## Captured pages

[![Article body with italic section headings and justified body text on warm off-white canvas](https://pin.fontofweb.com/5752?format=jpg)](https://design.withfudge.com/share/pin-5752)

[Article body with italic section headings and justified body text on warm off-white canvas](https://design.withfudge.com/share/pin-5752)

[![Hero display with large mixed-weight italic title, book cover image, and pull-quote with arrow divider](https://pin.fontofweb.com/5751?format=jpg)](https://design.withfudge.com/share/pin-5751)

[Hero display with large mixed-weight italic title, book cover image, and pull-quote with arrow divider](https://design.withfudge.com/share/pin-5751)

[![Works Cited section with centered heading and numbered bibliography in italic text](https://pin.fontofweb.com/5750?format=jpg)](https://design.withfudge.com/share/pin-5750)

[Works Cited section with centered heading and numbered bibliography in italic text](https://design.withfudge.com/share/pin-5750)

[![Disclaimer banner with oversized italic display text inside thin border frame and centered body paragraph](https://pin.fontofweb.com/5749?format=jpg)](https://design.withfudge.com/share/pin-5749)

[Disclaimer banner with oversized italic display text inside thin border frame and centered body paragraph](https://design.withfudge.com/share/pin-5749)

## Overview

This design system captures the visual language of a personal editorial website that treats long-form writing as a crafted object. The system is built around two complementary typefaces: Louize, a refined display serif with elegant italics, and Trjn Da Vinci, a contemporary serif with distinctive italic character. The overall impression is of a printed page brought to screen—warm paper tones, deliberate typographic hierarchy, and restrained ornament that never competes with the text. The design favors immersion over navigation, presenting articles as continuous scrolls where section headings, pull quotes, and asides punctuate the reading experience without breaking the visual rhythm. Every element serves readability first, with the typefaces themselves providing the primary visual interest through their calligraphic forms and careful weight contrasts.

## Colors

The palette is intentionally minimal, derived from the warm off-white paper tones and near-black ink of traditional book printing. Four core colors establish the entire system, with a fifth supporting tone for subtle borders and dividers.

| token | value | use |
|---|---|---|
| ink | #1a1a1a | Primary text, headings, and display type |
| muted-ink | #6b6b6b | Secondary text, captions, pull quotes, and de-emphasized content |
| canvas | #e8e4de | Page background, establishing the warm paper tone |
| surface | #f5f2ee | Elevated panels, disclaimer banners, and inset content areas |
| border | #c8c4be | Hairline rules, frame borders, and section dividers |

The canvas color dominates the viewport, creating an immediate sense of physical paper. The surface variant is slightly lighter and cooler, used sparingly for elements that need subtle elevation without departing from the monochrome warmth. Ink carries a barely perceptible warmth that prevents the harshness of pure black against the cream background. Muted-ink serves as the only true gray, reserved for content that should recede visually. The border tone is desaturated and light enough to function as an optical hairline without drawing attention to itself. No accent colors appear in the interface; emphasis is achieved entirely through scale, weight, and the italic forms of the typefaces.

## Typography

Two font families drive the entire system. Louize, designed by Matthieu Cortat and available from 205.tf, supplies the display voice with its elegant italic forms. Trjn Da Vinci, designed by Virgile Flores, handles body text with a contemporary serif structure that carries distinctive character in its italic. Both families support Regular and Italic styles; the design makes extensive use of italic as a structural element rather than mere emphasis.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Louize | 4rem | 400 | 1.1 | -0.02em | Banner headlines, disclaimer statements, major section openings |
| section-display | Louize | 2rem | 400 | 1.2 | -0.01em | Article section headings, part divisions |
| body | Trjn Da Vinci | 1rem | 400 | 1.6 | 0em | Primary body paragraphs, running text |
| body-italic | Trjn Da Vinci-Italic | 1rem | 400 | 1.6 | 0em | Bibliography entries, emphasized passages, figure captions |
| label | Trjn Da Vinci-Italic | 0.75rem | 400 | 1.4 | 0.02em | Metadata, attributions, small annotations |
| pull-quote | Trjn Da Vinci-Italic | 1.25rem | 400 | 1.5 | 0em | Inline quotations, highlighted statements |

The hero-display size establishes dramatic scale for the disclaimer banner and major article openings, with tight leading that lets the italic forms touch and create visual texture. Section-display provides clear hierarchy for article divisions without competing with the hero scale. Body text at 1rem with generous 1.6 line height ensures comfortable reading across long passages. The italic variants are not treated as secondary; they appear as primary voices for certain content types, particularly in the bibliography and pull quotes where the slanted forms echo the display italic of Louize. Verify licensing for these families before production use.

## Layout

The layout follows a single-column editorial model with strategic asymmetries. The primary content column is centered with a maximum width of approximately 65 characters for body text, creating optimal reading measure. Wider elements like hero displays and disclaimer banners extend beyond this measure, establishing horizontal rhythm through scale contrast.

Section headings align to the left margin of the content column but use negative space above and below to create clear resting points in the reading flow. The generous section spacing of 6rem separates major article divisions, while 2rem content gaps handle tighter groupings within sections.

The disclaimer banner occupies a framed rectangle with substantial internal padding, centered horizontally but given breathing room through its border treatment. Book covers and inline images float to the left of the body column with text wrapping, creating a magazine-like inset effect that breaks the strict single-column rhythm without disrupting readability.

Pull quotes and comparative statements use a two-column layout at wider viewports, separated by a simple arrow glyph. This creates a dialogic visual structure that supports the argumentative content. The Works Cited section returns to a centered heading with left-aligned entries below, maintaining the content column width for consistency.

## Visual language

The visual language draws from mid-century book design and contemporary editorial web practice. The warm paper tone is the dominant sensory impression, reinforced by the absence of pure white anywhere in the interface. Typography is the primary decorative element; no icons, illustrations, or interface chrome compete for attention beyond the occasional thin border rule.

Italic forms perform structural work throughout. Section headings appear in italic, not as emphasis but as voice. The bibliography is entirely italic. Pull quotes lean into their slanted forms. This systematic use of italic creates a coherent calligraphic texture that unifies disparate content types.

Borders appear as single-pixel hairlines in the border color, used to frame the disclaimer banner and separate pull quotes from surrounding text. These rules are light enough to read as paper texture rather than interface elements. No shadows, gradients, or rounded corners appear; the aesthetic is flat and material, suggesting stacked sheets rather than layered interfaces.

The arrow glyph used between comparative statements is the only non-typographic mark, functioning as a minimal connector that avoids the heaviness of words like "versus" or "and."

## Components

**Disclaimer Banner**

A framed statement block that interrupts the article flow with a personal voice. Anatomy: thin border rectangle containing a small attribution label above and oversized hero-display italic text centered within. Surface uses the surface color with a 1px border in border color. Padding is generous at 3rem on all sides. The attribution label uses the label token in muted-ink, positioned above the main text. The hero text uses ink color with potential mixed styling—some words may appear in muted-ink for rhythmic emphasis. No background image or shadow; the frame itself provides all visual containment.

**Article Section Heading**

Marks major divisions within long-form content. Anatomy: section-display italic text in ink color, left-aligned to the content column, with 6rem spacing above and 1rem below. The italic form distinguishes these from body text without requiring size contrast alone. No border, rule, or number accompanies the heading; the typeform itself carries the hierarchy.

**Body Paragraph**

The fundamental reading unit. Anatomy: body token text in ink color, justified or left-aligned depending on context, with 2rem spacing between paragraphs. Maximum width constrained to approximately 65 characters. Inline links, if present, likely use underline or subtle color shift rather than distinct styling. The paragraph block may include inline italic phrases using body-italic for emphasis or foreign terms.

**Pull Quote with Divider**

A highlighted statement set apart from body text. Anatomy: two text blocks separated by a centered arrow glyph, each using pull-quote token in muted-ink. A thin border rule above and below the entire block in border color creates horizontal containment. The arrow sits in the center gap, functioning as visual punctuation. This component appears to present comparative or thesis statements in the author's voice.

**Bibliography Entry**

Numbered citation in the Works Cited section. Anatomy: body-italic text in ink color, with a superscript numeral preceding each entry. Entries stack vertically with 0.75rem spacing between. The italic form unifies the bibliography as a distinct content type, while the numbering provides scannable reference points. No hanging indent is visible; entries appear as continuous blocks.

**Inline Image with Caption**

Photographic or illustrative content embedded in the article flow. Anatomy: image floated left with body text wrapping to the right, or centered above related paragraphs. The book cover example shows a physical object with shadow and dimension, suggesting that images retain their natural character rather than being flattened into the interface. No border or frame surrounds the image itself.

## Responsive behavior

The single-column layout adapts gracefully to narrower viewports through proportional scaling. The hero-display size should reduce to section-display scale on small screens to maintain line length integrity. The content column width should remain the primary constraint, with horizontal padding increasing to preserve reading margins as viewport narrows.

The two-column pull-quote layout should stack vertically below a moderate breakpoint, with the arrow glyph rotating or repositioning to indicate continuation rather than comparison. The disclaimer banner frame should maintain its internal padding proportionally, potentially reducing to 2rem on the narrowest viewports.

Body text should remain at 1rem minimum for accessibility; the generous line height already supports this. Section spacing may compress to 4rem on small screens to reduce excessive scrolling between divisions.

## Practical implementation guidance

**Preserve**
- The warm paper tone as the dominant background; never introduce pure white or cool grays
- The systematic use of italic as structural voice, not mere emphasis
- The restrained border treatment—single pixel, light tone, used sparingly
- The generous whitespace around major divisions and framed elements
- The two-typeface hierarchy: Louize for display, Trjn Da Vinci for body

**Avoid**
- Adding accent colors or decorative elements that compete with the typography
- Rounding corners on any component; the aesthetic is deliberately rectilinear
- Shadows or dimensional effects that suggest layered interfaces
- Pure black text against the warm canvas; maintain the subtle warmth in ink
- Underlining headings or adding background colors to section titles

**Recommended build order**
1. Establish the canvas background and ink text colors globally
2. Implement body typography with Trjn Da Vinci at 1rem with 1.6 line height
3. Add Louize italic for section headings at 2rem scale
4. Build the content column constraint and paragraph spacing
5. Create the disclaimer banner with its frame and hero-display scale
6. Implement the pull-quote component with border rules and arrow divider
7. Style the bibliography with italic entries and superscript numerals
8. Add the inline image float behavior for mixed media articles

**Accessibility**
- Ensure body text maintains 1rem minimum across all viewport sizes
- Provide sufficient color contrast between ink and canvas; the near-black on warm cream meets WCAG AA
- Consider adding visible focus indicators for interactive elements, as the minimal chrome provides few affordances
- The extensive use of italic may affect readability for some users; ensure body text has a non-italic fallback state if needed
- Frame the disclaimer banner with semantic markup to distinguish it from main article content

## Scope note

This guide covers the long-form article reading experience visible in the supplied images. Navigation, homepage, archive listings, and interactive states are not represented. Measurements are practical adaptation targets derived from visual inspection. Motion, hover states, and mobile-specific layouts were not captured and should be designed to maintain the system's restrained editorial character.
