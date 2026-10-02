# 合成教程 —— EpicExoticGarden 配方编写完全指南

> 适用目录：`plugins/EpicExoticGarden/recipe/`
> 适用文件：dishes.yml / drinks.yml / fruits.yml / ingredients.yml / magicalcrops.yml / plants.yml / tools.yml

---

## 一、核心概念：一切皆"配方块"

recipe 目录下每个 yml 文件都由若干 **顶级配方** 组成。一个顶级配方就是一个完整的合成定义：

```yaml
配方ID:
  字段1: 值
  字段2: 值
  ...
```

- **配方 ID 顶格写**，全部大写 + 下划线，如 `GRAPE_PIE`、`CROOK`。
- 字段在 ID 下方 **缩进 2 个空格**。
- ID 即合成结果的物品，不能与同文件其它 ID 重复。

## 二、字段总表

| 字段 | 必填 | 取值 | 说明 |
|------|------|------|------|
| `enabled` | 否 | `true` / `false` | 是否注册配方；不写默认启用 |
| `amount` | 否 | 正整数 | 一次合成产出数量，默认 1 |
| `type` | 是（有配方时） | `SHAPELESS` / `SHAPED` | 无序 / 有序 |
| `ingredients` | 是 | 列表 | 原料 |
| `pattern` | SHAPED 必填 | 字符串列表 | 有序网格图案 |
| `hunger` | 否 | 0–20 | 食物饱食度（与合成相互独立，详见《修改饥饿值教程.md》） |

## 三、两种合成类型

### 1. SHAPELESS 无序合成

原料在工作台中 **任意摆放**，放满对应种类和数量即可：

```yaml
CHICKEN_SANDWICH:
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - COOKED_CHICKEN
  - MAYO
  - BREAD
```

特点：

- 原料每一行以 `- ` 开头，顺序无所谓。
- 最多 9 个原料（对应 3×3 工作台）。
- dishes / drinks / ingredients 以及魔法作物的"精华兑换"均使用此类型。

### 2. SHAPED 有序合成

必须按 **固定形状** 摆放，需要 `pattern`（图案）+ `ingredients`（字符映射）两个字段配合：

```yaml
CROOK:
  enabled: true
  amount: 1
  type: SHAPED
  pattern:
  - "SS "
  - " S "
  - " S "
  ingredients:
    S: STICK
```

解读：

```
工作台九宫格：
[S ][S ][空]
[空][S ][空]
[空][S ][空]
```

规则：

- `pattern` 最多 3 行，每行最多 3 个字符，**必须加引号**。
- 字符（如 `S`、`O`、`C`）只是占位符，具体代表什么由下方 `ingredients` 映射决定。
- 空格 `' '` = 该格不放任何物品。
- 有序配方支持"压缩形状"：例如 2 行 2 列的图案放在工作台任意位置都能合成（Minecraft 原生特性）。

魔法作物统一使用十字形图案：

```yaml
pattern:
- " O "
- "OCO"
- " O "
ingredients:
  O: 外圈材料
  C: 中心种子
```

## 四、ingredients 的两种写法

### 写法 A：SHAPELESS —— 原料列表

每行一个原料，插件自动识别：

```yaml
ingredients:
- GRAPE_JUICE        # 插件自定义物品 ID
- SUGAR              # 原版物品材质名
- BREAD
```

### 写法 B：SHAPED —— 字符映射

```yaml
ingredients:
  O: DIRT             # 图案里的 O = 泥土
  C: WHEAT_SEEDS      # 图案里的 C = 小麦种子
```

## 五、原料的三种来源表示法

| 表示法 | 含义 | 示例 |
|--------|------|------|
| 自定义物品 ID | 本插件（或其链路上）注册的物品 | `GRAPE`、`BUTTER`、`DIRT_ESSENCE`、`CHICKEN_CURRY` |
| 原版材质名 | Minecraft 原生物品，直接写 Material 枚举 | `EGG`、`SUGAR`、`COOKED_BEEF`、`MILK_BUCKET`、`STICK` |
| `ID:数量` 后缀 | 同一种原料需要多个（数量型原料） | `DIRT_ESSENCE:8` = 8 个精华 |

需要多个同原料时，也可以 **重复写多行**：

```yaml
ingredients:
- BREAD
- GRAPE_JUICE
- BREAD        # 共需 2 个面包
```

## 六、特殊：空配方 `{}` 与"只有 hunger"的条目

并非每个条目都有配方。插件有意把部分物品设为 **只能通过种植 / 掉落获得**：

### 1. 空占位

```yaml
GRAPE_BUSH: {}
GRASS_SEEDS: {}
DIRT_ESSENCE: {}
```

- `{}` 表示条目存在但不定义配方，该物品不能合成。
- 条目不能删——它承担物品注册，且可能被其它配方引用。
- 想启用：把 `ID: {}` 整行替换为完整配方块。

### 2. 只有 hunger 的条目（fruits.yml）

```yaml
GRAPE:
  hunger: 2
```

水果只定义了生吃饱食度，没有合成配方，靠草丛 / 种植获取。

## 七、完整操作流程（添加 / 修改一个配方）

1. **备份**：修改前先复制原 yml 文件留底。
2. **定位文件**：
   - 菜肴 → dishes.yml
   - 饮料 → drinks.yml
   - 配料 → ingredients.yml
   - 魔法作物 → magicalcrops.yml
   - 灌木树苗 → plants.yml
   - 工具 → tools.yml
3. **编写 / 修改配方块**，注意：
   - 顶级 ID 顶格、字段缩进 2 空格、列表用 `- `。
   - 原料 ID 全部在当前版本真实存在（自定义物品查其它 yml，原版物品查材质名）。
4. **重启服务器**：合成配方（enabled / amount / type / ingredients / pattern）的改动 **必须重启** 才生效。
5. **进游戏验证**：工作台摆出配方确认产物；失败则查看启动日志中的报错。

> 只有 `hunger` 字段例外，可用 `/epicgarden reload` 热加载。

## 八、禁用与删除的区别

| 操作 | 做法 | 效果 |
|------|------|------|
| 临时禁用 | `enabled: false` + 重启 | 玩家无法再合成；已有物品保留；随时可恢复 |
| 彻底移除 | 删除整个配方块 + 重启 | 配方消失；物品本体若为插件物品仍可能存在 |
| 恢复默认不可合成 | 改回 `ID: {}` + 重启 | 适用于 plants / tools / magicalcrops 精华 |

## 九、连锁影响（改动前必查）

插件配方呈"加工链"结构，改动上游会波及下游：

```
水果(fruits) ─► 果汁/冰沙(drinks)
            └► 配料(ingredients) ─► 菜肴(dishes)
魔法作物种子(PLANT) ─► 精华(ESSENCE) ─► 原版资源
```

- 禁用 `SALT` → BUTTER、CHEESE、BBQ_SAUCE 全部断供。
- 禁用 `IRON_PLANT` → GOLD_PLANT 等后续魔法作物无法合成。
- 删除或重命名水果 → 引用它的所有果汁、菜肴配方注册失败。

## 十、常见错误清单

1. **Tab 缩进**：YAML 只允许空格，Tab 会直接解析失败。
2. **pattern 未加引号**：`- SS ` 可能被错误解析，一律写 `- "SS "`。
3. **字符未映射**：图案中出现的每个非空字符，都必须在 ingredients 中有对应键。
4. **原料拼写错误 / 物品不存在**：配方注册失败，启动日志会有明确报错。
5. **忘记重启**：`/epicgarden reload` 只更新饱食度，不更新合成配方。
6. **原料超过 9 个**：工作台放不下，配方无效。
7. **桶的误解**：`WATER_BUCKET` / `MILK_BUCKET` 在无序合成中会被直接消耗，不返还空桶。
8. **ID 重复**：同一文件内重复定义，后者覆盖前者。
