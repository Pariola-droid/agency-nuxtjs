<template>
  <transition>
    <footer class="footer">
      <div class="footer__top-wrap">
        <div class="footer__text">
          <h2>Everything begins with an idea."</h2>
        </div>
        <ul class="footer__socials">
          <li>
            <a href="http://"
              ><img :src="require('../assets/svg/facebook.svg')" alt=""
            /></a>
          </li>
          <li>
            <a href="http://"
              ><img :src="require('../assets/svg/instagram.svg')" alt=""
            /></a>
          </li>
          <li>
            <a href="http://"
              ><img :src="require('../assets/svg/snapchat.svg')" alt=""
            /></a>
          </li>
          <li>
            <a href="http://"
              ><img :src="require('../assets/svg/twitter.svg')" alt=""
            /></a>
          </li>
        </ul>
      </div>

      <div class="footer__middle-wrap">
        <div class="footer__listed">
          <h2>Stitle.</h2>
          <div class="footer__listed__sub">
            <input type="email" name="" placeholder="Email address" />
            <button type="submit">Get&apos;s Start</button>
          </div>
        </div>
        <div class="footer__listed">
          <h3>DESIGN</h3>
          <ul class="footer__listed__list">
            <li><a href="http://">Digital Branding</a></li>
            <li><a href="http://">E-commerce design</a></li>
            <li><a href="http://">UI/UX Design</a></li>
          </ul>
        </div>
        <div class="footer__listed">
          <h3>DEVELOP</h3>
          <ul class="footer__listed__list">
            <li><a href="http://">E-commerce development</a></li>
            <li><a href="http://">Web development</a></li>
            <li><a href="http://">No-code development</a></li>
          </ul>
        </div>
        <div class="footer__listed">
          <h3>GROW</h3>
          <ul class="footer__listed__list">
            <li><a href="http://">Research &#38; Strategy</a></li>
            <li><a href="http://">Visibility &#38; Awareness</a></li>
            <li><a href="http://">Campaign Management</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom-wrap">
        <div class="footer__bottom-name">
          <small>Stitle. DEVELOPMENTS LLC</small>
        </div>
        <ul class="footer__bottom-list">
          <li><a href="">terms</a></li>
          <li><a href="">privacy</a></li>
          <li><a href="">cookies</a></li>
        </ul>
      </div>
    </footer>
  </transition>
</template>

<script>
export default {};
</script>
