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

# 🌿 EpicExoticGarden（异域花园 / EEG）

<div class="badges">
  <a href="https://bstats.org/plugin/bukkit/EpicExoticGarden/34267" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/bStats-34267-orange" alt="bStats 服务器数"></a>
  <a href="#"><img src="https://img.shields.io/badge/Minecraft-1.12.x%20--%20%E6%9C%80%E6%96%B0%E7%89%88-green" alt="Minecraft"></a>
  <a href="#"><img src="https://img.shields.io/badge/Java-8%2B-blue" alt="Java"></a>
</div>

一款面向 Paper/Spigot 的**独立植物、农业、美食与自然扩展插件**。灵感源自经典 Slimefun 附属 *ExoticGarden*，但**完全独立运行，无需安装 Slimefun**。

种植异域灌木与果树、收获魔法作物、烹饪数十道菜肴、调制果汁冰沙——一切都基于**原版 Minecraft 机制**。一个通用 jar，同时支持 **1.12.x 至最新版本**。

---

## ✨ 功能特性

- 🌳 **异域果树与灌木** —— 葡萄、草莓、樱桃、柠檬、火龙果、菠萝等数十种，种在泥土上，徒手收获
- 🌾 **魔法作物** —— 可合成的资源作物（泥土、煤炭、铁、金、红石、钻石……），精华可转化回原版资源
- 🥪 **200+ 种物品** —— 水果、原料（面粉、盐、黄油、奶酪……）、工具（Crook 钩子）、熟食、果汁、冰沙与茶饮
- 🧃 **原版药水饮品** —— 带颜色的药水，通过饱和效果恢复饱食度，没有任何自定义进食系统
- 🌍 **融入自然世界** —— 灌木与果树会自然散落在新生成的区块中；打高草丛有几率掉落种子、灌木和树苗
- 📖 **游戏内图鉴 EpicGuide** —— 分页分类的配方手册，查看每件物品的获取方式与合成配方
- 📝 **配方与饱食度完全可编辑** —— 七个易读的 YAML 文件，配方不写死，不改代码
- 🌐 **内置 10 种语言** —— en、de、es、fr、it、nl、pl、pt-BR、ru、zh-CN，可在磁盘上覆盖或新增译文
- 🧩 **零依赖** —— 不需要 Slimefun、不需要资源包、不需要 ProtocolLib，丢进 plugins 即可游玩

---

## 📦 安装方法

1. 从 [Releases](https://github.com/kobayashi-007/EpicExoticGarden/releases) 下载 `EpicExoticGarden v1.0.0.jar`
2. 放入服务器的 `plugins/` 文件夹
3. 启动服务器，自动生成 `plugins/EpicExoticGarden/` 目录：

<div class="code-window">
  <div class="code-window-bar">
    <span class="dot red"></span>
    <span class="dot yellow"></span>
    <span class="dot green"></span>
    <span class="code-window-title">EpicExoticGarden 目录结构</span>
  </div>
  <pre class="code-window-body"><code>plugins/EpicExoticGarden/
├─ config.yml
├─ recipe/              # 可编辑的配方与饱食度
│  ├─ plants.yml        # 植物
│  ├─ fruits.yml        # 果实
│  ├─ ingredients.yml   # 原料
│  ├─ tools.yml         # 工具
│  ├─ dishes.yml        # 菜肴
│  ├─ drinks.yml        # 饮品
│  └─ magicalcrops.yml  # 魔法作物
├─ languages/           # 按语言覆盖物品名与界面文案
└─ schematics/</code></pre>
</div>

环境要求：Paper/Spigot 系服务端、**Minecraft 1.12.x 或更高版本**、Java 8+。

---

## 🛠️ 命令

| 命令 | 说明 |
|---|---|
| `/epicgarden` 或 `/eeg` | 打开图鉴 |
| `/eeg guide` | 打开图鉴 |
| `/eeg give <物品ID> [数量] [玩家]` | 发放 EEG 物品（ID 支持 Tab 补全） |
| `/eeg reload` | 重载配置、语言与饱食度 |
| `/eeg debug` | 查看物品/方块/配方数量与当前语言 |

---

## 🔑 权限

| 权限节点 | 默认 | 说明 |
|---|---|---|
| `epicexoticgarden.use` | 所有人 | 使用全部插件内容 |
| `epicexoticgarden.guide` | 所有人 | 打开图鉴 |
| `epicexoticgarden.give` | OP | 发放物品 |
| `epicexoticgarden.reload` | OP | 重载插件 |
| `epicexoticgarden.debug` | OP | 查看调试信息 |
| `epicexoticgarden.pack` | OP | 资源包管理 |
| `epicexoticgarden.admin` | OP | 完整管理权限 |

---

## ⚙️ 配置文件（`config.yml`）

```yaml
# 物品名/界面语言：en, de, es, fr, it, nl, pl, pt-BR, ru, zh-CN
language: en

# 打高草丛时可能掉落的物品（6% 概率）。自定义灌木/树苗首次启动自动登记，
# 把某个条目设为 false 即可禁用对应掉落
grass-drops: {}

# 异域植物永不自然生成的世界
world-blacklist:
- world_nether
- world_the_end

# 每个新区块的生成概率（百分比 0-100）
chances:
  TREE: 22
  BUSH: 16
```

---

## 📝 修改配方与饱食度

打开 `plugins/EpicExoticGarden/recipe/` 下任意文件：

```yaml
HAMBURGER:
  hunger: 10            # 恢复饱食度 0-20
  enabled: true         # 设为 false 则不注册该配方
  amount: 1             # 产出数量
  type: SHAPELESS       # 或 SHAPED（有序合成）
  ingredients:
  - BREAD
  - COOKED_BEEF
  - LETTUCE
```

有序合成示例：

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

**令牌规则**

- 自定义物品用物品 ID：`BUTTER`、`GRAPE_JUICE`
- 原版物品用现代材质名：`SUGAR`、`COOKED_BEEF`
- `:数字` 表示重复材料：`DIRT_ESSENCE:8`
- 修改饮品的 `hunger` 会同步改写饱和药水效果时长，保证说明文字与实际回复量一致

**重载规则**

- 饱食度与译文：`/eeg reload` 即时生效
- 合成配方：需重启服务器（Bukkit 无法跨版本可靠注销配方）
- 插件更新后新增物品会**追加**进已有文件，永远不会覆盖你的修改

---

## 🌐 翻译与汉化

所有玩家可见文案都在 `languages/<语言>/items.yml` —— 物品名、饱食度模板、图鉴与 GUI 的全部文字。缺少的键自动回退英文；磁盘文件始终优先于 jar 内置默认值，更新后新键会自动合并补齐。

---

## 📊 数据统计

本插件通过 [bStats](https://bstats.org/plugin/bukkit/EpicExoticGarden/34267) 收集完全匿名的使用数据，服主可在 `plugins/bStats/config.yml` 中全局关闭。

---

## 🤝 致谢

- 原始创意：Slimefun 附属 **ExoticGarden** 的历代作者
- 重写与维护：**Linchangqing 和 Kobayashi**
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
/* 复制按钮落在标题栏右侧 */
.plugin-resource-page div[class*='language-yaml'] .copy {
  top: 4px;
  right: 8px;
}
/* 隐藏 VitePress 原生语言标签（已用居中 YAML 标题替代） */
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
