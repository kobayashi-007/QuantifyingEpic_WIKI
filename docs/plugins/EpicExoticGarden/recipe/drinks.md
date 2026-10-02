# drinks.yml 教程 —— 饮料配方

## 一、文件作用

- 路径：`plugins/EpicExoticGarden/recipe/drinks.yml`
- 定义插件全部 **饮料** 的合成配方与饱食度：果汁、冰沙、冰茶、酒、热巧克力等。
- 所有饮料均为 `SHAPELESS`（无序）合成，在工作台任意摆放原料即可。

## 二、字段说明

| 字段 | 说明 | 示例 |
|------|------|------|
| `hunger` | 饱食度 0–20；修改后 `/epicgarden reload` 立即生效 | `6` |
| `enabled` | `true` 启用配方 / `false` 禁用 | `true` |
| `amount` | 一次合成产出数量 | `1` |
| `type` | 本文件全部为 `SHAPELESS` | `SHAPELESS` |
| `ingredients` | 原料列表，每行一个；自定义物品写 ID，原版物品写材质名 | `- GRAPE` |

## 三、饮料的三条基础合成链

本文件的设计非常有规律，理解三条链即可举一反三：

```
水果 ──────► 果汁 (hunger 6)        配方：1 个水果
果汁 + 冰块 ► 冰沙 (hunger 10)      配方：果汁 + ICE_CUBE
水果 + 冰块 + 茶叶 ► 冰茶 (hunger 13)
```

## 四、本文件饮料清单（共 45 种）

### 1. 果汁（21 种，饱食 6，配方：1 个对应水果）

GRAPE / BLUEBERRY / ELDERBERRY / RASPBERRY / BLACKBERRY / CRANBERRY / COWBERRY / STRAWBERRY / OAK_APPLE / CHERRY / POMEGRANATE / LEMON / PLUM / LIME / ORANGE / PEACH / PEAR / DRAGON_FRUIT / TOMATO / PINEAPPLE 的果汁。

特殊：**COCONUT_MILK（椰奶）** 由 `COCONUT` 制成，不叫 COCONUT_JUICE。

### 2. 冰沙（10 种，饱食 10，配方：对应果汁 + ICE_CUBE）

GRAPE / BLUEBERRY / ELDERBERRY / RASPBERRY / BLACKBERRY / CRANBERRY / COWBERRY / STRAWBERRY / LIME / PINEAPPLE 的 SMOOTHIE。

> 注意：并非每种果汁都有对应冰沙，新增水果时如果想要冰沙需自己添加。

### 3. 冰茶（5 种，饱食 13，配方：水果 + ICE_CUBE + TEA_LEAF）

LEMON_ICED_TEA / RASPBERRY_ICED_TEA / PEACH_ICED_TEA / STRAWBERRY_ICED_TEA / CHERRY_ICED_TEA。

### 4. 其它饮料

| ID | 饱食 | 配方 |
|----|------|------|
| WINE（葡萄酒） | 10 | GRAPE + SUGAR |
| SWEETENED_TEA（甜茶） | 6 | TEA_LEAF + SUGAR |
| THAI_TEA（泰式奶茶） | 14 | TEA_LEAF + SUGAR + HEAVY_CREAM + COCONUT_MILK |
| HOT_CHOCOLATE（热巧克力） | 8 | CHOCOLATE_BAR + HEAVY_CREAM |
| LEMONADE（柠檬水） | 8 | LEMON_JUICE + SUGAR |
| PINACOLADA（椰林飘香） | 14 | PINEAPPLE + ICE_CUBE + COCONUT_MILK |

## 五、原料从哪来

| 原料 | 来源 |
|------|------|
| 各种水果 | 草丛掉落 / 种植收获（见 fruits.yml） |
| ICE_CUBE（冰块） | ingredients.yml：4 × ICE（浮冰）合成 4 个 |
| TEA_LEAF（茶叶） | 草丛掉落 / 种植收获 |
| HEAVY_CREAM（浓奶油） | ingredients.yml：MILK_BUCKET 合成 |
| CHOCOLATE_BAR | dishes.yml：COCOA_BEANS + HEAVY_CREAM |
| COCONUT_MILK | 本文件：COCONUT 合成 |

## 六、实操：添加一套新水果饮料

假设你新增了水果 `MANGO`，在文件末尾依次追加三段，即可解锁完整饮料链：

```yaml
# 1) 果汁：1 个芒果
MANGO_JUICE:
  hunger: 6
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - MANGO

# 2) 冰沙：芒果汁 + 冰块
MANGO_SMOOTHIE:
  hunger: 10
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - MANGO_JUICE
  - ICE_CUBE

# 3) 芒果冰茶：芒果 + 冰块 + 茶叶
MANGO_ICED_TEA:
  hunger: 13
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - MANGO
  - ICE_CUBE
  - TEA_LEAF
```

步骤：

1. 备份文件后追加内容，顶级 ID 顶格，字段缩进 2 空格。
2. 确认前置物品（水果、ICE_CUBE、TEA_LEAF）均存在。
3. **重启服务器**使合成配方生效。
4. 进游戏工作台验证。

## 七、修改与禁用

- 不想让玩家制作某饮料：`enabled: false`，重启生效。
- 只调整 `hunger`：改完执行 `/epicgarden reload`，无需重启。
- 想提高产量（如一杯果汁出 2 杯）：改 `amount`。

## 八、注意事项

- 所有饮料都必须带杯子/容器吗？当前版本配方 **不需要** 玻璃杯，直接产出饮料物品。
- YAML 缩进只用空格，禁止 Tab。
- ID 全局唯一且全大写下划线风格。
- 原料必须在当前版本真实存在，否则配方注册失败并输出启动日志。
- 删除配方条目只会取消合成，不会删除玩家背包里已有的饮料。
