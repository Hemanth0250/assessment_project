<template>
  <div
    ref="card"
    class="flex flex-col items-center p-6 text-center transition bg-white shadow-md rounded-xl hover:shadow-lg"
  >
    <i :class="['bi', icon, 'text-4xl text-orange-500 mb-3']"></i>
    <div class="text-3xl font-bold text-gray-800">{{ count }}</div>
    <p class="mt-2 text-gray-600">{{ label }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  icon: String,
  endValue: Number,
  label: String
})

const count = ref(0)
const hasAnimated = ref(false)
const card = ref(null)

const animateCount = () => {
  const duration = 1500
  const stepTime = 16
  const increment = Math.ceil(props.endValue / (duration / stepTime))

  const timer = setInterval(() => {
    count.value += increment
    if (count.value >= props.endValue) {
      count.value = props.endValue
      clearInterval(timer)
    }
  }, stepTime)
}

const observe = () => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true
        animateCount()
        observer.disconnect()
      }
    },
    { threshold: 0.4 }
  )
  observer.observe(card.value)
}

watch(card, (el) => {
  if (el) observe()
})
</script>
