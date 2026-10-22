import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/fonts.css'
import './styles/main.css'

const app = createApp(App).use(router)

// Mount after the initial navigation so the first page view uses the resolved route.
router.isReady().then(() => app.mount('#app'))
