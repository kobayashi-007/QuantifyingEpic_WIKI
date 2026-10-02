# EpicExoticGarden Configuration File Guide

`EpicExoticGarden` is a standalone Minecraft server plugin (no Slimefun dependency) that adds exotic bushes, trees, and various crops to the game.

This guide walks you through the default configuration file line by line, helping you customize it for your server.

---

## Full Configuration File

Here is the standard `EpicExoticGarden` configuration:

```yaml
# This plugin is fully standalone and does not require Slimefun.
# Language used for item names: en, de, es, fr, it, nl, pl, pt-BR, ru, zh-CN
language: en

# Items that may drop when breaking tall grass (6% chance).
# All custom bushes and saplings are added automatically; set an entry to false to disable its drop.
grass-drops:
  WHEAT_SEEDS: true
  PUMPKIN_SEEDS: true
  MELON_SEEDS: true
  OAK_SAPLING: true
  SPRUCE_SAPLING: true
  BIRCH_SAPLING: true
  JUNGLE_SAPLING: true
  ACACIA_SAPLING: true
  DARK_OAK_SAPLING: true
  GRASS_SEEDS: true
  GRAPE_BUSH: true
  BLUEBERRY_BUSH: true
  ELDERBERRY_BUSH: true
  RASPBERRY_BUSH: true
  BLACKBERRY_BUSH: true
  CRANBERRY_BUSH: true
  COWBERRY_BUSH: true
  STRAWBERRY_BUSH: true
  TOMATO_BUSH: true
  LETTUCE_BUSH: true
  TEA_LEAF_BUSH: true
  CABBAGE_BUSH: true
  SWEET_POTATO_BUSH: true
  MUSTARD_SEED_BUSH: true
  CURRY_LEAF_BUSH: true
  ONION_BUSH: true
  GARLIC_BUSH: true
  CILANTRO_BUSH: true
  BLACK_PEPPER_BUSH: true
  CORN_BUSH: true
  PINEAPPLE_BUSH: true
  RED_BELL_PEPPER_BUSH: true
  OAK_APPLE_SAPLING: true
  COCONUT_SAPLING: true
  CHERRY_SAPLING: true
  POMEGRANATE_SAPLING: true
  LEMON_SAPLING: true
  PLUM_SAPLING: true
  LIME_SAPLING: true
  ORANGE_SAPLING: true
  PEACH_SAPLING: true
  PEAR_SAPLING: true
  DRAGON_FRUIT_SAPLING: true

# Worlds in which exotic bushes and trees never generate naturally.
world-blacklist:
  world_nether
  world_the_end

# Percentage chance per freshly populated chunk (0-100).
chances:
  TREE: 22
  BUSH: 16

# Notify operators who join the server when a new EpicExoticGarden version is available.
# The console notice always shows and cannot be disabled here.
update-notify-join: true
```

---

## Configuration Items Explained

### 1. Language Setting (`language`)
```yaml
language: en
```
* **Purpose**: Sets the language for item names in the plugin.
* **Supported languages**: `en` (English), `de` (German), `es` (Spanish), `fr` (French), `it` (Italian), `nl` (Dutch), `pl` (Polish), `pt-BR` (Brazilian Portuguese), `ru` (Russian), `zh-CN` (Simplified Chinese).
* **Recommendation**: For international servers, use `en`. For Chinese servers, use `zh-CN`.

---

### 2. Grass Drops (`grass-drops`)
* **Purpose**: When players break tall grass, there is a **6% chance** to drop items from this list.
* **How to disable a drop**: Change `true` to `false` for any item.
* **Contents**: Includes vanilla seeds, vanilla saplings, and plugin-specific berry/vegetable/fruit saplings.

---

### 3. World Blacklist (`world-blacklist`)
* **Purpose**: Prevents natural generation of exotic bushes and trees in specified worlds.
* **Default**: `world_nether` and `world_the_end` are blacklisted, meaning vegetation only spawns in the overworld.

---

### 4. Generation Chances (`chances`)
* **TREE: 22**: 22% chance for exotic fruit trees per new chunk.
* **BUSH: 16**: 16% chance for exotic bushes per new chunk.

---

### 5. Update Notification (`update-notify-join`)
* **Purpose**: Whether to notify ops when a new plugin version is available upon joining.
* **Note**: Console update check is always shown and cannot be disabled here.

---

## Summary

Modify this config to localize the plugin, balance server economy (via `grass-drops`), restrict world generation, and control vegetation density. Reload with `/eeg reload` or restart the server.
