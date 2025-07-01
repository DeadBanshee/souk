<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
        <h1 class="text-4xl font-bold mb-4">Souk Frontend com Vue 3 + Vite 6 🎉</h1>
        <p class="text-lg mb-8">Bem-vindo ao seu projeto Vue 3 com Vite 6!</p>
        <p class="text-sm">Este é um exemplo básico de configuração.</p>

        <FeaturedProducts />

    </div>


</template>

<script setup>
import FeaturedProducts from '../components/featuredProducts.vue';
</script>