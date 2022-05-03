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
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {};
</script>
