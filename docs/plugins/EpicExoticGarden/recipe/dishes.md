# dishes.yml 教程 —— 菜肴配方

## 一、文件作用

- 路径：`plugins/EpicExoticGarden/recipe/dishes.yml`
- 定义插件全部 **菜肴成品**（三明治、汉堡、派、咖喱、蛋糕等）的合成配方与饱食度。
- 玩家在工作台按配方合成，食用后恢复 `hunger` 设定的饱食值。

## 二、字段说明

| 字段 | 说明 | 示例 |
|------|------|------|
| `hunger` | 饱食度，范围 0–20；修改后执行 `/epicgarden reload` 立即生效 | `16` |
| `enabled` | 是否注册该配方：`true` 启用，`false` 禁用 | `true` |
| `amount` | 一次合成产出的物品数量 | `1` |
| `type` | `SHAPELESS` 无序合成 / `SHAPED` 有序合成 | `SHAPELESS` |
| `ingredients` | 原料列表（无序）或字符映射（有序） | 见下文 |
| `pattern` | 有序合成的 3×3 图案，仅 `SHAPED` 需要 | `" O "` |

**ingredients 中原料的三种写法：**

1. 插件自定义物品：直接写 ID，如 `GRAPE_JUICE`、`BUTTER`、`MAYO`
2. 原版物品：写材质名，如 `SUGAR`、`COOKED_BEEF`、`BREAD`、`EGG`
3. 需要多个同一种原料：重复写多行即可
4. 数量后缀 `:数量`：如 `DIRT_ESSENCE:8` 表示 8 个（主要用于魔法作物精华）

## 三、本文件菜肴清单（共 105 道）

### 1. 果酱三明治（配方：面包 + 果汁 + 面包，饱食 16）

GRAPE / BLUEBERRY / ELDERBERRY / RASPBERRY / BLACKBERRY / CRANBERRY / COWBERRY / STRAWBERRY 的 `JELLY_SANDWICH`，共 8 种。

### 2. 水果派（配方：水果 + 蛋 + 糖 + 牛奶桶 + 小麦粉，饱食 13）

GRAPE / BLUEBERRY / ELDERBERRY / RASPBERRY / BLACKBERRY / CRANBERRY / COWBERRY / STRAWBERRY / OAK_APPLE / CHERRY / POMEGRANATE / LEMON / PLUM / LIME / ORANGE / PEACH / PEAR / DRAGON_FRUIT 的 `PIE`，共 18 种。

### 3. 三明治与汉堡

| ID | 饱食 | 主要原料 |
|----|------|----------|
| CHICKEN_SANDWICH | 11 | 熟鸡肉 + 蛋黄酱 + 面包 |
| FISH_SANDWICH | 11 | 熟鳕鱼 + 蛋黄酱 + 面包 |
| SANDWICH | 19 | 面包+蛋黄酱+熟牛肉+番茄+生菜 |
| BLT | 18 | 面包+熟猪排+番茄+生菜 |
| CLUB_SANDWICH | 19 | 三明治全套 + 芥末酱 |
| BACON_SANDWICH | 19 | 面包+培根+蛋黄酱+番茄+生菜 |
| GRILLED_SANDWICH | 11 | 面包+熟猪排+奶酪 |
| LEAFY_CHICKEN_SANDWICH | 13 | 鸡肉三明治 + 生菜 |
| LEAFY_FISH_SANDWICH | 13 | 鱼肉三明治 + 生菜 |
| HAMBURGER | 10 | 面包 + 熟牛肉 |
| CHEESEBURGER | 13 | 汉堡 + 奶酪 |
| BACON_CHEESEBURGER | 17 | 芝士汉堡 + 培根 |
| DELUXE_CHEESEBURGER | 16 | 芝士汉堡 + 生菜 + 番茄 |
| CHICKEN_BURGER | 10 | 面包 + 熟鸡肉 |
| CHICKEN_CHEESEBURGER | 13 | 鸡肉汉堡 + 奶酪 |
| BACON_BURGER | 10 | 面包 + 培根 |

### 4. 沙拉 / 汤 / 烤派

| ID | 饱食 | 主要原料 |
|----|------|----------|
| POTATO_SALAD | 12 | 烤土豆+蛋黄酱+洋葱+碗 |
| EGG_SALAD | 12 | 蛋+蛋黄酱+碗 |
| TOMATO_SOUP | 11 | 碗 + 番茄 |
| STRAWBERRY_SALAD | 10 | 碗+草莓+生菜+番茄 |
| GRAPE_SALAD | 10 | 碗+葡萄+生菜+番茄 |
| SHEPARDS_PIE | 16 | 卷心菜+胡萝卜+小麦粉+熟牛肉+番茄 |
| CHICKEN_POT_PIE | 17 | 熟鸡肉+胡萝卜+小麦粉+土豆 |
| STUFFED_RED_BELL_PEPPER | 14 | 红甜椒+洋葱+大蒜+番茄 |

### 5. 咖喱

| ID | 饱食 | 主要原料 |
|----|------|----------|
| CHICKEN_CURRY | 16 | 香菜+熟鸡肉+红糖+咖喱叶×2+植物油+洋葱+碗+大蒜 |
| COCONUT_CHICKEN_CURRY | 19 | 椰子×2 + 鸡肉咖喱 |

### 6. 奶酪蛋糕系列

| ID | 饱食 |
|----|------|
| CHEESECAKE（糖+小麦粉+浓奶油+蛋） | 16 |
| CHERRY_CHEESECAKE / BLUEBERRY_CHEESECAKE / PUMPKIN_CHEESECAKE | 17 |
| SWEETENED_PEAR_CHEESECAKE | 18 |

### 7. 甜点 / 蛋糕 / 面包

| ID | 饱食 |
|----|------|
| CHOCOLATE_BAR（可可豆+浓奶油） | 3 |
| PUMPKIN_BREAD | 8 |
| BAGEL（酵母+小麦粉） | 4 |
| BISCUIT（小麦粉+黄油） | 4 |
| GARLIC_BREAD / GARLIC_CHEESE_BREAD | 10 / 13 |
| PANCAKES / BLUEBERRY_PANCAKES / SWEET_BERRY_PANCAKES | 12 / 13 / 13 |
| WAFFLES | 12 |
| CARROT_CAKE | 12 |
| BLACKBERRY_COBBLER | 12 |
| JAMMY_DODGER（饼干+覆盆子汁+饼干） | 10 |
| PAVLOVA | 18 |
| CHOCOLATE_CAKE | 17 |
| CREAM_COOKIE | 12 |
| BLUEBERRY / PUMPKIN / CHOCOLATE_CHIP MUFFIN | 13 |
| BOSTON_CREAM_PIE | 9 |
| ICE_CREAM | 16 |
| TIRAMISU | 16 |
| TIRAMISU_WITH_STRAWBERRIES / RASPBERRIES / BLACKBERRIES | 18 |
| CHOCOLATE_STRAWBERRY | 5 |
| SWEET_POTATO_PIE | 13 |
| CHOCOLATE_PEAR_CAKE / APPLE_PEAR_CAKE | 19 / 18 |
| LAMINGTON | 18 |

### 8. 玉米 / 土豆 / 小吃

| ID | 饱食 |
|----|------|
| CORN_ON_THE_COB（黄油+玉米） | 9 |
| CREAMED_CORN（浓奶油+玉米+碗） | 8 |
| FRIES（土豆+盐） | 12 |
| POPCORN / SWEET_POPCORN / SALTY_POPCORN | 8 / 12 / 12 |
| BACON（1 熟猪排 → 3 培根） | 3 |

### 9. 热狗

| ID | 饱食 |
|----|------|
| HOT_DOG（熟猪排+面包） | 10 |
| BACON_WRAPPED_CHEESE_FILLED_HOT_DOG | 17 |
| BBQ_BACON_WRAPPED_HOT_DOG | 17 |
| BBQ_DOUBLE_BACON_WRAPPED_HOT_DOG_IN_A_TORTILLA_WITH_CHEESE | 20 |

### 10. 墨西哥风味 / 千层面

TACO / FISH_TACO / STREET_TACO / BURRITO / CHICKEN_BURRITO（饱食 18）、LASAGNA（饱食 17）。

## 四、实操：添加一道新菜

以"苹果派"为例，在文件 **末尾** 追加：

```yaml
MY_APPLE_PIE:
  hunger: 14
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - OAK_APPLE
  - SUGAR
  - EGG
```

步骤：

1. 先备份原文件。
2. 在文件末尾空一行后粘贴，顶级 ID（`MY_APPLE_PIE`）顶格写，全部大写下划线命名。
3. 字段缩进 **2 个空格**；原料每一行以 `- ` 开头。
4. 确认每个原料 ID 在当前版本真实存在（自定义物品在其它配置文件中，原版物品用材质名）。
5. **重启服务器**：合成配方的改动必须重启才生效（`/epicgarden reload` 只对饱食度生效）。
6. 进游戏在工作台验证配方。

## 五、修改与禁用

- **暂时下架某道菜**：把 `enabled: true` 改为 `false`，重启后玩家无法再合成（已有物品仍保留）。
- **调整产量**：改 `amount`，例如 BACON 配方 `amount: 3` 一次出 3 个培根。
- **调整饱食度**：只改 `hunger` 时无需重启，`/epicgarden reload` 即可。

## 六、注意事项与常见错误

- 无序合成最多 9 个原料（工作台 3×3 格）。
- `MILK_BUCKET`、`WATER_BUCKET` 作为原料时会被 **直接消耗**，不返还空桶。
- 同一文件内配方 ID 不能重复，否则后一个会覆盖前一个。
- YAML 只允许空格缩进，**禁止 Tab**；不要遗漏冒号。
- 原料 ID 拼写错误或物品已被删除时，该配方会注册失败，注意查看启动日志。
- 注释以 `#` 开头，写注释不影响配置。
