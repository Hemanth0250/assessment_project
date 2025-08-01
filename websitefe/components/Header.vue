<template>
  <header
    class="relative bg-cover bg-center bg-no-repeat min-h-screen text-white"
    style="background-image: url('/image/hero-bg.png');"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/60 z-0"></div>

    <!-- Navigation -->
    <div class="relative z-10 max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold">Dewi</div>

      <!-- Hamburger -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path v-if="!isMenuOpen" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <ul class="flex gap-6 uppercase text-sm">
          <li><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
          <li><NuxtLink to="/services" class="nav-link">Services</NuxtLink></li>
          <li><NuxtLink to="/portfolio" class="nav-link">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/team" class="nav-link">Team</NuxtLink></li>
          <li class="relative group">
            <span class="nav-link cursor-pointer flex items-center gap-1">
              Dropdown
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </span>
            <ul class="absolute hidden group-hover:block bg-white text-black mt-2 py-2 shadow-lg rounded w-40">
              <li><NuxtLink to="/option1" class="block px-4 py-2 hover:bg-gray-100">Option 1</NuxtLink></li>
              <li><NuxtLink to="/option2" class="block px-4 py-2 hover:bg-gray-100">Option 2</NuxtLink></li>
            </ul>
          </li>
          <li><NuxtLink to="/contact" class="nav-link">Contact</NuxtLink></li>
        </ul>
        <NuxtLink to="/get-started" class="border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition">
          Get Started
        </NuxtLink>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="relative z-10 md:hidden bg-black bg-opacity-80 text-white px-6 pb-4">
      <ul class="space-y-3 text-sm uppercase">
        <li><NuxtLink to="/" class="block">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="block">About</NuxtLink></li>
        <li><NuxtLink to="/services" class="block">Services</NuxtLink></li>
        <li><NuxtLink to="/portfolio" class="block">Portfolio</NuxtLink></li>
        <li><NuxtLink to="/team" class="block">Team</NuxtLink></li>
        <li><NuxtLink to="/option1" class="block">Option 1</NuxtLink></li>
        <li><NuxtLink to="/option2" class="block">Option 2</NuxtLink></li>
        <li><NuxtLink to="/contact" class="block">Contact</NuxtLink></li>
        <li><NuxtLink to="/get-started" class="block border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition">Get Started</NuxtLink></li>
      </ul>
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 flex flex-col items-center justify-center text-center mt-20 px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">PLAN. LAUNCH. GROW.</h1>
      <p style="color: coral;" class="text-lg md:text-xl max-w-x">We are team of talented designers making websites with Bootstrap</p>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 4px;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #ff4c1e;
  transition: width 0.3s ease-in-out;
}
.nav-link:hover::after,
.router-link-exact-active::after {
  width: 100%;
}
</style>
