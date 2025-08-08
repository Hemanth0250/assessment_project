<script setup>
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Client from '@/components/Client.vue'
import Features from '@/components/Features.vue'
import Services2 from '@/components/Services2.vue'
import Slideview from '@/components/Slideview.vue'
import Portfolio from '@/components/Portfolio.vue'
import Team from '@/components/Team.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section id="hero">
      <Hero />
    </section>

    <!-- About Section -->
    <section id="about">
        <About />
    </section>
    <!-- Services Section -->
    <section id="services">
        <Services />
    </section>
    <!-- Clients Section -->
    <section id="clients">
      <Client />
    </section>
    <!-- Features Section -->
    <section id="features">
      <Features />
    </section>
    <!-- Service2 section-->
     <section id="services2">
      <Services2 />
    </section>
    <!-- Slideview Section -->
     <section id="slideview">
      <Slideview />
    </section>
    <!-- Portfolio Section -->
    <section id="portfolio">
      <Portfolio />
    </section>
    <section id="team">
      <Team />
    </section>
    <!-- Contact Section -->
    <section id="contact">
      <Contact /> 
    </section>
    <!-- <section id="footer">
      <Footer />
    </section> -->
    
      
  </div>
</template>


