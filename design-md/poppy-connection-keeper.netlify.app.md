# How poppy-connection-keeper.netlify.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/poppy-connection-keeper.netlify.app-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with warm gradient background, phone mockup showing garden app interface, and serif headline with decorative flower illustrations](https://pin.fontofweb.com/7668?format=jpg)](https://design.withfudge.com/share/pin-7668)

[Hero section with warm gradient background, phone mockup showing garden app interface, and serif headline with decorative flower illustrations](https://design.withfudge.com/share/pin-7668)

[![Footer call-to-action with peach-to-coral gradient, email waitlist form, App Store badge, and minimal footer with logo and links](https://pin.fontofweb.com/7669?format=jpg)](https://design.withfudge.com/share/pin-7669)

[Footer call-to-action with peach-to-coral gradient, email waitlist form, App Store badge, and minimal footer with logo and links](https://design.withfudge.com/share/pin-7669)

## Overview

Poppy's landing page presents a relationship-tracking app through a warm, garden-inspired visual language. The design balances playful organic warmth with typographic clarity: soft peach-to-coral gradients wash across the background like a sunrise, while decorative flower illustrations with smiling faces scatter across the canvas like gentle confetti. A large phone mockup anchors the hero, showing the app's actual garden interface where contacts bloom as flowers. The overall mood is encouraging rather than demanding—"gentle reminders, zero guilt"—and every visual choice reinforces this nurturing positioning. The page moves visitors from emotional headline through social proof to clear download action, with a secondary waitlist capture for Android users.

## Colors

| token | value | use |
|---|---|---|
| ink | #2D2A32 | Primary text, headings, logo wordmark |
| muted-ink | #6B6577 | Body paragraphs, secondary text, footer links |
| canvas | #FAF7F2 | Page background, footer surface, input borders |
| surface | #FFFFFF | Buttons, cards, input fields |
| action | #6B8F71 | Primary buttons, nav CTA, success indicators |
| action-hover | #4ADE80 | Gradient accent, hover state reference |
| accent-warm-start | #F4A583 | Gradient warm peach |
| accent-warm-mid | #FBBF93 | Gradient mid-tone |
| accent-warm-end | #FED7AA | Gradient light peach |
| border-light | #FAF7F2 | Subtle borders, dividers |

The color system operates in three modes. The dominant mode is warm and light: a cream-white canvas supports large gradient fields that shift from deep peach through salmon to pale apricot. These gradients appear in the hero and CTA sections, creating an immersive, sunset-like atmosphere. Against this warmth, dark ink text provides strong contrast for readability. The secondary mode is functional and neutral: muted-ink for supporting copy, pure white for interactive surfaces. The accent mode is botanical green, used sparingly for primary actions and success states, connecting the digital interface to the garden metaphor. Dark sections appear in the footer and navigation bar, where black backgrounds invert the palette for grounding.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Fraunces | 3.75rem | 700 | 1 | -0.025em | Hero headline, large emotional statements |
| section-display | Fraunces | 2.25rem | 700 | 1.11 | normal | Section headings, feature titles |
| body-large | Inter | 1.125rem | 400 | 1.625 | normal | Hero subhead, introductory paragraphs |
| body | Inter | 1rem | 400 | 1.5 | normal | Standard paragraphs, navigation items |
| label | Inter | 0.875rem | 400 | 1.43 | normal | Captions, metadata, footer links |
| button | Inter | 0.875rem | 600 | 1.43 | normal | Button labels, nav CTA text |
| legal | Inter | 0.75rem | 400 | 1.33 | normal | Copyright, fine print |

The type system pairs a decorative serif for emotional impact with a neutral sans-serif for functional clarity. Fraunces, a soft and slightly rounded serif, handles all display headlines. Its weight 700 creates confident presence without harshness, and the tight negative tracking at hero sizes gives headlines a crafted, editorial quality. Inter serves every body, label, and interface need at weight 400, with weight 600 reserved for button text to signal action. The size hierarchy is restrained: a clear jump from 3.75rem hero to 2.25rem section heads, then a comfortable 1.125rem/1rem body tier, with 0.875rem handling all interface labels. Verify licensing for these families before production use.

## Layout

The page uses a centered single-column layout with generous horizontal margins. Content maxes out at approximately 33rem for readable text blocks, while decorative elements and gradients extend full-bleed. The hero section occupies the full viewport height with a split composition: text and social proof cluster left, the phone mockup floats right. Below, alternating sections center their content with stacked headline-paragraph pairs.

The navigation bar sits fixed at top, containing the Poppy logo left, text links center, and language selector plus download button right. Horizontal padding is 1.5rem on mobile-narrow views, expanding to centered auto-margins on wider screens. Section spacing uses 3rem as the base rhythm, with 2rem gaps between related elements and 1rem for tight groupings like social proof avatars.

The phone mockup breaks the centered flow, positioned to create diagonal tension against the gradient. Decorative flower illustrations scatter asymmetrically around the edges, avoiding the content column entirely. This creates a frame effect that contains the eye without competing for attention.

## Visual language

The visual identity revolves around growth, warmth, and gentle accountability. The garden metaphor manifests literally in the product screenshot—contacts as flowers in rows—and atmospherically in the color palette and scattered floral decorations. These decorative flowers are simple, flat illustrations with round smiling faces, rendered in soft pink and cream tones that blend into the gradient rather than popping against it.

Gradients are linear, flowing from upper-left to lower-right, creating a sense of natural light and warmth. The hero gradient spans three stops from deep peach to pale apricot, while smaller accent gradients appear on status badges in the app mockup. Shadows are minimal and soft—a single 1px blur at 5% opacity for subtle elevation on interactive elements.

The phone mockup uses a realistic device frame with rounded corners and dynamic island, grounding the abstract garden concept in tangible product reality. Social proof appears as a cluster of four overlapping circular avatars in warm skin tones, followed by trust copy with a bold numeral for emphasis.

## Components

### Navigation bar

- **Anatomy**: Logo mark (potted plant icon) plus "Poppy" wordmark left; text links center; language pill and download pill right
- **Surface**: Transparent over gradient, or dark background when scrolled
- **Typography**: Body token for links, button token for CTA
- **Shape**: Nav buttons use full pill radius
- **Spacing**: 1rem vertical padding, 1.5rem horizontal; 1.25rem gap between nav links
- **Composition**: Flex row, space-between alignment

### Hero section

- **Anatomy**: Headline stack left; subhead; social proof cluster; App Store badge; phone mockup right
- **Surface**: Full-bleed warm gradient background
- **Typography**: Hero-display for headline, body-large for subhead
- **Shape**: No containing borders; content floats freely
- **Spacing**: Generous vertical padding, approximately 6rem top and bottom
- **Composition**: Asymmetric two-column feel despite single-column flow; phone breaks right margin

### Social proof cluster

- **Anatomy**: Four overlapping circular avatars; trust text with bold numeral; green heart emoji
- **Surface**: Avatars have no visible border, slight overlap creates depth
- **Typography**: Label token for trust text, with bold weight for the number
- **Shape**: Circular avatars, approximately 2rem diameter
- **Spacing**: Negative margin overlap of 0.5rem between avatars; 0.75rem gap to text

### Primary button

- **Anatomy**: Text label only, no icon
- **Surface**: Action green background, white text
- **Typography**: Button token
- **Shape**: 1rem border radius
- **Spacing**: 0.75rem vertical, 1.5rem horizontal padding
- **Variants**: Nav variant uses pill shape with slightly reduced padding

### Text input with button

- **Anatomy**: Email input field with inline submit button
- **Surface**: White input with subtle border; green button attached or adjacent
- **Typography**: Body token for placeholder, button token for action
- **Shape**: Input uses 0.75rem radius; button matches or uses pill
- **Spacing**: Tight grouping with minimal gap between input and button

### Footer

- **Anatomy**: Logo left; text links center; copyright right
- **Surface**: Canvas or dark background depending on section
- **Typography**: Label token for links, legal token for copyright
- **Shape**: No borders or dividers
- **Spacing**: 1.5rem vertical padding; generous horizontal margins

## Responsive behavior

The layout appears designed for desktop-first viewing with the phone mockup as a fixed right-side element. On narrower viewports, the asymmetric hero should stack vertically: headline and social proof first, phone mockup below or hidden. The gradient background remains full-bleed at all widths. Navigation links should collapse to a hamburger menu when horizontal space is insufficient, preserving the logo and primary download button. Text sizes may scale down slightly on mobile, though the hero display should remain impactful. The email capture form should stack to full-width elements on narrow screens, with the button below the input rather than inline.

## Practical implementation guidance

### Preserve
- The warm three-stop gradient as the signature background treatment
- The Fraunces/Inter type pairing and its clear role separation
- Decorative flower illustrations as ambient framing, never overlapping content
- The green action color against warm backgrounds for clear CTA visibility
- Social proof with overlapping avatars and bold numerals

### Avoid
- Cool or neutral backgrounds that would break the garden warmth
- Heavy shadows or elevation effects that compete with the soft gradient
- Additional accent colors beyond the green and peach family
- Rigid grid lines or card containers that would fragment the flowing layout
- Generic stock photography instead of the specific phone mockup

### Recommended build order
1. Establish the gradient background system and canvas color
2. Set up the type scale with Fraunces for display and Inter for body
3. Build the navigation with transparent-to-dark scroll behavior
4. Create the hero section with asymmetric phone placement
5. Add decorative flower illustrations as positioned background elements
6. Implement the email capture form with inline button
7. Build footer with centered link grouping

### Accessibility
- Ensure the gradient background maintains sufficient contrast for all text; the dark ink color against mid-tone peach may need adjustment or a subtle text shadow
- Provide visible focus states for the pill-shaped buttons, likely an outline offset or background shift
- Include alt text for the phone mockup that describes the app interface shown
- Make the email input properly labeled for screen readers
- Consider a reduced-motion option for any decorative animations

## Scope note

This guide covers the landing page's visible hero, feature introduction, email capture, and footer surfaces. It does not include the app's actual interface shown within the phone mockup, any interior pages linked from the navigation, or interactive states beyond the static captured appearance. Motion, sound, and haptic feedback are not addressed. Measurements are exact where retained and practical adaptation targets where rounded to the 0.125rem grid.
