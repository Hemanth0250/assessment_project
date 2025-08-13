<script setup>
const clients = [
  '/image/clients/client-1.png',
  '/image/clients/client-2.png',
  '/image/clients/client-3.png',
  '/image/clients/client-4.png',
  '/image/clients/client-5.png',
  '/image/clients/client-6.png',


]
</script>

<template>
  <section id="clients" class="py-12 bg-gray-50">
    <div class="px-4 mx-auto max-w-7xl" data-aos="fade-up">
      <div class="grid items-center justify-center grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6">
        <div
          v-for="(client, index) in clients"
          :key="index"
          class="flex items-center justify-center p-6 transition duration-300 opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
        >
          <img
            :src="client"
            alt="Client logo"
            class="w-auto max-h-12"
          />
        </div>
      </div>
    </div>
  </section>
</template>


