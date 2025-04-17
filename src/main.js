import 'mdui/mdui.css';
import 'mdui';

import 'animate.css';
import App from '@src/App.vue';
import router from '@src/router/index';
import '@src/styles.css';
import { createApp } from 'vue';

createApp(App).use(router).mount('#app')