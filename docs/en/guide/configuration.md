# 通用配置

EPIC 系列插件遵循统一的配置约定。

## 目录结构

每个插件会在 `plugins/` 下生成独立目录:

```
plugins/EpicXXX/
├── config.yml       # 主配置
├── lang/            # 语言文件
│   ├── zh_CN.yml
│   └── en_US.yml
├── data/            # 运行数据(请勿手动修改)
└── ...
```

## 主配置 (config.yml)

通用字段示例:

```yaml
# 语言 (对应 lang/ 下的文件名)
language: zh_CN

# 调试模式 (输出更多日志)
debug: false

# 数据存储
storage:
  type: SQLITE   # SQLITE / MYSQL
  mysql:
    host: localhost
    port: 3306
    database: epic
    username: root
    password: ''
```

## 热重载

大多数配置支持指令热重载,无需重启服务器:

```
/epic<xxx> reload
```

::: tip
修改 `storage`、`language` 等核心字段后建议重启服务器,而不是热重载。
:::
