# dishes.yml Tutorial — Dish Recipes

## 1. File Purpose

- Path: `plugins/EpicExoticGarden/recipe/dishes.yml`
- Defines crafting recipes and hunger values for all **dish products** (sandwiches, burgers, pies, curries, cakes, etc.).
- Players craft at a workbench and eat to restore the `hunger` value set.

## 2. Field Reference

| Field | Description | Example |
|-------|-------------|---------|
| `hunger` | Hunger value, range 0–20; changes apply instantly with `/epicgarden reload` | `16` |
| `enabled` | Whether to register the recipe: `true` enable, `false` disable | `true` |
| `amount` | Items produced per craft | `1` |
| `type` | `SHAPELESS` unordered / `SHAPED` ordered | `SHAPELESS` |
| `ingredients` | Ingredient list (unordered) or character mapping (ordered) | See below |
| `pattern` | 3×3 grid for ordered crafting, only for `SHAPED` | `" O "` |

**Three ways to write ingredients:**

1. Plugin custom items: write ID directly, e.g., `GRAPE_JUICE`, `BUTTER`, `MAYO`
2. Vanilla items: write material name, e.g., `SUGAR`, `COOKED_BEEF`, `BREAD`, `EGG`
3. Multiple of same ingredient: write multiple lines, or use `ID:amount` suffix

## 3. Dish List (105 total)

### Jelly Sandwiches (bread + juice + bread, hunger 16)
GRAPE / BLUEBERRY / ELDERBERRY / RASPBERRY / BLACKBERRY / CRANBERRY / COWBERRY / STRAWBERRY `JELLY_SANDWICH`, 8 types.

### Fruit Pies (fruit + egg + sugar + milk bucket + wheat flour, hunger 13)
18 types of `PIE`.

### Sandwiches & Burgers
| ID | Hunger | Main Ingredients |
|----|--------|-----------------|
| CHICKEN_SANDWICH | 11 | Cooked chicken + mayo + bread |
| FISH_SANDWICH | 11 | Cooked cod + mayo + bread |
| SANDWICH | 19 | Bread + mayo + cooked beef + tomato + lettuce |
| HAMBURGER | 10 | Bread + cooked beef |
| CHEESEBURGER | 13 | Hamburger + cheese |

... and 100 more dishes covering curries, cakes, desserts, hot dogs, tacos, and more.

## 4. Adding a New Dish

Example — Apple Pie, append to end of file:

```yaml
MY_APPLE_PIE:
  hunger: 14
  enabled: true
  amount: 1
  type: SHAPELESS
  ingredients:
  - OAK_APPLE
  - SUGAR
  - EGG
```

Steps:
1. Backup the original file
2. Append at end, top-level ID flush left, fields indented 2 spaces
3. Verify all ingredient IDs exist
4. **Restart server** for recipe changes to take effect
5. Verify in workbench

## 5. Notes

- Max 9 ingredients for shapeless crafting (3×3 workbench)
- `MILK_BUCKET` / `WATER_BUCKET` are consumed directly, no empty bucket returned
- Recipe IDs must be unique within the file
- YAML uses spaces only, **no tabs**
