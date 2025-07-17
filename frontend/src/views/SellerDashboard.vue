<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
    <Navbar />

    <div class="mt-10 flex flex-col items-center w-full px-4">
      <!-- Logo e Título -->
      <div class="flex flex-col items-center mb-8">
        <img src="/img/store.png" alt="Logo" class="w-24 h-24 mb-2" />
        <h1 class="text-4xl font-bold">Souk For Sellers</h1>
      </div>

      <!-- Área de Login e Cadastro -->
      <div class="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <!-- Sign Up -->
        <div class="flex-1">
            <div class="text-center mb-6 flex flex-col items-center">
                <h2 class="text-2xl font-bold mb-6 text-center">Sign Up as a <h2 class="text-green-500">Seller</h2></h2>
            </div>

          <div class="mb-4">
            <label class="block font-semibold mb-1">Username</label>
            <input
              v-model="signupUsername"
              type="text"
              placeholder="Enter your username"
              class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div class="mb-4">
            <label class="block font-semibold mb-1">E-mail</label>
            <input
              v-model="signupEmail"
              type="text"
              placeholder="Enter your username"
              class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div class="mb-6">
            <label class="block font-semibold mb-1">Password</label>
            <input
              v-model="signupPassword"
              type="password"
              placeholder="Enter your password"
              class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            @click="signup()"
            class="w-full bg-green-500 text-white py-2 rounded font-bold hover:bg-green-600 transition duration-200"
          >
            Create Account
          </button>
        </div>

        <!-- Divider -->
        <div class="hidden md:block w-px bg-gray-300"></div>

        <!-- Login -->
        <div class="flex-1">
          <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>

          <div class="mb-4">
            <label class="block font-semibold mb-1">Username</label>
            <input
              v-model="loginUsername"
              type="text"
              placeholder="Enter your username"
              class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div class="mb-6">
            <label class="block font-semibold mb-1">Password</label>
            <input
              v-model="loginPassword"
              type="password"
              placeholder="Enter your password"
              class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            @click="login()"
            class="w-full bg-blue-500 text-white py-2 rounded font-bold hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </div>
      </div>
    </div>

    <div class="mt-8 text-center">
      <p class="text-blue-500 hover:underline font-bold cursor-pointer"><router-link to="/login"> Click here to Login as an user. </router-link></p>
      <p class="mt-8 text-center text-gray-600">© 2023 Souk. All rights reserved.</p>
    </div>

  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue';
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore();


const loginUsername = ref('');
const loginPassword = ref('');
const signupUsername = ref('');
const signupPassword = ref('');
const signupEmail = ref('');

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