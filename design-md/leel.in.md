# How leel.in is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/leel.in-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with deep forest green background, contact details in light sage, and Gujarati script brand mark](https://pin.fontofweb.com/2694?format=jpg)](https://design.withfudge.com/share/pin-2694)

[Footer section with deep forest green background, contact details in light sage, and Gujarati script brand mark](https://design.withfudge.com/share/pin-2694)

[![Split-layout contact page with light cream background, large serif heading, and muted sage form fields](https://pin.fontofweb.com/2693?format=jpg)](https://design.withfudge.com/share/pin-2693)

[Split-layout contact page with light cream background, large serif heading, and muted sage form fields](https://design.withfudge.com/share/pin-2693)

[![Collection landing with full-bleed textile photography, thin serif headlines, and minimal navigation](https://pin.fontofweb.com/2692?format=jpg)](https://design.withfudge.com/share/pin-2692)

[Collection landing with full-bleed textile photography, thin serif headlines, and minimal navigation](https://design.withfudge.com/share/pin-2692)

[![About page hero with architectural textile photography, editorial typography, and sparse navigation](https://pin.fontofweb.com/2691?format=jpg)](https://design.withfudge.com/share/pin-2691)

[About page hero with architectural textile photography, editorial typography, and sparse navigation](https://design.withfudge.com/share/pin-2691)

## Overview

Leel is a sustainable textile brand whose digital presence mirrors the quiet confidence of its handcrafted products. The design system builds on a stark contrast between warm, airy surfaces and moments of deep, grounding color. Editorial typography—thin, high-contrast serifs for display and a readable transitional serif for body text—establishes a gallery-like atmosphere. The layout favors asymmetrical splits, generous negative space, and full-bleed photography that lets the textiles speak without visual competition. Every element feels intentional and unhurried, from the sparse navigation to the measured pacing of text blocks. The system supports a small set of functional components: navigation, hero sections with paired imagery and typography, contact forms, and a substantial footer. There are no decorative flourishes beyond the essential; the restraint itself becomes the brand signature.

## Colors

The palette draws from natural materials—undyed cotton, aged indigo, dried botanicals, and forest shadow. Light and dark modes are not explicit themes but rather spatial rhythms: cream surfaces dominate the browsing experience, while deep forest green anchors the footer and may appear in select dense sections.

| token | value | use |
|---|---|---|
| ink | #1a1a1a | Primary text, headings, navigation |
| muted-ink | #4a4a4a | Secondary body text, captions, placeholders |
| canvas | #f5f3ef | Primary page background, form sections |
| surface | #e8e6e1 | Input field backgrounds, subtle containers |
| forest | #2d3b2d | Footer background, dark sections, brand mark background |
| sage | #c5c9b8 | Footer text, button backgrounds, secondary accents |
| action | #7a8a6e | Active navigation states, interactive emphasis |

The interface relies on a near-monochrome foundation. Ink and muted-ink provide text hierarchy without introducing additional hues. Canvas and surface are warm neutrals that avoid the sterility of pure white, letting product photography feel grounded. Forest and sage operate as a paired dark-light accent system: forest absorbs light and creates visual weight at the page edge, while sage provides readable contrast against that depth and appears in interactive surfaces. The action color is a desaturated olive-green that bridges the two, suitable for hover states or subtle emphasis without competing with the photography. No gradients or shadows are present in the visible interface; depth is achieved through color blocking and spatial arrangement alone.

## Typography

Three families define the typographic voice: Ivy Presto Headline for display, Calluna for body reading, and Halyard Display for functional labels and navigation. The display face is extremely thin, creating an elegant, almost fragile presence that contrasts with the substantial textures of the photographed textiles. Body text is set in a warm, readable serif that maintains comfort across longer passages. The sans-serif serves quietly in small sizes for wayfinding and form labels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Ivy Presto Headline | 3rem | 100 | 1.1 | -0.01em | Page headlines, collection titles |
| section-display | Ivy Presto Headline | 2.25rem | 100 | 1.15 | -0.01em | Subsection headings, about statements |
| body | Calluna | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, policies |
| body-large | Calluna | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, introductory text |
| label | Halyard Display | 0.75rem | 400 | 1.4 | 0.02em | Form labels, metadata, captions |
| navigation | Halyard Display | 0.875rem | 400 | 1 | 0.01em | Primary navigation, links |

Ivy Presto Headline is designed by Jan Maack of The Ivy Foundry. Verify licensing for these families before production use.

## Layout

The page architecture follows a split-panel convention that pairs imagery with text in deliberate asymmetry. On collection and about pages, the viewport divides roughly into a large photography panel on the left and a text panel on the right, with the text positioned in the lower portion rather than centered. This creates vertical tension and encourages scrolling. The contact page inverts the logic: a text-heavy left panel carries the narrative, while the right panel contains a functional form.

Navigation sits at the top edge with extreme minimalism. The brand mark appears left, a Gujarati script equivalent appears center, and four text links—About, Collections, Contact, Info—distribute to the right with generous spacing. No background bar, no border, no shadow separates navigation from content; a single hairline rule may appear below on some pages.

The footer is a dense, multi-column information block that occupies substantial vertical space. It is set against the forest background and organized into labeled sections: contact methods, shipping policy, care instructions, and returns. Each section carries a small heading in sage, followed by body text in a slightly lighter sage tone. A horizontal rule separates the footer content from a final brand mark strip that spans the full width.

Spacing follows a 0.25rem base unit. Section padding is generous, typically 6rem or more, preserving the uncluttered atmosphere. Content gaps within sections measure 2rem, sufficient to separate related blocks without fragmenting the reading experience.

## Visual language

Photography dominates the visual field. Images are full-bleed, unframed, and often show textiles in use or in architectural settings—draped, hung, or handled. The color temperature of photography tends warm and earthy, harmonizing with the cream and sage interface tones. No rounded corners, borders, or overlays appear on images; they sit flush against their containers.

The brand mark exists in two forms: a Latin "leel" in a distinctive serif with an extended crossbar on the lowercase l, and a Gujarati "લીલ" that carries similar proportions and weight. Both appear in sage against forest backgrounds, or in ink against canvas. The mark is not accompanied by a logotype or tagline; it stands alone.

Interactive elements are understated. Buttons are rectangular with slight rounding, filled with sage, and labeled in small sans-serif text. Form fields share the same slight rounding but sit as flat blocks of surface color without visible borders until interaction. There are no icons in the primary interface beyond minimal carousel arrows that appear as simple chevrons on image panels.

The overall impression is of a printed lookbook translated to screen—measured, material, and resistant to digital noise.

## Components

### Navigation

- Anatomy: Brand mark left, Gujarati mark center, four text links right
- Surface: Transparent background, no border; hairline rule optional below
- Typography: `{typography.navigation}` in ink
- Spacing: Links distributed with ample horizontal space, approximately 4rem between items
- Composition: Fixed or sticky top edge, full width, height approximately 3rem

### Hero split-panel

- Anatomy: Full-viewport container divided into two panels; left panel carries photography, right panel carries text
- Surface: Left panel is image-only; right panel uses `{colors.canvas}`
- Typography: Headline in `{typography.hero-display}`, body in `{typography.body-large}` or `{typography.body}`
- Spacing: Text panel padded generously, text aligned to lower portion with substantial top margin
- Composition: Asymmetrical balance; image dominates by area, text dominates by negative space

### Contact form

- Anatomy: Label and input pairs stacked vertically; country-code selector on phone field; dropdown for enquiry nature; textarea for requirements; submit button
- Surface: Fields use `{colors.surface}` with `{rounded.field}`; button uses `{colors.sage}` with `{rounded.button}`
- Typography: Labels in `{typography.label}`, inputs in `{typography.body}`, button in `{typography.label}`
- Spacing: 1rem vertical gap between field groups
- Composition: Contained within right panel of split layout; left panel carries explanatory text

### Footer

- Anatomy: Four-column grid of information sections above full-width brand mark strip
- Surface: `{colors.forest}` background, `{colors.sage}` text
- Typography: Section headings in `{typography.label}` uppercase or small caps, body in `{typography.body}` at slightly reduced opacity
- Spacing: Columns evenly distributed; horizontal rule separates content from brand mark
- Composition: Dense but orderly; contact details leftmost, policies distributed rightward

## Responsive behavior

The split-panel layout should stack vertically on narrower viewports, with the image panel preceding the text panel to maintain visual priority. Navigation links may collapse to a minimal menu or hamburger pattern; the current sparse four-link structure suggests a simple horizontal scroll or condensed arrangement rather than a full overlay. Footer columns should reflow to two-column and then single-column grids, preserving the left-to-right information priority. Typography scales down proportionally: hero-display should reduce to 2rem on tablet and 1.75rem on mobile, maintaining the thin weight and tight leading that define the brand voice. Form fields should expand to full width within their container when the split layout collapses.

## Practical implementation guidance

### Preserve
- The extreme thinness of Ivy Presto Headline; do not substitute with a heavier weight
- The warm, slightly yellowed cast of canvas and surface neutrals
- The flush, borderless presentation of photography
- The two-script brand mark pairing
- Generous section padding and the lower-weighted text placement in split panels

### Avoid
- Pure white backgrounds; they will feel clinical against the photography
- Rounded corners larger than 0.25rem; the aesthetic is crisp and print-like
- Drop shadows on any element; depth comes from color and space only
- Decorative icons or illustration; the system is strictly typographic and photographic
- Centered text in editorial panels; the asymmetrical lower placement is intentional

### Recommended build order
1. Establish the color tokens and apply canvas and forest as the two primary surfaces
2. Implement the typography scale with exact font loading for all three families
3. Build the navigation with transparent background and hairline rule
4. Create the split-panel layout structure with flexible image and text panels
5. Add the contact form with surface-colored fields and sage button
6. Construct the multi-column footer with forest background and sage text hierarchy
7. Test responsive stacking and type scaling across viewport widths

### Accessibility
- Ensure sufficient contrast for the thin display type; the 100 weight of Ivy Presto Headline may need slight darkening or size increase for WCAG compliance
- Form fields should have visible focus indicators beyond color change alone
- The forest-on-sage and sage-on-forest pairings should be verified for contrast ratios, particularly in footer body text
- Navigation links should maintain clear hover and focus states given their minimal presentation

## Scope note

This guide covers the homepage, about, collection landing, and contact surfaces visible in the supplied images. Product detail pages, checkout flows, mobile navigation patterns, and motion behavior are not represented. Measurements are practical adaptation targets derived from the visible interface.
