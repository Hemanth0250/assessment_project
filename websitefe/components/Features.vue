<template>
  <section id="features" class="py-16 bg-white">
    <div class="px-4 mx-auto max-w-7xl">
      <!-- Tabs -->
      <div class="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4" data-aos="fade-up" data-aos-delay="100">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="[
            'cursor-pointer border px-4 py-5 flex items-center justify-center text-center transition-all duration-300',
            activeTab === index
              ? 'bg-orange-600 text-white border-orange-600'
              : 'bg-white text-gray-800 hover:border-orange-500 hover:text-orange-600',
          ]"
        >
          <div class="flex flex-col items-center">
            <i :class="`${tab.icon} text-4xl md:text-5xl mb-2`"></i>
            <h4 class="hidden text-sm font-semibold lg:block">{{ tab.title }}</h4>
          </div>
        </div>
      </div>

      <!-- Tab Content -->
      <div v-if="tabs[activeTab]" data-aos="fade-up" data-aos-delay="200">
        <div class="grid items-center gap-8 md:grid-cols-2">
          <!-- Text -->
          <div>
            <h3 class="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
              {{ tabs[activeTab].heading }}
            </h3>
            <p v-if="tabs[activeTab].subtext" class="mb-4 italic text-gray-600">
              {{ tabs[activeTab].subtext }}
            </p>
            <ul class="mb-4 space-y-2">
              <li
                v-for="(point, idx) in tabs[activeTab].points"
                :key="idx"
                class="flex items-start gap-2"
              >
                <i class="mt-1 text-orange-600 bi bi-check2-all"></i>
                <span class="text-gray-700">{{ point }}</span>
              </li>
            </ul>
            <p v-if="tabs[activeTab].paragraph" class="text-gray-700">
              {{ tabs[activeTab].paragraph }}
            </p>
          </div>

          <!-- Image -->
          <div class="text-center">
            <img
              :src="tabs[activeTab].image"
              alt="Feature Image"
              class="w-full h-auto rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const tabs = [
  {
    icon: 'bi bi-binoculars',
    title: 'Powerful Analytics',
    heading: 'Gain Insights with Advanced Analytics Tools',
    subtext:
      'Our platform provides comprehensive analytics to help you make informed decisions and track your progress effectively.',
    points: [
      'Visualize your data with interactive dashboards.',
      'Monitor key performance indicators in real time.',
      'Generate detailed reports to identify trends and opportunities.',
    ],
    paragraph:
      'With our analytics tools, you can easily interpret complex data and turn insights into actionable strategies for your business growth.',
    image: '/image/features/working-1.png',
  },
  {
    icon: 'bi bi-box-seam',
    title: 'Seamless Integration',
    heading: 'Connect Effortlessly with Your Favorite Tools',
    subtext:
      'Integrate our solution with a wide range of third-party applications to streamline your workflow.',
    points: [
      'Supports integration with popular platforms and services.',
      'Automate repetitive tasks and save valuable time.',
      'Easily manage all your tools from a single dashboard.',
      'Enjoy hassle-free setup and configuration.',
    ],
    paragraph:
      'Our seamless integration capabilities ensure that you can continue using the tools you love while benefiting from enhanced productivity.',
    image: '/image/features/working-2.png',
  },
  {
    icon: 'bi bi-brightness-high',
    title: 'User-Friendly Interface',
    heading: 'Experience an Intuitive and Modern Design',
    subtext:
      'Our user interface is designed for simplicity and efficiency, making it easy for anyone to get started.',
    points: [
      'Clean and modern layout for effortless navigation.',
      'Customizable settings to suit your preferences.',
      'Responsive design for all devices.',
    ],
    paragraph:
      'Whether you are a beginner or an expert, our platform offers a smooth and enjoyable user experience across all devices.',
    image: '/image/features/working-3.png',
  },
  {
    icon: 'bi bi-command',
    title: 'Reliable Support',
    heading: 'Get Help When You Need It',
    subtext:
      'Our dedicated support team is always ready to assist you with any questions or issues.',
    points: [
      '24/7 customer support via chat, email, and phone.',
      'Comprehensive help center and documentation.',
      'Fast response times and effective solutions.',
    ],
    paragraph:
      'We are committed to providing you with the best possible support to ensure your success with our platform.',
    image: '/image/features/working-4.png',
  },
]
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
