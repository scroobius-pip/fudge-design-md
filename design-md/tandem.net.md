# How tandem.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tandem.net-design)

Last updated: 2026-08-10

## Captured pages

[![Dark charcoal footer with multi-column link lists, App Store badges, social media icons, and office addresses on a near-black background.](https://pin.fontofweb.com/5334?format=jpg)](https://design.withfudge.com/share/pin-5334)

[Dark charcoal footer with multi-column link lists, App Store badges, social media icons, and office addresses on a near-black background.](https://design.withfudge.com/share/pin-5334)

[![Warm off-white testimonials section with six user reviews, orange star ratings, and centered dark text in a three-column grid.](https://pin.fontofweb.com/5333?format=jpg)](https://design.withfudge.com/share/pin-5333)

[Warm off-white testimonials section with six user reviews, orange star ratings, and centered dark text in a three-column grid.](https://design.withfudge.com/share/pin-5333)

[![App feature section showing a phone mockup with bilingual chat interface, numbered heading, and mint-green dotted decorative shapes on cream background.](https://pin.fontofweb.com/5332?format=jpg)](https://design.withfudge.com/share/pin-5332)

[App feature section showing a phone mockup with bilingual chat interface, numbered heading, and mint-green dotted decorative shapes on cream background.](https://design.withfudge.com/share/pin-5332)

[![Two-step onboarding explanation with stacked phone mockups, community profiles, filter screens, and playful mint and coral geometric decorations.](https://pin.fontofweb.com/5331?format=jpg)](https://design.withfudge.com/share/pin-5331)

[Two-step onboarding explanation with stacked phone mockups, community profiles, filter screens, and playful mint and coral geometric decorations.](https://design.withfudge.com/share/pin-5331)

## Overview

Tandem's marketing site presents a warm, human-centered visual system built around the idea of friendly global connection. The design balances playful personality with trustworthy clarity: generous cream backgrounds create breathing room, while bold numbered headings and phone mockups demonstrate the app's core features. The aesthetic sits between corporate SaaS and consumer lifestyle, using approachable sans-serif typography, soft geometric decorations in mint and coral, and a dark, grounded footer that anchors the page. The overall impression is inviting and energetic without feeling childish—appropriate for a language-learning community that spans ages and cultures. The visual hierarchy moves visitors through a clear narrative: social proof first, then feature explanation, then conversion through app store downloads.

## Colors

The color system operates in three distinct zones: a warm light mode for primary content, a dark mode for the footer, and playful accent decorations that appear as background graphics. The palette is intentionally restrained, with most interface elements relying on black, white, and warm neutrals, while orange and mint provide moments of energy and personality.

| token | value | use |
|---|---|---|
| action | `#FF9500` | Star ratings, primary buttons, emphasis highlights |
| ink | `#1A1A1A` | Primary text, headings, phone mockup borders |
| muted-ink | `#6B6B6B` | Secondary text, attribution names, captions |
| canvas | `#F5F0EB` | Primary page background, testimonial section |
| surface | `#FFFFFF` | Phone mockup screens, elevated cards |
| footer-surface | `#3A3A3A` | Footer background, dark sections |
| footer-ink | `#FFFFFF` | Footer headings, primary footer text |
| footer-muted | `#B8B8B8` | Footer body text, legal copy, addresses |
| accent-mint | `#4ECDC4` | Decorative dotted shapes, geometric patterns |
| accent-coral | `#FF6B6B` | Decorative curved shapes, warm accents |

The light mode dominates the page experience. The cream canvas (`#F5F0EB`) provides warmth that distinguishes Tandem from sterile white-background competitors, while near-black ink ensures strong readability. The action orange (`#FF9500`) appears exclusively in social proof contexts—star ratings—where it signals quality and enthusiasm without overwhelming the interface. The dark footer creates a clear terminal boundary for the page, reversing the palette to white-on-charcoal for legal and navigation content. Decorative accents in mint and coral appear as large, dotted geometric shapes behind phone mockups; these are image-palette derived and serve as atmospheric background elements rather than interactive states.

## Typography

Tandem relies on a single type family, Roboto, deployed across all text roles with weight and size variation creating hierarchy. The system is clean and modern, with tight tracking on display sizes and generous line height for body text. Christian Robertson designed Roboto; Google serves as vendor. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Roboto | 3rem | 700 | 1.1 | -0.02em | Page hero headlines |
| section-display | Roboto | 2.25rem | 700 | 1.2 | -0.01em | Section headings, testimonials title |
| step-heading | Roboto | 1.75rem | 700 | 1.2 | 0em | Numbered feature headings |
| body | Roboto | 1rem | 400 | 1.6 | 0em | Default paragraph text |
| body-large | Roboto | 1.25rem | 400 | 1.5 | 0em | Feature descriptions, step explanations |
| label | Roboto | 0.875rem | 500 | 1.4 | 0.01em | Captions, attributions, metadata |
| navigation | Roboto | 0.875rem | 500 | 1.4 | 0em | Footer links, menu items |
| legal-copy | Roboto | 0.75rem | 400 | 1.5 | 0em | Copyright, legal disclaimers |

Display sizes use negative tracking for a tighter, more impactful presence, while body and label sizes maintain neutral or slightly positive tracking for readability. The weight range is limited to 400 Regular and 700 Bold, with 500 Medium appearing in navigation and label contexts. No italic styles are visible in the interface. The type scale is built on a 4px relative unit, with sizes progressing in whole-number multiples: 12px (0.75rem), 14px (0.875rem), 16px (1rem), 20px (1.25rem), 28px (1.75rem), 36px (2.25rem), and 48px (3rem).

## Layout

The page follows a centered, single-column content flow with full-bleed section backgrounds. Content is constrained to a maximum width of approximately 75rem (1200px), creating comfortable margins on large screens. Sections stack vertically with generous 6rem (96px) padding between major content zones, establishing a relaxed, breathable rhythm.

The testimonials section uses a three-column grid for desktop, with each review card occupying equal width and centered alignment. Cards maintain internal padding of roughly 1.5rem (24px), with star ratings positioned above quoted text and attribution names below. This grid collapses to a single column on narrower viewports.

Feature explanation sections employ an asymmetric two-column layout: phone mockups occupy the left portion (roughly 45% width), while numbered headings and descriptive text align to the right. The mockups are scaled to appear life-sized, with subtle drop shadows creating depth against the cream background. Decorative geometric shapes—mint dotted curves and coral solid forms—float behind and around the mockups as absolute-positioned background elements, breaking the rigid grid with organic movement.

The footer switches to a multi-column link grid on the dark surface. Four to five columns distribute content across Useful Information, Local Tandems, Legal, and office details, with app store badges and language selector stacked in the rightmost area. Social media icons appear as a horizontal row beneath the Social Media heading. The footer bottom bar spans full width with copyright and licensing text left-aligned and a small logo mark right-aligned.

## Visual language

Tandem's visual personality emerges from the tension between structured information and playful decoration. The core interface is disciplined—clean grids, consistent spacing, restrained color—but the surrounding atmosphere is warm and human. This duality reflects the product itself: organized technology facilitating spontaneous human connection.

The decorative system is distinctive. Large-scale geometric shapes in mint (`#4ECDC4`) and coral (`#FF6B6B`) appear as dotted patterns and solid curves behind phone mockups. These shapes use halftone dot textures rather than flat fills, creating a contemporary, slightly retro graphic quality. They are positioned asymmetrically, often cropped by section boundaries, which implies a larger visual system extending beyond the viewport.

Phone mockups serve as the primary illustration device, showing actual app interfaces with realistic content—user profiles, chat conversations, filter screens. This grounds the marketing in tangible product reality rather than abstract metaphor. Mockups feature rounded corners (approximately 2.5rem radius) and thin dark borders that separate them from the cream background while maintaining lightness.

The star rating system uses five filled orange stars in a horizontal row, immediately recognizable and emotionally legible. User attributions appear in muted gray below each testimonial, de-emphasizing individual identity while maintaining credibility.

Social proof and feature explanation sections alternate, creating a rhythm of emotional validation followed by functional education. This pattern—praise, then proof, then praise again—builds trust through repetition without monotony.

## Components

### Testimonial Card

- **Anatomy**: Five orange stars, quoted review text in body size, attribution name in muted label style
- **Surface and text color**: Transparent/canvas background; ink text for quotes, muted-ink for names
- **Typography**: `{typography.body}` for quote, `{typography.label}` for attribution
- **Shape**: No visible border or background panel; text sits directly on canvas
- **Spacing**: Stars separated by minimal gap (approximately 0.25rem), quote text with 1rem top margin, attribution with 0.75rem top margin
- **Composition**: Center-aligned within grid column; stars centered above text
- **Variants**: Six visible instances with varying quote lengths; all maintain identical structure

### Footer Link Group

- **Anatomy**: Column heading in bold, vertical stack of text links below
- **Surface and text color**: Footer-surface background; footer-ink for headings, footer-muted for links and body text
- **Typography**: `{typography.navigation}` for links, section-display weight for column headings (scaled to footer context)
- **Shape**: No border or radius; flat text treatment
- **Spacing**: Links stacked with approximately 0.75rem vertical gap; column heading with 1.5rem bottom margin
- **Composition**: Left-aligned within grid column; multiple columns arranged horizontally across footer width
- **Variants**: Four content types—Useful Information, Local Tandems, Legal, Office addresses

### App Store Badge

- **Anatomy**: Standard Apple App Store and Google Play badge graphics
- **Surface and text color**: Dark near-black background with white text and platform logos
- **Shape**: Small rounded corners, approximately 0.5rem
- **Spacing**: Badges stacked vertically with 0.75rem gap; positioned in footer right area
- **Composition**: Right-aligned within footer grid; consistent sizing between platforms

### Step Section

- **Anatomy**: Numbered heading ("1.", "2.", "3."), bold feature title, descriptive paragraph, optional phone mockup
- **Surface and text color**: Canvas background; ink for headings and body
- **Typography**: `{typography.step-heading}` for numbered title, `{typography.body-large}` for description
- **Shape**: No containing panel; section spans full width with content constrained
- **Spacing**: Heading with 1rem bottom margin, paragraph with 1.5rem bottom margin, mockup positioned with 3rem vertical separation from text
- **Composition**: Asymmetric two-column when mockup present; text left-aligned in right column
- **Variants**: Three visible steps—Join community, Find partner, Start talking

### Phone Mockup

- **Anatomy**: Device frame with screen content, status bar, home indicator
- **Surface and text color**: White screen surface; app content uses standard iOS interface colors
- **Shape**: Large rounded corners (2.5rem), thin dark border
- **Spacing**: Positioned with generous margin from section edges; overlapping decorative shapes behind
- **Composition**: Left-aligned or center-aligned depending on section; often angled slightly or positioned to break grid
- **Variants**: Two visible sizes—large hero mockup, smaller secondary mockup in stacked arrangement

### Social Media Icon

- **Anatomy**: Circular outline containing platform icon (Instagram, TikTok, Facebook, X, VK, YouTube)
- **Surface and text color**: Transparent background; footer-muted stroke and fill
- **Shape**: Circle with 1:1 aspect ratio, thin stroke outline
- **Spacing**: Horizontal row with 0.75rem gap between icons
- **Composition**: Left-aligned beneath Social Media heading

## Responsive behavior

The design should adapt from a centered single-column mobile layout to the full multi-column desktop experience. On narrow viewports, the three-column testimonial grid should stack to a single column with maintained star ratings and centered text alignment. Feature sections with asymmetric two-column layouts should reverse to stacked order: phone mockup above, then numbered heading and description below, ensuring the visual demonstration precedes the explanation.

Footer columns should collapse to an accordion or stacked single-column arrangement on mobile, with Local Tandems city lists potentially hidden behind expand toggles to reduce scroll burden. App store badges should remain visible and tappable, positioned near the top of the footer on mobile rather than the bottom-right corner.

The decorative geometric shapes should scale down proportionally or fade on narrow viewports to prevent visual clutter competing with phone mockups. Text sizes should reduce by one step on mobile: step headings to 1.5rem, body-large to 1.125rem, maintaining readability without overwhelming small screens.

Touch targets for footer links and social icons should meet minimum 44px height. The language selector dropdown requires adequate spacing for thumb interaction.

## Practical implementation guidance

### Preserve
- The warm cream canvas background (`#F5F0EB`) as the dominant page surface; this distinguishes Tandem from competitors using pure white
- The mint and coral decorative shapes with halftone dot texture; these are signature visual elements
- The strict Roboto-only type system with weight-based hierarchy
- The dark footer as a strong terminal boundary with reversed palette
- The five-star orange rating pattern for social proof
- Realistic phone mockups showing actual app interfaces rather than abstract illustrations

### Avoid
- Adding additional accent colors beyond orange, mint, and coral; the palette is intentionally restrained
- Using borders or backgrounds on testimonial cards; the open canvas treatment is intentional
- Replacing the dotted geometric decorations with flat fills; the halftone texture is essential
- Centering body text in feature descriptions; left alignment maintains readability for longer passages
- Using italic styles or serif typefaces; the system is strictly sans-serif and upright

### Recommended Build Order
1. Establish the cream canvas background and content max-width constraint
2. Implement the Roboto type scale with display, body, and label sizes
3. Build the footer with dark surface, multi-column grid, and link styling
4. Create the testimonials section with three-column grid and star rating component
5. Develop feature sections with asymmetric layout and phone mockup positioning
6. Add decorative geometric shapes as absolute-positioned background elements
7. Implement responsive stacking for mobile viewports

### Accessibility
- Ensure star ratings include screen reader text indicating "5 out of 5 stars" rather than relying solely on visual icons
- Footer links should maintain visible focus indicators against the dark footer-surface
- Phone mockup images require descriptive alt text explaining the demonstrated feature
- Color contrast for footer-muted text against footer-surface should meet WCAG AA standards; verify with automated testing
- The language selector dropdown should support keyboard navigation and screen reader announcement
- Decorative geometric shapes should be marked as presentational or hidden from assistive technology

## Scope note

This guide covers the Tandem marketing homepage including the footer, testimonials, and feature explanation sections with phone mockups. Mobile layouts, hover states, form interactions, motion design, and interior pages are not represented in the supplied material. Measurements are practical adaptation targets based on visible proportions in the provided images.
