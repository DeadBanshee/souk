<template>
    <div class="fixed top-0 right-0 w-1/4 h-full bg-white shadow-lg p-4 z-[9999] overflow-y-auto" >
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-bold mb-4">Shopping Cart</h2>
                <h2 @click="cartStore.showCart = false" class="text-lg cursor-pointer text-red-500 font-bold mb-4">X</h2>
            </div>
        <ul>
            <li
            v-for="item in cartStore.products"
            :key="item.id"
            class="bg-white rounded-xl shadow flex items-center p-3 gap-4 mb-4 transition hover:shadow-lg"
            >
                <button
                    @click="cartStore.removeFromCart(item.cart_item_id)"
                    class="bg-red-500 text-white font-bold text-xl rounded w-6 h-full hover:bg-red-600 hover:scale-110 transition"
                >
                    x 
                </button>

                <img
                    :src="`http://localhost:8000${item.images[0]?.path}`"
                    alt="Imagem do produto"
                    class="w-16 h-16 rounded object-cover"
                />

                <div class="flex-1">
                    <p class="font-semibold text-gray-800">{{ item.name }}</p>
                    <p class="text-sm text-gray-500 line-clamp-2">{{ item.description }}</p>
                </div>

                <div class="text-right">
                    <p class="text-lg font-bold text-indigo-600">${{ item.price.toFixed(2) }}</p>
                </div>
            </li>

        </ul>
        <div class="flex justify-between font-bold mt-4">
            <span>Total:</span>
            <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
        </div>

        <div class="absolute bottom-0 flex min-w-[28rem] flex-col space-y-4 gap-1 p-4 font-sans text-base font-normal text-black">
            <div role="button" @click="router.push('/'), authStore.logout()" class="bg-blue-500 text-white rounded-lg p-2 shadow-xl text-center font-bold hover:scale-105 hover:bg-blue-600 transition-all">
                Checkout
            </div>
        </div>


    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCartStore } from '../stores/cartStore'; 

const cartStore = useCartStore();

onMounted(() => {
    cartStore.fetchCart();
});

</script>