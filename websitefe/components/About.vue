<template>
  <section class="px-6 py-16 bg-white md:px-12" data-aos="fade-up" data-aos-offset="50">
    <div class="grid items-center max-w-screen-xl gap-10 mx-auto md:grid-cols-2">
      <!-- Left Column (Image) -->
      <div data-aos="fade-up" data-aos-delay="100">
        <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          We provide reliable solutions for your business needs
        </h2>
        <img src="/image/image1.png" alt="Team collaborating"
          class="object-cover w-full h-auto shadow-lg rounded-xl" />
        <ul>
          <li class="flex items-start gap-3" data-aos="fade-up" data-aos-delay="200">
            We ensure quality and professionalism in every project we undertake, delivering results that exceed expectations.
          </li>
          <br>
          <li data-aos="fade-up" data-aos-delay="300">
            Our team is dedicated to understanding your requirements and providing tailored solutions for your success.
          </li>
        </ul>
      </div>

      <!-- Right Column -->
      <div data-aos="fade-up" data-aos-delay="400">
        <p class="mb-6 italic text-gray-500">
          Our mission is to help you achieve your goals through innovative and effective strategies.
        </p>

        <ul class="mb-6 space-y-4 text-gray-700">
          <li class="flex items-start gap-3" data-aos="fade-up" data-aos-delay="500">
            <i class="text-orange-500 bi bi-check-circle-fill"></i>
            We offer comprehensive support and guidance throughout your journey.
          </li>
          <li class="flex items-start gap-3" data-aos="fade-up" data-aos-delay="600">
            <i class="text-orange-500 bi bi-check-circle-fill"></i>
            Our solutions are designed to maximize efficiency and growth for your business.
          </li>
        </ul>

        <p class="mb-6 text-gray-700" data-aos="fade-up" data-aos-delay="700">
          Partner with us to experience a seamless process and outstanding results that drive your business forward.
        </p>

        <!-- Video Section -->
        <div class="relative w-full max-w-2xl mx-auto overflow-hidden shadow-lg rounded-xl" data-aos="fade-up" data-aos-delay="800">
          <img src="/image/image3.png" alt="Team working" class="object-cover w-full h-[500px]" />

          <!-- Play Button -->
          <a 
            href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
            class="absolute inset-0 flex items-center justify-center text-white transition glightbox hover:scale-105"
          >
            <div class="flex items-center gap-2 px-4 py-2 bg-orange-500 rounded-full shadow-lg">
              <i class="text-3xl bi bi-play-circle"></i>
              <span class="hidden md:inline">Watch Video</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="px-6 py-16 bg-gray-100 md:px-12" data-aos="fade-up" data-aos-offset="50">
    <div class="grid max-w-screen-xl grid-cols-1 gap-6 mx-auto md:grid-cols-4">
      <StatCard icon="bi-emoji-smile" :endValue="250" label="Happy Clients" data-aos="fade-up" data-aos-delay="100"/>
      <StatCard icon="bi-journal-richtext" :endValue="150" label="Projects" data-aos="fade-up" data-aos-delay="200"/>
      <StatCard icon="bi-headset" :endValue="12000" label="Hours of Support" data-aos="fade-up" data-aos-delay="300"/>
      <StatCard icon="bi-people" :endValue="35" label="Hard Workers" data-aos="fade-up" data-aos-delay="400"/>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import StatCard from '@/components/StatCard.vue'

// Glightbox: Only load in browser
onMounted(async () => {
  if (typeof window !== 'undefined') {
    await import('glightbox/dist/css/glightbox.css')
    const GLightbox = (await import('glightbox')).default
    GLightbox({ selector: '.glightbox' })

    // AOS animations
    await import('aos/dist/aos.css')
    const AOS = (await import('aos')).default
    AOS.init({
      duration: 800, // ms
      offset: 20, // px from trigger point (≈ 2cm effect)
      easing: 'ease-out',
      once: true // only animate once
    })
  }
})
</script>

