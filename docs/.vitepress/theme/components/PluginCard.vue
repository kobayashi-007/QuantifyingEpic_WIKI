<template>
  <div class="plugin-page">
    <div class="plugin-header">
      <div class="plugin-icon">
        <img :src="cfg.icon" :alt="isZh() ? cfg.titleZh : cfg.titleEn">
      </div>
      <div class="plugin-info">
        <h1 class="plugin-title">
          {{ isZh() ? cfg.titleZh : cfg.titleEn }}
          <span class="version">{{ data.version }}</span>
        </h1>
        <p class="plugin-tagline">{{ isZh() ? cfg.taglineZh : cfg.taglineEn }}</p>
      </div>
      <div class="plugin-download">
        <a :href="`https://www.spigotmc.org/resources/${cfg.resourceId}/`" target="_blank" rel="noopener" class="download-btn">
          <span class="download-text">{{ t.download }}</span>
          <span class="download-size">{{ cfg.fileSize }}</span>
        </a>
      </div>
    </div>

    <div class="plugin-tabs">
      <div class="tab-item active">{{ t.overview }}</div>
      <a class="tab-item" :href="`https://www.spigotmc.org/resources/${cfg.resourceId}/field?field=documentation`">{{ t.docs }}</a>
      <a class="tab-item" :href="`https://www.spigotmc.org/resources/${cfg.resourceId}/updates`">{{ t.updates }} <span class="tab-badge">{{ data.updateCount }}</span></a>
      <a class="tab-item" :href="`https://www.spigotmc.org/resources/${cfg.resourceId}/history`">{{ t.history }}</a>
    </div>

    <div class="plugin-content">
      <div class="tab-panel">
        <div class="customResourceFields aboveInfo">
          <dl>
            <dt>{{ t.nativeVersion }}</dt>
            <dd>{{ cfg.nativeVersion }}</dd>
          </dl>
          <dl>
            <dt>{{ t.testedVersions }}</dt>
            <dd>
              <ul class="plainList">
                <li v-for="v in testedList" :key="v">{{ v }}</li>
              </ul>
            </dd>
          </dl>
          <dl v-if="cfg.sourceCode">
            <dt>{{ t.sourceCode }}</dt>
            <dd><a :href="cfg.sourceCode" target="_blank" rel="noopener">{{ cfg.sourceCode }}</a></dd>
          </dl>
          <dl v-if="cfg.contributors">
            <dt>{{ t.contributors }}</dt>
            <dd><a :href="cfg.contributors" target="_blank" rel="noopener">{{ cfg.contributors }}</a></dd>
          </dl>
          <dl>
            <dt>{{ t.languages }}</dt>
            <dd>{{ isZh() ? cfg.languagesZh : cfg.languagesEn }}</dd>
          </dl>
          <dl v-if="cfg.donate">
            <dt>{{ t.donate }}</dt>
            <dd><a :href="cfg.donate" target="_blank" rel="noopener">{{ cfg.donate }}</a></dd>
          </dl>
        </div>

        <!-- 社区链接：居中一排（plugins.js 中对应项为空则不显示） -->
        <div v-if="cfg.discordLink || wikiUrl || cfg.kookLink" class="social-links">
          <a v-if="cfg.discordLink" :href="cfg.discordLink" target="_blank" rel="noopener" title="Discord">
            <img src="https://pluginepic.187322.xyz/Discord0.png" alt="Discord">
          </a>
          <a v-if="wikiUrl" :href="wikiUrl" target="_blank" rel="noopener" title="Wiki">
            <img src="https://pluginepic.187322.xyz/wiki.png" alt="Wiki">
          </a>
          <a v-if="cfg.kookLink" :href="cfg.kookLink" target="_blank" rel="noopener" title="KOOK">
            <img src="https://pluginepic.187322.xyz/kook.png" alt="KOOK">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useData } from 'vitepress'
import { plugins as pluginData } from '../data/plugins'

// 用法：<PluginCard plugin="epicbeheading" />
// 所有信息在 ../data/plugins.js 中集中维护；
// 下面的 props 全部可选，仅用于临时覆盖 plugins.js 中的对应字段
const props = defineProps({
  plugin: { type: String, default: 'epicexoticgarden' },
  resourceId: [Number, String],
  icon: String,
  titleZh: String,
  titleEn: String,
  taglineZh: String,
  taglineEn: String,
  nativeVersion: String,
  testedVersions: [Array, String],
  sourceCode: String,
  contributors: String,
  languagesZh: String,
  languagesEn: String,
  donate: String,
  fileSize: String,
  discordLink: String,
  wikiLinkZh: String,
  wikiLinkEn: String,
  kookLink: String,
})

// plugins.js 配置 + Markdown 传入的覆盖项（覆盖项优先）
const cfg = computed(() => {
  const overrides = Object.fromEntries(
    Object.entries(props).filter(([k, v]) => v !== undefined && k !== 'plugin')
  )
  return { ...pluginData[props.plugin], ...overrides }
})

const { lang } = useData()
const isZh = () => lang.value === 'zh-CN'

const t = {
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

const data = reactive({
  version: '',
  updateCount: 0,
})

// 兼容数组 / 逗号字符串两种配置方式
const testedList = computed(() =>
  Array.isArray(cfg.value.testedVersions)
    ? cfg.value.testedVersions
    : String(cfg.value.testedVersions).split(',').map(s => s.trim()).filter(Boolean)
)

// Wiki 链接按当前语言选择
const wikiUrl = computed(() => (isZh() ? cfg.value.wikiLinkZh : cfg.value.wikiLinkEn) || '')

onMounted(async () => {
  try {
    // 最新版本号
    const vRes = await fetch(`https://api.spiget.org/v2/resources/${cfg.value.resourceId}/versions/latest`)
    if (vRes.ok) {
      const vJson = await vRes.json()
      if (vJson.name) data.version = vJson.name
    }
    // 更新数量
    const uRes = await fetch(`https://api.spiget.org/v2/resources/${cfg.value.resourceId}/updates`)
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

/* 社区链接：居中一排 */
.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}
.social-links a {
  display: inline-flex;
  transition: transform 0.2s, opacity 0.2s;
}
.social-links a:hover {
  transform: translateY(-2px);
  opacity: 0.85;
}
.social-links img {
  height: 40px;
  width: auto;
  border-radius: 8px;
}

@media (max-width: 640px) {
  .plugin-layout { flex-direction: column; }
  .content-sidebar { width: 100%; }
  .plugin-header { flex-wrap: wrap; }
  .plugin-download { width: 100%; margin-top: 0.5rem; }
  .download-btn { width: 100%; }
}
</style>
