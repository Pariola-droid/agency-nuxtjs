<template>
  <div
    :class="[
      'g-cursor',
      { 'g-cursor_hover': hover },
      { 'g-cursor_hide': hideCursor }
    ]"
  >
    <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
  </div>
</template>

<style lang="scss" scoped>
.g-cursor {
  position: absolute;
  z-index: 999999;
  top: 0;
  &_hide {
    opacity: 0;
    width: 60px;
    height: 60px;
    transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  }

  &__point {
    top: 0;
    left: 0;
    position: absolute;
    width: 30px;
    height: 30px;
    border: 2px solid #fff;
    pointer-events: none;
    user-select: none;
    border-radius: 100%;
    z-index: 55555555;
    backface-visibility: hidden;
    will-change: transform;
  }

  &_hover {
    .g-cursor__circle {
      opacity: 0;
      width: 60px;
      height: 60px;
      transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true
    };
  },
  computed: {
    cursorPoint: function() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${this
        .yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`;
    }
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener("mouseleave", e => {
      this.hideCursor = true;
    });
    document.addEventListener("mouseenter", e => {
      this.hideCursor = false;
    });
  },
  methods: {
    moveCursor: function(e) {
      this.xChild = e.pageX;
      this.yChild = e.pageY;
      setTimeout(() => {
        this.xParent = e.pageX - 15;
        this.yParent = e.pageX - 15;
      }, 100);
    }
  }
};
</script>
