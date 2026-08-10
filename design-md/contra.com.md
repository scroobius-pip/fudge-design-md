# How contra.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/contra.com-design)

Last updated: 2026-08-10

## Captured pages

[![Vertical navigation sidebar with workspace switcher, icon-based menu items, and promotional footer card on light background](https://pin.fontofweb.com/5140?format=jpg)](https://design.withfudge.com/share/pin-5140)

[Vertical navigation sidebar with workspace switcher, icon-based menu items, and promotional footer card on light background](https://design.withfudge.com/share/pin-5140)

[![Rounded content creation input with avatar, media attachment icons, tag button, and dark pill-shaped Post action](https://pin.fontofweb.com/5139?format=jpg)](https://design.withfudge.com/share/pin-5139)

[Rounded content creation input with avatar, media attachment icons, tag button, and dark pill-shaped Post action](https://design.withfudge.com/share/pin-5139)

[![Pricing page with two plan cards, toggle switch, feature lists, and dark primary upgrade button with Pro badge](https://pin.fontofweb.com/5138?format=jpg)](https://design.withfudge.com/share/pin-5138)

[Pricing page with two plan cards, toggle switch, feature lists, and dark primary upgrade button with Pro badge](https://design.withfudge.com/share/pin-5138)

[![Split authentication screen with verification code entry, success indicator, testimonial quote, and trusted-by logo grid](https://pin.fontofweb.com/5137?format=jpg)](https://design.withfudge.com/share/pin-5137)

[Split authentication screen with verification code entry, success indicator, testimonial quote, and trusted-by logo grid](https://design.withfudge.com/share/pin-5137)

## Overview

Contra presents a clean, professional interface designed for independent workers and small teams managing projects, clients, and payments. The visual system prioritizes clarity and approachability through generous whitespace, rounded corners on all interactive elements, and a restrained palette that keeps attention on content and conversion actions. The interface balances productivity features—navigation, content creation, plan selection—with trust-building elements like testimonials and security indicators. Every surface feels intentionally lightweight, with soft shadows and subtle borders creating depth without heaviness. The design language speaks to creative professionals through its polished simplicity rather than decorative flourishes, making complex workflows feel manageable.

## Colors

The color system is intentionally minimal, relying on a near-black ink against white and light gray surfaces, with a single purple accent for interactive emphasis. This restraint allows user-generated content and brand photography to carry visual interest.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active navigation, headings, logo |
| muted-ink | #6B7280 | Secondary text, inactive navigation, placeholders, metadata |
| canvas | #F3F4F6 | Page backgrounds, secondary button fills, subtle surface differentiation |
| surface | #FFFFFF | Cards, inputs, sidebar, elevated panels |
| action | #1F2937 | Primary buttons, dark emphasis surfaces |
| action-hover | #374151 | Button hover states, dark surface variation |
| accent | #8B5CF6 | Toggle active state, promotional highlights, link emphasis |
| border | #E5E7EB | Card borders, input borders, dividers, subtle separators |
| success | #10B981 | Verification indicators, confirmation states |

The interface operates in a light mode throughout. Dark surfaces appear only on primary action buttons and badges, creating strong contrast for conversion moments. The accent purple appears sparingly—primarily in the plan toggle and promotional elements—preventing it from overwhelming the professional tone. Borders are consistently light gray, functioning as optical hairlines that define structure without adding visual weight. Success green appears only in functional contexts like verification flows.

## Typography

The type system uses a single variable font family across all roles, with weight and size variations establishing hierarchy. Display sizes are tight and confident, while body sizes maintain generous leading for readability.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gt Standard Vf-S Black | 2rem | 700 | 1.2 | -0.02em | Page titles, authentication headers |
| section-display | Gt Standard Vf-S Black | 1.5rem | 600 | 1.25 | -0.01em | Card titles, plan names |
| body | Gt Standard Vf-S Black | 1rem | 400 | 1.5 | 0em | Feature lists, descriptions, paragraphs |
| body-small | Gt Standard Vf-S Black | 0.875rem | 400 | 1.5 | 0em | Metadata, pricing details, captions |
| label | Gt Standard Vf-S Black | 0.75rem | 500 | 1.4 | 0.01em | Buttons, badges, tags |
| navigation | Gt Standard Vf-S Black | 0.875rem | 500 | 1.4 | 0em | Sidebar menu items, top-level links |

Gt Standard Vf-S Black is designed by Grilli Type and distributed by Grilli Type Ag. Verify licensing for these families before production use.

The type scale uses a 4px base grid, with sizes stepping in whole multiples: 12px (label), 14px (navigation, body-small), 16px (body), 24px (section-display), and 32px (hero-display). Display sizes employ negative tracking for a tighter, more intentional feel, while body and label sizes use neutral or slightly positive tracking for readability. Weight distinctions are clear: Regular for body text, Medium for navigation and labels, Semibold for section headings, and Bold for hero displays.

## Layout

The layout system follows a sidebar-plus-content pattern for authenticated views, and centered single-column or split patterns for marketing and authentication pages.

The navigation sidebar occupies a fixed width of approximately 16rem, containing the logo, workspace switcher, primary navigation items, and a promotional footer card. Content areas flow with generous padding, typically 1.5rem to 2rem from edges. Cards and panels use consistent internal padding of 1.5rem, creating breathable containers that don't feel cramped.

On the pricing page, content centers with a maximum width constraint, presenting two plan cards side by side with equal width distribution. The authentication page uses a split layout: functional forms on the left, social proof on the right, each occupying roughly half the viewport width.

Spacing between major sections uses 4rem, while related components group at 1rem intervals. The base unit of 0.25rem allows fine-grained adjustments for icon alignment and tight component internals. Cards and elevated surfaces receive subtle shadow treatment—soft, diffuse, and close to the surface rather than dramatic drop shadows.

## Visual language

The visual character is friendly-professional: approachable through rounded corners and soft shadows, credible through typographic restraint and generous whitespace. Every interactive element uses pill or rounded-rectangle shapes—no sharp corners on buttons, inputs, or cards. This creates a cohesive, soft-edged aesthetic that feels modern without trending toward excessive minimalism.

Avatars appear circular with consistent sizing, typically 2.5rem for navigation contexts and 3rem for testimonial attribution. Icons are simple line weights, matching the muted ink color for inactive states and transitioning to full ink for active states. The workspace switcher and content creation input both demonstrate the system's emphasis on rounded containers with subtle borders and soft shadows.

Photography and user-generated imagery integrate naturally against the light canvas, with no heavy treatments or overlays. The testimonial section uses a soft gradient background—lavender to mint—creating atmospheric depth without competing with foreground content. Logo grids for social proof use monochrome or original brand colors, presented at consistent heights with generous spacing.

## Components

### Navigation sidebar

**Anatomy:** Vertical stack containing logo mark, workspace switcher card, primary navigation list, and promotional footer card.

**Surface:** White background with light right border separating from content area.

**Typography:** Navigation items use medium weight at 0.875rem; active item switches to ink color while inactive items remain muted-ink.

**Shape:** Full-height rectangle. Workspace switcher and footer card use 0.75rem radius.

**Spacing:** 1rem padding around outer edge. Navigation items spaced at 0.25rem vertical intervals with 0.5rem horizontal padding.

**Composition:** Icon precedes label with 0.75rem gap. Active indicator is color change only, no background fill.

### Content creation input

**Anatomy:** Rounded container with user avatar, placeholder prompt text, media attachment row, tag button, and primary action button.

**Surface:** White with subtle border and soft shadow.

**Typography:** Placeholder uses muted-ink at body size. Tag button uses muted-ink label style.

**Shape:** 1rem border radius. Post button uses full pill shape.

**Spacing:** 1rem internal padding. Attachment icons grouped with 1rem gap, separated from tag button by vertical divider.

**Composition:** Avatar left-aligned with text field. Action buttons bottom-aligned with Post button positioned right.

### Plan card

**Anatomy:** Header with plan name and description, pricing block, action button, and feature list with checkmarks.

**Surface:** White with light border. Pro card includes decorative avatar in header.

**Typography:** Plan name uses section-display. Price uses hero-display for dollar amount with body-small for period. Features use body size.

**Shape:** 1rem border radius.

**Spacing:** 1.5rem internal padding. Feature list separated from header by horizontal divider with 1.5rem vertical space.

**Variants:** Free plan uses secondary button style. Pro plan uses dark primary button with embedded Pro badge.

### Toggle switch

**Anatomy:** Pill-shaped track with circular thumb, Monthly and Yearly labels.

**Surface:** Active track uses accent purple; inactive track uses border gray. Thumb is white.

**Shape:** Full pill track with circular thumb.

**Composition:** Labels positioned left and right of track. Track width approximately 3rem, height 1.5rem.

### Verification input

**Anatomy:** Six-character code entry with individual slot styling, success indicator below, and resend link.

**Surface:** Input uses white with light border. Success state adds green checkmark with confirmation text.

**Typography:** Code characters use body size centered in slots. Success text uses body-small.

**Shape:** Rounded rectangle for input container, individual slots separated by spacing.

**Composition:** Centered alignment with email address displayed above input. Cloudflare verification badge positioned below with left-aligned layout.

### Testimonial card

**Anatomy:** Quotation mark, testimonial text, avatar with name and title, pagination dots, trusted-by logo grid.

**Surface:** Soft gradient background from lavender to mint, creating atmospheric depth.

**Typography:** Quote uses body size with slightly increased leading. Attribution uses body-small with name in medium weight.

**Shape:** Full panel with 1rem radius.

**Spacing:** 1.5rem padding. Logo grid separated by horizontal rule with generous vertical spacing.

## Responsive behavior

The sidebar navigation should collapse to a top bar or icon-only rail on viewports below approximately 1024px, with workspace switching and promotional content moving to dropdown menus or bottom sheets. Plan cards should stack vertically on narrow viewports, maintaining full width with consistent internal spacing. The authentication split layout should transition to single-column, with testimonial content either hidden or repositioned below the form. Content creation inputs should remain full-width with attachment icons wrapping to multiple rows if necessary. Touch targets should maintain minimum 44px height for all interactive elements.

## Practical implementation guidance

### Preserve
- The consistent pill-shaped buttons and rounded card corners throughout; this is the system's most distinctive visual trait.
- The generous whitespace around cards and between sections; the interface feels premium partly through breathing room.
- The single font family with weight-based hierarchy; adding secondary fonts would dilute the clean aesthetic.
- The muted-ink to ink color progression for inactive-to-active states in navigation.

### Avoid
- Sharp corners on any interactive element; they break the system's cohesive softness.
- Dark backgrounds as primary surfaces; the light canvas is foundational to the brand feel.
- Multiple accent colors; the purple accent gains impact through scarcity.
- Heavy shadows or borders; keep elevation subtle and borders hairline-thin.

### Recommended build order
1. Establish the type scale with Gt Standard Vf-S Black at all six sizes, verifying rendering at each weight.
2. Implement the color tokens and test contrast ratios, particularly for muted-ink on canvas and surface backgrounds.
3. Build the navigation sidebar as the primary layout scaffold, ensuring correct spacing and active states.
4. Create the card component with consistent padding, radius, and border treatment.
5. Implement button variants with pill shapes and proper hover states.
6. Add form inputs and the content creation component.
7. Build plan cards and toggle switch for conversion surfaces.
8. Polish with shadows, transitions, and responsive adaptations.

### Accessibility
- Ensure all text meets WCAG AA contrast ratios; muted-ink on white may need adjustment for small text.
- Provide visible focus indicators on all interactive elements, using ink or accent color outlines.
- Add aria-labels to icon-only buttons in the content creation toolbar.
- Make the toggle switch keyboard operable with clear state announcement.
- Consider reduced-motion preferences for any animated transitions.

## Scope note

This guide covers the authenticated navigation, content creation, plan selection, and authentication surfaces visible in the supplied images. Mobile layouts, dark mode, loading states, error handling, and notification systems are not represented. Measurements are practical adaptation targets derived from visual inspection.
