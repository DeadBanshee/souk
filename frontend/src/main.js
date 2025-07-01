import { createApp } from 'vue'
import App from './App.vue'
import { pinia } from './stores'
import { router } from './router'

import './style.css' // se estiver usando Tailwind

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')