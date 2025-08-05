<template>
  <section class="px-6 py-16 bg-white md:px-12">
    <div class="grid items-center max-w-screen-xl gap-10 mx-auto md:grid-cols-2">
      <!-- Left Column (Image) -->
      <div>
        <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          We provide reliable solutions for your business needs
        </h2>
        <img src="/image/image1.png" alt="Team collaborating" class="object-cover w-full h-auto shadow-lg rounded-xl" />
        <ul>
          <li class="flex items-start gap-3">
            We ensure quality and professionalism in every project we undertake, delivering results that exceed expectations.
          </li>
          <br>
          <li>
            Our team is dedicated to understanding your requirements and providing tailored solutions for your success.
          </li>
        </ul>
      </div>

      <div>
        <p class="mb-6 italic text-gray-500">
          Our mission is to help you achieve your goals through innovative and effective strategies.
        </p>

        <ul class="mb-6 space-y-4 text-gray-700">
          <li class="flex items-start gap-3">
            <i class="text-orange-500 bi bi-check-circle-fill" ></i>
            We offer comprehensive support and guidance throughout your journey.
          </li>
          <li class="flex items-start gap-3">
            <i class="text-orange-500 bi bi-check-circle-fill" ></i>
            Our solutions are designed to maximize efficiency and growth for your business.
          </li>
        </ul>

        <p class="mb-6 text-gray-700">
          Partner with us to experience a seamless process and outstanding results that drive your business forward.
        </p>

        <!-- Video Section -->
        <div class="relative w-full max-w-md mx-auto overflow-hidden shadow-lg rounded-xl">
          <img src="/image/image3.png" alt="Team working" class="object-cover w-90 h-90 " />
          <button class="absolute inset-0 flex items-center justify-center">
            <div class="p-4 transition bg-orange-500 rounded-full shadow-lg hover:scale-105">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="px-6 py-16 bg-gray-100 md:px-12">
    <div class="grid max-w-screen-xl grid-cols-1 gap-6 mx-auto md:grid-cols-4">
      <StatCard icon="bi-emoji-smile" :endValue="250" label="Happy Clients" />
      <StatCard icon="bi-journal-richtext" :endValue="150" label="Projects" />
      <StatCard icon="bi-headset" :endValue="12000" label="Hours of Support" />
      <StatCard icon="bi-people" :endValue="35" label="Hard Workers" />
    </div>
  </section>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid'
import StatCard from '@/components/StatCard.vue'
</script>
