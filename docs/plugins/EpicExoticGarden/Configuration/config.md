# EpicExoticGarden 插件配置文件详解与教程

`EpicExoticGarden` 是一款独立运行的 Minecraft 服务器插件（不依赖 Slimefun 粘液科技），它为游戏添加了丰富多样的异国灌木、树木以及各种农作物。

本文将带领你逐行解析该插件的默认配置文件，帮助你根据服务器的需求进行定制。

---

## 配置文件全貌

以下是标准的 `EpicExoticGarden` 配置文件内容：

```yaml
This plugin is fully standalone and does not require Slimefun.
Language used for item names: en, de, es, fr, it, nl, pl, pt-BR, ru, zh-CN
language: zh-CN

Items that may drop when breaking tall grass (6% chance).
All custom bushes and saplings are added automatically; set an entry to false to disable its drop.
grass-drops:
  WHEAT_SEEDS: true
  PUMPKIN_SEEDS: true
  MELON_SEEDS: true
  OAK_SAPLING: true
  SPRUCE_SAPLING: true
  BIRCH_SAPLING: true
  JUNGLE_SAPLING: true
  ACACIA_SAPLING: true
  DARK_OAK_SAPLING: true
  GRASS_SEEDS: true
  GRAPE_BUSH: true
  BLUEBERRY_BUSH: true
  ELDERBERRY_BUSH: true
  RASPBERRY_BUSH: true
  BLACKBERRY_BUSH: true
  CRANBERRY_BUSH: true
  COWBERRY_BUSH: true
  STRAWBERRY_BUSH: true
  TOMATO_BUSH: true
  LETTUCE_BUSH: true
  TEA_LEAF_BUSH: true
  CABBAGE_BUSH: true
  SWEET_POTATO_BUSH: true
  MUSTARD_SEED_BUSH: true
  CURRY_LEAF_BUSH: true
  ONION_BUSH: true
  GARLIC_BUSH: true
  CILANTRO_BUSH: true
  BLACK_PEPPER_BUSH: true
  CORN_BUSH: true
  PINEAPPLE_BUSH: true
  RED_BELL_PEPPER_BUSH: true
  OAK_APPLE_SAPLING: true
  COCONUT_SAPLING: true
  CHERRY_SAPLING: true
  POMEGRANATE_SAPLING: true
  LEMON_SAPLING: true
  PLUM_SAPLING: true
  LIME_SAPLING: true
  ORANGE_SAPLING: true
  PEACH_SAPLING: true
  PEAR_SAPLING: true
  DRAGON_FRUIT_SAPLING: true

Worlds in which exotic bushes and trees never generate naturally.
world-blacklist:
  world_nether
  world_the_end

Percentage chance per freshly populated chunk (0-100).
chances:
  TREE: 22
  BUSH: 16

Notify operators who join the server when a new EpicExoticGarden version is available.
The console notice always shows and cannot be disabled here.
update-notify-join: true
```

---

## 核心配置项逐项解析

### 1. 语言设置 (`language`)
```yaml
Language used for item names: en, de, es, fr, it, nl, pl, pt-BR, ru, zh-CN
language: zh-CN
```
* **作用**：设定插件内物品名称显示的语言。
* **支持语言**：`en`（英语）, `de`（德语）, `es`（西班牙语）, `fr`（法语）, `it`（意大利语）, `nl`（荷兰语）, `pl`（波兰语）, `pt-BR`（巴西葡萄牙语）, `ru`（俄语）, `zh-CN`（简体中文）。
* **配置建议**：如果你面向国内玩家，保持 `zh-CN` 即可，这样所有的植物和果实都会显示为简体中文名。

---

### 2. 割草掉落物设置 (`grass-drops`)
```yaml
Items that may drop when breaking tall grass (6% chance).
All custom bushes and saplings are added automatically; set an entry to false to disable its drop.
grass-drops:
  ...
```
* **作用**：当玩家破坏高草丛（Tall Grass）时，有 **6% 的几率** 掉落列表中的物品。
* **如何禁用某项掉落**：如果你不希望某种灌木或树苗通过割草获得，只需将其后面的 `true` 改为 `false`。
  * 例如：`WHEAT_SEEDS: false` 表示割草不再掉落小麦种子。
* **包含内容**：涵盖了原版种子、原版树苗以及插件自带的大量浆果、蔬菜、水果树苗（如葡萄、蓝莓、椰子、樱桃等）。

---

### 3. 世界黑名单设置 (`world-blacklist`)
```yaml
Worlds in which exotic bushes and trees never generate naturally.
world-blacklist:
  world_nether
  world_the_end
```
* **作用**：设置哪些世界**禁止**自然生成插件中的异国灌木和树木。
* **默认配置**：地狱世界 (`world_nether`) 和末地世界 (`world_the_end`) 被列入黑名单，这意味着插件的植被只会在主世界（或自定义的非黑名单资源世界）自然生成。

---

### 4. 生成几率设置 (`chances`)
```yaml
Percentage chance per freshly populated chunk (0-100).
chances:
  TREE: 22
  BUSH: 16
```
* **作用**：控制每一个新生成的区块（Newly Populated Chunk）中植物的生成概率（范围为 0 到 100）。
* **参数详解**：
  * `TREE: 22`：新区块中生成异国果树的几率为 **22%**。
  * `BUSH: 16`：新区块中生成异国灌木的几率为 **16%**。
* **调节建议**：如果觉得服务器资源过于丰富或稀缺，可以适当调高或调低这两个数值。

---

### 5. 更新提示设置 (`update-notify-join`)
```yaml
Notify operators who join the server when a new EpicExoticGarden version is available.
The console notice always shows and cannot be disabled here.
update-notify-join: true
```
* **作用**：当插件有新版本发布时，是否在具有管理员权限（Op）的玩家登录服务器时发送更新提示。
* **注意**：控制台的更新检查是强制显示的，无法在此处关闭。如果你不希望玩家频繁看到更新弹窗提示，可以将其改为 `false`。

---

## 总结

通过修改这个配置文件，你可以轻松汉化插件、平衡服务器的采集经济（通过开关 `grass-drops`）、限制特定世界的植被生成，并控制新区块的植物密集度。修改完成后，别忘了在控制台输入指令重新加载插件（通常为 `/exoticgarden reload` 或重启服务器）。