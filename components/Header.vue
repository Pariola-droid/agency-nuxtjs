<template>
  <transition>
    <header class="header">
      <div class="header__wrapper">
        <div class="header__wrapper__top-wrap">
          <div class="header__wrapper__top-wrap-text">
            <small>With Stitle</small>
            <h1>Let&apos;s start a project together</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus sed
              massa.
            </p>
          </div>
          <div class="header__wrapper__top-wrap-sub">
            <input type="email" name="" placeholder="Type your email address" />
            <button type="submit">Get Started</button>
          </div>
        </div>

        <div class="header__wrapper__bottom-wrap">
          <div class="header__wrapper__bottom-wrap-left"></div>
          <div class="header__wrapper__bottom-wrap__right">
            <img
              class="header__wrapper__bottom-wrap__right-bg"
              :src="require('../assets/svg/blue-bg.svg')"
              alt=""
            />
            <div class="header__wrapper__bottom-wrap__right-text">
              <h3>Better tech to better trade</h3>
            </div>
            <img
              class="header__wrapper__bottom-wrap__right-illy3"
              :src="require('../assets/svg/blue-illy3.svg')"
              alt=""
            />
            <img
              class="header__wrapper__bottom-wrap__right-illy1"
              :src="require('../assets/svg/blue-illy.svg')"
              alt=""
            />
            <img
              class="header__wrapper__bottom-wrap__right-illy2"
              :src="require('../assets/svg/blue-illy2.svg')"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  </transition>
</template>

<script>
export default {};
</script>
