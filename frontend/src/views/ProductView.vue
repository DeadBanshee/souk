<template>
    <div class="flex flex-col justify-center min-h-screen bg-gray-100 text-black">
        <div>
            <Navbar />
        </div>

        <div class=" mt-16 bg-white shadow-md rounded-lg p-6 max-w-6xlxl mx-auto">
            <div class="p-4">

                <div v-if="product.images && product.images.length" class="flex flex-col sm:flex-row mt-4">
                    <img
                    v-if="product.images && product.images.length"
                    :src="`http://localhost:8000${product.images[0].path}`"
                    alt="Product Image"
                    class="w-1/3 object-cover aspect-square mb-4"
                    />

                    <div>
                        <h1 class="text-3xl font-bold"> {{ product.name }}</h1>

                        <p class="text-lg font-semibold">Price: ${{ product.price.toFixed(2) }}</p>
                        
                        <h2>{{ product.description }}</h2>

                        <button @click="cartStore.addToCart(product)" class="bg-blue-700 text-white font-bold rounded-lg p-2 hover:bg-blue-900 transition-all duration-300">+ Add to Cart</button>
                    </div>

                </div>

                

            </div>
            
        </div>


    </div>


</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '../stores/productStore';
import { useCartStore } from '../stores/cartStore';
import Navbar from '../components/navbar.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.id

const product = ref({});
const productStore = useProductStore();

const cartStore = useCartStore();

onMounted(async () => {
    const response = await productStore.fetchSingleProduct(productId);
    product.value = response;
});

</script>