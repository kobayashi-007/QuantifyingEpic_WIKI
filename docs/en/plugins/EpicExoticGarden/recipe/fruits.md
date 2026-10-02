# fruits.yml Tutorial — Fruits & Crops

## 1. File Purpose

- Path: `plugins/EpicExoticGarden/recipe/fruits.yml`
- Registers **hunger values** for all 33 fruits/crops.
- These items have **no crafting recipes by default** — obtained via grass drops, farming, and harvesting.

## 2. Special Format

Each entry only has one field:

```yaml
GRAPE:
  hunger: 2
```

- `hunger: 2` — eating raw restores 2 hunger; changes apply with `/epicgarden reload`.
- No `enabled` / `type` / `ingredients` — the item **cannot be crafted**, only farmed.
- This is intentional: prevents infinite crafting and preserves farming value.

## 3. Fruit List (33 types, all hunger 2 raw)

### Berries (8)
GRAPE, BLUEBERRY, ELDERBERRY, RASPBERRY, BLACKBERRY, CRANBERRY, COWBERRY, STRAWBERRY

### Vegetables / Field Crops (14)
TOMATO, LETTUCE, CABBAGE, SWEET_POTATO, CORN, ONION, GARLIC, CILANTRO, RED_BELL_PEPPER, TEA_LEAF, MUSTARD_SEED, CURRY_LEAF, BLACK_PEPPER, PINEAPPLE

### Tree Fruits (11)
OAK_APPLE, COCONUT, CHERRY, POMEGRANATE, LEMON, PLUM, LIME, ORANGE, PEACH, PEAR, DRAGON_FRUIT

## 4. How to Obtain

1. **Grass drops**: Breaking grass has a chance to drop fruits/seeds
2. **Plant bushes/saplings**: Berries and vegetables → `XXX_BUSH`, tree fruits → `XXX_SAPLING`
3. **Harvest mature crops**: Pick fruits and replant

## 5. Making a Fruit Craftable

Default fruits are not craftable. To make one craftable, add recipe fields:

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

**Restart server** for changes to take effect.

## 6. Notes

- Fruits are the source of the entire food chain: juices, dishes, and ingredients all depend on them
- Do not delete entries — doing so breaks all recipes that reference them
- YAML uses spaces only, **no tabs**
- IDs must match plants.yml (`GRAPE` ↔ `GRAPE_BUSH`)
