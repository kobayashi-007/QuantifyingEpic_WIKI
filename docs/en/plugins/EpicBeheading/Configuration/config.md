# EpicBeheading Configuration Guide

`EpicBeheading` is a PvP player head drop plugin: when a player kills another player in combat, the victim's head drops with a configurable chance. This page explains every option in `plugins/EpicBeheading/config.yml`.

After editing, run `/ebh reload` in game to hot-reload — **no restart required**.

---

## Full configuration

```yaml
# Base head drop chance (0.05 = 5%, 1.0 = always, 0.0 = disabled)
drop-chance: 0.05

# UI/message language: zh_cn / zh_tw / en / ja / ko / de / fr / ru
language: "en"

leaderboard:
  # Leaderboard cache refresh interval (seconds, async). PAPI reads the cache directly
  refresh-interval: 60
  # Default leaderboard size (Top N)
  top-size: 10
  # Timezone used for weekly/monthly period calculation (independent of the system timezone)
  timezone: "Asia/Shanghai"
  # Statistics async disk flush interval (seconds)
  stats-save-interval: 300
  # Weekly reset day (ISO week starts on Monday)
  weekly-reset-day: MONDAY

# Dynamic VIP drop rate groups
# When a player belongs to multiple groups, the last group listed (highest chance) is used
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

---

## Base drop chance `drop-chance`

- Range: `0.0` – `1.0`
- `0.05` means 5%; `1.0` guarantees a drop on every kill; `0.0` disables drops
- This is the **base** chance for normal players; players with a VIP group permission use the matching chance from `groups`

## Language `language`

Available values:

| Value | Language |
|---|---|
| `zh_cn` | Simplified Chinese |
| `zh_tw` | Traditional Chinese |
| `en` | English |
| `ja` | Japanese |
| `ko` | Korean |
| `de` | German |
| `fr` | French |
| `ru` | Russian |

Language files live in `plugins/EpicBeheading/lang/`; on-disk files always take precedence over the jar defaults.

> ⚠️ An older release failed to extract the Traditional Chinese file correctly (`zh_tw.yml` was extracted as `zh_hant.yml`). This is fixed in current versions. If Traditional Chinese falls back to English, delete the `lang/` folder to regenerate it.

---

## Leaderboard `leaderboard`

| Option | Default | Description |
|---|---|---|
| `refresh-interval` | `60` | Async leaderboard cache refresh interval (seconds) |
| `top-size` | `10` | Number of entries per board (Top N); valid range for PAPI `_N` is 1 – N |
| `timezone` | `Asia/Shanghai` | Timezone for weekly/monthly turnover, independent of the server system timezone |
| `stats-save-interval` | `300` | Interval for flushing in-memory statistics to SQLite (seconds) |
| `weekly-reset-day` | `MONDAY` | Weekly reset day, following the ISO-8601 week calendar |

**Three periods**:

- **Total**: lifetime stats, never reset
- **Weekly**: ISO week, resets Monday 00:00
- **Monthly**: calendar month, resets on the 1st at 00:00

Each period tracks both **kills** and **heads collected**, giving 6 leaderboards.

**Lazy reset**: on week/month turnover the server does not iterate over all players. Each player's period is checked and reset in place the next time they trigger a kill or head drop — turnover is zero-cost regardless of how many offline players exist.

---

## VIP groups `groups`

Assign independent drop chances to player groups via permission nodes:

```yaml
groups:
  vip:
    permission: epicbeheading.vip   # permission node
    chance: 7.0                     # drop chance (percentage)
```

- `chance` is a **percentage**: `7.0` = 7%, `12.0` = 12% (note: different scale from the decimal `drop-chance`)
- Players holding multiple group permissions use the **last group listed** in the config (put your highest-chance group last)
- You can add or remove groups freely; group names are arbitrary, only the permission nodes must match your permissions plugin

---

## Data storage

Statistics are stored in the SQLite database `plugins/EpicBeheading/playerdata/data.db`:

- **WAL mode** + `synchronous=NORMAL` balances concurrency and write throughput
- **Batched upsert** in a single transaction — thousands of players flush in milliseconds
- **In-memory cache + dirty-flag async flush** — the death event only updates memory; no synchronous disk IO on the main thread
- The SQLite driver is bundled inside the jar (relocated to `com.epicbeheading.sqlite`), so no manual driver installation is required and conflicts with other plugins are avoided

> 📁 The legacy `statistics.yml` is deprecated. The new version no longer reads or writes it, so it can be safely deleted.
