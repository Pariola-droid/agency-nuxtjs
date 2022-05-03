<template>
  <transition>
    <intersect @enter="onEnter" @leave="onLeave">
      <div class="services">
        <div class="services__writeup">
          <h2 class="services__tagline">
            <span class="services__tagline-one">Our services we can </span
            ><span class="services__tagline-two">help you with</span>
          </h2>
          <p class="services__caption">
            We have many interesting services with profesional team, that will
            help your work to be better
          </p>
        </div>
        <div class="services__card one">
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
        <div class="services__card two">
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
        <div class="services__card three">
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
        <div class="services__card four">
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
    </intersect>
  </transition>
</template>
<script>
import VueLottiePlayer from "vue-lottie-player";
import Intersect from "vue-intersect";
export default {
  components: {
    vLottiePlayer: VueLottiePlayer,
    intersect: Intersect
  },
  data() {
    return {
      timeline: this.$gsap.timeline({ paused: true })
    };
  },
  mounted() {
    this.timeline
      .to(".services__tagline-one", {
        opacity: 1,
        y: "0",
        ease: "Power2.easeout",
        stagger: 0.15
        //duration: 3
      })
      .to(".services__tagline-two", {
        opacity: 1,
        y: "0",
        stagger: 0.15,
        delay: 0.3
        //duration: 3
      })
      .from(".services__caption", {
        opacity: 0,
        y: "50px",
        stagger: 0.15,
        delay: 0.3
        //duration: 10
      })
      .from(".services__card.one", {
        opacity: 0,
        y: "350px",
        stagger: 0.15
      })
      .from(".services__card.four", {
        delay: 0.4,
        opacity: 0,
        y: 60,
        stagger: 0.15
      })
      .from(".services__card.three", {
        opacity: 0,
        y: 60,
        stagger: 0.15
      })
      .from(".services__card.two", {
        opacity: 0,
        y: 60,
        stagger: 0.15
      });
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
    },
    onEnter: function() {
      console.log("has entered");
      this.timeline.play();
    },
    onLeave: function() {
      console.log("has left");
      this.timeline.pause();
    }
  }
};
</script>
