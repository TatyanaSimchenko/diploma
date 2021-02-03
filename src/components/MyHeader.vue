<template>
  <header class="header">
    <h1 class="header__title">Expice</h1>

    <a class="user">
      <img src="../assets/user-icon.png" alt="avatar" />
      <span class="user__name">
        user <span><i class="fas fa-angle-down"></i></span>
      </span>
    </a>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
}
.fa-angle-down {
  color: #000;
}
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  &__item {
    margin-right: 20px;
  }
}
</style>
