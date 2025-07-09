<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
        <div>
            <Navbar />
        </div>

        <div class=" mt-16">
            <SliderHome />

            <div class="p-4">
                <FeaturedProducts />
            </div>
            
        </div>


    </div>


</template>

<script setup>
import FeaturedProducts from '../components/featuredProducts.vue';
import SliderHome from '../components/sliderHome.vue';
import Navbar from '../components/navbar.vue';
</script>