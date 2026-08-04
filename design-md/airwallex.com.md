# How airwallex.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/airwallex.com-design)

Last updated: 2026-08-04

## Captured pages

[![Split login page with centered form and right-side feature list](https://pin.fontofweb.com/5206?format=jpg)](https://design.withfudge.com/share/pin-5206)

[Split login page with centered form and right-side feature list](https://design.withfudge.com/share/pin-5206)

[![White editorial hero with report cover art and a left text block](https://pin.fontofweb.com/5204?format=jpg)](https://design.withfudge.com/share/pin-5204)

[White editorial hero with report cover art and a left text block](https://design.withfudge.com/share/pin-5204)

[![Payment-method matrix with a left region rail and six card tiles](https://pin.fontofweb.com/5203?format=jpg)](https://design.withfudge.com/share/pin-5203)

[Payment-method matrix with a left region rail and six card tiles](https://design.withfudge.com/share/pin-5203)

[![Dark developer band with stacked code panels and bright magenta cues](https://pin.fontofweb.com/5202?format=jpg)](https://design.withfudge.com/share/pin-5202)

[Dark developer band with stacked code panels and bright magenta cues](https://design.withfudge.com/share/pin-5202)

[![Centered FAQ list with one expanded answer and violet chevrons](https://pin.fontofweb.com/5205?format=jpg)](https://design.withfudge.com/share/pin-5205)

[Centered FAQ list with one expanded answer and violet chevrons](https://design.withfudge.com/share/pin-5205)

[![Wide footer directory with many columns, app badges, and legal strip](https://pin.fontofweb.com/5201?format=jpg)](https://design.withfudge.com/share/pin-5201)

[Wide footer directory with many columns, app badges, and legal strip](https://design.withfudge.com/share/pin-5201)

## Overview

Airwallex reads as a clean enterprise-finance system with very little ornamental noise. White and pale gray surfaces carry most of the page, so the content feels open even when the layout is dense with forms, cards, and link lists. A single violet action color ties together the login button, FAQ chevrons, links, and primary calls to action. That consistency matters because the page moves across several moods: a white authentication surface, a white editorial resource hero, a light product grid, a dark developer band, a centered FAQ, and a restrained footer.

The visual identity depends on contrast more than decoration. Black and near-black text set the hierarchy on white surfaces; deep charcoal reverses the relationship for the developer section and social-proof areas. The orange mark and the small coral and lilac accents appear as brief punctuation, not as competing brand colors. The result is calm, international, and technical at the same time. The design feels built for long-form product explanation, not for promotional spectacle.

## Colors

The palette is almost monochrome, but it is not flat. White and cool gray handle the control surfaces and section backgrounds, while dark charcoal anchors the more technical storytelling bands. Violet carries interaction across both light and dark contexts. Orange and coral belong to the brand mark and cover art. Lilac appears as a quiet supporting tint in the richer brand scenes.

| token | hex | use |
|---|---|---|
| `action` | `#6533f6` | Primary buttons, links, active tabs, and FAQ chevrons |
| `ink` | `#000000` | Headings, labels, and body copy on light surfaces |
| `muted-ink` | `#707273` | Supporting text, helper lines, and secondary explanations |
| `canvas` | `#fdfdfd` | Main page background and field fills |
| `surface` | `#f6f7f9` | Pale feature areas, side rails, and quiet panels |
| `border` | `#bebfc3` | Thin rules, card outlines, and form strokes |
| `surface-dark` | `#1c1f24` | Developer story bands and other reversed sections |
| `accent-orange` | `#f06c46` | Logo mark and warm product-art accents |
| `accent-coral` | `#f75f58` | Bright product-art highlight and small warm emphasis |
| `accent-lilac` | `#d0c6f1` | Soft supporting tint for brand-adjacent details |

Light and dark modes do not create separate color systems; they reuse the same roles with inverted text contrast. Photographic and editorial sections stay largely white and pale, with dark text over calm surfaces. Technical or high-contrast sections switch to charcoal with white text and keep the violet action color intact. That makes the page read as one system even when the backgrounds change sharply. The accent colors stay small so the interface never loses its corporate restraint.

## Typography

The packet supplies three linked webfont names for the same typographic voice. Use the regular, medium, and bold cuts as a stack rather than inventing a separate family label. The page depends on weight and spacing more than on any ornamental detail. Bold carries the main statements. Medium handles controls and utility lines. Regular keeps paragraphs calm and readable.

All three family names are credited to Laurenz Brunner and Lineto. Keep that attribution with the exact family name it belongs to.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | By Laurenz Brunner-7897194075784771081 | 3.5rem | 700 | 1 | -0.03em | Login headline and top-level marketing statements |
| `section-display` | By Laurenz Brunner-7897194075784771081 | 2.75rem | 700 | 1.02 | -0.025em | FAQ heading, resources heading, and dark-band statements |
| `card-heading` | By Laurenz Brunner-10758090763911933308 | 1.375rem | 700 | 1.15 | -0.01em | Payment-card titles and bold section labels |
| `body` | By Laurenz Brunner-6762916507748324616 | 1rem | 400 | 1.5 | 0em | Explanatory paragraphs and support text |
| `body-medium` | By Laurenz Brunner-10758090763911933308 | 1rem | 500 | 1.5 | 0em | Buttons, tabs, and emphasized helper copy |
| `label` | By Laurenz Brunner-10758090763911933308 | 0.875rem | 500 | 1.35 | 0.01em | Form labels, utility text, and metadata lines |
| `legal-copy` | By Laurenz Brunner-6762916507748324616 | 0.75rem | 400 | 1.4 | 0em | Footer legal text and the smallest supporting lines |

Use the bold cuts for the headline stack and the card titles. Use medium weight for any control that needs to feel active but not decorative. Keep body copy regular and keep line lengths generous; the page relies on space as much as on type size. Avoid mixing in secondary families or monospaced substitutes unless code is the content itself. The strongest effect comes from tight, confident headings paired with roomy supporting text.

## Layout

The page is organized as a sequence of wide, calm chapters. The login screen uses a split composition: a narrow form column on the left and a lighter explanatory rail on the right. That structure appears again in the resource hero, where the copy stays left-aligned and the report mockup occupies the right side. The payment-methods section expands into a more editorial grid, but it still keeps a left rail for category switching and a large content field for the card matrix. The developer section inverts the mood, using a dark band with copy on one side and stacked code-like panels on the other. The FAQ and footer are simpler, centered systems that let the content breathe.

White space is not leftover space. It is the primary separator between sections. Instead of heavy dividers, the page changes background value, spacing, and typography size to signal a new chapter. Cards stay relatively flat and light, so the large gaps between them matter. The eye moves by column alignment and section rhythm, not by ornamental frames. That is why the layout feels confident even when it presents forms, product grids, and dense link directories in a single page.

The left rails are narrow and functional. They guide category choice, while the wider right-hand panels carry the real content. The login form, by contrast, is centered and compact so the eye goes straight to the input stack and the primary action. This mix of lateral navigation and centered interaction gives the page a steady editorial pace without making it feel rigid.

## Visual language

Airwallex uses a restrained visual language: crisp fields, thin borders, rounded but not soft corners, and very few shadows. The most visible flourish is the violet action color, which appears in buttons, active tabs, chevrons, and emphasis text. The second visual layer comes from product art and cover-style imagery. Those images are often high-contrast and often layered, especially in the resource hero where a dark report cover overlaps lighter sheets behind it.

The dark developer band is the strongest mood shift. It uses white type, charcoal surfaces, and code-panel imagery to signal technical depth without adding clutter. The payment cards, by contrast, stay bright and neutral. Each card is mostly white space with a brand logo, a short description, and a tiny tag. That contrast between technical density and product calm is one of the page’s defining traits. The system never lets color become decoration for its own sake; color always supports status, emphasis, or brand identity.

Rounded corners are present, but they are modest. They soften fields, cards, and panels without making the page feel playful. Shadows are minimal. Borders are light. The design trusts alignment, spacing, and type to do the heavy lifting. The overall effect is measured, global, and efficient rather than luxurious.

## Components

### Authentication split

The login surface is the most clearly structured component. It pairs a centered form with a product-summary rail. The form area stacks the logo, the main headline, tab-like choices, two input fields, a primary violet button, and a secondary outline-style button. The right rail lists product areas with small icons and short explanatory lines. The component works because the form and the product summary are distinct but balanced. Keep the form compact, keep the helper links quiet, and let the violet action button carry the strongest visual weight. The structure should feel immediate and practical, not ceremonial.

### FAQ accordion

The FAQ component is a centered list with a large heading above it and thin horizontal separators between rows. Questions read as bold one-line prompts. The expanded row opens into a paragraph of body copy and keeps the layout clean rather than boxed. The purple chevron is the only strong directional cue. Keep the row treatment simple: one divider, one question, one answer, then the next row. Do not wrap each item in a separate card; the section gets its clarity from the open white field. The unboxed layout gives the section room to breathe.

### Payment-method grid

The payment-method section combines a narrow category rail with a large card matrix. The rail is text-first and feels like a light navigation column. The main grid uses evenly spaced white cards with brand marks, product names, a short description, and a tiny category chip. The cards are orderly and neutral, which lets the recognizable payment logos do the work. The component should stay visually quiet so the breadth of available methods feels substantial rather than chaotic. Use the border color sparingly and keep the card padding generous. The tiles should look like a catalog, not like ads.

### Developer stage

The developer section is the most dramatic component in the system. It uses a dark surface, a bold white headline, short supporting lines, a violet button, and code-style imagery on the right. The key is the contrast between editorial copy and technical panels. The right-hand imagery should feel stacked and deliberate, not random. Keep the dark surface flat and avoid extra borders or glows. The section needs just enough violet to connect back to the rest of the page while still feeling distinct. The dark field is the only place where the page becomes theatrical, and it still stays disciplined.

### Footer

The footer is a wide directory rather than a decorative end cap. It holds multiple link columns, app badges, regional utility controls, and a small legal strip. Text sits low in contrast but remains readable because the layout is clean and the column structure is predictable. The footer should feel calm, comprehensive, and last in the reading order. Keep its type smaller than the rest of the page, but do not compress the columns too tightly; the value is in scanability. The footer works best when it reads as a map of the product, not as a marketing block.

## Responsive behavior

When the layout narrows, the split forms and editorial heroes should stack in reading order, with the form or message first and the supporting rail second. The payment-method grid should collapse from three columns to two, then to one, while the category rail turns into a compact horizontal control or a short stacked row. The developer band should keep its contrast and reduce the width of the code panels before it reduces the type too aggressively. FAQ rows should keep full-width tap targets and enough room around the chevrons.

On smaller screens, maintain the same visual logic: white control surfaces first, then dark technical sections, then quiet footers. Do not introduce a second accent color or a new card style to make the mobile version feel different. The system is strongest when it preserves the same hierarchy at every width and simply reallocates space. Keep the spacing generous enough that each section still feels like its own chapter.

## Practical implementation guidance

### Preserve

- Keep violet as the single recurring action color.
- Preserve the high-contrast relationship between white surfaces and dark sections.
- Keep headings bold, compact, and visually dominant.
- Preserve thin borders and flat cards instead of layering in heavy shadows.
- Keep orange, coral, and lilac as small accents, not large background fields.

### Avoid

- Avoid adding extra accent colors for separate sections.
- Avoid dense border systems around every block.
- Avoid shrinking the type scale so much that the page loses its editorial weight.
- Avoid rounded corners that are so large they make the page feel informal.
- Avoid turning the footer or FAQ into boxed cards; the open layout is part of the language.

### Recommended build order

1. Establish the type scale and the color roles.
2. Build the login split layout and field treatments.
3. Build the FAQ accordion with the same border rhythm.
4. Build the payment-method grid and the category rail.
5. Add the dark developer band and its paired imagery.
6. Finish with the footer directory and utility strip.

### Accessibility

- Keep text contrast strong on both white and dark surfaces.
- Make every purple interactive element legible without relying on color alone.
- Give the FAQ rows clear focus semantics and a large tap area.
- Keep logos and product artwork paired with text labels so the meaning survives without the image.
- Make helper text and legal text small, but not so small that the footer becomes hard to scan.

## Scope note

This guide covers the desktop login surface, resource hero, payment-method grid, developer band, FAQ, and footer. It does not cover the create-account strip or the testimonial band. Measurements are practical adaptation targets.
