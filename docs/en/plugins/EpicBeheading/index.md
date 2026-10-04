---
layout: page
pageClass: plugin-resource-page
---

<div class="plugin-top">
  <div class="plugin-sidebar">
    <ResourceInfo plugin="epicbeheading" />
  </div>
  <PluginCard plugin="epicbeheading" />
</div>

# ⚔ EpicBeheading (Player Head Drops)

<div class="badges">
  <a href="https://bstats.org/plugin/bukkit/EpicBeheading/33580" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/bStats-33580-orange" alt="bStats servers"></a>
  <a href="#"><img src="https://img.shields.io/badge/Minecraft-1.13.x%20--%2026.3-green" alt="Minecraft"></a>
  <a href="#"><img src="https://img.shields.io/badge/Java-8%2B-blue" alt="Java"></a>
</div>

A **PvP player head drop plugin** for Paper/Spigot. When a player kills another player in combat, there is a configurable chance that the victim's player head drops as loot — rewarding every successful kill with a collectible, display-worthy trophy.

Supports **1.13.x through 26.3** with a single universal jar, featuring SQLite storage, six leaderboards, PlaceholderAPI placeholders and 8 built-in languages.

---

## ✨ Features

- ⚔️ **PvP head drops** — the victim's real-skinned player head drops with a configurable chance on every PvP kill
- 👑 **Dynamic VIP drop rates** — permission-based groups (VIP / MVP / MVP+) with independent drop chances
- 📊 **Statistics & leaderboards** — Total / Weekly / Monthly periods, each tracking kills and heads collected: 6 leaderboards in total
- 🗓️ **Lazy period reset** — no full-player traversal on week/month turnover; each player is reset in place at their next event, at zero cost even with many offline players
- 💾 **SQLite persistence** — data stored in `playerdata/data.db`: WAL mode, batched upserts, in-memory cache with async dirty-flag flushing; zero synchronous disk IO on the main thread
- 🔖 **PlaceholderAPI placeholders** — personal data, personal ranks and leaderboard entries; queries read memory directly with no lag under high-frequency calls
- 🌐 **8 built-in languages** — zh_cn, zh_tw, en, ja, ko, de, fr, ru, including localized empty-data texts
- 🧩 **Ecosystem integrations** — works with [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/), [DeluxeMenus](https://www.spigotmc.org/resources/deluxemenus.11734/) and Chest Commands; pairs with [EpicSkullKeeper](https://www.spigotmc.org/resources/.138180/) for persisting placed head block data
- 🛡️ **Non-intrusive** — only listens to PlayerDeathEvent using standard Bukkit APIs; compatible with most PvP and anti-cheat plugins

---

## 📦 Installation

1. Download `EpicBeheading.jar` from the [SpigotMC resource page](https://www.spigotmc.org/resources/138148/)
2. Drop it into your server's `plugins/` folder
3. (Optional) Install [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) to use placeholders
4. Start the server — config and language files are generated automatically:

<div class="code-window">
  <div class="code-window-bar">
    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
    <span class="code-window-title">EpicBeheading directory layout</span>
  </div>
<pre class="code-window-body"><code>plugins/EpicBeheading/
├─ config.yml            # drop chance, language, leaderboard settings
├─ lang/                 # 8 language files (overridable on disk)
└─ playerdata/
   └─ data.db            # SQLite statistics database (auto-created)</code></pre>
</div>

Requirements: a Paper/Spigot-based server, **Minecraft 1.13.x or newer**, Java 8+.

---

## 🛠️ Commands

| Command | Permission | Default | Description |
|---|---|---|---|
| `/ebh reload` | `epicbeheading.reload` | OP | Hot-reloads config, language, timezone, refresh interval and top size |

VIP drop-rate group permissions:

| Permission | Description |
|---|---|
| `epicbeheading.vip` | VIP group drop rate (7% by default) |
| `epicbeheading.mvp` | MVP group drop rate (9% by default) |
| `epicbeheading.mvpplus` | MVP+ group drop rate (12% by default) |

---

## ⚙️ Configuration (`config.yml`)

```yaml
# Base head drop chance (0.05 = 5%, 1.0 = always, 0.0 = never)
drop-chance: 0.05

# Language: zh_cn / zh_tw / en / ja / ko / de / fr / ru
language: "en"

leaderboard:
  # Leaderboard cache refresh interval (seconds, async)
  refresh-interval: 60
  # Default leaderboard size (Top N)
  top-size: 10
  # Timezone used for weekly/monthly period calculation
  timezone: "Asia/Shanghai"
  # Statistics async save interval (seconds)
  stats-save-interval: 300
  # Weekly reset day (ISO week starts on Monday)
  weekly-reset-day: MONDAY

# Dynamic VIP drop rate groups: the last (highest) matching group wins
groups:
  vip:
    permission: epicbeheading.vip
    chance: 7.0
  mvp:
    permission: epicbeheading.mvp
    chance: 9.0
  mvpplus:
    permission: epicbeheading.mvpplus
    chance: 12.0
```

> 💡 When a player holds multiple group permissions, the **last group listed (highest chance)** in the config is used.

---

## 🔖 PlaceholderAPI Placeholders

Requires [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/). Prefix: `%epicbeheading_`.

**Personal data**

| Placeholder | Meaning |
|---|---|
| `%epicbeheading_kills%` | Total kills |
| `%epicbeheading_heads%` | Total heads collected |
| `%epicbeheading_week_kills%` | Weekly kills |
| `%epicbeheading_week_heads%` | Weekly heads |
| `%epicbeheading_month_kills%` | Monthly kills |
| `%epicbeheading_month_heads%` | Monthly heads |

**Personal rank** (returns empty text if unranked)

| Placeholder | Meaning |
|---|---|
| `%epicbeheading_kills_rank%` | Total kills rank |
| `%epicbeheading_heads_rank%` | Total heads rank |
| `%epicbeheading_week_kills_rank%` | Weekly kills rank |
| `%epicbeheading_week_heads_rank%` | Weekly heads rank |
| `%epicbeheading_month_kills_rank%` | Monthly kills rank |
| `%epicbeheading_month_heads_rank%` | Monthly heads rank |

**Leaderboard entries** (N is the rank, 1 = top; valid range 1 – top-size)

| Placeholder | Meaning |
|---|---|
| `%epicbeheading_top_kills_name_N%` / `_value_N` | Total kills board: rank N name / value |
| `%epicbeheading_top_heads_name_N%` / `_value_N` | Total heads board |
| `%epicbeheading_week_top_kills_name_N%` / `_value_N` | Weekly kills board |
| `%epicbeheading_week_top_heads_name_N%` / `_value_N` | Weekly heads board |
| `%epicbeheading_month_top_kills_name_N%` / `_value_N` | Monthly kills board |
| `%epicbeheading_month_top_heads_name_N%` / `_value_N` | Monthly heads board |

The leaderboard cache refreshes asynchronously (every 60s by default); PAPI queries read memory directly. Offline players are fully supported in both personal data and ranks.

---

## 🔄 Upgrading from a Previous Version

- Replace the old jar with the new one and restart the server
- Storage has changed: the new version uses `playerdata/data.db`. The legacy `statistics.yml` is no longer read or written and can be deleted
- Old on-disk `lang/*.yml` files without the `leaderboard` section automatically fall back to the text "No data" (still functional). To get proper localized text, delete the `plugins/EpicBeheading/lang/` folder to regenerate it, or add the section manually

---

## ❓ FAQ

**Q: Can heads drop 100% of the time?**
A: Yes — set `drop-chance: 1.0`. Use `0.0` for 0%.

**Q: Will heads always show the correct player skin?**
A: Yes. The plugin sets the skull owner to the victim's Minecraft username, so Mojang's official skin texture renders automatically.

**Q: What if the killer's inventory is full?**
A: The head drops naturally at the victim's death location, so the reward is never lost.

**Q: Can I use it alongside other PvP plugins?**
A: EpicBeheading only listens to PlayerDeathEvent and uses standard Bukkit APIs, so it is compatible with most PvP and anti-cheat plugins.

**Q: Is there any economy integration or currency reward?**
A: The current version focuses solely on the head drop mechanic; economy integration is not included.

---

## 📊 Statistics

This plugin reports fully anonymous usage data via [bStats](https://bstats.org/plugin/bukkit/EpicBeheading/33580). Server owners can disable it globally in `plugins/bStats/config.yml`.

---

## 📜 License

EpicBeheading 1.0.0 is released under the **MIT License** — free to use, modify and distribute. Versions above 1.0.0 are not released under the MIT License.

---

## 🤝 Credits

- Developed and maintained by **Linchangqing and Kobayashi**
- [EpicSkullKeeper](https://www.spigotmc.org/resources/.138180/) for placed head block data persistence
- Thanks to everyone who submitted bug reports and translations ❤️

<style>
.plugin-resource-page .VPPage {
  max-width: 1460px;
  margin: 0 auto;
  padding: 2rem 32px;
  box-sizing: border-box;
}

.plugin-sidebar {
  float: right;
  width: 260px;
  margin: 0 0 1.5rem 1.5rem;
}

.plugin-resource-page .plugin-page {
  overflow: hidden;
}

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
.plugin-resource-page div[class*='language-yaml'] .copy {
  top: 4px;
  right: 8px;
}
.plugin-resource-page div[class*='language-yaml'] .lang {
  display: none;
}

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
