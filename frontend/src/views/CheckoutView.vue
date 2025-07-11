<template>
  <div class="flex flex-col min-h-screen bg-gray-100 text-black">
    <Navbar />

    <div class="mt-20 bg-white shadow-xl rounded-2xl p-8 max-w-6xl mx-auto w-full">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Lista de produtos -->
        <div class="w-full lg:w-2/3">
          <h1 class="text-3xl font-bold mb-6 border-b pb-2">Products</h1>
          <ul>
            <li
              v-for="item in cartStore.products"
              :key="item.id"
              class="bg-white rounded-xl shadow-sm flex items-center p-4 gap-4 mb-4 hover:shadow-md transition"
            >
              <button
                @click="cartStore.removeFromCart(item.cart_item_id)"
                class="bg-red-500 text-white font-bold text-lg rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
              >
                &times;
              </button>

              <img
                :src="`http://localhost:8000${item.images[0]?.path}`"
                alt="Imagem do produto"
                class="w-20 h-20 rounded object-cover border"
              />

              <div class="flex-1">
                <p class="font-semibold text-lg text-gray-800">{{ item.name }}</p>
                <p class="text-sm text-gray-500 line-clamp-2">{{ item.description }}</p>
              </div>

              <div class="text-right">
                <p class="text-xl font-bold text-indigo-600">${{ item.price.toFixed(2) }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Resumo do pedido -->
        <div class="w-full lg:w-1/3 bg-gray-50 rounded-xl p-6 shadow-sm">
          <h2 class="text-2xl font-bold mb-6 border-b pb-2">Order Sumary</h2>

          <div class="flex justify-between text-gray-700 mb-4">
            <span>Subtotal</span>
            <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>

          <div class="flex justify-between text-gray-700 mb-4">
            <span>Shipping</span>
            <span class="text-green-600 font-semibold">Free</span>
          </div>

          <div class="border-t pt-4 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>

          <button
            class="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Buy Now
          </button>
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

const cartStore = useCartStore();

onMounted(async () => {
    await cartStore.fetchCart();
});

</script>