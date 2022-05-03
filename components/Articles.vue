<template>
  <transition>
    <section class="articles">
      <div class="articles__wrapper">
        <div class="articles__wrapper-texts">
          <h3>The complete beginner's guide for Ecommerce website</h3>
          <a href="">View all arlticles</a>
        </div>
        <div class="articles__wrapper__contents">
          <div class="articles__wrapper__contents-display">
            <img :src="require('../assets/svg/graph.svg')" alt="" />
            <h3>Spending data unlocked</h3>
            <p>
              We crunch the numbers from thousands of businesses across Europe.
              You won&apos;t find this information anywhere else.
            </p>
            <div class="articles__wrapper__contents-display-a">
              <a href=""
                ><svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 24.5L24.5 1"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.40625 1H24.5V20.0938"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <img
              class="articles__wrapper__contents-display-abs1"
              :src="require('../assets/svg/particles.svg')"
              alt=""
            />
          </div>
          
          <div class="articles__wrapper__contents-display">
            <img :src="require('../assets/svg/box.svg')" alt="" />
            <h3>Keeping it practical</h3>
            <p>
              Every Pleo download comes with a promise – they&apos;re always
              great to look at. Oh, and lots of practical takeaways that you can
              implement right away.
            </p>
            <div class="articles__wrapper__contents-display-a">
              <a href=""
                ><svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 24.5L24.5 1"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.40625 1H24.5V20.0938"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <img
              class="articles__wrapper__contents-display-abs2"
              :src="require('../assets/svg/sphere.svg')"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {};
</script>
