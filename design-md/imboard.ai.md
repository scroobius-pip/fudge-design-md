# How imboard.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/imboard.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page hero with three-tier card layout showing Startup, Growth, and Expansion plans with orange accent labels and navy typography](https://pin.fontofweb.com/1099?format=jpg)](https://design.withfudge.com/share/pin-1099)

[Pricing page hero with three-tier card layout showing Startup, Growth, and Expansion plans with orange accent labels and navy typography](https://design.withfudge.com/share/pin-1099)

[![Feature grid section with six icon-led items including Secure Platform, Mobile Access, and Meeting Tools with navy headings on white background](https://pin.fontofweb.com/1100?format=jpg)](https://design.withfudge.com/share/pin-1100)

[Feature grid section with six icon-led items including Secure Platform, Mobile Access, and Meeting Tools with navy headings on white background](https://design.withfudge.com/share/pin-1100)

[![FAQ accordion section with two-column layout, orange section label, and expandable question items with navy chevron indicators](https://pin.fontofweb.com/1101?format=jpg)](https://design.withfudge.com/share/pin-1101)

[FAQ accordion section with two-column layout, orange section label, and expandable question items with navy chevron indicators](https://design.withfudge.com/share/pin-1101)

[![Bottom call-to-action banner with centered navy headline, muted subtext, and full-pill orange button with external-link icon](https://pin.fontofweb.com/1102?format=jpg)](https://design.withfudge.com/share/pin-1102)

[Bottom call-to-action banner with centered navy headline, muted subtext, and full-pill orange button with external-link icon](https://design.withfudge.com/share/pin-1102)

## Overview

I'mBoard presents a polished, trustworthy visual system designed for enterprise board-management software. The interface balances professional authority with approachable clarity through a restrained two-color palette: deep navy anchors the brand identity while vibrant orange drives action. The design prioritizes readability and conversion, deploying generous whitespace, clear typographic hierarchy, and card-based layouts that make complex pricing information scannable. Every section follows a consistent center-aligned headline pattern with an uppercase label, a bold display heading, and a muted subheading that together create predictable rhythm across pages. The overall impression is of a mature SaaS product that respects user attention while confidently guiding toward trial signup.

## Colors

The color system is intentionally minimal, relying on contrast between a deep navy and warm orange against a clean white ground. This restraint reinforces the product's enterprise positioning while ensuring accessibility.

| token | value | use |
|---|---|---|
| action | #F97316 | Primary buttons, section labels, interactive accents, external-link icons |
| action-hover | #EA580C | Button hover states (one shade darker for depth) |
| ink | #1E3A5F | Primary headings, body text, icons, pricing plan names |
| ink-secondary | #334155 | Secondary emphasis, feature headings within cards |
| muted | #64748B | Descriptive subtext, feature descriptions, FAQ answers, pricing period labels |
| canvas | #FFFFFF | Page background, card surfaces, button text |
| surface | #F8FAFC | Subtle section alternation, footer or secondary band backgrounds |
| border | #E2E8F0 | Card outlines, dividers, subtle containment boundaries |
| success | #1E3A5F | Checkmark icons in feature lists (reuses ink for consistency) |

The navy-to-orange relationship defines the brand: navy conveys stability and governance appropriate to board management, while orange injects energy into calls-to-action. The muted gray scale handles all supporting information without competing for attention. No dark mode is visible in the supplied material; the system operates entirely in a light-theme context with sufficient contrast ratios for standard text.

## Typography

The type system uses a single sans-serif family across all roles, creating cohesion through weight and size variation rather than family mixing. The hierarchy moves from tight, bold display settings to open, readable body text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3.5rem | 700 | 1.1 | -0.02em | Page hero headlines, pricing page main title |
| section-display | Inter | 2.5rem | 700 | 1.2 | -0.01em | Section headings, "Choose Your Plan", "All Plans Include" |
| section-label | Inter | 0.875rem | 600 | 1.4 | 0.05em | Uppercase category labels: "PRICING", "FAQS" |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraph text, FAQ answers, feature descriptions |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Hero subheadings, section subtitles |
| feature-heading | Inter | 1.125rem | 600 | 1.4 | 0 | Card titles, feature names, FAQ questions |
| pricing-amount | Inter | 4rem | 700 | 1 | -0.03em | Dollar amounts in pricing tiers ($0, $99, $299) |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Buttons, nav items, compact UI labels |

Display headings use tight negative tracking for a modern, confident presence. The pricing amount token is the most aggressive, with -0.03em tracking at 4rem to create visual weight for the cost figures. Body text maintains generous 1.6 line height for extended reading. Section labels are set in all caps with positive tracking for clear scannability. Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column content flow with contained maximum width. Sections stack vertically with substantial breathing room between them, typically 6rem of vertical separation. Content blocks rarely exceed 1200px in width and remain centered through generous side margins.

The pricing page demonstrates a three-tier card grid at desktop widths, with equal-width columns separated by consistent gutters. Cards share the same internal padding and align their headers, pricing blocks, and feature lists to a common baseline. The feature grid in "All Plans Include" uses a three-column layout at full width, collapsing responsively as viewport narrows.

FAQ items arrange in a two-column grid with independent rows per question, maintaining left-aligned chevron icons that signal expandability. The call-to-action banner at page bottom breaks from the grid to become a centered, self-contained panel with rounded corners and subtle shadow elevation.

Vertical rhythm is established through a 0.25rem base unit. Major sections align to multiples of this unit, with 24-unit (6rem) section spacing creating clear demarcation between content areas. Internal card padding uses 8-unit (2rem) spacing, while element-to-element gaps within components settle at 6-unit (1.5rem) intervals.

## Visual language

The visual character is clean, geometric, and intentionally unadorned. Rounded corners appear on cards and panels at 0.75rem, softening the interface without becoming playful. Buttons are fully pill-shaped at 9999px radius, making them immediately identifiable as interactive. No heavy shadows or gradients appear; depth is suggested only through subtle borders and the occasional light surface background.

Iconography is simple and functional: lock, mobile device, people, document, clipboard, and refresh icons accompany feature items in a consistent stroke weight. Checkmarks in pricing cards use filled circles with white check strokes, reinforcing the navy brand color. The external-link icon on the primary action button adds context without clutter.

Photography and illustration are absent from the visible interface; the design relies entirely on typography, iconography, and whitespace to communicate. This editorial restraint supports the product's serious positioning while ensuring fast load times and clear information hierarchy. The orange accent is used sparingly—only for labels, primary buttons, and interactive cues—preventing fatigue and preserving its attention-grabbing power.

## Components

### Pricing Card

The pricing card is the central component of the conversion flow. Each card presents a single plan tier with consistent internal structure.

- **Anatomy**: Plan name (uppercase label style), subtitle description, large price figure with period label below, followed by a vertical feature list with checkmark bullets.
- **Surface**: White background with 1px border in #E2E8F0, 0.75rem border radius.
- **Typography**: Plan name uses section-label token (uppercase, tracked); price uses pricing-amount token at 4rem; features use body token.
- **Shape**: Rectangular with rounded corners, no shadow in default state.
- **Spacing**: 2rem internal padding; price block separated from feature list by approximately 1.5rem.
- **Composition**: Center-aligned text within card; feature list left-aligns with icon-leading bullets.
- **Variants**: Three visible tiers—Startup ($0), Growth ($99), Expansion ($299)—with identical card treatment suggesting plan parity in presentation.

### Primary Action Button

The main conversion button appears in the hero CTA banner and likely persists in navigation.

- **Anatomy**: Text label with optional trailing icon (external-link arrow).
- **Surface**: Solid #F97316 fill, white text.
- **Typography**: navigation token at 0.875rem, weight 600.
- **Shape**: Full pill at 9999px radius.
- **Spacing**: Generous horizontal padding approximately 2rem, vertical padding approximately 0.875rem.
- **Composition**: Centered within its container; icon sits inline with text, slightly right of center.

### Feature Grid Item

Six feature items appear in the "All Plans Include" section, each following an icon-heading-description pattern.

- **Anatomy**: Leading icon, bold feature name, muted description paragraph.
- **Surface**: Transparent; sits on white or light surface background.
- **Typography**: feature-heading token for names, body token for descriptions in muted color.
- **Shape**: No containing border; icon appears as simple line art.
- **Spacing**: Icon to heading gap approximately 0.75rem; heading to description gap approximately 0.5rem.
- **Composition**: Icon and text align to a consistent left edge within each grid cell.

### FAQ Accordion Item

Expandable questions appear in a two-column layout with clear interactive affordance.

- **Anatomy**: Right-pointing chevron icon, bold question text, expandable answer paragraph below.
- **Surface**: Transparent; no visible card container.
- **Typography**: feature-heading token for questions, body token for answers.
- **Shape**: No border; chevron icon implies interaction.
- **Spacing**: Question to answer indentation approximately 1.5rem left offset; vertical item spacing approximately 2rem.
- **Composition**: Two-column grid at desktop; items stack within columns with independent heights.

### Section Header

A recurring pattern across all visible sections.

- **Anatomy**: Uppercase orange label, large navy heading, muted subheading paragraph.
- **Surface**: Transparent or on light surface.
- **Typography**: section-label, section-display, body-large tokens in sequence.
- **Spacing**: Label to heading approximately 0.75rem; heading to subheading approximately 1rem.
- **Composition**: Center-aligned block, maximum width constrained for readability.

## Responsive behavior

The three-tier pricing grid should collapse to a single column on narrow viewports, with cards stacking vertically and maintaining full width. The two-column FAQ grid should similarly narrow to one column, preserving the icon-leading layout. Feature items in the six-item grid should reflow to two columns on tablet and single column on mobile.

Typography should scale down proportionally: hero-display may reduce to 2.5rem on mobile, section-display to 2rem, with pricing-amount maintained at 3rem minimum to preserve visual impact. Section vertical spacing should compress from 6rem to 4rem on smaller screens to maintain density without crowding.

The pill-shaped primary button should remain fully rounded at all widths, with touch targets maintaining at least 44px height. Navigation, if present in a header bar, should collapse to a hamburger menu below tablet breakpoints.

## Practical implementation guidance

### Preserve
- The strict two-color accent system: navy for trust and structure, orange for action only.
- Generous whitespace around sections; the 6rem section spacing is integral to the premium feel.
- Center-aligned section headers with the label-heading-subheading rhythm.
- Pill-shaped primary buttons with inline icons for external actions.
- Consistent card borders and radius across all pricing tiers.

### Avoid
- Adding additional accent colors; the minimal palette is a deliberate strength.
- Heavy shadows or gradients that would contradict the flat, clean aesthetic.
- Left-aligning section headers; the centered composition is a brand signature.
- Using the orange for large text blocks or backgrounds; it should remain an accent.
- Mixing multiple font families; the single-family hierarchy is intentionally restrained.

### Recommended build order
1. Establish the color tokens and apply canvas/ink/muted to a basic page structure.
2. Implement the type scale with Inter, verifying weights 400, 500, 600, 700.
3. Build the section header component with its three-part label-heading-subheading structure.
4. Create the pricing card with internal spacing, border, and feature list alignment.
5. Add the primary action button with full pill radius and icon support.
6. Compose the pricing grid and feature grid layouts.
7. Implement FAQ items with chevron indicators and two-column responsive behavior.
8. Polish with spacing tokens and verify vertical rhythm across all sections.

### Accessibility
- Ensure navy ink (#1E3A5F) on white meets WCAG AA contrast (it should exceed 4.5:1).
- Verify orange action buttons have sufficient contrast; consider darkening to #EA580C if needed for 3:1 against white text.
- Add visible focus states to all interactive elements, likely a 2px outline offset in navy.
- Make FAQ chevrons keyboard-accessible with aria-expanded states.
- Maintain logical heading order: h1 for hero, h2 for sections, h3 for card titles and questions.

## Scope note

This guide covers the pricing page and visible homepage sections of I'mBoard as represented in the supplied images. Navigation, footer, mobile breakpoints, form states, animation, and dark mode are not included. Measurements are practical adaptation targets derived from visual inspection against a 4px base unit.
