import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@/scss/style.scss'
import components from '@/components/UI'

loadFonts()

const app = createApp(App)

for (const [key, value] of Object.entries(components)) {
  app.component(key, value);
}

app.use(router)
  .use(vuetify)
  .mount('#app')
