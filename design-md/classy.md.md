# How classy.md is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/classy.md-design)

Last updated: 2026-08-03

## Captured pages

[![Pricing section with stacked copy and the quiet footer links](https://pin.fontofweb.com/10090?format=jpg)](https://design.withfudge.com/share/pin-10090)

[Pricing section with stacked copy and the quiet footer links](https://design.withfudge.com/share/pin-10090)

[![Centered hero with cyan link, magenta highlight, and embedded screenshot](https://pin.fontofweb.com/10089?format=jpg)](https://design.withfudge.com/share/pin-10089)

[Centered hero with cyan link, magenta highlight, and embedded screenshot](https://design.withfudge.com/share/pin-10089)

## Overview

Classy.md is a dark writing surface built around restraint. The page is almost entirely text, with a centered reading column, a black field that never tries to become decorative, and a small amount of top chrome. The visual system does not lean on depth, glossy treatment, or layered panels. It relies on measure, rhythm, and contrast. That makes the site feel closer to an editor, a notes app, or a typed manifesto than a conventional SaaS landing page.

The strongest cue is the way content sits in a narrow column against a very wide empty field. That column stays calm and legible even when the page holds several stacked sections. Headings, paragraphs, bullets, and links all use the same compact monospace family and change mostly through weight, color, and spacing. The page therefore reads as one continuous document rather than a sequence of boxes.

The identity comes from three repeated signals: a monochrome base, cyan link accents, and occasional magenta inline emphasis. Those accents are sparse enough to feel deliberate. They break the dark surface without expanding into a broader palette or a more decorative component system.

## Colors

The palette is intentionally small. `#171717` is the main canvas color and reads as the page background in both supplied views. `#000000` deepens the shell at the edges and serves as the darkest structural black. Text uses `#FAFAFA` for the brightest copy and `#BABABA` for muted paragraphs, secondary lines, and lower-priority tones. `#FFFFFF` appears as a pure utility white for the clearest chrome and should stay distinct from the softer off-white body tone so the page can preserve hierarchy even within a monochrome scheme.

The action color is `#74D4FF`. It is the only cool accent in the system and belongs on links, interactive text, and any line that needs to draw attention without breaking the tone. Its role is functional rather than ornamental. The second accent is `#F6339A`, which appears as a saturated inline highlight. That magenta treatment is strong enough to mark emphasis, but it remains contained because it sits inside text rather than expanding into larger surfaces.

The relationship between these colors matters. On the dark canvas, hierarchy is created by contrast alone: the brightest white for direct copy, softer gray for supporting prose, cyan for action, and magenta for a short moment of emphasis. The design should stay in this dark register rather than inverting itself or introducing additional brand hues.

## Typography

No family-specific credit is supplied in the packet, so no designer or vendor attribution claim is supported here. Licensing should be confirmed separately before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `navigation` | Inter | 1rem | 400 | 1 | 0em | Top-right page nav and outer chrome |
| `shell-ui` | Applesystem | 0.875rem | 400 | 1 | 0em | Tiny wrapper text and browser-like utility chrome |
| `body` | Jet Brains Mono | 1rem | 400 | 1.75 | 0em | Main paragraphs, bullets, and footer copy |
| `section-display` | Jet Brains Mono | 1rem | 600 | 1.75 | 0em | Markdown-style section headings |
| `body-strong` | Jet Brains Mono | 1rem | 600 | 1.75 | 0em | Inline emphasis and strong phrases |
| `legal-copy` | Jet Brains Mono | 1rem | 400 | 1.75 | 0em | Footer links, copyright, and low-priority text |

The typography is compact but not cramped. The 16px monospace body size with a 28px line height gives the page enough air to remain readable over a long vertical scroll. Headings do not become large banners; they stay close to the body scale and become heavier, brighter, and more assertive instead. That choice keeps the page disciplined and document-like.

The mono face is the main identity marker. It makes bullets, headings, body paragraphs, and footer lines feel like one writing system. Inter is useful only for the small top nav because it separates the site chrome from the document content. Applesystem should remain incidental and should not become a third visible brand voice.

Strong text is handled as weight, not as a new style family. That keeps emphasis clear without breaking the page’s visual discipline. Links also remain text-first, so the typography carries most of the interactive language instead of relying on button shapes.

## Layout

The layout is built around a centered reading measure of 31.40625rem (502.5px), with very large side margins and 24px internal padding on the content area. That exact measure is what makes the page feel composed instead of expansive. The whole document reads as a controlled column floating inside a much larger field. The empty space is not wasted; it is the main structural device that keeps the page calm.

Vertical rhythm is unusually regular. Section gaps do not vary much, and that consistency reinforces the editorial feel. A 64px spacing step appears at the page end and in bottom breathing room, which helps the footer feel deliberate without needing a stronger divider. The overall structure is built from a small set of repeating distances rather than a broad scale of offsets.

The top chrome runs full width with 12px side padding and a subtle 1px bottom rule. It stays visually separate from the content column while still sharing the same monochrome logic. The content itself does not use cards, columns, or boxed panels. Instead it stacks headings, explanatory paragraphs, bullets, links, and the occasional framed image one after another. That simplicity is part of the layout language: the page trusts spacing and type hierarchy more than containers.

Hairline rules and blank lines do the work that section backgrounds would do on a more conventional site. Because the page already has strong contrast, there is no need for elevated surfaces or nested wrappers. The design should preserve that openness and resist the urge to add decorative bounds around each block.

## Visual language

The visual language is editorial, minimal, and slightly severe. Markdown markers appear as part of the page texture, but they are not treated as code decoration. The `##` markers, strong text, bullets, and short links all become compositional devices. They create a sense that the page was written rather than assembled from a component catalog. That feeling is central to the site.

Accent treatments are extremely limited. Cyan appears as the main link and action color, often underlined, and magenta appears as an inline highlight block. Both are sharp against the black field and therefore do not need shadows, gradients, or layered backgrounds to stand out. They work because they are rare. If those colors were repeated across buttons, cards, labels, and banners, the page would lose its restraint.

The page also depends on texture from text rather than from imagery. There is no broad photographic system in the supplied views. The identity comes from line length, spacing, and weight changes. That means the design should treat the writing itself as the primary graphic element. The page can handle a small amount of visual interruption, but only when that interruption is still typographic in nature.

The overall tone is quiet and exact. Even the brighter accent points feel like annotations inside a document rather than interface chrome shouting at the reader. That restraint is what keeps the page from tipping into generic dark-mode marketing.

## Components

### Top navigation

- **Anatomy:** Small brand mark at far left, right-aligned links, and a sign-in action at the far edge.
- **Typography:** Inter at 16px, regular weight.
- **Surface:** Sits on the same dark shell as the page, with no separate raised bar.
- **Spacing:** Tight horizontal padding and modest spacing between nav items.
- **Composition:** The nav stays visually lighter than the content column. It should not compete with the writing surface.

### Section heading

- **Anatomy:** A short `##` marker followed by a one-line heading.
- **Typography:** Jet Brains Mono at 16px with heavier weight.
- **Color:** Bright off-white on dark canvas.
- **Spacing:** Separated from body copy by the regular 28px rhythm.
- **Visible state:** A single word may use the cyan or magenta accent when emphasis is intentional, but the default state stays plain and quiet.

### Body copy and lists

- **Anatomy:** Paragraphs, bullet lists, and occasional strong phrases.
- **Typography:** Jet Brains Mono at 16px, regular weight, 28px leading.
- **Color:** Muted gray for most prose, brighter white reserved for stronger emphasis or higher-priority lines.
- **Spacing:** Paragraphs and list blocks use the same repeated vertical rhythm, which makes the page feel typed rather than typeset.
- **Composition:** Keep lines short enough that the column remains calm. The text should never sprawl into a wide reading measure.

### Inline link

- **Anatomy:** Text link with a cyan underline or cyan text treatment.
- **Color:** `#74D4FF`.
- **Typography:** Matches the body face and size.
- **Visible states:** The link is the clearest interactive cue in the system. It should stay low-friction and text-like instead of becoming button-shaped.
- **Composition:** Links belong inside the document flow, not in floating controls.

### Inline emphasis

- **Anatomy:** Short highlighted word or phrase inside a sentence.
- **Color:** `#F6339A` as the fill, with a bright light text color when needed for contrast.
- **Shape:** Sharp-edged text block rather than a rounded badge.
- **Composition:** Keep this treatment rare. It works because it looks like a deliberate annotation.

### Framed image block

- **Anatomy:** A large embedded screenshot with a bright cyan edge glow or frame around a dark interior image.
- **Surface:** The image sits as a single interruption in the reading flow, not as a card grid.
- **Composition:** It should be centered with generous margins so the screenshot feels like a document figure.
- **Hierarchy:** Use it as a mid-page anchor between short markdown sections. It supports the text instead of replacing it.

### Footer

- **Anatomy:** Copyright line followed by three stacked links.
- **Typography:** Jet Brains Mono at 16px, regular weight.
- **Color:** Muted gray with cyan links.
- **Spacing:** Same 28px rhythm, with extra separation before the footer block so it feels like the end of the document.
- **Hierarchy:** Quiet, utility-first, and close to the body tone rather than a separate landing-page footer system.

## Responsive behavior

On narrower screens, the design should preserve the same editorial order: nav first, then section heading, then body copy, then links and footer. The column should compress before the typography does too much damage to readability. Because the core system is already sparse, responsive work should focus on maintaining line length and keeping the 28px rhythm intact. The nav can simplify, but the page should not switch into a card layout or a stacked marketing grid. The document form is the brand.

## Practical implementation guidance

### Preserve

- Keep the page dark, flat, and text-led.
- Preserve the narrow centered measure and the regular 28px vertical rhythm.
- Use one cool accent color for links and one saturated accent for inline emphasis.
- Keep the content in a single writing flow instead of splitting it into cards.
- Let typography carry the hierarchy before adding any structural ornament.

### Avoid

- Avoid gradients, shadows, glass, and depth effects.
- Avoid introducing a broad color palette or multiple button styles.
- Avoid large display type that turns the page into a campaign header.
- Avoid boxed modules around every section.
- Avoid overusing the magenta highlight; it should remain a special event.

### Recommended build order

1. Set the canvas and text colors for the full page.
2. Establish the centered column and the 24px content padding.
3. Apply Jet Brains Mono to the document content and Inter to the outer nav.
4. Recreate the `##` heading style, body copy, bullets, and footer rhythm.
5. Add the cyan link treatment and the magenta inline emphasis.
6. Check the full page at narrow and wide widths to keep the measure disciplined.

### Accessibility

- Keep the cyan link color strong enough to separate clearly from the dark canvas.
- Preserve visible underlines or another text cue so links do not rely on color alone.
- Maintain readable contrast for muted copy on `#171717`.
- Do not let the column widen so much that line length becomes tiring.
- Keep the focus state simple and clearly visible, matching the page’s text-first tone.

## Scope note

This guide covers the supplied desktop homepage/article surface for classy.md, including the top navigation, stacked markdown sections, embedded screenshot figure, and footer. Mobile breakpoints, motion, hover and focus styling, text selection behavior, and runtime editor or cursor states are not included. The relative-unit scale is rounded to 0.125rem steps.
