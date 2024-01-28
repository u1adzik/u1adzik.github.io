<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';
import CustomCursor from './components/CustomCursor.vue';
</script>

<template>
  <Header />
  <transition name="fade" mode="out-in">
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" class="animate__animated animate__fadeIn" />
    </RouterView>
  </transition>

  <CustomCursor />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>