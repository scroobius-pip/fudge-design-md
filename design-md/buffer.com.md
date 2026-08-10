# How buffer.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/buffer.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with centered headline 'Grow your social presence with confidence' on warm off-white background with mint-green pill button](https://pin.fontofweb.com/3152?format=jpg)](https://design.withfudge.com/share/pin-3152)

[Hero section with centered headline 'Grow your social presence with confidence' on warm off-white background with mint-green pill button](https://design.withfudge.com/share/pin-3152)

[![Dark forest-green FAQ accordion panel with white typography and mint-green underlined links](https://pin.fontofweb.com/3151?format=jpg)](https://design.withfudge.com/share/pin-3151)

[Dark forest-green FAQ accordion panel with white typography and mint-green underlined links](https://design.withfudge.com/share/pin-3151)

[![AI Assistant feature section with dark background, lavender product screenshot, and mint-green CTA button](https://pin.fontofweb.com/3150?format=jpg)](https://design.withfudge.com/share/pin-3150)

[AI Assistant feature section with dark background, lavender product screenshot, and mint-green CTA button](https://design.withfudge.com/share/pin-3150)

[![Content scratchpad feature page with navigation bar, coral-pink device frame, and four-column icon grid](https://pin.fontofweb.com/3149?format=jpg)](https://design.withfudge.com/share/pin-3149)

[Content scratchpad feature page with navigation bar, coral-pink device frame, and four-column icon grid](https://design.withfudge.com/share/pin-3149)

## Overview

Buffer's design system presents a warm, human-centered visual language that balances professional credibility with approachable simplicity. The system is built on a foundation of soft off-white canvases, dark forest-green feature panels, and a distinctive mint-green action color that serves as the brand's signature accent. The aesthetic avoids cold corporate sterility through rounded geometric forms, generous whitespace, and photography-forward product presentations. Typography pairs the geometric sans-serif Stolzl for display headings with the lighter-weight Figtree for body text, creating a clear hierarchy without visual heaviness. The overall impression is of a tool that is both capable and friendly—appropriate for a social media management platform serving creators and businesses alike. Component shapes favor full pill buttons and large rounded panels, reinforcing the soft, accessible character throughout the interface.

## Colors

The color system operates across three distinct modes: a warm light mode for primary content, a dark forest-green inverse mode for feature emphasis, and vibrant accent colors for product imagery and illustration.

| token | value | use |
|---|---|---|
| canvas | #F5F3EE | Primary page background, warm off-white with subtle cream undertone |
| surface | #FFFFFF | Card backgrounds, elevated panels, input fields |
| surface-inverse | #1E2D2B | Feature panels, FAQ sections, dark promotional areas |
| action | #A8E6A3 | Primary buttons, links, success indicators, CTA highlights |
| action-hover | #8FD98A | Button hover states, interactive element emphasis |
| ink | #1E2D2B | Primary text, headings, icons on light backgrounds |
| ink-inverse | #FFFFFF | Text on dark panels, navigation on dark backgrounds |
| ink-muted | #6B7B78 | Secondary descriptions, captions, helper text |
| border | #D4D0C8 | Subtle dividers, card outlines on light backgrounds |
| border-inverse | #3A4A48 | Dividers on dark panels, accordion separators |
| accent-coral | #F4A896 | Product imagery frames, decorative device borders |
| accent-lavender | #C8B5F0 | Illustration backgrounds, feature screenshots |

The light mode dominates standard content pages with the warm canvas and white surfaces creating an inviting, breathable environment. The dark inverse mode appears strategically for feature deep-dives and FAQ sections, where the high contrast with mint-green accents draws focused attention. The mint action color functions as the system's emotional anchor—fresh, optimistic, and distinctly non-corporate. Accent colors from product imagery (coral, lavender) are reserved for photography and illustration contexts rather than interface chrome, maintaining color discipline while allowing visual richness in marketing content.

## Typography

The type system pairs two families: Stolzl for display and brand moments, Figtree for reading and interface text. Stolzl, designed by Mariya Lish and available from Inhouse Type Ltd, contributes a geometric, slightly rounded character that aligns with the system's soft shapes. Figtree, designed by Erik Kennedy, provides a lighter, more open texture for extended reading.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Stolzl | 4rem | 400 | 1.1 | -0.02em | Homepage hero headlines, major page titles |
| section-display | Stolzl | 3rem | 400 | 1.15 | -0.01em | Feature section headings, product area titles |
| body | Figtree | 1rem | 300 | 1.6 | 0 | Paragraphs, descriptions, general content |
| body-large | Figtree | 1.25rem | 300 | 1.5 | 0 | Lead paragraphs, introductory copy |
| label | Figtree | 0.75rem | 300 | 1.4 | 0.05em | Category tags, eyebrow labels, uppercase metadata |
| navigation | Figtree | 0.875rem | 300 | 1.5 | 0 | Top-bar links, dropdown items, footer navigation |

Display sizes use tight negative tracking to create cohesive headline blocks, while body text maintains neutral tracking for readability. The 300 weight on Figtree produces an airy, contemporary feel that prevents the interface from feeling dense despite substantial content. Label text employs slight positive tracking for uppercase category markers like "CREATE" and "AI ASSISTANT" that precede major headings. Verify licensing for these families before production use.

## Layout

The layout system relies on generous section spacing and clear content-column relationships. Major page sections stack vertically with substantial breathing room between them, typically 6rem or more. Content areas center within a max-width container, with asymmetric two-column arrangements common for feature presentations.

The hero pattern centers headline and action elements with ample vertical padding, allowing the message to dominate without peripheral distraction. Feature sections frequently employ a split composition: product imagery or device mockups occupy one side (often slightly larger, at roughly 55-60% width), while explanatory copy and call-to-action elements anchor the other. This asymmetric balance creates visual interest while maintaining readable line lengths for body text.

Below the fold, multi-column grids organize supporting features—typically four columns on desktop, each with an icon, bold title, and description paragraph. These grids use consistent internal spacing and align to a shared baseline. Dark feature panels break the vertical rhythm, appearing as full-width bands with rounded internal containers that inset content from the viewport edges.

Navigation sits at the top in a fixed or sticky bar, with logo left-aligned, primary links center-clustered, and utility actions (login, primary CTA) right-aligned. The navigation maintains visual lightness through transparent or minimal backgrounds on scroll.

## Visual language

The visual language communicates through rounded geometry, warm neutrality, and strategic color contrast. Every interactive element reinforces softness: buttons are fully pill-shaped, panels carry substantial border radii, and even the typography avoids sharp angularity. This consistent rounding creates a tactile, friendly impression that distinguishes Buffer from more angular competitors.

Photography and product imagery receive prominent placement, often framed within colored device borders (coral, lavender) that extend the brand palette into visual content. These frames serve as transitional elements between interface and illustration, softening the boundary between tool and content.

Iconography appears as simple line drawings, consistently weighted and sized to pair with feature titles. They avoid filled styles, maintaining the system's light visual density. The dark panel sections create dramatic moments of focus—the mint-green action elements glow against the forest green, while white typography maintains crisp readability.

Shadows are minimal or absent; depth is communicated through color contrast and scale rather than elevation effects. The overall flatness contributes to the contemporary, clean aesthetic while ensuring performance and simplicity.

## Components

### Primary Action Button

- **Anatomy**: Text label with optional arrow icon, centered within a pill-shaped container
- **Surface**: Background `{colors.action}`, text `{colors.ink}`
- **Typography**: `{typography.body}`, weight 400 for button text
- **Shape**: Full pill with `border-radius: 9999px`
- **Spacing**: Padding approximately 1rem vertical, 2rem horizontal
- **Composition**: Icon follows text with small gap; arrow indicates forward action
- **Variants**: Dark inverse variant uses `{colors.surface-inverse}` background with `{colors.ink-inverse}` text for secondary placement

### Feature Panel

- **Anatomy**: Large rounded container with inset content area, optional side-by-side image/text layout
- **Surface**: Background `{colors.surface-inverse}`, text `{colors.ink-inverse}`
- **Typography**: Section heading uses `{typography.section-display}`, body uses `{typography.body}`
- **Shape**: `border-radius: 1.5rem`, full-width with internal padding
- **Spacing**: Internal padding 3rem or more; substantial gap between image and text columns
- **Composition**: Product screenshots or illustrations positioned left, copy and CTA right; or stacked vertically for narrower contexts
- **States**: Static display panel; may contain nested interactive elements

### FAQ Accordion

- **Anatomy**: Section heading left-aligned, accordion items stacked vertically with expand/collapse chevrons
- **Surface**: Transparent items on `{colors.surface-inverse}` panel; separator lines `{colors.border-inverse}`
- **Typography**: Questions use `{typography.body}` at increased weight or size for prominence; answers use standard `{typography.body}`
- **Shape**: No panel rounding on individual items; full panel uses `{rounded.panel}`
- **Spacing**: Generous vertical padding between questions; answer text indented or offset below question
- **Composition**: "FAQs" heading occupies left column, accordion items fill right two-thirds
- **Variants**: Expanded state reveals answer text; collapsed shows only question with down chevron; expanded shows up chevron

### Navigation Bar

- **Anatomy**: Logo left, primary links center, utility actions right
- **Surface**: Transparent or `{colors.canvas}` background; minimal border
- **Typography**: Links use `{typography.navigation}`
- **Shape**: No rounding on bar; contained buttons use `{rounded.button}`
- **Spacing**: Horizontal padding consistent with page margins; vertical padding compact
- **Composition**: Flex row with space-between alignment; dropdown indicators on parent links

### Content Card / Feature Grid Item

- **Anatomy**: Icon above, bold title, description paragraph
- **Surface**: Transparent or `{colors.surface}` background
- **Typography**: Title uses `{typography.body}` at increased weight; description uses `{typography.body}`
- **Shape**: No rounding on grid items themselves
- **Spacing**: Icon to title gap approximately 1rem; title to description gap slightly less
- **Composition**: Centered or left-aligned within grid cell; four-column grid on desktop

## Responsive behavior

The system should adapt through progressive simplification rather than dramatic transformation. The four-column feature grid collapses to two columns on tablet and single column on mobile, maintaining icon-text relationships. Split feature panels stack vertically, with imagery preceding copy to preserve visual interest above the fold.

Navigation condenses to a hamburger menu on smaller viewports, with the primary CTA remaining visible in the top bar. Hero headlines scale down from 4rem to approximately 2.5rem on mobile, maintaining tight leading to prevent excessive line breaks. Dark feature panels maintain full width but reduce internal padding proportionally.

Accordion layouts shift from asymmetric two-column (heading left, items right) to single-column stacked on narrow screens. Pill buttons maintain their shape but may reduce horizontal padding to fit constrained widths.

## Practical implementation guidance

### Preserve
- The warm off-white canvas as the default page background; pure white feels too clinical for this system
- Full pill buttons for all primary actions; partial rounding breaks the soft visual promise
- The dark panel + mint accent combination for feature emphasis; this is the brand's most distinctive pairing
- Generous section spacing; the breathing room is essential to the approachable character
- Light-weight body text; heavier weights destroy the airy quality

### Avoid
- Sharp-cornered cards or buttons; the rounded language must remain consistent
- Pure black text; the forest green ink provides warmth without sacrificing contrast
- Overuse of accent colors in interface chrome; coral and lavender belong to imagery
- Dense paragraph blocks; the system relies on scannable, spaced content
- Drop shadows for elevation; use color and scale instead

### Recommended Build Order
1. Establish the color tokens and apply canvas/background colors
2. Implement typography scale with Stolzl for headings and Figtree for body
3. Build pill button component with action color
4. Create the dark feature panel as a reusable section container
5. Implement navigation with logo, links, and utility actions
6. Add accordion behavior for FAQ sections
7. Construct the four-column feature grid with icon + text pattern
8. Apply responsive stacking for split layouts

### Accessibility
- Ensure mint-green action buttons maintain 3:1 contrast against the forest-green ink text; the combination appears to meet this threshold but should be verified
- Dark panel sections provide excellent contrast for white text; maintain this for all inverse content
- Focus indicators should use visible outlines rather than relying on color change alone
- Accordion controls need explicit expanded/collapsed state communicated to assistive technology
- Icon-only elements in feature grids should have associated text labels or aria-labels

## Scope note

This guide covers the marketing and feature pages visible in the supplied images, including the homepage hero, content creation tools page, and pricing page surfaces. Mobile layouts, interactive states beyond static presentation, loading skeletons, form validation styling, and the authenticated application interface are not represented. Motion behavior, hover transitions, and focus states require additional research. Measurements are practical adaptation targets.
