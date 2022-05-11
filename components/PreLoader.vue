<template>
  <div class="preloader">
    <div class="preloader-item one"></div>
    <div class="preloader-item two">
      <v-lottie-player
        name="scooterAnim"
        loop
        :animationData="require('../assets/json/blaze-preload.json')"
        style="height: 120px !important; width: 120px !important;"
      />
    </div>
    <div class="preloader-item three"></div>
  </div>
</template>
<style lang="scss" scoped>
.preloader {
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  z-index: 999999999;
  &-item {
    width: 33.33%;
    background: #1b1f24;
    display: grid;
    place-items: center;
  }
}
</style>
<script>
import VueLottiePlayer from "vue-lottie-player";
export default {
  components: {
    vLottiePlayer: VueLottiePlayer
  },
  data() {
    return {
      timeline: this.$gsap.timeline()
    };
  },
  mounted() {
    this.timeline
      .to(".preloader-item.one", {
        delay: 1.7,
        y: "-100%",
        duration: 1
      })
      .to(".preloader-item.two", {
        y: "-100%",
        duration: 1
      })
      .to(".preloader-item.three", {
        y: "-100%",
        duration: 1
      });
  }
};
</script>
