# How kanadojo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kanadojo.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark theme preference grid showing colorful named theme pills on near-black background with incognito selection indicator](https://pin.fontofweb.com/1323?format=jpg)](https://design.withfudge.com/share/pin-1323)

[Dark theme preference grid showing colorful named theme pills on near-black background with incognito selection indicator](https://design.withfudge.com/share/pin-1323)

[![Preferences page with Behavior and Display sections, segmented controls, and light theme color swatches including amethyst and miami pink](https://pin.fontofweb.com/1322?format=jpg)](https://design.withfudge.com/share/pin-1322)

[Preferences page with Behavior and Display sections, segmented controls, and light theme color swatches including amethyst and miami pink](https://design.withfudge.com/share/pin-1322)

[![Kanji study grid with three columns of character cards showing readings, meanings, and set selection radio buttons](https://pin.fontofweb.com/1321?format=jpg)](https://design.withfudge.com/share/pin-1321)

[Kanji study grid with three columns of character cards showing readings, meanings, and set selection radio buttons](https://design.withfudge.com/share/pin-1321)

[![Collapsed navigation sidebar with KanaDojo branding, home icon, and Vocabulary item highlighted with light gray pill background](https://pin.fontofweb.com/1320?format=jpg)](https://design.withfudge.com/share/pin-1320)

[Collapsed navigation sidebar with KanaDojo branding, home icon, and Vocabulary item highlighted with light gray pill background](https://design.withfudge.com/share/pin-1320)

## Overview

KanaDojo is a Japanese language learning application built around structured study sessions for kana, kanji, and vocabulary. The interface prioritizes clarity and repetition through a card-based grid system that presents characters alongside their readings and meanings. The visual system balances functional minimalism with expressive personalization: learners encounter clean, spacious study layouts during practice, then customize their experience through an extensive theme system with dozens of named color palettes spanning light and dark modes. The design relies on rounded geometric shapes, generous whitespace, and a restrained typographic pairing of a rounded Japanese display face with a neutral body typeface. Navigation remains lightweight, collapsing to a simple branded sidebar that keeps focus on the learning content.

## Colors

The color system serves two distinct modes: a functional learning interface and an expressive theme customization layer. The base interface uses a near-white canvas with cool gray surfaces for card elevation and containment. Dark themes shift to near-black backgrounds with colored accents. The theme system exposes vibrant accent colors as full palette options.

| token | value | use |
|---|---|---|
| canvas | #FFFFFF | Primary page background in light mode |
| surface | #E2E8F0 | Card borders, inactive controls, sidebar highlight |
| surface-elevated | #F8FAFC | Character study cards, elevated containers |
| ink | #000000 | Primary text, active control fill, kanji characters |
| ink-muted | #64748B | Secondary labels, readings, translations, inactive nav |
| action | #0F172A | Primary button fill, active segmented control, dark theme base |
| action-inverse | #FFFFFF | Text on dark fills, active control labels |
| accent-pink | #FF4D9E | "miami" theme swatch, vibrant light-mode accent |
| accent-cyan | #67E8F9 | "ice ice baby" theme swatch, cool accent |
| accent-purple | #A855F7 | "amethyst" theme swatch, purple accent |
| accent-mint | #10B981 | "mint" theme swatch, green accent |
| theme-dark-base | #0A0A0A | Dark mode page background, "noir" and "matrix" bases |

The light learning interface keeps color restrained: black ink on white canvas with cool gray surfaces creating subtle elevation. The theme preferences layer introduces saturated accents through named swatches. Dark themes invert the value scale, placing colored text and borders against near-black backgrounds. The theme grid shows each palette as a rounded pill with its name rendered in the theme's characteristic hue, letting users preview the aesthetic before selection.

## Typography

The type system pairs two Japanese-supporting families: Zen Maru Gothic for display and branding, and Noto Sans JP for body text and interface labels. Zen Maru Gothic's rounded, friendly character suits the application's approachable educational tone. Noto Sans JP provides neutral readability for dense study content including readings, meanings, and interface controls.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Zen Maru Gothic | 2rem | 400 | 1.2 | -0.01em | Page titles, brand header |
| section-display | Zen Maru Gothic | 1.5rem | 400 | 1.3 | 0 | Section headings, category labels |
| body | Noto Sans JP | 1rem | 400 | 1.5 | 0 | Primary content, meanings, descriptions |
| body-small | Noto Sans JP | 0.875rem | 400 | 1.5 | 0 | Readings, secondary labels, theme names |
| label | Noto Sans JP | 0.75rem | 400 | 1.4 | 0.01em | Captions, helper text, set indicators |
| navigation | Noto Sans JP | 1rem | 400 | 1.5 | 0 | Sidebar links, menu items |

Verify licensing for these families before production use. The display size of 2rem anchors the brand presence at the top of each view, while the 0.875rem body-small size handles the dense multilingual content in study cards where Japanese readings and romaji appear together.

## Layout

The application uses a split-layout architecture: a collapsible navigation sidebar and a main content area that adapts to study grids or preference panels. The sidebar presents the KanaDojo brand mark, Japanese subtitle, and primary navigation links stacked vertically with generous vertical spacing. In its collapsed or narrow state, navigation items appear as text with leading icons, with the active route highlighted by a rounded pill background on the surface color.

The main content area employs a responsive grid for study materials. The kanji view shows a three-column grid of character cards, each card containing a large character glyph, reading variations in horizontal pills, and English meaning labels below. Cards stack vertically within columns with consistent section gaps. The preferences view switches to a single-column form layout with grouped controls: segmented toggles for binary choices and multi-column grids for theme selection.

Page gutters maintain comfortable reading margins, while card internal padding keeps character glyphs visually centered with their associated metadata. The theme grid uses a dense four-column layout of equal-width pills with small gaps, maximizing the visible palette options without scrolling.

## Visual language

The visual language combines educational clarity with playful personalization. Rounded corners appear on every interactive element: cards, buttons, pills, and navigation items share a consistent radius vocabulary that softens the geometric study grids. The character cards use subtle border hairlines to separate content without heavy shadows, keeping focus on the black kanji glyphs against white card backgrounds.

Iconography appears as simple line icons paired with navigation labels and preference section headers. The theme system represents each palette as a named pill with text colored in the theme's accent hue, creating a self-documenting preview. Dark theme pills invert this logic, showing light text on dark tinted backgrounds.

The study grid creates visual rhythm through repetition: each card follows an identical structure of large glyph, reading pills in two columns, and meaning text. This predictability supports learning by reducing cognitive load. The preferences page breaks this rhythm with horizontal rules separating sections and segmented controls that fill their container width in pairs.

## Components

### Character study card

Anatomy: Large kanji or kana glyph centered in the upper portion, followed by two columns of reading pills, then English meaning text below. Some cards show additional compound readings in stacked rows.

Surface and text color: White elevated surface with 1px cool gray border. Black ink for the primary glyph. Muted ink for readings and meanings.

Typography: Glyph uses hero-display at approximately 3rem for visual dominance. Readings use body-small in mixed Japanese and romaji. Meanings use body.

Shape: 0.75rem border radius. No visible shadow.

Spacing: Internal padding of 1rem. Reading pills have internal padding of 0.5rem vertical and 1rem horizontal with 0.5rem gaps between pills.

Composition: Glyph spans full card width. Reading pills arrange in two equal columns. Meaning text sits below with 0.75rem top margin.

Variants: Set selection cards show a radio button in the header area for grouping cards into study sets.

### Theme selection pill

Anatomy: Rounded container with centered text label. No border visible. Background color varies by theme selection.

Surface and text color: Light themes use the accent color as background with dark or light text for contrast. Dark themes use near-black background with accent-colored text.

Typography: body-small, centered.

Shape: Full pill radius of 9999px.

Spacing: Padding of 0.75rem vertical, 1.5rem horizontal. Grid gap of 0.75rem between pills.

Composition: Arranges in multi-column grids. Four columns visible in preferences grid.

States: Selected state indicated by filled radio dot or highlighted border in segmented controls above the grid.

### Segmented control

Anatomy: Paired or grouped buttons sharing a rounded container. Active selection shows filled background.

Surface and text color: Inactive uses surface background with ink text. Active uses action background with action-inverse text.

Typography: body-small, centered.

Shape: 0.5rem border radius for the container. Individual segments have no internal radius separation.

Spacing: Padding of 0.75rem. Full width of parent container divided equally among options.

Composition: Horizontal arrangement with no visible gap between segments.

### Navigation sidebar

Anatomy: Vertical stack of brand header, subtitle, and navigation links. Each link has a leading icon and text label.

Surface and text color: Canvas background. Ink text for active, ink-muted for inactive. Active item shows surface background pill.

Typography: navigation for links. hero-display for brand name. body-small for Japanese subtitle.

Shape: 0.5rem border radius on active item background.

Spacing: 0.75rem vertical padding on items. 1.5rem left indent for icon-text pairs.

Composition: Fixed width sidebar. Items stack with 0.25rem gaps.

States: Active state shows surface-colored pill background. Inactive shows transparent background.

## Responsive behavior

The study grid should collapse from three columns to two columns and then to a single column as viewport width decreases. Character glyphs remain large and readable at all sizes, with reading pills stacking vertically on narrow viewports rather than maintaining two columns.

The navigation sidebar should collapse to a minimal state showing only icons, or transform into a top horizontal bar on the narrowest viewports. The theme preferences grid should reduce from four columns to two and then to a single scrolling column on mobile devices.

Segmented controls should remain full-width on mobile, maintaining equal distribution of touch targets. Theme pills should expand to full width with increased vertical padding for comfortable touch interaction.

## Practical implementation guidance

### Preserve
- The rounded, friendly character of Zen Maru Gothic for all display and heading text
- High contrast black-on-white for study content to support extended reading sessions
- Consistent card structure across all character types for predictable learning patterns
- The extensive named theme system as a core personalization feature
- Mixed Japanese script and romaji presentation in reading pills

### Avoid
- Heavy shadows or elevation effects that compete with character glyphs
- Pure black backgrounds in light mode; use the near-black theme-dark-base only for dark themes
- Breaking the two-column reading pill layout except on narrow viewports
- Using accent colors for functional text or primary actions outside the theme system

### Recommended build order
1. Establish the type scale with both font families loaded
2. Implement the navigation sidebar with active state highlighting
3. Build the character study card with glyph, reading pills, and meaning text
4. Create the responsive three-column study grid
5. Add the segmented control component for binary preferences
6. Implement the theme pill grid with color variations
7. Connect light and dark mode switching with theme persistence

### Accessibility
- Ensure kanji glyphs maintain minimum 3:1 contrast against card backgrounds
- Provide visible focus indicators on all theme pills and segmented controls
- Support reduced motion preferences for any theme transitions
- Include aria-labels on icon-only navigation states
- Maintain touch targets of at least 44px for all interactive pills and controls

## Scope note

This guide covers the study grid, navigation, and preferences surfaces visible in the supplied images. Measurements are practical adaptation targets. Mobile layouts, animation specifications, audio feedback controls, and the complete theme palette beyond the sampled accents are not fully represented. Verify licensing for Noto Sans JP and Zen Maru Gothic before production use.
