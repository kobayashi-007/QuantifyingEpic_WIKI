# tools.yml 教程 —— 工具

## 一、文件作用

- 路径：`plugins/EpicExoticGarden/recipe/tools.yml`
- 定义插件 **工具类物品** 的合成配方。
- 当前包含：CROOK（钩子，可合成）和 GRASS_SEEDS（草种，占位无配方）。

## 二、CROOK 钩子（默认启用）

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

图案对应工作台九宫格：

```
[S][S][ 空]
[ 空][S][ 空]
[ 空][S][ 空]
```

- 共消耗 **4 根木棍（STICK）**，排成弯钩形状。
- 钩子用于撸树叶 / 草，提高树苗、水果、草种等掉落几率（具体功能以插件版本为准）。

### 字段说明

| 字段 | 说明 |
|------|------|
| `enabled` | `true` 注册配方 / `false` 禁用 |
| `amount` | 产出数量 |
| `type` | `SHAPED` 有序合成（必须严格按图案摆放） |
| `pattern` | 3 行字符网格，每行最多 3 字符，空格代表空位 |
| `ingredients` | 字符 → 材料的映射；`S: STICK` 表示图案中的 S 是木棍 |

## 三、GRASS_SEEDS 草种（默认无配方）

```yaml
GRASS_SEEDS: {}
```

- `{}` 是空占位：草种 **不能合成**，默认通过使用钩子撸草 / 草丛掉落获得。
- 条目必须保留：它注册了草种这个物品；删除可能导致掉落功能异常。

## 四、实操：让草种可以合成

例如用小麦种子 + 泥土合成草种，把：

```yaml
GRASS_SEEDS: {}
```

替换为：

```yaml
GRASS_SEEDS:
  enabled: true
  amount: 2
  type: SHAPELESS
  ingredients:
  - WHEAT_SEEDS
  - DIRT
```

步骤：

1. 备份文件。
2. 将 `GRASS_SEEDS: {}` 整行替换为完整内容，字段缩进 2 空格。
3. 确认原料均为存在的材质 / 物品 ID。
4. **重启服务器** 使配方生效。
5. 工作台验证，并在草地上使用草种确认功能正常。

## 五、修改与禁用

- 禁用钩子：把 CROOK 的 `enabled` 改为 `false`，重启后无法再合成（已有钩子保留）。
- 改钩子配方：修改 `pattern` 或 `ingredients`，例如改成 5 根木棍加固，注意字符必须在 ingredients 中有映射。
- 工具不是食物，没有 `hunger`。

## 六、注意事项

- 所有合成配方的改动都需要 **重启服务器**，`/epicgarden reload` 对配方无效。
- pattern 字符串必须带引号；字符与 ingredients 的键一一对应，未映射的字符会报错。
- YAML 缩进只用空格，禁止 Tab。
- 想恢复草种默认状态，把配方整段改回 `GRASS_SEEDS: {}` 重启即可。
