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
          <div class="header__wrapper__bottom-wrap__left">
            <div class="header__wrapper__bottom-wrap__left-l1">
              <h3>
                86
                <br />
                <span
                  >Project<br />
                  is pending</span
                >
              </h3>
              <img
                class="header__wrapper__bottom-wrap__left-l1-illy1"
                :src="require('../assets/svg/brown-blaze.svg')"
                alt=""
              />
            </div>

            <div class="header__wrapper__bottom-wrap__left-l2">
              <h3>
                453<br />
                <span>Awards</span>
              </h3>
              <img
                class="header__wrapper__bottom-wrap__left-l2-illy1"
                :src="require('../assets/svg/yellow-illy.svg')"
                alt=""
              />
            </div>

            <div class="header__wrapper__bottom-wrap__left-l3">
              <div class="header__wrapper__bottom-wrap__left-l3-top">
                <h3>Start Project</h3>
                <svg
                  width="26"
                  height="6"
                  viewBox="0 0 26 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.4" cx="3" cy="3" r="3" fill="white" />
                  <circle opacity="0.4" cx="13" cy="3" r="3" fill="white" />
                  <circle opacity="0.4" cx="23" cy="3" r="3" fill="white" />
                </svg>
              </div>
              <div class="header__wrapper__bottom-wrap__left-l3-order">
                <div class="header__wrapper__bottom-wrap__left-l3-order-svg">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29 8V6C29 5.46957 28.7893 4.96086 28.4142 4.58579C28.0391 4.21071 27.5304 4 27 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V8C3 8.53043 3.21071 9.03914 3.58579 9.41421C3.96086 9.78929 4.46957 10 5 10V22H4C3.73478 22 3.48043 22.1054 3.29289 22.2929C3.10536 22.4804 3 22.7348 3 23C3 23.2652 3.10536 23.5196 3.29289 23.7071C3.48043 23.8946 3.73478 24 4 24H15V26.175C14.3328 26.4109 13.7704 26.8751 13.4124 27.4855C13.0543 28.0959 12.9235 28.8132 13.0432 29.5107C13.1629 30.2082 13.5253 30.841 14.0663 31.2971C14.6074 31.7532 15.2923 32.0034 16 32.0034C16.7077 32.0034 17.3926 31.7532 17.9337 31.2971C18.4747 30.841 18.8371 30.2082 18.9568 29.5107C19.0765 28.8132 18.9457 28.0959 18.5876 27.4855C18.2296 26.8751 17.6672 26.4109 17 26.175V24H28C28.2652 24 28.5196 23.8946 28.7071 23.7071C28.8946 23.5196 29 23.2652 29 23C29 22.7348 28.8946 22.4804 28.7071 22.2929C28.5196 22.1054 28.2652 22 28 22H27V10C27.5304 10 28.0391 9.78929 28.4142 9.41421C28.7893 9.03914 29 8.53043 29 8ZM16 30C15.8022 30 15.6089 29.9414 15.4444 29.8315C15.28 29.7216 15.1518 29.5654 15.0761 29.3827C15.0004 29.2 14.9806 28.9989 15.0192 28.8049C15.0578 28.6109 15.153 28.4327 15.2929 28.2929C15.4327 28.153 15.6109 28.0578 15.8049 28.0192C15.9989 27.9806 16.2 28.0004 16.3827 28.0761C16.5654 28.1518 16.7216 28.28 16.8315 28.4444C16.9414 28.6089 17 28.8022 17 29C17 29.2652 16.8946 29.5196 16.7071 29.7071C16.5196 29.8946 16.2652 30 16 30ZM5 6H27V8H5V6Z"
                      fill="#1B1F24"
                    />
                  </svg>
                </div>
                <small>Your order is on its way!</small>
              </div>
              <div class="header__wrapper__bottom-wrap__left-l3-stack">
                <div
                  class="header__wrapper__bottom-wrap__left-l3-stack-stacked"
                ></div>
                <div
                  class="header__wrapper__bottom-wrap__left-l3-stack-stacked"
                ></div>
                <div
                  class="header__wrapper__bottom-wrap__left-l3-stack-stacked"
                ></div>
              </div>
              <img
                class="header__wrapper__bottom-wrap__left-l3-illy1"
                :src="require('../assets/svg/green-rain.svg')"
                alt=""
              />
            </div>
          </div>

          <div class="header__wrapper__bottom-wrap__right">
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
