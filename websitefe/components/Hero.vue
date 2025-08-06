<template>
  <section
    class="relative w-full h-screen text-white bg-center bg-cover"
    style="background-image: url('/image/hero-bg.png')" >
    <!-- Semi-transparent dark overlay (static) -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Hero Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center font-raleway"
    >
      <div
        class="opacity-0 animate-slide-up"
      >
        <h1 class="mb-4 text-4xl font-bold md:text-6xl hover:text-orange-500">
          PLAN. LAUNCH.
          <span class="text-orange-500 hover:text-white">GROW.</span>
        </h1>
        <p class="px-4 py-2 mb-5 text-2xl rounded-lg max-w-xxl md:text-l bg-white/10 hover:text-orange-500 hover:bg-white/50">
          We are team of talented designers making websites with Vue.js
        </p>
        <button
          @click="openVideo"
          class="px-6 py-2 font-semibold text-white transition bg-orange-500 rounded hover:bg-orange-600"
        >
          Get Started
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const openVideo = () => {
  window.open('https://www.youtube.com/', '_blank')
}
</script>

<style scoped>
@keyframes slide-up {
  0% {
    transform: translateY(2cm);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.5s ease-out forwards;
}
</style>
