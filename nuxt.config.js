export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Blaze Agency",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Blaze Agency is a fun project built with Nuxt.js and Vue.js. Still in the learning phase - First Nuxtjs site.."
      },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.5.1.min.js",
        integrity: "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
        crossorigin: "anonymous",
        type: "text/javascript",
        body: true
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js",
        type: "text/javascript",
        crossorigin: "anonymous"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js",
        type: "text/javascript",
        crossorigin: "anonymous"
      }
    ]
  },

  server: {
    port: 3000,
    host: "0.0.0.0"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/styles/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/directives", "~/plugins/prototypes"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-gsap-module"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
