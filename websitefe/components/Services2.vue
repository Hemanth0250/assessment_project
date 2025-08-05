<template>
  <section id="services-2" class="py-16 bg-gray-100">
    <!-- Section Title -->
    <div class="max-w-4xl px-4 mx-auto mb-12 text-center">
      <h2 class="relative inline-block text-sm font-semibold tracking-widest text-gray-500 uppercase">
        Services
        <span class="block w-20 h-1 mx-auto mt-2 bg-orange-500"></span>
      </h2>
      <h1 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 uppercase md:text-5xl font-raleway">
        CHECK OUR <span class="text-orange-500">SERVICES</span>
      </h1>
    </div>

    <!-- Services Grid: Forced 2 Columns, 3 Rows -->
    <div class="grid grid-cols-1 gap-6 px-4 mx-auto max-w-7xl sm:grid-cols-2">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="relative flex flex-col items-start h-full p-4 space-y-4 transition bg-white border border-gray-200 sm:flex-row sm:p-6 sm:space-y-0 sm:space-x-6 hover:border-orange-500 rounded-xl"
        :data-aos="'fade-up'"
        :data-aos-delay="100 * (index + 1)"
      >
        <i :class="`bi ${service.icon} text-3xl sm:text-4xl text-orange-500`"></i>
        <div>
          <h4 class="mb-2 text-xl font-semibold text-gray-800 transition sm:text-2xl hover:text-orange-500 font-raleway">
            <a href="#" class="stretched-link">{{ service.title }}</a>
          </h4>
          <p class="text-base leading-relaxed text-gray-600 sm:text-lg">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: 'bi-briefcase',
    title: 'Business Solutions',
    description:
      'We provide tailored business solutions to help you overcome challenges and achieve your goals efficiently.',
  },
  {
    icon: 'bi-card-checklist',
    title: 'Project Management',
    description:
      'Our team ensures your projects are delivered on time and within budget, with clear communication at every step.',
  },
  {
    icon: 'bi-bar-chart',
    title: 'Market Analysis',
    description:
      'Gain valuable insights into your market with our comprehensive research and data-driven strategies.',
  },
  {
    icon: 'bi-binoculars',
    title: 'Strategic Planning',
    description:
      'We help you define clear objectives and actionable plans to drive your business forward.',
  },
  {
    icon: 'bi-brightness-high',
    title: 'Creative Design',
    description:
      'Our creative team delivers innovative designs that make your brand stand out and engage your audience.',
  },
  {
    icon: 'bi-calendar4-week',
    title: 'Consulting Services',
    description:
      'Benefit from expert advice and guidance to optimize your operations and maximize growth opportunities.',
  },
];
</script>
