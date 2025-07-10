<template>

    <div class="fixed top-0 left-0 w-full z-50">
        <nav class="bg-gray-800 p-4">
            <div class="container mx-auto flex justify-between items-center">

                <div class="text-white text-lg font-bold ">
                    <router-link to="/" class="text-white flex flex-col sm:flex-row items-center gap-x-2 hover:text-gray-300">
                        <img src="/img/store.png" alt="Logo" class="h-8 cursor-pointer" />Souk
                    </router-link>
                </div>

                <input type="text" placeholder="Search..." class="px-2 py-1 rounded w-1/2 bg-gray-700 text-white" />
                <ul class="flex space-x-4 items-center">
                    <li><router-link to="/" class="text-white font-bold hover:text-gray-300">Home</router-link></li>
                    <li><img src="/img/shopping.png" alt="Logo" @click="cartStore.showCart = !cartStore.showCart" class="h-8 cursor-pointer" /></li>

                    <li><img src="/img/user.png" alt="Logo" @click="handleProfileClick()" class="h-8 cursor-pointer" /></li>

                    <ul v-if="profileOptions" class="absolute right-20 top-20 w-48 bg-white rounded shadow-lg">
                        <li class="px-4 py-2 hover:bg-gray-100"><router-link to="/profile">Profile</router-link></li>
                        <li class="px-4 py-2 hover:bg-gray-100"><router-link to="/orders">Orders</router-link></li>
                        <li @click="authStore.logout()" class="px-4 py-2 hover:bg-gray-100">Logout</li>
                    </ul>

                </ul>
            </div>
        </nav>
    </div>

    <div v-if="cartStore.showCart">
        <CartLateral />
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '../stores/cartStore';
import { useAuthStore } from '../stores/authStore';
import CartLateral from './cartLateral.vue';

const cartStore = useCartStore();

const authStore = useAuthStore();

const profileOptions = ref(false) 

const handleProfileClick = () => {
    if(authStore.token !== null) {
        profileOptions.value = !profileOptions.value;
        return;
    }else{
        window.location.href = '/login';
    }
};

</script>