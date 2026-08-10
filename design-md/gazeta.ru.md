# How gazeta.ru is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gazeta.ru-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage masthead with Газета.Ru logo, hamburger menu, navigation tabs, and three-column content grid featuring opinions, news digest, and sidebar recommendations](https://pin.fontofweb.com/9089?format=jpg)](https://design.withfudge.com/share/pin-9089)

[Homepage masthead with Газета.Ru logo, hamburger menu, navigation tabs, and three-column content grid featuring opinions, news digest, and sidebar recommendations](https://design.withfudge.com/share/pin-9089)

[![Article page with full-bleed weather photography, dark overlay header, body text on near-black background, red Telegram link, and cookie consent banner with red Ok button](https://pin.fontofweb.com/9101?format=jpg)](https://design.withfudge.com/share/pin-9101)

[Article page with full-bleed weather photography, dark overlay header, body text on near-black background, red Telegram link, and cookie consent banner with red Ok button](https://design.withfudge.com/share/pin-9101)

## Overview

Газета.Ru operates as a major Russian news portal with a distinctive dual-mode visual system. The homepage presents a clean, light editorial surface organized around a three-column grid: opinion columns on the left, a central news digest with photography, and a sidebar of recommended reading on the right. The article page inverts this logic entirely, dropping the reader into an immersive dark environment where a full-bleed photograph dominates the viewport and body text sits on a near-black canvas. This contrast between light browsing and deep reading creates clear situational contexts for the publication's two primary user tasks: scanning headlines and consuming long-form content.

The design relies on a stark typographic hierarchy. Bitter, a slab serif, handles all display text with a bold weight that anchors sections and headlines. Source Sans 3, a humanist sans from Adobe, carries everything else—from navigation to body copy to captions. The result is a system that feels editorial without being ornate, contemporary without chasing trends. Red appears sparingly but decisively as an accent color for interactive elements and highlighted links, cutting through both light and dark modes with equal force.

## Colors

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text on light backgrounds, dark mode canvas |
| ink-secondary | `#202020` | Header text, subtle dark surfaces, box shadows |
| ink-tertiary | `#303030` | Secondary dark elements, hover states |
| accent | `#C9181E` | Links, buttons, active indicators, cookie consent action |
| border | `#CCCCCC` | Dividers, hairline rules between content blocks |
| surface | `#F5F5F5` | Sidebar backgrounds, card fills, secondary content areas |
| canvas | `#FFFFFF` | Homepage background, header bar, light mode base |

The light mode homepage builds from canvas white upward. Text sits directly on this ground in ink black, with section labels and headlines in ink-secondary providing stepped emphasis. The surface gray isolates sidebar recommendations and opinion modules, creating gentle containment without visual weight. Borders appear as single-pixel rules in `#CCCCCC`, most visibly between the opinion list items and beneath section headers.

The dark article mode reverses this stack. The body background becomes ink black, with body text rendered in a light gray at `#CCCCCC` equivalent luminance. Photographs bleed to the viewport edges, and a dark overlay gradient typically sits above the image to ensure headline legibility. The accent red gains intensity against this dark ground, used for inline links like the Telegram-channel reference and the cookie consent confirmation button.

The accent red also serves as the brand's signature in the cookie consent banner that appears across both modes—a persistent red rectangle with white label text, positioned at the bottom of the viewport.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bitter | 1.75rem | 700 | 1.35 | normal | Homepage section headers, article headlines |
| section-display | Bitter | 1rem | 700 | 1.35 | normal | Card titles, opinion headlines, sidebar labels |
| body-large | Source Sans 3 | 1.25rem | 400 | 1.5 | normal | Article body text, long-form reading |
| body | Source Sans 3 | 1.125rem | 400 | 1.25 | normal | News digest descriptions, standard paragraphs |
| body-small | Source Sans 3 | 1rem | 400 | 1.25 | normal | Sidebar entries, secondary content |
| label | Source Sans 3 | 0.875rem | 400 | 1.35 | normal | Metadata, timestamps, author names |
| caption | Source Sans 3 | 0.75rem | 400 | 1.35 | normal | Image credits, fine print |
| navigation | Source Sans 3 | 1rem | 400 | 2.0 | 0.05em | Top bar menu items, category tabs |

Bitter appears exclusively at 700 weight, functioning as the system's display voice. Its slab-serif structure provides the authority expected of a newspaper masthead while remaining legible at screen resolutions. Source Sans 3 carries the full weight of interface and reading text at 400 regular, with a single instance of 700 bold used for sidebar section headers in the dark mode context.

The type scale builds from a 2px relative unit. Body-large at 20px/1.25rem provides the comfortable measure for article reading, while body at 18px/1.125rem handles the denser homepage digest. The 16px/1rem body-small size serves sidebar content where space is constrained. Navigation receives expanded letter spacing at 0.05em to separate it from content text, with generous line height at 2.0 for touch accessibility in the header bar.

Verify licensing for these families before production use. Source Sans 3 is available from Adobe; Bitter requires independent license verification.

## Layout

The homepage employs a three-column editorial grid with asymmetric proportions. The left column, approximately one-quarter of the content width, contains the "Мнения" opinion section with stacked author cards. The center column, roughly half the width, carries the "Не пропустите" news digest with mixed-scale imagery and headline lists. The right column, again about one-quarter, presents "Читайте также" recommendations as a vertical stack of text links on a surface gray background.

Header architecture spans the full viewport width. A white header bar at 56px height contains the hamburger menu, category navigation tabs ("Новости", "Спорт"), the centered Газета.Ru wordmark, and utility icons (search, user account) aligned to the right. The header casts a subtle shadow: `rgba(32, 32, 32, 0.15) 0px 1px 3px 0px`, creating elevation without visual weight. Horizontal padding of 34px/2.125rem on either side frames the content.

The article page abandons this grid for a single-column immersive flow. The photograph occupies the full viewport width with proportional height, followed by a dark content well. Body text receives no container max-width constraint in the visible implementation, instead flowing to comfortable measure through generous margins. The cookie consent banner fixes to the bottom edge, spanning full width with internal padding of 16px/1rem.

Spacing follows a compact editorial rhythm. Homepage content sections begin with 24px/1.5rem top padding. Card internals use 16px/1rem padding. Opinion list items separate with 12px/0.75rem bottom margins and matching padding. The sidebar recommendation list uses 8px/0.5rem vertical spacing between entries.

## Visual language

Photography treatment differs fundamentally between contexts. Homepage images appear as contained rectangles with slight rounding at 2px/0.125rem, cropped to consistent aspect ratios within their grid cells. The article page treats photography as immersive environment—full bleed, unrounded, with the image edge defining the content boundary rather than any frame.

The red accent operates as a functional signal rather than decorative element. On the homepage, it appears minimally if at all in the visible state. In articles, it marks inline links and interactive confirmations. The cookie consent button uses a solid red fill with white text, making it the most saturated element in either mode. This restraint prevents the accent from overwhelming the editorial tone while ensuring it captures attention when action is required.

Iconography in the header uses simple line-weight symbols: hamburger three-line menu, paper airplane share, search magnifier, user silhouette. These remain in the ink color without independent accent treatment, subordinate to the wordmark and navigation.

The overall character balances institutional credibility with digital directness. There is no ornamental illustration, no gradient backgrounds beyond photograph overlays, no shadow on content cards. The visual interest comes from typographic contrast, photographic content, and the dramatic mode switch between homepage and article.

## Components

### Header bar

- **Anatomy**: Full-width fixed container with flex row layout. Left cluster: hamburger icon, category tabs. Center: Газета.Ru wordmark in Bitter bold. Right cluster: share icon, search icon, user icon.
- **Surface**: Background `{colors.canvas}`, bottom shadow in `{colors.ink-secondary}` at 15% opacity.
- **Typography**: `{typography.navigation}` for category tabs.
- **Spacing**: `{spacing.tight}` vertical padding, `{spacing.page-gutter}` horizontal padding.
- **Shape**: No border radius.

### Section header

- **Anatomy**: Bitter bold text with trailing period punctuation, occasionally with red accent dot. Bottom border rule in `{colors.border}`.
- **Typography**: `{typography.hero-display}` for major sections, `{typography.section-display}` for subordinate labels.
- **Spacing**: `{spacing.comfortable}` top padding, `{spacing.standard}` bottom margin before content.

### Opinion card

- **Anatomy**: Stacked layout with headline in Bitter bold, author name in Source Sans 3 label size, circular avatar image.
- **Surface**: Transparent on homepage, separated by `{colors.border}` horizontal rules.
- **Typography**: `{typography.section-display}` for headline, `{typography.label}` for author attribution.
- **Spacing**: `{spacing.compact}` bottom padding and margin, `{spacing.standard}` internal padding.
- **Composition**: Avatar positioned right of text block, approximately 40px diameter.

### News digest card

- **Anatomy**: Mixed media block with photograph, headline in Bitter, descriptive text in Source Sans 3 body, optional bullet list for related links.
- **Surface**: Transparent, image with `{rounded.card}` radius.
- **Typography**: `{typography.section-display}` for headline, `{typography.body}` for description, `{typography.label}` for list items.
- **Spacing**: `{spacing.standard}` padding around image-text cluster, `{spacing.tight}` between text elements.

### Sidebar recommendation list

- **Anatomy**: Vertical stack of text links on surface gray background, with section header above.
- **Surface**: Background `{colors.surface}`, full height of content section.
- **Typography**: `{typography.section-display}` for header, `{typography.body-small}` for link entries.
- **Spacing**: `{spacing.standard}` padding container, `{spacing.tight}` between entries.

### Cookie consent banner

- **Anatomy**: Fixed bottom bar with explanatory text and action button.
- **Surface**: Semi-transparent dark overlay or solid dark background, with `{colors.accent}` filled button.
- **Typography**: `{typography.body-small}` for explanation, `{typography.label}` for button text in white on accent.
- **Shape**: Button at `{rounded.button}` radius.
- **States**: Single visible state with "Ok" confirmation; no secondary dismiss action visible.

### Article body

- **Anatomy**: Single column of paragraphs with inline links, following full-bleed hero image.
- **Surface**: Background `{colors.ink}`, text in light gray equivalent to `{colors.border}`.
- **Typography**: `{typography.body-large}` for reading text, with inline links in `{colors.accent}`.
- **Spacing**: `{spacing.standard}` bottom margin on paragraphs, comfortable line measure through side margins.

## Responsive behavior

The three-column homepage grid should collapse to single column on narrow viewports, with the sidebar recommendations moving below the main digest or converting to a horizontal scroll. The opinion section, currently fixed at left width, should expand to full width with larger touch targets for author cards.

The article page requires less structural adaptation, though the body text measure should constrain to maximum 65-75 characters per line for reading comfort. The cookie consent banner should remain fixed bottom with increased touch target height on mobile devices.

The header bar should maintain its full-width layout with reduced horizontal padding on narrow screens. Category tabs may collapse to a single "Sections" dropdown when horizontal space is insufficient.

## Practical implementation guidance

### Preserve
- The stark dual-mode contrast between light homepage and dark article pages; this is the system's most distinctive feature.
- Bitter's exclusive use at 700 weight for all display text; do not introduce lighter weights that dilute the editorial voice.
- The 2px base unit for all spacing and sizing; this creates the tight, controlled rhythm visible throughout.
- Full-bleed photography on articles without border radius or shadow framing.
- The restrained accent red applied only to interactive elements and highlighted links.

### Avoid
- Adding background colors or shadows to homepage content cards; the flat transparency is intentional.
- Using Bitter for body text or Source Sans 3 for headlines; the family-role separation is fundamental.
- Introducing additional accent colors; the red-black-white palette is complete.
- Rounding beyond 2px on any element; the system maintains sharp editorial edges.
- Gradient backgrounds except for photograph overlays in article headers.

### Recommended build order
1. Establish the 2px relative unit and type scale with Source Sans 3 at all body sizes.
2. Implement the header bar with shadow, navigation tabs, and centered wordmark.
3. Build the three-column homepage grid with surface gray sidebar.
4. Add Bitter at 700 weight for section headers and card headlines.
5. Implement the dark article mode with full-bleed image and inverted text colors.
6. Add the cookie consent banner with accent button.
7. Refine spacing and border rules between list items and sections.

### Accessibility
- Ensure the accent red on white meets WCAG AA contrast ratios; the `#C9181E` value should be verified against both white and dark backgrounds.
- Article body text on near-black should maintain at least 4.5:1 contrast; the light gray used requires verification.
- Header icons need accessible labels and touch targets of at least 44px.
- The cookie consent banner should trap focus until dismissed and provide a clear keyboard path to the confirmation action.
- Consider a reduced-motion preference for the shadow elevation and any scroll-triggered behaviors.

## Scope note

This guide covers the homepage and article page surfaces visible in the supplied images. Mobile breakpoints, hover and focus states, loading skeletons, error pages, video embeds, and comment sections are not represented. The dark mode article implementation appears complete for text content but may have additional surrounding chrome not visible in the capture. Measurements are exact where retained and practical adaptation targets where derived from visible structure.
