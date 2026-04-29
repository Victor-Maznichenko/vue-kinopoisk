import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app/index.vue'
import { router } from './app/router'
import '@/common/styles/index.scss'

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia).mount('#app');
