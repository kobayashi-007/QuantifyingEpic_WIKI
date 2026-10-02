---
layout: page
pageClass: plugin-resource-page
---

<div class="plugin-top">
  <div class="plugin-sidebar">
    <ResourceInfo />
  </div>
  <PluginCard />
</div>

# 🌿 EpicExoticGarden (EEG)

<div class="badges">
  <a href="https://bstats.org/plugin/bukkit/EpicExoticGarden/34267" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/bStats-34267-orange" alt="bStats Servers"></a>
  <a href="#"><img src="https://img.shields.io/badge/Minecraft-1.12.x%20--%20Latest-green" alt="Minecraft"></a>
  <a href="#"><img src="https://img.shields.io/badge/Java-8%2B-blue" alt="Java"></a>
</div>

A **standalone exotic gardening, farming, food, and nature expansion plugin** for Paper/Spigot servers. Inspired by the classic Slimefun addon *ExoticGarden*, but **runs completely standalone — no Slimefun required**.

Grow exotic bushes and fruit trees, harvest magical crops, cook dozens of dishes, and brew juices and smoothies — all based on **vanilla Minecraft mechanics**. A single universal jar supports **1.12.x through the latest version**.

---

## ✨ Features

- 🌳 **Exotic Fruit Trees & Bushes** — Grapes, strawberries, cherries, lemons, dragonfruit, pineapple, and dozens more. Plant on dirt, harvest by hand
- 🌾 **Magical Crops** — Craftable resource crops (dirt, coal, iron, gold, redstone, diamond...), essences convert back to vanilla resources
- 🥪 **200+ Items** — Fruits, ingredients (flour, salt, butter, cheese...), tools (Crook), cooked food, juices, smoothies, and teas
- 🧃 **Vanilla Potion Drinks** — Colored potions that restore hunger via saturation effect, no custom eating system
- 🌍 **Natural World Integration** — Bushes and trees naturally scatter across newly generated chunks; breaking tall grass has a chance to drop seeds, bushes, and saplings
- 📖 **In-game EpicGuide** — Paged recipe handbook categorized by type, showing how to obtain and craft every item
- 📝 **Fully Editable Recipes & Hunger** — Seven readable YAML files; recipes are never hard-coded
- 🌐 **10 Built-in Languages** — en, de, es, fr, it, nl, pl, pt-BR, ru, zh-CN; override or add translations on disk
- 🧩 **Zero Dependencies** — No Slimefun, no resource packs, no ProtocolLib. Drop into plugins and play

---

## 📦 Installation

1. Download `EpicExoticGarden v1.0.0.jar` from [Releases](https://github.com/kobayashi-007/EpicExoticGarden/releases)
2. Place it in your server's `plugins/` folder
3. Start the server — `plugins/EpicExoticGarden/` will be generated automatically:

<div class="code-window">
  <div class="code-window-bar">
    <span class="dot red"></span>
    <span class="dot yellow"></span>
    <span class="dot green"></span>
    <span class="code-window-title">EpicExoticGarden Directory Structure</span>
  </div>
  <pre class="code-window-body"><code>plugins/EpicExoticGarden/
├─ config.yml
├─ recipe/              # Editable recipes and hunger values
│  ├─ plants.yml        # Plants
│  ├─ fruits.yml        # Fruits
│  ├─ ingredients.yml   # Ingredients
│  ├─ tools.yml         # Tools
│  ├─ dishes.yml        # Dishes
│  ├─ drinks.yml        # Drinks
│  └─ magicalcrops.yml  # Magical crops
├─ languages/           # Override item names and GUI text by language
└─ schematics/</code></pre>
</div>

Requirements: Paper/Spigot server, **Minecraft 1.12.x or higher**, Java 8+.

---

## 🛠️ Commands

| Command | Description |
|---|---|
| `/epicgarden` or `/eeg` | Open EpicGuide |
| `/eeg guide` | Open EpicGuide |
| `/eeg give <itemId> [amount] [player]` | Give an EEG item (ID supports Tab completion) |
| `/eeg reload` | Reload config, languages, and hunger values |
| `/eeg debug` | View item/block/recipe counts and current language |

---

## 🔑 Permissions

| Permission Node | Default | Description |
|---|---|---|
| `epicexoticgarden.use` | Everyone | Use all plugin content |
| `epicexoticgarden.guide` | Everyone | Open EpicGuide |
| `epicexoticgarden.give` | OP | Give items |
| `epicexoticgarden.reload` | OP | Reload plugin |
| `epicexoticgarden.debug` | OP | View debug info |
| `epicexoticgarden.pack` | OP | Resource pack management |
| `epicexoticgarden.admin` | OP | Full admin permission |

---

## ⚙️ Configuration (`config.yml`)

```yaml
# Item name / GUI language: en, de, es, fr, it, nl, pl, pt-BR, ru, zh-CN
language: en

# Items that may drop when breaking tall grass (6% chance). Custom bushes/saplings
# are auto-registered on first launch; set an entry to false to disable that drop
grass-drops: {}

# Worlds where exotic plants never spawn naturally
world-blacklist:
- world_nether
- world_the_end

# Spawn probability per new chunk (percentage 0-100)
chances:
  TREE: 22
  BUSH: 16
```

---

## 📝 Modifying Recipes & Hunger

Open any file under `plugins/EpicExoticGarden/recipe/`:

```yaml
HAMBURGER:
  hunger: 10            # Hunger restored 0-20
  enabled: true         # Set to false to unregister this recipe
  amount: 1             # Output amount
  type: SHAPELESS       # Or SHAPED (ordered crafting)
  ingredients:
  - BREAD
  - COOKED_BEEF
  - LETTUCE
```

Shaped recipe example:

```yaml
CROOK:
  hunger: 0
  enabled: true
  amount: 1
  type: SHAPED
  pattern:
  - "SS"
  - " S"
  - " S"
  ingredients:
    S: STICK
```

**Token Rules**

- Custom items use item IDs: `BUTTER`, `GRAPE_JUICE`
- Vanilla items use modern material names: `SUGAR`, `COOKED_BEEF`
- `:number` means repeated material: `DIRT_ESSENCE:8`
- Modifying a drink's `hunger` also rewrites the saturation potion effect duration, keeping descriptions consistent

**Reload Rules**

- Hunger values and translations: `/eeg reload` takes effect instantly
- Crafting recipes: require server restart (Bukkit cannot reliably unregister recipes across versions)
- After plugin updates, new items are **appended** to existing files and never overwrite your changes

---

## 🌐 Translation & Localization

All player-visible text lives in `languages/<language>/items.yml` — item names, hunger templates, EpicGuide, and all GUI text. Missing keys automatically fall back to English; on-disk files always take priority over jar defaults, and new keys are auto-merged after updates.

---

## 📊 Statistics

This plugin collects fully anonymous usage data via [bStats](https://bstats.org/plugin/bukkit/EpicExoticGarden/34267). Server owners can disable it globally in `plugins/bStats/config.yml`.

---

## 🤝 Acknowledgements

- Original concept: the authors of the Slimefun addon **ExoticGarden**
- Rewritten and maintained by: **Linchangqing and Kobayashi**
- Thanks to everyone who submitted bug reports and translations ❤️



<style>
/* Page container: align width with navbar */
.plugin-resource-page .VPPage {
  max-width: 1460px;
  margin: 0 auto;
  padding: 2rem 32px;
  box-sizing: border-box;
}

/* Right sidebar: float to the right */
.plugin-sidebar {
  float: right;
  width: 260px;
  margin: 0 0 1.5rem 1.5rem;
}

/* Main card shrinks to the left of sidebar, side by side */
.plugin-resource-page .plugin-page {
  overflow: hidden;
}

/* MD content typography (only applies to native markdown elements after .plugin-top) */
.plugin-top ~ h1 {
  text-align: center;
}

.plugin-top ~ .badges {
  text-align: center;
  margin: 1rem 0;
}
.plugin-top ~ .badges a {
  display: inline-block;
  margin: 0 4px;
}
.plugin-top ~ .badges img {
  vertical-align: middle;
}

.plugin-top ~ h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.5rem 0 0.75rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
.plugin-top ~ h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 1.25rem 0 0.5rem;
}
.plugin-top ~ p {
  margin: 0.5rem 0;
  line-height: 1.7;
}
.plugin-top ~ ul,
.plugin-top ~ ol {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  line-height: 1.7;
}
.plugin-top ~ a,
.plugin-top ~ * a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.plugin-top ~ a:hover,
.plugin-top ~ * a:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .plugin-sidebar {
    float: none;
    width: 100%;
    margin: 0 0 1.5rem 0;
  }
}

/* Mac-style code window */
.code-window {
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: #1e1e1e;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.code-window-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: #2d2d2d;
}
.code-window-bar .dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}
.code-window-bar .dot.red { background: #ff5f57; }
.code-window-bar .dot.yellow { background: #febc2e; }
.code-window-bar .dot.green { background: #28c840; }
.code-window-title {
  flex: 1;
  text-align: center;
  font-size: 12px;
  color: #9d9d9d;
  margin-right: 52px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}
.code-window-body {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
}
.code-window-body code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  color: #d4d4d4;
  background: none;
}

/* Mac-style YAML code blocks (keep Shiki syntax highlighting) */
.plugin-resource-page div[class*='language-yaml'] {
  position: relative;
  margin: 1rem 0;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  background: var(--vp-code-block-bg);
}
.plugin-resource-page div[class*='language-yaml']::before {
  content: '';
  display: block;
  height: 32px;
  background-color: rgba(127, 127, 127, 0.12);
  background-image:
    radial-gradient(circle 6px at 16px 16px, #ff5f57 0 6px, transparent 6.5px),
    radial-gradient(circle 6px at 36px 16px, #febc2e 0 6px, transparent 6.5px),
    radial-gradient(circle 6px at 56px 16px, #28c840 0 6px, transparent 6.5px);
  background-repeat: no-repeat;
}
.plugin-resource-page div[class*='language-yaml']::after {
  content: 'YAML';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  color: var(--vp-c-text-2);
  pointer-events: none;
}
.plugin-resource-page div[class*='language-yaml'] pre {
  margin: 0;
  border-radius: 0;
  background: transparent;
}
/* Copy button lands on the right side of the title bar */
.plugin-resource-page div[class*='language-yaml'] .copy {
  top: 4px;
  right: 8px;
}
/* Hide VitePress native language label (replaced with centered YAML title) */
.plugin-resource-page div[class*='language-yaml'] .lang {
  display: none;
}

/* layout: page has no .vp-doc table styles, manually add them */
.plugin-resource-page table {
  width: 100%;
  margin: 1rem auto;
  border-collapse: collapse;
  table-layout: fixed;
}
.plugin-resource-page table th,
.plugin-resource-page table td {
  padding: 0.6rem 1rem;
  border: 1px solid var(--vp-c-divider);
  text-align: center;
  font-size: 0.9rem;
  word-break: break-word;
}
.plugin-resource-page table th {
  background-color: var(--vp-c-bg-soft);
  font-weight: 600;
}
.plugin-resource-page table tr:nth-child(2n) {
  background-color: var(--vp-c-bg-soft);
}

@media (max-width: 640px) {
  .plugin-resource-page table {
    display: block;
    overflow-x: auto;
  }
}
</style>
