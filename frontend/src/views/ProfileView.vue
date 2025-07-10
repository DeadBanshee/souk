<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-200 text-black">
    <!-- Navbar no topo -->
    <Navbar />

    <!-- Conteúdo principal -->
    <div class="mt-10 bg-gray-100 rounded-lg mx-auto w-11/12 max-w-6xl flex">
      <!-- Menu lateral -->
      <div class="w-1/4">
        <LateralMenu />
      </div>

      <!-- Conteúdo da conta -->
      <div class="w-3/4 p-6 flex flex-col gap-4">
        <h1 class="text-3xl font-bold">Account information:</h1>

        <div class="bg-white p-4 rounded shadow">
          <p>data</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue';
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import LateralMenu from '../components/profilePageLateralMenu.vue';

const authStore = useAuthStore();


const username = ref('');
const email = ref('');

const login = async () => {

    try {
        await authStore.login(loginUsername.value, loginPassword.value);
        window.location.href = '/';
    } catch (error) {
        console.error('Login failed:', error);
    }
};

const signup = async () => {
    try {
        await authStore.signUp(signupUsername.value, signupEmail.value, signupPassword.value);
        window.location.href = '/';
    } catch (error) {
        console.error('Signup failed:', error);
    }
};

</script>