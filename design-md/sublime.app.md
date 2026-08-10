# How sublime.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sublime.app-design)

Last updated: 2026-08-10

## Captured pages

[![Following feed empty state with centered Sublime branding, search pill, lime-green active tab, and instructional body copy with underlined action links](https://pin.fontofweb.com/4967?format=jpg)](https://design.withfudge.com/share/pin-4967)

[Following feed empty state with centered Sublime branding, search pill, lime-green active tab, and instructional body copy with underlined action links](https://design.withfudge.com/share/pin-4967)

[![Staff picks feed showing media cards with thumbnail images, card corner radius, action icons, and numeric badges in top-right corners](https://pin.fontofweb.com/4966?format=jpg)](https://design.withfudge.com/share/pin-4966)

[Staff picks feed showing media cards with thumbnail images, card corner radius, action icons, and numeric badges in top-right corners](https://design.withfudge.com/share/pin-4966)

[![Individual card detail view with centered media, attribution line, lime-green Related tab, green insight callout bubble, and related card below](https://pin.fontofweb.com/4965?format=jpg)](https://design.withfudge.com/share/pin-4965)

[Individual card detail view with centered media, attribution line, lime-green Related tab, green insight callout bubble, and related card below](https://design.withfudge.com/share/pin-4965)

[![Finish setup checklist modal with circular checkboxes, chevron indicators, and blue underlined premium upgrade link](https://pin.fontofweb.com/4964?format=jpg)](https://design.withfudge.com/share/pin-4964)

[Finish setup checklist modal with circular checkboxes, chevron indicators, and blue underlined premium upgrade link](https://design.withfudge.com/share/pin-4964)

## Overview

Sublime presents itself as an inspiration engine for ideas, built around a restrained visual system that prioritizes clarity and calm over visual noise. The interface is dominated by generous whitespace, a single custom typeface used at carefully controlled weights and sizes, and a distinctive lime-green accent that appears in active states, social indicators, and insight callouts. The design language speaks to a product that wants users to feel unhurried: centered layouts, soft pill-shaped containers, rounded cards with subtle borders, and minimal chrome. Every element feels intentionally placed to reduce cognitive load while still providing enough structure to guide discovery. The platform's core metaphor is the card—a contained unit of inspiration that can hold images, quotes, links, or original writing—and the entire visual system orbits around making these cards feel approachable, collectible, and connected to a broader network of related ideas.

## Colors

The color system is intentionally narrow, relying on a near-white canvas with black typography and a single vibrant accent to create hierarchy and meaning.

| token | value | use |
|---|---|---|
| canvas | #FFFFFF | Primary page background, card surfaces, modal backgrounds |
| ink | #000000 | Primary text, headings, active navigation, card titles |
| muted-ink | #6B7280 | Secondary text, attribution lines, placeholder text, disabled states, icon defaults |
| surface | #F3F4F6 | Search pill background, subtle container fills, inactive tab backgrounds |
| action | #B8F397 | Active tab pills, selected states, social connection indicators, primary accent moments |
| action-ink | #1F2937 | Text rendered on action backgrounds for readable contrast |
| insight | #DCFCE7 | Insight callout bubbles, educational highlights, contextual tips |
| insight-ink | #166534 | Text rendered on insight backgrounds |
| premium | #3B82F6 | Upgrade links, premium feature indicators, external action prompts |

The palette operates in a light mode exclusively across visible surfaces. The lime-green action color is the most distinctive brand element, appearing with enough saturation to feel energetic but with enough lightness to avoid aggression. Muted-ink serves as the workhorse for de-emphasized content, creating clear typographic hierarchy without introducing additional hues. The insight green is a softer, more pastel variant of the action color, used for informational callouts that need to be noticeable without competing with primary actions. The premium blue appears sparingly, reserved for conversion-oriented elements where it needs to break from the established pattern to draw attention.

## Typography

Sublime employs a single typeface across all text: Control Upright Web-Wght Cont Open Trak, designed by Christian Schwartz and distributed by Commercial Classics Inc. This is a variable-weight sans-serif with controlled tracking, offering a contemporary, slightly compact feel that carries authority without heaviness. The typeface supports a range of weights that the system uses to create hierarchy rather than introducing additional families.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Control Upright Web-Wght Cont Open Trak | 2rem | 700 | 1.1 | -0.02em | Page titles, brand moments, empty state headings |
| section-display | Control Upright Web-Wght Cont Open Trak | 1.5rem | 600 | 1.2 | -0.01em | Section headers, card collection titles |
| body | Control Upright Web-Wght Cont Open Trak | 1rem | 400 | 1.5 | 0em | Paragraph text, descriptions, card content |
| body-medium | Control Upright Web-Wght Cont Open Trak | 1rem | 500 | 1.5 | 0em | Emphasized body, checklist items, active labels |
| label | Control Upright Web-Wght Cont Open Trak | 0.875rem | 500 | 1.25 | 0em | Tab pills, buttons, metadata, timestamps |
| caption | Control Upright Web-Wght Cont Open Trak | 0.75rem | 400 | 1.25 | 0.01em | Fine print, attribution details, badge numbers |

The type scale is built on a 4px relative unit, with sizes snapping to whole-number multiples. Display sizes use negative tracking for tighter, more impactful headlines, while body and label sizes run at neutral or slightly positive tracking for readability. The single-family approach creates a cohesive, almost editorial quality where weight and size alone carry the full hierarchy. Verify licensing for these families before production use.

## Layout

The layout system is centered and contained, favoring narrow reading widths over full-bleed expanses. The maximum content width sits around 40rem, creating an intimate, focused reading experience that feels more like a personal notebook than a public feed. This narrowness is particularly evident in empty states and single-card views, where content is deliberately centered with ample vertical breathing room.

Vertical rhythm is established through consistent section gaps of 2rem, with card-level padding at 1rem. The unit system of 0.25rem provides fine-grained control for internal component spacing without fragmenting the broader rhythm. Cards themselves are self-contained units with internal padding that creates a clear boundary between content and container.

Navigation and primary actions tend to appear at the top of views—search pills, tab filters, and sort controls cluster in a horizontal arrangement. Below this, content flows vertically in a single column or in a card stack. The card detail view introduces a secondary horizontal layer with tab pills for Related, Insights, Collections, and Notes, followed by vertically stacked related content.

Modals and overlays appear centered with rounded corners, maintaining the soft, approachable geometry of the base system. The finish-setup checklist demonstrates this: a contained panel with internal padding, rounded corners, and a clear vertical list structure with generous item spacing.

## Visual language

The visual language of Sublime is defined by softness, containment, and purposeful color restraint. Every interactive element that can be a pill is a pill—search inputs, tab filters, and likely buttons all share the full-rounded treatment. This creates a friendly, approachable character that contrasts with the more angular, utilitarian interfaces common to productivity tools.

Cards are the fundamental visual unit. They feature rounded corners at 0.75rem, white backgrounds, and subtle borders in light gray. The border is not a heavy structural element but an optical hairline that separates cards from the canvas without creating visual weight. Cards often contain media—images with their own internal aspect ratios—centered within the card frame, with attribution and action metadata below or beside.

The lime-green accent is used with discipline: it signals active selection, social connection, and insight. It never appears as a large background field but rather as contained pills, dots, and bubbles. This restraint makes it highly effective as a wayfinding tool. When a user sees green, they understand something is selected, someone they follow is involved, or the system is offering guidance.

Iconography is minimal and functional, rendered in muted-ink at small sizes. Action icons cluster in the lower-right of cards, while navigation icons appear in the upper-right of feeds. Numeric badges use the same muted-ink, sitting quietly in corners rather than demanding attention.

## Components

### Search pill
A wide, horizontally expansive input container with full rounded corners. Background is surface gray, with a search icon and placeholder text in muted-ink. The pill stretches nearly the full width of the content container, creating a prominent but unobtrusive entry point for discovery. Typography uses the body token at regular weight.

### Tab pills
Horizontal row of selectable filters, each rendered as an individual pill. The active state uses the action background with action-ink text; inactive states use surface background with muted-ink text. Pills sit flush against each other with minimal gap, creating a segmented control appearance. The label token at medium weight provides clear scannability.

### Content card
The primary content container, featuring white background, rounded corners, and a subtle light border. Cards contain centered media at the top, followed by attribution metadata in muted-ink caption size. The attribution line includes source domain, save count, and saver names with selective bolding for emphasis. Action icons—more options, share, add—cluster in the lower-right corner, rendered in muted-ink at a small size. Internal padding creates comfortable breathing room around all content.

### Insight bubble
A contained callout using the insight background color with insight-ink text. Rounded corners at the panel radius, with a small green dot indicator preceding the content. Used for contextual education and feature explanation, particularly in relation to the platform's discovery mechanics. The bubble sits inline with content flow, breaking the card rhythm to draw attention without disrupting it.

### Checklist modal
A centered overlay panel with white background, rounded corners, and subtle shadow. Contains a header with icon and title, followed by a vertical list of checklist items. Each item features an empty circular checkbox on the left, descriptive text in body-medium, and a chevron indicator on the right. Items are evenly spaced with generous vertical padding. A premium upgrade link appears below the list, rendered in premium blue with underline treatment.

### Numeric badge
A small indicator appearing in the upper-right corner of cards, showing a number in muted-ink caption size. The badge is unobtrusive, sitting within the card frame without additional background or border treatment.

## Responsive behavior

The visible interface suggests a mobile-first or narrow-viewport primary experience. The 40rem content maximum and centered single-column layouts adapt naturally to smaller screens without requiring dramatic reflow. On wider viewports, the system should maintain its centered narrow column rather than expanding to fill space, preserving the intimate, focused character.

Cards in feed contexts may transition from a single column to a multi-column masonry or grid layout at wider breakpoints, though the supplied images do not confirm this behavior. If implementing multi-column layouts, maintain the card proportions, corner radius, and internal padding exactly.

Touch targets for pill-shaped tabs and card action icons should remain at least 44px in both dimensions. The search pill should remain full-width on mobile with comfortable internal padding to prevent accidental truncation.

## Practical implementation guidance

### Preserve
- The single-typeface system using Control Upright at all weights and sizes
- The lime-green action color for active states and social indicators only
- Generous whitespace and centered narrow layouts
- Pill-shaped interactive elements throughout
- Card corner radius and subtle border treatment
- The distinction between action green and insight green for different message types

### Avoid
- Introducing additional typefaces or decorative fonts
- Using the action green for error states, warnings, or destructive actions
- Heavy borders or shadows that compete with the subtle card treatment
- Full-bleed layouts that destroy the contained, intimate feel
- Overusing the premium blue outside of conversion contexts

### Recommended build order
1. Establish the type scale with Control Upright at all six defined tokens
2. Implement the color tokens, particularly the action and insight greens
3. Build the search pill and tab pill components as the primary navigation vocabulary
4. Create the card component with proper padding, border, and corner radius
5. Add card internals: media container, attribution line, action icon cluster
6. Implement the insight bubble for contextual messaging
7. Build the checklist modal for onboarding flows

### Accessibility
- Ensure the action green meets minimum contrast ratios when used as text background; the action-ink pairing at #1F2937 on #B8F397 should be verified
- Provide visible focus indicators that do not rely solely on color, such as outline offsets on pill-shaped interactive elements
- Maintain logical tab order through card action clusters
- Use aria-labels on icon-only buttons in card footers
- Consider reduced-motion preferences for any card entrance or modal transitions

## Scope note

This guide covers the visible feed, card detail, empty state, and onboarding checklist surfaces. It does not include the browser extension page, sign-up flow, premium pricing, or library management views. Measurements are practical adaptation targets derived from the supplied imagery. Mobile breakpoints, dark mode, loading states, and motion behavior are not addressed.
