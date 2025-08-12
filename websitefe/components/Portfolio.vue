<script setup>
import { ref, computed } from 'vue'
import { NuxtLink } from '#components'


const categories = ['All', 'App', 'Product', 'Branding', 'Books']
const selectedCategory = ref('All')

const selectCategory = (cat) => {
  selectedCategory.value = cat
}

const portfolioItems = [
  { title: 'E-Commerce Mobile App', slug: 'e-commerce-mobile-app', category: 'App', description: 'A comprehensive mobile shopping platform with real-time inventory tracking and secure payment processing.', img: 'image/portfolio/app-1.jpg' },
  { title: 'Smart Home Controller', slug: 'smart-home-controller', category: 'Product', description: 'IoT device for centralized home automation with voice control and energy monitoring capabilities.', img: 'image/portfolio/product-1.jpg' },
  { title: 'Restaurant Brand Identity', slug: 'restaurant-brand-identity', category: 'Branding', description: 'Complete visual identity design including logo, menu design, and marketing materials for a fine dining establishment.', img: 'image/portfolio/branding-1.jpg' },
  { title: 'Educational Children\'s Book',slug: 'educational-childrens-book', category: 'Books', description: 'Interactive storybook with augmented reality features to enhance learning and engagement for young readers.', img: 'image/portfolio/books-1.jpg' },
  { title: 'Fitness Tracking Application', slug: 'fitness-tracking-application', category: 'App', description: 'Personal health monitoring app with workout planning, nutrition tracking, and social sharing features.', img: 'image/portfolio/app-2.jpg' },
  { title: 'Ergonomic Office Chair', slug: 'ergonomic-office-chair', category: 'Product', description: 'Premium adjustable seating solution with lumbar support and temperature-regulating fabric for optimal comfort.', img: 'image/portfolio/product-2.jpg' },
  { title: 'Tech Startup Visual Identity', slug: 'tech-startup-visual-identity', category: 'Branding', description: 'Modern corporate branding package including website design, business cards, and digital marketing assets.', img: 'image/portfolio/branding-2.jpg' },
  { title: 'Cookbook Collection', slug: 'cookbook-collection', category: 'Books', description: 'Curated recipe compilation featuring international cuisine with high-quality photography and cooking tips.', img: 'image/portfolio/books-2.jpg' },
  { title: 'Travel Planning Platform', slug: 'travel-planning-platform', category: 'App', description: 'Comprehensive travel app with itinerary planning, booking integration, and local experience recommendations.', img: 'image/portfolio/app-3.jpg' },
  { title: 'Solar-Powered Backpack', slug: 'solar-powered-backpack', category: 'Product', description: 'Sustainable outdoor gear with built-in solar panels for charging devices during outdoor adventures.', img: 'image/portfolio/product-3.jpg' },
  { title: 'Art Gallery Exhibition Branding', slug: 'art-gallery-exhibition-branding', category: 'Branding', description: 'Contemporary art exhibition identity with minimalist design approach and multimedia promotional materials.', img: 'image/portfolio/branding-3.jpg' },
  { title: 'Business Strategy Guide', slug: 'business-strategy-guide', category: 'Books', description: 'Comprehensive management handbook with case studies and practical frameworks for business growth and innovation.', img: 'image/portfolio/books-3.jpg' },
]



const filteredItems = computed(() => {
  if (selectedCategory.value === 'All') {
    return portfolioItems
  }
  return portfolioItems.filter(item => item.category === selectedCategory.value)
})
</script>

<template>
  <section id="portfolio" class="px-4 py-16 portfolio">
    <!-- Section Title -->
    <div class="px-4 mx-auto mb-12 text-left max-w-7xl " data-aos="fade-up" data-aos-delay="100">
      <div class="flex items-center space-x-4">
        <h2 class="text-sm font-semibold tracking-widest text-gray-500 uppercase">
          Portfolio
        </h2>
        <span class="block w-20 h-1 bg-orange-500"></span>
      </div>
      <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 uppercase md:text-2xl font-raleway">
        CHECK OUR PORTFOLIO
      </h1>
    </div>

    <!-- Filters -->
    <ul class="flex flex-wrap justify-center gap-4 mb-10 text-lg font-medium " data-aos="fade-up" data-aos-delay="200">
      <li
        v-for="cat in categories"
        :key="cat"
        class="cursor-pointer"
        :class="selectedCategory === cat ? 'text-orange-500' : 'hover:text-orange-500 text-gray-700'"
        @click="selectCategory(cat)"
      >
        {{ cat }}
      </li>
    </ul>

    <!-- Portfolio Grid -->
    <div class="grid items-center justify-between max-w-screen-xl grid-cols-1 gap-6 px-6 py-4 mx-auto sm:grid-cols-3 lg:grid-cols-3flex" data-aos="fade-up" data-aos-delay="250">
      <transition-group name="zoom" tag="div" class="contents">
        <div
          v-for="(item, index) in filteredItems"
          :key="item.title + index"
          class="relative overflow-hidden rounded shadow-md group"
        >
          <img
            :src="item.img"
            alt="Portfolio image"
            class="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 flex flex-col justify-between p-4 transition duration-300 bg-black opacity-0 bg-opacity-60 group-hover:opacity-100"
          >
            <h4 class="inline-block px-2 py-1 text-sm font-medium text-white bg-orange-500">{{ item.title }}</h4>
            <p class="text-base font-semibold text-center text-white">{{ item.description }}</p>
            <div class="flex justify-center gap-4 text-xl text-white">
              <a :href="item.img" target="_blank">
                <i class="bi bi-zoom-in"></i>
              </a>
              <NuxtLink :to="`/portfolio/${item.slug}`">
                <i class="bi bi-link-45deg"></i>
              </NuxtLink>

            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<style scoped>
.portfolio .bi {
  transition: color 0.3s;
}
.portfolio .bi:hover {
  color: var(--accent-color);
}

/* Zoom transition animation */
.zoom-enter-active, .zoom-leave-active {
  transition: all 0.4s ease;
}
.zoom-enter-from, .zoom-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
