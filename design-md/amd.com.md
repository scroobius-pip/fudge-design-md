# How amd.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/amd.com-design)

Last updated: 2026-08-08

## Captured pages

[![Black top bar with AMD wordmark, product links, and utility icons](https://pin.fontofweb.com/2396?format=jpg)](https://design.withfudge.com/share/pin-2396)

[Black top bar with AMD wordmark, product links, and utility icons](https://design.withfudge.com/share/pin-2396)

[![Hero with floating processor, paired vision and mission columns](https://pin.fontofweb.com/2397?format=jpg)](https://design.withfudge.com/share/pin-2397)

[Hero with floating processor, paired vision and mission columns](https://design.withfudge.com/share/pin-2397)

[![Centered About AMD block over a starfield backdrop](https://pin.fontofweb.com/2395?format=jpg)](https://design.withfudge.com/share/pin-2395)

[Centered About AMD block over a starfield backdrop](https://design.withfudge.com/share/pin-2395)

[![Black footer with subscribe button, link columns, and legal line](https://pin.fontofweb.com/2394?format=jpg)](https://design.withfudge.com/share/pin-2394)

[Black footer with subscribe button, link columns, and legal line](https://design.withfudge.com/share/pin-2394)

## Overview

AMD's page language is built around a black field, bright type, and technology imagery that feels engineered rather than decorative. The visual mood is serious and high contrast, with the site moving between a compact global header, a dramatic hero stage, a centered company narrative block, and a sparse footer. The result is less like a marketing brochure and more like a corporate control room for a semiconductor brand.

The design depends on hierarchy more than ornament. Large display headlines carry the message, smaller paragraphs sit in centered or narrow columns, and the page never lets chrome compete with the content. The processor image, starfield backdrop, and footer utility area each play a different role, but they all sit inside the same black framework. That continuity gives the brand a steady, technical tone.

The visual system should keep these qualities intact:

- Black surfaces as the default stage for every section.
- Klavika for assertive headings and Open Sans for the explanatory layer.
- Bright type that stays highly legible on dark ground.
- Large, centered statement blocks with generous breathing room.
- Sparse navigation and footer treatment that stays out of the way.
- Product imagery and atmospheric texture as the main source of variety.

## Colors

AMD's interface is intentionally restrained. The coded palette can stay extremely small because the page relies on black fields, bright type, and imagery-driven contrast rather than a broad brand swatch set. Use the dark base consistently across the header, hero, company block, and footer so the page reads as one continuous system.

| token | value | use |
|---|---|---|
| `canvas` | `#000000` | Main page background, header strip, corporate sections, and the deep footer field |

This black base is what lets the rest of the page feel crisp. It supports the AMD wordmark, the navigation labels, the outlined button in the hero, and the small utility icons without adding visual noise. Keep the page on this dark footing even when the hero image introduces warmer glow or the header includes a bright status bubble in the browser frame; those are page moments, not extra UI colors to spread across the system. The brand stays sharper when the coded palette remains sparse and the imagery carries the warmer notes.

## Typography

Klavika is the display voice on the page. It carries the big headlines, the section labels, and the short mission statements because its compact structure holds up well against dark backgrounds and busy photography. Open Sans takes over for body copy, navigation, footer links, and the smaller utility text because it stays calm and readable in narrow columns.

The page's hierarchy is based on scale, weight, and compact line height. Display text is tight and deliberate. Supporting copy opens up just enough to keep paragraphs readable in the centered company block and the footer columns. The system does not need a third family or a decorative accent face; it needs a clear split between a strong display layer and a neutral reading layer. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Klavika | 3.25rem | 700 | 0.95 | -0.02em | Main hero statements and top-level page headlines |
| `section-display` | Klavika | 2.25rem | 700 | 1 | -0.01em | Mission, vision, and section titles |
| `subhead` | Klavika | 1.25rem | 600 | 1.05 | -0.01em | Short card-style labels and compact section headers |
| `nav` | Open Sans | 0.75rem | 600 | 1.2 | 0.02em | Top navigation links and utility labels |
| `body` | Open Sans | 1rem | 400 | 1.5 | 0em | Company copy, supporting paragraphs, and general reading text |
| `body-medium` | Open Sans | 1rem | 600 | 1.5 | 0em | Button labels and emphasized short phrases |
| `legal` | Open Sans | 0.75rem | 400 | 1.4 | 0em | Footer legal copy, policy lines, and secondary link groups |

The typographic voice should feel compact and engineered. Headings can sit close together vertically, but the body copy should keep enough line space to stay comfortable in the black field. Keep the nav small and disciplined so the page title and hero image remain the focus.

## Layout

The layout is organized as a sequence of strong horizontal bands. The top band is a black navigation strip with the AMD mark at the left, text links across the middle, and small utility icons at the right.

The hero section is the page's most dramatic moment. A processor image floats over a dark atmospheric field, and the copy below it is split into two balanced columns for vision and mission. The button sits lower in the composition and remains small, rectangular, and visually quiet. The spacing around the hero is generous, which makes the central message feel deliberate instead of crowded.

The About AMD section changes the rhythm without changing the palette. A large centered title sits above a starfield-like background and a compact block of bright copy. The content stays narrow enough to read cleanly while the dark texture fills the width of the page. This section works because the background is active but not noisy; it gives depth without breaking the reading path.

The footer extends the same black foundation into a utility-rich end zone. A subscription call-to-action sits to one side, social icons run in a row, and link columns spread across the page in evenly spaced blocks. The bottom legal line is smaller and quieter, which lets the support content fall away naturally. Across all of these sections, the layout prefers long horizontal breathing room, centered statement blocks, and clean separations made by distance rather than borders.

## Visual language

AMD's visual language is industrial, technical, and restrained. The page uses a black canvas as a stage for high-contrast bright text and product imagery that feels lit rather than brightly colored. The processor render in the hero gives the site a tangible hardware focus, while the starfield backdrop in the company section adds scale and momentum. Both images support the same idea: AMD as a maker of serious computing platforms.

The page avoids decorative clutter. There are no soft pastel panels, no playful illustrations, and no dense framing devices. Instead, the system relies on a combination of centered type, dark texture, and small utility marks. The wordmark, navigation labels, and footer links are all crisp and compact, which makes the page feel disciplined. Even the outlined button in the hero is understated; it works because the surrounding field is so quiet.

The most important visual relationship is between depth and clarity. The black background creates depth, the imagery adds atmosphere, and the bright copy locks the message into place. That balance should remain intact across sections so the brand feels confident, technical, and direct.

## Components

### Global header

The header is a flat black strip with a left-aligned AMD wordmark, a row of product links, and a small set of utility icons on the right. Its job is to establish brand presence without taking attention away from the hero. Keep the navigation text compact and evenly spaced, with enough room between items that the line feels calm rather than packed. The header should stay visually light even though it sits on a black surface.

### Hero stage

The hero combines a floating processor image with two centered text columns for vision and mission. The typography is the strongest element here: short, assertive headings sit above concise supporting copy, and a single outlined call-to-action closes the block. The button should remain small and rectangular so the image keeps the lead role. Compositionally, the image belongs high in the frame, while the copy sits lower and symmetrical. The structure feels ceremonial, almost like a title card for the company.

### About AMD company block

The company block is centered and text-led. A breadcrumb and page label sit above a large heading, then a short set of paragraphs explains the company in a clean, readable column. The background texture is wide and atmospheric, but the reading area stays narrow enough to keep line length under control. This component should feel composed and formal, with the title separated clearly from the body copy and the body copy separated clearly from the surrounding field.

### Footer

The footer uses a strong utility grid: a subscription button or prompt, social icons, grouped links, and a small legal line at the bottom. The hierarchy is straightforward. Primary utility comes first, link groups come next, and legal text ends the page in a quieter tone. The footer should stay black, with link text kept understated so the page closes without a visual spike. Leave the columns open and evenly spaced; the footer works best when it feels orderly and roomy.

### Primary action

The primary action is an outlined button rather than a filled one. It uses a compact label, a simple rectangular shape, and enough contrast to stand out against the black field without introducing a new color family. The action should look deliberate and calm, not loud. In this system, the button is a cue to continue, while the hero image remains the main visual event.

## Responsive behavior

On narrower screens, the structure should collapse in a controlled order: header first, hero image next, then the vision and mission content, then the company block and footer. The system depends on readability, so the display scale should step down early enough to keep the headings from dominating the full width. The centered text blocks can become single-column layouts, but they should keep their spacing and stay aligned to the page rhythm.

The black field should continue to anchor the page on small screens. If the hero image crops more tightly, keep the main hardware shape legible and do not let text collide with it. Footer columns can stack, but their visual order should remain clear so the user can still find company, resources, and legal links quickly. The design should feel compressed, not redesigned.

## Practical implementation guidance

### Preserve

- Keep the page anchored in black from header through footer.
- Use Klavika for the strongest headlines and Open Sans for every reading task.
- Hold the hero, company block, and footer in clear chapters with generous vertical breathing room.
- Let product imagery supply atmosphere and technical credibility.
- Keep buttons, links, and icons small and disciplined so the content stays in front.

### Avoid

- Avoid adding bright brand fills or multi-color panels that break the dark field.
- Avoid soft, rounded card systems that make the page feel casual.
- Avoid heavy shadows, glossy effects, or bright outlines around every component.
- Avoid turning the footer into a dense sitemap wall; keep the columns open and readable.
- Avoid mixing extra display families into the hierarchy.

### Recommended build order

1. Establish the black canvas and the two-family type system.
2. Build the header with its compact navigation rhythm.
3. Add the hero stage, processor image, and outlined button.
4. Build the centered About AMD text block.
5. Finish with the footer columns, social row, and legal line.
6. Tune spacing and text widths so each chapter feels calm and self-contained.

### Accessibility

- Keep bright text legible against the black field at every size.
- Make the outline button and header links easy to tab through with a visible focus treatment.
- Give the processor image and starfield background descriptive alternative text when they carry meaning.
- Keep the footer links large enough to tap comfortably on smaller screens.
- Maintain readable line lengths so the centered copy does not become a single wide paragraph.

## Scope note

This guide covers the desktop AMD corporate home, About AMD page, hero stage, centered company block, and footer treatments shown in the supplied screens. It does not include mobile rearrangements, motion, loading states, alternate product pages, or other site families outside these screens.
