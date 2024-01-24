import '@material/web/all.js';
import 'animate.css';
import App from '@src/App.vue';
import router from '@src/router/index';
import '@src/styles.css';
import 'material-symbols';
import { createApp } from 'vue';

createApp(App).use(router).mount('#app')