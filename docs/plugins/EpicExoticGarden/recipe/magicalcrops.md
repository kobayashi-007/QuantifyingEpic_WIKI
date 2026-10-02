# magicalcrops.yml 教程 —— 魔法作物

## 一、文件作用

- 路径：`plugins/EpicExoticGarden/recipe/magicalcrops.yml`
- 定义 15 个等级的 **魔法资源作物**：泥土、煤炭、铁、金、铜、红石、青金石、末影、石英、钻石、绿宝石、下界合金、荧石、黑曜石、史莱姆。
- 玩家合成魔法作物种子 → 种植收获"精华（ESSENCE）" → 用精华兑换原版资源，形成一条资源农业线。

## 二、每个等级的三段式结构

以泥土等级为例，一个完整等级由三部分组成：

```yaml
# 第 1 段：魔法作物（种子）—— SHAPED 有序合成
DIRT_PLANT:
  enabled: true
  amount: 1
  type: SHAPED
  pattern:
  - " O "
  - "OCO"
  - " O "
  ingredients:
    O: DIRT            # 该等级的代表材料
    C: WHEAT_SEEDS     # 种子：最初为小麦种子，之后为上一级魔法作物

# 第 2 段：精华 —— 默认无配方，靠种植魔法作物 / 草丛获得
DIRT_ESSENCE: {}

# 第 3 段：资源兑换 —— 8 个精华合成原版资源
DIRT:
  enabled: true
  amount: 2
  type: SHAPELESS
  ingredients:
  - DIRT_ESSENCE:8
```

三部分关系：

```
代表材料 + 种子 ──► XXX_PLANT（种下、收获）──► XXX_ESSENCE ──8 个──► 原版资源
```

## 三、看懂十字图案（SHAPED pattern）

所有魔法作物的图案都相同：

```yaml
pattern:
- " O "
- "OCO"
- " O "
```

对应工作台九宫格：

```
[  空 ][ O ][  空  ]
[  O ][ C ][  O  ]
[  空 ][ O ][  空  ]
```

- 每个字符代表一格，空格 `' '` 表示不放东西。
- 字符含义在 `ingredients` 中映射：`O` = 外圈材料，`C` = 中心种子。
- 每行最多 3 个字符，最多 3 行，必须带引号。

## 四、15 个等级完整数据表

| 魔法作物 | 外圈材料 O | 中心种子 C | 兑换配方（8 精华） | 产量 |
|----------|-----------|-----------|--------------------|------|
| DIRT_PLANT | DIRT | WHEAT_SEEDS | DIRT_ESSENCE:8 → DIRT | 2 |
| COAL_PLANT | COAL_ORE | WHEAT_SEEDS | COAL_ESSENCE:8 → COAL | 2 |
| IRON_PLANT | IRON_BLOCK | COAL_PLANT | IRON_ESSENCE:8 → IRON_INGOT | 1 |
| GOLD_PLANT | GOLD_INGOT | IRON_PLANT | GOLD_ESSENCE:8 → GOLD_INGOT | 1 |
| COPPER_PLANT | COPPER_INGOT | GOLD_PLANT | COPPER_ESSENCE:8 → COPPER_INGOT | 8 |
| REDSTONE_PLANT | REDSTONE_BLOCK | GOLD_PLANT | REDSTONE_ESSENCE:8 → REDSTONE | 8 |
| LAPIS_PLANT | LAPIS_ORE | REDSTONE_PLANT | LAPIS_ESSENCE:8 → LAPIS_LAZULI | 16 |
| ENDER_PLANT | ENDER_PEARL | LAPIS_PLANT | ENDER_ESSENCE:8 → ENDER_PEARL | 4 |
| QUARTZ_PLANT | NETHER_QUARTZ_ORE | ENDER_PLANT | QUARTZ_ESSENCE:8 → QUARTZ | 8 |
| DIAMOND_PLANT | DIAMOND | QUARTZ_PLANT | DIAMOND_ESSENCE:8 → DIAMOND | 1 |
| EMERALD_PLANT | EMERALD | DIAMOND_PLANT | EMERALD_ESSENCE:8 → EMERALD | 1 |
| NETHERITE_PLANT | NETHERITE_BLOCK | EMERALD_PLANT | NETHERITE_ESSENCE:8 → NETHERITE_INGOT | 1 |
| GLOWSTONE_PLANT | GLOWSTONE | REDSTONE_PLANT | GLOWSTONE_ESSENCE:8 → GLOWSTONE_DUST | 8 |
| OBSIDIAN_PLANT | OBSIDIAN | LAPIS_PLANT | OBSIDIAN_ESSENCE:8 → OBSIDIAN | 2 |
| SLIME_PLANT | SLIME_BALL | ENDER_PLANT | SLIME_ESSENCE:8 → SLIME_BALL | 8 |

等级链（中心种子的传承关系）：

```
WHEAT_SEEDS ─► DIRT_PLANT / COAL_PLANT
COAL_PLANT ─► IRON_PLANT ─► GOLD_PLANT ─► COPPER_PLANT
                              ├─► REDSTONE_PLANT ─► LAPIS_PLANT ─► ENDER_PLANT ─► QUARTZ_PLANT
                              │                    │                 └─► SLIME_PLANT
                              │                    ├─► OBSIDIAN_PLANT
                              │                    └─► GLOWSTONE_PLANT（分支自 REDSTONE_PLANT）
                              └─► ... 
ENDER_PLANT ─► QUARTZ_PLANT ─► DIAMOND_PLANT ─► EMERALD_PLANT ─► NETHERITE_PLANT
```

## 五、精华为什么是空的 `{}`

```yaml
DIRT_ESSENCE: {}
```

- `{}` 是空映射，等于"此条目存在但不定义任何配方"。
- 精华设计为 **只能靠种植魔法作物收获 / 草丛掉落**，不能直接合成，避免刷资源。
- 精华条目必须保留：第三段兑换配方通过 `XXX_ESSENCE:8` 引用它，删掉会导致整条链失效。

## 六、实操：给精华添加合成配方（谨慎）

如果你想让精华也可直接合成，把 `{}` 替换为完整配方。例如 4 个泥土合成 1 个泥土精华：

```yaml
DIRT_ESSENCE:
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - DIRT
  - DIRT
  - DIRT
  - DIRT
```

步骤：

1. 备份文件。
2. 把 `DIRT_ESSENCE: {}` 整行替换为上面的内容，注意缩进。
3. **重启服务器**。
4. 严格测试经济平衡：精华可合成通常意味着对应资源可无限量产，高等级（钻石、下界合金）不建议开放。

## 七、修改与禁用

- **禁用某一等级**：把该等级三段中的 `enabled` 全部改为 `false`。
  - 只禁作物不禁兑换：玩家仍可消耗存量精华，但无法再获得新精华。
  - 注意连锁影响：禁用 IRON_PLANT 会导致 GOLD_PLANT 失去合成种子。
- **调整兑换比例**：改第三段的 `amount`（精华数量固定为 8，改数量需同步改 ingredients 的 `:8`）。
- 魔法作物和精华不是食物，没有 `hunger`。

## 八、注意事项

- 所有改动需 **重启服务器** 生效，`/epicgarden reload` 对合成配方无效。
- YAML 缩进只用空格，禁止 Tab；pattern 字符串必须加引号。
- 新增自定义等级时，三个 ID 必须遵守 `XXX_PLANT` / `XXX_ESSENCE` / `XXX` 的命名约定并互相对应。
- 上游材料必须真实存在（如 NETHERITE_BLOCK、COPPER_INGOT），否则配方注册失败，查看启动日志定位。
