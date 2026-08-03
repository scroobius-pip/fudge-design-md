# How catala-lang.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/catala-lang.org-design)

Last updated: 2026-08-03

## Captured pages

[![Centered home hero with oversized serif claim and split call-to-action stack](https://pin.fontofweb.com/9002?format=jpg)](https://design.withfudge.com/share/pin-9002)

[Centered home hero with oversized serif claim and split call-to-action stack](https://design.withfudge.com/share/pin-9002)

[![Home page with highlighted legal phrase, code panel, and paired introduction card](https://pin.fontofweb.com/9001?format=jpg)](https://design.withfudge.com/share/pin-9001)

[Home page with highlighted legal phrase, code panel, and paired introduction card](https://design.withfudge.com/share/pin-9001)

[![Features page with two stacked principle cards and right-aligned explanatory imagery](https://pin.fontofweb.com/9003?format=jpg)](https://design.withfudge.com/share/pin-9003)

[Features page with two stacked principle cards and right-aligned explanatory imagery](https://design.withfudge.com/share/pin-9003)

## Overview

Catala’s visual system reads like an academic paper that has been turned into a website without losing its discipline. The page sits on a pale paper ground, uses serif display type for the main claims, and keeps the rest of the interface in a clean sans-serif voice. Gold-sand buttons, thin rules, and ruled white panels carry the interface, while code examples supply the site’s strongest visual contrast. The overall feeling is calm, exact, and document-oriented rather than promotional.

The page hierarchy is built from long reading spans and clear breaks. A compact top bar holds the brand, navigation, and language switch. The hero leads with a large serif statement, then hands off to smaller explanation blocks, sample code, and example panels. The features page uses the same language, but splits the story into stacked principle cards with imagery and code fragments. Nothing feels crowded; spacing is generous, borders are light, and the page keeps the rhythm of a well-edited technical handbook.

## Colors

The palette is restrained and largely neutral. `canvas` and `surface` set a paper-and-card relationship: the outer page is soft off-white, while the content cards are pure white. That contrast is subtle enough to feel printed rather than glossy. `border` is a warm stone line used for rails, panel edges, and button outlines. It keeps structure visible without hardening the page into a grid of boxes.

Text color moves through a narrow brown-black range. `ink` is the sharpest reading color, while `ink-soft` and `muted-ink` soften paragraphs, notes, and metadata. `link` is a deeper brown that reads as editorial rather than product-blue. The gold `action` fill is the most visible accent on the site and also appears in highlighted inline phrases. It is anchored by `action-border`, which gives buttons a defined edge and keeps the fill from floating on the page. In code examples, `code-accent` and `code-emphasis` introduce controlled syntax color so that the sample looks active without becoming decorative. `code-muted` handles secondary captions and less prominent technical notes.

| token | value | role |
|---|---|---|
| canvas | `#FAFAF9` | Page ground and outer reading field |
| surface | `#FFFFFF` | Cards, content panels, and code surfaces |
| border | `#DDD6CD` | Panel rules, button edges, and rails |
| ink | `#000000` | Strong headline and body contrast |
| ink-soft | `#292524` | Main body text on white panels |
| muted-ink | `#44403B` | Secondary body text and quiet support lines |
| action | `#FBCC80` | Primary buttons and highlighted phrases |
| action-border | `#996633` | Button outlines and emphasis edges |
| link | `#4D3006` | Links, calls to action, and editorial emphasis |
| code-accent | `#008800` | Positive syntax accents in samples |
| code-emphasis | `#BB0066` | Secondary syntax accents in samples |
| code-muted | `#706A63` | Code captions and subdued technical notes |

The system is almost entirely light. There is no dark-mode contrast story in the supplied material, so the palette should stay on paper surfaces, brown-black text, and warm sand actions. Licensing for the named families is not stated here and should be checked before reuse.

## Typography

Three families carry the page. **Libre Baskerville** supplies the serif voice used for the major statements, section titles, and card headings. **Space Grotesk** carries the body copy, navigation, and utility text. **Fira Code** appears in code examples and tiny technical fragments. **System** is used for small caption-like text where a neutral fallback voice is useful. The hierarchy depends on scale, weight, and line length rather than multiple decorative styles.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Libre Baskerville | 2.25rem | 400 | 1.1 | 0em | Main hero statement and page-opening claim |
| section-display | Libre Baskerville | 1.5rem | 600 | 1.33 | 0em | Page section headings such as feature intros |
| card-heading | Libre Baskerville | 1.25rem | 600 | 1.4 | 0em | Principle-card headings and smaller lead-ins |
| body | Space Grotesk | 1rem | 400 | 1.5 | 0em | Paragraph copy and explanatory text |
| body-medium | Space Grotesk | 1rem | 500 | 1.5 | 0em | Buttons, short labels, and emphasized body copy |
| navigation | Space Grotesk | 0.875rem | 500 | 1.43 | 0em | Top navigation and utility links |
| label | Space Grotesk | 0.75rem | 400 | 1.33 | 0.08em | Tiny controls, language tabs, and compact tags |
| code | Fira Code | 0.9rem | 400 | 1.39 | 0em | Syntax-highlighted code blocks and inline snippets |
| meta-copy | System | 1rem | 400 | 1.25 | 0em | Captions, credits, and quiet utility notes |

The serif headings should feel measured and stable, not theatrical. The sans-serif body copy is plain but not generic; it carries long explanatory sentences without tight tracking or heavy weight. The code font needs to stay visually distinct from prose even when the size is close, because the page uses code as a primary illustration rather than a background detail.

## Layout

The page is organized as a wide reading column centered on a pale field, with thin vertical rails and a consistent outer gutter. That framing gives the content an academic page-turn feeling: the eye knows where the text lives, and the borders quietly mark the boundary without adding a heavy container. The layout uses a strong top-to-bottom reading order and only a few repeated structures, so the page never feels like a dashboard.

The top navigation is compact and right-weighted. The brand mark sits at the left, the navigation items occupy the center-right, and the language toggle sits at the far edge in a tiny paired control. The active language tab is filled, while the inactive tab stays white with a border, so the control remains legible without a large footprint. This small bar is the only place where the page feels like a utility interface rather than a reading surface.

The hero is a single-column introduction with a large serif statement and closely related calls to action below it. The primary button is aligned with the text block, not centered across the page, which keeps the page feeling editorial. Supporting actions sit close to the primary one and inherit the same left edge. The result is a readable stack rather than a banner.

Below the hero, the page shifts into content panels with thin borders and generous internal padding. On the features page, the major section opens with a prominent heading and then splits into two stacked principle cards. Each card uses a two-column composition: text on one side, an image or code block on the other. The cards sit inside a ruled container that reads like a section of a printed manual. The internal padding is roomy enough that text blocks breathe, but not so large that the content loses contact with the panel edge.

The footer changes scale but not language. It preserves the same paper background and thin dividers, then opens into multiple link columns with small text and quiet institutional credits. The footer’s structure is simpler than the body: there is less hierarchy, more list-like rhythm, and a clear shift from feature explanation to navigation and attribution.

## Visual language

Catala’s visual language is built from restraint. The page avoids shadows, glossy gradients, and rounded UI chrome. Instead, it uses rule lines, hard-edged cards, and highlighted text to create emphasis. The highlight color appears in two places: as a button fill and as a soft inline marker behind phrases inside headings or body copy. That dual use keeps the system coherent. It also gives the page a way to call attention to key ideas without resorting to iconography or large decorative blocks.

The most distinctive visual move is the pairing of prose and code. Code samples are not tucked away as appendices; they sit beside explanations and sometimes directly under them. Their borders, filename bars, and captions make them feel like quoted documents. Syntax color is used sparingly but intentionally, with green and magenta adding meaning inside the code area while the rest of the page stays neutral. This contrast makes the code blocks feel precise and useful rather than ornamental.

Photography appears as a supporting proof point, not a lifestyle image. The featured photo on the features page shows a working table with multiple screens and cables, which reinforces the collaborative technical tone. It is framed simply and kept secondary to the written material. That restraint matters: the site’s authority comes from the interplay of text, code, and restrained color, not from branding spectacle.

## Components

### Top bar
The top bar is a single horizontal strip with a small logo at left, a compact run of navigation links, and a two-state language switch at right. The links use `navigation` sizing and sit close together, which makes the bar feel efficient and text-led. The language control uses a filled state for the active language and a bordered inactive tab for the alternate language. The control is small enough to stay out of the way, but it still reads as a deliberate interface element rather than plain text.

### Hero statement
The hero statement uses the largest serif voice on the page. It is left aligned, broken into short lines, and surrounded by generous air. The type is heavy in presence but not in weight; the page depends on size and spacing more than on boldness. Inline highlights appear behind selected phrases, creating emphasis without changing the font style. This keeps the headline readable as a single thought while allowing a few key words to step forward.

### Primary and secondary actions
The primary action is a sand-filled rectangle with a thin brown border and dark text. It feels like a labeled card rather than a glossy button. The secondary action stays white with a border, which keeps the button family coherent while preserving a clear ranking. Both styles use compact horizontal padding and the same body-medium typography. The main difference is fill versus outline, not shape or scale.

### Feature or principle cards
The principle cards in the features view are the page’s most important composite blocks. Each card combines a serif heading, a short highlighted lead, a longer body paragraph, and a linked prompt. On the right side of the first card, a code panel shows a formatted excerpt with filename and caption. On the second card, a photo block performs the same explanatory role. The cards feel deliberately instructional: they pair prose with proof, and they rely on the panel border and internal spacing to keep the content legible as a unit.

### Code sample panel
The code panel is a white box with a thin border and a small header strip. Inside, the code uses Fira Code and syntax accents in green, magenta, and brown-black. The panel is not visually noisy; the color is limited to the lines that need it. A caption below the sample gives the code context and sits in a smaller, quieter voice. The panel should remain visually crisp and should not inherit rounded corners or heavy shadows.

### Footer and link columns
The footer is a low-contrast document endcap with grouped link columns. Section titles are serif, while the link lists are compact sans-serif text. The footer also carries a small institutional credit line and mark, which behaves like supporting metadata rather than a marketing banner. The structure is simple, but the spacing matters: each column needs enough breathing room to feel like a small reference list, not a dense sitemap.

## Responsive behavior

When the layout narrows, the page should keep the reading order intact: hero statement, button stack, explanatory text, then code or image support. The two-column principle cards should collapse to a vertical stack with the text first and the visual block second, because the page’s argument depends on reading before illustration. The top bar should stay compact and may need to wrap or condense, but the language switch should remain easy to reach.

Code samples should preserve legibility before they preserve width. If a long line would force the sample to become too narrow, the panel should allow horizontal scrolling or otherwise keep the code at a readable size. The same applies to long citations and filenames. Images should scale with the card width without introducing large empty bands above or below them.

The overall rhythm on smaller screens should still feel like a paper document. That means keeping the page background light, the borders thin, and the spacing measured, rather than replacing the layout with dense mobile chrome. The visual goal is a readable stack of notes, examples, and references.

## Practical implementation guidance

### Preserve
Keep the page paper-like. The white cards, pale canvas, thin borders, and warm brown text are the system’s core. Preserve the serif/sans/code split exactly: Libre Baskerville for the most important claims, Space Grotesk for reading copy and controls, and Fira Code for technical examples. Keep action treatment consistent across the site so the sand-gold button and the same family of highlighted phrases feel related. Preserve the spacious inner padding on content panels; that breathing room is what makes the page feel like a serious document rather than a brochure.

### Avoid
Avoid glossy surfaces, blurred shadows, and decorative gradients. Avoid turning every block into a framed card; the page already has enough structure from the rules and the central column. Avoid replacing serif headings with a geometric sans, because the academic tone depends on that contrast. Avoid introducing a second accent color for buttons or links. Avoid over-rounding corners; the site’s strength is its near-square geometry and measured borders.

### Recommended build order
Start with the page ground, the centered content rails, and the top bar. Then add the hero statement and the two button styles. Next, build the rule-based content panel and the card structure that can hold either a code example or a photo. After that, add the footer columns and the quiet credit line. Finish by tuning the inline highlight treatment, the typography scale, and the spacing rhythm so the page reads as one system rather than a collection of blocks.

### Accessibility
Keep the contrast of the paper-on-brown system strong enough for long reading sessions. Make the active state of the language switch readable without color alone by preserving the fill-and-border difference. Keep link text distinct from body text through color and spacing, not just hover treatment. Ensure code samples have enough contrast and preserve their line structure when wrapped. Maintain a visible focus style on every interactive control, even if the page usually feels quiet and low contrast.

## Scope note

This guide covers the desktop homepage, the features page, the shared top navigation, code panels, principle cards, and footer link columns. It does not define mobile breakpoints, motion, hover choreography, disabled states, or exact container widths. The spacing tokens are rounded to the supplied 4px scale, and the font note does not include licensing terms.
