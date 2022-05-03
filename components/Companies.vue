<template>
  <transition>
    <section class="company">
      <div class="company__wrapper">
        <div class="company__wrapper-text">
          <h3>How 14 Companies Transformed Their Spend Management</h3>
          <button>Learn More</button>
        </div>
        <div class="company__wrapper-spheres">
          <img
            class="company__wrapper-spheres-atom"
            :src="require('../assets/svg/atom.svg')"
            alt=""
          />
          <img :src="require('../assets/svg/sphere-0.svg')" alt="" />
          <img :src="require('../assets/svg/sphere-1.svg')" alt="" />
          <img :src="require('../assets/svg/sphere-2.svg')" alt="" />

          <!-- sphere 2 -->
          <img
            class="company__wrapper-spheres-wb"
            :src="require('../assets/svg/warner bros.svg')"
            alt=""
          />
          <img
            class="company__wrapper-spheres-cv"
            :src="require('../assets/svg/canva.svg')"
            alt=""
          />

          <!-- sphere 1 -->
          <img
            class="company__wrapper-spheres-up"
            :src="require('../assets/svg/upwork.svg')"
            alt=""
          />
          <img
            class="company__wrapper-spheres-ab"
            :src="require('../assets/svg/adobe.svg')"
            alt=""
          />

          <!-- sphere 0 -->
          <img
            class="company__wrapper-spheres-cc"
            :src="require('../assets/svg/creative-cloud.svg')"
            alt=""
          />
          <img
            class="company__wrapper-spheres-mc"
            :src="require('../assets/svg/mailchimp.svg')"
            alt=""
          />
          <img
            class="company__wrapper-spheres-gg"
            :src="require('../assets/svg/google.svg')"
            alt=""
          />
        </div>

        <div class="company__wrapper-spheresMobile">
          <img :src="require('../assets/svg/sphere-mobile0.svg')" alt="" />
          <img :src="require('../assets/svg/sphere-mobile1.svg')" alt="" />

          <!-- sphere 1 -->
          <img
            class="company__wrapper-spheres-up"
            :src="require('../assets/svg/upwork.svg')"
            alt=""
          />
          <img
            class="company__wrapper-spheres-ab"
            :src="require('../assets/svg/adobe.svg')"
            alt=""
          />

          <!-- sphere 0 -->
          <img
            class="company__wrapper-spheres-cc"
            :src="require('../assets/svg/creative-cloud.svg')"
            alt=""
          />
          <img
            class="company__wrapper-spheres-mc"
            :src="require('../assets/svg/mailchimp.svg')"
            alt=""
          />
          <img
            class="company__wrapper-spheres-gg"
            :src="require('../assets/svg/google.svg')"
            alt=""
          />
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {};
</script>
