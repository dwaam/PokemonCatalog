import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import PokemonInfo from '../views/PokemonInfo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/pokemon/:id',
    component: PokemonInfo,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
