<template>
  <button id="back-to-top" @click="scrollToTop" :class="{ 'is-visible': isButtonVisible }">
    <font-awesome-icon :icon="['fas', 'arrow-up']" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      isButtonVisible: false,
      lastScrollPosition: 0
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    checkScroll() {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > this.lastScrollPosition && currentScrollPosition > 100) {
        this.isButtonVisible = true;
      } else {
        this.isButtonVisible = false;
      }
      this.lastScrollPosition = currentScrollPosition;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkScroll);
  }
}
</script>

<style scoped>
#back-to-top {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 30px;
  right: 30px;
  color: grey;
  border: none;
  background-color: black;
  transition: transform 0.05s, visibility 0.3s, opacity 0.3s, color 0.3s;
  opacity: 0;
  visibility: hidden;
  font-size: 30px;
}

#back-to-top.is-visible {
  opacity: 1;
  visibility: visible;
}

#back-to-top:hover {
  color: white;
}

#back-to-top:active {
  transform: scale(0.75);
}
</style>
