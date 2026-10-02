<template>
  <div class="plugin-page">
    <div class="plugin-header">
      <div class="plugin-icon">
        <img src="https://www.spigotmc.org/data/resource_icons/139/139067.jpg?1790222770" alt="EpicExoticGarden">
      </div>
      <div class="plugin-info">
        <h1 class="plugin-title">
          {{ t.title }}
          <span class="version">{{ data.version }}</span>
        </h1>
        <p class="plugin-tagline">{{ t.tagline }}</p>
      </div>
      <div class="plugin-download">
        <a href="https://www.spigotmc.org/resources/epicexoticgarden.139067/" target="_blank" rel="noopener" class="download-btn">
          <span class="download-text">{{ t.download }}</span>
          <span class="download-size">236.3 KB .jar</span>
        </a>
      </div>
    </div>

    <div class="plugin-tabs">
      <div class="tab-item active">{{ t.overview }}</div>
      <a class="tab-item" href="https://www.spigotmc.org/resources/139067/field?field=documentation">{{ t.docs }}</a>
      <a class="tab-item" href="https://www.spigotmc.org/resources/139067/updates">{{ t.updates }} <span class="tab-badge">{{ data.updateCount }}</span></a>
      <a class="tab-item" href="https://www.spigotmc.org/resources/.139067/history">{{ t.history }}</a>
    </div>

    <div class="plugin-content">
      <div class="tab-panel">
        <div class="customResourceFields aboveInfo">
          <dl>
            <dt>{{ t.nativeVersion }}</dt>
            <dd>26.3</dd>
          </dl>
          <dl>
            <dt>{{ t.testedVersions }}</dt>
            <dd>
              <ul class="plainList">
                <li v-for="v in testedVersions" :key="v">{{ v }}</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>{{ t.sourceCode }}</dt>
            <dd><a href="https://github.com/kobayashi-007/EpicExoticGarden/" target="_blank" rel="noopener">https://github.com/kobayashi-007/EpicExoticGarden/</a></dd>
          </dl>
          <dl>
            <dt>{{ t.contributors }}</dt>
            <dd><a href="https://github.com/kobayashi-007/EpicExoticGarden/" target="_blank" rel="noopener">https://github.com/kobayashi-007/EpicExoticGarden/</a></dd>
          </dl>
          <dl>
            <dt>{{ t.languages }}</dt>
            <dd>简体中文, English, 繁体中文, 日本語, Deutsch, français, русский язык</dd>
          </dl>
          <dl>
            <dt>{{ t.donate }}</dt>
            <dd><a href="https://afdian.com/a/Linchangqing" target="_blank" rel="noopener">https://afdian.com/a/Linchangqing</a></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isZh = () => lang.value === 'zh-CN'

const t = {
  title: isZh() ? '🌿 EpicExoticGarden | 异域园艺农场 ✨' : '🌿 EpicExoticGarden | Exotic Gardening Farm ✨',
  tagline: isZh() ? '栽种珍稀果树与魔法作物 — 采摘鲜果，制作餐食与特色饮品' : 'Grow exotic fruit trees and magical crops — harvest fresh fruits, cook dishes and specialty drinks',
  download: isZh() ? '立即下载' : 'Download Now',
  overview: isZh() ? '概述' : 'Overview',
  docs: isZh() ? '文档' : 'Documentation',
  updates: isZh() ? '更新' : 'Updates',
  history: isZh() ? '版本历史记录' : 'Version History',
  nativeVersion: isZh() ? '原生主MC版本:' : 'Native Major MC Version:',
  testedVersions: isZh() ? '已测试的主要MC版本:' : 'Tested Major MC Versions:',
  sourceCode: isZh() ? '源代码:' : 'Source Code:',
  contributors: isZh() ? '贡献者:' : 'Contributors:',
  languages: isZh() ? '支持的语言:' : 'Languages Supported:',
  donate: isZh() ? '捐款链接:' : 'Donation Link:',
}

const testedVersions = ['1.12', '1.13', '1.14', '1.15', '1.16', '1.17', '1.18', '1.19', '1.20', '1.20.6', '1.21', '26.1', '26.2', '26.3']

const data = reactive({
  version: '1.0.4',
  updateCount: 4,
})

onMounted(async () => {
  try {
    // 最新版本号
    const vRes = await fetch('https://api.spiget.org/v2/resources/139067/versions/latest')
    if (vRes.ok) {
      const vJson = await vRes.json()
      if (vJson.name) data.version = vJson.name
    }
    // 更新数量
    const uRes = await fetch('https://api.spiget.org/v2/resources/139067/updates')
    if (uRes.ok) {
      const uJson = await uRes.json()
      if (Array.isArray(uJson) && uJson.length) data.updateCount = uJson.length
    }
  } catch {
    // 加载失败保持默认值
  }
})
</script>

<style scoped>
/* 外层布局：卡片 + 侧栏 左右排列 */
.plugin-layout {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

/* 左侧主卡片 */
.plugin-page {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.plugin-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.plugin-icon { flex-shrink: 0; }
.plugin-icon img {
  width: 72px;
  height: 72px;
  border-radius: 8px;
  object-fit: cover;
}

.plugin-info {
  flex: 1;
  min-width: 0;
}

.plugin-title {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}
.version {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
.plugin-tagline {
  margin: 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.plugin-download { flex-shrink: 0; }
.download-btn {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 3px 10px;
  box-sizing: border-box;
  background: rgb(58, 101, 129);
  color: #FFF;
  text-decoration: none;
  border-radius: 6px;
  font-family: 'Droid Sans', Arial, sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
}
.download-btn:hover { background: #ed8106; }
.download-text { font-size: 13px; height: 13px; line-height: 13px; }
.download-size { font-size: 11px; opacity: 0.85; }

.plugin-tabs {
  display: flex;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  padding: 0 0.5rem;
  gap: 0;
  overflow-x: auto;
}
.tab-item {
  padding: 0.6rem 1rem;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  border-bottom: 2px solid transparent;
  white-space: nowrap;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  user-select: none;
  text-decoration: none;
}
.tab-item:hover { color: var(--vp-c-text-1); }
.tab-item.active {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}
.tab-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.1rem;
  height: 1.1rem;
  padding: 0 0.3rem;
  font-size: 0.7rem;
  font-weight: 600;
  background: var(--vp-c-brand-1);
  color: #fff;
  border-radius: 999px;
}

.plugin-content {
  padding: 1rem 1.25rem;
}

.tab-panel h2 {
  margin-top: 0;
  font-size: 1rem;
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0.75rem;
}

.customResourceFields {
  overflow: hidden;
}
.customResourceFields.aboveInfo {
  border-bottom: 1px solid rgb(250, 250, 250);
  margin-bottom: 10px;
}
.customResourceFields dl {
  overflow: hidden;
  margin: 8px 0;
  font-size: 0.9rem;
  line-height: 1.5;
}
.customResourceFields dt {
  width: 190px;
  float: left;
  color: rgb(127, 127, 127);
  font-weight: 500;
}
.customResourceFields dd {
  margin-left: 200px;
  color: var(--vp-c-text-1);
}
.customResourceFields dd a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.customResourceFields dd a:hover {
  text-decoration: underline;
}
.customResourceFields .plainList {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.customResourceFields .plainList > li {
  list-style: none;
  display: inline-block;
  padding-right: 3px;
}
.customResourceFields .plainList > li::after {
  content: ',';
}
.customResourceFields .plainList > li:last-child::after {
  content: '';
}

@media (max-width: 640px) {
  .customResourceFields dt {
    width: auto;
    float: none;
  }
  .customResourceFields dd {
    margin-left: 0;
  }
}

@media (max-width: 640px) {
  .plugin-layout { flex-direction: column; }
  .content-sidebar { width: 100%; }
  .plugin-header { flex-wrap: wrap; }
  .plugin-download { width: 100%; margin-top: 0.5rem; }
  .download-btn { width: 100%; }
}
</style>
