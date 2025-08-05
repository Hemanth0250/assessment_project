<template>
  <section id="services" class="py-16 bg-white">
    <!-- Section Title -->
    <div class="max-w-4xl px-4 mx-auto mb-12 text-center">
      <h2 class="relative inline-block text-sm font-semibold tracking-widest text-gray-500 uppercase">
        Services
        <span class="block w-20 h-1 mx-auto mt-2 bg-orange-500"></span>
      </h2>
      <h1 class="mt-2 text-5xl font-extrabold tracking-tight text-gray-900 uppercase font-raleway">
        FEATURED <span class="text-orange-500">SERVICES</span>
      </h1>
      <div class="flex justify-center">
        <p class="max-w-xl mx-auto mt-4 text-base text-center text-gray-600">
          Discover our range of professional services designed to help you succeed.
        </p>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="grid max-w-6xl gap-8 px-4 mx-auto md:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="relative transition-transform transform hover:-translate-y-1"
      >
        <!-- Image -->
        <div class="overflow-hidden rounded-lg">
          <img
            :src="service.image"
            :alt="service.title"
            class="object-cover w-full h-56 transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>

        <!-- Details Card -->
        <div
          class="relative z-10 px-6 pt-16 pb-8 -mt-12 text-center bg-white rounded-lg shadow-lg"
        >
          <!-- Icon -->
          <div
            class="absolute top-0 flex items-center justify-center w-16 h-16 text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 border-4 border-white rounded-full left-1/2"
          >
            <i :class="['bi', service.icon]"></i>
          </div>

          <!-- Title -->
          <h3 class="mt-2 text-lg font-bold text-gray-800 transition hover:text-orange-500">
            {{ service.title }}
          </h3>

          <!-- Description -->
          <p class="mt-2 text-sm text-gray-600">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Business Consulting',
    description:
      'Expert advice to help your business grow, improve efficiency, achieve your goals, and maximize profitability.',
    image: '/image/services-1.png',
    icon: 'bi-activity',
  },
  {
    title: 'Digital Marketing',
    description:
      'Comprehensive digital marketing solutions to boost your online presence and reach your target audience effectively.',
    image: '/image/services-2.png',
    icon: 'bi-broadcast',
  },
  {
    title: 'Creative Design',
    description:
      'Innovative design solutions to enhance your brand identity and create visually engaging experiences.',
    image: '/image/services-3.png',
    icon: 'bi-easel',
  },
]
</script>

<style scoped>
/* Optional: Smooth hover scale transition if not using Tailwind's built-in transition */
</style>
