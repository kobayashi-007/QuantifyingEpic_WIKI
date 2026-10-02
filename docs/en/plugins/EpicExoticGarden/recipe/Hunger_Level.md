# Hunger Value Tutorial — EpicExoticGarden hunger Field Complete Guide

> Applies to: `plugins/EpicExoticGarden/recipe/`
> This guide only covers `hunger` — the **only field** in recipe configs that can be hot-reloaded without restarting.

---

## 1. What is hunger?

```yaml
GRAPE_PIE:
  hunger: 13
```

- `hunger` determines how much **food points** a player recovers when eating the item.
- Range: **0 – 20** (0 to 10 hunger bars, 1 point = half a chicken leg).
- Only affects edible items; has no effect on non-food items.

## 2. Which Files Can Change hunger

| File | Has hunger? | Contents |
|------|-------------|----------|
| dishes.yml | ✅ All dishes | Sandwiches, burgers, pies, curries, cakes |
| drinks.yml | ✅ All drinks | Juices, smoothies, iced teas, wine |
| fruits.yml | ✅ All fruits (default 2) | 33 raw fruits/crops |
| ingredients.yml | ❌ | Flour, salt, butter, etc. (not edible) |
| magicalcrops.yml | ❌ | Magical crops, essence, resources |
| plants.yml | ❌ | Bushes, saplings (blocks, not food) |
| tools.yml | ❌ | Tools |

## 3. Hot-Reload — No Restart Needed

Recipe changes (enabled/amount/type/ingredients/pattern) require **server restart**;
`hunger` changes only need:

```
/epicgarden reload
```

Full process:
1. Backup the yml file
2. Edit the `hunger` value
3. Save and execute `/epicgarden reload`
4. Test by eating the item
5. **All existing items in player inventories immediately use the new value**

## 4. Default Value Reference

The plugin uses a "deeper processing = higher hunger" design:

### Fruits (fruits.yml)
| Category | hunger |
|----------|--------|
| All 33 raw fruits | **2** |

### Drinks (drinks.yml)
| Category | hunger |
|----------|--------|
| Juice | **6** |
| Smoothie | **10** |
| Iced Tea | **13** |
| Wine / Thai Tea / Piña Colada | 10 / 14 / 14 |

### Dishes (dishes.yml)
| Tier | Examples |
|------|----------|
| 3–5 | BACON, CHOCOLATE_BAR |
| 8–10 | PUMPKIN_BREAD, HAMBURGER |
| 11–13 | Sandwiches, salads, pies |
| 16–18 | Curries, cheesecake, ice cream |
| 19–20 | BBQ double bacon wrapped hot dog (max 20) |

## 5. Practical Examples

### Example 1: Increase a dish's hunger

Change `CHICKEN_CURRY` from 16 to 20:

```yaml
CHICKEN_CURRY:
  hunger: 20        # was 16
```

Only change `hunger`, then `/epicgarden reload`.

### Example 2: Nerf smoothies

Change all smoothie `hunger` from 10 to 8 in drinks.yml, then `/epicgarden reload`.

### Example 3: Make raw coconut more valuable

In fruits.yml:

```yaml
COCONUT:
  hunger: 5
```

`/epicgarden reload` takes effect immediately.

## 6. Balance Suggestions

- **Maintain processing gradient**: Fruit(2) < Juice(6) < Smoothie(10) < Dishes(13–20)
- **Reference ingredient cost**: More complex chains deserve higher hunger
- **Cap at 20**: Max hunger removes food pressure
- **Consider companion plugins**: If your server has saturation/nutrition plugins, evaluate combined effects

## 7. Common Questions

**Q: Why don't I need to restart after changing hunger?**
A: `hunger` is the only hot-reloadable field. Recipe changes still require restart.

**Q: Why don't ingredients/essence have hunger?**
A: They are not food items by design — only crafting materials.

**Q: Can hunger exceed 20?**
A: No. Values above 20 have no additional benefit and may cause unexpected behavior.

**Q: Do existing items in player inventories change?**
A: Yes. Hunger is read per-item-type in real time; old items immediately use the new value after reload.
