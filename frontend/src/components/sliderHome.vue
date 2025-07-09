<template>
  <div class="relative w-full aspect-[392/100] overflow-hidden">
    <div
      class="flex h-full transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="w-full flex-shrink-0 h-full"
      >
        <img
          :src="slide"
          class="w-full h-full object-cover"
          alt="Banner slide"
        />
      </div>
    </div>

    <!-- Navegação -->
    <button
      @click="prev"
      class="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white z-10"
    >
      ‹
    </button>
    <button
      @click="next"
      class="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white z-10"
    >
      ›
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

  const slides = [
    '/img/slider1.webp',
    '/img/slider2.webp',
    '/img/slider3.webp'
  ]

  const currentIndex = ref(0)

  function next() {
    currentIndex.value = (currentIndex.value + 1) % slides.length
  }

  function prev() {
    currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
  }
  
</script>
