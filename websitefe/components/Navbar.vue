<template>
  <nav
    :class="[
      'l-xl w-full z-50 transition-all duration-300',
      isSticky ? 'fixed top-0 bg-black/80 backdrop-blur' : 'absolute top-0 bg-transparent'
    ]"
  >
    <div class="flex items-center justify-between max-w-screen-xl px-6 py-4 mx-auto text-white font-raleway">
      <div class="text-2xl font-bold cursor-pointer" @click="scrollToTop">Dewi</div>

      <!-- Hamburger button -->
      <button @click="toggleMenu" class="z-50 md:hidden focus:outline-none">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path v-if="!isMenuOpen" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Desktop Nav -->
      <div class="items-center hidden gap-6 md:flex">
        <NuxtLink to="#hero" class="nav-link" :class="{ active: activeSection === 'home' }" @click="scrollToTop">Home</NuxtLink>
        <a href="#about" class="nav-link" :class="{ active: activeSection === 'about' }">About</a>
        <a href="#services" class="nav-link" :class="{ active: activeSection === 'services' }">Services</a>
        <a href="#portfolio" class="nav-link" :class="{ active: activeSection === 'portfolio' }">Portfolio</a>
        <NuxtLink to="#team" class="nav-link" :class="{ active: activeSection === 'team' }">Team</NuxtLink>
        <NuxtLink to="#contact" class="nav-link" :class="{ active: activeSection === 'contact' }">Contact</NuxtLink>

        <!-- Desktop Dropdown -->
        <div class="relative group">
          <button class="flex items-center gap-1 nav-link">
            Dropdown
            <i class="bi bi-chevron-down"></i>
          </button>
          <ul
            class="absolute hidden w-40 mt-2 text-black bg-white rounded shadow-lg group-hover:block"
          >
            <li><a href="#option1" class="block px-4 py-2 hover:bg-gray-200">Option 1</a></li>
            <li><a href="#option2" class="block px-4 py-2 hover:bg-gray-200">Option 2</a></li>
            <li><a href="#option3" class="block px-4 py-2 hover:bg-gray-200">Option 3</a></li>
          </ul>
        </div>

        <NuxtLink to="https://www.youtube.com/" class="px-3 py-1 border border-white rounded hover:bg-orange-500 hover:text-black hover:border-orange-500">Get Started</NuxtLink>
      </div>
    </div>

    <!-- Mobile Nav -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="px-6 py-6 text-white md:hidden bg-black/90 backdrop-blur">
        <ul class="flex flex-col space-y-4 text-sm uppercase">
          <li><NuxtLink to="#hero" class="block" :class="{ active: activeSection === 'home' }" @click="handleMobileNav">Home</NuxtLink></li>
          <li><a href="#about" class="block" :class="{ active: activeSection === 'about' }" @click="handleMobileNav">About</a></li>
          <li><NuxtLink to="#services" class="block" :class="{ active: activeSection === 'services' }" @click="handleMobileNav">Services</NuxtLink></li>
          <li><NuxtLink to="#portfolio" class="block" :class="{ active: activeSection === 'portfolio' }" @click="handleMobileNav">Portfolio</NuxtLink></li>
          <li><NuxtLink to="#team" class="block" :class="{ active: activeSection === 'team' }" @click="handleMobileNav">Team</NuxtLink></li>
          <li><NuxtLink to="#contact" class="block" :class="{ active: activeSection === 'contact' }" @click="handleMobileNav">Contact</NuxtLink></li>

          <!-- Mobile Dropdown -->
          <li>
            <button @click="toggleDropdown" class="flex items-center justify-between w-full">
              Dropdown
              <i :class="['bi', isDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down']"></i>
            </button>
            <ul v-show="isDropdownOpen" class="mt-2 ml-4 space-y-2 text-sm">
              <li><a href="#option1" class="block" @click="handleMobileNav">Option 1</a></li>
              <li><a href="#option2" class="block" @click="handleMobileNav">Option 2</a></li>
              <li><a href="#option3" class="block" @click="handleMobileNav">Option 3</a></li>
            </ul>
          </li>

          <li>
            <NuxtLink to="https://www.youtube.com/" class="block px-4 py-1 border border-white rounded hover:bg-white hover:text-black" @click="handleMobileNav">
              Get Started
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </nav>

  <!-- Scroll to Top Button -->
  <button
    @click="scrollToTop"
    :class="[
      'fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center text-white bg-orange-500 square rounded shadow-lg transition-opacity duration-300 hover:shadow-small hover:bg-orange-600',
      isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'
    ]"
  >
    <i class="text-2xl bi bi-arrow-up-short"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isSticky = ref(false)
const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)
const activeSection = ref('home')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (!isMenuOpen.value) isDropdownOpen.value = false
}
const closeMenu = () => {
  isMenuOpen.value = false
  isDropdownOpen.value = false
}
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  closeMenu()
}
const handleMobileNav = () => {
  closeMenu()
}

const handleScroll = () => {
  isSticky.value = window.scrollY > 100
  if (window.scrollY < 200) {
    activeSection.value = 'home'
  }
}

let observer

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  const sections = document.querySelectorAll('section[id]')
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          activeSection.value = id === 'hero' ? 'home' : id
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -20% 0px'
    }
  )

  sections.forEach((section) => observer.observe(section))
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.nav-link {
  @apply relative text-sm uppercase pb-1 hover:text-orange-400 transition;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #ff4c1e;
  transition: width 0.3s ease-in-out;
}
.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
