---
pageClass: bstats-page
---

<!-- Only the hero section of the bStats page (title + Servers / Players cards) -->
<div class="bstats-hero-embed">
  <iframe
    src="https://bstats.org/plugin/bukkit/EpicBeheading/33580"
    scrolling="no"
    frameborder="0"
    loading="lazy"
  ></iframe>
</div>

<!-- bStats charts: PNGs generated live by bstats-graph.gritter.nl (official charts endpoint requires JS) -->
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
/* Widen the content area: default .content-container is capped at 688px, expand to 1000px */
.bstats-page .VPDoc .container {
  max-width: 1332px !important;
}
.bstats-page .VPDoc .content-container {
  max-width: 1000px !important;
}

.bstats-hero-embed {
  height: 460px;
  overflow: hidden;
  margin: 1rem 0;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.bstats-hero-embed iframe {
  display: block;
  width: 100%;
  height: 2000px;
  border: 0;
  transform: translateY(-80px);
}

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
