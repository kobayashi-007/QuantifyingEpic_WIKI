// ============================================================
// 插件信息集中配置 —— 修改/新增插件只改这一个文件
//
// 每个插件一个 key（如 epicbeheading），Markdown 页面中只需写：
//   <PluginCard plugin="epicbeheading" />
//   <ResourceInfo plugin="epicbeheading" />
//
// 不传 plugin 时默认使用 epicexoticgarden（兼容旧页面）。
// 如需临时覆盖某一项，仍可在 Markdown 里单独传 prop，如：
//   <PluginCard plugin="epicbeheading" file-size="80 KB .jar" />
// ============================================================

export const plugins = {
  // 🌿 EpicExoticGarden —— SpigotMC 资源 ID 139067，bStats 34267
  epicexoticgarden: {
    // ---- 基础信息（PluginCard / ResourceInfo 共用）----
    resourceId: 139067,
    icon: 'https://www.spigotmc.org/data/resource_icons/139/139067.jpg?1790222770',
    titleZh: '🌿 EpicExoticGarden | 异域园艺农场 ✨',
    titleEn: '🌿 EpicExoticGarden | Exotic Gardening Farm ✨',
    taglineZh: '栽种珍稀果树与魔法作物 — 采摘鲜果，制作餐食与特色饮品',
    taglineEn: 'Grow exotic fruit trees and magical crops — harvest fresh fruits, cook dishes and specialty drinks',
    nativeVersion: '26.3',
    testedVersions: ['1.12', '1.13', '1.14', '1.15', '1.16', '1.17', '1.18', '1.19', '1.20', '1.20.6', '1.21', '26.1', '26.2', '26.3'],
    sourceCode: 'https://github.com/kobayashi-007/EpicExoticGarden/',
    contributors: 'https://github.com/kobayashi-007/EpicExoticGarden/',
    languagesZh: '简体中文, English, 繁体中文, 日本語, Deutsch, français, русский язык',
    languagesEn: '简体中文, English, 繁体中文, 日本語, Deutsch, français, русский язык',
    donate: 'https://afdian.com/a/Linchangqing',
    fileSize: '236.3 KB .jar',
    // ---- 社区链接（空字符串 = 不显示该图标）----
    discordLink: 'https://discord.gg/xVXX4U9Rqp',
    wikiLinkZh: 'https://quantifyingepic.linchangqing.online/plugins/EpicExoticGarden/',
    wikiLinkEn: 'https://quantifyingepic.linchangqing.online/en/plugins/EpicExoticGarden/',
    kookLink: 'https://www.kookapp.cn/app/invite/w2SnZm',
    // ---- ResourceInfo 侧栏 ----
    authorZh: '量化史诗',
    authorEn: 'QuantifyingEpic',
    authorLink: 'https://www.spigotmc.org/resources/authors/quantifyingepic.2596545/',
    blogLink: 'https://blog.linchangqing.xyz/',
  },

  // ⚔ EpicBeheading —— SpigotMC 资源 ID 138148，bStats 33580
  epicbeheading: {
    resourceId: 138148,
    icon: 'https://www.spigotmc.org/data/resource_icons/138/138148.jpg?1787233280',
    titleZh: '⚔ EpicBeheading | 玩家头颅掉落 ✨',
    titleEn: '⚔ EpicBeheading | Player Head Drops ✨',
    taglineZh: '把每次击杀变成战利品 — 自定义掉率、VIP 加成与排行榜',
    taglineEn: 'Turn Every Kill Into a Trophy — Custom Drop Rates, VIP Boosts & Leaderboards',
    nativeVersion: '26.3',
    testedVersions: ['1.13', '1.14', '1.15', '1.16', '1.17', '1.18', '1.19', '1.20', '1.20.6', '1.21', '26.1', '26.2', '26.3'],
    sourceCode: '',
    contributors: '',
    languagesZh: '简体中文, English, 繁体中文, 日本語, 한국어, Deutsch, français, русский',
    languagesEn: '简体中文, English, 繁体中文, 日本語, 한국어, Deutsch, français, русский',
    donate: 'https://afdian.com/a/Linchangqing',
    fileSize: '77.6 KB .jar',
    discordLink: 'https://discord.gg/xVXX4U9Rqp',
    wikiLinkZh: 'https://quantifyingepic.linchangqing.online/plugins/EpicBeheading/',
    wikiLinkEn: 'https://quantifyingepic.linchangqing.online/en/plugins/EpicBeheading/',
    kookLink: 'https://www.kookapp.cn/app/invite/w2SnZm',
    authorZh: '量化史诗',
    authorEn: 'QuantifyingEpic',
    authorLink: 'https://www.spigotmc.org/resources/authors/quantifyingepic.2596545/',
    blogLink: 'https://blog.linchangqing.xyz/',
  },
}
