<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// Static data (ideally fetch from backend/API later)
const items = [
  {
    title: 'E-Commerce Mobile App',
    slug: 'e-commerce-mobile-app',
    category: 'App',
    description: 'A comprehensive mobile shopping platform with real-time inventory tracking and secure payment processing.',
    img: '/image/portfolio/app-1.jpg'
  },
  {
    title: 'Smart Home Controller',
    slug: 'smart-home-controller',
    category: 'Product',
    description: 'IoT device for centralized home automation with voice control and energy monitoring capabilities.',
    img: '/image/portfolio/product-1.jpg'
  },
  {
    title: 'Restaurant Brand Identity',
    slug: 'restaurant-brand-identity',
    category: 'Branding',
    description: 'Complete visual identity design including logo, menu design, and marketing materials for a fine dining establishment.',
    img: '/image/portfolio/branding-1.jpg'
  },
  {
    title: "Educational Children's Book",
    slug: 'educational-childrens-book',
    category: 'Books',
    description: 'Interactive storybook with augmented reality features to enhance learning and engagement for young readers.',
    img: '/image/portfolio/books-1.jpg'
  },
  {
    title: 'Fitness Tracking Application',
    slug: 'fitness-tracking-application',
    category: 'App',
    description: 'Personal health monitoring app with workout planning, nutrition tracking, and social sharing features.',
    img: '/image/portfolio/app-2.jpg'
  },
  {
    title: 'Ergonomic Office Chair',
    slug: 'ergonomic-office-chair',
    category: 'Product',
    description: 'Premium adjustable seating solution with lumbar support and temperature-regulating fabric for optimal comfort.',
    img: '/image/portfolio/product-2.jpg'
  },
  {
    title: 'Tech Startup Visual Identity',
    slug: 'tech-startup-visual-identity',
    category: 'Branding',
    description: 'Modern corporate branding package including website design, business cards, and digital marketing assets.',
    img: '/image/portfolio/branding-2.jpg'
  },
  {
    title: 'Cookbook Collection',
    slug: 'cookbook-collection',
    category: 'Books',
    description: 'Curated recipe compilation featuring international cuisine with high-quality photography and cooking tips.',
    img: '/image/portfolio/books-2.jpg'
  },
  {
    title: 'Travel Planning Platform',
    slug: 'travel-planning-platform',
    category: 'App',
    description: 'Comprehensive travel app with itinerary planning, booking integration, and local experience recommendations.',
    img: '/image/portfolio/app-3.jpg'
  },
  {
    title: 'Solar-Powered Backpack',
    slug: 'solar-powered-backpack',
    category: 'Product',
    description: 'Sustainable outdoor gear with built-in solar panels for charging devices during outdoor adventures.',
    img: '/image/portfolio/product-3.jpg'
  },
  {
    title: 'Art Gallery Exhibition Branding',
    slug: 'art-gallery-exhibition-branding',
    category: 'Branding',
    description: 'Contemporary art exhibition identity with minimalist design approach and multimedia promotional materials.',
    img: '/image/portfolio/branding-3.jpg'
  },
  {
    title: 'Business Strategy Guide',
    slug: 'business-strategy-guide',
    category: 'Books',
    description: 'Comprehensive management handbook with case studies and practical frameworks for business growth and innovation.',
    img: '/image/portfolio/books-3.jpg'
  }
]

const item = items.find(p => p.slug === route.params.slug)
</script>

<template>
  <div>
    <!-- Top Hero Section -->
    <section
      class="relative text-white bg-center bg-cover page-title"
      data-aos="fade"
    >
      <!-- Background image layer -->
      <div
        class="absolute inset-0 bg-center bg-cover"
        style="background-image: url('/image/hero-bg.png')"
      >
        <div class="absolute inset-0 bg-black/60"></div>
      </div>

      <!-- Hero Content -->
      <div class="container relative z-10 py-20 text-center">
        <h1 class="text-4xl font-bold">{{ item.title }}</h1>
        <p class="mt-2 text-lg">{{ item.description }}</p>
        <nav class="mt-4 text-sm breadcrumbs">
          <ol class="inline-flex space-x-2">
            <li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
            <li>/</li>
            <li class="text-orange-500">Portfolio Details</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Portfolio Details Section -->
    <section id="portfolio-details" class="py-16 bg-white portfolio-details section">
      <div class="container px-4 mx-auto" data-aos="fade-up" data-aos-delay="100">
        <div class="flex flex-col gap-8 lg:flex-row">
          <!-- Left: Project Image -->
          <div class="w-full lg:w-2/3">
            <img
              :src="item.img"
              alt="Project image"
              class="object-cover w-full rounded-lg shadow-lg"
            />
          </div>

          <!-- Right: Project Info -->
          <div class="w-full space-y-6 lg:w-1/3">
            <div class="p-6 rounded-lg shadow-md bg-gray-50" data-aos="fade-up" data-aos-delay="200">
              <h3 class="mb-4 text-xl font-semibold">Project information</h3>
              <ul class="space-y-2 text-sm text-gray-700">
                <li><strong>Category:</strong> {{ item.category }}</li>
                <li><strong>Client:</strong> ASU Company</li>
                <li><strong>Project Date:</strong> 01 March, 2020</li>
                <li>
                  <strong>URL:</strong>
                  <a href="https://www.example.com" target="_blank" class="text-orange-500 hover:underline">www.example.com</a>
                </li>
              </ul>
            </div>

            <div class="portfolio-description" data-aos="fade-up" data-aos-delay="300">
              <h2 class="mb-2 text-xl font-bold">{{ item.title }}</h2>
              <p class="text-gray-700">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-title {
  background-size: cover;
  background-position: center;
  padding: 80px 0;
}
</style>
