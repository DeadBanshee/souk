<template>
  <Navbar />
  <HomeView />
</template>

<script setup>
import { ref } from 'vue';
import HomeView from './views/HomeView.vue';
import Navbar from './components/navbar.vue';
</script>