# plants.yml 教程 —— 灌木与树苗

## 一、文件作用

- 路径：`plugins/EpicExoticGarden/recipe/plants.yml`
- 注册 33 种 **植物本体**：22 个灌木（BUSH）+ 11 个树苗（SAPLING）。
- 这些就是玩家种在地里、成熟后结出水果的方块。
- **默认全部没有合成配方**，靠草丛掉落 / 野外获取；本文件只负责"占位注册"。

## 二、条目格式：空占位 `{}`

文件中每个条目都长这样：

```yaml
GRAPE_BUSH: {}
```

- `{}` 是空映射：条目存在，但没有任何字段 —— 意味着该植物 **不能合成**。
- 条目不能删除：删掉后对应水果就没有了植株来源，种植链断裂。
- 想要可合成，把 `{}` 替换为完整配方即可（见第四节）。

## 三、植物清单（共 33 种）

### 灌木 BUSH（22 种，低矮作物，种在耕地上结果）

| 灌木 ID | 对应水果 |
|---------|----------|
| GRAPE_BUSH | GRAPE 葡萄 |
| BLUEBERRY_BUSH | BLUEBERRY 蓝莓 |
| ELDERBERRY_BUSH | ELDERBERRY 接骨木莓 |
| RASPBERRY_BUSH | RASPBERRY 覆盆子 |
| BLACKBERRY_BUSH | BLACKBERRY 黑莓 |
| CRANBERRY_BUSH | CRANBERRY 蔓越莓 |
| COWBERRY_BUSH | COWBERRY 越橘 |
| STRAWBERRY_BUSH | STRAWBERRY 草莓 |
| TOMATO_BUSH | TOMATO 番茄 |
| LETTUCE_BUSH | LETTUCE 生菜 |
| TEA_LEAF_BUSH | TEA_LEAF 茶叶 |
| CABBAGE_BUSH | CABBAGE 卷心菜 |
| SWEET_POTATO_BUSH | SWEET_POTATO 红薯 |
| MUSTARD_SEED_BUSH | MUSTARD_SEED 芥菜籽 |
| CURRY_LEAF_BUSH | CURRY_LEAF 咖喱叶 |
| ONION_BUSH | ONION 洋葱 |
| GARLIC_BUSH | GARLIC 大蒜 |
| CILANTRO_BUSH | CILANTRO 香菜 |
| BLACK_PEPPER_BUSH | BLACK_PEPPER 黑胡椒 |
| CORN_BUSH | CORN 玉米 |
| PINEAPPLE_BUSH | PINEAPPLE 菠萝 |
| RED_BELL_PEPPER_BUSH | RED_BELL_PEPPER 红甜椒 |

### 树苗 SAPLING（11 种，长成乔木后收获果实）

| 树苗 ID | 对应果实 |
|---------|----------|
| OAK_APPLE_SAPLING | OAK_APPLE 橡苹果 |
| COCONUT_SAPLING | COCONUT 椰子 |
| CHERRY_SAPLING | CHERRY 樱桃 |
| POMEGRANATE_SAPLING | POMEGRANATE 石榴 |
| LEMON_SAPLING | LEMON 柠檬 |
| PLUM_SAPLING | PLUM 李子 |
| LIME_SAPLING | LIME 青柠 |
| ORANGE_SAPLING | ORANGE 橙子 |
| PEACH_SAPLING | PEACH 桃子 |
| PEAR_SAPLING | PEAR 梨 |
| DRAGON_FRUIT_SAPLING | DRAGON_FRUIT 火龙果 |

## 四、实操：让灌木 / 树苗可以合成

典型用法：用"水果本身"合成植株（吃剩的果核拿去种），例如 3 个草莓合成 1 个草莓灌木。

把：

```yaml
STRAWBERRY_BUSH: {}
```

替换为：

```yaml
STRAWBERRY_BUSH:
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - STRAWBERRY
  - STRAWBERRY
  - STRAWBERRY
```

再比如柠檬树苗：

```yaml
LEMON_SAPLING:
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - LEMON
  - OAK_SAPLING
```

步骤：

1. 备份文件。
2. 将对应 `ID: {}` 整行替换为完整内容，字段缩进 2 空格。
3. 确认原料 ID 真实存在（水果见 fruits.yml，原版树苗如 `OAK_SAPLING`）。
4. **重启服务器** 使配方生效。
5. 工作台验证合成，并在地面种植确认能正常结果。

## 五、字段说明（启用后可用）

| 字段 | 说明 |
|------|------|
| `enabled` | `true` / `false` 是否注册配方 |
| `amount` | 合成产出的植株数量 |
| `type` | `SHAPELESS` 无序 / `SHAPED` 有序（有序需配 `pattern`） |
| `ingredients` | 原料：插件物品写 ID，原版物品写材质名 |
| `pattern` | 仅 SHAPED 使用，3×3 字符网格 |

## 六、注意事项

- 植物不是食物，没有 `hunger` 字段。
- ID 与水果严格对应（`XXX_BUSH` ↔ `XXX`，`XXX_SAPLING` ↔ `XXX`），不要凭空调用不存在的水果。
- 若想恢复默认（不可合成），把整条配方改回 `ID: {}` 再重启即可。
- YAML 缩进只用空格，禁止 Tab。
- 所有合成配方改动均需 **重启服务器**。
