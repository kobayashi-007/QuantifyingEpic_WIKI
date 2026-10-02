# tools.yml Tutorial — Tools

## 1. File Purpose

- Path: `plugins/EpicExoticGarden/recipe/tools.yml`
- Defines crafting recipes for plugin **tools**.
- Currently contains: CROOK (hook, craftable) and GRASS_SEEDS (placeholder, no recipe).

## 2. CROOK Hook (default enabled)

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

- Uses **4 STICKs** arranged in a hook shape
- Used for breaking leaves/grass to increase drop rates

## 3. GRASS_SEEDS (default no recipe)

```yaml
GRASS_SEEDS: {}
```

- Obtained by using the Crook on grass/leaves
- Entry must be kept — registers the item for drops

## 4. Making Grass Seeds Craftable

Replace:

```yaml
GRASS_SEEDS: {}
```

with:

```yaml
GRASS_SEEDS:
  enabled: true
  amount: 2
  type: SHAPELESS
  ingredients:
  - WHEAT_SEEDS
  - DIRT
```

**Restart server** for changes to take effect.

## 5. Notes

- All recipe changes require **server restart**
- pattern strings must be quoted
- YAML uses spaces only, **no tabs**
