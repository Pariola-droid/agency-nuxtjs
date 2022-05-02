<template>
  <transition>
    <div class="agency-works">
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
    </div>
  </transition>
</template>
<script>
export default {};
</script>
