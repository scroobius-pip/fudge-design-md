# How are.na is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/are.na-design)

Last updated: 2026-08-10

## Captured pages

[![User profile page showing a grid of colorful image blocks against a pure black background with white navigation and minimal UI chrome](https://pin.fontofweb.com/4174?format=jpg)](https://design.withfudge.com/share/pin-4174)

[User profile page showing a grid of colorful image blocks against a pure black background with white navigation and minimal UI chrome](https://design.withfudge.com/share/pin-4174)

[![Testimonials section with white text quotes in rounded dark pill containers on a black background](https://pin.fontofweb.com/2938?format=jpg)](https://design.withfudge.com/share/pin-2938)

[Testimonials section with white text quotes in rounded dark pill containers on a black background](https://design.withfudge.com/share/pin-2938)

[![Road to self-sustainability section with progress bar showing blue gradient fill and white statistics text](https://pin.fontofweb.com/2937?format=jpg)](https://design.withfudge.com/share/pin-2937)

[Road to self-sustainability section with progress bar showing blue gradient fill and white statistics text](https://design.withfudge.com/share/pin-2937)

[![Pricing FAQs accordion with white text, chevron indicators, and expanded answer text on black background](https://pin.fontofweb.com/2936?format=jpg)](https://design.withfudge.com/share/pin-2936)

[Pricing FAQs accordion with white text, chevron indicators, and expanded answer text on black background](https://design.withfudge.com/share/pin-2936)

## Overview

Are.na is a dark-themed platform for collecting, organizing, and connecting ideas through visual blocks and channels. The interface prioritizes user-generated content by submerging its own chrome into a near-black canvas, letting colorful images and media take visual precedence. The design language is restrained and editorial: generous negative space, minimal UI decoration, and a single variable typeface that scales from small functional labels to large section headings without changing family. Navigation is sparse, typically appearing as simple text links in the upper portion of pages. The overall impression is of a creative tool that refuses to compete with the material it holds—content blocks float on darkness like items in a vitrine, while text remains crisp and highly legible through disciplined contrast. The system supports both personal profile browsing and informational pages through the same visual vocabulary of black grounds, white type, and subtle blue accents for interactive emphasis.

## Colors

The color system is built on extreme contrast: a pure black canvas against white text, with a narrow range of supporting grays and a single electric blue for action states. This restraint ensures that user content—photographs, illustrations, and video thumbnails—becomes the primary source of color in any view.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, empty states, all chrome areas |
| surface | #161616 | Elevated containers, testimonial pills, progress bar tracks |
| ink | #ffffff | Primary text, headings, navigation, icons |
| muted-ink | #a0a0a0 | Secondary text, expanded FAQ answers, metadata, captions |
| action | #4a5cff | Progress bar fill, interactive emphasis, links on hover |
| border | #333333 | Subtle dividers, pill outlines, FAQ item separators |

The canvas token is applied globally as the page background, creating the immersive dark environment that defines the platform's character. Surface raises certain elements slightly above this plane—testimonial quotes live in rounded pills with this fill, and the progress bar track uses it to create depth against the black ground. Ink serves all primary reading text at full contrast. Muted-ink steps back for supporting information without disappearing, maintaining the hierarchy through lightness rather than color temperature. Action appears as a saturated blue with slight purple undertone, used sparingly for the progress indicator and interactive states. Border provides structural separation at low contrast, keeping divisions visible without drawing attention.

## Typography

Are.na employs a single variable font family across all text roles, leveraging weight and size variation rather than family changes to create hierarchy. The typeface is Areal Variable, designed by Dinamo Typefaces GmbH. Verify licensing for this family before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Areal Variable | 3rem | 400 | 1.1 | -0.02em | Page titles, major headings |
| section-display | Areal Variable | 1.5rem | 400 | 1.2 | -0.01em | Section labels, testimonial quotes |
| body | Areal Variable | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, answers |
| label | Areal Variable | 0.75rem | 400 | 1.3 | 0.02em | Metadata, captions, small functional text |
| navigation | Areal Variable | 0.875rem | 400 | 1 | 0em | Top-level nav, links, buttons |

The type system is notably calm: no bold weights appear in the visible interface, and even headings maintain a regular weight with tight tracking for presence. Hero-display uses negative tracking to feel intentional and designed rather than default. Body text is set with generous line height for comfortable reading in longer passages like FAQ answers and mission statements. Label and navigation sizes are practical adaptations from the 4px relative unit, keeping functional text small but not fragile. The absence of italic or bold styles in the visible system suggests the variable font's weight axis may be reserved for future states or simply unused in favor of size-based hierarchy.

## Layout

The layout system is fundamentally simple: full-width black canvas with centered or left-aligned content bands, generous vertical breathing room between sections, and content constrained to readable widths for text-heavy pages.

Page gutters are set at 1.5rem on each side, creating consistent horizontal padding across viewports. Sections stack vertically with 4rem of separation, allowing each content band to feel distinct without heavy rules. Text content is constrained to approximately 65-75 characters per line for readability, while image grids and block collections expand toward the edges to feel immersive.

The profile grid visible in the reference images uses a masonry or staggered arrangement where blocks of varying aspect ratios interlock, creating visual rhythm through the content itself rather than through UI structure. This grid sits directly on the black canvas with minimal gap—approximately 0.5rem between blocks—so that the colorful thumbnails form a continuous tapestry against the dark ground.

Informational pages like About use a single-column layout with left-aligned text blocks. The FAQ section shows an accordion pattern where questions stack vertically with thin border separators, and answers expand below their triggers. The progress bar section centers its bar and statistics, creating a focal point for the sustainability narrative.

No sidebar navigation is visible; wayfinding happens through top navigation and in-page scrolling. The overall spatial philosophy is one of reduction: remove everything that is not content or essential navigation, then add back just enough structure to make the content legible and the interactions discoverable.

## Visual language

The visual language of Are.na is deliberately austere, drawing from editorial and gallery traditions rather than conventional web application patterns. The near-black canvas functions as negative space in the traditional design sense—it is not merely a background but an active compositional element that isolates and elevates content blocks.

Rounded corners appear selectively: image blocks use moderate rounding to feel contemporary without becoming playful, while testimonial pills use full rounding to create a distinct container shape that separates quotes from the surrounding darkness. The progress bar uses full rounding at its track ends, making a technical element feel approachable.

Shadows are absent from the visible system; depth is created solely through tonal separation between canvas and surface. This flatness reinforces the gallery-like quality of the interface, where objects appear to rest on a single plane rather than floating in layered space.

User content provides all color variation. The platform's design makes a bet that its users will upload visually rich material, and the interface steps back to let that material speak. When content is sparse or text-heavy, the system relies on typography and spacing to maintain interest.

The blue accent is used with surgical precision—only where interaction or progress needs emphasis. This restraint makes the color feel electric when it does appear, drawing the eye immediately to the progress bar or to a hovered link.

## Components

**Testimonial Pill**

Anatomy: A rounded container holding a single quote string. No quotation marks in the UI—the text itself carries the message.

Surface and text color: Surface background (#161616) with ink text (#ffffff). A subtle border in border color (#333333) defines the pill edge against the black canvas.

Typography: Section-display token at 1.5rem, regular weight, with the quote text centered or left-aligned depending on length.

Shape and border: Full pill rounding (9999px), creating a capsule shape. Border is 1px solid.

Spacing: Generous internal padding, approximately 1rem vertical and 4rem horizontal, giving the quote room to breathe.

Composition: Pills stack vertically with consistent gap between them, each sized to its content width rather than forced to full width. This creates a ragged right edge that feels conversational and informal.

**Progress Bar**

Anatomy: A horizontal track with a fill portion indicating completion, flanked by text statistics below.

Surface and text color: Track uses surface (#161616), fill uses action (#4a5cff). Labels and numbers use ink (#ffffff), with muted-ink (#a0a0a0) for secondary metric labels.

Typography: Section-display for the section title, body for the descriptive paragraph, label for the metric labels and values.

Shape and border: Full pill rounding on the track, creating a pill-shaped indicator. Height is approximately 1.5rem.

Spacing: The bar sits below a text block with standard section spacing. Statistics align to the left and right ends of the bar, creating a clear today-to-goal narrative.

**FAQ Accordion**

Anatomy: A stack of question rows, each with a chevron indicator and expandable answer text.

Surface and text color: Transparent background on questions, ink text. Answers use muted-ink for reduced emphasis.

Typography: Body token for questions and answers. Questions may use slightly tighter line height to feel button-like.

Shape and border: No rounding. Each item separated by a 1px border in border color (#333333). Chevron icons indicate expandability.

Spacing: Items have approximately 1rem vertical padding. Expanded answers add tight padding below the question text.

Composition: The accordion sits within a text-constrained column, left-aligned. Expanded state reveals answer without animation visible in still images.

**Image Block**

Anatomy: A rectangular container for user-uploaded media, appearing in profile grids and channel views.

Surface and text color: Content-dependent. The block itself has no chrome—media fills the container.

Typography: Optional caption or metadata may appear below in label token.

Shape and border: Moderate rounding (0.5rem) on corners. No border visible.

Spacing: Tight gap (approximately 0.5rem) between blocks in grid contexts.

Composition: Blocks arrange in masonry or staggered grid, with varying heights creating organic rhythm. The black canvas shows through gaps, making the grid feel like scattered objects on a dark surface.

## Responsive behavior

The visible images show desktop layouts exclusively. Based on these, the following responsive guidance is recommended:

The masonry grid of image blocks should reflow to fewer columns as viewport narrows, likely from four or five columns down to two and then single column on the narrowest devices. Gap between blocks should remain constant to preserve the tapestry effect.

Text-constrained sections like FAQs and mission statements should maintain their readable line length by adjusting margins rather than stretching text to full width. The 1.5rem page gutter provides a reasonable minimum padding on small screens.

Navigation, visible as sparse text links in the upper area, should collapse to a hamburger or simplified menu on narrow viewports to preserve the clean header aesthetic.

Testimonial pills, which size to their content, should remain comfortable to read by preventing excessive horizontal stretching—either through max-width constraints or by allowing them to remain narrow and centered.

The progress bar and its statistics should stack vertically on very narrow screens, with the bar remaining full-width and statistics moving below rather than beside.

## Practical implementation guidance

**Preserve**

- The absolute black canvas (#000000) as the foundation of every page; this is not merely a dark mode but the core brand expression
- Single-family typography throughout; do not introduce secondary fonts for headings or UI elements
- The extreme contrast between ink and canvas; never place dark text on dark backgrounds
- Content-forward grid layouts where user media dominates the visual field
- The restrained use of action blue; reserve it for genuine interactive emphasis and progress indication

**Avoid**

- Adding shadows or depth effects; the system achieves hierarchy through tone and spacing alone
- Rounding everything to full pills; reserve full rounding for quote containers and progress tracks
- Introducing additional accent colors; the palette is intentionally narrow
- Heavy borders or rules; use the subtle #333333 border only where structural separation is essential
- Bold typography for emphasis; the system uses size and spacing, not weight, to create hierarchy

**Recommended build order**

1. Establish the black canvas and white text foundation with Areal Variable loaded
2. Implement the text hierarchy with hero-display, section-display, body, and label tokens
3. Build the image block component with rounded corners and tight grid gaps
4. Create the testimonial pill with surface background and full rounding
5. Add the progress bar with action fill and statistics layout
6. Implement the FAQ accordion with border separators and expand behavior
7. Refine spacing tokens across all components for vertical rhythm

**Accessibility**

- Maintain the 21:1 contrast ratio between ink (#ffffff) and canvas (#000000) for all primary text
- Ensure muted-ink (#a0a0a0) is used only for non-essential text, as it may fall below WCAG AA against black
- Provide visible focus indicators for interactive elements; the current subtle borders may need enhancement for keyboard navigation
- Consider a reduced-motion preference for any masonry grid animations or accordion transitions
- Test the blue action color (#4a5cff) against both black and white backgrounds for sufficient contrast in all states

## Scope note

This guide covers the visible desktop surfaces of Are.na's profile, about, and informational pages. Mobile breakpoints, hover and focus states, loading skeletons, form validation, and channel editing interfaces are not represented in the supplied images. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid. The Areal Variable font family requires licensing verification before production use; attribution to Dinamo Typefaces GmbH is supported by the supplied source data.
