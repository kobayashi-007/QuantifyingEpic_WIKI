# EpicBeheading 命令与权限

## 命令

| 命令 | 权限节点 | 默认 | 说明 |
|---|---|---|---|
| `/ebh reload` | `epicbeheading.reload` | OP | 热重载配置、语言文件、时区、排行榜刷新间隔与 Top 数量，无需重启 |

---

## 权限节点

### 管理权限

| 权限节点 | 默认 | 说明 |
|---|---|---|
| `epicbeheading.reload` | OP | 使用 `/ebh reload` 重载插件 |

### VIP 掉率分组权限

| 权限节点 | 默认掉率 | 说明 |
|---|---|---|
| `epicbeheading.vip` | 7% | VIP 玩家分组 |
| `epicbeheading.mvp` | 9% | MVP 玩家分组 |
| `epicbeheading.mvpplus` | 12% | MVP+ 玩家分组 |

> 💡 玩家同时拥有多个分组权限时，按 `config.yml` 中**最靠后（概率最高）**的组别计算。概率可在配置文件中自由修改，也可以自行新增分组。

---

## 命令执行示例

```text
/ebh reload
```

成功后配置立即生效：

- 基础掉率 `drop-chance`
- VIP 分组与概率 `groups`
- 语言 `language`
- 排行榜刷新间隔、Top 数量、时区、统计保存间隔、周重置日

---

## 搭配权限插件给组授权

LuckPerms 示例：

```text
/lp group vip permission set epicbeheading.vip true
/lp group mvp permission set epicbeheading.mvp true
/lp group mvpplus permission set epicbeheading.mvpplus true
```
