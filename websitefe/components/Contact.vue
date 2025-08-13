<template>
  <section id="contact" class="py-16 contact section" data-aos="fade-up" data-aos-delay="100">
    <!-- Section Title -->
    <div class="px-4 mx-auto mb-12 text-left max-w-7xl" data-aos="fade-up" data-aos-delay="100">
      <div class="flex items-center space-x-4">
        <h2 class="text-sm font-semibold tracking-widest text-gray-500 uppercase">
          CONTACT
        </h2>
        <span class="block w-40 h-0.5 bg-orange-500"></span>
      </div>
      <h1 class="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 uppercase md:text-2xl font-raleway">
        GET IN TOUCH
      </h1>
    </div>

    <!-- Main Grid Container -->
    <div class="grid gap-8 px-4 mx-auto max-w-7xl md:grid-cols-2 xl:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
      
      <!-- Info Boxes -->
      <div class="grid gap-6 sm:grid-cols-2 xl:col-span-2">
        <div
          v-for="(item, index) in contactInfo"
          :key="index"
          class="flex flex-col items-center p-6 text-center bg-white rounded shadow-md"
          :class="{ 'sm:col-span-2': item.fullWidth }"
          :data-aos-delay="200 + index * 100"
          data-aos="fade-up"
        >
          <div class="flex items-center justify-center w-16 h-16 mb-2 border-2 border-orange-300 border-dotted rounded-full">
            <i :class="['text-2xl text-orange-500', item.icon]"></i>
          </div>
          <h3 class="text-lg font-bold text-gray-700">{{ item.title }}</h3>
          <p class="text-sm text-gray-600">{{ item.value }}</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div data-aos="fade-up" data-aos-delay="500">
        <form class="p-6 space-y-8 bg-white rounded shadow-md">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <input
              type="text"
              name="name"
              class="form-input"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              class="form-input"
              placeholder="Your Email"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            class="form-input"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            rows="4"
            class="form-input"
            placeholder="Message"
            required
          ></textarea>
          <div class="text-center">
            <button type="submit" class="px-6 py-2 text-white transition bg-orange-500 rounded-full hover:bg-orange-400">
              Send Message
            </button>
          </div>
        </form>
      </div>

    </div>
  </section>
</template>

<script setup>
const contactInfo = [
  {
    icon: "bi bi-geo-alt",
    title: "Address",
    value: "no 25, 1st cross, jayanagar, Bangalore 560026",
    fullWidth: true, // makes it span full width like before
  },
  {
    icon: "bi bi-telephone",
    title: "Call Us",
    value: "+91 123 456 789",
    fullWidth: false,
  },
  {
    icon: "bi bi-envelope",
    title: "Email Us",
    value: "info@example.com",
    fullWidth: false,
  },
];
</script>

<style scoped>
.form-input {
  @apply w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-orange-500;
}
</style>
