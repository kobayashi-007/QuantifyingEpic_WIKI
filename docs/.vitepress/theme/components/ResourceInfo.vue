<template>
  <div class="section statsList" id="resourceInfo">
    <div class="secondaryContent">
      <h3>
        <svg class="h3-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#fff"/>
          <path d="M12 16v-4" stroke="#ED8106" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="8" r="1" fill="#ED8106"/>
        </svg>
        {{ t.info }}
      </h3>
      <div class="pairsJustified">
        <dl class="author">
          <dt>{{ t.author }}</dt>
          <dd>
            <a href="resources/authors/quantifyingepic.2596545/">QuantifyingEpic</a>
          </dd>
        </dl>
        <dl class="downloadCount">
          <dt :title="isZh() ? '通过唯一下载者' : 'By unique downloaders'">{{ t.downloads }}</dt>
          <dd>{{ data.downloads }}</dd>
        </dl>
        <dl class="firstRelease">
          <dt>{{ t.firstRelease }}</dt>
          <dd>
            <span class="DateTime">{{ data.firstRelease }}</span>
          </dd>
        </dl>
        <dl class="lastUpdate">
          <dt>{{ t.lastUpdate }}</dt>
          <dd>
            <abbr class="DateTime">{{ data.lastUpdate }}</abbr>
          </dd>
        </dl>
      </div>
      <div class="footnote">
        <a href="https://blog.linchangqing.xyz/" rel="nofollow" target="_blank">{{ t.moreInfo }}</a>
      </div>
    </div>
  </div>

  <div class="section statsList versionInfo">
    <div class="secondaryContent">
      <h3>
        <svg class="h3-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" fill="#fff"/>
          <circle cx="7" cy="7" r="1.5" fill="#ED8106"/>
        </svg>
        Version {{ data.version }}
      </h3>
      <div class="pairsJustified">
        <dl class="versionReleaseDate">
          <dt>{{ t.released }}</dt>
          <dd>
            <abbr class="DateTime">{{ data.versionRelease }}</abbr>
          </dd>
        </dl>
        <dl class="versionDownloadCount">
          <dt :title="isZh() ? '通过唯一下载者' : 'By unique downloaders'">{{ t.versionDownloads }}</dt>
          <dd>{{ data.versionDownloads }}</dd>
        </dl>
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
  info: isZh() ? '信息' : 'Information',
  author: isZh() ? '作者：' : 'Author:',
  downloads: isZh() ? '总下载量：' : 'Total Downloads:',
  firstRelease: isZh() ? '首次发布：' : 'First Release:',
  lastUpdate: isZh() ? '最后更新：' : 'Last Update:',
  moreInfo: isZh() ? '更多信息请访问 blog.linchangqing.xyz...' : 'More info at blog.linchangqing.xyz...',
  released: isZh() ? '发布：' : 'Released:',
  versionDownloads: isZh() ? '下载量：' : 'Downloads:',
}

const data = reactive({
  downloads: '—',
  firstRelease: '—',
  lastUpdate: '—',
  version: '1.0.4',
  versionRelease: '—',
  versionDownloads: '—',
})

onMounted(async () => {
  try {
    // 1) 拉取资源基本信息
    const res = await fetch('https://api.spiget.org/v2/resources/139067')
    if (!res.ok) throw new Error('spiget resource failed')
    const json = await res.json()

    if (json.downloads != null) data.downloads = String(json.downloads)

    // 首次发布：releaseDate（秒级时间戳）
    if (json.releaseDate) {
      const d = new Date(json.releaseDate * 1000)
      data.firstRelease = d.toLocaleDateString(isZh() ? 'zh-CN' : 'en-US')
    }

    // 最后更新：updateDate（秒级时间戳）
    if (json.updateDate) {
      const d = new Date(json.updateDate * 1000)
      data.lastUpdate = d.toLocaleDateString(isZh() ? 'zh-CN' : 'en-US')
    }

    // 2) 拉取最新版本信息
    const vRes = await fetch('https://api.spiget.org/v2/resources/139067/versions/latest')
    if (!vRes.ok) throw new Error('spiget version failed')
    const vJson = await vRes.json()

    if (vJson.name) data.version = vJson.name
    if (vJson.downloads != null) data.versionDownloads = String(vJson.downloads)
    if (vJson.releaseDate) {
      const d = new Date(vJson.releaseDate * 1000)
      data.versionRelease = d.toLocaleDateString(isZh() ? 'zh-CN' : 'en-US')
    }
  } catch {
    // 加载失败时保持默认值，页面不会报错
  }
})
</script>

<style scoped>
.section.statsList {
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  width: 260px;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.secondaryContent h3 {
  font-size: 14px;
  color: #ffffff;
  background-color: #ED8106;
  padding: 8px 10px;
  margin: -10px -10px 10px -10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.secondaryContent h3 .h3-icon {
  flex-shrink: 0;
}

.pairsJustified dl {
  display: flex;
  justify-content: space-between;
  margin: 6px 0;
  font-size: 12px;
}

.pairsJustified dt {
  color: #777;
}

.pairsJustified dd {
  margin: 0;
  color: #333;
  text-align: right;
}

.pairsJustified a {
  color: #265c83;
  text-decoration: none;
}

.pairsJustified a:hover {
  text-decoration: underline;
}

.footnote {
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px solid #eee;
  text-align: center;
  font-size: 11px;
}

.footnote a {
  color: #265c83;
  text-decoration: none;
}

.footnote a:hover {
  text-decoration: underline;
}

/* 两个盒子之间的间距 */
.section + .section {
  margin-top: 15px;
}
</style>
