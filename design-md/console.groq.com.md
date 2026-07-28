# How console.groq.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/console.groq.com-design)

Last updated: 2026-07-28

## Design character

GroqCloud’s console home is a **dark developer control center**: charcoal near-black shell, white primary type, muted stone secondary labels, and a sharp **coral-orange accent** (`#f55036`) for the primary Create action and brand mark. Dense metric cards, model tables, and usage charts sit on slightly lifted dark surfaces with 1px borders and ~10px radii. A second capture shows a cooler **ice-blue** accent (`#cdeafb`) on related chrome—treat coral as the brand action color and pale blue as a secondary highlight/link tone in dark UI.

What should survive adaptation:

- Dark app shell with white primary text and stone-gray secondary (`#a5a09c` / `#e0e0e0`)
- Coral `#f55036` for primary buttons and logo spark
- Compact 10px-radius cards and pill chips
- Dashboard density: KPI strip, charts, tables, left rail nav
- Minimal chrome; information first

## Foundations

### Color

Measured roles:

- **Accent:** `#f55036` (coral) and `#cdeafb` (pale blue highlight in alternate capture)
- **Primary text:** `#ffffff`
- **Secondary text:** `#a5a09c` and `#e0e0e0`

Visually:

- **Shell / canvas:** near-black / deep charcoal
- **Surfaces:** slightly lighter charcoal panels and table rows
- **Borders:** low-contrast 1px lines separating cards and table cells
- **Charts:** multi-series lines in cool pastels against dark grid (usage over time)

Do not brighten the shell to marketing white—this is an app surface, not a landing page.

### Typography

No declared families. Observed scale:

- **Body / table:** 16px / 24px weight 400
- **UI labels / nav:** 13–14px weight 500
- **Dense meta / chips:** 12px, sometimes weight 600
- Headings stay modest; hierarchy is structural (page title, section label, KPI value) rather than oversized marketing display

### Spacing and layout

- Tight control padding: **8px**, **12px**, **24px** common
- Larger block padding ~**40px** on major panels
- Left **sidebar** + main workspace; top bar with org/workspace switchers
- KPI cards in a horizontal strip; charts and tables stack below
- Moderate density—readable but information-rich

## Visual language

- **Radii:** **10px** on cards/inputs; **18px** occasional; pills **9999px** for chips and some buttons
- **Borders:** ubiquitous 1px solid dividers (all sides on cards)
- **Shadows:** rare soft blur (~17px) and hairline 0-blur edges—depth is mostly border + fill shift
- **Icons:** simple monochrome sidebar glyphs; coral wordmark/logomark
- No marketing illustration—data and tables are the visual interest

## Components and states

- **Sidebar:** product sections (Home, API Keys, Playground, etc.) with active row treatment
- **Top bar:** workspace switcher, search/command, account
- **KPI cards:** label + large metric + delta
- **Primary button:** solid coral “Create API key” / similar
- **Tables:** model list, usage, latency—sortable headers, mono-ish numeric alignment
- **Charts:** time-series usage with legend
- **Chips/pills:** status and filter tokens at full pill radius
- **Empty/loading:** not strongly evidenced; keep skeletons dark-on-dark if extending

## Responsive behavior

Both captures are wide viewports (~2048×1194) of `/home`. Narrow breakpoints are unobserved; collapse the KPI strip and sidebar carefully rather than inventing a mobile marketing layout.

## Practical guidance

**Preserve**

- Dark shell + white type + coral primary action
- 10px card radius and 1px borders
- Dashboard information hierarchy over decorative flourish
- Stone secondary text for labels

**Avoid**

- Light-mode default restyle that loses console identity
- Oversized display type from marketing sites
- Neon accents beyond coral/pale blue
- Heavy drop shadows on every card

**Adaptation**

- Map coral to primary destructive-safe actions (create, run)
- Use pale blue for secondary links/highlights on dark
- Keep numeric tables highly legible with restrained row height

## Scope note

Two viewport captures of console.groq.com `/home` (GroqCloud dashboard). Measured accents and text colors as listed. No declared fonts. Marketing site and other console routes not in this set.

## Captured pages

[![GroqCloud home — coral accent](https://pin.fontofweb.com/9484?format=jpg)](https://design.withfudge.com/share/pin-9484)

[GroqCloud home — coral accent](https://design.withfudge.com/share/pin-9484)

[![GroqCloud home — cool highlight](https://pin.fontofweb.com/9483?format=jpg)](https://design.withfudge.com/share/pin-9483)

[GroqCloud home — cool highlight](https://design.withfudge.com/share/pin-9483)

## Colors

- `#f55036`
- `#ffffff`
- `#a5a09c`
- `#cdeafb`
- `#e0e0e0`
