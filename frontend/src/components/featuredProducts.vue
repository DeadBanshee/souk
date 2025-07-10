<template>
  <div class="px-4 py-8 max-w-7xl mx-auto">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Featured Products</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <router-link
        v-for="product in products"
        :key="product.id"
        :to="`/product/${product.id}`"
        class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
      >
        <img
          :src="`http://localhost:8000${product.images[0]?.path}`"
          alt="Product Image"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900 truncate">{{ product.name }}</h3>
          <p class="text-sm text-gray-600 line-clamp-2 mt-1">{{ product.description }}</p>
          <div class="mt-4 text-right">
            <span class="text-xl font-bold text-indigo-600">${{ product.price.toFixed(2) }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '../stores/productStore';

const products = ref([]);
const productStore = useProductStore();

onMounted(async () => {
    const response = await productStore.fetchProducts();
    products.value = response;

});

</script>