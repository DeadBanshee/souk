<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-200 text-black">
    <!-- Navbar no topo -->
    <Navbar />

    <!-- Conteúdo principal -->
    <div class="mt-10 bg-gray-100 min-h-[40rem] rounded-lg mx-auto w-11/12 max-w-6xl flex">
      <!-- Menu lateral -->
      <div class="w-1/4">
        <LateralMenu />
      </div>

      <!-- Conteúdo da conta -->
      <div class="w-3/4 p-6 flex flex-col gap-4">
        <h1 class="text-3xl font-bold">Account information:</h1>

          <input class="w-full p-2 border mt-5 border-gray-300 rounded" type="text" v-model="username" placeholder="Username" />
          <input class="w-full p-2 border mt-5 border-gray-300 rounded" type="email" v-model="email" placeholder="Email" />
          <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-400">

      </div>

    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue';
import { computed, onMounted } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { useProfileStore } from '../stores/profileStore';
import LateralMenu from '../components/profilePageLateralMenu.vue';

const authStore = useAuthStore();
const profileStore = useProfileStore();

onMounted(async () => {
  if (authStore.token) {
    await profileStore.fetchProfile();
  } else {
    window.location.href = '/login';
  }
});

const username = computed({
  get: () => profileStore.profile.name || '',
  set: (val) => profileStore.profile.name = val
});

const email = computed({
  get: () => profileStore.profile.email || '',
  set: (val) => profileStore.profile.email = val
});
</script>