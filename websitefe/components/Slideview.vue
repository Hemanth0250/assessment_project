<template>
  <section id="testimonials" class="relative py-20 overflow-hidden text-white bg-gray-900">
    <img
      src="/image/testimonials/testimonials-bg.jpg"
      alt="Testimonials Background"
      class="absolute inset-0 z-0 object-cover w-full h-full opacity-20"
    />
    <!-- images -->
    <div class="relative z-10 max-w-6xl px-4 mx-auto" data-aos="fade-up" data-aos-delay="100">
      <Swiper
        :modules="[Pagination, Autoplay]"
        :loop="true"
        :speed="600"
        :autoplay="{ delay: 5000 }"
        :slides-per-view="1"
        :pagination="{ clickable: true }"
        class="testimonials-slider"
      >
        <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
          <br>
            <div class="max-w-xl mx-auto text-center">
            <div class="relative w-24 h-24 mx-auto mb-4">
              <img
              :src="testimonial.image"
              alt="Testimonial"
              class="w-24 h-24 rounded-full"
              />
              <div
              class="absolute inset-0 border-4 border-transparent rounded-full"
              style="box-shadow: 0 0 16px 8px rgba(255,255,255,0.3); filter: blur(6px); pointer-events: none;"
              ></div>
            </div>
            <h3 class="text-xl font-semibold">{{ testimonial.name }}</h3>
            <h4 class="mb-2 text-sm text-gray-400">{{ testimonial.role }}</h4>
            <div class="flex justify-center gap-1 mb-4">
              <i class="text-yellow-400 bi bi-star-fill" v-for="n in 5" :key="n"></i>
            </div>
            <p class="italic text-gray-200">
              <i class="bi bi-quote quote-icon-left"></i>
              {{ testimonial.quote }}
              <i class="bi bi-quote quote-icon-right"></i>
            </p>
            </div>
        </SwiperSlide>
        <br><br>

        <div class="mt-6 swiper-pagination"></div>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Saul Goodman',
    role: 'CEO & Founder',
    image: '/image/testimonials/testimonials-1.png',
    quote:
      'Saul helped us transform our business. His leadership and vision are unmatched.',
    },
    {
    name: 'Sara Wilsson',
    role: 'Designer',
    image: '/image/testimonials/testimonials-2.jpg',
    quote:
      'Working with this team was a fantastic experience. Their creativity brought our ideas to life.',
    },
    {
    name: 'Jena Karlis',
    role: 'Store Owner',
    image: '/image/testimonials/testimonials-3.jpg',
    quote:
      'The service was excellent and the results exceeded my expectations. Highly recommended!',
    },
    {
    name: 'Matt Brandon',
    role: 'Freelancer',
    image: '/image/testimonials/testimonials-4.jpg',
    quote:
      'Professional, reliable, and innovative. I look forward to working together again.',
    },
    {
    name: 'John Larson',
    role: 'Entrepreneur',
    image: '/image/testimonials/testimonials-5.jpg',
    quote:
      'Their expertise and dedication made a real difference in my project’s success.',
    },
];
</script>

<style scoped>
.testimonials-slider :deep(.swiper-pagination-bullet) {
  background-color: rgba(255, 255, 255, 0.5);
  opacity: 0.7;
  width: 12px;
  height: 12px;
}

.testimonials-slider :deep(.swiper-pagination-bullet-active) {
  background-color: #fff;
  opacity: 1;
}

.quote-icon-left,
.quote-icon-right {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.4);
}
.quote-icon-right {
  transform: scaleX(-1);
  display: inline-block;
}
</style>
