<script setup>
import { useHead } from '#app'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Header from '~/components/Header.vue'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css',
    },
  ],
})
</script>

<template>
  <div>
    <Navbar />
    
    <NuxtPage />
    <Footer />
    
  </div>
</template>

<style>
@import "~/assets/css/tailwind.css";
</style>
