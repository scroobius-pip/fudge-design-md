# How my.10web.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/my.10web.io-design)

Last updated: 2026-08-10

## Captured pages

[![Websites dashboard with dark sidebar navigation, website card with screenshot preview, and top banner with verification notice](https://pin.fontofweb.com/6702?format=jpg)](https://design.withfudge.com/share/pin-6702)

[Websites dashboard with dark sidebar navigation, website card with screenshot preview, and top banner with verification notice](https://design.withfudge.com/share/pin-6702)

[![AI conversion setup page with progress checklist, website preview mockup, and color-font selection panel](https://pin.fontofweb.com/6701?format=jpg)](https://design.withfudge.com/share/pin-6701)

[AI conversion setup page with progress checklist, website preview mockup, and color-font selection panel](https://design.withfudge.com/share/pin-6701)

## Overview

The 10Web dashboard presents a professional, utilitarian interface designed for website management and AI-powered site building. The visual system balances a stark contrast between a dark navigation sidebar and expansive light content areas, creating clear hierarchy and focus. The design prioritizes functional clarity over decorative elements, using a restrained color palette with strategic blue accents for primary actions and interactive states.

The interface structure follows a classic dashboard pattern: persistent left navigation, a top promotional banner, and a central content canvas that adapts to different workflows—from website listing and management to guided AI conversion setups. Typography is clean and modern, using a single type family with weight variations to establish hierarchy. Component styling favors subtle borders, soft shadows, and rounded corners that feel contemporary without being overly playful. The overall impression is of a capable, enterprise-ready tool that guides users through complex website operations with visual simplicity.

## Colors

The color system is built on a high-contrast foundation with a dark sidebar against light content, punctuated by a vibrant blue action color and functional status colors.

| token | value | use |
|---|---|---|
| action | #3339F1 | Primary buttons, active navigation states, links, progress indicators |
| action-hover | #0909AF | Hover states for action elements, deeper blue for emphasis |
| ink | #000000 | Primary text, dark sidebar background, strong borders |
| muted-ink | #767680 | Secondary text, placeholders, disabled states |
| canvas | #FFFFFF | Page backgrounds, card surfaces, button text on dark |
| surface | #EAEAEA | Subtle borders, dividers, inactive backgrounds |
| surface-dark | #000000 | Sidebar background, inverse surfaces |
| border | #EAEAEA | Card borders, input borders, subtle separators |
| danger | #D41125 | Error states, destructive actions, warning badges |

The dark sidebar (#000000) creates a strong visual anchor that frames the light content area. Navigation items in the sidebar use white text at rest, with the vibrant blue (#3339F1) appearing for active states and the workspace indicator. The main content area relies on black text on white for maximum readability, with the blue action color reserved for interactive elements like the "Add website" button and "Manage" button.

A soft pink banner background (#FDE8E8) appears for verification notices, providing gentle contrast without the urgency of red. The website card in the dashboard shows a screenshot preview with overlaid action buttons, demonstrating how the system handles media-rich content within clean containers. The green checkmark visible in the AI conversion setup flow indicates completion states, though the exact green value is drawn from the image palette rather than confirmed interface tokens.

## Typography

The type system uses Evergrow Sans exclusively, with weights served as distinct family labels including Evergrow Sans-Regular, Evergrow Sans-500 (Medium), Evergrow Sans-Bold, and Evergrow Sans-800 (ExtraBold). This multi-weight approach provides flexibility through weight variation rather than family mixing. The vendor for all Evergrow Sans weights is 10 Web. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Evergrow Sans | 1.5rem | 800 | 1.42 | 0em | Page titles, major headings in setup flows |
| section-display | Evergrow Sans | 1.5rem | 700 | 1.5 | 0em | Section headings, dashboard page titles |
| body | Evergrow Sans | 1rem | 400 | 1.5 | 0em | Primary body text, navigation items, descriptions |
| body-small | Evergrow Sans | 0.75rem | 400 | 1.5 | 0em | Captions, metadata, helper text, labels |
| label | Evergrow Sans | 0.875rem | 700 | 1.43 | 0em | Button text, card titles, emphasized labels |
| navigation | Evergrow Sans | 1rem | 400 | 1.5 | 0em | Sidebar navigation, top-level menu items |

The type scale is compact and functional, with the largest size at 24px (1.5rem) for page headings. Body text sits at 16px (1rem) with 1.5 line height, providing comfortable reading for interface content. Smaller sizes at 14px and 12px handle secondary information without becoming illegible. Weight contrast between Regular (400), Medium (500), Bold (700), and ExtraBold (800) creates hierarchy without size inflation. The Dbicons icon font provides symbolic navigation and action icons at 14px, rendered at weight 600 for optical balance.

## Layout

The dashboard employs a fixed sidebar with fluid main content, using a 12-column implicit grid for content organization.

**Sidebar**: A persistent dark panel on the left, approximately 240px wide, containing workspace identity, primary navigation, resource links, and a trial status card at the bottom. The sidebar uses generous vertical spacing between sections, with navigation items receiving compact horizontal padding (0.625rem 1.125rem 0.625rem 0.875rem) and 8px bottom margins for visual separation.

**Main Content Area**: Occupies the remaining viewport width, with a maximum comfortable reading width managed through internal padding rather than hard constraints. Content sections receive 32px top padding and 40px bottom padding, with 75px bottom padding on primary containers to ensure scroll breathing room.

**Top Banner**: A full-width promotional strip above the main content, using a light lavender background for white-label messaging and a soft pink background for verification notices. The banner is dismissible and sits outside the main content flow.

**Content Header**: Each page presents a title-action row with the page heading left-aligned and primary actions (like "Add website") right-aligned, creating clear task orientation.

**Card Grid**: Website cards appear in a responsive grid with consistent gaps. Each card contains a screenshot preview area, status indicators, title metadata, and action buttons in a stacked vertical arrangement.

The spacing scale uses 2px as the base unit, with common increments at 8px, 16px, 24px, 32px, and 40px for component and section spacing.

## Visual language

The visual character is clean, modern, and slightly technical—appropriate for a development and hosting platform. Rounded corners at 8px (0.5rem) unify cards, buttons, and navigation items, softening the otherwise stark black-and-white palette without becoming playful.

Shadows are minimal and functional: a subtle `rgba(0, 0, 0, 0.1) 0px 1px 6px 0px` appears on elevated elements like dropdown menus and floating panels. The website card preview uses this shadow to separate from the page background.

Iconography mixes the custom Dbicons set with simple geometric shapes. Navigation icons are monochrome and compact, while status indicators use color-coded circles (green for active, blue for information). The workspace avatar uses a bold initial on a dark circular background, reinforcing the personal-but-professional tone.

Progress indicators in setup flows use a vertical checklist pattern with checkmarks, loading spinners, and pending dots—clear visual states that communicate sequence without heavy graphics. The preview mockup in the AI conversion page shows a browser chrome with traffic-light dots, grounding the abstract process in familiar interface metaphors.

Photography appears only in website preview thumbnails and the AI conversion mockup, where it serves as content rather than decoration. The system handles photographic content with neutral framing, letting user content speak for itself.

## Components

**Sidebar Navigation**

- Anatomy: Workspace header with avatar and role, primary navigation links with icons, resource section header, resource links, trial status card, support button
- Surface: Black background (#000000) with white text, blue active states
- Typography: Navigation token for links, body-small for metadata
- Shape: Full-height panel, 8px rounded corners on interactive items
- Spacing: Compact vertical rhythm with 8px gaps between items, 24px section breaks
- Composition: Stacked vertical list with left-aligned icons and text
- Variants: Active state with blue left-border or background highlight; collapsed workspace selector

**Website Card**

- Anatomy: Checkbox selector, screenshot preview with overlaid action buttons, status badge, title with URL, "Manage" button
- Surface: White background, subtle border (#EAEAEA), shadow on hover
- Typography: Label token for title, body-small for URL and metadata
- Shape: 8px rounded corners, image area with top rounding
- Spacing: 16px internal padding, 10px-12px compact padding for action overlays
- Composition: Vertical stack with image dominant, text and action row below
- Variants: Selected state with checkbox checked; hover state with elevated shadow

**Primary Button**

- Anatomy: Text label with optional dropdown chevron
- Surface: Black background (#000000) or blue (#3339F1), white text
- Typography: Label token, 14px bold
- Shape: 8px rounded corners, full pill variant available (9999px)
- Spacing: 7px-9px vertical padding, 15px-16px horizontal padding
- Composition: Inline-flex with centered text and optional icon
- Variants: Default (black), action (blue), with-icon, dropdown-trigger

**Secondary Button**

- Anatomy: Text label, often appearing in card footers or alongside primary actions
- Surface: Blue background (#3339F1), white text
- Typography: Label token
- Shape: 8px rounded corners
- Spacing: Standard button padding
- Composition: Right-aligned in card footers, or grouped with primary actions

**Banner**

- Anatomy: Dismissible strip with icon, message text, and optional link
- Surface: Contextual backgrounds—lavender for promotions, pink (#FDE8E8) for notices
- Typography: Body-small token
- Shape: Full-width, no rounding
- Spacing: Compact vertical padding, centered or left-aligned content
- Composition: Fixed above main content, flex row with close action
- Variants: Promotional (lavender), verification (pink), informational

**Progress Checklist**

- Anatomy: Vertical list with status icon, step label, and optional description
- Surface: Transparent background, subtle highlight for active step
- Typography: Body token for labels, body-small for descriptions
- Shape: 6px rounded corners on active item background
- Spacing: 20px vertical gaps between items, 15px padding on active items
- Composition: Left-aligned icons with right-aligned text, indented pending items
- Variants: Complete (green checkmark), active (blue spinner/highlight), pending (gray dot)

**Setup Panel**

- Anatomy: Floating card with title, description, and grouped option selectors
- Surface: White background, subtle shadow, optional backdrop blur
- Typography: Section-display for title, body-small for descriptions
- Shape: 8px rounded corners
- Spacing: 16px internal padding, 30px bottom margin for sections
- Composition: Vertical stack with clear section breaks
- Variants: Color picker with swatch grid, font selector with chip options

## Responsive behavior

The dashboard is optimized for desktop viewing with the sidebar persistently visible. At narrower viewports, the sidebar should collapse to an icon-only rail or hide behind a toggle, with the main content expanding to full width. The website card grid should reflow from multiple columns to single column on smaller screens, maintaining card proportions.

The top banner remains full-width across all breakpoints, with text potentially truncating or wrapping. Setup flow panels should stack vertically on narrow screens, with the preview mockup moving above or below the configuration options rather than side-by-side.

Touch targets should maintain minimum 44px height for sidebar items and buttons. Dropdown menus in the "Add website" button should become bottom sheets or full-width dropdowns on mobile to prevent truncation.

## Practical implementation guidance

**Preserve**
- The high contrast between dark sidebar and light content—this is the signature visual rhythm
- The restrained use of blue (#3339F1) for active states and primary actions only
- The compact, weight-based type hierarchy using Evergrow Sans exclusively
- The 8px corner radius consistently applied across cards, buttons, and inputs
- The generous whitespace in content areas (32px-40px section padding)

**Avoid**
- Adding additional accent colors beyond the established blue and red functional palette
- Using border-radius values other than 8px for standard components—reserve 9999px only for pills and avatars
- Mixing additional font families—the single-family approach is intentional
- Making the sidebar light or colored—dark grounding is essential to the visual structure
- Overcrowding card content—maintain the image-dominant, metadata-sparse pattern

**Recommended Build Order**
1. Establish the sidebar shell with dark background and navigation structure
2. Implement the type scale with Evergrow Sans at all weights including Evergrow Sans-500 and Evergrow Sans-800
3. Build the button components (primary black, action blue, with dropdown variant)
4. Create the website card with image preview, overlay actions, and footer metadata
5. Add the top banner system with contextual color variants
6. Implement content area spacing and section headers
7. Build setup flow components (checklist, preview mockup, configuration panels)

**Accessibility**
- Ensure sidebar navigation has clear focus indicators against the black background—use the blue action color or white outline
- Provide aria-labels for icon-only navigation items and action buttons in card overlays
- Maintain color contrast ratios: white text on black (21:1), black text on white (21:1), blue on white (~5.5:1)
- The verification banner should use aria-live="polite" for screen reader announcement
- Progress checklists should communicate completion status programmatically, not just visually
- Ensure the "Manage" button and card checkbox are keyboard accessible with visible focus states

## Scope note

This guide covers the dashboard and AI conversion setup surfaces visible in the supplied images. Mobile layouts, animation specifications, form validation states, and the full range of setup flow steps beyond the initial screen are not documented. The icon font (Dbicons) is treated as a symbol system rather than typography. Evergrow Sans-500 and Evergrow Sans-800 are named in the type system but used through weight mapping on the base Evergrow Sans family; verify licensing for these families before production use.
