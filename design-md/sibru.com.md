# How sibru.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sibru.com-design)

Last updated: 2026-08-10

## Captured pages

[![News article with river navigation ceremony photo, bold Georgia headline, and muted caption text below image](https://pin.fontofweb.com/9095?format=jpg)](https://design.withfudge.com/share/pin-9095)

[News article with river navigation ceremony photo, bold Georgia headline, and muted caption text below image](https://design.withfudge.com/share/pin-9095)

[![Full-width hero photograph of river navigation opening with crowd and fireworks without text overlay](https://pin.fontofweb.com/9094?format=jpg)](https://design.withfudge.com/share/pin-9094)

[Full-width hero photograph of river navigation opening with crowd and fireworks without text overlay](https://design.withfudge.com/share/pin-9094)

[![Maritime news article with tanker ships in strait, Georgia headline, and ChatGPT photo credit in gray](https://pin.fontofweb.com/9093?format=jpg)](https://design.withfudge.com/share/pin-9093)

[Maritime news article with tanker ships in strait, Georgia headline, and ChatGPT photo credit in gray](https://design.withfudge.com/share/pin-9093)

[![Tropical coastline article with Bali landscape image, blue hyperlinked source attribution, and body text in Georgia](https://pin.fontofweb.com/9092?format=jpg)](https://design.withfudge.com/share/pin-9092)

[Tropical coastline article with Bali landscape image, blue hyperlinked source attribution, and body text in Georgia](https://design.withfudge.com/share/pin-9092)

## Overview

Sibru.com is a Russian-language news publication with a restrained, editorial visual system that prioritizes readability and photographic impact over decorative complexity. The design centers on classic serif typography for headlines and body text, paired with a clean sans-serif for secondary information such as photo credits and metadata. The overall impression is that of a traditional newspaper brought into a digital format: authoritative, uncluttered, and focused on content. Full-bleed photographs dominate the upper portion of articles, often depicting current events with documentary directness. Below each image, understated captions in muted gray provide attribution without competing with the main content. The color palette is deliberately limited, relying on near-black text against a light gray page background to reduce eye strain during extended reading. There is no visible navigation chrome, sidebar clutter, or aggressive calls-to-action in the article view—just the essential hierarchy of image, caption, headline, and body text.

## Colors

The color system is extremely restrained, built around a near-monochrome foundation with a single functional accent for hyperlinks. The palette serves the editorial purpose of the site: colors do not distract from photography or text.

| token | value | use |
|---|---|---|
| ink | #313131 | Primary text for headlines, body paragraphs, and strong emphasis |
| muted-ink | #7B7B7B | Photo captions, metadata, secondary labels, and image credits |
| canvas | #EEEEEE | Page background surrounding article content |
| surface | #FFFFFF | Content card or article container background |
| action | #0654A3 | Hyperlinked source attributions and inline text links |
| border | #000000 | Hairline dividers between content sections |

The light gray canvas (#EEEEEE) creates a subtle frame around the white content surface, helping the article area feel distinct from the browser chrome without resorting to heavy borders or shadows. The ink color (#313131) is warm enough to avoid the harshness of pure black while maintaining strong contrast for Cyrillic text at editorial sizes. Muted ink (#7B7B7B) appears consistently for image captions, establishing a clear secondary reading level that readers can skim or ignore as needed. The action blue (#0654A3) appears sparingly, reserved for clickable source links that connect to external publications like RIA Novosti or The Wall Street Journal. There are no gradient backgrounds, no shadow colors, and no accent colors beyond this functional link blue. Photographs bring their own color energy to the page, and the neutral UI palette steps back to let that imagery breathe.

## Typography

The typographic system splits cleanly between editorial serif for content and utilitarian sans-serif for supporting information. Georgia serves as the voice of the publication, while Roboto handles the quieter administrative text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| headline | Georgia | 1.0625rem | 700 | 1.53 | 0em | Article headlines and bold lead paragraphs |
| lead | Georgia | 1.0625rem | 700 | 1.53 | 0em | Opening paragraphs set in bold for emphasis |
| body | Georgia | 1.0625rem | 400 | 1.53 | 0em | Standard article paragraphs and body copy |
| body-bold | Georgia | 1.0625rem | 700 | 1.53 | 0em | Bold emphasis within running body text |
| caption | Roboto | 0.8125rem | 400 | 1.7 | 0em | Image credits, photo attributions, metadata |
| label | Roboto | 0.8125rem | 400 | 1.7 | 0em | Secondary labels and UI annotations |

Georgia appears at 17px with a comfortable 26px line height, creating a reading experience that feels closer to a printed broadsheet than a typical web article. The bold weight (700) is used for headlines and emphasized opening paragraphs, while regular weight (400) carries the body narrative. The slightly loose line height of 1.53 accommodates Cyrillic ascenders and descenders without feeling spacious. Roboto at 13px with 22.1px line height provides a deliberate contrast: smaller, slightly more open, and mechanically precise where Georgia is organic and classical. This size differential creates clear hierarchy without requiring color changes alone to distinguish content from metadata.

The headline and lead tokens share identical specifications but serve distinct semantic roles: headline introduces the article, while lead marks the bold opening paragraph that follows the image. The body-bold token captures the strong element treatment visible in the interface, where emphasized phrases within paragraphs retain the same size and leading as regular body text but shift to 700 weight. Roboto is designed by Christian Robertson and distributed by Google. Georgia carries no attributed designer or vendor in the available records. Verify licensing for these families before production use.

## Layout

The article layout follows a single-column editorial model with generous margins and clear content sequencing. The page background in light gray (#EEEEEE) extends to the viewport edges, while the article content sits within a centered white or near-white container that defines the reading area.

Photographs occupy the full width of the content container, edge to edge, with no border radius or shadow treatment. Below each image, a narrow gap of approximately 3px separates the photograph from its caption. The caption itself is centered or left-aligned beneath the image in muted gray, often prefixed with a label such as "Фото:" or "Фото: нейросеть ChatGPT" to indicate the image source or generation method.

Following the caption, the headline or lead paragraph appears in bold Georgia, sometimes flowing directly from the image without additional spacing. Standard body paragraphs follow with consistent 17px bottom margins, creating rhythmic vertical spacing that guides the eye down the page. There is no visible sidebar, no related article grid, and no sticky navigation interrupting the reading flow. The layout assumes a content-first philosophy where the photograph and the text are the entire experience.

The spacing system derives from a 2px base unit. Key measurements include 3px for tight image-caption proximity, 10px to 16px for internal padding, 17px for paragraph margins, and 20px for larger section breaks. These values cluster around practical editorial needs rather than an abstract mathematical scale.

## Visual language

The visual character of Sibru.com is documentary and unadorned. Photography is presented at full width without filters, overlays, or gradient scrims—what the image contains is what the reader sees. This directness extends to the caption treatment: small, gray, factual, often citing specific sources like government agencies, news wires, or AI image generators.

There is no decorative iconography, no button styling beyond the implicit text link, and no card-based layout with elevated surfaces. The visual rhythm comes from the alternation between large photographic moments and dense text blocks. Headlines sometimes serve as the immediate continuation of the image narrative, with bold weight creating a visual bridge between the photographic and typographic realms.

The overall aesthetic recalls mid-2000s web publishing updated with contemporary font loading and responsive images: fast, readable, and intentionally plain. The design does not attempt to compete with the content for attention. Even the hyperlink color, a medium blue, is conservative enough to avoid the garishness of brighter digital blues.

## Components

### Article image

- **Anatomy**: Full-width photograph with a single-line caption positioned directly below.
- **Surface**: No border, no shadow, no radius; image edges are sharp against the content background.
- **Typography**: Caption uses `{typography.caption}` in `{colors.muted-ink}`.
- **Shape**: `{rounded.image}` maintains square corners.
- **Spacing**: 3px gap between image bottom edge and caption text top edge.
- **Composition**: Image spans the full content width; caption is centered or left-aligned beneath.
- **Variants**: Some captions include a source prefix ("Фото:"), others include attribution to AI generation tools or wire services.

### Article headline

- **Anatomy**: Bold text block immediately following the image-caption pair, or leading the article body.
- **Surface**: No background distinction; text sits directly on `{colors.surface}`.
- **Typography**: `{typography.headline}` in `{colors.ink}`.
- **Shape**: No border, no padding box; text flows as a standard block element.
- **Spacing**: Typically 10px to 15px margin above if separated from preceding content.
- **Composition**: Full content width, left-aligned, often forming a continuous reading unit with the first body paragraph.

### Article lead paragraph

- **Anatomy**: Bold opening paragraph that may function as a summary or continuation of the headline.
- **Surface**: No background distinction.
- **Typography**: `{typography.lead}` in `{colors.ink}`.
- **Spacing**: 17px bottom margin to separate from subsequent body paragraphs.
- **Composition**: Full content width, left-aligned, visually continuous with headline treatment.

### Article body paragraph

- **Anatomy**: Standard text block in regular weight Georgia.
- **Surface**: No background distinction.
- **Typography**: `{typography.body}` in `{colors.ink}`.
- **Spacing**: 17px bottom margin between paragraphs, creating clear but not excessive separation.
- **Composition**: Full content width, left-aligned, with natural line breaks.

### Inline link

- **Anatomy**: Text hyperlink within body or headline context.
- **Surface**: No underline visible in static state; color alone indicates interactivity.
- **Typography**: Inherits surrounding text size and family; color shifts to `{colors.action}`.
- **Composition**: Flows inline with surrounding text; no pill shape, no background fill.

## Responsive behavior

The single-column layout suggests straightforward responsive adaptation. At narrower viewports, the content container should maintain comfortable side margins rather than reaching the screen edges. The full-bleed images should continue to span the content width, with captions remaining legible at the 13px minimum. The 17px body size and 26px line height should hold across breakpoints to preserve reading comfort for Cyrillic text. If viewport width drops below comfortable reading measure, the content container should narrow with maintained padding rather than scaling typography down. No multi-column behavior is evident in the supplied views, so a single-column stack from image through caption through headline through body represents the complete responsive strategy.

## Practical implementation guidance

### Preserve
- The stark contrast between full-bleed documentary photography and restrained typographic treatment.
- The two-typeface hierarchy: Georgia for editorial voice, Roboto for functional metadata.
- The near-monochrome palette with single blue accent for links.
- The generous paragraph spacing (17px) that creates readable text blocks without excessive whitespace.
- The centered or left-aligned caption directly beneath images with source attribution.

### Avoid
- Adding card containers, shadows, or border radius to article images—the current flat presentation is intentional.
- Introducing additional accent colors or gradient backgrounds that would compete with photography.
- Reducing body text below 17px or line height below 1.5, which would harm Cyrillic readability.
- Moving captions to overlays or side positions; the below-image placement is part of the editorial rhythm.
- Using pure black (#000000) for text; the warm near-black (#313131) is softer for extended reading.

### Recommended build order
1. Establish the page canvas (#EEEEEE) and content surface (#FFFFFF) with a centered max-width container.
2. Implement the typography scale with Georgia at 17px/26px and Roboto at 13px/22.1px.
3. Build the article image component with full-width images and caption spacing at 3px.
4. Add headline and body paragraph styles with appropriate weight and margin treatments.
5. Implement the action blue (#0654A3) for inline hyperlinks within body text.
6. Fine-tune vertical rhythm with paragraph margins at 17px and section breaks at 20px.

### Accessibility
- Ensure the #313131 text on #FFFFFF surface meets WCAG AA contrast ratios (it exceeds 7:1).
- The muted ink #7B7B7B on #FFFFFF may fall below AA for small text; consider darkening captions to #595959 if strict compliance is required.
- Add visible focus indicators for keyboard navigation on inline links, since color alone currently distinguishes links from body text.
- Maintain the 17px minimum body size for readability; do not reduce to 16px or below.
- Provide alt text for all documentary photographs that conveys the factual content shown.

## Scope note

This guide covers the article page surface of Sibru.com as visible in the supplied images: the single-column editorial layout with full-bleed photography, caption treatment, headline and body typography, and inline hyperlink styling. Navigation headers, footers, category pages, homepage grids, comment sections, and mobile-specific adaptations are not represented in the available material. Measurements reflect the exact values retained from the interface analysis.
