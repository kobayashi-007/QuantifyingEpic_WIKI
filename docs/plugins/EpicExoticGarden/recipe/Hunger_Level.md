# 修改饥饿值教程 —— EpicExoticGarden hunger 字段完全指南

> 适用目录：`plugins/EpicExoticGarden/recipe/`
> 本文只讲 `hunger`（饱食度）的修改——它是整个 recipe 配置中 **唯一可以热加载、无需重启** 的字段。

---

## 一、hunger 是什么

```yaml
GRAPE_PIE:
  hunger: 13
```

- `hunger` 决定玩家 **食用该物品后恢复的饱食值**。
- 取值范围：**0 – 20**（对应玩家饱食条的 0 到 10 个鸡腿，1 点 = 半个鸡腿）。
- 只对"可食用"的物品有效；非食物填了也不起作用。

## 二、哪些文件可以改 hunger

| 文件 | 是否有 hunger | 内容 |
|------|--------------|------|
| dishes.yml | ✅ 全部菜肴 | 三明治、汉堡、派、咖喱、蛋糕等 |
| drinks.yml | ✅ 全部饮料 | 果汁、冰沙、冰茶、酒等 |
| fruits.yml | ✅ 全部水果（均为 2） | 33 种生吃水果 / 农作物 |
| ingredients.yml | ❌ | 配料调料（面粉、盐、黄油等），不可直接食用 |
| magicalcrops.yml | ❌ | 魔法作物、精华、资源兑换产物 |
| plants.yml | ❌ | 灌木、树苗（是方块不是食物） |
| tools.yml | ❌ | 工具 |

## 三、最大优势：热加载，无需重启

合成配方（enabled / amount / type / ingredients / pattern）改动必须 **重启服务器**；
而 `hunger` 改动只需一条命令：

```
/epicgarden reload
```

完整流程：

1. 备份要修改的 yml 文件。
2. 用文本编辑器修改对应条目的 `hunger` 值并保存。
3. 在服务器控制台或游戏内（需权限）执行 `/epicgarden reload`。
4. 提示重载成功后，吃一个该物品验证饱食条变化。
5. 玩家无需下线，背包里 **已有的同款食物也会立即使用新数值**。

> 注意：编码请保存为 UTF-8；YAML 缩进只用空格，禁止 Tab。

## 四、默认数值参考表（平衡设计基线）

插件自带数值按"加工程度越深，饱食越高"设计，修改时建议参照：

### 水果（fruits.yml）

| 类别 | hunger |
|------|--------|
| 全部 33 种生吃水果 / 农作物 | **2** |

### 饮料（drinks.yml）

| 类别 | hunger |
|------|--------|
| 果汁 JUICE（含椰奶） | **6** |
| 冰沙 SMOOTHIE | **10** |
| 冰茶 ICED_TEA | **13** |
| WINE 葡萄酒 / THAI_TEA 泰式奶茶 / PINACOLADA | 10 / 14 / 14 |
| LEMONADE / HOT_CHOCOLATE | 8 / 8 |
| SWEETENED_TEA 甜茶 | 6 |

### 菜肴（dishes.yml）常见档位

| 档位 | 代表 |
|------|------|
| 3–5 | BACON、CHOCOLATE_BAR、BAGEL、CHOCOLATE_STRAWBERRY |
| 8–10 | PUMPKIN_BREAD、TOMATO_SOUP、HAMBURGER、HOT_DOG |
| 11–13 | 三明治、沙拉、水果派、MUFFIN、TACO |
| 16–18 | 咖喱、CHEESECAKE、ICE_CREAM、SANDWICH、BURRITO |
| 19–20 | CHOCOLATE_PEAR_CAKE、CLUB_SANDWICH、BBQ 双层热狗卷（满值 20） |

## 五、实操示例

### 示例 1：提高某道菜的饱食度

把 `CHICKEN_CURRY` 从 16 提高到 20：

```yaml
CHICKEN_CURRY:
  hunger: 20        # 原来是 16
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - ...
```

只改 `hunger` 这一行，保存后 `/epicgarden reload`。

### 示例 2：削弱过于强力的饮料

服务器前期觉得冰沙 10 点太划算，统一降到 8：

逐个修改 drinks.yml 中 SMOOTHIE 条目：

```yaml
GRAPE_SMOOTHIE:
  hunger: 8         # 原来是 10
```

改完执行一次 `/epicgarden reload`，所有冰沙同时生效。

### 示例 3：让某种生吃水果更有价值

椰子加工链很长，让生吃椰子回 5 点（原来是 2）：

fruits.yml 中：

```yaml
COCONUT:
  hunger: 5
```

`/epicgarden reload` 后生效。

### 示例 4：批量统一（谨慎使用）

若希望所有果汁从 6 调整为 7，可使用编辑器的 **查找替换**，将 `hunger: 6` 在 drinks.yml 范围内替换为 `hunger: 7`。

风险提示：替换前确认该文件中 `hunger: 6` 只出现在你想改的条目上（drinks.yml 中 SWEETENED_TEA 也是 6，会被一起改掉——如不想改请逐条手动修改）。

## 六、平衡建议

- **保持加工梯度**：水果(2) ＜ 果汁(6) ＜ 冰沙(10) ＜ 硬菜(13–20)。梯度被破坏会让某一类食物失去存在意义。
- **参考原料成本**：原料越多、加工链越长的食物，hunger 应越高。例如 BISCUITS_GRAVY 需要 3 份肉汁 + 3 块饼干，合理值在 13 左右。
- **满值 20 要克制**：20 = 直接吃满，大量满值食物会让饱食系统失去压力。
- **考虑配套系统**：如果服务器还安装了饱和度、营养值插件，请一并评估，避免叠加过强。
- 饮料在战斗 / 跑图时可快速饮用，同等 hunger 下饮料比硬菜更方便，数值宜略低。

## 七、验证与回滚

- **验证**：重载后把自身饱食度降到低位（可跑步消耗），吃一个目标食物，观察恢复值是否符合设定。
- **多人服注意**：`/epicgarden reload` 对全服即时生效，建议在低峰期调整。
- **回滚**：把 `hunger` 改回原值，再次执行 `/epicgarden reload` 即可；这也是修改前先备份的意义。

## 八、常见疑问

**Q：改了 hunger 为什么还要重启？**
A：不需要。只需 `/epicgarden reload`。需要重启的是合成配方相关字段；如果你同时改了配方，那部分要重启才生效。

**Q：配料 / 精华为什么没有 hunger？**
A：它们不是食物（黄油、面粉、精华等），设计上只能作为合成原料，不可食用。

**Q：hunger 可以填超过 20 吗？**
A：不应超过 20。超出范围的值不会带来额外收益，还可能导致不可预期的行为。

**Q：玩家身上已有的食物会变吗？**
A：会。hunger 是按物品类型实时读取的，重载后旧食物立即按新数值结算。

**Q：条目里只有 `hunger` 没有其它字段（fruits.yml），能只改它吗？**
A：可以，这正是水果文件的正常格式；改完 `/epicgarden reload` 即可。
