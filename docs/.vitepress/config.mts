import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'EPIC 系列插件 WIKI',
  description: 'EPIC 系列插件官方文档',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Getting Started', link: '/en/guide/getting-started' },
          { text: 'Plugins', link: '/en/plugins/' },
          { text: 'FAQ', link: '/en/faq' },
          { text: 'Changelog', link: '/en/changelog' }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Getting Started', link: '/en/guide/getting-started' },
                { text: 'Installation', link: '/en/guide/installation' },
                { text: 'Configuration', link: '/en/guide/configuration' },
                { text: 'Permissions', link: '/en/guide/permissions' },
                { text: 'Commands', link: '/en/guide/commands' }
              ]
            }
          ],
          '/en/plugins/EpicExoticGarden/': [
            {
              text: 'EpicExoticGarden Docs',
              items: [
                { text: '🌿 EpicExoticGarden', link: '/en/plugins/EpicExoticGarden/index' },
                { text: '📈 bStats Statistics', link: 'https://bstats.org/plugin/bukkit/EpicExoticGarden/34267' },
                { text: '📈 bStats Live', link: '/en/plugins/EpicExoticGarden/bstats' },
                {
                  text: '⚙️ Basic Configuration',
                  collapsed: true,
                  items: [
                    { text: 'config.yml', link: '/en/plugins/EpicExoticGarden/Configuration/config' },
                    { text: 'models.yml', link: '/en/plugins/EpicExoticGarden/Configuration/models' },
                    { text: 'Permissions & Commands', link: '/en/plugins/EpicExoticGarden/Configuration/Permissions' }
                  ]
                },
                {
                  text: '🛠️ Recipes',
                  collapsed: true,
                  items: [
                    { text: 'Dishes', link: '/en/plugins/EpicExoticGarden/recipe/dishes' },
                    { text: 'Drinks', link: '/en/plugins/EpicExoticGarden/recipe/drinks' },
                    { text: 'Fruits', link: '/en/plugins/EpicExoticGarden/recipe/fruits' },
                    { text: 'Ingredients', link: '/en/plugins/EpicExoticGarden/recipe/ingredients' },
                    { text: 'Magical Crops', link: '/en/plugins/EpicExoticGarden/recipe/magicalcrops' },
                    { text: 'Plants', link: '/en/plugins/EpicExoticGarden/recipe/plants' },
                    { text: 'Tools', link: '/en/plugins/EpicExoticGarden/recipe/tools' },
                    { text: 'Recipe Tutorial', link: '/en/plugins/EpicExoticGarden/recipe/recipe' },
                    { text: 'Hunger Level Tutorial', link: '/en/plugins/EpicExoticGarden/recipe/Hunger_Level' }
                  ]
                },
                {
                  text: '🎨 Model Tutorial (Coming Soon)',
                  collapsed: true,
                  items: [
                    { text: '2D Model Tutorial', link: '' },
                    { text: '3D Model Tutorial', link: '' }
                  ]
                },
                {
                  text: '🌎 Languages',
                  collapsed: true,
                  items: [
                    { text: 'Languages', link: '/en/plugins/EpicExoticGarden/languages/items' }
                  ]
                }
              ]
            }
          ],
          '/en/plugins/EpicBeheading/': [
            {
              text: 'EpicBeheading Docs',
              items: [
                { text: '⚔ EpicBeheading', link: '/en/plugins/EpicBeheading/index' },
                { text: '📈 bStats Statistics', link: 'https://bstats.org/plugin/bukkit/EpicBeheading/33580' },
                { text: '📈 bStats Live', link: '/en/plugins/EpicBeheading/bstats' },
                {
                  text: '⚙️ Basic Configuration',
                  collapsed: true,
                  items: [
                    { text: 'config.yml', link: '/en/plugins/EpicBeheading/Configuration/config' },
                    { text: 'Commands & Permissions', link: '/en/plugins/EpicBeheading/Configuration/Commands' }
                  ]
                }
              ]
            }
          ],
          '/en/plugins/': [
            {
              text: 'Plugin List',
              items: [
                { text: 'Overview', link: '/en/plugins/' },
                { text: 'EpicBeheading', link: '/en/plugins/EpicBeheading/index' },
                { text: 'EpicExoticGarden', link: '/en/plugins/EpicExoticGarden/index' }
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/your-org/epic-plugins/edit/main/docs/en/:path',
          text: 'Edit this page on GitHub'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        outline: {
          label: 'On this page'
        },
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        footer: {
          message: 'EPIC Plugin Series',
          copyright: 'Copyright © 2026 EPIC'
        }
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'EPIC WIKI',

    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started' },
      { text: '插件列表', link: '/plugins/' },
      { text: '常见问题', link: '/faq' },
      { text: '更新日志', link: '/changelog' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装插件', link: '/guide/installation' },
            { text: '通用配置', link: '/guide/configuration' },
            { text: '权限说明', link: '/guide/permissions' },
            { text: '指令说明', link: '/guide/commands' }
          ]
        }
      ],

      // EPICEXOTICGARDEN插件
      '/plugins/EpicExoticGarden/': [
        {
          text: 'EpicExoticGarden 文档',
          items: [
            { text: '🌿 EpicExoticGarden', link: '/plugins/EpicExoticGarden/index' },
            { text: '📈 bStats插件统计', link: 'https://bstats.org/plugin/bukkit/EpicExoticGarden/34267' },
            { text: '📈 bStats在线统计', link: '/plugins/EpicExoticGarden/bstats' },
            {
              text: '⚙️ 插件基础配置',
              collapsed: true,
              items: [
                { text: 'config.yml', link: '/plugins/EpicExoticGarden/Configuration/config' },
                { text: 'models.yml', link: '/plugins/EpicExoticGarden/Configuration/models' },
                { text: '权限与命令', link: '/plugins/EpicExoticGarden/Configuration/Permissions' },
              ]
            },
            {
              text: '🎨 模型教程(敬请期待)',
              collapsed: true,
              items: [
                { text: 'Blockbench', link: '' },
                { text: '2D模型教程', link: '' },
                { text: '3D模型教程', link: '' }
              ]
            },
            {
              text: '🛠️ 合成配方',
              collapsed: true,
              items: [
                { text: '菜肴', link: '/plugins/EpicExoticGarden/recipe/dishes' },
                { text: '饮料', link: '/plugins/EpicExoticGarden/recipe/drinks' },
                { text: '水果', link: '/plugins/EpicExoticGarden/recipe/fruits' },
                { text: '原料', link: '/plugins/EpicExoticGarden/recipe/ingredients' },
                { text: '魔法作物', link: '/plugins/EpicExoticGarden/recipe/magicalcrops' },
                { text: '植物', link: '/plugins/EpicExoticGarden/recipe/plants' },
                { text: '工具', link: '/plugins/EpicExoticGarden/recipe/tools' },
                { text: '合成教程', link: '/plugins/EpicExoticGarden/recipe/recipe' },
                { text: '修改饥饿值教程', link: '/plugins/EpicExoticGarden/recipe/Hunger_Level' }
              ]
            },
            {
              text: '🌎 Languages',
              collapsed: true,
              items: [
                { text: 'Languages', link: '/plugins/EpicExoticGarden/languages/items' }
              ]
            }
          ]
        }
      ],

      // EPICBEHEADING插件
      '/plugins/EpicBeheading/': [
        {
          text: 'EpicBeheading 文档',
          items: [
            { text: '⚔ EpicBeheading', link: '/plugins/EpicBeheading/index' },
            { text: '📈 bStats插件统计', link: 'https://bstats.org/plugin/bukkit/EpicBeheading/33580' },
            { text: '📈 bStats在线统计', link: '/plugins/EpicBeheading/bstats' },
            {
              text: '⚙️ 插件基础配置',
              collapsed: true,
              items: [
                { text: 'config.yml', link: '/plugins/EpicBeheading/Configuration/config' },
                { text: '命令与权限', link: '/plugins/EpicBeheading/Configuration/Commands' },
              ]
            }
          ]
        }
      ],

      '/plugins/': [
        {
          text: '插件列表',
          items: [
            { text: '总览', link: '/plugins/' },
            { text: 'EpicBeheading', link: '/plugins/EpicBeheading/index' },
            { text: 'EpicExoticGarden', link: '/plugins/EpicExoticGarden/index' }
          ]
        }
      ],
    },




    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/epic-plugins' }
    ],

    footer: {
      message: 'EPIC 系列插件',
      copyright: 'Copyright © 2026 EPIC'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/your-org/epic-plugins/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
