<template>
  <div class="custom-cursor">
    <div
      id="cursor-big"
      class="custom-cursor__ball custom-cursor__ball--big"
    ></div>
    <div
      id="cursor-small"
      class="custom-cursor__ball custom-cursor__ball--small"
    ></div>
  </div>
</template>

<script>
export default {
  name: "CustomCursor",
  props: {
    hoverClass: {
      type: String,
      default: "cursorHover"
    }
  },
  data() {
    return {
      cursorBig: null,
      cursorSmall: null,
      withHover: []
    };
  },
  watch: {
    "$route.path"() {
      console.log("route change");
      this.destroy();
      this.$nextTick(this.init);
    }
  },
  mounted() {
    console.log("mounted");
    this.$nextTick(this.init);
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    this.destroy();
  },
  methods: {
    init() {
      console.log("init");
      setTimeout(() => {
        this.cursorBig = document.getElementById("cursor-big");
        this.cursorSmall = document.getElementById("cursor-small");

        this.withHover = [
          ...document.getElementsByTagName("a"),
          ...document.getElementsByClassName(this.hoverClass)
        ];

        this.withHover.forEach(element => {
          element.addEventListener("mouseover", this.onMouseHover);
          element.addEventListener("mouseout", this.onMouseHoverOut);
        });
        document.addEventListener("mousemove", this.onMouseMove);
        document.addEventListener("mousedown", this.onMouseHover);
        document.addEventListener("mouseup", this.onMouseHoverOut);
        document.addEventListener("mouseenter", this.onMouseEnter);
        document.addEventListener("mouseleave", this.onMouseLeave);
      }, 100);
    },
    destroy() {
      console.log("destroy");
      this.withHover.forEach(element => {
        element.removeEventListener("mouseover", this.onMouseHover);
        element.removeEventListener("mouseout", this.onMouseHoverOut);
      });
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mousedown", this.onMouseHover);
      document.removeEventListener("mouseup", this.onMouseHoverOut);
      document.removeEventListener("mouseenter", this.onMouseEnter);
      document.removeEventListener("mouseleave", this.onMouseLeave);
    },
    onMouseEnter() {
      this.cursorBig.style.opacity = 1;
      this.cursorSmall.style.opacity = 1;
    },
    onMouseLeave() {
      this.cursorBig.style.opacity = 0;
      this.cursorSmall.style.opacity = 0;
    },
    onMouseMove(e) {
      this.cursorSmall.style.opacity = 1;
      gsap.to(this.cursorBig, 0.4, {
        x: e.clientX - 18.5,
        y: e.clientY - 18.5
      });
      gsap.to(this.cursorSmall, 0.1, {
        x: e.clientX - 4,
        y: e.clientY - 4
      });
    },
    onMouseHover() {
      gsap.to(this.cursorBig, 0.3, {
        scale: 3
      });
    },
    onMouseHoverOut() {
      gsap.to(this.cursorBig, 0.3, {
        scale: 1
      });
    }
  }
};
</script>

<style></style>
