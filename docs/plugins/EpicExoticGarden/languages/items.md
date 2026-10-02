# 🌿 EpicExoticGarden 插件配置与物品速查手册

本教程基于 `EpicExoticGarden` 插件的简体中文语言包与配置文件模板整理，涵盖了插件指令、GUI 界面文本、日志提示以及完整的自定义物品 ID 列表。

---

## 📂 一、 核心配置与提示文本

### 1. 基础自动生成文本
* **食物饱食度提示**：`&6回复 &b{0}点 &6饱食度`
* **图鉴手册物品**：`&e异域植物图鉴 &7(右键使用)`
  * 收录异域花草、果树与料理配方
  * 翻阅解锁园艺相关研究

### 2. 界面 (GUI) 标题与分类
| 分类 Key | 显示名称 | 说明 |
| :--- | :--- | :--- |
| **`_gui_guide_title`** | 异域花园图鉴 | 主图鉴界面标题 |
| **`_gui_category_plants`** | 植物与果实 | 花草、灌木、树苗类 |
| **`_gui_category_ingredients`** | 原料与工具 | 调料、面粉、工具等 |
| **`_gui_category_dishes`** | 菜肴 | 各类熟食、甜点、汉堡 |
| **`_gui_category_drinks`** | 饮品 | 果汁、冰沙、奶茶、酒类 |
| **`_gui_category_magical`** | 魔法作物 | 矿物/资源植株与精华 |

### 3. 合成与获取提示
* **点击查看配方**：`&e点击物品查看合成配方` （没有配方的物品会显示获取方式）
* **工作台合成类型**：
  * **有序合成**：`&e有序合成（形状固定）`（在原版工作台中按图示材料合成即可）
  * **无序合成**：`&e无序合成（材料任意摆放）`
* **获取方式说明**：野外打草丛、种植收获、打果树树叶或由其他物品制成。（管理员可用 `/epicgarden give` 发放）

---

## ⌨️ 二、 游戏内指令系统 (`/epicgarden` 或 `/eeg`)

| 指令 | 别名/简写 | 权限节点 | 功能说明 |
| :--- | :--- | :--- | :--- |
| `/eeg guide` | - | 玩家可用 | 打开异域植物图鉴 GUI |
| `/eeg guidebook` | - | 玩家可用 | 获取图鉴手册（右键使用） |
| `/eeg give <物品ID> [数量] [玩家]` | - | OP / 管理员 | 发放指定异域花园物品 |
| `/eeg reload` | - | OP / 管理员 | 重载配置、语言与配方 |
| `/eeg debug` | - | OP / 管理员 | 查看当前插件的调试信息 |
| `/eeg help` | - | 玩家可用 | 显示帮助菜单 |

---

## 🍎 三、 物品中文名称速查表

> 💡 **提示**：以下物品 ID 可用于 `/eeg give` 命令发放或在 `recipe/*.yml` 配方文件中引用。

### 1. 基础工具与原料
* `ICE_CUBE`: &b冰块
* `CROOK`: &r采集钩
* `GRASS_SEEDS`: &r草种子
* `KITCHEN`: &e厨房
* `WHEAT_FLOUR`: &r小麦面粉
* `SALT`: &r盐
* `HEAVY_CREAM`: &r浓奶油
* `BUTTER`: &r黄油
* `CHEESE`: &r奶酪
* `MAYO`: &r蛋黄酱
* `MUSTARD`: &e芥末酱
* `BBQ_SAUCE`: &c烧烤酱
* `VEGETABLE_OIL`: &r植物油
* `CORNMEAL`: &r玉米粉
* `YEAST`: &r酵母
* `MOLASSES`: &8糖蜜
* `BROWN_SUGAR`: &r红糖
* `COUNTRY_GRAVY`: &r乡村肉汁

---

### 2. 浆果与植株类
> 包含各类浆果、植株及其对应的果汁、冰沙、三明治和派。

* **🍇 葡萄系列**: 
  * `GRAPE` (&c葡萄) | `GRAPE_BUSH` | `GRAPE_JUICE` | `GRAPE_SMOOTHIE` | `GRAPE_JELLY_SANDWICH` | `GRAPE_PIE`
* **🫐 蓝莓系列**: 
  * `BLUEBERRY` (&9蓝莓) | `BLUEBERRY_BUSH` | `BLUEBERRY_JUICE` | `BLUEBERRY_SMOOTHIE` | `BLUEBERRY_JELLY_SANDWICH` | `BLUEBERRY_PIE`
* **🍒 接骨木莓系列**: 
  * `ELDERBERRY` (&c接骨木莓) | `ELDERBERRY_BUSH` | `ELDERBERRY_JUICE` | `ELDERBERRY_SMOOTHIE` | `ELDERBERRY_JELLY_SANDWICH` | `ELDERBERRY_PIE`
* **🍓 覆盆子系列**: 
  * `RASPBERRY` (&d覆盆子) | `RASPBERRY_BUSH` | `RASPBERRY_JUICE` | `RASPBERRY_SMOOTHIE` | `RASPBERRY_JELLY_SANDWICH` | `RASPBERRY_PIE`
* **🖤 黑莓系列**: 
  * `BLACKBERRY` (&8黑莓) | `BLACKBERRY_BUSH` | `BLACKBERRY_JUICE` | `BLACKBERRY_SMOOTHIE` | `BLACKBERRY_JELLY_SANDWICH` | `BLACKBERRY_PIE`
* **🔴 蔓越莓 & 越橘系列**: 
  * `CRANBERRY` (&c蔓越莓) / `COWBERRY` (&c越橘) 及其各自的果汁、冰沙、三明治和派。
* **🍓 草莓系列**: 
  * `STRAWBERRY` (&4草莓) | `STRAWBERRY_BUSH` | `STRAWBERRY_JUICE` | `STRAWBERRY_SMOOTHIE` | `STRAWBERRY_JELLY_SANDWICH` | `STRAWBERRY_PIE`

---

### 3. 果树与树苗系列
> 包含各类树木产出的水果、树苗、果汁及派。

* **🍎 常见果树**: 
  * `OAK_APPLE` (&c橡果苹果) / `CHERRY` (&c樱桃) / `POMEGRANATE` (&4石榴) / `LEMON` (&e柠檬) / `PLUM` (&5李子) / `LIME` (&a青柠) / `ORANGE` (&6橙子) / `PEACH` (&5桃子) / `PEAR` (&a梨) / `DRAGON_FRUIT` (&d火龙果) / `COCONUT` (&6椰子)
  * *(以上均包含对应的 `_SAPLING` 树苗、`_JUICE` 果汁及 `_PIE` 派)*
  * 特殊饮品：`COCONUT_MILK` (&6椰子奶)

---

### 4. 蔬菜、香料与农作物
* `TOMATO`: &4番茄 (`TOMATO_BUSH`)
* `LETTUCE`: &2生菜 (`LETTUCE_BUSH`)
* `TEA_LEAF`: &a茶叶 (`TEA_LEAF_BUSH`)
* `CABBAGE`: &2卷心菜 (`CABBAGE_BUSH`)
* `SWEET_POTATO`: &6红薯 (`SWEET_POTATO_BUSH`)
* `MUSTARD_SEED`: &e芥菜籽 (`MUSTARD_SEED_BUSH`)
* `CURRY_LEAF`: &2咖喱叶 (`CURRY_LEAF_BUSH`)
* `ONION`: &c洋葱 (`ONION_BUSH`)
* `GARLIC`: &r大蒜 (`GARLIC_BUSH`)
* `CILANTRO`: &a香菜 (`CILANTRO_BUSH`)
* `BLACK_PEPPER`: &8黑胡椒 (`BLACK_PEPPER_BUSH`)
* `CORN`: &6玉米 (`CORN_BUSH`)
* `PINEAPPLE`: &6菠萝 (`PINEAPPLE_BUSH`)
* `RED_BELL_PEPPER`: &c红甜椒 (`RED_BELL_PEPPER_BUSH`)

---

### 5. 魔法作物与精华 (`_ESSENCE` & `_PLANT`)
> 魔法作物支持将各类原版矿物与资源转化为可种植的植株与精华。

* **常见矿物**: `DIRT` (泥土) | `COAL` (煤炭) | `IRON` (铁) | `GOLD` (金) | `COPPER` (铜) | `ALUMINUM` (铝) | `TIN` (锡) | `SILVER` (银) | `LEAD` (铅)
* **稀有与特殊资源**: `REDSTONE` (红石) | `LAPIS` (青金石) | `ENDER` (末影) | `QUARTZ` (石英) | `DIAMOND` (钻石) | `EMERALD` (绿宝石) | `NETHERITE` (下界合金) | `GLOWSTONE` (荧石) | `OBSIDIAN` (黑曜石) | `SLIME` (黏液)

---

### 6. 菜肴、快餐与高级料理
> 涵盖了丰富的汉堡、三明治、蛋糕、汤品及特色菜。

* **面包与汉堡类**: 
  * `HAMBURGER` (汉堡) | `CHEESEBURGER` (芝士汉堡) | `BACON_CHEESEBURGER` | `CHICKEN_BURGER` | `FISH_SANDWICH` (鱼肉三明治) | `CHICKEN_SANDWICH` | `CLUB_SANDWICH` (总汇三明治) | `HOT_DOG` (热狗)
* **面食与特色主食**: 
  * `TACO` (塔可) | `BURRITO` (墨西哥卷饼) | `LASAGNA` (千层面) | `SHEPARDS_PIE` (牧羊人派) | `CHICKEN_CURRY` (咖喱鸡) | `COCONUT_CHICKEN_CURRY` (椰香咖喱鸡)
* **甜点与蛋糕类**: 
  * `CHEESECAKE` (芝士蛋糕，含蓝莓/樱桃/南瓜等风味) | `CHOCOLATE_CAKE` (巧克力蛋糕) | `CARROT_CAKE` (胡萝卜蛋糕) | `TIRAMISU` (提拉米苏，含草莓/覆盆子/黑莓风味) | `WAFFLES` (华夫饼) | `PANCAKES` (煎饼) | `ICE_CREAM` (冰淇淋)

---

### 7. 饮品与冰沙
* **果汁与冰沙**: `LIME_SMOOTHIE` (青柠冰沙) | `TOMATO_JUICE` (番茄果汁) | `PINEAPPLE_JUICE` (菠萝果汁) | `PINEAPPLE_SMOOTHIE` (菠萝冰沙)
* **茶饮与特色饮品**: `WINE` (葡萄酒) | `LEMONADE` (柠檬水) | `SWEETENED_TEA` (甜茶) | `HOT_CHOCOLATE` (热巧克力) | `PINACOLADA` (椰林飘香) | `THAI_TEA` (泰式奶茶)
* **冰茶系列**: `LEMON_ICED_TEA` (柠檬冰茶) | `RASPBERRY_ICED_TEA` (覆盆子冰茶) | `PEACH_ICED_TEA` (桃子冰茶) | `STRAWBERRY_ICED_TEA` (草莓冰茶) | `CHERRY_ICED_TEA` (樱桃冰茶)

---

## 💡 二创与开发提示 (For Developers)

1. **自定义模型配置 (`models.yml`)**:
   * 支持通过 `CustomModelData` 配合材质包显示 3D/自定义贴图。
   * 修改后可在游戏内输入 `/eeg reload` 即时生效（玩家背包中的旧物品需重新获取）。
2. **配方自定义 (`recipe/*.yml`)**:
   * 每个物品支持设置 `hunger`（饱食度回复 0-20）、`enabled`（是否启用）、`type`（`SHAPED` 有序 / `SHAPELESS` 无序）及 `ingredients` 材料配方。