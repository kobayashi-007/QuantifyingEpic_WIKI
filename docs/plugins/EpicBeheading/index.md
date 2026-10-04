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

# ⚔ EpicBeheading（斩首 / 玩家头颅掉落）

<div class="badges">
  <a href="https://bstats.org/plugin/bukkit/EpicBeheading/33580" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/bStats-33580-orange" alt="bStats 服务器数"></a>
  <a href="#"><img src="https://img.shields.io/badge/Minecraft-1.13.x%20--%2026.3-green" alt="Minecraft"></a>
  <a href="#"><img src="https://img.shields.io/badge/Java-8%2B-blue" alt="Java"></a>
</div>

一款面向 Paper/Spigot 的 **PvP 玩家头颅掉落插件**。当一名玩家在战斗中击杀另一名玩家时，受害者的头颅有**可配置的概率**作为掉落物出现——把每次击杀变成值得收藏与展示的战利品。

支持 **1.13.x 至 26.3**，一个 jar 全版本通用；内置 SQLite 存储、六维排行榜、PlaceholderAPI 变量与 8 种语言。

---

## ✨ 功能特性

- ⚔️ **PvP 头颅掉落** — 击杀玩家后按可配置概率掉落受害者的真实皮肤头颅
- 👑 **动态 VIP 掉率** — 按权限节点分组（VIP / MVP / MVP+），不同组别享有不同掉落概率
- 📊 **统计与排行榜系统** — 总榜 / 周榜 / 月榜三个周期，各统计击杀数与收集头颅数，共 6 个榜单
- 🗓️ **惰性周期重置** — 跨周/跨月时不遍历全体玩家，玩家下次触发事件时就地重置，离线玩家再多也零开销
- 💾 **SQLite 持久化** — 数据存入 `playerdata/data.db`：WAL 模式、批量 upsert、内存缓存 + 异步落盘，主线程零同步磁盘 IO
- 🔖 **PlaceholderAPI 变量** — 个人数据、个人排名、排行榜条目全覆盖，查询直接读内存，高频调用不卡顿
- 🌐 **8 种内置语言** — zh_cn、zh_tw、en、ja、ko、de、fr、ru，空数据文案均可本地化
- 🧩 **生态联动** — 兼容 [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)、[DeluxeMenus](https://www.spigotmc.org/resources/deluxemenus.11734/)、Chest Commands，并提供 [EpicSkullKeeper](https://www.spigotmc.org/resources/.138180/) 头颅方块数据保存支持
- 🛡️ **零侵入** — 只监听 PlayerDeathEvent，使用标准 Bukkit API，与大多数 PvP / 反作弊插件兼容

---

## 📦 安装方法

1. 从 [SpigotMC 发布页](https://www.spigotmc.org/resources/138148/) 下载 `EpicBeheading.jar`
2. 放入服务器的 `plugins/` 文件夹
3. （可选）安装 [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) 以使用变量
4. 启动服务器，自动生成配置与语言文件：

<div class="code-window">
  <div class="code-window-bar">
    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
    <span class="code-window-title">EpicBeheading 目录结构</span>
  </div>
<pre class="code-window-body"><code>plugins/EpicBeheading/
├─ config.yml            # 掉率、语言、排行榜配置
├─ lang/                 # 8 种语言文件（可就地覆盖）
└─ playerdata/
   └─ data.db            # SQLite 统计数据库（自动创建）</code></pre>
</div>

环境要求：Paper/Spigot 系服务端、**Minecraft 1.13.x 或更高版本**、Java 8+。

---

## 🛠️ 命令

| 命令 | 权限 | 默认 | 说明 |
|---|---|---|---|
| `/ebh reload` | `epicbeheading.reload` | OP | 热重载配置、语言、时区、刷新间隔与 Top 数量 |

VIP 掉率分组权限：

| 权限节点 | 说明 |
|---|---|
| `epicbeheading.vip` | VIP 分组掉率（默认 7%） |
| `epicbeheading.mvp` | MVP 分组掉率（默认 9%） |
| `epicbeheading.mvpplus` | MVP+ 分组掉率（默认 12%） |

---

## ⚙️ 配置文件（`config.yml`）

```yaml
# 头颅基础掉落概率（0.05 = 5%，1.0 = 必掉）
drop-chance: 0.05

# 语言：zh_cn / zh_tw / en / ja / ko / de / fr / ru
language: "en"

leaderboard:
  # 排行榜缓存异步刷新间隔（秒）
  refresh-interval: 60
  # 排行榜默认长度（Top N）
  top-size: 10
  # 周榜/月榜周期计算使用的时区
  timezone: "Asia/Shanghai"
  # 统计数据异步保存间隔（秒）
  stats-save-interval: 300
  # 每周重置日（ISO 周，周一为起点）
  weekly-reset-day: MONDAY

# 动态 VIP 掉率分组：玩家拥有最高优先级组别的权限时使用其概率
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

> 💡 玩家同时拥有多个组权限时，按配置中**最靠后（概率最高）**的组别计算。

---

## 🔖 PlaceholderAPI 变量

需要安装 [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)，前缀 `%epicbeheading_`。

**个人数据**

| 变量 | 含义 |
|---|---|
| `%epicbeheading_kills%` | 总击杀数 |
| `%epicbeheading_heads%` | 总收集头颅数 |
| `%epicbeheading_week_kills%` | 本周击杀数 |
| `%epicbeheading_week_heads%` | 本周收集头颅数 |
| `%epicbeheading_month_kills%` | 本月击杀数 |
| `%epicbeheading_month_heads%` | 本月收集头颅数 |

**个人排名**（未上榜返回空文本）

| 变量 | 含义 |
|---|---|
| `%epicbeheading_kills_rank%` | 总击杀排名 |
| `%epicbeheading_heads_rank%` | 总头颅排名 |
| `%epicbeheading_week_kills_rank%` | 周击杀排名 |
| `%epicbeheading_week_heads_rank%` | 周头颅排名 |
| `%epicbeheading_month_kills_rank%` | 月击杀排名 |
| `%epicbeheading_month_heads_rank%` | 月头颅排名 |

**排行榜条目**（N 为名次，1 = 榜首，范围 1 ~ top-size）

| 变量 | 含义 |
|---|---|
| `%epicbeheading_top_kills_name_N%` / `_value_N` | 总击杀榜第 N 名玩家名 / 数值 |
| `%epicbeheading_top_heads_name_N%` / `_value_N` | 总头颅榜第 N 名玩家名 / 数值 |
| `%epicbeheading_week_top_kills_name_N%` / `_value_N` | 周击杀榜 |
| `%epicbeheading_week_top_heads_name_N%` / `_value_N` | 周头颅榜 |
| `%epicbeheading_month_top_kills_name_N%` / `_value_N` | 月击杀榜 |
| `%epicbeheading_month_top_heads_name_N%` / `_value_N` | 月头颅榜 |

排行榜缓存异步刷新（默认 60 秒），PAPI 查询直接读内存；支持查询**离线玩家**的数据与排名。

---

## 🔄 从旧版本升级

- 用新 jar 替换旧文件并重启服务器
- 存储位置已变更：新版使用 `playerdata/data.db`，旧的 `statistics.yml` 不再读写，可以删除
- 旧的 `lang/*.yml` 缺少 `leaderboard` 段落时会自动回退显示 “No data”（功能正常）；如需正确本地化，删除 `plugins/EpicBeheading/lang/` 目录让其重新生成，或手动补全该段落

---

## ❓ 常见问题

**Q：可以让头颅 100% 掉落吗？**
A：可以，设置 `drop-chance: 1.0`；0% 则设为 `0.0`。

**Q：头颅一定显示正确的玩家皮肤吗？**
A：是的。插件会将头颅所有者设置为受害者的正版用户名，Mojang 官方皮肤纹理会自动渲染。

**Q：击杀者背包满了怎么办？**
A：头颅会自然掉落在世界中的死亡地点，奖励不会丢失。

**Q：能和其他 PvP 插件一起用吗？**
A：EpicBeheading 只监听 PlayerDeathEvent 并使用标准 Bukkit API，与大多数 PvP、反作弊插件兼容。

**Q：有经济/货币奖励吗？**
A：当前版本专注于头颅掉落机制，暂不含经济集成。

---

## 📊 数据统计

本插件通过 [bStats](https://bstats.org/plugin/bukkit/EpicBeheading/33580) 收集完全匿名的使用数据，服主可在 `plugins/bStats/config.yml` 中全局关闭。

---

## 📜 许可协议

EpicBeheading 1.0.0 采用 **MIT License**，可自由使用、修改与分发；1.0.0 以上版本不再使用 MIT 协议。

---

## 🤝 致谢

- 开发与维护：**Linchangqing 和 Kobayashi**
- 感谢 [EpicSkullKeeper](https://www.spigotmc.org/resources/.138180/) 提供头颅方块数据保存支持
- 感谢每一位提交 Bug 反馈与翻译的朋友 ❤️

<style>
/* 页面容器：宽度与导航栏对齐 */
.plugin-resource-page .VPPage {
  max-width: 1460px;
  margin: 0 auto;
  padding: 2rem 32px;
  box-sizing: border-box;
}

/* 右侧信息栏：浮动到右边 */
.plugin-sidebar {
  float: right;
  width: 260px;
  margin: 0 0 1.5rem 1.5rem;
}

/* 主卡片缩小到侧栏左侧，与侧栏并排 */
.plugin-resource-page .plugin-page {
  overflow: hidden;
}

/* MD 内容排版（只作用于 .plugin-top 之后的原生 markdown 元素） */
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

/* Mac 风格代码窗口 */
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

/* Mac 风格 YAML 代码块（保留 Shiki 语法高亮） */
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

/* layout: page 下表格无 .vp-doc 样式，手动补齐 */
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
