import '@material/web/all.js';
import router from './router/index';
import 'material-symbols';
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')