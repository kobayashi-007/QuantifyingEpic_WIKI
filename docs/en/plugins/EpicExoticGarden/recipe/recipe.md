# Recipe Tutorial — EpicExoticGarden Recipe Writing Complete Guide

> Applies to: `plugins/EpicExoticGarden/recipe/`
> Files: dishes.yml / drinks.yml / fruits.yml / ingredients.yml / magicalcrops.yml / plants.yml / tools.yml

---

## 1. Core Concept: Everything is a "Recipe Block"

Each top-level entry is a complete crafting definition:

```yaml
RECIPE_ID:
  field1: value
  field2: value
```

- Recipe IDs are **all uppercase with underscores**, e.g., `GRAPE_PIE`, `CROOK`
- Fields are indented **2 spaces** under the ID
- IDs must be unique within the file

## 2. Field Reference

| Field | Required | Values | Description |
|-------|----------|--------|-------------|
| `enabled` | No | `true` / `false` | Whether to register the recipe; defaults to true |
| `amount` | No | positive integer | Output amount, defaults to 1 |
| `type` | Yes (if recipe exists) | `SHAPELESS` / `SHAPED` | Unordered / ordered |
| `ingredients` | Yes | list | Ingredients |
| `pattern` | SHAPED only | string list | Ordered grid pattern |
| `hunger` | No | 0–20 | Food hunger value |

## 3. Two Crafting Types

### SHAPELESS (Unordered)
Ingredients can be placed **anywhere** in the workbench:

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

### SHAPED (Ordered)
Must follow a **fixed shape**, using `pattern` + `ingredients`:

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

Rules:
- `pattern` has max 3 lines, max 3 characters per line, **must be quoted**
- Characters are placeholders; `ingredients` maps them to actual items
- Space `' '` = empty slot

## 4. Ingredient Sources

| Notation | Meaning | Example |
|----------|---------|---------|
| Custom item ID | Plugin-registered item | `GRAPE`, `BUTTER`, `DIRT_ESSENCE` |
| Vanilla material name | Minecraft native item | `EGG`, `SUGAR`, `COOKED_BEEF` |
| `ID:amount` suffix | Multiple of same material | `DIRT_ESSENCE:8` = 8 essences |

## 5. Empty Recipes `{}` and "hunger-only" Entries

Not all entries have recipes:

```yaml
GRAPE_BUSH: {}       # Cannot be crafted
GRAPE:
  hunger: 2           # No recipe, raw food
```

## 6. Workflow

1. **Backup** the original file
2. **Locate the correct file** for your recipe type
3. **Write/modify the recipe block** (top ID flush left, 2-space indent, `- ` for lists)
4. **Restart server** — recipe changes require restart
5. **Test in-game**

> Only `hunger` can be hot-reloaded with `/epicgarden reload`.

## 7. Chain Effects

Recipes form processing chains. Disabling upstream ingredients breaks downstream:

- Disable `SALT` → BUTTER, CHEESE, BBQ_SAUCE all break
- Disable `IRON_PLANT` → GOLD_PLANT and above cannot craft seeds

## 8. Common Errors

1. **Tab indentation**: YAML uses spaces only
2. **Unquoted pattern**: Always quote pattern strings
3. **Unmapped character**: Every non-space character in pattern must map in ingredients
4. **Wrong ID / nonexistent item**: Recipe registration fails, check startup logs
5. **Forgetting restart**: `/epicgarden reload` only updates hunger, not recipes
6. **More than 9 ingredients**: Workbench is 3×3, exceeding this fails
7. **Bucket consumption**: WATER_BUCKET / MILK_BUCKET are consumed, not returned
8. **Duplicate IDs**: Later definition overrides earlier one in the same file
