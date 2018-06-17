import Vue from 'vue';
import Router from 'vue-router';
import ManagePetsView from '@/views/ManagePetsView';
import NewPetView from '@/views/NewPetView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ManagePetsView',
      component: ManagePetsView,
    },
    {
      path: '/new',
      name: 'NewPetView',
      component: NewPetView,
    },
  ],
});
