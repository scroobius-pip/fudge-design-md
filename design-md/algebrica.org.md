# How algebrica.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/algebrica.org-design)

Last updated: 2026-08-03

## Captured pages

[![Homepage with left navigation rail, dark quote panel, and pale topic cards below](https://pin.fontofweb.com/8751?format=jpg)](https://design.withfudge.com/share/pin-8751)

[Homepage with left navigation rail, dark quote panel, and pale topic cards below](https://design.withfudge.com/share/pin-8751)

[![Category grid with stacked gray cards and checkbox-style concept rows](https://pin.fontofweb.com/8750?format=jpg)](https://design.withfudge.com/share/pin-8750)

[Category grid with stacked gray cards and checkbox-style concept rows](https://design.withfudge.com/share/pin-8750)

[![Dark intro panel with centered quote, image block, and muted supporting copy](https://pin.fontofweb.com/8749?format=jpg)](https://design.withfudge.com/share/pin-8749)

[Dark intro panel with centered quote, image block, and muted supporting copy](https://design.withfudge.com/share/pin-8749)

[![Article page header with breadcrumb, theorem title, status row, and boxed proof sections](https://pin.fontofweb.com/8752?format=jpg)](https://design.withfudge.com/share/pin-8752)

[Article page header with breadcrumb, theorem title, status row, and boxed proof sections](https://design.withfudge.com/share/pin-8752)

## Overview

Algebrica is a restrained mathematical knowledge base with the tone of a printed reference shelf translated to the web. The page language stays calm: white and very pale gray surfaces, thin dividers, black text, muted gray metadata, and the classic blue link as the only sharp color accent. The design does not depend on heavy illustration or decorative motion. It relies on order, spacing, and a careful hierarchy between navigation, chapter cards, and long reading surfaces.

The home and article views share the same editorial discipline. A narrow left rail organizes discovery and history. The main column uses rounded cards to separate topics, definitions, and theorem-like content. A dark panel appears as a deliberate contrast point, but it still keeps the same sparse structure: a centered statement, a large image block, and understated supporting copy. The result is serious without feeling brittle.

## Colors

Algebrica is almost monochrome. The most important relationship is between the canvas and the card surfaces: `#F6F6F6` frames the page, `#FFFFFF` lifts the readable surfaces, and `#E5E5E5` / `#E6E6E6` fill the soft containers that hold lists and article summaries. That small set of pale neutrals creates separation without shadow-heavy depth. Borders use `#DADADA` as a quiet rule color rather than a hard outline.

Text follows the same stepped hierarchy. `#000000` is the main ink for titles and body copy. `#666666`, `#777777`, `#999999`, and `#AAAAAA` are used for supporting labels, timestamps, list metadata, and secondary notes. Those values matter because the interface contains a lot of dense reading material; the grays keep the structure legible without pulling attention away from the math.

The only saturated interaction color is `#0000EE`. It marks links and inline references, and it should stay visually distinct from the neutral system so that body links remain easy to find. Dark sections reverse the surface relationship with `#282828`, then use lighter grays such as `#CCCCCC` and white for text contrast. In other words: light mode is paper and graphite, dark mode is charcoal and silver, and blue remains the same in both.

## Typography

Segoe UI is the only family visible in the supplied pages. It carries the whole system, so hierarchy comes from size, weight, and line spacing instead of family switching. Reuse licensing is not stated here and should be confirmed separately before shipping.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Segoe Ui | 1.5rem | 500 | 1.4 | 0em | Page title and the most prominent chapter heading |
| `section-display` | Segoe Ui | 1rem | 500 | 1.5 | 0em | Section labels, panel headings, and small chapter titles |
| `card-title` | Segoe Ui | 0.9375rem | 500 | 1.5 | 0em | Topic names, sidebar headings, and card headers |
| `body` | Segoe Ui | 0.9375rem | 400 | 1.5 | 0em | Paragraph copy, article text, and explanatory notes |
| `body-strong` | Segoe Ui | 0.9375rem | 700 | 1.5 | 0em | Emphasis inside prose and compact bold labels |
| `nav` | Segoe Ui | 0.9375rem | 500 | 1.4 | 0em | Header links, utility actions, and rail navigation |
| `meta` | Segoe Ui | 0.8125rem | 400 | 1.4 | 0em | Dates, view counts, breadcrumbs, and status text |
| `label` | Segoe Ui | 0.875rem | 500 | 1.3 | 0em | Pills, checkbox rows, and compact action text |
| `badge` | Segoe Ui | 0.75rem | 700 | 1.2 | 0em | Numeric tags, counts, and compact stat chips |
| `legal` | Segoe Ui | 0.75rem | 400 | 1.4 | 0em | Footer copy, licensing text, and fine print |

The hierarchy is compact and practical. Titles are only a step or two above body text, which keeps the page from feeling promotional. Bold weight is reserved for labels, chapter names, and short controls; long paragraphs stay regular to preserve readability. Line height tends to sit around 1.4 to 1.5 for prose, which gives formulas and inline links enough air without turning the page into an open textbook layout. The important effect is not dramatic size contrast; it is consistent rhythm.

## Layout

The page is built as a two-column reading system with a thin shell around it. The header spans the top edge, then the layout splits into a narrow left rail and a wide content column. The rail carries discovery tools, recent items, and list-like sections. It reads like a persistent reference index rather than a marketing sidebar. The main column takes the heavier visual work: chapter cards, topic group cards, article bodies, and larger feature panels.

The page rhythm depends on stacking. Each major region sits inside a rounded card with a light border and a clear internal margin. Headings are separated from supporting text by a slim horizontal rule or by a small strip of empty space, not by heavy blocks. That keeps the reading surface calm even when the content is dense. On the home view, the main content alternates between simple list groupings and larger panels. On the article view, the top card acts as a chapter header and the content below is grouped into smaller theorem-like sections.

The layout also uses a strong center of gravity. Main headings and content blocks align consistently, while the rail remains visually subordinate. This makes the pages feel structured instead of split. The dark feature panel on the home page breaks the pattern intentionally: it is a wide, centered block with a darker background, a large image stage, and lighter text zones beneath. That contrast gives the long page a chapter break without changing the overall system.

## Visual language

Algebrica’s visual language is spare, academic, and highly legible. Surfaces are flat or softly filled. Depth comes from borders, spacing, and nested cards rather than from shadows or glossy treatments. Corners are modestly rounded: small chips and counters are barely softened, while major cards use a visibly rounded rectangle that still feels disciplined. The overall shape language is calm enough for mathematical notation and concrete enough for navigation.

The page avoids ornamental color. Blue links do the signaling, and gray does the rest. That means the user reads structure through emphasis, not decoration. List rows are compact and often include tiny count boxes or small labels, which make dense categories easy to skim. The article pages use a similar trick with section cards and rules: the content is long, but the boundaries stay clear.

The dark panel is the only strong tonal shift. It keeps the same orderly composition, but the background moves to charcoal and the text becomes pale. A centered title, a large image, and muted explanatory lines give it a reflective tone that feels closer to a quote card than a hero banner. The system works because even the dark surface respects the same typographic discipline and rounded card geometry as the lighter parts of the site.

## Components

### Header shell

- **Anatomy:** Brand wordmark, centered or prominent utility pill, search field, and account links.
- **Surface:** White or near-white bar with a thin border and very soft rounding.
- **Typography:** Small semibold navigation text, not oversized menu copy.

- **Composition:** The header stays light and restrained so the reading area can carry the page identity.

### Side rail

- **Anatomy:** Grouped navigation sections, short explanatory text, icon-led rows, and compact counts.
- **Surface:** Plain canvas with light dividers between groups.
- **Typography:** Small bold labels for section names, lighter gray copy for descriptions, and tiny numeric chips for counts.
- **Spacing:** Vertical grouping is tight but not cramped; each cluster has enough room to feel like a separate index.
- **Visible states:** Active or recent items are shown through position and emphasis rather than loud color.

### Card surface

- **Anatomy:** Topic title, short summary, and a list of linked concepts or subtopics.
- **Surface:** White or pale gray fill with a 1px border.
- **Shape:** Rounded 12px panels.
- **Spacing:** Interior padding is generous enough to keep list rows from touching the edges.
- **Composition:** Card content is stacked, left aligned, and easy to scan line by line.

### Article panel

- **Anatomy:** Breadcrumb, chapter title, update time, verification or status row, and action items.
- **Surface:** A light card that separates the chapter header from the rest of the page.
- **Typography:** Large semibold title, tiny meta line, and small action labels.
- **Shape:** Rounded rectangle with restrained border treatment.
- **Composition:** The top card acts as a stable summary bar before the longer reading content begins.

### Theorem and reading blocks

- **Anatomy:** Section label, body copy, centered formula line, and short bullet or explanatory paragraphs.
- **Surface:** White card with a light border and a simple top rule inside the block.
- **Typography:** Regular body text with bold emphasis on key terms and references.
- **Composition:** Prose sits above and below the mathematical line, so the formula becomes part of the argument rather than a floating ornament.
- **Visible states:** Links are blue and underlined, which keeps references legible inside dense paragraphs.

### Dark feature panel

- **Anatomy:** Centered headline, image stage, and two-column supporting copy or notes.
- **Surface:** Charcoal background with pale text.
- **Typography:** Larger display text on top, smaller muted text below.
- **Shape:** The panel still uses rounded corners, so the darker surface feels like part of the same system.
- **Composition:** The large image block is the visual anchor; the text stays disciplined and quiet around it.

### Footer

- **Anatomy:** Brand line, views or social row, link columns, licensing statement, and copyright line.
- **Surface:** Light background with simple dividers.
- **Typography:** Small, stable legal text and medium-weight link labels.
- **Hierarchy:** The footer reads as a utility zone, not a second marketing section.
- **Composition:** Information density rises, but visual noise does not.

## Responsive behavior

On narrower screens, the rail should move above or below the main reading column so the article order stays intact. The card system should collapse into a single column while keeping the same border, corner, and spacing language. The header should remain compact, but the search field and utility actions may need to stack or compress so they do not crowd the brand mark. The dark feature panel should preserve its centered title and image block, then let the supporting copy stack beneath it.

The main rule is to preserve reading order and card identity. Do not replace rounded panels with bare text blocks. Do not turn the header into a dense menu wall. Keep the formula blocks centered only when they still have enough width to read cleanly; otherwise let them scale down or break into a more vertical arrangement while retaining the same restrained tone.

## Practical implementation guidance

### Preserve

- Keep the palette narrow: paper white, soft gray, black, blue links, and charcoal for the dark panel.
- Preserve the 12px panel radius and the smaller 3px / 4px rounding on chips and counters.
- Use the same Segoe UI family everywhere.
- Let borders and spacing do the separation work instead of shadows.
- Keep blue as the only persistent action color.

### Avoid

- Avoid bright accent colors, glass effects, or decorative gradients.
- Avoid oversized headline treatment that makes the site feel like a campaign page.
- Avoid adding shadows to every card.
- Avoid mixing multiple font families or invented display styles.
- Avoid dense iconography that competes with formulas and linked text.

### Recommended build order

1. Establish the header shell and the page canvas.
2. Build the left rail and its grouped list patterns.
3. Recreate the standard card surface used by topic lists and article sections.
4. Add the article panel with breadcrumb, title, metadata, and actions.
5. Add the theorem and reading blocks with centered math treatment.
6. Build the dark feature panel as a separate tonal chapter.
7. Finish with the footer and its quiet legal hierarchy.

### Accessibility

- Keep blue links underlined so references are obvious without relying on color alone.
- Make sure gray text on pale cards stays readable against the final background.
- Give the compact count chips and checkbox rows enough hit area for pointer and touch use.
- Keep the focus style visible on header actions, sidebar links, and list rows.
- If equations are rendered as graphics, pair them with accessible text so the math still reads cleanly to assistive technology.

## Scope note

This guide covers the desktop home, category, dark introduction, article, and footer patterns shown in the supplied pages. It does not define smaller-screen breakpoints, hover motion, loading or error states, editing flows, or content types that do not appear in those views.
