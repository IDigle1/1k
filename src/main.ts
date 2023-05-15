import { createApp } from 'vue'
import { createpinia } from 'pinia'
import './style.css'
import App from './App.vue'
const app = createApp(App)

app.use(createpinia())

app.mount('#app')
