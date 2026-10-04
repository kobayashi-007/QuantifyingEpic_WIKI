# EpicBeheading 配置文件详解

`EpicBeheading` 是一款 PvP 玩家头颅掉落插件：玩家在战斗中击杀其他玩家时，受害者的头颅会按可配置概率掉落。本文逐行讲解 `plugins/EpicBeheading/config.yml` 的每个选项。

修改配置后在游戏内执行 `/ebh reload` 即可热重载，**无需重启服务器**。

---

## 配置文件全貌

```yaml
# 头颅基础掉落概率（0.05 = 5%，1.0 = 100% 必掉，0.0 = 永不掉落）
drop-chance: 0.05

# 界面与提示语言：zh_cn / zh_tw / en / ja / ko / de / fr / ru
language: "en"

leaderboard:
  # 排行榜缓存异步刷新间隔（秒）。PAPI 查询直接读缓存，不触发排序或磁盘 IO
  refresh-interval: 60
  # 排行榜默认长度（Top N）
  top-size: 10
  # 周榜 / 月榜周期计算使用的时区，独立于服务器系统时区
  timezone: "Asia/Shanghai"
  # 统计数据异步落盘间隔（秒）
  stats-save-interval: 300
  # 每周重置日（ISO 周，周一为一周起点）
  weekly-reset-day: MONDAY

# 动态 VIP 掉率分组
# 玩家同时属于多个组时，使用配置中最靠后（概率最高）的组别
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

## 基础掉落概率 `drop-chance`

- 取值范围：`0.0` ~ `1.0`
- `0.05` 表示 5%，`1.0` 表示每次击杀必掉，`0.0` 表示关闭掉落
- 该值是**普通玩家**的基础概率；拥有 VIP 分组权限的玩家使用 `groups` 中对应组别的概率

## 语言 `language`

可选值：

| 值 | 语言 |
|---|---|
| `zh_cn` | 简体中文 |
| `zh_tw` | 繁体中文 |
| `en` | 英语 |
| `ja` | 日本語 |
| `ko` | 한국어 |
| `de` | Deutsch |
| `fr` | français |
| `ru` | русский |

语言文件位于 `plugins/EpicBeheading/lang/`，磁盘文件优先于 jar 内置默认值。

> ⚠️ 旧版本曾存在 `zh_tw` 语言文件未正确释放的 Bug（实际文件名为 `zh_tw.yml`，旧代码释放成 `zh_hant.yml`），新版已修复。若繁中设置后仍显示英文，请删除 `lang/` 目录重新生成。

---

## 排行榜 `leaderboard`

| 选项 | 默认值 | 说明 |
|---|---|---|
| `refresh-interval` | `60` | 排行榜缓存异步刷新间隔（秒） |
| `top-size` | `10` | 排行榜条目数量（Top N），PAPI 的 `_N` 取值范围为 1 ~ N |
| `timezone` | `Asia/Shanghai` | 周榜/月榜跨周期判定使用的时区，建议填你服务器玩家所在时区 |
| `stats-save-interval` | `300` | 内存中的统计数据异步写入 SQLite 的间隔（秒） |
| `weekly-reset-day` | `MONDAY` | 每周重置日，遵循 ISO-8601 周历 |

**三个统计周期**：

- **总榜（Total）**：终身累计，永不重置
- **周榜（Weekly）**：ISO 周，每周一 00:00 重置
- **月榜（Monthly）**：自然月，每月 1 日 00:00 重置

每个周期分别统计**击杀数**与**收集头颅数**，共 6 个排行榜。

**惰性重置机制**：跨周/跨月时服务器不会遍历全部在线/离线玩家，而是在玩家下次触发击杀或掉头颅事件时检查周期 ID 并就地重置，因此玩家数量再多，周期切换也是零开销。

---

## VIP 分组 `groups`

通过权限节点给不同玩家组设置独立掉率：

```yaml
groups:
  vip:
    permission: epicbeheading.vip   # 权限节点
    chance: 7.0                     # 掉落概率（百分比）
```

- `chance` 是**百分数**：`7.0` = 7%，`12.0` = 12%（注意与 `drop-chance` 的小数写法不同）
- 玩家拥有多个组权限时，按配置文件中**最靠后**的组别计算（把概率最高的组放在最后）
- 可自由增删分组，组名任意，只需保证权限节点与你的权限插件一致

---

## 数据存储

统计数据保存在 SQLite 数据库 `plugins/EpicBeheading/playerdata/data.db`：

- **WAL 模式** + `synchronous=NORMAL`，兼顾并发与写入吞吐
- **批量 upsert**：单次事务提交，数千名玩家数据可在毫秒级刷盘
- **内存缓存 + 脏标记异步落盘**：死亡事件只更新内存，主线程无同步磁盘 IO
- SQLite 驱动已打包进 jar（重定位至 `com.epicbeheading.sqlite`），无需服主手动安装驱动，也不会与其他插件冲突

> 📁 旧版本使用的 `statistics.yml` 已废弃，新版不再读写，可以安全删除。
