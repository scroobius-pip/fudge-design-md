# How wise.jobs is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/wise.jobs-design)

Last updated: 2026-08-10

## Captured pages

[![Latest jobs section with three white job cards on pale sage background, each with green arrow action buttons and a centered green pill-shaped View all button](https://pin.fontofweb.com/990?format=jpg)](https://design.withfudge.com/share/pin-990)

[Latest jobs section with three white job cards on pale sage background, each with green arrow action buttons and a centered green pill-shaped View all button](https://design.withfudge.com/share/pin-990)

[![Mission quote block with large black serif quotation marks and pull-quote text beside a dark green presentation slide showing Mission Days Intro with floating coins](https://pin.fontofweb.com/989?format=jpg)](https://design.withfudge.com/share/pin-989)

[Mission quote block with large black serif quotation marks and pull-quote text beside a dark green presentation slide showing Mission Days Intro with floating coins](https://design.withfudge.com/share/pin-989)

[![Dark forest green metrics bar with three large lime green numerals and white labels for active customers, savings, and transfer percentage](https://pin.fontofweb.com/988?format=jpg)](https://design.withfudge.com/share/pin-988)

[Dark forest green metrics bar with three large lime green numerals and white labels for active customers, savings, and transfer percentage](https://design.withfudge.com/share/pin-988)

[![Hero section with centered black tagline, green pill button, and heavy black display heading above the dark green metrics bar](https://pin.fontofweb.com/987?format=jpg)](https://design.withfudge.com/share/pin-987)

[Hero section with centered black tagline, green pill button, and heavy black display heading above the dark green metrics bar](https://design.withfudge.com/share/pin-987)

## Overview

The Wise Jobs site presents a confident, modern recruitment experience built on stark typographic contrast and a tightly controlled two-tone palette. The visual system centers on Wise Sans, a heavy custom display face that delivers punchy, all-caps headlines with tight tracking, set against the clean neutrality of Inter for body text and labels. The color story moves between warm off-white canvas backgrounds and deep forest green surfaces, with electric lime green serving as the singular accent for calls to action, metrics, and interactive highlights. Rounded corners appear everywhere—pill-shaped buttons, generously curved cards, and soft panel containers—creating a friendly, approachable tone that balances the weight of the display typography. The overall composition favors centered alignment for messaging, generous vertical breathing room between sections, and a clear hierarchy that guides candidates from mission statement to open roles without visual clutter.

## Colors

The palette is intentionally minimal, built on a near-black ink, warm off-white canvas, and a high-energy lime accent against deep forest green. Every color serves a specific functional role.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, display headings, iconography |
| canvas | #F5F5F0 | Page background, quote block surfaces |
| surface | #FFFFFF | Card backgrounds, elevated panels |
| forest | #163300 | Dark section backgrounds, metric bars, presentation slides |
| lime | #9FE870 | Primary buttons, metric numerals, focus states, hover accents |
| muted-ink | #1A1A1A | Secondary body text, subtle headings |

The light mode dominates the experience: warm off-white canvas with black text creates a paper-like reading environment. Dark sections appear as deliberate interruptions—forest green panels carrying lime metrics or presentation imagery—adding rhythm and visual weight. The lime green is reserved for interactive energy: it never appears as large flat areas except within contained metric numerals or button fills. White surfaces elevate job cards and modals above the canvas. No gradients or shadows are visible in the interface; depth comes from color blocking and rounded container shapes alone.

## Typography

Two families drive the typographic hierarchy: Wise Sans for commanding display moments and Inter for everything requiring readability at smaller sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Wise Sans | 4rem | 900 | 1.05 | -0.02em | Page headlines, mission statements |
| section-display | Wise Sans | 2.5rem | 900 | 1.1 | -0.01em | Section titles, card headers |
| body | Inter | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions |
| body-large | Inter | 1.25rem | 400 | 1.4 | 0 | Lead paragraphs, taglines |
| label | Inter | 0.875rem | 500 | 1.25 | 0.01em | Buttons, tags, metadata |
| quote-display | Inter | 2.5rem | 400 | 1.15 | -0.01em | Pull quotes, founder statements |
| metric-display | Wise Sans | 5rem | 900 | 1 | -0.03em | Large statistics, numerals |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0 | Footnotes, policy text |

Wise Sans appears exclusively in its Heavy weight, delivering maximum impact for headlines and metrics. Inter handles all body, label, and quote duties with Regular and Medium weights. The scale is built on a 4px relative unit, with every size landing on whole-number multiples: 12px (0.75rem), 14px (0.875rem), 16px (1rem), 20px (1.25rem), 40px (2.5rem), 64px (4rem), and 80px (5rem). Verify licensing for these families before production use. Wise Sans is designed by Mario Feliciano of Feliciano Type. Inter is designed by Rasmus Andersson.

## Layout

The layout follows a centered, single-column rhythm with occasional asymmetric interruptions. Maximum content width appears constrained to a comfortable reading measure, with generous horizontal padding that scales with viewport. Sections stack vertically with substantial whitespace—typically 6rem between major zones—creating a scroll experience that lets each message land before the next appears.

The hero area centers its tagline and call-to-action button, with the heavy display heading sitting directly below at full width. The metrics bar breaks this centered pattern slightly, pulling to near-full width with internal three-column distribution of statistics. Job cards appear in a horizontal row of three equal-width containers, each with internal vertical stacking of title, location metadata, and a bottom-right action circle.

Navigation and utility elements sit at the extremes: a search-for-jobs button floats rightward in the hero, while pagination arrows anchor the bottom right of the jobs section. The quote block uses a split composition—text left, imagery right—within a single rounded panel, suggesting a flexible grid system that can alternate layouts while maintaining consistent corner radii and padding.

## Visual language

The visual character is bold yet friendly, achieved through the tension between heavy geometric display type and soft, organic rounded shapes. Every interactive element carries rounded corners: buttons are full pills, cards have 1.25rem radii, and panels curve at 1.5rem. This consistency makes the interface feel approachable despite the authoritative weight of the headlines.

Iconography appears as simple line drawings—globes for locations, people silhouettes for departments, stars for favorites—rendered in black or dark tones within light circular containers. The metric bar demonstrates the system's most dramatic color inversion: deep forest green ground with oversized lime numerals, creating a poster-like impact that breaks the otherwise restrained palette.

Photography and presentation imagery carries the same green tint, with slides and stage photos bathed in forest tones, ensuring brand cohesion even in third-party content. No drop shadows, borders, or elevation effects are used; separation comes purely from color contrast and spacing.

## Components

### Primary action button

- **Anatomy**: Text label centered within a full-pill container
- **Surface**: Lime green background (#9FE870) with black text
- **Typography**: Label token, Inter Medium at 0.875rem
- **Shape**: Border radius 9999px, padding 0.75rem vertical and 2rem horizontal
- **Spacing**: Appears centered in hero, or inline with card rows
- **Variants**: "More about the mission" and "View all" share identical styling

### Job card

- **Anatomy**: White rounded rectangle containing job title, location tag with globe icon, department tag with people icon, favorite star icon top-right, and lime circular arrow button bottom-right
- **Surface**: White (#FFFFFF) on canvas background
- **Typography**: Title in section-display token (Wise Sans Heavy, 2.5rem), metadata in body token (Inter Regular, 1rem)
- **Shape**: 1.25rem border radius, generous internal padding of 2rem
- **Spacing**: Cards arranged in horizontal row with 1.5rem gap
- **Composition**: Title at top, metadata stacked below with 1rem vertical spacing, action button anchored to bottom-right corner

### Metric bar

- **Anatomy**: Full-width dark panel containing three statistic columns
- **Surface**: Forest green (#163300) background
- **Typography**: Numerals in metric-display token (Wise Sans Heavy, 5rem, lime color), labels in body-large token (Inter Regular, 1.25rem, white)
- **Shape**: 1.5rem border radius, internal padding 3rem top/bottom and 2.5rem sides
- **Composition**: Three equal columns, numerals top-aligned with labels directly beneath

### Quote block

- **Anatomy**: Split panel with text left and image right, or full-width text with inline image
- **Surface**: Canvas (#F5F5F0) background
- **Typography**: Large quotation marks in black, quote text in quote-display token (Inter, 2.5rem), attribution in body token with name and title stacked
- **Shape**: 1.5rem border radius
- **Composition**: Text occupies roughly 50% width, image fills remainder with matching rounded corners

### Circular action button

- **Anatomy**: Icon-only circle with arrow
- **Surface**: Lime green (#9FE870) with black arrow icon
- **Shape**: Perfect circle, approximately 3rem diameter
- **Use**: Card-level navigation, pagination companion

## Responsive behavior

The system should maintain its centered, generous spacing at all widths. The three-column job card row should collapse to a single column on narrow viewports, with cards stacking vertically and maintaining full width. The metric bar's three statistics should reflow to a single column with increased vertical spacing between items. The quote block's split composition should stack image above text on narrow screens, preserving the rounded panel container. The hero display heading should scale down proportionally, likely to the section-display size (2.5rem) on mobile to prevent overflow. Pill buttons should remain full-width on mobile when appearing alone, or maintain their intrinsic width when inline with other elements.

## Practical implementation guidance

### Preserve
- The stark contrast between Wise Sans Heavy headlines and Inter body text
- The warm off-white canvas as the dominant background
- Full pill shapes for all primary actions
- Consistent 1.25rem to 1.5rem corner radii across cards and panels
- The lime green as a single, disciplined accent color
- Centered alignment for primary messaging sections

### Avoid
- Introducing additional accent colors beyond the lime and forest pairing
- Using Wise Sans at small sizes or for body text
- Sharp corners on interactive elements
- Drop shadows or borders as primary separation methods
- Dark backgrounds outside of contained panels and metric bars

### Recommended build order
1. Establish the 4px relative unit and type scale
2. Implement Inter for body, label, and quote tokens
3. Add Wise Sans Heavy for display and metric tokens
4. Build the pill button component with lime surface
5. Create the job card with white surface and circular action
6. Construct the metric bar with forest background and lime numerals
7. Assemble page sections with 6rem vertical spacing

### Accessibility
- Ensure lime green buttons maintain 3:1 contrast ratio against white or canvas backgrounds; the lime-on-forest pairing in metrics is decorative and should not carry interactive meaning alone
- Provide focus indicators that extend beyond color change, such as outline offsets on pill buttons
- Scale display type responsively to prevent horizontal overflow at 200% zoom
- Use semantic heading hierarchy despite the visual similarity between hero and section display sizes

## Scope note

This guide covers the homepage and mission page surfaces visible in the supplied images, including hero messaging, job listings, metrics, and quote components. Navigation, footer, form states, mobile menu behavior, and blog article layouts are not represented. Measurements are practical adaptation targets derived from visible proportions.
