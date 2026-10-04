---
pageClass: bstats-page
---

<!-- 只显示 bStats 页面顶部的 hero 模块（标题 + Servers / Players 卡片） -->
<div class="bstats-hero-embed">
  <iframe
    src="https://bstats.org/plugin/bukkit/EpicBeheading/33580"
    scrolling="no"
    frameborder="0"
    loading="lazy"
  ></iframe>
</div>

<!-- bStats 图表：由 bstats-graph.gritter.nl 实时生成 PNG（bStats 官方 charts 接口需 JS 渲染，iframe 无法显示） -->
<div class="bstats-charts">
  <img class="chart-wide" src="https://bstats-graph.gritter.nl/v1/plugins/33580/charts/servers/chart.png" alt="Servers using EpicBeheading" loading="lazy">
  <img class="chart-wide" src="https://bstats-graph.gritter.nl/v1/plugins/33580/charts/players/chart.png" alt="Players on servers using EpicBeheading" loading="lazy">
  <img src="https://bstats-graph.gritter.nl/v1/plugins/33580/charts/minecraftVersion/chart.png" alt="Minecraft Version" loading="lazy">
  <img src="https://bstats-graph.gritter.nl/v1/plugins/33580/charts/serverSoftware/chart.png" alt="Server Software" loading="lazy">
  <img src="https://bstats-graph.gritter.nl/v1/plugins/33580/charts/pluginVersion/chart.png" alt="Plugin Version" loading="lazy">
  <img src="https://bstats-graph.gritter.nl/v1/plugins/33580/charts/onlineMode/chart.png" alt="Online mode" loading="lazy">
  <img src="https://bstats-graph.gritter.nl/v1/plugins/33580/charts/coreCount/chart.png" alt="Core count" loading="lazy">
  <img src="https://bstats-graph.gritter.nl/v1/plugins/33580/charts/location/chart.png" alt="Server Location" loading="lazy">
  <img src="https://bstats-graph.gritter.nl/v1/plugins/33580/charts/osArch/chart.png" alt="System arch" loading="lazy">
</div>

<style>
/* 加宽本页内容区：默认 .content-container 限宽 688px，放宽到 1000px */
.bstats-page .VPDoc .container {
  max-width: 1332px !important;   /* 1000px 内容 + 右侧导航 256px + 边距 */
}
.bstats-page .VPDoc .content-container {
  max-width: 1000px !important;
}

.bstats-hero-embed {
  height: 460px;        /* 露出高度：想多显示/少显示就调这里 */
  overflow: hidden;
  margin: 1rem 0;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.bstats-hero-embed iframe {
  display: block;
  width: 100%;
  height: 2000px;       /* 足够装下整个 bStats 页面即可 */
  border: 0;
  /* bStats 导航栏高 80px，整体上移把它裁掉 */
  transform: translateY(-80px);
}

/* 图表网格：折线图占整行，饼图两列 */
.bstats-charts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem 0;
}
.bstats-charts img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}
.bstats-charts .chart-wide {
  grid-column: 1 / -1;
}

@media (max-width: 640px) {
  .bstats-charts {
    grid-template-columns: 1fr;
  }
}
</style>
