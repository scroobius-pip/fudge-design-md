# How tiptap.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tiptap.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Customers page hero with gradient glow and dark customer logo grid cards](https://pin.fontofweb.com/1593?format=jpg)](https://design.withfudge.com/share/pin-1593)

[Customers page hero with gradient glow and dark customer logo grid cards](https://design.withfudge.com/share/pin-1593)

[![Release notes grid with rounded white cards and colorful editorial thumbnails](https://pin.fontofweb.com/1591?format=jpg)](https://design.withfudge.com/share/pin-1591)

[Release notes grid with rounded white cards and colorful editorial thumbnails](https://design.withfudge.com/share/pin-1591)

[![Blog spotlight section with category headers and mixed media card layouts](https://pin.fontofweb.com/1590?format=jpg)](https://design.withfudge.com/share/pin-1590)

[Blog spotlight section with category headers and mixed media card layouts](https://design.withfudge.com/share/pin-1590)

[![Pricing comparison table with tier columns and knowledge base cards below](https://pin.fontofweb.com/1588?format=jpg)](https://design.withfudge.com/share/pin-1588)

[Pricing comparison table with tier columns and knowledge base cards below](https://design.withfudge.com/share/pin-1588)

## Overview

Tiptap's design system serves a developer-toolkit brand with a split personality: dark, immersive hero sections that feel cinematic and technical, alternating with bright, editorial content surfaces that prioritize readability and information density. The visual language communicates both creative possibility and engineering reliability. Dark pages use deep black backgrounds with soft gradient glows in orange and teal, creating atmospheric depth behind white typography and customer logo grids. Light pages reverse to warm off-white canvases with crisp black text, rounded white cards, and colorful thumbnail imagery. The system relies on two complementary type personalities—a geometric sans for functional clarity and an expressive italic serif for brand moments—unified by consistent rounded corners and generous whitespace.

## Colors

The palette operates in two modes: a dark cinematic mode for hero and brand moments, and a light editorial mode for content and documentation. Both share the same accent vocabulary.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text on light surfaces, active toggle backgrounds, primary buttons |
| canvas | #F5F5F5 | Light page backgrounds, pricing page base, blog index surface |
| surface | #FFFFFF | Card backgrounds, elevated panels, blog cards, knowledge cards |
| muted | #6B7280 | Secondary text, captions, customer card descriptions, disabled states |
| accent | #F97316 | Gradient start, knowledge card titles, warm highlight moments |
| action | #000000 | Primary button fill, dark mode text, active toggle state |
| action-text | #FFFFFF | Text on primary buttons, text on active toggles |
| border | #E5E7EB | Subtle dividers, card outlines on light surfaces, table rows |
| gradient-start | #F97316 | Warm end of hero glows, thumbnail accents |
| gradient-end | #3B82F6 | Cool end of hero glows, thumbnail accents |

Dark surfaces use near-black with semi-transparent white overlays for depth. The customer cards on the dark page sit at approximately 5% white opacity with 10% white borders, creating subtle elevation without breaking the immersive atmosphere. Light surfaces maintain high contrast with pure white cards on warm gray canvas. Gradients appear in hero backgrounds and editorial thumbnails, always flowing warm-to-cool (orange toward cyan-blue).

## Typography

Three font families create a deliberate tension between functional geometry and editorial expression. Poly Sans handles all interface and body text with clean, neutral legibility. Pp Cirka appears in italic for brand moments, headlines, and expressive asides.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Poly Sans-Median | 4rem | 700 | 1 | -0.02em | Dark page headlines, largest brand moments |
| section-display | Poly Sans-Median | 2.5rem | 700 | 1.1 | -0.01em | Page titles, blog spotlight headers, section leads |
| body | Poly Sans-Slim | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, card body text |
| body-large | Poly Sans-Slim | 1.25rem | 400 | 1.5 | 0 | Hero subheadings, introductory paragraphs |
| label | Poly Sans-Slim | 0.875rem | 400 | 1.4 | 0.01em | Dates, tags, captions, metadata |
| navigation | Poly Sans-Slim | 0.875rem | 400 | 1 | 0 | Menu items, links, toggle labels |
| expressive-italic | Pp Cirka | 2.5rem | 500 | 1.1 | 0 | Italic headline accents, brand voice moments |

Poly Sans-Median and Poly Sans-Slim are designed by Milos Mitrovic, available from Gradient. Pp Cirka-Medium carries no listed designer or vendor attribution. Verify licensing for these families before production use.

Type scale uses a 4px base grid. Display sizes snap to whole multiples: 64px (4rem), 40px (2.5rem). Body sizes follow the same rhythm: 20px (1.25rem), 16px (1rem), 14px (0.875rem). The italic serif appears at display scale only, never at body sizes, preserving its specialness for headline accents.

## Layout

The system uses a centered content column with generous margins, expanding to full-bleed for dark hero sections and gradient backgrounds. On light pages, content sits within a max-width container with consistent horizontal padding.

Grid systems adapt to content type. Blog and release note cards use a three-column grid with equal-width columns and uniform gap spacing. The customer logo grid on dark surfaces uses the same three-column logic but with darker, more uniform cards. Pricing tables stretch to full width with five equal columns for tier comparison.

Vertical rhythm separates sections with 4rem gaps on light pages. Dark hero sections compress vertical spacing, letting the gradient glow provide visual separation. Cards internalize their own padding at 1.5rem, creating consistent breathing room without external margin dependencies.

The blog spotlight pattern groups cards under category headers with "All →" links, creating scannable editorial hierarchy. Each category section maintains the same three-column grid with 1rem gaps between cards.

## Visual language

Rounded corners define the system's friendly-developer personality. Cards use 1rem radius—substantial enough to feel modern without appearing toy-like. Buttons and toggles use full pill shapes (9999px) for interactive elements, distinguishing them from content containers.

Gradient glows serve as the primary decorative element on dark surfaces. These are large, soft, and diffuse—appearing as atmospheric color fields rather than sharp graphic shapes. The warm-to-cool gradient (orange bleeding into cyan) references the brand's creative-to-technical spectrum. On light surfaces, gradients appear contained within editorial thumbnails, where they frame product screenshots and announcements with saturated color.

Imagery treatment varies by context. Blog thumbnails use full-color product screenshots and 3D renders with gradient overlays. Customer cards use white logo marks on dark surfaces, prioritizing brand recognition over photographic realism. Knowledge base cards use simple icon marks in accent color above gradient titles.

Shadows remain minimal and soft. Light cards carry barely perceptible elevation—enough to separate from canvas but not enough to feel floating. Dark cards use border and background opacity for depth rather than shadow.

## Components

### Customer card

Dark surface component for logo display and social proof.

- **Anatomy**: Centered logo mark, company name in bold sans, category description in muted text below.
- **Surface**: Semi-transparent white background at approximately 5% opacity, 1px border at 10% white opacity.
- **Typography**: Company name uses label token at heavier weight; description uses muted color at same size.
- **Shape**: 1rem border radius.
- **Spacing**: 1.5rem internal padding, centered alignment.
- **Composition**: Three-column grid with 1rem gaps, responsive to two columns then single column on narrower viewports.

### Blog card

Light surface content container for editorial entries.

- **Anatomy**: Date label at top, title in section-display size, optional category tag, thumbnail image below.
- **Surface**: Pure white background, no visible border, subtle shadow for elevation.
- **Typography**: Date uses label token; title uses section-display at reduced size (approximately 1.25rem); category tag uses label with pill border.
- **Shape**: 1rem border radius with overflow hidden for thumbnail.
- **Spacing**: 1.5rem padding for text area; thumbnail fills full card width below.
- **Variants**: Some cards show thumbnail, others are text-only with larger title presence. The release notes grid mixes both types.

### Pricing toggle

Segmented control for plan period selection.

- **Anatomy**: Two-option pill container with active state indicator.
- **Surface**: White background container, black fill for active option, white text on active.
- **Typography**: Navigation token, centered in each segment.
- **Shape**: Full pill (9999px) for outer container and active indicator.
- **Spacing**: Tight internal padding creating compact, tap-friendly targets.
- **States**: Active option inverts to black background with white text; inactive remains transparent with black text.

### Pricing table

Feature comparison across five tiers.

- **Anatomy**: Column headers with tier name, price, and CTA; rows of features with checkmarks or dashes; footer with terms.
- **Surface**: Transparent background, horizontal border rules between rows.
- **Typography**: Tier names in body-large bold; prices in label size with muted secondary text; features in body size.
- **Shape**: No card container—full-width table layout.
- **Spacing**: Generous row height for readability; 1rem horizontal padding in cells.
- **Composition**: Five equal columns with left-aligned feature names in first column.

### Knowledge card

Resource link with gradient title.

- **Anatomy**: Icon mark, gradient title, description paragraph.
- **Surface**: White card with 1rem radius, 1.5rem padding.
- **Typography**: Title uses section-display with gradient fill (accent to purple); description uses body in muted color.
- **Shape**: 1rem border radius.
- **Spacing**: Icon above title with 1rem gap; title to description with 0.75rem gap.

## Responsive behavior

The three-column card grids should collapse to two columns at medium widths and single column on narrow viewports, maintaining card aspect ratios and internal padding. The pricing table requires horizontal scroll or stacked card conversion on mobile, as five columns cannot reasonably compress below tablet width.

Dark hero sections should maintain centered text alignment and gradient glow positioning across viewports, with headline sizes scaling down proportionally. The customer logo grid becomes two-column then single-column, preserving card proportions.

Blog card thumbnails should maintain 16:9 or similar aspect ratio across breakpoints, with text padding remaining constant. Category headers with "All →" links should stack vertically on narrow screens if horizontal space is constrained.

## Practical implementation guidance

### Preserve
- The contrast between dark cinematic heroes and light editorial content—this duality is central to brand identity.
- The warm-to-cool gradient vocabulary; it appears in heroes, thumbnails, and knowledge titles consistently.
- The rounded 1rem card radius across all card types; this unifies disparate page types.
- The two-typeface system: geometric sans for function, italic serif for brand expression.
- Pill-shaped interactive elements (buttons, toggles) distinct from content cards.

### Avoid
- Adding heavy shadows to light cards; the system prefers flat, clean elevation.
- Using the italic serif at small sizes or for body text; it should remain display-only.
- Introducing additional accent colors beyond the orange-cyan gradient pair.
- Sharp-cornered cards or buttons; they break the friendly, approachable tone.
- Darkening the canvas gray; the light pages need their warmth to feel inviting.

### Recommended build order
1. Establish the type scale with Poly Sans-Median, Poly Sans-Slim, and Pp Cirka loaded.
2. Implement the two background modes (dark near-black and warm off-white canvas).
3. Build the card component with 1rem radius and consistent padding.
4. Create the three-column grid system for blog and customer content.
5. Add gradient glow decoration for dark hero sections.
6. Implement pill buttons and toggles as distinct interactive pattern.
7. Build pricing table with horizontal rules and checkmark indicators.

### Accessibility
- Ensure white text on dark gradients meets WCAG AA contrast; the gradient backgrounds may require dark overlay scrims behind text.
- Provide visible focus states for pill buttons and toggles; the high-contrast inversion pattern supports this well.
- Consider `prefers-reduced-motion` for any gradient animation; static gradients should remain readable.
- Maintain touch targets at minimum 44px for pill toggles and table CTAs.

## Scope note

This guide covers the marketing site surface including customers, blog, release notes, and pricing pages. It does not include the Tiptap editor interface itself, documentation code blocks, account dashboard, or mobile-native applications. Measurements are practical adaptation targets derived from visible page structures.
