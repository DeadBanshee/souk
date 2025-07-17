<template>
  

  <div class="fixed top-0 left-0 w-full z-50">
    
        <div v-if="lateralMenuStore.showLateralMenu" >
          <StoreLateralMenu />
        </div>
        
    <nav class="bg-gray-800 px-4 sm:px-6 py-3 shadow-md">
      <div class="max-w-7xl mx-auto flex items-center justify-between relative">

        <!-- Lado Esquerdo: Menu -->
        <div class="flex items-center gap-4">
          <img
            @click="lateralMenuStore.toggleLateralMenu"
            src="/img/main-menu.png"
            alt="Menu"
            class="h-6 cursor-pointer hover:opacity-80 transition"
          />

          

          <router-link to="/" class="text-white flex items-center gap-2 hover:text-gray-300">
            <img src="/img/store.png" alt="Logo" class="h-8" />
            <span class="text-xl font-bold">Souk</span>
          </router-link>
        </div>

        <!-- Centro: Barra de Pesquisa -->
        <div class="hidden sm:flex flex-1 justify-center px-4">
          <div class="w-full max-w-md relative">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Buscar produtos..."
              class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              v-if="productList"
              class="absolute left-0 right-0 bg-white shadow-lg rounded mt-2 z-50 max-h-60 overflow-auto"
            >
              <ul>
                <li
                  v-for="product in productList"
                  :key="product.id"
                  class="px-4 py-2 hover:bg-gray-100 text-gray-800"
                >
                  <router-link :to="'/product/' + product.id">
                    {{ product.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Lado Direito: User, Cart, Home -->
        <div class="flex items-center gap-4 text-white">
          <router-link to="/" class="font-semibold hover:text-gray-300">Home</router-link>

          <img
            src="/img/shopping.png"
            alt="Cart"
            @click="cartStore.showCart = !cartStore.showCart"
            class="h-7 cursor-pointer hover:opacity-80 transition"
          />

          <img
            src="/img/user.png"
            alt="User"
            @click="handleProfileClick()"
            class="h-7 cursor-pointer hover:opacity-80 transition"
          />

          <!-- Dropdown do Perfil -->
          <ul
            v-if="profileOptions"
            class="absolute right-0 top-14 w-48 bg-white rounded shadow-lg text-gray-700 z-50"
          >
            <li class="px-4 py-2 hover:bg-gray-100">
              <router-link to="/profile">Profile</router-link>
            </li>
            <li class="px-4 py-2 hover:bg-gray-100">
              <router-link to="/orders">Orders</router-link>
            </li>
            <li
              @click="authStore.logout()"
              class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div v-if="cartStore.showCart">
    <CartLateral />
  </div>
</template>


<script setup>
import { ref, watch } from 'vue';
import { useCartStore } from '../stores/cartStore';
import { useAuthStore } from '../stores/authStore';
import { useProductStore } from '../stores/productStore';
import CartLateral from './cartLateral.vue';

import StoreLateralMenu from './storeLateralMenu.vue';
import { useLateralMenuStore } from '../stores/lateralMenuStore';

import debounce from 'lodash/debounce'

const cartStore = useCartStore();
const authStore = useAuthStore();
const lateralMenuStore = useLateralMenuStore();
const productStore = useProductStore();

const productList = ref([]);

const searchQuery = ref('')
// HANDLE PROFILE OPTIONS
const profileOptions = ref(false) 

const handleProfileClick = () => {
    if(authStore.token !== null) {
        profileOptions.value = !profileOptions.value;
        return;
    }else{
        window.location.href = '/login';
    }
};


// HANDLE CONTACT SEARCH
let controller = null

watch(
  searchQuery,
  debounce(async (newQuery) => {
    if (controller) {
      controller.abort()
    }

    if (newQuery.trim() === '') {
      productList.value = null
      return
    }

    console.log('Searching for:', newQuery)

    controller = new AbortController()

    const result = await productStore.searchProducts(newQuery, controller.signal)
    productList.value = result
  }, 300)
)


</script>