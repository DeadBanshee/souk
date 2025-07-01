<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Featured Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="product in products" :key="product.id" class="bg-white p-4 rounded shadow">
                <img
                :src="`http://localhost:8000${product.images[0]?.path}`"
                alt="Product Image"
                class="w-full h-48 object-cover mb-2"
                />
                <h3 class="text-lg font-semibold">{{ product.name }}</h3>
                <p class="text-gray-600">{{ product.description }}</p>
                <p class="text-xl font-bold mt-2">${{ product.price.toFixed(2) }}</p>
            </div>
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