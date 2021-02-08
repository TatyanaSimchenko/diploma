<template>
  <div class="home">
    <MyHeader />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
export default {
  name: "Home",
  components: {
    MyHeader,
  },
};
</script>

<style lang="scss">
.router-link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: $BLACK;
}
</style>
