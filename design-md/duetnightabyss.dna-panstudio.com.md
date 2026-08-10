# How duetnightabyss.dna-panstudio.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/duetnightabyss.dna-panstudio.com-design)

Last updated: 2026-08-10

## Captured pages

[![Character detail page for Sibylle showing diagonal split composition with purple-haired figure against black void, faction navigation on left, and large gradient typography](https://pin.fontofweb.com/4221?format=jpg)](https://design.withfudge.com/share/pin-4221)

[Character detail page for Sibylle showing diagonal split composition with purple-haired figure against black void, faction navigation on left, and large gradient typography](https://design.withfudge.com/share/pin-4221)

[![Near-identical Sibylle character page with expanded Hyperborean Empire faction selected, showing diamond pagination and voice actor metadata.](https://pin.fontofweb.com/4220?format=jpg)](https://design.withfudge.com/share/pin-4220)

[Near-identical Sibylle character page with expanded Hyperborean Empire faction selected, showing diamond pagination and voice actor metadata.](https://design.withfudge.com/share/pin-4220)

[![Characters index with five diagonal portrait strips arranged in staggered overlapping formation, faction filter sidebar, and faint DAIMON watermark.](https://pin.fontofweb.com/4219?format=jpg)](https://design.withfudge.com/share/pin-4219)

[Characters index with five diagonal portrait strips arranged in staggered overlapping formation, faction filter sidebar, and faint DAIMON watermark.](https://design.withfudge.com/share/pin-4219)

[![Dark cinematic homepage hero with gold italic display type, video play button, download platform badges, and navigation bar with social icons.](https://pin.fontofweb.com/4218?format=jpg)](https://design.withfudge.com/share/pin-4218)

[Dark cinematic homepage hero with gold italic display type, video play button, download platform badges, and navigation bar with social icons.](https://design.withfudge.com/share/pin-4218)

## Overview

The Duet Night Abyss website presents a dark fantasy action game through two distinct visual modes: a cinematic dark homepage that immerses visitors in atmospheric storytelling, and bright character showcase pages that emphasize detailed anime-style artwork. The design system balances ornate serif display typography with clean sans-serif body text, using gold as the singular accent against either deep void blacks or soft off-white canvases. Diagonal compositions dominate the character presentation, with overlapping geometric shapes creating dynamic tension between negative space and richly illustrated figures. The overall impression is of premium game marketing—restrained elegance in the UI allowing the character art to command attention, while the homepage leans into theatrical presentation with glowing gold type and video-centric engagement.

## Colors

The color system operates in two modes: a dark cinematic mode for the homepage and promotional moments, and a light gallery mode for character browsing. Both share the same gold accent family, creating continuity across the experience.

| token | value | use |
|---|---|---|
| void | `#000000` | Homepage hero background, video overlay areas, dark mode canvas |
| canvas | `#F2F2F2` | Character page backgrounds, light section fills |
| ink | `#111111` | Primary text on light backgrounds, active navigation states |
| muted-ink | `#666666` | Secondary text, inactive faction labels, metadata |
| light-ink | `#999999` | Tertiary text, captions, disabled states |
| accent-gold | `#C9A96E` | Primary accent: navigation text, borders, decorative lines, button outlines |
| accent-gold-light | `#E8D5A3` | Hover states, highlighted text, event card headlines |
| surface-light | `#FFFFFF` | Card backgrounds, modal surfaces, clean overlays |
| surface-dark | `#0A0A0A` | Download badges, event cards, dark UI panels |
| border-gold | `#8B7355` | Subtle borders on dark components, hairline dividers |

The dark homepage mode uses `void` as its foundation with `accent-gold` and `accent-gold-light` providing all warmth and hierarchy. The light character mode inverts this, using `canvas` as the field with `ink` for primary reading and `accent-gold` reserved for interactive emphasis and decorative elements. The gold tones carry the brand identity across both contexts, preventing the two modes from feeling like separate websites.

## Typography

The type system pairs an elegant Latin serif with Pan-CJK sans and serif families, creating a hierarchy that feels both classical and contemporary. Display moments rely on Gloock's high-contrast letterforms, while body content uses Source Han Sans Cn for clarity at small sizes. Source Han Serif Cn Bold provides weight for faction headings and pull quotes where cultural authority is needed.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gloock | 4rem | 400 | 1 | -0.02em | Homepage hero headlines, major campaign titles |
| section-display | Gloock | 3rem | 400 | 1.1 | -0.01em | Section headers, character index titles |
| character-name | Gloock | 5rem | 400 | 0.9 | -0.03em | Large character names with gradient fill |
| body | Source Han Sans Cn | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general content |
| body-small | Source Han Sans Cn | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, metadata lines |
| label | Source Han Sans Cn | 0.75rem | 400 | 1.4 | 0.05em | Tags, badges, small UI annotations |
| navigation | Source Han Sans Cn | 0.875rem | 400 | 1 | 0.02em | Top navigation, sidebar links |
| faction-heading | Source Han Serif Cn | 1.25rem | 700 | 1.2 | 0.01em | Faction names, expanded sidebar items |
| quote-display | Source Han Serif Cn | 1.125rem | 700 | 1.5 | 0 | Character quotes, pull text |

World Text appears in the font sources and may serve specialized display or decorative roles not visible in the supplied pages. Verify licensing for these families before production use. Source Han Sans Cn and Source Han Serif Cn are provided by Adobe; Gloock and World Text carry no attributed vendor in the source materials.

## Layout

The layout system embraces asymmetry and diagonal tension rather than conventional grid regularity. The homepage centers its content vertically with a full-bleed cinematic background, while character pages split the viewport into overlapping geometric zones.

The homepage uses a centered vertical stack: navigation spans the top edge, a video play button sits at the optical center, and the headline group with download badges anchors the lower third. Social icons cluster in the bottom-left corner. This creates a theatrical proscenium effect, drawing the eye through the play button to the messaging below.

Character pages employ a dramatic diagonal split. The left portion carries a pale watermark illustration and faction navigation, while the right portion presents the character figure against a black void triangle that slices across the viewport. The character name occupies the lower-left quadrant at enormous scale, with quote text and metadata positioned in the center-left gap between name and figure. A secondary character strip with diamond pagination sits in the lower-right corner.

The character index page arranges five portrait strips as overlapping parallelograms, staggered in depth and offset vertically. The left sidebar maintains consistent width across character and index views, creating navigational stability amid the dynamic central composition.

Spacing follows a 4px base unit (0.25rem). Major sections separate by 6rem. Component internal padding uses 1.5rem as a standard comfortable measure, with 0.5rem for tight groupings of related elements.

## Visual language

The visual language draws from theatrical poster design and premium game marketing. Diagonal lines and sharp angles create energy and forward motion, while the restrained palette prevents visual chaos. The contrast between ornate serif display type and clean geometric UI elements establishes a hierarchy of information: the serif feels authored and emotional, the sans-serif feels functional and immediate.

Character presentation treats each figure as a collectible artifact. The large gradient-filled names function as logos as much as labels, with the gradient shifting from solid black to a textured gold dust effect at the baseline. This grounds the ethereal artwork with typographic weight. The watermark illustrations in the background—faint, monochromatic, oversized—create depth without competing for attention.

The homepage's gold italic typography glows subtly against the dark background, suggesting magic or supernatural power without resorting to overt effects. The play button's concentric rings echo broadcast and record-player iconography, reinforcing the cinematic presentation.

Imagery throughout is highly rendered anime-style character art with meticulous attention to costume detail, hair dynamics, and atmospheric lighting. The UI never attempts to match this complexity; instead it provides calm, structured frames that let the artwork breathe.

## Components

### Navigation Bar

- **Anatomy**: Horizontal bar with left-aligned social icons, center-aligned text links, and right-aligned utility icons (account, audio, language).
- **Surface**: Transparent background over homepage hero; likely adapts to light backgrounds on subpages.
- **Typography**: `{typography.navigation}` in `{colors.accent-gold}` on dark, `{colors.ink}` on light.
- **Spacing**: Links spaced at approximately 2.5rem intervals; generous top padding of 1.5rem.
- **Composition**: Center cluster of primary links (Home, Characters & Weapons, Info, Atlasia, News, TOP-UP) with small decorative text beneath each in a secondary script.

### Faction Navigation

- **Anatomy**: Vertical list with diamond bullet markers, expandable section headers, and nested sub-items.
- **Surface**: Transparent over light background; no visible container.
- **Typography**: Inactive items use `{typography.navigation}` in `{colors.muted-ink}`; active/expanded items use `{typography.faction-heading}` in `{colors.ink}` with `{colors.accent-gold}` decorative underline.
- **Spacing**: 1rem between major items; 0.75rem between nested items.
- **Variants**: Collapsed state shows only faction names; expanded state reveals sub-categories (Protagonist, Weapons).

### Character Hero

- **Anatomy**: Full-viewport section with background watermark, diagonal character artwork, large gradient name, quote block, and metadata row.
- **Surface**: `{colors.canvas}` base with black void triangle overlay on the right portion.
- **Typography**: Name uses `{typography.character-name}` with gradient from `{colors.ink}` to `{colors.accent-gold}`; quote uses `{typography.quote-display}`.
- **Shape**: Diagonal clip-path or positioned element creating the void triangle; approximately 60-degree angle.
- **Spacing**: Name positioned with 2rem left margin and 3rem bottom clearance from viewport edge; quote block offset right by roughly 25% of viewport width.

### Character Strip / Pagination

- **Anatomy**: Horizontal row of small portrait thumbnails with diamond-shaped pagination dots below.
- **Surface**: Thumbnails have slight rounded corners; active thumbnail indicated by diamond marker.
- **Typography**: Small label "DAIMON" above strip with decorative line.
- **Spacing**: Thumbnails overlap slightly; 0.5rem gaps between pagination diamonds.
- **States**: Active diamond filled in `{colors.ink}`; inactive diamonds in `{colors.light-ink}`.

### Play Button

- **Anatomy**: Circular button with play triangle icon, surrounded by concentric rings.
- **Surface**: Transparent fill; `{colors.accent-gold}` border at 1px.
- **Shape**: Perfect circle, approximately 4rem diameter.
- **Spacing**: Centered in viewport; rings create 0.25rem, 0.5rem, and 0.75rem offsets from button edge.

### Download Badge Group

- **Anatomy**: QR code tile plus four platform buttons (Google Play, App Store, PC Download, Epic Games).
- **Surface**: `{colors.surface-dark}` with `{colors.border-gold}` 1px border; subtle inner texture or gradient.
- **Typography**: Platform names in `{typography.body-small}` white or `{colors.accent-gold-light}`; "GET IT ON" and "Download on the" prefixes in smaller uppercase.
- **Shape**: `{rounded.panel}` corners at 0.5rem.
- **Spacing**: 0.75rem gap between tiles; QR code matches button height.

### Event Card

- **Anatomy**: Horizontal card with character thumbnail, headline, and subheadline.
- **Surface**: `{colors.surface-dark}` with `{colors.border-gold}` left or full border; subtle gold accent line.
- **Typography**: Headline in `{typography.section-display}` at reduced scale, `{colors.accent-gold-light}`; subheadline in `{typography.body-small}`.
- **Shape`: Slight `{rounded.panel}` treatment.

## Responsive behavior

The diagonal compositions and large display typography suggest specific adaptation challenges. The character hero's split layout should stack vertically on narrow viewports, with the character artwork moving above the text block and the void triangle becoming a horizontal band or disappearing entirely. The name scale should reduce from 5rem to approximately 2.5rem to maintain readability without excessive line breaks.

The character index's overlapping parallelograms likely collapse to a horizontal scroll or single-column stack on mobile, preserving the diagonal clip but simplifying the overlap depth.

Navigation should collapse to a hamburger menu on narrow screens, with the gold accent color maintained for the menu button and overlay background. The homepage's centered vertical stack remains viable across widths but may need reduced vertical spacing and smaller headline scale.

Touch targets for the diamond pagination and play button should maintain minimum 44px tap areas even if visual size reduces.

## Practical implementation guidance

### Preserve
- The sharp diagonal compositions and void-space triangles; these define the brand's visual identity.
- The gradient typographic treatment on character names; this is a signature element.
- The restrained gold accent against both dark and light modes; consistency builds recognition.
- The high contrast between ornate display type and clean sans-serif UI text.
- The watermark background illustrations that provide depth without distraction.

### Avoid
- Adding additional accent colors beyond the gold family; the system derives its power from restraint.
- Straightening the diagonal compositions into rectangular grids; this would eliminate the dynamic tension.
- Using the display serif for body text or small UI labels; Gloock's high contrast fails at small sizes.
- Overlapping the character artwork with text; the current system keeps them in distinct zones.
- Generic button styles that ignore the gold border and dark fill treatment.

### Recommended build order
1. Establish the color tokens and two-mode system (dark hero / light character).
2. Implement the typography scale with Gloock for display and Source Han Sans Cn for body.
3. Build the diagonal clip-path or positioned elements for the character hero layout.
4. Create the faction navigation with its expand/collapse behavior and diamond markers.
5. Implement the homepage hero with centered vertical stack and video play button.
6. Add the character strip with diamond pagination.
7. Polish with gradient text effects, watermark backgrounds, and gold border treatments on badges.

### Accessibility
- Ensure all text over the void triangle meets WCAG contrast minimums; the black background with gold text may need adjustment for small sizes.
- Provide visible focus indicators for the play button and navigation links that match the gold accent system.
- Include pause controls for any autoplay video content on the homepage.
- Consider reduced-motion preferences for the diagonal parallax or scroll-triggered animations that likely accompany these compositions.
- Verify that the gradient text effect does not compromise readability for users with low vision; provide solid-color fallbacks.

## Scope note

This guide covers the homepage hero and character showcase surfaces visible in the supplied images. The weapons section, news pages, Atlasia map interface, account systems, and TOP-UP flow are not represented. Mobile layouts, hover states, loading sequences, and motion behavior were not captured and should be designed with the established visual principles. Measurements are practical adaptation targets.
