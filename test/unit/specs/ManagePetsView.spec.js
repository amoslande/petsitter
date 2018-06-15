import Vue from 'vue';
import ManagePetsView from '@/views/ManagePetsView';

describe('ManagePetsView.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ManagePetsView);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent).toEqual(
      'Welcome to Your Vue.js App',
    );
  });
});
