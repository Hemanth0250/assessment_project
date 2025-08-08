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

<template>
  <section id="services" class="py-16 bg-[#f6f9fe]">
    <!-- Section Title -->
    <div class="px-4 mx-auto mb-12 text-left max-w-7xl" data-aos="fade-up" data-aos-delay="100">
      <div class="flex items-center space-x-4">
        <h2 class="text-sm font-semibold tracking-widest text-gray-500 uppercase">
          Services
        </h2>
        <span class="block w-20 h-1 bg-orange-500"></span>
      </div>
      <h1 class="mt-2 text-xl font-extrabold tracking-tight text-gray-900 uppercase md:text-2xl font-raleway">
        Featured Services
      </h1>
    </div>

    <!-- Services Grid -->
    <div class="grid gap-8 px-4 mx-auto max-w-7xl md:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="relative transition-transform transform hover:-translate-y-1 group"
      >
        <!-- Image -->
        <div
          class="overflow-hidden rounded-lg"
          data-aos="fade-up"
          :data-aos-delay="200 + index * 100"
        >
          <img
            :src="service.image"
            :alt="service.title"
            class="object-cover w-full h-56 transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        <!-- Details Card -->
        <div
          class="relative z-10 px-6 pt-16 pb-8 -mt-12 text-center bg-white rounded-lg shadow-lg"
          data-aos="fade-up"
          :data-aos-delay="250 + index * 100"
        >
          <!-- Icon -->
          <div
            class="absolute top-0 flex items-center justify-center w-16 h-16 text-2xl text-white transition-colors duration-300 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 border-2 border-white rounded-full left-1/2 group-hover:bg-white group-hover:text-orange-500 group-hover:border-orange-500"
          >
            <i :class="['bi', service.icon]"></i>
          </div>

          <!-- Title -->
          <h3 class="mt-2 text-lg font-bold text-gray-800 transition group-hover:text-orange-500">
            {{ service.title }}
          </h3>

          <!-- Description -->
          <p class="mt-2 text-sm text-gray-600">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any custom animations or spacing if needed */
</style>
