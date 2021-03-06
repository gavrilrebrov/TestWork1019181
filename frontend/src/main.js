import { createApp } from 'vue'
import App from './app.vue'

import store from './store'
import router from './router'

import './assets/inter/stylesheet.css'
import './assets/main.css'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
