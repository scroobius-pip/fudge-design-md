# How makerstations.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/makerstations.io-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero section with coral banner, navigation sidebar, featured vintage Macintosh article card, and grid of workspace thumbnails with rounded corners and read-time badges](https://pin.fontofweb.com/5465?format=jpg)](https://design.withfudge.com/share/pin-5465)

[Homepage hero section with coral banner, navigation sidebar, featured vintage Macintosh article card, and grid of workspace thumbnails with rounded corners and read-time badges](https://design.withfudge.com/share/pin-5465)

[![Newsletter signup modal with coral starburst logo, name and email inputs, coral primary button, and free newsletter checkbox with checkmark icon](https://pin.fontofweb.com/5468?format=jpg)](https://design.withfudge.com/share/pin-5468)

[Newsletter signup modal with coral starburst logo, name and email inputs, coral primary button, and free newsletter checkbox with checkmark icon](https://design.withfudge.com/share/pin-5468)

[![Article header with serif title in Perfectly Nineties, coral starburst favicon, author metadata, and pill-shaped Comments and Share buttons with light gray backgrounds](https://pin.fontofweb.com/5467?format=jpg)](https://design.withfudge.com/share/pin-5467)

[Article header with serif title in Perfectly Nineties, coral starburst favicon, author metadata, and pill-shaped Comments and Share buttons with light gray backgrounds](https://design.withfudge.com/share/pin-5467)

[![Mobile navigation drawer with hamburger trigger, Maker Stations wordmark, categorized menu links with icons, and footer links with Home pill button](https://pin.fontofweb.com/5466?format=jpg)](https://design.withfudge.com/share/pin-5466)

[Mobile navigation drawer with hamburger trigger, Maker Stations wordmark, categorized menu links with icons, and footer links with Home pill button](https://design.withfudge.com/share/pin-5466)

## Overview

Maker Stations presents a editorial platform dedicated to workspace inspiration, combining nostalgic visual warmth with contemporary interface clarity. The design system centers on a distinctive coral accent that appears in the brand starburst mark, primary calls-to-action, and promotional banners. Content hierarchy relies on a deliberate typographic pairing: Perfectly Nineties, a serif with vintage character, handles display headlines and the wordmark, while Geist, a clean sans-serif, manages all interface text, body copy, and navigation. The overall impression is approachable and curated—like a well-designed magazine that happens to live in a browser.

The layout philosophy prioritizes photography, giving workspace imagery generous presence through rounded cards with subtle warm backgrounds. Navigation organizes content through both a persistent sidebar on desktop and a hierarchical mobile drawer. The system maintains visual consistency through restrained color application, letting the coral accent punctuate an otherwise neutral palette of warm whites, soft grays, and near-black text.

## Colors

| token | value | use |
|---|---|---|
| action | #F06B54 | Primary buttons, newsletter banner background, starburst logo fill, active links |
| action-hover | #E05A43 | Button hover states, interactive coral elements |
| ink | #1A1A1A | Primary text, headlines in sans-serif contexts, navigation labels |
| muted-ink | #6B6B6B | Secondary metadata, timestamps, category tags, placeholder text |
| canvas | #FFFFFF | Page background, input fields, modal surfaces, button text on action |
| surface | #F5F5F5 | Pill button backgrounds, subtle UI chrome, inactive states |
| surface-warm | #F8F6F3 | Featured article card background, elevated content containers |
| border | #E5E5E5 | Input field borders, dividers, card outlines |
| border-subtle | #EEEEEE | Hairline separators, footer boundaries |

The color system operates on a warm-neutral foundation with a single vibrant accent. The coral action color carries the brand's energetic, creative personality—it's never used in large solid fields except for the thin promotional banner, instead appearing as contained buttons, links, and the iconic starburst mark. Text hierarchy depends on ink versus muted-ink contrast rather than size variation alone. The surface-warm tone introduces subtle warmth that complements the vintage photography without competing with it. Dark mode is not present in the visible interface; any implementation should consider how the coral accent would read against a dark ground.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Perfectly Nineties | 3rem | 400 | 1.1 | -0.02em | Featured article headlines, major page titles |
| section-display | Perfectly Nineties | 2.25rem | 400 | 1.15 | -0.01em | Article page titles, section headers |
| body | Geist | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions, form labels |
| body-small | Geist | 0.875rem | 400 | 1.5 | 0 | Card titles, metadata, button labels |
| label | Geist | 0.75rem | 500 | 1.4 | 0.02em | Category tags, read-time badges, timestamps |
| navigation | Geist | 0.875rem | 400 | 1.4 | 0 | Sidebar links, menu items, footer navigation |
| wordmark | Perfectly Nineties | 1.5rem | 400 | 1.2 | 0 | Logo text, brand lockup |

The typographic system creates tension between editorial nostalgia and functional modernity. Perfectly Nineties, designed by Jen Wagner Co, supplies the distinctive character for headlines and brand moments—its slightly irregular, pre-digital warmth evokes the vintage workspaces the platform celebrates. Geist, from Basement Studio and available through Vercel, handles everything else with neutral clarity. The weight range stays in Regular and Medium; no Bold or Semibold weights are visibly employed. Verify licensing for these families before production use.

Type sizes follow a 4px grid (0.25rem unit), with display sizes at 48px and 36px, body at 16px, and descending steps at 14px and 12px. Line heights are tight for display (1.1–1.15) and generous for reading (1.5–1.6). Letter spacing is slightly negative for large serifs to prevent looseness, neutral for body, and slightly positive for small labels to maintain legibility.

## Layout

The page structure combines a persistent left sidebar with a scrollable main content area on desktop. The sidebar contains the wordmark, primary navigation grouped by category (Resources, Featured), and footer links. The main area presents a promotional banner at full width, followed by a featured article hero card, then a responsive grid of content cards.

The featured article card uses an asymmetric two-column layout: text content occupies the left portion with category tags, headline, quote excerpt, and call-to-action button, while a large photograph fills the right portion with rounded corners. Navigation arrows and a read-time badge overlay the image. Below, the content grid arranges cards in rows of five on wide viewports, each card stacking thumbnail image above title, date, and category tags.

Spacing follows a 4px base unit. Section vertical padding uses 4rem (64px) as a standard rhythm. Content gaps within components use 1.5rem (24px). Card internal padding uses 1.5rem. The sidebar maintains consistent 1.5rem horizontal padding. Grid gaps between cards appear to be 1.5rem as well, creating even breathing room throughout.

The promotional banner spans full viewport width with centered text, sitting above the main content area. A floating action button for newsletter subscription appears fixed in the lower right corner on scroll.

## Visual language

Photography dominates the visual experience, with workspace images receiving rounded-corner treatment (1rem radius) and subtle shadow elevation. The starburst mark—an eight-pointed coral burst—serves as the brand's most distinctive graphic element, appearing in the logo lockup, favicon, and promotional materials. This geometric motif contrasts with the organic, lived-in quality of the workspace photography.

Cards use warm off-white backgrounds rather than pure white, creating gentle separation from the canvas without harsh borders. The featured article card employs a larger 1rem radius and more pronounced rounding than standard content cards. Read-time badges appear as small dark pills overlaid on image thumbnails, using white text for contrast.

Iconography is minimal and functional: simple line icons accompany navigation items in the sidebar, while interface actions use standard glyphs (search, user, share, comment). The overall aesthetic avoids decoration beyond the starburst mark, letting typography and photography carry the visual interest.

Pill-shaped buttons with full rounding (9999px) appear for secondary actions like Comments and Share, while primary actions use the same full rounding with coral fill. This consistent shape language creates recognizable interactive targets.

## Components

### Newsletter signup modal

- **Anatomy**: Centered modal with close control, starburst logo, wordmark, name input, email input, newsletter preference checkbox, primary submit button, and secondary sign-in link
- **Surface**: White canvas background with subtle shadow elevation
- **Typography**: Wordmark in Perfectly Nineties at 1.5rem; form labels in Geist body-small at 0.875rem; "Free newsletter" header in Geist body at 1rem with action color
- **Shape**: 1rem border radius on modal container; 0.5rem radius on inputs; 9999px on submit button
- **Spacing**: 1.5rem padding around content; 1rem vertical gaps between form fields
- **Composition**: Vertically stacked, centered alignment; checkbox with checkmark icon left-aligned within preference box
- **Variants**: The preference box uses a light border to group the newsletter option

### Featured article card

- **Anatomy**: Two-column layout with text content left, image right; category tag row, headline, quote excerpt, coral "Read More" button with arrow icon; image includes navigation arrows and read-time badge
- **Surface**: Warm off-white background (#F8F6F3); image with 1rem radius
- **Typography**: Headline in hero-display (Perfectly Nineties, 3rem); category tags in label style; quote in body style; button in body-small
- **Shape**: 1rem border radius on card container; 9999px on button
- **Spacing**: Generous internal padding, approximately 2–3rem
- **Composition**: Asymmetric balance favoring image; text vertically centered in left column

### Content grid card

- **Anatomy**: Thumbnail image, read-time badge overlay, title, date, category tag list
- **Surface**: Transparent or white background; image with 1rem radius
- **Typography**: Title in body-small (Geist, 0.875rem, weight 500); metadata in label style (Geist, 0.75rem, muted-ink)
- **Shape**: 1rem border radius on thumbnail
- **Spacing**: 1rem gap between image and text; 0.5rem between metadata lines
- **Composition**: Vertical stack; badge positioned bottom-right of image

### Navigation sidebar

- **Anatomy**: Wordmark with registered trademark, hamburger trigger, categorized link groups with icons, footer links with Home pill button
- **Surface**: White canvas background; light border on footer section
- **Typography**: Wordmark in Perfectly Nineties; links in Geist navigation style; category headers in label style with muted-ink
- **Shape**: Home button uses pill shape (9999px radius)
- **Spacing**: 1.5rem horizontal padding; 0.75rem vertical spacing between links
- **Composition**: Left-aligned text with icons; grouped by category with header labels

### Promotional banner

- **Anatomy**: Full-width strip with centered text and close control
- **Surface**: Solid action color (#F06B54) background
- **Typography**: Body-small in white, centered
- **Shape**: No radius; full-bleed horizontal
- **Composition**: Single line with dismiss action right-aligned

### Floating action button

- **Anatomy**: Fixed-position pill with envelope icon and text
- **Surface**: Action color fill with white text and icon
- **Typography**: Body-small in Geist
- **Shape**: 9999px full rounding
- **Position**: Lower right viewport corner

## Responsive behavior

The visible interface shows a mobile navigation drawer that replaces the persistent sidebar. At narrower viewports, the sidebar collapses behind a hamburger trigger, expanding as an overlay with the full navigation hierarchy. The content grid likely reduces columns from five to fewer as viewport narrows, though the exact breakpoint is not visible.

The featured article card probably stacks vertically on mobile, with image above text rather than side-by-side. Typography scales down proportionally; the 3rem hero display may reduce to 2.25rem or 2rem on smaller screens to maintain line length control.

The promotional banner remains full-width across viewports. The floating newsletter button maintains its fixed position, though its padding or text may compact slightly.

Implementation should consider touch targets: sidebar navigation items need adequate vertical padding (minimum 44px) for finger interaction. The modal form fields should stack naturally with full-width inputs on narrow screens.

## Practical implementation guidance

### Preserve
- The distinctive typographic pairing of nostalgic serif headlines with clean sans-serif UI text
- The coral starburst mark as the singular brand graphic element
- Generous rounded corners on photography (1rem) and full pill rounding on interactive elements
- Warm off-white card backgrounds that separate content without harsh borders
- The asymmetric featured article layout with image prominence
- Category tag systems that enable content discovery

### Avoid
- Adding additional accent colors that compete with the coral action
- Using the serif font for body text or UI elements—it should remain display-only
- Sharp-cornered cards or buttons that break the soft, approachable aesthetic
- Pure white backgrounds for elevated cards; maintain the warm surface tone
- Cluttered navigation without the clear category grouping visible in the sidebar

### Recommended build order
1. Establish the 4px spacing grid and neutral color foundation (canvas, ink, muted-ink, surfaces)
2. Implement Geist for all body and navigation typography at specified sizes
3. Add Perfectly Nineties for wordmark and display headline treatment
4. Build the sidebar navigation with iconography and category grouping
5. Create the featured article card component with two-column layout
6. Implement the content grid with consistent card patterns
7. Add the coral accent system (banner, buttons, starburst, links)
8. Polish with modal, floating action button, and responsive drawer behavior

### Accessibility
- Ensure coral action color meets contrast requirements against white (it may need darkening for small text compliance)
- Provide visible focus states for all interactive elements, using ink or darkened action color
- Maintain semantic heading hierarchy: h1 for page/featured titles, descending logically
- Add aria-labels to icon-only controls like the sidebar hamburger and modal close
- Ensure form inputs have associated labels, not just placeholder text
- Consider reduced-motion preferences for any scroll-triggered animations

## Scope note

This guide covers the homepage, article header, navigation drawer, and newsletter signup modal visible in the supplied images. Footer content, individual article body layouts, search functionality, user authentication flows, and any dark mode variant are not represented. Measurements are practical adaptation targets based on visible proportions and the 4px relative unit.
