<template>
  <div class="services">
    <div class="services__writeup">
      <h2 class="services__tagline">Our service we can help you with</h2>
      <p class="services__caption">
        We have many interesting services with profesional team, that will help
        your work to be better
      </p>
    </div>
    <div class="services__card">
      <div class="services__card-lottie">
        <v-lottie-player
          name="scooterAnim"
          loop
          :animationData="require('../assets/json/ux-design.json')"
          :height="50"
          :width="50"
        />
      </div>
      <div class="services__card-info">
        <h3 class="services__card-title">UI/UX Design</h3>
        <p class="services__card-description">
          Create landing page, Mmobile app, and dashboard, prototyping,
          wireframing
        </p>
      </div>
    </div>
    <div class="services__card">
      <div class="services__card-lottie">
        <v-lottie-player
          name="scooterAnim"
          loop
          :animationData="require('../assets/json/development.json')"
          :height="50"
          :width="50"
        />
      </div>
      <div class="services__card-info">
        <h3 class="services__card-title">Development</h3>
        <p class="services__card-description">
          Create website and responsive website by HTML/CSS, react, webflow
        </p>
      </div>
    </div>
    <div class="services__card">
      <div class="services__card-lottie">
        <v-lottie-player
          name="scooterAnim"
          loop
          :animationData="require('../assets/json/branding-lottie.json')"
          :height="50"
          :width="50"
        />
      </div>
      <div class="services__card-info">
        <h3 class="services__card-title">Branding</h3>
        <p class="services__card-description">
          Create visual identity and maketing materials for your company...
        </p>
      </div>
    </div>
    <div class="services__card">
      <div class="services__card-lottie">
        <v-lottie-player
          name="scooterAnim"
          loop
          :animationData="require('../assets/json/media.json')"
          :height="50"
          :width="50"
        />
      </div>
      <div class="services__card-info">
        <h3 class="services__card-title">Motion Graphic</h3>
        <p class="services__card-description">
          Create motion graphic with smooth and high quality
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import VueLottiePlayer from "vue-lottie-player";
export default {
  components: {
    vLottiePlayer: VueLottiePlayer
  },
  data() {
    return {};
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },

    stop: function() {
      this.anim.stop();
    },

    play: function() {
      this.anim.play();
    },

    pause: function() {
      this.anim.pause();
    },

    onSpeedChange: function() {
      this.anim.setSpeed(this.animationSpeed);
    }
  }
};
</script>
