<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
        <div>
            <Navbar />
        </div>

        <div class=" mt-16">

            <div class="p-4">
                <FeaturedProducts />
            </div>
            
        </div>


    </div>


</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '../stores/productStore';
import FeaturedProducts from '../components/featuredProducts.vue';
import Navbar from '../components/navbar.vue';

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProductsByCategory();
});
</script>