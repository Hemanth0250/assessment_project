<script setup>
const openVideo = () => {
  window.open('https://www.youtube.com/', '_blank')
}
</script>

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
        <h1 class="mb-4 text-4xl font-bold md:text-5xl hover:text-orange-500">
          PLAN. LAUNCH. GROW.
        </h1>
        <p class="px-4 py-2 mb-5 text-xl rounded-lg max-w-xxl md:text-l">
          We are team of talented designers making websites with Vue.js
        </p>
      <div class="flex justify-center w-full">
  <div class="flex items-center gap-4">
    <!-- Get Started Button -->
    <button
      @click="openVideo"
      class="px-6 py-3 font-semibold text-white transition bg-orange-500 rounded hover:bg-orange-600"
    >
      Get Started
    </button>

    <!-- Watch Video Link -->
    <a
      href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
      class="flex items-center px-6 py-3 text-white transition rounded "
    >
      <i class="mr-2 text-4xl leading-none text-orange-500 bi bi-play-circle"></i>
      <span class="font-medium">Watch Video</span>
    </a>
  </div>
</div>

     
      </div>
    </div>
  </section>
</template>


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
