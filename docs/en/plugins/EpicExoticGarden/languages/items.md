# EpicExoticGarden Language File Guide

## File Location

- Path: `plugins/EpicExoticGarden/languages/<language>/items.yml`
- Contains all player-visible text: item names, hunger templates, EpicGuide, and all GUI text.

## How It Works

- Missing keys automatically fall back to English
- On-disk files always take priority over jar defaults
- After plugin updates, new keys are **auto-merged** into existing files

## Supported Languages

en, de, es, fr, it, nl, pl, pt-BR, ru, zh-CN

## Customizing Translations

1. Open `languages/<your_language>/items.yml`
2. Edit any text values
3. Save and run `/eeg reload`
4. Changes take effect immediately

## Structure

```yaml
# Example items.yml structure
items:
  GRAPE:
    name: "Grape"
  GRAPE_JUICE:
    name: "Grape Juice"
# ...
```

## Notes

- UTF-8 encoding required
- YAML uses spaces only, **no tabs**
- Keep original keys, only change values
- Back up before major edits
