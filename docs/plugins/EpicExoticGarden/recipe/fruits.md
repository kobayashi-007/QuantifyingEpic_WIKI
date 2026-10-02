# fruits.yml 教程 —— 水果与农作物

## 一、文件作用

- 路径：`plugins/EpicExoticGarden/recipe/fruits.yml`
- 注册插件全部 **水果 / 农作物**（33 种）的 **饱食度**。
- 与其它文件不同：这些物品 **默认没有合成配方**，通过草丛掉落、种植、收获获得。

## 二、本文件的特殊性

文件中每个条目只写了一个字段：

```yaml
GRAPE:
  hunger: 2
```

含义：

- `hunger: 2` —— 直接吃水果恢复 2 点饱食度；修改后 `/epicgarden reload` 立即生效。
- 没有 `enabled` / `type` / `ingredients` —— 表示该物品 **不能合成**，只能靠种植链产出。
- 这是有意设计：防止玩家凭空无限合成水果，保证农业玩法的价值。

## 三、水果清单（共 33 种，生吃饱食均为 2）

### 浆果类（8 种）

GRAPE 葡萄、BLUEBERRY 蓝莓、ELDERBERRY 接骨木莓、RASPBERRY 覆盆子、BLACKBERRY 黑莓、CRANBERRY 蔓越莓、COWBERRY 越橘、STRAWBERRY 草莓。

### 蔬菜 / 大田作物（14 种）

TOMATO 番茄、LETTUCE 生菜、CABBAGE 卷心菜、SWEET_POTATO 红薯、CORN 玉米、ONION 洋葱、GARLIC 大蒜、CILANTRO 香菜、RED_BELL_PEPPER 红甜椒、TEA_LEAF 茶叶、MUSTARD_SEED 芥菜籽、CURRY_LEAF 咖喱叶、BLACK_PEPPER 黑胡椒、PINEAPPLE 菠萝。

### 果树果实（11 种）

OAK_APPLE 橡苹果、COCONUT 椰子、CHERRY 樱桃、POMEGRANATE 石榴、LEMON 柠檬、PLUM 李子、LIME 青柠、ORANGE 橙子、PEACH 桃子、PEAR 梨、DRAGON_FRUIT 火龙果。

## 四、水果的获取途径

1. **草丛掉落**：打破草方块有几率掉落水果 / 种子（概率由插件主配置控制）。
2. **种植灌木 / 树苗**：
   - 浆果和蔬菜对应 `XXX_BUSH`（见 plants.yml），种在地上结果。
   - 果树果实对应 `XXX_SAPLING`（见 plants.yml），长成树后收获。
3. **收获成熟作物**：采摘后得到水果，水果又可以继续补种，形成循环。

## 五、实操：让某种水果可以合成

默认水果不能合成。如果你希望某种水果可以在工作台制作（例如服务器商店服、休闲服），给条目补齐配方字段即可。

以草莓为例，把：

```yaml
STRAWBERRY:
  hunger: 2
```

改为：

```yaml
STRAWBERRY:
  hunger: 2
  enabled: true
  amount: 2
  type: SHAPELESS
  ingredients:
  - SWEET_BERRIES
  - SUGAR
```

含义：1 个原版甜浆果 + 1 个糖 → 2 个草莓。

步骤：

1. 备份文件。
2. 在原条目下补充字段，缩进 2 空格，保持 YAML 格式。
3. **重启服务器**，合成配方才会注册。
4. 工作台验证；如需取消，删掉新增字段并重启即可恢复默认。

## 六、修改饱食度

直接改 `hunger`（范围 0–20），然后执行 `/epicgarden reload`，无需重启。例如让椰子直接吃回 6 点：

```yaml
COCONUT:
  hunger: 6
```

## 七、注意事项

- 水果是整条食物链的源头：果汁（drinks.yml）、菜肴（dishes.yml）、配料（ingredients.yml）都依赖它们，修改前先评估对下游配方的影响。
- 此文件条目不可删除——删除后该水果的食物属性会丢失，所有以它为原料的配方都会失效。
- YAML 缩进只用空格，禁止 Tab。
- ID 必须与 plants.yml 中的灌木 / 树苗 ID 对应（如 `GRAPE` ↔ `GRAPE_BUSH`），否则种植链断裂。
