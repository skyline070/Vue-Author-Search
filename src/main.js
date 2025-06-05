import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { createRouter, createWebHistory } from 'vue-router';
import AuthorSearch from './pages/AuthorSearch.vue'; // 👈 New page component

const routes = [
  { path: '/', redirect: '/authors' },
  { path: '/authors', component: AuthorSearch },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
