# How adasilv2.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/adasilv2.framer.website-design)

Last updated: 2026-08-04

## Captured pages

[![Industrial design grid with four rounded sketch tiles and a lime toy car](https://pin.fontofweb.com/4891?format=jpg)](https://design.withfudge.com/share/pin-4891)

[Industrial design grid with four rounded sketch tiles and a lime toy car](https://design.withfudge.com/share/pin-4891)

[![Graphic work grid mixing poster collage, yellow editorial art, and a white brand board](https://pin.fontofweb.com/4890?format=jpg)](https://design.withfudge.com/share/pin-4890)

[Graphic work grid mixing poster collage, yellow editorial art, and a white brand board](https://design.withfudge.com/share/pin-4890)

[![Resume page with avatar, bold intro line, and stacked experience entries](https://pin.fontofweb.com/4889?format=jpg)](https://design.withfudge.com/share/pin-4889)

[Resume page with avatar, bold intro line, and stacked experience entries](https://design.withfudge.com/share/pin-4889)

[![About page with centered essay, floating art, and handwritten emphasis](https://pin.fontofweb.com/4888?format=jpg)](https://design.withfudge.com/share/pin-4888)

[About page with centered essay, floating art, and handwritten emphasis](https://design.withfudge.com/share/pin-4888)

[![Home hero with a tilted portrait card, large intro text, and pill actions](https://pin.fontofweb.com/4887?format=jpg)](https://design.withfudge.com/share/pin-4887)

[Home hero with a tilted portrait card, large intro text, and pill actions](https://design.withfudge.com/share/pin-4887)

[![Testimonials strip with soft quote cards, muted copy, and centered dots](https://pin.fontofweb.com/4884?format=jpg)](https://design.withfudge.com/share/pin-4884)

[Testimonials strip with soft quote cards, muted copy, and centered dots](https://design.withfudge.com/share/pin-4884)

## Overview

This portfolio is built as a bright gallery with a personal tone. The page stays mostly white, then places image-heavy project tiles, centered essays, and resume-style information blocks into a strict but airy grid. Inter carries the main voice: large headings, short labels, and the bold links and buttons that anchor each section. Dm Sans softens the supporting copy, while Architects Daughter appears as a handwritten counterpoint for emphasis and annotation.

The result feels edited rather than decorated. Rounded cards, thin gray borders, and quiet metadata create a stable base, then the work thumbnails provide the color. The system does not depend on a broad palette or a dark page shell. Instead, it uses spacing, scale, and a few saturated thumbnail colors to keep each section distinct without breaking the clean white canvas.

## Colors

The interface is fundamentally monochrome. Black controls, near-black text, white space, and pale card surfaces do the structural work. Saturated color appears mainly inside the portfolio thumbnails and illustration moments, so the UI stays calm while the work itself supplies energy. The light surfaces are the default reading field; darker tones show up in headlines, pills, and high-contrast thumbnail content. Accent color is not a separate brand hue system here: black is the persistent action color, and the richer blues, yellows, and oranges belong to the showcased work.

| token | value | use |
|---|---|---|
| `action` | `#000000` | Solid pills, bold links, and the strongest interactive text |
| `ink` | `#000000` | Primary headings and body copy on white surfaces |
| `muted-ink` | `#5e5e5e` | Years, locations, captions, and secondary labels |
| `canvas` | `#ffffff` | Main page background and the open field around each section |
| `surface` | `#fbfbfb` | Card interiors, chip fields, and light content blocks |
| `surface-soft` | `#f5f5f5` | Pale bands, quiet panels, and soft grouping areas |
| `border` | `#cecccc` | Thin outlines, card edges, and subtle separators |
| `image-blue` | `#68d6f9` | Saturated artwork and mockup color inside thumbnail content |
| `image-yellow` | `#fdf22e` | Bright illustrative color inside project thumbnails |
| `image-warm` | `#df8369` | Warm accent color inside portfolio artwork and details |

## Typography

Inter is the structural family. It handles the site name, section headings, short metadata, and the button language with a crisp, edited feel. Dm Sans 9 Pt sits behind the longer explanatory copy and the quieter supporting lines, keeping the reading rhythm relaxed without looking soft. Architects Daughter is reserved for handwritten marks and notes, where the page needs a more personal stroke.

Inter is the only credited family in the packet, by Rasmus Andersson at Rsms. The other families are treated here as uncredited working faces, so reuse should be checked against separate licensing.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Inter | 3.5rem | 700 | 0.95 | -0.03em | Large intro statements and the strongest page headers |
| `section-display` | Inter | 2.25rem | 700 | 1 | -0.025em | Section titles above the project grids and essays |
| `card-title` | Inter | 1rem | 600 | 1.15 | -0.01em | Project names, role names, and compact card labels |
| `body` | Dm Sans 9 Pt | 0.9375rem | 400 | 1.55 | 0em | Paragraph copy, profile text, and longer descriptions |
| `body-italic` | Dm Sans 9 Pt-Italic | 0.9375rem | 400 | 1.55 | 0em | Soft quoted lines, asides, and emphasized prose |
| `handwritten-note` | Architects Daughter | 1.125rem | 400 | 1.25 | 0.01em | Underlines, side notes, and hand-drawn emphasis |
| `metadata` | Inter | 0.8125rem | 500 | 1.3 | 0.02em | Years, dates, locations, chips, and small controls |

The hierarchy depends on weight and spacing more than on multiple families. Hero text is heavy and compact. Section headers stay bold but not oversized. Supporting copy opens up with longer line height, so the page can hold dense resume and about content without feeling cramped. The handwritten family should remain occasional; it works best when it marks one phrase rather than taking over a whole block.

## Layout

The page uses a simple vertical rhythm: one section leads to the next through open white space, not through heavy dividers. Large headings sit above content blocks, then the content breaks into grids, cards, or centered text columns depending on the page. The spacing between sections is generous enough that each group feels like its own chapter.

The project pages favor even grids. Industrial design and graphic work both use rows of rounded thumbnail cards with captions beneath them. The tiles are large enough to let the artwork dominate, but the labels stay close so the viewer can read the project name without hunting. The grid is disciplined: cards line up cleanly, and the spacing between them stays consistent across rows.

The hero and resume pages shift to an editorial layout. A portrait or profile card sits beside a large intro statement, then the supporting controls or experience rows stack below. This keeps the personal material prominent while still leaving room for the work. The about page goes further by narrowing the text into a central column and letting small art objects float to the sides. That approach keeps the prose readable and avoids the flatness that a centered text block can create by itself.

Cards use a soft rounded frame rather than sharp corners. The radii are large enough to make the work feel friendly, but not so large that the layout turns playful. Shadows, when present, are light and diffuse. The system prefers the feeling of paper cards laid on a white desk rather than raised dashboard panels.

## Visual language

The design mixes three kinds of visual matter: polished portfolio artifacts, handwritten marks, and spare interface furniture. The portfolio pieces themselves vary widely — sketches, brand boards, posters, UI mockups, testimonial cards, and portrait photography — but they are all placed inside the same clean framing logic. That consistency keeps the page from feeling like a loose collection of uploads.

The linework is important. Thin outlines, small plus signs, subtle chip borders, and narrow separators give the site a lightly drafted quality. Those details keep the portfolio from becoming a full-bleed art wall. At the same time, the handwritten flourishes stop the page from feeling sterile. A scribble, underline, or note can break the grid just enough to make the page feel authored by a person rather than assembled by a template.

Color is deliberately restrained at the interface level. The thumbnails carry the vivid color; the surrounding chrome stays mostly black, white, and gray. That division gives the viewer a clear path: the UI frames the work, and the work provides the color story. The overall effect is calm, personal, and very direct.

## Components

### Header rail

- **Anatomy:** Compact wordmark at the left, a small number of pill actions at the right, and plenty of air in between.
- **Typography:** Inter with a strong weight for the brand and controls.
- **Shape:** Pills remain fully rounded; the header itself has no heavy enclosing box.
- **Composition:** Keep the rail light so the page can start immediately with the hero or the first section.
- **Visible state:** Active actions read as solid black pills; secondary actions stay pale or outlined.

### Project tile

- **Anatomy:** Rounded media frame, then a centered title and year beneath it.
- **Surface:** White cards with thin gray outlines or soft lifts.
- **Typography:** Inter for the project name, muted metadata beneath.
- **Shape:** The image block uses a large rounded mask so the artwork feels like a print mounted on a clean card.
- **Variants:** Sketch work, poster collage, brand board, and product mockup all share the same frame language.
- **Hierarchy:** The artwork is the hero; the caption is intentionally smaller and quieter.

### Hero intro card

- **Anatomy:** Portrait or profile image, a large statement, and a pair of pill actions.
- **Surface:** White canvas with very little enclosing structure.
- **Typography:** Bold Inter for the statement, smaller body copy for the supporting sentence or profile line.
- **Composition:** On wide screens, the image and text sit side by side; on narrower spaces, the image should lead and the text should follow.
- **Visible state:** One action reads as the primary black pill; the secondary action stays lighter and less dominant.

### Experience row

- **Anatomy:** Left-hand label, bold role title, muted date and location, plus an icon or marker on the far edge.
- **Typography:** Inter for the role name and metadata; Dm Sans can carry the longer description if a note follows.
- **Spacing:** Rows need enough vertical separation to feel breathable, especially when small supporting photos appear below.
- **Composition:** The row reads like a clean resume line, not a dense table.
- **Hierarchy:** Title first, then company, then time and place, then the supporting detail.

### Contact chips

- **Anatomy:** Small pill shapes for email, phone, and social links.
- **Surface:** Pale fills with thin borders and dark text.
- **Typography:** Compact Inter metadata styling.
- **Shape:** Fully rounded, with enough horizontal padding to keep the chips from looking cramped.
- **Composition:** The chips work best as a centered cluster or a tidy grouped strip.
- **Visible state:** The black-filled chip should remain the strongest call to action; the rest can stay quiet.

### Testimonial strip

- **Anatomy:** Section heading, a row of quote cards, and a centered dot cluster below.
- **Surface:** Light cards on the white field with fine borders and calm shadows.
- **Typography:** Dm Sans for the quote text, Inter for names and roles.
- **Composition:** Keep the cards even in height so the row reads as a controlled band rather than a masonry stack.
- **Hierarchy:** The quote content should dominate; names and roles should stay secondary.

### About essay

- **Anatomy:** Large centered statement, several paragraphs, and floating visual objects that flank the copy.
- **Typography:** Inter for the lead line and Dm Sans for the body, with handwritten notes used sparingly.
- **Spacing:** The text column needs generous side margins so the art objects never crowd the reading path.
- **Composition:** The page should feel editorial and personal, not like a blog post or a case-study template.
- **Visible state:** Handwritten emphasis works best on a single phrase or underline, never on every line.

## Responsive behavior

On narrower screens, keep the content order simple: heading, lead visual, supporting text, then the rest of the block. The grids should collapse before the typography becomes too small. Project tiles can stack into fewer columns, but their caption rhythm should remain intact. The about essay should keep a readable column width, even if the side objects move above or below the text. Contact chips can wrap, but the spacing between them should stay generous enough to preserve their pill shape.

## Practical implementation guidance

### Preserve

- Keep the page bright. The white canvas and near-black text are the backbone of the system.
- Preserve the rounded media frames and the light, understated borders.
- Let the portfolio thumbnails supply the color; do not color the whole UI.
- Keep the handwritten family as a small accent, not a second headline voice.
- Maintain the open vertical rhythm between sections so the page feels curated rather than crowded.

### Avoid

- Avoid heavy shadows, dense outlines, and dashboard-style chrome.
- Avoid turning every card into a different shape or color.
- Avoid replacing Inter with a decorative display face.
- Avoid compressing the captions or metadata until they compete with the thumbnails.
- Avoid adding extra accent hues to navigation, buttons, or chips when black already carries the interface.

### Recommended build order

1. Set the canvas, ink, muted text, surface, and border colors.
2. Build the Inter hierarchy for section titles, captions, and metadata.
3. Add the rounded project tile and the pill button language.
4. Recreate the hero and resume layouts with their portrait-led compositions.
5. Add the project grids, testimonial strip, and contact chips.
6. Finish the about essay layout and check the responsive collapse order.

### Accessibility

- Keep text contrast high on every white or pale surface.
- Make the solid black action pill the strongest interactive target, and keep its label clear.
- Give every portrait, sketch, and mockup a plain description that names the subject and medium.
- Preserve visible focus styles around pills, tiles, and chips.
- Keep year, date, and location text readable at a glance; do not let metadata shrink into decoration.

## Scope note

This guide covers the portfolio home, about, resume, project-grid, testimonial, and contact sections shown here. It does not define unseen mobile layouts, motion, alternate page families, or deeper templates. Measurements are practical adaptation targets.
