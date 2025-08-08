<script setup>
import { useHead } from '#app'
import Navbar from '@/components/Navbar.vue'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css',
    },
  ],
})``
</script>

<template>
  <NuxtLayout >
    <NuxtPage />
  </NuxtLayout >

  
</template>

<style>
@import "~/assets/css/tailwind.css";
</style>
