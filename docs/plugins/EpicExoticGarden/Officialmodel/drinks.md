# EpicExoticGarden Drinks CustomModelData 配置教程
> 仅针对 Drinks（饮品）板块，适配 `custommodeldata.yml`，服务端版本要求 1.14+ Java版

## 一、原理说明
饮品分为两种基础材质：
1. **`POTION` 药水瓶基底**：大部分果汁、奶昔、冰茶、柠檬水，已分配连续 CMD 号段：`1114001 ~ 1114042`
2. **`PLAYER_HEAD` 玩家头颅基底**：`SWEETENED_TEA` / `HOT_CHOCOLATE` / `PINACOLADA`，CMD仅用于资源包识别；方块形态外观由头颅皮肤控制，CMD只控制物品栏显示。

> 规则：
> - `ITEM_ID: 数字`：插件会给该饮品打上 `CustomModelData=数字`
> - `0` = 关闭自定义模型，使用原版外观
> - 修改配置**不会刷新背包内已有旧物品**，需要重新获取物品才生效
> - CustomModelData 只是标记，**必须搭配资源包模型覆盖才能显示自定义贴图**

## 二、修改服务端 `models.yml` 的 Drinks 区域
打开插件配置文件 `models.yml`，定位到 `Drinks` 段落。

### 书写格式
```yaml
饮品ID: CustomModelData数字  # Material: POTION / PLAYER_HEAD
```

### 资源包目录结构
```yaml
你的资源包/
├─ pack.mcmeta
└─ assets/
   ├─ minecraft/
   │  └─ models/item/potion.json
   └─ epicexoticgarden/
      ├─ models/item/drinks/
      │   ├─ grape_juice.json
      │   ├─ grape_smoothie.json
      │   └─ ...其他饮品模型json
      └─ textures/item/drinks/
          ├─ grape_juice.png
          └─ ...贴图文件
```

### 插件配置文件 `models.yml` 的设置
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