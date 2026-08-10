# How belfasttelegraph.co.uk is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/belfasttelegraph.co.uk-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section showing the Belfast Telegraph masthead, multi-column category navigation grid with News, Opinion, Business, Sport, Life, Entertainment, Sunday Life, Events, More,](https://pin.fontofweb.com/4849?format=jpg)](https://design.withfudge.com/share/pin-4849)

[Footer section showing the Belfast Telegraph masthead, multi-column category navigation grid with News, Opinion, Business, Sport, Life, Entertainment, Sunday Life, Events, More,](https://design.withfudge.com/share/pin-4849)

[![Sunday Life section page with a deep teal header background, white italic masthead logo, horizontal navigation bar, large monochrome featured image with red EXCLUSIVE label, and](https://pin.fontofweb.com/4848?format=jpg)](https://design.withfudge.com/share/pin-4848)

[Sunday Life section page with a deep teal header background, white italic masthead logo, horizontal navigation bar, large monochrome featured image with red EXCLUSIVE label, and](https://design.withfudge.com/share/pin-4848)

[![Top navigation bar showing date, utility links, Subscribe button with teal background, Log In button, Belfast Telegraph serif masthead, primary category navigation with News](https://pin.fontofweb.com/4847?format=jpg)](https://design.withfudge.com/share/pin-4847)

[Top navigation bar showing date, utility links, Subscribe button with teal background, Log In button, Belfast Telegraph serif masthead, primary category navigation with News](https://design.withfudge.com/share/pin-4847)

## Overview

The Belfast Telegraph design system presents a regional newspaper identity that balances editorial authority with contemporary clarity. The visual language centers on a distinctive serif masthead set in Nuacht Serif X, which anchors the brand across all page surfaces. This traditional typographic voice is paired with the clean, neutral forms of Nuacht Sans X for navigation, labels, and body content, creating a deliberate contrast between heritage and modern utility.

The system employs a restrained color foundation of pure black and white, with a distinctive teal accent serving as the primary interactive and editorial color. This teal appears in subscription calls-to-action, active navigation states, section badges, and branded section headers such as the Sunday Life subsite. A secondary red accent functions exclusively for high-priority editorial labels like "EXCLUSIVE," creating immediate visual hierarchy without disrupting the overall disciplined palette.

The layout follows established news publication conventions: a fixed top navigation with utility bar, horizontal category navigation with active-state underlines, and content grids that prioritize large featured imagery with overlaid or adjacent headline typography. The Sunday Life section demonstrates a bold variation where the teal accent expands to fill the entire header background, with the masthead rendered in white italic serif for distinct section branding.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, masthead, headlines, primary navigation |
| canvas | #ffffff | Page backgrounds, card surfaces, footer background |
| muted-ink | #5a5a5a | Secondary text, footer links, inactive navigation states |
| border | #d0d0d0 | Horizontal rules, navigation dividers, subtle separators |
| accent-teal | #007a8a | Subscribe buttons, active navigation underlines, Premium badges, Sunday Life header background |
| accent-red | #e00000 | EXCLUSIVE editorial labels, high-priority callouts |
| surface-dark | #2a5a6a | Deep teal variant for branded section backgrounds |

The color system operates on a principle of maximum restraint with selective emphasis. Black ink on white canvas constitutes the overwhelming majority of the interface, ensuring optimal readability for text-heavy news content. The teal accent functions as the brand's signature color, appearing with precision rather than abundance. It marks interactive commitment points like subscription and signals editorial importance through Premium badges. The red accent is more sparing still, reserved for the most urgent editorial framing to prevent dilution of its impact.

The Sunday Life section demonstrates a full inversion of the standard scheme: the deep teal surface-dark becomes the dominant background, with white text and the italic serif masthead creating a premium, magazine-like atmosphere distinct from the main publication. This establishes a clear visual vocabulary for section branding without requiring additional colors.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| masthead | Nuacht Serif X | 2rem | 700 | 1 | -0.02em | Belfast Telegraph logo |
| section-display | Nuacht Serif X | 3rem | 700 | 1.1 | -0.01em | Sunday Life masthead, major section headers |
| headline-large | Nuacht Serif X | 1.75rem | 700 | 1.15 | 0 | Featured article headlines |
| headline-medium | Nuacht Serif X | 1.25rem | 700 | 1.2 | 0 | Standard article headlines, card titles |
| body | Nuacht Sans X | 1rem | 400 | 1.5 | 0 | Article body text, descriptions |
| label | Nuacht Sans X | 0.75rem | 500 | 1.2 | 0.05em | Badges, timestamps, category labels, uppercase treatments |
| navigation | Nuacht Sans X | 0.875rem | 500 | 1 | 0.01em | Primary and secondary navigation |
| legal-copy | Nuacht Sans X | 0.75rem | 400 | 1.4 | 0 | Footer legal text, copyright, fine print |

The typographic system divides labor clearly between the two font families. Nuacht Serif X carries all display and headline responsibilities, with its bold weight providing the gravitas appropriate to a newspaper masthead and major story treatment. The serif's tight tracking and compact line height in masthead and display sizes create a confident, authoritative presence.

Nuacht Sans X handles all functional and extended reading text. Its medium weight in navigation and labels provides clear hierarchy without competing with the serif display. The regular weight at 1rem with 1.5 line height serves standard body copy. The label token's slight positive tracking and medium weight ensure readability at small sizes for timestamps, category markers, and badge text.

The Sunday Life section introduces an italic variant of the serif for its masthead, creating distinct personality while maintaining family coherence. This italic treatment is reserved for section branding and does not appear in standard article headlines.

Verify licensing for these families before production use.

## Layout

The layout follows a classic news publication structure with three primary zones: utility bar, main navigation, and content area. The utility bar spans the full viewport width, containing the date, service links, subscription call-to-action, and authentication controls aligned to the right. This bar sits above the main masthead and navigation, creating a clear information hierarchy.

The primary navigation zone centers the Belfast Telegraph masthead on the left, followed by horizontal category links. The active category receives a teal underline, providing immediate orientation feedback. Below this, a secondary navigation bar presents topic-specific links with reduced visual weight, separated from the primary bar by a thin horizontal rule.

Content layouts prioritize editorial imagery. The featured story occupies a dominant position with large-format photography and headline overlay or adjacency. Supporting stories arrange in grids of two or four columns depending on section, each with thumbnail image, category badge, and headline. The Sunday Life variation expands this approach with a full-bleed header background and asymmetric image grid.

The footer presents a comprehensive category directory in a multi-column grid, organized by editorial section. This grid uses five columns on desktop, collapsing the full taxonomy into scannable groups. Below the category grid, legal and corporate links form a single horizontal row, followed by copyright and publisher attribution.

Spacing follows a 4px base unit. Section vertical padding uses 16 units (4rem) to create clear separation between content zones. Component internal padding uses 4 to 6 units (1rem to 1.5rem). Navigation bars maintain compact 3-unit (0.75rem) vertical padding to preserve screen real estate for content.

## Visual language

The visual language communicates established journalistic credibility through typographic contrast and chromatic restraint. The black serif masthead against white ground evokes print newspaper tradition, while the clean sans-serif navigation and teal accents prevent the aesthetic from feeling dated.

Photography treatment varies by editorial priority. Featured stories receive full-color or monochrome imagery at large scale, often with gradient overlays to ensure headline legibility. Supporting stories use smaller rectangular crops with consistent aspect ratios. The Sunday Life section shows more dramatic image treatment, with the featured story's monochrome photography creating tonal cohesion with the teal header.

Badges and labels provide editorial metadata without visual clutter. The "Premium" badge uses the teal accent on a small rounded rectangle, while category labels appear as plain text in muted ink. The "EXCLUSIVE" label reverses this pattern, using red text without background to signal urgency through color alone.

Iconography remains minimal and functional. The weather indicator in the utility bar uses a simple cloud-and-rain graphic with temperature. Social media icons in the footer use standard platform glyphs in circular outlines. Search appears as a magnifying glass icon, maintaining the utilitarian approach.

The overall impression is of a publication that respects reader attention through clarity rather than visual noise. Every chromatic and typographic decision serves the primary goal of presenting news content with appropriate hierarchy and readability.

## Components

### Primary Navigation

- **Anatomy**: Full-width horizontal bar containing date, utility links, Subscribe button, Log In button, masthead, category links, weather widget, and search icon.
- **Surface**: White background with 1px bottom border in border color.
- **Typography**: Utility links use navigation token. Masthead uses masthead token. Category links use navigation token with medium weight.
- **Spacing**: 3 units vertical padding, content-padding horizontal margins.
- **States**: Active category receives 2px bottom border in accent-teal. Subscribe button uses solid accent-teal background with white label text.

### Subscribe Button

- **Anatomy**: Compact rectangular button with label text.
- **Surface**: Solid accent-teal background, white text.
- **Typography**: label token, uppercase treatment.
- **Shape**: 1 unit border radius.
- **Spacing**: 2 units horizontal padding, 1.5 units vertical padding.

### Article Card

- **Anatomy**: Thumbnail image, category badge or label, headline text, optional author byline.
- **Surface**: White background, no border.
- **Typography**: Headline uses headline-medium token. Category uses label token in muted-ink or accent-teal for Premium badge.
- **Spacing**: 2 units gap between image and text content.
- **Composition**: Image above text in vertical stack, or image left of text in horizontal layout for featured variants.

### Premium Badge

- **Anatomy**: Small inline label with text.
- **Surface**: Solid accent-teal background, white text.
- **Typography**: label token.
- **Shape**: 0.5 unit border radius.
- **Spacing**: 1 unit horizontal padding, 0.5 units vertical padding.

### EXCLUSIVE Label

- **Anatomy**: Inline text label preceding headline.
- **Surface**: No background.
- **Typography**: label token, uppercase, accent-red color.
- **Composition**: Positioned immediately before headline text with pipe separator.

### Footer Category Grid

- **Anatomy**: Multi-column grid of category sections, each containing section header and vertical list of links.
- **Surface**: White background.
- **Typography**: Section headers use body token with medium weight. Links use body token in muted-ink.
- **Spacing**: 4 units gap between columns, 1 unit gap between links within column.
- **Composition**: Five-column grid on desktop, section headers above their respective link lists.

### Social Icon Circle

- **Anatomy**: Circular button containing platform icon.
- **Surface**: White background, 1px border in muted-ink.
- **Shape**: 50% border radius for full circle.
- **Spacing**: Icon centered, 2 units internal padding.
- **Size**: 6 units (1.5rem) diameter.

## Responsive behavior

The navigation system should collapse gracefully on narrower viewports. The primary category links may compress into a horizontal scroll or hamburger menu, preserving the masthead visibility. The secondary topic navigation is a candidate for horizontal scroll or progressive disclosure behind a "More" control, as suggested by the existing "More »" pattern.

The footer category grid should transition from five columns to three, then two, then single column as viewport width decreases. This maintains scannability without excessive horizontal compression.

Article card grids should reflow from four columns to two, then single column. The featured story layout should stack image above headline on narrow viewports, with the image maintaining full width.

The Sunday Life section's teal header should remain full-bleed at all widths, with navigation links potentially collapsing to preserve the bold visual statement.

## Practical implementation guidance

### Preserve
- The stark black-and-white foundation with selective teal accent; this restraint is central to the brand identity.
- The serif masthead in bold weight with tight tracking; it is the most distinctive brand element.
- The active navigation underline in teal; this provides essential orientation feedback.
- The uppercase, tracked label treatment for badges and metadata; it creates clear hierarchy without size variation alone.
- The Sunday Life section's full teal header with white italic masthead as a proven section-branding pattern.

### Avoid
- Introducing additional accent colors beyond teal and red; the system's power lies in its restraint.
- Using the serif for body text or extended reading; it is reserved for display and headlines.
- Removing the utility bar; the date, subscribe, and login functions are essential to the news publication model.
- Making badges larger or more visually prominent; they should support, not compete with, headlines.

### Recommended Build Order
1. Establish the typographic foundation with both font families and base size tokens.
2. Implement the color system with ink, canvas, and accent-teal as minimum viable palette.
3. Build the primary navigation with masthead, category links, and active state.
4. Create the article card component with image, badge, and headline structure.
5. Implement the featured story layout with large image and overlay headline.
6. Build the footer with category grid and legal links.
7. Add the Sunday Life section variation as branded header extension.

### Accessibility
- Ensure the teal accent meets contrast requirements against white backgrounds; the dark variant may be needed for smaller text.
- The red EXCLUSIVE label should not be the sole indicator of content importance; consider additional visual or structural cues.
- Navigation active states should not rely on color alone; the underline provides sufficient secondary indicator.
- Image-heavy layouts should include descriptive alt text and consider reduced-motion preferences for any dynamic content loading.
- The subscribe button's teal on white should maintain minimum 4.5:1 contrast ratio at label size.

## Scope note

This guide covers the Belfast Telegraph homepage, Sunday Life section page, and footer surfaces visible in the supplied images. Article detail pages, video players, interactive graphics, advertising integrations, and mobile-specific layouts are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px base grid.
