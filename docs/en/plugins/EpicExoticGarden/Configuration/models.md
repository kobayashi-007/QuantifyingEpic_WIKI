# EpicExoticGarden CustomModelData Configuration Guide

This guide explains how to configure `CustomModelData` for **EpicExoticGarden (EEG)** to display custom textures for plants, ingredients, dishes, and drinks in a Minecraft resource pack.

---

## 1. What is CustomModelData?

`CustomModelData` is a native Minecraft feature (introduced in **1.14+**). It allows developers to apply custom appearances to vanilla base materials (like `POTION`, `PLAYER_HEAD`, `OAK_SAPLING`) by attaching different numeric tags, without adding new item IDs.

### Notes
* **Server version**: Must be **1.14 or higher**.
* **Base material**: The `# Material: ...` comment after each entry indicates the vanilla carrier item.
* **Player heads**: Items with `# Material: PLAYER_HEAD` are controlled by skin data; `CustomModelData` mainly controls their block form.
* **Apply changes**: Run `/eeg reload` in-game after editing.

---

## 2. Configuration File Structure

```yaml
ITEM_ID: 0  # Material: corresponding vanilla base material
```

* **Left `ITEM_ID`**: Plugin internal item name (e.g., `GRAPE`, `BURRITO`).
* **Right number**: The `CustomModelData` value to assign.
* **`0`**: Uses default vanilla appearance.
* **Non-zero positive integer** (e.g., `10040001`): Applies the corresponding custom model.

---

## 3. Configuration Steps

### Step 1: Plan Your Number Ranges
* **Drinks**: `10040001` ~ `10040050`
* **Dishes**: `10050001` ~ `10050100`

### Step 2: Edit the Config File
Open `CustomModelData.yml` and change `0` to your assigned number:

```yaml
GRAPE_JUICE: 10040001  # Material: POTION
GRAPE_SMOOTHIE: 10040002  # Material: POTION
```

### Step 3: Reload
Save the file and run:
```
/eeg reload
```

---

> 💡 **Tip**: Ensure your resource pack's `models/item/` directory has `predicate` and `custom_model_data` matching rules for the base materials (e.g., `potion.json`).
