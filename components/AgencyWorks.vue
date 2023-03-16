<template>
  <transition>
    <div class="agency-works">
      <intersect @enter="onEnter" @leave="onLeave">
        <div class="agency-works-card">
          <div class="agency-works-card__content">
            <h2 class="agency-works-card__type">App Design</h2>
            <h3 class="agency-works-card__title">
              Our product we’ve created before
            </h3>
            <p>
              We have many interesting services with profesional team, that will
              help your work to be better
            </p>
            <button>Explore more</button>
          </div>
          <div class="agency-works-card__image-container">
            <img src="@/assets/images/mockup-1.svg" alt="Mockup Image" />
          </div>
        </div>
      </intersect>
      <intersect @enter="onEnter" @leave="onLeave">
        <div class="agency-works-card card-reverse">
          <div class="agency-works-card__content">
            <h2 class="agency-works-card__type">Web Design</h2>
            <h3 class="agency-works-card__title">
              Our service we can help you
            </h3>
            <p>
              We have many interesting services with profesional team, that will
              help ypur work to be better
            </p>
            <button>Explore more</button>
          </div>
          <div class="agency-works-card__image-container bg-green">
            <img src="@/assets/images/mockup-2.svg" alt="Mockup Image" />
          </div>
        </div>
      </intersect>
    </div>
  </transition>
</template>

<style>
*,
html,
body,
a,
button,
div,
p,
span,
img {
  /* cursor: none; */
}
</style>
<script>
import Intersect from "vue-intersect";

export default {
  components: {
    intersect: Intersect
  },
  data() {
    return {
      timeline: this.$gsap.timeline({ paused: true })
    };
  },
  mounted() {
    this.timeline
      .from(".agency-works-card", {
        visibility: "hidden",
        opacity: 0,
        y: 100
      })
      .from(".agency-works-card__image-container", {
        scale: 0,
        duration: 1.14
      })
      .from(".agency-works-card__image-container img", {
        opacity: 0,
        y: 100,
        delay: 0.6
      });
  },
  methods: {
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
