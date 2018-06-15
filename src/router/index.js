import Vue from 'vue';
import Router from 'vue-router';
import ManagePetsView from '@/views/ManagePetsView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ManagePetsView',
      component: ManagePetsView,
    },
  ],
});
