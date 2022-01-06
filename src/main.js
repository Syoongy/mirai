import { createApp } from 'vue';

import routes from './routes';
import App from './app.vue';

import './assets/index.css'


const app = createApp(App);

app.use(routes);

app.mount('#app');
