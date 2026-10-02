import DefaultTheme from 'vitepress/theme'
import PluginCard from './components/PluginCard.vue'
import ResourceInfo from './components/ResourceInfo.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PluginCard', PluginCard)
    app.component('ResourceInfo', ResourceInfo)
  }
}
