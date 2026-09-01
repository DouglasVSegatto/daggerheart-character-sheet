# Daggerheart Digital Character Sheet

A lightweight, mobile-friendly digital character sheet for **Daggerheart TTRPG**, built as a single HTML page with no backend required.

> 🎮 **Try it live:** [https://duality-forge.pages.dev/](https://duality-forge.pages.dev/) — no install needed, just open and play. Your data saves automatically in your browser.
>
> 💻 **Source code:** [github.com/segattobuilder/daggerheart-character-sheet](https://github.com/segattobuilder/daggerheart-character-sheet)

☕ If you enjoy this tool, consider [buying me a coffee](https://buymeacoffee.com/segattobuilder)!

## Features

- **Tabbed Interface** — Sheet tab for gameplay, Story tab for roleplay/narrative, Support tab for links & help
- **Dark/Light Mode** — Slide toggle to switch between dark and light themes, persisted to localStorage
- **Character Info** — Name, pronouns, level, heritage, class & subclass
- **Attributes** — Evasion, Agility, Strength, Finesse, Instinct, Presence, Knowledge (supports +/- values)
- **Status Tracking** — Clickable dots for HP, Stress, Hope, and Armor with configurable max values
- **Damage Thresholds** — Auto-calculated from Armor Base + Character Level + Extras
- **Gear** — Two weapon slots with trait dropdown, range, damage, and auto-calculated attack bonus; armor slot with base thresholds, score, and feature; dynamic "Additional Gear" items (name, bonus, description) for shields, rings, cloaks, etc.
- **Gold & Inventory** — Handfuls/Bags counters with a dynamic inventory list (add/remove items with quantity)
- **Abilities & Cards** — Pull directly from the [Daggerheart SRD data](https://github.com/daggersearch/daggerheart-data) with support for:
  - **Domain Cards** — Color-coded by domain with icons, sorted by level, showing recall cost. Select up to 5 cards as your active loadout (★)
  - **Communities** — Name and feature
  - **Ancestries** — Name and feature
  - **Classes** — Hope features and class features, with domain info
  - **Subclasses** — Flattened by tier (Foundation, Specialization, Mastery) as individual cards
- **Card Detail Modal** — Click any card on your sheet to open a full-screen readable overlay with larger text
- **Experience Tracking** — Add name + value pairs (e.g. Eagle Eye +2)
- **Character Description** — Clothes, eyes, body, skin, attitude fields with Daggerheart guide suggestions
- **Background & Connections** — Free-text area for character bonds and questions
- **Level Up Notes** — Free-text area for tracking level-up decisions
- **Backstory** — Free-text area for character history and motivations
- **Collapsible Sections** — Every section can be minimized to save space
- **Domain Card Loadout** — Star up to 5 domain cards as your active loadout; selected cards auto-sort to the top by level
- **Duplicate Prevention** — Already-added cards are grayed out in the picker
- **Auto-Save** — All changes are cached to localStorage automatically, survives page refresh
- **Export/Import** — Save your sheet as a JSON file (`CharacterName_YYYY-MM-DD.json`) or load one back in
- **Clear** — Reset the entire sheet with confirmation
- **Loadout Protection** — Cannot delete a domain card while it's in your active loadout
- **How to Use Guide** — Built-in help section in the Support tab explaining all features
- **Feedback & Error Capture** — Submit bug reports or feature requests from the Support tab; JS errors are auto-captured silently

## Domain Colors & Icons

Each domain has its official color and icon:

| Domain | Color |
|--------|-------|
| Arcana | `#391F48` |
| Blade | `#933728` |
| Blood | `#760306` |
| Bone | `#666769` |
| Codex | `#19284A` |
| Dread | `#453C7F` |
| Grace | `#883C6E` |
| Midnight | `#26252A` |
| Sage | `#044320` |
| Splendor | `#BF9947` |
| Valor | `#A66828` |

## Saving & Data Persistence

- **Auto-cache** — Every change you make is automatically saved to your browser's `localStorage`. If you refresh the page, all your data is still there.
- **⬇ Export** — Downloads your full sheet as a JSON file (`CharacterName_YYYY-MM-DD.json`). **Keep backups!** Store exported files in multiple places (cloud drive, USB, etc.) in case you clear your browser data.
- **⬆ Import** — Load a previously exported JSON file back into the sheet.
- **Clear** — Wipes all data from the sheet and localStorage (with confirmation).

> ⚠️ **Important:** `localStorage` is tied to your browser and domain. Clearing browser data, switching browsers, or switching devices will lose your auto-cached data. Always export a backup file regularly.

## Setup

No build step required. Just serve the files.

### Local

Open `index.html` in a browser.

### Cloudflare Pages (Primary)

1. Connect the repo to Cloudflare Pages
2. Set production branch to `main`
3. Cloudflare auto-deploys on push
4. Your sheet will be live at `https://<project>.pages.dev/`

### GitHub Pages (Mirror)

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to your branch and `/ (root)`
4. Your sheet will be live at `https://<username>.github.io/<repo>/`

## Project Structure

```
├── index.html          # Layout chooser (redirects to classic or v2)
├── classic.html        # Classic single-column layout
├── classicv2.html      # V2 tabbed grid layout
├── css/
│   ├── base.css        # Variables, typography, inputs, layout
│   ├── components.css  # Cards, dots/trackers, modals, buttons, tabs
│   ├── themes.css      # Dark/light mode overrides
│   └── textures.css    # Background grain, vignette, atmosphere
├── js/
│   ├── app.js          # Entry point, initialization (classic)
│   ├── modern-app.js   # Entry point, initialization (v2)
│   ├── cards.js        # SRD card fetching, display, detail modal
│   ├── feedback.js     # Auto error capture + user bug/feature reports
│   ├── inventory.js    # Inventory item management
│   ├── experience.js   # Experience tracking
│   ├── gear.js         # Gear item management
│   ├── save.js         # Auto-cache, export, import, clear
│   ├── sort.js         # Drag & drop section reordering
│   ├── state.js        # Shared state, constants, domain colors
│   ├── theme.js        # Accent color picker and dark/light mode toggle
│   ├── trackers.js     # HP/Stress/Hope/Armor dots, thresholds, attack bonus
│   └── ui.js           # Tab switching, section collapse
├── functions/
│   └── api/
│       ├── report.js   # POST endpoint — stores reports in KV (30-day TTL)
│       └── reports.js  # GET endpoint — view all reports (ADMIN_KEY protected)
├── images/             # Domain icons
└── README.md
```

## Data Source

Card data is fetched live from the [daggersearch/daggerheart-data](https://github.com/daggersearch/daggerheart-data) GitHub repository. No local data files needed.

## Tech Stack

- HTML + vanilla JavaScript (ES modules)
- [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- localStorage for auto-caching and theme persistence
- GitHub raw content API for SRD data
- [Cloudflare Pages](https://pages.cloudflare.com/) for hosting + serverless functions
- Cloudflare KV for feedback/error report storage
