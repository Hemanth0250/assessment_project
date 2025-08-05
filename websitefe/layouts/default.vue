<!-- layouts/default.vue -->
<template>
  <div>
    <!-- Example: You can put navbar or footer here -->
    <Navbar />

    <!-- Page content will be injected here -->
    <NuxtPage />

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>
