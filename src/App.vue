<template>
  <div class="app">
    <Home />
    <p>
      <router-link class="router-link" to="/AppMenuOne">Menu one</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./views/Home";
export default {
  components: {
    Home,
  },
};
</script>

<style lang="scss">
.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
