<template>
  <div id="mySlide1">
    <vue-glide type="carousel" perView="1" gap="20">
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
      </vue-glide-slide>

      <template slot="control">
        <button data-glide-dir="<">prev</button>
        <button data-glide-dir=">">next</button>
      </template>
    </vue-glide>
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
.slider {
  &__wrapper {
    display: flex;
    width: 1180px;
    // margin: 0 auto;
  }
  &__img {
    // max-width: 500px;
    width: 60%;
  }
  &__info {
    // max-width: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    // top: 150px;
    // margin-right: 211px;
    // padding-left: 178px;
    // margin-right: 50px;
    // padding-left: 50px;
  }
  &__info-subtitle {
    // @include text($H200, 900, $BLUE);
    font-size: 150px;
    font-weight: 900;
    color: $BLUE;
    opacity: 0.1;
    line-height: 136px;
  }
  &__info-title {
    // @include text($H72, 700, $BLUE);
    font-size: 52px;
    font-weight: 700;
    color: $BLUE;
    width: 760px;
    // width: 100%;
    // line-height: 90px;
  }
  &__label {
    position: relative;
  }
  &__label-input {
    outline: none;
    padding: 0px 186px 0px 15px;
    width: 585px;
    height: 70px;
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
    left: 389px;
    width: 190px;
    height: 59px;
    background-color: $LIHTGREEN;
    border-radius: 50px 0 0 0;
  }
}
</style>
