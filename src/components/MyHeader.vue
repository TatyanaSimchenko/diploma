<template>
  <header class="header">
    <div class="header__background"></div>
    <div class="header__wrapper">
      <div class="header__logo">
        expice
      </div>

      <ul class="header__menu">
        <li class="header__menu-item">
          <a class="header__menu-link" href="#">Menu one</a>
        </li>
        <li class="header__menu-item">
          <a class="header__menu-link" href="#">Menu Two</a>
        </li>
        <li class="header__menu-item">
          <a class="header__menu-link" href="#">Menu Three</a>
        </li>
        <li class="header__menu-item">
          <a class="header__menu-link" href="#">Menu Four</a>
        </li>
      </ul>

      <div class="header__user">
        <a href="#" class="header__user-avatar">
          <img src="../assets/user-icon.png" alt="avatar" />
        </a>
        <a href="#" class="header__user-name"
          >User <span><i class="fas fa-angle-down"></i></span
        ></a>
      </div>
    </div>
    <MySlide1 />
  </header>
</template>

<script>
import MySlide1 from "./MySlide1.vue";
export default {
  name: "MyHeader",
  components: {
    MySlide1,
  },
};
</script>

<style lang="scss">
.header {
  background-color: $BIEGE;
  height: 1048px;
  &__background {
    width: 395px;
    background-color: $LIHTGREEN;
    height: 1048px;
    z-index: 0;
    position: absolute;
    right: 0;
  }
  &__wrapper {
    margin-top: 20px;
    display: flex;
    max-width: 1180px;
    width: 100%;
    padding: 0 15px;
    position: relative;
    margin: 0 auto;
    justify-content: space-between;
    flex-direction: row;
    z-index: 100;
  }
  &__logo {
    margin-right: 50px;
    @include text($H72, 900);
    color: $LIHTGREEN;
  }
  &__menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
  }
  &__menu-item:not(:last-of-type) {
    margin-right: 40px;
  }
  &__menu-link {
    // color: $BLUE;
    @include text($H16, 400, $BLUE);
  }
  &__user {
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
  }
  &__user-avatar {
    height: 40px;
    width: 40px;
    padding: 5px;
    margin-right: 10px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      border: 1px solid $GREEN;
      background-color: $GREEN;
      border-radius: 50%;
      top: -1px;
      right: -2px;
      transition: all 0.2s ease;
    }
    &:hover {
      &::before {
        background-color: $LIHTGREEN;
      }
    }
  }
  &__user-name {
    @include text($H16, 400, $WHITE);
    padding-top: 10px;
  }
}
.fa-angle-down {
  color: $WHITE;
  margin-left: 5px;
}
</style>
