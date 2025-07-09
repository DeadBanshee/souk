<template>
    <div class="fixed top-0 right-0 w-1/4 h-full bg-white shadow-lg p-4 z-[9999]">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-bold mb-4">Shopping Cart</h2>
                <h2 @click="cartStore.showCart = false" class="text-lg cursor-pointer text-red-500 font-bold mb-4">X</h2>
            </div>
        <ul>
            <li v-for="item in cartStore.products" :key="item.id" class="flex justify-between mb-2">
                <div class="bg-gray-200 w-full flex items-center justify-between p-2 rounded">
                    <img :src="`http://localhost:8000${item.images[0]?.path}`" alt="Product Image" class="w-16 h-16 object-cover mr-2" />
                    <span>{{ item.name }}</span>
                    <span class="font-bold">${{ item.price.toFixed(2) }}</span>
                </div>
            </li>
        </ul>
        <div class="flex justify-between font-bold mt-4">
            <span>Total:</span>
            <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore'; 

const cartStore = useCartStore();

</script>