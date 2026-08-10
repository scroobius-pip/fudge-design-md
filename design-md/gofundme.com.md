# How gofundme.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gofundme.com-design)

Last updated: 2026-08-10

## Captured pages

[![Browse fundraisers by category page with dark green pill button and grid of outlined category icons on white background](https://pin.fontofweb.com/4784?format=jpg)](https://design.withfudge.com/share/pin-4784)

[Browse fundraisers by category page with dark green pill button and grid of outlined category icons on white background](https://design.withfudge.com/share/pin-4784)

[![Fundraiser creation flow with split-panel layout, gray sidebar with green logo, and white form area with category chip buttons](https://pin.fontofweb.com/4783?format=jpg)](https://design.withfudge.com/share/pin-4783)

[Fundraiser creation flow with split-panel layout, gray sidebar with green logo, and white form area with category chip buttons](https://design.withfudge.com/share/pin-4783)

[![Sign-in modal with centered white card, green GoFundMe wordmark, social login buttons, and dark green primary Continue button](https://pin.fontofweb.com/4782?format=jpg)](https://design.withfudge.com/share/pin-4782)

[Sign-in modal with centered white card, green GoFundMe wordmark, social login buttons, and dark green primary Continue button](https://design.withfudge.com/share/pin-4782)

[![Top crowdfunding tips section with three warm cream-colored cards containing circular yellow icons and arrow links](https://pin.fontofweb.com/4781?format=jpg)](https://design.withfudge.com/share/pin-4781)

[Top crowdfunding tips section with three warm cream-colored cards containing circular yellow icons and arrow links](https://design.withfudge.com/share/pin-4781)

## Overview

GoFundMe presents a warm, trustworthy visual system built around nature-inspired greens and approachable rounded forms. The platform balances emotional resonance with functional clarity, using generous whitespace and card-based organization to guide users through fundraising creation, discovery, and authentication. The design language emphasizes accessibility and human connection through its friendly typography, soft geometric shapes, and restrained use of accent colors. Every element serves to reduce friction in the giving and fundraising journey while maintaining visual warmth that distinguishes the platform from colder financial or transactional interfaces.

The system operates across multiple contexts: a marketing homepage with persuasive content sections, a category discovery grid for browsing causes, a multi-step fundraiser creation flow with form inputs and selectable chips, and authentication modals with social login options. Each context maintains consistent visual DNA through the green action color, rounded pill buttons, and the custom Go Fund Me Sans typeface. The warm cream accent surfaces appear selectively in educational content areas, creating visual hierarchy without disrupting the clean white-dominant canvas.

## Colors

| token | value | use |
|---|---|---|
| action | #02A95C | Primary buttons, logo wordmark, active states, success indicators |
| action-hover | #028A4D | Darker green for button hover states and emphasis |
| ink | #1A1A1A | Primary text, headings, icon outlines |
| muted-ink | #6A6A6A | Secondary text, descriptions, placeholders, footer copy |
| canvas | #FFFFFF | Page backgrounds, card surfaces, input fields |
| surface | #F5F5F5 | Category card backgrounds, subtle section alternation |
| surface-warm | #FFF8E7 | Educational tip cards, featured content highlights |
| accent-yellow | #FFD43B | Circular icons in tip cards, decorative emphasis |
| border | #E0E0E0 | Input borders, chip borders, dividers, subtle separators |

The color system centers on a vibrant green that signals growth, trust, and positive action. This green appears most prominently in the logo wordmark and primary call-to-action buttons, where it draws immediate attention without the urgency of red or the coldness of blue. The dark ink provides strong contrast for readability, while muted-ink handles supporting information at a lower visual weight. The warm cream surface creates an inviting, non-clinical atmosphere for educational content, distinguishing it from the neutral gray surfaces used for structural cards. White canvas dominates, ensuring the platform feels open and breathable. The accent yellow appears sparingly as circular icon backgrounds, adding energy to specific content types without competing with the primary green action color.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Go Fund Me Sans | 3rem | 700 | 1.1 | -0.02em | Page headlines, category browse titles |
| section-display | Go Fund Me Sans | 2rem | 700 | 1.2 | -0.01em | Section headings, modal titles |
| body | Go Fund Me Sans | 1rem | 400 | 1.5 | 0em | Paragraph text, descriptions, form labels |
| body-small | Go Fund Me Sans | 0.875rem | 400 | 1.5 | 0em | Secondary descriptions, helper text |
| label | Go Fund Me Sans | 0.875rem | 600 | 1.4 | 0em | Button text, chip labels, navigation |
| navigation | Go Fund Me Sans | 0.875rem | 600 | 1 | 0em | Top bar links, sign-in trigger |

The type system relies entirely on Go Fund Me Sans, a custom sans-serif family with two weights: Regular (400) and Bold (700). The Bold weight serves all display and heading purposes, while Regular handles body content. The family features slightly rounded terminals that complement the system's soft geometric shapes. Tight negative tracking on display sizes creates compact, impactful headlines, while body text uses neutral tracking for comfortable reading. The 0.875rem size appears frequently as a versatile utility scale for labels, chips, and navigation, creating rhythm through repetition rather than size variation. Verify licensing for these families before production use.

## Layout

The layout system favors centered, contained content with generous breathing room. Marketing pages use full-width sections with internal max-width constraints, typically around 1200px, creating comfortable reading margins on large screens. The category discovery page presents a left-aligned headline block followed by a responsive grid of category cards. The fundraiser creation flow employs a distinctive split-panel layout: a fixed left sidebar occupying roughly 35% of viewport width with a warm gray background and brand messaging, while the right panel contains the active form with white background and scrollable content. Authentication modals center a single card vertically and horizontally against a light gray backdrop with subtle diagonal texture.

Grid systems use consistent gap spacing of 1rem between elements, with section-level padding of 4rem creating clear territorial boundaries between content types. Cards and containers rely on internal padding of 1.5rem to maintain content-to-edge relationships. The category grid arranges items in rows of six on desktop, collapsing responsively while maintaining equal card dimensions. Form layouts stack fields vertically with 1rem gaps, using two-column arrangements for related inputs like country and postal code. Fixed elements include the bottom-right Continue button in multi-step flows, ensuring persistent action availability without scrolling.

## Visual language

The visual language communicates warmth through rounded geometry and organic color, while maintaining trust through clean organization and predictable patterns. Pill-shaped buttons with full border-radius appear throughout, softening the interface and inviting interaction. Icons use consistent 1.5px stroke weight with rounded caps and joins, appearing as outlined illustrations in category cards and solid fills in smaller UI contexts. The green brand mark combines a stylized leaf or sprout icon with the wordmark, reinforcing growth and community themes.

Photography and illustration remain secondary to the UI chrome, with category icons serving as the primary visual interest in discovery contexts. These icons sit within rounded square containers with light gray backgrounds, creating subtle elevation without shadows. The warm cream accent surface appears as a full-bleed card background for educational content, differentiated from neutral gray through its yellow undertone. Decorative elements remain minimal: occasional diagonal background textures in authentication contexts, thin horizontal rules for section separation, and small circular icon containers with solid yellow fills. The overall impression balances professionalism with personality, avoiding both corporate sterility and playful excess.

## Components

**Primary Button**
- Anatomy: Text label centered within a fully rounded pill container
- Surface: Solid action green background with white text
- Typography: label token, semibold weight
- Shape: 9999px border radius, creating perfect pill
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Typically left-aligned in content areas, full-width in mobile contexts, fixed position in multi-step flows
- Variants: Disabled state uses muted background; hover darkens to action-hover

**Secondary Button**
- Anatomy: Text label within outlined pill container
- Surface: White background with border and ink text
- Typography: label token
- Shape: 9999px border radius
- Spacing: Same padding as primary
- Composition: Appears alongside primary or in navigation contexts

**Category Card**
- Anatomy: Rounded square container with centered icon above text label
- Surface: Light gray surface background
- Typography: body-small token for label, centered
- Shape: 1rem border radius
- Spacing: 1.5rem internal padding, generous vertical space between icon and label
- Composition: Grid arrangement with consistent gaps, six per row on desktop
- Variants: Hover state likely adds subtle border or shadow

**Category Chip**
- Anatomy: Text label within compact pill container
- Surface: White with hairline border
- Typography: body-small token
- Shape: 9999px border radius
- Spacing: 0.5rem vertical, 1rem horizontal padding
- Composition: Flowing wrap layout in form contexts, multiple rows with consistent gap

**Tip Card**
- Anatomy: Horizontal card with circular icon, text block, and arrow action
- Surface: Warm cream background
- Typography: label token for heading
- Shape: 1rem border radius
- Spacing: 1.5rem padding, icon circle approximately 2.5rem diameter
- Composition: Three-column grid with equal widths, arrow right-aligned within each card
- Variants: Icon color varies by topic (yellow default)

**Input Field**
- Anatomy: Label text above bordered container with placeholder or value
- Surface: White background with hairline border
- Typography: body token for value, body-small for floating label
- Shape: 0.5rem border radius
- Spacing: 0.75rem vertical, 1rem horizontal internal padding
- Composition: Full-width within form panels, stacked vertically with 1rem gaps
- Variants: Focus state adds green border; error state likely uses red

**Modal Card**
- Anatomy: Centered container with logo, heading, content, and actions
- Surface: White with subtle shadow
- Typography: section-display for welcome heading, body for description
- Shape: 1.5rem border radius
- Spacing: 2rem padding, 1rem gaps between elements
- Composition: Centered alignment, maximum width approximately 400px
- Variants: Social login buttons use outlined style; email input uses standard field

## Responsive behavior

The design adapts primarily through grid reflow and panel stacking. The category discovery grid collapses from six columns to fewer as viewport narrows, maintaining minimum card widths that prevent excessive compression. The fundraiser creation split-panel transitions to stacked layout on smaller screens, with the brand sidebar moving above or below the form content rather than remaining fixed beside it. Modal cards maintain centered positioning with adjusted padding, potentially expanding to near-full-width on mobile devices.

Typography scales down modestly: hero-display may reduce to 2rem on smaller screens while maintaining weight and tracking characteristics. Button padding remains consistent, though full-width treatment becomes standard in narrow viewports. Touch targets maintain minimum 44px height for accessibility. The fixed Continue button in multi-step flows requires safe area consideration for notched devices. Category chips wrap naturally with consistent gap spacing regardless of container width.

## Practical implementation guidance

**Preserve**
- The distinctive pill button shape with full border-radius; this is signature to the brand
- The warm cream surface for educational content, creating emotional differentiation from functional gray
- The custom Go Fund Me Sans family at all weights; substitution would significantly alter brand character
- The consistent 1.5px stroke weight and rounded caps on all outlined icons
- The split-panel layout for creation flows, with brand messaging separated from functional forms

**Avoid**
- Sharp-cornered buttons or cards; they contradict the system's approachable personality
- Pure black text; the slightly softened ink color maintains warmth
- Multiple accent colors competing with the primary green; yellow appears only in icon contexts
- Dense information layouts without adequate section spacing; the system relies on breathing room
- Border-radius inconsistency; maintain 9999px for pills, 1rem for cards, 0.5rem for inputs

**Recommended Build Order**
1. Establish the type scale with Go Fund Me Sans and base spacing unit
2. Implement the green action color system with hover states
3. Build the pill button component as the primary interactive element
4. Create card containers with consistent padding and radius
5. Develop the category grid with icon and label composition
6. Construct form patterns with input fields and chip selections
7. Add the warm cream accent surface for tip cards
8. Implement modal structure with centered positioning and shadow

**Accessibility**
- Ensure green action buttons meet contrast ratios against white; the vibrant green may need darkening for small text
- Maintain visible focus indicators on all interactive elements, likely using the green brand color
- Provide text alternatives for all category icons, as they carry semantic meaning
- Structure the split-panel creation flow with proper heading hierarchy across both panels
- Ensure the fixed Continue button does not obscure essential form content on zoom
- Support keyboard navigation through chip selections with clear focus states

## Scope note

This guide covers the marketing homepage, category discovery, fundraiser creation flow, and authentication modal surfaces visible in the supplied images. Mobile breakpoints, animation, loading states, error handling, and the complete fundraising detail page are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid.
