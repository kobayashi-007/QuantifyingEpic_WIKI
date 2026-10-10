# EpicExoticGarden Drinks CustomModelData Tutorial
> For the Drinks section only, designed for `models.yml`. Requires server version 1.14+ (Java Edition).

## 1. How It Works

Drinks use two base materials:

1. **`POTION` (potion bottle base)**: Most juices, smoothies, iced teas, and lemonades. Assigned a continuous CMD range: `1114001 ~ 1114042`.
2. **`PLAYER_HEAD` (player head base)**: `SWEETENED_TEA` / `HOT_CHOCOLATE` / `PINACOLADA`. CMD is only used for resource pack identification; the block appearance is controlled by the head skin, and CMD only controls the inventory display.

> Rules:
> - `ITEM_ID: number`: The plugin will tag the drink with `CustomModelData=number`.
> - `0` = disable custom model, use the vanilla appearance.
> - Editing the config **will not refresh existing items in the inventory**; items must be re-obtained to take effect.
> - CustomModelData is just a marker — **a resource pack with model overrides is required to display custom textures**.

## 2. Edit the `Drinks` Section in `models.yml`

Open the plugin config file `models.yml` and locate the `Drinks` section.

### Format

```yaml
DRINK_ID: CustomModelDataNumber  # Material: POTION / PLAYER_HEAD
```

### Resource Pack Structure

```yaml
your-resource-pack/
├─ pack.mcmeta
└─ assets/
   ├─ minecraft/
   │  └─ models/item/potion.json
   └─ epicexoticgarden/
      ├─ models/item/drinks/
      │   ├─ grape_juice.json
      │   ├─ grape_smoothie.json
      │   └─ ...other drink model jsons
      └─ textures/item/drinks/
          ├─ grape_juice.png
          └─ ...texture files
```

### Plugin Config `models.yml` Settings

```yaml
# =====================================================================
# Drinks
# =====================================================================
GRAPE_JUICE: 1114001  # Material: POTION
GRAPE_SMOOTHIE: 1114002  # Material: POTION
BLUEBERRY_JUICE: 1114003  # Material: POTION
BLUEBERRY_SMOOTHIE: 1114004  # Material: POTION
ELDERBERRY_JUICE: 1114005  # Material: POTION
ELDERBERRY_SMOOTHIE: 1114006  # Material: POTION
RASPBERRY_JUICE: 1114007  # Material: POTION
RASPBERRY_SMOOTHIE: 1114008  # Material: POTION
BLACKBERRY_JUICE: 1114009  # Material: POTION
BLACKBERRY_SMOOTHIE: 1114010  # Material: POTION
CRANBERRY_JUICE: 1114011  # Material: POTION
CRANBERRY_SMOOTHIE: 1114012  # Material: POTION
COWBERRY_JUICE: 1114013  # Material: POTION
COWBERRY_SMOOTHIE: 1114014  # Material: POTION
STRAWBERRY_JUICE: 1114015  # Material: POTION
STRAWBERRY_SMOOTHIE: 1114016  # Material: POTION
OAK_APPLE_JUICE: 1114017  # Material: POTION
COCONUT_MILK: 1114018  # Material: POTION
CHERRY_JUICE: 1114019  # Material: POTION
POMEGRANATE_JUICE: 1114020  # Material: POTION
LEMON_JUICE: 1114021  # Material: POTION
PLUM_JUICE: 1114022  # Material: POTION
LIME_JUICE: 1114023  # Material: POTION
ORANGE_JUICE: 1114024  # Material: POTION
PEACH_JUICE: 1114025  # Material: POTION
PEAR_JUICE: 1114026  # Material: POTION
DRAGON_FRUIT_JUICE: 1114027  # Material: POTION
LIME_SMOOTHIE: 1114028  # Material: POTION
TOMATO_JUICE: 1114029  # Material: POTION
WINE: 1114030  # Material: POTION
LEMON_ICED_TEA: 1114031  # Material: POTION
RASPBERRY_ICED_TEA: 1114032  # Material: POTION
PEACH_ICED_TEA: 1114033  # Material: POTION
STRAWBERRY_ICED_TEA: 1114034  # Material: POTION
CHERRY_ICED_TEA: 1114035  # Material: POTION
THAI_TEA: 1114036  # Material: POTION
SWEETENED_TEA: 1114037  # Material: PLAYER_HEAD
HOT_CHOCOLATE: 1114038  # Material: PLAYER_HEAD
PINACOLADA: 1114039  # Material: PLAYER_HEAD
LEMONADE: 1114040  # Material: POTION
PINEAPPLE_JUICE: 1114041  # Material: POTION
PINEAPPLE_SMOOTHIE: 1114042  # Material: POTION

# =====================================================================
# Magical Crops
# =====================================================================
....................

```
