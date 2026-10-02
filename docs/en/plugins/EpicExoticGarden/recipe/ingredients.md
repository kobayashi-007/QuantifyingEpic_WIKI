# ingredients.yml Tutorial — Ingredients & Condiments

## 1. File Purpose

- Path: `plugins/EpicExoticGarden/recipe/ingredients.yml`
- Defines crafting recipes for 15 **base ingredients/condiments**: flour, salt, butter, cheese, mayo, etc.
- These are **intermediate ingredients** for dishes and drinks. They generally have no `hunger` field.
- All are `SHAPELESS` (unordered) crafting.

## 2. Ingredient List (15 total)

| ID | Name | Recipe | Output |
|----|------|--------|--------|
| ICE_CUBE | Ice Cube | ICE ×4 (Packed Ice) | 4 |
| WHEAT_FLOUR | Wheat Flour | WHEAT | 1 |
| SALT | Salt | WATER_BUCKET | 1 |
| HEAVY_CREAM | Heavy Cream | MILK_BUCKET | 1 |
| BUTTER | Butter | HEAVY_CREAM + SALT | 1 |
| CHEESE | Cheese | MILK_BUCKET + SALT | 1 |
| MAYO | Mayonnaise | EGG | 1 |
| MUSTARD | Mustard | MUSTARD_SEED | 1 |
| BBQ_SAUCE | BBQ Sauce | TOMATO + MUSTARD + SALT + SUGAR | 1 |
| VEGETABLE_OIL | Vegetable Oil | BEETROOT_SEEDS + WATER_BUCKET | 1 |
| CORNMEAL | Cornmeal | CORN | 1 |
| YEAST | Yeast | SUGAR + WATER_BUCKET | 1 |
| MOLASSES | Molasses | BEETROOT + SUGAR_CANE + WATER_BUCKET | 1 |
| BROWN_SUGAR | Brown Sugar | SUGAR + MOLASSES | 1 |
| COUNTRY_GRAVY | Country Gravy | WHEAT_FLOUR + SUGAR + BLACK_PEPPER | 1 |

## 3. Processing Chains

Ingredients have upstream-downstream relationships:

```
WATER_BUCKET ──► SALT ──┬──► BUTTER ◄── HEAVY_CREAM ◄── MILK_BUCKET
                        └──► CHEESE
WHEAT ──► WHEAT_FLOUR
CORN ──► CORNMEAL
MUSTARD_SEED ──► MUSTARD ──► BBQ_SAUCE ◄── TOMATO / SALT / SUGAR
ICE ──► ICE_CUBE (×4)
```

## 4. Buckets Are Consumed

`WATER_BUCKET` / `MILK_BUCKET` are **consumed directly** in crafting — no empty bucket is returned.

## 5. Adding a New Ingredient

Example — Cream Cheese, append to file:

```yaml
CREAM_CHEESE:
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - CHEESE
  - HEAVY_CREAM
```

**Restart server** for changes to take effect.

## 6. Notes

- Disabling an upstream ingredient (e.g., SALT) will break all downstream recipes (BUTTER, CHEESE, BBQ_SAUCE)
- YAML uses spaces only, **no tabs**
