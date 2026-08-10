# How izipizi.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/izipizi.com-design)

Last updated: 2026-08-10

## Captured pages

[![Product carousel showing reading glasses, sunglasses, and accessories with color swatches and category labels against light gray cards on white background](https://pin.fontofweb.com/5357?format=jpg)](https://design.withfudge.com/share/pin-5357)

[Product carousel showing reading glasses, sunglasses, and accessories with color swatches and category labels against light gray cards on white background](https://design.withfudge.com/share/pin-5357)

[![Newsletter signup section with oversized condensed black display type, email input field, and pill-shaped subscribe button on stark white background](https://pin.fontofweb.com/5356?format=jpg)](https://design.withfudge.com/share/pin-5356)

[Newsletter signup section with oversized condensed black display type, email input field, and pill-shaped subscribe button on stark white background](https://design.withfudge.com/share/pin-5356)

[![Modal overlay with split composition: photographic left panel with glasses icon and JOIN THE IZIPIZI FAMILY text, white right panel with newsletter form and black subscribe button](https://pin.fontofweb.com/5355?format=jpg)](https://design.withfudge.com/share/pin-5355)

[Modal overlay with split composition: photographic left panel with glasses icon and JOIN THE IZIPIZI FAMILY text, white right panel with newsletter form and black subscribe button](https://design.withfudge.com/share/pin-5355)

## Overview

IZIPIZI's digital presence communicates contemporary eyewear fashion through a disciplined interplay of extreme typographic contrast and restrained surface design. The system relies on a single condensed sans-serif display family at massive scale to create immediate visual impact, while a neutral grotesque handles all functional text with quiet efficiency. Product photography dominates the visual field, presented against muted gray surfaces that let colorful frames and lenses remain the focal point. The overall impression is editorial and confident—luxury without ornament, clarity without coldness. White space is used generously, particularly around typographic elements, creating breathing room that elevates the product imagery. The design avoids decorative gradients, shadows, or complex containers in favor of flat planes and precise alignment. This restraint allows the brand's playful product colors and bold typographic voice to carry the full expressive load.

## Colors

The palette is intentionally minimal, built on a near-monochrome foundation with a single warm accent drawn from photographic content. Black serves as the primary action and text color, creating maximum contrast against white and light gray surfaces. The system avoids pure functional grays in favor of warmer, softer tones that complement skin tones and product photography.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, display type, buttons, icons, underlines |
| canvas | #FFFFFF | Page background, modal panels, input backgrounds |
| surface | #F5F5F5 | Product card backgrounds, secondary containers |
| border | #E5E5E5 | Input field borders, dividers, subtle separators |
| muted | #666666 | Secondary text, captions, legal copy, placeholders |
| accent-warm | #C4A574 | Promotional banner backgrounds, warm photographic tones |

The light mode is absolute: white dominates, with gray surfaces appearing only as product staging areas. No dark mode is visible in the supplied material. The warm accent appears primarily in promotional contexts and photographic backgrounds, never competing with product colors. Product photography introduces vibrant oranges, sage greens, navy blues, and tortoiseshell patterns—these are treated as content colors rather than system colors, allowed to pop against the neutral ground. The black button with white text is the sole interactive accent, creating a clear hierarchy between browsing and conversion actions.

## Typography

Two type families divide the labor: Obviously Narrow for display and Neue Haas Unica W 1 G for everything else. The narrow condensed display face is used at extreme scale with tight leading, creating a poster-like quality that feels contemporary and fashion-forward. The grotesque body face provides neutral readability without competing for attention.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Obviously Narw Blck | 6rem | 800 | 0.9 | -0.02em | Section headlines, newsletter titles, major statements |
| section-display | Obviously Narw Bold | 2rem | 700 | 1.1 | -0.01em | Product names, category headers, modal headlines |
| body | Neue Haas Unica W 1 G | 1rem | 400 | 1.5 | 0em | Descriptions, form labels, legal text |
| label | Neue Haas Unica W 1 G | 0.75rem | 400 | 1.2 | 0.05em | Category tags, prices, small metadata |
| navigation | Neue Haas Unica W 1 G | 0.875rem | 400 | 1.4 | 0em | Menu items, breadcrumbs, utility links |
| legal-copy | Neue Haas Unica W 1 G | 0.75rem | 400 | 1.4 | 0em | Disclaimer text, terms of service, fine print |

The display hierarchy uses Black and Bold weights of the Obviously Narrow family. The extreme condensed proportions allow multi-word headlines to occupy horizontal space dramatically without excessive vertical consumption. Body text remains modest in scale, creating a clear size contrast that guides the eye from headline to product to details.

The supplied font inventory includes additional families not visible in the interface: Obviously Narw Semi, Izimagiconfont, Montserrat, and Baskerville MT Std. Obviously Narw Semi offers an intermediate weight between Bold and Black that may serve secondary headlines or responsive size adjustments. Izimagiconfont is a symbol font for interface icons. Montserrat and Baskerville MT Std do not appear in the visible interface. Verify licensing for these families before production use. Neue Haas Unica W 1 G is designed by Toshi Omagari and available from Monotype Imaging Inc. Montserrat is designed by Julieta Ulanovsky. No attribution is supported for the Obviously Narrow, Izimagiconfont, or Baskerville families based on the supplied records.

## Layout

The layout follows a centered, contained model with generous margins. Content max-width appears to sit around 1200px, with product grids breaking into equal columns. The product carousel in the visible material shows five items across, each occupying roughly 20% of the container width with consistent internal gutters. Cards are flush to their image boundaries with no visible border radius, creating a clean rectilinear rhythm.

Vertical spacing follows a section-based rhythm: major content blocks receive substantial top and bottom padding, while internal component spacing remains tight. The newsletter section demonstrates extreme vertical generosity—the headline floats in isolated space above the compact form, creating a magazine-spread quality.

The modal overlay uses a split-panel composition: photography occupies roughly half the width on the left, with the form panel on the right. This 50/50 division creates visual balance while keeping the conversion action prominent. A close control sits in the upper right corner, outside the content flow.

Grid alignment is strict. Product cards share identical heights with bottom-aligned metadata. Color swatches cluster in the lower portion of product images, small circles in a horizontal row. Prices and product names align to a baseline at the card bottom. The overall structure feels designed for browsing—scannable, predictable, with clear spatial relationships between items.

## Visual language

The visual language balances editorial boldness with retail functionality. Photography is treated as object-focused and clean: products float against neutral backgrounds with soft shadows, never crowded by props or environments. The "Winter's Essentials" section shows this clearly—each frame is isolated, centered, given room to breathe.

Typography is the primary brand expression. The condensed display face creates a distinctive voice that feels contemporary and slightly irreverent, appropriate for a fashion brand targeting design-conscious consumers. Underlines appear on section headers, adding a subtle editorial touch without decorative excess.

Iconography is minimal and functional. Small symbols indicate polarized lenses, new arrivals, and wishlist actions. These use simple line weights and sit quietly in corners rather than competing with product imagery. The envelope icon on subscribe buttons reinforces action context without requiring text alone to carry meaning.

The warm promotional banner at the top of the modal view introduces a softer, more inviting tone through its photographic texture and golden-brown palette. This creates emotional contrast against the clinical white of the form panel, suggesting lifestyle aspiration alongside transactional function.

## Components

**Product Card**
- Anatomy: Square image container, color swatch row overlaid on lower image area, category label, product name, price below
- Surface: Light gray (#F5F5F5) background, no border, no shadow
- Typography: Category in uppercase label style, product name in section-display, price in label style right-aligned
- Shape: Zero border radius, sharp corners
- Spacing: Internal padding approximately 1.5rem, image fills container width
- Composition: Image centered vertically, metadata bottom-aligned
- Variants: Some cards show "New" or "Polarized" badges in upper area; accessory cards may show different aspect ratios

**Newsletter Form**
- Anatomy: Headline, subheadline, email input, submit button, legal disclaimer
- Surface: White background, black button, gray input border
- Typography: Headline in hero-display, subheadline in body, button in label with letter-spacing, legal in muted body
- Shape: Pill button (9999px radius), rounded input (2rem radius)
- Spacing: Generous vertical space between headline and form, tight grouping of input and button
- Composition: Left-aligned text stack, input and button in horizontal row with small gap

**Modal Overlay**
- Anatomy: Split panel with photographic left, form right; close button; promotional banner above
- Surface: Semi-transparent backdrop implied, white form panel, photographic texture panel
- Typography: Left panel uses white text over image, right panel uses standard dark text
- Shape: Modal appears with slight corner radius on container
- Spacing: Panel padding approximately 2rem, form elements stacked with 1rem gaps
- Composition: 50/50 split, content vertically centered in each panel

**Promotional Banner**
- Anatomy: Icon, text message, dismiss control
- Surface: Warm tan/gold background
- Typography: Small body text in white or dark depending on contrast needs
- Shape: Full-width bar, no radius
- Spacing: Compact vertical padding, centered or left-aligned content

## Responsive behavior

The visible material shows only desktop layouts. Based on the component structures, several adaptive patterns are recommended. The five-column product grid should collapse to fewer columns at narrower viewports—three columns on tablet, two on mobile—with maintained card proportions. The newsletter headline scale should reduce significantly on small screens to prevent overflow; the condensed face remains legible but requires size adjustment to preserve impact without breaking layout.

The split modal composition should stack vertically on mobile, with the photographic panel becoming a top banner and the form below. Input and button in the newsletter form should become full-width stacked elements rather than horizontal neighbors at narrow sizes.

The promotional banner text may require truncation or line-wrapping with adjusted padding on smaller screens. Product card color swatches should remain tappable at minimum touch-target sizes.

## Practical implementation guidance

**Preserve**
- The extreme scale contrast between display and body typography—this is the system's signature
- Sharp-cornered product cards against light gray; the absence of radius is intentional and distinctive
- The single black button as the sole high-conversion action color
- Generous white space around typographic elements, particularly headlines
- Object-centered product photography with neutral backgrounds

**Avoid**
- Adding border radius to product cards; this would soften the editorial rigor
- Introducing additional accent colors beyond the warm tan; the system derives color energy from product photography
- Using the display face at small sizes; its condensed proportions become illegible below 1.5rem
- Shadow effects on cards or containers; the flat plane aesthetic is integral
- Centering body text; the visible system uses left alignment for readability

**Recommended build order**
1. Establish the type scale with Obviously Narrow at display sizes and Neue Haas Unica at body sizes
2. Implement the product card as the core repeatable unit with gray surface and sharp corners
3. Build the newsletter section to validate spacing rhythm and button styling
4. Add the modal pattern with split-panel composition
5. Refine the promotional banner and secondary components

**Accessibility**
- Ensure the extreme weight of Obviously Narrow Black does not compromise legibility at smaller sizes; use Bold or avoid below 2rem
- The light gray product surfaces (#F5F5F5) against white page backgrounds create subtle boundaries; verify contrast for users with low vision
- Pill buttons should maintain minimum 44px touch targets on all devices
- Input fields need visible focus states beyond the default browser outline; consider a 2px black ring or underline
- Modal traps focus and announces itself to screen readers; the close control needs explicit accessible labeling

## Scope note

This guide covers the homepage and newsletter modal surfaces visible in the supplied images. Product detail pages, checkout flows, account interfaces, and mobile-specific layouts are not represented. Motion, hover states, loading patterns, and error handling are not described. Measurements are practical adaptation targets derived from visual inspection of the desktop viewport.
