<script setup>
const teamMembers = [
  {
    name: 'Walter White',
    role: 'Chief Executive Officer',
    img: 'image/team/team-1.jpg',
    socials: ['twitter-x', 'facebook', 'instagram', 'linkedin']
  },
  {
    name: 'Sarah Jhonson',
    role: 'Product Manager',
    img: 'image/team/team-2.jpg',
    socials: ['twitter-x', 'facebook', 'instagram', 'linkedin']
  },
  {
    name: 'William Anderson',
    role: 'CTO',
    img: 'image/team/team-3.jpg',
    socials: ['twitter-x', 'facebook', 'instagram', 'linkedin']
  }
]
</script>

<template>
  <section id="team" class="py-16 bg-gray-100" data-aos="fade-up" data-aos-delay="100">
    <!-- Section Title -->
    <div class="px-4 mx-auto mb-12 max-w-7xl" data-aos="fade-up" data-aos-delay="100">
      <div class="flex items-center space-x-4">
        <h2 class="text-sm font-semibold tracking-widest text-gray-500 uppercase">
          Team
        </h2>
        <span class="block w-40 h-0.5 bg-orange-500"></span>
      </div>
      <h1 class="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 uppercase md:text-2xl font-raleway">
        CHECK OUR TEAM
      </h1>
    </div>

    <!-- Team Grid -->
    <div class="grid max-w-screen-xl grid-cols-1 gap-8 px-6 mx-auto sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
      <div
        v-for="(member, index) in teamMembers"
        :key="index"
        class="relative"
        :data-aos="'fade-up'"
        :data-aos-delay="100 * (index + 1)"
      >
        <!-- Image -->
        <div class="overflow-hidden rounded-md">
          <img :src="member.img" alt="Team member" class="object-cover w-full h-auto transition-transform duration-300 hover:scale-105" />
        </div>

        <!-- Info Card -->
        <div
          class="absolute p-4 bg-white rounded-md shadow-md left-4 right-4 -bottom-8"
        >
          <h4 class="relative pb-2 text-base font-bold">
            {{ member.name }}
            <span class="block w-12 h-0.5 bg-gray-400 absolute bottom-0 left-0"></span>
          </h4>
          <span class="text-sm italic text-gray-500">{{ member.role }}</span>
          <div class="absolute flex gap-2 right-4 bottom-4">
            <a v-for="icon in member.socials" :key="icon" href="#" class="text-gray-400 hover:text-orange-500">
              <i :class="`bi bi-${icon}`"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
