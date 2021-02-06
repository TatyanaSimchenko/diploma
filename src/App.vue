<template>
  <div class="app">
    <Home />
    <!-- <p>
      <router-link class="router-link" to="/AppMenuOne">Menu one</router-link>
    </p>
    <router-view></router-view> -->
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

<style lang="scss"></style>
