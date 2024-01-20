import '@material/web/all.js';
import 'material-symbols';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './styles.css';

createApp(App).use(router).mount('#app')