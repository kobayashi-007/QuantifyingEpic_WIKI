# plants.yml Tutorial — Bushes & Saplings

## 1. File Purpose

- Path: `plugins/EpicExoticGarden/recipe/plants.yml`
- Registers 33 plant bodies: 22 bushes (BUSH) + 11 saplings (SAPLING).
- These are the blocks players place on the ground that mature and bear fruit.
- **Default: no crafting recipe**; obtained via grass drops or world generation.

## 2. Format: Empty Placeholder `{}`

Each entry looks like:

```yaml
GRAPE_BUSH: {}
```

- `{}` = empty mapping: entry exists, no recipe — the plant **cannot be crafted**.
- Do not delete entries — removing them breaks the farming chain.
- To enable crafting, replace `{}` with a full recipe block (see Section 4).

## 3. Plant List (33 total)

### Bushes BUSH (22 types, low crops, planted on farmland)
GRAPE_BUSH → GRAPE, BLUEBERRY_BUSH → BLUEBERRY, ... (22 bushes)

### Saplings SAPLING (11 types, grow into trees)
OAK_APPLE_SAPLING → OAK_APPLE, COCONUT_SAPLING → COCONUT, ... (11 saplings)

## 4. Making Plants Craftable

Example — Strawberry Bush, replace:

```yaml
STRAWBERRY_BUSH: {}
```

with:

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

**Restart server** for changes to take effect.

## 5. Notes

- Plants are not food, no `hunger` field
- IDs must match fruits.yml (`XXX_BUSH` ↔ `XXX`, `XXX_SAPLING` ↔ `XXX`)
- YAML uses spaces only, **no tabs**
- All crafting changes require **server restart**
