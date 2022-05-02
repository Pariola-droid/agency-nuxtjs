import Vue from "vue";
import "splitting/dist/splitting.css";
import Splitting from "splitting";
import * as utils from "@/commons/utils";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import VueLottiePlayer from "vue-lottie-player";

Vue.use(Splitting);
Vue.use(LottieAnimation);
Vue.use(VueLottiePlayer);

for (const k in utils) {
  if (Object.hasOwnProperty.call(utils, k)) {
    const v = utils[k];
    Vue.prototype["$" + k] = v;
  }
}
