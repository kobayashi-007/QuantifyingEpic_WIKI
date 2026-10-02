# ingredients.yml 教程 —— 配料与调料

## 一、文件作用

- 路径：`plugins/EpicExoticGarden/recipe/ingredients.yml`
- 定义 15 种 **基础配料 / 调料** 的合成配方：面粉、盐、黄油、奶酪、蛋黄酱等。
- 它们是菜肴（dishes.yml）和饮料（drinks.yml）的 **中间原料**，一般不直接食用，所以条目没有 `hunger` 字段。
- 全部为 `SHAPELESS` 无序合成。

## 二、字段说明

| 字段 | 说明 |
|------|------|
| `enabled` | `true` 启用 / `false` 禁用 |
| `amount` | 产出数量（如 ICE_CUBE 一次出 4 个） |
| `type` | 本文件全部为 `SHAPELESS` |
| `ingredients` | 原料列表；插件物品写 ID，原版物品写材质名 |

## 三、配料清单与合成关系（共 15 种）

| ID | 中文 | 配方 | 产量 |
|----|------|------|------|
| ICE_CUBE | 冰块 | ICE ×4（浮冰） | 4 |
| WHEAT_FLOUR | 小麦粉 | WHEAT | 1 |
| SALT | 盐 | WATER_BUCKET | 1 |
| HEAVY_CREAM | 浓奶油 | MILK_BUCKET | 1 |
| BUTTER | 黄油 | HEAVY_CREAM + SALT | 1 |
| CHEESE | 奶酪 | MILK_BUCKET + SALT | 1 |
| MAYO | 蛋黄酱 | EGG | 1 |
| MUSTARD | 芥末酱 | MUSTARD_SEED（芥菜籽） | 1 |
| BBQ_SAUCE | 烧烤酱 | TOMATO + MUSTARD + SALT + SUGAR | 1 |
| VEGETABLE_OIL | 植物油 | BEETROOT_SEEDS + WATER_BUCKET | 1 |
| CORNMEAL | 玉米粉 | CORN | 1 |
| YEAST | 酵母 | SUGAR + WATER_BUCKET | 1 |
| MOLASSES | 糖蜜 | BEETROOT + SUGAR_CANE + WATER_BUCKET | 1 |
| BROWN_SUGAR | 红糖 | SUGAR + MOLASSES | 1 |
| COUNTRY_GRAVY | 乡村肉汁 | WHEAT_FLOUR + SUGAR + BLACK_PEPPER | 1 |

## 四、加工链一览

配料之间存在上下游关系，理解链条才能安排生产：

```
WATER_BUCKET ──► SALT ──┬──► BUTTER ◄── HEAVY_CREAM ◄── MILK_BUCKET
                        └──► CHEESE
MILK_BUCKET ──► HEAVY_CREAM
WHEAT ──► WHEAT_FLOUR ──┬──► COUNTRY_GRAVY
CORN ──► CORNMEAL
EGG ──► MAYO
MUSTARD_SEED ──► MUSTARD ──► BBQ_SAUCE ◄── TOMATO / SALT / SUGAR
BEETROOT_SEEDS + WATER_BUCKET ──► VEGETABLE_OIL
SUGAR + WATER_BUCKET ──► YEAST
BEETROOT + SUGAR_CANE + WATER_BUCKET ──► MOLASSES ──► BROWN_SUGAR
ICE（浮冰）──► ICE_CUBE（×4）
```

## 五、重要特性：桶会被消耗

`SALT`、`HEAVY_CREAM`、`VEGETABLE_OIL`、`YEAST`、`MOLASSES` 的配方使用 `WATER_BUCKET` 或 `MILK_BUCKET`。

- 无序合成中桶会被 **直接消耗**，不返还空桶。
- 大量制作前请储备足够的铁桶，或配合其它回收桶的插件 / 数据包装置使用。

## 六、实操：添加一种新配料

以"奶油奶酪 CREAM_CHEESE"为例，在文件末尾追加：

```yaml
CREAM_CHEESE:
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - CHEESE
  - HEAVY_CREAM
```

步骤：

1. 备份文件后追加，顶级 ID 顶格、字段缩进 2 空格、原料以 `- ` 开头。
2. 确认原料（CHEESE、HEAVY_CREAM）在本文件中已定义。
3. 如果要在菜肴中使用它，再去 dishes.yml 的配方里写上 `CREAM_CHEESE`。
4. **重启服务器**使配方生效。

## 七、修改与禁用

- 禁用某种配料：`enabled: false`，重启生效。
  - 注意：被禁用后，所有 **以它为原料** 的下游配方将无法合成（如禁用 SALT 会导致 BUTTER、CHEESE、BBQ_SAUCE 全部断供），操作前先检查链条。
- 调整产量：改 `amount`，如让 WHEAT_FLOUR 1 个小麦出 2 份粉。
- 配料不是食物，不需要 `hunger`；填了也无效果。

## 八、注意事项

- YAML 缩进只用空格，禁止 Tab。
- ID 全大写下划线风格，全文件唯一。
- 原料必须真实存在：原版物品核对材质名（如 `BEETROOT_SEEDS`），插件物品核对其它 yml 中是否已注册。
- 修改后需重启；本文件不涉及 `/epicgarden reload` 的热更新内容（没有 hunger 字段）。
