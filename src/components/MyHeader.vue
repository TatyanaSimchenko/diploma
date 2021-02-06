<template>
  <header class="header">
    <div class="header__logo">
      expice
    </div>
    <div class="header__user">
      <a href="#" class="header__user-avatar">
        <img src="../assets/user-icon.png" alt="avatar" />
      </a>
      <a href="#" class="header__user-name"
        >User <span><i class="fas fa-angle-down"></i></span
      ></a>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style lang="scss">
.header {
  background-color: $BIEGE;
  height: 1048px;
  max-width: 1920px;
  padding-left: 14px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  &__user {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    width: 514px;
    height: 100vh;
    background-color: $LIHTGREEN;
  }
  &__user-avatar {
    height: 40px;
    width: 40px;
    padding: 5px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 7px;
      height: 7px;
      border: 1px solid $GREEN;
      background-color: $GREEN;
      border-radius: 50%;
      top: 0;
      right: 0;
      transition: all 0.2s ease;
    }
    &:hover {
      &::before {
        background-color: $LIHTGREEN;
      }
    }
  }
}
.header__logo {
  margin-top: 20px;
  margin-left: 113px;
  @include text($H72, 900);
  color: $LIHTGREEN;
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
