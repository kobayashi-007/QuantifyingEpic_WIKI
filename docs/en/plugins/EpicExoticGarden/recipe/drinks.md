# drinks.yml Tutorial — Drink Recipes

## 1. File Purpose

- Path: `plugins/EpicExoticGarden/recipe/drinks.yml`
- Defines all **drinks**: juices, smoothies, iced teas, wine, hot chocolate, etc.
- All drinks are `SHAPELESS` (unordered) crafting.

## 2. Three Basic Crafting Chains

```
Fruit ──► Juice (hunger 6)        Recipe: 1 fruit
Juice + Ice Cube ──► Smoothie (hunger 10)
Fruit + Ice Cube + Tea Leaf ──► Iced Tea (hunger 13)
```

## 3. Drink List (45 total)

### Juices (21 types, hunger 6, recipe: 1 fruit)
GRAPE / BLUEBERRY / ELDERBERRY / RASPBERRY / BLACKBERRY / CRANBERRY / COWBERRY / STRAWBERRY / OAK_APPLE / CHERRY / POMEGRANATE / LEMON / PLUM / LIME / ORANGE / PEACH / PEAR / DRAGON_FRUIT / TOMATO / PINEAPPLE.

Special: **COCONUT_MILK** is made from `COCONUT`, not called COCONUT_JUICE.

### Smoothies (10 types, hunger 10, recipe: juice + ICE_CUBE)
### Iced Teas (5 types, hunger 13, recipe: fruit + ICE_CUBE + TEA_LEAF)

### Other Drinks
| ID | Hunger | Recipe |
|----|--------|--------|
| WINE | 10 | GRAPE + SUGAR |
| THAI_TEA | 14 | TEA_LEAF + SUGAR + HEAVY_CREAM + COCONUT_MILK |
| HOT_CHOCOLATE | 8 | CHOCOLATE_BAR + HEAVY_CREAM |
| LEMONADE | 8 | LEMON_JUICE + SUGAR |

## 4. Adding a New Drink Set

Example — Mango, append three recipes:

```yaml
MANGO_JUICE:
  hunger: 6
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - MANGO

MANGO_SMOOTHIE:
  hunger: 10
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - MANGO_JUICE
  - ICE_CUBE

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

**Restart server** for changes to take effect.
