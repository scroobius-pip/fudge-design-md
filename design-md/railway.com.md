# How railway.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/railway.com-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ accordion section with purple plus icons on dark navy background, showing expanded pricing question with muted body text](https://pin.fontofweb.com/5645?format=jpg)](https://design.withfudge.com/share/pin-5645)

[FAQ accordion section with purple plus icons on dark navy background, showing expanded pricing question with muted body text](https://design.withfudge.com/share/pin-5645)

[![Hero section with bold white headline, purple gradient CTA button, and dark card form with file upload dropzone](https://pin.fontofweb.com/5644?format=jpg)](https://design.withfudge.com/share/pin-5644)

[Hero section with bold white headline, purple gradient CTA button, and dark card form with file upload dropzone](https://design.withfudge.com/share/pin-5644)

[![Feature unlock cards with line icons, tiered pricing amounts, and subtle surface borders on dark background](https://pin.fontofweb.com/5643?format=jpg)](https://design.withfudge.com/share/pin-5643)

[Feature unlock cards with line icons, tiered pricing amounts, and subtle surface borders on dark background](https://design.withfudge.com/share/pin-5643)

[![Four-column pricing comparison table with purple and blue action buttons and horizontal divider rules](https://pin.fontofweb.com/5642?format=jpg)](https://design.withfudge.com/share/pin-5642)

[Four-column pricing comparison table with purple and blue action buttons and horizontal divider rules](https://design.withfudge.com/share/pin-5642)

## Overview

Railway presents a dark-mode SaaS interface built for cloud infrastructure decision-making. The visual system centers on a deep navy canvas that reduces eye strain during technical evaluation, punctuated by vibrant purple gradient accents that guide users toward conversion actions. The interface balances density with clarity—pricing tables, feature comparisons, and FAQ sections all share a consistent spatial rhythm that keeps complex information scannable.

The design language speaks to engineering audiences through restrained typography, monospace touches for technical values, and a color logic where purple signals primary action, blue offers secondary paths, and subtle surface layers create hierarchy without visual noise. Every interactive element receives deliberate surface treatment: cards float above the canvas with thin borders, inputs sink into elevated dark wells, and buttons carry gradient warmth against the cool background. The overall impression is of a tool that respects technical users' time while still making infrastructure costs feel approachable.

## Colors

| token | value | use |
|---|---|---|
| canvas | `#0B0D17` | Page background, deepest layer |
| surface | `#151725` | Cards, panels, secondary containers |
| surface-elevated | `#1E2130` | Input fields, dropdown wells, hover states |
| ink | `#F7F8FA` | Primary text, headings, active labels |
| ink-muted | `#9BA3B4` | Body copy, descriptions, placeholder text |
| action-primary | `#7C3AED` | Primary buttons, active icons, focus rings |
| action-primary-hover | `#8B5CF6` | Button hover states, gradient endpoints |
| action-secondary | `#3B82F6` | Secondary buttons, alternative CTAs |
| border-subtle | `#2A2F45` | Card borders, dividers, accordion rules |
| border-focus | `#7C3AED` | Focus outlines, active accordion indicators |

The color system operates on a dark-mode-first principle. The canvas at `#0B0D17` establishes a near-black navy that avoids pure black's harshness. Surface layers step up in lightness through `#151725` and `#1E2130`, creating depth through elevation rather than shadow. Text maintains high contrast: near-white ink for critical information, desaturated blue-gray for supporting content.

Purple dominates the action layer, appearing in gradient buttons, accordion expand icons, and focus states. Blue serves as a secondary action color, notably in the "Deploy with Hobby" tier button. The border system stays deliberately subtle—`#2A2F45` provides just enough separation between surfaces without introducing visual weight.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1.1 | -0.02em | Page headlines, hero statements |
| section-display | Inter | 2rem | 600 | 1.2 | -0.01em | Section headings, pricing titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, FAQ answers |
| body-medium | Inter | 1rem | 500 | 1.5 | 0 | Accordion questions, emphasized body |
| label | Inter | 0.875rem | 500 | 1.4 | 0.01em | Buttons, form labels, navigation |
| caption | Inter | 0.75rem | 400 | 1.5 | 0.01em | Fine print, metadata, helper text |
| mono | JetBrains Mono | 0.875rem | 400 | 1.5 | 0 | Technical values, code references |

The type system relies on Inter as the sole sans-serif workhorse, with weights from Regular through Bold creating hierarchy without family switching. Display sizes use tight tracking and leading to feel contemporary and confident. Body text opens up to 1.6 line height for readability in longer FAQ passages.

JetBrains Mono appears selectively for technical content—pricing values, resource limits, and infrastructure specifications. The monospace family carries the same visual weight as Inter Regular, ensuring mixed content feels balanced.

IBM Plex Serif and Inter Tight are available in the font stack but do not appear in the visible interface. Verify licensing for these families before production use.

## Layout

The layout follows a centered content model with generous horizontal breathing room. Maximum content width appears to cap around 1200px, with pricing tables and feature grids expanding to use available space within that constraint.

Vertical rhythm separates major sections with 6rem gaps, while internal component spacing uses 1.5rem as the standard content gap. Cards and panels receive 1.5rem internal padding, creating consistent touch targets and readable text measure.

The pricing comparison table in pin 5642 demonstrates a four-column grid where plan headers align above scrollable feature rows. Each column maintains equal width, with text centered in header cells and left-aligned in body rows. Horizontal rules at `#2A2F45` separate feature categories without vertical dividers between plans.

The hero section in pin 5644 splits asymmetrically: persuasive copy occupies the left roughly 45%, while a dark card form anchors the right at approximately 50% width. This imbalance creates visual tension that draws the eye toward the conversion form.

Feature cards in pin 5643 stack vertically with 1rem gaps, each card presenting an icon, title, description, and price in a horizontal flex layout. The price right-aligns while description text wraps within a constrained middle column.

## Visual language

The visual language communicates technical credibility through restraint and precision. Surfaces are flat—no drop shadows appear in the interface. Depth comes solely from layered background colors and thin 1px borders. This flatness suits the engineering audience, suggesting transparency rather than marketing gloss.

Icons appear as simple line drawings in muted tones, sitting in 40px square containers within feature cards. The accordion uses a plus-to-minus transformation indicator in purple, providing the sole color accent in an otherwise monochrome interaction pattern.

Gradients appear sparingly and purposefully: the primary CTA button in pin 5644 carries a horizontal purple gradient from `#7C3AED` toward `#8B5CF6`, adding dimension to the most important action. This gradient treatment does not extend to secondary buttons or surface elements, maintaining its special status.

The overall aesthetic sits between enterprise software and developer tooling—polished enough for commercial trust, utilitarian enough for technical evaluation. Photography and illustration are absent; the interface relies on typography, spacing, and color to carry meaning.

## Components

### Primary Action Button

- **Anatomy**: Text label centered within a rounded rectangle
- **Surface**: Horizontal gradient from `action-primary` to `action-primary-hover`
- **Typography**: `label` token, white ink
- **Shape**: `rounded.button` (0.5rem)
- **Spacing**: 0.875rem vertical padding, 1.5rem horizontal padding
- **Composition**: Full-width within form containers, auto-width in table headers
- **Variants**: "Unlock my savings" in hero form; "Deploy Now" in pricing header

### Secondary Action Button

- **Anatomy**: Text label within solid fill rectangle
- **Surface**: Solid `action-secondary` background
- **Typography**: `label` token, white ink
- **Shape**: `rounded.button`
- **Spacing**: Matches primary button padding
- **Variants**: "Deploy with Hobby" in pricing tier column

### Feature Card

- **Anatomy**: Line icon, title, description paragraph, price amount
- **Surface**: `surface` background with `border-subtle` 1px border
- **Typography**: Title uses `body-medium`, description uses `body` in `ink-muted`, price uses `section-display` at smaller scale
- **Shape**: `rounded.card`
- **Spacing**: 1.5rem padding, icon sits in 40px implicit square
- **Composition**: Horizontal flex with icon left, text center, price right-aligned

### Accordion Item

- **Anatomy**: Expand icon (plus/minus), question text, expandable answer region
- **Surface**: Transparent background, `border-subtle` bottom border
- **Typography**: Question uses `body-medium` in `ink`; answer uses `body` in `ink-muted`
- **Spacing**: 1.25rem vertical padding per item
- **States**: Collapsed shows plus icon in `action-primary`; expanded shows minus icon, answer text revealed below with 1rem top spacing

### Input Field

- **Anatomy**: Label text above, text entry region below
- **Surface**: `surface-elevated` background, `border-subtle` border
- **Typography**: Label uses `label`, placeholder uses `body` in muted tone
- **Shape**: `rounded.input`
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding
- **Variants**: Text input, dropdown select, file upload dropzone with dashed border and centered icon

### Pricing Comparison Table

- **Anatomy**: Plan headers with tier name and CTA button, feature rows with category labels
- **Surface**: Transparent background, horizontal rules between rows
- **Typography**: Plan names use `body-medium`, feature names use `body`, values use `body` centered
- **Composition**: Four equal columns, header cells centered, body cells center-aligned for values
- **Spacing**: 1.25rem row height, 2rem section breaks between categories

## Responsive behavior

The four-column pricing table should collapse to a horizontal scroll container on viewports below 768px, preserving column alignment while avoiding cramped text. Alternatively, a stacked card view per plan may replace the table on narrow screens.

The hero section's asymmetric split should stack vertically on mobile, with the headline and value proposition preceding the form card. The form itself should remain full-width within its container, maintaining touch-friendly input heights.

Accordion items should remain full-width across all breakpoints, with answer text reflowing naturally. Feature cards may stack to single-column with prices moving below descriptions rather than right-aligned.

## Practical implementation guidance

### Preserve
- The dark canvas as default—do not implement a light mode without full color system redesign
- Purple gradient on primary CTAs only; reserve this treatment for single actions per view
- Monospace for technical values and pricing amounts to maintain engineering credibility
- Subtle borders over shadows for all surface separation
- Generous section spacing that lets dense information breathe

### Avoid
- Pure black backgrounds that eliminate the navy warmth
- Multiple gradient colors beyond the purple family
- Shadows or elevation effects—the flat layering is intentional
- Serif fonts for body or display text in this interface context
- Center-aligned body text outside of hero headlines

### Recommended Build Order
1. Establish canvas and surface color tokens with border system
2. Implement Inter type scale with display, body, and label roles
3. Build primary and secondary button components with exact padding and radius
4. Create card container with border and padding specifications
5. Construct form inputs with elevated surface treatment
6. Develop accordion pattern with icon state transitions
7. Assemble pricing table with responsive column behavior
8. Add JetBrains Mono for technical content areas

### Accessibility
- Maintain 4.5:1 contrast minimum for all `ink-muted` text against canvas and surface backgrounds
- Ensure focus rings use `border-focus` at 2px width with 2px offset for keyboard navigation
- Provide visible focus states on all interactive elements, particularly the subtle-bordered inputs
- Consider adding `prefers-reduced-motion` support for accordion expand/collapse animations
- Label icon-only buttons with aria-label text when they appear outside of text contexts

## Scope note

This guide covers the pricing page and homepage hero surfaces visible in the supplied images. Navigation, footer, dashboard interfaces, and mobile breakpoint layouts are not represented. Motion, loading states, and error handling are not documented. Measurements are practical adaptation targets derived from visual estimation against a 4px relative unit grid.
