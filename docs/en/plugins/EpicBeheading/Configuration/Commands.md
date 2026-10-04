# EpicBeheading Commands & Permissions

## Commands

| Command | Permission | Default | Description |
|---|---|---|---|
| `/ebh reload` | `epicbeheading.reload` | OP | Hot-reloads config, language files, timezone, leaderboard refresh interval and top size without a restart |

---

## Permissions

### Administrative permissions

| Permission | Default | Description |
|---|---|---|
| `epicbeheading.reload` | OP | Allows use of `/ebh reload` |

### VIP drop rate group permissions

| Permission | Default chance | Description |
|---|---|---|
| `epicbeheading.vip` | 7% | VIP player group |
| `epicbeheading.mvp` | 9% | MVP player group |
| `epicbeheading.mvpplus` | 12% | MVP+ player group |

> 💡 When a player holds multiple group permissions, the **last group listed (highest chance)** in `config.yml` is used. Chances are fully configurable and you can add your own groups.

---

## Example

```text
/ebh reload
```

The following take effect immediately after a successful reload:

- Base drop chance `drop-chance`
- VIP groups and chances `groups`
- Language `language`
- Leaderboard refresh interval, top size, timezone, stats save interval and weekly reset day

---

## Granting groups with a permissions plugin

LuckPerms examples:

```text
/lp group vip permission set epicbeheading.vip true
/lp group mvp permission set epicbeheading.mvp true
/lp group mvpplus permission set epicbeheading.mvpplus true
```
