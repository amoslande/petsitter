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
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navbar-brand-logo {
  height: 60px;
  width: 60px;
}
</style>
