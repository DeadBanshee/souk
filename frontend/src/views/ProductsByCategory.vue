<template>
  <div class="flex flex-col min-h-screen bg-gray-100 text-black">
    <Navbar />

    <div class="mt-20 px-4 py-8 max-w-7xl mx-auto w-full">
      <!-- Título -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 class="text-3xl font-bold text-gray-800">Products by Category</h2>

        <!-- Filtros e ordenação -->
        <div class="flex flex-wrap gap-4 items-center">
          <select class="px-3 py-2 rounded-md border border-gray-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name</option>
          </select>

          <select class="px-3 py-2 rounded-md border border-gray-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Filter by Price</option>
            <option value="under-50">Under $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="above-100">Above $100</option>
          </select>
        </div>
      </div>

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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '../stores/productStore';
import Navbar from '../components/navbar.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const categoryId = route.params.category

const productStore = useProductStore();

const products = ref([]);

onMounted(async () => {
  products.value = await productStore.fetchProductsByCategory(categoryId);
  console.log(products.value);
});
</script>