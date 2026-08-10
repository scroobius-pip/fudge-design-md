# How rbc.ru is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/rbc.ru-design)

Last updated: 2026-08-10

## Captured pages

[![Article page with headline about AI regulation, featuring a lead image of hands typing on a laptop with red accent, timestamp metadata, and EXCLUSIVE tag in light gray pill.](https://pin.fontofweb.com/9100?format=jpg)](https://design.withfudge.com/share/pin-9100)

[Article page with headline about AI regulation, featuring a lead image of hands typing on a laptop with red accent, timestamp metadata, and EXCLUSIVE tag in light gray pill.](https://design.withfudge.com/share/pin-9100)

[![Article page with headline about snowstorm compensation strategy, showing a fallen tree branch in a wet urban courtyard with playground equipment, RADIO tag in dark pill, and](https://pin.fontofweb.com/9099?format=jpg)](https://design.withfudge.com/share/pin-9099)

[Article page with headline about snowstorm compensation strategy, showing a fallen tree branch in a wet urban courtyard with playground equipment, RADIO tag in dark pill, and](https://design.withfudge.com/share/pin-9099)

## Overview

RBC.ru presents a disciplined, high-contrast editorial experience built for rapid news consumption. The visual system strips away decorative excess in favor of typographic clarity, generous whitespace, and photographic impact. Every element serves the hierarchy of information: the headline commands attention through scale and weight, the lead paragraph provides immediate context, and the hero image anchors the story with documentary realism. The warm off-white canvas avoids clinical sterility while maintaining the neutrality expected of a financial and general news publisher. Tags and metadata sit quietly above the headline, using subtle surface shifts rather than color to distinguish themselves. The overall impression is one of institutional confidence—authoritative without being heavy, contemporary without chasing trends.

## Colors

The palette is intentionally minimal, relying on value contrast rather than chromatic complexity to establish hierarchy and readability.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, body copy, navigation links |
| muted-ink | #1C1C1C | Inverse surfaces, dark tags, secondary dark elements |
| canvas | #FBFBF9 | Page background, primary reading surface |
| surface | #F8F8F8 | Subtle secondary backgrounds, tag pills, metadata areas |
| inverse-surface | #1C1C1C | Dark tag backgrounds, radio indicator pills |
| inverse-text | #FFFFFF | Text on dark surfaces, tag labels |

The system operates in a near-monochrome mode for all interface elements. Color enters only through photography, where the image-palette values describe the editorial content rather than the UI itself. The warm canvas (#FBFBF9) provides a slight temperature shift from pure white, reducing eye strain during extended reading sessions. Dark tags use muted-ink (#1C1C1C) rather than pure black, creating a softer but still decisive contrast against the canvas. The interface colors are drawn directly from the extracted values: black and near-black for text and dark surfaces, warm off-white and light gray for backgrounds, with white reserved for text on dark elements.

## Typography

The system employs a single type family across all roles, differentiated by weight, size, and tracking rather than family change. This creates a cohesive, almost austere reading experience where hierarchy emerges from structural variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Graphik Rbc Lc | 2rem | 600 | 1.125 | -0.01875em | Article headlines, page titles |
| body-lead | Graphik Rbc Lc | 1.0625rem | 500 | 1.4706 | 0em | Lead paragraphs, article summaries |
| body | Graphik Rbc Lc | 0.875rem | 400 | 1.5714 | 0em | Standard paragraphs, descriptions |
| label | Graphik Rbc Lc | 0.625rem | 500 | 1 | 0em | Tags, badges, category indicators |
| navigation | Graphik Rbc Lc | 0.875rem | 400 | 1.5714 | 0em | Menu items, section links |
| meta | Graphik Rbc Lc | 0.8125rem | 400 | 1.3077 | 0em | Timestamps, bylines, photo credits |

The headline treatment is the system's most distinctive typographic feature: at 32px with a tight 36px line height and negative letter spacing of -0.3px, it achieves density and impact without feeling compressed. The semibold weight (600) provides sufficient mass for the large size without the heaviness of bold. Lead paragraphs step down to 17px with medium weight (500), creating a clear but not jarring transition from headline to body. The 14px body size with 22px line height offers comfortable reading for extended text. The 10px label size functions at the threshold of readability, reserved for short uppercase or single-word tags that benefit from compact presentation. Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column editorial model with generous horizontal margins that frame the content and create breathing room around text and images.

Content sits within a container that applies consistent horizontal padding of 24px on each side, establishing a gutter between viewport edge and content. The main content block carries additional bottom padding of 24px, ensuring that scrolling concludes with adequate whitespace rather than abrupt truncation. The overall container employs horizontal margins of approximately 41.6px, which at standard viewport widths produces a comfortable reading measure without excessive narrowing.

The vertical rhythm is built on a 2px relative unit, with major spacing increments at 8px, 20px, 24px, and larger compositional gaps. The headline receives no top margin, sitting directly beneath the metadata strip with minimal clearance. The lead paragraph follows with a substantial gap, typically around 20-24px, creating a clear separation between title and summary. The hero image then appears with equivalent spacing above, establishing a rhythmic alternation between text blocks and visual elements.

Image containers use border-radius of 12px, softening the rectangular geometry of photographs without introducing excessive roundness that would conflict with the system's otherwise rectilinear character. Tags employ a tighter 3px radius, sufficient to distinguish them from plain text spans while maintaining angular precision.

## Visual language

The visual language of RBC.ru is defined by restraint and editorial authority. Photography dominates the expressive register, while interface elements recede into functional clarity. Hero images are presented full-width within the content column, with rounded corners that subtly contain the photographic rectangle without framing it explicitly. The images themselves are documentary in character—unposed, contextual, capturing real environments and activities rather than staged illustrations.

Metadata and tags occupy a narrow band above the headline, using subtle surface differentiation to separate informational layers. The EXCLUSIVE tag appears on a light gray surface (#F8F8F8), while the RADIO tag inverts to dark (#1C1C1C) with white text, creating a small but meaningful hierarchy of story importance or media type. These tags are compact, with minimal padding (6px horizontal), and sit inline with timestamp information rather than floating as detached badges.

The absence of sidebar elements, related story modules, or persistent promotional units reinforces a reading-first philosophy. The page is the story; surrounding apparatus is minimized or deferred. Even the photo credit line, set in muted text at small size, maintains this hierarchy by being present but not prominent.

## Components

### Article headline

- **Anatomy**: Single or double-line heading, no decorative rules or background shapes
- **Surface and text color**: ink (#000000) on canvas (#FBFBF9)
- **Typography**: hero-display token, semibold weight, negative tracking
- **Shape**: No border, no background, no radius
- **Spacing**: Sits immediately below metadata strip, generous margin above lead paragraph
- **Composition**: Full content width, left-aligned, no indentation

### Lead paragraph

- **Anatomy**: Single block of summary text, 2-4 sentences
- **Surface and text color**: ink (#000000) on canvas (#FBFBF9)
- **Typography**: body-lead token, medium weight, standard tracking
- **Shape**: No border, no background
- **Spacing**: 20-24px below headline, 20-24px above hero image
- **Composition**: Full content width, left-aligned

### Hero image

- **Anatomy**: Full-width photograph with rounded container, optional caption/credit below
- **Surface and text color**: Image content varies; credit uses muted text treatment
- **Typography**: Caption/credit uses meta token if present
- **Shape**: 12px border-radius on container
- **Spacing**: 24px below lead paragraph, 16-24px above credit line
- **Composition**: Edge-to-edge within content column, no border, no shadow

### Metadata strip

- **Anatomy**: Timestamp, source label, and optional tag pill in horizontal arrangement
- **Surface and text color**: Timestamp in ink; tag pill on surface (#F8F8F8) with ink text, or inverse-surface (#1C1C1C) with inverse-text (#FFFFFF)
- **Typography**: meta token for timestamp and source; label token for tag text
- **Shape**: Tag pill has 3px border-radius, 6px horizontal padding
- **Spacing**: 8-12px above headline, compact vertical footprint
- **Composition**: Left-aligned, inline flow with small gaps between elements

### Navigation link

- **Anatomy**: Text link, no underline by default
- **Surface and text color**: ink (#000000) on canvas or surface
- **Typography**: navigation token, regular weight
- **Shape**: No border, no background
- **Spacing**: Standard inline spacing
- **Composition**: Inline or list-item arrangement

## Responsive behavior

The pages show a single-column layout that likely maintains its structure across viewport widths, with primary adaptation occurring in margins and type scale. The 24px horizontal padding and 41.6px container margins provide inherent flexibility—on narrower viewports, the margins may compress or the padding may reduce to maintain readable line lengths. The headline at 32px should remain effective on tablet widths but may require reduction on mobile to prevent excessive line breaks in longer Russian headlines. The body-lead at 17px and body at 14px are already conservatively sized for mobile readability.

Images maintain their full-column width and 12px radius across breakpoints, with the aspect ratio determined by source photography rather than fixed containers. The metadata strip may wrap on very narrow viewports, with tags dropping below timestamps while maintaining left alignment.

## Practical implementation guidance

### Preserve
- The stark black-on-warm-white contrast that defines the editorial character
- The single-type-family discipline; resist adding secondary fonts for "visual interest"
- The generous whitespace around headlines and images; do not compress to fit more content
- The documentary, contextual quality of hero photography
- The subtle surface differentiation for tags rather than bold color coding

### Avoid
- Adding decorative rules, borders, or background shapes behind headlines
- Using pure white (#FFFFFF) for page backgrounds; the warm canvas is intentional
- Introducing sidebar elements or persistent promotional units that fragment reading focus
- Applying shadows to images or containers; the flat, direct presentation is core to the aesthetic
- Using bold (700) weight where semibold (600) suffices; the system avoids heavy typographic mass

### Recommended build order
1. Establish the canvas background and ink text defaults
2. Implement the type scale with Graphik Rbc Lc at all six tokens
3. Build the article container with 24px padding and responsive margins
4. Create the metadata strip component with timestamp and tag variants
5. Implement the headline and lead paragraph spacing rhythm
6. Add the hero image container with 12px radius and credit line treatment

### Accessibility
- Ensure the 10px label token is used only for very short text (1-2 words) and never for body content
- Maintain sufficient color contrast: ink on canvas exceeds WCAG AAA; muted-ink on surface meets AA
- Consider increasing body-lead line height slightly for dyslexia-friendly settings without breaking the visual rhythm
- Provide alt text for all documentary photography that conveys contextual information beyond decoration
- Ensure tag pills have adequate target size if made interactive; the current compact padding may need expansion for touch

## Scope note

This guide covers the article page surface, including headline, lead paragraph, hero image, metadata strip, and tag components. Navigation menus, footer elements, homepage layouts, comment sections, and interactive data visualizations are not represented in the supplied material. Measurements reflect the extracted interface values where available.
