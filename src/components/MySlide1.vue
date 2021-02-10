<template>
  <div id="mySlide1">
    <div class="slide-container">
      <vue-glide type="carousel" perView="1">
        <vue-glide-slide class="slider">
          <div class="slider__wrapper">
            <div class="slider__info">
              <p class="slider__info-subtitle">Food</p>
              <h1 class="slider__info-title">
                Discover Restaurant & Delicious Food
              </h1>
              <label class="slider__label">
                <input
                  class="slider__label-input"
                  type="text"
                  placeholder="Search Restaurant, Food"
                />
                <button class="slider__label-button">GO</button>
              </label>
            </div>

            <img class="slider__img" src="@/assets/slide1.png" alt="" />
          </div>
          <button class="slider__button">
            <i class="slider__icon fas fa-map-marker-alt"></i> Rajshahi
          </button>
        </vue-glide-slide>
        <vue-glide-slide class="slider">
          <div class="slider__wrapper">
            <div class="slider__info">
              <p class="slider__info-subtitle">Food</p>
              <h1 class="slider__info-title">
                Discover Restaurant & Delicious Food
              </h1>
              <label class="slider__label">
                <input
                  class="slider__label-input"
                  type="text"
                  placeholder="Search Restaurant, Food"
                />
                <button class="slider__label-button">GO</button>
              </label>
            </div>

            <img class="slider__img" src="@/assets/slide1.png" alt="" />
          </div>
          <button class="slider__button">
            <i class="slider__icon fas fa-map-marker-alt"></i> Rajshahi
          </button>
        </vue-glide-slide>

        <template slot="control">
          <button class="control-btn control-btn--right" data-glide-dir="<">
            <img src="@/assets/arr-right.png" alt="prev" />
          </button>
          <button class="control-btn control-btn--left" data-glide-dir=">">
            <img src="@/assets/arr-left.png" alt="prev" />
          </button>
        </template>
      </vue-glide>
    </div>
  </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  name: "MySlide1",
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
};
</script>

<style lang="scss">
// @keyframes left {
//   0% {
//     left: 0;
//   }
//   50% {
//     left: 10px;
//   }
//   100% {
//     left: 0;
//   }
// }
.slide-container {
  margin: 0 auto;
  max-width: 1920px;
  overflow: hidden;
}
.control-btn {
  // width: 100%;
  color: red;
  position: relative;
  left: 1300px;
  top: -10px;
  &--right {
    margin-right: 15px;
    position: relative;
  }
  &--right::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border: 4px solid #fff;
    border-radius: 50%;
    top: -12px;
    left: -13px;
  }
  &--left {
    position: relative;
  }
  &--left::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border: 4px solid #fff;
    border-radius: 50%;
    top: -12px;
    left: 15px;
  }
}
.slider {
  &__wrapper {
    display: flex;
    width: 1180px;
    margin-left: 113px;
  }

  &__img {
    position: relative;
    top: 0px;
    left: -235px;
    width: 55%;
    z-index: -1;
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  &__info-subtitle {
    @include text($H150, 900, $BLUE);
    opacity: 0.1;
    position: relative;
    top: 58px;
    right: 7px;
  }
  &__info-title {
    @include text($H52, 700, $BLUE);
    width: 770px;
    margin-bottom: 30px;
  }
  &__label {
    position: relative;
  }
  &__label-input {
    outline: none;
    padding: 0px 186px 0px 15px;
    width: 550px;
    height: 62px;
    border: none;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  }
  &__label-button {
    position: absolute;
    display: inline-block;
    @include text($H30, 600, $WHITE);
    cursor: pointer;
    text-align: center;
    top: 5px;
    left: 359px;
    width: 186px;
    height: 52px;
    background-color: $LIHTGREEN;
    border-radius: 50px 0 0 0;
    &:hover {
      background-color: lighten($LIHTGREEN, 5%);
    }
    &:active {
      background-color: darken($LIHTGREEN, 5%);
    }
  }
  &__icon {
    color: $WHITE;
    // padding-left: 20px;
    margin-right: 10px;
  }
  &__button {
    display: inline-block;
    @include text($H30, 600, $WHITE);
    cursor: pointer;
    width: 280px;
    height: 52px;
    background-color: $LIHTGREEN;
    border-radius: 0 50px 50px 0;
    &:hover {
      background-color: lighten($LIHTGREEN, 5%);
    }
    &:active {
      background-color: darken($LIHTGREEN, 5%);
    }
  }
}
</style>
