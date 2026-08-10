# How brevo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/brevo.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero banner with mint-green circuit illustration, dark rounded button, and green text link with arrow](https://pin.fontofweb.com/5144?format=jpg)](https://design.withfudge.com/share/pin-5144)

[Hero banner with mint-green circuit illustration, dark rounded button, and green text link with arrow](https://design.withfudge.com/share/pin-5144)

[![Four-column pricing grid with Starter, Standard, Professional, and Enterprise cards, toggle switch, and feature checklists](https://pin.fontofweb.com/5143?format=jpg)](https://design.withfudge.com/share/pin-5143)

[Four-column pricing grid with Starter, Standard, Professional, and Enterprise cards, toggle switch, and feature checklists](https://design.withfudge.com/share/pin-5143)

[![Plan customization interface with horizontal tier tabs, email volume slider, sales package cards, and right-side summary panel](https://pin.fontofweb.com/5142?format=jpg)](https://design.withfudge.com/share/pin-5142)

[Plan customization interface with horizontal tier tabs, email volume slider, sales package cards, and right-side summary panel](https://design.withfudge.com/share/pin-5142)

[![Standard plan customization view with green active tab, slider at 10,000 emails, marketing seats stepper, and sign-up button](https://pin.fontofweb.com/5141?format=jpg)](https://design.withfudge.com/share/pin-5141)

[Standard plan customization view with green active tab, slider at 10,000 emails, marketing seats stepper, and sign-up button](https://design.withfudge.com/share/pin-5141)

## Overview

Brevo's pricing interface presents a conversion-optimized experience built on a restrained two-family typographic system and a distinctive mint-green accent palette. The visual language balances warmth and precision: near-black surfaces anchor primary actions, while pale green tints create approachable highlights and selection states. The page structure moves visitors through a tiered overview into an interactive customization flow, with clear hierarchy established through scale contrast between Tomato Grotesk display type and Inter's functional body text. Geometric line illustrations in the hero area introduce a technical yet friendly character, reinforcing the product's automation and connectivity positioning without visual noise.

## Colors

The color system operates in three functional layers: a warm neutral foundation, a single green accent family, and high-contrast action surfaces.

| token | value | use |
|---|---|---|
| ink | #1A1A1A | Primary text, headings, pricing numerals, primary button backgrounds |
| canvas | #FFFFFF | Page background, card surfaces, toggle thumb, button text on dark |
| surface | #F6F6F6 | Inactive tab backgrounds, subtle section alternation |
| action | #1A1A1A | Primary button fill, high-priority interactive surfaces |
| action-text | #FFFFFF | Text on primary buttons and dark surfaces |
| accent | #2D8A5E | Active states, selected tier indicators, checkmark icons, slider fill, text links |
| accent-muted | #C8F5C8 | Active tab background, highlighted selection pills, circuit illustration fills |
| accent-pale | #E8F8E8 | Hero banner background, subtle green-tinted container surfaces |
| border | #E5E5E5 | Card outlines, divider lines, inactive toggle track |
| border-strong | #D4D4D4 | Stepper controls, stronger structural boundaries |
| muted-ink | #6B6B6B | Secondary descriptions, feature subtext, pricing period labels |

The green accent family derives from the circuit illustration and active selection states visible across the interface. The near-black ink avoids pure #000000, lending warmth that pairs with the mint tones. Light mode dominates all visible surfaces; no dark mode is present in the supplied material. Photography does not appear in this interface, so image-palette values serve only to describe the decorative illustration's color character.

## Typography

Two families divide communicative and functional roles. Tomato Grotesk carries display and pricing weight with geometric confidence; Inter handles body text, labels, and navigation with neutral clarity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Tomato Grotesk | 2rem | 500 | 1.1 | -0.02em | Hero headlines, major section titles |
| section-display | Tomato Grotesk | 1.5rem | 500 | 1.2 | -0.01em | Card headings, tier names, plan titles |
| price-display | Tomato Grotesk | 2.5rem | 500 | 1 | -0.02em | Dollar amounts, custom price callouts |
| body | Inter | 1rem | 400 | 1.5 | 0em | Descriptions, feature lists, explanations |
| body-medium | Inter | 1rem | 500 | 1.5 | 0em | Emphasized body, summary line items |
| label | Inter | 0.875rem | 500 | 1.4 | 0em | Buttons, tabs, navigation, small headings |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0em | Currency selector, utility links |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0em | Fine print, disclaimers, seat pricing notes |

Tomato Grotesk appears in Medium weight only in the supplied material. Inter spans Regular and Medium weights with no Bold visible in body contexts; the Bold source is available but not confirmed in use here. All type sizes are whole-number multiples of 4px (0.25rem), producing a clean stepped scale from 12px legal copy through 16px body to 24px section display and 40px price display.

Inter is designed by Rasmus Andersson, available from Rsms. Tomato Grotesk is designed by Andrea Biggio, available from The Designers Foundry. Verify licensing for these families before production use.

## Layout

The pricing page employs a centered single-column flow that expands into split-panel and multi-column arrangements at wider viewports.

The hero banner spans full width with generous internal padding, placing text and primary action on the left and the circuit illustration on the right. Below, the tier overview presents four equal-width pricing cards in a horizontal row, each maintaining consistent internal structure: tier name, description, price block, action button, and feature list. A toggle switch for monthly/yearly billing sits above this grid, right-aligned with a currency selector.

The customization interface shifts to a two-panel layout. The left panel occupies roughly two-thirds width and contains horizontal tier tabs, an interactive slider for email volume, and expandable feature categories with nested sales package cards. The right panel provides a fixed summary of the selected configuration with line-item pricing and a prominent conversion button.

Vertical rhythm relies on 1.5rem content gaps between major elements, with 4rem section spacing creating clear boundaries between the hero, tier overview, and customization areas. Card internal padding holds at 1.5rem, producing breathable containers without excessive whitespace. The tier tabs and sales package cards share rounded-corner vocabulary but at different scales, creating nested visual hierarchy.

## Visual language

The interface communicates through geometric precision and restrained warmth. Rounded corners appear universally but with intentional variation: 1.5rem for major panel containers, 1rem for cards, 0.75rem for buttons, and full pills for tabs and toggles. This graduated rounding prevents monotony while maintaining family resemblance.

The circuit illustration in the hero establishes a distinctive visual motif: thin green lines connecting nodes, with mint-green fills on terminal elements and a clock icon at center. This graphic avoids photographic complexity, instead using flat color and stroke weight to suggest automation flow and timing. The same green appears in checkmark icons, slider progress bars, and active tab fills, creating coherent accent distribution.

Shadow is minimal or absent; depth derives from border definition and background color contrast. The near-black buttons against white cards create the strongest dimensional signal. The toggle switch uses a simple track-and-thumb pattern with no shadow, relying on color change alone for state communication.

## Components

### Primary button

- **Anatomy**: Rounded rectangle containing centered label text
- **Surface**: Solid near-black fill (#1A1A1A) with white text
- **Typography**: Inter Medium at 0.875rem
- **Shape**: 0.75rem border radius
- **Spacing**: 0.875rem vertical padding, 1.5rem horizontal padding
- **Composition**: Full-width within card containers; centered in summary panel
- **Variants**: "Sign up" and "Talk to sales" labels visible; identical styling regardless of label

### Secondary text link

- **Anatomy**: Underlined text with rightward arrow icon
- **Surface**: Transparent background
- **Typography**: Inter Medium at 0.875rem in accent green (#2D8A5E)
- **Shape**: No bounding box; text underline provides boundary
- **Spacing**: Inline with surrounding content
- **Composition**: Appears after primary buttons and within feature lists
- **Variants**: "See all features" and "See pricing table" with external-link icon

### Pricing card

- **Anatomy**: Vertical stack containing tier name, description, price, button, and feature list
- **Surface**: White background with 1px #E5E5E5 border
- **Shape**: 1rem border radius
- **Spacing**: 1.5rem internal padding; 1.5rem gap between price and button
- **Composition**: Equal-width columns in four-column grid; "Most Popular" badge overlays top edge of Standard card with green background
- **Variants**: Standard card receives green top border or full green outline to indicate recommendation

### Tier tab

- **Anatomy**: Pill-shaped button containing tier name
- **Surface**: #F6F6F6 inactive; #C8F5C8 active with #2D8A5E text
- **Typography**: Inter Medium at 0.875rem
- **Shape**: Full pill (9999px radius)
- **Spacing**: 0.75rem vertical, 1.5rem horizontal padding
- **Composition**: Horizontal row of five tabs (Free, Starter, Standard, Professional, Enterprise) with 0.5rem gap
- **States**: Active tab receives green tint fill; inactive tabs show neutral gray

### Feature list item

- **Anatomy**: Horizontal row with checkmark icon, feature text, and optional info icon
- **Surface**: Transparent; no individual background
- **Typography**: Inter Regular at 1rem for text; Inter Medium at 0.875rem for category headers
- **Composition**: Left-aligned checkmark with 0.75rem text gap; info icons right-aligned in some lists
- **Variants**: Standard checkmark in accent green; diamond icon for AI-powered features; plus icon for add-on features

### Toggle switch

- **Anatomy**: Horizontal track with circular thumb, accompanied by text labels
- **Surface**: #D4D4D4 track inactive; #2D8A5E track active; white thumb
- **Shape**: Full pill track; circular thumb
- **Composition**: Centered above pricing grid for monthly/yearly selection; right-aligned in sales packages section
- **States**: Left position for monthly, right position for yearly with discount callout

### Stepper control

- **Anatomy**: Horizontal arrangement of minus button, numeric value, plus button
- **Surface**: Transparent with #D4D4D4 borders on buttons
- **Typography**: Inter Medium at 1rem for value
- **Shape**: 0.5rem radius on individual buttons
- **Composition**: Right-aligned within feature rows; controls marketing seats and sales seats

### Slider

- **Anatomy**: Horizontal track with draggable thumb and value labels below
- **Surface**: #C8F5C8 fill for progress portion; #E5E5E5 for remainder; green thumb
- **Shape**: 0.5rem track height; circular thumb
- **Composition**: Full width within left panel; logarithmic or stepped scale from 5,000 to 10 million emails

### Sales package card

- **Anatomy**: Bordered container with header, feature grid, link, and seat stepper
- **Surface**: White with #E5E5E5 border; radio button in upper right
- **Shape**: 1rem border radius
- **Spacing**: 1.5rem padding; two-column feature grid with 1rem gap
- **Composition**: Two cards side by side within left panel; selectable via radio button

## Responsive behavior

The four-column pricing grid should collapse to two columns on medium viewports and single column on narrow screens, maintaining card internal structure. The customization interface's two-panel layout should stack vertically on smaller screens, with the summary panel moving below the configuration controls. The hero illustration should scale down or hide on narrow viewports to preserve text readability. Tier tabs should remain horizontally scrollable rather than wrapping, preventing vertical expansion that would push content below the fold. Touch targets for stepper buttons and slider thumb should maintain minimum 44px tap area.

## Practical implementation guidance

### Preserve
- The graduated rounding system: 1.5rem panels, 1rem cards, 0.75rem buttons, pills for tabs
- The two-family typographic split: Tomato Grotesk for display and pricing, Inter for everything functional
- The mint-green accent family with three tints for active, muted, and pale applications
- The circuit illustration style as a distinctive brand element
- The clear hierarchy between tier overview and customization interfaces

### Avoid
- Pure black (#000000); the warm near-black (#1A1A1A) is intentional
- Adding shadows to cards or buttons; the flat bordered approach is characteristic
- Mixing accent colors; the single green family carries all emphasis
- Shrinking the price display below 2rem; the large numerals are conversion-critical

### Recommended build order
1. Establish the color tokens and type scale with Inter body and Tomato Grotesk display
2. Build the primary button and text link as foundational interactive elements
3. Construct the pricing card with consistent internal spacing and feature list pattern
4. Implement the tier tab component with active/inactive states
5. Create the hero banner with circuit illustration placeholder
6. Assemble the customization interface with slider, stepper, and summary panel
7. Add the sales package cards with selectable states

### Accessibility
- Ensure the monthly/yearly toggle has visible focus state beyond color change
- Provide aria-pressed or aria-checked on tier tabs and sales package radio buttons
- Maintain 4.5:1 contrast minimum for all body text; the muted ink on white may need verification
- Add visible focus rings to the slider thumb and stepper buttons
- Consider adding price change announcements for screen reader users when toggling billing period or adjusting slider values

## Scope note

This guide covers the Brevo pricing page surface visible in the supplied images, including the tier overview grid and plan customization interface. Navigation header, footer, mobile layouts, hover and focus states, loading skeletons, error handling, and checkout flows are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px base grid.
