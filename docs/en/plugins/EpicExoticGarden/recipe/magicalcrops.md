# magicalcrops.yml Tutorial — Magical Crops

## 1. File Purpose

- Path: `plugins/EpicExoticGarden/recipe/magicalcrops.yml`
- Defines 15 tiers of **magical resource crops**: dirt, coal, iron, gold, copper, redstone, lapis, ender, quartz, diamond, emerald, netherite, glowstone, obsidian, slime.
- Craft magical crop seeds → plant and harvest "essence" → exchange essence for vanilla resources.

## 2. Three-Part Structure

Each tier consists of three parts. Example — Dirt tier:

```yaml
# Part 1: Magical crop (seed) — SHAPED ordered crafting
DIRT_PLANT:
  enabled: true
  amount: 1
  type: SHAPED
  pattern:
  - "" O ""
  - "OCO"
  - "" O ""
  ingredients:
    O: DIRT            # Outer material
    C: WHEAT_SEEDS     # Center seed (starts with wheat seeds, then previous tier)

# Part 2: Essence — no recipe, obtained by planting magical crops
DIRT_ESSENCE: {}

# Part 3: Resource exchange — 8 essence for vanilla resource
DIRT:
  enabled: true
  amount: 2
  type: SHAPELESS
  ingredients:
  - DIRT_ESSENCE:8
```

Chain: `material + seed → XXX_PLANT (plant & harvest) → XXX_ESSENCE → (8) → vanilla resource`

## 3. Cross Pattern

All magical crops use the same cross pattern:

```
[empty][ O ][empty]
[ O ][ C ][ O ]
[empty][ O ][empty]
```

## 4. 15 Tiers Reference Table

| Crop | Outer Material | Center Seed | Exchange | Output |
|------|---------------|-------------|----------|--------|
| DIRT_PLANT | DIRT | WHEAT_SEEDS | 8 DIRT_ESSENCE → DIRT | 2 |
| COAL_PLANT | COAL_ORE | WHEAT_SEEDS | 8 COAL_ESSENCE → COAL | 2 |
| IRON_PLANT | IRON_BLOCK | COAL_PLANT | 8 IRON_ESSENCE → IRON_INGOT | 1 |
| GOLD_PLANT | GOLD_INGOT | IRON_PLANT | 8 GOLD_ESSENCE → GOLD_INGOT | 1 |
| ... | ... | ... | ... | ... |
| DIAMOND_PLANT | DIAMOND | QUARTZ_PLANT | 8 DIAMOND_ESSENCE → DIAMOND | 1 |
| NETHERITE_PLANT | NETHERITE_BLOCK | EMERALD_PLANT | 8 NETHERITE_ESSENCE → NETHERITE_INGOT | 1 |

## 5. Why Essence is Empty `{}`

```yaml
DIRT_ESSENCE: {}
```

- `{}` means "this entry exists but has no recipe" — essence **cannot be crafted**, only harvested.
- Do not delete essence entries — they are referenced by exchange recipes.

## 6. Notes

- All recipe changes require **server restart**, `/epicgarden reload` does not work
- YAML uses spaces only, **no tabs**
- New tiers must follow `XXX_PLANT` / `XXX_ESSENCE` / `XXX` naming convention
