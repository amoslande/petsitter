<template>
  <div id="app">
    <nav class="navbar bg-light">
      <a class="navbar-brand" href="/">
        <img src="./assets/logo.png" class="navbar-brand-logo" alt="">
      </a>
      <span class="navbar-text">
        Welcome to Petsitter
      </span>
    </nav>
    <router-view/>
    <nav class="app-footer-navbar navbar fixed-bottom bg-light">
      Icons made by
      <a href="http://www.freepik.com" title="Freepik">
        Freepik
      </a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
      is licensed by
      <a href="http://creativecommons.org/licenses/by/3.0/"
         title="Creative Commons BY 3.0"
         target="_blank">
        CC 3.0 BY
      </a>
    </nav>
  </div>
</template>

<script>
// eslint-disable-next-line
import { HUNGER_INTERVAL, PetsStore } from '@/stores/PetsStore.js';

export default {
  beforeDestroy() {
    clearInterval(this.hungerIntervalId);
  },
  created() {
    this.hungerIntervalId = setInterval(
      PetsStore.methods.hungerTick.bind(PetsStore),
      HUNGER_INTERVAL,
    );
  },
  data() {
    return {};
  },
  name: 'App',
};
</script>

<style>
  #app {
    color: #2c3e50;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 768px;
  }
  .navbar-brand-logo {
    height: 60px;
    width: 60px;
  }
  .app-footer-navbar {
    min-width: 768px;
  }
</style>
