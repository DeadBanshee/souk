<template>
  <div
    class="fixed top-0 left-0 h-screen w-64 bg-white shadow-2xl transition-transform duration-300 ease-in-out z-50"
    :class="{
      'translate-x-0': lateralMenuStore.showLateralMenu,
      '-translate-x-full': !lateralMenuStore.showLateralMenu
    }"
  >
    <div class="p-6 flex flex-col h-full">
      <!-- Header com título e botão fechar -->
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-semibold text-gray-800">Categories</h2>
        <button
          @click="lateralMenuStore.toggleLateralMenu"
          class="text-gray-500 hover:text-red-600 transition-colors text-xl"
          aria-label="Fechar menu"
        >
          &times;
        </button>
      </div>

      <!-- Lista de categorias -->
      <ul class="space-y-3 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        <li
          v-for="category in lateralMenuStore.categories"
          :key="category.id"
         class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors font-medium cursor-pointer"
        >
        <router-link :to="`/category/${category.id}`">
            {{ category.name }}
        </router-link>
        </li>
      </ul>

      <!-- Footer opcional -->
      <div class="mt-auto pt-4 text-sm text-gray-400">
        © 2025 Souk Marketplace
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useLateralMenuStore } from '../stores/lateralMenuStore'
const lateralMenuStore = useLateralMenuStore()


onMounted(() => {
  lateralMenuStore.fetchCategories();
});

</script>
