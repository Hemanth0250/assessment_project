<template>
  <header
    :class="[
      'top-0 left-0 w-full z-50 transition-all duration-300',
      isSticky ? 'fixed bg-black/80 backdrop-blur' : 'absolute bg-transparent'
    ]"
    class="text-white bg-center bg-no-repeat bg-cover"
    style="background-image: url('/image/hero-bg.png');"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 z-0 bg-black/60"></div>

    <!-- Navbar -->
    <div class="relative z-10 max-w-screen-xl px-6 mx-auto">
      <!-- Top Bar -->
      <div class="flex items-center justify-between py-4 text-xl font-raleway ">
        <div class="text-2xl font-bold cursor-pointer hover:text-orange-500" @click="scrollToTop">Dewi</div>

        <!-- Hamburger Icon -->
        <button @click="isMenuOpen = !isMenuOpen" class="z-50 md:hidden focus:outline-none">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path v-if="!isMenuOpen" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Desktop Navigation -->
        <nav class="hidden gap-6 md:flex">
          <ul class="flex gap-6 text-sm uppercase">
            <li><NuxtLink to="/" class="nav-link" @click.native="scrollToTop">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
            <li><NuxtLink to="/services" class="nav-link">Services</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="nav-link">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/team" class="nav-link">Team</NuxtLink></li>
            <li class="relative group">
              <span class="flex items-center gap-1 cursor-pointer nav-link">
                Dropdown
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"/>
                </svg>
              </span>
              <ul class="absolute hidden w-40 py-2 mt-2 text-black bg-white rounded shadow-lg group-hover:block">
                <li><NuxtLink to="/option1" class="block px-4 py-2 hover:bg-gray-100">Option 1</NuxtLink></li>
                <li><NuxtLink to="/option2" class="block px-4 py-2 hover:bg-gray-100">Option 2</NuxtLink></li>
              </ul>
            </li>
            <li><NuxtLink to="/contact" class="nav-link">Contact</NuxtLink></li>
          </ul>

          <NuxtLink
            to="/get-started"
            class="px-4 py-1 transition border border-white rounded hover:bg-white hover:text-black">
            Get Started
          </NuxtLink>
        </nav>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="pb-4 text-white bg-black md:hidden bg-opacity-90">
        <ul class="space-y-3 text-sm uppercase">
          <li><NuxtLink to="/" class="block" @click.native="scrollToTop">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="block">About</NuxtLink></li>
          <li><NuxtLink to="/services" class="block">Services</NuxtLink></li>
          <li><NuxtLink to="/portfolio" class="block">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/team" class="block">Team</NuxtLink></li>
          <li><NuxtLink to="/option1" class="block">Option 1</NuxtLink></li>
          <li><NuxtLink to="/option2" class="block">Option 2</NuxtLink></li>
          <li><NuxtLink to="/contact" class="block">Contact</NuxtLink></li>
          <li>
            <NuxtLink
              to="/get-started"
              class="block px-4 py-1 transition border border-white rounded hover:bg-white hover:text-black">
              Get Started
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Hero Section -->
      <div class="flex flex-col items-center justify-center px-4 pt-12 pb-24 text-center font-raleway">
        <h1 class="mb-4 text-4xl font-bold md:text-6xl">PLAN. LAUNCH. GROW.</h1>
        <p class="max-w-xl text-lg text-orange-300 md:text-xl">
          We are team of talented designers making websites with Bootstrap
        </p>
        <button
          @click="openVideo"
          class="px-6 py-2 mt-6 text-sm font-semibold text-white transition duration-300 bg-orange-500 rounded hover:bg-orange-600 md:text-base">
          Get Started
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isSticky = ref(false)

const handleScroll = () => {
  isSticky.value = window.scrollY > 100
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const openVideo = () => {
  window.open('https://www.youtube.com/', '_blank')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
header {
  background-size: cover;
  background-position: center;
}
.nav-link {
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s ease;
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
